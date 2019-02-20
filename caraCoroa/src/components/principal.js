import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Logo from '../imgs/logo.png';
import btnPlay from '../imgs/botao_jogar.png'
import btnAboutGame from '../imgs/sobre_jogo.png'
import btnOthersGames from '../imgs/outros_jogos.png'

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.apresentacaoJogo}>
          <Image source={Logo} />
          <TouchableHighlight
            onPress={() => { Actions.result(); }}
            >
            <Image source={btnPlay} />
          </TouchableHighlight>
        </View>

        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => { Actions.aboutgame(); }}
          >
            <Image source={btnAboutGame} />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => { Actions.othergame(); }}
          >
            <Image source={btnOthersGames} />
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
