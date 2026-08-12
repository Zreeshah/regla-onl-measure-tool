import React from 'react';

export type BlogFaqItem = {
  question: string;
  answer: React.ReactNode;
};

interface BlogFaqProps {
  items: BlogFaqItem[];
  title?: string;
  className?: string;
}

const BlogFaq: React.FC<BlogFaqProps> = ({
  items,
  title = "Preguntas frecuentes",
  className = "",
}) => {
  return (
    <section id="preguntas-frecuentes" className={`my-8 ${className}`.trim()}>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.question} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
            <div className="text-gray-700">
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogFaq;
