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
        this.categories = [
          '药品',
          '物质',
          '疾病',
          '用药目的'
        ]

        this.data = [
          {
            'entityId': null,
            'name': '3',
            'displayName': '3',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '治疗用药:2（用药目的）',
            'displayName': '治疗用药（用药目的）',
            'des': '用药目的',
            'category': 3,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '舒降之',
            'displayName': '舒降之',
            'des': '',
            'category': 0,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '2',
            'displayName': '2',
            'des': '',
            'category': 3,
            'symbolSize': 2
          },
          {
            'entityId': '1038059',
            'name': '高密度脂蛋白胆固:6（疾病）',
            'displayName': '高密度脂蛋白胆固（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '辛伐他汀片（药品）',
            'displayName': '辛伐他汀片（药品）',
            'des': '药品',
            'category': 0,
            'symbolSize': null
          },
          {
            'entityId': null,
            'name': '15',
            'displayName': '15',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': '11339782',
            'name': '杂合子家族性高胆固醇血症:4（疾病）',
            'displayName': '杂合子家族性高胆固醇血症（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '10',
            'displayName': '10',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': '11379609',
            'name': '升高的总胆固醇:13（疾病）',
            'displayName': '升高的总胆固醇（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '14',
            'displayName': '14',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': '1038059',
            'name': '升高的总胆固:14（疾病）',
            'displayName': '升高的总胆固（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '4',
            'displayName': '4',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '8',
            'displayName': '8',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': '1149985',
            'name': '高脂血症:8（疾病）',
            'displayName': '高脂血症（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': '1195574',
            'name': '冠心病合并高胆固醇血症:10（疾病）',
            'displayName': '冠心病合并高胆固醇血症（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': '11610683',
            'name': '高:15（疾病）',
            'displayName': '高（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '7',
            'displayName': '7',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '12',
            'displayName': '12',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '适应证（疾病）',
            'displayName': '适应证（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '辛伐他汀（物质）',
            'displayName': '辛伐他汀（物质）',
            'des': '物质',
            'category': 1,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '11',
            'displayName': '11',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '13',
            'displayName': '13',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '1',
            'displayName': '1',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '5',
            'displayName': '5',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': null,
            'name': '9',
            'displayName': '9',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': '11471484',
            'name': '纯合子家族性高胆固醇血症患:11（疾病）',
            'displayName': '纯合子家族性高胆固醇血症患（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '原发性高胆固醇血症:3（疾病）',
            'displayName': '原发性高胆固醇血症（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': '1186337',
            'name': '载脂蛋白B:7（疾病）',
            'displayName': '载脂蛋白B（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': '1195574',
            'name': '冠心病:16（疾病）',
            'displayName': '冠心病（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': '1038059',
            'name': '总胆固:12（疾病）',
            'displayName': '总胆固（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': null,
            'name': '6',
            'displayName': '6',
            'des': '',
            'category': 2,
            'symbolSize': 2
          },
          {
            'entityId': '11485588',
            'name': '混合性高脂血症:1（疾病）',
            'displayName': '混合性高脂血症（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': '1553589',
            'name': '冠状动脉措桥术:5（疾病）',
            'displayName': '冠状动脉措桥术（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          },
          {
            'entityId': '1256550',
            'name': '甘油三:9（疾病）',
            'displayName': '甘油三（疾病）',
            'des': '疾病',
            'category': 2,
            'symbolSize': null,
            'isLeaf': true
          }
        ]

        this.links = [
          {
            'source': '辛伐他汀片（药品）',
            'target': '舒降之',
            'name': '名称'
          },
          {
            'source': '辛伐他汀片（药品）',
            'target': '辛伐他汀（物质）',
            'name': '有效成分'
          },
          {
            'source': '辛伐他汀片（药品）',
            'target': '适应证（疾病）',
            'name': '适应证'
          },
          {
            'source': '适应证（疾病）',
            'target': '1',
            'name': ''
          },
          {
            'source': '1',
            'target': '混合性高脂血症:1（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '2',
            'name': ''
          },
          {
            'source': '2',
            'target': '治疗用药:2（用药目的）',
            'name': ''
          },
          {
            'source': '2',
            'target': '原发性高胆固醇血症:3（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '3',
            'name': ''
          },
          {
            'source': '3',
            'target': '杂合子家族性高胆固醇血症:4（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '4',
            'name': ''
          },
          {
            'source': '4',
            'target': '冠状动脉措桥术:5（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '5',
            'name': ''
          },
          {
            'source': '5',
            'target': '高密度脂蛋白胆固:6（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '6',
            'name': ''
          },
          {
            'source': '6',
            'target': '载脂蛋白B:7（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '7',
            'name': ''
          },
          {
            'source': '7',
            'target': '高脂血症:8（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '8',
            'name': ''
          },
          {
            'source': '8',
            'target': '甘油三:9（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '9',
            'name': ''
          },
          {
            'source': '9',
            'target': '冠心病合并高胆固醇血症:10（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '10',
            'name': ''
          },
          {
            'source': '10',
            'target': '纯合子家族性高胆固醇血症患:11（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '11',
            'name': ''
          },
          {
            'source': '11',
            'target': '总胆固:12（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '12',
            'name': ''
          },
          {
            'source': '12',
            'target': '升高的总胆固醇:13（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '13',
            'name': ''
          },
          {
            'source': '13',
            'target': '升高的总胆固:14（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '14',
            'name': ''
          },
          {
            'source': '14',
            'target': '高:15（疾病）',
            'name': ''
          },
          {
            'source': '适应证（疾病）',
            'target': '15',
            'name': ''
          },
          {
            'source': '15',
            'target': '冠心病:16（疾病）',
            'name': ''
          }
        ]

      }, 1000)
    }
  }
</script>
