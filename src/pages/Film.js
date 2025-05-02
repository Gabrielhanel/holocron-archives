import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import GoBack from '../components/goBack';
import AboutButton from '../components/aboutButton';

export default function Film({ route }) {
  const { film, name } = route.params; 
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFilms() {
      try {
        const data = await Promise.all(
          film.map(async (url) => {
            const response = await fetch(url);
            return await response.json();
          })
        );
        setFilms(data);
      } catch (error) {
        console.error('Error loading films:', error);
      } finally {
        setLoading(false);
      }
    }

    getFilms();
  }, []);

  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (films.length === 0) {
    return (
      <View>
        <GoBack />
        <Text style={[styles.text, {textAlign: 'center'}]}>Not films found.</Text>
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
        <Text style={[styles.text, { fontSize: 22, marginBottom: 50, maxWidth: 220, textAlign: 'center', padding: 0 }]}>{name.toUpperCase()} MOVIES</Text>
    </View>
      <FlatList
        keyExtractor={(item) => item.title}
        data={films}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>Title: {item.title}</Text>
            <Text style={styles.text}>Release Date: {item.release_date}</Text>
            <Text style={styles.text}>Director: {item.director}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
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