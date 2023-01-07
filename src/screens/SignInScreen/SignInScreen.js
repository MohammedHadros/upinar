import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, useWindowDimensions ,TextInput } from 'react-native';
import logo from '../../../assets/images/favicon.png';
import CustomInput from '../../compoments/CustomInput';
import CustomButton from '../../compoments/CustomButton';
import CustomCheckBox from '../../compoments/CustomCheckBox';
import { useNavigation } from '@react-navigation/native';



const SignInScreen = () => {
    const navigation = useNavigation();

    navigation.navigate('SignIn') ;
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const { height } = useWindowDimensions();

    const onlogin = () => {
        if (username === '' || password === undefined || username === '' || password === '') {
            alert('Enter username and password')
        }else if(username === 'mohd' || password === "123" ){
            navigation.navigate('drawer') 
        }
        
        else {
        
            alert(' username or password are wrong')
           
        }

    }

    const onForgetPressed = () => {
        // console.warn('Forget Password')

        navigation.navigate('Forget')
    }

    const onPolicies = () => {
        console.warn('Policies')

        navigation.navigate('Policies')
    }
    return (

        <View style={styles.all}>
            <View style={styles.root}>
                <Image source={logo} style={[styles.logo, { height: height * 0.181 }]} />
                <Text style={styles.signIn}> Sign In</Text>
             
            <TextInput
                    style={styles.input}
                    onChangeText={text => setUsername(text)}
                    value={username}
                    placeholder={'username'}
                   
                />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder={'password'}
                    secureTextEntry={true}
                   
                />
            

                <View style={styles.cont}>
                    <CustomButton
                        text="Forget Password ?"
                        onPress={onForgetPressed}
                        type="TERTIARY"
                    />

                    {/* <CustomCheckBox /> */}

                </View>

                <CustomButton text="Login" onPress={onlogin} />

                <CustomButton
                    text="Privacy Policies"
                    onPress={onPolicies}
                    type="TERTIARY"
                    // widthh='100%'
                    alignitems='center'
                    colo='#1c07d6'
                />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.foot}>Palestine University </Text>
                    <Text style={styles.copy}>{'\u00A9'}</Text>
                    <Text style={styles.foot}>{' '}2022</Text>
                </View>

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
        // margin: 'auto',
        height: '70%',
        minHeight:500,
        position: 'relative',
        borderRadius: 5,
        elevation: 5,//for making a shadow
        // top: 20,

        // position:'relative',
    },
    logo: {
        width: '45%',
        maxwidth: 300,
        maxheight: 100,
        marginBottom: 7,
        position: 'relative',
        top: -50,
    },

    signIn: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10,
        position: 'relative',
        top: -55,

    },

    cont: {
        flexDirection: 'row',
        // 
        // alignItems: 'center',
    },
    foot: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 30,
        position: 'relative',
        top: -60,
        // backgroundColor: 'red',
    },
    copy: {

        fontSize: 15,
        lineHeight: 20,
        position: 'relative',
        top: -60,
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


export default SignInScreen;