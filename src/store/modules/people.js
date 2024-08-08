export default {
  namespaced: true,
  state: {
    people: [],
    validName: /^([a-z]+|[а-яё]+)(\s([a-z]+|[а-яё]+)){0,2}$/i
  },
  getters: {
    getPeople: state => {
      return state.people;
    },
    getName: (state) => (id) => {
      return state.people.find(person => person.id == id).name;
    },
    getValidName: (state) => {
      return state.validName; 
    },
    getBtnDisabled: (state) => {
      if (state.people.length >= 2) {
        for (let i = 0; i < state.people.length; i++) {
          if (state.people[i].name === '') {
            return true;
          } else if (!state.validName.test(state.people[i].name)) {
            return true;
          }
        }
        return false;
      }
      return true;
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
