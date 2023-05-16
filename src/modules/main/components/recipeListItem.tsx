import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Recipe} from '../types/recipe';
import {
  ChefIcon,
  ClockIcon,
  FlameIcon,
  HeartFilledIcon,
} from '../../../assets/icons';
import {useState} from 'react';

interface Props {
  data: Recipe;
  onCardPress: (data: Recipe) => void;
}

export const RecipeListItem = (props: Props) => {
  const onCardPressWrapper = () => {
    props.onCardPress(props.data);
  };
  return (
    <View style={styles.main}>
      <Pressable style={styles.card} onPress={onCardPressWrapper}>
        <View style={styles.picContainer}>
          <Image source={{uri: props.data.image}} style={styles.pic} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1)}
          </Text>
          <View style={styles.details}>
            <View style={styles.pair}>
              <ClockIcon width={16} height={16} />
              <Text style={styles.text}>{`${props.data.difficulty}`}</Text>
            </View>
            <View style={styles.pair}>
              <FlameIcon width={16} height={16} />
              <Text style={styles.text}>{`${props.data.kcal} kcal`}</Text>
            </View>
            <View style={styles.pair}>
              <ChefIcon width={16} height={16} />
              <Text style={styles.text}>{props.data.author}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pair: {
    flexDirection: 'row',
    gap: 4,
  },
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
