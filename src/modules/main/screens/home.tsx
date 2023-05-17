import {StyleSheet, View, Text, Pressable} from 'react-native';
import {
  HomeTabBarRouteProps,
  HomeTabBarRoutes,
} from '../navigation/routes/home-tab-bar-routes';
import {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {RecipeList} from '../components/recipeList';
import {getRecipes as fetchRecipes} from '../services/recipe.service';
import {Recipe} from '../types/recipe';
import {SearchBar} from '../components/searchBar';
import {FilterIcon} from '../../../assets/icons';
import {FilterModal} from '../components/filterModal';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MainNavigatorRouteProps,
  MainNavigatorRoutes,
} from '../navigation/routes/main-routes';

/*
  endpoint: https://6453db48c18adbbdfea9924a.mockapi.io/recipes?
  queryParams: search, page, limit, field_name
*/

export const RecipesScreen = (
  props: StackScreenProps<HomeTabBarRouteProps, HomeTabBarRoutes.Home>,
) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [page, setPage] = useState<Number>(1);
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [kcal, setKcal] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    fetchRecipes(page, search, difficulty, kcal).then((data: Recipe[]) => {
      setRecipes([...recipes, ...data]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchRecipes(page, search, difficulty, kcal).then((data: Recipe[]) => {
      if (data.length === 0) {
        // daca am ajuns la final, se va returna un array gol
        setReachedEnd(true);
        setLoadingMore(false);
        if (
          (search !== '' || difficulty !== '' || kcal !== '') &&
          page.valueOf() === 1
        ) {
          setRecipes(data);
        }
      } else {
        setRecipes([...recipes, ...data]);
        if (page.valueOf() === 1) {
          setRecipes(data);
          setRefreshing(false);
          setReachedEnd(false);
          setLoadingMore(false);
        }
      }

      setRefreshing(false);
      setLoading(false);
      setLoadingMore(false);
    });
  }, [page, search, difficulty, kcal]);

  const onEndReached = () => {
    //console.debug('on end reached', 'loading=',loading,'loading more=',loadingMore,'refreshing=', refreshing)
    if (!loading && !loadingMore && !reachedEnd) {
      setPage(page.valueOf() + 1);
      setLoadingMore(true);
    }
  };

  const onRefresh = () => {
    // console.debug('on refresh', 'loading=',loading,'loading more=',loadingMore,'refreshing=', refreshing)
    if (!refreshing && !loading && !loadingMore) {
      const one = new Number(1);
      setPage(one);
      // setDifficulty('');
      // setKcal('');
      setRefreshing(true);
    }
  };

  useEffect(() => {
   // console.log('length:', recipes.length);
  }, [recipes]);

  useEffect(() => {
    setPage(Number(1));
    //console.log('din home:', search, difficulty, kcal);
  }, [search, difficulty, kcal]);

  const onSearchChange = (value: string) => {
    //console.log(value);
    setSearch(value);
  };

  const onFilterPress = (difficulty: string, kcal: string) => {
    setDifficulty(difficulty);
    setKcal(kcal);
  };

  const onPressNavigate = (
    data: MainNavigatorRouteProps[MainNavigatorRoutes.RecipeDetails],
  ) => {
    props.navigation.navigate(MainNavigatorRoutes.RecipeDetails, data);
  };
  return (
    <View style={styles.main}>
      <View style={styles.bar}>
        <SearchBar onSearchChange={onSearchChange}></SearchBar>
        <FilterModal setFilters={onFilterPress} />
      </View>
      <RecipeList
        data={recipes}
        loading={loading}
        loadingMore={loadingMore}
        onEndReached={onEndReached}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onCardPress={onPressNavigate}></RecipeList>
    </View>
  );
};
const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    margin: 30,
    marginBottom: 100,
    backgroundColor: '#FFC173',
    borderRadius: 20,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
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
