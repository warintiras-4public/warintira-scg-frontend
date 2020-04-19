<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div class="items-container">
    <div class="item"
      v-for="(item, index) in items"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item.b"
      >
      <p class="text">{{ item.bc }}</p>
    </div>
    </div>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js';

export default {
  name: 'API Component',
  props: {
    msg: String
  },
  data() {
    return {
      items: [],
      text: ''
    }
  },
  async created() {
      this.items = await ApiService.getAbc();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
