
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
import SaberDNIBlogPost from "./pages/SaberDNIBlogPost";
import LostDNIBlogPost from "./pages/LostDNIBlogPost";
import MetricSystemBlogPost from "./pages/MetricSystemBlogPost";
import NumAdimensionalesBlogPost from "./pages/NumAdimensionalesBlogPost";
import ComoSaberParoBlogPost from "./pages/ComoSaberParoBlogPost";
import ComoUsarReglaBlogPost from "./pages/ComoUsarReglaBlogPost";
import MKSSystemBlogPost from "./pages/MKSSystemBlogPost";
import SistemaNaturalBlogPost from "./pages/SistemaNaturalBlogPost";
import ClinometroBlogPost from "./pages/ClinometroBlogPost";
import SistemaAnglosajoBlogPost from "./pages/SistemaAnglosajoBlogPost";
import MedidorProfundidadBlogPost from "./pages/MedidorProfundidadBlogPost";

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
                  <Route path="/blog/saber-dni-persona" element={<SaberDNIBlogPost />} />
                  <Route path="/blog/perdido-dni" element={<LostDNIBlogPost />} />
                  <Route path="/blog/sistema-metrico-decimal" element={<MetricSystemBlogPost />} />
                  <Route path="/blog/numeros-adimensionales" element={<NumAdimensionalesBlogPost />} />
                  <Route path="/blog/como-saber-cuanto-paro" element={<ComoSaberParoBlogPost />} />
                  <Route path="/blog/como-usar-regla" element={<ComoUsarReglaBlogPost />} />
                  <Route path="/blog/sistema-mks" element={<MKSSystemBlogPost />} />
                  <Route path="/blog/sistema-natural-unidades" element={<SistemaNaturalBlogPost />} />
                  <Route path="/blog/clinometro" element={<ClinometroBlogPost />} />
                  <Route path="/blog/sistema-anglosajon-unidades" element={<SistemaAnglosajoBlogPost />} />
                  <Route path="/blog/medidor-profundidad" element={<MedidorProfundidadBlogPost />} />
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
