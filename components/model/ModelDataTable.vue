<template>
  <div>
    <b-table
      bordered
      responsive
      hover
      small
      :items="products"
      :fields="fields"
    >
      <template slot="Описание" slot-scope="row">
        <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2" variant="outline-secondary">
          описание {{ row.detailsShowing ? '-' : '+'}}
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card title="Описание:" tag="article" style="max-width: 40rem" class="mb-2">
          <p class="card-text">{{ row.item['Описание'] }}</p>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import https from 'https'

  export default {
    data () {
      return {
        products: this.$store.getters.products,
        modelId: this.$store.getters.modelId,
        modelOPUS: this.$store.getters.modelOPUS,
        fields: this.$store.getters.fields
      }
    },
    async fetch ({ store, params }) {
      // получаем модель из базы данных по моделям ADEO
      // let model = await axios.get(`http://humboldt155.pythonanywhere.com/api/models/MOD_${ params.id}`)
      // let products = await axios.get(`http://humboldt155.pythonanywhere.com/api/lm_codes/?model=MOD_${ params.id }`)

      let modelOPUS = await instance.get('foundation/v2/modelTypes/Product/models/'.concat(params.id))
      // let products = await instance.get('business/v2/products?pageSize=100&startFrom=10&filter=modelCode%3A'
      //   .concat(params.id, '&expand=attributes&context=lang%3Aru'))
    }
  }
</script>

<style scoped>

</style>
