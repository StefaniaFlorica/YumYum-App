import {createStackNavigator} from '@react-navigation/stack';
import {
  MainNavigatorRouteProps,
  MainNavigatorRoutes,
} from '../routes/main-routes';
import {HomeTabBarNavigator} from './home-tab-bar-navigator';
import {Image, Pressable, StyleSheet} from 'react-native';

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
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 60,
    resizeMode: 'contain',
    tintColor: '#FFC173'
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    backgroundColor: '#FEEDD8',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomWidth:2
  },
});
