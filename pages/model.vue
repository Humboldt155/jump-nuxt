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
                  placeholder="н.п. MOD_200767"
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
  export default {
    data () {
      return {
        modelId: '',
        modelsList: [
        'MOD_202265',
        'MOD_202341',
        'MOD_202721',
        'MOD_201278',
        'MOD_202515',
        'MOD_202361',
        'MOD_200225',
        'MOD_200877',
        'MOD_201272',
        'MOD_200853',
        'MOD_200304',
        'MOD_201387',
        'MOD_201271',
        'MOD_202346',
        'MOD_202301',
        'MOD_202327',
        'MOD_201249',
        'MOD_200084',
        'MOD_200166',
        'MOD_200229',
        'MOD_201836',
        'MOD_200879',
        'MOD_200860',
        'MOD_200208',
        'MOD_201824',
        'MOD_200226',
        'MOD_200866',
        'MOD_201277',
        'MOD_200873',
        'MOD_190145',
        'MOD_202309',
        'MOD_200882',
        'MOD_202300',
        'MOD_202358',
        'MOD_200165',
        'MOD_200869',
        'MOD_200943',
        'MOD_202275',
        'MOD_202468',
        'MOD_202395',
        'MOD_202378',
        'MOD_200957',
        'MOD_202474',
        'MOD_202345',
        'MOD_200163',
        'MOD_202399',
        'MOD_202287',
        'MOD_200336',
        'MOD_202014',
        'MOD_202266',
        'MOD_201968',
        'MOD_200216',
        'MOD_202331',
        'MOD_201934',
        'MOD_200874',
        'MOD_200767'
      ],
        selected: null
      }
    },
    methods: {
      onloadModel() {
        this.$store.dispatch('setModel', this.modelId)
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
