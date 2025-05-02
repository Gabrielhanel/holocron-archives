import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import GoBack from '../components/goBack';
import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

export default function About() {
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    const playSound = async () => {
      try {
        await sound.current.loadAsync(require('../audio/the-force-suite-theme.mp3'));
        await sound.current.setVolumeAsync(1.0);
        await sound.current.playAsync();
      } catch (error) {
        console.log('Erro ao reproduzir áudio:', error);
      }
    };

    playSound();

    return () => {
      sound.current.unloadAsync(); // Libera recursos quando sai da tela
    };
  }, []);

  return (
    <View style={{ backgroundColor: '#0B0C10', flex: 1 }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <GoBack />
      </View>
      <View>
        <Text style={styles.title}>ABOUT THE DEVELOPERS</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.backgroundCard}>
          <Text style={styles.subtitle}>Developed by:</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.infoDevelopers}>Gabriel Hanel</Text>
            <Text style={styles.infoDevelopers}>RA: 1135926</Text>
            <Text style={styles.infoDevelopers}>Email: ghanel527@gmail.com</Text>
          </View>
          <View style={{ marginTop: 25, marginBottom: 10 }}>
            <Text style={styles.infoDevelopers}>Mário Bernardo Balen</Text>
            <Text style={styles.infoDevelopers}>RA: 1136196</Text>
            <Text style={styles.infoDevelopers}>Email: 1136196@atitus.edu.br</Text>
          </View>
          <View>
            <Image
              source={require('../img/mestre-yoda-dj.png')}
              style={styles.img}
            />
            <Text style={styles.yoda}>DROP THE SOUND, DJ YODA!!</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: 'Audiowide_400Regular',
    color: '#F1F1F1',
    padding: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'Audiowide_400Regular',
    color: '#F1F1F1',
    textAlign: 'center',
  },
  infoDevelopers: {
    fontSize: 16,
    fontFamily: 'Audiowide_400Regular',
    color: '#F1F1F1',
    padding: 5,
    textAlign: 'center',
  },
  img: {
    width: 240,
    height: 240,
    marginTop: 20,
    borderRadius: 10,
  },
  backgroundCard: {
    backgroundColor: '#1F2833',
    width: 350,
    height: 600,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  yoda: {
    fontSize: 14,
    fontFamily: 'Audiowide_400Regular',
    color: '#F1F1F1',
    padding: 5,
    textAlign: 'center',
    marginTop: 10,
  },
});
