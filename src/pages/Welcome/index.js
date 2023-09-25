import React from 'react';
import {
     View,
     Text,
     StyleSheet,
     Image,
     TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
 
export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/Logo(2).png')}
                    style={{ width: '80%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>Controle e eficiência na palma de suas mãos!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('Login')}
                    >

                    <Text style={styles.buttonText}>Acessar</Text>

                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#238dd1',
    },

    containerLogo:{
        flex:2,
        backgroundColor:'#238dd1',
        justifyContent: 'center',
        alignItems:'center'
    },

    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign: 'justify'
    },

    text:{
        color: '#a1a1a1a1'
    },

    button:{
        position: 'absolute',
        backgroundColor: '#238dd1',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
})