
// Utility to provide internal link management for SEO optimization

interface Article {
  id: string;
  title: string;
  url: string;
  description: string;
  keywords: string[];
}

// List of articles for internal linking
export const articles: Article[] = [
  {
    id: "buscar-dni",
    title: "Buscar DNI por Nombre y Apellido en España",
    url: "/blog/buscar-dni-por-nombre",
    description: "Guía completa para buscar DNI por nombre y apellido en España de forma gratuita y legal.",
    keywords: ["DNI", "España", "buscar", "nombre", "apellido"]
  },
  {
    id: "saber-dni",
    title: "Cómo Saber el DNI de una Persona",
    url: "/blog/saber-dni-persona",
    description: "Métodos legales para saber y verificar el DNI de una persona en España.",
    keywords: ["DNI", "verificar", "persona", "identificación"]
  },
  {
    id: "dni-perdido",
    title: "Qué Hacer Si Has Perdido Tu DNI",
    url: "/blog/perdido-dni",
    description: "Guía paso a paso sobre qué hacer si has perdido tu DNI y cómo obtener uno nuevo.",
    keywords: ["DNI", "perdido", "renovar", "obtener"]
  },
  {
    id: "sistema-metrico",
    title: "El Sistema Métrico Decimal Explicado",
    url: "/blog/sistema-metrico-decimal",
    description: "Todo sobre el sistema métrico decimal: historia, unidades y conversiones.",
    keywords: ["métrico", "decimal", "medidas", "conversión"]
  },
  {
    id: "numeros-adimensionales",
    title: "Números Adimensionales: Qué Son y Ejemplos",
    url: "/blog/numeros-adimensionales",
    description: "Explicación completa sobre números adimensionales y su importancia en la física y la ingeniería.",
    keywords: ["números", "adimensionales", "física", "ingeniería"]
  },
  {
    id: "paro-cantidad",
    title: "Cómo Saber Cuánto Paro Te Corresponde",
    url: "/blog/como-saber-cuanto-paro",
    description: "Guía para calcular la prestación por desempleo en España y conocer tus derechos.",
    keywords: ["paro", "desempleo", "calcular", "prestación"]
  },
  {
    id: "usar-regla",
    title: "Cómo Usar una Regla Correctamente",
    url: "/blog/como-usar-regla",
    description: "Guía completa sobre el uso correcto de reglas para mediciones precisas.",
    keywords: ["regla", "medir", "precisión", "uso"]
  },
  {
    id: "sistema-mks",
    title: "Sistema MKS: Todo lo que Debes Saber",
    url: "/blog/sistema-mks",
    description: "Explicación detallada del Sistema MKS, sus unidades y aplicaciones.",
    keywords: ["MKS", "sistema", "unidades", "física"]
  },
  {
    id: "sistema-natural-unidades",
    title: "El Sistema Natural de Unidades Explicado",
    url: "/blog/sistema-natural-unidades",
    description: "Guía sobre el sistema natural de unidades y su importancia en física teórica.",
    keywords: ["unidades", "natural", "física", "teoría"]
  },
  {
    id: "clinometro",
    title: "Clinómetro: Qué es y Para Qué Sirve",
    url: "/blog/clinometro",
    description: "Todo sobre el clinómetro, sus usos y aplicaciones en diversas áreas.",
    keywords: ["clinómetro", "inclinación", "medición", "topografía"]
  },
  {
    id: "sistema-anglosajon",
    title: "Sistema Anglosajón de Unidades Explicado",
    url: "/blog/sistema-anglosajon-unidades",
    description: "Guía completa sobre el sistema anglosajón de unidades, conversiones y diferencias con el sistema métrico.",
    keywords: ["anglosajón", "unidades", "imperial", "conversión"]
  },
  {
    id: "medidor-profundidad",
    title: "Guía Completa sobre Medidores de Profundidad",
    url: "/blog/medidor-profundidad",
    description: "Todo sobre los medidores de profundidad, sus tipos y usos prácticos.",
    keywords: ["profundidad", "medidor", "calibre", "instrumento"]
  }
];

