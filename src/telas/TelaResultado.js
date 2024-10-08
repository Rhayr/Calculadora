import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const TelaResultado = ({ route }) => {
  const { num1, num2, operationName, resultado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.bold}>Valor 1: </Text>{num1}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Valor 2: </Text>{num2}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Operação: </Text>{operationName}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Cálculo: </Text>{num1} {operationName === 'Somar' ? '+' : operationName === 'Subtrair' ? '-' : operationName === 'Multiplicar' ? '*' : '/'} {num2}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Resultado: </Text> {resultado}</Text>

        <Image
        source={require('../../assets/gato.png')} 
        style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: GlobalStyles.colors.primaryBackground,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold', 
  },
  image: {
    width: '100%', 
    height: '50%', 
    marginTop: 10, 
  },

});

export default TelaResultado;