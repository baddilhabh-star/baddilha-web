import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Abstract from '@/components/Abstract';
import Objectives from '@/components/Objectives';
import Methodology from '@/components/Methodology';
import Technologies from '@/components/Technologies';
import Results from '@/components/Results';
import Demo from '@/components/Demo';
import Conclusion from '@/components/Conclusion';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Abstract />
      <Objectives />
      <Methodology />
      <Technologies />
      <Results />
      <Demo />
      <Conclusion />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
