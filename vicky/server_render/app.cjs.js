'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var server = require('react-dom/server');
var reactRouterDom = require('react-router-dom');
var reactRouterConfig = require('react-router-config');
var _extends = require('@babel/runtime/helpers/extends');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var icons = require('@ant-design/icons');
var qs = require('querystring');
var URL = require('url');
var antd = require('antd');
var _cloneDeep = require('lodash/cloneDeep');
var reResizable = require('re-resizable');
var ReactDOM = require('react-dom');
var classnames = require('classnames');
var instance = require('axios');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);
var URL__default = /*#__PURE__*/_interopDefaultLegacy(URL);
var _cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(_cloneDeep);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var instance__default = /*#__PURE__*/_interopDefaultLegacy(instance);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ".layout{overflow:hidden;width:100%}.layout .content-lay{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}@media screen and (max-width:600px){.layout .content-lay .left{display:none}.layout .content-lay .content{width:100%}}.layout .content-lay .content{position:relative;height:calc(100vh - 45px);width:100%}";
styleInject(css_248z$5);

var css_248z$4 = ".head{width:100%;height:45px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;padding-left:5px;padding-right:5px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;background:rgba(225,49,141,.6392156862745098)}.head .menu_phone{display:none}@media screen and (max-width:600px){.head .menu_phone{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;color:rgba(228,100,64,.9411764705882353)}}.head i{position:absolute;width:36px;height:36px;font-size:32px;font-size:50px;top:-12px;right:8px}.head .font{display:inherit}.head .font .title{padding-left:12px}.head .font .title,.head .titleLink{font-size:20px;-webkit-align-self:center;align-self:center}.head .titleLink a{color:inherit;text-decoration:none}.head .back{display:inherit;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center}.head .back button{height:70%!important}.head .back .themelist{display:grid;width:-webkit-max-content;width:-moz-max-content;width:max-content}.head .back .themelist span{color:#fff;cursor:pointer}.head .back .themelist span.active{background-color:rgba(228,100,64,.9411764705882353)}.head .back .ant-popover-placement-bottomRight{padding:0!important}.head .back .ant-popover-inner{background-color:rgba(0,0,0,.6);padding:6px 12px!important}.head .back .ant-popover-inner-content{padding:0!important}.head .back .setting{font-size:20px;-webkit-align-self:center;align-self:center;justify-self:flex-end;padding-right:12px}";
styleInject(css_248z$4);

var css_248z$3 = "@font-face{font-family:iconfont;src:url(iconfont.woff2?t=1681440498626) format(\"woff2\"),url(iconfont.woff?t=1681440498626) format(\"woff\"),url(iconfont.ttf?t=1681440498626) format(\"truetype\")}.iconfont{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.clover:before{content:\"\\e62a\"}.mushroom:before{content:\"\\e62b\"}.icon-tiaopi:before{content:\"\\e62c\"}.icon-fanu:before{content:\"\\e62d\"}.icon-kun:before{content:\"\\e62e\"}.icon-leiku:before{content:\"\\e62f\"}.icon-kaixin:before{content:\"\\e630\"}.icon-weixiao:before{content:\"\\e631\"}.icon-yiwen:before{content:\"\\e632\"}.icon-juezui:before{content:\"\\e633\"}.icon-jiyan:before{content:\"\\e634\"}.icon-alien:before{content:\"\\e69b\"}.icon-ghost:before{content:\"\\e69c\"}.icon-unicorn:before{content:\"\\e69d\"}.icon-pill:before{content:\"\\e69e\"}.icon-banana:before{content:\"\\e69f\"}.icon-boy:before{content:\"\\e6a0\"}.icon-mushroom:before{content:\"\\e6a1\"}.icon-palette:before{content:\"\\e6a2\"}.icon-eggplant:before{content:\"\\e6a3\"}.icon-strawberry:before{content:\"\\e6a4\"}.icon-watermelon:before{content:\"\\e6a5\"}.icon-carnation:before{content:\"\\e6a6\"}.icon-sakura:before{content:\"\\e6a7\"}";
styleInject(css_248z$3);

antd.Select.Option;

