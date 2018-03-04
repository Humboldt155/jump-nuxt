<template>
  <div>
    <b-container>
      <p>
        Модель
      </p>
      <b-autocomplete
        v-model.lazy="modelId"
        :data="modelsListFiltered"
        placeholder="н.п. 200767"
        @select="option => selected = option">
        <template slot="empty">Модель не найдена</template>
      </b-autocomplete>
      <a class="button is-primary" @click="onloadModel">применить</a>
    </b-container>
    <b-container>
          <h1 class="title is-3">{{ modelOPUS.displayName }}</h1>
    </b-container>
    <b-container>
      <b-tabs>
        <b-tab title="Таблица" active>
          <jump-model-table></jump-model-table>
        </b-tab>
        <b-tab title="Аналоги" disabled>
          <jump-analogs></jump-analogs>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>

  import axios from 'axios'
  import https from 'https'

  const axios_instance = axios.create({
    baseURL: 'https://webtopdata2.lmru.opus.adeo.com:5000/',
    // timeout: 10000,
    headers: {'Authorization': 'Basic d2lrZW86b2VraXc', 'X-Opus-Publish-Status': 'published'},
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  })

  import ModelTableComponent from '../../components/model/ModelDataTable'
  import AnalogsComponent from '../../components/model/analogs'

  export default {
    data () {
      return {
        modelId: this.$store.getters.modelId,
        modelOPUS: this.$store.getters.modelOPUS,
        modelsList: [
          '202265',
          '202341',
          '202721',
          '201278',
          '202515',
          '202361',
          '200225',
          '200877',
          '201272',
          '200853',
          '200304',
          '201387',
          '201271',
          '202346',
          '202301',
          '202327',
          '201249',
          '200084',
          '200166',
          '200229',
          '201836',
          '200879',
          '200860',
          '200208',
          '201824',
          '200226',
          '200866',
          '201277',
          '200873',
          '190145',
          '202309',
          '200882',
          '202300',
          '202358',
          '200165',
          '200869',
          '200943',
          '202275',
          '202468',
          '202395',
          '202378',
          '200957',
          '202474',
          '202345',
          '200163',
          '202399',
          '202287',
          '200336',
          '202014',
          '202266',
          '201968',
          '200216',
          '202331',
          '201934',
          '200874',
          '200767'
      ],
        selected: null
      }
    },
    methods: {
      onloadModel() {
        this.$store.dispatch('setModelId', this.modelId)
        let modelOPUS = axios_instance.get('foundation/v2/modelTypes/Product/models/'.concat(this.ModelId))
        this.$store.dispatch('setModelOPUS', modelOPUS )
        this.$store.dispatch('setProducts', this.modelId )
      }
    },
    computed: {
      modelsListFiltered() {
        return this.modelsList.filter((option) => {
          return option
            .toString()
            .toLowerCase()
            .indexOf(this.modelId.toLowerCase()) >= 0
        })
      }
    },
    components: {
      'jump-model-table': ModelTableComponent,
      'jump-analogs': AnalogsComponent
    }
  }
</script>

<style scoped>

</style>
