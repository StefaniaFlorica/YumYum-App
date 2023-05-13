import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Recipe} from '../types/recipe';
import {HeartFilledIcon} from '../../../assets/icons';
import {useState} from 'react';

interface Props {
  data: Recipe;
  onCardPress: (data: Recipe) => void;
  hasHeart?: boolean;
  onHeartPress: (data: Recipe) => void;
}

export const RecipeListItem = (props: Props) => {
  const onHeartPressWrapper = () => {
    console.log(props.data.name);
    props.onHeartPress(props.data);
  };

  return (
    <View style={styles.main}>
      <View style={styles.card}>
        <Pressable
          style={styles.picContainer}
          onPress={
            !props.hasHeart
              ? () => {
                  props.onCardPress(props.data);
                }
              : () => {}
          }>
          <Image source={{uri: props.data.image}} style={styles.pic} />
        </Pressable>
        <View style={styles.detailsContainer}>
          {props.hasHeart ? (
            <HeartFilledIcon
              width={40}
              height={40}
              // position={'absolute'}
              // top={36}
              // left={90}
              fill={'red'}
              onPress={onHeartPressWrapper}
            />
          ) : (
            <></>
          )}
          <Text style={styles.title}>
            {props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1)}
          </Text>
          <View style={styles.details}>
            <Text style={styles.text}>{`${props.data.difficulty}`}</Text>
            <Text style={styles.text}>{`${props.data.kcal} kcal`}</Text>
          </View>
          <Text style={styles.text}>{`By: ${props.data.author}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 8,
    backgroundColor: '#f5f7f9',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
  details: {
    flexDirection: 'column',
    gap: 4,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  detailsContainer: {
    flex: 2,
    width: '80%',
    gap: 4,
  },
  pic: {
    width: 100,
    height: 100,
    borderRadius: 60,
    // marginBottom: 90,
  },
  picContainer: {
    margin: 8,
    backgroundColor: '#f2732e',
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  card: {
    flexDirection: 'row',
    marginTop: 40,
    width: 270,
    height: 150,
    backgroundColor: '#fefefe',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
