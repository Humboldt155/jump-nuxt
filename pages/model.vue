<template>
  <div><br>
    <div class="box">
      <div class="level" >
        <div class="level-left">
          <div class="level-item">
            Модель
          </div>
          <div class="level-item">

                <b-autocomplete
                  v-model.lazy="modelId"
                  :data="modelsListFiltered"
                  placeholder="н.п. 200767"
                  @select="option => selected = option">
                  <template slot="empty">Модель не найдена</template>
                </b-autocomplete>

                <a class="button is-primary" @click="onloadModel">применить</a>

          </div>
        </div>

      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    data () {
      return {
        modelId: '',
        modelsList: [
          '202265',
          '202341',
          '202721',
          '201278',
          '202515',
          '202361',
          '200225',
          '200877',
          '201272',
          '200853',
          '200304',
          '201387',
          '201271',
          '202346',
          '202301',
          '202327',
          '201249',
          '200084',
          '200166',
          '200229',
          '201836',
          '200879',
          '200860',
          '200208',
          '201824',
          '200226',
          '200866',
          '201277',
          '200873',
          '190145',
          '202309',
          '200882',
          '202300',
          '202358',
          '200165',
          '200869',
          '200943',
          '202275',
          '202468',
          '202395',
          '202378',
          '200957',
          '202474',
          '202345',
          '200163',
          '202399',
          '202287',
          '200336',
          '202014',
          '202266',
          '201968',
          '200216',
          '202331',
          '201934',
          '200874',
          '200767'
      ],
        selected: null
      }
    },
    methods: {
      onloadModel() {
        this.$router.push('/model/' + this.modelId)
      }
    },
    computed: {
      modelsListFiltered() {
        return this.modelsList.filter((option) => {
          return option
            .toString()
            .toLowerCase()
            .indexOf(this.modelId.toLowerCase()) >= 0
        })
      }
    }
  }
</script>

<style scoped>

</style>