var Head = function Head(props) {
  var isPhone = props.isPhone;
      props.matchSize;
  var backRef = React.useRef();

  var changeTheme = function changeTheme(value) {
    localStorage.setItem('themeType', value);
    var url = URL__default["default"].parse(window.location.href, true);
    url.query.theme = value;
    var query = qs__default["default"].stringify(url.query);

    var _url = "".concat(url.protocol, "//").concat(url.host).concat(url.pathname, "?").concat(query);

    history.pushState(null, null, _url);
    window.location.reload();
  };

  var themeList = [{
    type: 'default',
    name: '默认主题'
  }, {
    type: 'blue',
    name: '海洋主题'
  }, {
    type: 'yellow',
    name: '日出主题'
  }];
  var content = /*#__PURE__*/React__default["default"].createElement("div", {
    className: "themelist"
  }, themeList.map(function (val) {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      key: val.type,
      onClick: function onClick() {
        changeTheme(val.type);
      }
    }, val.name);
  }));

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      showPhoneMenu = _useState2[0],
      setShowPhoneMenu = _useState2[1];

  var ctrlMenuShow = function ctrlMenuShow(res) {
    setShowPhoneMenu(res);
  };

  var leftClone = function leftClone() {
    if (isPhone) {
      return /*#__PURE__*/React__default["default"].cloneElement(props.children, {
        ctrlMenuShow: ctrlMenuShow,
        showPhoneMenu: showPhoneMenu,
        isPhone: isPhone
      });
    }
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "head"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "font"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      position: 'relative',
      width: '36px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    t: "1682564554925",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "1163",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M896 320V288h32v32h-32z m32 64V288h32v96h-32z m32-96h-64V256h64v32z m-32-32h-64V224h64v32z m-32-32h-64V192h64v32z m-32-32h-96V160h96v32z m-32-32h-128V128h128v32z m-64-32h-160V96h160v32z m-64-32h-128V64h128v32z m-96-64h-128V0h128v32z m32 32h-192V32h192v32z m-128 32h-128V64h128v32z m0 32h-192V96h192v32z m-192 64H256V160h64v32z m64-32H224V128h160v32zM288 128H192V96h96v32zM224 96H128V64h96v32zM192 64H64V32h128v32zM160 32H64V0h96v32zM0 128V32h32v96H0z m64-128v160H32V0h32z m32 128v64H64V128h32z m32 32v64H96V160h32z m32 32v64H128V192h32z m32 128V256h32v64H192z m0-96v160H160V224h32z m0 256v-64h32v64H192z m0-64v128H160v-128h32z m-96 32v32H64v-32h32z m0 32v-128h32v128H96z m64-160v256H128v-256h32z m-32 272V640H96v-48h32z m-32 32V512h32v112H96z m0-16v96H64v-96h32z m416-224v96h-32v-96h32z m-96 96v-96h32v96h-32z m64-128v160h-32v-160h32z m0 608v-64h32v64h-32z m32-64v-112h32V896h-32z m-64-128h128v32h-128v-32z m128 0h-128v-32h128v32z m-128 0v64h-32v-64h32z m-32 32v128h-32v-128h32z m-32 64v64h-32v-64h32z m32 96H288v-32h128v32zM0 864v-160h32v160H0z m32 32v-256h32v256H32z m0 0h64v32H32v-32z m32 32h96v32H64v-32z m32 32h256v32H96v-32z m192 64H160v-32h128v32z m128-64h544v32H416v-32z m544 32V320h32v672h-32z m64-608v608h-32V384h32z m0 640H416v-32h608v32z",
    fill: "#0C0C0C",
    "p-id": "1164"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M960 896v32h-32v-32h32z m-64 32V352h32v576h-32z m0-640v640h-32V288h32z m-96 544V256h32v576h-32z m64-576v672h-32V256h32z m-192 576v-32h32v32h-32z m32 0v-64h32v64h-32z m32 0v-96h32v96h-32z m32 0V256h32v576h-32z m64-576h-96V224h96v32z m-32-32h-96V192h96v32z m-64-32h-64V160h64v32z m-416 224H192v-32h128v32z m-96-64h160v32H224v-32z m160 0H224v-32h160v32z m-64-128V192h32v32h-32z m64 16V288h-32V240h32z m-32 32V160h32v112h-32zM416 160v192h-32V160h32z m0 160V160h32v160h-32z m64-192v160h-32V128h32z m0 128V128h32v128h-32z",
    fill: "#2AD2F9",
    "p-id": "1165"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M448 160h-64V128h64v32z m-256 224v32H160v-32h32z m0-32v-32h32v32H192z m32-32V288h32v32H224z m704 0v32h-32v-32h32z m-128 608h160v32h-160v-32z m160-512v480h-32V416h32z",
    fill: "#24A6C0",
    "p-id": "1166"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M704 160h-64V128h64v32zM352 192h-32V160h32v32z m-32 32H288V192h32v32zM256 288h32v32H256V288z m96 0h32v32h-32V288z m416-96h-32V160h32v32z",
    fill: "#6EC3AE",
    "p-id": "1167"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M352 864v-32h32v32h-32z m-256-128v32H64v-32h32z m-32 96h32v32H64v-32z m128 96h64v32H192v-32z m-64-96v-64h32v64H128z m32-96v-32h32v32H160z m480 96v-32h32v32h-32z m32-32v-32h32v32h-32z m-224-96h160v32h-160v-32z m320-32v64h-32v-64h32z m-64 96v-32h32v32h-32z m128 96v64h-32v-64h32z m-32 96h-288v-32h288v32zM416 320h32v32h-32v-32z m32-32h32v32h-32V288z m32-32h32v32h-32V256z m224-32h32v32h-32V224z m32 32h32v32h-32V256z",
    fill: "#AECFD6",
    "p-id": "1168"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M128 672v32H96v-32h32z m32-64v32H128v-32h32z m64-256v32H192v-32h32z m-32 192v32H160v-32h32z m32-64v32H192v-32h32z m0 0v-64h32v64H224zM576 96h-64V64h64v32z m128 128h-32V192h32v32z m-32-32h-32V160h32v32z m-32-32h-32V128h32v32z m-32-32h-32V96h32v32z m-160 224v32h-32v-32h32z m64 0v32h-32v-32h32z m-96 128h32v32h-32v-32z m64 0h32v32h-32v-32z m128 288v32h-32v-32h32z m-32 64v64h-32v-64h32z m-64 96v-32h32v32h-32z m-96 0v-64h32v64h-32z",
    fill: "#767678",
    "p-id": "1169"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M352 320H288V288h64v32zM256 256h96v32H256V256z m64 0H224V224h96v32zM288 224H192V192h96v32zM224 192H160V160h64v32zM192 160H128V128h64v32zM160 128H96V96h64v32z",
    fill: "#F8CB3E",
    "p-id": "1170"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M64 864h32v32H64v-32z m32 32h32v32H96v-32z m160 64v-32h32v32H256z m-96 0v-32h32v32H160zM224 160H192V128h32v32zM96 96H64V64h32v32z m320 736h32v32h-32v-32z m96 0v64h-32v-64h32z m-32 64v64h-32v-64h32z m-128 32h-32v-32h32v32z m-96-192H192v-32h64v32z m-96 0h96v32H160v-32z m64 64H160v-32h64v32z",
    fill: "#807E81",
    "p-id": "1171"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M256 192H224V160h32v32z m0 96H224V256h32v32zM224 256H192V224h32v32zM192 224H160V192h32v32zM160 192H128V160h32v32zM128 160H96V128h32v32z m0-64H96V64h32v32zM96 128H64V96h32v32z",
    fill: "#917828",
    "p-id": "1172"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M544 832v-32h32v32h-32z m32-64v-32h32v32h-32z m-160 32h-32v-32h32v32z m32-32h-32v-32h32v32zM64 736v-32h32v32H64z m32-64v-32h32v32H96z m32-64v-32h32v32H128z m224-352h-32V224h32v32zM192 128H160V96h32v32z",
    fill: "#AEBCBD",
    "p-id": "1173"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M320 416v-32h32v32h-32z m64-32v-32h32v32h-32z",
    fill: "#D8D8D8",
    "p-id": "1174"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M800 192h32v32h-32V192z m32 32h32v32h-32V224z m32 32h32v32h-32V256z m64 128h32v32h-32v-32z",
    fill: "#1E768A",
    "p-id": "1175"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M160 832v96H128v-96h32z m0 96v-128h32v128H160z m64-128v128H192v-128h32z m0 128v-160h32v160H224z m-160-96v-64h32v64H64z m32 64v-192h32v192H96z m32-128v-128h32v128H128z m32-64v-128h32v128H160z m32 0v-192h32v192H192z m32 0v-224h32v224H224z m64-288v512H256V416h32z m0 512V416h32v512H288z m64-96V384h32v448h-32z m0-416v480h-32V416h32z m96 544h-32v-32h32v32z m32-128v-32h32v32h-32z m0-32v96h-32v-96h32z m32-288v192h-32v-192h32z m-64 192v-192h32v192h-32z m0-192v224h-32v-224h32z m-64 256V384h32v384h-32z m64-416v-32h32v32h-32z m32 0V288h32v64h-32z m256 320V288h32v384h-32z m0-416v480h-32V256h32z m-64 512V224h32v544h-32z m0-576v608h-32V192h32z m160 672h-192v-32h192v32z m-32 32h-160v-32h160v32z m0 32h-160v-32h160v32z m-224 0h-32v-32h32v32z m32-128v128h-32v-128h32z m0 128V160h32v768h-32z m0-800v576h-32V128h32z m-64 576V96h32v608h-32z m0-608v608h-32V96h32z",
    fill: "#FDFBFE",
    "p-id": "1176"
  }))), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "title",
    onClick: function onClick() {
      isPhone && setShowPhoneMenu(!showPhoneMenu);
    }
  }, "\u80E1\u3055\u3093\u6D4B\u8BD5\u9879\u76EE"), "\xA0\xA0", /*#__PURE__*/React__default["default"].createElement("div", {
    className: "menu_phone",
    onClick: function onClick() {
      isPhone && setShowPhoneMenu(!showPhoneMenu);
    }
  }, /*#__PURE__*/React__default["default"].createElement(icons.BarsOutlined, null)), "\xA0\xA0", /*#__PURE__*/React__default["default"].createElement("div", {
    className: "menu_phone",
    onClick: function onClick() {
      localStorage.removeItem('activeKey');
      localStorage.removeItem('tabs');
      window.location.reload();
    }
  }, /*#__PURE__*/React__default["default"].createElement(icons.HomeOutlined, null)), leftClone()), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "back",
    ref: backRef
  }, /*#__PURE__*/React__default["default"].createElement("pre", {
    style: {
      fontSize: '0.2vw',
      textAlign: 'center',
      paddingRight: '12px'
    }
  }, "\u670D\u52A1\u5668\u5E26\u5BBD\n 1Mbps/s"), /*#__PURE__*/React__default["default"].createElement(antd.Popover, {
    getPopupContainer: function getPopupContainer() {
      return backRef.current;
    },
    placement: "bottomLeft",
    trigger: "click",
    content: content
  }, /*#__PURE__*/React__default["default"].createElement(antd.Button, {
    size: "small"
  }, "\u6362\u80A4"))));
};

var css_248z$2 = ".entireLeft{height:calc(100vh - 45px);border-top:.1px solid hsla(0,0%,100%,.16862745098039217);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}.entireLeft,.entireLeft .sliderLeft{border-right:.1px solid hsla(0,0%,100%,.16862745098039217)}.entireLeft .sliderLeft{width:50px;height:100%;position:relative}.entireLeft .sliderLeft .hidden_left{position:absolute;bottom:0;width:100%;height:35px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;color:rgba(228,100,64,.9411764705882353);cursor:pointer}.entireLeft .sliderLeft .hidden_left svg{width:80%;height:80%}.entireLeft .sliderLeft .sliderItem{display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;cursor:pointer;width:100%;height:48px;position:relative;padding:5px}.entireLeft .sliderLeft .sliderItem:hover{-webkit-transition:all .5s;transition:all .5s}.entireLeft .sliderLeft .sliderItem i{position:absolute;top:-2px;left:5px;width:100%;height:100%;font-size:35px}.entireLeft .sliderLeft .sliderItem.active{border-radius:10px;margin:5px;width:78%;height:38px;background-color:rgba(228,100,64,.9411764705882353)}.entireLeft .sliderLeft .sliderItem.active i{position:absolute;top:-6px;left:0;width:100%;height:100%;font-size:35px}.entireLeft .left_lay{height:100%;margin-top:3px}.entireLeft .left_lay .left_title{height:30px;padding:0 12px;font-size:12px}.entireLeft .left_lay .left_title,.entireLeft .left_lay .left_title .left_title_name{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.entireLeft .left_lay .left_title .left_title_name{background:rgba(205,30,77,.4980392156862745);border-radius:25px;padding:2px 12px;width:100%}.entireLeft .left_lay .left{height:calc(100% - 30px);overflow:auto}.entireLeft .left_lay .left::-webkit-scrollbar{width:0}.entireLeft .left_lay .left::-webkit-scrollbar-thumb{background-color:rgba(228,100,64,.9411764705882353)}@-webkit-keyframes kk{0%{opacity:0}to{opacity:1}}@-webkit-keyframes cc{0%{opacity:1}to{opacity:0}}@keyframes cc{0%{opacity:1}to{opacity:0}}@keyframes kk{0%{opacity:0}to{opacity:1}}.entireLeft .left_lay .left .single_node{z-index:1;height:auto}.entireLeft .left_lay .left .single_node .root_node{height:30px;padding-right:12px;cursor:pointer;z-index:1}.entireLeft .left_lay .left .single_node .root_node,.entireLeft .left_lay .left .single_node .root_node .node_title{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.entireLeft .left_lay .left .single_node .root_node .node_title{font-size:12px;width:100%;border-radius:25px px;background:rgba(199,198,39,.6705882352941176);border-radius:25px;padding:2px 12px}.entireLeft .left_lay .left .common_node{height:30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;cursor:pointer;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;z-index:2;-webkit-transition:background .3s;transition:background .3s;background:#000;padding-right:12px}.entireLeft .left_lay .left .common_node .node_name{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:12px;width:100%;border-radius:25px;padding:2px 14px;position:relative;max-width:100%}.entireLeft .left_lay .left .common_node .node_name.acitve{background:rgba(228,100,64,.9411764705882353)}.entireLeft .left_lay .left .common_node .node_name:hover{background:rgba(228,100,64,.9411764705882353);-webkit-transition:all .5s;transition:all .5s}.entireLeft .left_lay .left .common_node .common_delete{position:absolute;right:18px}.entireLeft .left_lay .resize-save{position:relative;top:0;right:2px;bottom:0;left:0;overflow-x:hidden;scrollbar-width:none;-ms-overflow-style:none}.entireLeft .left_lay .resize-save.hidden{width:50px!important}.ant-modal-content{padding:6px!important;background-color:#2e2e2e!important}.ant-modal-content .ant-modal-header{height:24px;padding:0;background-color:#2e2e2e!important;border:0!important}.ant-modal-content .ant-modal-header .ant-modal-title{height:100%;font-size:16px;font-weight:200;color:#fff}.ant-modal-content .ant-modal-body{padding:12px}.ant-modal-content .ant-modal-body .css-dev-only-do-not-override-htwhyh{margin:0!important}.ant-modal-content .ant-modal-body .ant-form-item-required{color:#fff}.ant-modal-content .ant-modal-footer{padding:6px!important;border-top:0!important}.ant-modal-content input{background:rgba(0,0,0,.7098039215686275);border:.2px solid #fff;color:#fff}.ant-modal-content .ant-form-item-required{font-size:14px!important;font-weight:100!important}.resizerHandle{margin-top:0;-webkit-transition:all .5s;transition:all .5s;width:5px;z-index:10;height:calc(100vh - 45px)!important;bottom:0!important}.resizerHandle.resizing,.resizerHandle:hover{background-color:rgba(228,100,64,.9411764705882353)!important;width:8px;opacity:.8}";
styleInject(css_248z$2);

