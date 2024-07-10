import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainMenuHeader} from '../components/MainMenu';
import {COLORS} from '../components/constants/colors';
import {ReturnBtn} from '../components/ui';

const RulesScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <MainMenuHeader>
        <Text style={[styles.headerText, {color: 'black'}]}>Rules</Text>
      </MainMenuHeader>
      <ReturnBtn btnStyle={styles.btnStyle} textStyle={styles.textStyle}>
        return
      </ReturnBtn>
      <View style={styles.rulesContainer}>
        <Text style={[styles.headerText]}>
          Welcome to the Wonderful Animals Puzzle Game!{' '}
        </Text>
        <Text style={styles.rulesText}>
          In this captivating puzzle game, you will embark on an adventure
          across 8 unique themes, each centered around surviving on a deserted
          island. Your ultimate goal is to complete beautiful images of the
          island's inhabitants, piece by piece.
        </Text>
        <Text style={[styles.headerText]}>How to Play:</Text>
        <Text style={[styles.rulesText, {marginBottom: 15}]}>
          Select a Theme:
        </Text>
        <Text style={styles.rulesText}>
          1-At the start, only the first theme is unlocked.
        </Text>
        <Text style={styles.rulesText}>
          2-Successfully complete the first theme to unlock the next one, and so
          on.
        </Text>

        <Text style={[styles.rulesText, {marginBottom: 15}]}>
          Choose a Difficulty:
        </Text>
        <Text style={styles.rulesText}>
          Easy Mode: Enjoy the game without any time limits. Take as long as you
          need to complete the puzzle.
        </Text>
        <Text style={styles.rulesText}>
          Hard Mode: Challenge yourself with a 60-second timer. Can you beat the
          clock and complete the puzzle in time.
        </Text>
      </View>
    </View>
  );
};

export default RulesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.mainBg,
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 28,
    marginVertical: 20,
    color: COLORS.yellow,
  },
  rulesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 60,
    padding: 20,
  },
  rulesText: {
    color: COLORS.yellow,
    textAlign: 'center',
    marginVertical: 5,
  },
  btnStyle: {
    // borderWidth: 1,
    padding: 10,
    width: 100,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
    marginVertical: 20,
    marginLeft: 30,
  },
  textStyle: {fontWeight: '800', fontSize: 16, textAlign: 'center'},
});
