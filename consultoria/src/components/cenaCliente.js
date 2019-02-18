import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Text
} from 'react-native';

import BarNavigator from './barNavigator'

import detalheCliente from '../img/detalhe_cliente.png';
import cliente1 from '../img/cliente1.png';
import cliente2 from '../img/cliente2.png';



export default class cenaClientes extends Component {
  render() {
    return (
      <View style={styles.container}>

        <StatusBar
          backgroundColor='#B9C941'
        />
        <BarNavigator back navigator={this.props.navigator} bgColor='#B9C941' />


        <View style={styles.cabecalho}>
          <Image source={detalheCliente} />
          <Text style={styles.txtTitle}>Nossos clientes</Text>
        </View>

        <View>
          <View style={styles.detailClient}>
            <Image source={cliente1} />
            <Text style={styles.txtDetailClient}>Lorem ipsum dolorem</Text>
          </View>

          <View style={styles.detailClient}>
            <Image source={cliente2} />
            <Text style={styles.txtDetailClient}>Lorem ipsum dolorem</Text>
          </View>
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10
  },
  txtTitle: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25
  },
  detailClient: {
    padding: 20,
    alignItems: 'flex-start',
    marginTop: 5
  },
  txtDetailClient: {
    fontSize: 18,
    marginLeft: 0
  },
});
