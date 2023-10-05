import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';


export default function SignIn(){

    const navigation = useNavigation();
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn(){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential =>{
            console.log('user: ', userCredential);
            alert('Usuário criado com sucesso')
            setEmail(''),
            setPassword(''),
            setName(''),
            navigation.navigate('Login');
        })
        .catch(error =>{
           if (error.code === 'auth/email-already-in-use'){
                console.log('email já existe');
                alert ('Este email já está sendo usado');
            }
           
            if (error.code === 'auth/invalid-email'){
                console.log('Email inválido');
                alert('Digite um email válido');
            }
        })
    }
    
    
    return (
        <KeyboardAvoidingView
            style={styles.container}
            >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                >

                <Animatable.View animation="fadeInLeft" delay={900} style={styles.containerHeader}>
                        <Text style={styles.message}>Faça seu cadastro</Text>
                    </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                    <Text style={styles.title}>Nome</Text>
                    <TextInput
                        placeholder="Digite seu nome..."
                        value={name}
                        onChangeText={ (text) => setName (text) }
                        style={styles.input}
                    />   

                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder="Digite um email..."
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                        style={styles.input}
                    />      

                    <Text style={styles.title}>Senha</Text>
                    <View style={styles.inputArea}>
                        <TextInput
                            placeholder="Informe sua senha..."
                            style={styles.input}
                            //value={input}
                           // onChangeText={ ( texto) => setInput(texto) }
                            secureTextEntry={hidePass}
                            value={password}
                            onChangeText={ ( texto) => setPassword(texto) }
                        />

                        <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass)}>
                        {hidePass ?
                            <Ionicons name="eye" color="#121212" size={25} />
                            :
                            <Ionicons name="eye-off" color="#121212" size={25} />
                        }
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleSignIn}
                        
                        >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonRegister}
                        onPress={ () => navigation.navigate('Login')}
                        >
                        <Text style={styles.registerText}>Já tenho uma conta</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>   
        </KeyboardAvoidingView>   
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#238dd1',
    },
    
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    
    inputArea:{
        flexDirection: 'row',
        width: '90%',
    },

    icon:{
        width: '100%',
        justifyContent: 'center',
        height: 60
    },

    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },

    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },

    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        width: '100%',
    },

    title:{
        fontSize: 20,
        marginTop: 28, 
    },

    button:{
        backgroundColor: '#238dd1',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonRegister:{
        margin: 14,
        alignSelf: 'center',
    },

    registerText:{
        color: '#a1a1a1',
    },
})