import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Bottomnavigationtabs from './bottomNavigation';

import AllNotes from '../screen/Notes/AllNotes';
import CreateNote from '../screen/Notes/CreateNote';
import DetailView from '../screen/Notes/DetailView';

const Stack = createStackNavigator();
const LandingStack = createStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{presentation: 'switch'}} initialRouteName='AllNotes'>
    <Stack.Screen
        name="AllNotes"
        component={AllNotes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateNote"
        component={CreateNote}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailView"
        component={DetailView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export function LandingStackNavigator() {
  return (
    <LandingStack.Navigator>
      <LandingStack.Screen
        name="Bottomnavigationtabs"
        component={Bottomnavigationtabs}
        options={{headerShown: false}}
      />
    </LandingStack.Navigator>
  );
}

export default StackNavigator;
