<script>
export default {
  name: 'bg-checkbox',
  props: {
    id: String,
    label: String
  }
};
</script>
<template>
  <div class="bg-checkbox">
    <input type="checkbox" :id="id" class="bg-checkbox_input">
    <label class="bg-checkbox_label" :for="id">{{ label }}</label>
  </div>
</template>
<style lang="scss" scoped>
@import '~#/scss/mixin.carved.scss';
@import '~#/scss/mixin.sr-only.scss';
@import '~#/scss/mixin.cursor.scss';
@import '~#/scss/settings.scss';

.bg-checkbox {
  font-size: 1rem;
}

.bg-checkbox_label {
  display: flex;
  align-items: center;
  color: $color-white;
  font-family: 'Stone';
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9em;
  line-height: 1;
  user-select: none;
  
  @include carved();

  &::after {
    content: '';
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-left: 0.3em;
    background-image: url('~@/assets/images/toggle/TOGGLE00000.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  &:active {
    @include cursor('hand-pressed');
  }

  &:active::after {
    background-image: url('~@/assets/images/toggle/TOGGLE00005.png') !important;
  }
}

.bg-checkbox_input {
  @include sr-only();

  &:checked + .bg-checkbox_label::after {
    background-image: url('~@/assets/images/toggle/TOGGLE00015.png');
  }
}

</style>

