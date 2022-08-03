import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext.hook";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { Player } from "../components/Player.component";

import PodcastList from "../components/PodcastList.component";
import UpdatePodcastInput from "../components/UpdatePodcast.component";

const Podcast = () => {
  const { id } = useParams();
  // get the user from the useAuthContext hook
  const { user } = useAuthContext();
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(`/api/podcasts/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setEpisodes(json);
      }
    };
    if (user) {
      fetchEpisode();
    }
  }, []);
  return (
    <div id="234">
      <Player />
      <UpdatePodcastInput />
      {episodes &&
        episodes.episodes.map((episode) => (
          <PodcastList key={episode.guid} podcast={episode} />
        ))}
    </div>
  );
};

export default Podcast;
