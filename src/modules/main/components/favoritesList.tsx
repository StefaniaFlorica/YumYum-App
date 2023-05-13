import {ListRenderItemInfo, Text, View} from 'react-native';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {FlatList} from 'react-native';
import {RecipeListItem} from './recipeListItem';
import {useCallback} from 'react';
import {Recipe} from '../types/recipe';

interface Props {
  data: Recipe[] |undefined;
  onHeartPress: (data: Recipe) => void;
}

export const FavoritesList = (props: Props) => {
  const renderItem = useCallback(({item}: ListRenderItemInfo<Recipe>) => {
    return (
        <RecipeListItem
          data={item}
          onCardPress={() => {}}
          hasHeart={true}
          onHeartPress={props.onHeartPress}
        />
    );
  }, []);
  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: Recipe, index) => index.toLocaleString()}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>No favorites</Text>
        </View>
      }
    />
  );
};
