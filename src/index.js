import * as components from './components';

function BGTheme (Vue, args) {
  const BGTheme = components.BGTheme;

  Vue.use(BGTheme, {
    components,
    ...args
  });
}

const version = '__VERSION__';

import './assets/scss/fonts.scss';

export default BGTheme;
export * from './components';
export {
  version
};
