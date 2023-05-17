import {createStackNavigator} from '@react-navigation/stack';
import {AuthRouteProps, AuthRoutes} from '../routes/auth-routes';
import {LoginScreen} from '../../screens/login';

const Stack = createStackNavigator<AuthRouteProps>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={AuthRoutes.Login}
        component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
