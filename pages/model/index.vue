<template>
  <div>
    <section>
      <div class="columns">
        <div class="column is-one-fifth">
          <b-field label="Код модели Адео">
              <b-input v-model.lazy="model_inserted"
                   @change="updateTable"
                   maxlength="10"
                   placeholder="e.g. MOD_00000000"
              >
              </b-input>
            </b-field>
        </div>
        <div class="column">
        </div>
        <div class="column is-one-quarter">
          <div class="box">
            <div class="tags has-addons">
              <span class="tag is-primary">FR:</span>
              <p class="tag" v-for="(item) in models">{{ item.french_name }}</p>
            </div>
            <div class="tags has-addons">
              <span class="tag is-primary">EN:</span>
              <p class="tag" v-for="(item) in models">{{ item.english_name }}</p>
            </div>
            <div class="tags has-addons">
              <span class="tag is-primary">RU</span>
              <p class="tag" v-for="(item) in models">{{ item.russian_name }}</p>
            </div>
            </div>
          </div>
        </div>
    </section>
    <section>
      <b-tabs class="block"  type="is-boxed" expanded>
            <b-tab-item label="Мастер-данные" icon="account">
              <!--<jump-model-table></jump-model-table>-->
            </b-tab-item>
            <b-tab-item label="Комплементы" icon="fas user">
              <!--<jump-complements></jump-complements>-->
            </b-tab-item>
            <b-tab-item label="Аналоги" icon="fas user">
              <!--<jump-analogs></jump-analogs>-->
            </b-tab-item>
            <b-tab-item label="Состав" icon="user">
              <!--<jump-consist></jump-consist>-->
            </b-tab-item>
            <b-tab-item label="Атрибуты и Значения" icon="user"></b-tab-item>
        </b-tabs>
    </section>
  </div>
</template>

<script>


import ModelTableComponent from '../../components/model/modelTable'
import AnalogsComponent from '../../components/model/analogs'
import ComplementsComponent from '../../components/model/complements'
import ConsistComponent from '../../components/model/consist'

export default {
  middleware: 'model',
  data () {
    return {
      model_inserted: 'MOD_200767'
    }
  },
  methods: {
    // requestDB: function () {
    //   this.$store.commit('setModels', this.model_inserted)
    //   this.$store.commit('setLmCodes', this.model_inserted)
    // }
  },
  components: {
    // 'jump-model-table': ModelTableComponent,
    // 'jump-analogs': AnalogsComponent,
    // 'jump-complements': ComplementsComponent,
    // 'jump-consist': ConsistComponent
  },
  computed: {
    // updateTable () {
    //   this.requestDB()
    // },
    // model_selected () {
    //   return this.$store.state.model_selected
    // },
    // models () {
    //   return this.$store.state.models
    // }
  }
}
</script>

<style scoped>

</style>
