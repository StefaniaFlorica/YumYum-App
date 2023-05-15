import {Text, View, TextInput, StyleSheet, Pressable} from 'react-native';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {useEffect, useState} from 'react';
import {CloseIcon, PlusIcon} from '../../../assets/icons';

export const EditInterestsScreen = () => {
  const {user, addInterest, removeInterest} = useAuthStore(
    (state: UserState) => ({
      user: state.user,
      addInterest: state.addInterest,
      removeInterest: state.removeInterest,
    }),
  );

  const [interests, setInterests] = useState<string[] | undefined>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setInterests(user?.preferredFoodTypes);
  }, []);

  const onPlusPress = () => {
    if (!user) return;
    addInterest(user, input);
    setInput('');
  };

  const onXPress = (interest: string) => {
    if (!user) return;
    removeInterest(user, interest);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>My Preferences</Text>
      <View style={styles.interests}>
        {user?.preferredFoodTypes?.map((interest, index) => (
          <View key={index} style={styles.itemRow}>
            <View style={styles.bubble}>
              <Text style={styles.label}>{interest}</Text>
            </View>
            <CloseIcon
              width={24}
              height={24}
              fill={'grey'}
              onPress={() => {
                onXPress(interest);
              }}
            />
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          value={input}
          placeholder={'type something...'}
          style={styles.input}
          onChangeText={val => {
            setInput(val);
          }}></TextInput>
        <PlusIcon width={24} height={24} fill={'grey'} onPress={onPlusPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 16,
  },
  bubble: {
    //width: 50,
    //height: 40,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2732e',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemRow: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interests: {
    //width: 300,
    //flex: 2,
    //backgroundColor: 'pink',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  add: {
    //width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2732e',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    //fontWeight: 'Fbold',
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'lightblue',
    gap: 8,
    //flex: 1,
  },
  input: {
    // marginTop: 10,
    padding: 10,
    width: 250,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    // color: 'grey',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  main: {
    width: '100%',
    height: '100%',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#f5f7f9',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
  },
});
