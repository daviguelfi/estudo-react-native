import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import Jokenpo from './img/jokenpo.png';
import Pedra from './img/pedra.png';
import Papel from './img/papel.png';
import Tesoura from './img/tesoura.png';



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
        result = 'Você venceu'
      }
      if (userChoice == 'Tesoura') {
        result = 'Você perdeu'
      }
    }

    if (computerChoice == 'Papel') {
      if (userChoice == 'Papel') {
        result = 'Empate'
      }
      if (userChoice == 'Tesoura') {
        result = 'Você venceu'
      }
      if (userChoice == 'Pedra') {
        result = 'Você perdeu'
      }
    }

    if (computerChoice == 'Tesoura') {
      if (userChoice == 'Tesoura') {
        result = 'Empate'
      }
      if (userChoice == 'Pedra') {
        result = 'Você venceu'
      }
      if (userChoice == 'Papel') {
        result = 'Você perdeu'
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
          <Icone choice={this.state.userChoice} player='Você' ></Icone>
        </View>
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={Jokenpo} />
      </View>
    );
  }
}

class Icone extends Component {
  render() {

    if (this.props.choice == 'Pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtPlayer}>{this.props.player}</Text>
          <Image source={Pedra} />
        </View>
      )
    }
    else if (this.props.choice == 'Papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtPlayer}>{this.props.player}</Text>
          <Image source={Papel} />
        </View>
      )
    }
    else if (this.props.choice == 'Tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtPlayer}>{this.props.player}</Text>
          <Image source={Tesoura} />
        </View>
      )
    }
    else return false;
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
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20,
  },
  txtPlayer: {
    fontSize: 18
  }
});
