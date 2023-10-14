import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Seasons from './Seasons';
import Linking from './Linking';
import Docpick from './Docpick';
import Imagespick from './Imagespick';
import Contact from './Contact';
import Address from './Address';
import Sms from './Sms';
import Ipcheck from './Ipcheck';
import Auth from './Auth';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Seasons" component={Seasons}/>
        <Stack.Screen name="Linking" component={Linking}/>
        <Stack.Screen name="Docpick" component={Docpick}/>
        <Stack.Screen name="Imagespick" component={Imagespick}/>
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="Address" component={Address}/>
        <Stack.Screen name="Sms" component={Sms}/>
        <Stack.Screen name="Ipcheck" component={Ipcheck}/>
        <Stack.Screen name="Auth" component={Auth}/>
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

