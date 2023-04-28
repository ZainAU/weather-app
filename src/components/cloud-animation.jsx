import React, { useState, useEffect } from 'react';
import { View, Image, Animated } from 'react-native';

const CloudAnimation = () => {
  const [cloudAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(cloudAnimation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const interpolateClouds = cloudAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <Animated.Image
        style={{
          transform: [{ rotate: interpolateClouds }],
          height: 100,
          width: 100,
        }}
        source={require('../cloud.png')}
      />
    </View>
  );
};