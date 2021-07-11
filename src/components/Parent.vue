<template>
  <div>
    <h2>Parent Title</h2>
    <ul :style="{ fontSize: postFontSize + 'em' }" >
      <Child #extra v-for="post in posts" :post="post" @enlarge-text="onEnlargeText">
        This is &lt;slot&gt;
      </Child>
    </ul>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Title A',
          createdAt: '1970-01-01',
          author: 'Mr.A'
        },
        {
          id: 2,
          title: 'Title B',
          createdAt: '1970-01-02',
          author: 'Mr.B'
        }
      ],
      postFontSize: 1,
    }
  },
  methods: {
    onEnlargeText(enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
}
</script>

<style scoped>

</style>