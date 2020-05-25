import RelationGraphECharts from './RelationGraph/index'
import RelationGraphAntV from './RelationGraphAntV/index'

const list = [RelationGraphECharts, RelationGraphAntV]

export default {
  install(Vue) {
    list.forEach(item => {
      item.install(Vue)
    })
  }
}