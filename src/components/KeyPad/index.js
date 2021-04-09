import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text,} from 'react-native';
import Row from './Row'
import {btnList} from '../../redux/reducer/BtnList'

const KeyPad = () => {
  const buttons = btnList
  return (
    <View style={styles.KeyPad_container}>
      {buttons.map((row, index) => (
        <Row Rowindex={index} arr= {row}  />
      ))}

      {/*  */}
      {/* {buttons.map((row, index) => (
        <View key={index}>
          {row.map((col, index) => (
            <View key={index} onPress={() => {}}>
              <View>
                <Text>{col.title}</Text>
              </View>
            </View>
          ))}
        </View>
      ))} */}
      {/*  */}
    </View>
  );
};

export default KeyPad;
// Styles are down here
const styles = StyleSheet.create({
  KeyPad_container:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  Button_pressable: {
    // backgroundColor: '#333333',
    // backgroundColor: '#a6a6a6',

    borderRadius: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  Button_text: {
    color: '#fff',
    fontSize: 40,
    // backgroundColor: 'aqua',
  },
  orangeTheme: {
    backgroundColor: '#f09a25',
  },
});
