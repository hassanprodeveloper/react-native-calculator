import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MyButton from './Button';
import {btnList} from '../../redux/reducer/BtnList';

const KeyPad = ({pressHandler}) => {
  const buttons = btnList;
  //
  const keyPadHandler = () => {
    let layout = buttons.map((buttonsRow, rowIndex) => {
      let rowLayout = buttonsRow.map((buttonsItem, buttonIndex) => {
        return (
          <MyButton
            pressHandler={pressHandler}
            obj={buttonsItem}
            index={buttonIndex}
          />
        );
      });
      return (
        <View style={styles.row} key={'row-' + rowIndex}>
          {rowLayout}
        </View>
      );
    });
    return layout;
  };
  //
  return <View style={styles.KeyPad_container}>{keyPadHandler()}</View>;
};

export default KeyPad;
// Styles are down here
const styles = StyleSheet.create({
  KeyPad_container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  Button_pressable: {
    borderRadius: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  Button_text: {
    color: '#fff',
    fontSize: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
