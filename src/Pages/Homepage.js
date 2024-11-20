import React from "react";
import "../Styles/Homepage.css";

import car1 from "../Images/carousel1.jpg";
import car2 from "../Images/carousel2.jpg";
import car3 from "../Images/carousel3.jpg";
import img1 from "../Images/breakfast.jpg";
import img2 from "../Images/maincourse.jpg";
import img3 from "../Images/desert.jpg";
import img4 from "../Images/snacks.jpg";
import img5 from "../Images/drinks.jpg";
import img6 from "../Images/soupssandwiches.jpg";

import CategoryCard from "../Components/CategoryCard";
import RecipeCard from "../Components/RecipeCard";
// import RecipessCard from "../Components/RecipessCard";

export default function Homepage() {
  return (
    <div>
      {/* First Section */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ backgroundImage: `url(${car1})` }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text">Start Your Day Right</h5>
              <p className="description">
                Discover delicious breakfast recipes to fuel your mornings. From
                hearty classics to light bites, find the perfect start to your
                day!
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ backgroundImage: `url(${car2})` }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text">Savor Every Bite</h5>
              <p className="description">
                Indulge in main course dishes that bring the flavors of the
                world to your table. Whether you're craving something spicy,
                savory, or sweet, we’ve got you covered
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ backgroundImage: `url(${car3})` }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text">Treat Yourself</h5>
              <p className="description">
                Satisfy your sweet tooth with decadent desserts. Explore a
                variety of recipes, from creamy classics to unique treats
                that’ll have you coming back for more.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Categories Component */}
      <div className="container-fluid py-3 Categories-Component">
        <div className="row">
          <>
            <h1 className="fw-bold text-center my-4">
              What Will You Cook Next?{" "}
            </h1>
            <CategoryCard img={img1} title="Breakfast" link='/Breakfast' />
            <CategoryCard img={img2} title="Main Course" />
            <CategoryCard img={img3} title="Desert" />
            <CategoryCard img={img4} title="Snacks" />
            <CategoryCard img={img5} title="Drinks" link='/Drinks' />
            <CategoryCard img={img6} title="Sandwiches" link='/Sandwiches' />
          </>
        </div>
      </div>

      {/* Top Recipes */}
      <div
        className="Top-Recipes d-flex flex-wrap py-4 "
        style={{ background: "#F0C1E1" }}
      >
        <div>
          <h1 className="fw-bold top">TOP RECIPES</h1>
          {/* <RecipeCard /> */}
          <RecipeCard/>
        </div>
      </div>
    </div>
  );
}
