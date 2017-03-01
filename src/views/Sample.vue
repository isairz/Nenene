<template>
  <div id="app2">
    <button @click="test">sdf</button>
    <div id="sub"></div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'

/* eslint-disable no-new */

export default {
  data () {
    return {
      msg: 'Vue Test Page',
    }
  },
  methods: {
    test () {
      console.log('!!!')
      new Vue({
        el: '#sub',
        template: '<h2>{{id}}</h2>',
        data () {
          return {
            id: 123,
          }
        },
      })
    },
  },
}
</script>

<style lang="sass">
</style>
