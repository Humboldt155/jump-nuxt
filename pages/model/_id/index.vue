<template>
  <div>
    <section>
      <div class="columns">
        <div class="column is-one-quarter">
          <div>Модель</div>
        </div>
        <div class="column is-one-quarter">
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
    <div>Vjltkm</div>
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
              <!--<jump-analogs></jump-analogs>-->
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
    export default {
        validate (data) {
          console.log(data)
          return true
        }
    }
</script>

<style scoped>

</style>
