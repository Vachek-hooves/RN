import {StyleSheet,  View, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors';

const ProfileIcon = ({onPressFn}) => {

  return (
    <TouchableOpacity
      onPress={onPressFn}
      style={{alignItems: 'flex-end', marginVertical: 20, marginHorizontal: 20}}
      activeOpacity={0.6}>
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <View style={styles.head}></View>
          <View style={styles.body}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileIcon;

const styles = StyleSheet.create({
  mainContainer: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: COLORS.teal,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    justifyContent: 'center',
  },
  head: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
  },
  body: {
    width: 40,
    height: 15,
    backgroundColor: COLORS.yellow2,
    marginTop: 4,
    borderRadius: 10,
    // padding: 10,
  },
});
