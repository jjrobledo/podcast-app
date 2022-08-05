import { PodcastContext } from "../context/Podcasts.context";
import { useContext } from "react";

export const usePodcastsContext = () => {
  // context will return the value of the PodcastContext Provider ({state, dispatch})
  const context = useContext(PodcastContext);

  if (!context) {
    throw Error("Invalid context");
  }

  return context;
};
