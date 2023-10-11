function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r,n,o,i,a,c,u,s,l,f,p,v,h,d,g,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},m={},w={},_=b.parcelRequire3a11;null==_&&((_=function(t){if(t in m)return m[t].exports;if(t in w){var e=w[t];delete w[t];var r={id:t,exports:{}};return m[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){w[t]=e},b.parcelRequire3a11=_),_.register("27Lyk",function(e,r){t(e.exports,"register",()=>n,t=>n=t),t(e.exports,"resolve",()=>o,t=>o=t);var n,o,i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),_("27Lyk").register(JSON.parse('{"f9fpV":"index.300b1617.js","eyyUD":"icons.c14567a0.svg"}'));var O={},j={},S=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
j=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
S("object"==typeof self&&self)||S("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||j||Function("return this")();var E={},L={};// Detect IE8's incomplete defineProperty implementation
E=!(L=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var x={},k={};k=!L(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var T=Function.prototype.call;x=k?T.bind(T):function(){return T.apply(T,arguments)};var P={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;i=M&&!P.call({1:2},1)?function(t){var e=M(this,t);return!!e&&e.enumerable}:P;var $={};$=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var F={},I={},D={},N=Function.prototype,C=N.call,A=k&&N.bind.bind(C,C),H={},R=(D=k?A:function(t){return function(){return C.apply(t,arguments)}})({}.toString),G=D("".slice);H=function(t){return G(R(t),8,-1)};var q=Object,U=D("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
I=L(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!q("z").propertyIsEnumerable(0)})?function(t){return"String"===H(t)?U(t,""):q(t)}:q;var z={},B={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
B=function(t){return null==t};var W=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
z=function(t){if(B(t))throw new W("Can't call method on "+t);return t},F=function(t){return I(z(t))};var Y={},V={},J={},K={},Q={},X="object"==typeof document&&document.all,Z=(Q={all:X,IS_HTMLDDA:void 0===X&&void 0!==X}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
K=Q.IS_HTMLDDA?function(t){return"function"==typeof t||t===Z}:function(t){return"function"==typeof t};var tt=Q.all;J=Q.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:K(t)||t===tt}:function(t){return"object"==typeof t?null!==t:K(t)};var te={},tr={};tr=function(t,e){var r;return arguments.length<2?(r=j[t],K(r)?r:void 0):j[t]&&j[t][e]};var tn={};tn=D({}.isPrototypeOf);var to={},ti={},ta={},tc={};tc="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tu=j.process,ts=j.Deno,tl=tu&&tu.versions||ts&&ts.version,tf=tl&&tl.v8;tf&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(c=(a=tf.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!c&&tc&&(!(a=tc.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=tc.match(/Chrome\/(\d+)/))&&(c=+a[1]),ta=c;var tp=j.String;to=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ti=!!Object.getOwnPropertySymbols&&!L(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tp(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ta&&ta<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tv=Object;te=to?function(t){return"symbol"==typeof t}:function(t){var e=tr("Symbol");return K(e)&&tn(e.prototype,tv(t))};var th={},td={},tg={},ty=String;tg=function(t){try{return ty(t)}catch(t){return"Object"}};var tb=TypeError;// `Assert: IsCallable(argument) is true`
td=function(t){if(K(t))return t;throw new tb(tg(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
th=function(t,e){var r=t[e];return B(r)?void 0:td(r)};var tm={},tw=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tm=function(t,e){var r,n;if("string"===e&&K(r=t.toString)&&!J(n=x(r,t))||K(r=t.valueOf)&&!J(n=x(r,t))||"string"!==e&&K(r=t.toString)&&!J(n=x(r,t)))return n;throw new tw("Can't convert object to primitive value")};var t_={},tO={};tO=!1;var tj={},tS={},tE=Object.defineProperty;tS=function(t,e){try{tE(j,t,{value:e,configurable:!0,writable:!0})}catch(r){j[t]=e}return e};var tL="__core-js_shared__";tj=j[tL]||tS(tL,{}),(t_=function(t,e){return tj[t]||(tj[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.33.0",mode:tO?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var tx={},tk={},tT=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tk=function(t){return tT(z(t))};var tP=D({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tx=Object.hasOwn||function(t,e){return tP(tk(t),e)};var tM={},t$=0,tF=Math.random(),tI=D(1..toString);tM=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tI(++t$+tF,36)};var tD=j.Symbol,tN=t_("wks"),tC=to?tD.for||tD:tD&&tD.withoutSetter||tM,tA=TypeError,tH=(tx(tN,r="toPrimitive")||(tN[r]=ti&&tx(tD,r)?tD[r]:tC("Symbol."+r)),tN[r]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
V=function(t,e){if(!J(t)||te(t))return t;var r,n=th(t,tH);if(n){if(void 0===e&&(e="default"),r=x(n,t,e),!J(r)||te(r))return r;throw new tA("Can't convert object to primitive value")}return void 0===e&&(e="number"),tm(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
Y=function(t){var e=V(t,"string");return te(e)?e:e+""};var tR={},tG={},tq=j.document,tU=J(tq)&&J(tq.createElement);tG=function(t){return tU?tq.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tR=!E&&!L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tG("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tz=Object.getOwnPropertyDescriptor;o=E?tz:function(t,e){if(t=F(t),e=Y(e),tR)try{return tz(t,e)}catch(t){}if(tx(t,e))return $(!x(i,t,e),t[e])};var tB={},tW={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tW=E&&L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tY={},tV=String,tJ=TypeError;// `Assert: Type(argument) is Object`
tY=function(t){if(J(t))return t;throw new tJ(tV(t)+" is not an object")};var tK=TypeError,tQ=Object.defineProperty,tX=Object.getOwnPropertyDescriptor,tZ="enumerable",t0="configurable",t1="writable";u=E?tW?function(t,e,r){if(tY(t),e=Y(e),tY(r),"function"==typeof t&&"prototype"===e&&"value"in r&&t1 in r&&!r[t1]){var n=tX(t,e);n&&n[t1]&&(t[e]=r.value,r={configurable:t0 in r?r[t0]:n[t0],enumerable:tZ in r?r[tZ]:n[tZ],writable:!1})}return tQ(t,e,r)}:tQ:function(t,e,r){if(tY(t),e=Y(e),tY(r),tR)try{return tQ(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tK("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tB=E?function(t,e,r){return u(t,e,$(1,r))}:function(t,e,r){return t[e]=r,t};var t2={},t3={},t7=Function.prototype,t4=E&&Object.getOwnPropertyDescriptor,t8=tx(t7,"name")&&(!E||E&&t4(t7,"name").configurable),t9={},t5=D(Function.toString);K(tj.inspectSource)||(tj.inspectSource=function(t){return t5(t)}),t9=tj.inspectSource;var t6={},et={},ee=j.WeakMap;et=K(ee)&&/native code/.test(String(ee));var er={},en=t_("keys");er=function(t){return en[t]||(en[t]=tM(t))};var eo={};eo={};var ei="Object already initialized",ea=j.TypeError,ec=j.WeakMap;if(et||tj.state){var eu=tj.state||(tj.state=new ec);/* eslint-disable no-self-assign -- prototype methods protection */eu.get=eu.get,eu.has=eu.has,eu.set=eu.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(t,e){if(eu.has(t))throw new ea(ei);return e.facade=t,eu.set(t,e),e},l=function(t){return eu.get(t)||{}},f=function(t){return eu.has(t)}}else{var es=er("state");eo[es]=!0,s=function(t,e){if(tx(t,es))throw new ea(ei);return e.facade=t,tB(t,es,e),e},l=function(t){return tx(t,es)?t[es]:{}},f=function(t){return tx(t,es)}}var el=(t6={set:s,get:l,has:f,enforce:function(t){return f(t)?l(t):s(t,{})},getterFor:function(t){return function(e){var r;if(!J(e)||(r=l(e)).type!==t)throw new ea("Incompatible receiver, "+t+" required");return r}}}).enforce,ef=t6.get,ep=String,ev=Object.defineProperty,eh=D("".slice),ed=D("".replace),eg=D([].join),ey=E&&!L(function(){return 8!==ev(function(){},"length",{value:8}).length}),eb=String(String).split("String"),em=t3=function(t,e,r){"Symbol("===eh(ep(e),0,7)&&(e="["+ed(ep(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tx(t,"name")||t8&&t.name!==e)&&(E?ev(t,"name",{value:e,configurable:!0}):t.name=e),ey&&r&&tx(r,"arity")&&t.length!==r.arity&&ev(t,"length",{value:r.arity});try{r&&tx(r,"constructor")&&r.constructor?E&&ev(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=el(t);return tx(n,"source")||(n.source=eg(eb,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=em(function(){return K(this)&&ef(this).source||t9(this)},"toString"),t2=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(K(r)&&t3(r,i,n),n.global)o?t[e]=r:tS(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:u(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ew={},e_={},eO={},ej={},eS={},eE={},eL=Math.ceil,ex=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
eE=Math.trunc||function(t){var e=+t;return(e>0?ex:eL)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
eS=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:eE(e)};var ek=Math.max,eT=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
ej=function(t,e){var r=eS(t);return r<0?ek(r+e,0):eT(r,e)};var eP={},eM={},e$=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eM=function(t){return t>0?e$(eS(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eP=function(t){return eM(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eF=function(t){return function(e,r,n){var o,i=F(e),a=eP(i),c=ej(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[c++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},eI={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eF(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eF(!1)}.indexOf,eD=D([].push);eO=function(t,e){var r,n=F(t),o=0,i=[];for(r in n)!tx(eo,r)&&tx(n,r)&&eD(i,r);// Don't enum bug & hidden keys
for(;e.length>o;)tx(n,r=e[o++])&&(~eI(i,r)||eD(i,r));return i};var eN=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(t){return eO(t,eN)},v=Object.getOwnPropertySymbols;var eC=D([].concat);// all object keys, includes non-enumerable and symbols
e_=tr("Reflect","ownKeys")||function(t){var e=p(tY(t));return v?eC(e,v(t)):e},ew=function(t,e,r){for(var n=e_(e),i=0;i<n.length;i++){var a=n[i];tx(t,a)||r&&tx(r,a)||u(t,a,o(e,a))}};var eA={},eH=/#|\.prototype\./,eR=function(t,e){var r=eq[eG(t)];return r===ez||r!==eU&&(K(e)?L(e):!!e)},eG=eR.normalize=function(t){return String(t).replace(eH,".").toLowerCase()},eq=eR.data={},eU=eR.NATIVE="N",ez=eR.POLYFILL="P";eA=eR,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/O=function(t,e){var r,n,i,a,c,u=t.target,s=t.global,l=t.stat;if(r=s?j:l?j[u]||tS(u,{}):(j[u]||{}).prototype)for(n in e){// contained in target
if(a=e[n],i=t.dontCallGetSet?(c=o(r,n))&&c.value:r[n],!eA(s?n:u+(l?".":"#")+n,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;ew(a,i)}(t.sham||i&&i.sham)&&tB(a,"sham",!0),t2(r,n,a,t)}};var eB={},eW={},eY=Function.prototype,eV=eY.apply,eJ=eY.call;// eslint-disable-next-line es/no-reflect -- safe
eW="object"==typeof Reflect&&Reflect.apply||(k?eJ.bind(eV):function(){return eJ.apply(eV,arguments)});var eK={},eQ={},eX=(eQ=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===H(t))return D(t)})(eQ.bind);// optional / simple context binding
eK=function(t,e){return td(t),void 0===e?t:k?eX(t,e):function(){return t.apply(e,arguments)}};var eZ={};eZ=tr("document","documentElement");var e0={};e0=D([].slice);var e1={},e2=TypeError;e1=function(t,e){if(t<e)throw new e2("Not enough arguments");return t};var e3={};// eslint-disable-next-line redos/no-vulnerable -- safe
e3=/(?:ipad|iphone|ipod).*applewebkit/i.test(tc);var e7={};e7="process"===H(j.process);var e4=j.setImmediate,e8=j.clearImmediate,e9=j.process,e5=j.Dispatch,e6=j.Function,rt=j.MessageChannel,re=j.String,rr=0,rn={},ro="onreadystatechange";L(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=j.location});var ri=function(t){if(tx(rn,t)){var e=rn[t];delete rn[t],e()}},ra=function(t){return function(){ri(t)}},rc=function(t){ri(t.data)},ru=function(t){// old engines have not location.origin
j.postMessage(re(t),h.protocol+"//"+h.host)};e4&&e8||(e4=function(t){e1(arguments.length,1);var e=K(t)?t:e6(t),r=e0(arguments,1);return rn[++rr]=function(){eW(e,void 0,r)},d(rr),rr},e8=function(t){delete rn[t]},e7?d=function(t){e9.nextTick(ra(t))}:e5&&e5.now?d=function(t){e5.now(ra(t))}:rt&&!e3?(y=(g=new rt).port2,g.port1.onmessage=rc,d=eK(y.postMessage,y)):j.addEventListener&&K(j.postMessage)&&!j.importScripts&&h&&"file:"!==h.protocol&&!L(ru)?(d=ru,j.addEventListener("message",rc,!1)):d=ro in tG("script")?function(t){eZ.appendChild(tG("script"))[ro]=function(){eZ.removeChild(this),ri(t)}}:function(t){setTimeout(ra(t),0)});var rs=(eB={set:e4,clear:e8}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
O({global:!0,bind:!0,enumerable:!0,forced:j.clearImmediate!==rs},{clearImmediate:rs});var rl=eB.set,rf={},rp={};/* global Bun -- Deno case */rp="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rv=j.Function,rh=/MSIE .\./.test(tc)||rp&&((n=j.Bun.version.split(".")).length<3||"0"===n[0]&&(n[1]<3||"3"===n[1]&&"0"===n[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rf=function(t,e){var r=e?2:1;return rh?function(n,o/* , ...arguments */){var i=e1(arguments.length,1)>r,a=K(n)?n:rv(n),c=i?e0(arguments,r):[],u=i?function(){eW(a,this,c)}:a;return e?t(u,o):t(u)}:t};// https://github.com/oven-sh/bun/issues/1633
var rd=j.setImmediate?rf(rl,!1):rl;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
O({global:!0,bind:!0,enumerable:!0,forced:j.setImmediate!==rd},{setImmediate:rd});var rg={};rg=new URL(_("27Lyk").resolve("eyyUD"),import.meta.url).toString();/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new x(i||[]),c=p,function(r,o){if(c===v)throw Error("Generator is already running");if(c===h){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),d);var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,d):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(i,a);if(u){if(u===d)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=v;var s=f(t,n,a);if("normal"===s.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?h:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=s.arg)}})}),u)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",v="executing",h="completed",d={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function b(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var m={};s(m,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==r&&n.call(_,a)&&// of the polyfill.
(m=_);var O=b.prototype=g.prototype=Object.create(m);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function j(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function S(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
s.value=t,a(s)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,c)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return y.prototype=b,o(O,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},j(S.prototype),s(S.prototype,c,function(){return this}),t.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
j(O),s(O,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
s(O,a,function(){return this}),s(O,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),d}},t}({});try{regeneratorRuntime=ry}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=ry:Function("r","regeneratorRuntime = r")(ry)}const rb=document.querySelector(".recipe"),rm=function(t){let r=`
  <div class="spinner">
  <svg>
    <use href="${/*@__PURE__*/e(rg)}#icon-loader"></use>
  </svg>
</div>
  `;t.innerHTML="",t.insertAdjacentHTML("afterbegin",r)},rw=async function(){try{// 1) Loading recip
rm(rb);let t=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);let{recipe:n}=r.data;n={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},console.log(n);// 2)  Rendering recipe
let o=`
    <figure class="recipe__fig">
          <img src="${n.image}" alt="${n.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${n.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/e(rg)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${n.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/e(rg)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${n.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${/*@__PURE__*/e(rg)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${/*@__PURE__*/e(rg)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${/*@__PURE__*/e(rg)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${/*@__PURE__*/e(rg)}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          
            ${n.ingredients.map(t=>`
                      <li class="recipe__ingredient">
                          <svg class="recipe__icon">
                            <use href="${/*@__PURE__*/e(rg)}#icon-check"></use>
                          </svg>
                          <div class="recipe__quantity">${t.quantity?t.quantity:""}</div>
                          <div class="recipe__description">
                            <span class="recipe__unit">${t.unit}</span>
                            ${t.description}
                          </div>
                        </li>
                    `).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${n.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${n.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/e(rg)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;rb.innerHTML="",rb.insertAdjacentHTML("afterbegin",o)}catch(t){alert(t)}};rw();//# sourceMappingURL=index.300b1617.js.map

//# sourceMappingURL=index.300b1617.js.map
