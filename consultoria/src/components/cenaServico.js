import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Text
} from 'react-native';

import BarNavigator from './barNavigator'
import detalheServico from '../img/detalhe_servico.png';



export default class cenaServico extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#19D1C8'
        />
        <BarNavigator back navigator={this.props.navigator} bgColor='#19D1C8' />

        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitle}>Nossos Serviços</Text>
        </View>

        <View style={styles.detailEmpresa}>
          <Text style={styles.txtEmpresa}>- Consultoria</Text>
          <Text style={styles.txtEmpresa}>- Processos</Text>
          <Text style={styles.txtEmpresa}>- Acompanhamento de Projetos</Text>
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
    color: '#19D1C8',
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
