export default {
  state: {
    people: []
  },
  getters: {
    getPeople: state => {
      return state.people;
    },
    getName: (state) => (id) => {
      return state.people.find(person => person.id == id).name;
    }
  },
  mutations: {
    addPeople: (state) => {
      state.people.push({ id: Date.now(), name: '' });
    },
    delPeople: (state, id) => {
      state.people = state.people.filter(item => item.id !== id);
    },
    delAllPeople: (state) => {
      state.people = [];
    }
  }
}
