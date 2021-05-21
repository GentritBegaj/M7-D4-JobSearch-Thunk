export const addFavourite = (job) => ({
  type: "ADD_FAVOURITE",
  payload: job,
});

export const removeFavourite = (id) => ({
  type: "REMOVE_FAVOURITE",
  payload: id,
});
