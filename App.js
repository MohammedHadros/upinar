import 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ForgetPassword from './src/screens/ForgetPassword';
import HomeTab from './src/screens/Tab';
import Policies from './src/screens/Policies';
import SignInScreen from './src/screens/SignInScreen';
import details from './src/screens/details';
import details2 from './src/screens/details2/details2';
import details3 from './src/screens/details3/details3';
import ContactUs from './src/screens/ContactUs';
import Drawerr from './src/screens/Drwaer/Drwaer';





const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' >

        <Stack.Screen options={{ headerShown: false }} name='SignIn' component={SignInScreen}  />
        <Stack.Screen name='Forget' component={ForgetPassword} />
        <Stack.Screen name='Policies' component={Policies} />
        <Stack.Screen name='details' component={details} options={{headerShown:false}}/>
        <Stack.Screen name='details2' component={details2} options={{headerShown:false}} />
        <Stack.Screen name='details3' component={details3} options={{headerShown:false}} />
        <Stack.Screen name='Contact' component={ContactUs} />
        <Stack.Screen name='Home' component={HomeTab} />
        <Stack.Screen name='drawer' component={Drawerr} options={{headerShown:false}} />
      </Stack.Navigator>

    </NavigationContainer>



  );
};

const styles = StyleSheet.create({
  root: {
    //if we can remove flex from root we have to remove any flex in another screen to keep a design 
   
    backgroundColor: '#f9fbfc',

  },
});


export default App;