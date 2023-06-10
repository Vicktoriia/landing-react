"use strict";(self.webpackChunklanding_react=self.webpackChunklanding_react||[]).push([[829],{1829:function(e,n,a){a.r(n),a.d(n,{default:function(){return M},scroll:function(){return A}});var r=a(9439),o=a(2791),t=a(801),i=a(5445),s=a.n(i),c=a(1413),l=a(5987),d=a(1694),u=a.n(d),f=a(162),m=a(6543),v=a(7472),b=a(184),Z=["bsPrefix","className","variant","as"],x=o.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,o=e.variant,t=e.as,i=void 0===t?"img":t,s=(0,l.Z)(e,Z),d=(0,f.vE)(a,"card-img");return(0,b.jsx)(i,(0,c.Z)({ref:n,className:u()(o?"".concat(d,"-").concat(o):d,r)},s))}));x.displayName="CardImg";var h=x,g=a(6040),p=["bsPrefix","className","as"],N=o.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,t=e.as,i=void 0===t?"div":t,s=(0,l.Z)(e,p),d=(0,f.vE)(a,"card-header"),m=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:d}}),[d]);return(0,b.jsx)(g.Z.Provider,{value:m,children:(0,b.jsx)(i,(0,c.Z)((0,c.Z)({ref:n},s),{},{className:u()(r,d)}))})}));N.displayName="CardHeader";var y=N,j=["bsPrefix","className","bg","text","border","body","children","as"],w=(0,v.Z)("h5"),E=(0,v.Z)("h6"),C=(0,m.Z)("card-body"),k=(0,m.Z)("card-title",{Component:w}),P=(0,m.Z)("card-subtitle",{Component:E}),T=(0,m.Z)("card-link",{Component:"a"}),R=(0,m.Z)("card-text",{Component:"p"}),F=(0,m.Z)("card-footer"),H=(0,m.Z)("card-img-overlay"),I=o.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,o=e.bg,t=e.text,i=e.border,s=e.body,d=void 0!==s&&s,m=e.children,v=e.as,Z=void 0===v?"div":v,x=(0,l.Z)(e,j),h=(0,f.vE)(a,"card");return(0,b.jsx)(Z,(0,c.Z)((0,c.Z)({ref:n},x),{},{className:u()(r,h,o&&"bg-".concat(o),t&&"text-".concat(t),i&&"border-".concat(i)),children:d?(0,b.jsx)(C,{children:m}):m}))}));I.displayName="Card";var D=Object.assign(I,{Img:h,Title:k,Subtitle:P,Body:C,Link:T,Text:R,Header:y,Footer:F,ImgOverlay:H}),S=a(5316),B=a(7689),O=function(e){var n,a,t=(0,o.useState)(null),i=(0,r.Z)(t,2),s=i[0],c=i[1],l=function(){c(null)},d=(0,B.TH)(),u=(0,B.s0)(),f=null!==(n=null===(a=d.state)||void 0===a?void 0:a.from)&&void 0!==n?n:"/";return(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("button",{className:"btn-back",type:"button",onClick:function(){return u(f)},children:(0,b.jsx)("i",{className:"fa fa-arrow-left-long mr-2"})}),(0,b.jsx)("div",{className:"row",children:e.data&&e.data.map((function(e,n){return(0,b.jsx)("div",{className:"col-6 col-md-3",children:(0,b.jsx)(D,{className:"shadow",children:(0,b.jsxs)("a",{href:e.largeImage,title:e.title,"data-toggle":"modal",onClick:function(n){n.preventDefault(),c(e)},children:[(0,b.jsx)(D.Img,{variant:"top",src:e.smallImage,alt:e.title}),(0,b.jsxs)(D.Body,{children:[(0,b.jsx)(D.Title,{children:e.title}),(0,b.jsx)(D.Text,{children:e.price})]})]})})},"".concat(e.title,"-").concat(n))}))}),s&&(0,b.jsxs)(S.Z,{show:!!s,onHide:l,onClick:function(e){"IMG"===e.target.tagName&&l()},children:[(0,b.jsx)(S.Z.Header,{style:{height:"30px"},closeButton:!0,children:(0,b.jsx)(S.Z.Title,{children:s.title})}),(0,b.jsx)(S.Z.Body,{children:(0,b.jsx)("img",{src:s.largeImage,alt:"",className:"img-fluid"})})]})]})},A=new(s())('a[href*="#"]',{speed:1e3,speedAsDuration:!0}),M=function(){var e=(0,o.useState)({}),n=(0,r.Z)(e,2),a=n[0],i=n[1];return(0,o.useEffect)((function(){i(t)}),[]),(0,b.jsx)("main",{children:(0,b.jsx)("div",{children:(0,b.jsx)(O,{data:a.Portfolio})})})}},5316:function(e,n,a){a.d(n,{Z:function(){return _}});var r,o=a(9439),t=a(5987),i=a(1413),s=a(1694),c=a.n(s),l=a(3070),d=a(7357),u=a(8376),f=a(6382);function m(e){if((!r&&0!==r||e)&&d.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var v=a(8633),b=a(9007),Z=a(3201),x=a(1683),h=a(3690),g=a(2791),p=a(2121),N=a(4382),y=a(2709),j=a(6543),w=(0,j.Z)("modal-body"),E=a(9820),C=a(162),k=a(184),P=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],T=g.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,o=e.contentClassName,s=e.centered,l=e.size,d=e.fullscreen,u=e.children,f=e.scrollable,m=(0,t.Z)(e,P);a=(0,C.vE)(a,"modal");var v="".concat(a,"-dialog"),b="string"===typeof d?"".concat(a,"-fullscreen-").concat(d):"".concat(a,"-fullscreen");return(0,k.jsx)("div",(0,i.Z)((0,i.Z)({},m),{},{ref:n,className:c()(v,r,l&&"".concat(a,"-").concat(l),s&&"".concat(v,"-centered"),f&&"".concat(v,"-scrollable"),d&&b),children:(0,k.jsx)("div",{className:c()("".concat(a,"-content"),o),children:u})}))}));T.displayName="ModalDialog";var R=T,F=(0,j.Z)("modal-footer"),H=a(8024),I=["bsPrefix","className","closeLabel","closeButton"],D=g.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,o=e.closeLabel,s=void 0===o?"Close":o,l=e.closeButton,d=void 0!==l&&l,u=(0,t.Z)(e,I);return a=(0,C.vE)(a,"modal-header"),(0,k.jsx)(H.Z,(0,i.Z)((0,i.Z)({ref:n},u),{},{className:c()(r,a),closeLabel:s,closeButton:d}))}));D.displayName="ModalHeader";var S=D,B=(0,a(7472).Z)("h4"),O=(0,j.Z)("modal-title",{Component:B}),A=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function M(e){return(0,k.jsx)(y.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function L(e){return(0,k.jsx)(y.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var z=g.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,s=e.style,y=e.dialogClassName,j=e.contentClassName,w=e.children,P=e.dialogAs,T=void 0===P?R:P,F=e["aria-labelledby"],H=e["aria-describedby"],I=e["aria-label"],D=e.show,S=void 0!==D&&D,B=e.animation,O=void 0===B||B,z=e.backdrop,_=void 0===z||z,K=e.keyboard,U=void 0===K||K,W=e.onEscapeKeyDown,G=e.onShow,q=e.onHide,J=e.container,Q=e.autoFocus,V=void 0===Q||Q,X=e.enforceFocus,Y=void 0===X||X,$=e.restoreFocus,ee=void 0===$||$,ne=e.restoreFocusOptions,ae=e.onEntered,re=e.onExit,oe=e.onExiting,te=e.onEnter,ie=e.onEntering,se=e.onExited,ce=e.backdropClassName,le=e.manager,de=(0,t.Z)(e,A),ue=(0,g.useState)({}),fe=(0,o.Z)(ue,2),me=fe[0],ve=fe[1],be=(0,g.useState)(!1),Ze=(0,o.Z)(be,2),xe=Ze[0],he=Ze[1],ge=(0,g.useRef)(!1),pe=(0,g.useRef)(!1),Ne=(0,g.useRef)(null),ye=(0,v.Z)(),je=(0,o.Z)(ye,2),we=je[0],Ee=je[1],Ce=(0,Z.Z)(n,Ee),ke=(0,b.Z)(q),Pe=(0,C.SC)();a=(0,C.vE)(a,"modal");var Te=(0,g.useMemo)((function(){return{onHide:ke}}),[ke]);function Re(){return le||(0,N.t)({isRTL:Pe})}function Fe(e){if(d.Z){var n=Re().getScrollbarWidth()>0,a=e.scrollHeight>(0,u.Z)(e).documentElement.clientHeight;ve({paddingRight:n&&!a?m():void 0,paddingLeft:!n&&a?m():void 0})}}var He=(0,b.Z)((function(){we&&Fe(we.dialog)}));(0,x.Z)((function(){(0,f.Z)(window,"resize",He),null==Ne.current||Ne.current()}));var Ie=function(){ge.current=!0},De=function(e){ge.current&&we&&e.target===we.dialog&&(pe.current=!0),ge.current=!1},Se=function(){he(!0),Ne.current=(0,h.Z)(we.dialog,(function(){he(!1)}))},Be=function(e){"static"!==_?pe.current||e.target!==e.currentTarget?pe.current=!1:null==q||q():function(e){e.target===e.currentTarget&&Se()}(e)},Oe=(0,g.useCallback)((function(e){return(0,k.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:c()("".concat(a,"-backdrop"),ce,!O&&"show")}))}),[O,ce,a]),Ae=(0,i.Z)((0,i.Z)({},s),me);Ae.display="block";return(0,k.jsx)(E.Z.Provider,{value:Te,children:(0,k.jsx)(p.Z,{show:S,ref:Ce,backdrop:_,container:J,keyboard:!0,autoFocus:V,enforceFocus:Y,restoreFocus:ee,restoreFocusOptions:ne,onEscapeKeyDown:function(e){U?null==W||W(e):(e.preventDefault(),"static"===_&&Se())},onShow:G,onHide:q,onEnter:function(e,n){e&&Fe(e),null==te||te(e,n)},onEntering:function(e,n){null==ie||ie(e,n),(0,l.ZP)(window,"resize",He)},onEntered:ae,onExit:function(e){null==Ne.current||Ne.current(),null==re||re(e)},onExiting:oe,onExited:function(e){e&&(e.style.display=""),null==se||se(e),(0,f.Z)(window,"resize",He)},manager:Re(),transition:O?M:void 0,backdropTransition:O?L:void 0,renderBackdrop:Oe,renderDialog:function(e){return(0,k.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:Ae,className:c()(r,a,xe&&"".concat(a,"-static"),!O&&"show"),onClick:_?Be:void 0,onMouseUp:De,"aria-label":I,"aria-labelledby":F,"aria-describedby":H,children:(0,k.jsx)(T,(0,i.Z)((0,i.Z)({},de),{},{onMouseDown:Ie,className:y,contentClassName:j,children:w}))}))}})})}));z.displayName="Modal";var _=Object.assign(z,{Body:w,Header:S,Title:O,Footer:F,Dialog:R,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=829.288d9a24.chunk.js.map