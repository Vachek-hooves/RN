import AsyncStorage from '@react-native-async-storage/async-storage';

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
