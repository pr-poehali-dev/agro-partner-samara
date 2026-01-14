import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Calculators = () => {
  const [grainAmount, setGrainAmount] = useState('');
  const [grainType, setGrainType] = useState('wheat');
  const [fuelAmount, setFuelAmount] = useState('');
  const [fuelType, setFuelType] = useState('diesel');
  const [accountingPackage, setAccountingPackage] = useState('basic');

  const grainPrices: Record<string, number> = {
    wheat: 18500,  // Пшеница 3 класса - 18 500 ₽/тонна
    barley: 14800,  // Ячмень фуражный - 14 800 ₽/тонна
    sunflower: 35000  // Подсолнечник масличный - 35 000 ₽/тонна
  };

  const fuelPrices: Record<string, number> = {
    diesel: 76,
    petrol: 63
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
                <CardTitle>Закупка зерна с логистикой</CardTitle>
                <CardDescription>Закупаем зерно любых объёмов с доставкой нашим транспортом</CardDescription>
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
                  <h3 className="font-semibold text-lg mb-3">Наши услуги:</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Закупка зерна по рыночным ценам</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Услуги профессионального логиста</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Доставка собственным транспортом</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Быстрая обработка документов</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Оставьте заявку, и мы рассчитаем цену закупки индивидуально
                  </p>
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
  );
};

export default Calculators;