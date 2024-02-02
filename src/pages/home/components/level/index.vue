<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul>
        <li :class="{active:activeFlag==''}" @click="activeFlagChange('')">全部</li>
        <li v-for="level in hospitalLevelArr" :class="{active:activeFlag==level.value}" :key="level.value" @click="activeFlagChange(level.value)">{{ level.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted,ref} from "vue";
import {
  HospitalLevelAndRegionArr,
  HospitalLevelAndRegionResponseData
} from "@/api/home/type.ts";
import {reqHospitalLevelAndRegion} from "@/api/home";
// 存储医院等级的数组
let hospitalLevelArr = ref<HospitalLevelAndRegionArr>([]);
// 控制医院等级高亮响应式数据
let activeFlag = ref<string>('');
onMounted(()=>{
  getHostipalLevelInfo();
})
//获取医院信息数据
const getHostipalLevelInfo = async ()=>{
  //@ts-ignore
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion("HosType")
  console.log(result)
  if (result.code == 200){
    hospitalLevelArr.value = result.data;
  }
}
const activeFlagChange = (value:string)=>{
  activeFlag.value = value;
}
</script>

<script lang="ts">
export default {
  name: "Level"
}
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  h1{
    font-weight: 900;
    margin: 30px 0;
  }
  .content{
    display: flex;
    .left{
      margin-right: 10px;
    }
    ul{
      display: flex;
      li{
        margin-left: 20px;
        &.active{
          color: #55a6fe;
        }
      }
      li:hover{
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>