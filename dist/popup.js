/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Alert/index.styles.ts":
/*!**********************************************!*\
  !*** ./src/Components/Alert/index.styles.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": function() { return /* binding */ Error; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Error = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div `
    color : ${props => props.theme.color.red};
    padding: 20px;
    margin: 15px;
    background: ${props => props.theme.color.bg[0]};
    box-shadow: ${props => props.theme.utils.boxShadow};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    border-radius: ${props => props.theme.utils.borderRadius};
    border: solid 2px ${props => props.theme.color.red};
    text-align: center;
    transform: translate(0px, 25vh);
    position: absolute;
    svg {
        transform: translate(2px, 2px);
    }
    p {
        margin: 10px 0px;
    }
`;



/***/ }),

/***/ "./src/Components/Alert/index.tsx":
/*!****************************************!*\
  !*** ./src/Components/Alert/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Alert/index.styles.ts");



const Alert = ({ title, describe }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiErrorWarningFill, null),
            " ",
            title),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, describe)));
};
/* harmony default export */ __webpack_exports__["default"] = (Alert);


/***/ }),

/***/ "./src/Components/Button/index.styles.ts":
/*!***********************************************!*\
  !*** ./src/Components/Button/index.styles.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styles/BreakPoints */ "./src/Styles/BreakPoints/index.ts");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button `
    @keyframes Rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    transition: 0.6s;
    background-image:linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    position: ${props => { var _a; return (_a = props.position) !== null && _a !== void 0 ? _a : 'relative'; }};
    color:${props => props.theme.color.icon};
    font-weight:bold;
    margin:${props => { var _a; return (_a = props.margin) !== null && _a !== void 0 ? _a : '0px'; }};
    border:none;
    width:45px;
    height:45px;
    font-size:26px;
    box-shadow:${props => props.theme.utils.boxShadow};
    border-radius:50%;
    cursor:pointer;
    overflow:hidden;

    .rotate {
        animation: Rotate 1s ease-in infinite;
    }

    :hover{
        border: 0.5px solid ${props => props.theme.color.icon};
        transition: 0.6s;
        background-image:linear-gradient(70deg, ${props => props.theme.color.bg[1]}, ${props => props.theme.color.bg[0]});
        transform: scale(1.3);
        color:${props => { var _a; return (_a = props.color) !== null && _a !== void 0 ? _a : props.theme.color.red; }};
    }

    @media(max-width:${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].width[0]}){
        width:42px;
        height:42px;
        font-size:25.5px;
    }
`;



/***/ }),

/***/ "./src/Components/Button/index.tsx":
/*!*****************************************!*\
  !*** ./src/Components/Button/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Button/index.styles.ts");


const Button = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__.Container, Object.assign({}, props)));
};
/* harmony default export */ __webpack_exports__["default"] = (Button);


/***/ }),

/***/ "./src/Components/Card/Tools/index.styles.ts":
/*!***************************************************!*\
  !*** ./src/Components/Card/Tools/index.styles.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div ` 
    padding:15px;
    margin:10px;
    display:flex;
    justify-content:space-evenly;
    transform:translate(0, -20px);
    background-image:linear-gradient(${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    border-radius:0px 0px 8px 8px;
    box-shadow:${props => props.theme.utils.boxShadow}
`;
/* harmony default export */ __webpack_exports__["default"] = (Container);


/***/ }),

/***/ "./src/Components/Card/Tools/index.tsx":
/*!*********************************************!*\
  !*** ./src/Components/Card/Tools/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Hooks_useWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Hooks/useWindow */ "./src/Hooks/useWindow/index.tsx");
/* harmony import */ var _Tools_Server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Tools/Server */ "./src/Tools/Server/index.ts");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Link */ "./src/Components/Link/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Card/Tools/index.styles.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const Tools = ({ href, download, id }) => {
    const { WindowConfig } = (0,_Hooks_useWindow__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], { href: `#${href}`, target: '_self', title: 'Open Image in new window', onClick: () => window.open(href, 'open image', WindowConfig) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillEyeFill, null)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], { href: href, target: '_blank', download: download, title: 'download Image' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaDownload, null)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], { href: `#Deleted:${id}`, title: 'Delete', onClick: () => __awaiter(void 0, void 0, void 0, function* () { return yield _Tools_Server__WEBPACK_IMPORTED_MODULE_2__.db.Images["delete"](id); }) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTrash, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Tools);


/***/ }),

/***/ "./src/Components/Card/index.styles.ts":
/*!*********************************************!*\
  !*** ./src/Components/Card/index.styles.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "ImageStyle": function() { return /* binding */ ImageStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const ImageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img `
    width:100%;
    height:100%;
    transform-origin: 'center center';
    object-fit:cover;
`;
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div `
    width:50vh;
    height:70vh;
    margin:10px;
    overflow:hidden;
    border-radius:8px 8px 0px 0px;
    box-shadow:${props => props.theme.utils.boxShadow};
    cursor: zoom-in;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div `
  @keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
   animation: show 1s ease-in;
   display: grid;
`;



/***/ }),

/***/ "./src/Components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/Components/Card/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_useFakeJquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useFakeJquery */ "./src/Hooks/useFakeJquery/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Card/index.styles.ts");
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tools */ "./src/Components/Card/Tools/index.tsx");




const Card = ({ alt, src, id }) => {
    const ImageRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [Scale, setScale] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1.50);
    const { $ } = (0,_Hooks_useFakeJquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const style = {
        img(e, scale) {
            const img = ImageRef.current;
            const Carousel = $('#carousel');
            const x = Carousel.scrollLeft + e.pageX - e.currentTarget.offsetLeft;
            const y = e.pageY - e.currentTarget.offsetTop;
            setScale(scale !== null && scale !== void 0 ? scale : Scale);
            if (img) {
                img.style.transformOrigin = `${x}px ${y}px`;
                img.style.transform = `scale(${scale !== null && scale !== void 0 ? scale : Scale})`;
            }
        },
        box: {
            enter() {
                const img = ImageRef.current;
                if (img) {
                    img.style.transition = '0s';
                }
            },
            leave() {
                const img = ImageRef.current;
                setScale(1.50);
                if (img) {
                    img.style.transition = '1s ease-in';
                    img.style.transform = `scale(1)`;
                    img.style.transformOrigin = 'center center';
                }
            }
        }
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        document.onselectstart = (e) => e.preventDefault();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.Box, { onMouseEnter: () => style.box.enter(), onMouseLeave: () => style.box.leave(), onContextMenu: (e) => e.preventDefault(), onDragStart: (e) => e.preventDefault() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.ImageStyle, { ref: ImageRef, loading: 'lazy', src: src, alt: alt, onContextMenu: (e) => style.img(e, Scale > 1 ? Scale - 0.25 : Scale), onMouseMove: (e) => style.img(e), onClick: (e) => style.img(e, Scale + 0.25) })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tools__WEBPACK_IMPORTED_MODULE_3__["default"], { href: src, download: src, id: id })));
};
/* harmony default export */ __webpack_exports__["default"] = (Card);


/***/ }),

/***/ "./src/Components/Carousel/index.styles.ts":
/*!*************************************************!*\
  !*** ./src/Components/Carousel/index.styles.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div `
    display:flex;
    justify-content:center;
    ::-webkit-scrollbar { //chrome
        display:none;
    }
    scrollbar-width:none;
    overflow-x:auto;
    scroll-behavior:smooth !important;
