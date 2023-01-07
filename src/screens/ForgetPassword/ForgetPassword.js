import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, useWindowDimensions ,TextInput} from 'react-native';
import logo from '../../../assets/images/favicon.png';
import CustomInput from '../../compoments/CustomInput';
import CustomButton from '../../compoments/CustomButton';
import CustomCheckBox from '../../compoments/CustomCheckBox';
import { useNavigation } from '@react-navigation/native';



const ForgetPassword = () => {

    const [ Email, setEmail ] = useState('');
    const { height } = useWindowDimensions();

const navigation=useNavigation();

    const onRecoveryPressed = () => {
        if ( Email === undefined || Email === '' ) {
            alert('Enter Your Email')
        }
        else {
        
            alert('Check your email to update your password')
           
        }

    }
 

    const onBackToSignIn = () => {
        console.warn('BackToSignIn')

         navigation.navigate('SignIn')
    }
    return (

        <View style={styles.all}>
            <View style={styles.root}>
                <Image source={logo} style={[styles.logo, { height: height * 0.181 }]} />
                <Text style={styles.Restore}>Restore password</Text>
                <Text style={styles.receive}>Enter your email to receive instructions</Text>

             

<TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={Email}
                    placeholder={'Email'}
                   
                />

                <CustomButton text="Recovery"
                    onPress={onRecoveryPressed}
                    height={60}
                />
                <CustomButton
                    text="<-- Bake to sign in"
                    onPress={onBackToSignIn}
                    type="TERTIARY"
                />

            </View>
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
        height: "70%",
        minHeight:500,
        borderRadius: 5,
        elevation: 5,//for making a shadow
        position: 'relative',
        top: -20,


    },
    logo: {
        width: '45%',
        maxwidth: 300,
        maxheight: 100,
        marginBottom: 7,
        position: 'relative',
        top: -50,
    },

    Restore: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10,
        position: 'relative',
        top: -55,

    },
    receive: {
        // #99abb4
        fontSize: 17,
        color: '#99abb4',
        marginBottom: 10,
        position: 'relative',
        top: -55,

    },

    input: {
      top:-55,
         borderColor: 'gray',
         height: 55,
         width:"100%",
         borderWidth: 1
         , paddingHorizontal: 15,
         fontSize: 18,
         borderRadius: 5,
         marginTop:15
     },


});


export default ForgetPassword;