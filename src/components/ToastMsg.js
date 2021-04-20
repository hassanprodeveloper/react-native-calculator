import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';

const Toast = ({visible, message}) => {
  if (visible) {
    // ToastAndroid.showWithGravityAndOffset(
    //   message,
    //   ToastAndroid.LONG,
    //   ToastAndroid.BOTTOM,
    //   25,
    //   50,
    // );
    ToastAndroid.show(message, ToastAndroid.SHORT);
    return null;
  }
  return null;
};

const ToastMsg = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleToastButtonPress() {
      setvisibleToast(true);
    },
  }));
// console.log('toast component running', )
  const [visibleToast, setvisibleToast] = useState(false);

  useEffect(() => setvisibleToast(false), [visibleToast]);

  //   const handleToastButtonPress = () => {
  //     setvisibleToast(true);
  //   };

  return (
    <>
      <Toast visible={visibleToast} message={props.msg} />
      {/* <Button title="Toggle Toast" onPress={() => handleToastButtonPress()} /> */}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
});

export default ToastMsg;
