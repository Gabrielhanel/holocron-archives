import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function GoBack() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require('../img/back.png')} style={styles.back} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 60,
    height: 40,
    marginTop: 50,
    marginLeft: 20,
  },
});