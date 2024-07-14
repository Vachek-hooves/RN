import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PuzzleLevelsGrid = ({data}) => {
  const navigation = useNavigation();

  function jumpToPuzzleLevel() {
    navigation.navigate('PuzzleSingleLevelScreen', {data});
  }

  return (
    <TouchableOpacity onPress={jumpToPuzzleLevel}>
      <Text>{data.animal}</Text>
    </TouchableOpacity>
  );
};

export default PuzzleLevelsGrid;

const styles = StyleSheet.create({});
