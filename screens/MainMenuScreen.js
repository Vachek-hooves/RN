import {StyleSheet, Text, View} from 'react-native';
import LevelsScreen from './LevelsScreen';
import {CustomButton} from '../components/ui';

const MainMenuScreen = ({navigation}) => {
  function jumpToRulesScreen() {
    navigation.navigate('RulesScreen');
  }
  function jumpToAllPuzzlesScreen() {
    navigation.navigate('LevelsScreen');
  }
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <CustomButton onPressFn={jumpToRulesScreen}>
        <Text>Rules</Text>
      </CustomButton>
      <CustomButton onPressFn={jumpToAllPuzzlesScreen}>
        <Text>Puzzles</Text>
      </CustomButton>
    </View>
  );
};

export default MainMenuScreen;

const styles = StyleSheet.create({});
