import React from "react";
import { Paper, Button, Box, Typography } from "@mui/material";
import bg from "../../image/bg.png";
import chair from "../../image/img.png";
const bannerBg = {
  flexGrow: 1,
  //padding: theme.spacing(3),
  height: "80vh",
  textAlign: "center",
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};
const Item = ({ category }) => {
  console.log(category);
  return (
    <Paper
      sx={bannerBg}
      style={{
        backgroundColor: category.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={chair} alt="" />

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" gutterBottom component="div">
          Category: {category.category} Heading {category.subHeading}
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          Product: {category.productNo} SubHeading {category.subHeading}
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "capitalize" }}
          style={{
            width: "50%",
          }}
        >
          Book now
        </Button>
      </Box>
    </Paper>
  );
};

export default Item;
