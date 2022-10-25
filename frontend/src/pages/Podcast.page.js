import { useState } from "react";
import { Player } from "../components/Player.component";
import { Paginator } from "../components/Pagination.component";

import PodcastList from "../components/PodcastList.component";

const Podcast = () => {
  const [paginatedEpisodes, setPaginatedEpisodes] = useState("");

  return (
    <div id="234">
      {paginatedEpisodes &&
        paginatedEpisodes.map((episode) => (
          <PodcastList key={episode.guid} podcast={episode} />
        ))}

      <Paginator
        setPaginatedEpisodes={(episodes) => setPaginatedEpisodes(episodes)}
      />

      <Player />
    </div>
  );
};

export default Podcast;