var getSliderItem = function getSliderItem(key) {
  var arr = [{
    key: 'mushroom',
    inLine: /*#__PURE__*/React__default["default"].createElement("svg", {
      t: "1682564309222",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4396"
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M928 288V224h32v64h-32z m32-64h-64V192h64v32z m-32-32h-64V160h64v32z m-32-32h-64V128h64v32z m-32-32h-96V96h96v32z m-32-32h-96V64h96v32z m128 416v32h-32v-32h32z m0 32V256h32v288h-32z m64-224v224h-32v-224h32zM672 1024H320v-32h352v32z m-352-64v-32h32v32h-32z m0 0h352v32H320v-32z m384-32v96h-32v-96h32z m64-128v160h-32v-160h32z m-64 192v-288h32v288h-32z m-64-288v-96h32v96h-32z m32 128v-224h32v224h-32z m-64-256h352v32H608v-32z m384 0H608v-32h384v32z m-640 160v-128h32v128h-32z m-96 224v-160h32v160H256z m32 32v-288h32v288H288z m32-160v-224h32v224h-32z m-256-256h352v32H64v-32z m544-32h-192v-32h192v32z m-192 32H64v-32h352v32zM32 320v224H0v-224h32z m0 256V256h32v320H32z m32-256V256h32v64H64z m0-96h64v32H64V224z m0-32h64v32H64V192z m32-32h64v32H96V160z m32-32h64v32H128V128z m32-32h64v32H160V96z m32-32h96v32H192V64z m576 0H256V32h512v32z m-64-32H320V0h384v32z",
      fill: "#020200",
      "p-id": "4397"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M768 512h160v32h-160v-32z m192 0h-192v-32h192v32z m-192-64h192v32h-192v-32z m192 0h-192v-32h192v32z m-160-64h160v32h-160v-32z m128 0h-96v-32h96v32z m-64-128h-128V224h128v32z m-160-64h160v32h-160V192z m128 0h-128V160h128v32z m-32-32h-128V128h128v32z m-64-32h-64V96h64v32zM320 96h32v32h-32V96z m32 64H256V128h96v32zM288 256H160V224h128v32zM160 192h160v32H160V192z m192 0H192V160h160v32z m-128 288v-32h32v32H224z m0-96v96H192v-96h32z m-64 96v-128h32v128H160z m0-128v128H128v-128h32z m-64 128v-128h32v128H96z m0 0h160v32H96v-32z m352-96h128v32h-128v-32z m160 0h-192v-32h192v32z m-192-64h192v32h-192v-32z m192 0h-192V288h192v32z m-224-64h224v32h-224V256z m224 0h-192V224h192v32z m-64-32h-96V192h96v32z",
      fill: "#F799BE",
      "p-id": "4398"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M736 544v-128h32v128h-32z m32-160h32v32h-32v-32z m32-32h32v32h-32v-32z m32-32h96v32h-96v-32z m96 32h32v32h-32v-32zM160 224v32H128V224h32z m64 192h32v32H224v-32z m32 128H96v-32h160v32z m-192-32v-160h32v160H64zM224 128h32v32H224V128z m32-32h64v32H256V96z m448 64v32h-32V160h32z m-160 32h32v32h-32V192z m96 64v128h-32V256h32z m-32 128v32h-32v-32h32z m-32 64h-128v-32h128v32z m-160-32v-32h32v32h-32z m-32-32V288h32v96h-32z",
      fill: "#F38CAA",
      "p-id": "4399"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M640 256h288v32h-288V256z m288 64h-288V288h288v32z m-288 0h192v32h-192v-32z m160 64h-160v-32h160v32z m-192 0h160v32h-160v-32z m128 64h-160v-32h160v32z m0 96h-128v-32h128v32z m-320 0H256v-32h160v32z m-160-64h480v32H256v-32z m480 0H256v-32h480v32z m-288-32H256v-32h192v32z m-224-64h192v32H224v-32z m160 0H192v-32h192v32z m0-32H96v-32h288v32zM128 288h256v32H128V288z m256 0H128V256h256v32zM288 224h128v32H288V224z m320 0h128v32h-128V224z m96 0h-128V192h128v32z m-256 0h-128V192h128v32z m-96-64h320v32H352V160z m320 0H352V128h320v32zM352 96h320v32H352V96z m320 0h-288V64h288v32z",
      fill: "#EB3818",
      "p-id": "4400"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M960 288v64h-32V288h32z",
      fill: "#4B1F16",
      "p-id": "4401"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M64 352v-32h32v32H64z m32-32V256h32v64H96z m32-96V192h32v32H128z m32-32V160h32v32H160z m32-32V128h32v32H192z m672 96V192h32v64h-32z m-32-64V160h32v32h-32z m-32-32V128h32v32h-32z m-128-64V64h32v32h-32z m64 32V96h32v32h-32zM384 96h-64V64h64v32z",
      fill: "#774D4F",
      "p-id": "4402"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M64 544v-32h32v32H64z m832-288V224h32v32h-32z m-192-160V64h32v32h-32zM224 128V96h32v32H224z m64-32V64h32v32H288z",
      fill: "#2A2424",
      "p-id": "4403"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M704 832v96h-32v-96h32z m-64 128v-256h32v256h-32z m0-352v352h-32V608h32z m-64 352V544h32v416h-32z m0-416v416h-32V544h32z m-64 416V544h32v416h-32z m0-416v416h-32V544h32z m-64 416V544h32v416h-32z m0-416v416h-32V544h32z m-64 416V608h32v352h-32z m0-224v224h-32v-224h32z m-64 192v-96h32v96h-32z",
      fill: "#F7D7C4",
      "p-id": "4404"
    }))
  }, {
    key: 'clover',
    inLine: /*#__PURE__*/React__default["default"].createElement("svg", {
      t: "1682565029215",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "1335"
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M672 672v-32h32v32h-32z m-32 0v-64h32v64h-32z m-32-32v-64h32v64h-32z m64 32h96v32h-96v-32z m32 32h64v32h-64v-32z m256 0v32h-32v-32h32z m-32 96h-160v-32h160v32z m32-32h-224v-32h224v32z m0-448h-32V288h32v32z m-32-64h-128V224h128v32z m32 32h-160V256h160v32z m0 192v64h-32v-64h32z m64-160v160h-32v-160h32z m0 224v160h-32v-160h32z m-64 192V288h32v448h-32z m-448 192v-32h32v32h-32z m-32 0v-64h32v64h-32z m0 0h96v32h-96v-32z m96 64h96v32h-96v-32z m96 0h-160v-32h160v32z m0 32v-160h32v160h-32z m32-32v-128h32v128h-32z m-64-96v-64h32v64h-32z m-32-32v-64h32v64h-32z m-64-64v-192h32v192h-32z m32 64v-288h32v288h-32z m-288-160v32H256v-32h32z m32-32v64H288v-64h32z m32-32v64h-32v-64h32z m32-32v64h-32v-64h32z m32-32v64h-32v-64h32z m32 320v-288h32v288h-32z m-32-64v-256h32v256h-32z m-160-32H96v-32h160v32z m32-32H96v-32h192v32z m-224 0v-64h32v64H64zM96 288v32H64V288h32z m-32 256v-64h32v64H64z m-64 160v-160h32v160H0z m0-224v-160h32v160H0z m32 256V288h32v448H32z m576-320v-64h32v64h-32z m64-96v96h-32v-96h32z m32-32v96h-32V288h32z m0 64V256h32v96h-32z m64-64V96h32v192h-32z m-32 32V96h32v224h-32z m-352 96v-64h32v64h-32z m-32 0v-96h32v96h-32z m-32-32V288h32v96h-32z m-32-32V256h32v96H288zM224 288H64V256h160v32z m0-32H96V224h128v32z m0 32V96h32v192H224z m32 32V96h32v224H256z m512-224h-64V64h64v32z m-224 0h-64V64h64v32z m-224 0H256V64h64v32z m416-32H288V32h448v32z m-32-32h-160V0h160v32z m-224 0h-160V0h160v32z",
      fill: "#000200",
      "p-id": "1336"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M608 512h256v32h-256v-32z m256 0h-256v-32h256v32z m-448 32H160v-32h256v32z m-256-64h256v32H160v-32z m352-64V160h32v256h-32z m-32 0V160h32v256h-32z",
      fill: "#75D573",
      "p-id": "1337"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M640 960v-32h32v32h-32z m-32 0v-64h32v64h-32z m-32-32v-64h32v64h-32z m-32-32v-64h32v64h-32zM160 288h64v32H160V288z m96 64H160v-32h96v32z m-96 0h128v32H160v-32z m160 64H160v-32h160v32z m-160 0h192v32H160v-32z m256 64H160v-32h256v32zM64 448v-96h32v96H64z m64-128v160H96v-160h32z m-32 288v64H64v-64h32z m0 96v-160h32v160H96z m576-128h288v32h-288v-32z m288 64h-256v-32h256v32z m-224 0h224v32h-224v-32z m192 64h-160v-32h160v32z m-128 0h96v32h-96v-32z m96-384h-64V288h64v32z m-128 0h160v32h-160v-32z m192 64h-224v-32h224v32z m-256 0h256v32h-256v-32z m256 64h-288v-32h288v32zM320 160v64H288V160h32z m0 96V96h32v160h-32z m64-160v192h-32V96h32z m0 224V64h32v256h-32z m160-160h-64V128h64v32z m160 64V128h32v96h-32z m0-128v160h-32V96h32z m-64 192V64h32v224h-32z m0-224v256h-32V64h32z m-64 384v-32h32v32h-32z m0-96V96h32v256h-32z m0-256v352h-32V96h32z m288 448v-64h32v64h-32z m-320-32h64v32h-64v-32z m64 0h-64v-32h64v32z m-64-64h384v32H544v-32z m-128 96v-128h32v128h-32z m0-192V64h32v288h-32z m64-256v448h-32V96h32z m32 320v384h-32V416h32z m0 448V416h32v448h-32z m416-288H352v-32h576v32z m-608 32v-64h32v64h-32z m0-64v96H288v-96h32z m-64 128v-128h32v128H256z m0-128v160H224v-160h32z m-64 192v-192h32v192H192z m0-192v192H160v-192h32z m-64 192V288h32v448H128z",
      fill: "#1AA315",
      "p-id": "1338"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M64 352v-32h32v32H64z m32-32V288h32v32H96z m0 128v32H64v-32h32z m32 32v64H96v-64h32z m-64 96v-32h32v32H64z m0 128v-32h32v32H64z m32 32v-32h32v32H96z m128 0v-32h32v32H224z m32-32v-32h32v32H256z m32-32v-32h32v32H288z m32-32v-32h32v32h-32z m32-32v-32h32v32h-32z m128 256v-64h32v64h-32z m32 32v-32h32v32h-32z m32 32v-32h32v32h-32z m32 32v-32h32v32h-32z m64-32v-32h32v32h-32z m-32-32v-32h32v32h-32z m-64-64v-32h32v32h-32z m-96-224v-32h32v32h-32z m96 0v-32h32v32h-32z m96 0v-32h32v32h-32z m32 32v-32h32v32h-32z m32 32v-32h32v32h-32z m224 32v-32h32v32h-32z m-32 32v-32h32v32h-32z m-128 0v-32h32v32h-32z m160-160v-32h32v32h-32z m-32-32v-64h32v64h-32z m32-64v-32h32v32h-32z m-32-160V288h32v32h-32z m32 32v-32h32v32h-32z m-256-256V64h32v32h-32z m32 32V96h32v32h-32z m64 192V288h32v32h-32z m-32 32v-32h32v32h-32z m-32 32v-32h32v32h-32z m-32 32v-32h32v32h-32z m-64 32v-32h32v32h-32z m-32-32v-64h32v64h-32z m32-64v-32h32v32h-32z m32-32V288h32v32h-32z m32-32V256h32v32h-32z m32-32V224h32v32h-32zM224 320V288h32v32H224z m32 32v-32h32v32H256z m32 32v-32h32v32H288z m32 32v-32h32v32h-32z m32 32v-32h32v32h-32z m64-32v-64h32v64h-32z m-32-64v-32h32v32h-32z m-32-32V288h32v32h-32z m-32-32V256h32v32h-32z m0-32H288V224h32v32z m256-160h-32V64h32v32z m-32 32h-64V96h64v32z m-64-32h-32V64h32v32z m-160 32H288V96h32v32z m32-32h-32V64h32v32z",
      fill: "#0F510A",
      "p-id": "1339"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M800 320V288h32v32h-32z m-224-224V64h32v32h-32z m-224 0V64h32v32h-32zM288 160V128h32v32H288z m352 288v-32h32v32h-32z m-256 0v-32h32v32h-32zM64 608v-32h32v32H64z",
      fill: "#148614",
      "p-id": "1340"
    }))
  }];
  return arr.find(function (d) {
    return d.key === key;
  }) || {};
};

