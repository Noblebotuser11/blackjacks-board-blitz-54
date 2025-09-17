import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RotatingQuotes from "@/components/RotatingQuotes";
import { Button } from "@/components/ui/button";
import pageHeaderBg from "@/assets/page-header-bg.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  Trophy, 
  Target, 
  Star, 
  Monitor,
  Mail,
  Phone,
  Globe,
  MapPin
} from "lucide-react";

const Academy = () => {
  const offerings = [
    {
      title: "Beginner, Intermediate & Advanced Coaching",
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      title: "One-on-One & Group Training Options",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "School-based Chess Programs",
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "Tournament Preparation & Strategy",
      icon: <Trophy className="h-8 w-8" />
    },
    {
      title: "Talent Identification & Development",
      icon: <Star className="h-8 w-8" />
    },
    {
      title: "Online & In-Person Sessions",
      icon: <Monitor className="h-8 w-8" />
    }
  ];

  const coaches = [
    {
      name: "Charlton Mnyasta",
      title: "FIDE Rated Player, National Representative, Olympiad Team Member",
      credentials: "FIDE 2172, SA National Team 2024 Olympiad Hungary, Top 4 SA Closed"
    },
    {
      name: "Jiraan Braaf",
      title: "Regional Champion, Youth Development Coach",
      credentials: ""
    },
    {
      name: "Tezihano Mnyasta",
      title: "Junior Champion, Tactical Specialist",
      credentials: ""
    },
    {
      name: "Llewelyn Louw",
      title: "Founder, FIDE-Certified Organiser, National Arbiter",
      credentials: "Cape Town Chess Federation President"
    },
    {
      name: "Wilmore Pietersen",
      title: "Experienced Coach, Youth Mentor",
      credentials: ""
    },
    {
      name: "Cherwin Kleinsmidt",
      title: "Senior Player, Positional Play Expert",
      credentials: ""
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${pageHeaderBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blackjacks Chess Academy
          </h1>
          <RotatingQuotes />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Blackjacks Chess Academy was founded to make high-quality chess education accessible to all, 
              especially in communities where resources and structured coaching are limited. The academy is 
              committed to developing well-rounded players — from curious beginners to competitive champions — 
              by nurturing skills such as critical thinking, focus, and resilience.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
              What We Offer
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <Card key={index} className="championship-card text-center">
                <CardContent className="p-6">
                  <div className="text-accent mb-4 flex justify-center">
                    {offering.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {offering.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Coaches Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
              Meet Our Coaches
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach, index) => (
              <Card key={index} className="championship-card">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 gold-accent text-center">
                    {coach.name}
                  </h3>
                  <p className="text-sm font-medium text-foreground mb-2 text-center">
                    {coach.title}
                  </p>
                  {coach.credentials && (
                    <p className="text-xs text-muted-foreground text-center">
                      {coach.credentials}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolment & Contact Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
              Enrolment & Contact
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="championship-card text-center">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-foreground">youracademy@email.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-foreground">[Insert Number]</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Globe className="h-5 w-5 text-accent" />
                    <span className="text-foreground">[Insert URL]</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-foreground">Cape Town, South Africa</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Online options available
                </p>
                
                <Button className="btn-hero-gold">
                  Join Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;