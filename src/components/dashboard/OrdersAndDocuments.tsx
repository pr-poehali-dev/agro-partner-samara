import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  return (
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
  );
};

export default OrdersAndDocuments;
