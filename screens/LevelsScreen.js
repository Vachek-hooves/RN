import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {PUZZLE} from '../data/puzzles';
import {PuzzleLevelsGrid} from '../components/SingleLevelComponents';
import {MainMenuHeader} from '../components/MainMenu';
import {COLORS} from '../components/constants/colors';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {savePuzzleToAsyncStorage} from '../Utils';

const LevelsScreen = () => {
  const [puzzleData, setPuzzleData] = useState([]);
  useEffect(() => {
    const savePuzzlesToAsync = async () => {
      try {
        for (const puzzle of PUZZLE) {
          const existingData = await AsyncStorage.getItem(puzzle.animal);
          if (!existingData) {
            await savePuzzleToAsyncStorage(puzzle, puzzle.animal);
          }
        }
        const allPuzzles = [];
        for (const puzzle of PUZZLE) {
          const data = await AsyncStorage.getItem(puzzle.animal);
          if (data) {
            allPuzzles.push(JSON.parse(data));
          }
        }
        setPuzzleData(allPuzzles);
      } catch (error) {
        console.log('Error saving puzzles to AsyncStorage:', error);
      }
    };
    savePuzzlesToAsync();
  }, []);

  function renderLevel({item}) {
    return <PuzzleLevelsGrid data={item} />;
  }

  return (
    <View style={styles.rootContainer}>
      <MainMenuHeader />
      <SafeAreaView></SafeAreaView>
      <FlatList
        // data={PUZZLE}
        data={puzzleData}
        keyExtractor={item => item.animal}
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
    paddingBottom: 30,
  },
});
