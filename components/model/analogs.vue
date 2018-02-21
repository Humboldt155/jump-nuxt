<template>
  <div>

    <section>
      <div class="columns">
        <div class="column is-one-third is-primary is-centered">атрибут</div>
        <div class="column is-one-fifth is-centered">тип привязки</div>
        <div class="column is-centered">настройка</div>
      </div>
    </section>

    <section>

      <attribute-analog></attribute-analog>
      <attribute-analog></attribute-analog>
      <attribute-analog></attribute-analog>

      <button class="button  is-medium">
        <div class="tags has-addons">
          <span class="tag is-primary is-medium">+</span>
          <p class="tag is-medium">добавить атрибут</p>
        </div>
      </button>

    </section>

    <div class="columns">
        <div class="column is-one-third is-centered">
          <p class="title"><br>Проверка</p>
        </div>
    </div>

  <section>
    <span>Группы аналогов</span>
    <attribute-proposal></attribute-proposal>
  </section>

  <section>
    <span>Не заполненные артикулы</span>
    <attribute-unfilled></attribute-unfilled>
  </section>
  </div>
</template>

<script>
import AttribueAnalog from './Analogs/AttributeAnalog'
import AttributeProposal from './Analogs/AttributeProposal'
import AttributeUnfilled from './Analogs/AttributeUnfilled'

export default {
  data () {
    return {
      radioButton: ''
    }
  },
  components: {
    'attribute-analog': AttribueAnalog,
    'attribute-proposal': AttributeProposal,
    'attribute-unfilled': AttributeUnfilled
  },
  name: 'analogs'
}
</script>

<style scoped>

</style>
