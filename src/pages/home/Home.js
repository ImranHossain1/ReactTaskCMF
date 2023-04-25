import React from "react";
import StartScreen from "./StartScreen";
import Cookies from "js-cookie";
import categories from "../../utils/categories.json";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
const Home = () => {
  const Category = Cookies.get("Category");
  const categoryData = categories.filter(
    (category) => category.category === Category
  );
  return (
    <div>
      {Category ? (
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
      ) : (
        <StartScreen></StartScreen>
      )}
    </div>
  );
};

export default Home;
