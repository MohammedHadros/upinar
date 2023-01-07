import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/FontAwesome'

const Accordion = ({ title, body }) => {
    const [showContent, setShowContent] = useState(false);
    // const MaterialIcons = <Icon name="rocket" size={30} color="#900" />

    const animationController = useRef(new Animated.Value(0)).current;
    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    });

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => setShowContent(!showContent)}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>

                    {/* <Animated.View > */}
                    <MaterialIcons name={'keyboard-arrow-right'} size={20} />
                    {/* </Animated.View> */}
                </View>
            </TouchableOpacity>

            {showContent && (
                <View style={styles.body}>
                    <Text style={styles.title2}>{body}</Text>
                </View>

            )}



        </View >
    )
};
// const styles = StyleSheet.create({
//     container: {
// width: '100%',
// padding: '2%',
// borderRadius: 12,
// backgroundColor: ' white',
// marginBottom: '2%',
// overflow: 'hidden',
//     },
//     title: {
//         fonSize: 40,
//         color: '#2d2d2d',
//         fontWeight: 'bold',

//     },
//     body: {
// paddingHorizontal: '2%',
//     paddingVertical: '3%',
//         fontSize: 20,
//     },
//     titleContainer: {
// flexDirection: 'row',
// alignItems: 'center',
// justifyContent: 'space-between'
//     },
// });
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: '2%',
        borderRadius: 12,
        backgroundColor: ' white',
        marginBottom: '2%',
        overflow: 'hidden',
    }, title: {
        fontSize: 20,
        color: '#2d2d2d',
        fontWeight: 'bold',
    },
    body: {
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        fontWeight: 'bold',
        textAlign: 'right',

        fontWeight: 'bold',
    },
    title2: {
        fontSize: 18,
        color: '#2d2d2d',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}
);

export default Accordion