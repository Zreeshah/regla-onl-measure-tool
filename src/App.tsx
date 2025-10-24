
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CalibrationProvider } from "@/contexts/CalibrationContext";
import { HelmetProvider } from "react-helmet-async";
import React, { lazy, Suspense } from "react";

// Lazy load all routes for code splitting
const Index = lazy(() => import("./pages/Index"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SaberDNIBlogPost = lazy(() => import("./pages/SaberDNIBlogPost"));
const LostDNIBlogPost = lazy(() => import("./pages/LostDNIBlogPost"));
const MetricSystemBlogPost = lazy(() => import("./pages/MetricSystemBlogPost"));
const NumAdimensionalesBlogPost = lazy(() => import("./pages/NumAdimensionalesBlogPost"));
const ComoSaberParoBlogPost = lazy(() => import("./pages/ComoSaberParoBlogPost"));
const ComoUsarReglaBlogPost = lazy(() => import("./pages/ComoUsarReglaBlogPost"));
const MKSSystemBlogPost = lazy(() => import("./pages/MKSSystemBlogPost"));
const SistemaNaturalBlogPost = lazy(() => import("./pages/SistemaNaturalBlogPost"));
const ClinometroBlogPost = lazy(() => import("./pages/ClinometroBlogPost"));
const SistemaAnglosajoBlogPost = lazy(() => import("./pages/SistemaAnglosajoBlogPost"));
const MedidorProfundidadBlogPost = lazy(() => import("./pages/MedidorProfundidadBlogPost"));
const ImprimirRegla = lazy(() => import("./pages/ImprimirRegla"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9b87f5]"></div>
  </div>
);

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
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/sobre-nosotros" element={<About />} />
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
                    <Route path="/imprimir" element={<ImprimirRegla />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </TooltipProvider>
          </HelmetProvider>
        </CalibrationProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
