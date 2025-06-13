/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_vhMobileFix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/vhMobileFix.js */ "./src/modules/vhMobileFix.js");
/* harmony import */ var _modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollersAndSort.js */ "./src/modules/scrollersAndSort.js");
/* harmony import */ var _modules_kioskScheduleHoverImg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/kioskScheduleHoverImg.js */ "./src/modules/kioskScheduleHoverImg.js");
/* harmony import */ var _modules_bgAnimPendulum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/bgAnimPendulum.js */ "./src/modules/bgAnimPendulum.js");
var body;
var is_touch_device;
var html_top_margin;




body = jQuery('body');
is_touch_device = body.hasClass('is_touch_device');
html_top_margin = parseInt(jQuery('html').css('margin-top'));
(0,_modules_vhMobileFix_js__WEBPACK_IMPORTED_MODULE_0__.vh_mobile_fix)();
(0,_modules_kioskScheduleHoverImg_js__WEBPACK_IMPORTED_MODULE_2__.kiosk_schedule_hover_img)();
(0,_modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__.kiosk_gallery_slick)();
// kiosk_program_mcsutomscrollbar();
(0,_modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__.kiosk_program_slick)();
(0,_modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__.kiosk_new_articles_mcsutomscrollbar)();
(0,_modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__.kiosk_archive_sort)();
(0,_modules_bgAnimPendulum_js__WEBPACK_IMPORTED_MODULE_3__.bg_animation)();

// main menu
//==================================================================

var toggleBtn = document.getElementById('main_menu_switch');
var offcanvas = document.getElementById('main_menu_wrap');
toggleBtn.addEventListener('click', function () {
  var isOpen = offcanvas.getAttribute('aria-hidden') === 'true';
  offcanvas.setAttribute('aria-hidden', String(!isOpen));
  toggleBtn.setAttribute('aria-expanded', String(isOpen));
  offcanvas.focus();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && offcanvas.getAttribute('aria-hidden') === 'false') {
    offcanvas.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});

/***/ }),

/***/ "./src/modules/bgAnimPendulum.js":
/*!***************************************!*\
  !*** ./src/modules/bgAnimPendulum.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bg_animation: () => (/* binding */ bg_animation),
/* harmony export */   getSinusoid: () => (/* binding */ getSinusoid)
/* harmony export */ });
function bg_animation() {
  if (!document.body.classList.contains('page_homepage')) {
    return;
  }
  var SPEED_SLIDER = document.querySelector('input.metronome-speed-slider');
  var TICK_AUDIO = document.querySelector('audio.metronome_tick');
  var current_tick_num = 0;
  var PENDULUM = document.getElementById('metronome_pendulum_image');
  var SOUND_BUTTON = document.getElementById('metronome_sound_on');
  var PENDULUM_BLUR = document.querySelector('#metronome_pendulum_blur feGaussianBlur');
  var METRONOME_SPEED_NUMBER = document.getElementById('metronome-speed-no');
  var bpm = 40;
  if (SPEED_SLIDER) {
    bpm = Number(SPEED_SLIDER.value);
    METRONOME_SPEED_NUMBER.innerHTML = SPEED_SLIDER.value;
  }
  var freq = bpm / 60;
  setBlur(freq);
  var soundOn = false;
  var audioTickTimeout = null;
  var now = null;
  var TICK_URL = TICK_AUDIO.src;
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext({
    sampleRate: 48000,
    // Set latencyHint to 'interactive' for better timing precision
    latencyHint: 'interactive'
  }); // Make it crossbrowser
  var tickBuffer = void 0;
  window.fetch(TICK_URL).then(function (response) {
    return response.arrayBuffer();
  }).then(function (arrayBuffer) {
    return context.decodeAudioData(arrayBuffer, function (audioBuffer) {
      tickBuffer = audioBuffer;
    }, function (error) {
      return console.error(error);
    });
  });
  SOUND_BUTTON.addEventListener('click', function () {
    soundOn = !soundOn;
    SOUND_BUTTON.setAttribute("aria-pressed", soundOn ? "true" : "false");
  });
  SPEED_SLIDER.addEventListener('change', function () {
    changeSpeed(false);
  });
  SPEED_SLIDER.addEventListener('input', function () {
    changeSpeed();
  });
  /**
   * 
   * @param {boolean} only_number //if only display the value, but not change. 
   */
  function changeSpeed() {
    var only_number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (!only_number) {
      bpm = Number(SPEED_SLIDER.value);
      freq = bpm / 120; //every second note, since we have 2 two ticks per sinusoid
      setBlur(freq);
    }
    METRONOME_SPEED_NUMBER.innerHTML = SPEED_SLIDER.value;
  }
  function setBlur(freq) {
    var newBlurValue = (freq - .6) * 6; //arbitrary values, how it seemed visually ok
    if (newBlurValue > 0) {
      PENDULUM_BLUR.setAttribute('stdDeviation', "".concat(newBlurValue, " 0"));
      return;
    }
    PENDULUM_BLUR.setAttribute('stdDeviation', '0 0');
  }
  var prevRotation = null;
  var currentRotation = null;
  // Animation (visual)
  function animate() {
    var now = performance.now() * 0.001;
    currentRotation = getSinusoid(now, freq);
    if (soundOn) {
      if (prevRotation !== null && Math.sign(prevRotation) !== Math.sign(currentRotation)) {
        playTick(tickBuffer);
      }
    }
    prevRotation = currentRotation;
    PENDULUM.setAttribute('transform', "rotate(".concat(currentRotation * 30, ", 1650, 1312)"));
    requestAnimationFrame(animate);
  }
  animate();
  function playTick(audioBuffer) {
    var source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
  ;
}

/**
 * Returns a sinusoidal value between -1 and 1.
 * @param {number} time - The current time in seconds.
 * @param {number} freq - The frequency in Hz (beats per second).
 * @returns {number} Sinusoidal value between -1 and 1.
 */
function getSinusoid(time) {
  var freq = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Math.sin(freq * time * 2 * Math.PI);
}

/***/ }),

