<template>
  <nav class="navbar is-transparent" >
    <div class="navbar-brand" >
      <a class="navbar-item" >
        Jump
      </a>
      <a class="button is-primary is-small is-rounded">BETA</a>
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
</template>

<script>
    export default {
        name: "navigation-bar"
    }
</script>

<style scoped>

</style>
