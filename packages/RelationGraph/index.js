import RelationGraph from './src/RelationGraph'

RelationGraph.install = function (Vue) {
  Vue.component(RelationGraph.name, RelationGraph)
}

export default RelationGraph