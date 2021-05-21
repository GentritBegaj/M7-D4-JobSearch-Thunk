import { initialState } from "../store";

const favouritesReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favList: [...state.favList, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favList: state.favList.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
