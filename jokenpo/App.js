import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.prop1}</Text>
        <Text>{this.props.prop2}</Text>
        <Text>{this.props.prop3}</Text>
        <Text>{this.props.prop4}</Text>
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyComponent prop1='bananao' prop2='uva' prop3='breja'
          prop4='é show nego'>
        </MyComponent>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
