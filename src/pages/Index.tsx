import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Calculators from '@/components/Calculators';
import News from '@/components/News';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header />
      <Hero />
      <Services />
      <Calculators />
      <News />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;