import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import des écrans
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import CocktailDetailScreen from '../screens/CocktailDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack pour les cocktails
function CocktailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Catégories' }} />
      <Stack.Screen name="CocktailDetail" component={CocktailDetailScreen} options={{ title: 'Détails du cocktail' }} />
    </Stack.Navigator>
  );
}

// Configuration du Tab Navigator
function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cocktails" component={CocktailStack} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

// Composant de navigation principal
function AppNavigation() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}

export default AppNavigation;
