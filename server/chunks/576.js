"use strict";
exports.id = 576;
exports.ids = [576];
exports.modules = {

/***/ 7576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);


class Timer extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        };
    }
    tick() {
        this.setState((state)=>({
                seconds: state.seconds + 1
            }));
    }
    componentDidMount() {
        this.interval = setInterval(()=>this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: this.state.seconds
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);


/***/ })

};
;