var sliderCategory = [{
  "default": true,
  "icon-name": 'mushroom',
  name: 'test根目录',
  'icon-prefix': 'iconfont' // "path": './category/left-category.js'

}, {
  "default": false,
  "icon-name": 'clover',
  name: 'test根目录',
  'icon-prefix': 'iconfont' // "path": './category/two-category.js'

} // {
//     "default": false,
//     name: 'test3',
//     "icon-name": 'icon-tiaopi'
// },
// {
//     "default": false,
//     name: 'test4',
//     "icon-name": 'icon-fanu'
// },
// {
//     "default": false,
//     name: 'test5',
//     "icon-name": 'icon-kun'
// },
// {
//     "default": false,
//     name: 'test6',
//     "icon-name": 'icon-leiku'
// },
// {
//     "default": false,
//     name: 'test7',
//     "icon-name": 'icon-kaixin'
// },
];
sliderCategory.forEach(function (val) {
  val['icon-prefix'] = 'iconfont';
});

var CreateCategory = function CreateCategory(props, ref) {
  var val = props.val,
      setTreeCategory = props.setTreeCategory,
      treeCategory = props.treeCategory,
      close = props.close,
      isRoot = props.isRoot;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray__default["default"](_Form$useForm, 1),
      form = _Form$useForm2[0];

  React.useImperativeHandle(ref, function () {
    return {
      onOk: function onOk() {
        var _info$name;

        var info = form.getFieldsValue();

        if (info.name == '') {
          info.name = void 0;
        }

        var data = {
          "name": (_info$name = info.name) !== null && _info$name !== void 0 ? _info$name : '新目录',
          "id": isRoot ? treeCategory.length + 1 + '-d' : "".concat(val.id, "-d-").concat(val.children.length),
          "parent": isRoot ? '0' : val.id,
          "isRoot": false,
          "isOpen": true,
          "isDir": true,
          "treeType": isRoot ? 'root' : val.treeType,
          "level": isRoot ? 1 : val.level + 1,
          "children": []
        };

        if (val && val.level + 1 > 4) {
          antd.message.warning('最大创建3层子目录');
          return;
        }

        val ? val.children.push(data) : treeCategory.push(data);
        setTreeCategory(function () {
          return _cloneDeep__default["default"](treeCategory);
        });
        close();
      }
    };
  });
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(antd.Form, {
    name: "basic",
    autoComplete: "off",
    form: form,
    wrapperCol: {
      span: 16
    }
  }, /*#__PURE__*/React__default["default"].createElement(antd.Form.Item, {
    label: "\u76EE\u5F55\u540D\u79F0",
    name: "name"
  }, /*#__PURE__*/React__default["default"].createElement(antd.Input, null))));
};

var CreateCategory$1 = /*#__PURE__*/React.forwardRef(CreateCategory);

var CreateNode = function CreateNode(props, ref) {
  var val = props.val,
      setTreeCategory = props.setTreeCategory,
      treeCategory = props.treeCategory,
      close = props.close,
      isRoot = props.isRoot;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray__default["default"](_Form$useForm, 1),
      form = _Form$useForm2[0];

  React.useImperativeHandle(ref, function () {
    return {
      onOk: function onOk() {
        var _info$name;

        var info = form.getFieldsValue();

        if (val && val.children.some(function (d) {
          return d.name === 'No Message';
        })) {
          var idx = val.children.findIndex(function (d) {
            return d.name === 'No Message';
          });
          val.children.splice(idx, 1);
        }

        if (info.name == '') {
          info.name = void 0;
        }

        var data = {
          "name": (_info$name = info.name) !== null && _info$name !== void 0 ? _info$name : '新节点',
          "id": isRoot ? treeCategory.length + 1 : val.id + '-' + val.children.length,
          "parent": isRoot ? '0' : val.id,
          "isRoot": false,
          "isOpen": true,
          "onDelete": false,
          "isDir": false,
          "treeType": isRoot ? 'root' : val.treeType,
          "level": isRoot ? 1 : val.level,
          "isActive": false
        };
        val ? val.children.unshift(data) : treeCategory.push(data);
        setTreeCategory(function () {
          return _cloneDeep__default["default"](treeCategory);
        });
        close();
      }
    };
  });
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(antd.Form, {
    name: "basic",
    autoComplete: "off",
    form: form,
    wrapperCol: {
      span: 16
    }
  }, /*#__PURE__*/React__default["default"].createElement(antd.Form.Item, {
    label: "\u8282\u70B9\u540D\u79F0",
    name: "name",
    rules: [{
      required: true,
      message: 'Please input your name!'
    }]
  }, /*#__PURE__*/React__default["default"].createElement(antd.Input, null))));
};

var CreateNode$1 = /*#__PURE__*/React.forwardRef(CreateNode);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var useToken = antd.theme.useToken;

var sendPostMessage$1 = function sendPostMessage(message) {
  window.postMessage(message);
};

