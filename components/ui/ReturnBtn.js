import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ReturnBtn = ({children, btnStyle, textStyle}) => {
  const navigation = useNavigation();
  function returnHandle() {
    navigation.goBack();
  }
  return (
    <TouchableOpacity onPress={returnHandle} style={btnStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ReturnBtn;

const styles = StyleSheet.create({});
