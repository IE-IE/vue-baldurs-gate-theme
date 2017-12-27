import BGApp from './BGApp';

BGApp.install = function install (Vue) {
  Vue.component(BGApp.name, BGApp);
};

export default BGApp;