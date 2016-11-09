<template>
  <div id="app">
    <navbar></navbar>
    <sidebar></sidebar>
    <section class="app-view">
      <transition name="fade" mode="out-in">
        <router-view class="container is-fluid"></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar,
  },
}
</script>

<style lang="sass">
@import '~bulma'
.app-view
  padding-top: 50px
  margin-left: 180px
  transform: translateZ(0)
  .container
    margin: 0
    padding: 20px
</style>
