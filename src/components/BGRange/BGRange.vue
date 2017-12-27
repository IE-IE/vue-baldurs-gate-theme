<script>
import JSR from 'mm-jsr';

export default {
  name: 'bg-range',
  props: {
    label: String,
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 100,
      type: Number
    },
    step: {
      default: 1,
      type: Number
    },
    value: {
      default: 30,
      type: Number
    }
  },
  data () {
    return {
      jsr: null
    };
  },
  mounted () {
    this.jsr = new JSR(this.$refs.input, {
      sliders: 1,
      values: [this.value],
      min: this.min,
      max: this.max,
      limit: {
        show: false
      },
      modules: {
        grid: false,
        htmlLabels: false,
        labels: false
      }
    });

    this.jsr.addEventListener('update', (_, value) => {
      this.$emit('input', value);
    });
  },
  watch: {
    value (newValue) {
      if (this.value === newValue) {
        return;
      }

      this.jsr.setValue(0, newValue);
    }
  }
};
</script>
<template>
  <div class="bg-range">
    <label class="bg-range_label" v-if="label">{{ label }}</label>
    <input type="text" ref="input" v-model="value">
  </div>
</template>
<style lang="scss">
@import '~#/scss/mixin.textured-chiseled.scss';
@import '~#/scss/mixin.carved.scss';
@import '~#/scss/settings.scss';

.bg-range {
  display: flex;
  align-items: center;
}

.bg-range_label {
  color: $color-white;
  font-family: 'Stone';
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-right: 0.25em;
  font-size: 0.9em;
  user-select: none;

  @include carved();
}

.jsr {
  width: 200px;
  padding: 10px;

  @include textured-chiseled('normal', 'inner');
}

.jsr_rail-outer {
  height: 15px;
  background: rgba(0, 0, 0, 0.75);
  padding-left: 5px;
  padding-right: 25px;
  border: 4px rgb(196, 166, 32) ridge;
}

.jsr_rail {
  position: relative;
}

.jsr_slider {
  position: absolute;
  width: 19px;
  height: 19px;
  background-image: url('~@/assets/images/gem/GUISLDR00000.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  top: -5px;
  outline: 0;
  border: 0;

  &:focus {
    background-image: url('~@/assets/images/gem/GUISLDR00001.png');
  }
}

.jsr--disabled .jsr_slider:focus {
    background-image: url('~@/assets/images/gem/GUISLDR00002.png');
}
</style>

