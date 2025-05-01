import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import GoBack from '../components/goBack';
import AboutButton from '../components/aboutButton';
export default function Spaceship({ route }) {
  const { starship, name } = route.params; // Array de URLs das naves
  const [naves, setNaves] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarNaves() {
      try {
        const dados = await Promise.all(
          starship.map(async (url) => {
            const resposta = await fetch(url);
            return await resposta.json();
          })
        );
        setNaves(dados);
      } catch (erro) {
        console.error('Erro ao carregar naves:', erro);
      } finally {
        setCarregando(false);
      }
    }

    carregarNaves();
  }, []);

  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (naves.length === 0) {
    return (
      <View style={styles.container}>
        <View flexDirection='row' justifyContent='space-between' >
            <GoBack/>
            <AboutButton/>
        </View>
        <View style={styles.centralizado}>
            <Text style={styles.texto}>Nenhuma nave encontrada.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <GoBack/>
        <AboutButton/>
        </View>
        <View style={styles.namePersonStarship}>
        <Text style={[styles.texto, { fontSize: 22, marginBottom: 10, maxWidth: 220, textAlign: 'center' }]}>
          NAVES DE {name.toUpperCase()}
        </Text>
        </View>

      <FlatList
        keyExtractor={(item) => item.name}
        data={naves}
        renderItem={({ item }) => (
          <View style={styles.cartao}>
            <Text style={styles.texto}>Nome: {item.name}</Text>
            <Text style={styles.texto}>Modelo: {item.model}</Text>
            <Text style={styles.texto}>Fabricante: {item.manufacturer}</Text>
            <Text style={styles.texto}>Classe: {item.starship_class}</Text>
            <Text style={styles.texto}>Passageiros: {item.passengers}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0B0C10',
  },
  centralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0C10',
  },
  texto: {
    color: '#F1F1F1',
    fontSize: 16,
    fontFamily: 'Audiowide_400Regular',
    padding: 5,
  },
  cartao: {
    backgroundColor: '#1F2833',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  namePersonStarship: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 60,
  }
});