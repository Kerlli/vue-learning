<template>
  <ul class="tab">
    <li
        v-for="pane in panes"
        :key="pane.key"
        :class="[tab-pane, { active: currentTab === pane.key }]"
        @click="currentTab = pane.key"
    >
        {{ pane.label }}
    </li>
  </ul>
  <div class="tab-content">
      {{ tabContents[currentTab].content }}
  </div>
</template>

<script>
import Counter from '../Counter.vue'

export default {
  name: "Tab",
  components: {
    Counter,
  },
  data() {
    return {
      currentTab: 'alive',
      panes: [
          {
              label: 'alive',
              key: 'tab-pane-alive',
          },
          {
              label: 'not-alive',
              key: 'tab-pane-not-alive',
          },
      ],
      tabContents: [
          {
              key: 'alive',
              content: <keep-alive><Counter/></keep-alive>
          },
          {
              key: 'not-alive',
              content: Counter
          },
      ]
    }
  },
  
}
</script>

<style scoped>
  div.provider {
    display: block;
    margin: 16px auto;
    width: 400px;
    height: auto;
    background-color: #aaa;
  }
</style>
