import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import BarNavigator from './barNavigator'

import logo from '../img/logo.png';
import clientMenu from '../img/menu_cliente.png';
import contactMenu from '../img/menu_contato.png';
import companyMenu from '../img/menu_empresa.png';
import serviceMenu from '../img/menu_servico.png';

export default class cenaPrincipal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#CCC'
        />

        <BarNavigator />

        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>

          <View style={styles.subMenu}>
            <TouchableHighlight
              underlayColor={'#B9C941'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'cliente' });
              }}
            >
              <Image style={styles.imgMenu} source={clientMenu} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#61BD8C'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'contato' });
              }}
            >
              <Image style={styles.imgMenu} source={contactMenu} />
            </TouchableHighlight>

          </View>

          <View style={styles.subMenu}>
            <TouchableHighlight
              underlayColor={'#EC7148'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'empresa' });
              }}
            >
              <Image style={styles.imgMenu} source={companyMenu} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#19D1C8'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'servico' });
              }}
            >
              <Image style={styles.imgMenu} source={serviceMenu} />
            </TouchableHighlight>
          </View>
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  },
  logo: {
    marginTop: 20,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  subMenu: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
