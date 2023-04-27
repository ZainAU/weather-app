
import { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { fetchWeatherAPI } from '../services/weather-api';
import WeatherCard from './weather-card';

export default () => {
    const [city, setCity] = useState("");
    const [res, setRes] = useState("");
    const [loading, setLoading] = useState(false)

    const fetchWeather = (city) => {
        setLoading(true)
        fetchWeatherAPI({city}).then(response => {
            setRes(response);
            console.log(response);
            setLoading(false);
        })
    }

    return (
        <>
            {/* This  could be  a separate component */}
            <View style={{ marginBottom: 10 }}>
                <TextInput label="queryCity" mode='outlined' placeholder='Search city' value={city} onChange={setCity}></TextInput>
            </View>
            {/* This  could be  a separate component */}
            <Button mode="contained" onPress={fetchWeather}>
                {loading ? "Loading..." : "Show me the weather!"}
            </Button>
            {/* Call weather front-end component */}
            <WeatherCard res={res}/>
        </>
    )
}