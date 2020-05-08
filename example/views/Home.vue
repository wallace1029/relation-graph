<style lang="scss">
  .home {
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div class="home">
    <relation-graph :categories="categories"
                    :data="data"
                    :links="links"
                    :node-click="handleNodeClick"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import RelationGraph from '../../package/RelationGraph/index'

  Vue.use(RelationGraph)

  export default {
    name: 'Home',
    data() {
      return {
        categories: [],
        data: [],
        links: []
      }
    },
    methods: {
      // node 点击
      handleNodeClick(data) {
        console.log(data)
      }
    },
    mounted() {
      setTimeout(() => {
        this.categories = ['药品', '药品属性', '疾病']
        this.data = [
          {
            'entityId': '1061455',
            'name': '快速型心律失常',
            'des': '快速型心律失常',
            'category': 2
          },
          {
            'entityId': null,
            'name': '美托洛尔',
            'des': '药品成分',
            'category': 1
          },
          {
            'entityId': null,
            'name': '药品属性',
            'des': '药品属性',
            'category': 1
          },
          {
            'entityId': null,
            'name': '疾病',
            'des': '疾病',
            'category': 2
          },
          {
            'entityId': '1834833',
            'name': '急性心肌梗死',
            'des': '急性心肌梗死',
            'category': 2
          },
          {
            'entityId': '15858438481095752',
            'name': '小儿自主性房性心动过速',
            'des': '小儿自主性房性心动过速',
            'category': 2
          },
          {
            'entityId': '1196277',
            'name': '室上性快速型心律失常',
            'des': '室上性快速型心律失常',
            'category': 2
          },
          {
            'entityId': '1258166',
            'name': '心肌缺血',
            'des': '心肌缺血',
            'category': 2
          },
          {
            'entityId': null,
            'name': '酒石酸美托洛尔注射液',
            'des': '酒石酸美托洛尔注射液',
            'category': 0
          },
          {
            'entityId': '15858438481001259',
            'name': '心脏供血不足',
            'des': '心脏供血不足',
            'category': 2
          },
          {
            'entityId': '15858438481004066',
            'name': '小儿窦性心律不齐',
            'des': '小儿窦性心律不齐',
            'category': 2
          },
          {
            'entityId': '15858438481076375',
            'name': '小儿早搏',
            'des': '小儿早搏',
            'category': 2
          }
        ]
        this.links = [
          {
            'source': '酒石酸美托洛尔注射液',
            'target': '药品属性',
            'name': '药品相关属性'
          },
          {
            'source': '药品属性',
            'target': '美托洛尔',
            'name': '药品成分'
          },
          {
            'source': '酒石酸美托洛尔注射液',
            'target': '疾病',
            'name': '相关适应证'
          },
          {
            'source': '疾病',
            'target': '室上性快速型心律失常',
            'name': ''
          },
          {
            'source': '疾病',
            'target': '心肌缺血',
            'name': ''
          },
          {
            'source': '疾病',
            'target': '急性心肌梗死',
            'name': ''
          },
          {
            'source': '疾病',
            'target': '快速型心律失常',
            'name': ''
          },
          {
            'source': '疾病',
            'target': '心脏供血不足',
            'name': ''
          },
          {
            'source': '疾病',
            'target': '小儿窦性心律不齐',
            'name': ''
          },
          {
            'source': '疾病',
            'target': '小儿早搏',
            'name': ''
          },
          {
            'source': '疾病',
            'target': '小儿自主性房性心动过速',
            'name': ''
          }
        ]
      }, 1000)
    }
  }
</script>
