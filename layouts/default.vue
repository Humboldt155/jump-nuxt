<template>
  <div class="container">
    <nav class="navbar is-transparent" >
      <div class="navbar-brand" >
        <a class="navbar-item" >
          <img src="../static/jump_logo.png" alt="Jump" width="73" height="28">
        </a>
      </div>
      <div class="navbar-end">
        <b-dropdown position="is-bottom-left">
          <button class="button is-primary is-small" slot="trigger">
            <span>RU</span>
          </button>
          <b-dropdown-item>RU</b-dropdown-item>
          <b-dropdown-item>EN</b-dropdown-item>
          <b-dropdown-item>FR</b-dropdown-item>
        </b-dropdown>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
  import NavigationBar from '~/components/NavigationBar.vue'
  export default {
    components: {
      NavigationBar
    }
  }
</script>
