
import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(to bottom, #E3DEE9 0%, #ECDDD2 50%, #f5f4ed 100%)'
    }}>
      <Hero />
      <WeddingDetails />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;
