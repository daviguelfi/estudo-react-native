import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListItems from './src/components/list-items';

export default class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#DDD', flex: 1 }}>
        <ListItems />
      </View>
    );
  }
}

