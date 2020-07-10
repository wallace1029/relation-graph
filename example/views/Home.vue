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
        // id: 12966, // 高血压，疾病
        // id: 1216, // 华法林，药物
        id: 383, // 50/50混合重组人胰岛素注射液，药品
        type: '药品',
        relationShip: '',
        categories: [],
        data: [],
        links: []
      }
    },
    methods: {
      // 获取数据
      async getData() {
        const params = {
          id: this.id,
          type: this.type,
          relationShip: this.relationShip
        }
        try {
          let data = await this.$axios.post('/knowledge/graph', params)
          data = data.data
          const result = data.result
          const {nodes, links} = result

          let categories = []
          nodes.forEach(item => {
            categories.push(item.type)
            item.displayName = item.name
            item.name = String(item.data.id)
          })
          categories = Array.from(new Set(categories))
          nodes.forEach(item => {
            item.category = categories.findIndex(subitem => subitem === item.type)
          })

          links.forEach(item => {
            item.source = String(item.source)
            item.target = String(item.target)
          })

          this.categories = categories.map(item => {
            return {name: item}
          })
          this.data = nodes
          this.links = links
        } catch (e) {
          console.log(e)
        }
      },
      // node 点击
      async handleNodeClick(data) {
        // 如果不是组也不是实体，则表示是属性，无法点击
        if (!data.group && !data.entity) return
        // 如果是是组，不是实体，则传递根节点id
        if (data.group && !data.entity) {
          this.relationShip = data.type
        }
        // 如果是实体不是组，则传递自己的id
        if (!data.group && data.entity) {
          this.id = data.data.id
          this.type = data.type
          this.relationShip = ''
        }


        await this.getData()
      }
    },
    created() {
      this.getData()
    }
  }
</script>
