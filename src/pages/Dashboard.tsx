import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import ProfileCard from '@/components/dashboard/ProfileCard';
import OrdersAndDocuments from '@/components/dashboard/OrdersAndDocuments';
import EditProfileModal from '@/components/dashboard/EditProfileModal';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'Иван Петров',
    company: 'ООО "Колос"',
    email: 'ivan@kolos.ru',
    phone: '+7 (927) 123-45-67',
    avatar: ''
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(user);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Новый заказ обработан',
      message: 'Заказ №2024-002 находится в обработке',
      time: '2 часа назад',
      read: false,
      type: 'order'
    },
    {
      id: 2,
      title: 'Документ готов',
      message: 'Счет-фактура №456 доступен для скачивания',
      time: '5 часов назад',
      read: false,
      type: 'document'
    },
    {
      id: 3,
      title: 'Специальное предложение',
      message: 'Скидка 10% на бухгалтерские услуги',
      time: 'вчера',
      read: true,
      type: 'promo'
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData({ ...editData, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

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
      <DashboardHeader
        notifications={notifications}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        unreadCount={unreadCount}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <ProfileCard
            user={user}
            onEditClick={() => {
              setEditData(user);
              setShowEditModal(true);
            }}
          />

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

            <OrdersAndDocuments
              orders={orders}
              documents={documents}
              getStatusColor={getStatusColor}
            />

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

      <EditProfileModal
        showEditModal={showEditModal}
        editData={editData}
        setEditData={setEditData}
        setShowEditModal={setShowEditModal}
        handleAvatarChange={handleAvatarChange}
        onSave={setUser}
      />
    </div>
  );
};

export default Dashboard;
