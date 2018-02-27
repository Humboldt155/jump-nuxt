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
        </b-field>
      <b-table
        :data="products[0]"
        :columns="products[1]"
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
          field: 'Product ID',
          label: 'Product ID',
          sortable: true
        }
      ]
    }
  },
  computed: {
    products () {
      var products = []
      var columns = []
      var att = {}
      var content = this.$store.getters.products
      for (var i = 0; i < content.length; i++) {
        var product = {}
        var attributes = content[i].chapter[0].attribute
        for (var j = 0; j < attributes.length; j++) {
          var key = attributes[j].displayName
          var value = attributes[j].value[0]
          if (key === 'Source country code' || key === 'Описание') {
            continue
          } else {
            product[key] = value
            if (!(key in att)) { att[key] = key }
          }
        }
        products.push(product)
        for (var x in att) {
          columns.push({
            field: att[x],
            label: att[x],
            sortable: true
          })
        }
      }
      return [products, columns]
      // return this.$store.getters.products
    }
  }
}
</script>

<style scoped>

</style>
