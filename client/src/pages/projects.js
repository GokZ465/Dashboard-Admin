import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Button, FormLabel, TextField, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";

const initialState = {
  title: "",
  projectDescription: "",
  sampleImage: "",
  dueDate1: "",
  dueDate2: "",
  compulsoryWordings: "",
  colors: "",
  leaderPhoto: "",
  status: "",
  approvedStatus: "",
  createdBy: "",
};

const ProjectCreate = () => {
  const [input, setInput] = useState([initialState]);
  // const { isAuthenticated, user } = useSelector(state => state.auth)

  // destructure
  const {
    title,
    projectDescription,
    sampleImage,
    dueDate1,
    dueDate2,
    compulsoryWordings,
    colors,
    leaderPhoto,
    status,
    approvedStatus,
    createdBy,
  } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    //   if (isAuthenticated === true && user.role !== 'superadmin') {
    //     return <Navigate to="/" />
    // }
    console.log("Project", input);
    axios
      .post("http://localhost:5000/project", JSON.stringify(input), {
        withCredentials: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      // fetch("http://localhost:5000/project", {
      //   method: "POST",
      //   withCredentials: true,
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: JSON.stringify(input),
      // })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // setInput({
    //   ...input,
    //   title: "",
    //   projectDescription: "",
    //   sampleImage: "",
    //   dueDate1: "",
    //   dueDate2: "",
    //   compulsoryWordings: "",
    //   colors: "",
    //   leaderPhoto: "",
    //   status: "",
    //   approvedStatus: "",
    //   createdBy: ""
    // });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
   
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      id="inputform"
      name="inputform"
      enctype="multipart/form-data"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Title</FormLabel>
        <TextField
          value={title}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="title"
        />
        <FormLabel>Project Description</FormLabel>
        <TextField
          value={projectDescription}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="projectDescription"
        />
        <FormLabel>Sample Image</FormLabel>
        <TextField
          value={sampleImage}
          onChange={handleChange}
          margin="normal"
          //type="file"
          fullWidth
          variant="outlined"
          name="sampleImage"
        />
        <FormLabel>Due Date 1</FormLabel>
        <TextField
          type="date"
          value={dueDate1}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="dueDate1"
        />
        <FormLabel>Due Date 2</FormLabel>
        <TextField
          type="date"
          value={dueDate2}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="dueDate2"
        />
        <FormLabel>Compulsory Wordings</FormLabel>
        <TextField
          value={compulsoryWordings}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="compulsoryWordings"
        />
        <FormLabel>Color</FormLabel>
        <Select
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="colors"
          value={colors}
        >
          <MenuItem value="Black">Black</MenuItem>
          <MenuItem value="Brown">Brown</MenuItem>
          <MenuItem value="Silver">Silver</MenuItem>
          <MenuItem value="White">White</MenuItem>
          <MenuItem value="Blue">Blue</MenuItem>
          {/* <MenuItem>Please select</MenuItem>
                  {colors?.map((c) => (
                    <MenuItem key={c} value={c.colors}>
                      {c.colors}
                    </MenuItem>
                  ))} */}
        </Select>
        <FormLabel>Leader Photo</FormLabel>
        <TextField
          value={leaderPhoto}
          onChange={handleChange}
          margin="normal"
          fullWidth
          //type="file"
          variant="outlined"
          name="leaderPhoto"
        />
        <FormLabel>Status</FormLabel>
        <Select
          value={status}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="status"
        >
          <MenuItem value="Processing">Processing</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        <FormLabel>Approved Status</FormLabel>
        <Select
          value={approvedStatus}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="approvedStatus"
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
        <FormLabel>Created By</FormLabel>
        <TextField
          value={createdBy}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="createdBy"
        />

        <Button variant="contained" type="submit">
          Create
        </Button>
      </Box>
    </form>
  );
};

export default ProjectCreate;
