(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e){e.exports={a:600}},33:function(e,t,n){e.exports=n(46)},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(21),c=n(22),o=n(29),l=n(23),i=n(30),u=n(5),s=n(0),m=n.n(s),d=n(9),g=n(10),v=n(8),f=n.n(v),b=n(1),h=n(11),E=function(e){return s.createElement(s.Fragment,null,s.createElement("input",{value:"".concat(e.title.toLowerCase(),"-control"),name:"menu-control",className:"menu-control",id:"".concat(e.title.toLowerCase(),"-control"),type:"radio",onClick:e.onClick}),s.createElement("label",{className:"menu-tool",htmlFor:"".concat(e.title.toLowerCase(),"-control"),title:e.title},s.createElement("i",{className:"fa fa-2x fa-".concat(e.icon),"aria-hidden":"true"})))},p=function(){var e=Object(b.b)();return s.createElement(E,{onClick:function(){console.log("Adjust option clicked"),e({type:"openToolDrawer"})},title:"Adjust",icon:"adjust"})},O=function(){var e=Object(b.b)();return s.createElement(E,{onClick:function(){console.log("Overlay option clicked"),e({type:"openToolDrawer"})},title:"Overlay",icon:"window-restore"})},j=function(){var e=Object(b.b)();return s.createElement(E,{onClick:function(){console.log("transform option clicked"),e({type:"openToolDrawer"})},title:"Transform",icon:"arrows"})},w=m.a.createContext({canvas:null,ctx:null}),I=w.Provider,C=w.Consumer;function N(){var e=Object(g.a)([""]);return N=function(){return e},e}function y(){var e=Object(g.a)([""]);return y=function(){return e},e}function k(){var e=Object(g.a)(["\n  background-color: var(--DARK_THEME_BACKGROUND);\n  color: white;\n  border: none;\n  cursor: pointer;\n  padding: 0 1em;\n\n  &:disabled {\n    background: rgba(255,255,255,0.6);\n    color: #333;\n    cursor: not-allowed;\n  }\n"]);return k=function(){return e},e}var x,D=h.a.button(k()),T=Object(h.a)(D)(y()),A=Object(h.a)(D)(N()),R=function(e){var t=Object(b.b)(),n=Object(b.c)(function(e){return e.imageEditor});return s.createElement("div",{className:"menu-bar"},s.createElement(T,{disabled:n.past.length<1,className:"undo-btn",onClick:function(){return t(v.ActionCreators.undo())}},s.createElement("i",{className:"fa fa-2x fa-undo",title:"undo"})),s.createElement("div",{className:"tool-menu"},s.createElement("ul",null,s.createElement("li",null,s.createElement(p,null)),s.createElement("li",null,s.createElement(O,null)),s.createElement("li",null,s.createElement(j,null)))),s.createElement(A,{disabled:n.future.length<1,className:"redo-btn",onClick:function(){return t(v.ActionCreators.redo())}},s.createElement("i",{className:"fa fa-2x fa-repeat",title:"redo"})))},F=function(){return s.createElement(C,null,function(e){return s.createElement(R,{ctx:e.ctx})})},L=function(){return s.createElement("header",{className:"header"},s.createElement("h2",{className:"app-name"},"Image Editor"))},M=n(28),S=function(e){var t=Object(b.c)(function(e){return e.imageEditor}),n=Object(b.b)(),a=Object(s.useState)(!0),r=Object(M.a)(a,2),c=r[0],o=r[1],l=e.ctx,i=t.present.adjustImage.invertImage;console.log(t.past);Object(s.useEffect)(function(){c?o(!1):function(){for(var e=l.getImageData(0,0,l.canvas.width,l.canvas.height),t=new ImageData(e.data,e.width,e.height),n=t.data,a=n.length,r=0;r<a;r++)(r+1)%4!==0&&(n[r]=255-n[r]);l.putImageData(t,0,0),l.save()}()},[i]);return m.a.createElement("div",{className:"image-invert"},m.a.createElement("div",{className:"toggle-wrapper"},m.a.createElement("input",{id:"image-invert-control",name:"image-invert-control",type:"checkbox",className:"toggle material-toggle",onChange:function(){n({type:"toggleInvertImage"})},checked:i})),m.a.createElement("label",{htmlFor:"image-invert-control"},"Invert Color"))},B=function(){return m.a.createElement(C,null,function(e){return m.a.createElement(S,{ctx:e.ctx})})},J=function(){var e=Object(b.c)(function(e){return e.drawer.isOpen}),t=Object(b.b)();return s.createElement("div",{className:"tool-drawer ".concat(e?"active":"")},s.createElement("div",{className:"close-drawer clear"},s.createElement("i",{onClick:function(){return t({type:"closeToolDrawer"})},className:"fa fa-2x fa-times float-right","aria-hidden":"true"})),s.createElement("div",{className:"drawer-body"},s.createElement(B,null)))},U=(n(44),n(7));!function(e){e.NONE="none",e.OVERLAY="overlay",e.TRANSFORM="transform",e.ADJUST="adjust"}(x||(x={}));var K={invertImage:!1,brightness:100,contrast:100},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"toggleInvertImage":return Object(a.a)({},e,{invertImage:!e.invertImage});case"adjustBrightness":return Object(a.a)({},e,{brightness:t.payload.brightness});case"adjustContrast":return Object(a.a)({},e,{contrast:t.payload.contrast});default:return e}},G=f()(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{adjustImage:K},t=arguments.length>1?arguments[1]:void 0;return{adjustImage:_(e.adjustImage,t)}},{filter:function(e,t,n){var a=t.adjustImage,r=n.present.adjustImage;return r.invertImage!==a.invertImage||r.brightness!==a.brightness||r.contrast!==a.contrast}}),H=Object(U.b)({drawer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"openToolDrawer":return Object(a.a)({},e,{isOpen:!0});case"closeToolDrawer":return Object(a.a)({},e,{isOpen:!1});case"toggleToolDrawer":return Object(a.a)({},e,{isOpen:!e.isOpen});default:return e}},selectedMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x.NONE,t=arguments.length>1?arguments[1]:void 0;return"selectMenuToolOption"===t.type?t.selectedMenu:e},imageEditor:G}),P=Object(U.c)(H),V=n(27);n.d(t,"App",function(){return Y});var Y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).addImage=n.addImage.bind(Object(u.a)(Object(u.a)(n))),n.configureCanvas=n.configureCanvas.bind(Object(u.a)(Object(u.a)(n))),n.state={canvas:null,ctx:null},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"addImage",value:function(e){var t=new Image,n=e.target.files[0],a=new FileReader,r=this.state,c=r.canvas,o=r.ctx;n&&(t.onload=function(){if(c&&o){var e=t.width/t.height;c.height=c.width/e,o.drawImage(t,0,0,c.width,c.height),o.save()}},a.onloadend=function(){t.src=a.result},a.readAsDataURL(n))}},{key:"configureCanvas",value:function(e){var t=this;this.setState(function(t,n){return Object(a.a)({},t,{canvas:e,ctx:e.getContext("2d")})},function(){t.state.canvas.width=V.a,t.state.canvas.height=500})}},{key:"render",value:function(){return s.createElement(b.a,{store:P},s.createElement(I,{value:{canvas:this.state.canvas,ctx:this.state.ctx}},s.createElement("div",{id:"app"},s.createElement(L,null),s.createElement("div",{className:"input-container"},s.createElement("input",{onChange:this.addImage,id:"file-control",type:"file",accept:"image/*"})),s.createElement("div",{className:"canvas-container"},s.createElement("canvas",{ref:this.configureCanvas})),s.createElement(F,null),s.createElement(J,null))))}}]),t}(s.Component),q=document.getElementById("root");Object(d.render)(s.createElement(Y,null),q)}},[[33,2,1]]]);
//# sourceMappingURL=main.47087702.chunk.js.map