var Left = function Left(props) {
  var _props$currentPath5;

  var isPhone = props.isPhone,
      ctrlMenuShow = props.ctrlMenuShow,
      showPhoneMenu = props.showPhoneMenu;
  var sideRef = React__default["default"].useRef({});
  var nodeRef = React__default["default"].useRef({});

  var _useState = React.useState(''),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      currentNodeId = _useState2[0],
      setCurrentNodeId = _useState2[1];

  var commonNodeRef = React__default["default"].useRef({});

  var _useState3 = React.useState(240),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      dragWidth = _useState4[0],
      setDragWidth = _useState4[1];

  var _useState5 = React.useState(240),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      originWidth = _useState6[0],
      setOriginWidth = _useState6[1];

  var _useState7 = React.useState(),
      _useState8 = _slicedToArray__default["default"](_useState7, 2),
      treeCategory = _useState8[0],
      setTreeCategory = _useState8[1];

  var _useState9 = React.useState(),
      _useState10 = _slicedToArray__default["default"](_useState9, 2),
      activeSlider = _useState10[0],
      setActiveSlider = _useState10[1];

  var _useState11 = React.useState(false),
      _useState12 = _slicedToArray__default["default"](_useState11, 2),
      resizing = _useState12[0],
      setResizing = _useState12[1];

  var _useState13 = React.useState(false),
      _useState14 = _slicedToArray__default["default"](_useState13, 2),
      load = _useState14[0],
      setLoad = _useState14[1];

  var _useState15 = React.useState(true),
      _useState16 = _slicedToArray__default["default"](_useState15, 2),
      showLeft = _useState16[0],
      setShowLeft = _useState16[1];

  var _useState17 = React.useState(),
      _useState18 = _slicedToArray__default["default"](_useState17, 2),
      curretnActiveKey = _useState18[0],
      setCurrentActiveKey = _useState18[1];

  var getLevelofPadding = function getLevelofPadding(level) {
    return level * 12 + 'px';
  };

  props.state;
      props.currentPath;
      props.sliderData;
  var currentData = React.useMemo(function () {
    var _ref, _ref$split, _find;

    var currentPath = (_ref = props.currentPath || '') === null || _ref === void 0 ? void 0 : (_ref$split = _ref.split('\/')) === null || _ref$split === void 0 ? void 0 : _ref$split.filter(Boolean)[1];
    var currentTree = (_find = (props.state || []).find(function (d) {
      return d.mark == "test_".concat(currentPath);
    })) === null || _find === void 0 ? void 0 : _find.data;
    return currentTree;
  }, []);
  React.useEffect(function () {
    var _props$currentPath2, _props$currentPath3, _props$state2;

    var _URL$parse = URL__default["default"].parse(window.location.href, true),
        pathname = _URL$parse.pathname,
        query = _URL$parse.query;

    pathname.split('/').filter(Boolean);
    var node = query.dpath && traceTreeAndFindNode(treeCategory || [], query.dpath);
    node && setCurrentNodeId(node.id);
    node && sendPostMessage$1({
      initNode: node
    });

    var resolveTreeNode = function resolveTreeNode(_ref2) {
      var data = _ref2.data;
      var beenCleared = data.beenCleared;

      if (beenCleared) {
        setCurrentNodeId(beenCleared);
      }
    };

    var _path;

    var _url;

    if (!localStorage.getItem('themeType')) {
      localStorage.setItem('themeType', 'default');
    }

    var currentTheme = localStorage.getItem('themeType'); // query.theme = currentTheme

    localStorage.setItem('activeSlider', (_props$currentPath2 = props.currentPath) === null || _props$currentPath2 === void 0 ? void 0 : _props$currentPath2.split('\/').filter(Boolean)[1]);
    var item = localStorage.getItem('activeSlider');
    var itemQuery = localStorage.getItem('activeKey');
    setCurrentActiveKey(itemQuery);
    var queryPath = itemQuery ? "&dpath=".concat(itemQuery) : '';

    if (item) {
      _path = "/dqp/".concat(item, "?theme=").concat(currentTheme).concat(queryPath);
      _url = "/test/".concat(item);
    } else {
      _path = "/dqp/".concat(sliderCategory.find(function (d) {
        return d.default;
      })['icon-name'], "?theme=").concat(currentTheme).concat(queryPath);
      _url = "/test/".concat(sliderCategory.find(function (d) {
        return d.default;
      })['icon-name']);
    }

    var currentPath = (_props$currentPath3 = props.currentPath) === null || _props$currentPath3 === void 0 ? void 0 : _props$currentPath3.split('\/').filter(Boolean)[1];
    var currentTree = (_props$state2 = props.state) === null || _props$state2 === void 0 ? void 0 : _props$state2.find(function (d) {
      return d.mark == "test_".concat(currentPath);
    }).data;
    setTreeCategory(function () {
      return _cloneDeep__default["default"](currentTree);
    }); // setTreeCategory(() => _.cloneDeep(_.get(props, 'state', []).find(d => d.mark === `test_${props.currentPath.split('/').filter(Boolean)[1]}`)?.data))
    // setLoad(true)

    instance__default["default"].get(_url).then(function (data_info) {
      var data = data_info.data;
      setLoad(false);
      setTreeCategory(function () {
        return _cloneDeep__default["default"](data);
      });
    });
    leftRef.current.state.width = '290px';
    history.pushState(null, null, _path);
    setActiveSlider(item);
    window.addEventListener('message', resolveTreeNode, false);

    var hiddenLeft = function hiddenLeft(e) {
      if (isPhone && e.pageY > 45 && e.pageX > 290 && e.target.className !== 'resize-save') {
        ctrlMenuShow(false);
      }
    };

    window.addEventListener('click', function (e) {
      return hiddenLeft(e);
    }, false);
    return function () {
      window.removeEventListener('message', resolveTreeNode, false);
      window.removeEventListener('click', function (e) {
        return hiddenLeft(e);
      }, false);
    };
  }, []);

  var traceTreeAndFindNode = function traceTreeAndFindNode(tree, id) {
    var _iterator = _createForOfIteratorHelper(tree),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;

        if (String(i.id) === String(id)) {
          return i;
        }

        if (i.children) {
          var currentNode = traceTreeAndFindNode(i.children, id);

          if (currentNode) {
            return currentNode;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var traceTree = function traceTree(treeCategory, parentId, id) {
    var _iterator2 = _createForOfIteratorHelper(treeCategory),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var i = _step2.value;

        if (i.children) {
          if (i.id === parentId && i.children.some(function (d) {
            return d.id === id;
          })) {
            var idx = i.children.findIndex(function (d) {
              return d.id === id;
            });
            i.children.splice(idx, 1);

            if (i.children.length === 0 || i.children.every(function (d) {
              return d.isDir;
            })) {
              i.children.unshift({
                'name': 'No Message',
                "level": i.level
              });
            }

            break;
          }

          traceTree(i.children, parentId, id);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  var _useState19 = React.useState(false),
      _useState20 = _slicedToArray__default["default"](_useState19, 2),
      isMovedInNodeTitle = _useState20[0],
      setIsMovedInNodeTitle = _useState20[1];

  var _useState21 = React.useState(void 0),
      _useState22 = _slicedToArray__default["default"](_useState21, 2),
      activeNodeTitleId = _useState22[0],
      setActiveTitleId = _useState22[1];

  var _useToken = useToken(),
      token = _useToken.token;

  var contentStyle = {
    backgroundColor: '#333',
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
    color: '#fff',
    padding: '6px'
  };

  var renderTree = function renderTree(tree) {
    return tree.map(function (val) {
      if (val.children) {
        if (val.children.length === 0) {
          val.children.push({
            'name': 'No Message',
            "level": val.level + 1
          });
        }

        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: 'single_node',
          key: activeSlider + val.id || Math.random(),
          id: val.id
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          id: val.id,
          ref: function ref(f) {
            return nodeRef.current[val.id] = f;
          },
          className: "root_node",
          style: {
            paddingLeft: getLevelofPadding(val.level)
          },
          onMouseEnter: function onMouseEnter(e) {
            if (e.target.className === 'root_node') {
              setActiveTitleId(e.target.id);
              setIsMovedInNodeTitle(true);
            }
          },
          onMouseLeave: function onMouseLeave() {
            setIsMovedInNodeTitle(false);
            setActiveTitleId(void 0);
          },
          onClick: function onClick(e) {
            e.stopPropagation();
            val.isOpen = !val.isOpen;
            setTreeCategory(function () {
              return _cloneDeep__default["default"](treeCategory);
            });
          }
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "node_title"
        }, /*#__PURE__*/React__default["default"].createElement("div", null, val.isOpen ? /*#__PURE__*/React__default["default"].createElement(icons.CaretDownOutlined, null) : /*#__PURE__*/React__default["default"].createElement(icons.CaretRightOutlined, null), "\xA0\xA0", val.name), isMovedInNodeTitle && activeNodeTitleId === val.id && /*#__PURE__*/React__default["default"].createElement(antd.Dropdown, {
          placement: "bottomRight",
          trigger: ['click'],
          dropdownRender: function dropdownRender() {
            return /*#__PURE__*/React__default["default"].createElement("div", {
              className: "dropmenu",
              style: contentStyle
            }, /*#__PURE__*/React__default["default"].createElement("div", {
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick(e) {
                e.stopPropagation();
                create({
                  val: val,
                  treeCategory: treeCategory,
                  setTreeCategory: setTreeCategory,
                  type: 'category'
                });
              }
            }, /*#__PURE__*/React__default["default"].createElement(icons.FolderOutlined, null), "\xA0\u65B0\u5EFA\u76EE\u5F55"), /*#__PURE__*/React__default["default"].createElement("div", {
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick(e) {
                e.stopPropagation();
                create({
                  val: val,
                  treeCategory: treeCategory,
                  setTreeCategory: setTreeCategory,
                  type: 'node'
                });
              }
            }, /*#__PURE__*/React__default["default"].createElement(icons.FileOutlined, null), "\xA0\u65B0\u5EFA\u8282\u70B9"));
          }
        }, /*#__PURE__*/React__default["default"].createElement(icons.SettingFilled, {
          onClick: function onClick(e) {
            return [e.stopPropagation()];
          }
        })))), val.isOpen && renderTree(val.children));
      } else {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          style: {
            paddingLeft: getLevelofPadding(val.level)
          },
          className: 'common_node',
          ref: function ref(f) {
            return commonNodeRef.current[val.id] = f;
          },
          key: activeSlider + val.id || Math.random(),
          onClick: function onClick(e) {
            e.stopPropagation();

            if (val.name === 'No Message') {
              return;
            }

            val.isActive = true;

            if (!localStorage.getItem('themeType')) {
              localStorage.setItem('themeType', 'default');
            }

            var currentTheme = localStorage.getItem('themeType');
            var path = "".concat(window.location.pathname, "?theme=").concat(currentTheme, "&dpath=").concat(val.id);
            history.pushState(null, null, path);
            sendPostMessage$1({
              treeNodeInfo: val
            });
            setCurrentNodeId(function () {
              return traceTreeAndFindNode(treeCategory || [], val.id).id;
            });
            setTreeCategory(function () {
              return _cloneDeep__default["default"](treeCategory);
            });

            if (isPhone) {
              ctrlMenuShow(false);
              localStorage.removeItem('tabs');
              var itemQuery = localStorage.getItem('activeKey');
              setCurrentActiveKey(itemQuery);
            }
          },
          onContextMenu: function onContextMenu(e) {
            e.preventDefault();
            e.stopPropagation();

            if (val.name !== 'No Message') {
              val.onDelete = !val.onDelete;
              setTreeCategory(function () {
                return _cloneDeep__default["default"](treeCategory);
              });
            }
          }
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: (props.ssr && JSON.parse(props.urlQuery).dpath || currentNodeId || curretnActiveKey) === val.id ? 'node_name acitve' : 'node_name'
        }, val.name), /*#__PURE__*/React__default["default"].createElement("div", {
          className: "common_delete"
        }, val.onDelete && /*#__PURE__*/React__default["default"].createElement(icons.DeleteOutlined, {
          onClick: function onClick(e) {
            e.stopPropagation();
            traceTree(treeCategory, val.parent, val.id);
            setTreeCategory(function () {
              return _cloneDeep__default["default"](treeCategory);
            });
          }
        })));
      }
    });
  };

  var handleClasses = {
    right: 'resizerHandle'
  };
  var handleClassesResizing = {
    right: 'resizerHandle resizing'
  };

  var selectSliderCategory = function selectSliderCategory(info) {
    var currentTheme = localStorage.getItem('themeType');

    var _path = "/dqp/".concat(info['icon-name'], "?theme=").concat(currentTheme);

    localStorage.setItem('activeSlider', info['icon-name']);
    history.pushState(null, null, _path);
    setActiveSlider(info['icon-name']);

    var _url = "/test/".concat(info['icon-name']);

    setLoad(true);
    instance__default["default"].get(_url).then(function (data_info) {
      var data = data_info.data;
      setLoad(false);
      setTreeCategory(function () {
        return _cloneDeep__default["default"](data || []);
      });
    });
  };

  var _useState23 = React.useState(210),
      _useState24 = _slicedToArray__default["default"](_useState23, 2),
      minWidth = _useState24[0],
      setMinWidth = _useState24[1];

  var showCategory = function showCategory() {
    setShowLeft(function (pre) {
      pre = !pre;

      if (!pre) {
        props.getContent(0);
        leftRef.current.state.width = '50px';
      } else {
        props.getContent(240);
        leftRef.current.state.width = '290px';
      }

      localStorage.setItem('leftOpen', pre);
      setMinWidth(!pre ? 50 : 210);
      setDragWidth(!pre ? 0 : 240);
      setOriginWidth(!pre ? 0 : 240);
      return pre;
    });
  };

  var leftRef = React.useRef();
  React.useEffect(function () {
    resizing && props.getContent(dragWidth);
  }, [dragWidth, resizing]);
  var isPhoneStyle = React__default["default"].useMemo(function () {
    if (isPhone) {
      var info = {
        position: 'absolute',
        zIndex: 10,
        background: '#000',
        top: '45px',
        left: 0,
        transition: 'all 0.3s'
      };

      if (showPhoneMenu) {
        info.transform = 'translateX(0px)';
      } else {
        info.transform = 'translateX(-300px)';
      }

      return info;
    }
  }, [isPhone, showPhoneMenu]);
  return /*#__PURE__*/React__default["default"].createElement(reResizable.Resizable, {
    ref: leftRef,
    style: isPhoneStyle,
    className: classnames__default["default"]('resize-save'),
    axis: "x",
    enable: {
      right: isPhone ? false : showLeft ? true : false
    },
    minWidth: minWidth,
    maxWidth: 390,
    onResizeStop: function onResizeStop(e, dir, elm, delta) {
      setOriginWidth(function (_originWidth) {
        return _originWidth + delta.width;
      }); // "".substring

      setResizing(false);
    },
    handleWrapperStyle: {
      bottom: '0px !important',
      height: '100%',
      position: 'absolute',
      right: 0
    },
    onResizeStart: function onResizeStart() {
      return setResizing(true);
    },
    handleClasses: resizing ? handleClassesResizing : handleClasses,
    onResize: function onResize(event, direction, refToElement, delta) {
      setDragWidth(originWidth + delta.width);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "entireLeft",
    style: {
      width: dragWidth + 50
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sliderLeft"
  }, (props.ssr ? props.sliderData : sliderCategory).map(function (val, idx) {
    var _props$currentPath4;

    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: idx,
      className: (props.ssr ? (_props$currentPath4 = props.currentPath) === null || _props$currentPath4 === void 0 ? void 0 : _props$currentPath4.split('\/').filter(Boolean)[1] : activeSlider) === val['icon-name'] ? 'sliderItem active' : 'sliderItem',
      onClick: function onClick() {
        if (!showLeft) {
          showCategory();
        }

        selectSliderCategory(val);
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        width: '20px'
      }
    }, getSliderItem(val['icon-name']).inLine));
  }), !isPhone && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "hidden_left",
    onClick: function onClick() {
      showCategory();
    }
  }, /*#__PURE__*/React__default["default"].createElement(icons.BarsOutlined, null))), /*#__PURE__*/React__default["default"].createElement(antd.Spin, {
    spinning: !props.ssr && load,
    size: "small"
  }, showLeft && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "left_lay"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "left_title",
    id: activeSlider,
    style: {
      width: dragWidth
    },
    onMouseEnter: function onMouseEnter(e) {
      if (e.target.className === 'left_title') {
        setActiveTitleId(e.target.id);
        setIsMovedInNodeTitle(true);
      }
    },
    onMouseLeave: function onMouseLeave() {
      setIsMovedInNodeTitle(false);
      setActiveTitleId(void 0);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "left_title_name"
  }, "Root \xA0 ", activeSlider || ((_props$currentPath5 = props.currentPath) === null || _props$currentPath5 === void 0 ? void 0 : _props$currentPath5.split('\/').filter(Boolean)[1]), isMovedInNodeTitle && activeSlider === activeNodeTitleId && /*#__PURE__*/React__default["default"].createElement(antd.Dropdown, {
    placement: "bottomRight",
    trigger: ['click'],
    dropdownRender: function dropdownRender() {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "dropmenu",
        style: contentStyle
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick(e) {
          e.stopPropagation();
          create({
            treeCategory: treeCategory,
            setTreeCategory: setTreeCategory,
            type: 'category',
            isRoot: true
          });
        }
      }, /*#__PURE__*/React__default["default"].createElement(icons.FolderOutlined, null), "\xA0\u65B0\u5EFA\u76EE\u5F55"));
    }
  }, /*#__PURE__*/React__default["default"].createElement(icons.SettingFilled, {
    onClick: function onClick(e) {
      return [e.stopPropagation()];
    }
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "left",
    ref: sideRef,
    style: {
      width: dragWidth
    }
  }, renderTree(treeCategory || currentData || []))))));
};

