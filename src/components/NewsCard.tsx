import { useState } from "react";
import { Calendar, User, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    featured: boolean;
  };
  getCategoryColor: (category: string) => string;
}

const NewsCard = ({ article, getCategoryColor }: NewsCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get first 3 lines of content (approximately)
  const getPreviewContent = (content: string) => {
    const words = content.split(' ');
    const previewWords = words.slice(0, 25); // Roughly 3 lines
    return previewWords.join(' ') + (words.length > 25 ? '...' : '');
  };

  return (
    <article 
      className={`championship-card ${article.featured ? 'border-accent bg-accent/5' : ''} p-6`}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
            {article.category}
          </div>
          {article.featured && (
            <div className="gold-accent text-xs font-semibold uppercase tracking-wider">
              ⭐ Featured
            </div>
          )}
        </div>

        <h2 className="font-playfair text-2xl md:text-3xl font-bold">
          {article.title}
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {article.excerpt}
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="text-foreground leading-relaxed">
            {isExpanded ? article.content : getPreviewContent(article.content)}
          </p>
        </div>

        {article.content.split(' ').length > 25 && (
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-start p-0 h-auto text-accent hover:text-accent/80"
          >
            {isExpanded ? (
              <>
                <span className="mr-1">Read less</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span className="mr-1">Read more</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;