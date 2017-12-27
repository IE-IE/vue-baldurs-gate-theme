<script>
export default {
  name: 'bg-app'
};
</script>

<template>
  <div class="bg-app">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '~#/scss/mixin.textured-chiseled.scss';

.bg-app {
  width: 100vw;
  height: 100vh;
  padding: 50px;
  background-size: cover;
  @include textured-chiseled('normal', 'none');
}
</style>

<style lang="scss">
@import '~#/scss/mixin.cursor.scss';

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  @include cursor('hand');
}

body {
  margin: 0;
}
</style>

