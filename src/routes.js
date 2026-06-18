import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import RecipeDetail from './views/RecipeDetail.vue';
import Login from './views/Login.vue';
import UserPersonalInfo from './views/UserPersonalInfo.vue';
import UserFavoritedRecipes from './views/UserFavoritedRecipes.vue';
import UserMyRecipes from './views/UserMyRecipes.vue';
import UserAddRecipe from './views/UserAddRecipe.vue';
import UserEditRecipe from './views/UserEditRecipe.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/recipe/:id', component: RecipeDetail },
  { path: '/user', component: UserPersonalInfo },
  { path: '/user/favorite-recipes', component: UserFavoritedRecipes },
  { path: '/user/my-recipes', component: UserMyRecipes },
  { path: '/user/add-recipe', component: UserAddRecipe },
  { path: '/user/recipe/:id', component: UserEditRecipe }
]

export default routes;