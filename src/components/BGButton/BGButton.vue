<script>
export default {
  name: 'bg-button',
  props: {
    inset: Boolean,
    outset: Boolean
  },
  computed: {
    classes () {
      const classes = {
        'bg-button--inset': this.inset,
        'bg-button--outset': this.outset
      };

      return classes;
    }
  },
  methods: {
    click (event) {
      this.$emit('click', event);
    }
  }
};
</script>

<template>
  <button
    class="bg-button"
    :class='classes'
    @click="click($event)"
  >
    <span class="bg-button_inner">
      <span>
        <slot></slot>
      </span>
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import '~#/scss/mixin.textured-chiseled.scss';
@import '~#/scss/mixin.carved.scss';
@import '~#/scss/mixin.cursor.scss';
@import '~#/scss/settings.scss';

$padding-x: 1em;
$padding-y: 0.5em;
$padding-x-move: 0.05em;
$padding-y-move: 0.05em;
$button-inset-size: 3px;
$button-outset-size: 10px;

.bg-button {
  padding: 0;
  cursor: pointer;
  position: relative;
  border: 0;

  @include cursor('hand');
}

.bg-button_inner {
  display: block;
  font: 1rem 'Postanti';
  color: $color-white;
  padding: $padding-y $padding-x;
  line-height: 1;
  position: relative;
  z-index: 2;

  @include carved();
  @include textured-chiseled('normal', 'outer', 2px, 4px);

  span {
    display: inline-block;
  }
}

.bg-button:active .bg-button_inner {
  @include textured-chiseled('normal', 'inner');

  span {
    transform: translate(#{$padding-x-move}, #{$padding-y-move});
  }
}

.bg-button:active {
  @include cursor('hand-pressed');
}

.bg-button:focus {
  outline: 0;
}

.bg-button::-moz-focus-inner {
  border: 0;
}

.bg-button--outset {
  margin: $button-outset-size;

  &::after {
    content: '';
    position: absolute;
    top: -$button-outset-size; right: -$button-outset-size;
    bottom: -$button-outset-size;
    left: -$button-outset-size;
    z-index: 0;

    @include textured-chiseled('normal', 'outer');
  }
}

.bg-button--inset {
  .bg-button_inner {
    border-radius: 5px;
  }

  &:active .bg-button_inner {
    @include textured-chiseled('normal', 'inner', 0, 3px);
  }

  &::before {
    content: '';
    position: absolute;
    top: -$button-inset-size;
    right: -$button-inset-size;
    bottom: -$button-inset-size;
    left: -$button-inset-size;
    z-index: 1;
    @include textured-chiseled('normal', 'inner');
  }
}
</style>