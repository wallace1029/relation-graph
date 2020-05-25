<style lang="scss" scoped src="./style/index.scss"/>

<template>
    <div class="relation-graph">
        <div id="container" class="container"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import macarons from './macarons.json'
  import shine from './shine.json'

  export default {
    name: 'RelationGraph',
    props: {
      // 节点分类的类目
      categories: {
        type: Array,
        required: true
      },
      // 节点数据
      data: {
        type: Array,
        required: true
      },
      // 节点关系数据
      links: {
        type: Array,
        required: true
      },
      // 点击节点的回调函数
      nodeClick: {
        type: Function,
        default(params) {
          return params.data
        }
      },
      // 需要重写覆盖的配置
      config: {
        type: Object,
        default() {
          return {}
        }
      },
      // 使用的主题配色
      theme: {
        type: String,
        default: 'shine'
      }
    },
    watch: {
      categories() {
        this.init()
      },
      data() {
        this.init()
      },
      links() {
        this.init()
      }
    },
    data() {
      return {
        option: {
          // 提示框组件
          tooltip: {
            show: document.body.clientWidth > 900,
            showDelay: 500,
            formatter: function (params) {
              return params.data.des
            },
            textStyle: {
              fontSize: 10
            }
          },
          series: [
            {
              type: 'graph',
              // 布局方式，重力布局
              layout: 'force',
              force: {
                repulsion: 100,
                gravity: 0.05,
                edgeLength: document.body.clientWidth > 900 ? [100, 150] : [45, 60]
              },
              // 鼠标缩放，平移漫游
              roam: true,
              // 开启拖拽
              draggable: true,
              // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
              focusNodeAdjacency: false,
              // 关系图节点标记的图形
              symbol: 'circle',
              // 关系图节点标记的大小
              symbolSize: document.body.clientWidth > 900 ? 60 : 45,
              // 边两端的标记类型
              edgeSymbol: ['none', 'none'],
              // 标记类型的大小
              edgeSymbolSize: 10,
              // 鼠标悬浮时在图形元素上时鼠标的样式是什么
              cursor: 'pointer',
              // 关系边的公用线条样式
              lineStyle: {
                opacity: .3,
                width: 1,
                curveness: 0
              },
              // 图形上的文本标签
              label: {
                show: true,
                fontStyle: 'normal',
                fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
                fontSize: document.body.clientWidth > 900 ? 12 : 8,
                lineHeight: document.body.clientWidth > 900 ? 12 : 8,
                // 处理 label 文字显示为 displayName 字段
                // 并且一行最多显示4个
                formatter(object) {
                  let {displayName} = object.data
                  let name = ''
                  for (let i = 0; i < displayName.length; i += 4) {
                    name += `${displayName.substr(i, 4)}\n`
                  }
                  name = name.substr(0, name.length - 1)
                  return name
                }
              },
              categories: [],
              data: [],
              links: []
            }
          ],
          animation: true,
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut'
        }
      }
    },
    methods: {
      // 初始化图表
      init() {
        // 判断 data 中的 symbolSize，如果小于10，则隐藏节点的 label 显示
        this.data.forEach(item => {
          if (item.symbolSize !== null && item.symbolSize <= 10) {
            item.label = {show: false}
          }
        })
        // links 连线上显示文字
        const label = {
          show: true,
          formatter(object) {
            return object.data.name
          },
          fontSize: 10,
          width: 5
        }
        this.links.forEach(item => {
          item.label = label
        })
        Object.assign(this.option.series[0], {categories: this.categories}, {data: this.data}, {links: this.links})
        Object.assign(this.option, this.config)

        const myChart = echarts.init(document.getElementById('container'), this.theme)
        myChart.setOption(this.option)
        // 防止 click 事件的重复绑定
        myChart.off('click')
        myChart.on('click', (params) => {
          this.nodeClick(params.data)
        })
      }
    },
    mounted() {
      echarts.registerTheme('macarons', macarons)
      echarts.registerTheme('shine', shine)
      setTimeout(() => {
        this.init()
      }, 1000)
    }
  }
</script>
