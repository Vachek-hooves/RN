import {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated,
} from 'react-native';

const PuzzleUnitBox = ({image, angle, onTwist, id}) => {
  const initialAngle = parseInt(angle, 10);
  const [twist, setTwist] = useState(initialAngle);
  const scale = useRef(new Animated.Value(1)).current;
  const animatedTwist = useRef(new Animated.Value(initialAngle)).current;
  const displayAngle = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    onTwist(twist, id);
  }, [twist]);

  useEffect(() => {
    Animated.timing(displayAngle, {
      toValue: animatedTwist,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [animatedTwist]);

  function twistPuzzle() {
    const newAngle = twist + 90 >= 360 ? 0 : twist + 90;
    setTwist(newAngle);

    Animated.timing(animatedTwist, {
      toValue: newAngle,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.4,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={twistPuzzle}>
        <Animated.View
          style={{
            margin: 3,
            transform: [
              {
                rotate: animatedTwist.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                  // extrapolate: 'clamp', // This prevents the animation from "wrapping around"
                }),
              },
              {scale},
            ],
          }}>
          <Image source={image} style={{width: 100, height: 100}} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PuzzleUnitBox;

const styles = StyleSheet.create({});
