import {Text, TouchableOpacity, Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = ({saveImage, style, children, btnStyle}) => {
  const handleResponse = response => {
    if (response.didCancel) {
      Alert.alert('Operation canceled');
    } else if (response.errorCode) {
      Alert.alert('Error', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const image = response.assets[0].uri;
      const images = response.assets.map(asset => asset.uri);
      saveImage(images);
    } else {
      Alert.alert('No image selected');
    }
  };
  const phoneGallery = () => {
    const options = {storageOptions: {path: 'images'}, selectionLimit: 0};
    launchImageLibrary(options, handleResponse);
  };
  return (
    <TouchableOpacity style={[btnStyle]} onPress={() => phoneGallery()}>
      <Text style={style}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ImagePicker;
