import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {PUZZLE} from '../data/puzzles';
import {PuzzleLevelsGrid} from '../components/SingleLevelComponents';

const LevelsScreen = ({navigation}) => {
  const animalLevel = PUZZLE.map(puzzle => puzzle.animal);

  function renderLevel({item}) {
    return <PuzzleLevelsGrid data={item} />;
  }

  return (
    <FlatList
      data={PUZZLE}
      keyExtractor={(item, i) => i}
      renderItem={renderLevel}
    />
  );
};

export default LevelsScreen;

const styles = StyleSheet.create({});
