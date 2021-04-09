/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import KeyPad from '../components/KeyPad/index';

const Home = ({navigation}) => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.section1}></View>
      <View style={styles.section2}>
        <KeyPad />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#202020',
  },
  section1: {
    flex: 2,
  },
  section2: {
    flex: 3,
    // alignSelf: 'flex-end',
    // backgroundColor: 'aqua',
// alignItems: 'baseline',
  },
});
export default Home;
