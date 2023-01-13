import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext.hook";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const pageSize = 10;

const Paginator = ({ setPaginatedEpisodes, setPodcastInfo }) => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const baseURL = "https://podcast-app.onrender.com";

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(baseURL + `/api/podcasts/${id}`, {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        const { episodes, ...PodcastInfo } = json;
        setPodcastInfo(PodcastInfo);
        setPaginatedEpisodes(episodes.slice(pagination.from, pagination.to));
        setPagination({ ...pagination, count: episodes.length });
      }
    };
    if (user) {
      fetchEpisode();
    }
  }, [pagination.from, pagination.to]);

  const handlePageChange = (e, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      sx={{ margin: "30px 0px" }}
    >
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export { Paginator };
