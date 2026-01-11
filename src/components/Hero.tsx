import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Инновационная платформа</Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Взаимовыгодное сотрудничество для{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                агробизнеса
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Покупаем зерно, продаем топливо, оказываем бухгалтерские услуги. Простота, выгода, надёжность!
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Стать партнером
              </Button>
              <Button size="lg" variant="outline">
                Подробнее
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/0f757a2f-958c-4c3d-9cb1-5ff4368aa25d/files/634ad628-10cc-434d-bbdd-42ff747fcac5.jpg"
              alt="Сельское хозяйство"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
