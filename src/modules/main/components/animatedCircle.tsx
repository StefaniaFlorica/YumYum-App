import Animated, {
  BounceIn,
  BounceOut,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {useEffect} from 'react';

interface Props {
  index: number;
}

export const AnimatedCircle = (props: Props) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  useEffect(() => {
    scale.value = withDelay(
      100*props.index,
      withRepeat(withTiming(2 * props.index, {duration: 1000}), -1, true),
    );
    opacity.value = withRepeat(
      withTiming(1 / props.index, {duration: 1000}),
      -1,
      true,
    );
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      opacity: opacity.value,
    };
  });
  return <Animated.View style={[styles.circle, rStyle]}></Animated.View>;
};
const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: '#f2732e',
    zIndex:1
  },
});
