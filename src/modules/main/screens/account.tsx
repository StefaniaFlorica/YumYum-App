import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  HomeTabBarRouteProps,
  HomeTabBarRoutes,
} from '../navigation/routes/home-tab-bar-routes';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {Avatar} from '../components/avatar';
import {useNavigation} from '@react-navigation/native';
import {
  MainNavigatorRouteProps,
  MainNavigatorRoutes,
} from '../navigation/routes/main-routes';
import {StackScreenProps} from '@react-navigation/stack';
import {User} from '../../auth/types/user';
export const AccountScreen = (
  props: StackScreenProps<HomeTabBarRouteProps, HomeTabBarRoutes.Account>,
) => {
  const {user, setCurrentUser, updateUser} = useAuthStore(
    (state: UserState) => ({
      user: state.user,
      setCurrentUser: state.setCurrentUser,
      updateUser: state.updateUser,
    }),
  );
  const onPress = () => {
    setCurrentUser(null);
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>{`Hi, ${user?.username}!`}</Text>
        
      </View>
      <Pressable>
        <Avatar user={user}></Avatar>
      </Pressable>
      <Pressable
          style={styles.edit}
          onPress={() => props.navigation.navigate(MainNavigatorRoutes.Edit)}>
          <Text style={styles.text}>Edit</Text>
        </Pressable>
      <View style={styles.info}>
        <View style={styles.fields}>
          <Text style={styles.editTitle}>Email:</Text>
          <Text>{user?.email}</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.editTitle}>Username:</Text>
          <Text>{user?.username}</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.editTitle}>Food Preferences: </Text>
          <View style={styles.row}>
            {user?.preferredFoodTypes.map((item, idx) => (
              <Text key={idx}>{`${item}${
                idx !== user?.preferredFoodTypes.length - 1 ? `, ` : ``
              }`}</Text>
            ))}
          </View>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Log out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  editTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color:'#f2732e'
  },
  edit: {
    borderRadius: 20,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#f2732e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  info: {
    borderRadius: 20,
    width: '80%',
    backgroundColor: '#fefefe',
    shadowColor: '#f2732e',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  fields: {
    padding: 20,
    width: '100%',
    gap:4
  },
  main: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f5f7f9',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color:'#202430'
  },
  button: {
    margin: 30,
    marginBottom: 100,
    backgroundColor: '#f2732e',
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
  text: {color: 'white', fontWeight: 'bold', fontSize: 16},
});
