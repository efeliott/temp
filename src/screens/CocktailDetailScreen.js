import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import axios from 'axios';

const CocktailDetailScreen = ({ route }) => {
  const { cocktailId } = route.params;
  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
    // Exemple de récupération des détails d'un cocktail par ID
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
    .then(response => {
        if (response.data && response.data.drinks) {
        setCocktailDetails(response.data.drinks[0]);
        } else {
        console.log(route.params);
        setCocktailDetails(null);
        }
    })
    .catch(error => console.error('Error fetching cocktail details', error));

  }, [cocktailId]);



  if (!cocktailDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{cocktailDetails.strDrink}</Text>
      <Image source={{ uri: `${cocktailDetails.strDrinkThumb}/preview` }} style={{ height: 100, width: 100 }} />
      <Text>{cocktailDetails.strInstructions}</Text>
    </ScrollView>
  );
};

export default CocktailDetailScreen;
