<template>
  <div class="register">
    <div class="top">
      <div class="title">{{ hospitalStore.hospitalInfo.hospital?.hosname }}</div>
      <div class="level">
        <svg t="1708330636564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4275" width="16" height="16"><path d="M511 724.7c-79.5 0-154.3-31-210.5-87.2-56.2-56.2-87.2-131-87.2-210.5s31-154.3 87.2-210.5 131-87.2 210.5-87.2 154.3 31 210.5 87.2 87.2 131 87.2 210.5-31 154.3-87.2 210.5c-56.2 56.3-131 87.2-210.5 87.2z m0-545.4c-136.6 0-247.7 111.1-247.7 247.7S374.4 674.7 511 674.7 758.7 563.6 758.7 427 647.6 179.3 511 179.3z" p-id="4276" fill="#f4ea2a"></path><path d="M243 895.5l59.4-266 48.8 10.9L310.7 822l194.8-60.8 206.4 61.1L663 632.5l48.4-12.5 71 275.3-276.5-81.8zM512 268.8l46.9 94.9L663.7 379l-75.9 73.9 17.9 104.4L512 508l-93.7 49.3 17.9-104.4-75.9-73.9 104.8-15.3z" p-id="4277" fill="#f4ea2a"></path></svg>
        <span>{{ hospitalStore.hospitalInfo.hospital?.param.hostypeString }}</span>
      </div>
    </div>
    <!-- 展示内容区域 -->
    <div class="content">
      <div class="left">
        <img
            :src="`data:image/jpeg;base64,` + hospitalStore.hospitalInfo.hospital?.logoData"
            alt=""
        />
      </div>
      <div class="right">
        <div>挂号规则</div>
        <div class="time">
          预约周期:10天 放号时间:{{
            hospitalStore.hospitalInfo.bookingRule?.releaseTime
          }}
          停挂时间:{{ hospitalStore.hospitalInfo.bookingRule?.stopTime }}
        </div>
        <div class="address">
          具体位置:{{ hospitalStore.hospitalInfo.hospital?.param.fullAddress }}
        </div>
        <div class="route">具体路线:{{ hospitalStore.hospitalInfo.hospital?.route }}</div>
        <div class="releasetime">
          退号时间:就诊前一工作日{{
            hospitalStore.hospitalInfo.bookingRule?.quitTime
          }}前取消
        </div>
        <div class="rule">预约挂号规则</div>
        <div
            class="ruleInfo"
            v-for="(item, index) in hospitalStore.hospitalInfo.bookingRule?.rule"
            :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 放置每一个医院的科室的数据 -->
    <div class="deparment">
      <div class="leftNav">
        <ul>
          <li
              @click="changeIndex(index)"
              v-for="(deparment, index) in hospitalStore.deparmentArr"
              :key="deparment.depcode"
              :class="{ active: index == currentIndex }"
          >
            {{ deparment.depname }}
          </li>
        </ul>
      </div>
      <div class="deparmentInfo">
        <!-- 用一个div代表:大科室与小科室 -->
        <div
            class="showDeparment"
            v-for="deparment in hospitalStore.deparmentArr"
            :key="deparment.depcode"
        >
          <h1 class="cur">{{ deparment.depname }}</h1>
          <!-- 每一个大的科室下小科室 -->
          <ul>
            <li @click="showLogin(item)" v-for="item in deparment.children" :key="item.depcode">
              {{ item.depname }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {useRouter,useRoute} from 'vue-router';
//引入医院详情仓库的数据
import useDetailStore from "@/store/modules/hospitalDetail";
let hospitalStore = useDetailStore();
//获取路由器
let $router = useRouter();
//获取路由对象
let $route = useRoute();
//控制科室高亮的响应式数据
let currentIndex = ref<number>(0);
//左侧大的科室点击的事件
const changeIndex = (index: number) => {
  currentIndex.value = index;
  //点击导航获取右侧科室(大的科室H1标题)
  let allH1 = document.querySelectorAll(".cur");
  //滚动到对应科室的位置
  allH1[currentIndex.value].scrollIntoView({
    behavior: "smooth", //过渡动画效果
    block: "start", //滚动到位置 默认起始位置
  });
};
//点击科室按钮回调
//item:即为用户选中科室的数据
const showLogin = (item:any) => {
  //点击某一个医院科室按钮，进入到相应的预约挂号详情页面
  //跳转到预约挂号详情页面
  $router.push({path:'/hospital/register_step1',query:{hoscode:$route.query.hoscode,depcode:item.depcode}})
};
</script>

<style scoped lang="scss">
.register {
  .top {
    display: flex;
    .title {
      font-size: 30px;
      font-weight: 900;
    }
    .level {
      color: #7f7f7f;
      margin-left: 10px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      span {
        margin-left: 5px;
      }
    }
  }
  .content {
    display: flex;
    margin-top: 20px;
    .left {
      width: 80px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      font-size: 14px;
      margin-left: 20px;
      .time,
      .address,
      .route,
      .releasetime,
      .ruleInfo {
        margin-top: 10px;
        color: #7f7f7f;
      }
      .rule {
        margin: 10px 0px;
      }
    }
  }

  .deparment {
    width: 100%;
    height: 500px;
    display: flex;
    margin-top: 20px;
    .leftNav {
      width: 80px;
      height: 100%;
      ul {
        width: 100%;
        height: 100%;
        background: rgb(248, 248, 248);
        display: flex;
        flex-direction: column;
        li {
          flex: 1;
          text-align: center;
          color: #7f7f7f;
          font-size: 14px;
          line-height: 40px;
          &.active {
            border-left: 1px solid red;
            color: red;
            background: white;
          }
        }
      }
    }
    .deparmentInfo {
      flex: 1;
      margin-left: 20px;
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .showDeparment {
        h1 {
          background-color: rgb(248, 248, 248);
          color: #7f7f7f;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            color: #7f7f7f;
            width: 33%;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
