import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PuzzleSingleLevel = ({data, onPressFn}) => {
 
  return (
    <TouchableOpacity onPress={onPressFn}>
      <Text>{data.animal}</Text>
    </TouchableOpacity>
  );
};

export default PuzzleSingleLevel;

const styles = StyleSheet.create({});
