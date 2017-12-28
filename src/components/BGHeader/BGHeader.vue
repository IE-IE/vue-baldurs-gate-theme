<script>
export default {
  name: 'bg-header',
  props: {
    level: {
      type: Number,
      required: true
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    font: {
      type: String,
      required: false,
      default: 'postanti' // 'postanti', 'feinen', 'sherwood', 'stone'
    }
  },
  render (createElement) {
    return createElement(
      'h' + this.level,
      {
        class: {
          'bg-header': true,
          'bg-header--secondary': this.secondary,
          'bg-header--postanti': this.font == 'postanti',
          'bg-header--feinen': this.font == 'feinen',
          'bg-header--sherwood': this.font == 'sherwood',
          'bg-header--stone': this.font == 'stone'
        }
      },
      this.$slots.default
    )
  }
}
</script>
<style lang="scss" scoped>
  @import '~#/scss/settings.scss';
  @import '~#/scss/mixin.carved.scss';

  .bg-header {
    font-size: 1.2rem;
    color: $color-white;

    @include carved();
  }

  .bg-header::first-letter {
    font-size: 1.4em;
  }

  .bg-header--secondary {
    font-size: 1.1em;
  }

  .bg-header--postanti {
    font-family: 'Postanti';
    text-transform: uppercase;
  }

  .bg-header--feinen {
    font-family: 'Feinen';
  }

  .bg-header--stone {
    font-family: 'Stone';
    text-transform: uppercase;
  }

  .bg-header--sherwood {
    font-family: 'Sherwood';
  }
</style>

