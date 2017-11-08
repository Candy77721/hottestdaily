<template lang="html">
  <div class="track">
    <TrackCard v-for="(news, index) in trackGetNews" :news="news" :index="index" :key="index"></TrackCard>
  </div>
</template>

<script>
import * as api from '../api/api'
import { mapActions, mapGetters } from 'vuex'
import TrackCard from '../components/track/trackCard.vue'

export default {
  name: 'track',
  data () {
    return {
    }
  },
  mounted () {
    axios.get(api.getNewsTrack)
    // axios.get('https://raw.githubusercontent.com/954880786/Project_hot2/master/Django/static/trail.json')
      .then(res => {
        if (res.data.errorCode !== 0) {
          console.log(res.data.errorMsg)
          return
        }
        this.trackChangeNews(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    ...mapGetters([
      'trackGetNews'
    ])
  },
  methods: {
    ...mapActions([
      'trackChangeNews'
    ]),
    updateGraph (data) {

    }
  },
  components: {
    TrackCard: TrackCard
  }
}
</script>

<style lang="stylus" scoped>
.track
  width 1170px
  padding 50px 0 50px 40px


</style>
