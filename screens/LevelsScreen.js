import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {PUZZLE} from '../data/puzzles';
import {PuzzleLevelsGrid} from '../components/SingleLevelComponents';
import {MainMenuHeader} from '../components/MainMenu';
import {COLORS} from '../components/constants/colors';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {savePuzzleToAsyncStorage} from '../Utils';
import {ReturnBtn} from '../components/ui';

const LevelsScreen = ({route}) => {
  const LEVEL = route.params?.level;
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
    return <PuzzleLevelsGrid data={item} level={LEVEL} />;
  }

  return (
    <View style={styles.rootContainer}>
      <MainMenuHeader />
      <ReturnBtn btnStyle={styles.btnStyle} textStyle={styles.textStyle}>
        Main Menu
      </ReturnBtn>
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <FlatList
          data={puzzleData}
          keyExtractor={item => item.animal}
          renderItem={renderLevel}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default LevelsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.teal,
    gap: 20,
  },
  btnStyle: {
    padding: 10,
    width: 125,
    borderRadius: 50,
    backgroundColor: COLORS.yellow,
    marginLeft: 30,
  },
  textStyle: {fontWeight: '800', fontSize: 16, textAlign: 'center'},
});