var NewModal = function NewModal(props) {
  props.val;
      props.setTreeCategory;
      props.treeCategory;
      var type = props.type,
      close = props.close;
  var ref = React.useRef();
  return /*#__PURE__*/React__default["default"].createElement(antd.Modal, {
    title: type === 'category' ? '新建目录' : '新建节点',
    open: true,
    closable: false,
    onCancel: close,
    footer: [/*#__PURE__*/React__default["default"].createElement(antd.Button, {
      size: "small",
      onClick: close
    }, "\u53D6\u6D88"), /*#__PURE__*/React__default["default"].createElement(antd.Button, {
      size: "small",
      type: "primary",
      onClick: function onClick() {
        return ref.current.onOk();
      }
    }, "\u786E\u5B9A")],
    maskClosable: true
  }, type === 'category' ? /*#__PURE__*/React__default["default"].createElement(CreateCategory$1, _extends__default["default"]({
    ref: ref
  }, props)) : /*#__PURE__*/React__default["default"].createElement(CreateNode$1, _extends__default["default"]({
    ref: ref
  }, props)));
};

var create = function create(options) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    var unmountResult = ReactDOM__default["default"].unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      setTimeout(function () {
        div.parentNode.removeChild(div);
      }, 300);
    }
  }

  ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(NewModal, _extends__default["default"]({}, options, {
    close: close
  })), div);
};

