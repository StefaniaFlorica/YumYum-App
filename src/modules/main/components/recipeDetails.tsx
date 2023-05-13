import {View, StyleSheet, Image} from 'react-native';
import {Recipe} from '../types/recipe';
import {Text} from 'react-native';
import {HeartFilledIcon, HeartIcon} from '../../../assets/icons';
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
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
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
        <Text>{'By ' + props.data?.author}</Text>
        <Text>{props.data?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 4,
    marginLeft: -4,
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
    width: 350,
    height: 350,
    resizeMode: 'cover',
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
