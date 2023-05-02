import React from 'react';
import {HomeTabBarNavigator} from './src/modules/main/navigation/navigators/home-tab-bar-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {AppNavigator} from './src/navigation/navigators/app-navigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
