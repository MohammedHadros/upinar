import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';
import logo from '../../../assets/images/favicon.png';
import CustomInput from '../../compoments/CustomInput';
import CustomButton from '../../compoments/CustomButton';
import CustomCheckBox from '../../compoments/CustomCheckBox';
import { useNavigation } from '@react-navigation/native';



const Policies = () => {



    const navigation = useNavigation();

    const onBackToSignIn = () => {

        navigation.navigate('SignIn')
    }
    return (
        // <ScrollView style={styles.dd}>
        <View style={styles.all}>

            <Text style={styles.addr}>UPINAR - University of Palestine</Text>
            <View style={styles.root}>
                <Text style={styles.title}>The best students</Text>
                <Text style={styles.paragraph}>
                    In the interest of the university administration to ensure the quality of the educational process in all academic programs
                    at the university
                    1. The evaluation program for faculty members will be linked to the webinar system, so that the activation of the
                    student’s account on the webinar program will be temporarily deactivated until he evaluates the courses registered
                    for this semester through Admission and registration page. 3. After 24 hours, the webinar system will be deactivated
                    until another course for which the student is registered for this semester is evaluated.</Text>



            </View>
            <CustomButton
                top='5%'
                text="   <-- Bake to sign in"
                onPress={onBackToSignIn}
                type="TERTIARY"
            />
        </View>

    );
};
const styles = StyleSheet.create({
    all: {
        // 
        backgroundColor: '#f4f3f7',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        width: '90%',
        height: '63%',
        borderWidth: 3,
        borderColor: 'red',
        position: 'relative',
        top: '1%',
    },
    title: {
        color: 'red',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 17,
        color: 'black'

    },
    addr: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',

        // lineHeight: 10,
        // position: 'relative',
        top: '-6%',
        // backgroundColor: 'red',
    },

});


export default Policies;