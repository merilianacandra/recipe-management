import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import RecipeDetail from './views/RecipeDetail.vue';
import Login from './views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: Signup },
  { path: '/recipe/:id', component: RecipeDetail },
  { path: '/login', component: Login },

]

export default routes;