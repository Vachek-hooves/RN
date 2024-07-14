import AsyncStorage from '@react-native-async-storage/async-storage';

export const submitProfile = async userData => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  } catch (error) {
    console.log('Data wasnt saved', error);
  }
};

export const fetchProfile = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    const data = user ? JSON.parse(user) : null;
    // console.log(data);
    return data;
  } catch (error) {
    console.log('Data fetching fail');
  }
};

export const handleRenameUser = async name => {
  try {
    const user = await fetchProfile();
    user.name = name;
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.log('User rename failure', error);
  }
};

export const handleChangeImage = async image => {
  try {
    const user = await fetchProfile();
    user.image = image;
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.log('Image change failure', error);
  }
};
