<template>
  <div class="big_box">
    <el-card class="box-card">
      <h1>发布博客</h1>
      <div class="blog_title">
        <h3>博客标题</h3>
        <el-input v-model="blog_title" maxlength="10" placeholder="请输入博客标题" show-word-limit type="text" />
      </div>
      <div class="blog_content">
        <h3>博客内容</h3>
        <Editor ref="blog_content" getContent="请输入内容吧！" />
      </div>

      <div class="blog_cover_people">
        <div>
          <h3>博客封面</h3>
          <el-upload class="avatar-uploader" :action="action" :show-file-list="false" :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </div>
        <div class="blog_people">
          <el-input v-model="release_people" maxlength="6" placeholder="请输入发布人" show-word-limit type="text" />
        </div>
        <el-button @click="fabu" type="primary">
          <el-icon>
            <ArrowRightBold />
          </el-icon>
        </el-button>
      </div>
    </el-card>


  </div>


</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue"
import Editor from '../../../components/editor.vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import axios from 'axios'
import { useRouter } from "vue-router"
export default defineComponent({
  components: {
    Editor
  },
  setup() {
    let router = useRouter()
    const blog_title: any = ref('')
    const release_people: any = ref('')
    const blog_cover: any = ref('')
    const blog_content: any = ref('')

    //获取全局地址
    const { appContext: { config: { globalProperties } } } = <any>getCurrentInstance()
    const action = ref(globalProperties.$httpUrl + "/api/upload_img")

    //上传博客封面
    const imageUrl = ref('')
    const handleAvatarSuccess: UploadProps['onSuccess'] = (
      response,
      uploadFile
    ) => {
      let newImage: any = new Image()
      // 这里将src传入需要获取信息的图片地址或base64
      newImage.src = URL.createObjectURL(uploadFile.raw!)
      // onload是异步的,封装的话可以用promise
      newImage.onload = () => {
        // 输出图片信息 比如可以获取图片宽高
        let w = parseInt(newImage.width)
        let h = parseInt(newImage.height)
        if (w == 320 && h == 180) {
          blog_cover.value = globalProperties.$httpUrl + response.data.path
          imageUrl.value = URL.createObjectURL(uploadFile.raw!)
        } else {
          ElMessage.error('请上传320×180的图片')
          return false
        }

      }

    }
    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
      if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
        ElMessage.error('请上传JPG/PNG!')
        return false
      } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('上传文件请小于2MB!')
        return false
      }
      return true
    }
    //注册发布事件
    const fabu = () => {
      if (blog_title.value == '' || release_people.value == '' || blog_cover.value == '') {
        ElMessage.error('标题/封面/发布人禁止为空！')
        return false
      }
      axios({
        method: 'post',
        url: 'api/add_blog',//这里由于之前设置了baseURL,所以直接跳过顶级域名
        data: {
          blog_title: blog_title.value,
          blog_cover: blog_cover.value,
          blog_content: blog_content._value.content,
          release_people: release_people.value

        }
      })
        .then(function (response: any) {
          console.log(response)
          if (response.data.status == '0') {
            ElMessage.success('发布成功！')
            router.push({
              name: "BlogHome",
            })
            return false
          }
          ElMessage.error('请检查网络!')
          return false
        })
        .catch(function (error: any) {
          console.log("catch" + error);
          ElMessage.error('请检查网络!')
          return false
        });

    }
    return {
      blog_content,
      fabu,
      blog_title,
      release_people,
      blog_cover,
      handleAvatarSuccess,
      beforeAvatarUpload,
      imageUrl,
      action
    }
  }
})
</script>

<style lang="less" scoped>
.nosey {
  opacity: 0;
}

.big_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;

  .blog_title {
    width: 1000px;
  }

  .blog_content {
    width: 1000px;
  }

  .blog_cover_people {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .blog_people {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .el-button {

      width: 240px;
      height: 260px;
      font-size: 70px;
    }
  }


}

.avatar-uploader .avatar {
  width: 320px;
  height: 180px;
  display: block;
}

.avatar-uploader {

  border: 1px solid #b7bbc2;
  transition-property: border-color;
  transition-duration: 0.5s;
}

.avatar-uploader:hover {
  border-color: rgb(156, 123, 81);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 320px;
  height: 180px;
  text-align: center;
}

.box-card {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>