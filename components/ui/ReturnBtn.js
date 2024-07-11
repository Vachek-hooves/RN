import {StyleSheet,TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ReturnBtn = ({btnStyle}) => {
  const navigation = useNavigation();
  function returnHandle() {
    navigation.goBack();
  }
  return (
    <TouchableOpacity onPress={returnHandle} style={btnStyle}>
      <Image
        source={require('../../assets/img/icon/left-arrow.png')}
        style={{width: 20, height: 20,alignSelf:'center'}}
      />
    </TouchableOpacity>
  );
};

export default ReturnBtn;

const styles = StyleSheet.create({});
