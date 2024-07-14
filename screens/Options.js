import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {resetAllPuzzles} from '../Utils';
import {CustomButton, ReturnBtn} from '../components/ui';
import {COLORS} from '../components/constants/colors';
import {MainMenuHeader} from '../components/MainMenu';

const Options = () => {
  const navigation = useNavigation();

  function jumpToRulesScreen() {
    navigation.navigate('RulesScreen');
  }
  function resetAllPuzzlesHandle() {
    resetAllPuzzles();
  }
  return (
    <View style={styles.rootContainer}>
      {/* <MainMenuHeader /> */}
      <SafeAreaView style={{alignItems: 'flex-end'}}>
        <View style={styles.btnContainer}>
          <CustomButton
            onPressFn={jumpToRulesScreen}
            btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Rules</Text>
          </CustomButton>
          <CustomButton
            onPressFn={() => resetAllPuzzlesHandle('hard')}
            btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Reset All Game</Text>
          </CustomButton>
        </View>
        <View style={styles.rtnBtnContainer}>
          <ReturnBtn btnStyle={styles.rtnBtn} textStyle={styles.textStyle} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.blue,
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  btnStyle: {
    borderWidth: 4,
    padding: 20,
    width: 300,
    borderRadius: 50,
    // height: 70,
    // backgroundColor: COLORS.yellow,
    backgroundColor: COLORS.teal,
    borderColor: COLORS.yellow2,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 32,
    textAlign: 'center',
    color: COLORS.yellow2,
  },
  rtnBtn: {
    height: 60,
    padding: 10,
    width: 60,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
    marginVertical: 30,
    justifyContent: 'center',
  },
  rtnBtnContainer: {
    alignItems: 'flex-end',
    width: '100%',
    alignItems: 'flex-end',
    // flex: 1,
  },
});
