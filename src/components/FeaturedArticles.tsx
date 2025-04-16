
import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedArticles } from '@/utils/internalLinking';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const FeaturedArticles: React.FC = () => {
  const featuredArticles = getFeaturedArticles(4);
  
  return (
    <div className="mt-8 mb-12">
      <h2 className="text-2xl font-bold text-[#9b87f5] mb-6">Artículos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{article.title}</CardTitle>
              <CardDescription className="line-clamp-2">{article.description}</CardDescription>
            </CardHeader>
            <CardFooter className="pt-2">
              <Link 
                to={article.url} 
                className="text-sm text-[#9b87f5] hover:text-[#7a68d2] flex items-center"
              >
                Leer más <ArrowRight size={14} className="ml-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
