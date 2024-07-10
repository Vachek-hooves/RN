import {StyleSheet, View, Text} from 'react-native';
import PuzzleUnitBox from './PuzzleUnitBox';
import {useEffect, useState} from 'react';
import {
  getSavedPuzzle,
  updatePuzzleData,
  unlockNextPuzzle,
  resetPuzzleData,
} from '../Utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from './constants/colors';
import {CustomButton, Timer} from './ui';

const PuzzleContainer = ({animal, level}) => {
  const navigation = useNavigation();
  const [puzzleData, setPuzzleData] = useState([]);

  // const puzzleImages = puzzleData.images;
  const [win, setWin] = useState(false);
  const [currentCount, setCurrentCount] = useState();
  // console.log(puzzleImages);
  // const [twists, setTwists] = useState(Array(puzzleImages?.length).fill(null));

  function handleTimerOut() {
    if (currentCount === 0 && !win) {
      console.log('you loooser');
    }
  }

  useEffect(() => {
    handleTimerOut();
  }, [currentCount, win]);

  const resetPuzzle = async () => {
    try {
      await resetPuzzleData(animal);
      const resetedPuzzleData = await getSavedPuzzle(animal);
      setPuzzleData(resetedPuzzleData); // Оновлюємо стан компонента
      navigation.navigate('LevelsScreen');
      // navigation.navigate('PuzzleSingleLevelScreen', {level, animal});
      console.log('PuzzleContainer', resetedPuzzleData);
    } catch (error) {
      console.log('Error resetting puzzle:', error);
    }
  };

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
          setPuzzleData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchPuzzleData();
  }, [animal]);

  useEffect(() => {
    if (puzzleData) {
      checkIsWin(puzzleData.images);
    }
  }, [puzzleData]);

  function toMainMenu() {
    navigation.navigate('MainMenu');
    navigation.navigate('LevelsScreen');
  }

  return (
    <View>
      {level === 'hard' && !win && (
        <Timer count={timer => setCurrentCount(timer)} />
      )}
      <View style={styles.puzzleContainer}>
        {puzzleData?.images?.map((image, i) => (
          <PuzzleUnitBox
            image={image.image}
            angle={image.angle}
            key={image.imageId}
            id={image.imageId}
            onTwist={handleTwist}
          />
        ))}
        {win && (
          <View style={styles.messageContainer}>
            <Text style={styles.winText}>You Won This Level!</Text>
          </View>
        )}
        {currentCount === 0 && !win && (
          <View style={styles.messageContainer}>
            <Text style={styles.loseText}>LOOOOSER</Text>
          </View>
        )}
      </View>
      <View>
        {win && (
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <CustomButton onPressFn={toMainMenu} btnStyle={styles.btnStyle}>
              <Text style={styles.btnText}>To All Puzzles</Text>
            </CustomButton>
          </View>
        )}

        <View
          style={{
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <CustomButton onPressFn={resetPuzzle} btnStyle={styles.resetBtn}>
            <Text style={styles.resetText}>Reset & Go To All Puzzles</Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default PuzzleContainer;

const styles = StyleSheet.create({
  winText: {
    position: 'absolute',
    top: '50%',
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.mainBg,
  },
  loseText: {
    // position: 'absolute',
    fontSize: 42,
    color: 'red',
    fontWeight: 'bold',
  },
  puzzleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  btnStyle: {
    // borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 50,
    height: 70,
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    textAlign: 'center',
  },
  btnText: {
    fontWeight: '800',
    fontSize: 32,
    textAlign: 'center',
  },
  resetBtn: {
    // borderWidth: 1,
    padding: 12,
    borderRadius: 50,
    backgroundColor: COLORS.yellow,
  },
  resetText: {fontWeight: '800', fontSize: 18, textAlign: 'center'},
  messageContainer: {
    position: 'absolute',
    padding: 12,
    height: 320,
    width: 320,
    backgroundColor: COLORS.yellow + 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
