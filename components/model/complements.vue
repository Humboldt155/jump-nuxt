<template>
    <div>
      <b-button label="Код модели Адео">
        <b-input
          v-model.lazy="model_inserted"
          @change="updateTable"
          maxlength="10"
          placeholder="e.g. MOD_00000000"
        >
        </b-input>
      </b-button>

      <b-field grouped group-multiline>
        <b-select v-model="perPage">
          <option value="10">10 на странице</option>
          <option value="25">25 на странице</option>
          <option value="50">50 на странице</option>
          <option value="100">100 на странице</option>
          <option value="10000">Все</option>
        </b-select>
      </b-field>

      <b-table
        :data="models_adeo.content"
        :columns="columns"
        :narrowed="true"
        :bordered="true"
        :paginated="true"
        :per-page="perPage"
        :current-page.sync="currentPage"
      ></b-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      columns: [
        {
          field: 'correlationId',
          label: 'LM код',
          sortable: true
        },
        {
          field: 'model.code',
          label: 'Код модели',
          sortable: true
        }
      ]
    }
  },
  methods: {
    requestDB: function () {
      this.$store.commit('setModelsAdeo')
    }
  },
  created: {
    updateTable () {
      this.requestDB()
    },
    models_adeo () {
      return this.$store.state.models_adeo
    }
  },
  computed: {
    updateTable () {
      this.requestDB()
    },
    models_adeo () {
      return this.$store.state.models_adeo
    }
  }
}
</script>
