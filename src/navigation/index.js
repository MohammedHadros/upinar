import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import ForgetPassword from '../screens/ForgetPassword';
import Home from '../screens/Home';
import Policies from '../screens/Policies';

import { createDrawerNavigator } from '@react-navigation/drawer';

// import Drawer from '../screens/Drwaer/Drwaer';


// import {createAppContainer}from '@reac'  



const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Drawer' component={Drawerr} />
                <Stack.Screen options={{ headerShown: false }} name='SignIn' component={SignInScreen} />
                <Stack.Screen name='Forget' component={ForgetPassword} />
                <Stack.Screen name='Policies' component={Policies} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};

const Drawer = createDrawerNavigator();
const Drawerr = () => {

    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Forget" component={ForgetPassword} />
        </Drawer.Navigator>




    );

};


export default Navigation;