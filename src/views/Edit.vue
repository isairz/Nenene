<template>
  <div id="edit-form">
    <form class="form" @submit.prevent="handleSubmit">
      <div v-for="(type, key) in model"></th>
        <label class="label">{{ key }}</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input" v-model="item[key]">
        </p>
      </div>
      <input class="button is-primary" type='submit' />
    </form>
  </div>
</template>

<script>
import _ from 'lodash'
import { isArray } from '../helpers/types'

export default {
  data () {
    return {
      model: this.$store.getters.activeModel,
      item: {},
    }
  },
  created () {
    this.fetchData(true)
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData (force = false) {
      if (!force &&
        this.model === this.$store.getters.activeModel) return

      this.$store.dispatch('FETCH_ITEM')
      .then(() => {
        this.model = this.$store.getters.activeModel
        this.item = _.mapValues(this.$store.getters.activeItem, value => {
          // FIXME: Perry Array of String
          if (!Array.isArray(value)) return value
          return `{${value.join(',')}}`
        })
      })
    },
    handleSubmit (e) {
      this.$store.dispatch('UPDATE_ITEM', this.item)
    },
    isArray,
  },
}
</script>

<style lang="sass">
#edit-form
  .control
    margin-bottom: 15px
</style>
