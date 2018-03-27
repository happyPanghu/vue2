<template>
  <div>
    <form :model="loginForm">
      <div class="from-wrapper">
        <span>{{ loginName }}</span>
        <input type="text" v-model="loginForm.username" placeholder="">
      </div>
      <div class="from-wrapper">
        <span>{{ loginpw }}</span>
        <input type="password" v-model="loginForm.password" placeholder="">
      </div>
      <div class="from-wrapper">
        <button @click="submit()">提交</button>
      </div>
    </form>
  </div>
</template>
<script>
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    loginName() {
      return "用户名：" + this.loginForm.username;
    },
    loginpw() {
      return "密码：" + this.loginForm.password;
    }
  },
  methods: {
    submit() {
      alert(this.loginForm.username);
    }
  }
}

</script>
<style scoped>
form {
  margin: 50px;
}

.from-wrapper {
  text-align: left;
  margin: 10px 0 20px 50px;
}

</style>
