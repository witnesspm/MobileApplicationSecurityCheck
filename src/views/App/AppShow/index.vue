<template>

    <!-- 添加节点弹窗 -->
    <el-dialog width="70%" v-model="dialogaddnodeVisible" title="添加节点">
        <div class="tabsh">
            <!-- 标签页 -->
            <el-tabs v-model="active" class="demo-tabs ">
                <el-tab-pane name="0">
                    <div>
                        <h4>
                            节点名称:
                        </h4>
                        <el-input v-model="nodelabel" placeholder="label" />
                    </div>

                </el-tab-pane>
                <el-tab-pane name="1">
                    <div class="tab-pane">
                        <!-- 穿梭表 -->
                        <el-transfer v-model="attvalues_arr" style="text-align: left; display: inline-block"
                            :render-content="attvalues_renderFunc" :titles="['属性库', '节点属性']" :format="{
                                noChecked: '${total}',
                                hasChecked: '${checked}/${total}',
                            }" :data="attvalues_data" @change="transferUpdata">
                        </el-transfer>
                    </div>

                </el-tab-pane>
                <el-tab-pane name="2">
                    <div class="tab-pane1">
                        <h2 v-if="!attvalues_arr_z.length">
                            未选择属性
                        </h2>
                        <div v-else v-for="attvalue of attvalues_arr_z" key="attvalue.for">
                            <h4>{{ attvalue.label }}</h4>
                            <el-input clearable v-model="attvalue.value" placeholder="value" />
                        </div>
                    </div>

                </el-tab-pane>

            </el-tabs>


        </div>



        <template #footer>
            <el-steps :active="parseInt(active)" align-center finish-status="success">
                <el-step title="节点名称" />
                <el-step title="节点属性" />
                <el-step title="属性内容" />
            </el-steps>
            <div class="steps_button">
                <el-button style="margin-top: 12px" @click="pre">上一步</el-button>
                <el-button style="margin-top: 12px" @click="next">{{ nextbutton }}</el-button>
            </div>

            <!-- <span class="dialog-footer">
                <el-button type="primary" @click="addnode_true">确定</el-button>
            </span> -->
        </template>
    </el-dialog>
    <!-- 右键菜单 -->
    <v-contextmenu ref="contextmenu">

        <v-contextmenu-item @click="addnode">添加节点</v-contextmenu-item>
        <v-contextmenu-item @click="delenode">删除节点</v-contextmenu-item>
        <v-contextmenu-item @click="ljnode">连接节点</v-contextmenu-item>

    </v-contextmenu>


    <div class="box1">
        <div class="box1-img">
            <img src="../../../assets/left_k.png" style=" width:48.5px ;height: 201.75px;" alt="" />
            <img class="virusimg" :src="virusimg" alt="" />
            <img src="../../../assets/right_k.png" style=" width:48.5px ;height: 201.75px;" alt="" />
        </div>

        <div class="xiahuaxian m-top20"></div>
        <p class="virusname">{{ virusname }}</p>
        <p>病毒简介:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
    </div>
    <div class="box2">
        <div class="box2-top">
            <el-button type="primary" :icon="Back" @click="back" circle />
            <el-divider>
                <p>APP基础信息</p>
            </el-divider>
        </div>
        <div class="box2-body">
            <el-card class="box-card xinxi1">
                <el-descriptions class="margin-top" :column="1" :size="size" border>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                app名称
                                <p class="narrow">大小</p>
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            妖精社区
                            <p class="narrow">2.26MB</p>
                        </div>

                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                文件名
                                <p class="narrow">包名</p>
                                <p class="narrow">主Activity</p>
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            a.apk
                            <p class="narrow">com.adsjn.fkdns</p>
                            <p class="narrow">com.ly.dzxs.WelcomeActivity</p>
                        </div>

                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                SHA1
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            b1442a72bdce9b628d961ccdb9864a6ea83531aa
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                SHA256
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            53f9b43d9bff20c6346f51c1cf210470bc3aa202f63ff6aad6df5c1ffe6db1e2
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                MD5
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            ob29a4267f2c5f2e68475eb40eaecb05</div>
                    </el-descriptions-item>
                </el-descriptions>
            </el-card>
            <el-card class="box-card xinxi2">

                <el-descriptions class="margin-top" :column="1" :size="size" border>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                平均Cvss
                            </div>
                        </template>
                        <div class="Descriptions-neirong">

                        </div>

                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                安全分
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            <div>
                                <el-tag size="small">跟踪器</el-tag>
                                <span> 1/407</span>
                            </div>
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                Virustotal监测
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            3/56
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                版本
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            1.967
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                最大SDK/最小SDK
                            </div>
                        </template>
                        <div class="Descriptions-neirong">
                            /8</div>
                    </el-descriptions-item>
                </el-descriptions>
            </el-card>
        </div>


        <el-card :class="xiangxitu">
            <el-tooltip class="box-item" effect="dark" content="全屏" placement="bottom">
                <el-icon @click="quanping">
                    <FullScreen class="fangdaicon" />
                </el-icon>
            </el-tooltip>

            <el-tooltip class="box-item" effect="dark" content="编辑模式" placement="bottom">
                <el-icon @click="tobjms">
                    <Menu class="fangdaicon" />
                </el-icon>
            </el-tooltip>

            <!-- 替换右键菜单 -->
            <!-- <div v-contextmenu:contextmenu id="main" :class="xitu"> </div> -->
            <div  id="main" :class="xitu"> </div>
        </el-card>
        <div class="silie">
            <el-card class="box-card">
                <div class="silie-box">
                    <div class="silie-box-tubiao">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                    </div>
                    <div class="silie-box-xinxi">
                        <p>+20</p>
                        <p class="narrow">页面Activities</p>
                        <p class="narrow">可导出个数为:7</p>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card ">
                <div class="silie-box">
                    <div class="silie-box-tubiao">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                    </div>
                    <div class="silie-box-xinxi">
                        <p>+24</p>
                        <p class="narrow">服务SERVICES</p>
                        <p class="narrow">可导出个数为:2</p>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card ">
                <div class="silie-box">
                    <div class="silie-box-tubiao">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                    </div>
                    <div class="silie-box-xinxi">
                        <p>+9</p>
                        <p class="narrow">消息接收器Receivers</p>
                        <p class="narrow">可导出个数为:8</p>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card ">
                <div class="silie-box">
                    <div class="silie-box-tubiao">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                    </div>
                    <div class="silie-box-xinxi">
                        <p>+1</p>
                        <p class="narrow">PROVIDERS</p>
                        <p class="narrow">可导出个数为:1</p>
                    </div>
                </div>
            </el-card>
        </div>

    </div>
