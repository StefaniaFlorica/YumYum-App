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
        <Text style={styles.title}>{HomeTabBarRoutes.Account}</Text>
        <Pressable
          style={styles.edit}
          onPress={() => props.navigation.navigate(MainNavigatorRoutes.Edit)}>
          <Text style={styles.text}>Edit</Text>
        </Pressable>
      </View>
      <Pressable>
        <Avatar user={user}></Avatar>
      </Pressable>
      <View style={styles.info}>
        <View style={styles.fields}>
          <Text>Email:</Text>
          <Text>{user?.email}</Text>
        </View>
        <View style={styles.fields}>
          <Text>Username:</Text>
          <Text>{user?.username}</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Log out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  editText: {},
  edit: {
    borderRadius: 8,
    height: 40,
    width: 60,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 3,
    backgroundColor: '#FFC173',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  info: {
    borderRadius: 20,
    borderWidth: 1,
    width: '50%',
    height: '25%',
  },
  fields: {
    padding: 20,
  },
  main: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
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
  text: {color: '#FEEDD8', fontWeight: 'bold', fontSize: 16},
});
