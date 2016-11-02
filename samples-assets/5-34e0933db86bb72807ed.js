webpackJsonp([5],{

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

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _RaisedButton = __webpack_require__(473);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _RaisedButton2.default;

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(418);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colorManipulator = __webpack_require__(332);

	var _childUtils = __webpack_require__(420);

	var _EnhancedButton = __webpack_require__(419);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	var _Paper = __webpack_require__(462);

	var _Paper2 = _interopRequireDefault(_Paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label && !props.icon) {
	    return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	  }
	}

	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      button = _context$muiTheme.button,
	      raisedButton = _context$muiTheme.raisedButton;
	  var disabled = props.disabled,
	      disabledBackgroundColor = props.disabledBackgroundColor,
	      disabledLabelColor = props.disabledLabelColor,
	      fullWidth = props.fullWidth,
	      icon = props.icon,
	      label = props.label,
	      labelPosition = props.labelPosition,
	      primary = props.primary,
	      secondary = props.secondary,
	      style = props.style;


	  var amount = primary || secondary ? 0.4 : 0.08;

	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;

	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	  var buttonHeight = style && style.height || button.height;
	  var borderRadius = 2;
	  return {
	    root: {
	      display: 'inline-block',
	      minWidth: fullWidth ? '100%' : button.minWidth,
	      transition: _transitions2.default.easeOut()
	    },
	    container: {
	      position: 'relative',
	      height: buttonHeight,
	      lineHeight: buttonHeight,
	      width: '100%',
	      padding: 0,
	      overflow: 'hidden',
	      borderRadius: 2,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      verticalAlign: 'middle',
	      opacity: 1,
	      fontSize: button.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      lineHeight: style && style.height || '' + button.height,
	      color: labelColor
	    },
	    icon: {
	      lineHeight: style && style.height || '' + button.height,
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}

	var RaisedButton = function (_React$Component) {
	  _inherits(RaisedButton, _React$Component);

	  function RaisedButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, RaisedButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      //only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({ zDepth: _this.state.initialZDepth + 1 });
	      }
	      if (_this.props.onMouseDown) _this.props.onMouseDown(event);
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({ zDepth: _this.state.initialZDepth });
	      if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.refs.container.isKeyboardFocused()) _this.setState({ zDepth: _this.state.initialZDepth, hovered: false });
	      if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.refs.container.isKeyboardFocused() && !_this.state.touch) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touch: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	      if (_this.props.onTouchStart) _this.props.onTouchStart(event);
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({ zDepth: _this.state.initialZDepth });
	      if (_this.props.onTouchEnd) _this.props.onTouchEnd(event);
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var styles = getStyles(_this.props, _this.context);

	      if (keyboardFocused && !_this.props.disabled) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	        var amount = _this.props.primary || _this.props.secondary ? 0.4 : 0.08;
	        _this.refs.overlay.style.backgroundColor = (0, _colorManipulator.fade)(Object.assign({}, styles.label, _this.props.labelStyle).color, amount);
	      } else if (!_this.state.hovered) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth
	        });
	        _this.refs.overlay.style.backgroundColor = 'transparent';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          icon = _props.icon,
	          label = _props.label,
	          labelPosition = _props.labelPosition,
	          labelStyle = _props.labelStyle,
	          primary = _props.primary,
	          rippleStyle = _props.rippleStyle,
	          secondary = _props.secondary,
	          other = _objectWithoutProperties(_props, ['children', 'className', 'disabled', 'icon', 'label', 'labelPosition', 'labelStyle', 'primary', 'rippleStyle', 'secondary']);

	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = Object.assign({}, styles.ripple, rippleStyle);

	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };

	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles(Object.assign(styles.label, labelStyle)) },
	        label
	      );

	      var iconCloned = icon && _react2.default.cloneElement(icon, {
	        color: styles.label.color,
	        style: styles.icon
	      });

	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };

	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);

	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: Object.assign(styles.root, this.props.style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          _extends({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: styles.container,
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles(styles.overlay)
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);

	  return RaisedButton;
	}(_react2.default.Component);

	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.propTypes = {
	  /**
	   * 重写背景颜色.
	   */
	  backgroundColor: _react2.default.PropTypes.string,

	  /**
	   * 包在button中的子组件。
	   * 如果定义了 label ， 按钮的文字显示label内容。
	   * 如果没有配置 label, 则需要传入子组件，并且会显示子组件内容。
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * css class 名称.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * 设置 true 禁用按钮.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * 重写禁用时按钮背景颜色.
	   */
	  disabledBackgroundColor: _react2.default.PropTypes.string,

	  /**
	   * 禁用时按钮文字颜色.
	   */
	  disabledLabelColor: _react2.default.PropTypes.string,

	  /**
	   * 如果是true按钮占据整个容器宽度
	   */
	  fullWidth: _react2.default.PropTypes.bool,

	  /**
	   * URL to link to when button clicked if `linkButton` is set to true.
	   */
	  href: _react2.default.PropTypes.string,

	  /**
	   * Use this property to display an icon.
	   */
	  icon: _react2.default.PropTypes.node,

	  /**
	   * The label for the button.
	   */
	  label: validateLabel,

	  /**
	   * The color of the label for the button.
	   */
	  labelColor: _react2.default.PropTypes.string,

	  /**
	   * Place label before or after the passed children.
	   */
	  labelPosition: _react2.default.PropTypes.oneOf(['before', 'after']),

	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react2.default.PropTypes.object,

	  /**
	   * Enables use of `href` property to provide a URL to link to if set to true.
	   */
	  linkButton: _react2.default.PropTypes.bool,

	  /**
	   * Callback function for when the mouse is pressed down inside this element.
	   */
	  onMouseDown: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when the mouse enters this element.
	   */
	  onMouseEnter: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when the mouse leaves this element.
	   */
	  onMouseLeave: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when the mouse is realeased
	   * above this element.
	   */
	  onMouseUp: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when a touchTap event ends.
	   */
	  onTouchEnd: _react2.default.PropTypes.func,

	  /**
	   * Callback function for when a touchTap event starts.
	   */
	  onTouchStart: _react2.default.PropTypes.func,

	  /**
	   * If true, colors button according to
	   * primaryTextColor from the Theme.
	   */
	  primary: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline style of ripple element.
	   */
	  rippleStyle: _react2.default.PropTypes.object,

	  /**
	   * If true, colors button according to secondaryTextColor from the theme.
	   * The primary prop has precendent if set to true.
	   */
	  secondary: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	exports.default = RaisedButton;

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Snackbar = __webpack_require__(475);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Snackbar2.default; /**
	                                       * Created by guopeng on 16/4/6.
	                                       */

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(418);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _ClickAwayListener = __webpack_require__(476);

	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

	var _FlatButton = __webpack_require__(477);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _styleResizable = __webpack_require__(478);

	var _styleResizable2 = _interopRequireDefault(_styleResizable);

	var _pixel = __webpack_require__(440);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      snackbar = _context$muiTheme.snackbar,
	      zIndex = _context$muiTheme.zIndex;
	  var open = state.open;
	  var _baseTheme$spacing = baseTheme.spacing,
	      desktopGutter = _baseTheme$spacing.desktopGutter,
	      desktopSubheaderHeight = _baseTheme$spacing.desktopSubheaderHeight;


	  var isSmall = state.deviceSize === _styleResizable2.default.statics.Sizes.SMALL;

	  var styles = {
	    root: {
	      position: 'fixed',
	      left: 0,
	      display: 'flex',
	      right: 0,
	      bottom: 0,
	      zIndex: zIndex.snackbar,
	      visibility: open ? 'visible' : 'hidden',
	      transform: open ? 'translate3d(0, 0, 0)' : 'translate3d(0, ' + (0, _pixel.px2px)(desktopSubheaderHeight) + ', 0)',
	      transition: _transitions2.default.easeOut('400ms', 'transform') + ', ' + _transitions2.default.easeOut('400ms', 'visibility')
	    },
	    body: {
	      backgroundColor: snackbar.backgroundColor,
	      padding: '0 ' + (0, _pixel.px2px)(desktopGutter),
	      height: (0, _pixel.px2px)(desktopSubheaderHeight),
	      lineHeight: '' + (0, _pixel.px2px)(desktopSubheaderHeight),
	      borderRadius: isSmall ? 0 : 2,
	      maxWidth: isSmall ? 'inherit' : '9rem',
	      minWidth: isSmall ? 'inherit' : '8rem',
	      flexGrow: isSmall ? 1 : 0,
	      margin: 'auto'
	    },
	    content: {
	      fontSize: '0.373rem', //14,
	      color: snackbar.textColor,
	      opacity: open ? 1 : 0,
	      transition: open ? _transitions2.default.easeOut('500ms', 'opacity', '100ms') : _transitions2.default.easeOut('400ms', 'opacity')
	    },
	    action: {
	      color: snackbar.actionColor,
	      float: 'right',
	      marginTop: '0.16rem', //6,
	      marginRight: '-0.427rem', //-16,
	      marginLeft: (0, _pixel.px2px)(desktopGutter),
	      backgroundColor: 'transparent'
	    }
	  };

	  return styles;
	}

	var Snackbar = _react2.default.createClass({
	  displayName: 'Snackbar',


	  propTypes: {
	    /**
	     * The label for the action on the snackbar.
	     */
	    action: _react2.default.PropTypes.string,

	    /**
	     * The number of milliseconds to wait before automatically dismissing.
	     * If no value is specified the snackbar will dismiss normally.
	     * If a value is provided the snackbar can still be dismissed normally.
	     * If a snackbar is dismissed before the timer expires, the timer will be cleared.
	     */
	    autoHideDuration: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the body element.
	     */
	    bodyStyle: _react2.default.PropTypes.object,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The message to be displayed.
	     *
	     * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
	     * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
	     * showing again)
	     */
	    message: _react2.default.PropTypes.node.isRequired,

	    /**
	     * Fired when the action button is touchtapped.
	     *
	     * @param {object} event Action button event.
	     */
	    onActionTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
	     * `autoHideDuration` timer expires.
	     *
	     * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
	     * `open` prop.
	     *
	     * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
	     * for example ignoring `clickaway`.
	     *
	     * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
	     */
	    onRequestClose: _react2.default.PropTypes.func,

	    /**
	     * Controls whether the `Snackbar` is opened or not.
	     */
	    open: _react2.default.PropTypes.bool.isRequired,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object.isRequired
	  },

	  mixins: [_styleResizable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.open,
	      message: this.props.message,
	      action: this.props.action
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.state.open) {
	      this.setAutoHideTimer();
	      this.setTransitionTimer();
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this = this;

	    if (this.state.open && nextProps.open === this.props.open && (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
	      this.setState({
	        open: false
	      });

	      clearTimeout(this.timerOneAtTheTimeId);
	      this.timerOneAtTheTimeId = setTimeout(function () {
	        _this.setState({
	          message: nextProps.message,
	          action: nextProps.action,
	          open: true
	        });
	      }, 400);
	    } else {
	      var open = nextProps.open;

	      this.setState({
	        open: open !== null ? open : this.state.open,
	        message: nextProps.message,
	        action: nextProps.action
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    if (prevState.open !== this.state.open) {
	      if (this.state.open) {
	        this.setAutoHideTimer();
	        this.setTransitionTimer();
	      } else {
	        clearTimeout(this.timerAutoHideId);
	      }
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timerAutoHideId);
	    clearTimeout(this.timerTransitionId);
	    clearTimeout(this.timerOneAtTheTimeId);
	  },
	  componentClickAway: function componentClickAway() {
	    if (this.timerTransitionId) return; // If transitioning, don't close snackbar

	    if (this.props.open !== null && this.props.onRequestClose) {
	      this.props.onRequestClose('clickaway');
	    } else {
	      this.setState({ open: false });
	    }
	  },


	  // Timer that controls delay before snackbar auto hides
	  setAutoHideTimer: function setAutoHideTimer() {
	    var _this2 = this;

	    var autoHideDuration = this.props.autoHideDuration;

	    if (autoHideDuration > 0) {
	      clearTimeout(this.timerAutoHideId);
	      this.timerAutoHideId = setTimeout(function () {
	        if (_this2.props.open !== null && _this2.props.onRequestClose) {
	          _this2.props.onRequestClose('timeout');
	        } else {
	          _this2.setState({ open: false });
	        }
	      }, autoHideDuration);
	    }
	  },


	  // Timer that controls delay before click-away events are captured (based on when animation completes)
	  setTransitionTimer: function setTransitionTimer() {
	    var _this3 = this;

	    this.timerTransitionId = setTimeout(function () {
	      _this3.timerTransitionId = undefined;
	    }, 400);
	  },
	  render: function render() {
	    var _props = this.props,
	        onActionTouchTap = _props.onActionTouchTap,
	        style = _props.style,
	        bodyStyle = _props.bodyStyle,
	        others = _objectWithoutProperties(_props, ['onActionTouchTap', 'style', 'bodyStyle']);

	    var _state = this.state,
	        action = _state.action,
	        message = _state.message,
	        open = _state.open;
	    var prepareStyles = this.context.muiTheme.prepareStyles;

	    var styles = getStyles(this.props, this.context, this.state);

	    var actionButton = action && _react2.default.createElement(_FlatButton2.default, {
	      style: styles.action,
	      label: action,
	      onTouchTap: onActionTouchTap
	    });

	    return _react2.default.createElement(
	      _ClickAwayListener2.default,
	      { onClickAway: open && this.componentClickAway },
	      _react2.default.createElement(
	        'div',
	        _extends({}, others, { style: prepareStyles(Object.assign(styles.root, style)) }),
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(Object.assign(styles.body, bodyStyle)) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.content) },
	            _react2.default.createElement(
	              'span',
	              null,
	              message
	            ),
	            actionButton
	          )
	        )
	      )
	    );
	  }
	});

	exports.default = Snackbar;

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(37);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _events = __webpack_require__(423);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isDescendant = function isDescendant(el, target) {
	  if (target !== null) {
	    return el === target || isDescendant(el, target.parentNode);
	  }
	  return false;
	};

	var clickAwayEvents = ['mousedown', 'touchstart'];
	var bind = function bind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.on(document, event, callback);
	  });
	};
	var unbind = function unbind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.off(document, event, callback);
	  });
	};

	var ClickAwayListener = function (_React$Component) {
	  _inherits(ClickAwayListener, _React$Component);

	  function ClickAwayListener() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ClickAwayListener);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClickAwayListener.__proto__ || Object.getPrototypeOf(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }

	      var el = _reactDom2.default.findDOMNode(_this);

	      if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
	        _this.props.onClickAway(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ClickAwayListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onClickAway) {
	        bind(this.handleClickAway);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.onClickAway !== this.props.onClickAway) {
	        unbind(this.handleClickAway);
	        if (this.props.onClickAway) {
	          bind(this.handleClickAway);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      unbind(this.handleClickAway);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return ClickAwayListener;
	}(_react2.default.Component);

	ClickAwayListener.propTypes = {
	  children: _react2.default.PropTypes.node,
	  onClickAway: _react2.default.PropTypes.any
	};
	exports.default = ClickAwayListener;

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _FlatButton = __webpack_require__(465);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FlatButton2.default;

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _events = __webpack_require__(423);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sizes = {
	  SMALL: 1,
	  MEDIUM: 2,
	  LARGE: 3
	};

	exports.default = {

	  statics: {
	    Sizes: Sizes
	  },

	  getInitialState: function getInitialState() {
	    return {
	      deviceSize: Sizes.SMALL
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._updateDeviceSize();
	    if (!this.manuallyBindResize) this._bindResize();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unbindResize();
	  },
	  isDeviceSize: function isDeviceSize(desiredSize) {
	    return this.state.deviceSize >= desiredSize;
	  },
	  _updateDeviceSize: function _updateDeviceSize() {
	    var width = window.innerWidth;

	    if (width >= 992) {
	      this.setState({ deviceSize: Sizes.LARGE });
	    } else if (width >= 768) {
	      this.setState({ deviceSize: Sizes.MEDIUM });
	    } else {
	      // width < 768
	      this.setState({ deviceSize: Sizes.SMALL });
	    }
	  },
	  _bindResize: function _bindResize() {
	    _events2.default.on(window, 'resize', this._updateDeviceSize);
	  },
	  _unbindResize: function _unbindResize() {
	    _events2.default.off(window, 'resize', this._updateDeviceSize);
	  }
	};

/***/ },

/***/ 481:
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

	var _Button = __webpack_require__(472);

	var _Button2 = _interopRequireDefault(_Button);

	var _Divider = __webpack_require__(454);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Snackbar = __webpack_require__(474);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _style = __webpack_require__(470);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by TonyJiang on 16/9/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var PluginUploadPage = function (_BasePage) {
	    _inherits(PluginUploadPage, _BasePage);

	    function PluginUploadPage() {
	        var _ref;

	        _classCallCheck(this, PluginUploadPage);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = PluginUploadPage.__proto__ || Object.getPrototypeOf(PluginUploadPage)).call.apply(_ref, [this].concat(args)));

	        _this.state = {
	            noticeShow: false,
	            message: ''
	        };
	        _this._choosePhotoRequestId = 'ChoosePhotoInDemo';
	        _this._uploadRequestId = 'UploadInDemo';
	        _this.selectImages = [];
	        _this.successImages = [];
	        _this.failedImages = [];

	        _this.onClick = function () {
	            //清空上次的操作结果.
	            _this.selectImages.length = 0;
	            _this.successImages.length = 0;
	            _this.failedImages.length = 0;

	            var choosePhotoOptions = {
	                maxCount: 9
	            };
	            mutants.plugin.choosePhoto.choosePhoto(choosePhotoOptions, _this.choosePhotoCallback, _this._choosePhotoRequestId);
	        };

	        _this.choosePhotoCallback = function (rs) {
	            var resultCode = rs.resultCode,
	                message = rs.message,
	                body = rs.body;

	            //选择图片成功

	            if (resultCode == 0) {
	                var _data = body.data;

	                _this.selectImages = _data;

	                //开始上传图片
	                mutants.plugin.upload.uploadImg(_data, _this.uploadCallback, _this._uploadRequestId);

	                _this.setState({
	                    noticeShow: true,
	                    message: '开始上传'
	                });

	                //选择图片失败
	            } else if (resultCode == 1) {

	                _this.setState({
	                    noticeShow: true,
	                    message: message
	                });

	                //取消选择图片
	            } else {
	                _this.setState({
	                    noticeShow: true,
	                    message: '选择图片被取消'
	                });
	            }
	        };

	        _this.uploadCallback = function (rs) {
	            var resultCode = rs.resultCode,
	                message = rs.message,
	                body = rs.body;

	            //上传成功

	            if (resultCode == 0) {
	                var _data2 = body.data;

	                //将成功的图片网络地址放入successImages

	                _this.successImages.push(_data2.netUrl.uri);

	                //上传失败
	            } else if (resultCode == 1) {

	                _this.failedImages.push(data.nativeUrl);
	            }

	            //全部图片处理完成
	            if (_this.successImages.length + _this.failedImages.length == _this.selectImages.length) {
	                _this.setState({
	                    noticeShow: true,
	                    message: "\u5171\u8BA1\u4E0A\u4F20" + _this.selectImages.length + "\u5F20, \u6210\u529F" + _this.successImages.length + "\u5F20, \u5931\u8D25" + _this.failedImages.length + "\u5F20"
	                });
	            }
	        };

	        _this.snackbarRequestClose = function () {
	            _this.setState({
	                noticeShow: false
	            });
	        };

	        _this.initMockData();

	        return _this;
	    }

	    _createClass(PluginUploadPage, [{
	        key: "initMockData",
	        value: function initMockData() {
	            var mockData = {
	                ChoosePhotoPlugin: {
	                    status: 'success',
	                    data: ['http://localhost:8080/assets/images/demo/1.jpg']
	                },

	                UploadPlugin: {
	                    status: 'success',
	                    //data为成功是返回的数据格式
	                    data: {
	                        nativeUrl: '/example/native/path/example.png',
	                        netUrl: {
	                            sizeInfo: {
	                                height: 200,
	                                width: 200,
	                                name: 'example_name',
	                                suffix: 'png',
	                                size: 10240,
	                                isOriginal: 0
	                            },
	                            uri: 'http://localhost:8080/assets/images/demo/1.jpg'
	                        }
	                    }
	                }
	            };

	            mutants.plugin.setMockData(mockData);
	        }

	        //点击按钮, 开始选择图片


	        //选择图片回调, 如果选择图片成功, 则开始上传


	        //上传回调, 每一张图片上传完成都会回调一次, 所以需要判断回调次数和图片总数


	        //底部提示框关闭

	    }, {
	        key: "renderContent",
	        value: function renderContent() {
	            var platform = mutants.env.constant.platform;

	            var inGZQ = mutants.env.platform == platform.chanjet;

	            var imageStyle = { height: 120, margin: 10, border: "0.02666666666666667rem solid #ccc" };

	            //上传成功的图片集合
	            var successImageItems = this.successImages.map(function (img) {
	                return _react2.default.createElement("img", { src: img, style: imageStyle });
	            });

	            //上传失败的图片集合
	            var failedImageItems = this.failedImages.map(function (img) {
	                return _react2.default.createElement("img", { src: img, style: imageStyle });
	            });

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.title },
	                    "\u4E0A\u4F20\u56FE\u7247"
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.summary },
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryLabel },
	                        "\u672Cdemo\u7A0D\u5FAE\u590D\u6742\u4E00\u70B9, \u5148\u901A\u8FC7\u76F8\u518C\u9009\u62E9\u56FE\u7247, \u7136\u540E\u8FDB\u884C\u4E0A\u4F20. "
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryTip },
	                        "\u5982\u679C\u4E0A\u4F20\u591A\u5F20\u56FE\u7247, \u5219\u4E0A\u4F20\u56DE\u8C03\u4F1A\u88AB\u8C03\u7528\u591A\u6B21, \u6240\u4EE5\u901A\u8FC7\u56DE\u8C03\u6267\u884C\u6B21\u6570\u548C\u56FE\u7247\u603B\u6570\u6765\u5224\u65AD\u662F\u5426\u5168\u90E8\u4E0A\u4F20\u5B8C\u6210. "
	                    ),
	                    !inGZQ && _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.summaryTip },
	                        "demo\u6CA1\u6709\u8FD0\u884C\u5728\u5DE5\u4F5C\u5708\u4E2D, \u5C06\u4F7F\u7528\u6A21\u62DF\u6570\u636E."
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: _style2.default.content },
	                    _react2.default.createElement(_Button2.default, { label: "\u9009\u62E9\u56FE\u7247\u5E76\u4E0A\u4F20", primary: true, onClick: this.onClick }),
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.link },
	                        "\u4E0A\u4F20\u6210\u529F\u7684\u56FE\u7247:",
	                        successImageItems.length,
	                        "\u5F20"
	                    ),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        successImageItems
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: _style2.default.link },
	                        "\u4E0A\u4F20\u5931\u8D25\u7684\u56FE\u7247:",
	                        failedImageItems.length,
	                        "\u5F20"
	                    ),
	                    _react2.default.createElement(_Divider2.default, null),
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        failedImageItems
	                    )
	                ),
	                _react2.default.createElement(_Snackbar2.default, {
	                    open: this.state.noticeShow,
	                    message: this.state.message,
	                    autoHideDuration: 2000,
	                    onRequestClose: this.snackbarRequestClose
	                })
	            );
	        }
	    }]);

	    return PluginUploadPage;
	}(_BasePage3.default);

	exports.default = PluginUploadPage;

/***/ }

});