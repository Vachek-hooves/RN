import {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const PuzzleUnitBox = ({image, angle, onTwist}) => {
  const initialAngle = parseInt(angle, 10);
  const [twist, setTwist] = useState(initialAngle);

  // console.log('Initial Angle:', initialAngle);
  // console.log('Current Twist:', twist);

  useEffect(() => {
    onTwist(twist);
  }, [twist]);

  function twistPuzzle() {
    setTwist(prevState => {
      const newAngle = prevState + 90;
      return newAngle >= 360 ? 0 : newAngle;
    });
  }

  return (
    <View>
      <TouchableOpacity
        onPress={twistPuzzle}
        style={{
          margin: 3,
          transform: [{rotate: `${twist}deg`}],
        }}>
        <Image source={image} style={{width: 100, height: 100}} />
      </TouchableOpacity>
    </View>
  );
};

export default PuzzleUnitBox;

const styles = StyleSheet.create({});
