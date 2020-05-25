<style lang="scss" scoped>
    .antv-demo {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .bar {
            height: 60px;
            background-color: teal;
            width: 100%;
        }

        .view-area {
            flex: 1;
            overflow-y: auto;
        }
    }
</style>

<template>
    <div class="antv-demo">
        <div class="bar"></div>
        <div class="view-area">
            <relation-graph-ant-v :graph-data="graphData"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'AntVDemo',
    data() {
      return {
        graphData: {}
      }
    },
    mounted() {
      setTimeout(() => {
        this.graphData = {
          'id': '阿司匹林肠溶片（药品）',
          'mapId': null,
          'label': '阿司匹林肠溶片（药品）',
          'edge': null,
          'children': [
            {
              'id': '阿司匹林肠溶片:1',
              'mapId': null,
              'label': '阿司匹林肠溶片',
              'edge': '名称',
              'children': null
            },
            {
              'id': '拉贝洛尔:2',
              'mapId': null,
              'label': '拉贝洛尔（物质）',
              'edge': '有效成分',
              'children': null
            },
            {
              'id': '适应证',
              'mapId': null,
              'label': '适应证',
              'edge': '适应证',
              'children': [
                {
                  'id': '适应证:3',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:3（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:4',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:4（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '急性心肌梗死:5（疾病）',
                      'mapId': null,
                      'label': '急性心肌梗死（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:5',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:6（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '短暂性大脑缺血:7（疾病）',
                      'mapId': null,
                      'label': '短暂性大脑缺血（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:6',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:8（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '血栓闭塞性脉管炎:9（疾病）',
                      'mapId': null,
                      'label': '血栓闭塞性脉管炎（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:7',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '预防用药:10（用药目的）',
                      'mapId': null,
                      'label': '预防用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '脑梗塞:11（疾病）',
                      'mapId': null,
                      'label': '脑梗塞（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:8',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:12（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '类风湿关节炎:13（疾病）',
                      'mapId': null,
                      'label': '类风湿关节炎（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:9',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:14（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '不稳定性心绞痛:15（疾病）',
                      'mapId': null,
                      'label': '不稳定性心绞痛（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:10',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:16（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '偏头痛:17（疾病）',
                      'mapId': null,
                      'label': '偏头痛（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:11',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '预防用药:18（用药目的）',
                      'mapId': null,
                      'label': '预防用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '心肌梗塞复发:19（疾病）',
                      'mapId': null,
                      'label': '心肌梗塞复发（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:12',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:20（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '冠状动脉硬化:21（疾病）',
                      'mapId': null,
                      'label': '冠状动脉硬化（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:13',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:22（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '流感:23（疾病）',
                      'mapId': null,
                      'label': '流感（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:14',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:24（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '手术形成的动静脉造瘘血栓:25（疾病）',
                      'mapId': null,
                      'label': '手术形成的动静脉造瘘血栓（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:15',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:26（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '风湿热:27（疾病）',
                      'mapId': null,
                      'label': '风湿热（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:16',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:28（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '人工心脏瓣膜手术后血栓形成:29（疾病）',
                      'mapId': null,
                      'label': '人工心脏瓣膜手术后血栓形成（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:17',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:30（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '心肌梗:31（疾病）',
                      'mapId': null,
                      'label': '心肌梗（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:18',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:32（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '骨性关节炎:33（疾病）',
                      'mapId': null,
                      'label': '骨性关节炎（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:19',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:34（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '痛经:35（疾病）',
                      'mapId': null,
                      'label': '痛经（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:20',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:36（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '脑血栓形成:37（疾病）',
                      'mapId': null,
                      'label': '脑血栓形成（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:21',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:38（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '强直性脊柱炎:39（疾病）',
                      'mapId': null,
                      'label': '强直性脊柱炎（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:22',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:40（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '神经痛:41（疾病）',
                      'mapId': null,
                      'label': '神经痛（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:23',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:42（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '关节炎:43（疾病）',
                      'mapId': null,
                      'label': '关节炎（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                },
                {
                  'id': '适应证:24',
                  'mapId': null,
                  'label': '适应证',
                  'edge': '适应证',
                  'children': [
                    {
                      'id': '治疗用药:44（用药目的）',
                      'mapId': null,
                      'label': '治疗用药（用药目的）',
                      'edge': null,
                      'children': null
                    },
                    {
                      'id': '感冒:45（疾病）',
                      'mapId': null,
                      'label': '感冒（疾病）',
                      'edge': null,
                      'children': null
                    }
                  ]
                }
              ]
            }
          ]
        }
      }, 1000)
    }
  }
</script>