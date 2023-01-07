import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomCard from '../../compoments/CustomCard';
import imag from '../../../assets/images/mohdf.jpg'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import Accordion from '../../compoments/Accordion/Accordion';



const details = () => {

  
    const data = [{
        id: 0,
        title: 'Genral',
        body: 'Information Securiry '
    }, {
        id: 1,
        title: '24 Sptember - 30 Semptember',
        body: 'lecture 1 Hacking \n file \n URL'
    }, {
        id: 2,
        title: '1 October - 7 October',
        body: 'lecture 2 Hacking \n file \n URL'
    }, {
        id: 3,
        title: '8 October - 14 October',
        body: 'lecture 3 Hacking \n file \n URL'
    }, {
        id: 3,
        title: '14 October - 21 October',
        body: 'lecture 4 Hacking \n file \n URL'
    }, {
        id: 3,
        title: '21 October - 27 October',
        body: 'lecture 6 Hacking\n file \n URL'
    }, {
        id: 3,
        title: '27 October - 4 November',
        body: 'lecture 7 Hacking  \n file \n URL'
    }, {
        id: 3,
        title: ' 4 November - 11 November',
        body: 'lecture 8 Hacking \n file \n URL'
    }
        , {
        id: 3,
        title: '11 October - 18 October',
        body: 'lecture 9 Hacking \n file \n URL'
    }
        , {
        id: 3,
        title:  ' 18 November - 25 November',
        body: 'lecture 10 Hacking \n file \n URL'
    }
        , {
        id: 3,
        title: ' 25 November - 31 November',
        body: 'lecture 11 Hacking \n file \n URL'
    }
        , {
        id: 3,
        title:  ' 2 Desempew - 9 November',
        body: 'lecture 12 Hacking \n file \n URL'
    }]
   

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <Text style={styles.welcome}>
                information security
                </Text>

                <View style={styles.hr} />
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Accordion title={item.title} body={item.body} />
                    )}
                />
               


            </View>

          

        </ScrollView >
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
    
    },
    welcome: {
        color: 'black',
        fontSize: 21,
        marginTop: 30,
        fontWeight: "600",
        textAlign: 'left'
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


export default details;