var css_248z$1 = ".tabs_lay{height:100%}@media screen and (max-width:900px){.tabs_lay .tempTab{height:calc(100vh - 45px)}}.tabs_lay .tempTab{width:100%;height:calc(100vh - 75px)}.tabs_lay .tempTab iframe{width:100%;height:100%;border:0}.tabs_lay .init_content{position:absolute;border-top:.1px solid hsla(0,0%,100%,.16862745098039217);width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;font-size:36px;font-weight:700;background:rgba(46,46,46,.23921568627450981);color:rgba(228,100,64,.9411764705882353)}@media screen and (max-width:600px){.tabs_lay .init_content pre{font-size:20px!important}}.tabs_lay .init_content pre{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:100%;padding:12px;font-size:14px;white-space:pre-line;overflow:hidden!important}.tabs_lay .ant-tabs-nav{margin:0!important;height:30px}.tabs_lay .ant-tabs-nav .ant-tabs-nav-operations .ant-tabs-nav-more{background:#fff;border-radius:18px 0 0 0}@media screen and (max-width:600px){.tabs_lay .ant-tabs-nav{display:none}.tabs_lay .ant-tabs-content-holder{height:calc(100vh - 45px)}}.tabs_lay .ant-tabs-nav-wrap{background:#2e2e2e;border-top:.1px solid hsla(0,0%,100%,.16862745098039217)}.tabs_lay .ant-tabs-nav-wrap .ant-tabs-nav-list .ant-tabs-tab .ant-tabs-tab-btn{color:#fff;font-size:12px;max-width:70%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.tabs_lay .ant-tabs-nav-wrap .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-with-remove{background:#000;border:0;width:150px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;margin-left:0!important;padding:0;margin:0;height:0;width:130px;border-bottom:25px solid #000;-webkit-transform:translateY(2px);transform:translateY(2px);background:transparent;position:relative;border-radius:10px 0 0 0;border-top-right-radius:100px}.tabs_lay .ant-tabs-nav-wrap .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-with-remove .ant-tabs-tab-btn{position:absolute;top:3px;left:7px}.tabs_lay .ant-tabs-nav-wrap .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-with-remove .ant-tabs-tab-remove{top:6px;position:absolute;right:10px;color:#fff}.tabs_lay .ant-tabs-nav-wrap .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-with-remove.ant-tabs-tab-active{border-bottom:25px solid rgba(228,100,64,.9411764705882353);border-top-right-radius:100px;-webkit-transform:translateY(2px);transform:translateY(2px)}.tabs_lay .ant-tabs-content-holder{height:calc(100vh - 75px);color:#fff}";
styleInject(css_248z$1);

var getItem = function getItem(key) {
  return window.localStorage.getItem(key);
};

var setItem = function setItem(key, data) {
  return window.localStorage.setItem(key, data);
};

var removeItem = function removeItem(key) {
  return window.localStorage.removeItem(key);
};

var local = {
  getItem: getItem,
  setItem: setItem,
  removeItem: removeItem
};

function loadComponent(_x, _x2) {
  return _loadComponent.apply(this, arguments);
}

function _loadComponent() {
  _loadComponent = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(scope, module) {
    var container, factory, Module;
    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __webpack_init_sharing__('default');

          case 2:
            container = window[scope];
            _context2.next = 5;
            return container.init(__webpack_share_scopes__.default);

          case 5:
            _context2.next = 7;
            return window[scope].get(module);

          case 7:
            factory = _context2.sent;
            Module = factory();
            return _context2.abrupt("return", Module);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadComponent.apply(this, arguments);
}

var urlCache = new Set();

var useDynamicScript = function useDynamicScript(url) {
  var _React$useState = React__default["default"].useState(false),
      _React$useState2 = _slicedToArray__default["default"](_React$useState, 2),
      ready = _React$useState2[0],
      setReady = _React$useState2[1];

  var _React$useState3 = React__default["default"].useState(false),
      _React$useState4 = _slicedToArray__default["default"](_React$useState3, 2),
      errorLoading = _React$useState4[0],
      setErrorLoading = _React$useState4[1];

  React__default["default"].useEffect(function () {
    if (!url) {
      setErrorLoading(true);
      return;
    }

    if (urlCache.has(url)) {
      setReady(true);
      setErrorLoading(false);
      return;
    }

    setReady(false);
    setErrorLoading(false);
    var element = document.createElement('script');
    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = function () {
      urlCache.add(url);
      setReady(true);
    };

    element.onerror = function () {
      setReady(false);
      setErrorLoading(true);
    };

    document.head.appendChild(element);
    return function () {
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url]);
  return {
    errorLoading: errorLoading,
    ready: ready
  };
};

var componentCache = new Map();
var useFederatedComponent = function useFederatedComponent(url, scope, module) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'react';
  var key = "".concat(url, "-").concat(scope, "-").concat(module);

  var _React$useState5 = React__default["default"].useState(null),
      _React$useState6 = _slicedToArray__default["default"](_React$useState5, 2),
      Component = _React$useState6[0],
      setComponent = _React$useState6[1];

  var _useDynamicScript = useDynamicScript(url),
      ready = _useDynamicScript.ready,
      errorLoading = _useDynamicScript.errorLoading;

  React__default["default"].useEffect(function () {
    if (Component) setComponent(null);
  }, [key]);
  React__default["default"].useEffect(function () {
    _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
      var Comp;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(ready && !Component)) {
                _context.next = 11;
                break;
              }

              if (!(type == 'react')) {
                _context.next = 5;
                break;
              }

              _context.t0 = /*#__PURE__*/React__default["default"].lazy(function () {
                return loadComponent(scope, module);
              });
              _context.next = 8;
              break;

            case 5:
              _context.next = 7;
              return loadComponent(scope, module);

            case 7:
              _context.t0 = _context.sent;

            case 8:
              Comp = _context.t0;
              componentCache.set(key, Comp);
              setComponent(Comp);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [Component, ready, key]);
  return {
    errorLoading: errorLoading,
    Component: Component
  };
};

var css_248z = "@media screen and (max-width:600px){.spin,.tb{height:calc(100vh - 45px)}}.tb{position:relative;z-index:2;background:#1a1919;color:rgba(228,100,64,.9411764705882353);font-size:24px;overflow:auto;-ms-scroll-chaining:none;overscroll-behavior:none}.tb,.tb .spin{width:100%;height:calc(100vh - 75px)}.tb .spin{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center}";
styleInject(css_248z);

var getStuffComponetn = function getStuffComponetn() {
  var com = [{
    url: "http://".concat(window.location.hostname, ":3003/remoteEntry.js"),
    scope: 'netfixClone',
    module: './netfixClone',
    type: 'react',
    treeType: "vicky1"
  }, {
    url: "http://".concat(window.location.hostname, ":3002/remoteEntry.js"),
    scope: 'vueClone',
    module: './App',
    treeType: "vicky2",
    type: 'vue'
  }, {
    url: "http://".concat(window.location.hostname, ":3001/remoteEntry.js"),
    scope: 'reactClone',
    module: './reactClone',
    type: 'react',
    treeType: "vicky3"
  }];
  return com;
};

var Custom = function Custom(props) {
  var isPhone = props.isPhone;

  var _useState = React.useState({}),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      _useState2$ = _useState2[0],
      url = _useState2$.url,
      scope = _useState2$.scope,
      module = _useState2$.module;
      _useState2$.treeType;
      var type = _useState2$.type,
      setNode = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      isVue = _useState4[0],
      setIsVue = _useState4[1];

  var _ref = React.useRef({});

  var Com = getStuffComponetn();
  React.useEffect(function () {
    var currentCom = Com.find(function (d) {
      return d.treeType === props.treeType;
    });

    if (!currentCom) {
      setNode({});
    } else {
      setNode(currentCom);
      setIsVue(currentCom.type === 'vue' ? true : false);
    }
  }, [props.id]);

  var _useFederatedComponen = useFederatedComponent(url, scope, module, type),
      Cc = _useFederatedComponen.Component,
      errorLoading = _useFederatedComponen.errorLoading;

  if (type === 'vue' && Cc) {
    _ref.current && Cc.mount(_ref.current[props.id], {
      props: props
    });
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tb",
    style: {
      height: isPhone ? 'calc(100vh - 45px)' : 'calc(100vh - 75px)'
    },
    ref: function ref(f) {
      return _ref.current[props.id] = f;
    }
  }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Suspense, {
    fallback: /*#__PURE__*/React__default["default"].createElement("div", {
      className: "spin"
    }, /*#__PURE__*/React__default["default"].createElement(antd.Spin, {
      size: "large"
    }))
  }, errorLoading ? /*#__PURE__*/React__default["default"].createElement("pre", {
    style: {
      padding: '12px'
    }
  }, "Error loading module \"".concat(module, "\" \n\n                            May be you add a mistake treetype node")) : Cc && !isVue && /*#__PURE__*/React__default["default"].createElement(Cc, props)));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var TabPane = antd.Tabs.TabPane;

var sendPostMessage = function sendPostMessage(message) {
  window.postMessage(message);
};

