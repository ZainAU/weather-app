import { useState, useEffect } from "react";
import { Button, Card, Dialog, Divider, Text, Portal } from "react-native-paper";


export default ({res}) => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [genDialogVisible, setGenDialogVisible] = useState(false);

    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);

    // const tempRanges = [
    //     { color: '#87CEEB', minTemp: -148, maxTemp: 50 },
    //     { color: '#00BFFF', minTemp: 51, maxTemp: 68 },
    //     { color: '#32CD32', minTemp: 69.8, maxTemp: 86 }
    //     // { color: '#FFD700', minTemp: 30*(9/5)+32, maxTemp: 40*(9/5)+32 },
    //     // { color: '#FF4500', minTemp: 40*(9/5)+32, maxTemp: 100*(9/5)+32 },
    //   ];

      const getTempColor = (temp) => {
        if (temp < 10) {
            return "#ADD8E6";
        } else if (temp < 20) {
            return "#87CEEB";
        } else if (temp < 30) {
            return "#00BFFF";
        } else if (temp < 40) {
            return "#FFD700";
        } else {
            return "#FF4500";
        }
    };
    
    const showGenDialog = () => setGenDialogVisible(true);
    const hideGenDialog = () => setGenDialogVisible(false);
    // const backgroundcolor = { backgroundColor:  };
    
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
        // <View style={[{ padding: 10 }]}>
        <Card mode="elevated" style={{backgroundColor: getTempColor(Math.round(res.main.temp - 273.15))}}>
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
        // </View>
        ) : null}
        <Portal>
            {/* these could be separate components, but we ran out of time */}
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
        <Dialog visible={genDialogVisible} onDismiss={hideGenDialog}>
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
    </>
}
