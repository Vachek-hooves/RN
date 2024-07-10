import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {PUZZLE} from '../data/puzzles';
import {PuzzleLevelsGrid} from '../components/SingleLevelComponents';
import {MainMenuHeader} from '../components/MainMenu';
import {COLORS} from '../components/constants/colors';

const LevelsScreen = () => {
  // const animalLevel = PUZZLE.map(puzzle => puzzle.animal);

  function renderLevel({item}) {
    return <PuzzleLevelsGrid data={item} />;
  }

  return (
    <View style={styles.rootContainer}>
      <MainMenuHeader />
      <SafeAreaView></SafeAreaView>
      <FlatList
        data={PUZZLE}
        keyExtractor={(item, i) => i}
        renderItem={renderLevel}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default LevelsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.mainBg,
    gap: 40,
    paddingBottom:30
  },
});
