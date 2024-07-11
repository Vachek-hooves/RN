import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MainMenuHeader} from '../components/MainMenu';
import {COLORS} from '../components/constants/colors';
import {
  CustomButton,
  HandleImagePicker,
  MadeInput,
  ReturnBtn,
} from '../components/ui';
import {fetchProfile, submitProfile} from '../Utils/profile';
import ProfileDetails from '../components/ProfileDetails';

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const [userInputs, setUserInputs] = useState({
    nick: '',
    photo: '',
  });

  const dateId = () => {
    return Date.now().toString();
  };

  useEffect(() => {
    async function fetch() {
      const data = await fetchProfile();
      setUser(data);
    }
    fetch();
  }, []);

  function inputsSave(identifier, newValue) {
    setUserInputs(value => {
      return {...value, [identifier]: newValue};
    });
  }

  function handleUserImage(image) {
    inputsSave('photo', image);
  }
  function resetUserInputs() {
    setUserInputs({nick: '', photo: ''});
  }

  async function submit() {
    const submitData = {
      userId: dateId(),
      nick: userInputs.nick,
      photo: userInputs.photo,
    };
    const isValidName = userInputs.nick.trim().length > 0;
    if (!isValidName) {
      Alert.alert('Error', 'Wrong Name');
      return;
    }
    try {
      await submitProfile(submitData);
      const updatedData = await fetchProfile();
      setUser(updatedData);
    } catch (error) {
      console.error('Failed to submit user data:', error);
    }
  }
  function toMainMenu() {
    navigation.navigate('MainMenu');
  }

  return (
    <View style={styles.rootContainer}>
      <MainMenuHeader>
        <Text style={styles.headerText}>User Profile</Text>
      </MainMenuHeader>
      <ReturnBtn
        btnStyle={{
          padding: 10,
          width: 125,
          borderRadius: 50,
          backgroundColor: COLORS.yellow,
          marginVertical: 20,
          marginLeft: 30,
        }}
      />
      <View>
        {user ? (
          <View
            style={{
              marginTop: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ProfileDetails user={user} />
            <CustomButton btnStyle={styles.btnStyle} onPressFn={toMainMenu}>
              <Text style={styles.btnText}>Main Menu</Text>
            </CustomButton>
          </View>
        ) : (
          <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <MadeInput
                value={userInputs.nick}
                onChangeText={value => inputsSave('nick', value)}
                label={'Nick Name'}
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
              />
              <HandleImagePicker
                saveImage={image => handleUserImage(image)}
                style={{color: COLORS.blue, fontWeight: '600', fontSize: 18}}
                btnStyle={{
                  alignItems: 'center',
                  backgroundColor: COLORS.yellowLight,
                  marginVertical: 10,
                  width: 200,
                  padding: 10,
                  borderRadius: 30,
                }}>
                Choose Photo
              </HandleImagePicker>
            </View>

            <CustomButton btnStyle={styles.btnStyle} onPressFn={submit}>
              <Text style={styles.btnText}>Create User</Text>
            </CustomButton>
            <CustomButton
              btnStyle={styles.btnStyle}
              onPressFn={resetUserInputs}>
              <Text style={styles.btnText}>Reset</Text>
            </CustomButton>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.teal,
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  btnStyle: {
    borderWidth: 3,
    padding: 10,
    width: 350,
    borderRadius: 50,
    height: 70,
    marginVertical: 10,
    backgroundColor: COLORS.blue,
    borderColor: COLORS.yellow2,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 32,
    textAlign: 'center',
    color: COLORS.yellow2,
  },
});
