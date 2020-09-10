<template>
  <div class="count">

    <p>次数: {{count}} ---> {{value}}</p>
    <span>{{size}}</span>
    <button @click="inc">++</button>
    <button @click="dec">--</button>
    <button @click="handleClick">点击开始</button>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
// import { noop, isFunction } from 'lodash';
// import noop from '../../../node_modules/lodash/noop';
// import isFunction from '../../../node_modules/lodash/isFunction';
// import each from '../node_modules/lodash-es/each.js'
import './style.scss';

export default {
  name: 'Count',
  props: {
    size: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  setup() {
    const count = ref(0);

    const value = computed(() => count.value * 2);

    const inc = () => count.value++;
    const dec = () => count.value--;
    return {
      count,
      inc,
      dec,
      value
    }
  },

  methods: {
    handleClick() {
      if(this.onClick) {
        this.onClick();
      }
    }
  },
  onMounted() {
    // http request
  }
}
</script>

<style>

</style>