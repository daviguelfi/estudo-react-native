import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/cenaPrincipal'
import CenaCliente from './src/components/cenaCliente'
import CenaContato from './src/components/cenaContatos'
import CenaEmpresa from './src/components/cenaEmpresa'
import CenaServico from './src/components/cenaServico'

export default class App extends Component {
  render() {
    return (
      <Navigator style={styles.container}
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal':
              return (<CenaPrincipal navigator={navigator} />)
              break
            case 'cliente':
              return (<CenaCliente navigator={navigator} />)
              break
            case 'contato':
              return (<CenaContato navigator={navigator} />)
              break
            case 'empresa':
              return (<CenaEmpresa navigator={navigator} />)
              break
            case 'servico':
              return (<CenaServico navigator={navigator} />)
              break
            default: return (<CenaPrincipal navigator={navigator} />)
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
});
