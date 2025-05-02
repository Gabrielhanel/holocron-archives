
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import GoBack from '../components/goBack';
import AboutButton from '../components/aboutButton';
export default function Person( {route} ) {
    const { person, img } = route.params;

    const navigation = useNavigation(); 

    return (
        <View style={{ flex: 1, backgroundColor: '#0B0C10' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <GoBack/>
                <AboutButton/>
            </View>
            <View style={{alignItems: 'center'}}>
                <Image source={img} style={styles.img}/>
                <Text style={styles.name}>{person.name.toUpperCase()}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <View style={styles.backgroundDataPerson}>
                <View style={styles.boxDataPerson}>
                    <Text style={styles.dataPerson}>HEIGHT: {(person.height.toUpperCase())} CM</Text>
                    <Text style={styles.dataPerson} >MASS: {person.mass.toUpperCase()} KG</Text>
                    <Text style={styles.dataPerson}>HAIR COLOR: {person.hair_color.toUpperCase()}</Text>
                </View>
                <View style={styles.boxDataPerson}>
                    <Text style={styles.dataPerson}>SKIN COLOR: {person.skin_color.toUpperCase()}</Text>
                    <Text style={styles.dataPerson}>EYE COLOR: {person.eye_color.toUpperCase()}</Text>
                    <Text style={styles.dataPerson}>GENDER: {person.gender.toUpperCase()}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-beetween', marginTop: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Spaceship', {
                        starship: person.starships,
                        name: person.name,
                    })} style={[styles.button, {backgroundColor: '#1F2833'}]}>
                        <Text style={[styles.txtbutton, {color: '#D3D3D3'}]}>STARSHIPS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Film', {
                        film: person.films,
                        name: person.name,
                    }
                    )} style={[styles.button, {backgroundColor: '#D3D3D3'}]}>
                        <Text style={[styles.txtbutton, {color: '#1F2833'}]}>FILMS</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    img: { 
        width: 100, 
        height: 180,
        marginTop: 10,
    },
    name: {
        color: '#F1F1F1',
        fontFamily: 'Audiowide_400Regular',
        marginTop: 30,
        fontSize: 22,
        maxWidth: 300,
        textAlign: 'center',
    },
    dataPerson: {
        color: '#F1F1F1',
        fontFamily: 'Audiowide_400Regular',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        padding: 10,
        wordWrap: 'break-word',
    },
    backgroundDataPerson: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: 320,
        height: 380,
        marginTop: 20,
        backgroundColor: '#1F2833',
        borderRadius: 10,
    },
    boxDataPerson: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F2833',
        marginBottom: 20,
        marginTop: 20,
        maxWidth: 150,
        wordWrap: 'break-word',
        maxHeight: 300,
    },
    txtbutton: {
        color: '#F1F1F1',
        fontFamily: 'Audiowide_400Regular',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        padding: 10,
    },
    button: {
        backgroundColor: '#1F2833',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        width: 160,
        height: 50,
        borderRadius: 10,
    },
});