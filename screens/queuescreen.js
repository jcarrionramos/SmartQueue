import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

class QueueScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10}}>
        <Text style={{fontWeight: "bold", color: "black", padding: 25, fontSize: 42}}>Cola</Text>
        <Divider style={{ backgroundColor: 'grey' }} />

        <Text style={{color: "black", padding: 25, fontSize: 21}}>Personas en la cola:</Text>
          <Text style={{color: "green", textAlign:"center", fontSize: 21}}>A04</Text>

        <Text style={{color: "black", padding: 25, fontSize: 21}}>Número de atención:</Text>
          <Text style={{color: "black", textAlign:"center", fontSize: 21}}>10</Text>

        <Text style={{color: "black",  padding:25, fontSize: 21}}>Tiempo espera estimado:</Text>
          <Text style={{color: "black", textAlign:"center", fontSize: 21}}>15 m</Text>


      </View>

    );
  }
}


export default QueueScreen;
