import { createRouter, createWebHistory } from 'vue-router'
import AddCheque from '../views/AddChequeView.vue'
import AddPeople from '../views/AddPeopleView.vue'
import Results from '../views/ResultsView.vue'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/cheque',
    component: AddCheque
  },
  {
    path: '/people',
    component: AddPeople
  },
  {
    path: '/results',
    component: Results
  },
  {
    path: '',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
