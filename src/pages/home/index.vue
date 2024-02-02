<template>
  <div>
    <!--轮播图-->
    <Carousel/>
    <!--搜索框-->
    <Search/>
    <!--底部医院信息-->
    <el-row :gutter=20>
      <el-col :span="20">
        <!--医院等级-->
        <Level/>
        <!--医院地区-->
        <Region/>
        <!--医院结构-->
        <div class="hospital-info">
          <Card class="item" v-for="(item,index) in hospitalArr" :key="index" :hospitalInfo="item" />
        </div>
        <div class="page">
          <!--分页器-->
          <el-pagination
              v-model:current-page="pageNo"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 30, 40]"
              :background="true"
              layout="prev, pager, next, jumper,sizes,total"
              :total="total"
              @current-change="currentChange"
              @size-change="sizeChange"
          />
        </div>
      </el-col>
      <el-col :span="4">
        <!--右侧广告-->
        456
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {onMounted,ref} from 'vue';
import {reqHospital} from "@/api/home";
import type {Content,HospitalResponseData} from "@/api/home/type.ts";
// 引入轮播图组件
import Carousel from './components/carousel/index.vue';
// 引入搜索框组件
import Search from './components/search/index.vue';
// 引入医院等级组件
import Level from './components/level/index.vue';
// 引入医院地区组件
import Region from './components/region/index.vue';
// 引入医院信息卡片组件
import Card from './components/card/index.vue';

// 分页器需要的数据
// 页码
let pageNo = ref<number>(1);
// 每页显示的条数
let pageSize = ref<number>(10);
// 存储已有医院的数组
let hospitalArr = ref<Content>([]);
// 存储已有医院的个数
let total = ref<number>(0);
onMounted(()=>{
  getHostipalInfo();
})
//获取医院信息数据
const getHostipalInfo = async ()=>{
  //@ts-ignore
  let result:HospitalResponseData = await reqHospital(pageNo.value,pageSize.value)
  if (result.code == 200){
    hospitalArr.value = result.data.content;
    total.value = result.data.totalElements;
  }
}
//分页器页码发生变化时候触发
const currentChange = ()=>{
  getHostipalInfo();
}
//分页器下拉页条数发生变化时候触发
const sizeChange = ()=>{
  pageNo.value = 1;
  getHostipalInfo();
}
</script>

<style scoped lang="scss">
.hospital-info{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item{
    width: 48%;
    margin: 10px 0;
  }
}
.page{
  margin-top: 10px;
}
</style>