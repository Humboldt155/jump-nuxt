import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({

    state: {
      products: [],
      modelId: '',
      model: [],
      modelOPUS: [],
      models: [],
    },

    mutations: {
      setModel(state, model) {
      },
      setModelId(state, modelId) {
        state.modelId = modelId
      },
      setProducts(state, products) {
        state.products = products
      },
      setModelOPUS(state, modelOPUS) {
        state.modelOPUS = modelOPUS
      }
    },

    actions: {
      setModel(vuexContext, model) {
        vuexContext.commit('setModel', model)
      },
      setModelId(vuexContext, modelId) {
        vuexContext.commit('setModelId', modelId)
      },
      setProducts(vuexContext, products) {
        vuexContext.commit('setProducts', products)
      },
      setModelOPUS(vuexContext, ModelOPUS) {
        vuexContext.commit('setModelOPUS', ModelOPUS)
      }
    },

    getters: {
      model(state) {
        return state.model
      },
      products(state) {
        return state.products
      },
      modelId(state) {
        return state.modelId
      },
      modelOPUS(state) {
        return state.modelOPUS
      }
    }
  })
}

export default createStore
