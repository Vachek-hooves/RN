import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../constants/colors';

const Timer = ({count}) => {
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        count(timer - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      {timer === 0 ? (
        <View style={styles.timerContainer}>
          <Text style={styles.numStyle}> Time Is Up!</Text>
        </View>
      ) : (
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>remain </Text>
          <Text style={styles.numStyle}> {timer} </Text>
          <Text style={styles.timerText}> seconds</Text>
        </View>
      )}
    </>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.yellow,
  },
  numStyle: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
