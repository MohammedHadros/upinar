import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, Clipboard } from 'react-native';
import CustomCard from '../../compoments/CustomCard';
import CustomInput from '../../compoments/CustomInput';
import CustomButton from '../../compoments/CustomButton';
import imag from '../../../assets/images/mohdf.jpg'
import { useNavigation } from '@react-navigation/native';



const ContactUs = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [massge, setMassge] = useState('');


    const onPolicies = () => {
        if (name === undefined || email === undefined || name === '' || email === ''|| massge === undefined || massge === '') {
            alert('Enter Name and email')
        } else {


            alert(name + 'تم الارسال بنجاح ')
           

            setName()
            setEmail()
            setMassge()
        }

    }
    const onEmailPressed = () => {
        Clipboard.setString('mail@mail.com')
        alert('mail@mail.com' + 'تم نسخ الايميل')
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Contact Us
                </Text>
                <View style={styles.hr} />


                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder={'Enter Name'}
                    placeholderTextColor="#414141"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder={'Enter Email'}
                    placeholderTextColor="#414141"
                />
                <Text
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        paddingHorizontal: 10,
                        marginVertical: 5,
                        position: 'relative',
                        justifyContent: 'center',
                        marginTop: 15,
                        padding: 10,
                        position: 'relative',
                        justifyContent: 'center',
                        marginTop: 10,
                        fontSize: 19,
                        color: 'black',

                    }}>
                    this mail will be send to:
                    <Text style={{ color: 'blue', fontSize: 18 }}
                        onPress={onEmailPressed} >
                        mail@mail.com</Text>
                </Text>


                <TextInput
             style={styles.input_mlti}
            value={massge}
            onChangeText={text=>setMassge({text})}
            multiline={true}
            numberOfLines={5}
            placeholder="Set Message"
         //   underlineColorAndroid='transparent'
    />


                <CustomButton
                    text="Send Email"
                    onPress={onPolicies}
                    fonSize={19}
                    top={20}
                    alignitems='center'
                />

            </View>



        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        // backgroundColor: 'red'
    },
    welcome: {
        color: 'black',
        fontSize: 23,
        marginTop: 30,
        fontWeight: "600",
    },
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        marginTop: 30,
        borderColor: 'gray',
        height: 55,
        borderWidth: 1
        , paddingHorizontal: 15,
        fontSize: 18,
        borderRadius: 5
    },
    input_mlti: {
        marginTop: 30,
        borderColor: 'gray',
      
        borderWidth: 1
        , paddingHorizontal: 15,
        fontSize: 18,
        borderRadius: 5
    },
});


export default ContactUs;
