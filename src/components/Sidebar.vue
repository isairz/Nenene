<template>
  <aside class="menu app-sidebar animated">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li v-for="(model, path) in models">
        <router-link :to="`/${path}`">
          <span class="icon is-small"><i :class="['fa']"></i></span>
          {{ path }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import models from '../helpers/models'
export default {
  data () {
    return {
      models: models,
    }
  },
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';
.app-sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  padding: 20px 0 50px;
  width: 180px;
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
  .icon {
    vertical-align: baseline;
    &.is-angle {
      position: absolute;
      right: 10px;
      transition: transform .377s ease;
    }
  }
  .menu-label {
    padding-left: 5px;
  }
}
</style>
