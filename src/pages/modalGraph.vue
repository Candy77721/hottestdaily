<template lang="html">
<div class="ModalGraph">
  <modal-graph-rank></modal-graph-rank>
</div>
</template>

<script>
import ModalGraphRank from '../components/modalGraph/modalGraphRank.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    ModalGraphRank: ModalGraphRank
  }
}
</script>

<style lang="stylus" scoped>
</style>
