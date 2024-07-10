import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CustomButton, HandleImagePicker, MadeInput} from './ui';
import {COLORS} from './constants/colors';
import {handleChangeImage, handleRenameUser} from '../Utils/profile';

const ProfileDetails = ({user}) => {
  

  const [nameChange, setNameChange] = useState(false);
  const [newName, setNewName] = useState(user.nick);
  const [image, setImage] = useState(user.photo);


  useEffect(() => {
    async function setData() {
      setNewName(user.name);
      setImage(user.image);
    }
    setData();
  }, []);

  function userRenameFn(text) {
    setNewName(text);
  }

  function saveNewNameHandler() {
    handleRenameUser(newName);
    setNameChange(false);
  }
  function changeImage(image) {
    setImage(image);
    handleChangeImage(image);
  }

  return (
    <View style={styles.rootContainer}>
      {nameChange ? (
        <View style={styles.renameContainer}>
          <MadeInput
            label={'new name'}
            style={{
              backgroundColor: COLORS.yellowLight,
              padding: 10,
              borderRadius: 30,
              width: 300,
              fontSize: 18,
            }}
            styleContainer={{marginVertical: 25}}
            styleText={{
              color: COLORS.yellowLight,
              fontSize: 16,
              marginVertical: 5,
            }}
            value={newName}
            onChangeText={userRenameFn}
          />
          <CustomButton
            btnContainer={{alignItems: 'center', justifyContent: 'center'}}
            btnText={{paddingTop: 20}}
            onPressFn={saveNewNameHandler}>
            SAVE
          </CustomButton>
        </View>
      ) : (
        <CustomButton onPressFn={() => setNameChange(true)}>
          <Text style={styles.nameStyle}>{newName}</Text>
        </CustomButton>
      )}
      <HandleImagePicker saveImage={i => changeImage(i)}>
        <View style={styles.imagePicker}>
          {image?.length === 0 ? (
            <Text>Change Photo</Text>
          ) : (
            <Image source={{uri: image[0]}} style={styles.image} />
            // <Text>photo</Text>
          )}
        </View>
      </HandleImagePicker>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  rootContainer: {alignItems: 'center', padding: 20},
  image: {width: '100%', height: '100%', borderRadius: 30, marginVertical: 20},
  renameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 5,
    padding: 4,
    width: 120,
  },
  inputText: {
    textAlign: 'center',
    paddingBottom: 5,
  },
  nameStyle: {
    fontSize: 32,
    fontFamily: 'PlaywriteFRModerne-Light',
  },
  imagePicker: {
    width: 180,
    height: 220,
    backgroundColor: COLORS.yellow + 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
