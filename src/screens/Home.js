import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import KeyPad from '../components/KeyPad/index';

const Home = ({navigation}) => {
  const [expression, setexpression] =useState('')
  const [firstVal, setfirstVal] = useState(0);
  const [sign, setsign] = useState('');
  const [secVal, setsecVal] = useState(0);
  //
  const btnPressHandler = (props) => {
    switch (props.type) {
      case 'num':
        
        
        break;
    
      default:
        break;
    }
    // console.log('first val @11============>>>>>>', firstVal);
    // console.log('sec val @12============>>>>>>', secVal);
    // console.log('sign @13============>>>>>>', sign);
    // if (props.type === 'num') {
    //   if (sign === '') {
    //     setfirstVal(`${firstVal}${props.val}`);
    //     console.log('home @17', firstVal);
    //   } else {
    //     setsecVal(`${secVal}${props.val}`);
    //     console.log('home @20', secVal);
    //   }
    // }
    // // 
    // else if (props.type === 'operator') {
    //   setsign(props.val);
    // }
  };

  return (
    <View style={[styles.appContainer, styles.flex_1]}>
      {/* section 1 where results will display */}
      <View style={styles.section1}>
        {/* section 1 row 1 */}
        <View style={[styles.s1r1, styles.s1r, styles.flex_1]}>
          <Text style={[styles.textColor]}>
            {Number(firstVal) + Number(secVal) }
          </Text>
        </View>
        {/* section 1 row 2 */}
        <View style={[styles.s1r2, styles.s1r, styles, styles.flex_1]}>
          <Text style={[styles.textColor]}>results will show here</Text>
        </View>
      </View>
      {/* section 2 contain key pad */}
      <View style={styles.section2}>
        <KeyPad pressHandler={btnPressHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    justifyContent: 'center',
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
    marginTop: 5,
    backgroundColor: 'brown',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
});
export default Home;
