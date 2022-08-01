import { useEffect, useState } from "react";

import PodcastGrid from "../components/PodcastGrid.component";
import PodcastCard from "../components/PodcastCard.component";

const Home = () => {
  const [podcasts, setPodcasts] = useState(null);
  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await fetch("/api/podcasts");
      const json = await response.json();

      if (response.ok) {
        setPodcasts(json);
      }
    };

    fetchPodcasts();
  }, []);
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          {podcasts &&
            podcasts.map((podcast) => (
              <div className="col">
                <PodcastCard key={podcast._id} podcast={podcast} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
