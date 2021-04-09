import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import MyButton from './Button';

const Row = ({arr, Rowindex, pressHandler}) => {
  return (
    <>
      <View style={styles.row} key={Rowindex}>
        {arr.map((obj, index) => (
          <MyButton pressHandler={pressHandler} obj={obj} index={index} />
        ))}
      </View>

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
    </>
  );
};

export default Row;
// Styles are down here
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
