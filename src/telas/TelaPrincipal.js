import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { adicao, subtracao, multiplicacao, divisao } from '../funcaoCalculos/funcaoCalculos';
import BotaoCalculo from '../components/botaoCalculo';
import { GlobalStyles } from '../constants/styles';

const TelaPrincipal = ({ navigation }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState(null); 
  const [operationName, setOperationName] = useState(''); 

  const handleOperationSelect = (operationFunc, operationLabel) => {
    setOperation(() => operationFunc); 
    setOperationName(operationLabel);  
  };

  const handleCalculate = () => {
    if (!num1 || !num2) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (!operation) {
        Alert.alert('Erro', 'Uma operação deve ser selecionada.');
        return;
      }

    if (operationName === 'Dividir' && (parseFloat(num1) === 0 || parseFloat(num2) === 0)) {
        Alert.alert('Erro', 'Não é possível dividir por zero ou dividir o número zero.');
        return;
    }
    
    if (operation) {
      const resultado = operation(parseFloat(num1), parseFloat(num2));
      navigation.navigate('TelaResultado', { num1, num2, operationName, resultado });
    }
  };

  return (
    <View style={styles.container}>

        <Text style={styles.textInput}>Informe o primeiro valor: </Text>
        <TextInput 
          style={styles.input} 
          keyboardType="numeric" 
          value={num1} 
          onChangeText={setNum1} 
          selectionColor="#333" 
        />

        <Text style={styles.textInput}>Informe o segundo valor: </Text>
        <TextInput 
          style={styles.input} 
          keyboardType="numeric" 
          value={num2} 
          onChangeText={setNum2} 
          selectionColor="#333"
        />

        <Text style={styles.operationText}>Informe a operação</Text>

        <BotaoCalculo onPress={() => handleOperationSelect(adicao, 'Somar')} title="Somar" />
        <BotaoCalculo onPress={() => handleOperationSelect(subtracao, 'Subtrair')} title="Subtrair" />
        <BotaoCalculo onPress={() => handleOperationSelect(multiplicacao, 'Multiplicar')} title="Multiplicar" />
        <BotaoCalculo onPress={() => handleOperationSelect(divisao, 'Dividir')} title="Dividir" />

        <Text style={styles.operationText}>Operação escolhida: {operationName}</Text>

        <BotaoCalculo onPress={handleCalculate} title="Efetuar cálculo" />
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
  input: {
    height: 40,
    borderColor: GlobalStyles.colors.thirdyColor,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  operationText: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
    textAlign: 'center',
  },
  textInput:{
    fontSize: 16,
    marginBottom: 4,
  },
});

export default TelaPrincipal;