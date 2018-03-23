<template>
  <div>
    <top></top>
    <left></left>
    <right></right>
  </div>
</template>
<script>
import { top, left, right } from './common'

export default {
  name: 'layout',
  components: {
    left,
    right,
    top
  }
}

</script>
<style>


</style>
