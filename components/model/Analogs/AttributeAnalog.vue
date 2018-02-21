<template>
    <div class="box">
      <div class="columns">
        <div class="column is-one-third is-primary">
          <b-field label="Атрибут">
            <b-select placeholder="Выберите атрибут">
                <option
                    v-for="attribute in attributes"
                    :value="attribute.id"
                    :key="attribute.id">
                    {{attribute.id }} - {{attribute.name }}
                </option>
            </b-select>
        </b-field>
        </div>
        <div class="column is-one-fifth">
          <selectiom>
            <b-field>
              <b-tooltip label="точное совпадение">
                <b-radio-button v-model="radioButton"
                    native-value="Значения точно совпадают"
                    type="is-danger">
                        =
                  </b-radio-button>
                </b-tooltip>

              <b-tooltip label="диапазон">
                <b-radio-button v-model="radioButton"
                    native-value="Значения могут различаться в указанном диапазоне"
                    type="is-success">
                      +-
                </b-radio-button>
              </b-tooltip>

              <b-tooltip label="группировка">
                <b-radio-button v-model="radioButton"
                    native-value="Значения сгруппированы">
                    <span>&</span>
                </b-radio-button>
              </b-tooltip>

          </b-field>
          <p class="content">
              {{ radioButton }}
          </p>
          </selectiom>
        </div>
        <div class="column">
          предпросмотр
        </div>
        <div class="column is-one-fifth is-centered">
          <b-tooltip label="удалить" type="is-warning">
            <a class="delete is-danger"></a>
          </b-tooltip>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      attributes: [
        {'id': 'ATT_63475', 'name': 'Количество скоростей'},
        {'id': 'ATT_12343', 'name': 'Мощность'},
        {'id': 'ATT_98989', 'name': 'Наличие реверса'},
        {'id': 'ATT_45456', 'name': 'Аккумулятор в комплекте'}
      ],
      radioButton: ''
    }
  },
  name: 'attribute-analog'
}
</script>

<style scoped>

</style>
