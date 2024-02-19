<template>
  <div class="hospital">
    <!--左侧导航区域-->
    <div class="hospital-nav">
      <div class="top">
        <el-icon><home-filled /></el-icon>
        <span> / 医院信息</span>
      </div>
      <el-menu
          :default-active=$route.path
          class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/stopDiagnosis" @click="changeActive('/hospital/stopDiagnosis')">
          <el-icon><info-filled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/searchAndCancel" @click="changeActive('/hospital/searchAndCancel')">
          <el-icon><search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!--右侧内容区域-->
    <div class="hospital-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
// 左侧菜单需要用到的图标
import {
  Document,
  Menu as IconMenu,
  Search,
  InfoFilled,
  Setting,
  HomeFilled,
} from '@element-plus/icons-vue'
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";
import useDetailStore from "@/store/modules/hospitalDetail.ts";

let $router = useRouter();
// 获取当前路由信息
let $route = useRoute();
//获取仓库对象
let detailStore = useDetailStore();
const changeActive = (path : string) => {
  $router.push({path});
}
//组件挂载完毕:通知pinia仓库发请求获取医院详情的数据，存储仓库当中
onMounted(() => {
  //获取医院详情的数据
  detailStore.getHospital($route.query.hoscode as string);
  //获取某一个医院科室的数据
  detailStore.getDeparment($route.query.hoscode as string);
});
</script>

<style scoped lang="scss">
.hospital{
  display: flex;
  margin-top: 20px;
  .hospital-nav{
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top{
      color: #7f7f7f;
      margin-bottom: 15px;
    }
  }
  .hospital-content{
      flex: 8;
  }
}
</style>