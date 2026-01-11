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

interface EditProfileModalProps {
  showEditModal: boolean;
  editData: User;
  setEditData: (data: User) => void;
  setShowEditModal: (show: boolean) => void;
  handleAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: (data: User) => void;
}

const EditProfileModal = ({
  showEditModal,
  editData,
  setEditData,
  setShowEditModal,
  handleAvatarChange,
  onSave
}: EditProfileModalProps) => {
  if (!showEditModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md shadow-2xl animate-scale-in">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Редактирование профиля</CardTitle>
            <button
              onClick={() => setShowEditModal(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          <CardDescription>Измените свои личные данные</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSave(editData);
              setShowEditModal(false);
            }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center overflow-hidden">
                {editData.avatar ? (
                  <img src={editData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <Icon name="User" size={48} className="text-primary" />
                )}
              </div>
              <div className="flex gap-2">
                <label htmlFor="avatar-upload" className="cursor-pointer">
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                  <Button type="button" size="sm" variant="outline" asChild>
                    <span>
                      <Icon name="Upload" size={16} className="mr-2" />
                      Загрузить фото
                    </span>
                  </Button>
                </label>
                {editData.avatar && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setEditData({ ...editData, avatar: '' })}
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="edit-name" className="text-sm font-medium">
                ФИО
              </label>
              <input
                id="edit-name"
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Иван Петров"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="edit-company" className="text-sm font-medium">
                Название компании
              </label>
              <input
                id="edit-company"
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder='ООО "Колос"'
                value={editData.company}
                onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="edit-email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="edit-email"
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="ivan@kolos.ru"
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="edit-phone" className="text-sm font-medium">
                Телефон
              </label>
              <input
                id="edit-phone"
                type="tel"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+7 (927) 123-45-67"
                value={editData.phone}
                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                required
              />
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setShowEditModal(false)}
              >
                Отмена
              </Button>
              <Button type="submit" className="flex-1">
                <Icon name="CheckCircle" size={18} className="mr-2" />
                Сохранить
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfileModal;
