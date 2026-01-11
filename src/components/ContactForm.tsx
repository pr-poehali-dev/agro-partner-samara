import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Оставьте заявку</h2>
          <p className="text-xl text-muted-foreground">
            Мы свяжемся с вами в течение 15 минут и ответим на все вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-xl animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Send" className="text-primary" />
                Форма обратной связи
              </CardTitle>
              <CardDescription>
                Заполните форму и наш менеджер свяжется с вами
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">ФИО *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Название компании</Label>
                    <Input
                      id="company"
                      placeholder="ООО &quot;Колос&quot;"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (927) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@kolos.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем запросе..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Быстрый ответ</h3>
                <p className="text-muted-foreground">
                  Мы отвечаем на заявки в течение 15 минут в рабочее время
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Прямой контакт</h3>
                <p className="text-muted-foreground mb-2">
                  Или позвоните нам напрямую:
                </p>
                <a href="tel:+79277486868" className="text-lg font-semibold text-secondary hover:underline">
                  +7 927 748 68 68
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Наш офис</h3>
                <p className="text-muted-foreground">
                  г. Самара, ул. Промышленная, 15<br />
                  Пн-Пт: 9:00 - 18:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Gift" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Специальное предложение</h3>
                <p className="text-muted-foreground">
                  Первая консультация и расчет стоимости — бесплатно!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;