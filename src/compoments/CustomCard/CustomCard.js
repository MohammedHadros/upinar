import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';



const CustomCard = ({ Imag, text, onPress }) => {
    return (
        <View style={styles.container} >

            <Pressable onPress={onPress} style={styles.contImag}>
                <Image style={styles.imag} source={Imag} />
            </Pressable>
            <Text onPress={onPress} style={styles.detail}>{text}</Text>
            <Text style={styles.subDetail}>First semester of the year 2022/2023</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 15,
        width: '100%',
        height: 210,
        borderColor: '#999B9C',
        borderWidth: 0.8,
        borderRadius: 5,
        alignItems: 'baseline'//في الويب (disbly) عشان يكون عرض العناصر عليها بالزبط يعني تعمل شغل ال 
    },
    contImag: {
        width: '100%',
        height: '50%',
        marginBottom: 12,
    },
    imag: {
        width: '100%',
        height: '100%',
        marginBottom: 12,
    },
    detail: {
        color: 'blue',
        marginLeft: 10,
        fontSize: 17,
        // alignSelf: 'flex-start',//في الكونتينر الأب فيجعل عرض كل عنصر بالزبط جاي على المحتوى الي داخلو  (alignItems: 'baseline') حتى نجعل العرض بالزبط على النص او نستخدم خاصية ال
        // backgroundColor: 'red'
    },
    subDetail: {
        marginLeft: 10,
        color: 'black',
        fontSize: 15
    },

});


export default CustomCard;