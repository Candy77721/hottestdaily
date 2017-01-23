<template lang="html">
  <div class="rank">
    <!-- <rank-graph></rank-graph> -->
  </div>
</template>

<script>
import RankGraph from '../components/rank/rankGraph.vue'

import * as api from '../api/api'

export default {
  data () {
    return {
      garph: {}
    }
  },
  methods: {
    getRankGraph: function () {
      axios.get(api.getRankGraph)
        .then(res => {
          this.graph = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {
    RankGraph: RankGraph
  }
}
</script>

<style lang="stylus">
</style>
