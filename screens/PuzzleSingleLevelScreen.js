import {StyleSheet, Text, View} from 'react-native';
import {PuzzleContainer} from '../components';
import {COLORS} from '../components/constants/colors';
import {MainMenuHeader} from '../components/MainMenu';
import {ReturnBtn} from '../components/ui';

const PuzzleSingleLevelScreen = ({route}) => {
  // const ANIMAL = route?.params?.data?.animal;
  const LEVEL = route?.params?.level;
  const ANIMAL = route.params.animal;
  console.log(route.params.animal);

  return (
    <View style={styles.mainContainer}>
      <MainMenuHeader>
        <Text style={styles.headerText}>{ANIMAL.toUpperCase()}</Text>
      </MainMenuHeader>
      <ReturnBtn btnStyle={styles.btnStyle} textStyle={styles.textStyle}>
        return
      </ReturnBtn>
      <View style={styles.puzzleContainer}>
        <PuzzleContainer animal={ANIMAL} level={LEVEL} />
      </View>
    </View>
  );
};

export default PuzzleSingleLevelScreen;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.mainBg,
    flex: 1,
    alignItems:'center'
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '800',
  },
  puzzleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 60,
    width: 320,
    // flex: 1,
  },
  btnStyle: {
    // borderWidth: 1,
    padding: 10,
    width: 100,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
    marginVertical: 20,
    marginLeft: 30,
  },
  textStyle: {fontWeight: '800', fontSize: 16, textAlign: 'center'},
});
