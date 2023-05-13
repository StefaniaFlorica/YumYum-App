import {StyleSheet, Text, View} from 'react-native';
import {HomeTabBarRoutes} from '../navigation/routes/home-tab-bar-routes';
import {RecipeListItem} from '../components/recipeListItem';
import {Recipe} from '../types/recipe';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {FavoritesList} from '../components/favoritesList';
import {useEffect, useState} from 'react';

export const FavoritesScreen = () => {
  const {user, removeFromFavorites} = useAuthStore((state: UserState) => ({
    user: state.user,
    removeFromFavorites: state.removeFromFavorites,
  }));

  const onPress = (data: Recipe) => {
    if (!user) return;
    console.debug(
      'before:',
      user.favoriteRecipes.map(item => item.name),
      'to be deleted:',
      data.name,
    );
    removeFromFavorites(user, data);
    console.debug(
      'after:',
      user.favoriteRecipes.map(item => item.name),
    );
  };

  console.log(
    'current:',
    user?.favoriteRecipes.map(item => item.name),
  );

  return (
    <View style={styles.main}>
      <FavoritesList
        data={user?.favoriteRecipes}
        onHeartPress={onPress}
      />
    </View>
  );
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
