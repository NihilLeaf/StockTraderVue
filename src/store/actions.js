import Vue from 'vue'

export default {
    loadData({commit}) {
        Vue.prototype.$http('data.json').then(res => {
            const DATA = res.data
            if (DATA) {
                commit('setStocks', DATA.stocks)
                commit('setPortfolio', {
                    funds: DATA.funds,
                    stockPortfolio: DATA.stockPortfolio
                })
            }
        })
    }
}