/***/ "./src/modules/kioskScheduleHoverImg.js":
/*!**********************************************!*\
  !*** ./src/modules/kioskScheduleHoverImg.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kiosk_schedule_hover_img: () => (/* binding */ kiosk_schedule_hover_img)
/* harmony export */ });
// schedule hover img
//==================================================================
function kiosk_schedule_hover_img() {
  var is_touch_device = window.is_touch_device;
  var mod = jQuery('.schedules_wrap');
  var list;
  var url;
  var square;
  if (!mod.length || is_touch_device) {
    return;
  }
  list = mod.find('.schedules_list');
  square = mod.find('.square');

  // hide square on mouseleave
  mod.find('ol').on('mouseleave', function () {
    if (square.hasClass('show')) {
      square.removeClass('show');
    }
  });

  // show square on hover
  mod.find('li').on('mouseenter', function () {
    url = jQuery(this).attr('data-img');
    if (url !== '') {
      if (!square.hasClass('show')) {
        square.addClass('show');
      }
      square.css({
        'background-image': 'url(' + url + ')'
      });
    } else {
      if (square.hasClass('show')) {
        square.removeClass('show');
      }
      square.css({
        'background-image': 'none'
      });
    }
  });

  // cursor move
  var delta;
  delta = parseInt(jQuery('html').css('margin-top'));
  mod.on('mousemove', function (e) {
    square.css({
      left: e.pageX - list.offset().left,
      top: e.pageY - delta - list.offset().top
    });
  });
  jQuery('html').trigger('mousemove');
}

/***/ }),

/***/ "./src/modules/scrollersAndSort.js":
/*!*****************************************!*\
  !*** ./src/modules/scrollersAndSort.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kiosk_archive_sort: () => (/* binding */ kiosk_archive_sort),
/* harmony export */   kiosk_gallery_slick: () => (/* binding */ kiosk_gallery_slick),
/* harmony export */   kiosk_new_articles_mcsutomscrollbar: () => (/* binding */ kiosk_new_articles_mcsutomscrollbar),
/* harmony export */   kiosk_program_mcsutomscrollbar: () => (/* binding */ kiosk_program_mcsutomscrollbar),
/* harmony export */   kiosk_program_slick: () => (/* binding */ kiosk_program_slick)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// archive sort
//==================================================================
function kiosk_archive_sort() {
  var form = jQuery('.archive_sort_form');
  if (!form.length) {
    return;
  }
  form.find('.value').on('click', function () {
    form.trigger('submit');
  });
}

