
import React ,{useState} from "react";
import { Image,StyleSheet ,Text, View ,TextInput } from "react-native";
import CustomButton from "../../compoments/CustomButton";
import img from "../../../assets/images/avatar-06.png"
import Picker from "../../compoments/Picker/DropDownPicker";



const ProfileScreen = () => {

const [Name , setName]=useState("Baraa Elsibakhi");
const [Email , setEmail]=useState("Baraa@gmail.com");
const [Specialization , setSpecialization]=useState("Software engineering");
//const defVal ="Baraa Elsibakhi"

const onPress=()=>{

}


    return (
<View>
  
  
  <View>
  <Image
      
      style={styles.profile_image}
       
        source={img}/>
  </View>

<View style={styles.all_label}>
  <Text style={styles.label}>Name</Text>
  <TextInput value={Name}   
    style={styles.custom_input} placeholder=" Your Name" 
   onChangeText={setName}   />
</View>
<View style={styles.all_label}>
  <Text style={styles.label}>Email</Text>
  <TextInput style={styles.custom_input} placeholder=" Your Email" 
  onChangeText={setEmail}  value={Email} />
</View>
<View style={styles.all_label}>
  <Text style={styles.label}>Specialization</Text>
  <TextInput   onChangeText={setSpecialization}
  style={styles.custom_input} placeholder=" Your Specialization"
  value={Specialization} />
</View>


<View style={styles.Picker_style}>

<Picker   />
</View>


</View>

    );
  };

const styles = StyleSheet.create({
  profile_image:{
  alignSelf:"center",
borderRadius:330,

  },
  custom_input:{
    borderWidth:1,
    borderColor:"gray",
    borderStyle:('solid'),
    marginLeft:20,
    marginRight:20,
    height:40,
  
  },
  label:{
    fontSize:17,
    marginLeft:20,
    marginBottom:10,
    fontWeight:"bold",
    
    

  },
  all_label:{
marginBottom:20
  },
  Picker_style:{
    marginLeft:20,
    marginRight:20,
   marginBottom:30
  }
, save_changes:{
  backgroundColor:"rgb(30,130,200)",
  width:"80%",
  alignItems:"center",
  borderRadius:5,
  padding:10,
  marginLeft:"auto",
  marginRight:"auto"
},
save_changes_text:{
color:"white",
fontWeight:"bold"
}
})

  export default ProfileScreen;