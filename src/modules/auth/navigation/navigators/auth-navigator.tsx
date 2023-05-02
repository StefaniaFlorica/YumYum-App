import {createStackNavigator} from '@react-navigation/stack';
import {AuthRouteProps, AuthRoutes} from '../routes/auth-routes';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-svg';

const Stack = createStackNavigator<AuthRouteProps>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AuthRoutes.Page1}
        component={FirstPage}></Stack.Screen>
    </Stack.Navigator>
  );
};

const FirstPage = () => {
  return (
    <View>
      <Text>fsdfdf</Text>
    </View>
  );
};
