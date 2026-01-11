import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Order {
  id: string;
  type: string;
  product: string;
  amount: string;
  price: string;
  status: string;
  date: string;
}

interface Document {
  name: string;
  date: string;
  size: string;
  type: string;
}

interface OrdersAndDocumentsProps {
  orders: Order[];
  documents: Document[];
  getStatusColor: (status: string) => string;
}

const OrdersAndDocuments = ({ orders, documents, getStatusColor }: OrdersAndDocumentsProps) => {
  const [orderSearch, setOrderSearch] = useState('');
  const [documentSearch, setDocumentSearch] = useState('');

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(orderSearch.toLowerCase()) ||
    order.type.toLowerCase().includes(orderSearch.toLowerCase()) ||
    order.product.toLowerCase().includes(orderSearch.toLowerCase()) ||
    order.status.toLowerCase().includes(orderSearch.toLowerCase())
  );

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(documentSearch.toLowerCase()) ||
    doc.type.toLowerCase().includes(documentSearch.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ['Номер заказа', 'Тип', 'Продукт', 'Количество', 'Цена', 'Статус', 'Дата'];
    const csvContent = [
      headers.join(','),
      ...filteredOrders.map(order => 
        [order.id, order.type, order.product, order.amount, order.price, order.status, order.date]
          .map(field => `"${field}"`)
          .join(',')
      )
    ].join('\n');

    const blob = new Blob([`\uFEFF${csvContent}`], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `заказы_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Tabs defaultValue="orders" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="orders">Мои заказы</TabsTrigger>
        <TabsTrigger value="documents">Документы</TabsTrigger>
      </TabsList>

      <TabsContent value="orders" className="space-y-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>История заказов</CardTitle>
                <CardDescription>Все ваши сделки и услуги</CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={exportToCSV}
                disabled={filteredOrders.length === 0}
              >
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по заказам..."
                value={orderSearch}
                onChange={(e) => setOrderSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            {filteredOrders.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Icon name="Search" size={48} className="mx-auto mb-2 opacity-50" />
                <p>Заказы не найдены</p>
              </div>
            ) : (
              filteredOrders.map((order) => (
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
            )))}
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
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по документам..."
                value={documentSearch}
                onChange={(e) => setDocumentSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            {filteredDocuments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Icon name="Search" size={48} className="mx-auto mb-2 opacity-50" />
                <p>Документы не найдены</p>
              </div>
            ) : (
              filteredDocuments.map((doc, index) => (
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
            )))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default OrdersAndDocuments;