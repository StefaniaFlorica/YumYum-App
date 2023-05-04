import {createJSONStorage, persist} from 'zustand/middleware';
import {User} from '../types/user';
import {zustandStorage} from '../../../store/zustandStorage';
import {create} from 'zustand';

export interface UserState {
  users: User[];
  user: User | null;
  setCurrentUser: (user: User | null) => void;
  getUser: (id: string) => void;
  updateUser: (user: User) => void;
}

const testUsers = [
  {
    id: '1',
    email: 'aaa@gmail.com',
    username: 'aaa123',
    password: 'asdfasdf',
    profilePic: '',
    preferredFoodTypes: ['asian', 'mexican'],
  },
  {
    id: '2',
    email: 'bbb@gmail.com',
    username: 'bbb123',
    password: 'fdsafdsa',
    profilePic: '',
    preferredFoodTypes: ['fastfood', 'italian'],
  },
];

export const useAuthStore = create(
  persist<UserState>(
    (set, get) => ({
      users: testUsers,
      user: null,
      setCurrentUser: (currentUser: User | null) => {
        set((state: UserState) => ({user: currentUser}));
      },
      getUser: (id: string) => {
        const res = get().users?.find((item: User) => item.id === id);
        set((state: UserState) => ({...state, user: res}));
      },
      updateUser: (user: User) => {
        const index = get().users?.findIndex(
          (item: User) => item.id === user.id,
        );
        const newUsers = get().users;
        newUsers[index] = user;
        set((state: UserState) => ({...state, users: newUsers, user: user}));
      },
    }),
    {
      name: 'user-storage-1',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
