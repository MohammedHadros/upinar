import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';




const CustomCheckBox = ({ value, onValueChange }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <CheckBox style={styles.check}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)} />


            <Text style={styles.label}> remmber me</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        paddingTop: 10,
        width: '50%',
        paddingRight: 20,
        // backgroundColor: 'yellow',
        // flexDirection: 'row',
        textAlign: 'center',
        // justifyContent: 'center',
    },
    label: {
        // width: '100%',
        fontSize: 18,
        color: '#414141',
        top: -30,
        left: 30,
    },
    check: {
        width: '75%',
        // backgroundColor: 'red',
        // marginTop: 50,
        // marginTop: 'auto',
    },

});
// npm install @react-native-community/checkbox --save

export default CustomCheckBox;