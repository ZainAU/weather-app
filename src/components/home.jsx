
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default () => {
    return (
        <>
            <View style={{ marginBottom: 10 }}>
                <TextInput label="queryCity" mode='outlined' placeholder='Search city'></TextInput>
            </View>
            <Button mode="contained" >
                Show me the weather!
            </Button>
        </>
    )
}