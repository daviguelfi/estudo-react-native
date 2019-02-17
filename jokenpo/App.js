import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Topo from './src/components/topo'
import Icone from './src/components/icone'


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

        <Topo></Topo>

        <View style={styles.viewBtn}>
          <View style={styles.choiceBtn}>
            <Button title="Pedra" onPress={() => { this.jokenpo('Pedra') }} />
          </View>

          <View style={styles.choiceBtn}>
            <Button title="Papel" onPress={() => { this.jokenpo('Papel') }} />
          </View>

          <View style={styles.choiceBtn}>
            <Button title="Tesoura" onPress={() => { this.jokenpo('Tesoura') }} />
          </View>
        </View>

        <View>
          <Text style={styles.resultText}> {this.state.result}</Text>
          <Icone choice={this.state.computerChoice} player='Computador' ></Icone>
          <Icone choice={this.state.userChoice} player='Usuário' ></Icone>
        </View>

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
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  choiceBtn: {
    width: 90,
  },
  result: {
    alignItems: 'center',
    marginTop: 10
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    height: 40,
    marginTop: 5
  }
});
