import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import PodcastList from "../components/PodcastList.component";

const Podcast = () => {
  const { id } = useParams();

  const [episodes, setEpisodes] = useState(null);
  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(`/api/podcasts/${id}`);
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setEpisodes(json);
      }
    };

    fetchEpisode();
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
