const BGTheme = {
  install (Vue, opts = {}) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    if (opts.directives) {
      Object.keys(opts.directives).forEach((key) => {
        const d = opts.directives[key];
        Vue.directive(d.name, d);
      });
    }

    if (opts.components) {
      Object.keys(opts.components).forEach((key) => {
        const c = opts.components[key];
        Vue.use(c);
      });
    }
  }
};

export default BGTheme;