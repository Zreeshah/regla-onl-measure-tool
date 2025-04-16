
import React from 'react';
import { Link } from 'react-router-dom';
import { getRelatedArticles } from '@/utils/internalLinking';
import { ArrowRight } from 'lucide-react';

interface RelatedArticlesProps {
  currentArticleId: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentArticleId }) => {
  const relatedArticles = getRelatedArticles(currentArticleId, 2);
  
  if (relatedArticles.length === 0) return null;
  
  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Artículos Relacionados</h3>
      <div className="space-y-4">
        {relatedArticles.map(article => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-1">{article.title}</h4>
            <p className="text-gray-600 text-sm mb-2">{article.description}</p>
            <Link 
              to={article.url}
              className="text-sm text-[#9b87f5] hover:text-[#7a68d2] flex items-center"
            >
              Leer más <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
