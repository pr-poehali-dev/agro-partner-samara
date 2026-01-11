import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [grainAmount, setGrainAmount] = useState('');
  const [grainType, setGrainType] = useState('wheat');
  const [fuelAmount, setFuelAmount] = useState('');
  const [fuelType, setFuelType] = useState('diesel');
  const [accountingPackage, setAccountingPackage] = useState('basic');

  const grainPrices: Record<string, number> = {
    wheat: 15000,
    barley: 12000,
    sunflower: 28000
  };

  const fuelPrices: Record<string, number> = {
    diesel: 58,
    petrol: 52
  };

  const accountingPrices: Record<string, number> = {
    basic: 15000,
    standard: 35000,
    premium: 65000
  };

  const calculateGrainPrice = () => {
    const amount = parseFloat(grainAmount);
    if (isNaN(amount)) return 0;
    return amount * grainPrices[grainType];
  };

  const calculateFuelPrice = () => {
    const amount = parseFloat(fuelAmount);
    if (isNaN(amount)) return 0;
    return amount * fuelPrices[fuelType];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
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

      <section id="calculators" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary">Интерактивные инструменты</Badge>
            <h2 className="text-4xl font-bold mb-4">Калькуляторы стоимости</h2>
            <p className="text-xl text-muted-foreground">
              Рассчитайте стоимость услуг онлайн в режиме реального времени
            </p>
          </div>

          <Tabs defaultValue="grain" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="grain">Закупка зерна</TabsTrigger>
              <TabsTrigger value="fuel">Топливо</TabsTrigger>
              <TabsTrigger value="accounting">Бухгалтерия</TabsTrigger>
            </TabsList>

            <TabsContent value="grain">
              <Card>
                <CardHeader>
                  <CardTitle>Калькулятор закупки зерна</CardTitle>
                  <CardDescription>Узнайте стоимость продажи вашего урожая</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Тип культуры</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant={grainType === 'wheat' ? 'default' : 'outline'}
                        onClick={() => setGrainType('wheat')}
                        className="w-full"
                      >
                        Пшеница
                      </Button>
                      <Button
                        variant={grainType === 'barley' ? 'default' : 'outline'}
                        onClick={() => setGrainType('barley')}
                        className="w-full"
                      >
                        Ячмень
                      </Button>
                      <Button
                        variant={grainType === 'sunflower' ? 'default' : 'outline'}
                        onClick={() => setGrainType('sunflower')}
                        className="w-full"
                      >
                        Подсолнечник
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grainAmount">Количество (тонн)</Label>
                    <Input
                      id="grainAmount"
                      type="number"
                      placeholder="Введите количество"
                      value={grainAmount}
                      onChange={(e) => setGrainAmount(e.target.value)}
                    />
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border-2 border-primary/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Цена за тонну:</span>
                      <span className="text-xl font-semibold">{grainPrices[grainType].toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Итоговая стоимость:</span>
                      <span className="text-3xl font-bold text-primary">
                        {calculateGrainPrice().toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Оставить заявку на продажу
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fuel">
              <Card>
                <CardHeader>
                  <CardTitle>Калькулятор топлива</CardTitle>
                  <CardDescription>Рассчитайте стоимость покупки топлива</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Тип топлива</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant={fuelType === 'diesel' ? 'default' : 'outline'}
                        onClick={() => setFuelType('diesel')}
                        className="w-full"
                      >
                        Дизель
                      </Button>
                      <Button
                        variant={fuelType === 'petrol' ? 'default' : 'outline'}
                        onClick={() => setFuelType('petrol')}
                        className="w-full"
                      >
                        Бензин
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fuelAmount">Объём (литров)</Label>
                    <Input
                      id="fuelAmount"
                      type="number"
                      placeholder="Введите объём"
                      value={fuelAmount}
                      onChange={(e) => setFuelAmount(e.target.value)}
                    />
                  </div>

                  <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-6 border-2 border-secondary/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Цена за литр:</span>
                      <span className="text-xl font-semibold">{fuelPrices[fuelType]} ₽</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Итоговая стоимость:</span>
                      <span className="text-3xl font-bold text-secondary">
                        {calculateFuelPrice().toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" variant="secondary">
                    Заказать топливо
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accounting">
              <Card>
                <CardHeader>
                  <CardTitle>Калькулятор бухгалтерских услуг</CardTitle>
                  <CardDescription>Выберите подходящий пакет услуг</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Пакет услуг</Label>
                    
                    <div
                      onClick={() => setAccountingPackage('basic')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        accountingPackage === 'basic' ? 'border-accent bg-accent/5' : 'border-muted hover:border-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg">Базовый</span>
                        <Badge variant="secondary">15 000 ₽/мес</Badge>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ведение учёта</li>
                        <li>• Сдача отчётности</li>
                      </ul>
                    </div>

                    <div
                      onClick={() => setAccountingPackage('standard')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        accountingPackage === 'standard' ? 'border-accent bg-accent/5' : 'border-muted hover:border-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg">Стандарт</span>
                        <Badge variant="secondary">35 000 ₽/мес</Badge>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Всё из Базового</li>
                        <li>• Налоговое планирование</li>
                        <li>• Консультации по телефону</li>
                      </ul>
                    </div>

                    <div
                      onClick={() => setAccountingPackage('premium')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        accountingPackage === 'premium' ? 'border-accent bg-accent/5' : 'border-muted hover:border-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg">Премиум</span>
                        <Badge variant="secondary">65 000 ₽/мес</Badge>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Всё из Стандарта</li>
                        <li>• Персональный бухгалтер</li>
                        <li>• Юридическое сопровождение</li>
                        <li>• Финансовый анализ</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border-2 border-accent/20">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Стоимость в месяц:</span>
                      <span className="text-3xl font-bold text-accent">
                        {accountingPrices[accountingPackage].toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Подключить бухгалтерию
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Новости</Badge>
            <h2 className="text-4xl font-bold mb-4">Последние события</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Новые цены на пшеницу',
                date: '10 января 2026',
                description: 'Повышение закупочных цен на пшеницу высшего качества до 16 000 ₽/т',
                icon: 'TrendingUp'
              },
              {
                title: 'Акция на дизельное топливо',
                date: '8 января 2026',
                description: 'Скидка 5% при заказе от 5000 литров. Успейте до конца месяца!',
                icon: 'Percent'
              },
              {
                title: 'Бесплатная консультация',
                date: '5 января 2026',
                description: 'Первичная консультация бухгалтера бесплатно для новых клиентов',
                icon: 'Gift'
              }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={news.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{news.title}</CardTitle>
                  <CardDescription className="text-xs">{news.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary to-accent text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">АгроПартнер Самара</h3>
              <p className="text-white/80">Инновационная платформа для агробизнеса</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Закупка зерна</li>
                <li>Продажа топлива</li>
                <li>Бухгалтерия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (846) 123-45-67</li>
                <li>info@agropartner.ru</li>
                <li>г. Самара</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Mail" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Phone" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2026 АгроПартнер Самара. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;