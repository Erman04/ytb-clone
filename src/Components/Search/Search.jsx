import React, { useEffect, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import Videos from "../Videos/Videos";
import { colors } from "../../Constants/colors";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography key={id} variant="h4" fontWeight="bold" mb={2}>
          Search results for <span style={{color: colors.secondary}} >{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Search;
