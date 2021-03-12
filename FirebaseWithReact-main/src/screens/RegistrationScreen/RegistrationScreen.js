import React,{useState} from 'react'
import {Image,TextInput,TouchableOpacity,View}
import {keyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './registration_styles'

export default function RegistrationScreen(){

    const [fullname,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setconfirmPassword]=useState('');

const onCreateAccount=()=>{
  console.log('account created')
}


    return(
        <View style={styles.container}
        <keyboardAwareScrollView
        style={{flex:1,width:100%}}
        keyboardshouldPersistTaps="always">
            <Image 
            style={styles.logo}
            source={require('../../../assets/icon.png')}/>
            <TextInput
              style={styles.input}
              placeholder='Full Name'
              placeholdercolor='grey'
              onchangeText={({text})=> setFullName(text)}
              value={fullName}
              />
               <TextInput
              style={styles.input}
              placeholder='Email Address'
              placeholdercolor='grey'
              onchangeText={({text})=> setEmail(text)}
              value={email}
              />
               <TextInput
              style={styles.input}
              placeholder='password'
              placeholdercolor='grey'
              onchangeText={({text})=> setPassword(text)}
              value={password}
              />
               <TextInput
              style={styles.input}
              placeholder='confirm password'
              placeholdercolor='grey'
              onchangeText={({text})=> setconfirmPassword(text)}
              value={confirmPassword}
              />
              <TouchableOpacity style={styles.button} onPress={() => onCreateAccount()}>
          <Text style={styles.buttonTitle}>Create Account</Text>
        </TouchableOpacity>



        </keyboardAwareScrollView>

        
        
        
        
        </View>
);







}