import {StyleSheet, View, Text} from 'react-native';
import PuzzleUnitBox from './PuzzleUnitBox';
import {PUZZLE} from '../data/puzzles';
import {useEffect, useState} from 'react';

const PuzzleContainer = () => {
  const ANIMAL = PUZZLE.find(item => item.animal === 'fox');
  const [twists, setTwists] = useState(Array(ANIMAL.images.length).fill(null));
  const [win, setWin] = useState(false);
  if (!ANIMAL) {
    return null;
  }

  const handleTwist = (index, updatedTwist) => {
    const newTwists = [...twists];
    newTwists[index] = updatedTwist;
    setTwists(newTwists);
  };

  useEffect(() => {
    if (twists.every(twist => twist === 0)) {
      setWin(true);
    } else {
      setWin(false);
    }
  }, [twists]);

  return (
    <View
      style={{
        width: '100%',
        height: '80%',
        borderWidth: 2,
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
      {/* {ANIMAL.images.map((image, i) => (
        <TouchableOpacity onPress={() => twistThisImage(image)}>
          <Image
            key={i}
            source={image.image}
            style={{
              width: 100,
              height: 100,
              margin: 5,
              transform: [{rotate: `${image.angle}deg`}],
            }}
          />
        </TouchableOpacity>
      ))} */}

      {ANIMAL.images.map((image, i) => (
        <PuzzleUnitBox
          image={image.image}
          angle={image.angle}
          key={i}
          onTwist={updatedTwist => handleTwist(i, updatedTwist)}
        />
      ))}
      {win && <Text style={styles.winText}>You Win!</Text>}
    </View>
  );
};

export default PuzzleContainer;

const styles = StyleSheet.create({
  winText: {
    position: 'absolute',
    top: '50%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});
