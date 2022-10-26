import { useState } from "react";
import { Player } from "../components/Player.component";
import { Paginator } from "../components/Pagination.component";

import PodcastList from "../components/PodcastList.component";

const Podcast = () => {
  const [paginatedEpisodes, setPaginatedEpisodes] = useState("");
  const [nowPlaying, setNowPlaying] = useState("");

  return (
    <div id="234">
      {paginatedEpisodes &&
        paginatedEpisodes.map((episode) => (
          <PodcastList
            key={episode.guid}
            podcast={episode}
            setNowPlaying={(nowPlaying) => setNowPlaying(nowPlaying)}
          />
        ))}

      <Paginator
        setPaginatedEpisodes={(episodes) => setPaginatedEpisodes(episodes)}
      />

      <Player nowPlaying={nowPlaying} />
    </div>
  );
};

export default Podcast;
