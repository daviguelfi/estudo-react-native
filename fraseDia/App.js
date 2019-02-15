import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


const Style = {
  principal: {
    flex: 1, //1:1 -> quantidade de espaço ocupado, proporção da tela ocupada
    backgroundColor: 'cornflowerblue'
  },
  header: {
    flex: 2, //2:11
    backgroundColor: 'brown'
  },
  content: {
    flex: 8,
    backgroundColor: 'yellowgreen'
  },
  footer: {
    flex: 1,
    backgroundColor: 'orangered'
  }
};

export default class App extends Component {
  render() {
    const { principal, header, content, footer } = Style;
    return (
      <View style={principal}>
        <Text style={header}>header</Text>
        <Text style={content}>content</Text>
        <Text style={footer}>footer</Text>
      </View>
    );
  }
} 