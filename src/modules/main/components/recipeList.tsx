import {
  ActivityIndicator,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Recipe} from '../types/recipe';
import {FlatList} from 'react-native';
import {RecipeListItem} from './recipeListItem';
import {useCallback} from 'react';

interface Props {
  data: Recipe[];
  loading: boolean;
  refreshing: boolean;
  loadingMore: boolean;
  onEndReached: () => void;
  onRefresh: () => void;
  onCardPress: (data: Recipe) => void;
}

export const RecipeList = (props: Props) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Recipe>) => (
      <RecipeListItem data={item} onCardPress={props.onCardPress} />
    ),
    [],
  );
  return (
    <FlatList
      contentContainerStyle={
        !props.data?.length
          ? {flex: 1, justifyContent: 'center', alignItems: 'center'}
          : {}
      }
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: Recipe, index) => index.toLocaleString()}
      onEndReached={props.onEndReached}
      onEndReachedThreshold={0.1}
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        props.loading ? (
          <View style={styles.listLoading}>
            <ActivityIndicator />
          </View>
        ) : (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>No data</Text>
          </View>
        )
      }
      ListFooterComponent={props.loadingMore ? <ActivityIndicator /> : <View />}
    />
  );
};

const styles = StyleSheet.create({
  listLoading: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f7f9',
    width: '100%',
    alignItems: 'center',
  },
});