`;



/***/ }),

/***/ "./src/Components/Carousel/index.tsx":
/*!*******************************************!*\
  !*** ./src/Components/Carousel/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Contexts/LiveStorageContext/useLiveStorageCTX */ "./src/Contexts/LiveStorageContext/useLiveStorageCTX/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Carousel/index.styles.ts");



const Carousel = ({ children }) => {
    const { left, right, CarouselRef } = (0,_Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const key = (e) => {
        e.key === 'ArrowLeft' && left();
        e.key === 'ArrowRight' && right();
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        window.onkeydown = (e) => key(e);
        window.onwheel = (e) => e.deltaY > 0 ? right() : left();
    }, [left, right]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.Container, { id: 'carousel', ref: CarouselRef }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Carousel);


/***/ }),

/***/ "./src/Components/Form/index.styles.ts":
/*!*********************************************!*\
  !*** ./src/Components/Form/index.styles.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Style": function() { return /* binding */ Style; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styles/BreakPoints */ "./src/Styles/BreakPoints/index.ts");


const Style = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form `
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    padding: 15px;
    min-width: 50%;
    min-height: 50%;
    max-width: 60%;
    max-height: 60%;
    transform: translate(40vh, 40vh);
    text-align: center;
    color: ${props => props.theme.color.icon};

    @media(max-width: ${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].width[0]}){
        transform: translate(21vh, 30vh);
    }

    p{
        font-size: 0.7rem;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 75px;
        max-height: 75px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    input {
        color: ${props => props.theme.color.icon};
        padding: 8px;
        margin: 10px 15%;
        border-radius: ${props => props.theme.utils.borderRadius};
        outline-color: ${props => props.theme.color.cyan};
        background: ${props => props.theme.color.bg[0]};
    }
    button {
        transition: 0.7s ease;
        padding: 15px;
        font-weight: bold;
        font-family: sans-serif;
        box-shadow: ${props => props.theme.utils.boxShadow};
        border-radius: ${props => props.theme.utils.borderRadius};
        border: solid 2px ${props => props.theme.color.icon};
        cursor: pointer;
        svg {
            font-size: 24px;
            margin: -7px 5px;
        }

        &:hover {
            transition: 0.7s ease;
            transform: scale(1.2);
        }
    }

    button.Login {
        color: ${props => props.theme.color.icon};
        background: ${props => props.theme.color.bg[0]};
        margin: 10px 15%;
    }

    button.Google {
        color: ${props => props.theme.color.icon};
        background: linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
        
        margin: 10px 15%;

        &:hover {
            transition: 0.7s ease;
            color: ${props => props.theme.color.red};
            border: solid 2px ${props => props.theme.color.red};
        }
    }

    button.Git {
        color: ${props => props.theme.color.icon};
        background: ${props => props.theme.color.bg[0]};
        margin: 10px 15%;
    }

    button.Instagram {
        color: ${props => props.theme.color.icon};
        background-image: linear-gradient(70deg, ${props => props.theme.color.red}, ${props => props.theme.color.purple});
        margin: 10px 15%;
    }

    button.Recovery {
        color: ${props => props.theme.color.icon};
        background: ${props => props.theme.color.bg[0]};
        margin: 10px;
    }

    button.SignUp {
        color: ${props => props.theme.color.icon};
        background: ${props => props.theme.color.bg[0]};
        margin: 10px;
    }
`;



/***/ }),

/***/ "./src/Components/Form/index.tsx":
/*!***************************************!*\
  !*** ./src/Components/Form/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Form/index.styles.ts");


const Form = ({ children, onSubmit }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__.Style, { onSubmit: onSubmit }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Form);


/***/ }),

/***/ "./src/Components/Layout/Flex/index.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Layout/Flex/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const Style = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    display: flex;
    justify-content: ${props => { var _a; return (_a = props.justContent) !== null && _a !== void 0 ? _a : 'start'; }};
    height: ${props => { var _a; return (_a = props.height) !== null && _a !== void 0 ? _a : 'auto'; }};
    margin: ${props => { var _a; return (_a = props.margin) !== null && _a !== void 0 ? _a : '0px'; }};
    flex-direction: ${props => { var _a; return (_a = props.direction) !== null && _a !== void 0 ? _a : 'row'; }};
    button{
        margin: 10px;
    }
`;
const Flex = (props) => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, Object.assign({}, props));
};
/* harmony default export */ __webpack_exports__["default"] = (Flex);


/***/ }),

/***/ "./src/Components/Layout/Grid/index.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Layout/Grid/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const Style = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    display: grid;
    grid-template-columns: ${props => { var _a; return (_a = props.columns) !== null && _a !== void 0 ? _a : '1fr'; }};
    grid-template-rows: ${props => { var _a; return (_a = props.rows) !== null && _a !== void 0 ? _a : '1fr'; }};
`;
const Grid = (props) => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, Object.assign({}, props));
};
/* harmony default export */ __webpack_exports__["default"] = (Grid);


/***/ }),

/***/ "./src/Components/Link/index.styles.ts":
/*!*********************************************!*\
  !*** ./src/Components/Link/index.styles.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a `
    transition: 1s;
    text-decoration: none;
    cursor: pointer;
    color:${props => props.theme.color.icon};

    :hover{
        transition: 0.6s;
        color:${props => props.theme.color.red};
        transform: scale(2);
    }
`;



/***/ }),

/***/ "./src/Components/Link/index.tsx":
/*!***************************************!*\
  !*** ./src/Components/Link/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Link/index.styles.ts");


const Link = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__.Container, Object.assign({}, props)));
};
/* harmony default export */ __webpack_exports__["default"] = (Link);


/***/ }),

/***/ "./src/Components/Load/index.styles.ts":
/*!*********************************************!*\
  !*** ./src/Components/Load/index.styles.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styles/BreakPoints */ "./src/Styles/BreakPoints/index.ts");


const Loading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    @keyframes Rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    transform: translate(40vh, 30vh);
    position: absolute;
    img {
        animation: Rotate 1s ease-in infinite;
    }
    h2 {
        margin: 20px 0px 0px 10px;
        color: ${props => props.theme.color.icon};
    }

    @media (min-width:${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].width[1]}) {
        transform: translate(90vh, 30vh);
    }
`;



/***/ }),

/***/ "./src/Components/Load/index.tsx":
/*!***************************************!*\
  !*** ./src/Components/Load/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_useHowLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useHowLogo */ "./src/Hooks/useHowLogo/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Load/index.styles.ts");



const Load = () => {
    const HowLogo = (0,_Hooks_useHowLogo__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.Loading, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: HowLogo() }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Loading...")));
};
/* harmony default export */ __webpack_exports__["default"] = (Load);


/***/ }),

/***/ "./src/Components/Modal/TitleModal/index.styles.ts":
/*!*********************************************************!*\
  !*** ./src/Components/Modal/TitleModal/index.styles.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Title": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styles/BreakPoints */ "./src/Styles/BreakPoints/index.ts");


const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1 `
    color:${props => props.theme.color.icon};
    margin: 10px 10px 0px 10px;

    @media(min-height : ${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].height[0]}){
        transform: translate(0vh, 0vh);
        button {
            width:60px;
            height:60px;
            font-size:30px;
       }
    }
`;



/***/ }),

/***/ "./src/Components/Modal/TitleModal/index.tsx":
/*!***************************************************!*\
  !*** ./src/Components/Modal/TitleModal/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button */ "./src/Components/Button/index.tsx");
/* harmony import */ var _Layout_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Layout/Flex */ "./src/Components/Layout/Flex/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Modal/TitleModal/index.styles.ts");






const TitleModal = ({ children, onClose, }) => {
    const { color } = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], { margin: '5px', justContent: 'center' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_3__.Title, null, children),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { title: 'Close donate', onClick: onClose, color: color.red },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (TitleModal);


/***/ }),

/***/ "./src/Components/Modal/index.styles.ts":
/*!**********************************************!*\
  !*** ./src/Components/Modal/index.styles.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackGround": function() { return /* binding */ BackGround; },
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styles/BreakPoints/index */ "./src/Styles/BreakPoints/index.ts");


const BackGround = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    width: 100%;
    height: 120vh;
    position: fixed;
    z-index: 9999;
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    opacity: 0.8;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    @keyframes FadeIn {
        from {
           transform: translate(13vh, 100vh);
        }
        to {
            transform: translate(13vh, 0vh);
        }
    }
    animation: FadeIn 0.5s ease-out;
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    position:fixed;
    width:80vh;
    height:100vh;
    transform: translate(13vh, 0vh);
    box-shadow:${props => props.theme.utils.boxShadow};
    border-radius:${props => props.theme.utils.borderRadius};
    z-index: 99999;

    @media(min-width: ${_Styles_BreakPoints_index__WEBPACK_IMPORTED_MODULE_0__["default"].width[1]}) {
        @keyframes FadeIn {
            from {
                transform: translate(65vh, 100vh);
            }
            to {
                transform: translate(65vh, 0vh);
            }
        }
       animation: FadeIn 0.5s ease-out;
       transform: translate(65vh, 0vh);
       width:80vh;
       height:100vh;
    }

    @media(min-height: ${_Styles_BreakPoints_index__WEBPACK_IMPORTED_MODULE_0__["default"].height[0]}) {
        @keyframes FadeIn {
            from {
                transform: translate(35vh, 100vh);
            }
            to {
                transform: translate(35vh, 5vh);
            }
        }
       animation: FadeIn 0.5s ease-out;
       transform: translate(35vh, 5vh);
    }
`;



/***/ }),

/***/ "./src/Components/Modal/index.tsx":
/*!****************************************!*\
  !*** ./src/Components/Modal/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Contexts/PortalContext/usePortalCTX */ "./src/Contexts/PortalContext/usePortalCTX/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Modal/index.styles.ts");




const Modal = (props) => {
    const { closeAll } = (0,_Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_2__["default"])();
    return react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_3__.BackGround, { onClick: () => closeAll() }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_3__.Container, Object.assign({}, props))), document.getElementById('portal'));
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),

/***/ "./src/Components/Nav/Footer/ProfileModal/Avatar/index.styles.ts":
/*!***********************************************************************!*\
  !*** ./src/Components/Nav/Footer/ProfileModal/Avatar/index.styles.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultImage": function() { return /* binding */ DefaultImage; },
/* harmony export */   "Image": function() { return /* binding */ Image; },
/* harmony export */   "Welcome": function() { return /* binding */ Welcome; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img `
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border: solid 2px ${props => props.theme.color.icon};
    position: absolute;
    z-index: 2;