// kiosk_program_slick
//==================================================================
function kiosk_program_slick() {
  var mod = jQuery('.schedules_wrap');
  if (!mod.length) {
    return;
  }
  mod.find('.schedules_list').slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    slide: '.schedule_wrap',
    infinite: false,
    variableWidth: false,
    autoplay: false,
    autoplaySpeed: 3000,
    swipe: true,
    speed: 500
  }, "variableWidth", true), "appendArrows", mod.find('.main_title span')), "prevArrow", '<span class="arrow-prev"></span>'), "nextArrow", '<span class="arrow-next"></span>'));
}

// kiosk_program_mcsutomscrollbar
//==================================================================
function kiosk_program_mcsutomscrollbar() {
  var list = jQuery('.schedules_list');
  list.mCustomScrollbar({
    theme: "rounded-dark",
    axis: 'x',
    mouseWheel: false,
    scrollbarPosition: 'outside',
    contentTouchScroll: false,
    documentTouchScroll: false,
    advanced: {
      updateOnContentResize: true
    }
  });
  var oldX = null;
  var newX = null;
  var oldY = null;
  var newY = null;
  var contentX;
  list.on('touchstart', function (e) {
    oldX = null;
    newX = null;
    oldY = null;
    newY = null;
    contentX = list.find('.mCSB_container').offset().left * -1;
  });
  list.on('touchmove', function (e) {
    if (newX === null) {
      newX = e.originalEvent.touches[0].pageX;
      newY = e.originalEvent.touches[0].pageY;
    } else {
      oldX = newX;
      newX = e.originalEvent.touches[0].pageX;
      oldY = newY;
      newY = e.originalEvent.touches[0].pageY;
      if (Math.abs(oldY - newY) > 4) {
        return;
      }
      contentX += (oldX - newX) * 1.5;
      contentX = contentX < 0 ? 0 : contentX;
      list.mCustomScrollbar('scrollTo', contentX, {
        scrollInertia: 0
      });
    }
  });
}

// kiosk_new_articles_mcsutomscrollbar
//==================================================================
function kiosk_new_articles_mcsutomscrollbar() {
  var lists = jQuery('.articles_list');
  console.log(lists);
  lists.each(function () {
    var list = jQuery(this);
    list.mCustomScrollbar({
      theme: "dark-rounded",
      axis: 'x',
      mouseWheel: false,
      scrollbarPosition: 'outside',
      contentTouchScroll: false,
      documentTouchScroll: false,
      advanced: {
        updateOnContentResize: true
      }
    });
    var oldX = null;
    var newX = null;
    var oldY = null;
    var newY = null;
    var contentX;
    list.on('touchstart', function (e) {
      oldX = null;
      newX = null;
      oldY = null;
      newY = null;
      contentX = list.find('.mCSB_container').offset().left * -1;
    });
    list.on('touchmove', function (e) {
      if (newX === null) {
        newX = e.originalEvent.touches[0].pageX;
        newY = e.originalEvent.touches[0].pageY;
      } else {
        oldX = newX;
        newX = e.originalEvent.touches[0].pageX;
        oldY = newY;
        newY = e.originalEvent.touches[0].pageY;
        if (Math.abs(oldY - newY) > 4) {
          return;
        }
        contentX += (oldX - newX) * 1.5;
        contentX = contentX < 0 ? 0 : contentX;
        list.mCustomScrollbar('scrollTo', contentX, {
          scrollInertia: 0
        });
      }
    });
  });
}

// post gallery slick
//==================================================================
function kiosk_gallery_slick() {
  var mod = jQuery('.gallery_wrap, .archive_detail_gallery');
  if (!mod.length) {
    return;
  }
  mod.find('.items').slick({
    slide: '.img_wrap',
    infinite: true,
    variableWidth: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: false,
    speed: 500,
    appendArrows: mod.find('.arrs_wrap'),
    prevArrow: '<span class="arrow-prev"></span>',
    nextArrow: '<span class="arrow-next"></span>',
    responsive: [{
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}

/***/ }),

/***/ "./src/modules/vhMobileFix.js":
/*!************************************!*\
  !*** ./src/modules/vhMobileFix.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vh_mobile_fix: () => (/* binding */ vh_mobile_fix)
/* harmony export */ });
function vh_mobile_fix() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  window.addEventListener('resize', function () {
    if (!window.is_touch_device) {
      var _vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(_vh, "px"));
    }
  });
}

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"style.min": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkiosk_sk"] = self["webpackChunkkiosk_sk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style.min"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style.min"], () => (__webpack_require__("./style.less")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;