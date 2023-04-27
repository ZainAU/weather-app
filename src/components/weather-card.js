import { useState } from "react";
import { Button, Card, Dialog, Divider, Text } from "react-native-paper";

export default ({res}) => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);

    if (res.cod == 404) {
        showDialog;
    }
    return <>
        {res && res.cod === 200 && <Card mode="elevated">
            <Card.Content>
                {/* {res && <> */}
                <Text variant="headlineLarge"  style={{ textTransform: 'capitalize'}}>{res.weather[0].description} </Text>
                <Text variant="headlineSmall">{res.name}, {res.sys.country} </Text>
                <Text></Text>
                <Text>Temperature: </Text>
                <Text variant="displayLarge"> {Math.round(res.main.temp - 273.15)}°C </Text>
                <Text>Feels Like: </Text>
                <Text variant="displayMedium"> {Math.round(res.main.feels_like - 273.15)}°C </Text>
                <Text>⬆ {Math.round(res.main.temp_max - 273.15)}°C | ⬇ {Math.round(res.main.temp_min - 273.15)}°C</Text>
                <Text> Humidity: {res.main.humidity}% | Pressure: {res.main.pressure}hPA </Text>
                {/* </>} */}
            </Card.Content>
        </Card>}
        {res && res.cod === 404 && 
        <Dialog>
            <Dialog.Title>City not found!</Dialog.Title>
            <Dialog.Content>Are you sure you spelt it correctly?</Dialog.Content>
            <Dialog.Actions>
                <Button onPress={hideDialog}>Retry</Button>
            </Dialog.Actions>
        </Dialog>
        }
    </>
}

