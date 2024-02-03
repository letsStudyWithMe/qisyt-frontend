<template>
  <div class="search">
    <!--首页搜索框-->
    <el-autocomplete
        clearable
        placeholder="请输入医院名称"
        v-model="hosname"
        :trigger-on-focus="false"
        :fetch-suggestions="querySearch"
        @select="handleGoDetail"
    />
    <el-button type="primary" size="default" :icon="Search"></el-button>
  </div>
</template>

<script setup lang="ts">
// 引入Element-plus图标
import {Search} from '@element-plus/icons-vue'
import {ref} from 'vue'
import {useRouter} from "vue-router";
import {reqHospSearch} from "@/api/home";
import {HospitalInfo} from "@/api/home/type.ts";

let hosname = ref<String>('')

const querySearch = async (queryString: string, cb: any) => {
  let res:HospitalInfo = await reqHospSearch(queryString);
  // 整理数据
  let showData = res.data.map(item =>{
    return {
      value:item.hosname,//医院名称
      hoscode:item.hoscode,// 医院编码
    }
  })
  cb(showData);
}

const handleGoDetail = (item: any) => {
  // 跳转到医院详情页
  useRouter().push({path:'/hospital',query:{hoscode:item.hoscode}})
}

// 深度选择器 :deep()
</script>

<script lang="ts">
export default {
  name: "Search"
}
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