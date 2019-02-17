import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: 'É show nego'
    };
  };

  changeText() {
    this.setState({ text: 'Dá dando molin nego' })
  };

  render() {
    return (
      <View style={styles.container}>
        <MyComponent text={this.state.text}></MyComponent>
        <Button
          title='Botão'
          onPress={
            () => { this.changeText() }
          }
        />
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
