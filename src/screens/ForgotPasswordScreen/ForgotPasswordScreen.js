import React ,{ useState }from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
  
    const navigation = useNavigation();

  const onSendPressed = () => {
    //   console.warn("Send Pressed");
      navigation.navigate('NewPassword');
  }

  const onSignInPress = () => {
    // console.warn("Clicked Sign In");
    navigation.navigate('SignIn');
  }

  
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.root}>
           
           <Text style={Styles.title}>Reset your password</Text>

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
            />
           
            <CustomButton text="Send" onPress={onSendPressed}/>          

            
            <CustomButton 
                text="Back to sign" 
                onPress={onSignInPress}
                type="TERTIARY"
            />

        </View>
        </ScrollView>
    );

};

const Styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        marginTop: 40,
        
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },

    link: {
        color: '#FDB075',
    },
});

export default ForgotPasswordScreen