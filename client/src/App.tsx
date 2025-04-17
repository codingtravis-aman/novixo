import { useEffect, useState } from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DevOps from "./pages/DevOps";
import InfluencerMarketing from "./pages/InfluencerMarketing";
import Careers from "./pages/Careers";
import UXUIDesign from "./pages/UXUIDesign";
import WebDevelopment from "./pages/WebDevelopment";
import DataAnalysis from "./pages/DataAnalysis";
import CyberSecurity from "./pages/CyberSecurity";
import MobileDevelopment from "./pages/MobileDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { motion, AnimatePresence } from "framer-motion";

function Router() {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <Cursor />
      </div>
      <div className="progress-bar fixed top-0 left-0 h-1 bg-primary z-50" style={{ width: '0%' }} />
      <Navbar />
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/devops" component={DevOps} />
          <Route path="/influencer-marketing" component={InfluencerMarketing} />
          <Route path="/careers" component={Careers} />
          <Route path="/ux-ui-design" component={UXUIDesign} />
          <Route path="/web-development" component={WebDevelopment} />
      <Route path="/data-analysis" component={DataAnalysis} />
      <Route path="/cyber-security" component={CyberSecurity} />
          <Route path="/mobile-development" component={MobileDevelopment} />
          <Route path="/digital-marketing" component={DigitalMarketing} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/insights" component={Insights} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <Router />;
}

export default App;