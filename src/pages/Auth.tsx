import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Icon name="Wheat" className="text-white" size={36} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">АгроПартнер</h1>
                <p className="text-muted-foreground">Самара</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Добро пожаловать в{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  личный кабинет
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Войдите или зарегистрируйтесь для доступа к вашим заказам и услугам
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">История всех заказов</h3>
                  <p className="text-sm text-muted-foreground">
                    Отслеживайте статус продаж зерна, покупок топлива и бухгалтерских услуг
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" className="text-secondary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Документы в одном месте</h3>
                  <p className="text-sm text-muted-foreground">
                    Храните договоры, акты и счета-фактуры
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Статистика и аналитика</h3>
                  <p className="text-sm text-muted-foreground">
                    Контролируйте финансовые показатели вашего бизнеса
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="md:hidden flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Wheat" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">АгроПартнер</h1>
              </div>
            </div>
            <CardTitle className="text-2xl">Вход в систему</CardTitle>
            <CardDescription>Войдите или создайте новый аккаунт</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="ivan@kolos.ru"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Пароль</Label>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Забыли пароль?
                      </a>
                    </div>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="LogIn" size={18} className="mr-2" />
                    Войти
                  </Button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">или</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" type="button">
                    <Icon name="Mail" size={18} className="mr-2" />
                    Войти через email-код
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">ФИО</Label>
                    <Input
                      id="register-name"
                      placeholder="Иван Петров"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-company">Название компании</Label>
                    <Input
                      id="register-company"
                      placeholder="ООО &quot;Колос&quot;"
                      value={registerData.company}
                      onChange={(e) => setRegisterData({ ...registerData, company: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="ivan@kolos.ru"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-phone">Телефон</Label>
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="+7 (927) 123-45-67"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm">Повторите пароль</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      placeholder="••••••••"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="UserPlus" size={18} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Button variant="ghost" asChild>
                <a href="/" className="flex items-center justify-center gap-2">
                  <Icon name="ArrowLeft" size={16} />
                  Вернуться на главную
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
