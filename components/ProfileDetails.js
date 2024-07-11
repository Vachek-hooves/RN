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
    setNewName(user.nick);
    setImage(user.photo);
  }, [user]);

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
            label={'New nick'}
            style={{
              backgroundColor: COLORS.yellowLight,
              padding: 10,
              borderRadius: 30,
              width: 200,
              fontSize: 18,
            }}
            styleContainer={{marginBottom: 10}}
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
            <View style={{flex: 1, justifyContent: 'center', paddingTop: 25}}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.yellow2,
                  fontWeight: '800',
                }}>
                SAVE
              </Text>
            </View>
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
          )}
        </View>
      </HandleImagePicker>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  rootContainer: {alignItems: 'center', padding: 20},
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    marginVertical: 20,
    borderWidth: 4,
    borderColor: COLORS.yellow2,
  },
  renameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  textInput: {
    borderWidth: 4,
    borderRadius: 12,
    paddingLeft: 5,
    padding: 4,
    width: 120,
    borderColor: COLORS.yellow2,
  },
  inputText: {
    textAlign: 'center',
    paddingBottom: 5,
  },
  nameStyle: {
    fontSize: 32,
    // fontFamily: 'PlaywriteFRModerne-Light',
    marginBottom: 10,
    color:COLORS.yellow2
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
