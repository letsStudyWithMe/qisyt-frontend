<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li class="active">全部</li>
        <li>东城区</li>
        <li>西城区</li>
        <li>朝阳区</li>
        <li>丰台区</li>
        <li>石景山区</li>
        <li>海淀区</li>
        <li>门头沟区</li>
        <li>房山区</li>
        <li>通州区</li>
        <li>顺义区</li>
        <li>昌平区</li>
        <li>大兴区</li>
        <li>怀柔区</li>
        <li>密云区</li>
        <li>延庆区</li>
        <li>平谷区</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

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