import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';

import Skeleton from './src/Skeleton';

const {width} = Dimensions.get('window');

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    let timer = setInterval(()=>{
      setLoading(false);
    }, 3000)
  },[])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#121212"/>

      <Skeleton visible={loading}>

      <View style={{margin: 10}}>

        <View style={styles.card}>
          <Image
          source={{ uri:  'https://sujeitoprogramador.com/wp-content/uploads/2020/02/Thumb.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 60, marginRight: 15}}
          />

          <View style={{flex:1, justifyContent: 'space-evenly'}}>
            <Text style={{color:'#FFF', fontSize: 23, fontWeight: 'bold'}}>Sujeito Programador</Text>
            <Text style={{color:'#FFF', fontSize: 18}}>@sujeitoprogramador</Text>
          </View>
        </View>

        <Text style={{marginTop: 10, color: '#FFF', fontSize: 18}}>
          Testando nosso skeleton loading animado que ficou show de bola!!
        </Text>

        <Text style={{marginTop: 10, color: '#FFF', fontSize: 18}}>
          Já se inscreveu no canal?
        </Text>

      </View>

      </Skeleton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 15
  },
  card:{
    width: width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
