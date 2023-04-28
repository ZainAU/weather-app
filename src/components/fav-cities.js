import { View, Text } from "react-native"
export default function FavoriteCities ({ favoriteCities }) {
    return (
        <View>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Favorite Cities:</Text>
            {favoriteCities.map(city => (
                <Text key={city}>{city}</Text>
            ))}
        </View>
    )
}