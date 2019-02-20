import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import principal from './src/components/principal';
import aboutGame from './src/components/aboutGame';
import otherGame from './src/components/otherGame';
import result from './src/components/result';

export default class App extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 20 }}>
        <Scene key='principal' component={principal} initil title='Cara ou Coroa' />
        <Scene key='aboutgame' component={aboutGame} title="Sobre o Jogo" />
        <Scene key='othergame' component={otherGame} title="Outros Jogos" />
        <Scene key='result' component={result} title='Resultado' />
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#61BD8C',
  // },
  // apresentacaoJogo: {
  //   flex: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // footer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // }
});
