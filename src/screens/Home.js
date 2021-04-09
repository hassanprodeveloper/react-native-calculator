import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import KeyPad from '../components/KeyPad/index';
import {connect} from 'react-redux';
import {setHistory} from '../redux/action'

const Home = ({navigation, sethistory}) => {
  const [displayValue, setdisplayValue] = useState('0');
  const [operator, setoperator] = useState(null);
  const [firstValue, setfirstValue] = useState('');
  const [secondValue, setsecondValue] = useState('');
  const [nextValue, setnextValue] = useState(false);
  const [result, setresult] = useState(null);
  //
  // console.log(firstValue + operator + secondValue);
  console.log({exp: displayValue, res : result});
  //
  const btnPressHandler = (input) => {
    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setdisplayValue(displayValue === '0' ? input : displayValue + input);
        if (!nextValue) {
          setfirstValue(firstValue + input);
        } else {
          setsecondValue(secondValue + input);
        }

        break;
      //
      case '÷':
      case '×':
      case '-':
      case '+':

        setnextValue(true);
        setoperator(input);
        setdisplayValue(
          (operator !== null
            ? displayValue.substr(0, displayValue.length - 1)
            : displayValue) + input,
        );
        break;
      //
      case '.':
        let dot = displayValue.slice(-1);
        setdisplayValue(dot !== '.' ? displayValue + input : displayValue);
        if (!nextValue) {
          setfirstValue(firstValue + input);
        } else {
          setsecondValue(secondValue + input);
        }
        break;
      //
      case '=':
        let formateOperator = (operator === '×')? '*' : (operator === '÷')? '/' : operator 
        let result = eval(firstValue + formateOperator + secondValue);
        setresult(result);
        setHistory({exp: displayValue, res: result})
        setfirstValue(result);
        setsecondValue('');
        setnextValue(false);
        setoperator(null);
        break;
      //
      case 'C':
        setdisplayValue('0');
        setoperator(null);
        setfirstValue('');
        setsecondValue('');
        setresult(null);
        setnextValue(false);
        break;
      case 'del':
        if (result === null) {
          let string = displayValue.toString();
          let deletedString = displayValue.substr(0, string.length - 1);
          let length = string.length;
          setdisplayValue(length === 1 ? '0' : deletedString);
        } else setdisplayValue(displayValue);
        break;
      case 'H':
        navigation.navigate('History');
        break;
    }

    // console.log('first val @11============>>>>>>', firstVal);
    // console.log('sec val @12============>>>>>>', secVal);
    // console.log('operator @13============>>>>>>', operator);
    // if (props.type === 'num') {
    //   if (operator === '') {
    //     setfirstVal(`${firstVal}${props.val}`);
    //     console.log('home @17', firstVal);
    //   } else {
    //     setsecVal(`${secVal}${props.val}`);
    //     console.log('home @20', secVal);
    //   }
    // }
    // //
    // else if (props.type === 'operator') {
    //   setoperator(props.val);
    // }
  };

  return (
    <View style={[styles.appContainer, styles.flex_1]}>
      {/* section 1 where results will display */}
      <View style={styles.section1}>
        {/* section 1 row 1 */}
        <View style={[styles.s1r1, styles.s1r, styles.flex_1]}>
          <Text style={[styles.textColor]}>{displayValue}</Text>
        </View>
        {/* section 1 row 2 */}
        <View style={[styles.s1r2, styles.s1r, styles, styles.flex_1]}>
          <Text style={[styles.textColor]}>{result === null ? null : `${result} =`  }</Text>
        </View>
      </View>
      {/* section 2 contain key pad */}
      <View style={styles.section2}>
        <KeyPad pressHandler={btnPressHandler} />
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  // user1: state.r1.name,
  // user2: state.r2.user,
});
const mapDispatchToProps = (dispatch) => ({
  setHistory: (data) => dispatch(setHistory(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

// STYLES
const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    // justifyContent: 'center',
  },
  appContainer: {
    backgroundColor: '#202020',
  },
  section1: {
    flex: 2,
    // backgroundColor: 'aqua',
  },
  section2: {
    flex: 4,
    // alignSelf: 'flex-end',
    // backgroundColor: 'aqua',
    // alignItems: 'baseline',
  },
  textColor: {
    color: '#fff',
    fontSize: 45,
  },
  s1r: {
    // marginTop: 5,
    // backgroundColor: 'brown',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
