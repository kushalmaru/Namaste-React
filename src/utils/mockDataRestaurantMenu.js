// const restaurant_menu = [
//     {
//       "restaurant_id": 1,
//       "name": "Koshy's",
//       "cuisine": "Indian",
//       "menu": [
//         {
//           "dish_name": "Roast Chicken",
//           "description": "Slow-roasted chicken with Indian spices, served with mint chutney.",
//           "price": 450,
//           "availability": true
//         },
//         {
//           "dish_name": "Kerala Pork",
//           "description": "Traditional Kerala-style pork fry with coconut and spices.",
//           "price": 500,
//           "availability": true
//         },
//         {
//           "dish_name": "Fish Biryani",
//           "description": "Delicious basmati rice cooked with marinated fish and Indian spices.",
//           "price": 400,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 2,
//       "name": "Vidyarthi Bhavan",
//       "cuisine": "South Indian",
//       "menu": [
//         {
//           "dish_name": "Masala Dosa",
//           "description": "Crispy dosa filled with spiced potato masala, served with coconut chutney and sambar.",
//           "price": 70,
//           "availability": true
//         },
//         {
//           "dish_name": "Rava Idli",
//           "description": "Soft idlis made from rava (semolina), served with chutney and sambar.",
//           "price": 50,
//           "availability": true
//         },
//         {
//           "dish_name": "Filter Coffee",
//           "description": "Authentic South Indian filter coffee brewed to perfection.",
//           "price": 30,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 3,
//       "name": "Sushi Zen",
//       "cuisine": "Japanese",
//       "menu": [
//         {
//           "dish_name": "Salmon Nigiri",
//           "description": "Fresh salmon slices on seasoned sushi rice.",
//           "price": 650,
//           "availability": true
//         },
//         {
//           "dish_name": "Tuna Sashimi",
//           "description": "Thinly sliced fresh tuna served with soy sauce and wasabi.",
//           "price": 750,
//           "availability": true
//         },
//         {
//           "dish_name": "Tempura",
//           "description": "Lightly battered and deep-fried prawns and vegetables.",
//           "price": 550,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 4,
//       "name": "La Bella Italia",
//       "cuisine": "Italian",
//       "menu": [
//         {
//           "dish_name": "Margherita Pizza",
//           "description": "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
//           "price": 600,
//           "availability": true
//         },
//         {
//           "dish_name": "Fettuccine Alfredo",
//           "description": "Creamy Alfredo sauce with fettuccine pasta, garnished with parsley.",
//           "price": 550,
//           "availability": true
//         },
//         {
//           "dish_name": "Tiramisu",
//           "description": "Layered Italian dessert with mascarpone cheese and coffee-soaked sponge cake.",
//           "price": 350,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 5,
//       "name": "Taco Fiesta",
//       "cuisine": "Mexican",
//       "menu": [
//         {
//           "dish_name": "Tacos al Pastor",
//           "description": "Soft tacos filled with marinated pork, pineapple, and fresh salsa.",
//           "price": 300,
//           "availability": true
//         },
//         {
//           "dish_name": "Guacamole",
//           "description": "Freshly made guacamole with avocados, lime, and cilantro.",
//           "price": 200,
//           "availability": true
//         },
//         {
//           "dish_name": "Churros",
//           "description": "Crispy fried dough pastries coated in cinnamon sugar.",
//           "price": 150,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 6,
//       "name": "Burgers & Co.",
//       "cuisine": "American",
//       "menu": [
//         {
//           "dish_name": "Cheeseburger",
//           "description": "Juicy beef patty topped with cheddar cheese, lettuce, and tomato.",
//           "price": 400,
//           "availability": true
//         },
//         {
//           "dish_name": "BBQ Ribs",
//           "description": "Tender pork ribs glazed with a smoky BBQ sauce.",
//           "price": 650,
//           "availability": true
//         },
//         {
//           "dish_name": "Milkshake",
//           "description": "Thick and creamy milkshakes in chocolate, vanilla, or strawberry.",
//           "price": 200,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 7,
//       "name": "Café de Paris",
//       "cuisine": "French",
//       "menu": [
//         {
//           "dish_name": "Croissants",
//           "description": "Flaky and buttery croissants baked fresh daily.",
//           "price": 150,
//           "availability": true
//         },
//         {
//           "dish_name": "Quiche Lorraine",
//           "description": "Savory tart filled with eggs, cream, bacon, and cheese.",
//           "price": 350,
//           "availability": true
//         },
//         {
//           "dish_name": "Escargot",
//           "description": "Delicious baked snails with garlic butter and parsley.",
//           "price": 400,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 8,
//       "name": "El Chiringuito",
//       "cuisine": "Spanish",
//       "menu": [
//         {
//           "dish_name": "Paella",
//           "description": "Traditional Spanish rice dish with seafood and saffron.",
//           "price": 800,
//           "availability": true
//         },
//         {
//           "dish_name": "Tapas",
//           "description": "An assortment of small Spanish appetizers.",
//           "price": 400,
//           "availability": true
//         },
//         {
//           "dish_name": "Churros",
//           "description": "Crispy fried dough pastries served with chocolate sauce.",
//           "price": 150,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 9,
//       "name": "Pasta House",
//       "cuisine": "Italian",
//       "menu": [
//         {
//           "dish_name": "Spaghetti Carbonara",
//           "description": "Classic Italian pasta dish with creamy egg sauce and pancetta.",
//           "price": 550,
//           "availability": true
//         },
//         {
//           "dish_name": "Lasagna",
//           "description": "Layered pasta with meat sauce, ricotta, and mozzarella.",
//           "price": 600,
//           "availability": true
//         },
//         {
//           "dish_name": "Tiramisu",
//           "description": "Traditional Italian dessert with coffee-soaked sponge and mascarpone.",
//           "price": 350,
//           "availability": true
//         }
//       ]
//     },
//     {
//       "restaurant_id": 10,
//       "name": "Dim Sum Palace",
//       "cuisine": "Chinese",
//       "menu": [
//         {
//           "dish_name": "Peking Duck",
//           "description": "Crispy roasted duck served with pancakes and hoisin sauce.",
//           "price": 800,
//           "availability": true
//         },
//         {
//           "dish_name": "Dim Sum",
//           "description": "Assortment of bite-sized Chinese dumplings and rolls.",
//           "price": 600,
//           "availability": true
//         },
//         {
//           "dish_name": "Sweet and Sour Pork",
//           "description": "Pork cooked in a tangy sweet and sour sauce.",
//           "price": 550,
//           "availability": true
//         }
//       ]
//     }
//   ];


