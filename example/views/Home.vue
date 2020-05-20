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
        this.categories = [
          "药品",
          "物质",
          "疾病"
        ]

        this.data = [
          {
            "entityId": null,
            "name": "载脂蛋白B",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1200197",
            "name": "高（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1580760",
            "name": "外周神经病变（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1207890",
            "name": "脱发（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "禁忌（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1241807",
            "name": "胃肠胀气（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "辛伐他汀（物质）",
            "des": "物质",
            "category": 1,
            "symbolSize": null
          },
          {
            "entityId": "1093145",
            "name": "皮疹（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1817683",
            "name": "呕吐（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1206028",
            "name": "胰腺炎（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1204115",
            "name": "便秘（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1186337",
            "name": "载脂蛋白B（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1135913",
            "name": "肝炎/黄疸（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "辛伐他汀片（药品）",
            "des": "药品",
            "category": 0,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "高胆固醇血症",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1195471",
            "name": "冠心病（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1195574",
            "name": "冠心病死亡（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1651842",
            "name": "冠脉事件（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "辛伐他汀片",
            "des": "",
            "category": 0,
            "symbolSize": null
          },
          {
            "entityId": "1834908",
            "name": "非致死性心肌梗塞（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1013079",
            "name": "感觉异常（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1257323",
            "name": "肌肉痉挛（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1012063",
            "name": "腹泻（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1038059",
            "name": "胆固（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "新病灶",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1026740",
            "name": "过敏反应综（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1222769",
            "name": "恶心（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "胆固",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1244111",
            "name": "横纹肌溶解（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1210601",
            "name": "肌痛（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1205458",
            "name": "活动性肝病（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "死亡",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1456737",
            "name": "怀孕（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "甘油三",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": null,
            "name": "冠心病合并高胆固醇血症",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1034911",
            "name": "贫血（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "冠心病死亡",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": null,
            "name": "不良反应（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "11485722",
            "name": "高甘油三酯血症（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "高甘油三酯血症",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1223549",
            "name": "头痛（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1256550",
            "name": "甘油三（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1222730",
            "name": "腹痛（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "非致死性心肌梗塞",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": null,
            "name": "冠脉事件",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "11067252",
            "name": "消化不良（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1833668",
            "name": "冠状动脉搭桥术（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "高",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1256532",
            "name": "冠心病合并高胆固醇血症（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "12136368",
            "name": "疲乏无（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "11485714",
            "name": "高胆固醇血症（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1290404",
            "name": "新病灶（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1126497",
            "name": "死亡（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "冠状动脉搭桥术",
            "des": "",
            "category": 2,
            "symbolSize": 2
          },
          {
            "entityId": "1260065",
            "name": "瘙痒（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": "1881562",
            "name": "肌病（疾病）",
            "des": "疾病",
            "category": 2,
            "symbolSize": null
          },
          {
            "entityId": null,
            "name": "冠心病",
            "des": "",
            "category": 2,
            "symbolSize": 2
          }
        ]

        this.links = [
          {
            "source": "辛伐他汀片（药品）",
            "target": "辛伐他汀片",
            "name": "名称"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "辛伐他汀（物质）",
            "name": "有效成分"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "高胆固醇血症",
            "name": ""
          },
          {
            "source": "高胆固醇血症",
            "target": "高胆固醇血症（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "载脂蛋白B",
            "name": ""
          },
          {
            "source": "载脂蛋白B",
            "target": "载脂蛋白B（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "甘油三",
            "name": ""
          },
          {
            "source": "甘油三",
            "target": "甘油三（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "胆固",
            "name": ""
          },
          {
            "source": "胆固",
            "target": "胆固（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "高",
            "name": ""
          },
          {
            "source": "高",
            "target": "高（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "高甘油三酯血症",
            "name": ""
          },
          {
            "source": "高甘油三酯血症",
            "target": "高甘油三酯血症（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "冠心病",
            "name": ""
          },
          {
            "source": "冠心病",
            "target": "冠心病（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "冠心病合并高胆固醇血症",
            "name": ""
          },
          {
            "source": "冠心病合并高胆固醇血症",
            "target": "冠心病合并高胆固醇血症（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "死亡",
            "name": ""
          },
          {
            "source": "死亡",
            "target": "死亡（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "冠心病死亡",
            "name": ""
          },
          {
            "source": "冠心病死亡",
            "target": "冠心病死亡（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "非致死性心肌梗塞",
            "name": ""
          },
          {
            "source": "非致死性心肌梗塞",
            "target": "非致死性心肌梗塞（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "冠脉事件",
            "name": ""
          },
          {
            "source": "冠脉事件",
            "target": "冠脉事件（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "冠状动脉搭桥术",
            "name": ""
          },
          {
            "source": "冠状动脉搭桥术",
            "target": "冠状动脉搭桥术（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "新病灶",
            "name": ""
          },
          {
            "source": "新病灶",
            "target": "新病灶（疾病）",
            "name": "适应证"
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "不良反应（疾病）",
            "name": "不良反应"
          },
          {
            "source": "不良反应（疾病）",
            "target": "腹痛（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "便秘（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "胃肠胀气（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "疲乏无（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "头痛（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "肌病（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "恶心（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "腹泻（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "皮疹（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "消化不良（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "瘙痒（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "脱发（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "肌肉痉挛（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "肌痛（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "胰腺炎（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "感觉异常（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "外周神经病变（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "呕吐（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "贫血（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "横纹肌溶解（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "肝炎/黄疸（疾病）",
            "name": ""
          },
          {
            "source": "不良反应（疾病）",
            "target": "过敏反应综（疾病）",
            "name": ""
          },
          {
            "source": "辛伐他汀片（药品）",
            "target": "禁忌（疾病）",
            "name": "禁忌"
          },
          {
            "source": "禁忌（疾病）",
            "target": "活动性肝病（疾病）",
            "name": ""
          },
          {
            "source": "禁忌（疾病）",
            "target": "怀孕（疾病）",
            "name": ""
          }
        ]
      }, 1000)
    }
  }
</script>
