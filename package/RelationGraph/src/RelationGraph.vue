<style lang="scss" scoped src="./style/index.scss"/>

<template>
    <div class="relation-graph">
        <div id="container" class="container"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import macarons from './macarons.json'

  export default {
    name: 'RelationGraph',
    props: {
      categories: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      links: {
        type: Array,
        required: true
      },
      nodeClick: {
        type: Function,
        default: (params) => {
          return params.data
        }
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
                repulsion: 500
              },
              // 鼠标缩放，平移漫游
              roam: true,
              // 开启拖拽
              draggable: true,
              // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
              focusNodeAdjacency: true,
              // 关系图节点标记的图形
              symbol: 'circle',
              // 关系图节点标记的大小
              symbolSize: 45,
              // 边两端的标记类型
              edgeSymbol: ['none', 'none'],
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
                fontSize: 10
              },
              categories: [],
              data: [],
              links: []
            }
          ],
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut'
        }
      }
    },
    methods: {
      // 初始化图表
      init() {
        Object.assign(this.option.series[0], {categories: this.categories}, {data: this.data}, {links: this.links})
        const myChart = echarts.init(document.getElementById('container'), 'macarons')
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
      this.init()
    }
  }
</script>