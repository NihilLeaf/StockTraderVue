export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, {stockId, quantity, stockPrice}) {
            const RECORD = state.stocks.find(element => element.id == stockId)
            if(RECORD) {
                RECORD.quantity = quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, {stockId, quantity, stockPrice}) {
            const RECORD = state.stocks.find(element => element.id == stockId)
            if (RECORD.quantity > quantity) {
                RECORD.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(RECORD), 1)
            }
            state.funds += stockPrice * quantity
        }
    },
    actions: {
        sellStock({commit}, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const RECORD = getters.stocks.find(e => e.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: RECORD.name,
                    price: RECORD.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}