import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: string;
}

interface DashboardHeaderProps {
  notifications: Notification[];
  showNotifications: boolean;
  setShowNotifications: (show: boolean) => void;
  unreadCount: number;
}

const DashboardHeader = ({ 
  notifications, 
  showNotifications, 
  setShowNotifications, 
  unreadCount 
}: DashboardHeaderProps) => {
  return (
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
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <Icon name="Bell" size={20} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Button>

            {showNotifications && (
              <div className="absolute right-0 top-14 w-96 bg-white rounded-xl shadow-2xl border animate-scale-in z-50">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Уведомления</h3>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Icon name="X" size={18} />
                    </button>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b hover:bg-accent/5 cursor-pointer transition-colors ${
                        !notification.read ? 'bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          notification.type === 'order' ? 'bg-secondary/10' :
                          notification.type === 'document' ? 'bg-accent/10' :
                          'bg-primary/10'
                        }`}>
                          <Icon
                            name={
                              notification.type === 'order' ? 'ShoppingCart' :
                              notification.type === 'document' ? 'FileText' :
                              'Tag'
                            }
                            size={20}
                            className={
                              notification.type === 'order' ? 'text-secondary' :
                              notification.type === 'document' ? 'text-accent' :
                              'text-primary'
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-medium text-sm">{notification.title}</h4>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center">
                  <Button variant="ghost" size="sm" className="w-full">
                    Показать все уведомления
                  </Button>
                </div>
              </div>
            )}
          </div>
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
  );
};

export default DashboardHeader;
