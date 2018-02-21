<template>
  <div>
    <section class="section has-text-centered">
      <div class="content is-large">
        <router-link to="/" class="title is-1 is-primary">
          <p>Jump</p>
        </router-link>
      </div>
      <p>Реактивный интерфейс для простой и эффективной работы<br> с данными STEP</p>
    </section>

    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <router-link to="/model/id" tag="span" style="cursor: pointer">
                <article class="tile is-child notification is-primary">
                    <p class="title">Модель ADEO</p>
                    <div class="content">
                      <p>Состав модели<br>
                        Мастер-данные<br>
                        Комлпементы<br>
                        Аналоги</p>
                    </div>
                </article>
              </router-link>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Дерево моделей</p>
                <p class="content">Просмотр и правка иерархии моделей ADEO</p>
                <!--<figure class="image is-4by3">-->
                  <!--<img src="https://bulma.io/images/placeholders/640x480.png">-->
                <!--</figure>-->
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Схема</p>
              <div class="content">
                <p>Наглядное изображение взаимосвязей</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
     <div class="block">
       <b-icon
         icon="fas-home"
         size="is-small">
       </b-icon>
     </div>
      <div class="columns">
        <div class="column is-half">
          <p class="subtitle">Правки, ожидающие подтверждения</p>
          <div class="box">
          </div>
        </div>
        <div class="column is-half">
          <p class="subtitle">Правки подтвержденные</p>
          <div class="box">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
}
</script>

