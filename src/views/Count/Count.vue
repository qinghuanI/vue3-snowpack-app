<template>
  <div class="count">
    <p>次数: {{ count }} ---> {{ value }} ---> {{ number }}</p>
    <span>{{ size }}</span>
    <button @click="inc">++rtrgr</button>
    <button @click="dec">--</button>
    <button @click="handleClick">点击开始</button>

    <ul>
      <li v-for="(t, i) in teachers" :key="i">{{ t }}</li>
    </ul>
  </div>
</template>

<script scoped>
import { ref, onMounted, computed, reactive } from "vue";
import { noop } from "lodash-es";
import { useStore } from "vuex";

import "./style.scss";

export default {
  name: "Count",
  props: {
    size: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function,
      default: noop,
    },
  },
  setup() {
    const count = ref(0);
    const store = useStore();

    const teachers = reactive(["Li", "W"]);

    console.log(teachers);
    const value = computed(() => count.value * 2);
    const number = computed(() => store.state.CountStore.num * 3);

    console.log("store =");

    const inc = () => count.value++;
    const dec = () => count.value--;

    const handleClick = () => {
      store.dispatch("CountStore/addCount");
    };
    return {
      count,
      inc,
      dec,
      value,
      handleClick,
      number,
      teachers,
    };
  },
  onMounted() {
    // http request
  },
};
</script>

<style></style>
