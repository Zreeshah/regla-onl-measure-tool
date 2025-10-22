import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import reglaImage from '@/assets/Regla para Imprimir.png';

const ImprimirRegla: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Imprimir Regla - Regla en Línea para Imprimir Gratis | Regla.Onl</title>
        <meta name="description" content="Imprime una regla de 30 cm o 12 pulgadas gratis. Regla para imprimir en tamaño real, calibrada y lista para usar en casa o la escuela." />
        <meta name="keywords" content="imprimir regla, regla para imprimir, regla imprimible, regla 30 cm, regla 12 pulgadas" />
        <link rel="canonical" href="https://regla.online/imprimir" />
      </Helmet>

      <Layout>
        <div className="container mx-auto px-4 py-8 print:py-0">
          <div className="print:hidden">
            <div className="max-w-6xl mx-auto mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Imprimir Regla – Regla en Línea para Imprimir Gratis
              </h1>

              <p className="text-lg text-gray-700 mb-6">
                ¿Necesitas una regla real para medir objetos y no tienes una a mano? Con nuestra herramienta puedes imprimir una regla fácilmente en tamaño real, hasta 29,7 cm o 11,7 pulgadas, directamente desde tu navegador.
              </p>

              <div className="mb-8">
                <Button
                  onClick={handlePrint}
                  className="bg-ruler-primary hover:bg-ruler-secondary text-white"
                >
                  <Printer className="mr-2 h-4 w-4" />
                  Imprimir Regla
                </Button>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <div className="lg:w-auto flex-shrink-0">
                  <img
                    src={reglaImage}
                    alt="Imprimir Regla"
                    className="h-auto max-h-[800px] w-auto"
                  />
                </div>

                <div className="flex-1 space-y-8">

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Cómo Imprimir una Regla Correctamente
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Sigue estos pasos para asegurarte de que tu regla impresa tenga el tamaño exacto:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Haz clic en el botón "Imprimir Regla" en la parte superior de la página.</li>
                      <li>En la ventana de impresión, selecciona el tamaño de papel A4 (210 x 297 mm).</li>
                      <li>Asegúrate de que la escala esté al 100% (sin ajuste o "ajuste al tamaño real").</li>
                      <li>Imprime en orientación horizontal o vertical, según prefieras.</li>
                      <li>Una vez impresa, verifica con una regla física que la medida sea correcta.</li>
                    </ol>
                    <p className="text-gray-700 mt-4">
                      Así tendrás una regla de 29,7 cm o 11,7 pulgadas perfectamente calibrada.
                    </p>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Tipos de Reglas para Imprimir
                    </h2>
                    <p className="text-gray-700 mb-3">
                      En nuestra web encontrarás distintos modelos de reglas imprimibles:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Regla de 30 cm para imprimir (centímetros y milímetros)</li>
                      <li>Regla de 12 pulgadas para imprimir</li>
                      <li>Regla métrica y en pulgadas combinada</li>
                      <li>Regla imprimible en PDF (ideal para guardar y reutilizar)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Todas las reglas están diseñadas con medidas precisas y líneas claras, perfectas para el hogar, la escuela o el trabajo.
                    </p>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Consejos Útiles
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Usa papel grueso o cartulina si quieres una regla más resistente.</li>
                      <li>Si tu impresora cambia ligeramente la escala, puedes ajustar el zoom manualmente hasta que coincida con un objeto de medida conocida.</li>
                      <li>Puedes laminar la regla impresa para prolongar su durabilidad.</li>
                    </ul>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Ventajas de Imprimir tu Propia Regla
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>No necesitas comprar una física.</li>
                      <li>Disponible en cualquier momento y lugar.</li>
                      <li>Totalmente gratis y precisa.</li>
                      <li>Puedes personalizarla en centímetros, pulgadas o ambas.</li>
                    </ul>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Descarga o Imprime tu Regla
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Haz clic en el botón de abajo para imprimir tu regla directamente o descargarla en PDF.
                      Perfecta para medir proyectos de manualidades, costura, dibujo técnico o uso escolar.
                    </p>
                    <Button
                      onClick={handlePrint}
                      className="bg-ruler-primary hover:bg-ruler-secondary text-white"
                    >
                      <Printer className="mr-2 h-4 w-4" />
                      Imprimir Regla Ahora
                    </Button>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Una Última Cosa
                    </h2>
                    <p className="text-gray-700">
                      Recuerda verificar siempre que la impresión esté al 100% de escala para garantizar la precisión.
                      En Regla.Onl, queremos que siempre tengas una regla imprimible confiable, práctica y gratuita al alcance de un clic.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden print:block print:m-0 print:p-0">
            <img
              src={reglaImage}
              alt="Imprimir Regla"
              className="w-auto h-auto max-w-none"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </Layout>

      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          body, html {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
          }

          header, footer, nav {
            display: none !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:block {
            display: block !important;
          }

          .print\\:m-0 {
            margin: 0 !important;
          }

          .print\\:p-0 {
            padding: 0 !important;
          }

          img {
            max-width: none !important;
            width: auto !important;
            height: auto !important;
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default ImprimirRegla;
