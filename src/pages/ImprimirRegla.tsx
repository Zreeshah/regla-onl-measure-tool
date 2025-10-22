import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

const ImprimirRegla: React.FC = () => {
  const [unit, setUnit] = useState<'cm' | 'inch'>('cm');
  const maxLength = unit === 'cm' ? 29.7 : 11.7;

  const handlePrint = () => {
    window.print();
  };

  const renderRulerMarks = () => {
    const marks = [];
    const totalMarks = Math.ceil(maxLength);

    for (let i = 0; i <= totalMarks; i++) {
      marks.push(
        <div key={`major-${i}`} className="absolute flex flex-col items-center" style={{ left: `${(i / maxLength) * 100}%` }}>
          <div className="w-px bg-gray-900 h-12"></div>
          <span className="text-xs mt-1 font-medium">{i}</span>
        </div>
      );

      if (i < totalMarks) {
        const smallMarks = unit === 'cm' ? 10 : 16;
        for (let j = 1; j < smallMarks; j++) {
          const position = (i + j / smallMarks) / maxLength * 100;
          const isMidMark = (unit === 'cm' && j === 5) || (unit === 'inch' && (j === 4 || j === 8 || j === 12));
          const height = isMidMark ? 'h-8' : 'h-4';

          marks.push(
            <div
              key={`minor-${i}-${j}`}
              className="absolute"
              style={{ left: `${position}%` }}
            >
              <div className={`w-px bg-gray-700 ${height}`}></div>
            </div>
          );
        }
      }
    }

    return marks;
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
            <div className="max-w-4xl mx-auto mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Imprimir Regla – Regla en Línea para Imprimir Gratis
              </h1>

              <p className="text-lg text-gray-700 mb-6">
                ¿Necesitas una regla real para medir objetos y no tienes una a mano? Con nuestra herramienta puedes imprimir una regla fácilmente en tamaño real, hasta 29,7 cm o 11,7 pulgadas, directamente desde tu navegador.
              </p>

              <div className="flex gap-4 mb-8">
                <Button
                  onClick={handlePrint}
                  className="bg-ruler-primary hover:bg-ruler-secondary text-white"
                >
                  <Printer className="mr-2 h-4 w-4" />
                  Imprimir Regla
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant={unit === 'cm' ? 'default' : 'outline'}
                    onClick={() => setUnit('cm')}
                    className={unit === 'cm' ? 'bg-ruler-primary hover:bg-ruler-secondary' : ''}
                  >
                    Centímetros
                  </Button>
                  <Button
                    variant={unit === 'inch' ? 'default' : 'outline'}
                    onClick={() => setUnit('inch')}
                    className={unit === 'inch' ? 'bg-ruler-primary hover:bg-ruler-secondary' : ''}
                  >
                    Pulgadas
                  </Button>
                </div>
              </div>

              <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
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

              <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
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

              <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Consejos Útiles
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Usa papel grueso o cartulina si quieres una regla más resistente.</li>
                  <li>Si tu impresora cambia ligeramente la escala, puedes ajustar el zoom manualmente hasta que coincida con un objeto de medida conocida.</li>
                  <li>Puedes laminar la regla impresa para prolongar su durabilidad.</li>
                </ul>
              </section>

              <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
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

              <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
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

              <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
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

          <div className="print:block print:m-0 print:p-0 bg-white p-8 rounded-lg shadow-sm">
            <div className="print:hidden mb-4 text-center text-sm text-gray-600">
              Vista previa de la regla
            </div>

            <div className="relative bg-white" style={{
              width: unit === 'cm' ? '29.7cm' : '11.7in',
              height: '80px',
              margin: '0 auto'
            }}>
              <div className="absolute top-0 left-0 right-0 border-t-2 border-b-2 border-gray-900" style={{ height: '60px' }}>
                <div className="relative w-full h-full">
                  {renderRulerMarks()}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 text-center">
                <span className="text-xs font-semibold text-gray-700">
                  {unit === 'cm' ? 'Centímetros (cm)' : 'Pulgadas (inches)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }

          body {
            margin: 0;
            padding: 0;
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
        }
      `}</style>
    </>
  );
};

export default ImprimirRegla;
