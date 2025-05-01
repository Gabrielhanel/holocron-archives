import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import GoBack from '../components/goBack';
import AboutButton from '../components/aboutButton';
export default function Spaceship({ route }) {
  const { starship, name } = route.params;
  const [spaceships, setSpaceships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSpaceships() {
      try {
        const data = await Promise.all(
          starship.map(async (url) => {
            const response = await fetch(url);
            return await response.json();
          })
        );
        setSpaceships(data);
      } catch (error) {
        console.error('Error loading spaceships:', error);
      } finally {
        setLoading(false);
      }
    }

    getSpaceships();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (spaceships.length === 0) {
    return (
      <View style={styles.container}>
        <View flexDirection='row' justifyContent='space-between' >
            <GoBack/>
            <AboutButton/>
        </View>
        <View style={styles.center}>
            <Text style={styles.text}>No spaceships found.</Text>
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
        <Text style={[styles.text, { fontSize: 22, marginBottom: 10, maxWidth: 220, textAlign: 'center' }]}>
        SPACESHIPS OF {name.toUpperCase()}
        </Text>
        </View>

      <FlatList
        keyExtractor={(item) => item.name}
        data={spaceships}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Model: {item.model}</Text>
            <Text style={styles.text}>Manufacturer: {item.manufacturer}</Text>
            <Text style={styles.text}>Class: {item.starship_class}</Text>
            <Text style={styles.text}>Passengers: {item.passengers}</Text>
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0C10',
  },
  text: {
    color: '#F1F1F1',
    fontSize: 16,
    fontFamily: 'Audiowide_400Regular',
    padding: 5,
  },
  card: {
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