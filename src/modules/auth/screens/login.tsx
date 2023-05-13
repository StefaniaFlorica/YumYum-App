import {Alert} from 'react-native';
import {LoginForm} from '../components/login-form';
import {UserState, useAuthStore} from '../store/useAuthStore';
import {User} from '../types/user';

export const LoginScreen = () => {
  const showErrorAlert = (title: string, message: string) =>
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  const {users, setCurrentUser} = useAuthStore((state: UserState) => ({
    users: state.users,
    setCurrentUser: state.setCurrentUser,
  }));
  const login = (email: string, password: string) => {
    const user = users.find(
      (item: User) => item.email === email && item.password === password,
    );
    if (user) {
      setCurrentUser(user);
    } else {
      
      showErrorAlert('Error', 'User not found!');
    }
  };
  return <LoginForm onLogin={login} />;
};
