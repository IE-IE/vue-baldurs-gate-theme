import BGTheme from 'src';
import { createVM } from '../helpers/utils.js';

describe('Full test', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
  <bg-app>
    <bg-button @click="button">Baldur's Gate</bg-button>
    <bg-button @click="button" outset>Baldur's Gate</bg-button>
    <bg-button @click="button" inset>Baldur's Gate</bg-button>
    <bg-button @click="button" inset outset>Baldur's Gate</bg-button>
    <bg-textfield label="Most powerfull vanquished" id="name" v-model="input" fixed></bg-textfield>
    {{ input }}
    <bg-checkbox label="Some field" id="field" v-model="checkbox"></bg-checkbox>
    {{ checkbox }}
    <bg-range :min="0" :max="10" :step="1" v-model="range" label="Range field"></bg-range>
    <bg-scroll
      height="100px"
      :clickScrollValue="50">
      <div style="height: 200px; border-left: 5px dotted white;"></div>
    </bg-scroll>
    <bg-header :level="1" font="stone">Baldur's Gate</bg-header>
    <bg-progressbar :progress="0"></bg-progressbar>
    <bg-panel inset :width="200" :height="200"></bg-panel>
    <bg-panel outset :width="200" :height="200"></bg-panel>
  </bg-app>
`, {
  data () {
    return {
      range: 8,
      checkbox: true,
      input: 'abc'
    };
  },
  methods: {
    button () {
      console.log('OK');
    }
  }
});
    // vm.$el.querySelector('.hello h1').textContent.should.eql('Hello World!')
  });
})
