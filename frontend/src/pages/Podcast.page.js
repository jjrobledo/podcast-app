import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext.hook";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import PodcastList from "../components/PodcastList.component";

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
    <div>
      {episodes &&
        episodes.episodes.map((podcast) => (
          <div>
            <PodcastList key={podcast._id} podcast={podcast} />
          </div>
        ))}
    </div>
  );
};

export default Podcast;
