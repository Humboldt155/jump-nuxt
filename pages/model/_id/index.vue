<template>
  <div>
    <b-container>
          <h1 class="title is-3">{{ modelOPUS.displayName }}</h1>
    </b-container>
    <b-container>
      <b-tabs>
        <b-tab title="Мастер-данные" active>
          <jump-model-table></jump-model-table>
        </b-tab>
        <b-tab title="Комплементы" >
          <!--<jump-complements></jump-complements>-->
        </b-tab>
        <b-tab title="Аналоги" disabled>
          <!--<jump-analogs></jump-analogs>-->
        </b-tab>
        <b-tab title="Состав" disabled>
          <!--<jump-consist></jump-consist>-->
        </b-tab>
        <b-tab title="Атрибуты и Значения" disabled>
          <!--<jump-consist></jump-consist>-->
        </b-tab>
      </b-tabs>
    </b-container>
    </div>
</template>

<script>
import axios from 'axios'
import https from 'https'

  import ModelTableComponent from '../../../components/model/modelTable'
  import AnalogsComponent from '../../../components/model/analogs'
  import ComplementsComponent from '../../../components/model/complements'
  import ConsistComponent from '../../../components/model/consist'

  export default {
    data () {
      return {
        modelId: this.$store.getters.modelId,
        modelOPUS: this.$store.getters.modelOPUS,
        model: this.$store.getters.model
      }
    },
    async fetch ({ store, params }) {
      // получаем модель из базы данных по моделям ADEO
      let model = await axios.get(`http://humboldt155.pythonanywhere.com/api/models/MOD_${ params.id}`)
      // let products = await axios.get(`http://humboldt155.pythonanywhere.com/api/lm_codes/?model=MOD_${ params.id }`)
      let instance = axios.create({
        baseURL: 'https://webtopdata2.lmru.opus.adeo.com:5000/',
        // timeout: 10000,
        headers: {'Authorization': 'Basic d2lrZW86b2VraXc', 'X-Opus-Publish-Status': 'published'},
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      })
      let modelOPUS = await instance.get('foundation/v2/modelTypes/Product/models/'.concat(params.id))
      let products = await instance.get('business/v2/products?pageSize=100&startFrom=10&filter=modelCode%3A'
        .concat(params.id, '&expand=attributes&context=lang%3Aru'))
      store.dispatch('setModel', model.data )
      store.dispatch('setModelOPUS', modelOPUS.data )
      store.dispatch('setModelId', params.id )
      store.dispatch('setProducts', products.data.content )
    },
    components: {
      'jump-model-table': ModelTableComponent,
      'jump-analogs': AnalogsComponent,
      'jump-complements': ComplementsComponent,
      'jump-consist': ConsistComponent
    },
    // created () {
    //   this.$store.commit('setModelOPUS', this.modelId )
    // }
  }
</script>

<style scoped>

</style>
