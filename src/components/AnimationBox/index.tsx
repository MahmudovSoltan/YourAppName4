
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
    runOnJS,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import Button from '../../ui/button';
import { useEffect, useState } from 'react';
const word = 'Salam';
const AnimationBox = () => {
    const offset = useSharedValue({
        opacity: 0,
        height: 0,
    });
    const [displayText, setDisplayText] = useState('');
    const index = useSharedValue(0);
    const direction = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(offset.value.opacity, { duration: 500 }),
            height: withTiming(offset.value.height, { duration: 500 }),
        };
    });

    const toggleAnimation = () => {
        const toValue = offset.value.opacity === 0 ? 1 : 0;
        const toHeight = offset.value.height === 0 ? 100 : 0;
        offset.value = { opacity: toValue, height: toHeight };
    };


    useEffect(() => {
        const interval = setInterval(() => {
            if (direction.value === 1) {
                if (index.value < word.length) {
                    index.value += 1;
                } else {
                    direction.value = -1;
                }
            } else {
                if (index.value > 0) {
                    index.value -= 1;
                } else {
                    direction.value = 1;
                }
            }
        }, 150); // hər hərf üçün gecikmə

        return () => clearInterval(interval);
    }, []);

     useAnimatedReaction(
    () => index.value,
    (currentIndex) => {
      runOnJS(setDisplayText)(word.slice(0, currentIndex));
    }
  );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>AnimationBox</Text>
            <Button title="Toggle Animation" onPress={toggleAnimation} />
            <Animated.View style={[styles.animatedBox, animatedStyle]}>
                <Text style={styles.text}>
                    Animated Box: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
            </Animated.View>

              <Text style={styles.text2}>{displayText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        marginBottom: 12,
    },
    animatedBox: {
        backgroundColor: 'red',
        // overflow: 'hidden',
        paddingHorizontal: 16,
    },
    text: {
        color: 'white',
        paddingVertical: 8,
    },
     text2: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
export default AnimationBox;

