import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Наши услуги</Badge>
          <h2 className="text-4xl font-bold mb-4">Всё для вашего агробизнеса</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения для эффективного развития вашего хозяйства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="ShoppingCart" className="text-white" size={28} />
              </div>
              <CardTitle className="text-2xl">Закупка продукции</CardTitle>
              <CardDescription>Покупаем зерновые культуры по выгодным ценам</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Пшеница от 15 000 ₽/т</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Ячмень от 12 000 ₽/т</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Подсолнечник от 28 000 ₽/т</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Быстрая оплата</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl group">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/60 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Fuel" className="text-white" size={28} />
              </div>
              <CardTitle className="text-2xl">Продажа топлива</CardTitle>
              <CardDescription>Качественное топливо с доставкой на объект</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span>Дизельное топливо</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span>Бензин АИ-92, АИ-95</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span>Доставка до 200 км</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span>Гибкая система скидок</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl group">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Calculator" className="text-white" size={28} />
              </div>
              <CardTitle className="text-2xl">Бухгалтерия</CardTitle>
              <CardDescription>Полное бухгалтерское сопровождение бизнеса</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span>Ведение учёта</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span>Подготовка отчётности</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span>Налоговое консультирование</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span>Юридическая поддержка</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
