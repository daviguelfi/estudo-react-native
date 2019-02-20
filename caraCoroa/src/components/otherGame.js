import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import btnBack from '../imgs/botao_voltar.png'


export default class otherGames extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.img} source={btnBack} /> */}
        <Text style={styles.text}>Aqui pode ser apresentadas outos jogos</Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
    marginTop: '10%'
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 250
  }

});
