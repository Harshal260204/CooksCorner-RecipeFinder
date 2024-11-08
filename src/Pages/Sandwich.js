import React from 'react'
import grilledVegetableSandwich from '../Images/grilledVegSandwich.jpg'
import paneerTikkaSandwich from '../Images/paneertikkasandwich.jpg'
import avocadoEggSandwich from '../Images/avacadoEggSandwich.jpg'
import chickenCaesarSandwich from '../Images/chickenCeaserSandwich.jpg'
import capreseSandwich from '../Images/CapreseSandwich.jpeg'
import chickenAvocadoSandwich from '../Images/ChickenAvocadoSandwich.jpg'
import spicyChickenSandwich from '../Images/spicyChickenSandwich.png'
import chickpeaSaladSandwich from '../Images/chickpeaSaladSandwich.jpg'
import eggSpinachSandwich from '../Images/eggSpinachSandwich.jpg'
import bbqChickenSandwich from '../Images/bbqChickenSandwich.jpg'
import yogurtCucumberSandwich from '../Images/yogurtCucumberSandwich.jpg'
import falafelPitaSandwich from '../Images/falafelPitaSandwich.jpg'

export default function Sandwich() {
    const sandwichRecipes = [
        {
          id: 1,
          name: "Grilled Vegetable Sandwich",
          description: "A healthy sandwich filled with grilled zucchini, bell peppers, and eggplant, topped with basil pesto.",
          img: grilledVegetableSandwich,
          detailedRecipe: `
            1. Slice zucchini, bell peppers, and eggplant, then grill until soft.
            2. Spread basil pesto on bread slices, layer with grilled veggies, and top with cheese if desired.
            3. Grill the sandwich until golden and serve warm.
          `,
          type: "Veg"
        },
        {
          id: 2,
          name: "Paneer Tikka Sandwich",
          description: "Spicy grilled paneer with a touch of Indian spices, perfect for a quick and tasty bite.",
          img: paneerTikkaSandwich,
          detailedRecipe: `
            1. Marinate paneer cubes with yogurt, turmeric, red chili powder, and garam masala for 15 minutes.
            2. Grill paneer until golden, then place on bread slices with onions, tomatoes, and green chutney.
            3. Toast the sandwich until crisp and serve hot.
          `,
          type: "Veg"
        },
        {
          id: 3,
          name: "Avocado and Egg Sandwich",
          description: "A creamy avocado and scrambled egg sandwich that's both nutritious and delicious.",
          img: avocadoEggSandwich,
          detailedRecipe: `
            1. Mash avocado and season with salt and pepper.
            2. Scramble eggs and spread on bread slices, then add mashed avocado.
            3. Serve with a sprinkle of herbs or a slice of cheese, if desired.
          `,
          type: "Non-Veg"
        },
        {
          id: 4,
          name: "Chicken Caesar Sandwich",
          description: "A creamy Caesar dressing with grilled chicken and lettuce for a tasty, filling sandwich.",
          img: chickenCaesarSandwich,
          detailedRecipe: `
            1. Grill chicken breast and slice thinly.
            2. Mix Caesar dressing with shredded lettuce, then layer chicken and lettuce on bread.
            3. Toast the sandwich lightly and serve warm.
          `,
          type: "Non-Veg"
        },
        {
          id: 5,
          name: "Caprese Sandwich",
          description: "A classic Italian sandwich with fresh mozzarella, tomato, and basil.",
          img: capreseSandwich,
          detailedRecipe: `
            1. Layer fresh mozzarella, tomato slices, and basil leaves on bread.
            2. Drizzle with olive oil and balsamic glaze, and toast if desired.
            3. Serve warm or cold.
          `,
          type: "Veg"
        },
        {
          id: 6,
          name: "Chicken Avocado Sandwich",
          description: "A nutritious sandwich with sliced grilled chicken, creamy avocado, and fresh greens.",
          img: chickenAvocadoSandwich,
          detailedRecipe: `
            1. Grill chicken breast, then slice thinly.
            2. Spread mashed avocado on bread, layer with chicken slices, and add lettuce.
            3. Serve with a sprinkle of salt and pepper.
          `,
          type: "Non-Veg"
        },
        {
          id: 7,
          name: "Spicy Chicken Sandwich",
          description: "A zesty, spiced-up chicken sandwich with a blend of herbs and spices.",
          img: spicyChickenSandwich,
          detailedRecipe: `
            1. Marinate chicken breast in chili powder, cumin, and garlic, then grill.
            2. Spread a spicy mayo on bread, layer with chicken, and add pickles and lettuce.
            3. Toast the sandwich for extra flavor.
          `,
          type: "Non-Veg"
        },
        {
          id: 8,
          name: "Chickpea Salad Sandwich",
          description: "A refreshing chickpea salad with crunchy veggies, perfect for a vegan sandwich.",
          img: chickpeaSaladSandwich,
          detailedRecipe: `
            1. Mash cooked chickpeas with chopped celery, carrots, onions, and vegan mayo.
            2. Season with salt, pepper, and a dash of lemon juice.
            3. Spread on bread slices and serve with lettuce and tomato.
          `,
          type: "Veg"
        },
        {
          id: 9,
          name: "Egg and Spinach Sandwich",
          description: "A protein-packed sandwich with scrambled eggs and sautéed spinach.",
          img: eggSpinachSandwich,
          detailedRecipe: `
            1. Sauté spinach with garlic until wilted.
            2. Scramble eggs and layer on bread with spinach.
            3. Top with cheese if desired, then toast until golden.
          `,
          type: "Non-Veg"
        },
        {
          id: 10,
          name: "BBQ Chicken Sandwich",
          description: "Tender BBQ chicken with coleslaw in a hearty sandwich, packed with smoky flavor.",
          img: bbqChickenSandwich,
          detailedRecipe: `
            1. Cook shredded chicken in BBQ sauce until tender.
            2. Layer chicken on bread, top with coleslaw, and close with another slice.
            3. Serve warm for a delicious, filling meal.
          `,
          type: "Non-Veg"
        },
        {
          id: 11,
          name: "Greek Yogurt and Cucumber Sandwich",
          description: "A refreshing sandwich with creamy Greek yogurt and cucumber slices.",
          img: yogurtCucumberSandwich,
          detailedRecipe: `
            1. Mix Greek yogurt with chopped cucumbers, salt, and pepper.
            2. Spread on bread and top with fresh herbs.
            3. Serve as a light and cooling sandwich.
          `,
          type: "Veg"
        },
        {
          id: 12,
          name: "Falafel Pita Sandwich",
          description: "A Middle Eastern sandwich with falafel, veggies, and tahini sauce in pita bread.",
          img: falafelPitaSandwich,
          detailedRecipe: `
            1. Fill pita bread with falafel, lettuce, tomato, and cucumber.
            2. Drizzle with tahini sauce and add herbs for extra flavor.
            3. Serve warm or cold.
          `,
          type: "Veg"
        }
      ];

      return (
        <div className="d-flex flex-wrap justify-content-center">
          {sandwichRecipes.map((recipe) => (
            <div className="card m-2" style={{ width: "18rem" }} key={recipe.id}>
              <img
                src={recipe.img}
                className="card-img-top"
                alt={recipe.name}
              />
              <div className="card-body">
                <h5 className="RecipeName">{recipe.name}</h5>
                <h6 className="RecipeType">{recipe.type}</h6>
                <p className="card-text">{recipe.description}</p>
                <a href="#" className="btn btn-primary">
                  View Detailed Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      );
}
