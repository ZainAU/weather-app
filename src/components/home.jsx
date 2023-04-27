
import { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { fetchWeatherAPI } from '../services/weather-api';

export default () => {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false)

    const fetchWeather = (city) => {
        setLoading(true)
        fetchWeatherAPI({city}).then(res => {
            console.log(res);
            setLoading(false);
        })
    }

    return (
        <>
            <View style={{ marginBottom: 10 }}>
                <TextInput label="queryCity" mode='outlined' placeholder='Search city' value={city} onChange={setCity}></TextInput>
            </View>
            <Button mode="contained" onPress={fetchWeather}>
                {loading ? "Loading..." : "Show me the weather!"}
            </Button>
        </>
    )
}