import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Text
} from 'react-native';

import BarNavigator from './barNavigator'
import detailContact from '../img/detalhe_contato.png';



export default class cenaContatos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#61BD8C'
        />
        <BarNavigator back navigator={this.props.navigator} bgColor='#61BD8C' />

        <View style={styles.cabecalho}>
          <Image source={detailContact} />
          <Text style={styles.txtTitle}>Contatos</Text>
        </View>

        <View style={styles.detailContact}>
          <Text style={styles.txtContacts}>TEL: (11) 1234-1234</Text>
          <Text style={styles.txtContacts}>CEL: (11) 91234-1234</Text>
          <Text style={styles.txtContacts}>EMAIL: contato@atmconsultoria.com</Text>
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
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 40,
    fontWeight: 'bold'
  },
  detailContact: {
    marginTop: 20,
    padding: 20,
  },
  txtContacts: {
    fontSize: 18,
  }
});
