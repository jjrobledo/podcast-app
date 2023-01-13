import { useEffect } from "react";
import { usePodcastsContext } from "../hooks/usePodcastsContext";
import { useAuthContext } from "../hooks/useAuthContext.hook";
import { Grid } from "@mui/material";

import PodcastCard from "../components/PodcastCard.component";

const UserFeed = () => {
  // get the podcast state and dispatch from the podcast context hook
  const { podcasts, dispatch } = usePodcastsContext();
  const { user } = useAuthContext();
  const baseURL = "https://podcast-app-fronend.onrender.com";
  // useEffect fires the fetch function when UserFeed compnent is rendered
  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await fetch(baseURL + "/api/podcasts", {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        // if the response is ok dispach the payload object and rerender
        // the payload from this fetch will be all of the podcasts saved by the user
        dispatch({ type: "GET_PODCASTS", payload: json });
      }
    };

    // if user exists fetch the podcasts
    if (user) {
      fetchPodcasts();
    }
    // fire fetch on dispatch or user
  }, [dispatch, user]);

  return (
    <>
      <Grid container spacing={5} sx={{ marginTop: 2 }}>
        {podcasts &&
          podcasts.map((podcast) => (
            <Grid key={podcast._id} item xs={12} sm={4} lg={4} pr={1}>
              <PodcastCard podcast={podcast} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default UserFeed;
