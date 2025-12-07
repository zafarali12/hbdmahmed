import Confetti from '@/components/Confetti';
import HeroSection from '@/components/HeroSection';
import AgeHighlight from '@/components/AgeHighlight';
import MilestonesTimeline from '@/components/MilestonesTimeline';
import ThingsHeLoves from '@/components/ThingsHeLoves';
import MessageFromMamu from '@/components/MessageFromMamu';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Confetti />
      <HeroSection />
      <AgeHighlight />
      <MilestonesTimeline />
      <ThingsHeLoves />
      <MessageFromMamu />
      <Footer />
    </div>
  );
};

export default Index;
