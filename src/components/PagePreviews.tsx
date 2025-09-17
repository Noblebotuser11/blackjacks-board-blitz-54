import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  Trophy, 
  Brain, 
  Phone, 
  Newspaper,
  ChevronRight
} from "lucide-react";

const PagePreviews = () => {
  const pagePreviewsData = [
    {
      title: "About Us",
      path: "/about",
      icon: Users,
      description: "Learn about our rich history, championship achievements, and the values that drive our chess excellence.",
      highlights: ["Championship Record", "Club Values", "Our Story"],
      color: "border-accent bg-accent/5"
    },
    {
      title: "Chess Academy",
      path: "/academy",
      icon: GraduationCap,
      description: "Discover our comprehensive chess education programs from beginner to master level coaching.",
      highlights: ["Expert Coaches", "All Skill Levels", "Tournament Prep"],
      color: "border-gold bg-gold/5"
    },
    {
      title: "Events",
      path: "/events",
      icon: Calendar,
      description: "Stay updated with upcoming tournaments, training sessions, and special chess events.",
      highlights: ["Weekly Training", "League Games", "Tournaments"],
      color: "border-blue-500 bg-blue-500/5"
    },
    {
      title: "Our Members",
      path: "/members",
      icon: Trophy,
      description: "Meet our talented players across A, B, and C teams, from club level to international champions.",
      highlights: ["A Team Masters", "Multi-Team Players", "Leadership"],
      color: "border-purple-500 bg-purple-500/5"
    },
    {
      title: "Daily Puzzles",
      path: "/puzzles",
      icon: Brain,
      description: "Challenge yourself with tactical puzzles, endgame studies, and strategic problem-solving.",
      highlights: ["Daily Challenges", "All Difficulty Levels", "Track Progress"],
      color: "border-green-500 bg-green-500/5"
    },
    {
      title: "Contact",
      path: "/contact",
      icon: Phone,
      description: "Get in touch with us for membership, training, or any questions about joining our club.",
      highlights: ["Meeting Times", "Location Info", "Get Started"],
      color: "border-red-500 bg-red-500/5"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Explore <span className="text-accent">Everything</span> We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From championship-level training to competitive tournaments, discover all aspects of the Blackjacks Chess Club experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pagePreviewsData.map((preview, index) => {
            const IconComponent = preview.icon;
            return (
              <Link 
                key={index}
                to={preview.path}
                className="group"
              >
                <div className={`championship-card ${preview.color} h-full transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {preview.title}
                      </h3>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {preview.description}
                  </p>

                  <div className="space-y-2">
                    {preview.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-between group-hover:bg-accent/10 transition-colors"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PagePreviews;