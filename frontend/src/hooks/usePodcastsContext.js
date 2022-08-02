import { PodcastContext } from "../context/Podcasts.context";
import { useContext } from "react";

export const usePodcastsContext = () => {
  const context = useContext(PodcastContext);

  if (!context) {
    throw Error("Invalid context");
  }

  return context;
};
