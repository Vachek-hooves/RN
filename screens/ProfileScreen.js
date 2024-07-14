import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
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
      {/* <MainMenuHeader>
        <Text style={styles.headerText}>User Profile</Text>
      </MainMenuHeader> */}
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        {/* <View> */}
        {user ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 120,
            }}>
            <ProfileDetails user={user} />
            {/* <CustomButton btnStyle={styles.btnStyle} onPressFn={toMainMenu}>
              <Text style={styles.btnText}>Main Menu</Text>
            </CustomButton> */}
          </View>
        ) : (
          <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <MadeInput
                value={userInputs.nick}
                onChangeText={value => inputsSave('nick', value)}
                label={'Nick Name'}
                style={styles.inputStyle}
                styleContainer={{marginVertical: 25}}
                styleText={styles.inputText}
              />
              <HandleImagePicker
                saveImage={image => handleUserImage(image)}
                style={{color: COLORS.blue, fontWeight: '600', fontSize: 18}}
                btnStyle={styles.choosePhoto}>
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
        {/* </View> */}
        <View style={{alignItems: 'flex-end', width: '100%'}}>
          <ReturnBtn btnStyle={styles.rtnBtn} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.blue,
    flex: 1,
    // justifyContent: 'space-between',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  btnStyle: {
    borderWidth: 3,
    padding: 10,
    width: 280,
    borderRadius: 50,
    height: 70,
    marginVertical: 10,
    backgroundColor: COLORS.teal,
    borderColor: COLORS.yellow2,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 32,
    textAlign: 'center',
    color: COLORS.yellow2,
  },
  rtnBtn: {
    height: 60,
    padding: 10,
    width: 60,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
    marginVertical: 30,
    // marginLeft: 30,
    justifyContent: 'center',
    marginRight: 60,
  },
  choosePhoto: {
    alignItems: 'center',
    backgroundColor: COLORS.yellowLight,
    marginVertical: 5,
    width: 200,
    padding: 10,
    borderRadius: 30,
  },
  inputStyle: {
    backgroundColor: COLORS.yellowLight,
    padding: 10,
    borderRadius: 30,
    width: 250,
    fontSize: 18,
  },
  inputText: {
    color: COLORS.yellowLight,
    fontSize: 16,
    marginVertical: 5,
  },
});
