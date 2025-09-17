import { Crown, Star, Globe, Trophy, Users, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import pageHeaderBg from "@/assets/page-header-bg.jpg";
import { useState } from "react";

const Members = () => {
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [showAllPlayers, setShowAllPlayers] = useState(false);

  const leadership = [
    {
      name: "Lewellyn Louw",
      role: "President",
      level: "Expert",
      achievements: ["Club Leadership Excellence", "Strategic Development"],
      international: true,
      image: "/placeholder.svg"
    },
    {
      name: "Lezerick Cunningham",
      role: "Chairperson",
      level: "Expert",
      achievements: ["Administrative Leadership", "Community Development"],
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Willmore Pietersen",
      role: "Club Leader",
      level: "Expert",
      achievements: ["Team Leadership", "Strategic Planning"],
      national: true,
      image: "/placeholder.svg"
    }
  ];

  const players = [
    // A Team
    {
      name: "NM Charlton Mnyasta",
      role: "National Master",
      level: "National Master",
      achievements: ["Cape Town League Champion", "National Representative"],
      team: "A",
      international: true,
      image: "/placeholder.svg"
    },
    {
      name: "JM Raynier Claassen",
      role: "FIDE Master",
      level: "FIDE Master",
      achievements: ["Regional Tournament Winner", "Club Champion"],
      team: "A",
      international: true,
      image: "/placeholder.svg"
    },
    {
      name: "RM Tezihano Mnyasta",
      role: "Regional Master",
      level: "Regional Master",
      achievements: ["Club Champion", "Tournament Winner"],
      team: "A",
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "RM Michael James",
      role: "Regional Master",
      level: "Regional Master",
      achievements: ["Tournament Champion", "Strategic Excellence"],
      team: "A",
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "JNM Jiraan Braaf",
      role: "Junior National Master",
      level: "Junior National Master",
      achievements: ["Western Cape U18 Champion", "National Representative"],
      team: "A",
      international: true,
      image: "/placeholder.svg"
    },
    {
      name: "Cherwin Chanson Kleinsmidt",
      role: "Team Player",
      level: "Expert",
      achievements: ["Competitive Player", "A Team Regular"],
      team: "A",
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Jamie Morne Geduld",
      role: "Team Player",
      level: "Expert",
      achievements: ["Tournament Participant", "Strategic Play"],
      team: "A",
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Sean Kudzai Chironda",
      role: "Team Player",
      level: "Expert",
      achievements: ["A Team Regular", "Tactical Specialist"],
      team: "A",
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Clayden Taute",
      role: "Team Player",
      level: "Expert",
      achievements: ["Multi-team Player", "Versatile Competitor"],
      team: "A",
      teams: ["A", "B"],
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Llewellyn Theod Louw",
      role: "Team Player",
      level: "Expert",
      achievements: ["Multi-team Player", "Strong Competitor"],
      team: "A",
      teams: ["A", "B"],
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Victor Meiring",
      role: "Team Player",
      level: "Expert",
      achievements: ["Multi-team Player", "Consistent Performance"],
      team: "A",
      teams: ["A", "B"],
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Willmore Pietersen",
      role: "Team Player",
      level: "Expert",
      achievements: ["Multi-team Player", "Team Support"],
      team: "A",
      teams: ["A", "B"],
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Theodor Thys Mentoor",
      role: "Team Player",
      level: "Expert",
      achievements: ["Multi-team Player", "Tactical Skills"],
      team: "A",
      teams: ["A", "B"],
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Rudy Trevor Koopstadt",
      role: "Team Player",
      level: "Expert",
      achievements: ["Multi-team Player", "Competitive Spirit"],
      team: "A",
      teams: ["A", "B"],
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Warren Galant",
      role: "Team Player",
      level: "Expert",
      achievements: ["A Team Player", "Tournament Participant"],
      team: "A",
      national: true,
      image: "/placeholder.svg"
    },
    {
      name: "Ettienne Kapp",
      role: "Team Player",
      level: "Expert",
      achievements: ["A Team Player", "Strategic Mind"],
      team: "A",
      national: true,
      image: "/placeholder.svg"
    },
    // B Team Only Players
    {
      name: "Shaheed Tobias",
      role: "Team Player",
      level: "Class A Player",
      achievements: ["B Team Regular", "Improving Player"],
      team: "B",
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "David Renyele",
      role: "Team Player",
      level: "Class A Player",
      achievements: ["B Team Player", "Dedicated Competitor"],
      team: "B",
      club: true,
      image: "/placeholder.svg"
    },
    // B & C Team Players
    {
      name: "Lezerick Cunningham",
      role: "Team Player",
      level: "Class A Player",
      achievements: ["Multi-team Player", "Leadership Qualities"],
      team: "B",
      teams: ["B", "C"],
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Donvito Mintoor",
      role: "Team Player",
      level: "Class A Player",
      achievements: ["Multi-team Player", "Versatile Player"],
      team: "B",
      teams: ["B", "C"],
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Jovanne Herder",
      role: "Team Player",
      level: "Class A Player",
      achievements: ["Multi-team Player", "Consistent Performer"],
      team: "B",
      teams: ["B", "C"],
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Prince Ngombo",
      role: "Team Player",
      level: "Class A Player",
      achievements: ["Multi-team Player", "Local Tournament Winner"],
      team: "B",
      teams: ["B", "C"],
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Mziwandile Links",
      role: "Team Player",
      level: "Class A Player",
      achievements: ["Multi-team Player", "Team Support"],
      team: "B",
      teams: ["B", "C"],
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Keenan Pharo",
      role: "Team Player",
      level: "Class A Player",
      achievements: ["Multi-team Player", "Rising Talent"],
      team: "B",
      teams: ["B", "C"],
      club: true,
      image: "/placeholder.svg"
    },
    // C Team Only Players
    {
      name: "Elihle Nzimande",
      role: "Team Player",
      level: "Class B Player",
      achievements: ["C Team Regular", "Developing Player"],
      team: "C",
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Keshe Fillies",
      role: "Team Player",
      level: "Class B Player",
      achievements: ["C Team Player", "Youth Development"],
      team: "C",
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Mboyo Belesi Pengele",
      role: "Team Player",
      level: "Class B Player",
      achievements: ["C Team Regular", "Improving Skills"],
      team: "C",
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Naydene Williams",
      role: "Team Player",
      level: "Class B Player",
      achievements: ["C Team Player", "Dedicated Learner"],
      team: "C",
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Davian Mintoor",
      role: "Team Player",
      level: "Class B Player",
      achievements: ["C Team Regular", "Rising Talent"],
      team: "C",
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Fabian Botes",
      role: "Team Player",
      level: "Class B Player",
      achievements: ["C Team Player", "Training Excellence"],
      team: "C",
      club: true,
      image: "/placeholder.svg"
    },
    {
      name: "Believe Pengele",
      role: "Team Player",
      level: "Class B Player",
      achievements: ["C Team Regular", "Youth Development"],
      team: "C",
      club: true,
      image: "/placeholder.svg"
    }
  ];

  const additionalPlayers = [];

  const getMemberBadge = (member: any) => {
    if (member.international) {
      return {
        icon: Globe,
        label: "International",
        color: "bg-accent text-accent-foreground border-accent"
      };
    }
    if (member.national) {
      return {
        icon: Star,
        label: "National",
        color: "bg-gold text-gold-foreground border-gold"
      };
    }
    return {
      icon: Trophy,
      label: "Club",
      color: "bg-muted text-muted-foreground border-muted"
    };
  };

  const getTeamColor = (team: string) => {
    switch (team) {
      case "A":
        return "bg-accent text-accent-foreground border-accent";
      case "B":
        return "bg-gold text-gold-foreground border-gold";
      case "C":
        return "bg-muted text-muted-foreground border-muted";
      default:
        return "bg-border text-foreground border-border";
    }
  };

  const filteredPlayers = selectedTeam === "All" 
    ? players 
    : players.filter(player => player.team === selectedTeam);

  const displayedPlayers = showAllPlayers 
    ? [...filteredPlayers, ...additionalPlayers.filter(p => selectedTeam === "All" || p.team === selectedTeam)]
    : filteredPlayers;

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
            Our <span className="text-accent">Champions</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Meet the strategic minds behind our championship success
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Club <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guiding our club with strategic vision and competitive excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {leadership.map((member, index) => {
              const badge = getMemberBadge(member);
              const BadgeIcon = badge.icon;
              
              return (
                <div key={index} className="championship-card group bg-accent/5 border-accent">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="w-32 h-32 mx-auto rounded-full bg-muted border-2 border-accent overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full border-2 ${badge.color} flex items-center justify-center shadow-lg`}>
                        <BadgeIcon className="h-5 w-5" />
                      </div>
                      
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <Crown className="h-8 w-8 text-accent" />
                      </div>
                    </div>

                    <h3 className="font-playfair text-2xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-lg gold-accent font-medium mb-2">
                      {member.role}
                    </p>
                    
                    <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                      {member.level}
                    </div>

                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground">
                          • {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Players Section */}
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-accent">Players</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Talented players representing Blackjacks across all competitive levels
            </p>

            {/* Team Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["All", "A", "B", "C"].map((team) => (
                <Button
                  key={team}
                  variant={selectedTeam === team ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTeam(team)}
                  className={selectedTeam === team ? "btn-hero-gold" : ""}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {team === "All" ? "All Teams" : `Team ${team}`}
                </Button>
              ))}
            </div>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedPlayers.map((member, index) => {
              const badge = getMemberBadge(member);
              const BadgeIcon = badge.icon;
              
              return (
                <div key={index} className="championship-card group">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-muted border-2 border-border overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 ${badge.color} flex items-center justify-center shadow-lg`}>
                        <BadgeIcon className="h-3 w-3" />
                      </div>
                      
                      {member.international && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Crown className="h-5 w-5 text-accent" />
                        </div>
                      )}
                    </div>

                    <h3 className="font-playfair text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    
                    {member.role && (
                      <p className="text-xs gold-accent font-medium mb-2">
                        {member.role}
                      </p>
                    )}
                    
                    <div className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">
                      {member.level}
                    </div>

                     {member.team && (
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getTeamColor(member.team)} mb-3`}>
                        {(member as any).teams && (member as any).teams.length > 1 
                          ? `Teams ${(member as any).teams.join(', ')}`
                          : `Team ${member.team}`
                        }
                      </div>
                    )}

                    {member.achievements && (
                      <div className="space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground">
                            • {achievement}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* See More Button */}
          {!showAllPlayers && (
            <div className="text-center mt-8">
              <Button 
                className="btn-hero"
                onClick={() => setShowAllPlayers(true)}
              >
                <Users className="h-4 w-4 mr-2" />
                See the Rest ({additionalPlayers.length} more players)
              </Button>
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center championship-card bg-accent/5 border-accent">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-bold gold-accent mb-2">3</h3>
              <p className="text-muted-foreground">International Representatives</p>
            </div>
            
            <div className="text-center championship-card bg-gold/5 border-gold">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-gold-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-bold gold-accent mb-2">8</h3>
              <p className="text-muted-foreground">National Level Players</p>
            </div>
            
            <div className="text-center championship-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-bold gold-accent mb-2">30+</h3>
              <p className="text-muted-foreground">Active Club Members</p>
            </div>
          </div>

          {/* Join CTA */}
          <div className="mt-16 text-center championship-card bg-muted/50">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Ready to Join Our Champions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a beginner learning your first moves or an experienced player 
              seeking championship-level competition, there's a place for you at Blackjacks.
            </p>
            <Button className="btn-hero-gold px-8 py-3">
              Become a Member
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Members;