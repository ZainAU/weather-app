
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
            setCity("")
        })
    }
    const newSearch = (city) => {
        setRes("")
        setCity({city})
    }

    return (
        <>
            {/* This  could be  a separate component */}
            <View style={{ marginBottom: 5 }}>
                <TextInput label="city" mode='flat' placeholder='Search city' value={city} onChange={newSearch}></TextInput>
            </View>
            {/* This  could be  a separate component */}
            <Button mode="contained" onPress={fetchWeather} style={{marginBottom:20}}>
                {loading ? "Loading..." : "Show me the weather!"}
            </Button>
            {/* Call weather front-end component */}
            <WeatherCard res={res}/>
        </>
    )
}