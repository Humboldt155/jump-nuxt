<template>
  <div>
    Выберите код модели и нажмите "применить"
  </div>
</template>

<script>


import ModelTableComponent from '../../components/model/modelTable'
import AnalogsComponent from '../../components/model/analogs'
import ComplementsComponent from '../../components/model/complements'
import ConsistComponent from '../../components/model/consist'

export default {
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
  }
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
</script>

<style scoped>

</style>
