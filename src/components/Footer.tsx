import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
              <li>+7 927 748 68 68</li>
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
  );
};

export default Footer;