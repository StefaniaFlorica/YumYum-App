import {StyleSheet, Text, View} from 'react-native';
import {Recipe} from '../types/recipe';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {FavoritesList} from '../components/favoritesList';

export const FavoritesScreen = () => {
  const {user, removeFromFavorites} = useAuthStore((state: UserState) => ({
    user: state.user,
    removeFromFavorites: state.removeFromFavorites,
  }));

  const onPress = (data: Recipe) => {
    if (!user) return;
    removeFromFavorites(user, data);
  };

  return <FavoritesList data={user?.favoriteRecipes} onHeartPress={onPress} />;
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f5f7f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
