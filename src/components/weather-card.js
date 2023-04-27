import { Card, Text } from "react-native-paper";

export default ({res}) => {
    return <Card>
        <Card.Content>
            {res && <Text>
                Temperature: {res.main.temp}
                Feels Like: {res.main.feels_like}
                Is this even working? Was working earlier.
            </Text>}
        </Card.Content>
    </Card>
}

