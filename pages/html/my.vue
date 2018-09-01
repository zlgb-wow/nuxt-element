<template>
  <div id="my">
    <div>
      <h3>my</h3>
    </div>
  </div>
</template>

<script>
import $http from "~/plugins/ajax";
import api from "~/plugins/ajax/api";
export default {
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods:{
    
  },
  mounted() {

  },
}
</script>

<style lang="less">
@import url('~assets/css/index.less');
</style>