`;
const Welcome = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3 `
    transform: translate(30px, -9px);
    background-image: linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    box-shadow: ${props => props.theme.utils.boxShadow};
    border: solid 2px ${props => props.theme.color.icon};
    text-align: center;
    margin: 25px 35px;
    padding: 10px 25px;
    border-radius: ${props => props.theme.utils.borderRadius};
    position: absolute;
    text-transform: capitalize;
    z-index: 1;
`;
const DefaultImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span `
        div.Image {
            font-size: 40px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-image: linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
            box-shadow: ${props => props.theme.utils.boxShadow};
            border: solid 2px ${props => props.theme.color.icon};
            position: absolute;
            z-index: 2;
            div {
               text-transform: capitalize;
               transform: translate(25%, 15%);
            }
        }
`;



/***/ }),

/***/ "./src/Components/Nav/Footer/ProfileModal/Avatar/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/Components/Nav/Footer/ProfileModal/Avatar/index.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Layout_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Layout/Flex */ "./src/Components/Layout/Flex/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Nav/Footer/ProfileModal/Avatar/index.styles.ts");




const Avatar = ({ avatar, name }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, avatar ?
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.Image, { src: avatar, alt: 'your picture' })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.Welcome, null,
                "Welcome ",
                name,
                " !"))
        :
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.DefaultImage, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Flex__WEBPACK_IMPORTED_MODULE_1__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'Image' },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUser, null))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.Welcome, null,
                        "Welcome ",
                        name,
                        " !")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Avatar);


/***/ }),

/***/ "./src/Components/Nav/Footer/ProfileModal/Card/index.styles.ts":
/*!*********************************************************************!*\
  !*** ./src/Components/Nav/Footer/ProfileModal/Card/index.styles.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Info": function() { return /* binding */ Info; },
/* harmony export */   "Shield": function() { return /* binding */ Shield; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Styles/BreakPoints */ "./src/Styles/BreakPoints/index.ts");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    @keyframes Show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: Show 0.6s ease-in;
    color: ${props => props.theme.color.icon};
    display: grid;
    grid-template-rows: 1.5fr 1fr;
    padding: 20px;
    margin: 30px;
    background: ${props => props.theme.color.bg[0]};
    box-shadow: ${props => props.theme.utils.boxShadow};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    border-radius: ${props => props.theme.utils.borderRadius};
    @media(max-width : ${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].width[0]}) {
        margin: 10px 40px;
    }
    h2 {
        text-align: center;
    }
`;
const Shield = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img `
    width: 35px;
    height: 35px;
    transform: translate(5px, 11px);
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
   margin: 80px 0px;
   h3 {
     margin: 10px;
   }
`;



/***/ }),

/***/ "./src/Components/Nav/Footer/ProfileModal/Card/index.tsx":
/*!***************************************************************!*\
  !*** ./src/Components/Nav/Footer/ProfileModal/Card/index.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _Hooks_useHowLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Hooks/useHowLogo */ "./src/Hooks/useHowLogo/index.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Button */ "./src/Components/Button/index.tsx");
/* harmony import */ var _Layout_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Layout/Flex */ "./src/Components/Layout/Flex/index.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Avatar */ "./src/Components/Nav/Footer/ProfileModal/Avatar/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Nav/Footer/ProfileModal/Card/index.styles.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const Card = ({ ID, icon, title, email, signature, avatar, name }) => {
    const HowLogo = (0,_Hooks_useHowLogo__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_5__.Container, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null,
            icon,
            " ",
            title),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], { avatar: avatar, name: name }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_5__.Info, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null,
                "Signature : \u00A0 ",
                signature,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_5__.Shield, { src: HowLogo(), alt: HowLogo() })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null,
                "Email : \u00A0 ",
                email)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], { justContent: 'end' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                    yield chrome.storage.local.remove(['token']);
                    chrome.runtime.reload();
                }) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdLogout, null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Card);


/***/ }),

/***/ "./src/Components/Nav/Footer/ProfileModal/index.tsx":
/*!**********************************************************!*\
  !*** ./src/Components/Nav/Footer/ProfileModal/index.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Modal */ "./src/Components/Modal/index.tsx");
/* harmony import */ var _Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Contexts/PortalContext/usePortalCTX */ "./src/Contexts/PortalContext/usePortalCTX/index.tsx");
/* harmony import */ var _Modal_TitleModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Modal/TitleModal */ "./src/Components/Modal/TitleModal/index.tsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Contexts_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Contexts/AuthContext/useAuthCTX */ "./src/Contexts/AuthContext/useAuthCTX/index.tsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card */ "./src/Components/Nav/Footer/ProfileModal/Card/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Tools_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Tools/Api */ "./src/Tools/Api/index.ts");
/* harmony import */ var _Hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Hooks/useWindow */ "./src/Hooks/useWindow/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const PatreonLogIn = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button `
    transition: 0.7s ease;
    padding: 15px;
    font-weight: bold;
    font-family: sans-serif;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    border: solid 2px ${props => props.theme.color.icon};
    cursor: pointer;
    color: ${props => props.theme.color.icon};
    background: linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    svg {
        font-size: 24px;
        margin: -7px 5px;
    }

    &:hover {
        transition: 0.7s ease;
        transform: scale(1.2);
        color: ${props => props.theme.color.purple};
        border: solid 2px ${props => props.theme.color.purple};
    }
`;
const SelectProfile = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div `
    display: flex;
    justify-content: center;
    button {
        color : ${props => props.theme.color.icon};
        padding: 8px;
        border-radius: ${props => props.theme.utils.borderRadius};
        background: ${props => props.theme.color.bg[0]};
        border: solid 2px;
        margin: 5px;
        font-size: 20px;
        cursor: pointer;

        svg {
            transform: translate(0px, 2px);
        }

        &:hover {
            transition: 0.5s;
            opacity: 0.5;
        }
    }
    button.selected {
        color: ${props => props.theme.color.red};
    }
`;
const ProfileModal = () => {
    const { member } = (0,_Contexts_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const { isOpen, setIsOpen } = (0,_Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const { WindowConfig } = (0,_Hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__["default"])();
    const [profile, setProfile] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        google: true,
        patreon: false
    });
    const PatreonAuth = () => {
        chrome.storage.local.get(null, ({ token }) => __awaiter(void 0, void 0, void 0, function* () {
            const { data } = yield (0,_Tools_Api__WEBPACK_IMPORTED_MODULE_6__["default"])(token).get('/oauth/patreon');
            const href = data.PatreonOauth.Href;
            window.open(href, 'Oauth', WindowConfig);
        }));
    };
    if (member) {
        const { avatar, email, name, patreon, signature, Google_id } = member;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_TitleModal__WEBPACK_IMPORTED_MODULE_3__["default"], { onClose: () => setIsOpen(Object.assign(Object.assign({}, isOpen), { profile: false })) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaUser, null),
                " Your Profiles"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectProfile, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: profile.google ? 'selected' : '', onClick: () => setProfile(Object.assign(Object.assign({}, profile), { google: true, patreon: false })) },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaGoogle, null)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: profile.patreon ? 'selected' : '', onClick: () => setProfile(Object.assign(Object.assign({}, profile), { patreon: true, google: false })) },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaPatreon, null))),
            profile.google &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaGoogle, { style: { transform: 'translate(4px, 2px)' } }), title: 'oogle', avatar: avatar, name: name, email: email, signature: signature }),
            !!patreon ?
                !!profile.patreon &&
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaPatreon, null), title: 'Patreon', avatar: patreon.image_url, name: patreon.first_name, email: patreon.email, signature: signature })
                :
                    !!profile.patreon &&
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { textAlign: 'center', marginTop: '30%' } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(PatreonLogIn, { onClick: PatreonAuth },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaPatreon, null),
                                " Register Patreon"))));
    }
    else {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (ProfileModal);


/***/ }),

/***/ "./src/Components/Nav/Footer/ShopModal/index.styles.ts":
/*!*************************************************************!*\
  !*** ./src/Components/Nav/Footer/ShopModal/index.styles.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; },
/* harmony export */   "Label": function() { return /* binding */ Label; },
/* harmony export */   "Sign": function() { return /* binding */ Sign; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Styles/BreakPoints */ "./src/Styles/BreakPoints/index.ts");


const Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    display: grid;
    grid-template-columns: 0.5fr auto;
    padding: 20px;
    margin: 30px 20px;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    font-size: 0.8rem;
    @media(max-width : ${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].width[0]}) {
        margin: 15px 20px;
    }
    img {
        width: 100px;
        height: 100px;
        background-position: 0%;
    }
`;
const Sign = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a ` 
    transition: 0.5s ease;
    background: ${props => props.bg};
    margin: 20px 20px;
    text-align: center;
    padding: 8px;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    cursor: pointer;
    :hover {
        transition: 0.5s ease;
        transform: scale(1.1);
    }
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span `
    position: ${props => { var _a; return (_a = props.position) !== null && _a !== void 0 ? _a : 'absolute'; }};  
    background: ${props => { var _a; return (_a = props.bg) !== null && _a !== void 0 ? _a : props.theme.color.red; }};
    padding: 4px;
    font-size: 1rem;
    margin: ${props => { var _a; return (_a = props.margin) !== null && _a !== void 0 ? _a : '0px'; }};
    transform: rotate(${props => { var _a; return (_a = props.deg) !== null && _a !== void 0 ? _a : '-40deg'; }}) translate(${props => { var _a; return (_a = props.trans) !== null && _a !== void 0 ? _a : '-15px'; }});
    width: ${props => { var _a; return (_a = props.width) !== null && _a !== void 0 ? _a : '65px'; }};
    text-align: center;
    z-index: 10;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};

    @media(min-width: ${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].width[1]}) {
        transform: rotate(-40deg) translate(5px, 18px);
    }
