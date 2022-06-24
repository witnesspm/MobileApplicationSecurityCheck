<template>
    <!-- top -->

    <!-- shenti -->
    <div class="shenti">
        <div class="xiahuaxian"></div>
        <h2>样例检测图</h2>
        <p>In total, the expression of 107 receptors for 142 animal viruses were investigated.</p>
        <div class="echarss">
            <div id="main1" class="echarkg"> </div>
            <div id="main2" class="echarkg"> </div>
            <div id="main3" class="echarkg"> </div>
        </div>
        <div class="echarss">
            <div id="main4" class="echarkg"> </div>
            <div id="main5" class="echarkg"> </div>
            <div id="main6" class="echarkg"> </div>
        </div>
    </div>
    <!-- foot -->
    <div class="juzhong">
     <div class="xiahuaxian"></div>
     <h2>应用安全检测</h2>
    </div>

    <div class="big-box">
        
        <div class="left-button-group">
     
            <button @click="tiaozhuan('AppHome')" class="custom-btn btn-7"><span>app安全检测</span></button>
            <button  class="custom-btn btn-7"><span>固件安全检测</span></button>
<button  class="custom-btn btn-7"><span>硬件安全连接与检测</span></button>
<button  class="custom-btn btn-7"><span>无线安全分析</span></button>


        </div>
        <!-- <div class="box ">
            
            <p>应用安全</p>
            <div class="xiahuaxian"></div>
            <div class="bg"></div>
            <p>检测系统</p>
        </div> -->
        <div class="right-button-group">    <button @click="tiaozhuan('AppHome')" class="custom-btn btn-7"><span>app安全检测</span></button>
            <button  class="custom-btn btn-7"><span>固件安全检测</span></button>
<button  class="custom-btn btn-7"><span>硬件安全连接与检测</span></button>
<button  class="custom-btn btn-7"><span>无线安全分析</span></button>

        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue"
