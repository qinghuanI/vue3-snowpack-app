<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.App {
  text-align: center;
}

.App-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #32485f;
  font-size: calc(10px + 2vmin);
  background-color: #f9f6f6;
}

.App-link {
  color: #00c185;
}

.App-logo {
  height: 40vmin;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  pointer-events: none;
}

@keyframes App-logo-spin {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.06);
  }
}
</style>
