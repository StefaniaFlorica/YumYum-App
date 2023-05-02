import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeTabBarRouteProps,
  HomeTabBarRoutes,
} from '../routes/home-tab-bar-routes';
import {RecipesScreen} from '../../screens/home';
import {FavoritesScreen} from '../../screens/favorites';
import {AccountScreen} from '../../screens/account';
import {StyleSheet} from 'react-native';
import { AccountIcon, HeartIcon, HomeIcon } from '../../../../assets/icons';

const Tab = createBottomTabNavigator<HomeTabBarRouteProps>();

export const HomeTabBarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarShowLabel: false,
        tabBarStyle: styles.customBottomTab,
      }}>
      <Tab.Screen
        name={HomeTabBarRoutes.Home}
        component={RecipesScreen}
        options={{
            tabBarIcon: ({focused}) => (
              <HomeIcon
                width={focused ? 30 : 25}
                height={focused ? 30 : 25}
                fill={focused ? 'black' : '#FFC173'}
              />
            ),
          }}></Tab.Screen>
      <Tab.Screen
        name={HomeTabBarRoutes.Favorites}
        component={FavoritesScreen}
        options={{
            tabBarIcon: ({focused}) => (
              <HeartIcon
                width={focused ? 30 : 25}
                height={focused ? 30 : 25}
                fill={focused ? 'black' : '#FFC173'}
              />
            ),
          }}
        ></Tab.Screen>
      <Tab.Screen
        name={HomeTabBarRoutes.Account}
        component={AccountScreen}
        options={{
            tabBarIcon: ({focused}) => (
              <AccountIcon
                width={focused ? 30 : 25}
                height={focused ? 30 : 25}
                fill={focused ? 'black' : '#FFC173'}
              />
            ),
          }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomTab: {
   // paddingTop: 25,
  //  borderWidth:2,
  //  borderColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FEEDD8',
    borderRadius: 16,
    width: '80%',
    position: 'absolute',
    marginBottom: 20,
    marginHorizontal: 35,
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});
