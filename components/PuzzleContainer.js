import {StyleSheet, View, Text} from 'react-native';
import PuzzleUnitBox from './PuzzleUnitBox';
// import {PUZZLE} from '../data/puzzles';
import {useEffect, useState} from 'react';

const PuzzleContainer = ({animal, animalImages}) => {
  // const ANIMAL = PUZZLE.find(item => item.animal === 'fox');
  const [twists, setTwists] = useState(Array(animalImages.length).fill(null));
  // console.log(twists);
  const [win, setWin] = useState(false);
  // if (!ANIMAL) {
  //   return null;
  // }

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
        // width: '100%',
        // height: '80%',
        borderWidth: 1,
        // padding: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
      {animalImages.map((image, i) => (
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
