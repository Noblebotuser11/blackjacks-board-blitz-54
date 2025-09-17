import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AcademyTeaser from "@/components/AcademyTeaser";
import NewsPreview from "@/components/NewsPreview";
import PagePreviews from "@/components/PagePreviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AchievementsSection />
      <AcademyTeaser />
      <NewsPreview />
      <PagePreviews />
      <Footer />
    </div>
  );
};

export default Index;
