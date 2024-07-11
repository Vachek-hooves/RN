import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ReturnBtn = ({children, btnStyle, textStyle}) => {
  const navigation = useNavigation();
  function returnHandle() {
    navigation.goBack();
  }
  return (
    <TouchableOpacity onPress={returnHandle} style={btnStyle}>
      {/* <Text style={textStyle}>{children}</Text> */}
      <Image
        source={require('../../assets/img/icon/left-arrow.png')}
        style={{width: 20, height: 20,alignSelf:'center'}}
      />
    </TouchableOpacity>
  );
};

export default ReturnBtn;

const styles = StyleSheet.create({});
