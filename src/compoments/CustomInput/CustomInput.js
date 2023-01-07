import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';




const CustomInput = ({ value, setValue, placeholder, secureTextEntry, topp, numberOfLines, multiline, mail }) => {
    return (
        <View style={[styles.container,
        topp ? { top: topp } : {}]}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#414141"
                multiline={multiline}
                numberOfLines={numberOfLines}

            >
                <Text
                    onPress={() => Clipboard.setString('mail@mail.com')}
                    style={{ color: 'red', fontFamily: 'Arial', fontStyle: 'bold', textAlign: 'center', marginTop: 3, marginLeft: 25, marginBottom: 17 }}>
                    {mail}
                </Text>
            </TextInput>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 10,
        position: 'relative',
        justifyContent: 'center',

        top: -55,

    },
    input: {
        fontSize: 18,

    },

});


export default CustomInput;