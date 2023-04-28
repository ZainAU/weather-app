import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/components/home';

export default function App() {
  return (
      <Provider>
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <Home/>
        <StatusBar style="auto" />
        {/* <a href="https://www.pexels.com">Photos provided by Pexels</a> */}
      </ScrollView>
    </SafeAreaProvider>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
