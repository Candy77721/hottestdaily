<template lang="html">
<div class="user-modal">
  <component :is="userGetModalState"></component>
</div>
</template>

<script>
// 用户组件
import UserLogin from '../components/user/userModal/userLogin.vue'
import UserRegister from '../components/user/userModal/userRegister.vue'
import UserRegisterOk from '../components/user/userModal/userRegisterOk.vue'
import UserForget from '../components/user/userModal/userForget.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'userGetModalState'
    ])
  },
  methods: {
    ...mapActions([
      'userToggleModal'
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

<style lang="stylus" scoped>
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