`;



/***/ }),

/***/ "./src/Components/Nav/Footer/ShopModal/index.tsx":
/*!*******************************************************!*\
  !*** ./src/Components/Nav/Footer/ShopModal/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Modal */ "./src/Components/Modal/index.tsx");
/* harmony import */ var _Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Contexts/PortalContext/usePortalCTX */ "./src/Contexts/PortalContext/usePortalCTX/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Modal_TitleModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Modal/TitleModal */ "./src/Components/Modal/TitleModal/index.tsx");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Nav/Footer/ShopModal/index.styles.ts");
/* harmony import */ var _Hooks_useWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Hooks/useWindow */ "./src/Hooks/useWindow/index.tsx");








const ShopModal = () => {
    const { isOpen, setIsOpen } = (0,_Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const { color } = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const { WindowConfig } = (0,_Hooks_useWindow__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const openWindow = (href, title) => {
        window.open(!!href ? href : 'https://www.patreon.com/user?u=77769234&fan_landing=true', title, WindowConfig);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_TitleModal__WEBPACK_IMPORTED_MODULE_3__["default"], { onClose: () => setIsOpen(Object.assign(Object.assign({}, isOpen), { shop: false })) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoMdCart, { size: '24px' }),
            " Shopping"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Card, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: 'logo-gold.png', alt: 'logo-gold' })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Sign, { bg: color.yellow, onClick: () => openWindow('https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359', 'Become a Member') },
                "Golden Member ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                "Limit of 400 images per domain",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Label, null, "$ 7.99"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Card, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: 'logo-verde.png', alt: 'logo-platinum' })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Sign, { bg: color.green, onClick: () => openWindow('https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359', 'Become a Member') },
                "Platinum Member ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                "Limit of 700 images per domain",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Label, null, "$ 9.99"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Card, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: 'logo-diamond.png', alt: 'logo-diamound', className: 'Diamound' })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Sign, { bg: color.cyan, onClick: () => openWindow('https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359', 'Become a Member') },
                "Diamond Member ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                "Unlimited images per domain",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_4__.Label, null, "$ 14.99")))));
};
/* harmony default export */ __webpack_exports__["default"] = (ShopModal);


/***/ }),

/***/ "./src/Components/Nav/Footer/ToolModal/CountImages/index.styles.ts":
/*!*************************************************************************!*\
  !*** ./src/Components/Nav/Footer/ToolModal/CountImages/index.styles.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountImagesStyle": function() { return /* binding */ CountImagesStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const CountImagesStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2 `
    margin: 15px 10px;
    color: ${props => props.theme.color.icon};
    span{
       background: ${props => props.theme.color.bg[1]};
       border-radius: ${props => props.theme.utils.borderRadius};
       padding: 5px;
       text-align:center;
       svg {
         margin: 0px 5px 0px 0px;
         transform: translateY(4px);
       }
    }
`;



/***/ }),

/***/ "./src/Components/Nav/Footer/ToolModal/CountImages/index.tsx":
/*!*******************************************************************!*\
  !*** ./src/Components/Nav/Footer/ToolModal/CountImages/index.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Nav/Footer/ToolModal/CountImages/index.styles.ts");



const CountImages = ({ Storage }) => {
    const Info = {
        zipSize() {
            //const StorageSizeKB = Storage.length * 350
        },
        countImages() {
            const decimal = `${Storage.length}`.length;
            const house = Storage.length.toString().split('');
            if (decimal < 4) {
                return Storage.length;
            }
            if (decimal === 4) {
                return `${house[0]}.${house[1]}K`;
            }
            if (decimal === 5) {
                return `${house[0] + house[1]}.${house[2]}K`;
            }
            if (decimal === 6) {
                return `${house[0] + house[1] + house[2]}.${house[3]}K`;
            }
            else {
                return '♾️';
            }
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__.CountImagesStyle, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaImages, null),
            Info.countImages())));
};
/* harmony default export */ __webpack_exports__["default"] = (CountImages);


/***/ }),

/***/ "./src/Components/Nav/Footer/ToolModal/Input/index.tsx":
/*!*************************************************************!*\
  !*** ./src/Components/Nav/Footer/ToolModal/Input/index.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const InputRange = (props) => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({ type: "range" }, props));
};
/* harmony default export */ __webpack_exports__["default"] = (InputRange);


/***/ }),

/***/ "./src/Components/Nav/Footer/ToolModal/index.styles.ts":
/*!*************************************************************!*\
  !*** ./src/Components/Nav/Footer/ToolModal/index.styles.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; },
/* harmony export */   "ExtensionContainer": function() { return /* binding */ ExtensionContainer; },
/* harmony export */   "Header": function() { return /* binding */ Header; },
/* harmony export */   "Subtitle": function() { return /* binding */ Subtitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Styles/BreakPoints */ "./src/Styles/BreakPoints/index.ts");


const Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    margin: 0px 30px 5px;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    padding: 20px;
    height: 170px;
    select{
        margin: 10px 10px 5px 10px;
    }

    @media(min-height: ${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].height[0]}) {
        margin: 30px 30px;
    }
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    display: grid;
    margin: 5px 30px;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    padding: 20px;

    @media(min-height: ${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].height[0]}) {
        margin: 30px 30px;
    }
`;
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2 `
    text-align: center;
    margin-bottom: 10px;
    color: ${props => props.theme.color.icon};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    svg{
        transform: translateY(2px);
    }
`;
const ExtensionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    margin: 16px 10px;
    select{
        transition: 0.5s ease;
        cursor: pointer;
        padding: 5px;
        border-radius: ${props => props.theme.utils.borderRadius};
        background: ${props => props.theme.color.bg[1]};
        color: ${props => props.theme.color.icon};
        border: solid 1px;

        :hover{
            transition: 0.5s ease;
            transform: scale(1.2);
        }
        :focus{
            transition: 0.5s ease;
            transform: scale(1.2);
        }
    }
