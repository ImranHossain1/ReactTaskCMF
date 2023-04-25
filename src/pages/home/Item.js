import React from "react";
import { Paper, Button, Box, Typography } from "@mui/material";
import bg from "../../image/bg.png";
import chair from "../../image/img.png";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  image: {
    transform: "rotate(-20deg)",
  },
});
const bannerBg = {
  flexGrow: 1,
  height: "80vh",
  width: "100%",
  textAlign: "center",
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 900px)": {
    flexDirection: "column",
  },
  "@media (max-width: 480px)": {
    flexDirection: "column",
  },
};
const Item = ({ category }) => {
  const classes = useStyles();
  return (
    <Paper
      sx={bannerBg}
      style={{
        backgroundColor: category.color,
      }}
    >
      <img
        src={chair}
        alt=""
        width={{ xs: "200px", sm: "300px", md: "400px" }}
        className={category.category === "B" ? classes.image : ""}
      />

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          fontSize={{ xs: 35, sm: 60, lg: 60 }}
        >
          Category: {category.category} Heading {category.subHeading}
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          fontSize={{ xs: 25, sm: 40, lg: 40 }}
        >
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
