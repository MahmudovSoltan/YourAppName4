// AnimatedBox.tsx
import React, { useEffect } from 'react';
import {  Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const AnimatedBox = () => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(-50); // yuxarıdan başlasın

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.box, animatedStyle]}>
      <Text style={styles.text}>Salam, dünya! 🌍</Text>
    </Animated.View>
  );
};

export default AnimatedBox;

const styles = StyleSheet.create({
  box: {
    width: '80%',
    height: 100,
    backgroundColor: '#4dabf7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
