
// Internal links utility for SEO optimization
type ArticleLink = {
  url: string;
  title: string;
  keywords: string[];
};

// All blog articles for internal linking
export const blogArticles: ArticleLink[] = [
  {
    url: "/",
    title: "Regla Online Tamaño Real - Regla Virtual Precisa",
    keywords: ["regla", "medición", "online", "virtual", "tamaño real"]
  },
  {
    url: "/blog/buscar-dni-por-nombre",
    title: "Buscar DNI por Nombre y Apellido en España",
    keywords: ["DNI", "buscar", "España", "identidad", "documento"]
  },
  {
    url: "/blog/medidor-profundidad",
    title: "Medidor de Profundidad: Qué es, Tipos y Cómo Usarlo",
    keywords: ["medidor", "profundidad", "instrumento", "medición", "precisión"]
  },
  {
    url: "/blog/numeros-adimensionales",
    title: "Números Adimensionales: Qué Son y Ejemplos",
    keywords: ["números", "adimensionales", "física", "ingeniería", "Reynolds"]
  },
  {
    url: "/blog/perdido-dni",
    title: "He Perdido el DNI: Qué Hacer y Cómo Renovarlo",
    keywords: ["DNI", "perdido", "renovar", "documentación", "identidad"]
  }
];

// Find articles related to current article based on keyword matching
export const getRelatedArticles = (currentUrl: string, count: number = 2): ArticleLink[] => {
  const currentArticle = blogArticles.find(article => article.url === currentUrl);
  
  if (!currentArticle) {
    // If current article not found, return the homepage and some random articles
    const filtered = blogArticles.filter(article => article.url !== "/");
    return [blogArticles[0], ...filtered.slice(0, count - 1)];
  }
  
  // Score articles by keyword overlap
  const scored = blogArticles
    .filter(article => article.url !== currentUrl)
    .map(article => {
      const commonKeywords = article.keywords.filter(keyword => 
        currentArticle.keywords.includes(keyword)
      );
      
      return {
        article,
        score: commonKeywords.length
      };
    })
    .sort((a, b) => b.score - a.score);
  
  // Always include homepage as one of the links if current page isn't homepage
  const homepage = blogArticles.find(article => article.url === "/");
  const relatedArticles = scored.map(item => item.article).slice(0, homepage && currentUrl !== "/" ? count - 1 : count);
  
  if (homepage && currentUrl !== "/") {
    relatedArticles.unshift(homepage);
  }
  
  return relatedArticles;
};

// Generate a contextual link with surrounding text
export const createContextualLink = (article: ArticleLink): string => {
  const linkPhrases = [
    `Para obtener más información sobre ${article.keywords[0] || "este tema"}, visita <a href="${article.url}" class="text-blue-600 hover:underline">${article.title}</a>.`,
    `Descubre más sobre ${article.keywords[0] || "medición"} en nuestra <a href="${article.url}" class="text-blue-600 hover:underline">guía completa</a>.`,
    `Si te interesa ${article.keywords[1] || "este tema"}, consulta <a href="${article.url}" class="text-blue-600 hover:underline">este artículo</a>.`,
    `Aprende más en nuestra <a href="${article.url}" class="text-blue-600 hover:underline">página principal</a> sobre ${article.keywords[0] || "herramientas de medición"}.`
  ];
  
  // For homepage, use more specific phrases
  if (article.url === "/") {
    return `Prueba nuestra <a href="/" class="text-blue-600 hover:underline">regla online</a> para realizar mediciones precisas en tu pantalla.`;
  }
  
  const randomIndex = Math.floor(Math.random() * linkPhrases.length);
  return linkPhrases[randomIndex];
};

// Component to insert related articles section
export const RelatedArticlesSection = ({ currentUrl }: { currentUrl: string }) => {
  const relatedArticles = getRelatedArticles(currentUrl, 3);
  
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Artículos Relacionados</h3>
      <ul className="space-y-2">
        {relatedArticles.map((article, index) => (
          <li key={index}>
            <a 
              href={article.url} 
              className="text-blue-600 hover:underline flex items-center"
            >
              <span className="mr-2">•</span>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
