import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HistoryCard from '../components/Card';
import {clearAllHistory} from '../redux/action';


const History = (props) => {
  
  // clearing all calculation history
  const clearHistoryHandler = () => {
    Alert.alert(
      'Are You Sure?',
      'If you press Yes then your history will be deleted permanently',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            props.clearHistory();
          },
        },
      ],
    );
  };
  return (
    <>
      {/* <StatusBar backgroundColor="#333333" barStyle="light-content" /> */}
      <View style={styles.appCont}>
        <View style={styles.historyHeaderCont}>
          <Ionicons
            name="ios-arrow-back"
            color="#f09a25"
            size={25}
            onPress={() => props.navigation.navigate('Home')}
            style={styles.backIcon}
          />
          <View style={styles.historyHeader}>
            <View style={styles.historyHeader}>
              <Text style={styles.historyHeaderText}> Calculation History</Text>
            </View>
          </View>
        </View>

        <ScrollView style={styles.historyCardCont}>
          {props.historyArr.map((arr, i) => (
            <HistoryCard obj={arr} index={i} />
          ))}
        </ScrollView>
        <AntDesign
          name="delete"
          color="#f09a25"
          size={35}
          onPress={() => clearHistoryHandler()}
          style={styles.deleteHistoryIcon}
        />
      </View>
    </>
  );
};
const mapStateToProps = (state) => ({
  historyArr: state.history,
});
const mapDispatchToProps = (dispatch) => ({
  clearHistory: () => dispatch(clearAllHistory()),
});

// STYLE_SHEET
const styles = StyleSheet.create({
  appCont: {
    flex: 2,
    // padding: 13,
    backgroundColor: '#202020',
    position: 'relative',
  },
  historyHeaderCont: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 5,
    justifyContent: 'center',
    // alignItems: 'center',
    height: 50,
    // backgroundColor: '#333333',
    // borderRadius: 50,
  },
  historyHeader: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  historyHeaderText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 2,
  },
  backIcon: {
    marginHorizontal: 5,
    // backgroundColor: '#f09a25',
    borderRadius: 50,
    // padding: 8,
  },
  historyCardCont: {
    paddingVertical: 15,
  },
  deleteHistoryIcon: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#202020',
    borderRadius: 50,
    padding: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
