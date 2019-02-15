import React from 'react';
import { Text, AppRegistry, View, Button, StyleSheet } from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 1000);
  alert(numero_aleatorio)
}


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Clique para gerar um número randômico</Text>
      <Button
        title="Gerar número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('app1', () => App);