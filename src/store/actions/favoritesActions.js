// src/store/actions/favoritesActions.js
export const addFavorite = cocktail => {
    return {
      type: 'ADD_FAVORITE',
      payload: cocktail
    };
  };
  
  export const removeFavorite = id => {
    return {
      type: 'REMOVE_FAVORITE',
      payload: id
    };
  };
  