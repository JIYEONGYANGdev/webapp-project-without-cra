(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7285:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AmpStateContext=void 0;var AmpStateContext=(0,__webpack_require__(2648).Z)(__webpack_require__(7294)).default.createContext({});exports.AmpStateContext=AmpStateContext},354:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isInAmpMode=function(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$ampFirst=_ref.ampFirst,_ref$hybrid=_ref.hybrid,_ref$hasQuery=_ref.hasQuery;return void 0!==_ref$ampFirst&&_ref$ampFirst||void 0!==_ref$hybrid&&_ref$hybrid&&void 0!==_ref$hasQuery&&_ref$hasQuery}},6505:function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultHead=defaultHead,exports.default=void 0;var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_react=(0,__webpack_require__(1598).Z)(__webpack_require__(7294)),_sideEffect=_interop_require_default(__webpack_require__(148)),_ampContext=__webpack_require__(7285),_headManagerContext=__webpack_require__(523),_ampMode=__webpack_require__(354);function defaultHead(){var inAmpMode=arguments.length>0&&void 0!==arguments[0]&&arguments[0],head=[_react.default.createElement("meta",{charSet:"utf-8"})];return inAmpMode||head.push(_react.default.createElement("meta",{name:"viewport",content:"width=device-width"})),head}function onlyReactElement(list,child){return"string"==typeof child||"number"==typeof child?list:child.type===_react.default.Fragment?list.concat(_react.default.Children.toArray(child.props.children).reduce(function(fragmentList,fragmentChild){return"string"==typeof fragmentChild||"number"==typeof fragmentChild?fragmentList:fragmentList.concat(fragmentChild)},[])):list.concat(child)}__webpack_require__(2783);var METATYPES=["name","httpEquiv","charSet","itemProp"];function reduceComponents(headChildrenElements,props){var keys,tags,metaTypes,metaCategories,inAmpMode=props.inAmpMode;return headChildrenElements.reduce(onlyReactElement,[]).reverse().concat(defaultHead(inAmpMode).reverse()).filter((keys=new Set,tags=new Set,metaTypes=new Set,metaCategories={},function(h){var isUnique=!0,hasKey=!1;if(h.key&&"number"!=typeof h.key&&h.key.indexOf("$")>0){hasKey=!0;var key=h.key.slice(h.key.indexOf("$")+1);keys.has(key)?isUnique=!1:keys.add(key)}switch(h.type){case"title":case"base":tags.has(h.type)?isUnique=!1:tags.add(h.type);break;case"meta":for(var i=0,len=METATYPES.length;i<len;i++){var metatype=METATYPES[i];if(h.props.hasOwnProperty(metatype)){if("charSet"===metatype)metaTypes.has(metatype)?isUnique=!1:metaTypes.add(metatype);else{var category=h.props[metatype],categories=metaCategories[metatype]||new Set;("name"!==metatype||!hasKey)&&categories.has(category)?isUnique=!1:(categories.add(category),metaCategories[metatype]=categories)}}}}return isUnique})).reverse().map(function(c,i){var key=c.key||i;if(!inAmpMode&&"link"===c.type&&c.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(url){return c.props.href.startsWith(url)})){var newProps=_extends({},c.props||{});return newProps["data-href"]=newProps.href,newProps.href=void 0,newProps["data-optimized-fonts"]=!0,_react.default.cloneElement(c,newProps)}return _react.default.cloneElement(c,{key:key})})}exports.default=function(_ref){var children=_ref.children,ampState=_react.useContext(_ampContext.AmpStateContext),headManager=_react.useContext(_headManagerContext.HeadManagerContext);return _react.default.createElement(_sideEffect.default,{reduceComponentsToState:reduceComponents,headManager:headManager,inAmpMode:_ampMode.isInAmpMode(ampState)},children)},("function"==typeof exports.default||"object"===_typeof(exports.default)&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},148:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(props){var ref,headManager=props.headManager,reduceComponentsToState=props.reduceComponentsToState;function emitChange(){if(headManager&&headManager.mountedInstances){var headElements=_react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));headManager.updateHead(reduceComponentsToState(headElements,props))}}return isServer&&(null==headManager||null==(ref=headManager.mountedInstances)||ref.add(props.children),emitChange()),useClientOnlyLayoutEffect(function(){var ref1;return null==headManager||null==(ref1=headManager.mountedInstances)||ref1.add(props.children),function(){var ref;null==headManager||null==(ref=headManager.mountedInstances)||ref.delete(props.children)}}),useClientOnlyLayoutEffect(function(){return headManager&&(headManager._pendingUpdate=emitChange),function(){headManager&&(headManager._pendingUpdate=emitChange)}}),useClientOnlyEffect(function(){return headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null),function(){headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null)}}),null};var _react=(0,__webpack_require__(1598).Z)(__webpack_require__(7294)),isServer=!1,useClientOnlyLayoutEffect=_react.useLayoutEffect,useClientOnlyEffect=isServer?function(){}:_react.useEffect},2783:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.warnOnce=void 0,exports.warnOnce=function(_){}},5340:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return pages}});var head=__webpack_require__(9008),head_default=__webpack_require__.n(head),react=__webpack_require__(7294),DEFAULT_TITLE="부시만",DEFAULT_DESCRIPTION="부국제 시간표 만들어드립니다.",pages=function(){return react.createElement(react.Fragment,null,react.createElement(head_default(),null,react.createElement("title",null,DEFAULT_TITLE),react.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover"}),react.createElement("meta",{name:"description",content:DEFAULT_DESCRIPTION}),react.createElement("meta",{property:"busiman:type",content:"website"}),react.createElement("meta",{property:"busiman:title",content:DEFAULT_TITLE}),react.createElement("meta",{property:"busiman:description",content:DEFAULT_DESCRIPTION}),react.createElement("meta",{property:"busiman:image",content:"https://www.busiman-2022.kr/busiman_logo.png"}),react.createElement("meta",{property:"busiman:url",content:"busiman-2022.kr"})),react.createElement(react.Fragment,null,react.createElement("div",null,"hi")))}},8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(5340)}])},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(6505)}},function(__webpack_require__){__webpack_require__.O(0,[888,774,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);