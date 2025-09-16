import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const AcademyTeaser = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="championship-card max-w-4xl mx-auto text-center">
          <CardContent className="p-8">
            <div className="text-accent mb-6 flex justify-center">
              <GraduationCap className="h-16 w-16" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
              Introducing the Blackjacks Chess Academy
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Empowering Minds Through Chess. Learn more about our programs and coaching team.
            </p>
            <Link to="/academy">
              <Button className="btn-hero-gold">
                Learn More
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AcademyTeaser;