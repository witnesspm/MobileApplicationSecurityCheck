<template>
  <!-- 显示html内容 -->
  <div class="box">
    <p class="zuozhe">{{ blog[0]?.blog_title }}</p>
    <div class="xiahuaxian"></div>
    <p class="biaoti">{{ blog[0]?.release_people }}</p>
    <div class="show-component">
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="blog[0]?.blog_content"></div>
      </div>
    </div>

  </div>

  <div class="foot">
    
    <p class="riqi">{{ blog[0]?.release_date }}</p>
  </div>

</template>

<script lang="ts" setup>
import axios from "axios"
import { getablog } from '../../../api/api'
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
  await 
  getablog({blog_id})
    .then(function (response: any) {
      blog.push(response.data.data[0])
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
@ziti: 宋体;

p {
    font-family: @ziti;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.zuozhe{
  margin-top: 10%;
   font-size: 30px;
}
.xiahuaxian {
  
  width: 50px;
  height: 10px;
  border-bottom: 3px solid rgb(167, 132, 88);
}

.riqi {
  font-size: 12px;
  color: rgb(125, 125, 125);
}

.foot {
  margin-top: 200px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.biaoti {
 
  margin-bottom: 100px;
}

.show-component {
  width: 1000px;
  // 编写自定义展示情况
  .ql-container {

    // 可以根据需要编写一些内容
    // 例如：展示的img图片大小默认改为90%宽度
    .ql-editor {
      img {
        width: 90%; // 这样所有的图片都会只有90%的宽度
      }
    }
  }
}
</style>