</template>

<script lang="ts">

import { nextTick, defineComponent, ref, reactive, onMounted, onBeforeUnmount, toRefs, VNodeProps, VNode, getCurrentInstance } from "vue"
import { useRouter } from "vue-router"
import { Back } from '@element-plus/icons-vue'
import jq from 'jquery'
import { gexf } from 'echarts/extension-src/dataTool'
import * as echarts from 'echarts'
import { directive, Contextmenu, ContextmenuItem } from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";
import { ElMessage, ElMessageBox } from 'element-plus'
import { updatagexf_addnode } from '../../../api/api'
import { customAlphabet, nanoid } from 'nanoid'

export default defineComponent({

    directives: {
        contextmenu: directive,
    },
    components: {
        [Contextmenu.name]: Contextmenu,
        [ContextmenuItem.name]: ContextmenuItem,
    },
    setup() {

        const nanoid = customAlphabet('ABCDEFGHIZK', 12);
        const { appContext: { config: { globalProperties } } } = <any>getCurrentInstance()

        window.scrollTo(0, 0);//轮动条置顶
        //接受路由传参
        let router = useRouter()
        const virusimg = <string>router.currentRoute.value.query.img
        const virusname = ref(router.currentRoute.value.query.name)
        const size = ref('28px')
        const nodeid = ref('')
        const nextbutton = ref("下一步")
        //添加节点弹窗
        const dialogaddnodeVisible = ref(false)
        const nodelabel = ref('')
        //穿梭框配置
        interface Option {
            key: number
            label: string
            disabled: boolean
        }
        const generateData = (): Option[] => {
            const data: Option[] = []

            data.push({
                key: 1,
                label: `class_name`,
                disabled: false,
            })
            data.push({
                key: 2,
                label: `method_name`,
                disabled: false,
            })
            data.push({
                key: 3,
                label: `descriptor`,
                disabled: false,
            })
            data.push({
                key: 4,
                label: `api`,
                disabled: false,
            })
            data.push({
                key: 5,
                label: `type`,
                disabled: false,
            })

            return data
        }
        const attvalues_data = ref(generateData())
        const attvalues_arr = ref()
        interface Attvalues {
            for: string
            value: string
            label: string
        }
        const attvalues_arr_z: Array<Attvalues> = reactive([])
        const attvalues_renderFunc = (
            h: (type: string, props: VNodeProps | null, children?: string) => VNode,
            option: Option
        ) => {
            return h('span', null, option.label)
        }
        const transferUpdata = (
            value: any,
            direction: 'left' | 'right',
            movedKeys: string[] | number[]
        ) => {
            attvalues_arr_z.length = 0
            const attvalues_type = [
                { for: '1', value: '', label: `class_name` },
                { for: '2', value: '', label: `method_name` },
                { for: '3', value: '', label: `descriptor` },
                { for: '21', value: '', label: `api` },
                { for: '23', value: '', label: `type` },
            ]
            value.forEach((val: any) => {
                attvalues_arr_z.push(attvalues_type[val - 1])
            })
        }
        //步骤条
        const active = ref("0")
        const pre = () => {
            nextbutton.value = "下一步"
            if ((parseInt(active.value) - 1) <= 0)
                active.value = "0"
            else
                active.value = String(parseInt(active.value) - 1)
        }

        const next = () => {

            if (active.value === '1') nextbutton.value = "提交"
            else nextbutton.value = "下一步"
            //点击提交后
            if (active.value === '2') {
                if (!nodelabel.value) {
                    ElMessage.error("未填写节点名称！")
                    active.value = "0"
                    return false
                }

                if (attvalues_arr_z.length != 0) {
                    let a = 0;
                    attvalues_arr_z.forEach((attvalue) => {
                        if (!attvalue.value) {
                            ElMessage.error(`未填写${attvalue.label}内容！`)
                            active.value = "2"
                            nextbutton.value = "提交"
                            a = 1
                            return false
                        }
                    })
                    if (a === 1) return false
                }

                addnode_true(nodelabel.value, attvalues_arr_z)
                //重置表单
                nodelabel.value = ''
                active.value = "-1"
                attvalues_arr.value = []
                attvalues_arr_z.length = 0

            }
            if ((parseInt(active.value) + 1) >= 3)
                active.value = "3"
            else
                active.value = String(parseInt(active.value) + 1)
        }
        //定义echarts
        let myChart: any
        //返回按钮事件
        const back = () => {
            router.back()
        }
        let gexfwj: any
        const echarsinti = async () => {
            myChart = echarts.init(<HTMLElement>document.getElementById('main'))
            myChart.showLoading();
            await jq.get(globalProperties.$httpUrl + '/data/gexf/04.gexf', function (xml: any) {
                myChart.hideLoading();
                gexfwj = xml;

                var graph = gexf.parse(xml);

                var categories = [];
                categories[0] = {
                    //name: '1 normal'	
                    name: '普通函数'
                };//普通节点
                categories[1] = {
                    name: '用户信息获取'
                };
                categories[2] = {
                    name: '用户信息发送'
                };
                categories[3] = {
                    name: '风险API调用'
                };
                categories[4] = {
                    name: '第三方库'
                };
                categories[5] = {
                    name: '组件'
                };
                categories[6] = {
                    name: '内含JNI调用代码'
                };
                categories[7] = {
                    name: '内含加密代码'
                };
                graph.nodes.forEach(function (node: any) {
                    // let angle=0.1*node.id
                    // node.x=(1+angle)*Math.cos(angle)
                    // node.y=(1+angle)*Math.sin(angle)



                    //alert(node);
                    node.itemStyle = null;
                    var classname = node.attributes[1];
                    var methodname = node.attributes[2];
                    // methodname.replace("/&lt;/", "");
                    // methodname.replace("/&gt;/", "");
                    // methodname.replace("&amp;lt;", "");
                    // methodname.replace("&amp;gt;", "");

                    // classname = classname.substr(1, classname.length - 2);

                    node.value = classname + " method:" + methodname;
                    //alert(node.value);
                    node.name = classname;// node.id+" "+classname;//node.attributes[1];//node.attributes[25];
                    //alert(node.name);
                    node.category = node.attributes[23];
                    //alert(node.attributes[1]);
                    //alert(node.attributes[20]);
                    //alert(node.attributes[23]);
                    if (node.attributes[23] == '1') {
                        //alert('80');
                        node.category = 0;
                        //node.color=rgb(255,255,255);
                        //node.symbolSize=10;
                    }
                    else if (node.attributes[23] == '17') {
                        //alert('80');
                        node.category = 4;
                        node.symbolSize = 20;
                    }
                    else if (node.attributes[23] == '3') {
                        //alert('3');
                        node.category = 1;
                        node.symbolSize = 20;
                    }
                    else if (node.attributes[23] == '5') {
                        //alert('5');
                        node.category = 2;
                        node.symbolSize = 20;
                    }
                    else if (node.attributes[23] == '9') {
                        //alert('9');
                        node.category = 3;
                        node.symbolSize = 20;
                    }
                    else {
                        //alert('5');
                        node.category = 5;
                        node.symbolSize = 10;
                        //node.symbolSize=30;  
                    }

                    node.label = {
                        show: false
                    };

                });
                let option = {
                    title: {
                        text: '详细风险图',
                        subtext: '恶意行为轮廓图',
                        top: 'bottom',
                        left: 'left'
                    },
                    tooltip: { //工具提示 提示框
                        show: true,
                        trigger: 'item',
                        formatter: function (params: any) {

                            var node = params.data;
                            var methodname = node.attributes[2];
                            var riskinfo1 = node.attributes[19];
                            var riskinfo2 = node.attributes[20];
                            var riskinfo3 = node.attributes[21];
                            //methodname.replace(/&lt;/,"");
                            //methodname.replace(/&gt;/,"");
                            switch (node.attributes[23]) {
                                case 1:
                                    return " class：" + node.value;
                                case 3:
                                    return " class：" + node.value + "<br> 获取信息:" + riskinfo3;
                                case 5:
                                    return " class：" + node.value + "<br> 发送信息:" + riskinfo3;
                                case 9:
                                    return " class：" + node.value + "<br> 风险API调用:" + riskinfo3;
                                case 17:
                                    return " class：" + node.value + "<br> 广告库:" + node.attributes[17];
                                case 1:
                                    return " class：" + node.value + "<br> 获取信息:" + riskinfo3 + "<br> 发送信息:" + riskinfo3;
                                default:
                                    return " class：" + node.value + "<br> 多种风险行为";

                            }

                            //return '<div class="toolDiv"><div class="bg-img"></div><div>';
                            //var greenimg = "<img src='images/p1.png'/>";
                            //return  greenimg;

                        },
                        position: function (point: any, params: any, dom: any, rect: any, size: any) {
                            // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
                            // 提示框位置
                            var x = 0; // x坐标位置
                            var y = 0; // y坐标位置

                            // 当前鼠标位置
                            var pointX = point[0];
                            var pointY = point[1];

                            x = pointX + 5;
                            y = pointY + 5;

                            // 外层div大小
                            // var viewWidth = size.viewSize[0];
                            // var viewHeight = size.viewSize[1];

                            // 提示框大小
                            /*var boxWidth = size.contentSize[0];
                            var boxHeight = size.contentSize[1];
                            
                            // boxWidth > pointX 说明鼠标左边放不下提示框
                            if (boxWidth > pointX) {
                                x = 5;
                            } else { // 左边放的下
                                x = pointX - boxWidth;
                            }
                            
                            // boxHeight > pointY 说明鼠标上边放不下提示框
                            if (boxHeight > pointY) {
                                y = 5;
                            } else { // 上边放得下
                            // y = pointY - boxHeight;
                            y= 20;
                            }
                            */
                            return [x, y];
                        },
                        //  // 设置内边距为 5
                        //      padding: 5,
                        //      // 设置上下的内边距为 5，左右的内边距为 10
                        //      padding: [5, 10],
                        //      // 分别设置四个方向的内边距
                        padding: [
                            5,  // 上
                            10, // 右
                            5,  // 下
                            10, // 左
                        ]

                    },
                    legend: [{
                        // selectedMode: 'single',
                        data: categories.map(function (a) {
                            return a.name;
                        })
                    }],

                    animationDuration: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    toolbox: {
                        top: 'bottom',
                        left: 'right',
                        show: true,
                        feature: {
                            dataView: { readOnly: false },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series: [
                        {
                            name: 'APP样本',
                            type: 'graph',
                            layout: 'force',
                            edgeSymbol: ['none', 'arrow'],
                            data: graph.nodes,
                            links: graph.links,
                            categories: categories,
                            //draggable:true,//可拖拽
                            roam: true,
                            focusNodeAdjacency: true,
                            itemStyle: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                shadowBlur: 5,
                                shadowColor: 'rgba(0, 0, 0, 0.3)'
                            },
                            label: {
                                position: 'right',
                                formatter: '{b}'
                            },
                            lineStyle: {
                                color: 'source',
                                curveness: 0
                            },
                            emphasis: {
                                lineStyle: {
                                    width: 10
                                }
                            },
                            force: {

                                repulsion: 420,
                                edgeLength: 100
                            }
                        }

                    ]
                };
                myChart.setOption(<any>option);
            }, 'xml');
            myChart.on('contextmenu', function (params: any) {

                nodeid.value = params.data.id


            });

        }
        //注册全屏显示
        let isquanping = 0
        let xiangxitu = ref("box-card xiangxitu")
        let xitu = ref("echarstu")
        const quanping = () => {
            if (!isquanping) {
                xiangxitu.value = "box-card quanpingxiangxitu"
                xitu.value = "quanpingecharstu"
                setTimeout(() => {
                    echarts.init(<HTMLElement>document.getElementById('main')).dispose();
                    echarsinti()
                    isquanping = 1
                }, 100);
            } else {
                xiangxitu.value = "box-card xiangxitu"
                xitu.value = "echarstu"
                setTimeout(() => {
                    echarts.init(<HTMLElement>document.getElementById('main')).dispose();
                    echarsinti()
                    isquanping = 0
                }, 100);
            }
        }

        //注册添加节点
        const addnode = () => {

            dialogaddnodeVisible.value = true

        }
        //将xmldom转为字符串
        function xmlToString(xmlObj: any) {

            return (new XMLSerializer()).serializeToString(xmlObj);

        }

        //注册确定添加节点
        const addnode_true = (nodelabel: string, attvalues_arr: Array<Attvalues>) => {
            //创建node节点
            var node = gexfwj.createElement("node");
            node.id = nanoid();
            node.setAttribute("label", nodelabel)
            //创建node子节点attvalues
            var attvalues = gexfwj.createElement("attvalues");
            node.appendChild(attvalues);
            // 创建attvalues子节点attvalue
            attvalues_arr.forEach((attvalue) => {
                let attvalue1 = gexfwj.createElement("attvalue");
                attvalue1.setAttribute("for", attvalue.for)
                attvalue1.setAttribute("value", attvalue.value)
                attvalues.appendChild(attvalue1);
            })

            gexfwj.getElementsByTagName("nodes")[0].appendChild(node);


            //修改图表
            let aaa = xmlToString(gexfwj)
            updatagexf_addnode({ aaa }).then(res => {
                console.log(res)
                //刷新图表
                echarts.init(<HTMLElement>document.getElementById('main')).dispose();
                echarsinti()
                ElMessage.success("添加成功！")
                //关闭弹窗
                dialogaddnodeVisible.value = false
            })


        }
        //路由跳转-appupdata
        const tobjms = () => {
            router.push({
                name: 'AppUpdata',
                //后续将具体gexf传过去
                // query: {
                //     img, name
                // }
            })
        }
        //确认是否删除
        const if_delenode = async (nodeid: string) => {
            await ElMessageBox.confirm(
                '您确定要删除该节点吗?',
                '警告',
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            )
                .then(async () => {
                    console.log(nodeid)
                    console.log(gexfwj)
                    //删除node节点
                    let nnn = gexfwj.querySelectorAll(`node`);
                    nnn.forEach((n: any) => {

                        if (n.id === nodeid) {
                            let parent = n.parentElement;
                            parent.removeChild(n);
                        }
                    })
                    // 删除edge节点
                    let eee = gexfwj.querySelectorAll(`edge`);
                    eee.forEach((n: any) => {
                        if (n.getAttribute("source") === nodeid) {
                            let parent = n.parentElement;
                            parent.removeChild(n);
                            return
                        }
                        if (n.getAttribute("target") === nodeid) {
                            let parent = n.parentElement;
                            parent.removeChild(n);
                            return
                        }
                    })


                    //修改图表
                    let aaa = xmlToString(gexfwj)
                    await updatagexf_addnode({ aaa }).then(res => {
                        console.log(res)
                        //刷新图表
                        echarts.init(<HTMLElement>document.getElementById('main')).dispose();
                        echarsinti()
                        ElMessage.success("删除成功。")
                    })
                })
                .catch(() => {

                })
        }
        //注册删除节点
        const delenode = () => {

            if (nodeid.value === '') {
                ElMessage.error('请选中节点后右键')
            } else {

                if_delenode(nodeid.value)
                nodeid.value = ''
            }

        }



        //注册连接节点
        const ljnode = () => {
            alert("11")
        }
        //隐藏菜单事件
        const hidecaidan = () => {

            nodeid.value = ''

        }

        onMounted(async () => {
            //加载echars
            echarsinti()


        });
        onBeforeUnmount(() => {
            echarts.init(<HTMLElement>document.getElementById('main')).dispose();
        })
        return { tobjms, if_delenode, nextbutton, attvalues_arr_z, pre, active, next, transferUpdata, attvalues_renderFunc, attvalues_arr, attvalues_data, addnode_true, nodelabel, dialogaddnodeVisible, hidecaidan, nodeid, delenode, ljnode, addnode, virusimg, virusname, Back, size, back, quanping, xiangxitu, xitu }
    }
})
</script>

<style lang="less" scoped>
@import './less/box1.less';
@import './less/box2.less';
@ziti: 宋体;


* {
    font-family: @ziti;
}

.m-top160 {
    margin-top: 160px;
}

.m-top20 {

    margin-top: 20px;
}

.w10 {
    width: 10px;
}

.steps_button {
    display: flex;
    justify-content: center;
}

.tabsh {
    height: 300px;
}

.tab-pane {
    height: 250px;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tab-pane1 {
    height: 250px;
    width: 100%;
    overflow-y: auto;

}

.nodj {
    pointer-events: none;
}
</style>