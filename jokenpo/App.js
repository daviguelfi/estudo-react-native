import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userChoice: '',
      computerChoice: '',
      result: ''
    }
  }

  jokenpo(userChoice) {

    //render random number(0,1,2), pedra, papel e tesoura
    var randomNumber = Math.floor(Math.random() * 3)

    var computerChoice = '';
    switch (randomNumber) {
      case 0: computerChoice = 'Pedra';
        break;
      case 1: computerChoice = 'Papel';
        break;
      case 2: computerChoice = 'Tesoura';
        break;
    }

    var result = ''
    if (computerChoice == 'Pedra') {
      if (userChoice == 'Pedra') {
        result = 'Empate'
      }
      if (userChoice == 'Papel') {
        result = 'O usuário venceu'
      }
      if (userChoice == 'Tesoura') {
        result = 'O computador venceu'
      }
    }

    if (computerChoice == 'Papel') {
      if (userChoice == 'Papel') {
        result = 'Empate'
      }
      if (userChoice == 'Tesoura') {
        result = 'O usuário venceu'
      }
      if (userChoice == 'Pedra') {
        result = 'O computador venceu'
      }
    }

    if (computerChoice == 'Tesoura') {
      if (userChoice == 'Tesoura') {
        result = 'Empate'
      }
      if (userChoice == 'Pedra') {
        result = 'O usuário venceu'
      }
      if (userChoice == 'Papel') {
        result = 'O computador venceu'
      }
    }

    this.setState({
      userChoice: userChoice,
      computerChoice: computerChoice,
      result: result
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Escolha do computador: {this.state.computerChoice}</Text>
        <Text>Escolha do usuário: {this.state.userChoice}</Text>
        <Text>Resultado: {this.state.result}</Text>
        <Button title="Pedra" onPress={() => { this.jokenpo('Pedra') }} />
        <Button title="Papel" onPress={() => { this.jokenpo('Papel') }} />
        <Button title="Tesoura" onPress={() => { this.jokenpo('Tesoura') }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
