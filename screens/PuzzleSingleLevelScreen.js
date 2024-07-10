import {PuzzleContainer} from '../components';

const PuzzleSingleLevelScreen = ({route}) => {
  const ANIMAL = route.params.data.animal;

  return (
    <>
      <PuzzleContainer animal={ANIMAL} />
    </>
  );
};

export default PuzzleSingleLevelScreen;
