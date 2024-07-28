export default {
  state: {
    cheque: []
  },
  getters: {
    getCheque: state => {
      return state.cheque;
    },
    total: state => {
      let res = 0;
      for (let i = 0; i < state.cheque.length; i++) {
        res += +state.cheque[i].price;
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
