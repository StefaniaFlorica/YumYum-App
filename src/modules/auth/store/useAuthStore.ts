import {createJSONStorage, persist} from 'zustand/middleware';
import {User} from '../types/user';
import {zustandStorage} from '../../../store/zustandStorage';
import {create} from 'zustand';
import {Recipe} from '../../main/types/recipe';

export interface UserState {
  users: User[];
  user: User | null;
  setCurrentUser: (user: User | null) => void;
  getUser: (id: string) => void;
  updateUser: (user: User) => void;
  addToFavorites: (user: User, recipe: Recipe) => void;
  removeFromFavorites: (user: User, recipe: Recipe) => void;
  addInterest: (user: User, interest: string) => void;
  removeInterest: (user: User, interest: string) => void;
}

const testUsers = [
  {
    id: '1',
    email: 'aaa@gmail.com',
    username: 'aaa123',
    password: 'asdfasdf',
    profilePic: '',
    favoriteRecipes:[],
    preferredFoodTypes: ['asian', 'mexican'],
  },
  {
    id: '2',
    email: 'bbb@gmail.com',
    username: 'bbb123',
    password: 'fdsafdsa',
    profilePic: '',
    favoriteRecipes:[],
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
      addToFavorites: (user: User, recipe: Recipe) => {
        const index = get().users?.findIndex(
          (item: User) => item.id === user.id,
        );
        const newFavs = user.favoriteRecipes;
        const foundRecipe = newFavs?.find(item => item.id === recipe.id);
        if (foundRecipe === undefined) {
          newFavs.push(recipe);
        }
        const newUser = {...user, favoriteRecipes: newFavs};
        const newUsers = get().users;
        newUsers[index] = newUser;
        set((state: UserState) => ({...state, users: newUsers, user: newUser}));
      },
      removeFromFavorites: (user: User, recipe: Recipe) => {
        const index = get().users?.findIndex(
          (item: User) => item.id === user.id,
        );
        const newFavs = user.favoriteRecipes?.filter(
          item => item.id !== recipe.id,
        );
        const newUser = {...user, favoriteRecipes: newFavs};
        const newUsers = get().users;
        newUsers[index] = newUser;
        set((state: UserState) => ({...state, users: newUsers, user: newUser}));
      },
      addInterest: ( user: User, interest: string) =>{
        const index = get().users?.findIndex(
          (item: User) => item.id === user.id,
        );
        const newInterests = user.preferredFoodTypes
        const foundInterest = newInterests?.find((item)=> item === interest)
        if(foundInterest === undefined){
          newInterests.push(interest)
        }
        const newUser = {...user, preferredFoodTypes: newInterests};
        const newUsers = get().users;
        newUsers[index] = newUser;
        set((state: UserState) => ({...state, users: newUsers, user: newUser}));
      },
      removeInterest: (user: User, interest: string) => {
        const index = get().users?.findIndex(
          (item: User) => item.id === user.id,
        );
        const newInterests = user.preferredFoodTypes?.filter(
          item => item !== interest,
        );
        const newUser = {...user, preferredFoodTypes: newInterests};
        const newUsers = get().users;
        newUsers[index] = newUser;
        set((state: UserState) => ({...state, users: newUsers, user: newUser}));
      },
    }),
    {
      name: 'user-storage-3',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
