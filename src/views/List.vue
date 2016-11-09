<template>
  <div id="list">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(type, key) in model" v-if="!isArray(type)">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td v-for="(type, key) in model" v-if="!isArray(type)">{{ item[key] }}</td>
        </tr>
      </tbody>
    </table>
    <pagination :page="page" :maxPage="maxPage"></pagination>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue'
import { isArray } from '../helpers/types'

export default {
  components: {
    Pagination,
  },
  data () {
    return {
      model: this.$store.getters.activeModel,
      page: this.$store.getters.activePage,
      items: this.$store.getters.activeItems,
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
        this.model === this.$store.getters.activeModel &&
        this.page === this.$store.getters.activePage) return

      this.$store.dispatch('FETCH_LIST')
      .then(() => {
        this.model = this.$store.getters.activeModel
        this.page = this.$store.getters.activePage
        this.items = this.$store.getters.activeItems
      })
    },
    isArray,
  },
  computed: {
    maxPage () {
      return this.items.fullLength ? Math.ceil(this.items.fullLength / this.$store.state.perPage) : 1
    },
  },
}
</script>

<style lang="sass">
</style>
