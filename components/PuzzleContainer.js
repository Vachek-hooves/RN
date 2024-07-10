import {StyleSheet, View, Text} from 'react-native';
import PuzzleUnitBox from './PuzzleUnitBox';
import {useEffect, useState} from 'react';
import {getSavedPuzzle, updatePuzzleData, unlockNextPuzzle} from '../Utils';

const PuzzleContainer = ({animal}) => {
  const [puzzleData, setPuzzleData] = useState([]);
  const puzzleImages = puzzleData.images;
  // const [twists, setTwists] = useState(Array(puzzleImages?.length).fill(null));
  const [win, setWin] = useState(false);

  const handleTwist = async (angle, id) => {
    try {
      await updatePuzzleData(animal, angle, id);
      const updatedPuzzleData = await getSavedPuzzle(animal);
      setPuzzleData(updatedPuzzleData);
      checkIsWin(updatedPuzzleData.images);
    } catch (error) {
      console.log('Error updating puzzle data:', error);
    }
  };

  function checkIsWin(images) {
    if (images?.every(image => parseInt(image.angle, 10) === 0)) {
      setWin(true);
      unlockNextPuzzle(animal);
    } else {
      setWin(false);
    }
  }

  useEffect(() => {
    async function fetchPuzzleData() {
      try {
        const data = await getSavedPuzzle(animal);
        if (data) {
          // console.log(data);
          setPuzzleData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchPuzzleData();
  }, [animal]);

  useEffect(() => {
    checkIsWin(puzzleImages);
  }, [puzzleImages]);

  // useEffect(() => {
  //   if (puzzleImages?.every(image => parseInt(image.angle, 10) === 0)) {
  //     setWin(true);
  //   } else {
  //     setWin(false);
  //   }
  // }, [puzzleImages]);

  return (
    <View style={styles.rootContainer}>
      {puzzleImages?.map((image, i) => (
        <PuzzleUnitBox
          image={image.image}
          angle={image.angle}
          key={image.imageId}
          id={image.imageId}
          onTwist={handleTwist}
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
  rootContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
