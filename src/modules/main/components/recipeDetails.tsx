import {View, StyleSheet, Image} from 'react-native';
import {Recipe} from '../types/recipe';
import {Text} from 'react-native';
import {
  ChefIcon,
  ClockIcon,
  FlameIcon,
  HeartFilledIcon,
} from '../../../assets/icons';
import FastImage from 'react-native-fast-image';
import Animated, {BounceIn,BounceOut} from 'react-native-reanimated';
interface Props {
  data: Recipe;
  heartColor: string;
  onPress: (data: Recipe) => void;
}

export const RecipeDetails = (props: Props) => {
  const onPressWrapper = () => {
    props.onPress(props.data);
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FastImage
            source={{uri: props.data.image}}
            style={styles.image}></FastImage>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleAndHeart}>
          <Text style={styles.title}>
            {props.data?.name.charAt(0).toUpperCase() +
              props.data?.name.slice(1)}
          </Text>

          {props.heartColor === 'red' ? (
            <Animated.View key={1} entering={BounceIn} >
              <HeartFilledIcon
                width={48}
                height={48}
                fill={'red'}
                onPress={onPressWrapper}></HeartFilledIcon>
            </Animated.View>
          ) : (
            <Animated.View key={2} entering={BounceIn} >
              <HeartFilledIcon
                width={48}
                height={48}
                fill={'black'}
                onPress={onPressWrapper}></HeartFilledIcon>
            </Animated.View>
          )}
        </View>
        <View style={styles.pair}>
          <ChefIcon width={20} height={20} />
          <Text>{props.data?.author}</Text>
        </View>
        <View style={styles.filters}>
          <View style={styles.pair}>
            <ClockIcon width={20} height={20} fill={'#f2732e'} />
            <Text>{props.data.difficulty}</Text>
          </View>
          <View style={styles.pair}>
            <FlameIcon width={20} height={20} />
            <Text>{`${props.data.kcal} kcals`}</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Intructions:</Text>
        <Text style={styles.description}>
          {'\t\t' + props.data?.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f2732e',
  },
  description: {
    textAlign: 'justify',
  },
  pair: {
    flexDirection: 'row',
    gap: 4,
  },
  filters: {
    flexDirection: 'row',
    gap: 12,
  },
  container: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#f2732e',
    letterSpacing: 4,
    marginLeft: -4,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
  titleAndHeart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '85%',
    marginBottom: 20,
    flex: 2,
    justifyContent: 'space-evenly',
    //alignItems:'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 180,
    backgroundColor: 'white',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  image: {
    width: 400,
    height: '100%',
    //resizeMode: 'cover',
    //borderRadius: 180,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f7f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
