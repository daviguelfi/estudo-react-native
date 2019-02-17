import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Items extends Component {

  render() {
    return (
      <View style={styles.item}>

        <View style={styles.photo}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
        </View>

        <View style={styles.itemsDetail}>
          <Text style={styles.txtTitle}> {this.props.item.titulo}</Text>
          <Text style={styles.txtPrice}> R$ {this.props.item.valor}</Text>
          <Text style={styles.txtDetails}> Local: {this.props.item.local_anuncio}</Text>
          <Text style={styles.txtDetails}> Data publicação: {this.props.item.data_publicacao}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10
  },
  photo: {
    width: 102,
    height: 102
  },
  itemsDetail: {
    flex: 1,
    marginLeft: 20
  },
  txtTitle: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  txtPrice: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold'
  },
  txtDetails: {
    fontSize: 16
  }
});
