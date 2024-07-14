import {StyleSheet,  TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({children, btnStyle, onPressFn}) => {
  return (
    <TouchableOpacity style={[btnStyle, {}]} onPress={onPressFn}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
