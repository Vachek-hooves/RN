import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { getSavedPuzzle} from '../../Utils';
import {COLORS} from '../constants/colors';
import {useEffect, useState} from 'react';

const PuzzleLevelsGrid = ({data, level}) => {
  const ANIMAL = data.animal.toUpperCase();
  const navigation = useNavigation();
  const animal = data.animal;

  const [isLocked, setIsLocked] = useState(data.isLocked);

  async function jumpToPuzzleLevel() {
    navigation.navigate('PuzzleSingleLevelScreen', {level, animal});
  }

  useEffect(() => {
    async function fetchPuzzleData() {
      try {
        const puzzle = await getSavedPuzzle(data.animal);
        if (puzzle) {
          setIsLocked(puzzle.isLocked);
        } else {
          console.log('data not existed');

        }
      } catch (error) {}
    }
    fetchPuzzleData();
  }, []);

  return (
    <TouchableOpacity
      onPress={jumpToPuzzleLevel}
      style={[
        styles.btnStyle,
        {
          backgroundColor: isLocked ?? false ? COLORS.yellow + 20 : '#31C6D4',
        },
      ]}
      disabled={isLocked ?? true}>
      <Text
        style={[
          styles.btnText,
          {color: isLocked ?? false ? COLORS.black + 50 : COLORS.yellow2},
        ]}>
        {ANIMAL}
      </Text>
    </TouchableOpacity>
  );
};

export default PuzzleLevelsGrid;

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 4,
    padding: 10,
    width: 350,
    borderRadius: 50,
    height: 70,
    marginVertical: 10,
    backgroundColor: '#31C6D4',
    borderColor: COLORS.yellow2,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 32,
    textAlign: 'center',
    color: COLORS.yellow2,
  },
});
