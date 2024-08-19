const loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('people'));
}

export default {
  namespaced: true,
  state: {
    people: loadFromLocalStorage() || [],
    validNameReg: /^([a-z]+|[а-яё]+)(\s([a-z]+|[а-яё]+)){0,2}$/i
  },
  getters: {
    getName: (state) => (id) => {
      return state.people.find(person => person.id == id).name;
    },
    getBtnDisabled: (state) => {
      if (state.people.length >= 2) {
        for (let i = 0; i < state.people.length; i++) {
          if (state.people[i].name === '') {
            return true;
          } else if (!state.validNameReg.test(state.people[i].name)) {
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
  },
  actions: {
    saveToLocalStorage: ({state}) => {
      localStorage.setItem('people', JSON.stringify(state.people));
    }
  }
}
