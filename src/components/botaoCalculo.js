import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const BotaoCalculo = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: GlobalStyles.colors.secondaryColor,
    fontSize: 16,
  },
});

export default BotaoCalculo;