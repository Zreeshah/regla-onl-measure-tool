
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronRight, 
  Ruler, 
  ArrowRight,
  BarChart3, 
  Scale
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const SistemaAnglosajoBlogPost = () => {
  return (
    <>
      <Helmet>
        <title>Sistema Anglosajón de Unidades: Qué es, Unidades y Conversiones | Regla.onl</title>
        <meta name="description" content="Descubre qué es el sistema anglosajón de unidades, sus principales medidas, historia y cómo convertirlas al sistema métrico con ejemplos prácticos." />
        <meta name="keywords" content="sistema anglosajón, sistema anglosajon, qué es el sistema anglosajón, unidades anglosajonas, conversión sistema anglosajón, pulgadas, pies, libras, galones, fahrenheit" />
        <link rel="canonical" href="https://regla.onl/blog/sistema-anglosajon-unidades" />
        <meta property="og:title" content="Sistema Anglosajón de Unidades: Qué es, Unidades y Conversiones" />
        <meta property="og:description" content="Guía completa sobre el sistema anglosajón de unidades: historia, unidades principales y conversiones al sistema métrico." />
        <meta property="og:url" content="https://regla.onl/blog/sistema-anglosajon-unidades" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sistema Anglosajón de Unidades: Qué es, Unidades y Conversiones" />
        <meta name="twitter:description" content="Guía completa sobre el sistema anglosajón de unidades: historia, unidades principales y conversiones al sistema métrico." />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <nav className="flex items-center text-sm mb-6 text-gray-500">
          <a href="/" className="hover:text-ruler-primary">Inicio</a>
          <ChevronRight className="h-4 w-4 mx-1" />
          <a href="/blog/sistema-anglosajon-unidades" className="text-ruler-primary">Sistema Anglosajón de Unidades</a>
        </nav>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold mb-6 text-ruler-primary">Sistema Anglosajón de Unidades: Qué es, Unidades y Conversiones</h1>

          <div className="my-6 rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&h=500" 
              alt="Sistema Anglosajón de Unidades" 
              className="w-full h-auto object-cover"
            />
            <p className="text-xs text-gray-500 p-2 bg-gray-100">Imagen: El sistema anglosajón tiene un origen histórico y sigue siendo relevante en países como Estados Unidos y Reino Unido.</p>
          </div>

          <p className="lead text-lg">¿Quieres saber <strong>qué es el sistema anglosajón</strong>? El <strong>sistema anglosajón de unidades</strong>, también conocido como <strong>sistema anglosajon</strong>, es un conjunto de medidas tradicionalmente usado en países como Estados Unidos y el Reino Unido. Aunque diferente del sistema métrico decimal, sigue siendo relevante por su arraigo cultural.</p>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm my-6">
            <h2 className="text-xl font-bold mb-2">Tabla de Contenidos</h2>
            <ul className="space-y-1">
              <li><a href="#que-es" className="text-ruler-primary hover:underline flex items-center">¿Qué es el Sistema Anglosajón? <ArrowRight className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#historia" className="text-ruler-primary hover:underline flex items-center">Historia del Sistema Anglosajón <ArrowRight className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#unidades" className="text-ruler-primary hover:underline flex items-center">Unidades Principales del Sistema Anglosajón <ArrowRight className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#conversion" className="text-ruler-primary hover:underline flex items-center">Conversión al Sistema Métrico <ArrowRight className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#aplicaciones" className="text-ruler-primary hover:underline flex items-center">Aplicaciones del Sistema Anglosajón <ArrowRight className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#tabla-conversiones" className="text-ruler-primary hover:underline flex items-center">Tabla de Conversiones Comunes <ArrowRight className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#ejemplos" className="text-ruler-primary hover:underline flex items-center">Ejemplos Prácticos de Conversión <ArrowRight className="h-3 w-3 ml-1" /></a></li>
              <li><a href="#conclusion" className="text-ruler-primary hover:underline flex items-center">Conclusión <ArrowRight className="h-3 w-3 ml-1" /></a></li>
            </ul>
          </div>

          <h2 id="que-es" className="text-2xl font-bold mt-8 mb-4 flex items-center">
            <Ruler className="h-6 w-6 mr-2 text-ruler-primary" />
            ¿Qué es el Sistema Anglosajón?
          </h2>

          <p>El <strong>sistema anglosajón de unidades</strong> es un sistema de medida tradicional utilizado principalmente en países angloparlantes, como <strong>Estados Unidos</strong>, <strong>Reino Unido</strong> (en menor medida) y algunas regiones de la Commonwealth. A diferencia del <strong>sistema métrico decimal</strong>, que usa unidades como metros y kilogramos, el <strong>sistema anglosajón</strong> emplea pulgadas, libras, galones y grados Fahrenheit. Su origen está en las costumbres inglesas medievales, y aunque menos estandarizado globalmente, sigue siendo clave en ciertos contextos.</p>

          <p><strong>¿Qué es el sistema anglosajón</strong> en términos simples? Es un conjunto de unidades basado en referencias históricas, como el tamaño del pie humano o el peso de granos, que aún se usa en la vida diaria, la industria y el comercio en países como EE.UU.</p>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 my-6">
            <p className="text-blue-800"><strong>Dato importante:</strong> Aunque el Reino Unido oficialmente adoptó el sistema métrico, muchas medidas anglosajonas siguen usándose en contextos cotidianos, como pints para cerveza o millas para distancias en carretera.</p>
          </div>

          <h2 id="historia" className="text-2xl font-bold mt-8 mb-4 flex items-center">
            <BarChart3 className="h-6 w-6 mr-2 text-ruler-primary" />
            Historia del Sistema Anglosajón
          </h2>

          <p>El <strong>sistema anglosajón</strong> tiene raíces profundas en la historia británica:</p>

          <div className="my-6 rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&h=400" 
              alt="Historia del Sistema Anglosajón" 
              className="w-full h-auto object-cover"
            />
          </div>

          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Edad Media</strong>: Los ingleses usaban unidades como la <strong>yarda</strong> (basada en la longitud de un brazo) y la <strong>libra</strong> (inspirada en pesos romanos). Estas medidas variaban entre regiones.</li>
            <li><strong>Siglo XIII</strong>: Se intentaron estandarizar unidades bajo el reinado de Eduardo I, definiendo la pulgada como "tres granos de cebada secos".</li>
            <li><strong>Siglo XIX</strong>: El <strong>Imperial System</strong> formalizó las unidades en el Reino Unido, mientras que EE.UU. adoptó una variante similar, el <strong>US Customary System</strong>.</li>
            <li><strong>Siglo XX</strong>: El Reino Unido comenzó a adoptar el sistema métrico, pero EE.UU. mantuvo el <strong>sistema anglosajón</strong> como estándar principal.</li>
          </ul>

          <p>Hoy, el <strong>sistema anglosajón</strong> convive con el métrico en muchos sectores, generando un debate sobre estandarización global.</p>

          <h2 id="unidades" className="text-2xl font-bold mt-8 mb-4 flex items-center">
            <Scale className="h-6 w-6 mr-2 text-ruler-primary" />
            Unidades Principales del Sistema Anglosajón
          </h2>

          <p>El <strong>sistema anglosajón</strong> incluye unidades específicas para distintas magnitudes. Aquí las principales:</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Longitud</h3>
          <ul className="list-disc pl-6 my-2 space-y-1">
            <li><strong>Pulgada (inch)</strong>: Equivale a 2.54 cm, usada para medir objetos pequeños.</li>
            <li><strong>Pie (foot)</strong>: 12 pulgadas, común en construcción y altura personal.</li>
            <li><strong>Yarda (yard)</strong>: 3 pies, usada en deportes como el fútbol americano.</li>
            <li><strong>Milla (mile)</strong>: 1,760 yardas, para distancias largas.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Peso</h3>
          <ul className="list-disc pl-6 my-2 space-y-1">
            <li><strong>Onza (ounce)</strong>: Usada para pesos pequeños, como alimentos.</li>
            <li><strong>Libra (pound)</strong>: 16 onzas, estándar para peso corporal o mercancías.</li>
            <li><strong>Tonelada (ton)</strong>: 2,000 libras (EE.UU.) o 2,240 libras (Reino Unido).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Volumen</h3>
          <ul className="list-disc pl-6 my-2 space-y-1">
            <li><strong>Pinta (pint)</strong>: Usada para líquidos, como cerveza.</li>
            <li><strong>Galón (gallon)</strong>: 8 pintas, común en combustibles y bebidas.</li>
            <li><strong>Onza líquida (fluid ounce)</strong>: Para volúmenes pequeños, como medicamentos.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Temperatura</h3>
          <ul className="list-disc pl-6 my-2 space-y-1">
            <li><strong>Grado Fahrenheit (°F)</strong>: Escala donde el agua congela a 32°F y hierve a 212°F, usada en EE.UU.</li>
          </ul>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Magnitud</th>
                  <th className="px-4 py-2 border">Unidad</th>
                  <th className="px-4 py-2 border">Equivalencia aproximada (métrico)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Longitud</td>
                  <td className="px-4 py-2 border">Pulgada</td>
                  <td className="px-4 py-2 border">2.54 cm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Longitud</td>
                  <td className="px-4 py-2 border">Pie</td>
                  <td className="px-4 py-2 border">30.48 cm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Peso</td>
                  <td className="px-4 py-2 border">Libra</td>
                  <td className="px-4 py-2 border">0.4536 kg</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Volumen</td>
                  <td className="px-4 py-2 border">Galón</td>
                  <td className="px-4 py-2 border">3.785 L</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Temperatura</td>
                  <td className="px-4 py-2 border">°Fahrenheit</td>
                  <td className="px-4 py-2 border">(°F - 32) / 1.8 = °C</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="conversion" className="text-2xl font-bold mt-8 mb-4">
            Conversión al Sistema Métrico
          </h2>

          <p>Dado que el <strong>sistema anglosajón</strong> no es estándar globalmente, las conversiones al sistema métrico son esenciales. Aquí las más comunes:</p>

          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Longitud</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>1 pulgada = 2.54 cm</li>
                <li>1 pie = 30.48 cm</li>
                <li>1 milla = 1.609 km</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Peso</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>1 libra = 0.4536 kg</li>
                <li>1 onza = 28.35 g</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Volumen</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>1 galón = 3.785 L</li>
                <li>1 pinta = 0.473 L</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Temperatura</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>De °F a °C: °C = (°F - 32) / 1.8</li>
                <li>De °C a °F: °F = (°C × 1.8) + 32</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg my-6 text-center overflow-x-auto">
            <pre className="whitespace-pre-wrap text-left">
{`   1 Milla  |================| 1.609 km
   1 Yarda  |====| 0.914 m
   1 Pie    |=| 0.305 m
   1 Pulgada|| 0.0254 m
            +-----------------
            Sistema Anglosajón   Sistema Métrico`}
            </pre>
            <p className="text-sm text-gray-600 mt-2">Gráfico comparativo de unidades de longitud entre sistema anglosajón y métrico</p>
          </div>

          <h2 id="aplicaciones" className="text-2xl font-bold mt-8 mb-4">
            Aplicaciones del Sistema Anglosajón
          </h2>

          <div className="my-6 rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=1200&h=400" 
              alt="Aplicaciones del Sistema Anglosajón" 
              className="w-full h-auto object-cover"
            />
          </div>

          <p>A pesar del avance del sistema métrico, el <strong>sistema anglosajón</strong> sigue teniendo aplicaciones importantes:</p>

          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Industria aeronáutica</strong>: En EE.UU., altitudes en pies y distancias en millas.</li>
            <li><strong>Construcción</strong>: Medidas en pulgadas y pies para edificaciones en países anglosajones.</li>
            <li><strong>Mercado doméstico</strong>: Electrodomésticos y pantallas medidas en pulgadas.</li>
            <li><strong>Gastronomía</strong>: Recetas americanas con onzas, libras y tazas.</li>
            <li><strong>Automoción</strong>: Velocidad en mph en Reino Unido y EE.UU.</li>
          </ul>

          <h2 id="tabla-conversiones" className="text-2xl font-bold mt-8 mb-4">
            Tabla de Conversiones Comunes
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Medida</th>
                  <th className="px-4 py-2 border">Valor en Sistema Anglosajón</th>
                  <th className="px-4 py-2 border">Equivalente en Sistema Métrico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Altura promedio hombre</td>
                  <td className="px-4 py-2 border">5 pies 9 pulgadas</td>
                  <td className="px-4 py-2 border">1.75 metros</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Peso promedio adulto</td>
                  <td className="px-4 py-2 border">160 libras</td>
                  <td className="px-4 py-2 border">72.6 kilogramos</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Tamaño televisor</td>
                  <td className="px-4 py-2 border">50 pulgadas</td>
                  <td className="px-4 py-2 border">127 centímetros</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Temperatura ambiente</td>
                  <td className="px-4 py-2 border">72°F</td>
                  <td className="px-4 py-2 border">22.2°C</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Contenido bebida</td>
                  <td className="px-4 py-2 border">1 galón</td>
                  <td className="px-4 py-2 border">3.78 litros</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">Límite velocidad</td>
                  <td className="px-4 py-2 border">55 mph</td>
                  <td className="px-4 py-2 border">88.5 km/h</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="ejemplos" className="text-2xl font-bold mt-8 mb-4">
            Ejemplos Prácticos de Conversión
          </h2>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 my-6">
            <h3 className="text-xl font-semibold mb-4">Casos prácticos</h3>
            
            <div className="mb-4">
              <h4 className="font-medium mb-1">Ejemplo 1: Altura personal</h4>
              <p>Convertir 6 pies 2 pulgadas a centímetros:</p>
              <div className="bg-white p-2 rounded my-2 font-mono text-sm">
                (6 × 30.48) + (2 × 2.54) = 182.88 + 5.08 = 187.96 cm
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium mb-1">Ejemplo 2: Temperatura</h4>
              <p>Convertir 98.6°F (temperatura corporal normal) a °C:</p>
              <div className="bg-white p-2 rounded my-2 font-mono text-sm">
                (98.6 - 32) / 1.8 = 66.6 / 1.8 = 37°C
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Ejemplo 3: Compra de gasolina</h4>
              <p>Convertir 10 galones a litros:</p>
              <div className="bg-white p-2 rounded my-2 font-mono text-sm">
                10 × 3.785 = 37.85 litros
              </div>
            </div>
          </div>

          <h2 id="conclusion" className="text-2xl font-bold mt-8 mb-4">
            Conclusión
          </h2>

          <p>El <strong>sistema anglosajón de unidades</strong> sigue siendo relevante en el mundo actual, especialmente en países como Estados Unidos, donde está arraigado en la vida cotidiana, la industria y el comercio. Aunque tiene desventajas frente al sistema métrico, como su menor estandarización y relaciones más complejas entre unidades, su peso histórico y cultural es innegable.</p>

          <p>Conocer <strong>qué es el sistema anglosajón</strong> y manejar las conversiones entre este y el sistema métrico es una habilidad práctica en un mundo globalizado. Ya sea que viajes a EE.UU., trabajes con empresas americanas o simplemente quieras entender mejor los productos importados, dominar estas conversiones te será útil.</p>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 my-6">
            <p className="text-blue-800 mb-2"><strong>¿Sabías que?</strong> El incidente más famoso relacionado con la confusión entre sistemas de unidades ocurrió en 1999, cuando la NASA perdió la sonda Mars Climate Orbiter, valorada en 125 millones de dólares, debido a un error de conversión entre unidades métricas y anglosajonas.</p>
          </div>

          <Separator className="my-8" />

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recursos adicionales</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog/sistema-metrico-decimal" className="text-ruler-primary hover:underline flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Sistema Métrico Decimal: Todo lo que Debes Saber
                </a>
              </li>
              <li>
                <a href="/blog/sistema-mks" className="text-ruler-primary hover:underline flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Sistema MKS: Qué es, Unidades y su Importancia
                </a>
              </li>
              <li>
                <a href="/blog/sistema-natural-unidades" className="text-ruler-primary hover:underline flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Sistema Natural de Unidades: Qué es y Cómo Funciona
                </a>
              </li>
              <li>
                <a href="/blog/como-usar-regla" className="text-ruler-primary hover:underline flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Cómo Usar una Regla Correctamente
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default SistemaAnglosajoBlogPost;