`;



/***/ }),

/***/ "./src/Components/Nav/Footer/ToolModal/index.tsx":
/*!*******************************************************!*\
  !*** ./src/Components/Nav/Footer/ToolModal/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Contexts/PortalContext/usePortalCTX */ "./src/Contexts/PortalContext/usePortalCTX/index.tsx");
/* harmony import */ var _Hooks_useJSZIP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Hooks/useJSZIP */ "./src/Hooks/useJSZIP/index.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Modal */ "./src/Components/Modal/index.tsx");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Search */ "./src/Components/Search/index.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Button */ "./src/Components/Button/index.tsx");
/* harmony import */ var _Modal_TitleModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Modal/TitleModal */ "./src/Components/Modal/TitleModal/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Nav/Footer/ToolModal/index.styles.ts");
/* harmony import */ var _Layout_Flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Layout/Flex */ "./src/Components/Layout/Flex/index.tsx");
/* harmony import */ var _Layout_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Layout/Grid */ "./src/Components/Layout/Grid/index.tsx");
/* harmony import */ var _CountImages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CountImages */ "./src/Components/Nav/Footer/ToolModal/CountImages/index.tsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Input */ "./src/Components/Nav/Footer/ToolModal/Input/index.tsx");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var _Hooks_useFakeJquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Hooks/useFakeJquery */ "./src/Hooks/useFakeJquery/index.tsx");
/* harmony import */ var _Tools_Server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../Tools/Server */ "./src/Tools/Server/index.ts");
/* harmony import */ var _Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../Contexts/LiveStorageContext/useLiveStorageCTX */ "./src/Contexts/LiveStorageContext/useLiveStorageCTX/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















const ToolModal = () => {
    const { IsFallBack, setCurrentFilters, Images } = (0,_Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_14__["default"])();
    const { setIsOpen, isOpen } = (0,_Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const { color } = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__.useTheme)();
    const { $ } = (0,_Hooks_useFakeJquery__WEBPACK_IMPORTED_MODULE_12__["default"])();
    const { isFallback, Download, setExtesion } = (0,_Hooks_useJSZIP__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const [zipStorage, setZipStorage] = react__WEBPACK_IMPORTED_MODULE_0__.useState(Images);
    const [deleteStorage, setDeleteStorage] = react__WEBPACK_IMPORTED_MODULE_0__.useState(Images);
    const CalcRange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value) => {
        const items = Math.ceil(parseInt(value) / 100 * Images.length);
        const Storage = Images.slice(0, items > 0 ? items : 1);
        return Storage;
    }, [Images]);
    const RangeZip = (value) => {
        const Storage = CalcRange(value);
        setZipStorage(Storage);
    };
    const RangeDelete = (value) => {
        const Storage = CalcRange(value);
        setDeleteStorage(Storage);
    };
    const ClickDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!deleteStorage.length)
            return;
        const input = $('#InputRangeDelete');
        const This = $('#Btn-Delete');
        const deleteIds = deleteStorage.map(({ id }) => id);
        yield _Tools_Server__WEBPACK_IMPORTED_MODULE_13__.db.Images.bulkDelete(deleteIds);
        if (input.value === '100') {
            setCurrentFilters([]);
            localStorage.removeItem('CurrentFilters');
        }
        input.value = '100';
        !IsFallBack.Delete ?
            This.setAttribute('disabled', 'true')
            :
                This.removeAttribute('disabled');
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        RangeZip('100');
        RangeDelete('100');
    }, [Images]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_TitleModal__WEBPACK_IMPORTED_MODULE_6__["default"], { onClose: () => setIsOpen(Object.assign(Object.assign({}, isOpen), { tools: false })) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__.FaTools, null),
                " Tools"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_7__.Header, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_7__.Subtitle, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__.FaSearch, null),
                    " Search by"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], { columns: '1fr' },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Search__WEBPACK_IMPORTED_MODULE_4__["default"], { origin: true }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_7__.Card, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_7__.Subtitle, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_17__.RiFolderZipFill, null),
                    " Download Zip"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_11__["default"], { onChange: (e) => RangeZip(e.target.value), defaultValue: '100' }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Flex__WEBPACK_IMPORTED_MODULE_8__["default"], { justContent: 'center' },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], { id: 'Btn-Download', title: 'Download Images', color: color.cyan, onClick: () => {
                                const This = $('#Btn-Download');
                                Download(zipStorage);
                                isFallback ?
                                    This.setAttribute('disabled', 'true')
                                    :
                                        This.removeAttribute('disabled');
                            } }, isFallback ?
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_18__.ImSpinner10, { className: 'rotate' })
                            :
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_17__.RiFolderDownloadFill, null)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CountImages__WEBPACK_IMPORTED_MODULE_10__["default"], { Storage: zipStorage }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_7__.ExtensionContainer, null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { onChange: (e) => setExtesion(e.target.value) },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '' }, "Convert"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'jpg' }, "jpg"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'png' }, "png"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'webp' }, "webp")))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_7__.Card, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_7__.Subtitle, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_19__.MdHideImage, null),
                        " Delete Images"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_11__["default"], { id: 'InputRangeDelete', onChange: (e) => RangeDelete(e.target.value), defaultValue: '100' }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Flex__WEBPACK_IMPORTED_MODULE_8__["default"], { justContent: 'center' },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], { id: 'Btn-Delete', onClick: ClickDelete }, (IsFallBack === null || IsFallBack === void 0 ? void 0 : IsFallBack.Delete) ?
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_18__.ImSpinner10, { className: 'rotate' })
                            :
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_20__.IoMdTrash, null)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CountImages__WEBPACK_IMPORTED_MODULE_10__["default"], { Storage: deleteStorage })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ToolModal);


/***/ }),

/***/ "./src/Components/Nav/Footer/index.styles.ts":
/*!***************************************************!*\
  !*** ./src/Components/Nav/Footer/index.styles.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styles/BreakPoints */ "./src/Styles/BreakPoints/index.ts");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    position: fixed;
    width: 96%;
    height: 0px;
    transform: translate(0vh, -4vh);
    z-index: 7;

    @media(max-width:${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].width[0]}){
        transform: translate(0vh, -5vh);
    }
    @media(min-height:${_Styles_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].height[0]}){
        transform: translate(0vh, 0vh);
        button {
            width:60px;
            height:60px;
            font-size:30px;
       }
    }
`;



/***/ }),

/***/ "./src/Components/Nav/Footer/index.tsx":
/*!*********************************************!*\
  !*** ./src/Components/Nav/Footer/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Contexts/PortalContext/usePortalCTX */ "./src/Contexts/PortalContext/usePortalCTX/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Nav/Footer/index.styles.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button */ "./src/Components/Button/index.tsx");
/* harmony import */ var _Contexts_CustomThemeContext_useCustomThemeCTX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Contexts/CustomThemeContext/useCustomThemeCTX */ "./src/Contexts/CustomThemeContext/useCustomThemeCTX/index.tsx");
/* harmony import */ var _ToolModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToolModal */ "./src/Components/Nav/Footer/ToolModal/index.tsx");
/* harmony import */ var _Layout_Flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Layout/Flex */ "./src/Components/Layout/Flex/index.tsx");
/* harmony import */ var _ShopModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShopModal */ "./src/Components/Nav/Footer/ShopModal/index.tsx");
/* harmony import */ var _ProfileModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfileModal */ "./src/Components/Nav/Footer/ProfileModal/index.tsx");
/* harmony import */ var _Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Contexts/LiveStorageContext/useLiveStorageCTX */ "./src/Contexts/LiveStorageContext/useLiveStorageCTX/index.tsx");













const Footer = () => {
    const { right, left } = (0,_Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_9__["default"])();
    const { isOpen, setIsOpen } = (0,_Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const { color, title } = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
    const { ChangeTheme } = (0,_Contexts_CustomThemeContext_useCustomThemeCTX__WEBPACK_IMPORTED_MODULE_4__["default"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null,
        isOpen.shop &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ShopModal__WEBPACK_IMPORTED_MODULE_7__["default"], null),
        isOpen.tools &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToolModal__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        isOpen.profile &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProfileModal__WEBPACK_IMPORTED_MODULE_8__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Flex__WEBPACK_IMPORTED_MODULE_6__["default"], { justContent: 'center' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { title: 'Back', color: color.green, onClick: left },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaArrowLeft, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { title: 'Shop', onClick: () => setIsOpen(Object.assign(Object.assign({}, isOpen), { shop: true })), color: color.red },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_12__.IoMdCart, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { title: 'Tools', onClick: () => setIsOpen(Object.assign(Object.assign({}, isOpen), { tools: true })), color: color.green },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaTools, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { title: 'Profile', onClick: () => setIsOpen(Object.assign(Object.assign({}, isOpen), { profile: true })), color: color.green },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaUser, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { color: title === 'dark' ? color.yellow : color.purple, onClick: () => ChangeTheme() }, title === 'dark' ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaSun, null)
                :
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaMoon, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { title: 'Next', color: color.green, onClick: right },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaArrowRight, null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);


/***/ }),

/***/ "./src/Components/Search/index.styles.ts":
/*!***********************************************!*\
  !*** ./src/Components/Search/index.styles.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": function() { return /* binding */ Select; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select `
    transition: 0.5s ease;
    border-radius: ${props => props.theme.utils.borderRadius};
    box-shadow: ${props => props.theme.utils.boxShadow};
    background: ${props => props.theme.color.bg[1]};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    color: ${props => props.theme.color.icon};
    border: solid 1px;
    cursor: pointer;
    text-align: center;
    padding: 5px;
    :hover{
        transition: 0.5s ease;
        transform:scale(1.1);
    }
    :focus{
        transition: 0.5s ease;
        transform:scale(1.1);
    }
`;



/***/ }),

/***/ "./src/Components/Search/index.tsx":
/*!*****************************************!*\
  !*** ./src/Components/Search/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Contexts/LiveStorageContext/useLiveStorageCTX */ "./src/Contexts/LiveStorageContext/useLiveStorageCTX/index.tsx");
/* harmony import */ var _Layout_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Grid */ "./src/Components/Layout/Grid/index.tsx");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Search/index.styles.ts");




