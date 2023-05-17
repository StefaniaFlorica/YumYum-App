import {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  onLogin: (email: string, password: string) => void;
}
interface InputErrors {
  emailError: boolean;
  passwordError: boolean;
}

export const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<InputErrors>({
    emailError: false,
    passwordError: false,
  });
  const yumYum = require('../../../assets/images/yum-yum.png');
  const onPress = () => {
    if (email !== '' && password !== '') {
      setErrors({emailError: false, passwordError: false});
      props.onLogin(email, password);
    } else {
      setErrors({
        emailError: email === '' ? true : false,
        passwordError: password === '' ? true : false,
      });
    }
  };
  const changeEmail = (email: string) => {
    setEmail(email);
  };

  const changePassword = (password: string) => {
    setPassword(password);
  };
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Hi,</Text>
        <Text style={[styles.title, {fontSize: 40, textAlign: 'right'}]}>
          welcome to
        </Text>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Image source={yumYum} style={styles.image} />
        </View>
      </View>
      <View style={styles.inputs}>
        <View style={styles.inputContainter}>
          {errors.emailError || errors.passwordError ? (
            <Text style={styles.errorMessage}>Please check your credentials!</Text>
          ) : (
            <></>
          )}
          <Text style={styles.label}>Email:</Text>
          <TextInput
            placeholder="email"
            placeholderTextColor={'#DCDCDC'}
            keyboardType="email-address"
            onChangeText={changeEmail}
            autoCapitalize="none"
            style={[
              styles.input,
              errors.emailError ? {borderWidth: 1, borderColor: '#ae0000'} : {},
            ]}></TextInput>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            placeholder="password"
            placeholderTextColor={'#DCDCDC'}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={changePassword}
            style={[
              styles.input,
              errors.passwordError
                ? {borderWidth: 1, borderColor: '#ae0000'}
                : {},
            ]}></TextInput>
          <Pressable style={styles.button} onPress={onPress} >
            <Text style={styles.text}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {textAlign: 'center', color: '#ae0000'},
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: -10,
    marginLeft: 12,
  },
  inputContainter: {
    gap: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    tintColor: 'white',
    marginTop:20
  },
  title: {
    color: '#f5f7f9',
    fontSize: 60,
    fontWeight: 'bold',
  },
  inputs: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: '#f5f7f9',
    width: '100%',
    paddingTop: 50,
    //marginTop:-20
  },
  header: {
    paddingLeft: 20,
    paddingBottom: 30,
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#f2732e',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: '#f2732e',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    padding: 10,
    width: 250,
    height: 50,
    //borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#fefefe',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text: {color: 'white', fontWeight: 'bold', fontSize: 18},

  button: {
    margin: 30,
    backgroundColor: '#f2732e',
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
