import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import api from '../services/Api';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [people, setPeople] = useState([]);
      const navigation = useNavigation();  

  useEffect(() => {
    async function loadPeople() {
      const response = await api.get('/people');
    const selectedIds = ['1', '2', '3', '4', '5', '13', '14', '20', '22', '44'];

    const filteredCharacters = response.data.filter(item => {
      const id = item.url.split('/').filter(Boolean).pop();
      return selectedIds.includes(id);
    });

    const images = {
      'Luke Skywalker': require('../img/luke.png'),
      'Leia Organa': require('../img/leia.png'),
      'Darth Vader': require('../img/darth_vader.png'),
      'Chewbacca': require('../img/chewbacca.png'),
      'Yoda': require('../img/yoda.png'),
      'Han Solo': require('../img/han-solo.png'),
      'C-3PO': require('../img/C3PO.png'),
      'R2-D2': require('../img/R2-D2.png'),
      'Darth Maul': require('../img/darth-maul.png'),
      'Boba Fett': require('../img/boba-fett.png'),
    };

    function getImage(name) {
      return images[name] || require('../img/capacete-stormtrooper.png');
    }

    const peopleWithImages = filteredCharacters.map(item => {
      return {
        ...item,
        image: getImage(item.name),
      };
    });
    
    setPeople(peopleWithImages);
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
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => 
      <TouchableOpacity onPress={() => navigation.navigate('Person', {
        person: item,
        img: item.image,
      })}>
        <View>
            <View style={styles.card}>
              <Image source={item.image} style={styles.img} />
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
    maxWidth: 75,
    maxHeight: 140,
    marginRight: 10,
    marginBottom: 5,
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