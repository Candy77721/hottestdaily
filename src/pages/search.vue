<template lang="html">
<div class="search">
  <graph></graph>
  <div class="search-cards">
    <search-card></search-card>
  </div>
</div>
</template>

<script>
import Graph from '../components/search/graph.vue'
import SearchCard from '../components/search/searchCard.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Graph: Graph,
    SearchCard: SearchCard
  }
}
</script>

<style lang="stylus">
</style>
