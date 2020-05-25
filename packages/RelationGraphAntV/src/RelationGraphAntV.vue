<style lang="scss" scoped src="./style/index.scss"/>

<template>
    <div class="relation-graph-antv"
         id="RelationGraphAntV">
        <div id="mountNode"/>
    </div>
</template>

<script>
  import G6 from '@antv/g6'

  export default {
    name: 'RelationGraphAntV',
    props: {
      graphData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    watch: {
      graphData(newValue) {
        if (newValue.id !== '' || newValue.id !== null) {
          this.initGraph()
        }
      }
    },
    data() {
      return {
        // 当前设备
        device: 'web',
        graph: ''
      }
    },
    methods: {
      initGraph() {
        const width = document.getElementById('RelationGraphAntV').scrollWidth
        const height = document.getElementById('RelationGraphAntV').scrollHeight

        this.graph = new G6.TreeGraph({
          // canvas 容器
          container: 'mountNode',
          // 宽度
          width: width,
          // 高度
          height: height,
          // 布局方式
          layout: {
            type: 'dendrogram',
            direction: 'H',
            nodeSep: 40
          },
          // 默认连线样式
          defaultEdge: {
            type: 'cubic-horizontal'
          },
          // 交互
          modes: {
            default: [
              {
                type: 'collapse-expand',
                onChange: function onChange(item, collapsed) {
                  const data = item.getModel()
                  data.collapsed = collapsed
                }
              },
              'drag-canvas',
              'zoom-canvas'
            ]
          }
        })

        const graphData = this.graphData

        // 如果子类的数量大于5，则自动折叠
        if (graphData.children) {
          graphData.children.forEach(item => {
            if (item.children && item.children.length > 5) {
              item.collapsed = true
            }
          })
        }

        // 配置颜色和显示的文字
        this.graph.node(function (node) {
          let fillColor = 'rgb(206,228, 254)'
          let nodeSize = 30
          let nodeFontSize = 20
          let position = 'center'

          if (node.id === '禁忌') fillColor = 'red'
          else if (node.id === '不良反应') fillColor = 'orange'
          else if (node.id === '适应症') fillColor = '#296ab4'

          if (node.depth === 0) {
            nodeSize = 45
            fillColor = 'teal'
            nodeFontSize = 25
          } else if (node.depth === 1) {
            nodeSize = 35
            nodeFontSize = 20
          } else if (node.depth === 2) {
            nodeSize = 25
            nodeSize = 15
          } else if (node.depth === 3) {
            nodeSize = 10
            nodeSize = 15
          }

          if (node.x < 0) position = 'left'
          else position = 'right'
          if (node.depth === 0) position = 'bottom'

          return {
            label: node.label,
            size: nodeSize,
            labelCfg: {
              offset: 10,
              position: position,
              style: {
                fontSize: nodeFontSize
              }
            },
            style: {
              fill: fillColor
            }
          }
        })

        // 设置连线文字显示方式
        this.graph.edge(function (edge) {
          let label = edge.target._cfg.model.edge
          if (label === '适应症' || label === '禁忌' || label === '不良反应') label = ''
          return {label}
        })

        // 监听展开和收起，动画结束后重新渲染位置
        this.graph.on('itemcollapsed', () => {
          setTimeout(() => {
            this.graph.refreshLayout(true)
          }, 500)
        })

        this.graph.data(graphData)
        this.graph.render()
        this.graph.fitView()

      }
    },
    mounted() {
      this.device = document.body.clientWidth < 900 ? 'mobile' : 'web'
    }
  }
</script>