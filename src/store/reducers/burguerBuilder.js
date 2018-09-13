import * as actionsType from '../actions/actionsTypes';

const initialState = {
  ingredient: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionsType.ADD_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
    case actionsType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
    case actionsType.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        error: false
      }
    case actionsType.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      }
    default: return state;
  }
};

export default reducer;

