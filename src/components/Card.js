import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const HistoryCard = ({navigation, obj, index}) => {
  return (
    <>
      <View key={index} style={styles.TodoCard_mainCont}>
        <Text
          style={{
            ...styles.TodoCard_text,
            color: '#fff',
            marginLeft: 20,
          }}>
          {`${obj.exp} = ${obj.res}`}
        </Text>
      </View>
    </>
  );
};

export default HistoryCard;
// ----------------- Style below
const styles = StyleSheet.create({
  TodoCard_mainCont: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#a6a6a6',
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  TodoCard_todoCont: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  TodoCard_text: {
    fontSize: 25,
    textTransform: 'capitalize',
  },
});
