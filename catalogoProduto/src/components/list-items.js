import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';


export default class ListItems extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }


  render() {
    return (
      <Text style={styles.background}>Import Component</Text>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '40%'
  }
});
