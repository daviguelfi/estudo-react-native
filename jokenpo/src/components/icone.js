import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Pedra from '../../img/pedra.png';
import Papel from '../../img/papel.png';
import Tesoura from '../../img/tesoura.png';


export default class Icone extends Component {
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
  icone: {
    alignItems: 'center',
    marginBottom: 20,
  },
  txtPlayer: {
    fontSize: 18
  }
});