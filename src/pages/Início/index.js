import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Início({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Tela Inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});