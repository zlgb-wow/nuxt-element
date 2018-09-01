<template>
  <div id="index">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div>
      <h3>test</h3>
      <nuxt-link :to="{name:'html-my'}">go html-my</nuxt-link>
    </div>
  </div>
</template>

<script>
import $http from "~/plugins/ajax";
import api from "~/plugins/ajax/api";
import mHome from '~/plugins/mixins/mHome';
export default {
  mixins:[mHome],
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created(){
    console.log(this.testData,this.gloableData)
  },
  methods:{
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted() {
    this.$http(
      {
        url: api.test,
        method: "get"
      },
      {
      
      }
    ).then(res => {
      console.log(res.data);
    });
  },
}
</script>

<style lang="less">
@import url('~assets/css/index.less');
</style>

