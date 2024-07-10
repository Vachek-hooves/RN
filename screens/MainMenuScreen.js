import {StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../components/ui';
import {COLORS} from '../components/constants/colors';
import {MainMenuHeader} from '../components/MainMenu';

const MainMenuScreen = ({navigation}) => {
  function jumpToRulesScreen() {
    navigation.navigate('RulesScreen');
  }

  function jumpToAllPuzzlesScreen(level) {
    navigation.navigate('LevelsScreen', {level});
  }
  function jumpToProfile() {
    navigation.navigate('ProfileScreen');
  }

  return (
    <View style={styles.rootContainer}>
      <MainMenuHeader />
      <View style={styles.btnContainer}>
        <CustomButton btnStyle={styles.btnStyle} onPressFn={jumpToProfile}>
          <Text style={styles.btnText}>Profile</Text>
        </CustomButton>
        <CustomButton onPressFn={jumpToRulesScreen} btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Rules</Text>
        </CustomButton>
        <CustomButton
          onPressFn={() => jumpToAllPuzzlesScreen('easy')}
          btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Easy</Text>
        </CustomButton>
        <CustomButton
          onPressFn={() => jumpToAllPuzzlesScreen('hard')}
          btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Hard</Text>
        </CustomButton>
      </View>
    </View>
  );
};

export default MainMenuScreen;

const styles = StyleSheet.create({
  rootContainer: {flex: 1, backgroundColor: COLORS.teal, gap: 10},
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  btnStyle: {
    borderWidth: 4,
    padding: 10,
    width: 350,
    borderRadius: 50,
    height: 70,
    // backgroundColor: COLORS.yellow,
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
