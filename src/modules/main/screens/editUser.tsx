import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../auth/types/user';
import {Avatar} from '../components/avatar';
import ImagePicker from 'react-native-image-crop-picker';

export const EditUserScreen = () => {
  const {user, updateUser} = useAuthStore((state: UserState) => ({
    user: state.user,
    users: state.users,
    updateUser: state.updateUser,
  }));
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [profilePicture, setProfilePicture] = useState(user?.profilePic);

  const navigation = useNavigation();

  const changeEmail = (email: string) => {
    setEmail(email);
  };

  const changeUsename = (username: string) => {
    setUsername(username);
  };

  const onPress = () => {
    if (!user) return;
    const newUser: User = {
      ...user,
      email: email,
      username: username,
      profilePic: profilePicture,
    };
    updateUser(newUser);
    navigation.goBack();
  };

  const onPicPress = async () => {
    if (!user) return;
    const image = await ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
    });
    setProfilePicture(`data:${image.mime};base64,${image.data}`);
  };

  return (
    <View style={styles.main}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Edit info</Text>
      </View>
      <Pressable onPress={onPicPress}>
        <Avatar
          user={{
            ...user,
            profilePic: profilePicture ?? user?.profilePic,
          }}></Avatar>
      </Pressable>
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={changeEmail}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="username"
          autoCapitalize="none"
          value={username}
          onChangeText={changeUsename}
          style={styles.input}></TextInput>
      </View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
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
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  main: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    padding: 10,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
  },
});
