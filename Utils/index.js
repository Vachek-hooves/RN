import AsyncStorage from '@react-native-async-storage/async-storage';
import {PUZZLE} from '../data/puzzles';

export const savePuzzleToAsyncStorage = async (data, key) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonData);
  } catch (error) {
    console.log('Puzzle saving error', error);
  }
};

export const getSavedPuzzle = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    console.log('Puzzle loading error', error);
    return null;
  }
};

export const updatePuzzleData = async (animal, angle, puzzleImageId) => {
  // console.log(animal, angle, imageId);
  try {
    const data = await AsyncStorage.getItem(animal);
    if (!data) {
      console.log('No data found for animal:', animal);
      return null;
    }

    const jsonData = JSON.parse(data);
    const updatedImages = jsonData.images.map(image => {
      if (image.imageId === puzzleImageId) {
        return {...image, angle: angle.toString()};
      }
      return image;
    });

    const updatedPuzzleData = {...jsonData, images: updatedImages};
    await savePuzzleToAsyncStorage(updatedPuzzleData, animal);

    // console.log('Updated puzzle data:', updatedPuzzleData);
    return updatedPuzzleData;
  } catch (error) {
    console.log('Puzzle update error', error);
    return null;
  }
};

export const unlockNextPuzzle = async animal => {
  const animalToUnlockIndex =
    PUZZLE.findIndex(puzzle => puzzle.animal === animal) + 1;
  if (animalToUnlockIndex >= PUZZLE.length) {
    return null;
  }
  const animalNameToUnlock = PUZZLE[animalToUnlockIndex].animal;
  // console.log(animalNameToUnlock)

  try {
    const data = await AsyncStorage.getItem(animalNameToUnlock);
    if (!data) {
      // console.log('No data', data);
      return null;
    }
    const jsonData = JSON.parse(data);
    const updatedPuzzleData = {...jsonData, isLocked: false};
    // console.log(updatedPuzzleData);
    // console.log(animalNameToUnlock)
    await savePuzzleToAsyncStorage(updatedPuzzleData, animalNameToUnlock);
  } catch (error) {}
};

export const resetPuzzleData = async animal => {
  try {
    const puzzleToReset = PUZZLE.find(puzzle => puzzle.animal === animal);
    const data = await AsyncStorage.getItem(animal);
    if (!data) {
      return null;
    }
    const resetedPuzzle = {...puzzleToReset, isLocked: false};
    await savePuzzleToAsyncStorage(resetedPuzzle, animal);
    return resetedPuzzle;
  } catch (error) {
    console.log('Puzzle update error', error);
    return null;
  }
};

export const resetAllPuzzles = async () => {
  try {
    for (const puzzle of PUZZLE) {
      console.log(puzzle);
      console.log(puzzle.animal);
      await savePuzzleToAsyncStorage(puzzle, puzzle.animal);
    }
  } catch (error) {}
};
