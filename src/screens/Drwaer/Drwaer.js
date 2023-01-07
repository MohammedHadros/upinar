import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ForgetPassword from '../ForgetPassword';
import HomeTab from '../Tab';
import ProfileScreen from '../Profile/ProfileScreen';
import ContactUs from '../ContactUs/ContactUs';
import SignInScreen from '../SignInScreen';
import Tab2 from '../Tab2';

const Drawer = createDrawerNavigator();
const Drawerr = () => {

    return (
        
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeTab}/>
                <Drawer.Screen name="Tab2" component={Tab2}/>
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Contact Us" component={ContactUs} />
                <Drawer.Screen name="Forget" component={ForgetPassword}  />
                <Drawer.Screen name="Sign Out" component={SignInScreen} options={{headerShown:false}} />
            </Drawer.Navigator>

      

    );

};
const styles = StyleSheet.create({

});


export default Drawerr;