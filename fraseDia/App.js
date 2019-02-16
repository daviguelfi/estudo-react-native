import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Logo from './imagem/logo.png'

const Style = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 5)

  var texts = Array();
  texts[0] = 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.';
  texts[1] = 'Imagine uma nova história para sua vida e acredite nela.';
  texts[2] = 'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.';
  texts[3] = 'Nunca deixe ninguém te dizer que não pode fazer alguma coisa.';
  texts[4] = 'Desconfie do destino e acredite em você.';

  var selectText = texts[randomNumber];

  Alert.alert(selectText);
};


export default class App extends Component {
  render() {
    const { principal, button, textButton } = Style;
    return (
      <View style={principal}>
        <Image source={Logo} />
        <TouchableOpacity
          style={button}
          onPress={gerarNovaFrase}
        >
          <Text style={textButton}>Nova frase</Text>
        </TouchableOpacity>
      </View >
    );
  }
} 