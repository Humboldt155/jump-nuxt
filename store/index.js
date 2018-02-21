import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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

export const store = new Vuex.Store({
  state: {
    model_selected: 'MOD_200767',
    models: [],
    lm_codes: [],
    models_adeo: [],
    urlOpusChosen: urlsOpus[urlNumber - 1].url
  },
  getters: {
  },
  mutations: {
    setModels (state, modelInserted) {
      axios.get(urlJump.concat('models/'), {
        params: {
          id: modelInserted
        }
      })
        .then(response => {
          state.models = response.data
        })
        .catch(e => {
          state.errors.push(e)
        })
      state.model_selected = modelInserted
    },
    setLmCodes (state, model) {
      axios.get(urlJump.concat('lm_codes/'), {
        params: {
          model: model
        }
      })
        .then(response => {
          state.lm_codes = response.data
        })
        .catch(e => {
          state.errors.push(e)
        })
    },
    setModelsAdeo (state) {
      axios.get(state.urlOpusChosen.concat('business/v2/products?pageSize=100&startFrom=1&mask=Characteristics'),
        { headers: {
          'Authorization': Authorisation,
          'X-Opus-Publish-Status': 'published'
        }
        })
        .then(response => {
          state.models_adeo = response.data
        })
        .catch(e => {
          state.errors.push(e)
        })
    }
  },
  actions: {
  }
})
