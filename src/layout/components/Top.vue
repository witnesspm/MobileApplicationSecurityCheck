<template>
  <div class="box">
    
    <h2>移动应用</h2>

    
    <img src="../../assets/virus.png" alt=""/>
    <h2>安全检测</h2>
  </div>
</template>


<script setup lang="ts">

</script>


<style lang="less" scoped>
.box{
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 60px;
    height: 60px;
    transition-property:transform;
    transition-duration:0.5s
  }
   img:hover{
    transform:rotateZ(180deg);
  }
}
</style>
