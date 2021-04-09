import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {setHistory} from '../redux/action';

const History = (props) => {

  return (
    <View style={styles.appCont}>
      <Text>history</Text>
    </View>
  );
};
const mapStateToProps = (state) => ({
  // user1: state.r1.name,
  // user2: state.r2.user,
});
const mapDispatchToProps = (dispatch) => ({
  // addUser: (data) => dispatch(setHistory(data))
});

// STYLE_SHEET
const styles = StyleSheet.create({
  appCont: {
    flex: 2,
    padding: 13,
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
