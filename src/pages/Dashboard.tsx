import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Dashboard = () => {
  const [user] = useState({
    name: 'Иван Петров',
    company: 'ООО "Колос"',
    email: 'ivan@kolos.ru',
    phone: '+7 (927) 123-45-67'
  });

  const orders = [
    {
      id: '№2024-001',
      type: 'Продажа зерна',
      product: 'Пшеница',
      amount: '50 тонн',
      price: '750 000 ₽',
      status: 'Выполнен',
      date: '05.01.2026'
    },
    {
      id: '№2024-002',
      type: 'Покупка топлива',
      product: 'Дизель',
      amount: '3000 л',
      price: '174 000 ₽',
      status: 'В обработке',
      date: '08.01.2026'
    },
    {
      id: '№2024-003',
      type: 'Бухгалтерия',
      product: 'Пакет "Стандарт"',
      amount: '1 месяц',
      price: '35 000 ₽',
      status: 'Активен',
      date: '01.01.2026'
    }
  ];

  const documents = [
    { name: 'Договор поставки №123', date: '05.01.2026', size: '234 КБ', type: 'PDF' },
    { name: 'Акт приема-передачи', date: '05.01.2026', size: '156 КБ', type: 'PDF' },
    { name: 'Счет-фактура №456', date: '08.01.2026', size: '189 КБ', type: 'PDF' },
    { name: 'Договор на бухуслуги', date: '01.01.2026', size: '312 КБ', type: 'PDF' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Выполнен':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'В обработке':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Активен':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
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
              <p className="text-sm text-muted-foreground">Личный кабинет</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <a href="/">На главную</a>
            </Button>
            <Button variant="outline">
              <Icon name="LogOut" size={18} className="mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={40} className="text-primary" />
              </div>
              <CardTitle className="text-center">{user.name}</CardTitle>
              <CardDescription className="text-center">{user.company}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Mail" size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Phone" size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">{user.phone}</span>
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-3 space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Всего заказов</CardDescription>
                  <CardTitle className="text-3xl">12</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="TrendingUp" size={16} className="text-primary" />
                    <span>+3 за месяц</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Сумма сделок</CardDescription>
                  <CardTitle className="text-3xl">2.8М ₽</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="ArrowUp" size={16} className="text-primary" />
                    <span>+18% за год</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Активных услуг</CardDescription>
                  <CardTitle className="text-3xl">3</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                    <span>Все оплачены</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="orders">Мои заказы</TabsTrigger>
                <TabsTrigger value="documents">Документы</TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>История заказов</CardTitle>
                    <CardDescription>Все ваши сделки и услуги</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border rounded-xl hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold">{order.id}</span>
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{order.type}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="font-medium">{order.product}</span>
                            <span className="text-muted-foreground">{order.amount}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary mb-1">{order.price}</p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full" variant="outline">
                      <Icon name="Plus" size={18} className="mr-2" />
                      Создать новый заказ
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Мои документы</CardTitle>
                    <CardDescription>Договоры, акты и счета</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-xl hover:bg-accent/5 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Icon name="FileText" className="text-secondary" size={24} />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {doc.date} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Icon name="Download" size={18} />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Bell" className="text-primary" />
                  Новое предложение
                </CardTitle>
                <CardDescription>
                  Специальная цена на пшеницу высшего качества — 16 000 ₽/т только до конца месяца!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-gradient-to-r from-primary to-primary/80">
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
