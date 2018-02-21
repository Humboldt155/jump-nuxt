<template>
  <div class="box">
      <div class="columns">
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
    </div>
</template>

<script>
export default {
  name: 'attribute-proposal'
}
</script>

<style scoped>

</style>
