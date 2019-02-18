import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import btnBack from '../img/btn_voltar.png'


export default class barNavigator extends Component {
  render() {

    if (this.props.back) {
      return (
        <View style={[styles.container, { backgroundColor: this.props.bgColor }]}>
          <TouchableHighlight
            underlayColor={this.props.bgColor}
            activeOpacity={0.3}
            style={{ marginTop: '8%' }}
            onPress={() => {
              this.props.navigator.pop();
            }}
          >
            <Image source={btnBack} />
          </TouchableHighlight>
          <Text style={styles.title}>ATM Consultoria</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#CCC',
    // marginTop: 33,
    padding: 10,
    height: '15%',
  },
  title: {
    marginTop: '10%',
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    flexDirection: 'row',
  }
});
