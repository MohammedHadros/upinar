import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomCard from '../../compoments/CustomCard';
import imag from '../../../assets/images/mohdf.jpg'
import { useNavigation  } from '@react-navigation/native';



const Home = () => {

    const navigation = useNavigation();
   
    function CoursePress () {
        navigation.navigate('details')  //{[]}

    }
    function CoursePress2 () {
        navigation.navigate('details2')  //{[]}

    }
    function CoursePress3() {
        navigation.navigate('details3')  //{[]}

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome back, محمد رشاد! 👋
                </Text>
                <Text style={styles.underWelcome}>Course overview</Text>
                <View style={styles.hr} />

                <CustomCard
                    Imag={imag}// or use require('../../../assets/images/mohdf.jpg')
                    text="information security"
                    onPress={CoursePress}
                />
                <CustomCard
                    Imag={imag}
                    text="mobile development"
                    onPress={CoursePress2}
                />
                <CustomCard
                    Imag={imag}
                    text="Distributed System"
                    onPress={CoursePress3}
                />
                <CustomCard
                    Imag={imag}
                    text="oprating system"
                    onPress={CoursePress}
                />
            </View>

            {/* // <View style={{ height: 500 }}></View>  */}

        </ScrollView >
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
        fontSize: 21,
        marginTop: 30,
        fontWeight: "600",
    },
    underWelcome: {
        color: 'black',
        fontSize: 18,
        marginTop: 10,
    },
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        marginTop: 10,
        marginBottom: 10,
    },
});


export default Home;