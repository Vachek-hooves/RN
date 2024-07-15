import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const MainMenuHeader = ({children}) => {
  return (
    <View style={styles.rootContainer}>
      <SafeAreaView>
        <Text style={styles.text}>Wonderfull Puzzle</Text>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default MainMenuHeader;

const styles = StyleSheet.create({
  rootContainer: {
    height: 160,
    backgroundColor: COLORS.yellow2,
    width: '100%',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 10,
  },
});
