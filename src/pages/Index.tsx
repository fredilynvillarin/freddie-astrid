
import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import RSVP from "@/components/RSVP";
import Story from "@/components/Story";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <WeddingDetails />
      <Story />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;
