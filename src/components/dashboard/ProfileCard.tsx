import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface User {
  name: string;
  company: string;
  email: string;
  phone: string;
  avatar: string;
}

interface ProfileCardProps {
  user: User;
  onEditClick: () => void;
}

const ProfileCard = ({ user, onEditClick }: ProfileCardProps) => {
  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <Icon name="User" size={40} className="text-primary" />
          )}
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
        <Button
          className="w-full mt-4"
          variant="outline"
          onClick={onEditClick}
        >
          <Icon name="Settings" size={16} className="mr-2" />
          Настройки
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
