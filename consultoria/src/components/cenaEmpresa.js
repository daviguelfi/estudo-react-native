import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Text
} from 'react-native';

import BarNavigator from './barNavigator'
import detalheEmpresa from '../img/detalhe_empresa.png';



export default class cenaEmpresa extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#EC7148'
        />
        <BarNavigator back navigator={this.props.navigator} bgColor='#EC7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitle}>A Empresa</Text>
        </View>

        <View style={styles.detailEmpresa}>
          <Text style={styles.txtEmpresa}>A ATM Consultoria está no mercado a mais de 20 anos...</Text>
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F5FCFF',
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10
  },
  txtTitle: {
    fontSize: 35,
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 40,
    fontWeight: 'bold'
  },
  detailEmpresa: {
    padding: 20,
    alignItems: 'flex-start',
    marginTop: 10
  },
  txtEmpresa: {
    fontSize: 18,
  },
});