//   export default restaurant_menu;



const restaurant_menu = [
    {
      "restaurant_id": 1,
      "name": "Koshy's",
      "cuisine": "Indian",
      "menu": {
        "recommended": [
          {
            "dish_name": "Roast Chicken",
            "description": "Slow-roasted chicken with Indian spices, served with mint chutney.",
            "price": 450,
            "availability": true
          }
        ],
        "starter": [
          {
            "dish_name": "Samosa",
            "description": "Crispy pastry filled with spiced potatoes and peas.",
            "price": 50,
            "availability": true
          }
        ],
        "main_course": [
          {
            "dish_name": "Kerala Pork",
            "description": "Traditional Kerala-style pork fry with coconut and spices.",
            "price": 500,
            "availability": true
          },
          {
            "dish_name": "Fish Biryani",
            "description": "Delicious basmati rice cooked with marinated fish and Indian spices.",
            "price": 400,
            "availability": true
          }
        ],
        "desserts": [
          {
            "dish_name": "Gulab Jamun",
            "description": "Deep-fried milk dumplings soaked in sugar syrup.",
            "price": 80,
            "availability": true
          }
        ]
      }
    },
    {
      "restaurant_id": 2,
      "name": "Vidyarthi Bhavan",
      "cuisine": "South Indian",
      "menu": {
        "recommended": [
          {
            "dish_name": "Masala Dosa",
            "description": "Crispy dosa filled with spiced potato masala, served with coconut chutney and sambar.",
            "price": 70,
            "availability": true
          }
        ],
        "starter": [
          {
            "dish_name": "Rava Idli",
            "description": "Soft idlis made from rava (semolina), served with chutney and sambar.",
            "price": 50,
            "availability": true
          }
        ],
        "main_course": [
          {
            "dish_name": "Bisibele Bath",
            "description": "Spicy South Indian rice dish with lentils and vegetables.",
            "price": 100,
            "availability": true
          }
        ],
        "desserts": [
          {
            "dish_name": "Kesari Bath",
            "description": "Sweet semolina pudding with saffron and dry fruits.",
            "price": 60,
            "availability": true
          }
        ]
      }
    },
    {
      "restaurant_id": 3,
      "name": "Sushi Zen",
      "cuisine": "Japanese",
      "menu": {
        "recommended": [
          {
            "dish_name": "Salmon Nigiri",
            "description": "Fresh salmon slices on seasoned sushi rice.",
            "price": 650,
            "availability": true
          }
        ],
        "starter": [
          {
            "dish_name": "Miso Soup",
            "description": "Traditional Japanese soup with tofu and seaweed.",
            "price": 200,
            "availability": true
          }
        ],
        "main_course": [
          {
            "dish_name": "Tuna Sashimi",
            "description": "Thinly sliced fresh tuna served with soy sauce and wasabi.",
            "price": 750,
            "availability": true
          }
        ],
        "desserts": [
          {
            "dish_name": "Mochi Ice Cream",
            "description": "Sweet rice dough filled with ice cream.",
            "price": 300,
            "availability": true
          }
        ]
      }
    },
    {
      "restaurant_id": 4,
      "name": "La Bella Italia",
      "cuisine": "Italian",
      "menu": {
        "recommended": [
          {
            "dish_name": "Margherita Pizza",
            "description": "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
            "price": 600,
            "availability": true
          }
        ],
        "starter": [
          {
            "dish_name": "Bruschetta",
            "description": "Toasted bread with tomatoes, basil, and olive oil.",
            "price": 250,
            "availability": true
          }
        ],
        "main_course": [
          {
            "dish_name": "Fettuccine Alfredo",
            "description": "Creamy Alfredo sauce with fettuccine pasta, garnished with parsley.",
            "price": 550,
            "availability": true
          }
        ],
        "desserts": [
          {
            "dish_name": "Tiramisu",
            "description": "Layered Italian dessert with mascarpone cheese and coffee-soaked sponge cake.",
            "price": 350,
            "availability": true
          }
        ]
      }
    },
    {
      "restaurant_id": 5,
      "name": "Taco Fiesta",
      "cuisine": "Mexican",
      "menu": {
        "recommended": [
          {
            "dish_name": "Tacos al Pastor",
            "description": "Soft tacos filled with marinated pork, pineapple, and fresh salsa.",
            "price": 300,
            "availability": true
          }
        ],
        "starter": [
          {
            "dish_name": "Guacamole",
            "description": "Freshly made guacamole with avocados, lime, and cilantro.",
            "price": 200,
            "availability": true
          }
        ],
        "desserts": [
          {
            "dish_name": "Churros",
            "description": "Crispy fried dough pastries coated in cinnamon sugar.",
            "price": 150,
            "availability": true
          }
        ]
      }
    },
    {
      "restaurant_id": 6,
      "name": "Burgers & Co.",
      "cuisine": "American",
      "menu": {
        "recommended": [
          {
            "dish_name": "Cheeseburger",
            "description": "Juicy beef patty topped with cheddar cheese, lettuce, and tomato.",
            "price": 400,
            "availability": true
          }
        ],
        "main_course": [
          {
            "dish_name": "BBQ Ribs",
            "description": "Tender pork ribs glazed with a smoky BBQ sauce.",
            "price": 650,
            "availability": true
          }
        ],
        "desserts": [
          {
            "dish_name": "Milkshake",
            "description": "Thick and creamy milkshakes in chocolate, vanilla, or strawberry.",
            "price": 200,
            "availability": true
          }
        ]
      }
    },
    {
      "restaurant_id": 7,
      "name": "Café de Paris",
      "cuisine": "French",
      "menu": {
        "recommended": [
          {
            "dish_name": "Croissants",
            "description": "Flaky and buttery croissants baked fresh daily.",
            "price": 150,
            "availability": true
          }
        ],
        "main_course": [
          {
            "dish_name": "Quiche Lorraine",
            "description": "Savory tart filled with eggs, cream, bacon, and cheese.",
            "price": 350,
            "availability": true
          }
        ],
        "desserts": [
          {
            "dish_name": "Escargot",
            "description": "Delicious baked snails with garlic butter and parsley.",
            "price": 400,
            "availability": true
          }
        ]
      }
    },
  ]; 

export default restaurant_menu;