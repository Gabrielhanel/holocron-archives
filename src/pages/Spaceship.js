import { View, Text } from 'react-native'

export default function Spaceship() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'BrunoAce_400Regular', fontSize: 24 }}>Texto com Bruno Ace</Text>
            <Text style={{ fontFamily: 'Audiowide_400Regular', fontSize: 24 }}>Texto com Audiowide</Text>
        </View>
    )
}