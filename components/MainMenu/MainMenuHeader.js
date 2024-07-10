import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const MainMenuHeader = () => {
  return (
    <View style={styles.rootContainer}>
      <SafeAreaView>
        <Text style={styles.text}>Wonderful Aminals Puzzle</Text>
      </SafeAreaView>
    </View>
  );
};

export default MainMenuHeader;

const styles = StyleSheet.create({
  rootContainer: {
    height: 160,
    backgroundColor: COLORS.yellowLight,
    width: '100%',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
});
