import {StyleSheet, View} from 'react-native';
import {PuzzleContainer} from '../components';

const PuzzleSingleLevelScreen = ({route}) => {
  const levelData = route.params.data;

  return (
    <View>
      <PuzzleContainer
        animal={levelData.animal}
        animalImages={levelData.images}
      />
    </View>
  );
};

export default PuzzleSingleLevelScreen;

const styles = StyleSheet.create({});
