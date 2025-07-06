
import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <WeddingDetails />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;
