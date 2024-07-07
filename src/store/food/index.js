import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: [
    {
      id: 1,
      text: "Crispy Crouton Salad",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWoAOWKlHD-TZW2ZcfKgNGDV8z1olV25y9A&s",
      favCount: 152300,
      calorieValue: 300,
      cookingTime: 30,
    },
    {
      id: 2,
      text: "Pancake with Yoghurt",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-nC9f-oC0KpAkjTsnVXwWTgxj3DRiTkjIQ&s",
      favCount: 15000,
      calorieValue: 400,
      cookingTime: 30,
    },
    {
      id: 3,
      text: "Cranberry Spinach Salad",
      imgSrc:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/11/spinach-salad.jpg",
      favCount: 112530,
      calorieValue: 450,
      cookingTime: 30,
    },
    {
      id: 4,
      text: "Crispy and Creamy Doughnuts",
      imgSrc:
        "https://miro.medium.com/v2/resize:fit:768/0*skBgQKEWZGvpqTfv.jpg",
      favCount: 15300,
      calorieValue: 600,
      cookingTime: 30,
    },
    {
      id: 4,
      text: "Crispy and Creamy Doughnuts",
      imgSrc:
        "https://miro.medium.com/v2/resize:fit:768/0*skBgQKEWZGvpqTfv.jpg",
      favCount: 10400,
      calorieValue: 600,
      cookingTime: 30,
    },
  ],
};

const food = createSlice({
  name: "food",
  initialState,
});
export default food.reducer;
