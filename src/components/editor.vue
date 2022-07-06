<template>
  <div style="margin-bottom: 5px; border-radius: 10px">
    <el-upload class="editor-img-uploader" :action="upLoadUrl" :show-file-list="false" :headers="headers"
      :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <i class="el-icon-plus editor-img-uploader"></i>
    </el-upload>
    <QuillEditor id="editorId" ref="myQuillEditor" v-model:content="content" theme="snow" contentType="html"
      :options="options" />
  </div>
</template>

<script>
import { QuillEditor, Quill } from "@vueup/vue-quill";
import { reactive, ref, toRaw, getCurrentInstance } from "vue";
import { ElMessage } from "element-plus";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  components: { QuillEditor },
  props: {
    // 富文本编辑器
    getContent: { type: String, default: "" },
  },
  setup(props) {
    const { appContext: { config: { globalProperties } } } = getCurrentInstance()
    let content = ref("");
    content.value = props.getContent;
    let upLoadUrl = ref(
      globalProperties.$httpUrl + "/api/upload_img"
    );
    let headers = reactive({
      token: sessionStorage.getItem("token"),
    });
    const myQuillEditor = ref(null)
    const fontSizeStyle = Quill.import('attributors/style/size') // 引入这个后会把样式写在style上
    fontSizeStyle.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px']
    Quill.register(fontSizeStyle, true)
    // 设置字体样式
    const Font = Quill.import('attributors/style/font') // 引入这个后会把样式写在style上
    const fonts = [
      'SimSun',
      'SimHei',
      'Microsoft-YaHei',
      'KaiTi',
      'FangSong'
    ]
    Font.whitelist = fonts // 将字体加入到白名单
    Quill.register(Font, true)
    const options = reactive({
      modules: {
        toolbar: {
          container: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
            [{ align: [] }], // 对齐方式-----[{ align: [] }]
            [{ size: fontSizeStyle.whitelist }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
            [{ font: fonts }], // 字体种类-----[{ font: [] }]
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  
            [{ indent: '-1' }, { indent: '+1' }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
            [{ script: 'sub' }, { script: 'super' }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
            ['blockquote', 'code-block'], // 引用  代码块-----['blockquote', 'code-block']
            ['clean'], // 清除文本格式-----['clean']
            ['link', 'image'] // 链接、图片、视频-----['link', 'image', 'video']
          ],
          handlers: {
            image: function (value) {
              if (value) {
                // 调用element图片上传
                document
                  .querySelector(".editor-img-uploader>.el-upload")
                  .click();
              } else {
                Quill.format("image", true);
              }
            },
          },
        },
        history: {
          delay: 1000,
          maxStack: 50,
          userOnly: false
        },
      },
    });
    // 图片上传成功返回图片地址
    function handleAvatarSuccess(res, file) {
      // 如果上传成功
      if (res) {
        // 获取富文本实例
        let quill = toRaw(myQuillEditor.value).getQuill();
        // 获取光标位置
        let length = quill.selection.savedRange.index;
        // 插入图片，res为服务器返回的图片链接地址
        quill.insertEmbed(length, "image", globalProperties.$httpUrl + res.data.path);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        ElMessage({
          message: "提交失败！",
          type: "error",
        });
      }
    }
    // 图片上传前拦截
    function beforeAvatarUpload(file) {
      const type = ["image/jpeg", "image/jpg", "image/png", "image/svg"];
      const isJPG = type.includes(file.type);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        ElMessage({
          message: "图片格式错误",
          type: "error",
        });
      }
      if (!isLt2M) {
        ElMessage({
          message: "上传图片不能超过" + size.value + "M",
          type: "error",
        });
      }
      return isJPG && isLt2M;
    }
    return {
      options,
      content,
      upLoadUrl,
      headers,
      myQuillEditor,
      handleAvatarSuccess,
      beforeAvatarUpload
    };
  },
};
</script>
<style scoped lang='less'>
.editor-img-uploader {
  display: none;
}



</style>
