# @jyorg/relation-graph
基于百度 echarts 的关系图谱组件

## 安装
```
npm i @jyorg/relation-graph
```

## 属性
| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- | 
| categories | 节点分类的类目 | Array | - | - |
| data | 关系图的节点数据列表 | Array | - | - |
| links | 节点间的关系数据 | Array | - | - |
| node-click | 节点点击事件 | Function(data: Object) | - | - |

## 案例
```javascript
import Vue from 'vue'
import RelationGraph from '../../package/RelationGraph/index'

Vue.use(RelationGraph)
```
```html
// 需要给父组件的父容器指定宽和高
<relation-graph :categories="categories"
                :data="data"
                :links="links"
                :node-click="handleNodeClick"/>
```