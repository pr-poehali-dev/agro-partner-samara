import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
            <Icon name="Wheat" className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">АгроПартнер</h1>
            <p className="text-sm text-muted-foreground">Самара</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
          <a href="#calculators" className="text-foreground hover:text-primary transition-colors font-medium">Калькуляторы</a>
          <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium">Новости</a>
          <Button>Войти</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
