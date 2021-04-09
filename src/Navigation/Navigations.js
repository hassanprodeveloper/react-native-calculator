import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './Screens'

const {Screen, Navigator} = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
        <Navigator 
        screenOptions={{headerShown: false}}>
          <Screen name="Home" component={Screens.Home} />
          <Screen name="History" component={Screens.History} />
        </Navigator>
      </NavigationContainer>
    );
};

export default Navigations;
