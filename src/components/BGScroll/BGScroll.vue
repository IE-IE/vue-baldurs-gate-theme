<script>
import SimpleBar from 'simplebar';

export default {
  name: 'bg-scroll',
  props: {
    height: String,
    clickScrollValue: {
      type: Number,
      default: 30
    }
  },
  mounted () {
    new SimpleBar(this.$refs.simplebarParent);
  },
  methods: {
    scroll (direction) {
      const container = this.$refs.simplebarParent.getElementsByClassName('simplebar-scroll-content')[0];

      container.scrollTop += this.clickScrollValue * direction;
    }
  }
};
</script>
<template>
  <div class="simplebar-outer">
    <div
      ref="simplebarParent"
      :style="{ height }">
      <slot></slot>
    </div>
    <button
      @click="scroll(-1)"
      class="simplebar-button-up">
    </button>
    <button
      @click="scroll(1)"
      class="simplebar-button-down">
    </button>
  </div>
</template>
<style lang="scss">
@import '~#/scss/mixin.textured-chiseled.scss';
@import '~#/scss/simplebar.scss';
</style>

