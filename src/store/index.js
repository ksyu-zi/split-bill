import { createStore } from 'vuex'
import people from './modules/people'
import cheque from './modules/cheque'

export default createStore({
  modules: {
    people,
    cheque
  }
})
