import { useState } from "react";
import { Player } from "../components/Player.component";
import { Paginator } from "../components/Pagination.component";
import PodcastList from "../components/PodcastList.component";
import PodcastInfo from "../components/PodcastInfo.component";

const Podcast = () => {
  const [paginatedEpisodes, setPaginatedEpisodes] = useState(null);
  const [podcastInfo, setPodcastInfo] = useState(null);
  const [nowPlaying, setNowPlaying] = useState("");

  return (
    <div id="234">
      <PodcastInfo podcastInfo={podcastInfo} />
      {paginatedEpisodes &&
        paginatedEpisodes.map((episode) => (
          <PodcastList
            key={episode.guid}
            podcast={episode}
            setNowPlaying={(nowPlaying) => setNowPlaying(nowPlaying)}
          />
        ))}

      <Paginator
        setPaginatedEpisodes={setPaginatedEpisodes}
        setPodcastInfo={setPodcastInfo}
      />

      <Player nowPlaying={nowPlaying} />
    </div>
  );
};

export default Podcast;