// Get the main homepage URL
export const getHomepageUrl = (): string => {
  return "https://regla.onl";
};

// Get featured articles (3-5 recent or high-priority articles)
export const getFeaturedArticles = (count: number = 4): Article[] => {
  // Implementation could be more sophisticated, e.g., by evaluating priority or recency
  return articles.slice(0, Math.min(count, articles.length));
};

// Get random homepage link text variations
export const getHomepageLinkText = (): string => {
  const variations = [
    "nuestra página principal de mediciones",
    "la herramienta de regla online",
    "nuestra regla virtual para mediciones precisas",
    "la página principal de Regla.onl",
    "nuestra regla online tamaño real",
    "la herramienta de medición digital"
  ];
  
  return variations[Math.floor(Math.random() * variations.length)];
};

// Get related articles based on shared keywords (1-2 articles)
export const getRelatedArticles = (currentArticleId: string, count: number = 2): Article[] => {
  const currentArticle = articles.find(article => article.id === currentArticleId);
  
  if (!currentArticle) return [];
  
  // Filter out the current article and sort others by keyword relevance
  const relatedArticles = articles
    .filter(article => article.id !== currentArticleId)
    .map(article => {
      // Calculate a simple relevance score based on keyword overlap
      const relevanceScore = article.keywords.filter(keyword => 
        currentArticle.keywords.includes(keyword)
      ).length;
      
      return { ...article, relevanceScore };
    })
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  return relatedArticles.slice(0, Math.min(count, relatedArticles.length));
};

// Insert a homepage link into text within the first 200 words
export const insertHomepageLink = (text: string): string => {
  if (!text) return text;
  
  // Split text into paragraphs
  const paragraphs = text.split('</p>');
  
  // Join the first few paragraphs until we have approx. 200 words
  let firstPortion = '';
  let wordCount = 0;
  let modifiedParagraphIndex = -1;
  
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraphWordCount = paragraphs[i].split(' ').length;
    
    if (wordCount + paragraphWordCount > 150 && modifiedParagraphIndex === -1) {
      // This is where we'll insert our link
      modifiedParagraphIndex = i;
      
      // Find a good position for the link (around 1/2 to 2/3 of the paragraph)
      const words = paragraphs[i].split(' ');
      const linkPosition = Math.floor(words.length / 2);
      
      // Create link text
      const linkText = getHomepageLinkText();
      const homepageLink = `<a href="${getHomepageUrl()}" className="text-[#9b87f5]">${linkText}</a>`;
      
      // Insert the link
      words.splice(linkPosition, 0, ` ${homepageLink} `);
      paragraphs[i] = words.join(' ');
    }
    
    wordCount += paragraphWordCount;
    firstPortion += paragraphs[i] + '</p>';
    
    if (wordCount > 250) break;
  }
  
  // If no suitable position was found in the first 200 words, insert at the end of first paragraph
  if (modifiedParagraphIndex === -1 && paragraphs.length > 0) {
    const words = paragraphs[0].split(' ');
    const linkText = getHomepageLinkText();
    const homepageLink = `<a href="${getHomepageUrl()}" className="text-[#9b87f5]">${linkText}</a>`;
    
    // Insert before the last period in the first paragraph
    const lastPeriodIndex = paragraphs[0].lastIndexOf('.');
    if (lastPeriodIndex !== -1) {
      paragraphs[0] = paragraphs[0].substring(0, lastPeriodIndex) + 
                      `. Para más información, visita ${homepageLink}` + 
                      paragraphs[0].substring(lastPeriodIndex + 1);
    } else {
      // If no period, append at the end
      paragraphs[0] += ` Para más información, visita ${homepageLink}`;
    }
    
    // Reconstruct the text
    firstPortion = '';
    for (let i = 0; i < paragraphs.length && i < 3; i++) {
      firstPortion += paragraphs[i] + '</p>';
    }
  }
  
  // Return the modified text plus the rest of the content
  const remainingParagraphs = paragraphs.slice(Math.min(3, paragraphs.length));
  return firstPortion + remainingParagraphs.join('</p>');
};
