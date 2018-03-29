<template>
  <div>
    <form :model="loginForm">
      <div class="from-wrapper">
        <span>账号：</span>
        <input type="text" name="username" v-validate="'required|max:6|min:4'" data-vv-as="用户名" v-model="loginForm.username">
        <p v-show="errors.has('username')" class="help haha">{{ errors.first('username') }}</p>
      </div>
      <div class="from-wrapper">
        <span>手机：</span>
        <input type="text" name="phone" v-validate="'required|numeric|max:22|xx'" v-model="loginForm.phone">
        <p v-show="errors.has('phone')" class="help haha">{{ errors.first('phone') }}</p>
      </div>
      <div class="from-wrapper">
        <span>密码：</span>
        <input type="password" v-model="loginForm.password" placeholder="">
      </div>
      <div class="from-wrapper">
        <span>数字：</span>
        <input type="text" v-model="loginForm.number" v-validate="'required|max_value:100|min_value:10|'"  name="aa">
        <p v-show="errors.has('aa')" class="help haha">{{ errors.first('aa') }}</p>
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
        phone: '',
        password: '',
        number:''
      }
    }
  },
  computed: {
    loginName() {
      return this.loginForm.username;
    },
    loginpw() {
      return this.loginForm.password;
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

.haha {
  color: red;
  position: absolute;
}

</style>
