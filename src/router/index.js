import { createRouter, createWebHistory } from 'vue-router'
import AddCheque from '../views/AddChequeView.vue'
import AddPeople from '../views/AddPeopleView.vue'
import ShowResults from '../views/ShowResultsView.vue'
import HomePage from '../views/HomeView.vue'


const routes = [
  {
    path: '/cheque',
    name: 'cheque',
    component: AddCheque
  },
  {
    path: '/people',
    name: 'people',
    component: AddPeople
  },
  {
    path: '/results',
    name: 'results',
    component: ShowResults
  },
  {
    path: '',
    name: 'home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
