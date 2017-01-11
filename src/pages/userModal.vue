<template lang="html">
<div class="user-modal">
  <component v-bind:is="getModalState"></component>
</div>
</template>

<script>
// 用户组件
import UserLogin from '../components/user/userLogin.vue'
import UserRegister from '../components/user/userRegister.vue'
import UserRegisterOk from '../components/user/userRegisterOk.vue'
import UserForget from '../components/user/userForget.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getModalState'
    ])
  },
  methods: {
    ...mapActions([
      'toggleModal'
    ])
  },
  components: {
    UserLogin: UserLogin,
    UserRegister: UserRegister,
    UserRegisterOk: UserRegisterOk,
    UserForget: UserForget
  }
}
</script>

<style lang="stylus">
.user-modal
  position fixed
  top 50%
  left 50%
  margin-top -150px
  margin-left -154px
  width 308px
  background-color #fff
  z-index 99
</style>
