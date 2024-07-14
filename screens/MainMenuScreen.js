import {StyleSheet, Text, View} from 'react-native';
import {CustomButton, ProfileIcon} from '../components/ui';
import {COLORS} from '../components/constants/colors';
import {MainMenuHeader} from '../components/MainMenu';
import {resetAllPuzzles} from '../Utils';

const MainMenuScreen = ({navigation}) => {
  function jumpToOptionsScreen() {
    navigation.navigate('OptionsScreen');
  }
  function jumpToRulesScreen() {
    navigation.navigate('RulesScreen');
  }

  // function jumpToAllPuzzlesScreen(level) {
  //   navigation.navigate('LevelsScreen', {level});
  // }
  function jumpToProfile() {
    navigation.navigate('ProfileScreen');
  }
  function jumpToGameScreen() {
    navigation.navigate('GameScreen');
  }
  // function resetAllPuzzlesHandle() {
  //   resetAllPuzzles();
  // }

  return (
    <View style={styles.rootContainer}>
      <MainMenuHeader />
      <ProfileIcon onPressFn={jumpToProfile} />
      <View style={styles.btnContainer}>
        {/* <CustomButton btnStyle={styles.btnStyle} onPressFn={jumpToProfile}>
          <Text style={styles.btnText}>Profile</Text>
        </CustomButton> */}
        <CustomButton onPressFn={jumpToGameScreen} btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Game</Text>
        </CustomButton>
        <CustomButton onPressFn={jumpToRulesScreen} btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Rules</Text>
        </CustomButton>
        {/* <CustomButton
          onPressFn={() => jumpToAllPuzzlesScreen('easy')}
          btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Easy</Text>
        </CustomButton>
        <CustomButton
          onPressFn={() => jumpToAllPuzzlesScreen('hard')}
          btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Hard</Text>
        </CustomButton> */}
        {/* <CustomButton
          onPressFn={jumpToOptionsScreen}
          btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Options</Text>
        </CustomButton> */}
        {/* <CustomButton
          onPressFn={() => resetAllPuzzlesHandle('hard')}
          btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Reset All Game</Text>
        </CustomButton> */}
      </View>
    </View>
  );
};

export default MainMenuScreen;

const styles = StyleSheet.create({
  rootContainer: {flex: 1, backgroundColor: COLORS.blue, gap: 10},
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 60,
    marginTop: 100,
  },
  btnStyle: {
    borderWidth: 4,
    padding: 20,
    width: 320,
    borderRadius: 50,
    // height: 70,
    // backgroundColor: COLORS.yellow,
    backgroundColor: COLORS.teal,
    borderColor: COLORS.yellow2,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 42,
    textAlign: 'center',
    color: COLORS.yellow2,
  },
});
