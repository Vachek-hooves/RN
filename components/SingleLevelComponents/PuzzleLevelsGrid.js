import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {savePuzzleToAsyncStorage, getSavedPuzzle} from '../../Utils';

const PuzzleLevelsGrid = ({data}) => {
  const navigation = useNavigation();

  async function jumpToPuzzleLevel() {
    const existingData = await getSavedPuzzle(data.animal);
    if (!existingData) {
      await savePuzzleToAsyncStorage(data, data.animal);
    }
    navigation.navigate('PuzzleSingleLevelScreen', {data});
  }

  // function jumpToPuzzleLevel() {
  //   savePuzzleToAsyncStorage(data, data.animal);
  //   navigation.navigate('PuzzleSingleLevelScreen', {data});
  // }

  return (
    <TouchableOpacity onPress={jumpToPuzzleLevel}>
      <Text>{data.animal}</Text>
    </TouchableOpacity>
  );
};

export default PuzzleLevelsGrid;

const styles = StyleSheet.create({});
