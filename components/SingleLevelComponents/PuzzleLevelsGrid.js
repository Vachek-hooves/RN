import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {savePuzzleToAsyncStorage, getSavedPuzzle} from '../../Utils';
import {COLORS} from '../constants/colors';
import {useEffect, useState} from 'react';

const PuzzleLevelsGrid = ({data}) => {
  const ANIMAL = data.animal.toUpperCase();
  const navigation = useNavigation();
  const [isLocked, setIsLocked] = useState(
    data.animal === 'fox' ? false : true,
  );
 console.log(isLocked)

  async function jumpToPuzzleLevel() {
    const existingData = await getSavedPuzzle(data.animal);
    if (!existingData) {
      await savePuzzleToAsyncStorage(data, data.animal);
    }
    navigation.navigate('PuzzleSingleLevelScreen', {data});
  }

  useEffect(() => {
    async function fetchPuzzleData() {
      try {
        const puzzle = await getSavedPuzzle(data.animal);
        if (puzzle) {
          // console.log(puzzle.isLocked);
          setIsLocked(puzzle.isLocked);
        } else {
          // console.log('data not existed');
          // console.log(puzzle);
        }
      } catch (error) {}
    }
    fetchPuzzleData();
  }, [data.animal]);

  return (
    <TouchableOpacity
      onPress={jumpToPuzzleLevel}
      style={[
        styles.btnStyle,
        {
          backgroundColor:
            isLocked ?? false ? COLORS.yellow + 20 : COLORS.yellow,
        },

      ]}
      disabled={isLocked ?? true}>
      <Text style={styles.btnText}>{ANIMAL}</Text>
    </TouchableOpacity>
  );
};

export default PuzzleLevelsGrid;

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 50,
    height: 70,
    // backgroundColor: COLORS.yellow + 50,
    marginVertical: 10,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 32,
    textAlign: 'center',
    // color: COLORS.yellow,
  },
});
