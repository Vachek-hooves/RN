import {StyleSheet, Text, View} from 'react-native';
import LevelsScreen from './LevelsScreen';
import {CustomButton} from '../components/ui';
import {COLORS} from '../components/constants/colors';
import {MainMenuHeader} from '../components/MainMenu';

const MainMenuScreen = ({navigation}) => {
  function jumpToRulesScreen() {
    navigation.navigate('RulesScreen');
  }
  function jumpToAllPuzzlesScreen() {
    navigation.navigate('LevelsScreen');
  }
  return (
    <View style={styles.rootContainer}>
      <MainMenuHeader />
      <View style={styles.btnContainer}>
        <CustomButton onPressFn={jumpToRulesScreen} btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Rules</Text>
        </CustomButton>
        <CustomButton
          onPressFn={jumpToAllPuzzlesScreen}
          btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Puzzles</Text>
        </CustomButton>
        <CustomButton
          btnStyle={styles.btnStyle}>
          <Text style={styles.btnText}>Profile</Text>
        </CustomButton>
      </View>
    </View>
  );
};

export default MainMenuScreen;

const styles = StyleSheet.create({
  rootContainer: {flex: 1, backgroundColor: COLORS.mainBg, gap: 10},
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  btnStyle: {
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 50,
    height: 70,
    backgroundColor: COLORS.yellow,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 32,
    textAlign: 'center',
  },
});
