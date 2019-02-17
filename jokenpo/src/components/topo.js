import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Jokenpo from '../../img/jokenpo.png';


export default class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={Jokenpo} />
      </View>
    );
  }
}