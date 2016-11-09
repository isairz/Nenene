<template>
  <section class="hero is-bold app-navbar">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
          <router-link to="/" exact class="nav-item is-brand title is-4" href="/">
            <span>Nenene</span><strong>Admin</strong>
          </router-link>
        </div>
        <div class="nav-right is-flex"></div>
      </nav>
    </div>
  </section>
</template>

<style lang="sass">
@import '~bulma/sass/utilities/variables'
.app-navbar
  position: fixed
  min-width: 100%
  z-index: 1024
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1)
</style>
