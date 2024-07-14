import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton, ResetBtn, ReturnBtn} from '../components/ui';
import {COLORS} from '../components/constants/colors';

const GameScreen = () => {
  const navigation = useNavigation();
  function jumpToAllPuzzlesScreen(level) {
    navigation.navigate('LevelsScreen', {level});
  }
  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={{alignItems:'center'}}>
        <View style={styles.btnContainer}>
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
        <View style={styles.rtnBtnContainer}>
          <ResetBtn btnStyle={styles.rtnBtn} />
          <ReturnBtn btnStyle={styles.rtnBtn} textStyle={styles.textStyle} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.blue,
    gap: 10,
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
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
  rtnBtn: {
    height: 60,
    padding: 10,
    width: 60,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
    marginVertical: 30,
    justifyContent: 'center',
    // marginRight: 30,
  },
  rtnBtnContainer: {
    // alignItems: 'flex-end',
    width: '100%',
    // alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:60
    // flex: 1,
  },
});
