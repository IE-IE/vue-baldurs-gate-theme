/*!
 * vue-baldurs-gate-theme v0.0.8
 * (c) 2018 Schizohatter
 * Released under the MIT License.
 */

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGTheme = __webpack_require__(21);

Object.defineProperty(exports, 'BGTheme', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGTheme).default;
  }
});

var _BGApp = __webpack_require__(12);

Object.defineProperty(exports, 'BGApp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGApp).default;
  }
});

var _BGButton = __webpack_require__(13);

Object.defineProperty(exports, 'BGButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGButton).default;
  }
});

var _BGTextField = __webpack_require__(20);

Object.defineProperty(exports, 'BGTextField', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGTextField).default;
  }
});

var _BGCheckbox = __webpack_require__(14);

Object.defineProperty(exports, 'BGCheckbox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGCheckbox).default;
  }
});

var _BGRange = __webpack_require__(18);

Object.defineProperty(exports, 'BGRange', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGRange).default;
  }
});

var _BGScroll = __webpack_require__(19);

Object.defineProperty(exports, 'BGScroll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGScroll).default;
  }
});

var _BGHeader = __webpack_require__(15);

Object.defineProperty(exports, 'BGHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGHeader).default;
  }
});

var _BGProgressbar = __webpack_require__(17);

Object.defineProperty(exports, 'BGProgressbar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGProgressbar).default;
  }
});

var _BGPanel = __webpack_require__(16);

