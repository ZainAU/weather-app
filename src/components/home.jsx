import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { fetchWeatherAPI } from '../services/weather-api';
import WeatherCard from './weather-card';
import { Text } from 'react-native';
import FavoriteCities from './fav-cities';

export default () => {
    const [city, setCity] = useState("");
    const [res, setRes] = useState("");
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [isWeatherCardDisplayed, setIsWeatherCardDisplayed] = useState(false);

    const fetchWeather = () => {
        setLoading(true);
        setRes("");
        fetchWeatherAPI(city).then(response => {
            setRes(response);
            console.log(response);
            console.log({city});
            setLoading(false);
            setIsWeatherCardDisplayed(true);
        });
    };

    const addToFavorites = () => {
        if (favorites.findIndex(fav => fav.city === city) === -1) {
            fetchWeatherAPI(city).then(response => {
                setFavorites([...favorites, { city, weather: response }]);
            });
        }
    };

    const selectFavorite = (city) => {
        const favorite = favorites.find(fav => fav.city === city);
        setRes(favorite.weather);
        setCity(city);
    };

    const refresh = () => {
        setRes("");
        setCity("");
        setIsWeatherCardDisplayed(false);
        console.log(res);
        console.log(city);
    };

    return (
        <>
        <View><Text variant="headlineLarge">Welcome! </Text></View>
            {/* This could be a separate component */}
            <View style={{ marginBottom: 5 }}>
                <TextInput label="city" mode='flat' placeholder='Search city' value={city} onChangeText={setCity}></TextInput>
            </View>
            {/* This could be a separate component */}
            <Button mode="contained" onPress={fetchWeather} style={{marginBottom:20}}>
                {loading ? "Loading..." : "Show me the weather!"}
            </Button>
            {/* Call weather front-end component */}
            <WeatherCard res={res}  favorites={favorites} onSelectFavorite={selectFavorite} />
            <Button
                mode="contained"
                onPress={addToFavorites}
                disabled={!isWeatherCardDisplayed}
            >Add to Favorites</Button>
            <Button onPress={refresh}>
                Reset
            </Button>
            {/* Display favorite cities */}
            <View>
                {/* <FavoriteCities/> */}
                <Card>
                <View>
                    <Text>Favorite Cities:</Text>
                {favorites.map(fav => (
                    <Text key={fav.city} onPress={() => selectFavorite(fav.city)}>{fav.city}</Text>
                ))}
            </View>
                </Card> 
            </View>
        </>
    );
};
