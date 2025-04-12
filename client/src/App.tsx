import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import DevOps from "@/pages/DevOps";
import InfluencerMarketing from "@/pages/InfluencerMarketing";
import Careers from "@/pages/Careers";
import UXUIDesign from "@/pages/UXUIDesign";
import WebDevelopment from "@/pages/WebDevelopment";
import MobileDevelopment from "@/pages/MobileDevelopment";
import DigitalMarketing from "@/pages/DigitalMarketing";
import CaseStudies from "@/pages/CaseStudies";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

function Router() {
  const [isMobile, setIsMobile] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!isMobile && <Cursor />}
      <div className="progress-bar" />
      <Navbar />
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/devops" component={DevOps} />
          <Route path="/influencer-marketing" component={InfluencerMarketing} />
          <Route path="/careers" component={Careers} />
          <Route path="/ux-ui-design" component={UXUIDesign} />
          <Route path="/web-development" component={WebDevelopment} />
          <Route path="/mobile-development" component={MobileDevelopment} />
          <Route path="/digital-marketing" component={DigitalMarketing} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </>
  );
}

function App() {
  return <Router />;
}

export default App;
