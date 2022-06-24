<template>
  <!-- 显示html内容 -->
  <div class="box">
    <div class="xiahuaxian"></div>
    <p class="biaoti">{{ blog[0]?.blog_title }}</p>
    <div class="ql-editor">
    <div v-html="blog[0]?.blog_content"></div>
  </div>
  </div>

  <div class="foot">
      <p class="zuozhe">{{ blog[0]?.release_people }}</p>
    <p class="riqi">{{ blog[0]?.release_date }}</p>
  </div>

</template>

<script lang="ts" setup>
import axios from "axios"
import { ElMessage } from "element-plus"
import { defineComponent, onMounted, reactive, ref } from "vue"
import { useRouter } from "vue-router"
window.scrollTo(0, 0);//轮动条置顶
let router = useRouter()
const content = ref("")
const blog_id = router.currentRoute.value.query.id
//获取所有博客信息
let blog: any = reactive([])
const getblog = async () => {
  await axios({
    method: 'post',
    data: { blog_id },
    url: 'api/getblog',//这里由于之前设置了baseURL,所以直接跳过顶级域名
  })
    .then(function (response: any) {
      console.log(response)
      blog.push(response.data.data[0])
      console.log(blog[0])
    })
    .catch(function (error: any) {
      console.log("catch" + error);
      ElMessage.error('获取博客失败，请检查网络!')
      return false
    });
}
onMounted(async () => {
 await getblog()
  if (blog.length == 0) {
    router.push({
      name: 'c404',

    })
  }
});
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .xiahuaxian{
    margin-top: 10%;
      width: 50px;
      height: 10px;
      border-bottom:3px solid rgb(167,132,88);
  }
  .riqi{
    font-size: 12px;
    color: rgb(125, 125, 125);
  }
  .foot{
    margin-top: 200px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .biaoti{
    font-size: 50px;
    font-weight: bolder;
    margin-bottom: 100px;
  }
  .ql-editor{
    width: 80%;
  }
</style>