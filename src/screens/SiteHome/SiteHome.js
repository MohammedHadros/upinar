import React, { useState } from 'react';
import { Text, View, StyleSheet ,ScrollView } from 'react-native';

import CustomButton from '../../compoments/CustomButton';




const SiteHome = () => {



    

    
    return (


        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.all}>

            <Text style={styles.addr}>UPINAR - University of Palestine</Text>
            <View style={styles.root}>
                <Text style={styles.title}>إعلان هام جدًا للطلبة المتأخرين في إرجاع الكتب المعارة</Text>
                <Text style={styles.paragraph}>
                على الطلبة المتأخرين في إرجاع الكتب المعارة ضرورة إرجاعها للمكتبة في موعد  أقصاه     12/15/ 2022

ملاحظة: يمكن للطلبة معرفة عناوين الكتب المعارة معهم من صفحة الطالب من خلال أيقونة المكتبة..</Text>



            </View>

            <View style={styles.root}>
                <Text style={styles.title}>إعلان مهم </Text>
                <Text style={styles.paragraph}>

                يتشرف مركز د.حيدر عبد الشافي للثقافة والتنمية بالتعاون مع جامعة فلسطين؛ بدعوتكم للمشاركة وحضور حفل إحياء ذكرى وفاة القائد الوطني الكبير د. حيدر عبد الشافي؛ وذلك عند تمام الساعة 11:00 من صباح يوم الأحد الموافق 09/10/2022؛ في قاعة القدس للمؤتمرات – مبني الخوارزمي، مرفق الاعلان. 
            </Text>



            </View>

            <View style={styles.root}>
                <Text style={styles.title}>إعلان هام جدًا للطلبة المتأخرين في إرجاع الكتب المعارة</Text>
                <Text style={styles.paragraph}>
                على الطلبة المتأخرين في إرجاع الكتب المعارة ضرورة إرجاعها للمكتبة في موعد  أقصاه     12/15/ 2022

ملاحظة: يمكن للطلبة معرفة عناوين الكتب المعارة معهم من صفحة الطالب من خلال أيقونة المكتبة..</Text>



            </View>

            <View style={styles.root}>
                <Text style={styles.title}>إعلان هام جدًا للطلبة المتأخرين في إرجاع الكتب المعارة</Text>
                <Text style={styles.paragraph}>
                على الطلبة المتأخرين في إرجاع الكتب المعارة ضرورة إرجاعها للمكتبة في موعد  أقصاه     12/15/ 2022

ملاحظة: يمكن للطلبة معرفة عناوين الكتب المعارة معهم من صفحة الطالب من خلال أيقونة المكتبة..</Text>



            </View>
         

            <View style={styles.root}>
                <Text style={styles.title}>إعلان هام جدًا للطلبة المتأخرين في إرجاع الكتب المعارة</Text>
                <Text style={styles.paragraph}>
                على الطلبة المتأخرين في إرجاع الكتب المعارة ضرورة إرجاعها للمكتبة في موعد  أقصاه     12/15/ 2022

ملاحظة: يمكن للطلبة معرفة عناوين الكتب المعارة معهم من صفحة الطالب من خلال أيقونة المكتبة..</Text>



            </View>

            <View style={styles.root}>
                <Text style={styles.title}>إعلان هام جدًا للطلبة المتأخرين في إرجاع الكتب المعارة</Text>
                <Text style={styles.paragraph}>
                على الطلبة المتأخرين في إرجاع الكتب المعارة ضرورة إرجاعها للمكتبة في موعد  أقصاه     12/15/ 2022

ملاحظة: يمكن للطلبة معرفة عناوين الكتب المعارة معهم من صفحة الطالب من خلال أيقونة المكتبة..</Text>



            </View>

                   <View style={styles.root}>
                <Text style={styles.title}>إعلان هام جدًا للطلبة المتأخرين في إرجاع الكتب المعارة</Text>
                <Text style={styles.paragraph}>
                على الطلبة المتأخرين في إرجاع الكتب المعارة ضرورة إرجاعها للمكتبة في موعد  أقصاه     12/15/ 2022

ملاحظة: يمكن للطلبة معرفة عناوين الكتب المعارة معهم من صفحة الطالب من خلال أيقونة المكتبة..</Text>



            </View>

            <View style={styles.root}>
                <Text style={styles.title}>إعلان هام جدًا للطلبة المتأخرين في إرجاع الكتب المعارة</Text>
                <Text style={styles.paragraph}>
                على الطلبة المتأخرين في إرجاع الكتب المعارة ضرورة إرجاعها للمكتبة في موعد  أقصاه     12/15/ 2022

ملاحظة: يمكن للطلبة معرفة عناوين الكتب المعارة معهم من صفحة الطالب من خلال أيقونة المكتبة..</Text>



            </View>
        </View>
        </ScrollView >
    );
};
const styles = StyleSheet.create({
    all: {
        // 
        backgroundColor: '#f4f3f7',
        alignItems: 'center',
     
        flex: 1,

    },
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        width: '90%',
        height: 300,
        borderWidth: 3,
        borderColor: 'gray',
     

        marginBottom: 15,
    },
    title: {
        color: 'gray',
        fontSize: 24,
        fontWeight: '900',
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 17,
        color: 'black'

    },
    addr: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',

        // lineHeight: 10,
        // position: 'relative',
        top: '-6%',
        // backgroundColor: 'red',
    },

});


export default SiteHome;