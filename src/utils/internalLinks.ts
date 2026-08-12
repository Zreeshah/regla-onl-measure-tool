
export type ArticleLink = {
  url: string;
  title: string;
  keywords: string[];
  cluster: "measurement" | "dni" | "admin";
};

// All blog articles for internal linking
export const blogArticles: ArticleLink[] = [
  {
    url: "/",
    title: "Regla Online Tamaño Real - Regla Virtual Precisa",
    keywords: ["regla", "medición", "online", "virtual", "tamaño real"],
    cluster: "measurement"
  },
  {
    url: "/blog/buscar-dni-por-nombre",
    title: "Buscar DNI por Nombre y Apellido en España",
    keywords: ["DNI", "buscar", "España", "identidad", "documento"],
    cluster: "dni"
  },
  {
    url: "/blog/medidor-profundidad",
    title: "Medidor de Profundidad: Qué es, Tipos y Cómo Usarlo",
    keywords: ["medidor", "profundidad", "instrumento", "medición", "precisión"],
    cluster: "measurement"
  },
  {
    url: "/blog/numeros-adimensionales",
    title: "Números Adimensionales: Qué Son y Ejemplos",
    keywords: ["números", "adimensionales", "física", "ingeniería", "Reynolds"],
    cluster: "measurement"
  },
  {
    url: "/blog/perdido-dni",
    title: "He Perdido el DNI: Qué Hacer y Cómo Renovarlo",
    keywords: ["DNI", "perdido", "renovar", "documentación", "identidad"],
    cluster: "dni"
  },
  {
    url: "/blog/saber-dni-persona",
    title: "Cómo Saber el DNI de una Persona en España",
    keywords: ["DNI", "buscar", "España", "identidad", "documento"],
    cluster: "dni"
  },
  {
    url: "/blog/como-saber-cuanto-paro",
    title: "Cómo Saber Cuánto Paro Tengo",
    keywords: ["paro", "SEPE", "prestación", "desempleo", "trámite"],
    cluster: "admin"
  },
  {
    url: "/imprimir",
    title: "Imprimir Regla en Tamaño Real",
    keywords: ["regla", "imprimir", "medición", "centímetros", "pulgadas"],
    cluster: "measurement"
  },
  {
    url: "/blog/clinometro",
    title: "Clinómetro: Qué es, Para Qué Sirve y Cómo Usarlo",
    keywords: ["clinómetro", "inclinación", "pendiente", "ángulo", "medición"],
    cluster: "measurement"
  },
  {
    url: "/blog/como-usar-regla",
    title: "Cómo Usar una Regla para Medir con Precisión",
    keywords: ["regla", "medir", "centímetros", "milímetros", "pulgadas"],
    cluster: "measurement"
  },
  {
    url: "/blog/sistema-metrico-decimal",
    title: "Sistema Métrico Decimal: Guía Completa",
    keywords: ["sistema métrico", "unidades", "centímetros", "metros", "medición"],
    cluster: "measurement"
  }
];

// Find articles related to current article based on keyword matching
export const getRelatedArticles = (currentUrl: string, count: number = 2): ArticleLink[] => {
  const currentArticle = blogArticles.find(article => article.url === currentUrl);
  
  if (!currentArticle) {
    return blogArticles.filter(article => article.url !== currentUrl).slice(0, count);
  }

  const clusterPreference = currentArticle.cluster === "measurement"
    ? ["measurement"]
    : currentArticle.cluster === "dni"
      ? ["dni", "admin"]
      : ["admin", "dni"];
  
  const scored = blogArticles
    .filter(article => article.url !== currentUrl)
    .map(article => {
      const commonKeywords = article.keywords.filter(keyword => 
        currentArticle.keywords.includes(keyword)
      );
      const clusterIndex = clusterPreference.indexOf(article.cluster);
      
      return {
        article,
        score: commonKeywords.length + (clusterIndex >= 0 ? (clusterPreference.length - clusterIndex) * 10 : 0)
      };
    })
    .sort((a, b) => b.score - a.score)
    .map(item => item.article);

  return scored.slice(0, count);
};

// Generate a contextual link with surrounding text
export const createContextualLink = (article: ArticleLink): string => {
  if (article.url === "/") {
    return `Prueba nuestra <a href="/" class="text-blue-600 hover:underline">regla online</a> para realizar mediciones precisas en tu pantalla.`;
  }

  return `Consulta también nuestra guía sobre <a href="${article.url}" class="text-blue-600 hover:underline">${article.title}</a>.`;
};
