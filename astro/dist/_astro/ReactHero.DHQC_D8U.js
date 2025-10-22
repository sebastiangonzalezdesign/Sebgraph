import{r as a}from"./index.CVf8TyFT.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=a,_=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,d){var r,o={},s=null,p=null;d!==void 0&&(s=""+d),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)m.call(e,r)&&!y.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:_,type:t,key:s,ref:p,props:o,_owner:x.current}}n.Fragment=c;n.jsx=u;n.jsxs=u;l.exports=n;var i=l.exports;function v(){return i.jsxs("section",{style:{padding:"2rem",border:"1px solid #ddd"},children:[i.jsx("h2",{children:"React Hero (embedded)"}),i.jsx("p",{children:"This is a simple React component rendered inside Astro to validate integration."})]})}export{v as default};
