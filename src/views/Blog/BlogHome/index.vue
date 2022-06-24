<template>
    <el-backtop :visibility-height=600 :right="150" :bottom="100" />

    <!-- top -->
    <div class="box ">
        <p>阅读</p>
        <div class="xiahuaxian"></div>
        <div class="bg"></div>

        <p>所有博客</p>
        <el-button @click="fabiao" type="primary" round>
            <el-icon>
                <EditPen />
            </el-icon>我也要发博客
        </el-button>
    </div>
    <!-- 病毒轮播展示 -->
    <div class="box2">
        <div class="box2-neirong">
            <div class="xiahuaxian m-top160"></div>
            <p class="tietle">浏览</p>
            <h1 v-if="allblog.length == 0">暂无博客</h1>
            <div v-else v-for="blog of allblog" key="blog.blog_id">
                <div class="bloglan">
                    <div class="blogimg">
                        <img @click="xiangqing(blog.blog_id)" :src="blog.blog_cover" alt="" />
                    </div>
                    <div class="blogfont">
                        <p @click="xiangqing(blog.blog_id)">{{ blog.blog_title }}</p>
                        <p>-{{ blog.release_people }}</p>
                        <p>{{ blog.release_date }}</p>
                    </div>
                </div>
            </div>
        </div>




    </div>
    <div class="box3">
        <div class="xiahuaxian m-top120"></div>
        <p>快去发一篇博客吧！</p>


    </div>

</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue"
import { useRouter } from "vue-router"
import axios from 'axios'
import { ElMessage } from 'element-plus'
export default defineComponent({
    setup() {
        window.scrollTo(0, 0);//轮动条置顶
        let router = useRouter()
        const fabiao = () => {
            router.push({
                name: "BlogSubmit",
            })
        }
        const xiangqing = (id: number) => {
            router.push({
                name: "BlogArticle",
                query: {
                    id
                }
            })
        }

        //获取所有博客信息
        let allblog: any = reactive([])
        const getallblog = async () => {
            await axios({
                method: 'get',
                url: 'api/getblog',//这里由于之前设置了baseURL,所以直接跳过顶级域名
            })
                .then(function (response: any) {
                    console.log(response)
                    allblog.push(...response.data.data)
                })
                .catch(function (error: any) {
                    console.log("catch" + error);
                    ElMessage.error('获取博客失败，请检查网络!')
                    return false
                });
        }
        onMounted(async () => {
            getallblog()




        });
        return { fabiao, allblog, getallblog, xiangqing }
    }
})
</script>

<style lang="less" scoped>
@import './less/box1.less';
@import './less/box2.less';
@import './less/box3.less';
@ziti: 宋体;

p {
    font-family: @ziti;
}
</style>