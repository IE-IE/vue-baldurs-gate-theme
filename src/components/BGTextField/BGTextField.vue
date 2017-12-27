<script>
export default {
  name: 'bg-textfield',
  props: {
    id: String,
    label: String,
    placeholder: String
  },
  computed: {},
  methods: {}
};
</script>

<template>
  <div class="bg-textfield">
    <label :for="id" v-if="label" class="bg-textfield_label">{{ label }}</label>
    <input type="text" class="bg-textfield_field" :id="id" :placeholder="placeholder">
  </div>
</template>

<style lang="scss" scoped>
@import '~#/scss/mixin.textured-chiseled.scss';
@import '~#/scss/mixin.carved.scss';
@import '~#/scss/settings.scss';

.bg-textfield {
  font-size: 1rem;
}

.bg-textfield_label {
  color: $color-white;
  font-family: 'Stone';
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-right: 0.25em;
  font-size: 0.9em;
  user-select: none;

  @include carved();
}

.bg-textfield_field {
  border: 0;
  color: $color-white;
  padding: 0.5em 1em;
  font: 1.1rem 'Postanti';
  @include textured-chiseled('dark', 'flat');
}
</style>