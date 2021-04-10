import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HistoryCard = ({navigation, obj, index}) => {
  // const [checked, setChecked] = React.useState(status);
  // const checkHandler = () => {
  // setChecked(!checked);
  // todoStatus({id: id, status: !checked});
  // };
// console.log('card obj 13===>>', obj)
  return (
    <>
      <View key={index} style={styles.TodoCard_mainCont}>
        {/* <View style={styles.TodoCard_todoCont}> */}
        <Text
          style={{
            ...styles.TodoCard_text,
            // textDecorationLine: checked ? 'line-through' : null,
            color:  '#fff',
            // alignSelf: 'center',
            marginLeft: 20,
          }}>
          {`${obj.exp} = ${obj.res}`}
          {/* {todoText} */}
        </Text>
        {/*  */}
        {/* <Text
              style={{
                ...styles.TodoCard_text,
                textDecorationLine: checked ? 'line-through' : null,
                color: checked ? '#0bbc37' : '#fff',
              }}>
               = 16
            </Text> */}
      </View>

      {/* </View> */}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   todoArr: state.todos,
// });
const mapDispatchToProps = (dispatch) => ({
  //   deleteTodo: (data) => dispatch(deleteTodo(data)),
  //   todoStatus: (data) => dispatch(todoStatus(data)),
});
export default connect(null, mapDispatchToProps)(HistoryCard);
// ----------------- Style below
const styles = StyleSheet.create({
  TodoCard_mainCont: {
    // backgroundColor: 'aqua',
    // height: 50,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    // flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#a6a6a6',
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  TodoCard_todoCont: {
    // justifyContent: 'center',
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
