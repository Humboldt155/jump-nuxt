<template>
  <div>
    <section>
      <div class="columns">
        <div class="column is-two-thirds">
          <h1 class="title is-3">{{ modelId }}</h1>
          <h2 class="subtitle is-5">{{ modelId }}</h2>
        </div>
        <div class="column">
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
            <b-tab-item label="Комплементы" icon="fas-user">
              <!--<jump-complements></jump-complements>-->
            </b-tab-item>
            <b-tab-item label="Аналоги" icon="user">
              <jump-analogs></jump-analogs>
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

  import ModelTableComponent from '../../../components/model/modelTable'
  import AnalogsComponent from '../../../components/model/analogs'
  import ComplementsComponent from '../../../components/model/complements'
  import ConsistComponent from '../../../components/model/consist'

  export default {
    data () {
      return {
        modelId: this.$route.params.id,
        // models: this.$store.state.models
      }
    },
    validate (data) {
      console.log(data)
      return true
    },
    components: {
      'jump-model-table': ModelTableComponent,
      'jump-analogs': AnalogsComponent,
      'jump-complements': ComplementsComponent,
      'jump-consist': ConsistComponent
  },

    }
</script>

<style scoped>

</style>
