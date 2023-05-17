import {View} from 'react-native';
import {RecipeDetails} from '../components/recipeDetails';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MainNavigatorRouteProps,
  MainNavigatorRoutes,
} from '../navigation/routes/main-routes';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {useEffect, useState} from 'react';
import {Recipe} from '../types/recipe';

export const RecipeDetailsScreen = (
  props: StackScreenProps<
    MainNavigatorRouteProps,
    MainNavigatorRoutes.RecipeDetails
  >,
) => {

  const {user, addToFavorites, removeFromFavorites} = useAuthStore(
    (state: UserState) => ({
      user: state.user,
      addToFavorites: state.addToFavorites,
      removeFromFavorites: state.removeFromFavorites,
    }),
  );
  const [heartColor, setHeartColor] = useState('white');
  useEffect(() => {
    const isFavorite = user?.favoriteRecipes.find(
      item => item.id === props?.route.params.id,
    );
    if (isFavorite) {
      setHeartColor('red');
    } else {
      setHeartColor('black');
    }
  }, []);

  const onPress = (data: Recipe) => {
    if (!user) return;
    if (heartColor === 'red') {
      removeFromFavorites(user, data);
      setHeartColor('black');
    } else {
      addToFavorites(user, data);
      setHeartColor('red');
    }
  };

  return (
    <View>
      <RecipeDetails
        data={props?.route.params}
        heartColor={heartColor}
        onPress={onPress}></RecipeDetails>
    </View>
  );
};
