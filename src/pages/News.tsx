import { useState } from "react";
import { Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import NewsCard from "@/components/NewsCard";
import pageHeaderBg from "@/assets/page-header-bg.jpg";

const News = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const newsArticles = [
    {
      id: 1,
      title: "Blackjacks Wins Cape Town Chess Federation Club League 2024",
      excerpt: "Historic victory as Blackjacks Chess Club claims the prestigious Cape Town Chess Federation Club League championship for 2024.",
      content: "In a remarkable achievement that will be remembered for years to come, Blackjacks Chess Club has won the Cape Town Chess Federation Club League 2024. Our teams dominated throughout the season with outstanding performances from all players. The A-team led by NM Charlton Mnyasta and JNM Jiraan Braaf secured crucial victories in the final rounds. Our B and C teams also contributed significantly to this historic championship win. This victory represents the culmination of years of dedicated training, strategic planning, and exceptional teamwork across all levels of the club.",
      author: "Club President",
      date: "2024-11-15",
      category: "Club News",
      featured: true
    },
    {
      id: 2,
      title: "New Training Schedule Announced for 2025",
      excerpt: "Enhanced training program every Friday at Parow Library, featuring specialized sessions for different skill levels.",
      content: "We're excited to announce our comprehensive 2025 training schedule. Every Friday from 2pm-4pm at Parow Library, we'll be hosting structured training sessions. The program includes tactical training, endgame studies, opening theory, and analysis of recent club games. Special focus will be given to junior development under the guidance of our experienced masters.",
      author: "Training Coordinator",
      date: "2024-12-08",
      category: "Club News",
      featured: false
    },
    {
      id: 3,
      title: "Junior Championship Success: Braaf Wins Western Cape U18",
      excerpt: "JNM Jiraan Braaf claims the Western Cape Under-18 Championship with an undefeated performance.",
      content: "Junior National Master Jiraan Braaf has brought glory to Blackjacks Chess Club by winning the prestigious Western Cape Under-18 Championship. Scoring 8.5/9 points and remaining undefeated throughout the tournament, Jiraan's victory secures him a spot in the national junior championships. His tactical brilliance and solid positional understanding were on full display.",
      author: "Youth Coordinator",
      date: "2024-12-05",
      category: "Individual News",
      featured: true
    },
    {
      id: 4,
      title: "Preparing for African Chess Junior Championship 2025",
      excerpt: "NM Charlton Mnyasta and JNM Jiraan Braaf qualified to represent Western Cape at the upcoming continental championship.",
      content: "We're proud to announce that two of our most talented members, NM Charlton Mnyasta and JNM Jiraan Braaf, have qualified for the African Chess Junior Championship 2025 taking place on September 17th. The intensive preparation includes specialized coaching, theoretical study, and practice games against strong opposition. Both players have shown exceptional dedication and skill development. This represents a significant milestone for our club's youth development program and demonstrates the high caliber of chess talent we're nurturing at Blackjacks.",
      author: "Youth Development Team",
      date: "2024-11-28",
      category: "Individual News",
      featured: false
    }
  ];

  const filters = ["All", "General News", "Club News", "Individual News", "Past News"];
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Individual News":
        return "bg-accent text-accent-foreground border-accent";
      case "Club News":
        return "bg-gold text-gold-foreground border-gold";
      case "General News":
        return "bg-blue-500 text-white border-blue-500";
      case "Past News":
        return "bg-gray-500 text-white border-gray-500";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  const filteredArticles = selectedFilter === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-20 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${pageHeaderBg})`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-white">
            Club <span className="text-accent">News</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Stay updated with the latest from Blackjacks Chess Club
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Buttons */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={`${selectedFilter === filter ? 'bg-accent text-accent-foreground' : ''}`}
              >
                <Filter className="h-3 w-3 mr-1" />
                {filter}
              </Button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredArticles.map((article) => (
              <NewsCard 
                key={article.id} 
                article={article} 
                getCategoryColor={getCategoryColor} 
              />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;