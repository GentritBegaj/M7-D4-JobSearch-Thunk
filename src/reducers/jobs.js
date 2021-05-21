import { initialState } from "../store";

const jobReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case "GET_JOBS_LOADING":
      return {
        ...state,
        error: false,
        loading: true,
      };
    case "GET_JOBS_SUCCESS":
      return {
        ...state,
        jobList: action.payload,
        error: false,
        loading: false,
      };
    case "GET_JOBS_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default jobReducer;
