import {StyleSheet, Text, View} from 'react-native';
import {User} from '../../auth/types/user';
import {Image} from 'react-native';

interface Props {
  user: User|null;
}

export const Avatar = (props: Props) => {
  return (
    <View style={styles.main}>
      {!props.user?.profilePic ? (
        <Text style={styles.text}>
          {props.user?.username?.toUpperCase().slice(0, 2)}
        </Text>
      ) : (
        <Image style={styles.image} source={{uri: props.user?.profilePic}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 80,
    borderWidth: 1,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    backgroundColor: 'lightblue',
    borderRadius: 80,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  text: {
    fontSize: 50,
  },
});
