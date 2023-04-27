export const fetchWeatherAPI = async ({city_name}) => {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=456e510c51916110bb552ffb1a3698c6")
    const deserailziedResponse = await response.json()
    return deserailziedResponse;
}

// export const postTodo = async (todo) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
//         method: 'POST',
//         body: JSON.stringify(todo),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     const deserailziedResponse = await res.json()
//     return deserailziedResponse;
// }