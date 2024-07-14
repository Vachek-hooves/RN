import {Text, TouchableOpacity} from 'react-native';

const PuzzleSingleLevel = ({data, onPressFn}) => {
  return (
    <TouchableOpacity onPress={onPressFn}>
      <Text>{data.animal}</Text>
    </TouchableOpacity>
  );
};

export default PuzzleSingleLevel;
