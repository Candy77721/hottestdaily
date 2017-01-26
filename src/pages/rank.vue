<template lang="html">
  <div class="rank">
    <div class="rank-title">
      {{title}}
    </div>
    <rank-search></rank-search>
    <rank-graph :graph="rankGetGraph"></rank-graph>
  </div>
</template>

<script>
import RankGraph from '../components/rank/rankGraph.vue'
import RankSearch from '../components/rank/rankSearch.vue'

import { mapActions, mapGetters } from 'vuex'
import * as api from '../api/api'

export default {
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    this.getRankGraph()
    this.updateTitle()
  },
  computed: {
    ...mapGetters([
      'getColor',
      'rankGetGraph',
      'rankGetSearch'
    ])
  },
  methods: {
    ...mapActions([
      'rankChangeGraph',
      'rankChangeGraphColor'
    ]),
    getRankGraph: function () {
      axios.get(api.getRankGraph)
        .then(res => {
          if (res.data.errorCode !== 0) {
            console.log(res.data.errorMsg)
            return
          }
          this.rankChangeGraph(res.data.data)
          this.rankChangeGraphColor(this.getColor)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateTitle: function () {
      const now = new Date()
      this.title = `更新于 ${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}：00`
    }
  },
  components: {
    RankGraph: RankGraph,
    RankSearch: RankSearch
  }
}
</script>

<style lang="stylus" scoped>
.rank
  padding 30px 50px
  position relative
  .rank-title
    font-size 14px
    color #A3A3A3
    letter-spacing 1.6px
</style>
