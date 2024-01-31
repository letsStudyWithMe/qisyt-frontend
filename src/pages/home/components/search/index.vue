<template>
  <div class="search">
    <!--首页搜索框-->
    <el-autocomplete
        clearable
        placeholder="请输入医院名称"
    />
    <el-button type="primary" size="default" :icon="Search"></el-button>
  </div>
</template>

<script setup lang="ts">
// 引入Element-plus图标
import {Search} from '@element-plus/icons-vue'

// 深度选择器 :deep()
</script>

<style scoped lang="scss">
  .search{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    :deep(.el-input__wrapper){
      width: 600px;
      margin-right: 10px;
    }
  }
</style>