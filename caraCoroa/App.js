import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Routes from './src/Routes'

export default class App extends Component {
  render() {
    return (
      <Routes />

    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#61BD8C',
  // },
  // apresentacaoJogo: {
  //   flex: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // footer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // }
});
