import BGProgressbar from './BGProgressbar';

BGProgressbar.install = function install (Vue) {
  Vue.component(BGProgressbar.name, BGProgressbar);
};

export default BGProgressbar;
