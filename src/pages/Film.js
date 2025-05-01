import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import GoBack from '../components/goBack';
import AboutButton from '../components/aboutButton';

export default function Film({ route }) {
  const { film, name } = route.params; // Array de URLs dos filmes
  const [films, setFilms] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const dados = await Promise.all(
          film.map(async (url) => {
            const resposta = await fetch(url);
            return await resposta.json();
          })
        );
        setFilms(dados);
      } catch (erro) {
        console.error('Erro ao carregar filmes:', erro);
      } finally {
        setCarregando(false);
      }
    }

    carregarFilmes();
  }, []);

  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (films.length === 0) {
    return (
      <View style={styles.centralizado}>
        <GoBack />
        <Text style={styles.texto}>Nenhum filme encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={{backgroundColor: '#0B0C10', flex: 1}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <GoBack/>
    <AboutButton/>
    </View>
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Text style={[styles.texto, { fontSize: 22, marginBottom: 50, maxWidth: 220, textAlign: 'center', padding: 0 }]}>FILMES DE {name.toUpperCase()}</Text>
    </View>
      <FlatList
        keyExtractor={(item) => item.title}
        data={films}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.texto}>Título: {item.title}</Text>
            <Text style={styles.texto}>Lançamento: {item.release_date}</Text>
            <Text style={styles.texto}>Diretor: {item.director}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 16,
    fontFamily: 'Audiowide_400Regular',
    color: '#F1F1F1',
    padding: 5,
  },
  card: {
    backgroundColor: '#1F2833',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
  }
});