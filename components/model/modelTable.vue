<template>
    <div>
      <el-table
        :data="products[0]"
        height="750"
        border
        style="width: 100%">
        <el-table-column
          v-for="column in (products[1])" :key="column"
          v-bind:prop="column"
          v-bind:label="column"
          width="180">
        </el-table-column>
      </el-table>
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
      var att = new Set()
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
            att.add(key.toString())
          }
        }
        products.push(product)
      }
      for (let key of att) {
          columns.push(key)
        }
      return [products, columns]
      // return this.$store.getters.products
    }
  }
}
</script>

<style scoped>

</style>
