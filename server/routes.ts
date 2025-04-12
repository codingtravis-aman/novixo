import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Return success response
      return res.status(201).json({
        message: "Message received successfully",
        contactId: contactMessage.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      }
      
      // Handle other errors
      console.error("Error saving contact message:", error);
      return res.status(500).json({ message: "Failed to save your message" });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getAllContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      return res.status(500).json({ message: "Failed to retrieve messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
