import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useRecipeStore = defineStore("recipe", () => {
  // state
  const recipes = ref([
    {
      id: 1,
      category: "Dinner",
      title: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      image: "public/images/spaghetti-carbonara.jpg",
      createdBy: "Luigi",
    },
    {
      id: 2,
      category: "Breakfast",
      title: "Chicken Tikka Masala",
      description:
        "Chunks of grilled chicken enveloped in a creamy spiced tomato sauce.",
      image: "public/images/chicken-tikka-masala.jpg",
      createdBy: "Ayesha",
    },
    {
      id: 3,
      category: "Lunch",
      title: "Vegetable Stir Fry",
      description:
        "A quick and healthy mix of fresh vegetables sautéed in a savory sauce.",
      image: "public/images/vegetable-stir-fry.jpg",
      createdBy: "Chen",
    },
    {
      id: 4,
      category: "Dinner",
      title: "Beef Tacos",
      description:
        "Seasoned ground beef served in crispy taco shells with fresh toppings.",
      image: "public/images/beef-tacos.jpg",
      createdBy: "Maria",
    },
  ]);

  // getters

  // actions
  

  return {
    recipes
  }
});
