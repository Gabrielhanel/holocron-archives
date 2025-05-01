import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import api from '../services/Api';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [people, setPeople] = useState([]);
      const navigation = useNavigation();  

  useEffect(() => {
    async function loadPeople() {
      const response = await api.get('/people');
    const idsDesejados = ['1', '2', '4', '5', '13', '14', '20'];

    const filtrados = response.data.filter(item => {
      const id = item.url.split('/').filter(Boolean).pop();
      return idsDesejados.includes(id);
    });

    function pegarImagem(name) {
      switch (name) {
        case 'Luke Skywalker':
          return require('../img/luke.png');
        case 'Leia Organa':
          return require('../img/leia.png');
        case 'Darth Vader':
          return require('../img/darth_vader.png');
        case 'Chewbacca':
            return require('../img/chewbacca.png');
        case 'Yoda':
            return require('../img/yoda.png');
        case 'Han Solo':
          return require('../img/han-solo.png');
        case 'C-3PO':
          return require('../img/C3PO.png');
        default:
          return require('../img/yoda.png');
      }
    }

    const pessoasComImagem = filtrados.map(item => {
      return {
        ...item,
        imagem: pegarImagem(item.name),
      };
    });
    
    setPeople(pessoasComImagem);
    }
    loadPeople();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOLOCRON ARCHIVES</Text>
      <FlatList
      numColumns={2}
      key={'2columns'}
      keyExtractor={(item) => item.name}
      data={people}
      renderItem={({item}) => 
      <TouchableOpacity onPress={() => navigation.navigate('Person', {
        person: item,
        img: item.imagem,
      })}>
        <View>
            <View style={styles.card}>
              <Image source={item.imagem} style={styles.img} />
              <Text style={styles.nameCard}>{item.name.toUpperCase()}</Text>
          </View>
        </View>

      </TouchableOpacity>
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0C10',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  img: {
    width: 60,
    height: 130,
    marginRight: 10,
    marginBottom: 5
  },
  title: {
    fontFamily: 'Audiowide_400Regular',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 70,
    maxWidth: 380,
    marginBottom: 50,
    color: '#D3D3D3'
  },
  card: {
  justifyContent: 'center',
  alignItems: 'center',
  padding: 12,
  backgroundColor: '#1F2833',
  marginBottom: 20,
  marginLeft: 10,
  width: 150,
  height: 200,
  borderRadius: 10,
  },
  nameCard: {
    fontFamily: 'BrunoAce_400Regular',
    textAlign: 'center',
    color: '#C5C6C7',
    fontSize: 14,
  }
})