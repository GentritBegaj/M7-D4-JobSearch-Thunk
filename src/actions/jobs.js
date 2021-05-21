export const fetchJobs = () => async (dispatch, getState) => {
  dispatch({ type: "GET_JOBS_LOADING" });
  try {
    const response = await fetch(
      "https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions.json"
    );
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "GET_JOBS_SUCCESS", payload: data });
    } else {
      dispatch({ type: "GET_JOBS_FAILURE" });
    }
  } catch (error) {
    dispatch({ type: "GET_JOBS_FAILURE" });
    console.log(error);
  }
};

export const searchJob = (position, area) => async (dispatch, getState) => {
  dispatch({ type: "GET_JOBS_LOADING" });
  try {
    const response = await fetch(
      `https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${area}`
    );
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "GET_JOBS_SUCCESS", payload: data });
    } else {
      dispatch({ type: "GET_JOBS_FAILURE" });
    }
  } catch (error) {
    dispatch({ type: "GET_JOBS_FAILURE" });
    console.log(error);
  }
};