const Search = ({ origin, }) => {
    const { setCurrentFilters, setFilterOptions, FilterOptions, CurrentFilters } = (0,_Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const Search = ({ target: { value } }) => {
        if (value !== 'default') {
            setFilterOptions(current => !current.includes(value) ?
                [...current, value]
                :
                    current);
            setCurrentFilters(current => {
                const newCF = [...current, value];
                localStorage.setItem('CurrentFilters', JSON.stringify(newCF !== null && newCF !== void 0 ? newCF : []));
                return newCF;
            });
        }
    };
    const FilterRemover = ({ target: { value } }) => {
        if (value === 'clear') {
            setCurrentFilters([]);
            localStorage.removeItem('CurrentFilters');
            return;
        }
        if (value !== 'default') {
            setFilterOptions(current => !current.includes(value) ? [...current, value] : current);
            setCurrentFilters(current => {
                const newCF = current.filter(cf => cf !== value);
                localStorage.setItem('CurrentFilters', JSON.stringify(newCF !== null && newCF !== void 0 ? newCF : []));
                return newCF;
            });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], { columns: '1fr 1fr' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_3__.Select, { onChange: (e) => Search(e) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'default' },
                "Websites : ",
                FilterOptions.length - CurrentFilters.length),
            origin && FilterOptions
                .map((origin, index) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: origin, key: index }, origin));
            })
                .filter(opt => !CurrentFilters.includes(opt.props.value) && opt.props.value !== 'clear')),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_3__.Select, { onChange: (e) => FilterRemover(e) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'default' },
                "Current Filters : ",
                CurrentFilters.length),
            CurrentFilters.length &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'clear' }, "\u274C Remove all filters \u274C"),
            CurrentFilters.map(opt => react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: opt, key: opt },
                opt,
                " \u274C")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Search);


/***/ }),

/***/ "./src/Components/Title/index.styles.ts":
/*!**********************************************!*\
  !*** ./src/Components/Title/index.styles.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Image": function() { return /* binding */ Image; },
