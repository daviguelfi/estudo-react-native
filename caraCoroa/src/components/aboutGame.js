import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';


export default class aboutGame extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Aqui pode ser apresentadas informações sobre o jogo</Text>
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
