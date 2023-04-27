
import { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { fetchWeatherAPI } from '../services/weather-api';
import WeatherCard from './weather-card';

export default () => {
    const [city, setCity] = useState("");
    const [res, setRes] = useState("");
    const [loading, setLoading] = useState(false)

    const fetchWeather = () => {
        setLoading(true)
        setRes("")
        fetchWeatherAPI(city).then(response => {
            setRes(response);
            console.log(response);
            console.log({city})
            setLoading(false);
            // setCity("")
        })
    }
    const refresh = () => {
        setRes("")
        console.log(res)
        console.log(city)
    }

    return (
        <>
            {/* This  could be  a separate component */}
            <View style={{ marginBottom: 5 }}>
                <TextInput label="city" mode='flat' placeholder='Search city' value={city} onChangeText={setCity}></TextInput>
            </View>
            {/* This  could be  a separate component */}
            <Button mode="contained" onPress={fetchWeather} style={{marginBottom:20}}>
                {loading ? "Loading..." : "Show me the weather!"}
            </Button>
            {/* Call weather front-end component */}
            <WeatherCard res={res}/>
            <Button onPress={refresh}>
                Reset
            </Button>
        </>
    )
}