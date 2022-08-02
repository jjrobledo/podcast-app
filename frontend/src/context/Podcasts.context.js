import { createContext, useReducer } from "react";

export const PodcastContext = createContext();

export const podcastReducer = (state, action) => {
  switch (action.type) {
    case "GET_PODCASTS":
      return {
        podcasts: action.payload,
      };
    case "ADD_PODCAST":
      return {
        podcasts: [action.payload, ...state.podcasts],
      };
    case "DELETE_PODCAST":
      return {
        podcasts: state.podcasts.filter(
          (podcast) => podcast._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const PodcastContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(podcastReducer, {
    podcasts: null,
  });

  return (
    <PodcastContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PodcastContext.Provider>
  );
};