Object.defineProperty(exports, 'BGPanel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BGPanel).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'bg-app'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'bg-button',
  props: {
    inset: Boolean,
    outset: Boolean
  },
  computed: {
    classes: function classes() {
      var classes = {
        'bg-button--inset': this.inset,
        'bg-button--outset': this.outset
      };

      return classes;
    }
  },
  methods: {
    click: function click(event) {
      this.$emit('click', event);
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'bg-checkbox',
  props: {
    id: String,
    label: String,
    value: Boolean
  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
  render: function render(createElement) {
    return createElement('h' + this.level, {
      class: {
        'bg-header': true,
        'bg-header--secondary': this.secondary,
        'bg-header--postanti': this.font == 'postanti',
        'bg-header--feinen': this.font == 'feinen',
        'bg-header--sherwood': this.font == 'sherwood',
        'bg-header--stone': this.font == 'stone'
      }
    }, this.$slots.default);
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'bg-panel',
  props: {
    width: Number,
    height: Number,
    inset: Boolean,
    outset: Boolean
  },
  render: function render(createElement) {
    return createElement('div', {
      class: {
        'bg-panel': true,
        'bg-panel--inset': this.inset,
        'bg-panel--outset': this.outset
      },
      style: {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }, this.$slots.default);
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'bg-progressbar',
  props: {
    progress: {
      type: Number,
      required: true
    }
  },
  computed: {
    width: function width() {
      return this.progress * 100 + '%';
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mmJsr = __webpack_require__(33);

var _mmJsr2 = _interopRequireDefault(_mmJsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
  data: function data() {
    return {
      jsr: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.jsr = new _mmJsr2.default(this.$refs.input, {
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

    this.jsr.addEventListener('update', function (_, value) {
      _this.$emit('input', value);
    });
  },

  watch: {
    value: function value(newValue) {
      if (this.value === newValue) {
        return;
      }

      this.jsr.setValue(0, newValue);
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simplebar = __webpack_require__(34);

var _simplebar2 = _interopRequireDefault(_simplebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'bg-scroll',
  props: {
    height: String,
    clickScrollValue: {
      type: Number,
      default: 30
    }
  },
  mounted: function mounted() {
    new _simplebar2.default(this.$refs.simplebarParent);
  },

  methods: {
    scroll: function scroll(direction) {
      var container = this.$refs.simplebarParent.getElementsByClassName('simplebar-scroll-content')[0];

      container.scrollTop += this.clickScrollValue * direction;
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'bg-textfield',
  props: {
    id: String,
    label: String,
    placeholder: String,
    value: [String, Number],
    vertical: Boolean,
    fixed: Boolean
  },
  computed: {},
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGApp = __webpack_require__(35);

var _BGApp2 = _interopRequireDefault(_BGApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGApp2.default.install = function install(Vue) {
  Vue.component(_BGApp2.default.name, _BGApp2.default);
};

exports.default = _BGApp2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGButton = __webpack_require__(36);

var _BGButton2 = _interopRequireDefault(_BGButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGButton2.default.install = function install(Vue) {
  Vue.component(_BGButton2.default.name, _BGButton2.default);
};

exports.default = _BGButton2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGCheckbox = __webpack_require__(37);

var _BGCheckbox2 = _interopRequireDefault(_BGCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGCheckbox2.default.install = function install(Vue) {
  Vue.component(_BGCheckbox2.default.name, _BGCheckbox2.default);
};

exports.default = _BGCheckbox2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGHeader = __webpack_require__(38);

var _BGHeader2 = _interopRequireDefault(_BGHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGHeader2.default.install = function install(Vue) {
  Vue.component(_BGHeader2.default.name, _BGHeader2.default);
};

exports.default = _BGHeader2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGPanel = __webpack_require__(39);

var _BGPanel2 = _interopRequireDefault(_BGPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGPanel2.default.install = function install(Vue) {
  Vue.component(_BGPanel2.default.name, _BGPanel2.default);
};

exports.default = _BGPanel2.default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGProgressbar = __webpack_require__(40);

var _BGProgressbar2 = _interopRequireDefault(_BGProgressbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGProgressbar2.default.install = function install(Vue) {
  Vue.component(_BGProgressbar2.default.name, _BGProgressbar2.default);
};

exports.default = _BGProgressbar2.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGRange = __webpack_require__(41);

var _BGRange2 = _interopRequireDefault(_BGRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGRange2.default.install = function install(Vue) {
  Vue.component(_BGRange2.default.name, _BGRange2.default);
};

exports.default = _BGRange2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGScroll = __webpack_require__(42);

var _BGScroll2 = _interopRequireDefault(_BGScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGScroll2.default.install = function install(Vue) {
  Vue.component(_BGScroll2.default.name, _BGScroll2.default);
};

exports.default = _BGScroll2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BGTextField = __webpack_require__(43);

var _BGTextField2 = _interopRequireDefault(_BGTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BGTextField2.default.install = function install(Vue) {
  Vue.component(_BGTextField2.default.name, _BGTextField2.default);
};

exports.default = _BGTextField2.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BGTheme = {
  install: function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) {
      return;
    }

    this.installed = true;

    if (opts.directives) {
      Object.keys(opts.directives).forEach(function (key) {
        var d = opts.directives[key];
        Vue.directive(d.name, d);
      });
    }

    if (opts.components) {
      Object.keys(opts.components).forEach(function (key) {
        var c = opts.components[key];
        Vue.use(c);
      });
    }
  }
};

exports.default = BGTheme;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _components = __webpack_require__(1);

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var components = _interopRequireWildcard(_components);

__webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function BGTheme(Vue, args) {
  var BGTheme = components.BGTheme;

  Vue.use(BGTheme, _extends({
    components: components
  }, args));
}

var version = '__VERSION__';

exports.default = BGTheme;
exports.version = version;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.JSR=t()}(this,function(){"use strict";function e(e,t,i){return!E[e]&&(E[e]=i,E[e](),setTimeout(function(){E[e]=!1},t),!0)}function t(e,t,i){e.addEventListener(t,i)}function i(e,n,s){e instanceof Array?e.forEach(function(e){e instanceof Array?i(e,n,s):t(e,n,s)}):t(e,n,s)}function n(e){var t=e.toString().split(".");return t[1]?t[1].length:0}function s(e){var t=this.config.min;return(e-t)/(this.config.max-t)}function r(e){var t=this.config.step,i=Math.pow(10,this.stepDecimals);return e=Math.round(e/t)*t,Math.round(e*i)/i}function o(e){var t=this.config.min;return e=(this.config.max-t)*e+t,r.call(this,e)}function l(){var e=this.config.min,t=this.config.max;return this.config.step/(t-e)}function u(e){var t=this.stepRatio,i=Math.pow(10,this.stepRatioDecimals);return e=Math.round(e/t)*t,Math.round(e*i)/i}function a(e){var t=1,i=0;return this.values.forEach(function(n,s){var r=Math.abs(n-e);r<t&&(i=s,t=r)}),i}function c(e,t,i,n){var s=t[e],r=s.count,o=[];if(r<=0)return o;i[e]=i[e]||[];for(var l=0;l<r;l+=1){var u,a=document.createElement("div");(u=a.classList).add.apply(u,I(s.classes)),i[e].push(a),o.push(a)}return s.children.length>0&&s.children.forEach(function(s){for(var o=0;o<r;o+=1)!function(r){c(s,t,i,n).forEach(function(o){n[s]=void 0===n[s]?0:n[s]+1,o.dataset.jsrId=n[s];for(var l in t[s].attributes)o.setAttribute(l,t[s].attributes[l]);i[e][r].appendChild(o)})}(o)}),o}function h(e,t){for(var i in e)1!==e[i].length||t[i].alwaysArray||(e[i]=e[i][0])}function d(e){var t=this,i=[];return this.values.forEach(function(n,s){n===t.values[e]&&i.push(s)}),i}function f(e){return!!e&&"object"==typeof e}function g(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"!==t&&"[object Date]"!==t}function v(e){return Array.isArray(e)?[]:{}}function m(e,t){return t&&!0===t.clone&&V(e)?y(v(e),e,t):e}function p(e,t,i){var n=e.slice();return t.forEach(function(t,s){void 0===n[s]?n[s]=m(t,i):V(t)?n[s]=y(e[s],t,i):-1===e.indexOf(t)&&n.push(m(t,i))}),n}function b(e,t,i){var n={};return V(e)&&Object.keys(e).forEach(function(t){n[t]=m(e[t],i)}),Object.keys(t).forEach(function(s){V(t[s])&&e[s]?n[s]=y(e[s],t[s],i):n[s]=m(t[s],i)}),n}function y(e,t,i){var n=Array.isArray(t),s=Array.isArray(e),r=i||{arrayMerge:p};return n===s?n?(r.arrayMerge||p)(e,t,i):b(e,t,i):m(t,i)}function M(){return this.values.filter(function(e){return void 0!==e}).length===this.config.values.length}function k(e,t){this.mergedLabels.push(t),this.labels[e].appendChild(this.labels[t])}function w(){var e=this;this.mergedLabels.forEach(function(t){e.labelsParent.appendChild(e.labels[t])}),this.mergedLabels=[]}function _(){var e=this.labels;w.call(this);for(var t=0,i=t+1;i<e.length;)e[t].getBoundingClientRect().right+5>=e[i].getBoundingClientRect().left?(k.call(this,t,i),i+=1):(t+=1,i+=1);this.minMax[0].getBoundingClientRect().right+5>=this.labels[0].getBoundingClientRect().left?this.minMax[0].style.opacity="0":this.minMax[0].style.opacity="1",this.labels[this.labels.length-1].getBoundingClientRect().right+5>=this.minMax[1].getBoundingClientRect().left?this.minMax[1].style.opacity="0":this.minMax[1].style.opacity="1"}function x(e,t,i){var s=this.labels[e];if(this.config.step<1){var r=n(t),o=n(this.config.step)-r;if(o>0){var l=t.toString().split(".");t=l[0]+"."+(l[1]||0)+Array(o).join("0")}}s.innerHTML=this.formatter?this.formatter(t):t,this.values[e]=i;var u=s.getBoundingClientRect();s.style.left="calc("+100*i+"% - "+u.width/2+"px)",M.call(this)&&_.call(this);var a=this.modules.renderer.body.root.getBoundingClientRect();(u=s.getBoundingClientRect()).right>a.right&&(s.style.left="calc(100% - "+u.width+"px)"),u.left<a.left&&(s.style.left="0")}var E={},S=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),I=function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)},C=function(){function t(){S(this,t),this.logger=null,this.config={min:0,max:0,step:0},this.modules={},this.values=[],this.valueInMove=[],this.stepRatio=0,this.stepRatioDecimals=0}return R(t,[{key:"_setValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!this.config.enabled)return null;t=null===t?a.call(this,e):parseInt(t),i&&(e=this.valueInMove[t]+e),null!==this.limit.min&&e<this.limit.min&&(e=this.limit.min),null!==this.limit.max&&e>this.limit.max&&(e=this.limit.max),void 0!==this.values[t-1]&&e<this.values[t-1]&&(e=this.values[t-1]),void 0!==this.values[t+1]&&e>this.values[t+1]&&(e=this.values[t+1]);var n=u.call(this,e);n!==this.values[t]&&(this.values[t]=n,this.modules.renderer.setSliderValue(n,t),this.modules.eventizer.trigger("core/value:update",t,o.call(this,n),n))}},{key:"_bindEvents",value:function(){var t=this,i=this.modules.eventizer;i.register("view/slider:mousedown",function(e,i){t.logger.debug("JSR: Slider mousedown."),t.logger.debug(e),i.forEach(function(e){t.valueInMove[e]=t.values[e]})}),i.register("view/slider:mousemove",function(i,n,s){e("slider-mousemove",10,function(){t.logger.debug("JSR: Slider mousemove."),t.logger.debug(i),t._setValue(s,n,!0)})}),i.register("view/slider:mouseup",function(e){t.logger.debug("JSR: Slider mouseup."),t.logger.debug(e)}),i.register("view/rail:click",function(e,i){t.logger.debug("JSR: Rail clicked."),t.logger.debug(e),t._setValue(i)}),i.register("view/root:arrow",function(e,i,n){var s=t.values[i]+(e.shiftKey?.05:e.ctrlKey?10*t.stepRatio:t.stepRatio)*n;t._setValue(s,i)}),i.register("view/bar:mousedown",function(e,i){t.logger.debug("JSR: Bar mousedown."),t.logger.debug(e),t.valueInMove[i]=t.values[i],t.valueInMove[i+1]=t.values[i+1]}),i.register("view/bar:mousemove",function(i,n,s){e("bar-mousemove",10,function(){t.logger.debug("JSR: Bar mousemove."),t.logger.debug(i),t._setValue(s,n,!0),t._setValue(s,n+1,!0)})}),i.register("view/bar:mouseup",function(e){t.logger.debug("JSR: Bar mouseup."),t.logger.debug(e)})}},{key:"build",value:function(e){var t=e.config,i=e.modules,s=e.logger;this.config=t,this.logger=s,this.modules=i,this.limit={},this.setLimit("min",this.config.limit.min,!0),this.setLimit("max",this.config.limit.max,!0),this.stepDecimals=n(this.config.step),this.stepRatio=l.call(this),this.stepRatioDecimals=n(this.stepRatio)}},{key:"init",value:function(e,t){var i=this;this.modules.renderer.appendRoot(e[0]),t.forEach(function(e,t){e=s.call(i,e),i._setValue(e,t)}),this._bindEvents(),this.logger.info("JSR: Core initiated.")}},{key:"getValue",value:function(e){var t=this.values[e];return o.call(this,t)}},{key:"setValue",value:function(e,t){this._setValue(e,t)}},{key:"setLimit",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null===t||void 0===t)this.limit[e]="min"===e?0:1;else{if(this.limit[e]=s.call(this,t),this.limit[e]<0?this.limit[e]=0:this.limit[e]>1&&(this.limit[e]=1),n)return;if(this.values.forEach(function(e,t){i._setValue(e,t)}),this.config.limit.show){var r=this.modules.renderer.body.limitBar;r.style.left=100*this.limit.min+"%",r.style.right=100*(1-this.limit.max)+"%"}}}}]),t}(),L=function(e,t){var i={};return c(t,e,i,{}),h(i,e),i},j=function(){function e(){S(this,e),this.logger=null,this.config={},this.modules={},this.temp={sliderInMove:null,sliderClickX:0,barInMove:null,barClickX:0},this.values=[],this.body={},this.bodyStructure={root:{classes:["jsr"],children:["railOuter"],count:1},railOuter:{classes:["jsr_rail-outer"],children:["rail"],count:1},rail:{classes:["jsr_rail"],children:["bars","sliders","limitBar"],count:1},sliders:{classes:["jsr_slider"],children:[],attributes:{tabindex:0},count:2,alwaysArray:!0},bars:{classes:["jsr_bar"],children:[],count:1,alwaysArray:!0},limitBar:{classes:["jsr_bar","jsr_bar--limit"],children:[],count:1}}}return R(e,[{key:"_bindEvents",value:function(){var e=this,t=this.modules.eventizer;i(this.body.sliders,"click",function(e){e.stopPropagation()}),i(this.body.sliders,"mousedown",function(i){i.stopPropagation(),e.temp.sliderInMove=parseInt(i.target.dataset.jsrId),e.temp.sliderClickX=i.clientX;var n=d.call(e,e.temp.sliderInMove);n.length>1&&(e.temp.sliderInMove=n),t.trigger("view/slider:mousedown",i,n)}),i(document,"mousemove",function(i){if(i.stopPropagation(),null!==e.temp.sliderInMove){e.temp.sliderInMove instanceof Array&&(i.clientX<e.temp.sliderClickX?e.temp.sliderInMove=e.temp.sliderInMove[0]:e.temp.sliderInMove=e.temp.sliderInMove.pop()),e.body.sliders[e.temp.sliderInMove].focus();var n=(i.clientX-e.temp.sliderClickX)/e.body.railOuter.offsetWidth;t.trigger("view/slider:mousemove",i,e.temp.sliderInMove,n)}}),i(document,"mouseup",function(i){null!==e.temp.sliderInMove&&(t.trigger("view/slider:mouseup",i,e.temp.sliderInMove),e.temp.sliderInMove=null)}),this.body.bars&&(i(this.body.bars,"click",function(t){e.temp.barClickX!==t.clientX&&t.stopPropagation()}),i(this.body.bars,"mousedown",function(i){e.temp.barInMove=parseInt(i.target.dataset.jsrId),e.temp.barClickX=i.clientX,t.trigger("view/bar:mousedown",i,e.temp.barInMove)}),i(document,"mousemove",function(i){if(null!==e.temp.barInMove){var n=(i.clientX-e.temp.barClickX)/e.body.railOuter.offsetWidth;t.trigger("view/bar:mousemove",i,e.temp.barInMove,n)}}),i(document,"mouseup",function(i){null!==e.temp.barInMove&&(t.trigger("view/bar:mouseup",i,e.temp.barInMove),e.temp.barInMove=null)})),i(this.body.railOuter,"click",function(i){var n=(i.clientX-e.body.railOuter.getBoundingClientRect().left)/e.body.railOuter.offsetWidth;t.trigger("view/rail:click",i,n)}),i(this.body.root,"keydown",function(e){var i=e.target.dataset.jsrId,n={37:-1,38:1,39:1,40:-1}[e.keyCode.toString()];if(!n)return!1;e.preventDefault(),t.trigger("view/root:arrow",e,i,n)})}},{key:"_updateBars",value:function(e,t){if(this.body.bars){var i=this.body.bars[e-1],n=this.body.bars[e];i&&(i.style.right=100*(1-t)+"%"),n&&(n.style.left=100*t+"%")}}},{key:"build",value:function(e){var t=e.modules,i=e.logger,n=e.config;this.modules=t,this.logger=i,this.config=n,this.bodyStructure.sliders.count=this.config.sliders||1,this.bodyStructure.bars.count=this.bodyStructure.sliders.count-1,this.body=L(this.bodyStructure,"root"),this._bindEvents(),this.modules.eventizer.trigger("modules/renderer:builded")}},{key:"appendRoot",value:function(e){e.parentNode.insertBefore(this.body.root,e.nextSibling),this.modules.eventizer.trigger("modules/renderer:rootAppended")}},{key:"setSliderValue",value:function(e,t){var i=this.body.sliders[t],n=100*e+"%";this.logger.debug("JSR: Slider no. "+t+" set to value: "+e+"."),this.values[t]=e,i.style.left=n,this._updateBars(t,e)}},{key:"structure",get:function(){return this.bodyStructure}}]),e}(),A=function(){function e(t){S(this,e),this.callback=t,this.enabled=!0}return R(e,[{key:"disable",value:function(){this.enabled=!1}},{key:"enable",value:function(){this.enabled=!0}},{key:"trigger",value:function(){this.enabled&&this.callback.apply(this,arguments)}}]),e}(),B=function(){function e(){S(this,e),this.store={}}return R(e,[{key:"_createNewStore",value:function(e){this.store[e]||(this.store[e]=[])}},{key:"_addListener",value:function(e,t){this._createNewStore(e);var i=new A(t);return this.store[e].push(i),i}},{key:"_dispatchEvent",value:function(e){if(!this.store[e])return!1;for(var t=this.store[e].length,i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];for(var r=0;r<t;r+=1){var o;(o=this.store[e][r]).trigger.apply(o,n)}}},{key:"register",value:function(e,t){return this._addListener(e,t)}},{key:"trigger",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this._dispatchEvent.apply(this,[e].concat(i))}}]),e}(),z={debug:0,info:1,warn:2,error:3,disable:4},J=function(){function e(){S(this,e),this.level=1}return R(e,[{key:"setLevel",value:function(e){this.level=z[e]}},{key:"debug",value:function(){var e;this.level>0||(e=console).log.apply(e,arguments)}},{key:"log",value:function(){var e;this.level>1||(e=console).log.apply(e,arguments)}},{key:"info",value:function(){var e;this.level>1||(e=console).info.apply(e,arguments)}},{key:"warn",value:function(){var e;this.level>2||(e=console).warn.apply(e,arguments)}},{key:"error",value:function(){var e;this.level>3||(e=console).error.apply(e,arguments)}}]),e}(),O=function(){function e(){S(this,e),this.input=null}return R(e,[{key:"_bindEvents",value:function(){var e=this;this.modules.eventizer.register("core/value:update",function(t,i){e.inputs[t].value=i,e.modules.eventizer.trigger("input/value:update",e.inputs[t],i),e.logger.debug("JSR: Input "+t+" updated with value "+i)})}},{key:"build",value:function(e,t){var i=e.config,n=e.modules,s=e.logger;this.inputs=t.inputs,this.logger=s,this.config=i,this.modules=n,this._bindEvents()}}]),e}(),V=function(e){return f(e)&&g(e)};y.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce(function(e,i){return y(e,i,t)})};var X=y,P=function(){function e(){S(this,e),this.labels=[],this.minMax=[],this.values=[],this.labelsParent=null,this.mergedLabels=[]}return R(e,[{key:"_bindEvents",value:function(){var e=this;i(this.labels,"click",function(e){e.stopPropagation()}),this.modules.eventizer.register("core/value:update",function(t,i,n){e.values[t]=[i,n],x.call(e,t,i,n)}),i(this.labels,"mousedown",function(t){var i=new MouseEvent("mousedown",t);e.modules.renderer.body.sliders[t.target.dataset.jsrId].dispatchEvent(i)})}},{key:"_parseMinMax",value:function(){this.minMax[0].innerHTML=this.formatter?this.formatter(this.config.min):this.config.min,this.minMax[1].innerHTML=this.formatter?this.formatter(this.config.max):this.config.max,this.minMax[0].style.left="0%",this.minMax[1].style.right="0%",this.config.labels.minMax||(this.minMax[0].style.display="none",this.minMax[1].style.display="none")}},{key:"build",value:function(e){var t=this,i=e.config,n=e.modules,s=e.logger,r={labels:{minMax:!0,formatter:null}};this.logger=s,this.config=X(r,i),this.modules=n,this.formatter=this.config.labels.formatter,this.modules.renderer.structure.labels={classes:["jsr_label"],children:[],count:this.config.sliders,alwaysArray:!0},this.modules.renderer.structure.rail.children.push("labels"),this.modules.renderer.structure.labelsMinMax={classes:["jsr_label","jsr_label--minmax"],children:[],count:2},this.modules.renderer.structure.rail.children.push("labelsMinMax"),this.modules.eventizer.register("modules/renderer:builded",function(){t.labels=t.modules.renderer.body.labels,t.labelsParent=t.labels[0].parentNode,t.minMax=t.modules.renderer.body.labelsMinMax,t._parseMinMax(),t._bindEvents()})}}]),e}(),T=function(){function e(){S(this,e)}return R(e,[{key:"_bindEvents",value:function(){var e=this,t=[this.modules.renderer.body.sliders];this.modules.renderer.body.labels&&t.push(this.modules.renderer.body.labels),i(t,"touchstart",function(t){document.documentElement.classList.add("jsr_lockscreen"),t=t.targetTouches.item(0);var i=new MouseEvent("mousedown",t);e.modules.renderer.body.sliders[t.target.dataset.jsrId].dispatchEvent(i)}),i(t,"touchmove",function(e){e=e.targetTouches.item(0);var t=new MouseEvent("mousemove",e);document.dispatchEvent(t)}),i(document,"touchend",function(e){document.documentElement.classList.remove("jsr_lockscreen"),e=e.targetTouches.item(0);var t=new MouseEvent("mouseup",e);document.dispatchEvent(t)})}},{key:"build",value:function(e){var t=e.config,i=e.modules,n=e.logger;this.logger=n,this.config=t,this.modules=i,this._bindEvents()}}]),e}(),N=function(){function e(){S(this,e)}return R(e,[{key:"_bindEvents",value:function(){var e=this;this.inputs.map(function(e){return e.id}).forEach(function(t,i){var n=document.querySelector('label[for="'+t+'"]');n&&n.addEventListener("click",function(){e.modules.renderer.body.sliders[i].focus()})})}},{key:"build",value:function(e,t){var i=e.config,n=e.modules,s=e.logger;this.logger=s,this.config=i,this.modules=n,this.inputs=t.inputs,this._bindEvents()}}]),e}(),W=function(){function t(){S(this,t)}return R(t,[{key:"_bindEvents",value:function(){var t=this,i=Math.random();window.addEventListener("resize",function(){e("grid-resize-"+i,50,function(){t.logger.debug("JSR: Canvas resized."),t._setWidth(),t._render()})})}},{key:"_setWidth",value:function(){this.canvas.width=this.modules.renderer.body.railOuter.offsetWidth}},{key:"_getNumberOfLines",value:function(){return Math.round(100)}},{key:"_render",value:function(){var e=this.canvas.width,t=this.config.grid.height,i=this.context,n=this._getNumberOfLines(),s=1/n;i.clearRect(0,0,e,t),i.beginPath(),i.lineWidth=1,i.fillStyle=i.strokeStyle=this.config.grid.color,i.font=this.config.grid.fontSize+"px "+this.config.grid.fontFamily,i.textBaseline="top";for(var r=0;r<=n;r+=1){var o=r*s*e;if(o=Math.round(100*o)/100,i.moveTo(o,0),i.lineTo(o,t),r%10==0){i.textAlign=0===r?"left":r===n?"right":"center";var l=(this.config.max-this.config.min)*(r/n)+this.config.min;this.config.labels&&this.config.labels.formatter&&(l=this.config.labels.formatter(l)),i.fillText(l.toString(),r*s*e,t+this.config.grid.textPadding)}}i.closePath(),i.stroke()}},{key:"build",value:function(e){var t=this,i=e.config,n=e.modules,s=e.logger,r={grid:{color:"rgba(0, 0, 0, 0.3)",height:10,fontSize:10,fontFamily:"sans-serif",textPadding:5}};this.logger=s,this.config=X(r,i),this.modules=n,this.canvas=document.createElement("canvas"),this.canvas.classList.add("jsr_canvas"),this.canvas.height=this.config.grid.height+this.config.grid.fontSize+this.config.grid.textPadding,this.context=this.canvas.getContext("2d"),this.modules.eventizer.register("modules/renderer:rootAppended",function(){t.modules.renderer.body.railOuter.appendChild(t.canvas),t._setWidth(),t._render()}),this._bindEvents()}}]),t}();return function(){function e(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};S(this,e);var s={log:"error",min:0,max:100,step:1,enabled:!0,limit:{show:!1},modules:{eventizer:B,core:C,labels:P,grid:W,renderer:j,touchSupport:T,inputUpdater:O,htmlLabels:N}};this.config=X(s,n,{arrayMerge:function(e,t){return t}}),this.specificConfig={inputUpdater:{},htmlLabels:{}},this.logger=new J,this.logger.setLevel(this.config.log),t=[].concat(t),this.inputs=t.map(function(e){return"string"==typeof e?document.querySelector(e):e});var r=this._validate({inputs:t});if(r)return r.forEach(function(e){i.logger.error(e)}),{};this.modules={};for(var o in this.config.modules)this.config.modules[o]&&(this.modules[o]=new this.config.modules[o]);this.specificConfig.inputUpdater.inputs=this.inputs,this.specificConfig.htmlLabels.inputs=this.inputs,this._buildModules(),this._init()}return R(e,[{key:"_validate",value:function(e){var t=[];return this.config.sliders!==this.config.values.length&&t.push("JSR: Number of sliders isn't equal to number of values."),this.inputs.length!==this.config.values.length&&t.push("JSR: Number of inputs isn't equal to number of values."),this.inputs.forEach(function(i,n){i||t.push("JSR: Input "+e.inputs[n]+" not found.")}),!!t.length&&t}},{key:"_buildModules",value:function(){for(var e in this.modules){var t=this.modules[e].build;t?(t.call(this.modules[e],{modules:this.modules,logger:this.logger,config:this.config},this.specificConfig[e]||{}),this.logger.info("JSR: Module "+e+" builded.")):this.logger.info("JSR: Module "+e+" skipped. No .build() method.")}}},{key:"_init",value:function(){this.inputs.forEach(function(e){e.style.display="none"}),this.modules.core.init(this.inputs,this.config.values)}},{key:"addEventListener",value:function(e,t){var i={update:"input/value:update"};return this.modules.eventizer.register(i[e],t),this}},{key:"setValue",value:function(e,t){return this.modules.core.setValue(t,e),this}},{key:"setLimit",value:function(e,t){return this.modules.core.setLimit(e,t),this}},{key:"disable",value:function(){return this.config.enabled=!1,this.modules.renderer.body.root.classList.add("jsr--disabled"),this}},{key:"enable",value:function(){return this.config.enabled=!0,this.modules.renderer.body.root.classList.remove("jsr--disabled"),this}}]),e}()});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *         SimpleBar.js - v2.5.1
 *         Scrollbars, simpler.
 *         https://grsmto.github.io/simplebar/
 *         
 *         Made by Adrien Grsmto from a fork by Jonathan Nicol
 *         Under MIT License
 *       
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleBar=e():t.SimpleBar=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=27)}([function(t,e,n){var r=n(23)("wks"),i=n(12),o=n(1).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(5),i=n(11);t.exports=n(7)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6),i=n(33),o=n(34),s=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var r=n(23)("keys"),i=n(12);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=n(3),o=n(4),s=n(18),c=n(19),a=function(t,e,n){var u,l,f,h,d=t&a.F,p=t&a.G,v=t&a.S,b=t&a.P,y=t&a.B,m=p?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,g=p?i:i[e]||(i[e]={}),O=g.prototype||(g.prototype={});p&&(n=e);for(u in n)l=!d&&m&&void 0!==m[u],f=(l?m:n)[u],h=y&&l?c(f,r):b&&"function"==typeof f?c(Function.call,f):f,m&&s(m,u,f,t&a.U),g[u]!=f&&o(g,u,h),b&&O[u]!=f&&(O[u]=f)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(1),i=n(4),o=n(2),s=n(12)("src"),c=Function.toString,a=(""+c).split("toString");n(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var u="function"==typeof n;u&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(u&&(o(n,s)||i(n,s,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||c.call(this)})},function(t,e,n){var r=n(35);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(41),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(5).f,i=n(2),o=n(0)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(28);var c=r(n(53)),a=r(n(54)),u=r(n(56));n(57),Object.assign=n(58);var l=function(){function t(e,n){i(this,t),this.el=e,this.flashTimeout,this.contentEl,this.scrollContentEl,this.dragOffset={x:0,y:0},this.isVisible={x:!0,y:!0},this.scrollOffsetAttr={x:"scrollLeft",y:"scrollTop"},this.sizeAttr={x:"offsetWidth",y:"offsetHeight"},this.scrollSizeAttr={x:"scrollWidth",y:"scrollHeight"},this.offsetAttr={x:"left",y:"top"},this.globalObserver,this.mutationObserver,this.resizeObserver,this.currentAxis,this.options=Object.assign({},t.defaultOptions,n),this.classNames=this.options.classNames,this.scrollbarWidth=(0,c.default)(),this.offsetSize=20,this.flashScrollbar=this.flashScrollbar.bind(this),this.onDragY=this.onDragY.bind(this),this.onDragX=this.onDragX.bind(this),this.onScrollY=this.onScrollY.bind(this),this.onScrollX=this.onScrollX.bind(this),this.drag=this.drag.bind(this),this.onEndDrag=this.onEndDrag.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.recalculate=(0,a.default)(this.recalculate,100,{leading:!0,trailing:!1}),this.init()}return s(t,[{key:"init",value:function(){this.el.SimpleBar=this,this.initDOM(),this.scrollbarX=this.trackX.querySelector(".".concat(this.classNames.scrollbar)),this.scrollbarY=this.trackY.querySelector(".".concat(this.classNames.scrollbar)),this.scrollContentEl.style.paddingRight="".concat(this.scrollbarWidth||this.offsetSize,"px"),this.scrollContentEl.style.marginBottom="-".concat(2*this.scrollbarWidth||this.offsetSize,"px"),this.contentEl.style.paddingBottom="".concat(this.scrollbarWidth||this.offsetSize,"px"),0!==this.scrollbarWidth&&(this.contentEl.style.marginRight="-".concat(this.scrollbarWidth,"px")),this.recalculate(),this.initListeners()}},{key:"initDOM",value:function(){var t=this;if(Array.from(this.el.children).filter(function(e){return e.classList.contains(t.classNames.scrollContent)}).length)this.trackX=this.el.querySelector(".".concat(this.classNames.track,".horizontal")),this.trackY=this.el.querySelector(".".concat(this.classNames.track,".vertical")),this.scrollContentEl=this.el.querySelector(".".concat(this.classNames.scrollContent)),this.contentEl=this.el.querySelector(".".concat(this.classNames.content));else{for(this.scrollContentEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.scrollContentEl.classList.add(this.classNames.scrollContent),this.contentEl.classList.add(this.classNames.content);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.scrollContentEl.appendChild(this.contentEl),this.el.appendChild(this.scrollContentEl)}if(!this.trackX||!this.trackY){var e=document.createElement("div"),n=document.createElement("div");e.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),e.appendChild(n),this.trackX=e.cloneNode(!0),this.trackX.classList.add("horizontal"),this.trackY=e.cloneNode(!0),this.trackY.classList.add("vertical"),this.el.insertBefore(this.trackX,this.el.firstChild),this.el.insertBefore(this.trackY,this.el.firstChild)}this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),this.scrollbarY.addEventListener("mousedown",this.onDragY),this.scrollbarX.addEventListener("mousedown",this.onDragX),this.scrollContentEl.addEventListener("scroll",this.onScrollY),this.contentEl.addEventListener("scroll",this.onScrollX),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(e){e.forEach(function(e){(t.isChildNode(e.target)||e.addedNodes.length)&&t.recalculate()})}),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new u.default(this.recalculate.bind(this)),this.resizeObserver.observe(this.el)}},{key:"removeListeners",value:function(){this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),this.scrollbarX.removeEventListener("mousedown",this.onDragX),this.scrollbarY.removeEventListener("mousedown",this.onDragY),this.scrollContentEl.removeEventListener("scroll",this.onScrollY),this.contentEl.removeEventListener("scroll",this.onScrollX),this.mutationObserver.disconnect(),this.resizeObserver.disconnect()}},{key:"onDragX",value:function(t){this.onDrag(t,"x")}},{key:"onDragY",value:function(t){this.onDrag(t,"y")}},{key:"onDrag",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";t.preventDefault();var n="y"===e?this.scrollbarY:this.scrollbarX,r="y"===e?t.pageY:t.pageX;this.dragOffset[e]=r-n.getBoundingClientRect()[this.offsetAttr[e]],this.currentAxis=e,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"drag",value:function(t){var e,n,r;t.preventDefault(),"y"===this.currentAxis?(e=t.pageY,n=this.trackY,r=this.scrollContentEl):(e=t.pageX,n=this.trackX,r=this.contentEl);var i=e-n.getBoundingClientRect()[this.offsetAttr[this.currentAxis]]-this.dragOffset[this.currentAxis],o=i/n[this.sizeAttr[this.currentAxis]],s=o*this.contentEl[this.scrollSizeAttr[this.currentAxis]];r[this.scrollOffsetAttr[this.currentAxis]]=s}},{key:"onEndDrag",value:function(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.onEndDrag)}},{key:"resizeScrollbar",value:function(){var t,e,n,r,i,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";"x"===o?(t=this.trackX,e=this.scrollbarX,n=this.contentEl[this.scrollOffsetAttr[o]],r=this.contentSizeX,i=this.scrollbarXSize):(t=this.trackY,e=this.scrollbarY,n=this.scrollContentEl[this.scrollOffsetAttr[o]],r=this.contentSizeY,i=this.scrollbarYSize);var s=i/r,c=n/(r-i),a=Math.max(~~(s*(i-2))-2,this.options.scrollbarMinSize),u=~~((i-4-a)*c+2);this.isVisible[o]=i<r,this.isVisible[o]?(t.style.visibility="visible","x"===o?(e.style.left="".concat(u,"px"),e.style.width="".concat(a,"px")):(e.style.top="".concat(u,"px"),e.style.height="".concat(a,"px"))):t.style.visibility="hidden"}},{key:"onScrollX",value:function(){this.flashScrollbar("x")}},{key:"onScrollY",value:function(){this.flashScrollbar("y")}},{key:"onMouseEnter",value:function(){this.flashScrollbar("x"),this.flashScrollbar("y")}},{key:"flashScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.resizeScrollbar(t),this.showScrollbar(t)}},{key:"showScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.isVisible[t]&&("x"===t?this.scrollbarX.classList.add("visible"):this.scrollbarY.classList.add("visible"),this.options.autoHide&&("number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout),this.flashTimeout=window.setTimeout(this.hideScrollbar.bind(this),1e3)))}},{key:"hideScrollbar",value:function(){this.scrollbarX.classList.remove("visible"),this.scrollbarY.classList.remove("visible"),"number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout)}},{key:"recalculate",value:function(){this.contentSizeX=this.contentEl[this.scrollSizeAttr.x],this.contentSizeY=this.contentEl[this.scrollSizeAttr.y]-(this.scrollbarWidth||this.offsetSize),this.scrollbarXSize=this.trackX[this.sizeAttr.x],this.scrollbarYSize=this.trackY[this.sizeAttr.y],this.resizeScrollbar("x"),this.resizeScrollbar("y"),this.options.autoHide||(this.showScrollbar("x"),this.showScrollbar("y"))}},{key:"getScrollElement",value:function(){return this.scrollContentEl}},{key:"getContentElement",value:function(){return this.contentEl}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}}],[{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(e){e.forEach(function(e){Array.from(e.addedNodes).forEach(function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))}))}),Array.from(e.removedNodes).forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements.bind(this)):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(e){return Object.keys(t.htmlAttributes).reduce(function(n,r){var i=t.htmlAttributes[r];return e.hasAttribute(i)&&(n[r]=JSON.parse(e.getAttribute(i)||!0)),n},{})}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e){e.SimpleBar||new t(e,t.getElOptions(e))})}},{key:"defaultOptions",get:function(){return{autoHide:!0,classNames:{content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",track:"simplebar-track"},scrollbarMinSize:25}}},{key:"htmlAttributes",get:function(){return{autoHide:"data-simplebar-autohide",scrollbarMinSize:"data-simplebar-scrollbar-min-size"}}}]),t}();e.default=l,l.initHtmlApi()},function(t,e,n){n(29),n(46),t.exports=n(3).Array.from},function(t,e,n){"use strict";var r=n(30)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(8),i=n(9);t.exports=function(t){return function(e,n){var o,s,c=String(i(e)),a=r(n),u=c.length;return a<0||a>=u?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):o:t?c.slice(a,a+2):s-56320+(o-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(32),i=n(15),o=n(18),s=n(4),c=n(2),a=n(13),u=n(36),l=n(25),f=n(45),h=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,b,y,m){u(n,e,v);var g,O,E,_=function(t){if(!d&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",w="values"==b,S=!1,A=t.prototype,k=A[h]||A["@@iterator"]||b&&A[b],j=k||_(b),M=b?w?_("entries"):j:void 0,L="Array"==e?A.entries||k:k;if(L&&(E=f(L.call(new t)))!==Object.prototype&&E.next&&(l(E,x,!0),r||c(E,h)||s(E,h,p)),w&&k&&"values"!==k.name&&(S=!0,j=function(){return k.call(this)}),r&&!m||!d&&!S&&A[h]||s(A,h,j),a[e]=j,a[x]=p,b)if(g={values:w?j:_("values"),keys:y?j:_("keys"),entries:M},m)for(O in g)O in A||o(A,O,g[O]);else i(i.P+i.F*(d||S),e,g);return g}},function(t,e){t.exports=!1},function(t,e,n){t.exports=!n(7)&&!n(16)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(37),i=n(11),o=n(25),s={};n(4)(s,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(6),i=n(38),o=n(24),s=n(14)("IE_PROTO"),c=function(){},a=function(){var t,e=n(17)("iframe"),r=o.length;for(e.style.display="none",n(44).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[s]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(5),i=n(6),o=n(39);t.exports=n(7)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),c=s.length,a=0;c>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(40),i=n(24);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(2),i=n(20),o=n(42)(!1),s=n(14)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(20),i=n(22),o=n(43);t.exports=function(t){return function(e,n,s){var c,a=r(e),u=i(a.length),l=o(s,u);if(t&&n!=n){for(;u>l;)if((c=a[l++])!=c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(8),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(2),i=n(26),o=n(14)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict";var r=n(19),i=n(15),o=n(26),s=n(47),c=n(48),a=n(22),u=n(49),l=n(50);i(i.S+i.F*!n(52)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,y=0,m=l(h);if(b&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==m||d==Array&&c(m))for(e=a(h.length),n=new d(e);e>y;y++)u(n,y,b?v(h[y],y):h[y]);else for(f=m.call(h),n=new d;!(i=f.next()).done;y++)u(n,y,b?s(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},function(t,e,n){var r=n(6);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(13),i=n(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(5),i=n(11);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(51),i=n(0)("iterator"),o=n(13);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(21),i=n(0)("toStringTag"),o="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:o?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(0)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(t){}return n}},function(t,e,n){var r,i,o;/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
!function(n,s){i=[],r=s,void 0!==(o="function"==typeof r?r.apply(e,i):r)&&(t.exports=o)}(0,function(){"use strict";function t(){if("undefined"==typeof document)return 0;var t,e=document.body,n=document.createElement("div"),r=n.style;return r.position="absolute",r.top=r.left="-9999px",r.width=r.height="100px",r.overflow="scroll",e.appendChild(n),t=n.offsetWidth-n.clientWidth,e.removeChild(n),t}return t})},function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=v,r=b;return v=b=void 0,w=e,m=t.apply(r,n)}function o(t){return w=t,g=setTimeout(l,e),S?i(t):m}function a(t){var n=t-x,r=t-w,i=e-n;return A?E(i,y-r):i}function u(t){var n=t-x,r=t-w;return void 0===x||n>=e||n<0||A&&r>=y}function l(){var t=_();if(u(t))return f(t);g=setTimeout(l,a(t))}function f(t){return g=void 0,k&&v?i(t):(v=b=void 0,m)}function h(){void 0!==g&&clearTimeout(g),w=0,v=x=b=g=void 0}function d(){return void 0===g?m:f(_())}function p(){var t=_(),n=u(t);if(v=arguments,b=this,x=t,n){if(void 0===g)return o(x);if(A)return g=setTimeout(l,e),i(x)}return void 0===g&&(g=setTimeout(l,e)),m}var v,b,y,m,g,x,w=0,S=!1,A=!1,k=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,r(n)&&(S=!!n.leading,A="maxWait"in n,y=A?O(s(n.maxWait)||0,e):y,k="trailing"in n?!!n.trailing:k),p.cancel=h,p.flush=d,p}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||i(t)&&g.call(t)==u}function s(t){if("number"==typeof t)return t;if(o(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=h.test(t);return n||d.test(t)?p(t.slice(2),n?2:8):f.test(t)?a:+t}var c="Expected a function",a=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,b="object"==typeof self&&self&&self.Object===Object&&self,y=v||b||Function("return this")(),m=Object.prototype,g=m.toString,O=Math.max,E=Math.min,_=function(){return y.Date.now()};t.exports=n}).call(e,n(55))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){return parseFloat(t)||0}function i(t){return Array.prototype.slice.call(arguments,1).reduce(function(e,n){return e+r(t["border-"+n+"-width"])},0)}function o(t){for(var e=["top","right","bottom","left"],n={},i=0,o=e;i<o.length;i+=1){var s=o[i],c=t["padding-"+s];n[s]=r(c)}return n}function s(t){var e=t.getBBox();return f(0,0,e.width,e.height)}function c(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return _;var s=getComputedStyle(t),c=o(s),u=c.left+c.right,l=c.top+c.bottom,h=r(s.width),d=r(s.height);if("border-box"===s.boxSizing&&(Math.round(h+u)!==e&&(h-=i(s,"left","right")+u),Math.round(d+l)!==n&&(d-=i(s,"top","bottom")+l)),!a(t)){var p=Math.round(h+u)-e,v=Math.round(d+l)-n;1!==Math.abs(p)&&(h-=p),1!==Math.abs(v)&&(d-=v)}return f(c.left,c.top,h,d)}function a(t){return t===document.documentElement}function u(t){return d?x(t)?s(t):c(t):_}function l(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return E(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function f(t,e,n,r){return{x:t,y:e,width:n,height:r}}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return"undefined"!=typeof Map?Map:function(){function e(){this.__entries__=[]}var n={size:{}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n+=1){var i=r[n];t.call(e,i[1],i[0])}},Object.defineProperties(e.prototype,n),e}()}(),d="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,p=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),v=2,b=function(t,e){function n(){o&&(o=!1,t()),s&&i()}function r(){p(n)}function i(){var t=Date.now();if(o){if(t-c<v)return;s=!0}else o=!0,s=!1,setTimeout(r,e);c=t}var o=!1,s=!1,c=0;return i},y=["top","right","bottom","left","width","height","size","weight"],m="undefined"!=typeof navigator&&/Trident\/.*rv:11/.test(navigator.userAgent),g="undefined"!=typeof MutationObserver&&!m,O=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=b(this.refresh.bind(this),20)};O.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},O.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},O.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},O.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},O.prototype.connect_=function(){d&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),g?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},O.prototype.disconnect_=function(){d&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},O.prototype.onTransitionEnd_=function(t){var e=t.propertyName;y.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},O.getInstance=function(){return this.instance_||(this.instance_=new O),this.instance_},O.instance_=null;var E=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},_=f(0,0,0,0),x=function(){return"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof SVGGraphicsElement}:function(t){return t instanceof SVGElement&&"function"==typeof t.getBBox}}(),w=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=f(0,0,0,0),this.target=t};w.prototype.isActive=function(){var t=u(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},w.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var S=function(t,e){var n=l(e);E(this,{target:t,contentRect:n})},A=function(t,e,n){if("function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.activeObservations_=[],this.observations_=new h,this.callback_=t,this.controller_=e,this.callbackCtx_=n};A.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},A.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},A.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},A.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},A.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new S(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},A.prototype.clearActive=function(){this.activeObservations_.splice(0)},A.prototype.hasActive=function(){return this.activeObservations_.length>0};var k="undefined"!=typeof WeakMap?new WeakMap:new h,j=function(t){if(!(this instanceof j))throw new TypeError("Cannot call a class as a function");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=O.getInstance(),n=new A(t,e,this);k.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){j.prototype[t]=function(){return(e=k.get(this))[t].apply(e,arguments);var e}});var M=function(){return"undefined"!=typeof ResizeObserver?ResizeObserver:j}();e.default=M},function(t,e){},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,a=r(t),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var l in n)o.call(n,l)&&(a[l]=n[l]);if(i){c=i(n);for(var f=0;f<c.length;f++)s.call(n,c[f])&&(a[c[f]]=n[c[f]])}}return a}}]).default});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(31)
  __webpack_require__(30)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(49),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7f88a170",
  /* moduleIdentifier (server only) */
  "d69c0f28"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGApp/BGApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BGApp.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(32)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(50),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ef843a54",
  /* moduleIdentifier (server only) */
  "759de65c"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGButton/BGButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BGButton.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(25)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(45),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-369d48b6",
  /* moduleIdentifier (server only) */
  "11b314b2"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGCheckbox/BGCheckbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BGCheckbox.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(27)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  null,
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-60c94936",
  /* moduleIdentifier (server only) */
  "c487199c"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGHeader/BGHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(23)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  null,
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-173546f6",
  /* moduleIdentifier (server only) */
  "39a2bff2"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGPanel/BGPanel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(29)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(48),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7f683ffa",
  /* moduleIdentifier (server only) */
  "cb47c214"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGProgressbar/BGProgressbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BGProgressbar.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(24)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(44),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  "44accc64"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGRange/BGRange.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BGRange.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(28)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(47),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  "a14d899c"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGScroll/BGScroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BGScroll.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
var i
  __webpack_require__(26)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(46),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-47771208",
  /* moduleIdentifier (server only) */
  "976c61f8"
)
Component.options.__file = "/mnt/pliki/Repos/IE-IE/vue-baldurs-gate-theme/src/components/BGTextField/BGTextField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BGTextField.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-range"
  }, [_vm._ssrNode(((_vm.label) ? ("<label class=\"bg-range_label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>") : "<!---->") + " <input type=\"text\"" + (_vm._ssrAttr("value", (_vm.value))) + ">")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-checkbox"
  }, [_vm._ssrNode("<input type=\"checkbox\"" + (_vm._ssrAttr("id", _vm.id)) + (_vm._ssrAttr("checked", _vm.value)) + " class=\"bg-checkbox_input\" data-v-369d48b6> <label" + (_vm._ssrAttr("for", _vm.id)) + " class=\"bg-checkbox_label\" data-v-369d48b6>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-textfield",
    class: {
      'bg-textfield--vertical': _vm.vertical
    }
  }, [_vm._ssrNode(((_vm.label) ? ("<label" + (_vm._ssrAttr("for", _vm.id)) + (_vm._ssrClass("bg-textfield_label", {
    'bg-textfield_label--fixed': _vm.fixed
  })) + " data-v-47771208>" + _vm._ssrEscape("\n    " + _vm._s(_vm.label) + "\n  ") + "</label>") : "<!---->") + " <input type=\"text\"" + (_vm._ssrAttr("id", _vm.id)) + (_vm._ssrAttr("placeholder", _vm.placeholder)) + (_vm._ssrAttr("value", _vm.value)) + " class=\"bg-textfield_field\" data-v-47771208>")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "simplebar-outer"
  }, [_vm._ssrNode("<div" + (_vm._ssrStyle(null, {
    height: _vm.height
  }, null)) + ">", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" <button class=\"simplebar-button-up\"></button> <button class=\"simplebar-button-down\"></button>")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-progressbar"
  }, [_vm._ssrNode("<div class=\"bg-progressbar_bar\"" + (_vm._ssrStyle(null, {
    width: _vm.width
  }, null)) + " data-v-7f683ffa></div>")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-app"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "bg-button",
    class: _vm.classes,
    on: {
      "click": function($event) {
        _vm.click($event)
      }
    }
  }, [_vm._ssrNode("<span class=\"bg-button_inner\" data-v-ef843a54>", "</span>", [_vm._ssrNode("<span data-v-ef843a54>", "</span>", [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);