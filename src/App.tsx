
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CalibrationProvider } from "@/contexts/CalibrationContext";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";

// Create the QueryClient outside of the component
const queryClient = new QueryClient();

// Ensure App is defined as a React function component
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <CalibrationProvider>
          <HelmetProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/blog/buscar-dni-por-nombre" element={<BlogPost />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </HelmetProvider>
        </CalibrationProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
