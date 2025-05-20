// CustomSwitch.js
import React, { useState } from 'react';
import {  Animated, TouchableOpacity, StyleSheet } from 'react-native';

const CustomSwitch = ({ initialValue = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initialValue);
  const translateX = new Animated.Value(isOn ? 30 : 0);

  const toggleSwitch = () => {
    const toValue = isOn ? 0 : 30;
    Animated.timing(translateX, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsOn(!isOn);
    if (onToggle) onToggle(!isOn);
  };

  return (
    <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer}>
      <Animated.View
        style={[
          styles.switchThumb,
          {
            transform: [{ translateX }],
            backgroundColor: isOn ? '#ffffff' : '#cccccc',
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    padding: 2,
    justifyContent: 'center',
  },
  switchThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default CustomSwitch;
