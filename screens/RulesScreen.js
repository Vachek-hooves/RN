import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {MainMenuHeader} from '../components/MainMenu';
import {COLORS} from '../components/constants/colors';
import {ReturnBtn} from '../components/ui';

const RulesScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <MainMenuHeader>
        <Text style={[styles.headerText, {color: 'black'}]}>Rules</Text>
      </MainMenuHeader> */}
      <SafeAreaView style={{alignItems: 'flex-end', flex: 1}}>
        <ScrollView>
          <View style={styles.rulesContainer}>
            <Text style={[styles.headerText]}>
              Welcome to the Wonderful Animals Puzzle Game!{' '}
            </Text>
            <Text style={styles.rulesText}>
              In this captivating puzzle game, you will embark on an adventure
              across 8 unique themes, each centered around surviving on a
              deserted island. Your ultimate goal is to complete beautiful
              images of the island's inhabitants, piece by piece.
            </Text>
            <Text style={[styles.headerText]}>How to Play:</Text>
            <Text
              style={[styles.rulesText, {marginBottom: 15, fontWeight: '900'}]}>
              Select a Theme:
            </Text>
            <Text style={styles.rulesText}>
              1-At the start, only the first theme is unlocked.
            </Text>
            <Text style={styles.rulesText}>
              2-Successfully complete the first theme to unlock the next one,
              and so on.
            </Text>
            <Text
              style={[styles.rulesText, {marginBottom: 15, fontWeight: '900'}]}>
              Choose a Difficulty:
            </Text>
            <Text style={styles.rulesText}>
              Easy Mode: Enjoy the game without any time limits. Take as long as
              you need to complete the puzzle.
            </Text>
            <Text style={styles.rulesText}>
              Hard Mode: Challenge yourself with a 45-second timer. Can you beat
              the clock and complete the puzzle in time.
            </Text>
            <Text
              style={[styles.rulesText, {marginBottom: 15, fontWeight: '900'}]}>
              Reset Game::
            </Text>
            <Text style={styles.rulesText}>
              The game can be reset using the reset button
            </Text>
            <View
              style={{
                backgroundColor: COLORS.yellow2,
                borderRadius: 50,
                height: 40,
                padding: 10,
                width: 40,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/img/icon/reset.png')}
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: 'center',
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.rtnBtnContainer}>
        <ReturnBtn btnStyle={styles.rtnBtn} textStyle={styles.textStyle} />
      </View>
    </View>
  );
};

export default RulesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.blue,
    gap: 10,
    justifyContent: 'space-between',
    // alignItems: 'center',
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
    // marginVertical: 20,
    padding: 20,
  },
  rulesText: {
    color: COLORS.yellow,
    textAlign: 'center',
    marginVertical: 5,
  },
  btnStyle: {
    // borderWidth: 1,
    height: 60,
    padding: 10,
    width: 60,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
    marginVertical: 20,
    marginLeft: 30,
    justifyContent: 'center',
  },
  textStyle: {fontWeight: '800', fontSize: 16, textAlign: 'center'},
  rtnBtn: {
    height: 60,
    padding: 10,
    width: 60,
    borderRadius: 50,
    backgroundColor: COLORS.yellow2,
    marginVertical: 60,
    justifyContent: 'center',
    marginRight: 60,
  },
  rtnBtnContainer: {
    alignItems: 'flex-end',
    width: '100%',
    alignItems: 'flex-end',
    // flex: 1,
  },
});
