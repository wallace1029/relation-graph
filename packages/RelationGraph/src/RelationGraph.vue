<style lang="scss" scoped src="./style/index.scss"/>

<template>
  <div class="relation-graph">
    <div id="container" class="container"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

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
          title: {
            text: '井颐知识图谱',
            show: true
          },
          legend: {
            left: 'center',
            data: []
          },
          series: [
            {
              type: 'graph',
              zoom: 1,
              layout: 'force',
              force: {
                repulsion: 5000,
                gravity: 1,
                edgeLength: [50, 100],
                layoutAnimation: true,
                friction: 0.1
              },
              // 是否开启鼠标缩放和平移漫游
              roam: true,
              // 节点是否可拖拽，只在使用力引导布局的时候有用
              // draggable: true,
              // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
              focusNodeAdjacency: false,
              // 关系图节点标记的大小
              symbolSize: 60,
              // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定
              edgeSymbol: ['none', 'arrow'],
              // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定
              edgeSymbolSize: [0, 7],
              // 鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor
              cursor: 'pointer',
              // 图形上的文本标签，可用于说明图形的一些数据信息
              label: {
                show: true,
                fontStyle: 'normal',
                fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
                fontSize: 12,
                lineHeight: 12,
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
              edgeLabel: {
                show: true,
                formatter(object) {
                  if (object.data.name === '相互作用' || object.data.name === '适应症' || object.data.name === '适应证' || object.data.name === '禁忌') return ''
                  else return object.data.name
                }
              },
              categories: [],
              data: [],
              links: [],
              animation: false,
              animationThreshold: 10,
              animationDuration: 300,
              animationDurationUpdate: 300,
              animationEasingUpdate: 'linear',
            }
          ]
        }
      }
    },
    methods: {
      // 初始化图表
      init() {
        // 因为部分节点药物同名实在太多了，前端暂时做手动去重处理
        const newData = []
        this.data.forEach(item => {
          const index = newData.findIndex(subitem => subitem.displayName === item.displayName)
          if (index === -1) newData.push(item)
        })
        // 去重之后，如果节点数量大于50，则进行缩放
        if (newData.length > 50) {
          this.option.series[0].zoom = 0.5
        }
        this.option.legend.data = this.categories.map(item => item.name)
        this.option.series[0].categories = this.categories
        this.option.series[0].data = newData
        this.option.series[0].links = this.links

        const myChart = echarts.init(document.getElementById('container'))

        myChart.setOption(this.option)

        // 防止 click 事件的重复绑定
        myChart.off('click')
        myChart.on('click', params => {
          this.nodeClick(params.data)
        })
      }
    },
    mounted() {
      setTimeout(() => {
        this.init()
      }, 500)
    }
  }
</script>
