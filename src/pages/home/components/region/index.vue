<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li :class="{active:activeFlag==''}" @click="activeFlagChange('')">全部</li>
        <li v-for="region in hospitalRegionlArr" :class="{active:activeFlag==region.value}" :key="region.value" @click="activeFlagChange(region.value)">{{ region.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted,ref} from "vue";
import type {HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData} from "@/api/home/type.ts";
import {reqHospitalLevelAndRegion} from "@/api/home";
// 存储医院等级的数组
let hospitalRegionlArr = ref<HospitalLevelAndRegionArr>([]);
// 控制医院等级高亮响应式数据
let activeFlag = ref<string>('');
onMounted(()=>{
  getHostipalRegionInfo();
})
//获取医院信息数据
const getHostipalRegionInfo = async ()=>{
  //@ts-ignore
  let result:HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion("BeiJin");
  console.log(result);
  if (result.code == 200){
    hospitalRegionlArr.value = result.data;
  }
}
const activeFlagChange = (value:string)=>{
  activeFlag.value = value;
}
</script>

<script lang="ts">
export default {
  name: "Region"
}
</script>

<style scoped lang="scss">
.region {
  margin-top: 40px;
  color: #7f7f7f;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 60px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        margin-left: 20px;
        margin-bottom: 15px;
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