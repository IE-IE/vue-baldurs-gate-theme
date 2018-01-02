<script>
export default {
  name: 'bg-textfield',
  props: {
    id: String,
    label: String,
    placeholder: String,
    value: [String, Number],
    vertical: Boolean
  },
  computed: {},
  methods: {
    updateValue (value) {
      this.$emit('input', value);
    }
  }
};
</script>

<template>
  <div class="bg-textfield" :class="{ 'bg-textfield--vertical': vertical }">
    <label :for="id" v-if="label" class="bg-textfield_label">{{ label }}</label>
    <input type="text" class="bg-textfield_field" :id="id" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)">
  </div>
</template>

<style lang="scss" scoped>
@import '~#/scss/mixin.textured-chiseled.scss';
@import '~#/scss/mixin.carved.scss';
@import '~#/scss/settings.scss';

.bg-textfield {
  font-size: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
}

.bg-textfield--vertical {
  flex-direction: column;
  align-items: stretch;

  .bg-textfield_label {
    margin-right: 0;
    margin-bottom: 0.4em;
  }
}

.bg-textfield_label {
  color: $color-white;
  font-family: 'Stone';
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-right: 0.75em;
  font-size: 0.9em;
  user-select: none;
  white-space: nowrap;

  @include carved();
}

.bg-textfield_field {
  border: 0;
  color: $color-white;
  padding: 0.5em 1em;
  font: 1.1rem 'Postanti';
  @include textured-chiseled('dark', 'flat');
  flex-basis: 100%;
}
</style>
