import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';
//
const Toast = ({visible, message}) => {
  if (visible) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
    return null;
  }
  return null;
};
//
const ToastMsg = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleToastButtonPress() {
      setvisibleToast(true);
    },
  }));
  //
  const [visibleToast, setvisibleToast] = useState(false);
  //
  useEffect(() => setvisibleToast(false), [visibleToast]);
  //
  return (
    <>
      <Toast visible={visibleToast} message={props.msg} />
    </>
  );
});
// styling
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
