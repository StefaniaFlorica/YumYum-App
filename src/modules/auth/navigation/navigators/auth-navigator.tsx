import {createStackNavigator} from '@react-navigation/stack';
import {AuthRouteProps, AuthRoutes} from '../routes/auth-routes';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-svg';
import { LoginScreen } from '../../screens/login';

const Stack = createStackNavigator<AuthRouteProps>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AuthRoutes.Login}
        component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
