import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  time: string;
}

interface SupportChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportChat = ({ isOpen, onClose }: SupportChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Здравствуйте! Я AI-ассистент АгроПартнер. Чем могу помочь?',
      sender: 'ai',
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('цена') || lowerMessage.includes('стоимость')) {
      return 'Актуальные цены: Пшеница — 15 000 ₽/т, Ячмень — 12 000 ₽/т, Подсолнечник — 28 000 ₽/т. Дизель — 58 ₽/л, АИ-92 — 52 ₽/л. Для уточнения деталей оставьте заявку или позвоните нам.';
    }
    
    if (lowerMessage.includes('заказ') || lowerMessage.includes('купить') || lowerMessage.includes('продать')) {
      return 'Для оформления заказа нажмите кнопку "Создать новый заказ" во вкладке "Мои заказы" или позвоните нашему менеджеру по телефону +7 (846) 123-45-67.';
    }
    
    if (lowerMessage.includes('бухгалтер') || lowerMessage.includes('отчет')) {
      return 'Предлагаем 3 пакета бухгалтерских услуг: Базовый (25 000 ₽/мес), Стандарт (35 000 ₽/мес), Премиум (50 000 ₽/мес). Какой пакет вас интересует?';
    }
    
    if (lowerMessage.includes('документ') || lowerMessage.includes('договор')) {
      return 'Все ваши документы доступны во вкладке "Документы". Вы можете скачать договоры, акты и счета-фактуры в любое время.';
    }
    
    if (lowerMessage.includes('контакт') || lowerMessage.includes('телефон') || lowerMessage.includes('адрес')) {
      return 'Наши контакты:\n📞 Телефон: +7 (846) 123-45-67\n📧 Email: info@agropartner-samara.ru\n📍 Адрес: г. Самара, ул. Заводская, д. 15';
    }
    
    if (lowerMessage.includes('график') || lowerMessage.includes('время работы')) {
      return 'Мы работаем:\nПн-Пт: 9:00 - 18:00\nСб: 10:00 - 15:00\nВс: выходной';
    }
    
    if (lowerMessage.includes('спасибо') || lowerMessage.includes('благодар')) {
      return 'Всегда рады помочь! Если возникнут ещё вопросы — обращайтесь.';
    }

    return 'Спасибо за ваш вопрос! Для получения детальной консультации свяжитесь с нашим менеджером по телефону +7 (846) 123-45-67 или оставьте заявку в личном кабинете.';
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputText),
        sender: 'ai',
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 z-50 animate-scale-in">
      <Card className="shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={20} />
              </div>
              <div>
                <CardTitle className="text-white">AI Ассистент</CardTitle>
                <p className="text-xs text-white/80">Онлайн • Обычно отвечает мгновенно</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-primary/5 to-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-white border shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border shadow-sm rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <Input
                placeholder="Напишите сообщение..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={!inputText.trim()}
                size="icon"
              >
                <Icon name="Send" size={18} />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Работает на технологии AI
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportChat;
