<script>
export default {
  name: 'bg-panel',
  props: {
    width: Number,
    height: Number,
    inset: Boolean,
    outset: Boolean
  },
  render (createElement) {
    return createElement(
      'div',
      {
        class: {
          'bg-panel': true,
          'bg-panel--inset': this.inset,
          'bg-panel--outset': this.outset
        },
        style: {
          width: this.width + 'px',
          height: this.height + 'px'
        }
      },
      this.$slots.default
    );
  }
};
</script>
<style lang="scss" scoped>
@import '~#/scss/mixin.textured-chiseled.scss';

.bg-panel {
}

.bg-panel--inset {
  @include textured-chiseled('dark', 'inner');
}

.bg-panel--outset {
  @include textured-chiseled('normal', 'outer');
}
</style>

