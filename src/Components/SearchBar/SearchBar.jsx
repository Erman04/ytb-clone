import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { colors } from "../../Constants/colors";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate()

  const submitHundler = (e) => {
    e.preventDefault();
    if(value){
        navigate(`/search/${value}`)
        setValue('')
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={submitHundler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search.."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
