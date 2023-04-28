import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ForecastCard = ({ res }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  useEffect(() => {
    if (res.cod === 404) {
      showDialog();
    }
  }, [res.cod]);

//   const data = res.list || [];

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Temperature: {item.main.temp}</Text>
      <Text style={styles.itemText}>Weather: {item.weather[0].description}</Text>
      {/* Render other properties as needed */}
    </View>
  );
  

  return (
    <>
      {/* {res && res.cod === 200 ? ( */}
        <View style={styles.container}>
                  {/* <Text style={styles.itemText}>Temperature: {res.main.temp}</Text> */}
      <Text style={styles.itemText}>Weather: {res.weather.description}</Text>
          {/* <FlatList
            data={res.list}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            /> */}

        </View>
      {/* ) : null} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ForecastCard;

