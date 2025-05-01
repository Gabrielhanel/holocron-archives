import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutButton() {
    const navigation = useNavigation();
return (
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Image
            source={require('../img/about.png')}
            style={styles.about}
            />
        </TouchableOpacity>
);
}
styles = StyleSheet.create({
    about: {
        width: 60,
        height: 60,
        marginTop: 50,
        marginRight: 20
    },
})