import { CaretLeft, CaretRight } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import * as echarts from 'echarts'
export default defineComponent({
    setup() {
        let router = useRouter()
        const lefticon = '#e9be89'
        const leftxinxi = '#EBCFAD'
        const tiaozhuan = (urlname: string) => {
            router.push({
                name: urlname,
            })
        }
        //echars
        const echarsinti1 = async () => {
            var chartDom = document.getElementById('main1');
            var myChart = echarts.init(chartDom);
            var option: any
            option = {
                color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                title: {
                    left: 'center',
                    text: 'Gradient Stacked Area Chart'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },


                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(128, 255, 165)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(1, 191, 236)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [140, 232, 101, 264, 90, 340, 250]
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(0, 221, 255)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(77, 119, 255)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 282, 111, 234, 220, 340, 310]
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(55, 162, 255)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(116, 21, 219)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 132, 201, 334, 190, 130, 220]
                    },
                    {
                        name: 'Line 4',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 0, 135)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(135, 0, 157)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 402, 231, 134, 190, 230, 120]
                    },
                    {
                        name: 'Line 5',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 191, 0)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(224, 62, 76)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 302, 181, 234, 210, 290, 150]
                    }
                ]
            };




            option && myChart.setOption(option);
        }
        const echarsinti2 = async () => {
            var chartDom = document.getElementById('main2');
            var myChart = echarts.init(chartDom);
            var option: any
            const item1 = {
                color: '#F54F4A'
            };
            const item2 = {
                color: '#FF8C75'
            };
            const item3 = {
                color: '#FFB499'
            };

            const data = [
                {
                    children: [
                        {
                            value: 5,
                            children: [
                                {
                                    value: 1,
                                    itemStyle: item1
                                },
                                {
                                    value: 2,
                                    children: [
                                        {
                                            value: 1,
                                            itemStyle: item2
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        {
                                            value: 1
                                        }
                                    ]
                                }
                            ],
                            itemStyle: item1
                        },
                        {
                            value: 10,
                            children: [
                                {
                                    value: 6,
                                    children: [
                                        {
                                            value: 1,
                                            itemStyle: item1
                                        },
                                        {
                                            value: 1
                                        },
                                        {
                                            value: 1,
                                            itemStyle: item2
                                        },
                                        {
                                            value: 1
                                        }
                                    ],
                                    itemStyle: item3
                                },
                                {
                                    value: 2,
                                    children: [
                                        {
                                            value: 1
                                        }
                                    ],
                                    itemStyle: item3
                                },
                                {
                                    children: [
                                        {
                                            value: 1,
                                            itemStyle: item2
                                        }
                                    ]
                                }
                            ],
                            itemStyle: item1
                        }
                    ],
                    itemStyle: item1
                },
                {
                    value: 9,
                    children: [
                        {
                            value: 4,
                            children: [
                                {
                                    value: 2,
                                    itemStyle: item2
                                },
                                {
                                    children: [
                                        {
                                            value: 1,
                                            itemStyle: item1
                                        }
                                    ]
                                }
                            ],
                            itemStyle: item1
                        },
                        {
                            children: [
                                {
                                    value: 3,
                                    children: [
                                        {
                                            value: 1
                                        },
                                        {
                                            value: 1,
                                            itemStyle: item2
                                        }
                                    ]
                                }
                            ],
                            itemStyle: item3
                        }
                    ],
                    itemStyle: item2
                },
                {
                    value: 7,
                    children: [
                        {
                            children: [
                                {
                                    value: 1,
                                    itemStyle: item3
                                },
                                {
                                    value: 3,
                                    children: [
                                        {
                                            value: 1,
                                            itemStyle: item2
                                        },
                                        {
                                            value: 1
                                        }
                                    ],
                                    itemStyle: item2
                                },
                                {
                                    value: 2,
                                    children: [
                                        {
                                            value: 1
                                        },
                                        {
                                            value: 1,
                                            itemStyle: item1
                                        }
                                    ],
                                    itemStyle: item1
                                }
                            ],
                            itemStyle: item3
                        }
                    ],
                    itemStyle: item1
                },
                {
                    children: [
                        {
                            value: 6,
                            children: [
                                {
                                    value: 1,
                                    itemStyle: item2
                                },
                                {
                                    value: 2,
                                    children: [
                                        {
                                            value: 2,
                                            itemStyle: item2
                                        }
                                    ],
                                    itemStyle: item1
                                },
                                {
                                    value: 1,
                                    itemStyle: item3
                                }
                            ],
                            itemStyle: item3
                        },
                        {
                            value: 3,
                            children: [
                                {
                                    value: 1
                                },
                                {
                                    children: [
                                        {
                                            value: 1,
                                            itemStyle: item2
                                        }
                                    ]
                                },
                                {
                                    value: 1
                                }
                            ],
                            itemStyle: item3
                        }
                    ],
                    itemStyle: item1
                }
            ];

            option = {
                title: {
                    left: 'center',
                    text: 'Gradient Stacked Area Chart'
                },
                series: {
                    radius: ['15%', '80%'],
                    type: 'sunburst',
                    sort: undefined,
                    emphasis: {
                        focus: 'ancestor'
                    },
                    data: data,
                    label: {
                        rotate: 'radial'
                    },
                    levels: [],
                    itemStyle: {
                        color: '#ddd',
                        borderWidth: 2
                    }
                }
            };
            option && myChart.setOption(option);
        }
        const echarsinti3 = async () => {
            var chartDom = document.getElementById('main3');
            var myChart = echarts.init(chartDom);
            var option: any
            let noise = getNoiseHelper();
            let xData: number[] = [];
            let yData: number[] = [];
            noise.seed(Math.random());
            function generateData(theta: number, min: number, max: number) {
                let data:any = [];
                for (let i = 0; i <= 200; i++) {
                    for (let j = 0; j <= 100; j++) {
                        // let x = (max - min) * i / 200 + min;
                        // let y = (max - min) * j / 100 + min;
                        data.push(<never>[i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
                        // data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
                    }
                    xData.push(i);
                }
                for (let j = 0; j < 100; j++) {
                    yData.push(j);
                }
                return data;
            }
            let data = generateData(2, -5, 5);

            option = {
                title: {
                    left: 'center',
                    text: 'Gradient Stacked Area Chart'
                },
                tooltip: {},
                grid: {
                    right: 140,
                    left: 40
                },
                xAxis: {
                    type: 'category',
                    data: xData
                },
                yAxis: {
                    type: 'category',
                    data: yData
                },
                visualMap: {
                    type: 'piecewise',
                    min: 0,
                    max: 1,
                    left: 'right',
                    top: 'center',
                    calculable: true,
                    realtime: false,
                    splitNumber: 8,
                    inRange: {
                        color: [
                            '#313695',
                            '#4575b4',
                            '#74add1',
                            '#abd9e9',
                            '#e0f3f8',
                            '#ffffbf',
                            '#fee090',
                            '#fdae61',
                            '#f46d43',
                            '#d73027',
                            '#a50026'
                        ]
                    }
                },
                series: [
                    {
                        name: 'Gaussian',
                        type: 'heatmap',
                        data: data,
                        emphasis: {
                            itemStyle: {
                                borderColor: '#333',
                                borderWidth: 1
                            }
                        },
                        progressive: 1000,
                        animation: false
                    }
                ]
            };

            ///////////////////////////////////////////////////////////////////////////
            // perlin noise helper from https://github.com/josephg/noisejs
            ///////////////////////////////////////////////////////////////////////////
            function getNoiseHelper() {
                class Grad {
                    x: number;
                    y: number;
                    z: number;
                    constructor(x: number, y: number, z: number) {
                        this.x = x;
                        this.y = y;
                        this.z = z;
                    }

                    dot2(x: number, y: number) {
                        return this.x * x + this.y * y;
                    }

                    dot3(x: number, y: number, z: number) {
                        return this.x * x + this.y * y + this.z * z;
                    }
                }

                const grad3 = [
                    new Grad(1, 1, 0),
                    new Grad(-1, 1, 0),
                    new Grad(1, -1, 0),
                    new Grad(-1, -1, 0),
                    new Grad(1, 0, 1),
                    new Grad(-1, 0, 1),
                    new Grad(1, 0, -1),
                    new Grad(-1, 0, -1),
                    new Grad(0, 1, 1),
                    new Grad(0, -1, 1),
                    new Grad(0, 1, -1),
                    new Grad(0, -1, -1)
                ];
                const p = [
                    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
                    36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
                    234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
                    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71,
                    134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
                    230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
                    1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130,
                    116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250,
                    124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
                    47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
                    154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
                    108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
                    242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
                    239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121,
                    50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
                    141, 128, 195, 78, 66, 215, 61, 156, 180
                ];
                // To remove the need for index wrapping, double the permutation table length
                let perm = new Array(512);
                let gradP = new Array(512);
                // This isn't a very good seeding function, but it works ok. It supports 2^16
                // different seed values. Write something better if you need more seeds.
                function seed(seed: number) {
                    if (seed > 0 && seed < 1) {
                        // Scale the seed out
                        seed *= 65536;
                    }
                    seed = Math.floor(seed);
                    if (seed < 256) {
                        seed |= seed << 8;
                    }
                    for (let i = 0; i < 256; i++) {
                        let v;
                        if (i & 1) {
                            v = p[i] ^ (seed & 255);
                        } else {
                            v = p[i] ^ ((seed >> 8) & 255);
                        }
                        perm[i] = perm[i + 256] = v;
                        gradP[i] = gradP[i + 256] = grad3[v % 12];
                    }
                }
                seed(0);
                // ##### Perlin noise stuff
                function fade(t: number) {
                    return t * t * t * (t * (t * 6 - 15) + 10);
                }
                function lerp(a: number, b: number, t: number) {
                    return (1 - t) * a + t * b;
                }
                // 2D Perlin Noise
                function perlin2(x: number, y: number) {
                    // Find unit grid cell containing point
                    let X = Math.floor(x),
                        Y = Math.floor(y);
                    // Get relative xy coordinates of point within that cell
                    x = x - X;
                    y = y - Y;
                    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
                    X = X & 255;
                    Y = Y & 255;
                    // Calculate noise contributions from each of the four corners
                    let n00 = gradP[X + perm[Y]].dot2(x, y);
                    let n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
                    let n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
                    let n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
                    // Compute the fade curve value for x
                    let u = fade(x);
                    // Interpolate the four results
                    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
                }

                return {
                    seed,
                    perlin2
                };
            }



            option && myChart.setOption(option);
        }
        const echarsinti4 = async () => {
            var chartDom = document.getElementById('main4');
            var myChart = echarts.init(chartDom);
            var option: any
            const dataBJ = [
                [1, 55, 9, 56, 0.46, 18, 6, '良'],
                [2, 25, 11, 21, 0.65, 34, 9, '优'],
                [3, 56, 7, 63, 0.3, 14, 5, '良'],
                [4, 33, 7, 29, 0.33, 16, 6, '优'],
                [5, 42, 24, 44, 0.76, 40, 16, '优'],
                [6, 82, 58, 90, 1.77, 68, 33, '良'],
                [7, 74, 49, 77, 1.46, 48, 27, '良'],
                [8, 78, 55, 80, 1.29, 59, 29, '良'],
                [9, 267, 216, 280, 4.8, 108, 64, '重度污染'],
                [10, 185, 127, 216, 2.52, 61, 27, '中度污染'],
                [11, 39, 19, 38, 0.57, 31, 15, '优'],
                [12, 41, 11, 40, 0.43, 21, 7, '优'],
                [13, 64, 38, 74, 1.04, 46, 22, '良'],
                [14, 108, 79, 120, 1.7, 75, 41, '轻度污染'],
                [15, 108, 63, 116, 1.48, 44, 26, '轻度污染'],
                [16, 33, 6, 29, 0.34, 13, 5, '优'],
                [17, 94, 66, 110, 1.54, 62, 31, '良'],
                [18, 186, 142, 192, 3.88, 93, 79, '中度污染'],
                [19, 57, 31, 54, 0.96, 32, 14, '良'],
                [20, 22, 8, 17, 0.48, 23, 10, '优'],
                [21, 39, 15, 36, 0.61, 29, 13, '优'],
                [22, 94, 69, 114, 2.08, 73, 39, '良'],
                [23, 99, 73, 110, 2.43, 76, 48, '良'],
                [24, 31, 12, 30, 0.5, 32, 16, '优'],
                [25, 42, 27, 43, 1, 53, 22, '优'],
                [26, 154, 117, 157, 3.05, 92, 58, '中度污染'],
                [27, 234, 185, 230, 4.09, 123, 69, '重度污染'],
                [28, 160, 120, 186, 2.77, 91, 50, '中度污染'],
                [29, 134, 96, 165, 2.76, 83, 41, '轻度污染'],
                [30, 52, 24, 60, 1.03, 50, 21, '良'],
                [31, 46, 5, 49, 0.28, 10, 6, '优']
            ];

            const dataGZ = [
                [1, 26, 37, 27, 1.163, 27, 13, '优'],
                [2, 85, 62, 71, 1.195, 60, 8, '良'],
                [3, 78, 38, 74, 1.363, 37, 7, '良'],
                [4, 21, 21, 36, 0.634, 40, 9, '优'],
                [5, 41, 42, 46, 0.915, 81, 13, '优'],
                [6, 56, 52, 69, 1.067, 92, 16, '良'],
                [7, 64, 30, 28, 0.924, 51, 2, '良'],
                [8, 55, 48, 74, 1.236, 75, 26, '良'],
                [9, 76, 85, 113, 1.237, 114, 27, '良'],
                [10, 91, 81, 104, 1.041, 56, 40, '良'],
                [11, 84, 39, 60, 0.964, 25, 11, '良'],
                [12, 64, 51, 101, 0.862, 58, 23, '良'],
                [13, 70, 69, 120, 1.198, 65, 36, '良'],
                [14, 77, 105, 178, 2.549, 64, 16, '良'],
                [15, 109, 68, 87, 0.996, 74, 29, '轻度污染'],
                [16, 73, 68, 97, 0.905, 51, 34, '良'],
                [17, 54, 27, 47, 0.592, 53, 12, '良'],
                [18, 51, 61, 97, 0.811, 65, 19, '良'],
                [19, 91, 71, 121, 1.374, 43, 18, '良'],
                [20, 73, 102, 182, 2.787, 44, 19, '良'],
                [21, 73, 50, 76, 0.717, 31, 20, '良'],
                [22, 84, 94, 140, 2.238, 68, 18, '良'],
                [23, 93, 77, 104, 1.165, 53, 7, '良'],
                [24, 99, 130, 227, 3.97, 55, 15, '良'],
                [25, 146, 84, 139, 1.094, 40, 17, '轻度污染'],
                [26, 113, 108, 137, 1.481, 48, 15, '轻度污染'],
                [27, 81, 48, 62, 1.619, 26, 3, '良'],
                [28, 56, 48, 68, 1.336, 37, 9, '良'],
                [29, 82, 92, 174, 3.29, 0, 13, '良'],
                [30, 106, 116, 188, 3.628, 101, 16, '轻度污染'],
                [31, 118, 50, 0, 1.383, 76, 11, '轻度污染']
            ];

            const dataSH = [
                [1, 91, 45, 125, 0.82, 34, 23, '良'],
                [2, 65, 27, 78, 0.86, 45, 29, '良'],
                [3, 83, 60, 84, 1.09, 73, 27, '良'],
                [4, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
                [5, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
                [6, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
                [7, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
                [8, 89, 65, 78, 0.86, 51, 26, '良'],
                [9, 53, 33, 47, 0.64, 50, 17, '良'],
                [10, 80, 55, 80, 1.01, 75, 24, '良'],
                [11, 117, 81, 124, 1.03, 45, 24, '轻度污染'],
                [12, 99, 71, 142, 1.1, 62, 42, '良'],
                [13, 95, 69, 130, 1.28, 74, 50, '良'],
                [14, 116, 87, 131, 1.47, 84, 40, '轻度污染'],
                [15, 108, 80, 121, 1.3, 85, 37, '轻度污染'],
                [16, 134, 83, 167, 1.16, 57, 43, '轻度污染'],
                [17, 79, 43, 107, 1.05, 59, 37, '良'],
                [18, 71, 46, 89, 0.86, 64, 25, '良'],
                [19, 97, 71, 113, 1.17, 88, 31, '良'],
                [20, 84, 57, 91, 0.85, 55, 31, '良'],
                [21, 87, 63, 101, 0.9, 56, 41, '良'],
                [22, 104, 77, 119, 1.09, 73, 48, '轻度污染'],
                [23, 87, 62, 100, 1, 72, 28, '良'],
                [24, 168, 128, 172, 1.49, 97, 56, '中度污染'],
                [25, 65, 45, 51, 0.74, 39, 17, '良'],
                [26, 39, 24, 38, 0.61, 47, 17, '优'],
                [27, 39, 24, 39, 0.59, 50, 19, '优'],
                [28, 93, 68, 96, 1.05, 79, 29, '良'],
                [29, 188, 143, 197, 1.66, 99, 51, '中度污染'],
                [30, 174, 131, 174, 1.55, 108, 50, '中度污染'],
                [31, 187, 143, 201, 1.39, 89, 53, '中度污染']
            ];

            const schema = [
                { name: 'date', index: 0, text: '日' },
                { name: 'AQIindex', index: 1, text: 'AQI指数' },
                { name: 'PM25', index: 2, text: 'PM2.5' },
                { name: 'PM10', index: 3, text: 'PM10' },
                { name: 'CO', index: 4, text: '一氧化碳（CO）' },
                { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
                { name: 'SO2', index: 6, text: '二氧化硫（SO2）' }
            ];

            const itemStyle = {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.3)'
            };

            option = {
                color: ['#dd4444', '#fec42c', '#80F1BE'],

                title: {
                    left: 'center',
                    text: 'Gradient Stacked Area Chart'
                },
                xAxis: {
                    type: 'value',
                    nameGap: 16,
                    nameTextStyle: {
                        fontSize: 16
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    
                    type: 'value',
                    nameLocation: 'end',
                    nameGap: 20,
                    nameTextStyle: {
                        fontSize: 16
                    },
                    splitLine: {
                        show: false
                    }
                },
                visualMap: [
                    {
                        show: false,
                        dimension: 2,
                        min: 0,
                        max: 250,
                        itemWidth: 30,
                        itemHeight: 120,
                        calculable: true,
                        precision: 0.1,
                        text: ['圆形大小：PM2.5'],
                        textGap: 30,
                        inRange: {
                            symbolSize: [10, 70]
                        },
                        outOfRange: {
                            symbolSize: [10, 70],
                            color: ['rgba(255,255,255,0.4)']
                        },
                        controller: {
                            inRange: {
                                color: ['#c23531']
                            },
                            outOfRange: {
                                color: ['#999']
                            }
                        }
                    },
                    {
                        show: false,
                        dimension: 6,
                        min: 0,
                        max: 50,
                        itemHeight: 120,
                        text: ['明暗：二氧化硫'],
                        textGap: 30,
                        inRange: {
                            colorLightness: [0.9, 0.5]
                        },
                        outOfRange: {
                            color: ['rgba(255,255,255,0.4)']
                        },
                        controller: {
                            inRange: {
                                color: ['#c23531']
                            },
                            outOfRange: {
                                color: ['#999']
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '北京',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataBJ
                    },
                    {
                        name: '上海',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataSH
                    },
                    {
                        name: '广州',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataGZ
                    }
                ]
            };
            option && myChart.setOption(option);
        }
        const echarsinti5 = async () => {
            var chartDom = document.getElementById('main5');
            var myChart = echarts.init(chartDom);
            var option: any
            option = {
  tooltip: {
    trigger: 'item'
  },
    title: {
                    left: 'center',
                    text: 'Gradient Stacked Area Chart'
                },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
  
    
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
            option && myChart.setOption(option);
        }
        const echarsinti6 = async () => {
            var chartDom = document.getElementById('main6');
            var myChart = echarts.init(chartDom);
            var option: any
            option = {
  title: {
    text: 'Basic Radar Chart',
    left: 'center',
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};


            option && myChart.setOption(option);
        }
        onMounted(async () => {
            //加载echars
            echarsinti1()
            echarsinti2()
            echarsinti3()
            echarsinti4()
            echarsinti5()
            echarsinti6()


        });
        onBeforeUnmount(() => {
            echarts.init(<HTMLElement>document.getElementById('main1')).dispose();
            echarts.init(<HTMLElement>document.getElementById('main2')).dispose();
            echarts.init(<HTMLElement>document.getElementById('main3')).dispose();
            echarts.init(<HTMLElement>document.getElementById('main4')).dispose();
            echarts.init(<HTMLElement>document.getElementById('main5')).dispose();
            echarts.init(<HTMLElement>document.getElementById('main6')).dispose();
        })
        return { CaretLeft, CaretRight, leftxinxi, lefticon, tiaozhuan }
    }
})
</script>

<style lang="less" scoped>
@import './less/eniu.less';
@import './less/foot.less';
@import './less/shenti.less';
@ziti: 宋体;

* {
    font-family: @ziti;
    
}
      .xiahuaxian{
      width: 50px;
      height: 70px;
      border-bottom:3px solid rgb(167,132,88);
  }

.juzhong{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}


</style>