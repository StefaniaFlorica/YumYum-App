import {StyleSheet, Text, View} from 'react-native';
import {User} from '../../auth/types/user';
import {Image} from 'react-native';
import {AnimatedCircle} from './animatedCircle';

interface Props {
  user: User | null;
}

export const Avatar = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      {[1, 2, 3].map(item => (
        <AnimatedCircle key={item} index={item} />
      ))}
      <View style={styles.main}>
        {!props.user?.profilePic ? (
          <Text style={styles.text}>
            {props.user?.username?.toUpperCase().slice(0, 2)}
          </Text>
        ) : (
          <Image style={styles.image} source={{uri: props.user?.profilePic}} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {justifyContent: 'center', alignItems: 'center'},
  image: {
    width: 120,
    height: 120,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#f2732e',
    zIndex: 3,
  },
  main: {
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    backgroundColor: '#F6A376',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#f2732e',
    shadowColor: '#f2732e',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  text: {
    fontSize: 50,
    zIndex: 3,
  },
});
