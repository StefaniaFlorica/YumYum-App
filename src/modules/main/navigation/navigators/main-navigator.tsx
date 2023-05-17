import {createStackNavigator} from '@react-navigation/stack';
import {
  MainNavigatorRouteProps,
  MainNavigatorRoutes,
} from '../routes/main-routes';
import {HomeTabBarNavigator} from './home-tab-bar-navigator';
import {Image, Pressable, StyleSheet} from 'react-native';
import {EditUserScreen} from '../../screens/editUser';
import {RecipeDetailsScreen} from '../../screens/details';
import {EditInterestsScreen} from '../../screens/editInterests';
import {BackIcon} from '../../../../assets/icons';

const Stack = createStackNavigator<MainNavigatorRouteProps>();

export const MainNavigator = () => {
  const headerLogo = require('../../../../assets/images/yum-yum.png');
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: styles.header,
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Pressable style={styles.headerContainer}>
            <Image source={headerLogo} style={styles.logo} />
          </Pressable>
        ),
      })}>
      <Stack.Screen
        name={MainNavigatorRoutes.Tabs}
        component={HomeTabBarNavigator}></Stack.Screen>
      <Stack.Screen
        name={MainNavigatorRoutes.Edit}
        component={EditUserScreen}
        options={({navigation, route}) => ({
          headerLeft: () => (
            <BackIcon
              width={30}
              height={30}
              marginLeft={20}
              fill={'#f2732e'}
              onPress={() => navigation.goBack()}
            />
          ),
        })}></Stack.Screen>
      <Stack.Screen
        name={MainNavigatorRoutes.RecipeDetails}
        component={RecipeDetailsScreen}
        options={({navigation, route}) => ({
          headerLeft: () => (
            <BackIcon
              width={30}
              height={30}
              marginLeft={20}
              fill={'#f2732e'}
              onPress={() => navigation.goBack()}
            />
          ),
        })}></Stack.Screen>
      <Stack.Screen
        name={MainNavigatorRoutes.Interests}
        component={EditInterestsScreen}
        options={({navigation, route}) => ({
          headerLeft: () => (
            <BackIcon
              width={30}
              height={30}
              marginLeft={20}
              fill={'#f2732e'}
              onPress={() => navigation.goBack()}
            />
          ),
        })}></Stack.Screen>
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 60,
    resizeMode: 'contain',
    tintColor: '#f2732e',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    backgroundColor: '#fefefe',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomWidth: 2,
  },
});
