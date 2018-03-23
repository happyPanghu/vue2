<template>
  <div class="left-side">
    <div class="left-inside">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/sec">第二页</router-link>
        </li>
        <li>
          <router-link to="/thi">第三页</router-link>
        </li>
        <li>
          <router-link to="/four">第四页</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'left'
}

</script>
<style scoped>
.left-side {
  list-style-type: none;
  width: 140px;
  height: 100%;
  float: left;
  position: fixed;
  overflow-x: hidden;
  background: #eaeaea;
}

.left-inside {
  width: 160px;
  height: 100%;
  overflow-y: scroll;
}


li,
ul {
  width: 160px;
}

</style>
