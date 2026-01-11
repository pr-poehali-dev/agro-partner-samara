import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const News = () => {
  const newsItems = [
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
  ];

  return (
    <section id="news" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Новости</Badge>
          <h2 className="text-4xl font-bold mb-4">Последние события</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
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
  );
};

export default News;
