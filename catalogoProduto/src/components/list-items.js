import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import axios from 'axios';
import Items from './items'

export default class ListItems extends Component {

  constructor(props) {
    super(props);

    this.state = { listItems: [] }
  }


  componentWillMount() {
    //requisição http
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listItems: response.data }) })
      .catch(() => { console.log('erro ao recuperar os dados') });
  }

  render() {
    return (
      <ScrollView style={styles.background}>
        {this.state.listItems.map(item => (<Items key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#DDD',
    marginTop: '8%'

  }
});
