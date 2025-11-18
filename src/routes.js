import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import RecipeDetail from './views/RecipeDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: Signup },
  { path: '/recipe/:id', component: RecipeDetail },
]

export default routes;