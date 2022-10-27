import { createContext, useReducer } from "react";

// create context
export const PodcastContext = createContext();

// state is previous state - action is the argument passed into the dispatch function
export const podcastReducer = (state, action) => {
  // check the action type
  switch (action.type) {
    // return all the podcasts
    case "GET_PODCASTS":
      return {
        podcasts: action.payload,
      };
    case "ADD_PODCAST":
      // return a new array with the newly added podcast and append (spread) the previous podcast state (the existing podcasts)
      return {
        podcasts: [action.payload, ...state.podcasts],
      };
    // filter the previous state by the podcast that was deleted and rerender
    case "DELETE_PODCAST":
      return {
        podcasts: state.podcasts.filter(
          (podcast) => podcast._id !== action.payload._id
        ),
      };
    case "UPDATE_PODCASTS":
      return {
        podcasts: action.payload,
      };
    default:
      return state;
  }
};

// create component to provide context throughout the application
// children are the components wrapped by the context provider
export const PodcastContextProvider = ({ children }) => {
  // use reducer provides a state value and a dispatcher function to update the state
  // the dispatch funtion can be used to update the state throughout the application dispatch(state-that-will-change, payload: data that will be used to make the change)
  const [state, dispatch] = useReducer(podcastReducer, {
    podcasts: null,
  });
  // provide context to entire application
  return (
    <PodcastContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PodcastContext.Provider>
  );
};
