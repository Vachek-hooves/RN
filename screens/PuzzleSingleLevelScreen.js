import {View} from 'react-native';
import {PuzzleContainer} from '../components';

const PuzzleSingleLevelScreen = ({route}) => {
  const ANIMAL = route.params.data.animal;

  return (
    <View>
      <PuzzleContainer animal={ANIMAL} />
    </View>
  );
};

export default PuzzleSingleLevelScreen;
