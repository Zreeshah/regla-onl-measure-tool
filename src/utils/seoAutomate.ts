
import { getHomepageUrl, getRelatedArticles, articles } from './internalLinking';

// Type for SEO metadata
export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
}

// SEO best practices configuration
const SEO_CONFIG = {
  MAX_INTERNAL_LINKS_PER_PAGE: 5,
  MIN_LINKS_TO_HOMEPAGE: 1,
  RECOMMENDED_ARTICLE_LINKS: 2,
  ARTICLE_LINKS_IN_HOMEPAGE: 5,
  MAX_DESCRIPTION_LENGTH: 160,
  MAX_TITLE_LENGTH: 60,
  MAX_LINKS_DENSITY: 0.05, // 5% of content can be links
};

// Generate SEO metadata for a specific page
export const generateSeoMetadata = (pageId: string): SeoMetadata => {
  // If it's a blog article, use its metadata
  const article = articles.find(a => a.id === pageId);
  
  if (article) {
    return {
      title: `${article.title} | Regla.Onl`,
      description: article.description.length > SEO_CONFIG.MAX_DESCRIPTION_LENGTH 
        ? article.description.substring(0, SEO_CONFIG.MAX_DESCRIPTION_LENGTH - 3) + '...'
        : article.description,
      keywords: article.keywords,
      canonicalUrl: `https://regla.onl${article.url}`,
      ogImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d' // Default image
    };
  }
  
  // For homepage
  if (pageId === 'home') {
    return {
      title: 'Regla Online Tamaño Real | Regla.Onl',
      description: 'Regla online con calibración precisa para medir en cm, mm y pulgadas en tu pantalla. Perfecta para mediciones exactas.',
      keywords: ['regla online', 'regla virtual', 'regla tamaño real', 'regla online cm', 'cinta metrica online'],
      canonicalUrl: getHomepageUrl()
    };
  }
  
  // Default basic metadata
  return {
    title: 'Regla Online | Regla.Onl',
    description: 'Herramienta de medición online precisa y fácil de usar.',
    keywords: ['regla', 'medición', 'online'],
    canonicalUrl: getHomepageUrl()
  };
};

// Check if the internal links density is too high
export const checkLinksDensity = (content: string): boolean => {
  const totalWords = content.split(' ').length;
  const linkMatches = content.match(/<a[^>]*>/g) || [];
  const linksCount = linkMatches.length;
  
  return (linksCount / totalWords) <= SEO_CONFIG.MAX_LINKS_DENSITY;
};

// Suggest internal linking opportunities
export const suggestInternalLinks = (content: string, currentPageId: string): Array<{keyword: string, article: typeof articles[0]}> => {
  const suggestions: Array<{keyword: string, article: typeof articles[0]}> = [];
  
  // Skip if it's not a content page
  if (!content || !currentPageId) return suggestions;
  
  // Get related articles excluding current page
  const relatedArticles = getRelatedArticles(currentPageId, 5);
  
  // Check for each article's keywords in the content
  relatedArticles.forEach(article => {
    article.keywords.forEach(keyword => {
      // Check if keyword appears in content and isn't already linked
      const keywordRegex = new RegExp(`\\b${keyword}\\b(?![^<]*>|[^<>]*<\\/a>)`, 'i');
      if (content.match(keywordRegex)) {
        suggestions.push({
          keyword,
          article
        });
      }
    });
  });
  
  return suggestions.slice(0, SEO_CONFIG.RECOMMENDED_ARTICLE_LINKS);
};

// Automated audit for basic SEO issues
export const auditPageSeo = (pageId: string, content: string): Array<{issue: string, severity: 'high' | 'medium' | 'low', suggestion: string}> => {
  const issues: Array<{issue: string, severity: 'high' | 'medium' | 'low', suggestion: string}> = [];
  
  // Check if canonical URL is set
  if (!content.includes('rel="canonical"')) {
    issues.push({
      issue: 'Missing canonical URL',
      severity: 'high',
      suggestion: `Add <link rel="canonical" href="https://regla.onl${pageId === 'home' ? '' : '/blog/' + pageId}" />`
    });
  }
  
  // Check for homepage links
  if (!content.includes('href="https://regla.onl"') && pageId !== 'home') {
    issues.push({
      issue: 'No links to homepage',
      severity: 'medium',
      suggestion: 'Add at least one contextual link to the homepage in the first 200 words'
    });
  }
  
  // Check for related articles
  if (pageId !== 'home' && !content.includes('<RelatedArticles')) {
    issues.push({
      issue: 'No related articles section',
      severity: 'medium',
      suggestion: 'Add <RelatedArticles currentArticleId="' + pageId + '" /> component'
    });
  }
  
  // Check for meta description length
  const metaDescriptionMatch = content.match(/<meta name="description" content="([^"]+)"/);
  if (metaDescriptionMatch && metaDescriptionMatch[1].length > SEO_CONFIG.MAX_DESCRIPTION_LENGTH) {
    issues.push({
      issue: 'Meta description too long',
      severity: 'medium',
      suggestion: `Shorten meta description to ${SEO_CONFIG.MAX_DESCRIPTION_LENGTH} characters or less`
    });
  }
  
  return issues;
};

export default {
  generateSeoMetadata,
  checkLinksDensity,
  suggestInternalLinks,
  auditPageSeo,
  SEO_CONFIG
};
