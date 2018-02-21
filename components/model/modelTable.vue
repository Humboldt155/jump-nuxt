<template>
    <div>
      <b-field grouped group-multiline>
        <b-select v-model="perPage">
          <option value="10">10 на странице</option>
          <option value="25">25 на странице</option>
          <option value="50">50 на странице</option>
          <option value="100">100 на странице</option>
          <option value="10000">Все</option>
        </b-select>
        <download-excel
          class   = "btn btn-default"
          :data   = "lm_codes"
          :fields = "json_fields"
          name    = "Таблица.xls">
          <button class="button is-success">
              Выгрузить в Excel
          </button>
        </download-excel>

        </b-field>
      <b-table
        :data="lm_codes"
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
      json_fields: {
        'LM_code': 'id',
        'Name': 'name',
        'Department': 'department',
        'AVS': 'avs'
      },
      json_meta: [
        [{
          'key': 'charset',
          'value': 'utf-8'
        }]
      ],
      columns: [
        {
          field: 'id',
          label: 'LM код',
          sortable: true
        },
        {
          field: 'name',
          label: 'Название',
          sortable: true
        },
        {
          field: 'department',
          label: 'Отдел',
          sortable: true
        },
        {
          field: 'avs',
          label: 'Date',
          centered: true,
          sortable: true
        }
      ]
    }
  },
  methods: {
    requestDB: function () {
      this.$store.commit('setLmCodes', this.model_selected)
    }
  },
  created: {
  },
  computed: {
    model_selected () {
      return this.$store.state.model_selected
    },
    lm_codes () {
      return this.$store.state.lm_codes
    }
  }
}
</script>

<style scoped>

</style>
