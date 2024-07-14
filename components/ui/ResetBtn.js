import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {resetAllPuzzles} from '../../Utils';
import {COLORS} from '../constants/colors';

const ResetBtn = ({btnStyle}) => {
  function resetAllPuzzlesHandle() {
    resetAllPuzzles();
  }

  return (
    <TouchableOpacity onPress={resetAllPuzzlesHandle} style={btnStyle}>
      <Image
        source={require('../../assets/img/icon/reset.png')}
        style={{width: 40, height: 40, alignSelf: 'center'}}
      />
    </TouchableOpacity>
  );
};

export default ResetBtn;

const styles = StyleSheet.create({});
