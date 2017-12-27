<script>
export default {
  name: 'bg-progressbar',
  props: {
    progress: {
      type: Number,
      required: true
    }
  },
  computed: {
    width () {
      return this.progress * 100 + '%';
    }
  }
}
</script>
<template>
  <div class="bg-progressbar">
    <div class="bg-progressbar_bar" :style="{ width }"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '~#/scss/settings.scss';
@import '~#/scss/mixin.textured-chiseled.scss';

$color-gold-light: lighten($color-gold, 15%);
$color-gold-dark: darken($color-gold, 60%);

.bg-progressbar {
  position: relative;
  height: 20px;
  padding-top: 7px;

  &::before {
    content: '';
    width: 50px;
    height: 18px;
    background: linear-gradient(to bottom, #{$color-gold-light} 20%, #{$color-gold-dark} 65%);
    border-radius: 5px 15px 15px 5px;
    position: absolute;
    left: 0;
    top: 1px;
    z-index: 2;
    box-shadow: -1px 0 1px 1px #000;
  }

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
    right: -3px;
    height: 12px;
    border-radius: 0 4px 4px 0;

    @include textured-chiseled('dark', 'inner', 2px, 3px);
  }
}

.bg-progressbar_bar {
  background: linear-gradient(to bottom, #{$color-gold-light} 20%, #{$color-gold-dark} 65%);
  height: 6px;
  position: relative;
  min-width: 55px;
  z-index: 1;
  border-radius: 0 4px 4px 0;
}
</style>


