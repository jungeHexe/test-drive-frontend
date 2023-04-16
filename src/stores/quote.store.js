export const quoteStore = {
    state:  () => ({
        quote: localStorage.getItem('quote'),
    }),
    mutations: {
        setQuote(state, payload) {
            localStorage.setItem('quote', payload);
        },
    },
    actions: {
        setQuote(state, payload) {
            state.commit('setQuote', payload);
        },
    },
    getters: {
        getQuote(state) {
            return JSON.parse(state.quote);
        },
    },

};
