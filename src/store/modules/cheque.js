export default {
  namespaced: true,
  state: {
    cheque: [],
    validName: /^([a-z]+|[а-яё]+)(\s([a-z]+|[а-яё]+)){0,}$/i
  },
  getters: {
    getCheque: (state) => {
      return state.cheque;
    },
    getValidName: (state) => {
      return state.validName;
    },
    getBtnDisabled: (state) => {
      if (state.cheque.length >= 1) {
        for (let i = 0; i < state.cheque.length; i++) {
          if (state.cheque[i].name === '' || state.cheque[i].price === null ||
              state.cheque[i].payId === null || state.cheque[i].buyersId.length === 0) {
            return true;
          } else if (!state.validName.test(state.cheque[i].name) || isNaN(state.cheque[i].price) || state.cheque[i].price === 0) {
            return true;
          }
        }
        return false;
      }
      return true;
    },
    total: state => {
      let res = 0;
      for (let i = 0; i < state.cheque.length; i++) {
        if (state.cheque[i].price) {
          res += +state.cheque[i].price;
        }
      }
      return res;
    },
    calcWHoToWhom: (state) => {
      let res = {};
      let debtors;
      
      state.cheque.forEach(item => {
        const { price, payId, buyersId } = item;
        const debt = +(price / buyersId.length).toFixed(2);

        if (!res[payId]) {
          debtors = {};
        } else {
          debtors = res[payId];
        }
        
        buyersId.forEach(buyerId => {
          if (buyerId !== payId) {
            if (!debtors[buyerId]) {
              debtors[buyerId] = debt;
            } else {
              debtors[buyerId] += debt;
            }
          }
        });

        res[payId] = debtors;
      });

      for (let payId in res) {
        for (let debtorId in res[payId]) {
          if (res[debtorId]) {
            if (res[debtorId][payId]) {
              if (res[payId][debtorId] < res[debtorId][payId]) {
                res[debtorId][payId] -= res[payId][debtorId];
                delete res[payId][debtorId];
              } else {
                res[payId][debtorId] -= res[debtorId][payId];
                if (res[payId][debtorId] === 0) {
                  delete res[payId][debtorId];
                }
                delete res[debtorId][payId];
              }
            }
          }
        }
      }
      return res;
    }
  },
  mutations: {
    addCheque: (state) => {
      state.cheque.push({ 
        id: Date.now(),
        name: '',
        price: null,
        payId: null,
        buyersId: []
      });
    },
    delCheque: (state, id) => {
      state.cheque = state.cheque.filter(item => item.id !== id);
    },
    delAllCheque: (state) => {
      state.cheque = [];
    }
  }
}
