import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import Cara from '../imgs/moeda_cara.png'
import Coroa from '../imgs/moeda_coroa.png'


export default class result extends Component {

  constructor(props) {
    super(props);

    this.state = { result: '' };
  }

  componentWillMount() {
    const randomNumber = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';

    if (randomNumber === 0) {
      caraOuCoroa = 'cara';
    } else {
      caraOuCoroa = 'coroa';
    }

    this.setState({ result: caraOuCoroa })
  }

  render() {
    if (this.state.result === 'cara') {
      return (
        <View style={styles.container}>
          <Image source={Cara} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image source={Coroa} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
