import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './src/telas/TelaPrincipal';
import TelaResultado from './src/telas/TelaResultado';
import { GlobalStyles } from './src/constants/styles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primaryColor,
            height: 100,
          },
          headerTintColor: GlobalStyles.colors.thirdyColor,
          headerTitleAlign: 'center', 
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24, 
          },
        }}
      >
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{ title: 'Calculadora' }} 
        />
        <Stack.Screen
          name="TelaResultado"
          component={TelaResultado}
          options={{ title: 'Resultado' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
