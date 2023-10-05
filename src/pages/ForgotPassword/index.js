import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);


  function handleResetPassword() {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
      setResetSent(true);
      alert("Foi enviado um email para: " + email + "  Verifique a sua caixa de email.");
      navigation.navigate('Login');
    })
    
    .catch(error => {
      alert("Digite um email válido !")
    });
    return;
  }

  return (
    <View style={styles.container}>

      <Text style={styles.message}>Redefina sua senha</Text>

      <View style={styles.box}>
        <Text style={styles.headerText}>Digite seu e-mail para redefinir a senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
       
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetPassword}
          >
          <Text style={styles.resetButtonText}>ENVIAR E-MAIL DE REDEFINIÇÃO DE SENHA</Text>
        </TouchableOpacity>

        {resetSent && <Text style={styles.successText}>E-mail de redefinição de senha enviado com sucesso!</Text>} 

      </View>
      
      <TouchableOpacity 
        style={styles.buttonRegister}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.registerText}>Lembrei minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },

  box: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    width: '80%',
  },

  headerText: {
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
  
  resetButton: {
    backgroundColor: '#238dd1',
    padding: 10,
    borderRadius: 5,
   
  },

  resetButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    
  },

  successText: {
    color: 'green',
    marginTop: 10,
  },

  buttonRegister: {
    marginTop: 20,
  },

  registerText: {
    fontSize: 16,
    color: '#a1a1a1',
  },

  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '10%',
    paddingStart: '1%',
  },

})
