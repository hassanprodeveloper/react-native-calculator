/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import AppDrawer from './src/Navigation/Drawer'\
import Navigations from './src/Navigation/Navigations';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#202020' barStyle="light-content" />
      <Navigations />
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#202020',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
