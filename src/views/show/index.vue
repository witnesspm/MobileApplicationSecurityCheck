<template>
    <div class="box1">
        <div class="box1-img">
            <img src="../../assets/left_k.png" style=" width:48.5px ;height: 201.75px;" alt="" />
            <img class="virusimg" :src="virusimg" alt="" />
            <img src="../../assets/right_k.png" style=" width:48.5px ;height: 201.75px;" alt="" />
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
        <div id="main" :style="{ width: '1000px', height: '500px' }"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue"
import { useRouter } from "vue-router"
import { Back } from '@element-plus/icons-vue'
import jq from 'jquery'
import {gexf} from 'echarts/extension-src/dataTool'
import * as echarts from 'echarts'
//import dataTool from '../../utils/dataTool.js'
export default defineComponent({
    setup() {
        window.scrollTo(0, 0);
        let router = useRouter()
        const virusimg = <string>router.currentRoute.value.query.img
        const virusname = ref(router.currentRoute.value.query.name)
        const size = ref('28px')
        const back = () => {
            router.back()
        }


        onMounted(() => {//需要获取到element,所以是onMounted的Hook
            var myChart = echarts.init(<HTMLElement>document.getElementById('main'))
          
         myChart.showLoading();
           jq.get('gexf/01.gexf', function (xml:any) {
               myChart.hideLoading();

               var graph = gexf.parse(xml);
               var categories = [];
             categories[0]= {
                     //name: '1 normal'	
                     name:'普通函数'
             };//普通节点
             categories[1]= {
                     name:'用户信息获取'
             };
             categories[2]= {
                     name: '用户信息发送'	  
             };
             categories[3]= {
                     name: '风险API调用'	  
             };
             categories[4]= {
                     name: '第三方库'	  
             };
             categories[5]= {
                     name: '组件'	  
             };
             categories[6]= {
                     name: '内含JNI调用代码'	  
             };
             categories[7]= {
                     name: '内含加密代码'	  
             };
           
         
                graph.nodes.forEach(function (node:any) {
                //alert(node);
                node.itemStyle = null;
                var classname=node.attributes[1];
                var methodname=node.attributes[2];
                methodname.replace("/&lt;/","");
                methodname.replace("/&gt;/","");
                methodname.replace("&amp;lt;","");
                methodname.replace("&amp;gt;","");
                 
                classname=classname.substr(1,classname.length-2);
         
                 node.value=classname+" method:"+methodname;
                 //alert(node.value);
                 node.name = classname;// node.id+" "+classname;//node.attributes[1];//node.attributes[25];
                 //alert(node.name);
                 node.category = node.attributes[23];
                 //alert(node.attributes[1]);
                 //alert(node.attributes[20]);
                 //alert(node.attributes[23]);
                 if(node.attributes[23] == '1'){ 
                     //alert('80');
                     node.category = 0;
                     //node.color=rgb(255,255,255);
                     //node.symbolSize=10;
                 }
                 else if(node.attributes[23] == '17'){ 
                     //alert('80');
                     node.category = 4;
                     node.symbolSize=20;
                 }
                 else if(node.attributes[23] == '3'){
                     //alert('3');
                     node.category = 1;
                     node.symbolSize=20;
                 }
                 else if(node.attributes[23] == '5'){
                     //alert('5');
                     node.category = 2;
                     node.symbolSize=20;
                 }
                 else if(node.attributes[23] == '9'){
                     //alert('9');
                     node.category = 3;
                     node.symbolSize=20;
                 }
                 else {
                     //alert('5');
                 node.category = 5;
                 node.symbolSize=10;
                 //node.symbolSize=30;  
                 }
         
                 node.label = {
                     show: false
                 };
                
             });    
             let option = {
                 title: {
                     text: '应用程序',
                     subtext: '恶意行为轮廓图',
                     top: 'bottom',
                     left: 'right'
                 },
                 tooltip : { //工具提示 提示框
                     trigger: 'item',
                     formatter:function(params:any){
                         
                         var node=params.data;
                         var methodname=node.attributes[2];
                         var riskinfo1=node.attributes[19];
                         var riskinfo2=node.attributes[20];
                         var riskinfo3=node.attributes[21];
                         //methodname.replace(/&lt;/,"");
                         //methodname.replace(/&gt;/,"");
                         switch(node.attributes[23]) {
                             case 1:
                                 return " class："+node.value;
                             case 3:
                                 return " class："+node.value+"<br> 获取信息:"+riskinfo3;
                             case 5:
                                 return " class："+node.value+"<br> 发送信息:"+riskinfo3;
                             case 9:
                                 return " class："+node.value+"<br> 风险API调用:"+riskinfo3;
                             case 17:
                                 return " class："+node.value+"<br> 广告库:"+node.attributes[17];
                             case 1:
                                 return " class："+node.value+"<br> 获取信息:"+riskinfo3+"<br> 发送信息:"+riskinfo3;
                             default:
                                 return " class："+node.value+"<br> 多种风险行为";
         
                         } 
                        
                         //return '<div class="toolDiv"><div class="bg-img"></div><div>';
                         //var greenimg = "<img src='images/p1.png'/>";
                         //return  greenimg;
                         
                     },
                     position: function (point:any, params:any, dom:any, rect:any, size:any) {
                         // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
                         // 提示框位置
                         var x = 0; // x坐标位置
                         var y = 0; // y坐标位置
                         
                         // 当前鼠标位置
                         var pointX = point[0];
                         var pointY = point[1];
                         
                         x=pointX+5;
                         y=pointY+5;
         
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
                     show: true,
                     feature: {
                     dataView: { readOnly: false },
                     restore: {},
                     saveAsImage: {}
                     }
                 },
                 series : [
                     {
                         name: 'APP样本',
                         type: 'graph',
                         layout: 'force',
                         edgeSymbol: ['none', 'arrow'],
                         data: graph.nodes,
                         links: graph.links,
                         categories: categories,
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

        });
        return { virusimg, virusname, Back, size, back, }
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
</style>