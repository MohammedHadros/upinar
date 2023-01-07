import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';




const CustomButton = ({ onPress, text, type = "PRIMARY", height, alignitems, colo, top, fonSize }) => {
    return (
        //{Pressable} the same of {view} but we can add the function (onPres) for click the button
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                height ? { height: height } : {},
                top ? { top: top } : {},
                alignitems ? { alignItems: alignitems } : {},]}>
            <Text style={[
                styles.Txt,
                styles[`Txt_${type}`],
                colo ? { color: colo } : {},
                fonSize ? { fontSize: fonSize } : {}

            ]}>{text}</Text>

        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        borderRadius: 5,
        position: 'relative',
        top: -55,


        // height: 60,
    },
    container_PRIMARY: {
        backgroundColor: '#1976d2',
        borderStyle: 'solid',
        borderColor: ' #1976d2',
        borderWidth: 0.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 100,
        padding: 10,
    },
    container_TERTIARY: {
        paddingBottom: 10,
        paddingTop: 10,
        width: '100%',//هنا نعمل تعديل لو رجعنا تذكرني نخلي العرض النصف ونعدل كمان العرض لزر السياسات والخصوصية نخليه 100%
        justifyContent: 'center',
    },
    Txt: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
    },
    Txt_PRIMARY: {
        color: '#fff',
    },
    Txt_TERTIARY: {
        color: 'black',
        fontSize: 17,
        marginTop: -10,
    }
});


export default CustomButton;