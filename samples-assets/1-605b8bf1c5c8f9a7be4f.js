webpackJsonp([1],{

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _BasePage2 = __webpack_require__(407);

	var _BasePage3 = _interopRequireDefault(_BasePage2);

	var _ListItem = __webpack_require__(415);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Divider = __webpack_require__(454);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _style = __webpack_require__(470);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/9/13.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var IndexPage = function (_BasePage) {
	    _inherits(IndexPage, _BasePage);

	    function IndexPage() {
	        _classCallCheck(this, IndexPage);

	        return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
	    }

	    _createClass(IndexPage, [{
	        key: "redirect",
	        value: function redirect(hash) {
	            this.navigationController.push(hash);
	        }
	    }, {
	        key: "renderContent",
	        value: function renderContent() {

	            var inGZQ = mutants.env.platform == mutants.env.constant.platform.chanjet;

	            //使用外部容器定义显示区域大小
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.title },
	                    "Plugins"
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.summary },
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryLabel },
	                        "demo\u5C06\u5C55\u793A Native\u7684\u76F8\u5173\u80FD\u529B."
	                    ),
	                    !inGZQ && _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryTip },
	                        "\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u4E0D\u5728\u5DE5\u4F5C\u5708\u4E2D, \u4F7F\u7528\u6A21\u62DF\u6570\u636E\u6765\u6A21\u62DFNative\u80FD\u529B\u7684\u8FD4\u56DE\u503C, \u5982\u679C\u60F3\u8981\u67E5\u770B\u63D2\u4EF6\u8C03\u7528\u7684\u5B9E\u9645\u7ED3\u679C, \u8BF7\u518D\u5DE5\u4F5C\u5708\u4E2D\u8BBF\u95EE\u672Cdemo."
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.content },
	                    "\u6F14\u793A\u5217\u8868"
	                ),
	                _react2.default.createElement(
	                    "list",
	                    null,
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u76F8\u518C", onTouchTap: this.redirect.bind(this, '/mutants/plugin/choose-photo') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u62CD\u7167", onTouchTap: this.redirect.bind(this, '/mutants/plugin/take-photo') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u56FE\u7247\u9884\u89C8", onTouchTap: this.redirect.bind(this, '/mutants/plugin/preview') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u4E0A\u4F20\u56FE\u7247", onTouchTap: this.redirect.bind(this, '/mutants/plugin/upload') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u4F4D\u7F6E\u5B9A\u4F4D", onTouchTap: this.redirect.bind(this, '/mutants/plugin/geo') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u62E8\u6253\u7535\u8BDD", onTouchTap: this.redirect.bind(this, '/mutants/plugin/phone') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u53D1\u9001\u77ED\u4FE1", onTouchTap: this.redirect.bind(this, '/mutants/plugin/message') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u5206\u4EAB", onTouchTap: this.redirect.bind(this, '/mutants/plugin/share') }),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(_ListItem2.default, { primaryText: "\u8BED\u97F3\u8BC6\u522B", onTouchTap: this.redirect.bind(this, '/mutants/plugin/speechReco') })
	                )
	            );
	        }
	    }]);

	    return IndexPage;
	}(_BasePage3.default);

	exports.default = IndexPage;

/***/ },

/***/ 470:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created By WanXing 16/9/14 上午11:23
	 * Summary:
	 */

	var demoStyle = {
	    page: {
	        fontSize: '0.48rem',
	        fontFamily: 'Microsoft YaHei,"微软雅黑",sans-serif'
	    },
	    title: {
	        height: '1.8666666666666667rem',
	        lineHeight: '1.8666666666666667rem',
	        padding: '0 0.4266666666666667rem',
	        fontSize: '0.8rem',
	        borderBottom: '0.02666666666666667rem solid #efefef'
	    },
	    summary: {
	        fontSize: '0.37333333333333335rem',
	        padding: '0.4266666666666667rem'
	    },
	    summaryLabel: {
	        color: '#0091EA'
	    },
	    summaryTip: {
	        marginTop: '0.26666666666666666rem',
	        color: '#FF8A65',
	        display: 'block'
	    },
	    content: {
	        padding: '0.21333333333333335rem 0.4266666666666667rem',
	        color: '#888'
	    },
	    link: {
	        padding: '0.26666666666666666rem 0',
	        cursor: 'pointer'
	    },
	    tip: {
	        color: '#FF8A65',
	        display: 'block',
	        marginTop: '0.26666666666666666rem',
	        fontSize: '0.37333333333333335rem'
	    },
	    result: {
	        color: '#FF8A65'
	    },
	    image: {
	        height: 120,
	        margin: 10,
	        border: '0.02666666666666667rem solid #ccc'
	    }

	};

	exports.default = demoStyle;

/***/ }

});