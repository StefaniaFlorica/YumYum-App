import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  onLogin: (email: string, password: string) => void;
}

export const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    props.onLogin(email, password);
  };
  const changeEmail = (email: string) => {
    setEmail(email);
  };

  const changePassword = (password: string) => {
    setPassword(password);
  };
  return (
    <View style={styles.main}>
      <TextInput
        placeholder="email"
        keyboardType="email-address"
        onChangeText={changeEmail}
        autoCapitalize="none"
        style={styles.input}></TextInput>
      <TextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={changePassword}
        style={styles.input}></TextInput>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Log in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    padding: 10,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
  },
  text: {color: 'white', fontWeight: 'bold', fontSize: 18},

  button: {
    margin: 30,
    backgroundColor: '#FFC173',
    borderRadius: 40,
    height: 50,
    width: 200,
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
});
