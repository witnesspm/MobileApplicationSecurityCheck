<template>
    <el-backtop :visibility-height=600 :right="150" :bottom="100" />

    <!-- top -->
    <div class="box ">
        <p>移动应用</p>
        <div class="xiahuaxian"></div>
        <div class="bg"></div>
        <p>安全检测</p>
        <img src="../../assets/virus.png" alt="" />
    </div>
    <!-- 病毒轮播展示 -->
    <div class="box2">
        <div class="xiahuaxian m-top160"></div>
        <p>代表性病毒</p>
        <p> &nbsp
            &nbsp共收录162类15000个病毒，涵盖ADRD、BaseBridge、Cawitt、Dabom、EICAR-Test-File、FaceNiff、Gamex、Hamob、Iconosys、Jifake、Kidlogger、Lemon、Maistealer、Nandrobox、Opfake、PdaSpy、Qicsom、Raden、SafeKidZone、Tapsnake、Updtbot、Vdloader、Whapsni、Xsider、YcChar、Zitmo。
        </p>
        <div class="lunbo juzhong">
            <div class="lunbo-box">
                <div v-for="virus of virusobjs" key="virus.id">
                    <div class="lunbogeli">
                        <img style="cursor: pointer;" @click="tiaozhuan(virus.img, virus.name)" :src="virus.img" alt="">
                        <p style=" font-size: 15px;">{{ virus.name }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="box3">
        <div class="xiahuaxian m-top120"></div>
        <p>查询具体病毒</p>
        <div class="chaxunbingdu">
            <el-select clearable v-model="value" class="m-2" placeholder="样本/病毒库" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <div class="w10"></div>
            <el-select clearable disabled v-model="value" class="m-2" placeholder="分类" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <div class="w10"></div>
            <el-select clearable disabled v-model="value" class="m-2" placeholder="MD5值/样本名" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <div class="w10"></div>
            <el-button size="large" type="primary">搜索</el-button>
        </div>

    </div>
</template>


<script lang="ts">
import { defineComponent, ref, reactive } from "vue"
import { useRouter } from "vue-router"
export default defineComponent({
    setup() {
        let router =useRouter()
        const virusobjs = reactive([
            {
                id: 1,
                img: '/virusimg/01.jpg',
                name: '01病毒',
            },
            {
                id: 2,
                img: '/virusimg/02.jpg',
                name: '02病毒',
            },
            {
                id: 3,
                img: '/virusimg/03.jpg',
                name: '03病毒',
            },
            {
                id: 4,
                img: '/virusimg/04.jpg',
                name: '04病毒',
            },
            {
                id: 5,
                img: '/virusimg/05.jpg',
                name: '05病毒',
            },
            {
                id: 6,
                img: '/virusimg/06.jpg',
                name: '06病毒',
            }
            ,
            {
                id: 7,
                img: '/virusimg/06.jpg',
                name: '07病毒',
            }
            ,
            {
                id: 8,
                img: '/virusimg/06.jpg',
                name: '08病毒',
            }, {
                id: 1,
                img: '/virusimg/01.jpg',
                name: '01病毒',
            },
            {
                id: 2,
                img: '/virusimg/02.jpg',
                name: '02病毒',
            },
            {
                id: 3,
                img: '/virusimg/03.jpg',
                name: '03病毒',
            },
            {
                id: 4,
                img: '/virusimg/04.jpg',
                name: '04病毒',
            },
            {
                id: 5,
                img: '/virusimg/05.jpg',
                name: '05病毒',
            },
            {
                id: 6,
                img: '/virusimg/06.jpg',
                name: '06病毒',
            }
            ,
            {
                id: 7,
                img: '/virusimg/06.jpg',
                name: '07病毒',
            }
            ,
            {
                id: 8,
                img: '/virusimg/06.jpg',
                name: '08病毒',
            }
            ,
            {
                id: 6,
                img: '/virusimg/06.jpg',
                name: '06病毒',
            }
            ,
            {
                id: 7,
                img: '/virusimg/06.jpg',
                name: '07病毒',
            }
            ,
            {
                id: 8,
                img: '/virusimg/06.jpg',
                name: '08病毒',
            }
            ,
            {
                id: 6,
                img: '/virusimg/06.jpg',
                name: '06病毒',
            }
            ,
            {
                id: 7,
                img: '/virusimg/06.jpg',
                name: '07病毒',
            }
            ,
            {
                id: 8,
                img: '/virusimg/06.jpg',
                name: '08病毒',
            }
        ])
        const value = ref('')
        const options = [
            {
                value: 'Option1',
                label: 'Option1',
            },
            {
                value: 'Option2',
                label: 'Option2',
            },
            {
                value: 'Option3',
                label: 'Option3',
            },
            {
                value: 'Option4',
                label: 'Option4',
            },
            {
                value: 'Option5',
                label: 'Option5',
            },
        ]
        const tiaozhuan = (img: string, name: string) => {
            router.push({
                name: 'show',
                query:{
                    img,name
                }
            })
        }
        return { virusobjs, value, options, tiaozhuan }
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

.m-top160 {
    margin-top: 160px;
}

.m-top120 {

    margin-top: 120px;
}

.w10 {
    width: 10px;
}

.chaxunbingdu {
    display: flex;

}
</style>
