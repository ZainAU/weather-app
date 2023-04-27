export const fetchWeatherAPI = async (city_name) => {
    const apiKey = `456e510c51916110bb552ffb1a3698c6`;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&APPID=${apiKey}`)
    const deserailziedResponse = await response.json()
    return deserailziedResponse;
}
