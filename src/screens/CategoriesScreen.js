import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => {
        setCategories(response.data.drinks);
      })
      .catch(error => console.error('Error fetching categories', error));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
  data={data} // Ensure this is an array of objects
  keyExtractor={(item) => item.id.toString()} // Adjust "id" to the property that uniquely identifies an item
  renderItem={({ item }) => (
    // Replace "cocktail" with the correct property name from your items
    <Text>{item.cocktail}</Text>
  )}
/>

    </View>
  );
};

export default CategoriesScreen;
