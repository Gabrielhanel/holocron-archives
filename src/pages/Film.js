import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
// lembrar de fazer a questão do loading

export default function Film( {route } ) {
    const { film } = route.params;
    const [films, setFilms] = useState([]); 

    useEffect(() => {
        async function carregarFilmes() {
            const getFilm  = await axios.get(
                `https://swapi.info/api/films?search=${characterName}`
              );
        }
    })
/*
https://github.com/augusto16ortolan/react-native-2025-1-aula-01-02-03/blob/main/starwars.js
*/
      }, []);

    const navigation = useNavigation(); 
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <FlatList
                  keyExtractor={(item) => item.title}
                  data={films}
                  renderItem={({item}) => 
                  <Text>{item.title}</Text>
                  }
                  />
        </View>
    )
}