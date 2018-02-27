import Vuex from 'vuex'
import axios from 'axios'

const urlJump = 'http://humboldt155.pythonanywhere.com/api/'

const urlsOpus = [
  {'id': 'Test_RMS', 'url': 'http://rrulmcoopuc01.int.adeo.com/'},
  {'id': 'PreProd_RMS', 'url': 'https://awebtopdata.lmru.opus.adeo.com:5000/'},
  {'id': 'Prod_RMS', 'url': 'hhttps://webtopdata.lmru.opus.adeo.com:5000/'},
  {'id': 'Test_STEP', 'url': 'https://rrulmcoopuc11.int.adeo.com:3000/'},
  {'id': 'Opus_STEP_PreProd', 'url': 'https://awebtopdata2.lmru.opus.adeo.com:5000/'},
  {'id': 'Opus_STEP_Prod', 'url': 'https://webtopdata2.lmru.opus.adeo.com:5000/'}
]

const urlNumber = 1

const Authorisation = 'Basic d2lrZW86b2VraXc'

const createStore = () => {
  return new Vuex.Store({
    state: {
      modelId: '',
      model: [],
      models: [],
      products: [],
      urlOpusChosen: urlsOpus[urlNumber - 1].url
    },
    mutations: {
      setModel(state, model) {
          state.model = model
        // axios.get(urlJump.concat('models/'), {
        //   params: {
        //     id: modelId
        //   }
        // })
        //   .then(response => {
        //     state.model = response.data
        //   })
        //   .catch(e => {
        //     state.errors.push(e)
        //   })
      },
      setModelId(state, modelId) {
        state.modelId = modelId
      },
      setProducts(state, products) {
        state.products = products
      },
    },
    actions: {
      setModel(vuexContext, modelId) {
        vuexContext.commit('setModel', modelId)
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
        return state.products
      }
    }
  })
}

export default createStore
