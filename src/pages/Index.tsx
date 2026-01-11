import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Calculators from '@/components/Calculators';
import News from '@/components/News';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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
      
      <a href="tel:+79277486868">
        <Button
          size="lg"
          className="fixed bottom-4 left-4 rounded-full h-14 px-6 shadow-2xl bg-gradient-to-r from-secondary to-secondary/80 hover:scale-110 transition-transform z-40 flex items-center gap-2"
        >
          <Icon name="Phone" size={24} />
          <span className="hidden sm:inline font-semibold">+7 927 748 68 68</span>
        </Button>
      </a>
    </div>
  );
};

export default Index;