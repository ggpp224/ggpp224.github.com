webpackJsonp([21],{3:function(e,t,n){e.exports=n(2)(148)},4:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=o(r);t.default=a.default},5:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),p=o(l),u=n(6),c=n(7),d=o(c),h=n(13),f=o(h),y=n(4),m=o(y),b=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.code,o=e.component,r=e.layoutSideBySide,a=this.context.muiTheme.rawTheme.palette,s=a.canvasColor,i={root:{backgroundColor:s,marginBottom:32},exampleBlock:{borderRadius:"0 0 2px 0",padding:"14px 24px 24px",margin:0,width:r?"45%":null,float:r?"right":null}},l=o?(0,u.parse)(n):{};return p.default.createElement(m.default,{style:i.root},p.default.createElement(d.default,{title:this.props.title,description:this.props.description||l.description},n),p.default.createElement(f.default,{style:i.exampleBlock},t))}}]),t}(l.Component);b.propTypes={children:l.PropTypes.node,code:l.PropTypes.string.isRequired,component:l.PropTypes.bool,description:l.PropTypes.string,layoutSideBySide:l.PropTypes.bool,title:l.PropTypes.string},b.defaultProps={component:!0},b.contextTypes={muiTheme:l.PropTypes.object},t.default=b},6:function(e,t,n){e.exports=n(2)(118)},7:function(e,t,n){e.exports=n(2)(321)},14:function(e,t,n){e.exports=n(2)(323)},19:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n){if(!e.children&&!e.label&&!e.icon)return new Error("Required prop label or children or icon was not specified in "+n+".")}function p(e,t,n){var o=t.muiTheme,r=o.baseTheme,a=o.button,s=o.raisedButton,i=e.disabled,l=e.disabledBackgroundColor,p=e.disabledLabelColor,u=e.fullWidth,c=e.icon,d=e.label,h=e.labelPosition,f=e.primary,b=e.secondary,g=e.style,w=f||b?.4:.08,T=s.color,v=s.textColor;i?(T=l||s.disabledColor,v=p||s.disabledTextColor):f?(T=s.primaryColor,v=s.primaryTextColor):b?(T=s.secondaryColor,v=s.secondaryTextColor):(e.backgroundColor&&(T=e.backgroundColor),e.labelColor&&(v=e.labelColor));var S=g&&g.height||a.height,P=2;return{root:{display:"inline-block",minWidth:u?"100%":a.minWidth,transition:y.default.easeOut()},container:{position:"relative",height:S,lineHeight:S,width:"100%",padding:0,overflow:"hidden",borderRadius:2,transition:y.default.easeOut(),backgroundColor:T,textAlign:"center"},label:{position:"relative",verticalAlign:"middle",opacity:1,fontSize:a.fontSize,letterSpacing:0,textTransform:s.textTransform||a.textTransform||"uppercase",fontWeight:s.fontWeight,margin:0,userSelect:"none",paddingLeft:c&&"before"!==h?8:r.spacing.desktopGutterLess,paddingRight:c&&"before"===h?8:r.spacing.desktopGutterLess,lineHeight:g&&g.height||""+a.height,color:v},icon:{lineHeight:g&&g.height||""+a.height,verticalAlign:"middle",marginLeft:d&&"before"!==h?12:0,marginRight:d&&"before"===h?12:0},overlay:{height:S,borderRadius:P,backgroundColor:(n.keyboardFocused||n.hovered)&&!i&&(0,m.fade)(v,w),transition:y.default.easeOut(),top:0},ripple:{color:v,opacity:f||b?.16:.1}}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(1),h=o(d),f=n(12),y=o(f),m=n(36),b=n(49),g=n(45),w=o(g),T=n(8),v=o(T),S=function(e){function t(){var e,n,o,r;a(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={hovered:!1,touched:!1,initialZDepth:0,zDepth:0},o.handleMouseDown=function(e){0===e.button&&o.setState({zDepth:o.state.initialZDepth+1}),o.props.onMouseDown&&o.props.onMouseDown(e)},o.handleMouseUp=function(e){o.setState({zDepth:o.state.initialZDepth}),o.props.onMouseUp&&o.props.onMouseUp(e)},o.handleMouseLeave=function(e){o.refs.container.isKeyboardFocused()||o.setState({zDepth:o.state.initialZDepth,hovered:!1}),o.props.onMouseLeave&&o.props.onMouseLeave(e)},o.handleMouseEnter=function(e){o.refs.container.isKeyboardFocused()||o.state.touch||o.setState({hovered:!0}),o.props.onMouseEnter&&o.props.onMouseEnter(e)},o.handleTouchStart=function(e){o.setState({touch:!0,zDepth:o.state.initialZDepth+1}),o.props.onTouchStart&&o.props.onTouchStart(e)},o.handleTouchEnd=function(e){o.setState({zDepth:o.state.initialZDepth}),o.props.onTouchEnd&&o.props.onTouchEnd(e)},o.handleKeyboardFocus=function(e,t){var n=p(o.props,o.context);if(t&&!o.props.disabled){o.setState({zDepth:o.state.initialZDepth+1});var r=o.props.primary||o.props.secondary?.4:.08;o.refs.overlay.style.backgroundColor=(0,m.fade)(Object.assign({},n.label,o.props.labelStyle).color,r)}else o.state.hovered||(o.setState({zDepth:o.state.initialZDepth}),o.refs.overlay.style.backgroundColor="transparent")},r=n,s(o,r)}return i(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this.props.disabled?0:1;this.setState({zDepth:e,initialZDepth:e})}},{key:"componentWillReceiveProps",value:function(e){var t=e.disabled?0:1;this.setState({zDepth:t,initialZDepth:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.disabled,a=e.icon,s=e.label,i=e.labelPosition,l=e.labelStyle,c=(e.primary,e.rippleStyle),d=(e.secondary,r(e,["children","className","disabled","icon","label","labelPosition","labelStyle","primary","rippleStyle","secondary"])),f=this.context.muiTheme.prepareStyles,y=p(this.props,this.context,this.state),m=Object.assign({},y.ripple,c),g=o?{}:{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseEnter:this.handleMouseEnter,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onKeyboardFocus:this.handleKeyboardFocus},T=s&&h.default.createElement("span",{style:f(Object.assign(y.label,l))},s),S=a&&h.default.cloneElement(a,{color:y.label.color,style:y.icon}),P="before"===i?{labelElement:T,iconCloned:S,children:t}:{children:t,iconCloned:S,labelElement:T},O=(0,b.createChildFragment)(P);return h.default.createElement(v.default,{className:n,style:Object.assign(y.root,this.props.style),zDepth:this.state.zDepth},h.default.createElement(w.default,u({},d,g,{ref:"container",disabled:o,style:y.container,focusRippleColor:m.color,touchRippleColor:m.color,focusRippleOpacity:m.opacity,touchRippleOpacity:m.opacity}),h.default.createElement("div",{ref:"overlay",style:f(y.overlay)},O)))}}]),t}(h.default.Component);S.muiName="RaisedButton",S.propTypes={backgroundColor:h.default.PropTypes.string,children:h.default.PropTypes.node,className:h.default.PropTypes.string,disabled:h.default.PropTypes.bool,disabledBackgroundColor:h.default.PropTypes.string,disabledLabelColor:h.default.PropTypes.string,fullWidth:h.default.PropTypes.bool,href:h.default.PropTypes.string,icon:h.default.PropTypes.node,label:l,labelColor:h.default.PropTypes.string,labelPosition:h.default.PropTypes.oneOf(["before","after"]),labelStyle:h.default.PropTypes.object,linkButton:h.default.PropTypes.bool,onMouseDown:h.default.PropTypes.func,onMouseEnter:h.default.PropTypes.func,onMouseLeave:h.default.PropTypes.func,onMouseUp:h.default.PropTypes.func,onTouchEnd:h.default.PropTypes.func,onTouchStart:h.default.PropTypes.func,primary:h.default.PropTypes.bool,rippleStyle:h.default.PropTypes.object,secondary:h.default.PropTypes.bool,style:h.default.PropTypes.object},S.defaultProps={disabled:!1,labelPosition:"after",fullWidth:!1,primary:!1,secondary:!1},S.contextTypes={muiTheme:h.default.PropTypes.object.isRequired},t.default=S},271:function(e,t){e.exports="import React from 'react';\nimport Drawer from 'chanjet-ui/lib/Drawer';\nimport AppBar from 'chanjet-ui/lib/AppBar';\nimport RaisedButton from 'chanjet-ui/lib/Button';\n\nexport default class DrawerOpenRightExample extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {open: false};\n  }\n\n  handleToggle = () => this.setState({open: !this.state.open});\n\n  render() {\n    return (\n      <div>\n        <RaisedButton\n          label=\"Toggle Drawer\"\n          onTouchTap={this.handleToggle}\n        />\n        <Drawer width={200} openSecondary={true} open={this.state.open} >\n          <AppBar title=\"AppBar\" />\n        </Drawer>\n      </div>\n    );\n  }\n}\n"},272:function(e,t){e.exports="import React from 'react';\nimport Drawer from 'chanjet-ui/lib/Drawer';\nimport MenuItem from 'chanjet-ui/lib/MenuItem';\nimport RaisedButton from 'chanjet-ui/lib/Button';\n\nexport default class DrawerSimpleExample extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {open: false};\n  }\n\n  handleToggle = () => this.setState({open: !this.state.open});\n\n  render() {\n    return (\n      <div>\n        <RaisedButton\n          label=\"Toggle Drawer\"\n          onTouchTap={this.handleToggle}\n        />\n        <Drawer open={this.state.open}>\n          <MenuItem>Menu Item</MenuItem>\n          <MenuItem>Menu Item 2</MenuItem>\n        </Drawer>\n      </div>\n    );\n  }\n}\n"},273:function(e,t){e.exports="import React from 'react';\nimport Drawer from 'chanjet-ui/lib/Drawer';\nimport MenuItem from 'chanjet-ui/lib/MenuItem';\nimport RaisedButton from 'chanjet-ui/lib/Button';\n\nexport default class DrawerUndockedExample extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {open: false};\n  }\n\n  handleToggle = () => this.setState({open: !this.state.open});\n\n  handleClose = () => this.setState({open: false});\n\n  render() {\n    return (\n      <div>\n        <RaisedButton\n          label=\"Open Drawer\"\n          onTouchTap={this.handleToggle}\n        />\n        <Drawer\n          docked={false}\n          width={200}\n          open={this.state.open}\n          onRequestChange={(open) => this.setState({open})}\n        >\n          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>\n          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>\n        </Drawer>\n      </div>\n    );\n  }\n}\n"},274:function(e,t){e.exports="## Drawer\n\nThe [Drawer](https://www.google.com/design/spec/patterns/navigation-drawer.html) slides in from the side.\nIt is a common pattern found in Google apps and follows the keylines and metrics for lists.\n\nThere are no examples for uncontrolled mode because an uncontrolled `Drawer` can only be opened with a swipe.\nThe doc site has an uncontrolled `Drawer`. Swipe from the left on a touch device to see it.\n\n### Examples\n"},351:function(e,t){e.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport EventListener from 'react-event-listener';\nimport keycode from 'keycode';\nimport autoPrefix from '../utils/autoPrefix';\nimport transitions from '../styles/transitions';\nimport Overlay from '../internal/Overlay';\nimport Paper from '../Paper';\nimport propTypes from '../utils/propTypes';\nimport {rem2px, px2px} from '../utils/pixel'\n\nlet openNavEventHandler = null;\n\nclass Drawer extends React.Component {\n  static propTypes = {\n    /**\n     * The contents of the `Drawer`\n     */\n    children: React.PropTypes.node,\n\n    /**\n     * The CSS class name of the root element.\n     */\n    className: React.PropTypes.string,\n\n    /**\n     * The CSS class name of the container element.\n     */\n    containerClassName: React.PropTypes.string,\n\n    /**\n     * Override the inline-styles of the container element.\n     */\n    containerStyle: React.PropTypes.object,\n\n    /**\n     * If true, swiping sideways when the `Drawer` is closed will not open it.\n     */\n    disableSwipeToOpen: React.PropTypes.bool,\n\n    /**\n     * If true, the `Drawer` will be docked. In this state, the overlay won't show and\n     * clicking on a menu item will not close the `Drawer`.\n     */\n    docked: React.PropTypes.bool,\n\n    /**\n     * Callback function fired when the `open` state of the `Drawer` is requested to be changed.\n     *\n     * @param {boolean} open If true, the `Drawer` was requested to be opened.\n     * @param {string} reason The reason for the open or close request. Possible values are\n     * 'swipe' for open requests; 'clickaway' (on overlay clicks),\n     * 'escape' (on escape key press), and 'swipe' for close requests.\n     */\n    onRequestChange: React.PropTypes.func,\n\n    /**\n     * If true, the `Drawer` is opened.  Providing a value will turn the `Drawer`\n     * into a controlled component.\n     */\n    open: React.PropTypes.bool,\n\n    /**\n     * If true, the `Drawer` is positioned to open from the opposite side.\n     */\n    openSecondary: React.PropTypes.bool,\n\n    /**\n     * The CSS class name to add to the `Overlay` component that is rendered behind the `Drawer`.\n     */\n    overlayClassName: React.PropTypes.string,\n\n    /**\n     * Override the inline-styles of the `Overlay` component that is rendered behind the `Drawer`.\n     */\n    overlayStyle: React.PropTypes.object,\n\n    /**\n     * Override the inline-styles of the root element.\n     */\n    style: React.PropTypes.object,\n\n    /**\n     * The width of the left most (or right most) area in pixels where the `Drawer` can be\n     * swiped open from. Setting this to `null` spans that area to the entire page\n     * (**CAUTION!** Setting this property to `null` might cause issues with sliders and\n     * swipeable `Tabs`: use at your own risk).\n     */\n    swipeAreaWidth: React.PropTypes.number,\n\n    /**\n     * The width of the `Drawer` in pixels. Defaults to using the values from theme.\n     */\n    width: React.PropTypes.number,\n\n    /**\n     * The zDepth of the `Drawer`.\n     */\n    zDepth: propTypes.zDepth,\n\n  };\n\n  static defaultProps = {\n    disableSwipeToOpen: false,\n    docked: true,\n    open: null,\n    openSecondary: false,\n    swipeAreaWidth: 30,\n    width: null,\n    zDepth: 2,\n  };\n\n  static contextTypes = {\n    muiTheme: React.PropTypes.object.isRequired,\n  };\n\n  componentWillMount() {\n    this.maybeSwiping = false;\n    this.touchStartX = null;\n    this.touchStartY = null;\n    this.swipeStartX = null;\n\n    this.setState({\n      open: (this.props.open !== null ) ? this.props.open : this.props.docked,\n      swiping: null,\n    });\n  }\n\n  componentDidMount() {\n    this.enableSwipeHandling();\n  }\n\n  componentWillReceiveProps(nextProps) {\n    // If controlled then the open prop takes precedence.\n    if (nextProps.open !== null) {\n      this.setState({\n        open: nextProps.open,\n      });\n      // Otherwise, if docked is changed, change the open state for when uncontrolled.\n    } else if (this.props.docked !== nextProps.docked) {\n      this.setState({\n        open: nextProps.docked,\n      });\n    }\n  }\n\n  componentDidUpdate() {\n    this.enableSwipeHandling();\n  }\n\n  componentWillUnmount() {\n    this.disableSwipeHandling();\n  }\n\n  getStyles() {\n    const muiTheme = this.context.muiTheme;\n    const theme = muiTheme.navDrawer;\n\n    const x = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateX());\n\n    const styles = {\n      root: {\n        height: '100%',\n        width: px2px(this.props.width||theme.width, true),\n        position: 'fixed',\n        zIndex: muiTheme.zIndex.navDrawer,\n        left: 0,\n        top: 0,\n        transform: `translate3d(${x}px, 0, 0)`,\n        transition: !this.state.swiping && transitions.easeOut(null, 'transform', null),\n        backgroundColor: theme.color,\n        overflow: 'auto',\n        WebkitOverflowScrolling: 'touch', // iOS momentum scrolling\n      },\n      overlay: {\n        zIndex: muiTheme.zIndex.drawerOverlay,\n        pointerEvents: this.state.open ? 'auto' : 'none', // Bypass mouse events when left nav is closing.\n      },\n      rootWhenOpenRight: {\n        left: 'auto',\n        right: 0,\n      },\n    };\n\n    return styles;\n  }\n\n  shouldShow() {\n    return this.state.open || !!this.state.swiping;  // component is swiping\n  }\n\n  close(reason) {\n    if (this.props.open === null) this.setState({open: false});\n    if (this.props.onRequestChange) this.props.onRequestChange(false, reason);\n    return this;\n  }\n\n  open(reason) {\n    if (this.props.open === null) this.setState({open: true});\n    if (this.props.onRequestChange) this.props.onRequestChange(true, reason);\n    return this;\n  }\n\n  handleTouchTapOverlay = (event) => {\n    event.preventDefault();\n    this.close('clickaway');\n  };\n\n  handleKeyUp = (event) => {\n    if (this.state.open && !this.props.docked && keycode(event) === 'esc') {\n      this.close('escape');\n    }\n  };\n\n  getMaxTranslateX() {\n    const width = px2px(this.props.width || this.context.muiTheme.navDrawer.width, true);\n    return width + 10;\n  }\n\n  getTranslateMultiplier() {\n    return this.props.openSecondary ? 1 : -1;\n  }\n\n  enableSwipeHandling() {\n    if (!this.props.docked) {\n      document.body.addEventListener('touchstart', this.onBodyTouchStart);\n      if (!openNavEventHandler) {\n        openNavEventHandler = this.onBodyTouchStart;\n      }\n    } else {\n      this.disableSwipeHandling();\n    }\n  }\n\n  disableSwipeHandling() {\n    document.body.removeEventListener('touchstart', this.onBodyTouchStart);\n    if (openNavEventHandler === this.onBodyTouchStart) {\n      openNavEventHandler = null;\n    }\n  }\n\n  onBodyTouchStart = (event) => {\n    const swipeAreaWidth = this.props.swipeAreaWidth;\n\n    const touchStartX = event.touches[0].pageX;\n    const touchStartY = event.touches[0].pageY;\n\n    // Open only if swiping from far left (or right) while closed\n    if (swipeAreaWidth !== null && !this.state.open) {\n      if (this.props.openSecondary) {\n        // If openSecondary is true calculate from the far right\n        if (touchStartX < document.body.offsetWidth - swipeAreaWidth) return;\n      } else {\n        // If openSecondary is false calculate from the far left\n        if (touchStartX > swipeAreaWidth) return;\n      }\n    }\n\n    if (!this.state.open &&\n         (openNavEventHandler !== this.onBodyTouchStart ||\n          this.props.disableSwipeToOpen)\n       ) {\n      return;\n    }\n\n    this.maybeSwiping = true;\n    this.touchStartX = touchStartX;\n    this.touchStartY = touchStartY;\n\n    document.body.addEventListener('touchmove', this.onBodyTouchMove);\n    document.body.addEventListener('touchend', this.onBodyTouchEnd);\n    document.body.addEventListener('touchcancel', this.onBodyTouchEnd);\n  };\n\n  setPosition(translateX) {\n    const drawer = ReactDOM.findDOMNode(this.refs.clickAwayableElement);\n    const transformCSS = `translate3d(${(this.getTranslateMultiplier() * translateX)}px, 0, 0)`;\n    this.refs.overlay.setOpacity(1 - translateX / this.getMaxTranslateX());\n    autoPrefix.set(drawer.style, 'transform', transformCSS);\n  }\n\n  getTranslateX(currentX) {\n    return Math.min(\n             Math.max(\n               this.state.swiping === 'closing' ?\n                 this.getTranslateMultiplier() * (currentX - this.swipeStartX) :\n                 this.getMaxTranslateX() - this.getTranslateMultiplier() * (this.swipeStartX - currentX),\n               0\n             ),\n             this.getMaxTranslateX()\n           );\n  }\n\n  onBodyTouchMove = (event) => {\n    const currentX = event.touches[0].pageX;\n    const currentY = event.touches[0].pageY;\n\n    if (this.state.swiping) {\n      event.preventDefault();\n      this.setPosition(this.getTranslateX(currentX));\n    } else if (this.maybeSwiping) {\n      const dXAbs = Math.abs(currentX - this.touchStartX);\n      const dYAbs = Math.abs(currentY - this.touchStartY);\n      // If the user has moved his thumb ten pixels in either direction,\n      // we can safely make an assumption about whether he was intending\n      // to swipe or scroll.\n      const threshold = 10;\n\n      if (dXAbs > threshold && dYAbs <= threshold) {\n        this.swipeStartX = currentX;\n        this.setState({\n          swiping: this.state.open ? 'closing' : 'opening',\n        });\n        this.setPosition(this.getTranslateX(currentX));\n      } else if (dXAbs <= threshold && dYAbs > threshold) {\n        this.onBodyTouchEnd();\n      }\n    }\n  };\n\n  onBodyTouchEnd = (event) => {\n    if (this.state.swiping) {\n      const currentX = event.changedTouches[0].pageX;\n      const translateRatio = this.getTranslateX(currentX) / this.getMaxTranslateX();\n\n      this.maybeSwiping = false;\n      const swiping = this.state.swiping;\n      this.setState({\n        swiping: null,\n      });\n\n      // We have to open or close after setting swiping to null,\n      // because only then CSS transition is enabled.\n      if (translateRatio > 0.5) {\n        if (swiping === 'opening') {\n          this.setPosition(this.getMaxTranslateX());\n        } else {\n          this.close('swipe');\n        }\n      } else {\n        if (swiping === 'opening') {\n          this.open('swipe');\n        } else {\n          this.setPosition(0);\n        }\n      }\n    } else {\n      this.maybeSwiping = false;\n    }\n\n    document.body.removeEventListener('touchmove', this.onBodyTouchMove);\n    document.body.removeEventListener('touchend', this.onBodyTouchEnd);\n    document.body.removeEventListener('touchcancel', this.onBodyTouchEnd);\n  };\n\n  render() {\n    const {\n      children,\n      className,\n      containerClassName,\n      containerStyle,\n      docked,\n      openSecondary,\n      overlayClassName,\n      overlayStyle,\n      style,\n      zDepth,\n    } = this.props;\n\n    const styles = this.getStyles();\n\n    let overlay;\n    if (!docked) {\n      overlay = (\n        <Overlay\n          ref=\"overlay\"\n          show={this.shouldShow()}\n          className={overlayClassName}\n          style={Object.assign(styles.overlay, overlayStyle)}\n          transitionEnabled={!this.state.swiping}\n          onTouchTap={this.handleTouchTapOverlay}\n        />\n      );\n    }\n\n    return (\n      <div\n        className={className}\n        style={style}\n      >\n        <EventListener elementName=\"window\" onKeyUp={this.handleKeyUp} />\n        {overlay}\n        <Paper\n          ref=\"clickAwayableElement\"\n          zDepth={zDepth}\n          rounded={false}\n          transitionEnabled={!this.state.swiping}\n          className={containerClassName}\n          style={Object.assign(styles.root, openSecondary && styles.rootWhenOpenRight, containerStyle)}\n        >\n          {children}\n        </Paper>\n      </div>\n    );\n  }\n}\n\nexport default Drawer;\n"},599:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),p=o(l),u=n(92),c=o(u),d=n(176),h=o(d),f=n(19),y=o(f),m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleToggle=function(){return n.setState({open:!n.state.open})},n.state={open:!1},n}return s(t,e),i(t,[{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement(y.default,{label:"Toggle Drawer",onTouchTap:this.handleToggle}),p.default.createElement(c.default,{width:200,openSecondary:!0,open:this.state.open},p.default.createElement(h.default,{title:"AppBar"})))}}]),t}(p.default.Component);t.default=m},600:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),p=o(l),u=n(92),c=o(u),d=n(22),h=o(d),f=n(19),y=o(f),m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleToggle=function(){return n.setState({open:!n.state.open})},n.state={open:!1},n}return s(t,e),i(t,[{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement(y.default,{label:"Toggle Drawer",onTouchTap:this.handleToggle}),p.default.createElement(c.default,{open:this.state.open},p.default.createElement(h.default,null,"Menu Item"),p.default.createElement(h.default,null,"Menu Item 2")))}}]),t}(p.default.Component);t.default=m},601:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),p=o(l),u=n(92),c=o(u),d=n(22),h=o(d),f=n(19),y=o(f),m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleToggle=function(){return n.setState({open:!n.state.open})},n.handleClose=function(){return n.setState({open:!1})},n.state={open:!1},n}return s(t,e),i(t,[{key:"render",value:function(){var e=this;return p.default.createElement("div",null,p.default.createElement(y.default,{label:"Open Drawer",onTouchTap:this.handleToggle}),p.default.createElement(c.default,{docked:!1,width:200,open:this.state.open,onRequestChange:function(t){return e.setState({open:t})}},p.default.createElement(h.default,{onTouchTap:this.handleClose},"Menu Item"),p.default.createElement(h.default,{onTouchTap:this.handleClose},"Menu Item 2")))}}]),t}(p.default.Component);t.default=m},602:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=o(r),s=n(16),i=o(s),l=n(5),p=o(l),u=n(14),c=o(u),d=n(3),h=o(d),f=n(274),y=o(f),m=n(600),b=o(m),g=n(272),w=o(g),T=n(601),v=o(T),S=n(273),P=o(S),O=n(599),D=o(O),E=n(271),x=o(E),M=n(351),k=o(M),C={simple:"A simple controlled `Drawer`. The Drawer is `docked` by default, remaining open unless closed through the `open` prop.",undocked:"An undocked controlled `Drawer` with custom width. The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is selected, handled by controlling the `open` prop.",right:"The `openSecondary` prop allows the Drawer to open on the opposite side."},_=function(){return a.default.createElement("div",null,a.default.createElement(i.default,{render:function(e){return"Drawer - "+e}}),a.default.createElement(h.default,{text:y.default}),a.default.createElement(p.default,{title:"Docked example",description:C.simple,code:w.default},a.default.createElement(b.default,null)),a.default.createElement(p.default,{title:"Undocked example",description:C.undocked,code:P.default},a.default.createElement(v.default,null)),a.default.createElement(p.default,{title:"Open secondary example",description:C.right,code:x.default},a.default.createElement(D.default,null)),a.default.createElement(c.default,{code:k.default}))};t.default=_}});