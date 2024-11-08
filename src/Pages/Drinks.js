import React from 'react'

export default function Drinks() {
    const Drinks = [
        {
          id: 0,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "New Territories",
          description: "A delightful kit for making authentic Hong Kong-style boba tea at home.",
          detailedRecipe: `
            1. Boil water and steep black tea for 5 minutes.
            2. Add tapioca pearls to boiling water and cook until they become translucent.
            3. Mix the brewed tea with milk and sweeten to taste.
            4. Combine the cooked tapioca pearls with the tea mixture.
            5. Serve over ice and enjoy your homemade boba tea!
          `,
          type: "Drinks"
        },
        {
          id: 1,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Guy Fieri",
          description: "A party-ready margarita kit crafted by celebrity chef Guy Fieri.",
          detailedRecipe: `
            1. Pour the margarita mix into a shaker with ice.
            2. Add tequila to taste and shake well.
            3. Rim your glass with salt if desired.
            4. Strain the mixture into the prepared glass filled with ice.
            5. Garnish with a lime wedge and enjoy!
          `,
          type: "Drinks"
        },
        {
          id: 2,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Woodford Reserve",
          description: "A premium mint julep syrup that adds a touch of sophistication to your cocktails.",
          detailedRecipe: `
            1. In a glass, muddle fresh mint leaves with sugar syrup.
            2. Fill the glass with crushed ice.
            3. Pour in bourbon and stir gently.
            4. Garnish with a mint sprig.
            5. Serve chilled and enjoy the classic flavor!
          `,
          type: "Drinks"
        },
        {
          id: 3,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Franco's Hurricane Mix",
          description: "An authentic New Orleans hurricane mix for a refreshing and fruity cocktail experience.",
          detailedRecipe: `
            1. In a shaker, combine the hurricane mix with rum.
            2. Fill the shaker with ice and shake well.
            3. Strain into a hurricane glass filled with ice.
            4. Garnish with a slice of orange and a cherry.
            5. Enjoy the vibrant flavors of New Orleans!
          `,
          type: "Drinks"
        },
        {
          id: 4,
          img: "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Evan Williams",
          description: "Gourmet mint julep mix that transforms your bourbon into a classic southern delight.",
          detailedRecipe: `
            1. Mix the mint julep mix with bourbon in a glass.
            2. Fill the glass with crushed ice.
            3. Stir gently to combine.
            4. Garnish with fresh mint leaves.
            5. Enjoy the refreshing taste of a mint julep!
          `,
          type: "Drinks"
        },
        {
          id: 5,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132643/margarita-mix.bd48a000d589d3147b14790af3c33fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Johnny Sanchez",
          description: "A bold margarita mix that captures the essence of authentic Mexican flavors.",
          detailedRecipe: `
            1. Combine the margarita mix with tequila and triple sec in a shaker.
            2. Fill with ice and shake until chilled.
            3. Strain into a salted glass filled with ice.
            4. Garnish with a lime wheel.
            5. Serve and savor the taste of Mexico!
          `,
          type: "Drinks"
        },
        {
          id: 6,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133235/woodford-reserve-mint-julep-syrup-2-pack.0ac76063f151988113cbaabd0eaa829f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Woodford Reserve",
          description: "A two-pack of premium mint julep syrup for cocktail enthusiasts.",
          detailedRecipe: `
            1. Muddle mint leaves in a glass.
            2. Add syrup and bourbon, then fill with crushed ice.
            3. Stir gently to combine.
            4. Garnish with a sprig of mint.
            5. Enjoy a classic mint julep experience!
          `,
          type: "Drinks"
        },
        {
          id: 7,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92899/evan-williams-gourmet-mint-julep-mix.c90e8c3ed5ac0dc1c85139e6b7b8521c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Evan Williams",
          description: "Gourmet mint julep mix for a refreshing and classic cocktail.",
          detailedRecipe: `
            1. In a glass, combine the mint julep mix with bourbon.
            2. Fill the glass with crushed ice.
            3. Stir gently to mix.
            4. Garnish with a mint sprig.
            5. Serve chilled and enjoy!
          `,
          type: "Drinks"
        },
        {
          id: 8,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132264/knock-you-naked-strawberry-margarita-mix.c51ce9329ab84709e5b1d3d474cbb7e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Fat Mama's Tamales",
          description: "A flavorful strawberry margarita mix that adds a fruity twist to your cocktails.",
          detailedRecipe: `
            1. Combine the margarita mix with tequila in a shaker.
            2. Fill with ice and shake well.
            3. Strain into a glass filled with ice.
            4. Garnish with fresh strawberries.
            5. Enjoy your refreshing strawberry margarita!
          `,
          type: "Drinks"
        },
        {
          id: 10,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134437/organic-shots-bundle-12-pack.73d62cee42bd9a0c561331b2806e3ac0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Juice Press",
          description: "A bundle of organic juice shots packed with nutrients and flavor.",
          detailedRecipe: `
            1. Shake the juice shot well before opening.
            2. Pour into a glass and enjoy chilled.
            3. Combine different shots for unique flavor combinations.
            4. Use as a morning boost or mid-day refreshment.
            5. Experience the health benefits with every sip!
          `,
          type: "Drinks"
        },
        {
          id: 11,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Papaya King",
          description: "A tropical drink that brings the flavors of the Caribbean to your glass.",
          detailedRecipe: `
            1. Mix the papaya drink with water or soda for a refreshing beverage.
            2. Serve over ice with a slice of lime.
            3. Garnish with fresh fruit if desired.
            4. Enjoy on a hot day for a tropical escape.
            5. Perfect for summer parties!
          `,
          type: "Drinks"
        },
        {
          id: 13,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132626/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "New Territories",
          description: "A fun and colorful milkshake kit perfect for a sweet treat.",
          detailedRecipe: `
            1. Blend milk with ice cream and milkshake mix until smooth.
            2. Pour into glasses and top with whipped cream.
            3. Add colorful sprinkles and candies as toppings.
            4. Serve immediately for a delightful dessert drink.
            5. Enjoy with friends or family for a festive occasion!
          `,
          type: "Drinks"
        },
        {
          id: 14,
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134437/organic-shots-bundle-12-pack.73d62cee42bd9a0c561331b2806e3ac0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Old Honey Barn",
          description: "A unique honey-based drink syrup that can be used in various beverages.",
          detailedRecipe: `
            1. Mix the honey syrup with hot water for a soothing drink.
            2. Add lemon juice for a refreshing honey lemonade.
            3. Drizzle over iced tea for a sweet twist.
            4. Use in cocktails for added flavor.
            5. Enjoy the sweet taste of honey in every sip!
          `,
          type: "Drinks"
        }
      ]
      
      return (
        <div className="d-flex flex-wrap justify-content-center">
            {Drinks.map((Drink) => (
                <div className="card m-2" style={{ width: "18rem" }} key={Drink.id}>
                    <img src={Drink.img} className="card-img-top" alt={Drink.name} />
                    <div className="card-body">
                        <h5 className="RecipeName">{Drink.name}</h5>
                        <h6 className="RecipeType">{Drink.type}</h6>
                        <p className="card-text">{Drink.description}</p>
                        <a href="#" className="btn btn-primary">
                            View Detailed Recipe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
