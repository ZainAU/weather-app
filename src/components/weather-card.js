import { useState, useEffect } from "react";
import { Button, Card, Dialog, Divider, Text, Portal } from "react-native-paper";


export default ({res}) => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [genDialogVisible, setGenDialogVisible] = useState(false);

    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);

    const showGenDialog = () => setGenDialogVisible(true);
    const hideGenDialog = () => setGenDialogVisible(false);
    
    useEffect(() => {
        if (res.cod == 404) {
            showDialog();
        }
        else if (res.cod == 400) {
            showGenDialog();
        }
    }, [res.cod])
    

    return <>
        {res && res.cod === 200 ? (
        <Card mode="elevated">
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
        </Card>
        ) : null}
        <Portal>
        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
            <Dialog.Icon icon="map-marker-question-outline"/>
            <Dialog.Title>City not found</Dialog.Title>
            <Dialog.Content>
                <Text>Are you sure you spelt it correctly?</Text>
            </Dialog.Content>
            <Dialog.Actions>
                <Button onPress={hideDialog}>Retry</Button>
            </Dialog.Actions>
        </Dialog>
        {/* General Error dialog */}
        <Dialog visible={genDialogVisible} onDismiss={hideGenDialog} style={dialogStyle}>
            <Dialog.Icon icon="map-marker-question-outline"/>
            <Dialog.Title>That value seems to be incorrect</Dialog.Title>
            <Dialog.Content>
                <Text>Please try again</Text>
            </Dialog.Content>
            <Dialog.Actions>
                <Button onPress={hideGenDialog}>Retry</Button>
            </Dialog.Actions>
        </Dialog>
        </Portal>
        {/* {res && res.cod === 404 ? (
            <Card>
                <Card.Content>
                    <Text>City not found!</Text>
                    <Text>Are you sure you spelt it correctly?</Text>
                </Card.Content>
                <Card.Actions>
                    <Button> Retry </Button>
                </Card.Actions>
            </Card>
        ):null } */}
    </>
}

const dialogStyle = {
    overlay: {zIndex: 1000}
};