import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-web';
import CartaoFilme from './src/components/filme';;

export default function App() {
  let[filmes, setFilmes] = useState([]);
  
  useEffect(() => {
    fetch("https://api.otaviolube.com/api/filmes?populate=*").then(resultado => resultado.json())
    .then(filme => {
      console.log(filme);
      setFilmes(filme.data);
    })
    .then(error => console.log(error));
    
  },[]) 

  return (
    <View style={styles.container}>
      {filmes.length > 0 ? 
      filmes.map(filme => <CartaoFilme key={filme.id} filme={filme.attributes}></CartaoFilme>)
       : <View><ActivityIndicator size={'large'} /><Text>Carregando...</Text></View>}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
