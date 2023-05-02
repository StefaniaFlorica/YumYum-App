import {StyleSheet, Text, View} from 'react-native';
import {HomeTabBarRoutes} from '../navigation/routes/home-tab-bar-routes';

export const FavoritesScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{HomeTabBarRoutes.Favorites}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