var ListenTabs = function ListenTabs(props) {
  props.isPhone;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      tabPaneList = _useState2[0],
      setTabPaneList = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      activeKey = _useState4[0],
      setActiveKey = _useState4[1];

  React.useEffect(function () {
    var _URL$parse = URL__default["default"].parse(window.location.href, true);
        _URL$parse.pathname;
        var _URL$parse$query = _URL$parse.query;

    _URL$parse$query = _URL$parse$query === void 0 ? {} : _URL$parse$query;
    var _URL$parse$query$dpat = _URL$parse$query.dpath,
        dpath = _URL$parse$query$dpat === void 0 ? '' : _URL$parse$query$dpat;

    var openKeyTab = function openKeyTab(data) {
      var localActiveKey = local.getItem('activeKey');
      var localTabsList = JSON.parse(local.getItem('tabs'));

      if (localTabsList && localTabsList.length > 0 && localActiveKey) {
        if (dpath) {
          setActiveKey(dpath);
        } // setActiveKey(() => localActiveKey)


        setTabPaneList(function (pre) {
          var data = _cloneDeep__default["default"](pre);

          var _list = localTabsList;
          data = _list;
          return data;
        });
      } else {
        var initNode = data.data.initNode;

        if (initNode) {
          setTabPaneList(function (pre) {
            var data = _cloneDeep__default["default"](pre);

            data.push(_objectSpread({}, initNode));
            return data;
          });
        }
      }

      window.removeEventListener('message', openKeyTab, false);
    };

    var getMessageForSetTab = function getMessageForSetTab(data) {
      var _data$data = data.data,
          treeNodeInfo = _data$data.treeNodeInfo,
          openTab = _data$data.openTab;

      if (treeNodeInfo) {
        setActiveKey(function () {
          return treeNodeInfo.id;
        });
        local.setItem('activeKey', treeNodeInfo.id);
        setTabPaneList(function (pre) {
          var data = _cloneDeep__default["default"](pre);

          if (data.some(function (d) {
            return d.id === treeNodeInfo.id;
          })) {
            return data;
          }

          data.push(_objectSpread({}, treeNodeInfo));
          local.setItem('tabs', JSON.stringify(data));
          return data;
        });
      }

      if (openTab) {
        var tempNode = {
          name: openTab.url,
          tabType: 'link',
          nodetype: 'tmp',
          url: openTab.url,
          id: "".concat(Math.random(), "-").concat(openTab.url)
        };
        setActiveKey(function () {
          return tempNode.id;
        });
        local.setItem('activeKey', tempNode.id);
        setTabPaneList(function (pre) {
          var data = _cloneDeep__default["default"](pre);

          data.push(_objectSpread({}, tempNode));
          var currentTheme = localStorage.getItem('themeType');
          var path = "".concat(window.location.pathname, "?theme=").concat(currentTheme, "&dpath=").concat(tempNode.id);
          history.pushState(null, null, path);
          local.setItem('tabs', JSON.stringify(data));
          return data;
        });
      }
    };

    window.addEventListener('message', openKeyTab, false);
    window.addEventListener('message', getMessageForSetTab, false);
    return function () {
      window.removeEventListener('message', getMessageForSetTab, false);
    };
  }, []); // const onChange = (key) => {
  //     setActiveKey(() => key)
  //     local.setItem('activeKey', key)
  // }

  var onTabClick = function onTabClick(key, e) {
    var currentTheme = localStorage.getItem('themeType');
    var path = "".concat(window.location.pathname, "?theme=").concat(currentTheme, "&dpath=").concat(key); // sendPostMessage({'selectSlider':{}})

    history.pushState(null, null, path);
    setActiveKey(function () {
      return key;
    });
    local.setItem('activeKey', key);
  };

  var onDelete = function onDelete(key) {
    setTabPaneList(function (pre) {
      setActiveKey(function () {
        return key;
      });

      var data = _cloneDeep__default["default"](pre);

      var idx = data.findIndex(function (d) {
        return d.id === key;
      });
      idx >= 0 && data.splice(idx, 1);
      local.setItem('tabs', JSON.stringify(data));
      var path;

      if (data.length === 0) {
        setActiveKey(function () {
          return 'null';
        });
        local.removeItem('activeKey');
        var currentTheme = localStorage.getItem('themeType');
        path = "".concat(window.location.pathname, "?theme=").concat(currentTheme);
        history.pushState(null, null, path);
      } else {
        if (activeKey !== key) {
          setActiveKey(function () {
            return activeKey;
          });
          local.setItem('activeKey', activeKey);
        } else {
          setActiveKey(function () {
            return data[data.length - 1].id;
          });
          local.setItem('activeKey', data[data.length - 1].id);

          var _currentTheme = localStorage.getItem('themeType');

          path = "".concat(window.location.pathname, "?theme=").concat(_currentTheme, "&dpath=").concat(data[data.length - 1].id);
          history.pushState(null, null, path);
        }
      }

      return data;
    });
  };

  React.useEffect(function () {
    sendPostMessage({
      beenCleared: activeKey
    });
  }, [activeKey]);

  var Ss = function Ss(props) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "init_content"
    }, /*#__PURE__*/React__default["default"].createElement("pre", null, "\u9879\u76EE\u8BF4\u660E: \n\n\xB7 \u57FA\u4E8EModuleFederation\u7684\u5FAE\u524D\u7AEF\u67B6\u6784(\u53EF\u517C\u5BB9vue)\n\n\xB7 \u5305\u542Breact\u670D\u52A1\u7AEF\u6E32\u67D3(\u81EA\u5B9A\u4E49ssr webpack plugin / less-loader / rollup plugin)\n\n\xB7 \u53EF\u914D\u7F6E\u5316\u591A\u670D\u52A1\u5730\u5740\u63A5\u53E3\u4EE3\u7406\n\n\xB7 \u76EE\u5F55\u9875\u4E3A\u539F\u751Fdom\u81EA\u5B9A\u4E49\u5F00\u53D1\u7EC4\u4EF6 \u53EF\u89C6\u5316\u6269\u5C55\n\n\xB7 \u81EA\u5B9A\u4E49less-loader\u652F\u6301\u6362\u80A4\n\n\xB7 pc\u7AEF\u6216\u624B\u673A\u6A2A\u653E\u652F\u6301tab\u9875\u529F\u80FD"));
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tabs_lay"
  }, tabPaneList.length > 0 ? /*#__PURE__*/React__default["default"].createElement(antd.Tabs, {
    hideAdd: true,
    type: "editable-card" // onChange={onChange}
    ,
    activeKey: activeKey,
    onEdit: onDelete,
    onTabClick: onTabClick
  }, (tabPaneList || []).map(function (val) {
    return /*#__PURE__*/React__default["default"].createElement(TabPane, {
      value: val.id,
      tab: /*#__PURE__*/React__default["default"].createElement(antd.Tooltip, {
        title: val.name,
        arrow: false
      }, val.name),
      className: "tabpane",
      key: val.id
    }, val.tabType === 'link' ? /*#__PURE__*/React__default["default"].createElement("div", {
      className: "tempTab"
    }, /*#__PURE__*/React__default["default"].createElement("iframe", {
      loading: "eager",
      src: val.url
    })) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Suspense, {
      fallback: "load"
    }, " ", /*#__PURE__*/React__default["default"].createElement(Custom, _extends__default["default"]({}, props, val)), "   "));
  })) : /*#__PURE__*/React__default["default"].createElement(Ss, props));
};

var ssrData$1 = [{
  mark: 'test_mushroom',
  url: "/test/mushroom"
}, {
  mark: 'test_clover',
  url: "/test/clover"
} // {
//     mark: 'test2_test',
//     url: `/test2/test`
// },
];

var App = function App(props) {
  var isPhone = props.isPhone;

  var _useState = React.useState(!isPhone ? 0 : 290),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      contentWidth = _useState2[0],
      setContentWidth = _useState2[1];

  var getContent = function getContent(res) {
    setContentWidth(res + 50);
  };

  React.useEffect(function () {
    setContentWidth(isPhone ? 0 : 290);
  }, [isPhone]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React__default["default"].createElement(Head, _extends__default["default"]({}, props, {
    getContent: getContent
  }), isPhone && /*#__PURE__*/React__default["default"].createElement(Left, _extends__default["default"]({}, props, {
    getContent: getContent,
    isPhone: isPhone
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "content-lay"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "left"
  }, /*#__PURE__*/React__default["default"].createElement(Left, _extends__default["default"]({}, props, {
    getContent: getContent
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "content",
    style: {
      width: "calc(100% - ".concat(contentWidth, "px)")
    }
  }, /*#__PURE__*/React__default["default"].createElement(ListenTabs, props))));
};

App.loadData = function () {
  return ssrData$1;
};

var ssrData = [{
  mark: 'login_title',
  url: '/test/loginTitle'
}];

var getMarkUrl = function getMarkUrl() {
  var _urlList$find$url, _urlList$find;

  var mark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var urlList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (_urlList$find$url = (_urlList$find = urlList.find(function (d) {
    return d.mark === mark;
  })) === null || _urlList$find === void 0 ? void 0 : _urlList$find.url) !== null && _urlList$find$url !== void 0 ? _urlList$find$url : '';
};

var Login = function Login(props) {
  React.useEffect(function () {
    instance__default["default"].get(getMarkUrl('login_title', ssrData)).then(function (data) {
      console.log(data);
    });
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", null, props['state'][0]['data']['msg']), /*#__PURE__*/React__default["default"].createElement(antd.Button, {
    size: "small",
    onClick: function onClick() {
      history.pushState(null, null, '/dqp');
      window.location.reload();
    }
  }, "\u767B\u5F55"));
};

Login.loadData = function () {
  return ssrData;
};

var routers = [{
  path: '/dqp',
  component: App,
  // loadData: App.loadData,
  key: 'dqp',
  routes: [{
    path: '/dqp/mushroom',
    component: App,
    exact: true,
    loadData: App.loadData,
    key: 'test1'
  }, {
    path: '/dqp/clover',
    component: App,
    exact: true,
    loadData: App.loadData,
    key: 'test2'
  }]
}, {
  path: '/login',
  component: Login,
  loadData: Login.loadData,
  key: 'login'
}];

var render = function render(req) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return server.renderToString( /*#__PURE__*/React__default["default"].createElement(reactRouterDom.StaticRouter, {
    location: req.path,
    context: context
  }, reactRouterConfig.renderRoutes(routers, context)));
};
var matchRouters = function matchRouters(path) {
  var matchedRoutes = reactRouterConfig.matchRoutes(routers, path);
  return matchedRoutes;
};

exports.matchRouters = matchRouters;
exports.render = render;
