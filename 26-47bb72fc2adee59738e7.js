webpackJsonp([26],{4:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(8),r=n(l);t.default=r.default},5:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(1),i=n(s),u=o(6),p=o(7),d=n(p),h=o(13),f=n(h),y=o(4),b=n(y),m=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,o=e.code,n=e.component,l=e.layoutSideBySide,r=this.context.muiTheme.rawTheme.palette,a=r.canvasColor,c={root:{backgroundColor:a,marginBottom:32},exampleBlock:{borderRadius:"0 0 2px 0",padding:"14px 24px 24px",margin:0,width:l?"45%":null,float:l?"right":null}},s=n?(0,u.parse)(o):{};return i.default.createElement(b.default,{style:c.root},i.default.createElement(d.default,{title:this.props.title,description:this.props.description||s.description},o),i.default.createElement(f.default,{style:c.exampleBlock},t))}}]),t}(s.Component);m.propTypes={children:s.PropTypes.node,code:s.PropTypes.string.isRequired,component:s.PropTypes.bool,description:s.PropTypes.string,layoutSideBySide:s.PropTypes.bool,title:s.PropTypes.string},m.defaultProps={component:!0},m.contextTypes={muiTheme:s.PropTypes.object},t.default=m},6:function(e,t,o){e.exports=o(2)(118)},7:function(e,t,o){e.exports=o(2)(321)},29:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var o=t.muiTheme.baseTheme;return{root:{position:"relative",cursor:e.disabled?"default":"pointer",overflow:"visible",display:"table",height:"auto",width:"100%"},input:{position:"absolute",cursor:e.disabled?"default":"pointer",pointerEvents:"all",opacity:0,width:"100%",height:"100%",zIndex:2,left:0,boxSizing:"border-box",padding:0,margin:0},controls:{display:"flex",width:"100%",height:"100%"},label:{float:"left",position:"relative",display:"block",width:"calc(100% - 60px)",lineHeight:(0,C.px2rem)("48px"),color:o.palette.textColor,fontFamily:o.fontFamily},wrap:{transition:k.default.easeOut(),float:"left",position:"relative",display:"block",flexShrink:0,width:(0,C.px2rem)(2*(60-o.spacing.desktopGutterLess)),marginRight:"right"===e.labelPosition?o.spacing.desktopGutterLess:0,marginLeft:"left"===e.labelPosition?o.spacing.desktopGutterLess:0},ripple:{color:e.rippleColor||o.palette.primary1Color,height:"200%",width:"200%",top:"-"+(0,C.px2rem)(24),left:"-"+(0,C.px2rem)(24)}}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=o(1),d=n(p),h=o(34),f=n(h),y=o(38),b=n(y),m=o(12),k=n(m),T=o(33),v=n(T),P=o(30),w=n(P),g=o(8),S=n(g),O=o(18),x=n(O),C=o(24),j=function(e){function t(){var e,o,n,l;r(this,t);for(var c=arguments.length,s=Array(c),i=0;i<c;i++)s[i]=arguments[i];return o=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={isKeyboardFocused:!1},n.handleChange=function(e){n.tabPressed=!1,n.setState({isKeyboardFocused:!1});var t=n.refs.checkbox.checked;!n.props.hasOwnProperty("checked")&&n.props.onParentShouldUpdate&&n.props.onParentShouldUpdate(t),n.props.onSwitch&&n.props.onSwitch(e,t)},n.handleKeyDown=function(e){var t=(0,b.default)(e);"tab"===t&&(n.tabPressed=!0),n.state.isKeyboardFocused&&"space"===t&&n.handleChange(e)},n.handleKeyUp=function(e){n.state.isKeyboardFocused&&"space"===(0,b.default)(e)&&n.handleChange(e)},n.handleMouseDown=function(e){0===e.button&&n.refs.touchRipple.start(e)},n.handleMouseUp=function(){n.refs.touchRipple.end()},n.handleMouseLeave=function(){n.refs.touchRipple.end()},n.handleTouchStart=function(e){n.refs.touchRipple.start(e)},n.handleTouchEnd=function(){n.refs.touchRipple.end()},n.handleBlur=function(e){n.setState({isKeyboardFocused:!1}),n.props.onBlur&&n.props.onBlur(e)},n.handleFocus=function(e){setTimeout(function(){n.tabPressed&&n.setState({isKeyboardFocused:!0})},150),n.props.onFocus&&n.props.onFocus(e)},l=o,a(n,l)}return c(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.refs.checkbox;this.props.switched&&e.checked===this.props.switched||!this.props.onParentShouldUpdate||this.props.onParentShouldUpdate(e.checked)}},{key:"componentWillReceiveProps",value:function(e){var t=e.hasOwnProperty("checked"),o=e.hasOwnProperty("toggled"),n=e.hasOwnProperty("defaultChecked")&&e.defaultChecked!==this.props.defaultChecked;if(t||o||n){var l=e.checked||e.toggled||e.defaultChecked||!1;this.setState({switched:l}),this.props.onParentShouldUpdate&&l!==this.props.switched&&this.props.onParentShouldUpdate(l)}}},{key:"isSwitched",value:function(){return this.refs.checkbox.checked}},{key:"setSwitched",value:function(e){this.props.hasOwnProperty("checked")&&this.props.checked!==!1?(0,x.default)(!1,"Cannot call set method while checked is defined as a property."):(this.props.onParentShouldUpdate&&this.props.onParentShouldUpdate(e),this.refs.checkbox.checked=e)}},{key:"getValue",value:function(){return this.refs.checkbox.value}},{key:"render",value:function(){var e=this.props,t=e.name,o=e.value,n=e.iconStyle,r=e.inputStyle,a=(e.inputType,e.label),c=e.labelStyle,u=e.labelPosition,p=(e.onSwitch,e.onBlur,e.onFocus,e.onMouseUp,e.onMouseDown,e.onMouseLeave,e.onTouchStart,e.onTouchEnd,e.onParentShouldUpdate,e.disabled),h=e.disableTouchRipple,y=e.disableFocusRipple,b=e.className,m=(e.rippleColor,e.rippleStyle),k=e.style,T=(e.switched,e.switchElement),P=e.thumbStyle,g=e.trackStyle,O=l(e,["name","value","iconStyle","inputStyle","inputType","label","labelStyle","labelPosition","onSwitch","onBlur","onFocus","onMouseUp","onMouseDown","onMouseLeave","onTouchStart","onTouchEnd","onParentShouldUpdate","disabled","disableTouchRipple","disableFocusRipple","className","rippleColor","rippleStyle","style","switched","switchElement","thumbStyle","trackStyle"]),x=this.context.muiTheme.prepareStyles,j=s(this.props,this.context),_=Object.assign(j.wrap,n),M=Object.assign(j.ripple,m);P&&(_.marginLeft=(0,C.px2rem)(_.marginLeft/2),_.marginRight=(0,C.px2rem)(_.marginRight/2));var R=a&&d.default.createElement("label",{style:x(Object.assign(j.label,c))},a),F=!p&&!h,U=!p&&!y,D=d.default.createElement(w.default,{ref:"touchRipple",key:"touchRipple",style:M,color:M.color,muiTheme:this.context.muiTheme,centerRipple:!0}),B=d.default.createElement(v.default,{key:"focusRipple",innerStyle:M,color:M.color,muiTheme:this.context.muiTheme,show:this.state.isKeyboardFocused}),I=[F?D:null,U?B:null],L=d.default.createElement(E,i({},O,{ref:"checkbox",style:x(Object.assign(j.input,r)),showTouchRipple:F,name:t,value:o,disabled:p,onBlur:this.handleBlur,onFocus:this.handleFocus,onChange:this.handleChange,onMouseUp:F&&this.handleMouseUp,onMouseDown:F&&this.handleMouseDown,onMouseLeave:F&&this.handleMouseLeave,onTouchStart:F&&this.handleTouchStart,onTouchEnd:F&&this.handleTouchEnd})),W=P?d.default.createElement("div",{style:x(_)},d.default.createElement("div",{style:x(Object.assign({},g))}),d.default.createElement(S.default,{style:P,zDepth:1,circle:!0}," ",I," ")):d.default.createElement("div",{style:x(_)},T,I),N="right"===u?d.default.createElement("div",{style:j.controls},W,R):d.default.createElement("div",{style:j.controls},R,W);return d.default.createElement("div",{ref:"root",className:b,style:x(Object.assign(j.root,k))},d.default.createElement(f.default,{target:"window",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}),L,N)}}]),t}(p.Component);j.propTypes={checked:p.PropTypes.bool,className:p.PropTypes.string,defaultChecked:p.PropTypes.bool,disableFocusRipple:p.PropTypes.bool,disableTouchRipple:p.PropTypes.bool,disabled:p.PropTypes.bool,iconStyle:p.PropTypes.object,inputStyle:p.PropTypes.object,inputType:p.PropTypes.string.isRequired,label:p.PropTypes.node,labelPosition:p.PropTypes.oneOf(["left","right"]),labelStyle:p.PropTypes.object,name:p.PropTypes.string,onBlur:p.PropTypes.func,onFocus:p.PropTypes.func,onMouseDown:p.PropTypes.func,onMouseLeave:p.PropTypes.func,onMouseUp:p.PropTypes.func,onParentShouldUpdate:p.PropTypes.func,onSwitch:p.PropTypes.func,onTouchEnd:p.PropTypes.func,onTouchStart:p.PropTypes.func,rippleColor:p.PropTypes.string,rippleStyle:p.PropTypes.object,style:p.PropTypes.object,switchElement:p.PropTypes.element.isRequired,switched:p.PropTypes.bool.isRequired,thumbStyle:p.PropTypes.object,trackStyle:p.PropTypes.object,value:p.PropTypes.any},j.contextTypes={muiTheme:p.PropTypes.object.isRequired};var E=function(e){function t(e,o){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return n.checked=!1,n.onTouchTap=function(e){var t=n.props,o=t.disabled,l=t.onChange;o||(n.checked=!n.checked,l(e))},e.hasOwnProperty("defaultChecked")&&(n.checked=e.defaultChecked),n}return c(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.style,o=(e.checked,e.defaultChecked,e.disabled),n=(e.onChange,e.onMouseDown),r=e.onMouseLeave,a=e.onMouseUp,c=e.onTouchStart,s=e.onTouchEnd,u=e.showTouchRipple,p=e.value,h=l(e,["style","checked","defaultChecked","disabled","onChange","onMouseDown","onMouseLeave","onMouseUp","onTouchStart","onTouchEnd","showTouchRipple","value"]);return this.value=p,d.default.createElement("div",i({},h,{style:t,disabled:o,value:p,onTouchTap:this.onTouchTap,onMouseUp:u&&a,onMouseDown:u&&n,onMouseLeave:u&&r,onTouchStart:u&&c,onTouchEnd:u&&s}))}}]),t}(p.Component);E.propTypes={checked:p.PropTypes.bool,defaultChecked:p.PropTypes.bool,onMouseDown:p.PropTypes.func,onMouseLeave:p.PropTypes.func,onMouseUp:p.PropTypes.func,onTouchEnd:p.PropTypes.func,onTouchStart:p.PropTypes.func,style:p.PropTypes.object},t.default=j},30:function(e,t,o){e.exports=o(2)(341)},33:function(e,t,o){e.exports=o(2)(337)},55:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(60),r=n(l);t.default=r.default},60:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var o=t.muiTheme.checkbox,n="0.64rem";return{icon:{height:n,width:n},check:{position:"absolute",opacity:0,transform:"scale(0)",transitionOrigin:"50% 50%",transition:b.default.easeOut("450ms","opacity","0ms")+", "+b.default.easeOut("0ms","transform","450ms"),fill:o.checkedColor},box:{position:"absolute",opacity:1,fill:o.boxColor,transition:b.default.easeOut("2s",null,"200ms")},checkWhenSwitched:{opacity:1,transform:"scale(1)",transition:b.default.easeOut("0ms","opacity","0ms")+", "+b.default.easeOut("800ms","transform","0ms")},boxWhenSwitched:{transition:b.default.easeOut("100ms",null,"0ms"),fill:o.checkedColor},checkWhenDisabled:{fill:o.disabledColor},boxWhenDisabled:{fill:e.checked?"transparent":o.disabledColor},label:{lineHeight:n,color:e.disabled?o.labelDisabledColor:o.labelColor}}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=o(1),d=n(p),h=o(29),f=n(h),y=o(12),b=n(y),m=o(62),k=n(m),T=o(63),v=n(T),P=o(50),w=n(P),g=function(e){function t(){var e,o,n,l;r(this,t);for(var c=arguments.length,s=Array(c),i=0;i<c;i++)s[i]=arguments[i];return o=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={switched:!1},n.handleCheck=function(e,t){n.props.onCheck&&n.props.onCheck(e,t)},n.handleStateChange=function(e){n.setState({switched:e})},l=o,a(n,l)}return c(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.checked,o=e.defaultChecked,n=e.valueLink;(t||o||n&&n.value)&&this.setState({switched:!0})}},{key:"componentWillReceiveProps",value:function(e){this.setState({switched:this.props.checked!==e.checked?e.checked:this.state.switched})}},{key:"isChecked",value:function(){return this.refs.enhancedSwitch.isSwitched()}},{key:"setChecked",value:function(e){this.refs.enhancedSwitch.setSwitched(e)}},{key:"render",value:function(){var e=this.props,t=e.iconStyle,o=(e.onCheck,e.checkedIcon),n=e.uncheckedIcon,r=e.unCheckedIcon,a=l(e,["iconStyle","onCheck","checkedIcon","uncheckedIcon","unCheckedIcon"]),c=s(this.props,this.context),u=Object.assign(c.box,this.state.switched&&c.boxWhenSwitched,t,this.props.disabled&&c.boxWhenDisabled),p=Object.assign(c.check,this.state.switched&&c.checkWhenSwitched,t,this.props.disabled&&c.checkWhenDisabled),h=o?d.default.cloneElement(o,{style:Object.assign(p,o.props.style)}):d.default.createElement(v.default,{style:p}),y=r||n?d.default.cloneElement(r||n,{style:Object.assign(u,(r||n).props.style)}):d.default.createElement(k.default,{style:u}),b=d.default.createElement("div",null,y,h),m=this.state.switched?p.fill:u.fill,T=Object.assign(c.icon,t),P=Object.assign(c.label,this.props.labelStyle),w={ref:"enhancedSwitch",inputType:"checkbox",switched:this.state.switched,switchElement:b,rippleColor:m,iconStyle:T,onSwitch:this.handleCheck,labelStyle:P,onParentShouldUpdate:this.handleStateChange,defaultSwitched:this.props.defaultChecked,labelPosition:this.props.labelPosition};return d.default.createElement(f.default,i({},a,w))}}]),t}(d.default.Component);g.propTypes={checked:d.default.PropTypes.bool,checkedIcon:d.default.PropTypes.element,defaultChecked:d.default.PropTypes.bool,disabled:d.default.PropTypes.bool,iconStyle:d.default.PropTypes.object,inputStyle:d.default.PropTypes.object,labelPosition:d.default.PropTypes.oneOf(["left","right"]),labelStyle:d.default.PropTypes.object,onCheck:d.default.PropTypes.func,style:d.default.PropTypes.object,unCheckedIcon:(0,w.default)(d.default.PropTypes.element,"Use uncheckedIcon instead."),uncheckedIcon:d.default.PropTypes.element,valueLink:d.default.PropTypes.object},g.defaultProps={defaultChecked:!1,labelPosition:"right",disabled:!1},g.contextTypes={muiTheme:d.default.PropTypes.object.isRequired},t.default=g},62:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),r=n(l),a=o(10),c=n(a),s=o(11),i=n(s),u=function(e){return r.default.createElement(i.default,e,r.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))};u=(0,c.default)(u),u.displayName="ToggleCheckBoxOutlineBlank",t.default=u},63:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),r=n(l),a=o(10),c=n(a),s=o(11),i=n(s),u=function(e){return r.default.createElement(i.default,e,r.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))};u=(0,c.default)(u),u.displayName="ToggleCheckBox",t.default=u},548:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(1),i=n(s),u=o(16),p=n(u),d=o(55),h=n(d),f=o(5),y=n(f),b=o(98),m=n(b),k=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"getStyles",value:function(){return{headline:{fontSize:24,lineHeight:"32px",paddingTop:16,marginBottom:12,letterSpacing:0,fontWeight:m.default.fontWeightNormal,color:m.default.textDarkBlack},title:{fontSize:20,lineHeight:"28px",paddingTop:19,marginBottom:13,letterSpacing:0,fontWeight:m.default.fontWeightMedium,color:m.default.textDarkBlack}}}},{key:"render",value:function(){var e='<Checkbox\n  id="checkboxId1"\n  name="checkboxName1"\n  value="checkboxValue1"\n  label="went for a run today"\n  style={{\n    width: \'50%\',\n    margin: \'0 auto\'\n  }}\n  iconStyle={{\n    fill: \'#FF4081\'\n  }}/>',t='<Checkbox\n  id="checkboxId1"\n  name="checkboxName1"\n  value="checkboxValue1"\n  label="went for a run today"\n  className="muidocs-checkbox-example"\n  iconStyle={{\n    fill: \'#FF9800\'\n  }}/>\n\n/* In our CSS file */\n.muidocs-checkbox-example { \n  border: 2px solid #0000FF;\n  background-color: #FF9800;\n}',o=this.getStyles();return i.default.createElement("div",null,i.default.createElement(p.default,{render:function(e){return"Inline Styles - "+e}}),i.default.createElement("h2",{style:o.headline},"Inline Styles"),i.default.createElement("p",null,"所有的Chanjet-UI组件所用的css样式都通过inline-style的方式定义在组件内部(js文件内)。关于将 CSS 定义 JS 内的讨论可以参考",i.default.createElement("a",{href:"https://github.com/callemall/material-ui/issues/30"},"discussion thread")," 和 ",i.default.createElement("a",{href:"https://speakerdeck.com/vjeux/react-css-in-js"},"this presentation")," ."),i.default.createElement("h3",{style:o.title},"重写 Inline Styles"),i.default.createElement(y.default,{code:e,component:!1},i.default.createElement(h.default,{id:"checkboxId1",name:"checkboxName1",value:"checkboxValue1",label:"Checked the mail",style:{width:"50%",margin:"0 auto"},iconStyle:{fill:"#FF4081"}})),i.default.createElement("p",null,"如果你想要改变组件已定义好的style, 你只需定义好你要重写的style, 并作为对象通过props 传递给组件即可。 你传进的style对象将会merge到组件预定义的style上, 并作用到组件的根结点或最外层结点上。一些组件还提供了 一些额外的style属性以便你做更细的ui控制。 如果你想要重写组件内更深一些结点的style, 而我们又没有提供这样 的属性以供重写, 请 ",i.default.createElement("a",{href:"http://gitlab.rd.chanjet.com/mutants/chanjet-ui/issues"},"提交问题 ")," 通知我们添加上。"),i.default.createElement("h3",{style:o.title}," 混合使用 inline-style 和 CSS"),i.default.createElement(y.default,{code:t,component:!1},i.default.createElement(h.default,{id:"checkboxId1",name:"checkboxName1",value:"checkboxValue1",label:"Currently a UTD student",className:"muidocs-checkbox-example",iconStyle:{fill:"#FF9800"}})),i.default.createElement("p",null,"如果你喜欢通过CSS来定义样式, 你可以通过传递给组件一个 ",i.default.createElement("code",null,"className"),"的props 来给组件的最外层结点添加一个 ",i.default.createElement("code",null,"class")," 属性。 但是要注意的一点是: 组件内已定义过的inline-style的优先级要高于通过 CSS 的 ",i.default.createElement("code",null,"class")," 定义的样式。 你可以通过查看组件代码内 的 ",i.default.createElement("code",null,"getStyles"),"` 方法来确定哪些样式已被定义在组件内。"))}}]),t}(i.default.Component);t.default=k}});