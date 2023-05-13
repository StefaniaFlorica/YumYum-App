import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../auth/types/user';
import {Avatar} from '../components/avatar';
import ImagePicker from 'react-native-image-crop-picker';
import {MainNavigatorRoutes} from '../navigation/routes/main-routes';

export const EditUserScreen = () => {
  const {user, updateUser} = useAuthStore((state: UserState) => ({
    user: state.user,
    users: state.users,
    updateUser: state.updateUser,
  }));
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [profilePicture, setProfilePicture] = useState(user?.profilePic);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);

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

  const onPressEdit = () => {
    if (!user) return;
    navigation.navigate(MainNavigatorRoutes.Interests);
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
      <View style={styles.info}>
        <View style={styles.fields}>
          <Text style={styles.editTitle}>Email:</Text>
          <TextInput
            style={[styles.input,{borderBottomColor:(isEmailFocused?"#f2732e":"grey")}]}
            value={email}
            onChangeText={changeEmail}
            onFocus={()=>{setIsEmailFocused(true)}}
            onBlur={()=>{setIsEmailFocused(false)}}
            ></TextInput>
        </View>
        <View style={styles.fields}>
          <Text style={styles.editTitle}>Username:</Text>
          <TextInput
            style={[styles.input,{borderBottomColor:(isUsernameFocused?"#f2732e":"grey")}]}
            value={username}
            onChangeText={changeUsename}
            onFocus={()=>{setIsUsernameFocused(true)}}
            onBlur={()=>{setIsUsernameFocused(false)}}
            ></TextInput>
        </View>
        <View style={styles.fields}>
          <Text style={styles.editTitle}>Food Preferences: </Text>
          <Pressable style={styles.row} onPress={onPressEdit}>
            {user?.preferredFoodTypes.map((item, idx) => (
              <Text key={idx}>{`${item}${
                idx !== user?.preferredFoodTypes.length - 1 ? `, ` : ``
              }`}</Text>
            ))}
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onPressEdit}>
        <Text style={styles.text}>Edit Food Preferences</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  editTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#f2732e',
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
    //borderWidth:1,
    width: '100%',
    gap: 4,
  },
  button: {
    margin: 30,
    backgroundColor: '#f2732e',
    borderRadius: 20,
    height: 40,
    width: 150,
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
  text: {color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center'},
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#202430',
  },
  container: {
    flex: 4,
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  main: {
    // backgroundColor: 'white',
    // width: '100%',
    // height: '100%',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f5f7f9',
    gap: 8,
  },
  input: {
    padding: 8,
    width: 200,
    height: 40,
    borderBottomWidth: 1,
    borderColor:'grey'
    //borderRadius: 30,
  },
});
