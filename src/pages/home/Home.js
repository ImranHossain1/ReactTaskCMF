import React from "react";
import StartScreen from "./StartScreen";
import Cookies from "js-cookie";
import categories from "../../utils/categories.json";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { Button } from "@mui/material";

const Home = () => {
  const Category = Cookies.get("Category");
  const categoryData = categories.filter(
    (category) => category.category === Category
  );

  const handleReset = () => {
    Cookies.remove("Category");
    window.location.reload(); // Reload the page to reflect the change
  };

  return (
    <div>
      {Category ? (
        <div style={{ position: "relative", flex: 1 }}>
          <Carousel
            indicators={true}
            indicatorIconButtonProps={{
              style: { backgroundColor: "white" },
            }}
            indicatorContainerProps={{
              style: {
                position: "absolute",
                bottom: 20,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              },
            }}
          >
            {categoryData.map((category) => (
              <Item key={category._id} category={category} />
            ))}
          </Carousel>
          <div
            style={{
              position: "absolute",
              bottom: -40,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleReset}
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              Reset your choice
            </Button>
          </div>
        </div>
      ) : (
        <StartScreen></StartScreen>
      )}
    </div>
  );
};

export default Home;
