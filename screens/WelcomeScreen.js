import {StyleSheet, Text, View, ImageBackground, Animated} from 'react-native';
import {useEffect, useRef} from 'react';
import {COLORS} from '../components/constants/colors';

const WelcomeScreen = ({navigation}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainMenu'));
  }, [fadeAnimation]);

  return (
    <View style={styles.rootContainer}>
      <Animated.View style={[{opacity: fadeAnimation}, styles.subContainer]}>
        <Text style={styles.mainText}>Discover </Text>
        {/* <Text style={styles.midText}>the</Text> */}
        <Text style={styles.mainText}>Wonderful Animals Puzzle!</Text>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.blue,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    color: COLORS.GOLD,
    fontSize: 62,
    marginVertical: 20,
    gap: 50,
  },
  mainText: {
    color: COLORS.yellow2,
    fontSize: 42,
    textAlign: 'center',
    fontWeight: '800',
  },
  midText: {
    color: COLORS.yellow2,
    fontSize: 42,
    textAlign: 'center',
  },
});
