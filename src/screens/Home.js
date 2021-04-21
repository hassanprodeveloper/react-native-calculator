import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import KeyPad from '../components/KeyPad/index';
import ToastMsg from '../components/ToastMsg';

const Home = ({navigation, setHistory}) => {
  const toastRef = useRef();
  const [displayValue, setdisplayValue] = useState('0');
  const [operator, setoperator] = useState(null);
  const [firstValue, setfirstValue] = useState('');
  const [secondValue, setsecondValue] = useState('');
  const [nextValue, setnextValue] = useState(false);
  const [result, setresult] = useState(null);
  // main function that control all calculation (button press handler)
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
        if (result === null) {
          setdisplayValue(displayValue === '0' ? input : displayValue + input);
          if (!nextValue) {
            setfirstValue(firstValue + input);
          } else {
            setsecondValue(secondValue + input);
          }
        } else return;
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
        if (result === null) {
          let formateOperator =
            operator === '×' ? '*' : operator === '÷' ? '/' : operator;
          let result = eval(firstValue + formateOperator + secondValue);
          setresult(result);
          setfirstValue('');
          setsecondValue('');
          setnextValue(false);
          setoperator(null);
        }
        // else display toast to clear calculations
        else toastRef.current.handleToastButtonPress();
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
        } else setdisplayValue('0');
        setoperator(null);
        setfirstValue('');
        setsecondValue('');
        setresult(null);
        setnextValue(false);
        break;
      case 'H':
        navigation.navigate('History');
        break;
    }
  };
  //
  return (
    <>
      <ToastMsg ref={toastRef} msg="First Clear Calculation" />
      <View style={[styles.appContainer, styles.flex_1]}>
        {/* section 1 where results will display */}
        <View style={styles.section1}>
          {/* section 1 row 1 */}
          <View style={[styles.s1r1, styles.s1r, styles.flex_1]}>
            <Text style={[styles.textColor]}>{displayValue}</Text>
          </View>
          {/* section 1 row 2 */}
          <View style={[styles.s1r2, styles.s1r, styles, styles.flex_1]}>
            <Text style={[styles.textColor]}>
              {result === null ? null : `${result} =`}
            </Text>
          </View>
        </View>
        {/* section 2 contain key pad */}
        <View style={styles.section2}>
          <KeyPad pressHandler={btnPressHandler} />
        </View>
      </View>
    </>
  );
};
export default Home;

// STYLES
const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
  },
  appContainer: {
    backgroundColor: '#202020',
  },
  section1: {
    flex: 2,
  },
  section2: {
    flex: 4,
    paddingHorizontal: 5,
  },
  textColor: {
    color: '#fff',
    fontSize: 55,
  },
  s1r: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
  },
});
