import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useRecipeStore = defineStore("recipe", () => {
  // state
  const recipes = ref([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      image: "/images/spaghetti-carbonara.jpg",
      category: "Dinner",
      createdBy: "Luigi",
      ingredients: [
        "200g spaghetti",
        "100g pancetta",
        "2 large eggs",
        "50g grated Parmesan cheese",
        "1 clove garlic (optional)",
        "Salt and black pepper",
      ],
      directions: [
        "Cook spaghetti until al dente.",
        "Fry pancetta until crispy.",
        "Whisk eggs and Parmesan together.",
        "Combine pasta with pancetta and remove from heat.",
        "Quickly stir in egg mixture until creamy.",
        "Season with pepper and serve immediately.",
      ],
      prepTime: "10 minutes",
      cookTime: "15 minutes",
      totalTime: "25 minutes",
      createdAt: "2025-01-01T10:00:00Z",
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description:
        "Chunks of grilled chicken enveloped in a creamy spiced tomato sauce.",
      image: "/images/chicken-tikka-masala.jpg",
      category: "Breakfast",
      createdBy: "Ayesha",
      ingredients: [
        "500g chicken breast",
        "1 cup yogurt",
        "2 tbsp tikka masala spice mix",
        "400g tomato sauce",
        "1 onion, chopped",
        "200ml heavy cream",
        "Garlic and ginger paste",
        "Salt and cooking oil",
      ],
      directions: [
        "Marinate chicken in yogurt and spices.",
        "Grill or pan-sear chicken pieces.",
        "Sauté onions, garlic, and ginger.",
        "Add tomato sauce and simmer.",
        "Stir in grilled chicken and cream.",
        "Cook until sauce thickens and serve hot.",
      ],
      prepTime: "20 minutes",
      cookTime: "30 minutes",
      totalTime: "50 minutes",
      createdAt: "2025-02-10T09:30:00Z",
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      description:
        " A quick and healthy mix of fresh vegetables sautéed in a savory sauce.",
      image: "/images/vegetable-stir-fry.jpg",
      category: "Lunch",
      createdBy: "Chen",
      ingredients: [
        "1 cup broccoli florets",
        "1 bell pepper, sliced",
        "1 carrot, sliced",
        "1 cup snap peas",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 clove garlic, minced",
        "Salt and pepper",
      ],
      directions: [
        "Heat oil in a pan.",
        "Stir-fry vegetables until tender-crisp.",
        "Add soy sauce and garlic.",
        "Toss to combine and cook briefly.",
        "Serve over rice or noodles.",
      ],
      prepTime: "10 minutes",
      cookTime: "10 minutes",
      totalTime: "20 minutes",
      createdAt: "2025-03-05T12:15:00Z",
    },
    {
      id: 4,
      title: "Beef Tacos",
      description:
        "Seasoned ground beef served in crispy taco shells with fresh toppings.",
      image: "/images/beef-tacos.jpg",
      category: "Dinner",
      createdBy: "Maria",
      ingredients: [
        "250g ground beef",
        "1 packet taco seasoning",
        "6 taco shells",
        "1 tomato, diced",
        "Shredded lettuce",
        "Cheddar cheese",
        "Sour cream",
      ],
      directions: [
        "Cook ground beef with taco seasoning.",
        "Warm taco shells in oven.",
        "Fill shells with beef and toppings.",
        "Serve immediately while warm.",
      ],
      prepTime: "10 minutes",
      cookTime: "15 minutes",
      totalTime: "25 minutes",
      createdAt: "2025-04-18T18:00:00Z",
    },
  ]);

  // getters
  const getRecipeById = computed(() => {
    return (id) => recipes.value.find(recipe => recipe.id === id)
  });

  // actions

  return {
    recipes,
    getRecipeById,
  };
});