/* harmony export */   "Text": function() { return /* binding */ Text; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div `
    display: flex;
    justify-content: center;
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1 `
    padding: 10px;
    color:${props => props.theme.color.icon};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px 0px 0px 0px;
`;



/***/ }),

/***/ "./src/Components/Title/index.tsx":
/*!****************************************!*\
  !*** ./src/Components/Title/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.styles */ "./src/Components/Title/index.styles.ts");


const Title = ({ children, src }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null,
        src &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__.Image, { src: src }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_styles__WEBPACK_IMPORTED_MODULE_1__.Text, null, children)));
};
/* harmony default export */ __webpack_exports__["default"] = (Title);


/***/ }),

/***/ "./src/Contexts/AuthContext/index.tsx":
/*!********************************************!*\
  !*** ./src/Contexts/AuthContext/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": function() { return /* binding */ AuthContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tools_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tools/Api */ "./src/Tools/Api/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const AuthContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
const AuthProvider = ({ children }) => {
    const [member, setMember] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const isAuth = !!(member === null || member === void 0 ? void 0 : member.Google_id);
    const Auth = () => {
        chrome.storage.sync.get(null, ({ token }) => __awaiter(void 0, void 0, void 0, function* () {
            if (!!token) {
                const res = yield (0,_Tools_Api__WEBPACK_IMPORTED_MODULE_1__["default"])(token).post('/member/jwt')
                    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
                    console.error(e);
                    yield chrome.storage.sync.remove(['token'])
                        .catch((err) => {
                        console.error(err);
                    })
                        .finally(() => {
                        setMember(undefined);
                        chrome.runtime.reload();
                    });
                    return null;
                }));
                setMember(res === null || res === void 0 ? void 0 : res.data.member);
            }
        }));
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        Auth();
        setMember({ Google_id: '1', signature: 'diamond', name: 'fake' });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthContext.Provider, { value: {
            member,
            isAuth
        } }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (AuthProvider);


/***/ }),

/***/ "./src/Contexts/AuthContext/useAuthCTX/index.tsx":
/*!*******************************************************!*\
  !*** ./src/Contexts/AuthContext/useAuthCTX/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/Contexts/AuthContext/index.tsx");


const useAuthCTX = () => {
    const { member, isAuth } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(___WEBPACK_IMPORTED_MODULE_1__.AuthContext);
    return {
        member,
        isAuth
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useAuthCTX);


/***/ }),

/***/ "./src/Contexts/CustomThemeContext/index.tsx":
/*!***************************************************!*\
  !*** ./src/Contexts/CustomThemeContext/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomThemeContext": function() { return /* binding */ CustomThemeContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_Theme_index_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styles/Theme/index.styles */ "./src/Styles/Theme/index.styles.ts");



const CustomThemeContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    theme: {},
    setTheme: () => { },
    ChangeTheme: () => { }
});
const CustomThemeProvider = ({ children }) => {
    const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_0__.useState(_Styles_Theme_index_styles__WEBPACK_IMPORTED_MODULE_1__.Dark);
    const ChangeTheme = () => {
        if (theme.title === 'dark') {
            setTheme(_Styles_Theme_index_styles__WEBPACK_IMPORTED_MODULE_1__.Light);
            localStorage.setItem('themeImageTracker', 'light');
        }
        else {
            setTheme(_Styles_Theme_index_styles__WEBPACK_IMPORTED_MODULE_1__.Dark);
            localStorage.setItem('themeImageTracker', 'dark');
        }
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setTheme(localStorage.themeImageTracker === 'dark' ? _Styles_Theme_index_styles__WEBPACK_IMPORTED_MODULE_1__.Dark : _Styles_Theme_index_styles__WEBPACK_IMPORTED_MODULE_1__.Light);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomThemeContext.Provider, { value: { theme, setTheme, ChangeTheme } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, { theme: theme }, children)));
};
/* harmony default export */ __webpack_exports__["default"] = (CustomThemeProvider);


/***/ }),

/***/ "./src/Contexts/CustomThemeContext/useCustomThemeCTX/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/Contexts/CustomThemeContext/useCustomThemeCTX/index.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/Contexts/CustomThemeContext/index.tsx");


const useCustomThemeCTX = () => {
    const { ChangeTheme, setTheme, theme } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(___WEBPACK_IMPORTED_MODULE_1__.CustomThemeContext);
    return {
        ChangeTheme,
        setTheme,
        theme
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useCustomThemeCTX);


/***/ }),

/***/ "./src/Contexts/LiveStorageContext/indext.tsx":
/*!****************************************************!*\
  !*** ./src/Contexts/LiveStorageContext/indext.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveStorageContext": function() { return /* binding */ LiveStorageContext; }
/* harmony export */ });
/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie-react-hooks */ "./node_modules/dexie-react-hooks/dist/dexie-react-hooks.js");
/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dexie_react_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tools_Server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Tools/Server */ "./src/Tools/Server/index.ts");
/* harmony import */ var _AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthContext/useAuthCTX */ "./src/Contexts/AuthContext/useAuthCTX/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const LiveStorageContext = react__WEBPACK_IMPORTED_MODULE_1__.createContext({
    Images: [],
    PaginationImages: [],
    IsFallBack: {
        Delete: false,
        Storage: true
    },
    FilterOptions: [],
    setFilterOptions: () => { },
    setCurrentFilters: () => { },
    CurrentFilters: [],
    left: () => { },
    right: () => { }
});
const LiveStorageProvider = ({ children }) => {
    var _a;
    const CarouselRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const [FilterOptions, setFilterOptions] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [CurrentFilters, setCurrentFilters] = react__WEBPACK_IMPORTED_MODULE_1__.useState(JSON.parse((_a = localStorage.CurrentFilters) !== null && _a !== void 0 ? _a : '[]'));
    const [pagination, setPagination] = react__WEBPACK_IMPORTED_MODULE_1__.useState([0, 20]);
    const { member } = (0,_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const [IsFallBack, setIsFallBack] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
        Storage: true,
        Delete: false,
    });
    const Loaded = () => {
        setIsFallBack(current => {
            return Object.assign(Object.assign({}, current), { Storage: false });
        });
    };
    const isPromo = () => {
        if (!(member === null || member === void 0 ? void 0 : member.signature))
            return;
        const IsPromo = member.signature.split(' ')[0] === 'promo';
        return IsPromo;
    };
    const PaginationImages = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_0__.useLiveQuery)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (CurrentFilters.length) {
            return yield _Tools_Server__WEBPACK_IMPORTED_MODULE_2__.db.Images.where('origin').anyOfIgnoreCase(CurrentFilters).offset(pagination[0]).limit(pagination[1]).toArray();
        }
        else {
            return yield _Tools_Server__WEBPACK_IMPORTED_MODULE_2__.db.Images.offset(pagination[0]).limit(pagination[1]).toArray();
        }
    }), [CurrentFilters, pagination]);
    const Images = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_0__.useLiveQuery)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (!(member === null || member === void 0 ? void 0 : member.signature))
            return;
        const AllImages = () => __awaiter(void 0, void 0, void 0, function* () {
            if (CurrentFilters.length) {
                return yield _Tools_Server__WEBPACK_IMPORTED_MODULE_2__.db.Images.where('origin').anyOfIgnoreCase(CurrentFilters).toArray();
            }
            else {
                return yield _Tools_Server__WEBPACK_IMPORTED_MODULE_2__.db.Images.toArray();
            }
        });
        const images = yield AllImages();
        const origins = images.map(({ origin }) => origin);
        const uniqueOrigins = [...new Set(origins)];
        setFilterOptions(current => current.length
            ?
                current
            :
                [
                    ...new Set(origins)
                ]);
        const SignatureLimited = {
            platinum: 700,
            gold: 400,
            free: 200
        };
        if (member.signature === 'beta tester' || member.signature === 'diamond' || isPromo()) {
            return images;
        }
        const DeleteOrigin = ({ origin, SignatureLimited, }) => __awaiter(void 0, void 0, void 0, function* () {
            yield _Tools_Server__WEBPACK_IMPORTED_MODULE_2__.db.Images.where('origin').equals(origin).offset(SignatureLimited).primaryKeys((ids) => __awaiter(void 0, void 0, void 0, function* () {
                yield _Tools_Server__WEBPACK_IMPORTED_MODULE_2__.db.Images.bulkDelete(ids);
            }));
        });
        uniqueOrigins.forEach((origin) => __awaiter(void 0, void 0, void 0, function* () {
            const originLimited = origins.filter((Origin) => Origin === origin).length;
            if ((member === null || member === void 0 ? void 0 : member.signature) === 'free') {
                if (originLimited > SignatureLimited.free) {
                    yield DeleteOrigin({
                        origin,
                        SignatureLimited: SignatureLimited.free
                    });
                }
            }
            if ((member === null || member === void 0 ? void 0 : member.signature) === 'gold') {
                if (originLimited > SignatureLimited.gold) {
                    yield DeleteOrigin({
                        origin,
                        SignatureLimited: SignatureLimited.gold
                    });
                }
            }
            if ((member === null || member === void 0 ? void 0 : member.signature) === 'platinum') {
                if (originLimited > SignatureLimited.platinum) {
                    yield DeleteOrigin({
                        origin,
                        SignatureLimited: SignatureLimited.platinum
                    });
                }
            }
        }));
        return AllImages();
    }), [member, CurrentFilters]);
    const right = () => {
        if (CarouselRef.current !== null && Images) {
            const Carousel = CarouselRef.current;
            const scroll = (() => {
                return Carousel.scrollLeft += Carousel.offsetWidth;
            })();
            if (scroll >= Carousel.scrollWidth) {
                Carousel.scrollLeft = 0;
                setPagination(current => current[1] < Images.length ?
                    pagination.map(int => int + 20)
                    :
                        current);
            }
        }
    };
    const left = () => {
        if (CarouselRef.current !== null) {
            const Carousel = CarouselRef.current;
            const scroll = (() => {
                return Carousel.scrollLeft -= Carousel.offsetWidth;
            })();
            if (scroll <= 0) {
                setTimeout(() => {
                    Carousel.scrollLeft = Carousel.scrollWidth;
                }, 100);
                setPagination(current => current[0] > 0 ?
                    pagination.map(int => int - 20)
                    :
                        current);
            }
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
        if (Images) {
            Loaded();
        }
    }, [Images]);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(LiveStorageContext.Provider, { value: {
            Images: Images !== null && Images !== void 0 ? Images : [],
            PaginationImages: PaginationImages !== null && PaginationImages !== void 0 ? PaginationImages : [],
            IsFallBack,
            FilterOptions,
            setFilterOptions,
            setCurrentFilters,
            CurrentFilters,
            left,
            right,
            CarouselRef
        } }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (LiveStorageProvider);


/***/ }),

/***/ "./src/Contexts/LiveStorageContext/useLiveStorageCTX/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/Contexts/LiveStorageContext/useLiveStorageCTX/index.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _indext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../indext */ "./src/Contexts/LiveStorageContext/indext.tsx");


const useLiveStorageCTX = () => {
    const { CurrentFilters, FilterOptions, Images, IsFallBack, left, right, setCurrentFilters, setFilterOptions, CarouselRef, PaginationImages } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_indext__WEBPACK_IMPORTED_MODULE_1__.LiveStorageContext);
    return {
        CurrentFilters,
        FilterOptions,
        Images,
        IsFallBack,
        left,
        right,
        setCurrentFilters,
        setFilterOptions,
        CarouselRef,
        PaginationImages
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useLiveStorageCTX);


/***/ }),

/***/ "./src/Contexts/PortalContext/index.tsx":
/*!**********************************************!*\
  !*** ./src/Contexts/PortalContext/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalContext": function() { return /* binding */ PortalContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PortalContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    isOpen: {
        tools: false,
        shop: false,
        profile: false
    },
    setIsOpen: () => { }
});
const PortalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        tools: false,
        shop: false,
        profile: false
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalContext.Provider, { value: { isOpen, setIsOpen } }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (PortalProvider);


/***/ }),

/***/ "./src/Contexts/PortalContext/usePortalCTX/index.tsx":
/*!***********************************************************!*\
  !*** ./src/Contexts/PortalContext/usePortalCTX/index.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/Contexts/PortalContext/index.tsx");


const usePortalCTX = () => {
    const { isOpen, setIsOpen } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.PortalContext);
    return {
        isOpen,
        setIsOpen,
        closeAll() {
            setIsOpen({
                tools: false,
                shop: false,
                profile: false
            });
        }
    };
};
/* harmony default export */ __webpack_exports__["default"] = (usePortalCTX);


/***/ }),

/***/ "./src/Contexts/index.tsx":
/*!********************************!*\
  !*** ./src/Contexts/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalProvider": function() { return /* binding */ GlobalProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthContext */ "./src/Contexts/AuthContext/index.tsx");
/* harmony import */ var _CustomThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomThemeContext */ "./src/Contexts/CustomThemeContext/index.tsx");
/* harmony import */ var _LiveStorageContext_indext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiveStorageContext/indext */ "./src/Contexts/LiveStorageContext/indext.tsx");
/* harmony import */ var _PortalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PortalContext */ "./src/Contexts/PortalContext/index.tsx");





const GlobalProvider = ({ children }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AuthContext__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CustomThemeContext__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LiveStorageContext_indext__WEBPACK_IMPORTED_MODULE_3__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PortalContext__WEBPACK_IMPORTED_MODULE_4__["default"], null, children)))));
};
/* harmony default export */ __webpack_exports__["default"] = (GlobalProvider);


/***/ }),

/***/ "./src/Extension/Popup/index.tsx":
/*!***************************************!*\
  !*** ./src/Extension/Popup/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Pages */ "./src/Pages/index.tsx");



const Render = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
const Root = document.createElement('div');
Root.id = 'root';
const Portal = document.createElement('div');
Portal.id = 'portal';
document.body.append(Portal);
document.body.append(Root);
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(Root);
root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Render, null));


/***/ }),

/***/ "./src/Hooks/useFakeJquery/index.tsx":
/*!*******************************************!*\
  !*** ./src/Hooks/useFakeJquery/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const useFakeJquery = () => {
    const $ = (selector) => {
        return document.querySelector(selector);
    };
    return {
        $
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useFakeJquery);


/***/ }),

/***/ "./src/Hooks/useHowLogo/index.tsx":
/*!****************************************!*\
  !*** ./src/Hooks/useHowLogo/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contexts_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Contexts/AuthContext/useAuthCTX */ "./src/Contexts/AuthContext/useAuthCTX/index.tsx");

const useHowLogo = () => {
    const { member } = (0,_Contexts_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const verifyLogo = () => {
        if ((member === null || member === void 0 ? void 0 : member.signature) === 'free') {
            return 'logo-vermelho.png';
        }
        if ((member === null || member === void 0 ? void 0 : member.signature) === 'gold') {
            return 'logo-gold.png';
        }
        if ((member === null || member === void 0 ? void 0 : member.signature) === 'platinum') {
            return 'logo-verde.png';
        }
        if ((member === null || member === void 0 ? void 0 : member.signature) === 'diamond' || (member === null || member === void 0 ? void 0 : member.signature) === 'beta tester') {
            return 'logo-diamond.png';
        }
    };
    return verifyLogo;
};
/* harmony default export */ __webpack_exports__["default"] = (useHowLogo);


/***/ }),

/***/ "./src/Hooks/useJSZIP/index.tsx":
/*!**************************************!*\
  !*** ./src/Hooks/useJSZIP/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useFakeJquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useFakeJquery */ "./src/Hooks/useFakeJquery/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const useJSZIP = () => {
    const [Extension, setExtesion] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
    const [isFallback, setIsFallback] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const { '$': $$ } = (0,_useFakeJquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const Create = (Storage) => __awaiter(void 0, void 0, void 0, function* () {
        setIsFallback(true);
        const zip = new (jszip__WEBPACK_IMPORTED_MODULE_0___default())();
        zip.file('Hello.txt', `
            👋 Thanks for using the 🎯 image tracker 🎯!

            about us : https://image-tracker.taplink.ws/
        `);
        const img = zip.folder('images');
        Storage
            .forEach(({ blob, alt, extension }, index) => {
            setExtesion(extension);
            img.file(`${(index + 1) + '-' + alt}.${!!Extension ? Extension : extension}`, blob);
        });
        const blob = yield zip.generateAsync({ type: 'blob' });
        const link = URL.createObjectURL(blob);
        return {
            blob,
            link,
        };
    });
    return {
        Create,
        setExtesion,
        Extension,
        Download(Storage) {
            return __awaiter(this, void 0, void 0, function* () {
                const Zip = yield Create(Storage);
                const a = document.createElement('a');
                a.href = Zip.link;
                a.download = 'Image-Tracker-Zip-Images';
                a.target = '__blank';
                a.click();
                a.remove();
                URL.revokeObjectURL(Zip.link);
                setIsFallback(false);
            });
        },
        isFallback
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useJSZIP);


/***/ }),

/***/ "./src/Hooks/useWindow/index.tsx":
/*!***************************************!*\
  !*** ./src/Hooks/useWindow/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWindow = () => {
    const [WindowConfig, setWindowConfig] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setWindowConfig('location=1, toolbar=1, menubar=1, resizable=1, width=464, height=700');
    }, []);
    return {
        WindowConfig
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useWindow);


/***/ }),

/***/ "./src/Pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/Pages/Home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Alert */ "./src/Components/Alert/index.tsx");
/* harmony import */ var _Components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Card */ "./src/Components/Card/index.tsx");
/* harmony import */ var _Components_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Carousel */ "./src/Components/Carousel/index.tsx");
/* harmony import */ var _Components_Load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Load */ "./src/Components/Load/index.tsx");
/* harmony import */ var _Components_Nav_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Nav/Footer */ "./src/Components/Nav/Footer/index.tsx");
/* harmony import */ var _Components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Title */ "./src/Components/Title/index.tsx");
/* harmony import */ var _Contexts_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Contexts/AuthContext/useAuthCTX */ "./src/Contexts/AuthContext/useAuthCTX/index.tsx");
/* harmony import */ var _Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Contexts/LiveStorageContext/useLiveStorageCTX */ "./src/Contexts/LiveStorageContext/useLiveStorageCTX/index.tsx");
/* harmony import */ var _Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Contexts/PortalContext/usePortalCTX */ "./src/Contexts/PortalContext/usePortalCTX/index.tsx");
/* harmony import */ var _Hooks_useHowLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Hooks/useHowLogo */ "./src/Hooks/useHowLogo/index.tsx");












const Home = () => {
    const { setIsOpen } = (0,_Contexts_PortalContext_usePortalCTX__WEBPACK_IMPORTED_MODULE_9__["default"])();
    const { IsFallBack, PaginationImages } = (0,_Contexts_LiveStorageContext_useLiveStorageCTX__WEBPACK_IMPORTED_MODULE_8__["default"])();
    const { member, isAuth } = (0,_Contexts_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_7__["default"])();
    const HowLogo = (0,_Hooks_useHowLogo__WEBPACK_IMPORTED_MODULE_10__["default"])();
    const Goto = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!isAuth) {
            Goto('/');
        }
    }, [isAuth]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if ((member === null || member === void 0 ? void 0 : member.signature) === 'free' && !IsFallBack.Storage) {
            setIsOpen(current => {
                return Object.assign(Object.assign({}, current), { shop: true });
            });
        }
    }, [setIsOpen, member]);
    if (IsFallBack.Storage) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Load__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Title__WEBPACK_IMPORTED_MODULE_6__["default"], { src: HowLogo() }, "Image Tracker"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], null, PaginationImages[0] ?
            PaginationImages.map(({ blob, alt, id }) => {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], { src: URL.createObjectURL(blob), alt: alt, id: id, key: id });
            })
            :
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], { title: 'There are no images to show', describe: 'Scroll down to get the photos from the website ' })),
        PaginationImages[0] &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Nav_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ }),

/***/ "./src/Pages/Login/index.tsx":
/*!***********************************!*\
  !*** ./src/Pages/Login/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Form */ "./src/Components/Form/index.tsx");
/* harmony import */ var _Components_Layout_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Layout/Flex */ "./src/Components/Layout/Flex/index.tsx");
/* harmony import */ var _Components_Layout_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Layout/Grid */ "./src/Components/Layout/Grid/index.tsx");
/* harmony import */ var _Contexts_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Contexts/AuthContext/useAuthCTX */ "./src/Contexts/AuthContext/useAuthCTX/index.tsx");
/* harmony import */ var _Hooks_useWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindow */ "./src/Hooks/useWindow/index.tsx");
/* harmony import */ var _Tools_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Tools/Api */ "./src/Tools/Api/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









const Login = () => {
    const { isAuth } = (0,_Contexts_AuthContext_useAuthCTX__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const Goto = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
    const { WindowConfig } = (0,_Hooks_useWindow__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const Submit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const { data } = yield (0,_Tools_Api__WEBPACK_IMPORTED_MODULE_6__["default"])().get('/oauth/google');
        const Href = data.GoogleOauth.href;
        window.open(Href, 'Oauth', WindowConfig);
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (isAuth) {
            Goto('/popup.html');
        }
    }, [isAuth]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !isAuth &&
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Form__WEBPACK_IMPORTED_MODULE_1__["default"], { onSubmit: (e) => Submit(e) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Layout_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], { direction: 'column' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: 'img/logo-vermelho.png' }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Layout_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Image Tracker Log in"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: 'submit', className: 'Google' },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaGoogle, null),
                        " Continue with Google"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Login);


/***/ }),

/***/ "./src/Pages/index.tsx":
/*!*****************************!*\
  !*** ./src/Pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Contexts */ "./src/Contexts/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Styles_Global_index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/Global/index.styles */ "./src/Styles/Global/index.styles.ts");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/Pages/Home/index.tsx");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./src/Pages/Login/index.tsx");






const App = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Contexts__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Styles_Global_index_styles__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: '/', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: '/popup.html', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: '*', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null) })))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/Styles/BreakPoints/index.ts":
/*!*****************************************!*\
  !*** ./src/Styles/BreakPoints/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const BreakPoints = {
    width: [
        '600px',
        '1200px',
        '1500px'
    ],
    height: [
        '973px'
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (BreakPoints);


/***/ }),

/***/ "./src/Styles/Global/index.styles.ts":
/*!*******************************************!*\
  !*** ./src/Styles/Global/index.styles.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _BreakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BreakPoints */ "./src/Styles/BreakPoints/index.ts");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle `
    *, html{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        scroll-behavior: smooth !important;
    }

    body{
        
        @media(max-width: ${_BreakPoints__WEBPACK_IMPORTED_MODULE_0__["default"].width[0]}){
            min-width: 600px !important;
            min-height: 600px !important;
        }

        font-size: 1rem;
        background: ${props => props.theme.color.bg[0]};
        color: white;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        height: 100%;   
    }
`);


/***/ }),

/***/ "./src/Styles/Theme/index.styles.ts":
/*!******************************************!*\
  !*** ./src/Styles/Theme/index.styles.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dark": function() { return /* binding */ Dark; },
/* harmony export */   "Light": function() { return /* binding */ Light; }
/* harmony export */ });

const utils = {
    borderRadius: '8px',
    boxShadow: '2px 2px 10px #000',
};
const Dark = {
    title: 'dark',
    utils,
    color: {
        bg: {
            0: '#181818',
            1: '#282a36'
        },
        green: '#50fa7b',
        red: '#ff5555',
        cyan: '#00C3FF',
        yellow: '#ffbf00',
        icon: '#f8f8f2;',
        purple: '#bd93f9'
    }
};
const Light = {
    title: 'light',
    utils,
    color: {
        bg: {
            0: '#f1e7db',
            1: '#c4c7b5'
        },
        green: '#005221',
        red: '#ff0000',
        cyan: '#0088c5',
        yellow: '#cca500',
        icon: '#111111',
        purple: '#562f7e'
    }
};



/***/ }),

/***/ "./src/Tools/Api/index.ts":
/*!********************************!*\
  !*** ./src/Tools/Api/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const Api = (token) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: "https://api.imagetracker.org/",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Credentials": 'true',
            "Authorization": token !== null && token !== void 0 ? token : ""
        },
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Api);


/***/ }),

/***/ "./src/Tools/Server/index.ts":
/*!***********************************!*\
  !*** ./src/Tools/Server/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DexieLib": function() { return /* binding */ DexieLib; },
/* harmony export */   "db": function() { return /* binding */ db; }
/* harmony export */ });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/modern/dexie.mjs");

class DexieLib extends dexie__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super('Image_Tracker_DB');
        this.version(1).stores({
            Images: 'id, alt, extension, size, origin'
        });
    }
}
const db = new DexieLib();


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp"] = self["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js","vendors-node_modules_axios_index_js-node_modules_dexie-react-hooks_dist_dexie-react-hooks_js--acdf15"], function() { return __webpack_require__("./src/Extension/Popup/index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map