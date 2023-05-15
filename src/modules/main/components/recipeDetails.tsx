import {View, StyleSheet, Image} from 'react-native';
import {Recipe} from '../types/recipe';
import {Text} from 'react-native';
import {
  AccountIcon,
  ChefIcon,
  ClockIcon,
  FlameIcon,
  HeartFilledIcon,
  HeartIcon,
} from '../../../assets/icons';
import {UserState, useAuthStore} from '../../auth/store/useAuthStore';
import {useEffect, useState} from 'react';

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
          <Image source={{uri: props.data.image}} style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleAndHeart}>
          <Text style={styles.title}>
            {props.data?.name.charAt(0).toUpperCase() +
              props.data?.name.slice(1)}
          </Text>
          <HeartFilledIcon
            width={40}
            height={40}
            fill={props.heartColor}
            onPress={onPressWrapper}></HeartFilledIcon>
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
        <Text style={styles.description}>{props.data?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description:{
    textAlign:'justify'
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
    width: '80%',
    marginBottom: 20,
    flex: 2,
    justifyContent: 'space-evenly',
    //alignItems:'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 180,
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
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f7f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
