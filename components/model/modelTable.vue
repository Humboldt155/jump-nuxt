<template>
    <div>
      <b-table
        bordered
        responsive
        head-variant="light"
        hover
        small
        :items="products"
        :fields="fields"
      >
        <template slot="Описание" slot-scope="row">
          <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
          <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2" variant="outline-primary">
            описание {{ row.detailsShowing ? '-' : '+'}}
          </b-button>
          <!-- In some circumstances you may need to use @click.native.stop instead -->
          <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
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

export default {
  data () {
    return {
      products: this.$store.getters.products,

    }
  },
  computed: {
    fields () {
      return this.$store.getters.fields
    }
  }
}
</script>

<style scoped>

</style>
