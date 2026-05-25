"use client";

import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import Image from 'next/image';
import reglaImage from '@/assets/Regla para Imprimir.png';

const PrintRulerClient: React.FC = () => {
  const handlePrint = () => { window.print(); };

  return (
    <>
      <Layout>
        <div className="container mx-auto px-4 py-8 print:py-0">
          <div className="print:hidden">
            <div className="max-w-6xl mx-auto mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Print Ruler — Free Printable Ruler Online</h1>
              <p className="text-lg text-gray-700 mb-6">Need a real ruler to measure objects and don&apos;t have one on hand? With our tool, you can easily print a real-size ruler, up to 29.7 cm or 11.7 inches, directly from your browser.</p>
              <div className="mb-8">
                <Button onClick={handlePrint} className="bg-ruler-primary hover:bg-ruler-secondary text-white">
                  <Printer className="mr-2 h-4 w-4" /> Print Ruler
                </Button>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <div className="lg:w-auto flex-shrink-0 flex justify-center lg:justify-start">
                  <Image src={reglaImage} alt="Print Ruler" className="h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[800px] w-auto object-contain" loading="lazy" />
                </div>
                <div className="flex-1 space-y-8">
                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Print a Ruler Correctly</h2>
                    <p className="text-gray-700 mb-4">Follow these steps to make sure your printed ruler is the exact size:</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Click the &quot;Print Ruler&quot; button at the top of the page.</li>
                      <li>In the print window, select A4 paper size (210 x 297 mm).</li>
                      <li>Make sure the scale is set to 100% (no adjustment or &quot;fit to real size&quot;).</li>
                      <li>Print in landscape or portrait orientation, as you prefer.</li>
                      <li>Once printed, verify with a physical ruler that the measurement is correct.</li>
                    </ol>
                    <p className="text-gray-700 mt-4">This way, you&apos;ll have a perfectly calibrated ruler of 29.7 cm or 11.7 inches.</p>
                  </section>
                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Printable Rulers</h2>
                    <p className="text-gray-700 mb-3">On our site you&apos;ll find different printable ruler models:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>30 cm ruler to print (centimeters and millimeters)</li>
                      <li>12 inch ruler to print</li>
                      <li>Combined metric and inch ruler</li>
                      <li>Printable ruler in PDF (ideal for saving and reusing)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">All rulers are designed with precise measurements and clear lines, perfect for home, school, or work.</p>
                  </section>
                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Useful Tips</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Use thick paper or cardstock if you want a more durable ruler.</li>
                      <li>If your printer slightly changes the scale, you can manually adjust the zoom until it matches a known measurement object.</li>
                      <li>You can laminate the printed ruler to extend its durability.</li>
                    </ul>
                  </section>
                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Advantages of Printing Your Own Ruler</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>No need to buy a physical one.</li>
                      <li>Available anytime and anywhere.</li>
                      <li>Completely free and precise.</li>
                      <li>You can customize it in centimeters, inches, or both.</li>
                    </ul>
                  </section>
                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Download or Print Your Ruler</h2>
                    <p className="text-gray-700 mb-4">Click the button below to print your ruler directly or download it as PDF. Perfect for measuring craft projects, sewing, technical drawing, or school use.</p>
                    <Button onClick={handlePrint} className="bg-ruler-primary hover:bg-ruler-secondary text-white">
                      <Printer className="mr-2 h-4 w-4" /> Print Ruler Now
                    </Button>
                  </section>
                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">One Last Thing</h2>
                    <p className="text-gray-700">Remember to always verify that the print is at 100% scale to ensure precision. At Online-Ruler.Onl, we want you to always have a reliable, practical, and free printable ruler just a click away.</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden print:block print:m-0 print:p-0">
            <Image src={reglaImage} alt="Print Ruler" className="w-auto h-auto max-w-none" style={{ width: 'auto', height: 'auto' }} />
          </div>
        </div>
      </Layout>
      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body, html { margin: 0; padding: 0; width: 210mm; height: 297mm; }
          header, footer, nav { display: none !important; }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          .print\\:m-0 { margin: 0 !important; }
          .print\\:p-0 { padding: 0 !important; }
          img { max-width: none !important; width: auto !important; height: auto !important; display: block; }
        }
      `}</style>
    </>
  );
};

export default PrintRulerClient;
