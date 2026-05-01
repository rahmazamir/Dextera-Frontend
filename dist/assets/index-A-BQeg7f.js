(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function f_(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Qf={exports:{}},wl={};var E0;function a1(){if(E0)return wl;E0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:s,key:u,ref:o!==void 0?o:null,props:c}}return wl.Fragment=e,wl.jsx=n,wl.jsxs=n,wl}var b0;function s1(){return b0||(b0=1,Qf.exports=a1()),Qf.exports}var z=s1(),Jf={exports:{}},nt={};var T0;function r1(){if(T0)return nt;T0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function x(B,se,ve){this.props=B,this.context=se,this.refs=S,this.updater=ve||E}x.prototype.isReactComponent={},x.prototype.setState=function(B,se){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,se,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function N(){}N.prototype=x.prototype;function T(B,se,ve){this.props=B,this.context=se,this.refs=S,this.updater=ve||E}var D=T.prototype=new N;D.constructor=T,b(D,x.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function O(){}var L={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function w(B,se,ve){var Z=ve.ref;return{$$typeof:a,type:B,key:se,ref:Z!==void 0?Z:null,props:ve}}function R(B,se){return w(B.type,se,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===a}function ee(B){var se={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ve){return se[ve]})}var $=/\/+/g;function W(B,se){return typeof B=="object"&&B!==null&&B.key!=null?ee(""+B.key):se.toString(36)}function J(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(O,O):(B.status="pending",B.then(function(se){B.status==="pending"&&(B.status="fulfilled",B.value=se)},function(se){B.status==="pending"&&(B.status="rejected",B.reason=se)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function P(B,se,ve,Z,fe){var Se=typeof B;(Se==="undefined"||Se==="boolean")&&(B=null);var Ee=!1;if(B===null)Ee=!0;else switch(Se){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(B.$$typeof){case a:case e:Ee=!0;break;case v:return Ee=B._init,P(Ee(B._payload),se,ve,Z,fe)}}if(Ee)return fe=fe(B),Ee=Z===""?"."+W(B,0):Z,I(fe)?(ve="",Ee!=null&&(ve=Ee.replace($,"$&/")+"/"),P(fe,se,ve,"",function(tt){return tt})):fe!=null&&(H(fe)&&(fe=R(fe,ve+(fe.key==null||B&&B.key===fe.key?"":(""+fe.key).replace($,"$&/")+"/")+Ee)),se.push(fe)),1;Ee=0;var Oe=Z===""?".":Z+":";if(I(B))for(var Pe=0;Pe<B.length;Pe++)Z=B[Pe],Se=Oe+W(Z,Pe),Ee+=P(Z,se,ve,Se,fe);else if(Pe=y(B),typeof Pe=="function")for(B=Pe.call(B),Pe=0;!(Z=B.next()).done;)Z=Z.value,Se=Oe+W(Z,Pe++),Ee+=P(Z,se,ve,Se,fe);else if(Se==="object"){if(typeof B.then=="function")return P(J(B),se,ve,Z,fe);throw se=String(B),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function X(B,se,ve){if(B==null)return B;var Z=[],fe=0;return P(B,Z,"","",function(Se){return se.call(ve,Se,fe++)}),Z}function Y(B){if(B._status===-1){var se=B._result;se=se(),se.then(function(ve){(B._status===0||B._status===-1)&&(B._status=1,B._result=ve)},function(ve){(B._status===0||B._status===-1)&&(B._status=2,B._result=ve)}),B._status===-1&&(B._status=0,B._result=se)}if(B._status===1)return B._result.default;throw B._result}var _e=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Me={map:X,forEach:function(B,se,ve){X(B,function(){se.apply(this,arguments)},ve)},count:function(B){var se=0;return X(B,function(){se++}),se},toArray:function(B){return X(B,function(se){return se})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return nt.Activity=g,nt.Children=Me,nt.Component=x,nt.Fragment=n,nt.Profiler=o,nt.PureComponent=T,nt.StrictMode=s,nt.Suspense=p,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,nt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return L.H.useMemoCache(B)}},nt.cache=function(B){return function(){return B.apply(null,arguments)}},nt.cacheSignal=function(){return null},nt.cloneElement=function(B,se,ve){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Z=b({},B.props),fe=B.key;if(se!=null)for(Se in se.key!==void 0&&(fe=""+se.key),se)!k.call(se,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&se.ref===void 0||(Z[Se]=se[Se]);var Se=arguments.length-2;if(Se===1)Z.children=ve;else if(1<Se){for(var Ee=Array(Se),Oe=0;Oe<Se;Oe++)Ee[Oe]=arguments[Oe+2];Z.children=Ee}return w(B.type,fe,Z)},nt.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},nt.createElement=function(B,se,ve){var Z,fe={},Se=null;if(se!=null)for(Z in se.key!==void 0&&(Se=""+se.key),se)k.call(se,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(fe[Z]=se[Z]);var Ee=arguments.length-2;if(Ee===1)fe.children=ve;else if(1<Ee){for(var Oe=Array(Ee),Pe=0;Pe<Ee;Pe++)Oe[Pe]=arguments[Pe+2];fe.children=Oe}if(B&&B.defaultProps)for(Z in Ee=B.defaultProps,Ee)fe[Z]===void 0&&(fe[Z]=Ee[Z]);return w(B,Se,fe)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(B){return{$$typeof:h,render:B}},nt.isValidElement=H,nt.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:Y}},nt.memo=function(B,se){return{$$typeof:m,type:B,compare:se===void 0?null:se}},nt.startTransition=function(B){var se=L.T,ve={};L.T=ve;try{var Z=B(),fe=L.S;fe!==null&&fe(ve,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(O,_e)}catch(Se){_e(Se)}finally{se!==null&&ve.types!==null&&(se.types=ve.types),L.T=se}},nt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},nt.use=function(B){return L.H.use(B)},nt.useActionState=function(B,se,ve){return L.H.useActionState(B,se,ve)},nt.useCallback=function(B,se){return L.H.useCallback(B,se)},nt.useContext=function(B){return L.H.useContext(B)},nt.useDebugValue=function(){},nt.useDeferredValue=function(B,se){return L.H.useDeferredValue(B,se)},nt.useEffect=function(B,se){return L.H.useEffect(B,se)},nt.useEffectEvent=function(B){return L.H.useEffectEvent(B)},nt.useId=function(){return L.H.useId()},nt.useImperativeHandle=function(B,se,ve){return L.H.useImperativeHandle(B,se,ve)},nt.useInsertionEffect=function(B,se){return L.H.useInsertionEffect(B,se)},nt.useLayoutEffect=function(B,se){return L.H.useLayoutEffect(B,se)},nt.useMemo=function(B,se){return L.H.useMemo(B,se)},nt.useOptimistic=function(B,se){return L.H.useOptimistic(B,se)},nt.useReducer=function(B,se,ve){return L.H.useReducer(B,se,ve)},nt.useRef=function(B){return L.H.useRef(B)},nt.useState=function(B){return L.H.useState(B)},nt.useSyncExternalStore=function(B,se,ve){return L.H.useSyncExternalStore(B,se,ve)},nt.useTransition=function(){return L.H.useTransition()},nt.version="19.2.3",nt}var A0;function Cd(){return A0||(A0=1,Jf.exports=r1()),Jf.exports}var ft=Cd();const l1=f_(ft);var $f={exports:{}},Dl={},eh={exports:{}},th={};var R0;function o1(){return R0||(R0=1,(function(a){function e(P,X){var Y=P.length;P.push(X);e:for(;0<Y;){var _e=Y-1>>>1,Me=P[_e];if(0<o(Me,X))P[_e]=X,P[Y]=Me,Y=_e;else break e}}function n(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var X=P[0],Y=P.pop();if(Y!==X){P[0]=Y;e:for(var _e=0,Me=P.length,B=Me>>>1;_e<B;){var se=2*(_e+1)-1,ve=P[se],Z=se+1,fe=P[Z];if(0>o(ve,Y))Z<Me&&0>o(fe,ve)?(P[_e]=fe,P[Z]=Y,_e=Z):(P[_e]=ve,P[se]=Y,_e=se);else if(Z<Me&&0>o(fe,Y))P[_e]=fe,P[Z]=Y,_e=Z;else break e}}return X}function o(P,X){var Y=P.sortIndex-X.sortIndex;return Y!==0?Y:P.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var p=[],m=[],v=1,g=null,_=3,y=!1,E=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var X=n(m);X!==null;){if(X.callback===null)s(m);else if(X.startTime<=P)s(m),X.sortIndex=X.expirationTime,e(p,X);else break;X=n(m)}}function I(P){if(b=!1,D(P),!E)if(n(p)!==null)E=!0,O||(O=!0,ee());else{var X=n(m);X!==null&&J(I,X.startTime-P)}}var O=!1,L=-1,k=5,w=-1;function R(){return S?!0:!(a.unstable_now()-w<k)}function H(){if(S=!1,O){var P=a.unstable_now();w=P;var X=!0;try{e:{E=!1,b&&(b=!1,N(L),L=-1),y=!0;var Y=_;try{t:{for(D(P),g=n(p);g!==null&&!(g.expirationTime>P&&R());){var _e=g.callback;if(typeof _e=="function"){g.callback=null,_=g.priorityLevel;var Me=_e(g.expirationTime<=P);if(P=a.unstable_now(),typeof Me=="function"){g.callback=Me,D(P),X=!0;break t}g===n(p)&&s(p),D(P)}else s(p);g=n(p)}if(g!==null)X=!0;else{var B=n(m);B!==null&&J(I,B.startTime-P),X=!1}}break e}finally{g=null,_=Y,y=!1}X=void 0}}finally{X?ee():O=!1}}}var ee;if(typeof T=="function")ee=function(){T(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,W=$.port2;$.port1.onmessage=H,ee=function(){W.postMessage(null)}}else ee=function(){x(H,0)};function J(P,X){L=x(function(){P(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(P){P.callback=null},a.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(P){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var Y=_;_=X;try{return P()}finally{_=Y}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(P,X){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=_;_=P;try{return X()}finally{_=Y}},a.unstable_scheduleCallback=function(P,X,Y){var _e=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_e+Y:_e):Y=_e,P){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Y+Me,P={id:v++,callback:X,priorityLevel:P,startTime:Y,expirationTime:Me,sortIndex:-1},Y>_e?(P.sortIndex=Y,e(m,P),n(p)===null&&P===n(m)&&(b?(N(L),L=-1):b=!0,J(I,Y-_e))):(P.sortIndex=Me,e(p,P),E||y||(E=!0,O||(O=!0,ee()))),P},a.unstable_shouldYield=R,a.unstable_wrapCallback=function(P){var X=_;return function(){var Y=_;_=X;try{return P.apply(this,arguments)}finally{_=Y}}}})(th)),th}var C0;function c1(){return C0||(C0=1,eh.exports=o1()),eh.exports}var nh={exports:{}},Un={};var w0;function u1(){if(w0)return Un;w0=1;var a=Cd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:m,implementation:v}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,v)},Un.flushSync=function(p){var m=u.T,v=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=m,s.p=v,s.d.f()}},Un.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Un.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Un.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):v==="script"&&s.d.X(p,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Un.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin);s.d.L(p,v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Un.requestFormReset=function(p){s.d.r(p)},Un.unstable_batchedUpdates=function(p,m){return p(m)},Un.useFormState=function(p,m,v){return u.H.useFormState(p,m,v)},Un.useFormStatus=function(){return u.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var D0;function f1(){if(D0)return nh.exports;D0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),nh.exports=u1(),nh.exports}var U0;function h1(){if(U0)return Dl;U0=1;var a=c1(),e=Cd(),n=f1();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var r=t,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return p(f),t;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(r.return!==l.return)r=f,l=d;else{for(var M=!1,A=f.child;A;){if(A===r){M=!0,r=f,l=d;break}if(A===l){M=!0,l=f,r=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===r){M=!0,r=d,l=f;break}if(A===l){M=!0,l=d,r=f;break}A=A.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),T=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var $=Symbol.for("react.client.reference");function W(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case O:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case T:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return i=t.displayName||null,i!==null?i:W(t.type)||"Memo";case k:i=t._payload,t=t._init;try{return W(t(i))}catch{}}return null}var J=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},_e=[],Me=-1;function B(t){return{current:t}}function se(t){0>Me||(t.current=_e[Me],_e[Me]=null,Me--)}function ve(t,i){Me++,_e[Me]=t.current,t.current=i}var Z=B(null),fe=B(null),Se=B(null),Ee=B(null);function Oe(t,i){switch(ve(Se,i),ve(fe,t),ve(Z,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Wg(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Wg(i),t=jg(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(Z),ve(Z,t)}function Pe(){se(Z),se(fe),se(Se)}function tt(t){t.memoizedState!==null&&ve(Ee,t);var i=Z.current,r=jg(i,t.type);i!==r&&(ve(fe,t),ve(Z,r))}function wt(t){fe.current===t&&(se(Z),se(fe)),Ee.current===t&&(se(Ee),Tl._currentValue=Y)}var V,Ht;function at(t){if(V===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||"",Ht=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+t+Ht}var gt=!1;function Ce(t,i){if(!t||gt)return"";gt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(ce){var ae=ce}Reflect.construct(t,[],me)}else{try{me.call()}catch(ce){ae=ce}t.call(me.prototype)}}else{try{throw Error()}catch(ce){ae=ce}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(ce){if(ce&&ae&&typeof ce.stack=="string")return[ce.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var G=M.split(`
`),ie=A.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ie.length&&!ie[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===ie.length)for(l=G.length-1,f=ie.length-1;1<=l&&0<=f&&G[l]!==ie[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==ie[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==ie[f]){var he=`
`+G[l].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=l&&0<=f);break}}}finally{gt=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?at(r):""}function it(t,i){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return t.child!==i&&i!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return Ce(t.type,!1);case 11:return Ce(t.type.render,!1);case 1:return Ce(t.type,!0);case 31:return at("Activity");default:return""}}function Xe(t){try{var i="",r=null;do i+=it(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qe=Object.prototype.hasOwnProperty,F=a.unstable_scheduleCallback,C=a.unstable_cancelCallback,oe=a.unstable_shouldYield,be=a.unstable_requestPaint,xe=a.unstable_now,ye=a.unstable_getCurrentPriorityLevel,Ye=a.unstable_ImmediatePriority,Ne=a.unstable_UserBlockingPriority,ze=a.unstable_NormalPriority,st=a.unstable_LowPriority,Ae=a.unstable_IdlePriority,Be=a.log,vt=a.unstable_setDisableYieldValue,Je=null,De=null;function Ke(t){if(typeof Be=="function"&&vt(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Je,t)}catch{}}var Qe=Math.clz32?Math.clz32:Re,Gt=Math.log,j=Math.LN2;function Re(t){return t>>>=0,t===0?32:31-(Gt(t)/j|0)|0}var pe=256,ge=262144,we=4194304;function We(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ht(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?f=We(l):(M&=A,M!==0?f=We(M):r||(r=A&~t,r!==0&&(f=We(r))))):(A=l&~d,A!==0?f=We(A):M!==0?f=We(M):r||(r=l&~t,r!==0&&(f=We(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function Ft(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function on(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function qn(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function An(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yl(t,i,r,l,f,d){var M=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var A=t.entanglements,G=t.expirationTimes,ie=t.hiddenUpdates;for(r=M&~r;0<r;){var he=31-Qe(r),me=1<<he;A[he]=0,G[he]=-1;var ae=ie[he];if(ae!==null)for(ie[he]=null,he=0;he<ae.length;he++){var ce=ae[he];ce!==null&&(ce.lane&=-536870913)}r&=~me}l!==0&&wi(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(M&~i))}function wi(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Qe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function Cs(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-Qe(r),f=1<<l;f&i|t[l]&i&&(t[l]|=i),r&=~f}}function zr(t,i){var r=i&-i;return r=(r&42)!==0?1:ws(r),(r&(t.suspendedLanes|i))!==0?0:r}function ws(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ha(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Br(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:g0(t.type))}function Za(t,i){var r=X.p;try{return X.p=t,i()}finally{X.p=r}}var _i=Math.random().toString(36).slice(2),tn="__reactFiber$"+_i,Rn="__reactProps$"+_i,da="__reactContainer$"+_i,Ir="__reactEvents$"+_i,U="__reactListeners$"+_i,K="__reactHandles$"+_i,re="__reactResources$"+_i,le="__reactMarker$"+_i;function te(t){delete t[tn],delete t[Rn],delete t[Ir],delete t[U],delete t[K]}function Te(t){var i=t[tn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[da]||r[tn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=e0(t);t!==null;){if(r=t[tn])return r;t=e0(t)}return i}t=r,r=t.parentNode}return null}function Ue(t){if(t=t[tn]||t[da]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ie(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function Fe(t){var i=t[re];return i||(i=t[re]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function He(t){t[le]=!0}var et=new Set,Ze={};function dt(t,i){Nt(t,i),Nt(t+"Capture",i)}function Nt(t,i){for(Ze[t]=i,t=0;t<i.length;t++)et.add(i[t])}var qt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cn={},bt={};function ke(t){return qe.call(bt,t)?!0:qe.call(Cn,t)?!1:qt.test(t)?bt[t]=!0:(Cn[t]=!0,!1)}function Yt(t,i,r){if(ke(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function yt(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Qt(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}function cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wn(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Fr(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){r=""+M,d.call(this,M)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Wt(t){if(!t._valueTracker){var i=wn(t)?"checked":"value";t._valueTracker=Fr(t,i,""+t[i])}}function xi(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=wn(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function pa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zn=/[\n"\\]/g;function Dn(t){return t.replace(zn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Hr(t,i,r,l,f,d,M,A){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+cn(i)):t.value!==""+cn(i)&&(t.value=""+cn(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?qc(t,M,cn(i)):r!=null?qc(t,M,cn(r)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+cn(A):t.removeAttribute("name")}function Gr(t,i,r,l,f,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Wt(t);return}r=r!=null?""+cn(r):"",i=i!=null?""+cn(i):r,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Wt(t)}function qc(t,i,r){i==="number"&&pa(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ds(t,i,r,l){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&l&&(t[r].defaultSelected=!0)}else{for(r=""+cn(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Gd(t,i,r){if(i!=null&&(i=""+cn(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+cn(r):""}function Vd(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(s(92));if(J(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=cn(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),Wt(t)}function Us(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var $_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kd(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||$_.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Xd(t,i,r){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&kd(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&kd(t,d,i[d])}function Wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ex=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(t){return tx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var jc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ns=null,Ls=null;function qd(t){var i=Ue(t);if(i&&(t=i.stateNode)){var r=t[Rn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Hr(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Dn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var f=l[Rn]||null;if(!f)throw Error(s(90));Hr(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&xi(l)}break e;case"textarea":Gd(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Ds(t,!!r.multiple,i,!1)}}}var Zc=!1;function Wd(t,i,r){if(Zc)return t(i,r);Zc=!0;try{var l=t(i);return l}finally{if(Zc=!1,(Ns!==null||Ls!==null)&&(Bo(),Ns&&(i=Ns,t=Ls,Ls=Ns=null,qd(i),t)))for(i=0;i<t.length;i++)qd(t[i])}}function Vr(t,i){var r=t.stateNode;if(r===null)return null;var l=r[Rn]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,i,typeof r));return r}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Hi)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Kc=!1}var ma=null,Qc=null,Kl=null;function jd(){if(Kl)return Kl;var t,i=Qc,r=i.length,l,f="value"in ma?ma.value:ma.textContent,d=f.length;for(t=0;t<r&&i[t]===f[t];t++);var M=r-t;for(l=1;l<=M&&i[r-l]===f[d-l];l++);return Kl=f.slice(t,1<l?1-l:void 0)}function Ql(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function Yd(){return!1}function Bn(t){function i(r,l,f,d,M){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(r=t[A],this[A]=r?r(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Jl:Yd,this.isPropagationStopped=Yd,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),i}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Bn(Ka),Xr=g({},Ka,{view:0,detail:0}),nx=Bn(Xr),Jc,$c,qr,eo=g({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(Jc=t.screenX-qr.screenX,$c=t.screenY-qr.screenY):$c=Jc=0,qr=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Zd=Bn(eo),ix=g({},eo,{dataTransfer:0}),ax=Bn(ix),sx=g({},Xr,{relatedTarget:0}),eu=Bn(sx),rx=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=Bn(rx),ox=g({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cx=Bn(ox),ux=g({},Ka,{data:0}),Kd=Bn(ux),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=dx[t])?!!i[t]:!1}function tu(){return px}var mx=g({},Xr,{key:function(t){if(t.key){var i=fx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gx=Bn(mx),vx=g({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Bn(vx),_x=g({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),xx=Bn(_x),yx=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=Bn(yx),Mx=g({},eo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=Bn(Mx),bx=g({},Ka,{newState:0,oldState:0}),Tx=Bn(bx),Ax=[9,13,27,32],nu=Hi&&"CompositionEvent"in window,Wr=null;Hi&&"documentMode"in document&&(Wr=document.documentMode);var Rx=Hi&&"TextEvent"in window&&!Wr,Jd=Hi&&(!nu||Wr&&8<Wr&&11>=Wr),$d=" ",ep=!1;function tp(t,i){switch(t){case"keyup":return Ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function Cx(t,i){switch(t){case"compositionend":return np(i);case"keypress":return i.which!==32?null:(ep=!0,$d);case"textInput":return t=i.data,t===$d&&ep?null:t;default:return null}}function wx(t,i){if(Os)return t==="compositionend"||!nu&&tp(t,i)?(t=jd(),Kl=Qc=ma=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jd&&i.locale!=="ko"?null:i.data;default:return null}}var Dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Dx[t.type]:i==="textarea"}function ap(t,i,r,l){Ns?Ls?Ls.push(l):Ls=[l]:Ns=l,i=Xo(i,"onChange"),0<i.length&&(r=new $l("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var jr=null,Yr=null;function Ux(t){Hg(t,0)}function to(t){var i=Ie(t);if(xi(i))return t}function sp(t,i){if(t==="change")return i}var rp=!1;if(Hi){var iu;if(Hi){var au="oninput"in document;if(!au){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),au=typeof lp.oninput=="function"}iu=au}else iu=!1;rp=iu&&(!document.documentMode||9<document.documentMode)}function op(){jr&&(jr.detachEvent("onpropertychange",cp),Yr=jr=null)}function cp(t){if(t.propertyName==="value"&&to(Yr)){var i=[];ap(i,Yr,t,Yc(t)),Wd(Ux,i)}}function Nx(t,i,r){t==="focusin"?(op(),jr=i,Yr=r,jr.attachEvent("onpropertychange",cp)):t==="focusout"&&op()}function Lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return to(Yr)}function Ox(t,i){if(t==="click")return to(i)}function Px(t,i){if(t==="input"||t==="change")return to(i)}function zx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Wn=typeof Object.is=="function"?Object.is:zx;function Zr(t,i){if(Wn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!qe.call(i,f)||!Wn(t[f],i[f]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,i){var r=up(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=up(r)}}function hp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?hp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=pa(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=pa(t.document)}return i}function su(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Bx=Hi&&"documentMode"in document&&11>=document.documentMode,Ps=null,ru=null,Kr=null,lu=!1;function pp(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;lu||Ps==null||Ps!==pa(l)||(l=Ps,"selectionStart"in l&&su(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Kr&&Zr(Kr,l)||(Kr=l,l=Xo(ru,"onSelect"),0<l.length&&(i=new $l("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=Ps)))}function Qa(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var zs={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},ou={},mp={};Hi&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ja(t){if(ou[t])return ou[t];if(!zs[t])return t;var i=zs[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in mp)return ou[t]=i[r];return t}var gp=Ja("animationend"),vp=Ja("animationiteration"),_p=Ja("animationstart"),Ix=Ja("transitionrun"),Fx=Ja("transitionstart"),Hx=Ja("transitioncancel"),xp=Ja("transitionend"),yp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function yi(t,i){yp.set(t,i),dt(i,[t])}var no=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Bs=0,uu=0;function io(){for(var t=Bs,i=uu=Bs=0;i<t;){var r=ai[i];ai[i++]=null;var l=ai[i];ai[i++]=null;var f=ai[i];ai[i++]=null;var d=ai[i];if(ai[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}d!==0&&Sp(r,f,d)}}function ao(t,i,r,l){ai[Bs++]=t,ai[Bs++]=i,ai[Bs++]=r,ai[Bs++]=l,uu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function fu(t,i,r,l){return ao(t,i,r,l),so(t)}function $a(t,i){return ao(t,null,null,i),so(t)}function Sp(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=t.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Qe(r),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function so(t){if(50<_l)throw _l=0,Sf=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Is={};function Gx(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,r,l){return new Gx(t,i,r,l)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,i){var r=t.alternate;return r===null?(r=jn(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Mp(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function ro(t,i,r,l,f,d){var M=0;if(l=t,typeof t=="function")hu(t)&&(M=1);else if(typeof t=="string")M=Wy(t,r,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=jn(31,r,i,f),t.elementType=w,t.lanes=d,t;case b:return es(r.children,f,d,i);case S:M=8,f|=24;break;case x:return t=jn(12,r,i,f|2),t.elementType=x,t.lanes=d,t;case I:return t=jn(13,r,i,f),t.elementType=I,t.lanes=d,t;case O:return t=jn(19,r,i,f),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T:M=10;break e;case N:M=9;break e;case D:M=11;break e;case L:M=14;break e;case k:M=16,l=null;break e}M=29,r=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=jn(M,r,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function es(t,i,r,l){return t=jn(7,t,l,i),t.lanes=r,t}function du(t,i,r){return t=jn(6,t,null,i),t.lanes=r,t}function Ep(t){var i=jn(18,null,null,0);return i.stateNode=t,i}function pu(t,i,r){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var bp=new WeakMap;function si(t,i){if(typeof t=="object"&&t!==null){var r=bp.get(t);return r!==void 0?r:(i={value:t,source:i,stack:Xe(i)},bp.set(t,i),i)}return{value:t,source:i,stack:Xe(i)}}var Fs=[],Hs=0,lo=null,Qr=0,ri=[],li=0,ga=null,Di=1,Ui="";function Vi(t,i){Fs[Hs++]=Qr,Fs[Hs++]=lo,lo=t,Qr=i}function Tp(t,i,r){ri[li++]=Di,ri[li++]=Ui,ri[li++]=ga,ga=t;var l=Di;t=Ui;var f=32-Qe(l)-1;l&=~(1<<f),r+=1;var d=32-Qe(i)+f;if(30<d){var M=f-f%5;d=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Di=1<<32-Qe(i)+f|r<<f|l,Ui=d+t}else Di=1<<d|r<<f|l,Ui=t}function mu(t){t.return!==null&&(Vi(t,1),Tp(t,1,0))}function gu(t){for(;t===lo;)lo=Fs[--Hs],Fs[Hs]=null,Qr=Fs[--Hs],Fs[Hs]=null;for(;t===ga;)ga=ri[--li],ri[li]=null,Ui=ri[--li],ri[li]=null,Di=ri[--li],ri[li]=null}function Ap(t,i){ri[li++]=Di,ri[li++]=Ui,ri[li++]=ga,Di=i.id,Ui=i.overflow,ga=t}var xn=null,Vt=null,St=!1,va=null,oi=!1,vu=Error(s(519));function _a(t){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(si(i,t)),vu}function Rp(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[tn]=t,i[Rn]=l,r){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<yl.length;r++)mt(yl[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":mt("invalid",i),Gr(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":mt("invalid",i);break;case"textarea":mt("invalid",i),Vd(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Xg(i.textContent,r)?(l.popover!=null&&(mt("beforetoggle",i),mt("toggle",i)),l.onScroll!=null&&mt("scroll",i),l.onScrollEnd!=null&&mt("scrollend",i),l.onClick!=null&&(i.onclick=Fi),i=!0):i=!1,i||_a(t,!0)}function Cp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:xn=xn.return}}function Gs(t){if(t!==xn)return!1;if(!St)return Cp(t),St=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||zf(t.type,t.memoizedProps)),r=!r),r&&Vt&&_a(t),Cp(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Vt=$g(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Vt=$g(t)}else i===27?(i=Vt,Na(t.type)?(t=Gf,Gf=null,Vt=t):Vt=i):Vt=xn?ui(t.stateNode.nextSibling):null;return!0}function ts(){Vt=xn=null,St=!1}function _u(){var t=va;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),va=null),t}function Jr(t){va===null?va=[t]:va.push(t)}var xu=B(null),ns=null,ki=null;function xa(t,i,r){ve(xu,i._currentValue),i._currentValue=r}function Xi(t){t._currentValue=xu.current,se(xu)}function yu(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function Su(t,i,r,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var M=f.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=f;for(var G=0;G<i.length;G++)if(A.context===i[G]){d.lanes|=r,A=d.alternate,A!==null&&(A.lanes|=r),yu(d.return,r,t),l||(M=null);break e}d=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(s(341));M.lanes|=r,d=M.alternate,d!==null&&(d.lanes|=r),yu(M,r,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Vs(t,i,r,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=f.type;Wn(f.pendingProps.value,M.value)||(t!==null?t.push(A):t=[A])}}else if(f===Ee.current){if(M=f.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Tl):t=[Tl])}f=f.return}t!==null&&Su(i,t,r,l),i.flags|=262144}function oo(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function is(t){ns=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return wp(ns,t)}function co(t,i){return ns===null&&is(t),wp(t,i)}function wp(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ki===null){if(t===null)throw Error(s(308));ki=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ki=ki.next=i;return r}var Vx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},kx=a.unstable_scheduleCallback,Xx=a.unstable_NormalPriority,nn={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Vx,data:new Map,refCount:0}}function $r(t){t.refCount--,t.refCount===0&&kx(Xx,function(){t.controller.abort()})}var el=null,Eu=0,ks=0,Xs=null;function qx(t,i){if(el===null){var r=el=[];Eu=0,ks=Rf(),Xs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Eu++,i.then(Dp,Dp),i}function Dp(){if(--Eu===0&&el!==null){Xs!==null&&(Xs.status="fulfilled");var t=el;el=null,ks=0,Xs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Wx(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var Up=P.S;P.S=function(t,i){pg=xe(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&qx(t,i),Up!==null&&Up(t,i)};var as=B(null);function bu(){var t=as.current;return t!==null?t:It.pooledCache}function uo(t,i){i===null?ve(as,as.current):ve(as,i.pool)}function Np(){var t=bu();return t===null?null:{parent:nn._currentValue,pool:t}}var qs=Error(s(460)),Tu=Error(s(474)),fo=Error(s(542)),ho={then:function(){}};function Lp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Op(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(Fi,Fi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,zp(t),t;default:if(typeof i.status=="string")i.then(Fi,Fi);else{if(t=It,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,zp(t),t}throw rs=i,qs}}function ss(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(rs=r,qs):r}}var rs=null;function Pp(){if(rs===null)throw Error(s(459));var t=rs;return rs=null,t}function zp(t){if(t===qs||t===fo)throw Error(s(483))}var Ws=null,tl=0;function po(t){var i=tl;return tl+=1,Ws===null&&(Ws=[]),Op(Ws,t,i)}function nl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function mo(t,i){throw i.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Bp(t){function i(Q,q){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[q],Q.flags|=16):ne.push(q)}}function r(Q,q){if(!t)return null;for(;q!==null;)i(Q,q),q=q.sibling;return null}function l(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function f(Q,q){return Q=Gi(Q,q),Q.index=0,Q.sibling=null,Q}function d(Q,q,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<q?(Q.flags|=67108866,q):ne):(Q.flags|=67108866,q)):(Q.flags|=1048576,q)}function M(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,q,ne,de){return q===null||q.tag!==6?(q=du(ne,Q.mode,de),q.return=Q,q):(q=f(q,ne),q.return=Q,q)}function G(Q,q,ne,de){var je=ne.type;return je===b?he(Q,q,ne.props.children,de,ne.key):q!==null&&(q.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===k&&ss(je)===q.type)?(q=f(q,ne.props),nl(q,ne),q.return=Q,q):(q=ro(ne.type,ne.key,ne.props,null,Q.mode,de),nl(q,ne),q.return=Q,q)}function ie(Q,q,ne,de){return q===null||q.tag!==4||q.stateNode.containerInfo!==ne.containerInfo||q.stateNode.implementation!==ne.implementation?(q=pu(ne,Q.mode,de),q.return=Q,q):(q=f(q,ne.children||[]),q.return=Q,q)}function he(Q,q,ne,de,je){return q===null||q.tag!==7?(q=es(ne,Q.mode,de,je),q.return=Q,q):(q=f(q,ne),q.return=Q,q)}function me(Q,q,ne){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=du(""+q,Q.mode,ne),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return ne=ro(q.type,q.key,q.props,null,Q.mode,ne),nl(ne,q),ne.return=Q,ne;case E:return q=pu(q,Q.mode,ne),q.return=Q,q;case k:return q=ss(q),me(Q,q,ne)}if(J(q)||ee(q))return q=es(q,Q.mode,ne,null),q.return=Q,q;if(typeof q.then=="function")return me(Q,po(q),ne);if(q.$$typeof===T)return me(Q,co(Q,q),ne);mo(Q,q)}return null}function ae(Q,q,ne,de){var je=q!==null?q.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return je!==null?null:A(Q,q,""+ne,de);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return ne.key===je?G(Q,q,ne,de):null;case E:return ne.key===je?ie(Q,q,ne,de):null;case k:return ne=ss(ne),ae(Q,q,ne,de)}if(J(ne)||ee(ne))return je!==null?null:he(Q,q,ne,de,null);if(typeof ne.then=="function")return ae(Q,q,po(ne),de);if(ne.$$typeof===T)return ae(Q,q,co(Q,ne),de);mo(Q,ne)}return null}function ce(Q,q,ne,de,je){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return Q=Q.get(ne)||null,A(q,Q,""+de,je);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case y:return Q=Q.get(de.key===null?ne:de.key)||null,G(q,Q,de,je);case E:return Q=Q.get(de.key===null?ne:de.key)||null,ie(q,Q,de,je);case k:return de=ss(de),ce(Q,q,ne,de,je)}if(J(de)||ee(de))return Q=Q.get(ne)||null,he(q,Q,de,je,null);if(typeof de.then=="function")return ce(Q,q,ne,po(de),je);if(de.$$typeof===T)return ce(Q,q,ne,co(q,de),je);mo(q,de)}return null}function Ge(Q,q,ne,de){for(var je=null,Tt=null,Ve=q,lt=q=0,xt=null;Ve!==null&&lt<ne.length;lt++){Ve.index>lt?(xt=Ve,Ve=null):xt=Ve.sibling;var At=ae(Q,Ve,ne[lt],de);if(At===null){Ve===null&&(Ve=xt);break}t&&Ve&&At.alternate===null&&i(Q,Ve),q=d(At,q,lt),Tt===null?je=At:Tt.sibling=At,Tt=At,Ve=xt}if(lt===ne.length)return r(Q,Ve),St&&Vi(Q,lt),je;if(Ve===null){for(;lt<ne.length;lt++)Ve=me(Q,ne[lt],de),Ve!==null&&(q=d(Ve,q,lt),Tt===null?je=Ve:Tt.sibling=Ve,Tt=Ve);return St&&Vi(Q,lt),je}for(Ve=l(Ve);lt<ne.length;lt++)xt=ce(Ve,Q,lt,ne[lt],de),xt!==null&&(t&&xt.alternate!==null&&Ve.delete(xt.key===null?lt:xt.key),q=d(xt,q,lt),Tt===null?je=xt:Tt.sibling=xt,Tt=xt);return t&&Ve.forEach(function(Ba){return i(Q,Ba)}),St&&Vi(Q,lt),je}function $e(Q,q,ne,de){if(ne==null)throw Error(s(151));for(var je=null,Tt=null,Ve=q,lt=q=0,xt=null,At=ne.next();Ve!==null&&!At.done;lt++,At=ne.next()){Ve.index>lt?(xt=Ve,Ve=null):xt=Ve.sibling;var Ba=ae(Q,Ve,At.value,de);if(Ba===null){Ve===null&&(Ve=xt);break}t&&Ve&&Ba.alternate===null&&i(Q,Ve),q=d(Ba,q,lt),Tt===null?je=Ba:Tt.sibling=Ba,Tt=Ba,Ve=xt}if(At.done)return r(Q,Ve),St&&Vi(Q,lt),je;if(Ve===null){for(;!At.done;lt++,At=ne.next())At=me(Q,At.value,de),At!==null&&(q=d(At,q,lt),Tt===null?je=At:Tt.sibling=At,Tt=At);return St&&Vi(Q,lt),je}for(Ve=l(Ve);!At.done;lt++,At=ne.next())At=ce(Ve,Q,lt,At.value,de),At!==null&&(t&&At.alternate!==null&&Ve.delete(At.key===null?lt:At.key),q=d(At,q,lt),Tt===null?je=At:Tt.sibling=At,Tt=At);return t&&Ve.forEach(function(i1){return i(Q,i1)}),St&&Vi(Q,lt),je}function Bt(Q,q,ne,de){if(typeof ne=="object"&&ne!==null&&ne.type===b&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:e:{for(var je=ne.key;q!==null;){if(q.key===je){if(je=ne.type,je===b){if(q.tag===7){r(Q,q.sibling),de=f(q,ne.props.children),de.return=Q,Q=de;break e}}else if(q.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===k&&ss(je)===q.type){r(Q,q.sibling),de=f(q,ne.props),nl(de,ne),de.return=Q,Q=de;break e}r(Q,q);break}else i(Q,q);q=q.sibling}ne.type===b?(de=es(ne.props.children,Q.mode,de,ne.key),de.return=Q,Q=de):(de=ro(ne.type,ne.key,ne.props,null,Q.mode,de),nl(de,ne),de.return=Q,Q=de)}return M(Q);case E:e:{for(je=ne.key;q!==null;){if(q.key===je)if(q.tag===4&&q.stateNode.containerInfo===ne.containerInfo&&q.stateNode.implementation===ne.implementation){r(Q,q.sibling),de=f(q,ne.children||[]),de.return=Q,Q=de;break e}else{r(Q,q);break}else i(Q,q);q=q.sibling}de=pu(ne,Q.mode,de),de.return=Q,Q=de}return M(Q);case k:return ne=ss(ne),Bt(Q,q,ne,de)}if(J(ne))return Ge(Q,q,ne,de);if(ee(ne)){if(je=ee(ne),typeof je!="function")throw Error(s(150));return ne=je.call(ne),$e(Q,q,ne,de)}if(typeof ne.then=="function")return Bt(Q,q,po(ne),de);if(ne.$$typeof===T)return Bt(Q,q,co(Q,ne),de);mo(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,q!==null&&q.tag===6?(r(Q,q.sibling),de=f(q,ne),de.return=Q,Q=de):(r(Q,q),de=du(ne,Q.mode,de),de.return=Q,Q=de),M(Q)):r(Q,q)}return function(Q,q,ne,de){try{tl=0;var je=Bt(Q,q,ne,de);return Ws=null,je}catch(Ve){if(Ve===qs||Ve===fo)throw Ve;var Tt=jn(29,Ve,null,Q.mode);return Tt.lanes=de,Tt.return=Q,Tt}}}var ls=Bp(!0),Ip=Bp(!1),ya=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ct&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=so(t),Sp(t,null,r),i}return ao(t,l,i,r),so(t)}function il(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,Cs(t,r)}}function Cu(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=M:d=d.next=M,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var wu=!1;function al(){if(wu){var t=Xs;if(t!==null)throw t}}function sl(t,i,r,l){wu=!1;var f=t.updateQueue;ya=!1;var d=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var G=A,ie=G.next;G.next=null,M===null?d=ie:M.next=ie,M=G;var he=t.alternate;he!==null&&(he=he.updateQueue,A=he.lastBaseUpdate,A!==M&&(A===null?he.firstBaseUpdate=ie:A.next=ie,he.lastBaseUpdate=G))}if(d!==null){var me=f.baseState;M=0,he=ie=G=null,A=d;do{var ae=A.lane&-536870913,ce=ae!==A.lane;if(ce?(_t&ae)===ae:(l&ae)===ae){ae!==0&&ae===ks&&(wu=!0),he!==null&&(he=he.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ge=t,$e=A;ae=i;var Bt=r;switch($e.tag){case 1:if(Ge=$e.payload,typeof Ge=="function"){me=Ge.call(Bt,me,ae);break e}me=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=$e.payload,ae=typeof Ge=="function"?Ge.call(Bt,me,ae):Ge,ae==null)break e;me=g({},me,ae);break e;case 2:ya=!0}}ae=A.callback,ae!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[ae]:ce.push(ae))}else ce={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},he===null?(ie=he=ce,G=me):he=he.next=ce,M|=ae;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ce=A,A=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);he===null&&(G=me),f.baseState=G,f.firstBaseUpdate=ie,f.lastBaseUpdate=he,d===null&&(f.shared.lanes=0),Ra|=M,t.lanes=M,t.memoizedState=me}}function Fp(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Hp(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Fp(r[t],i)}var js=B(null),go=B(0);function Gp(t,i){t=$i,ve(go,t),ve(js,i),$i=t|i.baseLanes}function Du(){ve(go,$i),ve(js,js.current)}function Uu(){$i=go.current,se(js),se(go)}var Yn=B(null),ci=null;function Ea(t){var i=t.alternate;ve(Jt,Jt.current&1),ve(Yn,t),ci===null&&(i===null||js.current!==null||i.memoizedState!==null)&&(ci=t)}function Nu(t){ve(Jt,Jt.current),ve(Yn,t),ci===null&&(ci=t)}function Vp(t){t.tag===22?(ve(Jt,Jt.current),ve(Yn,t),ci===null&&(ci=t)):ba()}function ba(){ve(Jt,Jt.current),ve(Yn,Yn.current)}function Zn(t){se(Yn),ci===t&&(ci=null),se(Jt)}var Jt=B(0);function vo(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Ff(r)||Hf(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qi=0,rt=null,Pt=null,an=null,_o=!1,Ys=!1,os=!1,xo=0,rl=0,Zs=null,jx=0;function Zt(){throw Error(s(321))}function Lu(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!Wn(t[r],i[r]))return!1;return!0}function Ou(t,i,r,l,f,d){return qi=d,rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?Tm:Zu,os=!1,d=r(l,f),os=!1,Ys&&(d=Xp(i,r,l,f)),kp(t),d}function kp(t){P.H=cl;var i=Pt!==null&&Pt.next!==null;if(qi=0,an=Pt=rt=null,_o=!1,rl=0,Zs=null,i)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&oo(t)&&(sn=!0))}function Xp(t,i,r,l){rt=t;var f=0;do{if(Ys&&(Zs=null),rl=0,Ys=!1,25<=f)throw Error(s(301));if(f+=1,an=Pt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=Am,d=i(r,l)}while(Ys);return d}function Yx(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?ll(i):i,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(rt.flags|=1024),i}function Pu(){var t=xo!==0;return xo=0,t}function zu(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function Bu(t){if(_o){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}_o=!1}qi=0,an=Pt=rt=null,Ys=!1,rl=xo=0,Zs=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?rt.memoizedState=an=t:an=an.next=t,an}function $t(){if(Pt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var i=an===null?rt.memoizedState:an.next;if(i!==null)an=i,Pt=t;else{if(t===null)throw rt.alternate===null?Error(s(467)):Error(s(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},an===null?rt.memoizedState=an=t:an=an.next=t}return an}function yo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(t){var i=rl;return rl+=1,Zs===null&&(Zs=[]),t=Op(Zs,t,i),i=rt,(an===null?i.memoizedState:an.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Tm:Zu),t}function So(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ll(t);if(t.$$typeof===T)return yn(t)}throw Error(s(438,String(t)))}function Iu(t){var i=null,r=rt.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=yo(),rt.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=R;return i.index++,r}function Wi(t,i){return typeof i=="function"?i(t):i}function Mo(t){var i=$t();return Fu(i,Pt,t)}function Fu(t,i,r){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var M=f.next;f.next=d.next,d.next=M}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var A=M=null,G=null,ie=i,he=!1;do{var me=ie.lane&-536870913;if(me!==ie.lane?(_t&me)===me:(qi&me)===me){var ae=ie.revertLane;if(ae===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),me===ks&&(he=!0);else if((qi&ae)===ae){ie=ie.next,ae===ks&&(he=!0);continue}else me={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(A=G=me,M=d):G=G.next=me,rt.lanes|=ae,Ra|=ae;me=ie.action,os&&r(d,me),d=ie.hasEagerState?ie.eagerState:r(d,me)}else ae={lane:me,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(A=G=ae,M=d):G=G.next=ae,rt.lanes|=me,Ra|=me;ie=ie.next}while(ie!==null&&ie!==i);if(G===null?M=d:G.next=A,!Wn(d,t.memoizedState)&&(sn=!0,he&&(r=Xs,r!==null)))throw r;t.memoizedState=d,t.baseState=M,t.baseQueue=G,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Hu(t){var i=$t(),r=i.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var M=f=f.next;do d=t(d,M.action),M=M.next;while(M!==f);Wn(d,i.memoizedState)||(sn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function qp(t,i,r){var l=rt,f=$t(),d=St;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=i();var M=!Wn((Pt||f).memoizedState,r);if(M&&(f.memoizedState=r,sn=!0),f=f.queue,ku(Yp.bind(null,l,f,t),[t]),f.getSnapshot!==i||M||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,Ks(9,{destroy:void 0},jp.bind(null,l,f,r,i),null),It===null)throw Error(s(349));d||(qi&127)!==0||Wp(l,i,r)}return r}function Wp(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=rt.updateQueue,i===null?(i=yo(),rt.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function jp(t,i,r,l){i.value=r,i.getSnapshot=l,Zp(i)&&Kp(t)}function Yp(t,i,r){return r(function(){Zp(i)&&Kp(t)})}function Zp(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!Wn(t,r)}catch{return!0}}function Kp(t){var i=$a(t,2);i!==null&&Vn(i,t,2)}function Gu(t){var i=On();if(typeof t=="function"){var r=t;if(t=r(),os){Ke(!0);try{r()}finally{Ke(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},i}function Qp(t,i,r,l){return t.baseState=r,Fu(t,Pt,typeof l=="function"?l:Wi)}function Zx(t,i,r,l,f){if(To(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};P.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,Jp(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Jp(t,i){var r=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=P.T,M={};P.T=M;try{var A=r(f,l),G=P.S;G!==null&&G(M,A),$p(t,i,A)}catch(ie){Vu(t,i,ie)}finally{d!==null&&M.types!==null&&(d.types=M.types),P.T=d}}else try{d=r(f,l),$p(t,i,d)}catch(ie){Vu(t,i,ie)}}function $p(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){em(t,i,l)},function(l){return Vu(t,i,l)}):em(t,i,r)}function em(t,i,r){i.status="fulfilled",i.value=r,tm(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,Jp(t,r)))}function Vu(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,tm(i),i=i.next;while(i!==l)}t.action=null}function tm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function nm(t,i){return i}function im(t,i){if(St){var r=It.formState;if(r!==null){e:{var l=rt;if(St){if(Vt){t:{for(var f=Vt,d=oi;f.nodeType!==8;){if(!d){f=null;break t}if(f=ui(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Vt=ui(f.nextSibling),l=f.data==="F!";break e}}_a(l)}l=!1}l&&(i=r[0])}}return r=On(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:i},r.queue=l,r=Mm.bind(null,rt,l),l.dispatch=r,l=Gu(!1),d=Yu.bind(null,rt,!1,l.queue),l=On(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,r=Zx.bind(null,rt,f,d,r),f.dispatch=r,l.memoizedState=t,[i,r,!1]}function am(t){var i=$t();return sm(i,Pt,t)}function sm(t,i,r){if(i=Fu(t,i,nm)[0],t=Mo(Wi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ll(i)}catch(M){throw M===qs?fo:M}else l=i;i=$t();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(rt.flags|=2048,Ks(9,{destroy:void 0},Kx.bind(null,f,r),null)),[l,d,t]}function Kx(t,i){t.action=i}function rm(t){var i=$t(),r=Pt;if(r!==null)return sm(i,r,t);$t(),i=i.memoizedState,r=$t();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function Ks(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=rt.updateQueue,i===null&&(i=yo(),rt.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function lm(){return $t().memoizedState}function Eo(t,i,r,l){var f=On();rt.flags|=t,f.memoizedState=Ks(1|i,{destroy:void 0},r,l===void 0?null:l)}function bo(t,i,r,l){var f=$t();l=l===void 0?null:l;var d=f.memoizedState.inst;Pt!==null&&l!==null&&Lu(l,Pt.memoizedState.deps)?f.memoizedState=Ks(i,d,r,l):(rt.flags|=t,f.memoizedState=Ks(1|i,d,r,l))}function om(t,i){Eo(8390656,8,t,i)}function ku(t,i){bo(2048,8,t,i)}function Qx(t){rt.flags|=4;var i=rt.updateQueue;if(i===null)i=yo(),rt.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function cm(t){var i=$t().memoizedState;return Qx({ref:i,nextImpl:t}),function(){if((Ct&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function um(t,i){return bo(4,2,t,i)}function fm(t,i){return bo(4,4,t,i)}function hm(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dm(t,i,r){r=r!=null?r.concat([t]):null,bo(4,4,hm.bind(null,i,t),r)}function Xu(){}function pm(t,i){var r=$t();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Lu(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function mm(t,i){var r=$t();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Lu(i,l[1]))return l[0];if(l=t(),os){Ke(!0);try{t()}finally{Ke(!1)}}return r.memoizedState=[l,i],l}function qu(t,i,r){return r===void 0||(qi&1073741824)!==0&&(_t&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=gg(),rt.lanes|=t,Ra|=t,r)}function gm(t,i,r,l){return Wn(r,i)?r:js.current!==null?(t=qu(t,r,l),Wn(t,i)||(sn=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(_t&261930)===0?(sn=!0,t.memoizedState=r):(t=gg(),rt.lanes|=t,Ra|=t,i)}function vm(t,i,r,l,f){var d=X.p;X.p=d!==0&&8>d?d:8;var M=P.T,A={};P.T=A,Yu(t,!1,i,r);try{var G=f(),ie=P.S;if(ie!==null&&ie(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var he=Wx(G,l);ol(t,i,he,Jn(t))}else ol(t,i,l,Jn(t))}catch(me){ol(t,i,{then:function(){},status:"rejected",reason:me},Jn())}finally{X.p=d,M!==null&&A.types!==null&&(M.types=A.types),P.T=M}}function Jx(){}function Wu(t,i,r,l){if(t.tag!==5)throw Error(s(476));var f=_m(t).queue;vm(t,f,i,Y,r===null?Jx:function(){return xm(t),r(l)})}function _m(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Y},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function xm(t){var i=_m(t);i.next===null&&(i=t.alternate.memoizedState),ol(t,i.next.queue,{},Jn())}function ju(){return yn(Tl)}function ym(){return $t().memoizedState}function Sm(){return $t().memoizedState}function $x(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=Jn();t=Sa(r);var l=Ma(i,t,r);l!==null&&(Vn(l,i,r),il(l,i,r)),i={cache:Mu()},t.payload=i;return}i=i.return}}function ey(t,i,r){var l=Jn();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},To(t)?Em(i,r):(r=fu(t,i,r,l),r!==null&&(Vn(r,t,l),bm(r,i,l)))}function Mm(t,i,r){var l=Jn();ol(t,i,r,l)}function ol(t,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(To(t))Em(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,A=d(M,r);if(f.hasEagerState=!0,f.eagerState=A,Wn(A,M))return ao(t,i,f,0),It===null&&io(),!1}catch{}if(r=fu(t,i,f,l),r!==null)return Vn(r,t,l),bm(r,i,l),!0}return!1}function Yu(t,i,r,l){if(l={lane:2,revertLane:Rf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},To(t)){if(i)throw Error(s(479))}else i=fu(t,r,l,2),i!==null&&Vn(i,t,2)}function To(t){var i=t.alternate;return t===rt||i!==null&&i===rt}function Em(t,i){Ys=_o=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function bm(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,Cs(t,r)}}var cl={readContext:yn,use:So,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useLayoutEffect:Zt,useInsertionEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useSyncExternalStore:Zt,useId:Zt,useHostTransitionStatus:Zt,useFormState:Zt,useActionState:Zt,useOptimistic:Zt,useMemoCache:Zt,useCacheRefresh:Zt};cl.useEffectEvent=Zt;var Tm={readContext:yn,use:So,useCallback:function(t,i){return On().memoizedState=[t,i===void 0?null:i],t},useContext:yn,useEffect:om,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Eo(4194308,4,hm.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Eo(4194308,4,t,i)},useInsertionEffect:function(t,i){Eo(4,2,t,i)},useMemo:function(t,i){var r=On();i=i===void 0?null:i;var l=t();if(os){Ke(!0);try{t()}finally{Ke(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=On();if(r!==void 0){var f=r(i);if(os){Ke(!0);try{r(i)}finally{Ke(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=ey.bind(null,rt,t),[l.memoizedState,t]},useRef:function(t){var i=On();return t={current:t},i.memoizedState=t},useState:function(t){t=Gu(t);var i=t.queue,r=Mm.bind(null,rt,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Xu,useDeferredValue:function(t,i){var r=On();return qu(r,t,i)},useTransition:function(){var t=Gu(!1);return t=vm.bind(null,rt,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=rt,f=On();if(St){if(r===void 0)throw Error(s(407));r=r()}else{if(r=i(),It===null)throw Error(s(349));(_t&127)!==0||Wp(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,om(Yp.bind(null,l,d,t),[t]),l.flags|=2048,Ks(9,{destroy:void 0},jp.bind(null,l,d,r,i),null),r},useId:function(){var t=On(),i=It.identifierPrefix;if(St){var r=Ui,l=Di;r=(l&~(1<<32-Qe(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=xo++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=jx++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:ju,useFormState:im,useActionState:im,useOptimistic:function(t){var i=On();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Yu.bind(null,rt,!0,r),r.dispatch=i,[t,i]},useMemoCache:Iu,useCacheRefresh:function(){return On().memoizedState=$x.bind(null,rt)},useEffectEvent:function(t){var i=On(),r={impl:t};return i.memoizedState=r,function(){if((Ct&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Zu={readContext:yn,use:So,useCallback:pm,useContext:yn,useEffect:ku,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Mo,useRef:lm,useState:function(){return Mo(Wi)},useDebugValue:Xu,useDeferredValue:function(t,i){var r=$t();return gm(r,Pt.memoizedState,t,i)},useTransition:function(){var t=Mo(Wi)[0],i=$t().memoizedState;return[typeof t=="boolean"?t:ll(t),i]},useSyncExternalStore:qp,useId:ym,useHostTransitionStatus:ju,useFormState:am,useActionState:am,useOptimistic:function(t,i){var r=$t();return Qp(r,Pt,t,i)},useMemoCache:Iu,useCacheRefresh:Sm};Zu.useEffectEvent=cm;var Am={readContext:yn,use:So,useCallback:pm,useContext:yn,useEffect:ku,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Hu,useRef:lm,useState:function(){return Hu(Wi)},useDebugValue:Xu,useDeferredValue:function(t,i){var r=$t();return Pt===null?qu(r,t,i):gm(r,Pt.memoizedState,t,i)},useTransition:function(){var t=Hu(Wi)[0],i=$t().memoizedState;return[typeof t=="boolean"?t:ll(t),i]},useSyncExternalStore:qp,useId:ym,useHostTransitionStatus:ju,useFormState:rm,useActionState:rm,useOptimistic:function(t,i){var r=$t();return Pt!==null?Qp(r,Pt,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:Sm};Am.useEffectEvent=cm;function Ku(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Qu={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=Jn(),f=Sa(l);f.payload=i,r!=null&&(f.callback=r),i=Ma(t,f,l),i!==null&&(Vn(i,t,l),il(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=Jn(),f=Sa(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Ma(t,f,l),i!==null&&(Vn(i,t,l),il(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=Jn(),l=Sa(r);l.tag=2,i!=null&&(l.callback=i),i=Ma(t,l,r),i!==null&&(Vn(i,t,r),il(i,t,r))}};function Rm(t,i,r,l,f,d,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,M):i.prototype&&i.prototype.isPureReactComponent?!Zr(r,l)||!Zr(f,d):!0}function Cm(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&Qu.enqueueReplaceState(i,i.state,null)}function cs(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=g({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function wm(t){no(t)}function Dm(t){console.error(t)}function Um(t){no(t)}function Ao(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Nm(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ju(t,i,r){return r=Sa(r),r.tag=3,r.payload={element:null},r.callback=function(){Ao(t,i)},r}function Lm(t){return t=Sa(t),t.tag=3,t}function Om(t,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){Nm(i,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Nm(i,r,l),typeof f!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function ty(t,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Vs(i,r,f,!0),r=Yn.current,r!==null){switch(r.tag){case 31:case 13:return ci===null?Io():r.alternate===null&&Kt===0&&(Kt=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===ho?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),bf(t,l,f)),!1;case 22:return r.flags|=65536,l===ho?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),bf(t,l,f)),!1}throw Error(s(435,r.tag))}return bf(t,l,f),Io(),!1}if(St)return i=Yn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==vu&&(t=Error(s(422),{cause:l}),Jr(si(t,r)))):(l!==vu&&(i=Error(s(423),{cause:l}),Jr(si(i,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=si(l,r),f=Ju(t.stateNode,l,f),Cu(t,f),Kt!==4&&(Kt=2)),!1;var d=Error(s(520),{cause:l});if(d=si(d,r),vl===null?vl=[d]:vl.push(d),Kt!==4&&(Kt=2),i===null)return!0;l=si(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=Ju(r.stateNode,l,t),Cu(r,t),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Lm(f),Om(f,t,r,l),Cu(r,f),!1}r=r.return}while(r!==null);return!1}var $u=Error(s(461)),sn=!1;function Sn(t,i,r,l){i.child=t===null?Ip(i,null,r,l):ls(i,t.child,r,l)}function Pm(t,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return is(i),l=Ou(t,i,r,M,d,f),A=Pu(),t!==null&&!sn?(zu(t,i,f),ji(t,i,f)):(St&&A&&mu(i),i.flags|=1,Sn(t,i,l,f),i.child)}function zm(t,i,r,l,f){if(t===null){var d=r.type;return typeof d=="function"&&!hu(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Bm(t,i,d,l,f)):(t=ro(r.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!of(t,f)){var M=d.memoizedProps;if(r=r.compare,r=r!==null?r:Zr,r(M,l)&&t.ref===i.ref)return ji(t,i,f)}return i.flags|=1,t=Gi(d,l),t.ref=i.ref,t.return=i,i.child=t}function Bm(t,i,r,l,f){if(t!==null){var d=t.memoizedProps;if(Zr(d,l)&&t.ref===i.ref)if(sn=!1,i.pendingProps=l=d,of(t,f))(t.flags&131072)!==0&&(sn=!0);else return i.lanes=t.lanes,ji(t,i,f)}return ef(t,i,r,l,f)}function Im(t,i,r,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Fm(t,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&uo(i,d!==null?d.cachePool:null),d!==null?Gp(i,d):Du(),Vp(i);else return l=i.lanes=536870912,Fm(t,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(uo(i,d.cachePool),Gp(i,d),ba(),i.memoizedState=null):(t!==null&&uo(i,null),Du(),ba());return Sn(t,i,f,r),i.child}function ul(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Fm(t,i,r,l,f){var d=bu();return d=d===null?null:{parent:nn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},t!==null&&uo(i,null),Du(),Vp(i),t!==null&&Vs(t,i,l,!0),i.childLanes=f,null}function Ro(t,i){return i=wo({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Hm(t,i,r){return ls(i,t.child,null,r),t=Ro(i,i.pendingProps),t.flags|=2,Zn(i),i.memoizedState=null,t}function ny(t,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(St){if(l.mode==="hidden")return t=Ro(i,l),i.lanes=536870912,ul(null,t);if(Nu(i),(t=Vt)?(t=Jg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},r=Ep(t),r.return=i,i.child=r,xn=i,Vt=null)):t=null,t===null)throw _a(i);return i.lanes=536870912,null}return Ro(i,l)}var d=t.memoizedState;if(d!==null){var M=d.dehydrated;if(Nu(i),f)if(i.flags&256)i.flags&=-257,i=Hm(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(s(558));else if(sn||Vs(t,i,r,!1),f=(r&t.childLanes)!==0,sn||f){if(l=It,l!==null&&(M=zr(l,r),M!==0&&M!==d.retryLane))throw d.retryLane=M,$a(t,M),Vn(l,t,M),$u;Io(),i=Hm(t,i,r)}else t=d.treeContext,Vt=ui(M.nextSibling),xn=i,St=!0,va=null,oi=!1,t!==null&&Ap(i,t),i=Ro(i,l),i.flags|=4096;return i}return t=Gi(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Co(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function ef(t,i,r,l,f){return is(i),r=Ou(t,i,r,l,void 0,f),l=Pu(),t!==null&&!sn?(zu(t,i,f),ji(t,i,f)):(St&&l&&mu(i),i.flags|=1,Sn(t,i,r,f),i.child)}function Gm(t,i,r,l,f,d){return is(i),i.updateQueue=null,r=Xp(i,l,r,f),kp(t),l=Pu(),t!==null&&!sn?(zu(t,i,d),ji(t,i,d)):(St&&l&&mu(i),i.flags|=1,Sn(t,i,r,d),i.child)}function Vm(t,i,r,l,f){if(is(i),i.stateNode===null){var d=Is,M=r.contextType;typeof M=="object"&&M!==null&&(d=yn(M)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Qu,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Au(i),M=r.contextType,d.context=typeof M=="object"&&M!==null?yn(M):Is,d.state=i.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Ku(i,r,M,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Qu.enqueueReplaceState(d,d.state,null),sl(i,l,d,f),al(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var A=i.memoizedProps,G=cs(r,A);d.props=G;var ie=d.context,he=r.contextType;M=Is,typeof he=="object"&&he!==null&&(M=yn(he));var me=r.getDerivedStateFromProps;he=typeof me=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,he||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||ie!==M)&&Cm(i,d,l,M),ya=!1;var ae=i.memoizedState;d.state=ae,sl(i,l,d,f),al(),ie=i.memoizedState,A||ae!==ie||ya?(typeof me=="function"&&(Ku(i,r,me,l),ie=i.memoizedState),(G=ya||Rm(i,r,G,l,ae,ie,M))?(he||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ie),d.props=l,d.state=ie,d.context=M,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Ru(t,i),M=i.memoizedProps,he=cs(r,M),d.props=he,me=i.pendingProps,ae=d.context,ie=r.contextType,G=Is,typeof ie=="object"&&ie!==null&&(G=yn(ie)),A=r.getDerivedStateFromProps,(ie=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==me||ae!==G)&&Cm(i,d,l,G),ya=!1,ae=i.memoizedState,d.state=ae,sl(i,l,d,f),al();var ce=i.memoizedState;M!==me||ae!==ce||ya||t!==null&&t.dependencies!==null&&oo(t.dependencies)?(typeof A=="function"&&(Ku(i,r,A,l),ce=i.memoizedState),(he=ya||Rm(i,r,he,l,ae,ce,G)||t!==null&&t.dependencies!==null&&oo(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ce,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ce,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ce),d.props=l,d.state=ce,d.context=G,l=he):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Co(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=ls(i,t.child,null,f),i.child=ls(i,null,r,f)):Sn(t,i,r,f),i.memoizedState=d.state,t=i.child):t=ji(t,i,f),t}function km(t,i,r,l){return ts(),i.flags|=256,Sn(t,i,r,l),i.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(t){return{baseLanes:t,cachePool:Np()}}function af(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=Qn),t}function Xm(t,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=t!==null&&t.memoizedState===null?!1:(Jt.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(St){if(f?Ea(i):ba(),(t=Vt)?(t=Jg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},r=Ep(t),r.return=i,i.child=r,xn=i,Vt=null)):t=null,t===null)throw _a(i);return Hf(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(ba(),f=i.mode,A=wo({mode:"hidden",children:A},f),l=es(l,f,r,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=nf(r),l.childLanes=af(t,M,r),i.memoizedState=tf,ul(null,l)):(Ea(i),sf(i,A))}var G=t.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)i.flags&256?(Ea(i),i.flags&=-257,i=rf(t,i,r)):i.memoizedState!==null?(ba(),i.child=t.child,i.flags|=128,i=null):(ba(),A=l.fallback,f=i.mode,l=wo({mode:"visible",children:l.children},f),A=es(A,f,r,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,ls(i,t.child,null,r),l=i.child,l.memoizedState=nf(r),l.childLanes=af(t,M,r),i.memoizedState=tf,i=ul(null,l));else if(Ea(i),Hf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var ie=M.dgst;M=ie,l=Error(s(419)),l.stack="",l.digest=M,Jr({value:l,source:null,stack:null}),i=rf(t,i,r)}else if(sn||Vs(t,i,r,!1),M=(r&t.childLanes)!==0,sn||M){if(M=It,M!==null&&(l=zr(M,r),l!==0&&l!==G.retryLane))throw G.retryLane=l,$a(t,l),Vn(M,t,l),$u;Ff(A)||Io(),i=rf(t,i,r)}else Ff(A)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,Vt=ui(A.nextSibling),xn=i,St=!0,va=null,oi=!1,t!==null&&Ap(i,t),i=sf(i,l.children),i.flags|=4096);return i}return f?(ba(),A=l.fallback,f=i.mode,G=t.child,ie=G.sibling,l=Gi(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ie!==null?A=Gi(ie,A):(A=es(A,f,r,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,ul(null,l),l=i.child,A=t.child.memoizedState,A===null?A=nf(r):(f=A.cachePool,f!==null?(G=nn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Np(),A={baseLanes:A.baseLanes|r,cachePool:f}),l.memoizedState=A,l.childLanes=af(t,M,r),i.memoizedState=tf,ul(t.child,l)):(Ea(i),r=t.child,t=r.sibling,r=Gi(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=r,i.memoizedState=null,r)}function sf(t,i){return i=wo({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function wo(t,i){return t=jn(22,t,null,i),t.lanes=0,t}function rf(t,i,r){return ls(i,t.child,null,r),t=sf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function qm(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),yu(t.return,i,r)}function lf(t,i,r,l,f,d){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=f,M.treeForkCount=d)}function Wm(t,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var M=Jt.current,A=(M&2)!==0;if(A?(M=M&1|2,i.flags|=128):M&=1,ve(Jt,M),Sn(t,i,l,r),l=St?Qr:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,r,i);else if(t.tag===19)qm(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&vo(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),lf(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&vo(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}lf(i,!0,r,null,d,l);break;case"together":lf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ji(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Ra|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(Vs(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,r=Gi(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Gi(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function of(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&oo(t)))}function iy(t,i,r){switch(i.tag){case 3:Oe(i,i.stateNode.containerInfo),xa(i,nn,t.memoizedState.cache),ts();break;case 27:case 5:tt(i);break;case 4:Oe(i,i.stateNode.containerInfo);break;case 10:xa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Nu(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ea(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Xm(t,i,r):(Ea(i),t=ji(t,i,r),t!==null?t.sibling:null);Ea(i);break;case 19:var f=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Vs(t,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return Wm(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ve(Jt,Jt.current),l)break;return null;case 22:return i.lanes=0,Im(t,i,r,i.pendingProps);case 24:xa(i,nn,t.memoizedState.cache)}return ji(t,i,r)}function jm(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)sn=!0;else{if(!of(t,r)&&(i.flags&128)===0)return sn=!1,iy(t,i,r);sn=(t.flags&131072)!==0}else sn=!1,St&&(i.flags&1048576)!==0&&Tp(i,Qr,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=ss(i.elementType),i.type=t,typeof t=="function")hu(t)?(l=cs(t,l),i.tag=1,i=Vm(null,i,t,l,r)):(i.tag=0,i=ef(null,i,t,l,r));else{if(t!=null){var f=t.$$typeof;if(f===D){i.tag=11,i=Pm(null,i,t,l,r);break e}else if(f===L){i.tag=14,i=zm(null,i,t,l,r);break e}}throw i=W(t)||t,Error(s(306,i,""))}}return i;case 0:return ef(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=cs(l,i.pendingProps),Vm(t,i,l,f,r);case 3:e:{if(Oe(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Ru(t,i),sl(i,l,null,r);var M=i.memoizedState;if(l=M.cache,xa(i,nn,l),l!==d.cache&&Su(i,[nn],r,!0),al(),l=M.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=km(t,i,l,r);break e}else if(l!==f){f=si(Error(s(424)),i),Jr(f),i=km(t,i,l,r);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Vt=ui(t.firstChild),xn=i,St=!0,va=null,oi=!0,r=Ip(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ts(),l===f){i=ji(t,i,r);break e}Sn(t,i,l,r)}i=i.child}return i;case 26:return Co(t,i),t===null?(r=a0(i.type,null,i.pendingProps,null))?i.memoizedState=r:St||(r=i.type,t=i.pendingProps,l=qo(Se.current).createElement(r),l[tn]=i,l[Rn]=t,Mn(l,r,t),He(l),i.stateNode=l):i.memoizedState=a0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return tt(i),t===null&&St&&(l=i.stateNode=t0(i.type,i.pendingProps,Se.current),xn=i,oi=!0,f=Vt,Na(i.type)?(Gf=f,Vt=ui(l.firstChild)):Vt=f),Sn(t,i,i.pendingProps.children,r),Co(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&St&&((f=l=Vt)&&(l=Ly(l,i.type,i.pendingProps,oi),l!==null?(i.stateNode=l,xn=i,Vt=ui(l.firstChild),oi=!1,f=!0):f=!1),f||_a(i)),tt(i),f=i.type,d=i.pendingProps,M=t!==null?t.memoizedProps:null,l=d.children,zf(f,d)?l=null:M!==null&&zf(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=Ou(t,i,Yx,null,null,r),Tl._currentValue=f),Co(t,i),Sn(t,i,l,r),i.child;case 6:return t===null&&St&&((t=r=Vt)&&(r=Oy(r,i.pendingProps,oi),r!==null?(i.stateNode=r,xn=i,Vt=null,t=!0):t=!1),t||_a(i)),null;case 13:return Xm(t,i,r);case 4:return Oe(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ls(i,null,l,r):Sn(t,i,l,r),i.child;case 11:return Pm(t,i,i.type,i.pendingProps,r);case 7:return Sn(t,i,i.pendingProps,r),i.child;case 8:return Sn(t,i,i.pendingProps.children,r),i.child;case 12:return Sn(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,xa(i,i.type,l.value),Sn(t,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,is(i),f=yn(f),l=l(f),i.flags|=1,Sn(t,i,l,r),i.child;case 14:return zm(t,i,i.type,i.pendingProps,r);case 15:return Bm(t,i,i.type,i.pendingProps,r);case 19:return Wm(t,i,r);case 31:return ny(t,i,r);case 22:return Im(t,i,r,i.pendingProps);case 24:return is(i),l=yn(nn),t===null?(f=bu(),f===null&&(f=It,d=Mu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},Au(i),xa(i,nn,f)):((t.lanes&r)!==0&&(Ru(t,i),sl(i,null,null,r),al()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),xa(i,nn,l)):(l=d.cache,xa(i,nn,l),l!==f.cache&&Su(i,[nn],r,!0))),Sn(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Yi(t){t.flags|=4}function cf(t,i,r,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(yg())t.flags|=8192;else throw rs=ho,Tu}else t.flags&=-16777217}function Ym(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c0(i))if(yg())t.flags|=8192;else throw rs=ho,Tu}function Do(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Et():536870912,t.lanes|=i,er|=i)}function fl(t,i){if(!St)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function kt(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function ay(t,i,r){var l=i.pendingProps;switch(gu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(i),null;case 1:return kt(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Xi(nn),Pe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Gs(i)?Yi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_u())),kt(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(Yi(i),d!==null?(kt(i),Ym(i,d)):(kt(i),cf(i,f,null,l,r))):d?d!==t.memoizedState?(Yi(i),kt(i),Ym(i,d)):(kt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Yi(i),kt(i),cf(i,f,t,l,r)),null;case 27:if(wt(i),r=Se.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return kt(i),null}t=Z.current,Gs(i)?Rp(i):(t=t0(f,l,r),i.stateNode=t,Yi(i))}return kt(i),null;case 5:if(wt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return kt(i),null}if(d=Z.current,Gs(i))Rp(i);else{var M=qo(Se.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}d[tn]=i,d[Rn]=l;e:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=d;e:switch(Mn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Yi(i)}}return kt(i),cf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=Se.current,Gs(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,f=xn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[tn]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Xg(t.nodeValue,r)),t||_a(i,!0)}else t=qo(t).createTextNode(l),t[tn]=i,i.stateNode=t}return kt(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=Gs(i),r!==null){if(t===null){if(!l)throw Error(s(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[tn]=i}else ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;kt(i),t=!1}else r=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(Zn(i),i):(Zn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return kt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Gs(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[tn]=i}else ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;kt(i),f=!1}else f=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Zn(i),i):(Zn(i),null)}return Zn(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),Do(i,i.updateQueue),kt(i),null);case 4:return Pe(),t===null&&Uf(i.stateNode.containerInfo),kt(i),null;case 10:return Xi(i.type),kt(i),null;case 19:if(se(Jt),l=i.memoizedState,l===null)return kt(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)fl(l,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=vo(t),d!==null){for(i.flags|=128,fl(l,!1),t=d.updateQueue,i.updateQueue=t,Do(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Mp(r,t),r=r.sibling;return ve(Jt,Jt.current&1|2),St&&Vi(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&xe()>Po&&(i.flags|=128,f=!0,fl(l,!1),i.lanes=4194304)}else{if(!f)if(t=vo(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Do(i,t),fl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!St)return kt(i),null}else 2*xe()-l.renderingStartTime>Po&&r!==536870912&&(i.flags|=128,f=!0,fl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=xe(),t.sibling=null,r=Jt.current,ve(Jt,f?r&1|2:r&1),St&&Vi(i,l.treeForkCount),t):(kt(i),null);case 22:case 23:return Zn(i),Uu(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(kt(i),i.subtreeFlags&6&&(i.flags|=8192)):kt(i),r=i.updateQueue,r!==null&&Do(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&se(as),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Xi(nn),kt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function sy(t,i){switch(gu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Xi(nn),Pe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return wt(i),null;case 31:if(i.memoizedState!==null){if(Zn(i),i.alternate===null)throw Error(s(340));ts()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Zn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ts()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return se(Jt),null;case 4:return Pe(),null;case 10:return Xi(i.type),null;case 22:case 23:return Zn(i),Uu(),t!==null&&se(as),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Xi(nn),null;case 25:return null;default:return null}}function Zm(t,i){switch(gu(i),i.tag){case 3:Xi(nn),Pe();break;case 26:case 27:case 5:wt(i);break;case 4:Pe();break;case 31:i.memoizedState!==null&&Zn(i);break;case 13:Zn(i);break;case 19:se(Jt);break;case 10:Xi(i.type);break;case 22:case 23:Zn(i),Uu(),t!==null&&se(as);break;case 24:Xi(nn)}}function hl(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&t)===t){l=void 0;var d=r.create,M=r.inst;l=d(),M.destroy=l}r=r.next}while(r!==f)}}catch(A){Ot(i,i.return,A)}}function Ta(t,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=i;var G=r,ie=A;try{ie()}catch(he){Ot(f,G,he)}}}l=l.next}while(l!==d)}}catch(he){Ot(i,i.return,he)}}function Km(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{Hp(i,r)}catch(l){Ot(t,t.return,l)}}}function Qm(t,i,r){r.props=cs(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){Ot(t,i,l)}}function dl(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(f){Ot(t,i,f)}}function Ni(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Ot(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Ot(t,i,f)}else r.current=null}function Jm(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Ot(t,t.return,f)}}function uf(t,i,r){try{var l=t.stateNode;Ry(l,t.type,r,i),l[Rn]=i}catch(f){Ot(t,t.return,f)}}function $m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Fi));else if(l!==4&&(l===27&&Na(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(hf(t,i,r),t=t.sibling;t!==null;)hf(t,i,r),t=t.sibling}function Uo(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&Na(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Uo(t,i,r),t=t.sibling;t!==null;)Uo(t,i,r),t=t.sibling}function eg(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Mn(i,l,r),i[tn]=t,i[Rn]=r}catch(d){Ot(t,t.return,d)}}var Zi=!1,rn=!1,df=!1,tg=typeof WeakSet=="function"?WeakSet:Set,mn=null;function ry(t,i){if(t=t.containerInfo,Of=Jo,t=dp(t),su(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var M=0,A=-1,G=-1,ie=0,he=0,me=t,ae=null;t:for(;;){for(var ce;me!==r||f!==0&&me.nodeType!==3||(A=M+f),me!==d||l!==0&&me.nodeType!==3||(G=M+l),me.nodeType===3&&(M+=me.nodeValue.length),(ce=me.firstChild)!==null;)ae=me,me=ce;for(;;){if(me===t)break t;if(ae===r&&++ie===f&&(A=M),ae===d&&++he===l&&(G=M),(ce=me.nextSibling)!==null)break;me=ae,ae=me.parentNode}me=ce}r=A===-1||G===-1?null:{start:A,end:G}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pf={focusedElem:t,selectionRange:r},Jo=!1,mn=i;mn!==null;)if(i=mn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,mn=t;else for(;mn!==null;){switch(i=mn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var Ge=cs(r.type,f);t=l.getSnapshotBeforeUpdate(Ge,d),l.__reactInternalSnapshotBeforeUpdate=t}catch($e){Ot(r,r.return,$e)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)If(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":If(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,mn=t;break}mn=i.return}}function ng(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Qi(t,r),l&4&&hl(5,r);break;case 1:if(Qi(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(M){Ot(r,r.return,M)}else{var f=cs(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ot(r,r.return,M)}}l&64&&Km(r),l&512&&dl(r,r.return);break;case 3:if(Qi(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Hp(t,i)}catch(M){Ot(r,r.return,M)}}break;case 27:i===null&&l&4&&eg(r);case 26:case 5:Qi(t,r),i===null&&l&4&&Jm(r),l&512&&dl(r,r.return);break;case 12:Qi(t,r);break;case 31:Qi(t,r),l&4&&sg(t,r);break;case 13:Qi(t,r),l&4&&rg(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=my.bind(null,r),Py(t,r))));break;case 22:if(l=r.memoizedState!==null||Zi,!l){i=i!==null&&i.memoizedState!==null||rn,f=Zi;var d=rn;Zi=l,(rn=i)&&!d?Ji(t,r,(r.subtreeFlags&8772)!==0):Qi(t,r),Zi=f,rn=d}break;case 30:break;default:Qi(t,r)}}function ig(t){var i=t.alternate;i!==null&&(t.alternate=null,ig(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&te(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,In=!1;function Ki(t,i,r){for(r=r.child;r!==null;)ag(t,i,r),r=r.sibling}function ag(t,i,r){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Je,r)}catch{}switch(r.tag){case 26:rn||Ni(r,i),Ki(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:rn||Ni(r,i);var l=jt,f=In;Na(r.type)&&(jt=r.stateNode,In=!1),Ki(t,i,r),Ml(r.stateNode),jt=l,In=f;break;case 5:rn||Ni(r,i);case 6:if(l=jt,f=In,jt=null,Ki(t,i,r),jt=l,In=f,jt!==null)if(In)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(r.stateNode)}catch(d){Ot(r,i,d)}else try{jt.removeChild(r.stateNode)}catch(d){Ot(r,i,d)}break;case 18:jt!==null&&(In?(t=jt,Kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),or(t)):Kg(jt,r.stateNode));break;case 4:l=jt,f=In,jt=r.stateNode.containerInfo,In=!0,Ki(t,i,r),jt=l,In=f;break;case 0:case 11:case 14:case 15:Ta(2,r,i),rn||Ta(4,r,i),Ki(t,i,r);break;case 1:rn||(Ni(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Qm(r,i,l)),Ki(t,i,r);break;case 21:Ki(t,i,r);break;case 22:rn=(l=rn)||r.memoizedState!==null,Ki(t,i,r),rn=l;break;default:Ki(t,i,r)}}function sg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{or(t)}catch(r){Ot(i,i.return,r)}}}function rg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{or(t)}catch(r){Ot(i,i.return,r)}}function ly(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new tg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new tg),i;default:throw Error(s(435,t.tag))}}function No(t,i){var r=ly(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=gy.bind(null,t,l);l.then(f,f)}})}function Fn(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=t,M=i,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(Na(A.type)){jt=A.stateNode,In=!1;break e}break;case 5:jt=A.stateNode,In=!1;break e;case 3:case 4:jt=A.stateNode.containerInfo,In=!0;break e}A=A.return}if(jt===null)throw Error(s(160));ag(d,M,f),jt=null,In=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)lg(i,t),i=i.sibling}var Si=null;function lg(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(i,t),Hn(t),l&4&&(Ta(3,t,t.return),hl(3,t),Ta(5,t,t.return));break;case 1:Fn(i,t),Hn(t),l&512&&(rn||r===null||Ni(r,r.return)),l&64&&Zi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Si;if(Fn(i,t),Hn(t),l&512&&(rn||r===null||Ni(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[le]||d[tn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Mn(d,l,r),d[tn]=t,He(d),l=d;break e;case"link":var M=l0("link","href",f).get(l+(r.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(A,1);break t}}d=f.createElement(l),Mn(d,l,r),f.head.appendChild(d);break;case"meta":if(M=l0("meta","content",f).get(l+(r.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(A,1);break t}}d=f.createElement(l),Mn(d,l,r),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[tn]=t,He(d),l=d}t.stateNode=l}else o0(f,t.type,t.stateNode);else t.stateNode=r0(f,l,t.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?o0(f,t.type,t.stateNode):r0(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&uf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Fn(i,t),Hn(t),l&512&&(rn||r===null||Ni(r,r.return)),r!==null&&l&4&&uf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Fn(i,t),Hn(t),l&512&&(rn||r===null||Ni(r,r.return)),t.flags&32){f=t.stateNode;try{Us(f,"")}catch(Ge){Ot(t,t.return,Ge)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,uf(t,f,r!==null?r.memoizedProps:f)),l&1024&&(df=!0);break;case 6:if(Fn(i,t),Hn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(Ge){Ot(t,t.return,Ge)}}break;case 3:if(Yo=null,f=Si,Si=Wo(i.containerInfo),Fn(i,t),Si=f,Hn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{or(i.containerInfo)}catch(Ge){Ot(t,t.return,Ge)}df&&(df=!1,og(t));break;case 4:l=Si,Si=Wo(t.stateNode.containerInfo),Fn(i,t),Hn(t),Si=l;break;case 12:Fn(i,t),Hn(t);break;case 31:Fn(i,t),Hn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,No(t,l)));break;case 13:Fn(i,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Oo=xe()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,No(t,l)));break;case 22:f=t.memoizedState!==null;var G=r!==null&&r.memoizedState!==null,ie=Zi,he=rn;if(Zi=ie||f,rn=he||G,Fn(i,t),rn=he,Zi=ie,Hn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||G||Zi||rn||us(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){G=r=i;try{if(d=G.stateNode,f)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=G.stateNode;var me=G.memoizedProps.style,ae=me!=null&&me.hasOwnProperty("display")?me.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ge){Ot(G,G.return,Ge)}}}else if(i.tag===6){if(r===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Ge){Ot(G,G.return,Ge)}}}else if(i.tag===18){if(r===null){G=i;try{var ce=G.stateNode;f?Qg(ce,!0):Qg(G.stateNode,!1)}catch(Ge){Ot(G,G.return,Ge)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,No(t,r))));break;case 19:Fn(i,t),Hn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,No(t,l)));break;case 30:break;case 21:break;default:Fn(i,t),Hn(t)}}function Hn(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if($m(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var f=r.stateNode,d=ff(t);Uo(t,d,f);break;case 5:var M=r.stateNode;r.flags&32&&(Us(M,""),r.flags&=-33);var A=ff(t);Uo(t,A,M);break;case 3:case 4:var G=r.stateNode.containerInfo,ie=ff(t);hf(t,ie,G);break;default:throw Error(s(161))}}catch(he){Ot(t,t.return,he)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function og(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;og(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Qi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ng(t,i.alternate,i),i=i.sibling}function us(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ta(4,i,i.return),us(i);break;case 1:Ni(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Qm(i,i.return,r),us(i);break;case 27:Ml(i.stateNode);case 26:case 5:Ni(i,i.return),us(i);break;case 22:i.memoizedState===null&&us(i);break;case 30:us(i);break;default:us(i)}t=t.sibling}}function Ji(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:Ji(f,d,r),hl(4,d);break;case 1:if(Ji(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ie){Ot(l,l.return,ie)}if(l=d,f=l.updateQueue,f!==null){var A=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Fp(G[f],A)}catch(ie){Ot(l,l.return,ie)}}r&&M&64&&Km(d),dl(d,d.return);break;case 27:eg(d);case 26:case 5:Ji(f,d,r),r&&l===null&&M&4&&Jm(d),dl(d,d.return);break;case 12:Ji(f,d,r);break;case 31:Ji(f,d,r),r&&M&4&&sg(f,d);break;case 13:Ji(f,d,r),r&&M&4&&rg(f,d);break;case 22:d.memoizedState===null&&Ji(f,d,r),dl(d,d.return);break;case 30:break;default:Ji(f,d,r)}i=i.sibling}}function pf(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&$r(r))}function mf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&$r(t))}function Mi(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)cg(t,i,r,l),i=i.sibling}function cg(t,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Mi(t,i,r,l),f&2048&&hl(9,i);break;case 1:Mi(t,i,r,l);break;case 3:Mi(t,i,r,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&$r(t)));break;case 12:if(f&2048){Mi(t,i,r,l),t=i.stateNode;try{var d=i.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Ot(i,i.return,G)}}else Mi(t,i,r,l);break;case 31:Mi(t,i,r,l);break;case 13:Mi(t,i,r,l);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?Mi(t,i,r,l):pl(t,i):d._visibility&2?Mi(t,i,r,l):(d._visibility|=2,Qs(t,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&pf(M,i);break;case 24:Mi(t,i,r,l),f&2048&&mf(i.alternate,i);break;default:Mi(t,i,r,l)}}function Qs(t,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,M=i,A=r,G=l,ie=M.flags;switch(M.tag){case 0:case 11:case 15:Qs(d,M,A,G,f),hl(8,M);break;case 23:break;case 22:var he=M.stateNode;M.memoizedState!==null?he._visibility&2?Qs(d,M,A,G,f):pl(d,M):(he._visibility|=2,Qs(d,M,A,G,f)),f&&ie&2048&&pf(M.alternate,M);break;case 24:Qs(d,M,A,G,f),f&&ie&2048&&mf(M.alternate,M);break;default:Qs(d,M,A,G,f)}i=i.sibling}}function pl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,f=l.flags;switch(l.tag){case 22:pl(r,l),f&2048&&pf(l.alternate,l);break;case 24:pl(r,l),f&2048&&mf(l.alternate,l);break;default:pl(r,l)}i=i.sibling}}var ml=8192;function Js(t,i,r){if(t.subtreeFlags&ml)for(t=t.child;t!==null;)ug(t,i,r),t=t.sibling}function ug(t,i,r){switch(t.tag){case 26:Js(t,i,r),t.flags&ml&&t.memoizedState!==null&&jy(r,Si,t.memoizedState,t.memoizedProps);break;case 5:Js(t,i,r);break;case 3:case 4:var l=Si;Si=Wo(t.stateNode.containerInfo),Js(t,i,r),Si=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ml,ml=16777216,Js(t,i,r),ml=l):Js(t,i,r));break;default:Js(t,i,r)}}function fg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function gl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];mn=l,dg(l,t)}fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hg(t),t=t.sibling}function hg(t){switch(t.tag){case 0:case 11:case 15:gl(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:gl(t);break;case 12:gl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Lo(t)):gl(t);break;default:gl(t)}}function Lo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];mn=l,dg(l,t)}fg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ta(8,i,i.return),Lo(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Lo(i));break;default:Lo(i)}t=t.sibling}}function dg(t,i){for(;mn!==null;){var r=mn;switch(r.tag){case 0:case 11:case 15:Ta(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$r(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,mn=l;else e:for(r=t;mn!==null;){l=mn;var f=l.sibling,d=l.return;if(ig(l),l===r){mn=null;break e}if(f!==null){f.return=d,mn=f;break e}mn=d}}}var oy={getCacheForType:function(t){var i=yn(nn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return yn(nn).controller.signal}},cy=typeof WeakMap=="function"?WeakMap:Map,Ct=0,It=null,pt=null,_t=0,Lt=0,Kn=null,Aa=!1,$s=!1,gf=!1,$i=0,Kt=0,Ra=0,fs=0,vf=0,Qn=0,er=0,vl=null,Gn=null,_f=!1,Oo=0,pg=0,Po=1/0,zo=null,Ca=null,un=0,wa=null,tr=null,ea=0,xf=0,yf=null,mg=null,_l=0,Sf=null;function Jn(){return(Ct&2)!==0&&_t!==0?_t&-_t:P.T!==null?Rf():Br()}function gg(){if(Qn===0)if((_t&536870912)===0||St){var t=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),Qn=t}else Qn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Qn}function Vn(t,i,r){(t===It&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(nr(t,0),Da(t,_t,Qn,!1)),An(t,r),((Ct&2)===0||t!==It)&&(t===It&&((Ct&2)===0&&(fs|=r),Kt===4&&Da(t,_t,Qn,!1)),Li(t))}function vg(t,i,r){if((Ct&6)!==0)throw Error(s(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Ft(t,i),f=l?hy(t,i):Ef(t,i,!0),d=l;do{if(f===0){$s&&!l&&Da(t,i,0,!1);break}else{if(r=t.current.alternate,d&&!uy(r)){f=Ef(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var A=t;f=vl;var G=A.current.memoizedState.isDehydrated;if(G&&(nr(A,M).flags|=256),M=Ef(A,M,!1),M!==2){if(gf&&!G){A.errorRecoveryDisabledLanes|=d,fs|=d,f=4;break e}d=Gn,Gn=f,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}f=M}if(d=!1,f!==2)continue}}if(f===1){nr(t,0),Da(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Da(l,i,Qn,!Aa);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Oo+300-xe(),10<f)){if(Da(l,i,Qn,!Aa),ht(l,0,!0)!==0)break e;ea=i,l.timeoutHandle=Yg(_g.bind(null,l,r,Gn,zo,_f,i,Qn,fs,er,Aa,d,"Throttled",-0,0),f);break e}_g(l,r,Gn,zo,_f,i,Qn,fs,er,Aa,d,null,-0,0)}}break}while(!0);Li(t)}function _g(t,i,r,l,f,d,M,A,G,ie,he,me,ae,ce){if(t.timeoutHandle=-1,me=i.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},ug(i,d,me);var Ge=(d&62914560)===d?Oo-xe():(d&4194048)===d?pg-xe():0;if(Ge=Yy(me,Ge),Ge!==null){ea=d,t.cancelPendingCommit=Ge(Ag.bind(null,t,i,d,r,l,f,M,A,G,he,me,null,ae,ce)),Da(t,d,M,!ie);return}}Ag(t,i,d,r,l,f,M,A,G)}function uy(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!Wn(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Da(t,i,r,l){i&=~vf,i&=~fs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Qe(f),M=1<<d;l[d]=-1,f&=~M}r!==0&&wi(t,r,i)}function Bo(){return(Ct&6)===0?(xl(0),!1):!0}function Mf(){if(pt!==null){if(Lt===0)var t=pt.return;else t=pt,ki=ns=null,Bu(t),Ws=null,tl=0,t=pt;for(;t!==null;)Zm(t.alternate,t),t=t.return;pt=null}}function nr(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Dy(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ea=0,Mf(),It=t,pt=r=Gi(t.current,null),_t=i,Lt=0,Kn=null,Aa=!1,$s=Ft(t,i),gf=!1,er=Qn=vf=fs=Ra=Kt=0,Gn=vl=null,_f=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Qe(l),d=1<<f;i|=t[f],l&=~d}return $i=i,io(),r}function xg(t,i){rt=null,P.H=cl,i===qs||i===fo?(i=Pp(),Lt=3):i===Tu?(i=Pp(),Lt=4):Lt=i===$u?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Kn=i,pt===null&&(Kt=1,Ao(t,si(i,t.current)))}function yg(){var t=Yn.current;return t===null?!0:(_t&4194048)===_t?ci===null:(_t&62914560)===_t||(_t&536870912)!==0?t===ci:!1}function Sg(){var t=P.H;return P.H=cl,t===null?cl:t}function Mg(){var t=P.A;return P.A=oy,t}function Io(){Kt=4,Aa||(_t&4194048)!==_t&&Yn.current!==null||($s=!0),(Ra&134217727)===0&&(fs&134217727)===0||It===null||Da(It,_t,Qn,!1)}function Ef(t,i,r){var l=Ct;Ct|=2;var f=Sg(),d=Mg();(It!==t||_t!==i)&&(zo=null,nr(t,i)),i=!1;var M=Kt;e:do try{if(Lt!==0&&pt!==null){var A=pt,G=Kn;switch(Lt){case 8:Mf(),M=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(i=!0);var ie=Lt;if(Lt=0,Kn=null,ir(t,A,G,ie),r&&$s){M=0;break e}break;default:ie=Lt,Lt=0,Kn=null,ir(t,A,G,ie)}}fy(),M=Kt;break}catch(he){xg(t,he)}while(!0);return i&&t.shellSuspendCounter++,ki=ns=null,Ct=l,P.H=f,P.A=d,pt===null&&(It=null,_t=0,io()),M}function fy(){for(;pt!==null;)Eg(pt)}function hy(t,i){var r=Ct;Ct|=2;var l=Sg(),f=Mg();It!==t||_t!==i?(zo=null,Po=xe()+500,nr(t,i)):$s=Ft(t,i);e:do try{if(Lt!==0&&pt!==null){i=pt;var d=Kn;t:switch(Lt){case 1:Lt=0,Kn=null,ir(t,i,d,1);break;case 2:case 9:if(Lp(d)){Lt=0,Kn=null,bg(i);break}i=function(){Lt!==2&&Lt!==9||It!==t||(Lt=7),Li(t)},d.then(i,i);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:Lp(d)?(Lt=0,Kn=null,bg(i)):(Lt=0,Kn=null,ir(t,i,d,7));break;case 5:var M=null;switch(pt.tag){case 26:M=pt.memoizedState;case 5:case 27:var A=pt;if(M?c0(M):A.stateNode.complete){Lt=0,Kn=null;var G=A.sibling;if(G!==null)pt=G;else{var ie=A.return;ie!==null?(pt=ie,Fo(ie)):pt=null}break t}}Lt=0,Kn=null,ir(t,i,d,5);break;case 6:Lt=0,Kn=null,ir(t,i,d,6);break;case 8:Mf(),Kt=6;break e;default:throw Error(s(462))}}dy();break}catch(he){xg(t,he)}while(!0);return ki=ns=null,P.H=l,P.A=f,Ct=r,pt!==null?0:(It=null,_t=0,io(),Kt)}function dy(){for(;pt!==null&&!oe();)Eg(pt)}function Eg(t){var i=jm(t.alternate,t,$i);t.memoizedProps=t.pendingProps,i===null?Fo(t):pt=i}function bg(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=Gm(r,i,i.pendingProps,i.type,void 0,_t);break;case 11:i=Gm(r,i,i.pendingProps,i.type.render,i.ref,_t);break;case 5:Bu(i);default:Zm(r,i),i=pt=Mp(i,$i),i=jm(r,i,$i)}t.memoizedProps=t.pendingProps,i===null?Fo(t):pt=i}function ir(t,i,r,l){ki=ns=null,Bu(i),Ws=null,tl=0;var f=i.return;try{if(ty(t,f,i,r,_t)){Kt=1,Ao(t,si(r,t.current)),pt=null;return}}catch(d){if(f!==null)throw pt=f,d;Kt=1,Ao(t,si(r,t.current)),pt=null;return}i.flags&32768?(St||l===1?t=!0:$s||(_t&536870912)!==0?t=!1:(Aa=t=!0,(l===2||l===9||l===3||l===6)&&(l=Yn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Tg(i,t)):Fo(i)}function Fo(t){var i=t;do{if((i.flags&32768)!==0){Tg(i,Aa);return}t=i.return;var r=ay(i.alternate,i,$i);if(r!==null){pt=r;return}if(i=i.sibling,i!==null){pt=i;return}pt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Tg(t,i){do{var r=sy(t.alternate,t);if(r!==null){r.flags&=32767,pt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){pt=t;return}pt=t=r}while(t!==null);Kt=6,pt=null}function Ag(t,i,r,l,f,d,M,A,G){t.cancelPendingCommit=null;do Ho();while(un!==0);if((Ct&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=uu,Yl(t,r,d,M,A,G),t===It&&(pt=It=null,_t=0),tr=i,wa=t,ea=r,xf=d,yf=f,mg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vy(ze,function(){return Ug(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=X.p,X.p=2,M=Ct,Ct|=4;try{ry(t,i,r)}finally{Ct=M,X.p=f,P.T=l}}un=1,Rg(),Cg(),wg()}}function Rg(){if(un===1){un=0;var t=wa,i=tr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var l=X.p;X.p=2;var f=Ct;Ct|=4;try{lg(i,t);var d=Pf,M=dp(t.containerInfo),A=d.focusedElem,G=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&hp(A.ownerDocument.documentElement,A)){if(G!==null&&su(A)){var ie=G.start,he=G.end;if(he===void 0&&(he=ie),"selectionStart"in A)A.selectionStart=ie,A.selectionEnd=Math.min(he,A.value.length);else{var me=A.ownerDocument||document,ae=me&&me.defaultView||window;if(ae.getSelection){var ce=ae.getSelection(),Ge=A.textContent.length,$e=Math.min(G.start,Ge),Bt=G.end===void 0?$e:Math.min(G.end,Ge);!ce.extend&&$e>Bt&&(M=Bt,Bt=$e,$e=M);var Q=fp(A,$e),q=fp(A,Bt);if(Q&&q&&(ce.rangeCount!==1||ce.anchorNode!==Q.node||ce.anchorOffset!==Q.offset||ce.focusNode!==q.node||ce.focusOffset!==q.offset)){var ne=me.createRange();ne.setStart(Q.node,Q.offset),ce.removeAllRanges(),$e>Bt?(ce.addRange(ne),ce.extend(q.node,q.offset)):(ne.setEnd(q.node,q.offset),ce.addRange(ne))}}}}for(me=[],ce=A;ce=ce.parentNode;)ce.nodeType===1&&me.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<me.length;A++){var de=me[A];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Jo=!!Of,Pf=Of=null}finally{Ct=f,X.p=l,P.T=r}}t.current=i,un=2}}function Cg(){if(un===2){un=0;var t=wa,i=tr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var l=X.p;X.p=2;var f=Ct;Ct|=4;try{ng(t,i.alternate,i)}finally{Ct=f,X.p=l,P.T=r}}un=3}}function wg(){if(un===4||un===3){un=0,be();var t=wa,i=tr,r=ea,l=mg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?un=5:(un=0,tr=wa=null,Dg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ca=null),ha(r),i=i.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Je,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=X.p,X.p=2,P.T=null;try{for(var d=t.onRecoverableError,M=0;M<l.length;M++){var A=l[M];d(A.value,{componentStack:A.stack})}}finally{P.T=i,X.p=f}}(ea&3)!==0&&Ho(),Li(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===Sf?_l++:(_l=0,Sf=t):_l=0,xl(0)}}function Dg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,$r(i)))}function Ho(){return Rg(),Cg(),wg(),Ug()}function Ug(){if(un!==5)return!1;var t=wa,i=xf;xf=0;var r=ha(ea),l=P.T,f=X.p;try{X.p=32>r?32:r,P.T=null,r=yf,yf=null;var d=wa,M=ea;if(un=0,tr=wa=null,ea=0,(Ct&6)!==0)throw Error(s(331));var A=Ct;if(Ct|=4,hg(d.current),cg(d,d.current,M,r),Ct=A,xl(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Je,d)}catch{}return!0}finally{X.p=f,P.T=l,Dg(t,i)}}function Ng(t,i,r){i=si(r,i),i=Ju(t.stateNode,i,2),t=Ma(t,i,2),t!==null&&(An(t,2),Li(t))}function Ot(t,i,r){if(t.tag===3)Ng(t,t,r);else for(;i!==null;){if(i.tag===3){Ng(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ca===null||!Ca.has(l))){t=si(r,t),r=Lm(2),l=Ma(i,r,2),l!==null&&(Om(r,l,i,t),An(l,2),Li(l));break}}i=i.return}}function bf(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new cy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(gf=!0,f.add(r),t=py.bind(null,t,i,r),i.then(t,t))}function py(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,It===t&&(_t&r)===r&&(Kt===4||Kt===3&&(_t&62914560)===_t&&300>xe()-Oo?(Ct&2)===0&&nr(t,0):vf|=r,er===_t&&(er=0)),Li(t)}function Lg(t,i){i===0&&(i=Et()),t=$a(t,i),t!==null&&(An(t,i),Li(t))}function my(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Lg(t,r)}function gy(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Lg(t,r)}function vy(t,i){return F(t,i)}var Go=null,ar=null,Tf=!1,Vo=!1,Af=!1,Ua=0;function Li(t){t!==ar&&t.next===null&&(ar===null?Go=ar=t:ar=ar.next=t),Vo=!0,Tf||(Tf=!0,xy())}function xl(t,i){if(!Af&&Vo){Af=!0;do for(var r=!1,l=Go;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var M=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-Qe(42|t)+1)-1,d&=f&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Bg(l,d))}else d=_t,d=ht(l,l===It?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ft(l,d)||(r=!0,Bg(l,d));l=l.next}while(r);Af=!1}}function _y(){Og()}function Og(){Vo=Tf=!1;var t=0;Ua!==0&&wy()&&(t=Ua);for(var i=xe(),r=null,l=Go;l!==null;){var f=l.next,d=Pg(l,i);d===0?(l.next=null,r===null?Go=f:r.next=f,f===null&&(ar=r)):(r=l,(t!==0||(d&3)!==0)&&(Vo=!0)),l=f}un!==0&&un!==5||xl(t),Ua!==0&&(Ua=0)}function Pg(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var M=31-Qe(d),A=1<<M,G=f[M];G===-1?((A&r)===0||(A&l)!==0)&&(f[M]=on(A,i)):G<=i&&(t.expiredLanes|=A),d&=~A}if(i=It,r=_t,r=ht(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&C(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ft(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&C(l),ha(r)){case 2:case 8:r=Ne;break;case 32:r=ze;break;case 268435456:r=Ae;break;default:r=ze}return l=zg.bind(null,t),r=F(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&C(l),t.callbackPriority=2,t.callbackNode=null,2}function zg(t,i){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Ho()&&t.callbackNode!==r)return null;var l=_t;return l=ht(t,t===It?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(vg(t,l,i),Pg(t,xe()),t.callbackNode!=null&&t.callbackNode===r?zg.bind(null,t):null)}function Bg(t,i){if(Ho())return null;vg(t,i,!0)}function xy(){Uy(function(){(Ct&6)!==0?F(Ye,_y):Og()})}function Rf(){if(Ua===0){var t=ks;t===0&&(t=pe,pe<<=1,(pe&261888)===0&&(pe=256)),Ua=t}return Ua}function Ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zl(""+t)}function Fg(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function yy(t,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=Ig((f[Rn]||null).action),M=l.submitter;M&&(i=(i=M[Rn]||null)?Ig(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var A=new $l("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ua!==0){var G=M?Fg(f,M):new FormData(f);Wu(r,{pending:!0,data:G,method:f.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=M?Fg(f,M):new FormData(f),Wu(r,{pending:!0,data:G,method:f.method,action:d},d,G))},currentTarget:f}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],Sy=wf.toLowerCase(),My=wf[0].toUpperCase()+wf.slice(1);yi(Sy,"on"+My)}yi(gp,"onAnimationEnd"),yi(vp,"onAnimationIteration"),yi(_p,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Ix,"onTransitionRun"),yi(Fx,"onTransitionStart"),yi(Hx,"onTransitionCancel"),yi(xp,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function Hg(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var M=l.length-1;0<=M;M--){var A=l[M],G=A.instance,ie=A.currentTarget;if(A=A.listener,G!==d&&f.isPropagationStopped())break e;d=A,f.currentTarget=ie;try{d(f)}catch(he){no(he)}f.currentTarget=null,d=G}else for(M=0;M<l.length;M++){if(A=l[M],G=A.instance,ie=A.currentTarget,A=A.listener,G!==d&&f.isPropagationStopped())break e;d=A,f.currentTarget=ie;try{d(f)}catch(he){no(he)}f.currentTarget=null,d=G}}}}function mt(t,i){var r=i[Ir];r===void 0&&(r=i[Ir]=new Set);var l=t+"__bubble";r.has(l)||(Gg(i,t,2,!1),r.add(l))}function Df(t,i,r){var l=0;i&&(l|=4),Gg(r,t,l,i)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Uf(t){if(!t[ko]){t[ko]=!0,et.forEach(function(r){r!=="selectionchange"&&(Ey.has(r)||Df(r,!1,t),Df(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ko]||(i[ko]=!0,Df("selectionchange",!1,i))}}function Gg(t,i,r,l){switch(g0(i)){case 2:var f=Qy;break;case 8:f=Jy;break;default:f=Wf}r=f.bind(null,i,r,t),f=void 0,!Kc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function Nf(t,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=Te(A),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){l=d=M;continue e}A=A.parentNode}}l=l.return}Wd(function(){var ie=d,he=Yc(r),me=[];e:{var ae=yp.get(t);if(ae!==void 0){var ce=$l,Ge=t;switch(t){case"keypress":if(Ql(r)===0)break e;case"keydown":case"keyup":ce=gx;break;case"focusin":Ge="focus",ce=eu;break;case"focusout":Ge="blur",ce=eu;break;case"beforeblur":case"afterblur":ce=eu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=xx;break;case gp:case vp:case _p:ce=lx;break;case xp:ce=Sx;break;case"scroll":case"scrollend":ce=nx;break;case"wheel":ce=Ex;break;case"copy":case"cut":case"paste":ce=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Qd;break;case"toggle":case"beforetoggle":ce=Tx}var $e=(i&4)!==0,Bt=!$e&&(t==="scroll"||t==="scrollend"),Q=$e?ae!==null?ae+"Capture":null:ae;$e=[];for(var q=ie,ne;q!==null;){var de=q;if(ne=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||ne===null||Q===null||(de=Vr(q,Q),de!=null&&$e.push(Sl(q,de,ne))),Bt)break;q=q.return}0<$e.length&&(ae=new ce(ae,Ge,null,r,he),me.push({event:ae,listeners:$e}))}}if((i&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",ae&&r!==jc&&(Ge=r.relatedTarget||r.fromElement)&&(Te(Ge)||Ge[da]))break e;if((ce||ae)&&(ae=he.window===he?he:(ae=he.ownerDocument)?ae.defaultView||ae.parentWindow:window,ce?(Ge=r.relatedTarget||r.toElement,ce=ie,Ge=Ge?Te(Ge):null,Ge!==null&&(Bt=c(Ge),$e=Ge.tag,Ge!==Bt||$e!==5&&$e!==27&&$e!==6)&&(Ge=null)):(ce=null,Ge=ie),ce!==Ge)){if($e=Zd,de="onMouseLeave",Q="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&($e=Qd,de="onPointerLeave",Q="onPointerEnter",q="pointer"),Bt=ce==null?ae:Ie(ce),ne=Ge==null?ae:Ie(Ge),ae=new $e(de,q+"leave",ce,r,he),ae.target=Bt,ae.relatedTarget=ne,de=null,Te(he)===ie&&($e=new $e(Q,q+"enter",Ge,r,he),$e.target=ne,$e.relatedTarget=Bt,de=$e),Bt=de,ce&&Ge)t:{for($e=by,Q=ce,q=Ge,ne=0,de=Q;de;de=$e(de))ne++;de=0;for(var je=q;je;je=$e(je))de++;for(;0<ne-de;)Q=$e(Q),ne--;for(;0<de-ne;)q=$e(q),de--;for(;ne--;){if(Q===q||q!==null&&Q===q.alternate){$e=Q;break t}Q=$e(Q),q=$e(q)}$e=null}else $e=null;ce!==null&&Vg(me,ae,ce,$e,!1),Ge!==null&&Bt!==null&&Vg(me,Bt,Ge,$e,!0)}}e:{if(ae=ie?Ie(ie):window,ce=ae.nodeName&&ae.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ae.type==="file")var Tt=sp;else if(ip(ae))if(rp)Tt=Px;else{Tt=Lx;var Ve=Nx}else ce=ae.nodeName,!ce||ce.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ie&&Wc(ie.elementType)&&(Tt=sp):Tt=Ox;if(Tt&&(Tt=Tt(t,ie))){ap(me,Tt,r,he);break e}Ve&&Ve(t,ae,ie),t==="focusout"&&ie&&ae.type==="number"&&ie.memoizedProps.value!=null&&qc(ae,"number",ae.value)}switch(Ve=ie?Ie(ie):window,t){case"focusin":(ip(Ve)||Ve.contentEditable==="true")&&(Ps=Ve,ru=ie,Kr=null);break;case"focusout":Kr=ru=Ps=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,pp(me,r,he);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":pp(me,r,he)}var lt;if(nu)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Os?tp(t,r)&&(xt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(xt="onCompositionStart");xt&&(Jd&&r.locale!=="ko"&&(Os||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Os&&(lt=jd()):(ma=he,Qc="value"in ma?ma.value:ma.textContent,Os=!0)),Ve=Xo(ie,xt),0<Ve.length&&(xt=new Kd(xt,t,null,r,he),me.push({event:xt,listeners:Ve}),lt?xt.data=lt:(lt=np(r),lt!==null&&(xt.data=lt)))),(lt=Rx?Cx(t,r):wx(t,r))&&(xt=Xo(ie,"onBeforeInput"),0<xt.length&&(Ve=new Kd("onBeforeInput","beforeinput",null,r,he),me.push({event:Ve,listeners:xt}),Ve.data=lt)),yy(me,t,ie,r,he)}Hg(me,i)})}function Sl(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Xo(t,i){for(var r=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Vr(t,r),f!=null&&l.unshift(Sl(t,f,d)),f=Vr(t,i),f!=null&&l.push(Sl(t,f,d))),t.tag===3)return l;t=t.return}return[]}function by(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vg(t,i,r,l,f){for(var d=i._reactName,M=[];r!==null&&r!==l;){var A=r,G=A.alternate,ie=A.stateNode;if(A=A.tag,G!==null&&G===l)break;A!==5&&A!==26&&A!==27||ie===null||(G=ie,f?(ie=Vr(r,d),ie!=null&&M.unshift(Sl(r,ie,G))):f||(ie=Vr(r,d),ie!=null&&M.push(Sl(r,ie,G)))),r=r.return}M.length!==0&&t.push({event:i,listeners:M})}var Ty=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(Ay,"")}function Xg(t,i){return i=kg(i),kg(t)===i}function zt(t,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Us(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Us(t,""+l);break;case"className":yt(t,"class",l);break;case"tabIndex":yt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":yt(t,r,l);break;case"style":Xd(t,l,d);break;case"data":if(i!=="object"){yt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Zl(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&zt(t,i,"name",f.name,f,null),zt(t,i,"formEncType",f.formEncType,f,null),zt(t,i,"formMethod",f.formMethod,f,null),zt(t,i,"formTarget",f.formTarget,f,null)):(zt(t,i,"encType",f.encType,f,null),zt(t,i,"method",f.method,f,null),zt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Zl(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=Fi);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Zl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Yt(t,"popover",l);break;case"xlinkActuate":Qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Yt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ex.get(r)||r,Yt(t,r,l))}}function Lf(t,i,r,l,f,d){switch(r){case"style":Xd(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof l=="string"?Us(t,l):(typeof l=="number"||typeof l=="bigint")&&Us(t,""+l);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ze.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=t[Rn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,f);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):Yt(t,r,l)}}}function Mn(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var M=r[d];if(M!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:zt(t,i,d,M,r,null)}}f&&zt(t,i,"srcSet",r.srcSet,r,null),l&&zt(t,i,"src",r.src,r,null);return;case"input":mt("invalid",t);var A=d=M=f=null,G=null,ie=null;for(l in r)if(r.hasOwnProperty(l)){var he=r[l];if(he!=null)switch(l){case"name":f=he;break;case"type":M=he;break;case"checked":G=he;break;case"defaultChecked":ie=he;break;case"value":d=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,i));break;default:zt(t,i,l,he,r,null)}}Gr(t,d,A,G,ie,M,f,!1);return;case"select":mt("invalid",t),l=M=d=null;for(f in r)if(r.hasOwnProperty(f)&&(A=r[f],A!=null))switch(f){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:zt(t,i,f,A,r,null)}i=d,r=M,t.multiple=!!l,i!=null?Ds(t,!!l,i,!1):r!=null&&Ds(t,!!l,r,!0);return;case"textarea":mt("invalid",t),d=f=l=null;for(M in r)if(r.hasOwnProperty(M)&&(A=r[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:zt(t,i,M,A,r,null)}Vd(t,l,f,d);return;case"option":for(G in r)r.hasOwnProperty(G)&&(l=r[G],l!=null)&&(G==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":zt(t,i,G,l,r,null));return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(l=0;l<yl.length;l++)mt(yl[l],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in r)if(r.hasOwnProperty(ie)&&(l=r[ie],l!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:zt(t,i,ie,l,r,null)}return;default:if(Wc(i)){for(he in r)r.hasOwnProperty(he)&&(l=r[he],l!==void 0&&Lf(t,i,he,l,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(l=r[A],l!=null&&zt(t,i,A,l,r,null))}function Ry(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,M=null,A=null,G=null,ie=null,he=null;for(ce in r){var me=r[ce];if(r.hasOwnProperty(ce)&&me!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":G=me;default:l.hasOwnProperty(ce)||zt(t,i,ce,null,l,me)}}for(var ae in l){var ce=l[ae];if(me=r[ae],l.hasOwnProperty(ae)&&(ce!=null||me!=null))switch(ae){case"type":d=ce;break;case"name":f=ce;break;case"checked":ie=ce;break;case"defaultChecked":he=ce;break;case"value":M=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,i));break;default:ce!==me&&zt(t,i,ae,ce,l,me)}}Hr(t,M,A,G,ie,he,d,f);return;case"select":ce=M=A=ae=null;for(d in r)if(G=r[d],r.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ce=G;default:l.hasOwnProperty(d)||zt(t,i,d,null,l,G)}for(f in l)if(d=l[f],G=r[f],l.hasOwnProperty(f)&&(d!=null||G!=null))switch(f){case"value":ae=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==G&&zt(t,i,f,d,l,G)}i=A,r=M,l=ce,ae!=null?Ds(t,!!r,ae,!1):!!l!=!!r&&(i!=null?Ds(t,!!r,i,!0):Ds(t,!!r,r?[]:"",!1));return;case"textarea":ce=ae=null;for(A in r)if(f=r[A],r.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:zt(t,i,A,null,l,f)}for(M in l)if(f=l[M],d=r[M],l.hasOwnProperty(M)&&(f!=null||d!=null))switch(M){case"value":ae=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&zt(t,i,M,f,l,d)}Gd(t,ae,ce);return;case"option":for(var Ge in r)ae=r[Ge],r.hasOwnProperty(Ge)&&ae!=null&&!l.hasOwnProperty(Ge)&&(Ge==="selected"?t.selected=!1:zt(t,i,Ge,null,l,ae));for(G in l)ae=l[G],ce=r[G],l.hasOwnProperty(G)&&ae!==ce&&(ae!=null||ce!=null)&&(G==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":zt(t,i,G,ae,l,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in r)ae=r[$e],r.hasOwnProperty($e)&&ae!=null&&!l.hasOwnProperty($e)&&zt(t,i,$e,null,l,ae);for(ie in l)if(ae=l[ie],ce=r[ie],l.hasOwnProperty(ie)&&ae!==ce&&(ae!=null||ce!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,i));break;default:zt(t,i,ie,ae,l,ce)}return;default:if(Wc(i)){for(var Bt in r)ae=r[Bt],r.hasOwnProperty(Bt)&&ae!==void 0&&!l.hasOwnProperty(Bt)&&Lf(t,i,Bt,void 0,l,ae);for(he in l)ae=l[he],ce=r[he],!l.hasOwnProperty(he)||ae===ce||ae===void 0&&ce===void 0||Lf(t,i,he,ae,l,ce);return}}for(var Q in r)ae=r[Q],r.hasOwnProperty(Q)&&ae!=null&&!l.hasOwnProperty(Q)&&zt(t,i,Q,null,l,ae);for(me in l)ae=l[me],ce=r[me],!l.hasOwnProperty(me)||ae===ce||ae==null&&ce==null||zt(t,i,me,ae,l,ce)}function qg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,M=f.initiatorType,A=f.duration;if(d&&A&&qg(M)){for(M=0,A=f.responseEnd,l+=1;l<r.length;l++){var G=r[l],ie=G.startTime;if(ie>A)break;var he=G.transferSize,me=G.initiatorType;he&&qg(me)&&(G=G.responseEnd,M+=he*(G<A?1:(A-ie)/(G-ie)))}if(--l,i+=8*(d+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Of=null,Pf=null;function qo(t){return t.nodeType===9?t:t.ownerDocument}function Wg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function zf(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bf=null;function wy(){var t=window.event;return t&&t.type==="popstate"?t===Bf?!1:(Bf=t,!0):(Bf=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(Ny)}:Yg;function Ny(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Kg(t,i){var r=i,l=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(f),or(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ml(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ml(r);for(var d=r.firstChild;d;){var M=d.nextSibling,A=d.nodeName;d[le]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=M}}else r==="body"&&Ml(t.ownerDocument.body);r=f}while(r);or(i)}function Qg(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function If(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":If(r),te(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Ly(t,i,r,l){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[le])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Oy(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=ui(t.nextSibling),t===null))return null;return t}function Jg(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=ui(t.nextSibling),t===null))return null;return t}function Ff(t){return t.data==="$?"||t.data==="$~"}function Hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Py(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ui(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Gf=null;function $g(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return ui(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function e0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function t0(t,i,r){switch(i=qo(r),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ml(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);te(t)}var fi=new Map,n0=new Set;function Wo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ta=X.d;X.d={f:zy,r:By,D:Iy,C:Fy,L:Hy,m:Gy,X:ky,S:Vy,M:Xy};function zy(){var t=ta.f(),i=Bo();return t||i}function By(t){var i=Ue(t);i!==null&&i.tag===5&&i.type==="form"?xm(i):ta.r(t)}var sr=typeof document>"u"?null:document;function i0(t,i,r){var l=sr;if(l&&typeof i=="string"&&i){var f=Dn(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),n0.has(f)||(n0.add(f),t={rel:t,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Mn(i,"link",t),He(i),l.head.appendChild(i)))}}function Iy(t){ta.D(t),i0("dns-prefetch",t,null)}function Fy(t,i){ta.C(t,i),i0("preconnect",t,i)}function Hy(t,i,r){ta.L(t,i,r);var l=sr;if(l&&t&&i){var f='link[rel="preload"][as="'+Dn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+Dn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+Dn(r.imageSizes)+'"]')):f+='[href="'+Dn(t)+'"]';var d=f;switch(i){case"style":d=rr(t);break;case"script":d=lr(t)}fi.has(d)||(t=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),fi.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(El(d))||i==="script"&&l.querySelector(bl(d))||(i=l.createElement("link"),Mn(i,"link",t),He(i),l.head.appendChild(i)))}}function Gy(t,i){ta.m(t,i);var r=sr;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Dn(l)+'"][href="'+Dn(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=lr(t)}if(!fi.has(d)&&(t=g({rel:"modulepreload",href:t},i),fi.set(d,t),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(bl(d)))return}l=r.createElement("link"),Mn(l,"link",t),He(l),r.head.appendChild(l)}}}function Vy(t,i,r){ta.S(t,i,r);var l=sr;if(l&&t){var f=Fe(l).hoistableStyles,d=rr(t);i=i||"default";var M=f.get(d);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(El(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},r),(r=fi.get(d))&&Vf(t,r);var G=M=l.createElement("link");He(G),Mn(G,"link",t),G._p=new Promise(function(ie,he){G.onload=ie,G.onerror=he}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,jo(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(d,M)}}}function ky(t,i){ta.X(t,i);var r=sr;if(r&&t){var l=Fe(r).hoistableScripts,f=lr(t),d=l.get(f);d||(d=r.querySelector(bl(f)),d||(t=g({src:t,async:!0},i),(i=fi.get(f))&&kf(t,i),d=r.createElement("script"),He(d),Mn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Xy(t,i){ta.M(t,i);var r=sr;if(r&&t){var l=Fe(r).hoistableScripts,f=lr(t),d=l.get(f);d||(d=r.querySelector(bl(f)),d||(t=g({src:t,async:!0,type:"module"},i),(i=fi.get(f))&&kf(t,i),d=r.createElement("script"),He(d),Mn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function a0(t,i,r,l){var f=(f=Se.current)?Wo(f):null;if(!f)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=rr(r.href),r=Fe(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=rr(r.href);var d=Fe(f).hoistableStyles,M=d.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,M),(d=f.querySelector(El(t)))&&!d._p&&(M.instance=d,M.state.loading=5),fi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},fi.set(t,r),d||qy(f,t,r,M.state))),i&&l===null)throw Error(s(528,""));return M}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lr(r),r=Fe(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function rr(t){return'href="'+Dn(t)+'"'}function El(t){return'link[rel="stylesheet"]['+t+"]"}function s0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function qy(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Mn(i,"link",r),He(i),t.head.appendChild(i))}function lr(t){return'[src="'+Dn(t)+'"]'}function bl(t){return"script[async]"+t}function r0(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Dn(r.href)+'"]');if(l)return i.instance=l,He(l),l;var f=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),He(l),Mn(l,"style",f),jo(l,r.precedence,t),i.instance=l;case"stylesheet":f=rr(r.href);var d=t.querySelector(El(f));if(d)return i.state.loading|=4,i.instance=d,He(d),d;l=s0(r),(f=fi.get(f))&&Vf(l,f),d=(t.ownerDocument||t).createElement("link"),He(d);var M=d;return M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),Mn(d,"link",l),i.state.loading|=4,jo(d,r.precedence,t),i.instance=d;case"script":return d=lr(r.src),(f=t.querySelector(bl(d)))?(i.instance=f,He(f),f):(l=r,(f=fi.get(d))&&(l=g({},r),kf(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),He(f),Mn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,jo(l,r.precedence,t));return i.instance}function jo(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===i)d=A;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Vf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function kf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Yo=null;function l0(t,i,r){if(Yo===null){var l=new Map,f=Yo=new Map;f.set(r,l)}else f=Yo,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var d=r[f];if(!(d[le]||d[tn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=t+M;var A=l.get(M);A?A.push(d):l.set(M,[d])}}return l}function o0(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function Wy(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function c0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function jy(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=rr(l.href),d=i.querySelector(El(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Zo.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=d,He(d);return}d=i.ownerDocument||i,l=s0(l),(f=fi.get(f))&&Vf(l,f),d=d.createElement("link"),He(d);var M=d;M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),Mn(d,"link",l),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Zo.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Xf=0;function Yy(t,i){return t.stylesheets&&t.count===0&&Qo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&Qo(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Xf===0&&(Xf=62500*Cy());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qo(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Xf?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Zo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ko=null;function Qo(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ko=new Map,i.forEach(Zy,t),Ko=null,Zo.call(t))}function Zy(t,i){if(!(i.state.loading&4)){var r=Ko.get(t);if(r)var l=r.get(null);else{r=new Map,Ko.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var M=f[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),d=r.get(M)||l,d===l&&r.set(null,f),r.set(M,f),this.count++,l=Zo.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Tl={$$typeof:T,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Ky(t,i,r,l,f,d,M,A,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.hiddenUpdates=qn(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function u0(t,i,r,l,f,d,M,A,G,ie,he,me){return t=new Ky(t,i,r,M,G,ie,he,me,A),i=1,d===!0&&(i|=24),d=jn(3,null,null,i),t.current=d,d.stateNode=t,i=Mu(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},Au(d),t}function f0(t){return t?(t=Is,t):Is}function h0(t,i,r,l,f,d){f=f0(f),l.context===null?l.context=f:l.pendingContext=f,l=Sa(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Ma(t,l,i),r!==null&&(Vn(r,t,i),il(r,t,i))}function d0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function qf(t,i){d0(t,i),(t=t.alternate)&&d0(t,i)}function p0(t){if(t.tag===13||t.tag===31){var i=$a(t,67108864);i!==null&&Vn(i,t,67108864),qf(t,67108864)}}function m0(t){if(t.tag===13||t.tag===31){var i=Jn();i=ws(i);var r=$a(t,i);r!==null&&Vn(r,t,i),qf(t,i)}}var Jo=!0;function Qy(t,i,r,l){var f=P.T;P.T=null;var d=X.p;try{X.p=2,Wf(t,i,r,l)}finally{X.p=d,P.T=f}}function Jy(t,i,r,l){var f=P.T;P.T=null;var d=X.p;try{X.p=8,Wf(t,i,r,l)}finally{X.p=d,P.T=f}}function Wf(t,i,r,l){if(Jo){var f=jf(l);if(f===null)Nf(t,i,l,$o,r),v0(t,l);else if(e1(f,t,i,r,l))l.stopPropagation();else if(v0(t,l),i&4&&-1<$y.indexOf(t)){for(;f!==null;){var d=Ue(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=We(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var G=1<<31-Qe(M);A.entanglements[1]|=G,M&=~G}Li(d),(Ct&6)===0&&(Po=xe()+500,xl(0))}}break;case 31:case 13:A=$a(d,2),A!==null&&Vn(A,d,2),Bo(),qf(d,2)}if(d=jf(l),d===null&&Nf(t,i,l,$o,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else Nf(t,i,l,null,r)}}function jf(t){return t=Yc(t),Yf(t)}var $o=null;function Yf(t){if($o=null,t=Te(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=h(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return $o=t,null}function g0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ye()){case Ye:return 2;case Ne:return 8;case ze:case st:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Zf=!1,La=null,Oa=null,Pa=null,Al=new Map,Rl=new Map,za=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(t,i){switch(t){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(i.pointerId)}}function Cl(t,i,r,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Ue(i),i!==null&&p0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function e1(t,i,r,l,f){switch(i){case"focusin":return La=Cl(La,t,i,r,l,f),!0;case"dragenter":return Oa=Cl(Oa,t,i,r,l,f),!0;case"mouseover":return Pa=Cl(Pa,t,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return Al.set(d,Cl(Al.get(d)||null,t,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Rl.set(d,Cl(Rl.get(d)||null,t,i,r,l,f)),!0}return!1}function _0(t){var i=Te(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,Za(t.priority,function(){m0(r)});return}}else if(i===31){if(i=h(r),i!==null){t.blockedOn=i,Za(t.priority,function(){m0(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=jf(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);jc=l,r.target.dispatchEvent(l),jc=null}else return i=Ue(r),i!==null&&p0(i),t.blockedOn=r,!1;i.shift()}return!0}function x0(t,i,r){ec(t)&&r.delete(i)}function t1(){Zf=!1,La!==null&&ec(La)&&(La=null),Oa!==null&&ec(Oa)&&(Oa=null),Pa!==null&&ec(Pa)&&(Pa=null),Al.forEach(x0),Rl.forEach(x0)}function tc(t,i){t.blockedOn===i&&(t.blockedOn=null,Zf||(Zf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,t1)))}var nc=null;function y0(t){nc!==t&&(nc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Yf(l||r)===null)continue;break}var d=Ue(r);d!==null&&(t.splice(i,3),i-=3,Wu(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function or(t){function i(G){return tc(G,t)}La!==null&&tc(La,t),Oa!==null&&tc(Oa,t),Pa!==null&&tc(Pa,t),Al.forEach(i),Rl.forEach(i);for(var r=0;r<za.length;r++){var l=za[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<za.length&&(r=za[0],r.blockedOn===null);)_0(r),r.blockedOn===null&&za.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],M=f[Rn]||null;if(typeof d=="function")M||y0(r);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(f=d,M=d[Rn]||null)A=M.formAction;else if(Yf(f)!==null)continue}else A=M.action;typeof A=="function"?r[l+1]=A:(r.splice(l,3),l-=3),y0(r)}}}function S0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Kf(t){this._internalRoot=t}ic.prototype.render=Kf.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var r=i.current,l=Jn();h0(r,l,t,i,null,null)},ic.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;h0(t.current,2,null,t,null,null),Bo(),i[da]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var i=Br();t={blockedOn:null,target:t,priority:i};for(var r=0;r<za.length&&i!==0&&i<za[r].priority;r++);za.splice(r,0,t),r===0&&_0(t)}};var M0=e.version;if(M0!=="19.2.3")throw Error(s(527,M0,"19.2.3"));X.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var n1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Je=ac.inject(n1),De=ac}catch{}}return Dl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var r=!1,l="",f=wm,d=Dm,M=Um;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=u0(t,1,!1,null,null,r,l,null,f,d,M,S0),t[da]=i.current,Uf(t),new Kf(i)},Dl.hydrateRoot=function(t,i,r){if(!o(t))throw Error(s(299));var l=!1,f="",d=wm,M=Dm,A=Um,G=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(G=r.formState)),i=u0(t,1,!0,i,r??null,l,f,G,d,M,A,S0),i.context=f0(null),r=i.current,l=Jn(),l=ws(l),f=Sa(l),f.callback=null,Ma(r,f,l),r=l,i.current.lanes=r,An(i,r),Li(i),t[da]=i.current,Uf(t),new ic(i)},Dl.version="19.2.3",Dl}var N0;function d1(){if(N0)return $f.exports;N0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),$f.exports=h1(),$f.exports}var p1=d1();const m1=f_(p1);function L0(a){const e=a.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:{r:0,g:0,b:0}}const g1=({dotSize:a=7,gap:e=15,baseColor:n="#abb6e8",activeColor:s="#5665ab",proximity:o=120,shockRadius:c=340,shockStrength:u=4,returnDuration:h=1.5,className:p="",style:m})=>{const v=ft.useRef(null),g=ft.useRef(null),_=ft.useRef([]),y=ft.useRef({x:-9999,y:-9999}),E=ft.useRef(null),b=ft.useMemo(()=>L0(n),[n]),S=ft.useMemo(()=>L0(s),[s]),x=ft.useCallback(()=>{const N=v.current,T=g.current;if(!N||!T)return;const{width:D,height:I}=N.getBoundingClientRect();if(D===0||I===0)return;const O=window.devicePixelRatio||1;T.width=D*O,T.height=I*O,T.style.width=`${D}px`,T.style.height=`${I}px`;const L=T.getContext("2d");L&&L.scale(O,O);const k=a+e,w=Math.floor((D+e)/k),R=Math.floor((I+e)/k),H=k*w-e,ee=k*R-e,$=(D-H)/2+a/2,W=(I-ee)/2+a/2,J=[];for(let P=0;P<R;P++)for(let X=0;X<w;X++)J.push({cx:$+X*k,cy:W+P*k,xOffset:0,yOffset:0,vx:0,vy:0,animating:!1});_.current=J},[a,e]);return ft.useEffect(()=>{let N;const D=()=>{for(const I of _.current){if(!I.animating)continue;const O=1/60,L=-120*I.xOffset-10*I.vx,k=-120*I.yOffset-10*I.vy;I.vx+=L*O,I.vy+=k*O,I.xOffset+=I.vx*O,I.yOffset+=I.vy*O,Math.abs(I.xOffset)<.01&&Math.abs(I.yOffset)<.01&&Math.abs(I.vx)<.01&&Math.abs(I.vy)<.01&&(I.xOffset=0,I.yOffset=0,I.vx=0,I.vy=0,I.animating=!1)}N=requestAnimationFrame(D)};return N=requestAnimationFrame(D),()=>cancelAnimationFrame(N)},[]),ft.useEffect(()=>{const N=o*o,T=()=>{const D=g.current;if(!D)return;const I=D.getContext("2d");if(!I)return;I.clearRect(0,0,D.width,D.height);const{x:O,y:L}=y.current;for(const k of _.current){const w=k.cx+k.xOffset,R=k.cy+k.yOffset,H=k.cx-O,ee=k.cy-L,$=H*H+ee*ee;let W=n;if($<=N){const J=1-Math.sqrt($)/o,P=Math.round(b.r+(S.r-b.r)*J),X=Math.round(b.g+(S.g-b.g)*J),Y=Math.round(b.b+(S.b-b.b)*J);W=`rgb(${P},${X},${Y})`}I.beginPath(),I.arc(w,R,a/2,0,Math.PI*2),I.fillStyle=W,I.fill()}E.current=requestAnimationFrame(T)};return T(),()=>{E.current&&cancelAnimationFrame(E.current)}},[o,n,b,S,a]),ft.useEffect(()=>{x();let N=null;return"ResizeObserver"in window?(N=new ResizeObserver(x),v.current&&N.observe(v.current)):window.addEventListener("resize",x),()=>{N?N.disconnect():window.removeEventListener("resize",x)}},[x]),ft.useEffect(()=>{const N=D=>{const I=g.current;if(!I)return;const O=I.getBoundingClientRect();y.current.x=D.clientX-O.left,y.current.y=D.clientY-O.top},T=D=>{const I=g.current;if(!I)return;const O=I.getBoundingClientRect(),L=D.clientX-O.left,k=D.clientY-O.top;for(const w of _.current){const R=Math.hypot(w.cx-L,w.cy-k);if(R<c){const H=Math.max(0,1-R/c);w.xOffset=(w.cx-L)*u*H*.1,w.yOffset=(w.cy-k)*u*H*.1,w.vx=w.xOffset*3,w.vy=w.yOffset*3,w.animating=!0}}};return window.addEventListener("mousemove",N,{passive:!0}),window.addEventListener("click",T),()=>{window.removeEventListener("mousemove",N),window.removeEventListener("click",T)}},[c,u]),z.jsx("section",{className:`dot-grid ${p}`,style:m,children:z.jsx("div",{ref:v,className:"dot-grid__wrap",children:z.jsx("canvas",{ref:g,className:"dot-grid__canvas"})})})};function Il(a){let e=a[0],n=a[1],s=a[2];return Math.sqrt(e*e+n*n+s*s)}function kh(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a}function v1(a,e,n,s){return a[0]=e,a[1]=n,a[2]=s,a}function O0(a,e,n){return a[0]=e[0]+n[0],a[1]=e[1]+n[1],a[2]=e[2]+n[2],a}function P0(a,e,n){return a[0]=e[0]-n[0],a[1]=e[1]-n[1],a[2]=e[2]-n[2],a}function _1(a,e,n){return a[0]=e[0]*n[0],a[1]=e[1]*n[1],a[2]=e[2]*n[2],a}function x1(a,e,n){return a[0]=e[0]/n[0],a[1]=e[1]/n[1],a[2]=e[2]/n[2],a}function ih(a,e,n){return a[0]=e[0]*n,a[1]=e[1]*n,a[2]=e[2]*n,a}function y1(a,e){let n=e[0]-a[0],s=e[1]-a[1],o=e[2]-a[2];return Math.sqrt(n*n+s*s+o*o)}function S1(a,e){let n=e[0]-a[0],s=e[1]-a[1],o=e[2]-a[2];return n*n+s*s+o*o}function z0(a){let e=a[0],n=a[1],s=a[2];return e*e+n*n+s*s}function M1(a,e){return a[0]=-e[0],a[1]=-e[1],a[2]=-e[2],a}function E1(a,e){return a[0]=1/e[0],a[1]=1/e[1],a[2]=1/e[2],a}function Xh(a,e){let n=e[0],s=e[1],o=e[2],c=n*n+s*s+o*o;return c>0&&(c=1/Math.sqrt(c)),a[0]=e[0]*c,a[1]=e[1]*c,a[2]=e[2]*c,a}function h_(a,e){return a[0]*e[0]+a[1]*e[1]+a[2]*e[2]}function B0(a,e,n){let s=e[0],o=e[1],c=e[2],u=n[0],h=n[1],p=n[2];return a[0]=o*p-c*h,a[1]=c*u-s*p,a[2]=s*h-o*u,a}function b1(a,e,n,s){let o=e[0],c=e[1],u=e[2];return a[0]=o+s*(n[0]-o),a[1]=c+s*(n[1]-c),a[2]=u+s*(n[2]-u),a}function T1(a,e,n,s,o){const c=Math.exp(-s*o);let u=e[0],h=e[1],p=e[2];return a[0]=n[0]+(u-n[0])*c,a[1]=n[1]+(h-n[1])*c,a[2]=n[2]+(p-n[2])*c,a}function A1(a,e,n){let s=e[0],o=e[1],c=e[2],u=n[3]*s+n[7]*o+n[11]*c+n[15];return u=u||1,a[0]=(n[0]*s+n[4]*o+n[8]*c+n[12])/u,a[1]=(n[1]*s+n[5]*o+n[9]*c+n[13])/u,a[2]=(n[2]*s+n[6]*o+n[10]*c+n[14])/u,a}function R1(a,e,n){let s=e[0],o=e[1],c=e[2],u=n[3]*s+n[7]*o+n[11]*c+n[15];return u=u||1,a[0]=(n[0]*s+n[4]*o+n[8]*c)/u,a[1]=(n[1]*s+n[5]*o+n[9]*c)/u,a[2]=(n[2]*s+n[6]*o+n[10]*c)/u,a}function C1(a,e,n){let s=e[0],o=e[1],c=e[2];return a[0]=s*n[0]+o*n[3]+c*n[6],a[1]=s*n[1]+o*n[4]+c*n[7],a[2]=s*n[2]+o*n[5]+c*n[8],a}function w1(a,e,n){let s=e[0],o=e[1],c=e[2],u=n[0],h=n[1],p=n[2],m=n[3],v=h*c-p*o,g=p*s-u*c,_=u*o-h*s,y=h*_-p*g,E=p*v-u*_,b=u*g-h*v,S=m*2;return v*=S,g*=S,_*=S,y*=2,E*=2,b*=2,a[0]=s+v+y,a[1]=o+g+E,a[2]=c+_+b,a}const D1=(function(){const a=[0,0,0],e=[0,0,0];return function(n,s){kh(a,n),kh(e,s),Xh(a,a),Xh(e,e);let o=h_(a,e);return o>1?0:o<-1?Math.PI:Math.acos(o)}})();function U1(a,e){return a[0]===e[0]&&a[1]===e[1]&&a[2]===e[2]}class En extends Array{constructor(e=0,n=e,s=e){return super(e,n,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,s=e){return e.length?this.copy(e):(v1(this,e,n,s),this)}copy(e){return kh(this,e),this}add(e,n){return n?O0(this,e,n):O0(this,this,e),this}sub(e,n){return n?P0(this,e,n):P0(this,this,e),this}multiply(e){return e.length?_1(this,this,e):ih(this,this,e),this}divide(e){return e.length?x1(this,this,e):ih(this,this,1/e),this}inverse(e=this){return E1(this,e),this}len(){return Il(this)}distance(e){return e?y1(this,e):Il(this)}squaredLen(){return z0(this)}squaredDistance(e){return e?S1(this,e):z0(this)}negate(e=this){return M1(this,e),this}cross(e,n){return n?B0(this,e,n):B0(this,this,e),this}scale(e){return ih(this,this,e),this}normalize(){return Xh(this,this),this}dot(e){return h_(this,e)}equals(e){return U1(this,e)}applyMatrix3(e){return C1(this,this,e),this}applyMatrix4(e){return A1(this,this,e),this}scaleRotateMatrix4(e){return R1(this,this,e),this}applyQuaternion(e){return w1(this,this,e),this}angle(e){return D1(this,e)}lerp(e,n){return b1(this,this,e,n),this}smoothLerp(e,n,s){return T1(this,this,e,n,s),this}clone(){return new En(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],s=this[1],o=this[2];return this[0]=e[0]*n+e[4]*s+e[8]*o,this[1]=e[1]*n+e[5]*s+e[9]*o,this[2]=e[2]*n+e[6]*s+e[10]*o,this.normalize()}}const I0=new En;let N1=1,L1=1,F0=!1;class O1{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=N1++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in n)this.addAttribute(s,n[s])}addAttribute(e,n){if(this.attributes[e]=n,n.id=L1++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:s,type:o})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const c=this.attributes[s];this.gl.bindBuffer(c.target,c.buffer),this.glState.boundBuffer=c.buffer;let u=1;o===35674&&(u=2),o===35675&&(u=3),o===35676&&(u=4);const h=c.size/u,p=u===1?0:u*u*4,m=u===1?0:u*4;for(let v=0;v<u;v++)this.gl.vertexAttribPointer(n+v,h,c.type,c.normalized,c.stride+p,c.offset+v*m),this.gl.enableVertexAttribArray(n+v),this.gl.renderer.vertexAttribDivisor(n+v,c.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((o,{name:c})=>{const u=this.attributes[c];u.needsUpdate&&this.updateAttribute(u)});let s=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!F0)return console.warn("No position buffer data found to compute bounds"),F0=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,s=e.size;this.bounds||(this.bounds={min:new En,max:new En,center:new En,scale:new En,radius:1/0});const o=this.bounds.min,c=this.bounds.max,u=this.bounds.center,h=this.bounds.scale;o.set(1/0),c.set(-1/0);for(let p=0,m=n.length;p<m;p+=s){const v=n[p],g=n[p+1],_=n[p+2];o.x=Math.min(v,o.x),o.y=Math.min(g,o.y),o.z=Math.min(_,o.z),c.x=Math.max(v,c.x),c.y=Math.max(g,c.y),c.z=Math.max(_,c.z)}h.sub(c,o),u.add(o,c).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,s=e.size;this.bounds||this.computeBoundingBox(e);let o=0;for(let c=0,u=n.length;c<u;c+=s)I0.fromArray(n,c),o=Math.max(o,this.bounds.center.squaredDistance(I0));this.bounds.radius=Math.sqrt(o)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let P1=1;const H0={};class z1{constructor(e,{vertex:n,fragment:s,uniforms:o={},transparent:c=!1,cullFace:u=e.BACK,frontFace:h=e.CCW,depthTest:p=!0,depthWrite:m=!0,depthFunc:v=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=o,this.id=P1++,n||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=c,this.cullFace=u,this.frontFace=h,this.depthTest=p,this.depthWrite=m,this.depthFunc=v,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:s})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${G0(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${G0(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let u=0;u<s;u++){let h=this.gl.getActiveUniform(this.program,u);this.uniformLocations.set(h,this.gl.getUniformLocation(this.program,h.name));const p=h.name.match(/(\w+)/g);h.uniformName=p[0],h.nameComponents=p.slice(1)}this.attributeLocations=new Map;const o=[],c=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let u=0;u<c;u++){const h=this.gl.getActiveAttrib(this.program,u),p=this.gl.getAttribLocation(this.program,h.name);p!==-1&&(o[p]=h.name,this.attributeLocations.set(h,p))}this.attributeOrder=o.join("")}setBlendFunc(e,n,s,o){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=o,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,s){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=s}setStencilOp(e,n,s){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((o,c)=>{let u=this.uniforms[c.uniformName];for(const h of c.nameComponents){if(!u)break;if(h in u)u=u[h];else{if(Array.isArray(u.value))break;u=void 0;break}}if(!u)return V0(`Active uniform ${c.name} has not been supplied`);if(u&&u.value===void 0)return V0(`${c.name} uniform is missing a value parameter`);if(u.value.texture)return n=n+1,u.value.update(n),ah(this.gl,c.type,o,n);if(u.value.length&&u.value[0].texture){const h=[];return u.value.forEach(p=>{n=n+1,p.update(n),h.push(n)}),ah(this.gl,c.type,o,h)}ah(this.gl,c.type,o,u.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function ah(a,e,n,s){s=s.length?B1(s):s;const o=a.renderer.state.uniformLocations.get(n);if(s.length)if(o===void 0||o.length!==s.length)a.renderer.state.uniformLocations.set(n,s.slice(0));else{if(I1(o,s))return;o.set?o.set(s):F1(o,s),a.renderer.state.uniformLocations.set(n,o)}else{if(o===s)return;a.renderer.state.uniformLocations.set(n,s)}switch(e){case 5126:return s.length?a.uniform1fv(n,s):a.uniform1f(n,s);case 35664:return a.uniform2fv(n,s);case 35665:return a.uniform3fv(n,s);case 35666:return a.uniform4fv(n,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?a.uniform1iv(n,s):a.uniform1i(n,s);case 35671:case 35667:return a.uniform2iv(n,s);case 35672:case 35668:return a.uniform3iv(n,s);case 35673:case 35669:return a.uniform4iv(n,s);case 35674:return a.uniformMatrix2fv(n,!1,s);case 35675:return a.uniformMatrix3fv(n,!1,s);case 35676:return a.uniformMatrix4fv(n,!1,s)}}function G0(a){let e=a.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function B1(a){const e=a.length,n=a[0].length;if(n===void 0)return a;const s=e*n;let o=H0[s];o||(H0[s]=o=new Float32Array(s));for(let c=0;c<e;c++)o.set(a[c],c*n);return o}function I1(a,e){if(a.length!==e.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==e[n])return!1;return!0}function F1(a,e){for(let n=0,s=a.length;n<s;n++)a[n]=e[n]}let sh=0;function V0(a){sh>100||(console.warn(a),sh++,sh>100&&console.warn("More than 100 program warnings - stopping logs."))}const rh=new En;let H1=1;class G1{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:s=150,dpr:o=1,alpha:c=!1,depth:u=!0,stencil:h=!1,antialias:p=!1,premultipliedAlpha:m=!1,preserveDrawingBuffer:v=!1,powerPreference:g="default",autoClear:_=!0,webgl:y=2}={}){const E={alpha:c,depth:u,stencil:h,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:v,powerPreference:g};this.dpr=o,this.alpha=c,this.color=!0,this.depth=u,this.stencil=h,this.premultipliedAlpha=m,this.autoClear=_,this.id=H1++,y===2&&(this.gl=e.getContext("webgl2",E)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",E)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,s=0,o=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=s,this.state.viewport.y=o,this.gl.viewport(s,o,e,n))}setScissor(e,n,s=0,o=0){this.gl.scissor(s,o,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,s,o){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===o||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=o,s!==void 0?this.gl.blendFuncSeparate(e,n,s,o):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,s){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===s||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,s||0))}setStencilOp(e,n,s){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===s||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=s,this.gl.stencilOp(e,n,s))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,s){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][s].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:s,sort:o}){let c=[];if(n&&s&&n.updateFrustum(),e.traverse(u=>{if(!u.visible)return!0;u.draw&&(s&&u.frustumCulled&&n&&!n.frustumIntersectsMesh(u)||c.push(u))}),o){const u=[],h=[],p=[];c.forEach(m=>{m.program.transparent?m.program.depthTest?h.push(m):p.push(m):u.push(m),m.zDepth=0,!(m.renderOrder!==0||!m.program.depthTest||!n)&&(m.worldMatrix.getTranslation(rh),rh.applyMatrix4(n.projectionViewMatrix),m.zDepth=rh.z)}),u.sort(this.sortOpaque),h.sort(this.sortTransparent),p.sort(this.sortUI),c=u.concat(h,p)}return c}render({scene:e,camera:n,target:s=null,update:o=!0,sort:c=!0,frustumCull:u=!0,clear:h}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(h||this.autoClear&&h!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),o&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:u,sort:c}).forEach(m=>{m.draw({camera:n})})}}function V1(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a}function k1(a,e,n,s,o){return a[0]=e,a[1]=n,a[2]=s,a[3]=o,a}function X1(a,e){let n=e[0],s=e[1],o=e[2],c=e[3],u=n*n+s*s+o*o+c*c;return u>0&&(u=1/Math.sqrt(u)),a[0]=n*u,a[1]=s*u,a[2]=o*u,a[3]=c*u,a}function q1(a,e){return a[0]*e[0]+a[1]*e[1]+a[2]*e[2]+a[3]*e[3]}function W1(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function j1(a,e,n){n=n*.5;let s=Math.sin(n);return a[0]=s*e[0],a[1]=s*e[1],a[2]=s*e[2],a[3]=Math.cos(n),a}function k0(a,e,n){let s=e[0],o=e[1],c=e[2],u=e[3],h=n[0],p=n[1],m=n[2],v=n[3];return a[0]=s*v+u*h+o*m-c*p,a[1]=o*v+u*p+c*h-s*m,a[2]=c*v+u*m+s*p-o*h,a[3]=u*v-s*h-o*p-c*m,a}function Y1(a,e,n){n*=.5;let s=e[0],o=e[1],c=e[2],u=e[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p+u*h,a[1]=o*p+c*h,a[2]=c*p-o*h,a[3]=u*p-s*h,a}function Z1(a,e,n){n*=.5;let s=e[0],o=e[1],c=e[2],u=e[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p-c*h,a[1]=o*p+u*h,a[2]=c*p+s*h,a[3]=u*p-o*h,a}function K1(a,e,n){n*=.5;let s=e[0],o=e[1],c=e[2],u=e[3],h=Math.sin(n),p=Math.cos(n);return a[0]=s*p+o*h,a[1]=o*p-s*h,a[2]=c*p+u*h,a[3]=u*p-c*h,a}function Q1(a,e,n,s){let o=e[0],c=e[1],u=e[2],h=e[3],p=n[0],m=n[1],v=n[2],g=n[3],_,y,E,b,S;return y=o*p+c*m+u*v+h*g,y<0&&(y=-y,p=-p,m=-m,v=-v,g=-g),1-y>1e-6?(_=Math.acos(y),E=Math.sin(_),b=Math.sin((1-s)*_)/E,S=Math.sin(s*_)/E):(b=1-s,S=s),a[0]=b*o+S*p,a[1]=b*c+S*m,a[2]=b*u+S*v,a[3]=b*h+S*g,a}function J1(a,e){let n=e[0],s=e[1],o=e[2],c=e[3],u=n*n+s*s+o*o+c*c,h=u?1/u:0;return a[0]=-n*h,a[1]=-s*h,a[2]=-o*h,a[3]=c*h,a}function $1(a,e){return a[0]=-e[0],a[1]=-e[1],a[2]=-e[2],a[3]=e[3],a}function eS(a,e){let n=e[0]+e[4]+e[8],s;if(n>0)s=Math.sqrt(n+1),a[3]=.5*s,s=.5/s,a[0]=(e[5]-e[7])*s,a[1]=(e[6]-e[2])*s,a[2]=(e[1]-e[3])*s;else{let o=0;e[4]>e[0]&&(o=1),e[8]>e[o*3+o]&&(o=2);let c=(o+1)%3,u=(o+2)%3;s=Math.sqrt(e[o*3+o]-e[c*3+c]-e[u*3+u]+1),a[o]=.5*s,s=.5/s,a[3]=(e[c*3+u]-e[u*3+c])*s,a[c]=(e[c*3+o]+e[o*3+c])*s,a[u]=(e[u*3+o]+e[o*3+u])*s}return a}function tS(a,e,n="YXZ"){let s=Math.sin(e[0]*.5),o=Math.cos(e[0]*.5),c=Math.sin(e[1]*.5),u=Math.cos(e[1]*.5),h=Math.sin(e[2]*.5),p=Math.cos(e[2]*.5);return n==="XYZ"?(a[0]=s*u*p+o*c*h,a[1]=o*c*p-s*u*h,a[2]=o*u*h+s*c*p,a[3]=o*u*p-s*c*h):n==="YXZ"?(a[0]=s*u*p+o*c*h,a[1]=o*c*p-s*u*h,a[2]=o*u*h-s*c*p,a[3]=o*u*p+s*c*h):n==="ZXY"?(a[0]=s*u*p-o*c*h,a[1]=o*c*p+s*u*h,a[2]=o*u*h+s*c*p,a[3]=o*u*p-s*c*h):n==="ZYX"?(a[0]=s*u*p-o*c*h,a[1]=o*c*p+s*u*h,a[2]=o*u*h-s*c*p,a[3]=o*u*p+s*c*h):n==="YZX"?(a[0]=s*u*p+o*c*h,a[1]=o*c*p+s*u*h,a[2]=o*u*h-s*c*p,a[3]=o*u*p-s*c*h):n==="XZY"&&(a[0]=s*u*p-o*c*h,a[1]=o*c*p-s*u*h,a[2]=o*u*h+s*c*p,a[3]=o*u*p+s*c*h),a}const nS=V1,iS=k1,aS=q1,sS=X1;class rS extends Array{constructor(e=0,n=0,s=0,o=1){super(e,n,s,o),this.onChange=()=>{},this._target=this;const c=["0","1","2","3"];return new Proxy(this,{set(u,h){const p=Reflect.set(...arguments);return p&&c.includes(h)&&u.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return W1(this._target),this.onChange(),this}set(e,n,s,o){return e.length?this.copy(e):(iS(this._target,e,n,s,o),this.onChange(),this)}rotateX(e){return Y1(this._target,this._target,e),this.onChange(),this}rotateY(e){return Z1(this._target,this._target,e),this.onChange(),this}rotateZ(e){return K1(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return J1(this._target,e),this.onChange(),this}conjugate(e=this._target){return $1(this._target,e),this.onChange(),this}copy(e){return nS(this._target,e),this.onChange(),this}normalize(e=this._target){return sS(this._target,e),this.onChange(),this}multiply(e,n){return n?k0(this._target,e,n):k0(this._target,this._target,e),this.onChange(),this}dot(e){return aS(this._target,e)}fromMatrix3(e){return eS(this._target,e),this.onChange(),this}fromEuler(e,n){return tS(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return j1(this._target,e,n),this.onChange(),this}slerp(e,n){return Q1(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const lS=1e-6;function oS(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15],a}function cS(a,e,n,s,o,c,u,h,p,m,v,g,_,y,E,b,S){return a[0]=e,a[1]=n,a[2]=s,a[3]=o,a[4]=c,a[5]=u,a[6]=h,a[7]=p,a[8]=m,a[9]=v,a[10]=g,a[11]=_,a[12]=y,a[13]=E,a[14]=b,a[15]=S,a}function uS(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function fS(a,e){let n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=e[9],_=e[10],y=e[11],E=e[12],b=e[13],S=e[14],x=e[15],N=n*h-s*u,T=n*p-o*u,D=n*m-c*u,I=s*p-o*h,O=s*m-c*h,L=o*m-c*p,k=v*b-g*E,w=v*S-_*E,R=v*x-y*E,H=g*S-_*b,ee=g*x-y*b,$=_*x-y*S,W=N*$-T*ee+D*H+I*R-O*w+L*k;return W?(W=1/W,a[0]=(h*$-p*ee+m*H)*W,a[1]=(o*ee-s*$-c*H)*W,a[2]=(b*L-S*O+x*I)*W,a[3]=(_*O-g*L-y*I)*W,a[4]=(p*R-u*$-m*w)*W,a[5]=(n*$-o*R+c*w)*W,a[6]=(S*D-E*L-x*T)*W,a[7]=(v*L-_*D+y*T)*W,a[8]=(u*ee-h*R+m*k)*W,a[9]=(s*R-n*ee-c*k)*W,a[10]=(E*O-b*D+x*N)*W,a[11]=(g*D-v*O-y*N)*W,a[12]=(h*w-u*H-p*k)*W,a[13]=(n*H-s*w+o*k)*W,a[14]=(b*T-E*I-S*N)*W,a[15]=(v*I-g*T+_*N)*W,a):null}function d_(a){let e=a[0],n=a[1],s=a[2],o=a[3],c=a[4],u=a[5],h=a[6],p=a[7],m=a[8],v=a[9],g=a[10],_=a[11],y=a[12],E=a[13],b=a[14],S=a[15],x=e*u-n*c,N=e*h-s*c,T=e*p-o*c,D=n*h-s*u,I=n*p-o*u,O=s*p-o*h,L=m*E-v*y,k=m*b-g*y,w=m*S-_*y,R=v*b-g*E,H=v*S-_*E,ee=g*S-_*b;return x*ee-N*H+T*R+D*w-I*k+O*L}function X0(a,e,n){let s=e[0],o=e[1],c=e[2],u=e[3],h=e[4],p=e[5],m=e[6],v=e[7],g=e[8],_=e[9],y=e[10],E=e[11],b=e[12],S=e[13],x=e[14],N=e[15],T=n[0],D=n[1],I=n[2],O=n[3];return a[0]=T*s+D*h+I*g+O*b,a[1]=T*o+D*p+I*_+O*S,a[2]=T*c+D*m+I*y+O*x,a[3]=T*u+D*v+I*E+O*N,T=n[4],D=n[5],I=n[6],O=n[7],a[4]=T*s+D*h+I*g+O*b,a[5]=T*o+D*p+I*_+O*S,a[6]=T*c+D*m+I*y+O*x,a[7]=T*u+D*v+I*E+O*N,T=n[8],D=n[9],I=n[10],O=n[11],a[8]=T*s+D*h+I*g+O*b,a[9]=T*o+D*p+I*_+O*S,a[10]=T*c+D*m+I*y+O*x,a[11]=T*u+D*v+I*E+O*N,T=n[12],D=n[13],I=n[14],O=n[15],a[12]=T*s+D*h+I*g+O*b,a[13]=T*o+D*p+I*_+O*S,a[14]=T*c+D*m+I*y+O*x,a[15]=T*u+D*v+I*E+O*N,a}function hS(a,e,n){let s=n[0],o=n[1],c=n[2],u,h,p,m,v,g,_,y,E,b,S,x;return e===a?(a[12]=e[0]*s+e[4]*o+e[8]*c+e[12],a[13]=e[1]*s+e[5]*o+e[9]*c+e[13],a[14]=e[2]*s+e[6]*o+e[10]*c+e[14],a[15]=e[3]*s+e[7]*o+e[11]*c+e[15]):(u=e[0],h=e[1],p=e[2],m=e[3],v=e[4],g=e[5],_=e[6],y=e[7],E=e[8],b=e[9],S=e[10],x=e[11],a[0]=u,a[1]=h,a[2]=p,a[3]=m,a[4]=v,a[5]=g,a[6]=_,a[7]=y,a[8]=E,a[9]=b,a[10]=S,a[11]=x,a[12]=u*s+v*o+E*c+e[12],a[13]=h*s+g*o+b*c+e[13],a[14]=p*s+_*o+S*c+e[14],a[15]=m*s+y*o+x*c+e[15]),a}function dS(a,e,n){let s=n[0],o=n[1],c=n[2];return a[0]=e[0]*s,a[1]=e[1]*s,a[2]=e[2]*s,a[3]=e[3]*s,a[4]=e[4]*o,a[5]=e[5]*o,a[6]=e[6]*o,a[7]=e[7]*o,a[8]=e[8]*c,a[9]=e[9]*c,a[10]=e[10]*c,a[11]=e[11]*c,a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15],a}function pS(a,e,n,s){let o=s[0],c=s[1],u=s[2],h=Math.hypot(o,c,u),p,m,v,g,_,y,E,b,S,x,N,T,D,I,O,L,k,w,R,H,ee,$,W,J;return Math.abs(h)<lS?null:(h=1/h,o*=h,c*=h,u*=h,p=Math.sin(n),m=Math.cos(n),v=1-m,g=e[0],_=e[1],y=e[2],E=e[3],b=e[4],S=e[5],x=e[6],N=e[7],T=e[8],D=e[9],I=e[10],O=e[11],L=o*o*v+m,k=c*o*v+u*p,w=u*o*v-c*p,R=o*c*v-u*p,H=c*c*v+m,ee=u*c*v+o*p,$=o*u*v+c*p,W=c*u*v-o*p,J=u*u*v+m,a[0]=g*L+b*k+T*w,a[1]=_*L+S*k+D*w,a[2]=y*L+x*k+I*w,a[3]=E*L+N*k+O*w,a[4]=g*R+b*H+T*ee,a[5]=_*R+S*H+D*ee,a[6]=y*R+x*H+I*ee,a[7]=E*R+N*H+O*ee,a[8]=g*$+b*W+T*J,a[9]=_*$+S*W+D*J,a[10]=y*$+x*W+I*J,a[11]=E*$+N*W+O*J,e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a)}function mS(a,e){return a[0]=e[12],a[1]=e[13],a[2]=e[14],a}function p_(a,e){let n=e[0],s=e[1],o=e[2],c=e[4],u=e[5],h=e[6],p=e[8],m=e[9],v=e[10];return a[0]=Math.hypot(n,s,o),a[1]=Math.hypot(c,u,h),a[2]=Math.hypot(p,m,v),a}function gS(a){let e=a[0],n=a[1],s=a[2],o=a[4],c=a[5],u=a[6],h=a[8],p=a[9],m=a[10];const v=e*e+n*n+s*s,g=o*o+c*c+u*u,_=h*h+p*p+m*m;return Math.sqrt(Math.max(v,g,_))}const m_=(function(){const a=[1,1,1];return function(e,n){let s=a;p_(s,n);let o=1/s[0],c=1/s[1],u=1/s[2],h=n[0]*o,p=n[1]*c,m=n[2]*u,v=n[4]*o,g=n[5]*c,_=n[6]*u,y=n[8]*o,E=n[9]*c,b=n[10]*u,S=h+g+b,x=0;return S>0?(x=Math.sqrt(S+1)*2,e[3]=.25*x,e[0]=(_-E)/x,e[1]=(y-m)/x,e[2]=(p-v)/x):h>g&&h>b?(x=Math.sqrt(1+h-g-b)*2,e[3]=(_-E)/x,e[0]=.25*x,e[1]=(p+v)/x,e[2]=(y+m)/x):g>b?(x=Math.sqrt(1+g-h-b)*2,e[3]=(y-m)/x,e[0]=(p+v)/x,e[1]=.25*x,e[2]=(_+E)/x):(x=Math.sqrt(1+b-h-g)*2,e[3]=(p-v)/x,e[0]=(y+m)/x,e[1]=(_+E)/x,e[2]=.25*x),e}})();function vS(a,e,n,s){let o=Il([a[0],a[1],a[2]]);const c=Il([a[4],a[5],a[6]]),u=Il([a[8],a[9],a[10]]);d_(a)<0&&(o=-o),n[0]=a[12],n[1]=a[13],n[2]=a[14];const p=a.slice(),m=1/o,v=1/c,g=1/u;p[0]*=m,p[1]*=m,p[2]*=m,p[4]*=v,p[5]*=v,p[6]*=v,p[8]*=g,p[9]*=g,p[10]*=g,m_(e,p),s[0]=o,s[1]=c,s[2]=u}function _S(a,e,n,s){const o=a,c=e[0],u=e[1],h=e[2],p=e[3],m=c+c,v=u+u,g=h+h,_=c*m,y=c*v,E=c*g,b=u*v,S=u*g,x=h*g,N=p*m,T=p*v,D=p*g,I=s[0],O=s[1],L=s[2];return o[0]=(1-(b+x))*I,o[1]=(y+D)*I,o[2]=(E-T)*I,o[3]=0,o[4]=(y-D)*O,o[5]=(1-(_+x))*O,o[6]=(S+N)*O,o[7]=0,o[8]=(E+T)*L,o[9]=(S-N)*L,o[10]=(1-(_+b))*L,o[11]=0,o[12]=n[0],o[13]=n[1],o[14]=n[2],o[15]=1,o}function xS(a,e){let n=e[0],s=e[1],o=e[2],c=e[3],u=n+n,h=s+s,p=o+o,m=n*u,v=s*u,g=s*h,_=o*u,y=o*h,E=o*p,b=c*u,S=c*h,x=c*p;return a[0]=1-g-E,a[1]=v+x,a[2]=_-S,a[3]=0,a[4]=v-x,a[5]=1-m-E,a[6]=y+b,a[7]=0,a[8]=_+S,a[9]=y-b,a[10]=1-m-g,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function yS(a,e,n,s,o){let c=1/Math.tan(e/2),u=1/(s-o);return a[0]=c/n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(o+s)*u,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*o*s*u,a[15]=0,a}function SS(a,e,n,s,o,c,u){let h=1/(e-n),p=1/(s-o),m=1/(c-u);return a[0]=-2*h,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*m,a[11]=0,a[12]=(e+n)*h,a[13]=(o+s)*p,a[14]=(u+c)*m,a[15]=1,a}function MS(a,e,n,s){let o=e[0],c=e[1],u=e[2],h=s[0],p=s[1],m=s[2],v=o-n[0],g=c-n[1],_=u-n[2],y=v*v+g*g+_*_;y===0?_=1:(y=1/Math.sqrt(y),v*=y,g*=y,_*=y);let E=p*_-m*g,b=m*v-h*_,S=h*g-p*v;return y=E*E+b*b+S*S,y===0&&(m?h+=1e-6:p?m+=1e-6:p+=1e-6,E=p*_-m*g,b=m*v-h*_,S=h*g-p*v,y=E*E+b*b+S*S),y=1/Math.sqrt(y),E*=y,b*=y,S*=y,a[0]=E,a[1]=b,a[2]=S,a[3]=0,a[4]=g*S-_*b,a[5]=_*E-v*S,a[6]=v*b-g*E,a[7]=0,a[8]=v,a[9]=g,a[10]=_,a[11]=0,a[12]=o,a[13]=c,a[14]=u,a[15]=1,a}function q0(a,e,n){return a[0]=e[0]+n[0],a[1]=e[1]+n[1],a[2]=e[2]+n[2],a[3]=e[3]+n[3],a[4]=e[4]+n[4],a[5]=e[5]+n[5],a[6]=e[6]+n[6],a[7]=e[7]+n[7],a[8]=e[8]+n[8],a[9]=e[9]+n[9],a[10]=e[10]+n[10],a[11]=e[11]+n[11],a[12]=e[12]+n[12],a[13]=e[13]+n[13],a[14]=e[14]+n[14],a[15]=e[15]+n[15],a}function W0(a,e,n){return a[0]=e[0]-n[0],a[1]=e[1]-n[1],a[2]=e[2]-n[2],a[3]=e[3]-n[3],a[4]=e[4]-n[4],a[5]=e[5]-n[5],a[6]=e[6]-n[6],a[7]=e[7]-n[7],a[8]=e[8]-n[8],a[9]=e[9]-n[9],a[10]=e[10]-n[10],a[11]=e[11]-n[11],a[12]=e[12]-n[12],a[13]=e[13]-n[13],a[14]=e[14]-n[14],a[15]=e[15]-n[15],a}function ES(a,e,n){return a[0]=e[0]*n,a[1]=e[1]*n,a[2]=e[2]*n,a[3]=e[3]*n,a[4]=e[4]*n,a[5]=e[5]*n,a[6]=e[6]*n,a[7]=e[7]*n,a[8]=e[8]*n,a[9]=e[9]*n,a[10]=e[10]*n,a[11]=e[11]*n,a[12]=e[12]*n,a[13]=e[13]*n,a[14]=e[14]*n,a[15]=e[15]*n,a}class Oc extends Array{constructor(e=1,n=0,s=0,o=0,c=0,u=1,h=0,p=0,m=0,v=0,g=1,_=0,y=0,E=0,b=0,S=1){return super(e,n,s,o,c,u,h,p,m,v,g,_,y,E,b,S),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,s,o,c,u,h,p,m,v,g,_,y,E,b,S){return e.length?this.copy(e):(cS(this,e,n,s,o,c,u,h,p,m,v,g,_,y,E,b,S),this)}translate(e,n=this){return hS(this,n,e),this}rotate(e,n,s=this){return pS(this,s,e,n),this}scale(e,n=this){return dS(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?q0(this,e,n):q0(this,this,e),this}sub(e,n){return n?W0(this,e,n):W0(this,this,e),this}multiply(e,n){return e.length?n?X0(this,e,n):X0(this,this,e):ES(this,this,e),this}identity(){return uS(this),this}copy(e){return oS(this,e),this}fromPerspective({fov:e,aspect:n,near:s,far:o}={}){return yS(this,e,n,s,o),this}fromOrthogonal({left:e,right:n,bottom:s,top:o,near:c,far:u}){return SS(this,e,n,s,o,c,u),this}fromQuaternion(e){return xS(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return fS(this,e),this}compose(e,n,s){return _S(this,e,n,s),this}decompose(e,n,s){return vS(this,e,n,s),this}getRotation(e){return m_(e,this),this}getTranslation(e){return mS(e,this),this}getScaling(e){return p_(e,this),this}getMaxScaleOnAxis(){return gS(this)}lookAt(e,n,s){return MS(this,e,n,s),this}determinant(){return d_(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function bS(a,e,n="YXZ"){return n==="XYZ"?(a[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(a[0]=Math.atan2(-e[9],e[10]),a[2]=Math.atan2(-e[4],e[0])):(a[0]=Math.atan2(e[6],e[5]),a[2]=0)):n==="YXZ"?(a[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(a[1]=Math.atan2(e[8],e[10]),a[2]=Math.atan2(e[1],e[5])):(a[1]=Math.atan2(-e[2],e[0]),a[2]=0)):n==="ZXY"?(a[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(a[1]=Math.atan2(-e[2],e[10]),a[2]=Math.atan2(-e[4],e[5])):(a[1]=0,a[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(a[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(a[0]=Math.atan2(e[6],e[10]),a[2]=Math.atan2(e[1],e[0])):(a[0]=0,a[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(a[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(a[0]=Math.atan2(-e[9],e[5]),a[1]=Math.atan2(-e[2],e[0])):(a[0]=0,a[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(a[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(a[0]=Math.atan2(e[6],e[5]),a[1]=Math.atan2(e[8],e[0])):(a[0]=Math.atan2(-e[9],e[10]),a[1]=0)),a}const j0=new Oc;let TS=class extends Array{constructor(e=0,n=e,s=e,o="YXZ"){super(e,n,s),this.order=o,this.onChange=()=>{},this._target=this;const c=["0","1","2"];return new Proxy(this,{set(u,h){const p=Reflect.set(...arguments);return p&&c.includes(h)&&u.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,s=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=s,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return bS(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,s){return j0.fromQuaternion(e),this._target.fromRotationMatrix(j0,n),s||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};class g_{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Oc,this.worldMatrix=new Oc,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new En,this.quaternion=new rS,this.scale=new En(1),this.rotation=new TS,this.up=new En(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,s=this.children.length;n<s;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,s=this.children.length;n<s;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function AS(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[4],a[4]=e[5],a[5]=e[6],a[6]=e[8],a[7]=e[9],a[8]=e[10],a}function RS(a,e){let n=e[0],s=e[1],o=e[2],c=e[3],u=n+n,h=s+s,p=o+o,m=n*u,v=s*u,g=s*h,_=o*u,y=o*h,E=o*p,b=c*u,S=c*h,x=c*p;return a[0]=1-g-E,a[3]=v-x,a[6]=_+S,a[1]=v+x,a[4]=1-m-E,a[7]=y-b,a[2]=_-S,a[5]=y+b,a[8]=1-m-g,a}function CS(a,e){return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a}function wS(a,e,n,s,o,c,u,h,p,m){return a[0]=e,a[1]=n,a[2]=s,a[3]=o,a[4]=c,a[5]=u,a[6]=h,a[7]=p,a[8]=m,a}function DS(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a}function US(a,e){let n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=v*u-h*m,_=-v*c+h*p,y=m*c-u*p,E=n*g+s*_+o*y;return E?(E=1/E,a[0]=g*E,a[1]=(-v*s+o*m)*E,a[2]=(h*s-o*u)*E,a[3]=_*E,a[4]=(v*n-o*p)*E,a[5]=(-h*n+o*c)*E,a[6]=y*E,a[7]=(-m*n+s*p)*E,a[8]=(u*n-s*c)*E,a):null}function Y0(a,e,n){let s=e[0],o=e[1],c=e[2],u=e[3],h=e[4],p=e[5],m=e[6],v=e[7],g=e[8],_=n[0],y=n[1],E=n[2],b=n[3],S=n[4],x=n[5],N=n[6],T=n[7],D=n[8];return a[0]=_*s+y*u+E*m,a[1]=_*o+y*h+E*v,a[2]=_*c+y*p+E*g,a[3]=b*s+S*u+x*m,a[4]=b*o+S*h+x*v,a[5]=b*c+S*p+x*g,a[6]=N*s+T*u+D*m,a[7]=N*o+T*h+D*v,a[8]=N*c+T*p+D*g,a}function NS(a,e,n){let s=e[0],o=e[1],c=e[2],u=e[3],h=e[4],p=e[5],m=e[6],v=e[7],g=e[8],_=n[0],y=n[1];return a[0]=s,a[1]=o,a[2]=c,a[3]=u,a[4]=h,a[5]=p,a[6]=_*s+y*u+m,a[7]=_*o+y*h+v,a[8]=_*c+y*p+g,a}function LS(a,e,n){let s=e[0],o=e[1],c=e[2],u=e[3],h=e[4],p=e[5],m=e[6],v=e[7],g=e[8],_=Math.sin(n),y=Math.cos(n);return a[0]=y*s+_*u,a[1]=y*o+_*h,a[2]=y*c+_*p,a[3]=y*u-_*s,a[4]=y*h-_*o,a[5]=y*p-_*c,a[6]=m,a[7]=v,a[8]=g,a}function OS(a,e,n){let s=n[0],o=n[1];return a[0]=s*e[0],a[1]=s*e[1],a[2]=s*e[2],a[3]=o*e[3],a[4]=o*e[4],a[5]=o*e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a}function PS(a,e){let n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=e[9],_=e[10],y=e[11],E=e[12],b=e[13],S=e[14],x=e[15],N=n*h-s*u,T=n*p-o*u,D=n*m-c*u,I=s*p-o*h,O=s*m-c*h,L=o*m-c*p,k=v*b-g*E,w=v*S-_*E,R=v*x-y*E,H=g*S-_*b,ee=g*x-y*b,$=_*x-y*S,W=N*$-T*ee+D*H+I*R-O*w+L*k;return W?(W=1/W,a[0]=(h*$-p*ee+m*H)*W,a[1]=(p*R-u*$-m*w)*W,a[2]=(u*ee-h*R+m*k)*W,a[3]=(o*ee-s*$-c*H)*W,a[4]=(n*$-o*R+c*w)*W,a[5]=(s*R-n*ee-c*k)*W,a[6]=(b*L-S*O+x*I)*W,a[7]=(S*D-E*L-x*T)*W,a[8]=(E*O-b*D+x*N)*W,a):null}class zS extends Array{constructor(e=1,n=0,s=0,o=0,c=1,u=0,h=0,p=0,m=1){return super(e,n,s,o,c,u,h,p,m),this}set(e,n,s,o,c,u,h,p,m){return e.length?this.copy(e):(wS(this,e,n,s,o,c,u,h,p,m),this)}translate(e,n=this){return NS(this,n,e),this}rotate(e,n=this){return LS(this,n,e),this}scale(e,n=this){return OS(this,n,e),this}multiply(e,n){return n?Y0(this,e,n):Y0(this,this,e),this}identity(){return DS(this),this}copy(e){return CS(this,e),this}fromMatrix4(e){return AS(this,e),this}fromQuaternion(e){return RS(this,e),this}fromBasis(e,n,s){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],s[0],s[1],s[2]),this}inverse(e=this){return US(this,e),this}getNormalMatrix(e){return PS(this,e),this}}let BS=0,IS=class extends g_{constructor(e,{geometry:n,program:s,mode:o=e.TRIANGLES,frustumCulled:c=!0,renderOrder:u=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=BS++,this.geometry=n,this.program=s,this.mode=o,this.frustumCulled=c,this.renderOrder=u,this.modelViewMatrix=new Oc,this.normalMatrix=new zS,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}))}};const Z0={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function K0(a){a.length===4&&(a=a[0]+a[1]+a[1]+a[2]+a[2]+a[3]+a[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return e||console.warn(`Unable to convert hex string ${a} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function FS(a){return a=parseInt(a),[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}function Q0(a){return a===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(a)?a[0]==="#"?K0(a):Z0[a.toLowerCase()]?K0(Z0[a.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):FS(a)}let v_=class extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...Q0(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(Q0(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}};function HS(a,e){return a[0]=e[0],a[1]=e[1],a}function GS(a,e,n){return a[0]=e,a[1]=n,a}function J0(a,e,n){return a[0]=e[0]+n[0],a[1]=e[1]+n[1],a}function $0(a,e,n){return a[0]=e[0]-n[0],a[1]=e[1]-n[1],a}function VS(a,e,n){return a[0]=e[0]*n[0],a[1]=e[1]*n[1],a}function kS(a,e,n){return a[0]=e[0]/n[0],a[1]=e[1]/n[1],a}function lh(a,e,n){return a[0]=e[0]*n,a[1]=e[1]*n,a}function XS(a,e){var n=e[0]-a[0],s=e[1]-a[1];return Math.sqrt(n*n+s*s)}function qS(a,e){var n=e[0]-a[0],s=e[1]-a[1];return n*n+s*s}function ev(a){var e=a[0],n=a[1];return Math.sqrt(e*e+n*n)}function WS(a){var e=a[0],n=a[1];return e*e+n*n}function jS(a,e){return a[0]=-e[0],a[1]=-e[1],a}function YS(a,e){return a[0]=1/e[0],a[1]=1/e[1],a}function ZS(a,e){var n=e[0],s=e[1],o=n*n+s*s;return o>0&&(o=1/Math.sqrt(o)),a[0]=e[0]*o,a[1]=e[1]*o,a}function KS(a,e){return a[0]*e[0]+a[1]*e[1]}function tv(a,e){return a[0]*e[1]-a[1]*e[0]}function QS(a,e,n,s){var o=e[0],c=e[1];return a[0]=o+s*(n[0]-o),a[1]=c+s*(n[1]-c),a}function JS(a,e,n,s,o){const c=Math.exp(-s*o);let u=e[0],h=e[1];return a[0]=n[0]+(u-n[0])*c,a[1]=n[1]+(h-n[1])*c,a}function $S(a,e,n){var s=e[0],o=e[1];return a[0]=n[0]*s+n[3]*o+n[6],a[1]=n[1]*s+n[4]*o+n[7],a}function eM(a,e,n){let s=e[0],o=e[1];return a[0]=n[0]*s+n[4]*o+n[12],a[1]=n[1]*s+n[5]*o+n[13],a}function tM(a,e){return a[0]===e[0]&&a[1]===e[1]}class wd extends Array{constructor(e=0,n=e){return super(e,n),this}get x(){return this[0]}get y(){return this[1]}set x(e){this[0]=e}set y(e){this[1]=e}set(e,n=e){return e.length?this.copy(e):(GS(this,e,n),this)}copy(e){return HS(this,e),this}add(e,n){return n?J0(this,e,n):J0(this,this,e),this}sub(e,n){return n?$0(this,e,n):$0(this,this,e),this}multiply(e){return e.length?VS(this,this,e):lh(this,this,e),this}divide(e){return e.length?kS(this,this,e):lh(this,this,1/e),this}inverse(e=this){return YS(this,e),this}len(){return ev(this)}distance(e){return e?XS(this,e):ev(this)}squaredLen(){return this.squaredDistance()}squaredDistance(e){return e?qS(this,e):WS(this)}negate(e=this){return jS(this,e),this}cross(e,n){return n?tv(e,n):tv(this,e)}scale(e){return lh(this,this,e),this}normalize(){return ZS(this,this),this}dot(e){return KS(this,e)}equals(e){return tM(this,e)}applyMatrix3(e){return $S(this,this,e),this}applyMatrix4(e){return eM(this,this,e),this}lerp(e,n){return QS(this,this,e,n),this}smoothLerp(e,n,s){return JS(this,this,e,n,s),this}clone(){return new wd(this[0],this[1])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e}}const cr=new En;class nM{constructor(e,{points:n,vertex:s=iM,fragment:o=aM,uniforms:c={},attributes:u={}}){this.gl=e,this.points=n,this.count=n.length,this.position=new Float32Array(this.count*3*2),this.prev=new Float32Array(this.count*3*2),this.next=new Float32Array(this.count*3*2);const h=new Float32Array(this.count*1*2),p=new Float32Array(this.count*2*2),m=new Uint16Array((this.count-1)*3*2);for(let _=0;_<this.count;_++){h.set([-1,1],_*2);const y=_/(this.count-1);if(p.set([0,y,1,y],_*4),_===this.count-1)continue;const E=_*2;m.set([E+0,E+1,E+2],(E+0)*3),m.set([E+2,E+1,E+3],(E+1)*3)}const v=this.geometry=new O1(e,Object.assign(u,{position:{size:3,data:this.position},prev:{size:3,data:this.prev},next:{size:3,data:this.next},side:{size:1,data:h},uv:{size:2,data:p},index:{size:1,data:m}}));this.updateGeometry(),c.uResolution||(this.resolution=c.uResolution={value:new wd}),c.uDPR||(this.dpr=c.uDPR={value:1}),c.uThickness||(this.thickness=c.uThickness={value:1}),c.uColor||(this.color=c.uColor={value:new v_("#000")}),c.uMiter||(this.miter=c.uMiter={value:1}),this.resize();const g=this.program=new z1(e,{vertex:s,fragment:o,uniforms:c});this.mesh=new IS(e,{geometry:v,program:g})}updateGeometry(){this.points.forEach((e,n)=>{e.toArray(this.position,n*3*2),e.toArray(this.position,n*3*2+3),n?(e.toArray(this.next,(n-1)*3*2),e.toArray(this.next,(n-1)*3*2+3)):(cr.copy(e).sub(this.points[n+1]).add(e),cr.toArray(this.prev,n*3*2),cr.toArray(this.prev,n*3*2+3)),n===this.points.length-1?(cr.copy(e).sub(this.points[n-1]).add(e),cr.toArray(this.next,n*3*2),cr.toArray(this.next,n*3*2+3)):(e.toArray(this.prev,(n+1)*3*2),e.toArray(this.prev,(n+1)*3*2+3))}),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.prev.needsUpdate=!0,this.geometry.attributes.next.needsUpdate=!0}resize(){this.resolution&&this.resolution.value.set(this.gl.canvas.width,this.gl.canvas.height),this.dpr&&(this.dpr.value=this.gl.renderer.dpr)}}const iM=`
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`,aM=`
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`,sM=({colors:a=["#FC8EAC"],baseSpring:e=.03,baseFriction:n=.9,baseThickness:s=30,offsetFactor:o=.05,maxAge:c=500,pointCount:u=50,speedMultiplier:h=.6,enableFade:p=!1,enableShaderEffect:m=!1,effectAmplitude:v=2,backgroundColor:g=[0,0,0,0]})=>{const _=ft.useRef(null);return ft.useEffect(()=>{const y=_.current;if(!y)return;const E=new G1({dpr:window.devicePixelRatio||2,alpha:!0}),b=E.gl;Array.isArray(g)&&g.length===4?b.clearColor(g[0],g[1],g[2],g[3]):b.clearColor(0,0,0,0),b.canvas.style.position="absolute",b.canvas.style.top="0",b.canvas.style.left="0",b.canvas.style.width="100%",b.canvas.style.height="100%",y.appendChild(b.canvas);const S=new g_,x=[],N=`
      precision highp float;
      
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;
      
      varying vec2 vUV;
      
      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          if(uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
          }
          return current;
      }
      
      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `,T=`
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0;
          if(uEnableFade > 0.5) {
              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
          }
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `;function D(){const ee=y.clientWidth,$=y.clientHeight;E.setSize(ee,$),x.forEach(W=>W.polyline.resize())}window.addEventListener("resize",D);const I=(a.length-1)/2;a.forEach((ee,$)=>{const W=e+(Math.random()-.5)*.05,J=n+(Math.random()-.5)*.05,P=s+(Math.random()-.5)*3,X=new En(($-I)*o+(Math.random()-.5)*.01,(Math.random()-.5)*.1,0),Y={spring:W,friction:J,mouseVelocity:new En,mouseOffset:X},_e=u,Me=[];for(let B=0;B<_e;B++)Me.push(new En);Y.points=Me,Y.polyline=new nM(b,{points:Me,vertex:N,fragment:T,uniforms:{uColor:{value:new v_(ee)},uThickness:{value:P},uOpacity:{value:1},uTime:{value:0},uEnableShaderEffect:{value:m?1:0},uEffectAmplitude:{value:v},uEnableFade:{value:p?1:0}}}),Y.polyline.mesh.setParent(S),x.push(Y)}),D();const O=new En;function L(ee){let $,W;const J=y.getBoundingClientRect();ee.changedTouches&&ee.changedTouches.length?($=ee.changedTouches[0].clientX-J.left,W=ee.changedTouches[0].clientY-J.top):($=ee.clientX-J.left,W=ee.clientY-J.top);const P=y.clientWidth,X=y.clientHeight;O.set($/P*2-1,W/X*-2+1,0)}y.addEventListener("mousemove",L),y.addEventListener("touchstart",L),y.addEventListener("touchmove",L);const k=new En;let w,R=performance.now();function H(){w=requestAnimationFrame(H);const ee=performance.now(),$=ee-R;R=ee,x.forEach(W=>{k.copy(O).add(W.mouseOffset).sub(W.points[0]).multiply(W.spring),W.mouseVelocity.add(k).multiply(W.friction),W.points[0].add(W.mouseVelocity);for(let J=1;J<W.points.length;J++)if(isFinite(c)&&c>0){const P=c/(W.points.length-1),X=Math.min(1,$*h/P);W.points[J].lerp(W.points[J-1],X)}else W.points[J].lerp(W.points[J-1],.9);W.polyline.mesh.program.uniforms.uTime&&(W.polyline.mesh.program.uniforms.uTime.value=ee*.001),W.polyline.updateGeometry()}),E.render({scene:S})}return H(),()=>{window.removeEventListener("resize",D),y.removeEventListener("mousemove",L),y.removeEventListener("touchstart",L),y.removeEventListener("touchmove",L),cancelAnimationFrame(w),b.canvas&&b.canvas.parentNode===y&&y.removeChild(b.canvas)}},[a,e,n,s,o,c,u,h,p,m,v,g]),z.jsx("div",{ref:_,className:"ribbons-container"})};const rM=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lM=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),nv=a=>{const e=lM(a);return e.charAt(0).toUpperCase()+e.slice(1)},__=(...a)=>a.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),oM=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var cM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const uM=ft.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...h},p)=>ft.createElement("svg",{ref:p,...cM,width:e,height:e,stroke:a,strokeWidth:s?Number(n)*24/Number(e):n,className:__("lucide",o),...!c&&!oM(h)&&{"aria-hidden":"true"},...h},[...u.map(([m,v])=>ft.createElement(m,v)),...Array.isArray(c)?c:[c]]));const vi=(a,e)=>{const n=ft.forwardRef(({className:s,...o},c)=>ft.createElement(uM,{ref:c,iconNode:e,className:__(`lucide-${rM(nv(a))}`,`lucide-${a}`,s),...o}));return n.displayName=nv(a),n};const fM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],hM=vi("book-open",fM);const dM=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],iv=vi("chevron-right",dM);const pM=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],oh=vi("circle-check-big",pM);const mM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],av=vi("circle-x",mM);const gM=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],vM=vi("code",gM);const _M=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],sv=vi("file-text",_M);const xM=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],yM=vi("menu",xM);const SM=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],ch=vi("scale",SM);const MM=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],EM=vi("search",MM);const bM=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],uh=vi("shield",bM);const TM=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],rv=vi("users",TM);const AM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],RM=vi("x",AM),fh=(a,e)=>{let n=a.startsWith("#")?a.slice(1):a;n.length===3&&(n=n.split("").map(h=>h+h).join(""));const s=parseInt(n,16);let o=s>>16&255,c=s>>8&255,u=s&255;return o=Math.max(0,Math.min(255,Math.floor(o*(1-e)))),c=Math.max(0,Math.min(255,Math.floor(c*(1-e)))),u=Math.max(0,Math.min(255,Math.floor(u*(1-e)))),"#"+((1<<24)+(o<<16)+(c<<8)+u).toString(16).slice(1).toUpperCase()},CM=({color:a="#5227FF",size:e=1,items:n=[],className:s="",onToggle:o})=>{const u=n.slice(0,3);for(;u.length<3;)u.push(null);const[h,p]=ft.useState(!1),[m,v]=ft.useState(Array.from({length:3},()=>({x:0,y:0}))),g=fh(a,.08),_=fh("#ffffff",.1),y=fh("#ffffff",.05),E="#ffffff",b=()=>{const I=!h;p(I),I||v(Array.from({length:3},()=>({x:0,y:0}))),o&&o(I)},S=(I,O)=>{if(!h)return;const L=I.currentTarget.getBoundingClientRect(),k=L.left+L.width/2,w=L.top+L.height/2,R=(I.clientX-k)*.15,H=(I.clientY-w)*.15;v(ee=>{const $=[...ee];return $[O]={x:R,y:H},$})},x=(I,O)=>{v(L=>{const k=[...L];return k[O]={x:0,y:0},k})},N={"--folder-color":a,"--folder-back-color":g,"--paper-1":_,"--paper-2":y,"--paper-3":E},T=`folder ${h?"open":""}`.trim(),D={transform:`scale(${e})`};return z.jsx("div",{style:D,className:s,children:z.jsx("div",{className:T,style:N,onClick:b,children:z.jsxs("div",{className:"folder__back",children:[u.map((I,O)=>z.jsx("div",{className:`paper paper-${O+1}`,onMouseMove:L=>S(L,O),onMouseLeave:L=>x(L,O),style:h?{"--magnet-x":`${m[O]?.x||0}px`,"--magnet-y":`${m[O]?.y||0}px`}:{},children:I},O)),z.jsx("div",{className:"folder__front"}),z.jsx("div",{className:"folder__front right"})]})})})};const Gc="167",wM=0,lv=1,DM=2,x_=1,UM=2,la=3,ua=0,_n=1,ti=2,Bi=0,Cr=1,ov=2,cv=3,uv=4,NM=5,ys=100,LM=101,OM=102,PM=103,zM=104,BM=200,IM=201,FM=202,HM=203,qh=204,Wh=205,GM=206,VM=207,kM=208,XM=209,qM=210,WM=211,jM=212,YM=213,ZM=214,KM=0,y_=1,QM=2,Pc=3,JM=4,$M=5,eE=6,tE=7,S_=0,nE=1,iE=2,Xa=0,aE=1,sE=2,rE=3,lE=4,oE=5,cE=6,uE=7,M_=300,Ur=301,Nr=302,jh=303,Yh=304,Vc=306,Zh=1e3,Ms=1001,Kh=1002,pi=1003,fE=1004,sc=1005,bn=1006,hh=1007,Es=1008,ii=1009,E_=1010,b_=1011,Hl=1012,Dd=1013,qa=1014,oa=1015,Gl=1016,Ud=1017,Nd=1018,As=1020,T_=35902,A_=1021,R_=1022,Ai=1023,C_=1024,w_=1025,wr=1026,Rs=1027,D_=1028,Ld=1029,U_=1030,Od=1031,Pd=1033,Cc=33776,wc=33777,Dc=33778,Uc=33779,Qh=35840,Jh=35841,$h=35842,ed=35843,td=36196,nd=37492,id=37496,ad=37808,sd=37809,rd=37810,ld=37811,od=37812,cd=37813,ud=37814,fd=37815,hd=37816,dd=37817,pd=37818,md=37819,gd=37820,vd=37821,Nc=36492,_d=36494,xd=36495,N_=36283,yd=36284,Sd=36285,Md=36286,Vl=3200,hE=3201,dE=0,pE=1,Pi="",fn="srgb",Ii="srgb-linear",zd="display-p3",kc="display-p3-linear",zc="linear",Xt="srgb",Bc="rec709",Ic="p3",ur=7680,fv=519,mE=512,gE=513,vE=514,L_=515,_E=516,xE=517,yE=518,SE=519,hv=35044,Ed="300 es",ca=2e3,Fc=2001;class Wa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,bd=180/Math.PI;function kl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Xn(a,e,n){return Math.max(e,Math.min(n,a))}function ME(a,e){return(a%e+e)%e}function ph(a,e,n){return(1-n)*a+n*e}function Ul(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function kn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,o=e.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Xn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*s-u*o+e.x,this.y=c*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,s,o,c,u,h,p,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,o,c,u,h,p,m)}set(e,n,s,o,c,u,h,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=n,v[4]=c,v[5]=p,v[6]=s,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,c=this.elements,u=s[0],h=s[3],p=s[6],m=s[1],v=s[4],g=s[7],_=s[2],y=s[5],E=s[8],b=o[0],S=o[3],x=o[6],N=o[1],T=o[4],D=o[7],I=o[2],O=o[5],L=o[8];return c[0]=u*b+h*N+p*I,c[3]=u*S+h*T+p*O,c[6]=u*x+h*D+p*L,c[1]=m*b+v*N+g*I,c[4]=m*S+v*T+g*O,c[7]=m*x+v*D+g*L,c[2]=_*b+y*N+E*I,c[5]=_*S+y*T+E*O,c[8]=_*x+y*D+E*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*h*m-s*c*v+s*h*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=v*u-h*m,_=h*p-v*c,y=m*c-u*p,E=n*g+s*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=g*b,e[1]=(o*m-v*s)*b,e[2]=(h*s-o*u)*b,e[3]=_*b,e[4]=(v*n-o*p)*b,e[5]=(o*c-h*n)*b,e[6]=y*b,e[7]=(s*p-m*n)*b,e[8]=(u*n-s*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,o,c,u,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*u+m*h)+u+e,-o*m,o*p,-o*(-m*u+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(mh.makeScale(e,n)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,n){return this.premultiply(mh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new ct;function O_(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Hc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function EE(){const a=Hc("canvas");return a.style.display="block",a}const dv={};function Fl(a){a in dv||(dv[a]=!0,console.warn(a))}function bE(a,e,n){return new Promise(function(s,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const pv=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mv=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nl={[Ii]:{transfer:zc,primaries:Bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[fn]:{transfer:Xt,primaries:Bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[kc]:{transfer:zc,primaries:Ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(mv),fromReference:a=>a.applyMatrix3(pv)},[zd]:{transfer:Xt,primaries:Ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(mv),fromReference:a=>a.applyMatrix3(pv).convertLinearToSRGB()}},TE=new Set([Ii,kc]),Dt={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!TE.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,n){if(this.enabled===!1||e===n||!e||!n)return a;const s=Nl[e].toReference,o=Nl[n].fromReference;return o(s(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Nl[a].primaries},getTransfer:function(a){return a===Pi?zc:Nl[a].transfer},getLuminanceCoefficients:function(a,e=this._workingColorSpace){return a.fromArray(Nl[e].luminanceCoefficients)}};function Dr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function gh(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let fr;class AE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Hc("canvas")),fr.width=e.width,fr.height=e.height;const s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Dr(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Dr(n[s]/255)*255):n[s]=Dr(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RE=0;class P_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=kl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(vh(o[u].image)):c.push(vh(o[u]))}else c=vh(o);s.url=c}return n||(e.images[this.uuid]=s),s}}function vh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?AE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CE=0;class Tn extends Wa{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,s=Ms,o=Ms,c=bn,u=Es,h=Ai,p=ii,m=Tn.DEFAULT_ANISOTROPY,v=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=kl(),this.name="",this.source=new P_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=M_;Tn.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,n=0,s=0,o=1){vn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,o){return this.x=e,this.y=n,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,o,c;const p=e.elements,m=p[0],v=p[4],g=p[8],_=p[1],y=p[5],E=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+b)<.1&&Math.abs(E+S)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(m+1)/2,D=(y+1)/2,I=(x+1)/2,O=(v+_)/4,L=(g+b)/4,k=(E+S)/4;return T>D&&T>I?T<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(T),o=O/s,c=L/s):D>I?D<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),s=O/o,c=k/o):I<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),s=L/c,o=k/c),this.set(s,o,c,n),this}let N=Math.sqrt((S-E)*(S-E)+(g-b)*(g-b)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(g-b)/N,this.z=(_-v)/N,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wE extends Wa{constructor(e=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new vn(0,0,e,n),this.scissorTest=!1,this.viewport=new vn(0,0,e,n);const o={width:e,height:n,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Tn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new P_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends wE{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class z_ extends Tn{constructor(e=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DE extends Tn{constructor(e=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xl{constructor(e=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=o}static slerpFlat(e,n,s,o,c,u,h){let p=s[o+0],m=s[o+1],v=s[o+2],g=s[o+3];const _=c[u+0],y=c[u+1],E=c[u+2],b=c[u+3];if(h===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(h===1){e[n+0]=_,e[n+1]=y,e[n+2]=E,e[n+3]=b;return}if(g!==b||p!==_||m!==y||v!==E){let S=1-h;const x=p*_+m*y+v*E+g*b,N=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const I=Math.sqrt(T),O=Math.atan2(I,x*N);S=Math.sin(S*O)/I,h=Math.sin(h*O)/I}const D=h*N;if(p=p*S+_*D,m=m*S+y*D,v=v*S+E*D,g=g*S+b*D,S===1-h){const I=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=I,m*=I,v*=I,g*=I}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,s,o,c,u){const h=s[o],p=s[o+1],m=s[o+2],v=s[o+3],g=c[u],_=c[u+1],y=c[u+2],E=c[u+3];return e[n]=h*E+v*g+p*y-m*_,e[n+1]=p*E+v*_+m*g-h*y,e[n+2]=m*E+v*y+h*_-p*g,e[n+3]=v*E-h*g-p*_-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,o){return this._x=e,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,m=h(s/2),v=h(o/2),g=h(c/2),_=p(s/2),y=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=_*v*g+m*y*E,this._y=m*y*g-_*v*E,this._z=m*v*E+_*y*g,this._w=m*v*g-_*y*E;break;case"YXZ":this._x=_*v*g+m*y*E,this._y=m*y*g-_*v*E,this._z=m*v*E-_*y*g,this._w=m*v*g+_*y*E;break;case"ZXY":this._x=_*v*g-m*y*E,this._y=m*y*g+_*v*E,this._z=m*v*E+_*y*g,this._w=m*v*g-_*y*E;break;case"ZYX":this._x=_*v*g-m*y*E,this._y=m*y*g+_*v*E,this._z=m*v*E-_*y*g,this._w=m*v*g+_*y*E;break;case"YZX":this._x=_*v*g+m*y*E,this._y=m*y*g+_*v*E,this._z=m*v*E-_*y*g,this._w=m*v*g-_*y*E;break;case"XZY":this._x=_*v*g-m*y*E,this._y=m*y*g-_*v*E,this._z=m*v*E+_*y*g,this._w=m*v*g+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],m=n[2],v=n[6],g=n[10],_=s+h+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-p)*y,this._y=(c-m)*y,this._z=(u-o)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(v-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+m)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(c-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(u-o)/y,this._x=(c+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xn(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,o=e._y,c=e._z,u=e._w,h=n._x,p=n._y,m=n._z,v=n._w;return this._x=s*v+u*h+o*m-c*p,this._y=o*v+u*p+c*h-s*m,this._z=c*v+u*m+s*p-o*h,this._w=u*v-s*h-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,o=this._y,c=this._z,u=this._w;let h=u*e._w+s*e._x+o*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=s,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*s+n*this._x,this._y=y*o+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),g=Math.sin((1-n)*v)/m,_=Math.sin(n*v)/m;return this._w=u*g+this._w*_,this._x=s*g+this._x*_,this._y=o*g+this._y*_,this._z=c*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,n=0,s=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,o=this.z,c=e.x,u=e.y,h=e.z,p=e.w,m=2*(u*o-h*s),v=2*(h*n-c*o),g=2*(c*s-u*n);return this.x=n+p*m+u*g-h*v,this.y=s+p*v+h*m-c*g,this.z=o+p*g+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,o=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-s*p,this.z=s*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Xn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return n*n+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const o=Math.sin(n)*e;return this.x=o*Math.sin(s),this.y=Math.cos(n)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new ue,gv=new Xl;class ql{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(c,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ll),lc.subVectors(this.max,Ll),hr.subVectors(e.a,Ll),dr.subVectors(e.b,Ll),pr.subVectors(e.c,Ll),Ia.subVectors(dr,hr),Fa.subVectors(pr,dr),hs.subVectors(hr,pr);let n=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-hs.z,hs.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,hs.z,0,-hs.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-hs.y,hs.x,0];return!xh(n,hr,dr,pr,lc)||(n=[1,0,0,0,1,0,0,0,1],!xh(n,hr,dr,pr,lc))?!1:(oc.crossVectors(Ia,Fa),n=[oc.x,oc.y,oc.z],xh(n,hr,dr,pr,lc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const na=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Ei=new ue,rc=new ql,hr=new ue,dr=new ue,pr=new ue,Ia=new ue,Fa=new ue,hs=new ue,Ll=new ue,lc=new ue,oc=new ue,ds=new ue;function xh(a,e,n,s,o){for(let c=0,u=a.length-3;c<=u;c+=3){ds.fromArray(a,c);const h=o.x*Math.abs(ds.x)+o.y*Math.abs(ds.y)+o.z*Math.abs(ds.z),p=e.dot(ds),m=n.dot(ds),v=s.dot(ds);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const UE=new ql,Ol=new ue,yh=new ue;class Bd{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):UE.setFromPoints(e).getCenter(s);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ol.subVectors(e,this.center);const n=Ol.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Ol,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ol.copy(e.center).add(yh)),this.expandByPoint(Ol.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ia=new ue,Sh=new ue,cc=new ue,Ha=new ue,Mh=new ue,uc=new ue,Eh=new ue;class NE{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ia)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ia.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ia.copy(this.origin).addScaledVector(this.direction,n),ia.distanceToSquared(e))}distanceSqToSegment(e,n,s,o){Sh.copy(e).add(n).multiplyScalar(.5),cc.copy(n).sub(e).normalize(),Ha.copy(this.origin).sub(Sh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(cc),h=Ha.dot(this.direction),p=-Ha.dot(cc),m=Ha.lengthSq(),v=Math.abs(1-u*u);let g,_,y,E;if(v>0)if(g=u*p-h,_=u*h-p,E=c*v,g>=0)if(_>=-E)if(_<=E){const b=1/v;g*=b,_*=b,y=g*(g+u*_+2*h)+_*(u*g+_+2*p)+m}else _=c,g=Math.max(0,-(u*_+h)),y=-g*g+_*(_+2*p)+m;else _=-c,g=Math.max(0,-(u*_+h)),y=-g*g+_*(_+2*p)+m;else _<=-E?(g=Math.max(0,-(-u*c+h)),_=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+m):_<=E?(g=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+m):(g=Math.max(0,-(u*c+h)),_=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+m);else _=u>0?-c:c,g=Math.max(0,-(u*_+h)),y=-g*g+_*(_+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Sh).addScaledVector(cc,_),y}intersectSphere(e,n){ia.subVectors(e.center,this.origin);const s=ia.dot(this.direction),o=ia.dot(ia)-s*s,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=s-u,p=s+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,o,c,u,h,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(c=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),g>=0?(h=(e.min.z-_.z)*g,p=(e.max.z-_.z)*g):(h=(e.max.z-_.z)*g,p=(e.min.z-_.z)*g),s>p||h>o)||((h>s||s!==s)&&(s=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(e){return this.intersectBox(e,ia)!==null}intersectTriangle(e,n,s,o,c){Mh.subVectors(n,e),uc.subVectors(s,e),Eh.crossVectors(Mh,uc);let u=this.direction.dot(Eh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ha.subVectors(this.origin,e);const p=h*this.direction.dot(uc.crossVectors(Ha,uc));if(p<0)return null;const m=h*this.direction.dot(Mh.cross(Ha));if(m<0||p+m>u)return null;const v=-h*Ha.dot(Eh);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,n,s,o,c,u,h,p,m,v,g,_,y,E,b,S){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,o,c,u,h,p,m,v,g,_,y,E,b,S)}set(e,n,s,o,c,u,h,p,m,v,g,_,y,E,b,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=s,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=p,x[2]=m,x[6]=v,x[10]=g,x[14]=_,x[3]=y,x[7]=E,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,o=1/mr.setFromMatrixColumn(e,0).length(),c=1/mr.setFromMatrixColumn(e,1).length(),u=1/mr.setFromMatrixColumn(e,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,o=e.y,c=e.z,u=Math.cos(s),h=Math.sin(s),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=u*v,y=u*g,E=h*v,b=h*g;n[0]=p*v,n[4]=-p*g,n[8]=m,n[1]=y+E*m,n[5]=_-b*m,n[9]=-h*p,n[2]=b-_*m,n[6]=E+y*m,n[10]=u*p}else if(e.order==="YXZ"){const _=p*v,y=p*g,E=m*v,b=m*g;n[0]=_+b*h,n[4]=E*h-y,n[8]=u*m,n[1]=u*g,n[5]=u*v,n[9]=-h,n[2]=y*h-E,n[6]=b+_*h,n[10]=u*p}else if(e.order==="ZXY"){const _=p*v,y=p*g,E=m*v,b=m*g;n[0]=_-b*h,n[4]=-u*g,n[8]=E+y*h,n[1]=y+E*h,n[5]=u*v,n[9]=b-_*h,n[2]=-u*m,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const _=u*v,y=u*g,E=h*v,b=h*g;n[0]=p*v,n[4]=E*m-y,n[8]=_*m+b,n[1]=p*g,n[5]=b*m+_,n[9]=y*m-E,n[2]=-m,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,y=u*m,E=h*p,b=h*m;n[0]=p*v,n[4]=b-_*g,n[8]=E*g+y,n[1]=g,n[5]=u*v,n[9]=-h*v,n[2]=-m*v,n[6]=y*g+E,n[10]=_-b*g}else if(e.order==="XZY"){const _=u*p,y=u*m,E=h*p,b=h*m;n[0]=p*v,n[4]=-g,n[8]=m*v,n[1]=_*g+b,n[5]=u*v,n[9]=y*g-E,n[2]=E*g-y,n[6]=h*v,n[10]=b*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,OE)}lookAt(e,n,s){const o=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ga.crossVectors(s,$n),Ga.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ga.crossVectors(s,$n)),Ga.normalize(),fc.crossVectors($n,Ga),o[0]=Ga.x,o[4]=fc.x,o[8]=$n.x,o[1]=Ga.y,o[5]=fc.y,o[9]=$n.y,o[2]=Ga.z,o[6]=fc.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,c=this.elements,u=s[0],h=s[4],p=s[8],m=s[12],v=s[1],g=s[5],_=s[9],y=s[13],E=s[2],b=s[6],S=s[10],x=s[14],N=s[3],T=s[7],D=s[11],I=s[15],O=o[0],L=o[4],k=o[8],w=o[12],R=o[1],H=o[5],ee=o[9],$=o[13],W=o[2],J=o[6],P=o[10],X=o[14],Y=o[3],_e=o[7],Me=o[11],B=o[15];return c[0]=u*O+h*R+p*W+m*Y,c[4]=u*L+h*H+p*J+m*_e,c[8]=u*k+h*ee+p*P+m*Me,c[12]=u*w+h*$+p*X+m*B,c[1]=v*O+g*R+_*W+y*Y,c[5]=v*L+g*H+_*J+y*_e,c[9]=v*k+g*ee+_*P+y*Me,c[13]=v*w+g*$+_*X+y*B,c[2]=E*O+b*R+S*W+x*Y,c[6]=E*L+b*H+S*J+x*_e,c[10]=E*k+b*ee+S*P+x*Me,c[14]=E*w+b*$+S*X+x*B,c[3]=N*O+T*R+D*W+I*Y,c[7]=N*L+T*H+D*J+I*_e,c[11]=N*k+T*ee+D*P+I*Me,c[15]=N*w+T*$+D*X+I*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],o=e[8],c=e[12],u=e[1],h=e[5],p=e[9],m=e[13],v=e[2],g=e[6],_=e[10],y=e[14],E=e[3],b=e[7],S=e[11],x=e[15];return E*(+c*p*g-o*m*g-c*h*_+s*m*_+o*h*y-s*p*y)+b*(+n*p*y-n*m*_+c*u*_-o*u*y+o*m*v-c*p*v)+S*(+n*m*g-n*h*y-c*u*g+s*u*y+c*h*v-s*m*v)+x*(-o*h*v-n*p*g+n*h*_+o*u*g-s*u*_+s*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=e[9],_=e[10],y=e[11],E=e[12],b=e[13],S=e[14],x=e[15],N=g*S*m-b*_*m+b*p*y-h*S*y-g*p*x+h*_*x,T=E*_*m-v*S*m-E*p*y+u*S*y+v*p*x-u*_*x,D=v*b*m-E*g*m+E*h*y-u*b*y-v*h*x+u*g*x,I=E*g*p-v*b*p-E*h*_+u*b*_+v*h*S-u*g*S,O=n*N+s*T+o*D+c*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=N*L,e[1]=(b*_*c-g*S*c-b*o*y+s*S*y+g*o*x-s*_*x)*L,e[2]=(h*S*c-b*p*c+b*o*m-s*S*m-h*o*x+s*p*x)*L,e[3]=(g*p*c-h*_*c-g*o*m+s*_*m+h*o*y-s*p*y)*L,e[4]=T*L,e[5]=(v*S*c-E*_*c+E*o*y-n*S*y-v*o*x+n*_*x)*L,e[6]=(E*p*c-u*S*c-E*o*m+n*S*m+u*o*x-n*p*x)*L,e[7]=(u*_*c-v*p*c+v*o*m-n*_*m-u*o*y+n*p*y)*L,e[8]=D*L,e[9]=(E*g*c-v*b*c-E*s*y+n*b*y+v*s*x-n*g*x)*L,e[10]=(u*b*c-E*h*c+E*s*m-n*b*m-u*s*x+n*h*x)*L,e[11]=(v*h*c-u*g*c-v*s*m+n*g*m+u*s*y-n*h*y)*L,e[12]=I*L,e[13]=(v*b*o-E*g*o+E*s*_-n*b*_-v*s*S+n*g*S)*L,e[14]=(E*h*o-u*b*o-E*s*p+n*b*p+u*s*S-n*h*S)*L,e[15]=(u*g*o-v*h*o+v*s*p-n*g*p-u*s*_+n*h*_)*L,this}scale(e){const n=this.elements,s=e.x,o=e.y,c=e.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=e.x,h=e.y,p=e.z,m=c*u,v=c*h;return this.set(m*u+s,m*h-o*p,m*p+o*h,0,m*h+o*p,v*h+s,v*p-o*u,0,m*p-o*h,v*p+o*u,c*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,o,c,u){return this.set(1,s,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,s){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,m=c+c,v=u+u,g=h+h,_=c*m,y=c*v,E=c*g,b=u*v,S=u*g,x=h*g,N=p*m,T=p*v,D=p*g,I=s.x,O=s.y,L=s.z;return o[0]=(1-(b+x))*I,o[1]=(y+D)*I,o[2]=(E-T)*I,o[3]=0,o[4]=(y-D)*O,o[5]=(1-(_+x))*O,o[6]=(S+N)*O,o[7]=0,o[8]=(E+T)*L,o[9]=(S-N)*L,o[10]=(1-(_+b))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,s){const o=this.elements;let c=mr.set(o[0],o[1],o[2]).length();const u=mr.set(o[4],o[5],o[6]).length(),h=mr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],bi.copy(this);const m=1/c,v=1/u,g=1/h;return bi.elements[0]*=m,bi.elements[1]*=m,bi.elements[2]*=m,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,n.setFromRotationMatrix(bi),s.x=c,s.y=u,s.z=h,this}makePerspective(e,n,s,o,c,u,h=ca){const p=this.elements,m=2*c/(n-e),v=2*c/(s-o),g=(n+e)/(n-e),_=(s+o)/(s-o);let y,E;if(h===ca)y=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===Fc)y=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,s,o,c,u,h=ca){const p=this.elements,m=1/(n-e),v=1/(s-o),g=1/(u-c),_=(n+e)*m,y=(s+o)*v;let E,b;if(h===ca)E=(u+c)*g,b=-2*g;else if(h===Fc)E=c*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const mr=new ue,bi=new hn,LE=new ue(0,0,0),OE=new ue(1,1,1),Ga=new ue,fc=new ue,$n=new ue,vv=new hn,_v=new Xl;class fa{constructor(e=0,n=0,s=0,o=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,o=this._order){return this._x=e,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],p=o[1],m=o[5],v=o[9],g=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Xn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Xn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Xn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Xn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return vv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vv,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _v.setFromEuler(this),this.setFromQuaternion(_v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const xv=new ue,gr=new Xl,aa=new hn,hc=new ue,Pl=new ue,zE=new ue,BE=new Xl,yv=new ue(1,0,0),Sv=new ue(0,1,0),Mv=new ue(0,0,1),Ev={type:"added"},IE={type:"removed"},vr={type:"childadded",child:null},bh={type:"childremoved",child:null};class ni extends Wa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new ue,n=new fa,s=new Xl,o=new ue(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new ct}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(yv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(Mv,e)}translateOnAxis(e,n){return xv.copy(e).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(Mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?hc.copy(e):hc.set(e,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Pl,hc,this.up):aa.lookAt(hc,Pl,this.up),this.quaternion.setFromRotationMatrix(aa),o&&(aa.extractRotation(o.matrixWorld),gr.setFromRotationMatrix(aa),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ev),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IE),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ev),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,e,zE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,BE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),E=u(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}ni.DEFAULT_UP=new ue(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new ue,sa=new ue,Th=new ue,ra=new ue,_r=new ue,xr=new ue,bv=new ue,Ah=new ue,Rh=new ue,Ch=new ue;class zi{constructor(e=new ue,n=new ue,s=new ue){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,o){o.subVectors(s,n),Ti.subVectors(e,n),o.cross(Ti);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,s,o,c){Ti.subVectors(o,n),sa.subVectors(s,n),Th.subVectors(e,n);const u=Ti.dot(Ti),h=Ti.dot(sa),p=Ti.dot(Th),m=sa.dot(sa),v=sa.dot(Th),g=u*m-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,y=(m*p-h*v)*_,E=(u*v-h*p)*_;return c.set(1-y-E,E,y)}static containsPoint(e,n,s,o){return this.getBarycoord(e,n,s,o,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(e,n,s,o,c,u,h,p){return this.getBarycoord(e,n,s,o,ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ra.x),p.addScaledVector(u,ra.y),p.addScaledVector(h,ra.z),p)}static isFrontFacing(e,n,s,o){return Ti.subVectors(s,n),sa.subVectors(e,n),Ti.cross(sa).dot(o)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,o){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,s,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ti.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,o,c){return zi.getInterpolation(e,this.a,this.b,this.c,n,s,o,c)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,o=this.b,c=this.c;let u,h;_r.subVectors(o,s),xr.subVectors(c,s),Ah.subVectors(e,s);const p=_r.dot(Ah),m=xr.dot(Ah);if(p<=0&&m<=0)return n.copy(s);Rh.subVectors(e,o);const v=_r.dot(Rh),g=xr.dot(Rh);if(v>=0&&g<=v)return n.copy(o);const _=p*g-v*m;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(s).addScaledVector(_r,u);Ch.subVectors(e,c);const y=_r.dot(Ch),E=xr.dot(Ch);if(E>=0&&y<=E)return n.copy(c);const b=y*m-p*E;if(b<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(s).addScaledVector(xr,h);const S=v*E-y*g;if(S<=0&&g-v>=0&&y-E>=0)return bv.subVectors(c,o),h=(g-v)/(g-v+(y-E)),n.copy(o).addScaledVector(bv,h);const x=1/(S+b+_);return u=b*x,h=_*x,n.copy(s).addScaledVector(_r,u).addScaledVector(xr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},dc={h:0,s:0,l:0};function wh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Ut{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,n),this}setRGB(e,n,s,o=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=s,Dt.toWorkingColorSpace(this,o),this}setHSL(e,n,s,o=Dt.workingColorSpace){if(e=ME(e,1),n=Xn(n,0,1),s=Xn(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=wh(u,c,e+1/3),this.g=wh(u,c,e),this.b=wh(u,c,e-1/3)}return Dt.toWorkingColorSpace(this,o),this}setStyle(e,n=fn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fn){const s=I_[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=gh(e.r),this.g=gh(e.g),this.b=gh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Dt.fromWorkingColorSpace(Ln.copy(this),e),Math.round(Xn(Ln.r*255,0,255))*65536+Math.round(Xn(Ln.g*255,0,255))*256+Math.round(Xn(Ln.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Ln.copy(this),n);const s=Ln.r,o=Ln.g,c=Ln.b,u=Math.max(s,o,c),h=Math.min(s,o,c);let p,m;const v=(h+u)/2;if(h===u)p=0,m=0;else{const g=u-h;switch(m=v<=.5?g/(u+h):g/(2-u-h),u){case s:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-s)/g+2;break;case c:p=(s-o)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Ln.copy(this),n),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=fn){Dt.fromWorkingColorSpace(Ln.copy(this),e);const n=Ln.r,s=Ln.g,o=Ln.b;return e!==fn?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,n,s){return this.getHSL(Va),this.setHSL(Va.h+e,Va.s+n,Va.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Va),e.getHSL(dc);const s=ph(Va.h,dc.h,n),o=ph(Va.s,dc.s,n),c=ph(Va.l,dc.l,n);return this.setHSL(s,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ut;Ut.NAMES=I_;let FE=0;class Or extends Wa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=kl(),this.name="",this.type="Material",this.blending=Cr,this.side=ua,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Wh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==ua&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qh&&(s.blendSrc=this.blendSrc),this.blendDst!==Wh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class F_ extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=S_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new ue,pc=new ut;class mi{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=hv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)pc.fromBufferAttribute(this,n),pc.applyMatrix3(e),this.setXY(n,pc.x,pc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Ul(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ul(n,this.array)),n}setX(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ul(n,this.array)),n}setY(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ul(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ul(n,this.array)),n}setW(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),s=kn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,o){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),s=kn(s,this.array),o=kn(o,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,n,s,o,c){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),s=kn(s,this.array),o=kn(o,this.array),c=kn(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hv&&(e.usage=this.usage),e}}class H_ extends mi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class G_ extends mi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class bs extends mi{constructor(e,n,s){super(new Float32Array(e),n,s)}}let HE=0;const hi=new hn,Dh=new ni,yr=new ue,ei=new ql,zl=new ql,gn=new ue;class ja extends Wa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=kl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?G_:H_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ct().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,n,s){return hi.makeTranslation(e,n,s),this.applyMatrix4(hi),this}scale(e,n,s){return hi.makeScale(e,n,s),this.applyMatrix4(hi),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const n=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new bs(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];zl.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ei.min,zl.min),ei.expandByPoint(gn),gn.addVectors(ei.max,zl.max),ei.expandByPoint(gn)):(ei.expandByPoint(zl.min),ei.expandByPoint(zl.max))}ei.getCenter(s);let o=0;for(let c=0,u=e.count;c<u;c++)gn.fromBufferAttribute(e,c),o=Math.max(o,s.distanceToSquared(gn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)gn.fromBufferAttribute(h,m),p&&(yr.fromBufferAttribute(e,m),gn.add(yr)),o=Math.max(o,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let k=0;k<s.count;k++)h[k]=new ue,p[k]=new ue;const m=new ue,v=new ue,g=new ue,_=new ut,y=new ut,E=new ut,b=new ue,S=new ue;function x(k,w,R){m.fromBufferAttribute(s,k),v.fromBufferAttribute(s,w),g.fromBufferAttribute(s,R),_.fromBufferAttribute(c,k),y.fromBufferAttribute(c,w),E.fromBufferAttribute(c,R),v.sub(m),g.sub(m),y.sub(_),E.sub(_);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(H),S.copy(g).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(H),h[k].add(b),h[w].add(b),h[R].add(b),p[k].add(S),p[w].add(S),p[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let k=0,w=N.length;k<w;++k){const R=N[k],H=R.start,ee=R.count;for(let $=H,W=H+ee;$<W;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const T=new ue,D=new ue,I=new ue,O=new ue;function L(k){I.fromBufferAttribute(o,k),O.copy(I);const w=h[k];T.copy(w),T.sub(I.multiplyScalar(I.dot(w))).normalize(),D.crossVectors(O,w);const H=D.dot(p[k])<0?-1:1;u.setXYZW(k,T.x,T.y,T.z,H)}for(let k=0,w=N.length;k<w;++k){const R=N[k],H=R.start,ee=R.count;for(let $=H,W=H+ee;$<W;$+=3)L(e.getX($+0)),L(e.getX($+1)),L(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const o=new ue,c=new ue,u=new ue,h=new ue,p=new ue,m=new ue,v=new ue,g=new ue;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),b=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,S),h.add(v),p.add(v),m.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)gn.fromBufferAttribute(e,n),gn.normalize(),e.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,g=h.normalized,_=new m.constructor(p.length*v);let y=0,E=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?y=p[b]*h.data.stride+h.offset:y=p[b]*v;for(let x=0;x<v;x++)_[E++]=m[y++]}return new mi(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ja,s=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,s);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,g=m.length;v<g;v++){const _=m[v],y=e(_,s);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,_=m.length;g<_;g++){const y=m[g];v.push(y.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let _=0,y=g.length;_<y;_++)v.push(g[_].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tv=new hn,ps=new NE,mc=new Bd,Av=new ue,Sr=new ue,Mr=new ue,Er=new ue,Uh=new ue,gc=new ue,vc=new ut,_c=new ut,xc=new ut,Rv=new ue,Cv=new ue,wv=new ue,yc=new ue,Sc=new ue;class Ri extends ni{constructor(e=new ja,n=new F_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){gc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],g=c[p];v!==0&&(Uh.fromBufferAttribute(g,e),u?gc.addScaledVector(Uh,v):gc.addScaledVector(Uh.sub(n),v))}n.add(gc)}return n}raycast(e,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(c),ps.copy(e.ray).recast(e.near),!(mc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(mc,Av)===null||ps.origin.distanceToSquared(Av)>(e.far-e.near)**2))&&(Tv.copy(c).invert(),ps.copy(e.ray).applyMatrix4(Tv),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,ps)))}_computeIntersections(e,n,s){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const S=_[E],x=u[S.materialIndex],N=Math.max(S.start,y.start),T=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let D=N,I=T;D<I;D+=3){const O=h.getX(D),L=h.getX(D+1),k=h.getX(D+2);o=Mc(this,x,e,s,m,v,g,O,L,k),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const N=h.getX(S),T=h.getX(S+1),D=h.getX(S+2);o=Mc(this,u,e,s,m,v,g,N,T,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const S=_[E],x=u[S.materialIndex],N=Math.max(S.start,y.start),T=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let D=N,I=T;D<I;D+=3){const O=D,L=D+1,k=D+2;o=Mc(this,x,e,s,m,v,g,O,L,k),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const N=S,T=S+1,D=S+2;o=Mc(this,u,e,s,m,v,g,N,T,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function GE(a,e,n,s,o,c,u,h){let p;if(e.side===_n?p=s.intersectTriangle(u,c,o,!0,h):p=s.intersectTriangle(o,c,u,e.side===ua,h),p===null)return null;Sc.copy(h),Sc.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(Sc);return m<n.near||m>n.far?null:{distance:m,point:Sc.clone(),object:a}}function Mc(a,e,n,s,o,c,u,h,p,m){a.getVertexPosition(h,Sr),a.getVertexPosition(p,Mr),a.getVertexPosition(m,Er);const v=GE(a,e,n,s,Sr,Mr,Er,yc);if(v){o&&(vc.fromBufferAttribute(o,h),_c.fromBufferAttribute(o,p),xc.fromBufferAttribute(o,m),v.uv=zi.getInterpolation(yc,Sr,Mr,Er,vc,_c,xc,new ut)),c&&(vc.fromBufferAttribute(c,h),_c.fromBufferAttribute(c,p),xc.fromBufferAttribute(c,m),v.uv1=zi.getInterpolation(yc,Sr,Mr,Er,vc,_c,xc,new ut)),u&&(Rv.fromBufferAttribute(u,h),Cv.fromBufferAttribute(u,p),wv.fromBufferAttribute(u,m),v.normal=zi.getInterpolation(yc,Sr,Mr,Er,Rv,Cv,wv,new ue),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new ue,materialIndex:0};zi.getNormal(Sr,Mr,Er,g.normal),v.face=g}return v}class Wl extends ja{constructor(e=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],g=[];let _=0,y=0;E("z","y","x",-1,-1,s,n,e,u,c,0),E("z","y","x",1,-1,s,n,-e,u,c,1),E("x","z","y",1,1,e,s,n,o,u,2),E("x","z","y",1,-1,e,s,-n,o,u,3),E("x","y","z",1,-1,e,n,s,o,c,4),E("x","y","z",-1,-1,e,n,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new bs(m,3)),this.setAttribute("normal",new bs(v,3)),this.setAttribute("uv",new bs(g,2));function E(b,S,x,N,T,D,I,O,L,k,w){const R=D/L,H=I/k,ee=D/2,$=I/2,W=O/2,J=L+1,P=k+1;let X=0,Y=0;const _e=new ue;for(let Me=0;Me<P;Me++){const B=Me*H-$;for(let se=0;se<J;se++){const ve=se*R-ee;_e[b]=ve*N,_e[S]=B*T,_e[x]=W,m.push(_e.x,_e.y,_e.z),_e[b]=0,_e[S]=0,_e[x]=O>0?1:-1,v.push(_e.x,_e.y,_e.z),g.push(se/L),g.push(1-Me/k),X+=1}}for(let Me=0;Me<k;Me++)for(let B=0;B<L;B++){const se=_+B+J*Me,ve=_+B+J*(Me+1),Z=_+(B+1)+J*(Me+1),fe=_+(B+1)+J*Me;p.push(se,ve,fe),p.push(ve,Z,fe),Y+=6}h.addGroup(y,Y,w),y+=Y,_+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(a){const e={};for(const n in a){e[n]={};for(const s in a[n]){const o=a[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=o.clone():Array.isArray(o)?e[n][s]=o.slice():e[n][s]=o}}return e}function Pn(a){const e={};for(let n=0;n<a.length;n++){const s=Lr(a[n]);for(const o in s)e[o]=s[o]}return e}function VE(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function V_(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const kE={clone:Lr,merge:Pn};var XE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=VE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class k_ extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=ca}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new ue,Dv=new ut,Uv=new ut;class di extends k_{constructor(e=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ka.x,ka.y).multiplyScalar(-e/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ka.x,ka.y).multiplyScalar(-e/ka.z)}getViewSize(e,n){return this.getViewBounds(e,Dv,Uv),n.subVectors(Uv,Dv)}setViewOffset(e,n,s,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dh*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*s/m,o*=u.width/p,s*=u.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const br=-90,Tr=1;class WE extends ni{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(br,Tr,e,n);o.layers=this.layers,this.add(o);const c=new di(br,Tr,e,n);c.layers=this.layers,this.add(c);const u=new di(br,Tr,e,n);u.layers=this.layers,this.add(u);const h=new di(br,Tr,e,n);h.layers=this.layers,this.add(h);const p=new di(br,Tr,e,n);p.layers=this.layers,this.add(p);const m=new di(br,Tr,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,h,p]=n;for(const m of n)this.remove(m);if(e===ca)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,m,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(n,c),e.setRenderTarget(s,1,o),e.render(n,u),e.setRenderTarget(s,2,o),e.render(n,h),e.setRenderTarget(s,3,o),e.render(n,p),e.setRenderTarget(s,4,o),e.render(n,m),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,o),e.render(n,v),e.setRenderTarget(g,_,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class X_ extends Tn{constructor(e,n,s,o,c,u,h,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Ur,super(e,n,s,o,c,u,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jE extends Ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new X_(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Wl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:Lr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:_n,blending:Bi});c.uniforms.tEquirect.value=n;const u=new Ri(o,c),h=n.minFilter;return n.minFilter===Es&&(n.minFilter=bn),new WE(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,s,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,o);e.setRenderTarget(c)}}const Nh=new ue,YE=new ue,ZE=new ct;class _s{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,o){return this.normal.set(e,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const o=Nh.subVectors(s,n).cross(YE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(Nh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||ZE.getNormalMatrix(e),o=this.coplanarPoint(Nh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Bd,Ec=new ue;class q_{constructor(e=new _s,n=new _s,s=new _s,o=new _s,c=new _s,u=new _s){this.planes=[e,n,s,o,c,u]}set(e,n,s,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=ca){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],p=o[3],m=o[4],v=o[5],g=o[6],_=o[7],y=o[8],E=o[9],b=o[10],S=o[11],x=o[12],N=o[13],T=o[14],D=o[15];if(s[0].setComponents(p-c,_-m,S-y,D-x).normalize(),s[1].setComponents(p+c,_+m,S+y,D+x).normalize(),s[2].setComponents(p+u,_+v,S+E,D+N).normalize(),s[3].setComponents(p-u,_-v,S-E,D-N).normalize(),s[4].setComponents(p-h,_-g,S-b,D-T).normalize(),n===ca)s[5].setComponents(p+h,_+g,S+b,D+T).normalize();else if(n===Fc)s[5].setComponents(h,g,b,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const n=this.planes,s=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Ec.x=o.normal.x>0?e.max.x:e.min.x,Ec.y=o.normal.y>0?e.max.y:e.min.y,Ec.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W_(){let a=null,e=!1,n=null,s=null;function o(c,u){n(c,u),s=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(s=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function KE(a){const e=new WeakMap;function n(h,p){const m=h.array,v=h.usage,g=m.byteLength,_=a.createBuffer();a.bindBuffer(p,_),a.bufferData(p,m,v),h.onUploadCallback();let y;if(m instanceof Float32Array)y=a.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=a.SHORT;else if(m instanceof Uint32Array)y=a.UNSIGNED_INT;else if(m instanceof Int32Array)y=a.INT;else if(m instanceof Int8Array)y=a.BYTE;else if(m instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,m){const v=p.array,g=p._updateRange,_=p.updateRanges;if(a.bindBuffer(m,h),g.count===-1&&_.length===0&&a.bufferSubData(m,0,v),_.length!==0){for(let y=0,E=_.length;y<E;y++){const b=_[y];a.bufferSubData(m,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}g.count!==-1&&(a.bufferSubData(m,g.offset*v.BYTES_PER_ELEMENT,v,g.offset,g.count),g.count=-1),p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(a.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:u}}class jl extends ja{constructor(e=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(s),p=Math.floor(o),m=h+1,v=p+1,g=e/h,_=n/p,y=[],E=[],b=[],S=[];for(let x=0;x<v;x++){const N=x*_-u;for(let T=0;T<m;T++){const D=T*g-c;E.push(D,-N,0),b.push(0,0,1),S.push(T/h),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<h;N++){const T=N+m*x,D=N+m*(x+1),I=N+1+m*(x+1),O=N+1+m*x;y.push(T,D,O),y.push(D,I,O)}this.setIndex(y),this.setAttribute("position",new bs(E,3)),this.setAttribute("normal",new bs(b,3)),this.setAttribute("uv",new bs(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}var QE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ib=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ub=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ib=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$b=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ST=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ET=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_A=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:QE,alphahash_pars_fragment:JE,alphamap_fragment:$E,alphamap_pars_fragment:eb,alphatest_fragment:tb,alphatest_pars_fragment:nb,aomap_fragment:ib,aomap_pars_fragment:ab,batching_pars_vertex:sb,batching_vertex:rb,begin_vertex:lb,beginnormal_vertex:ob,bsdfs:cb,iridescence_fragment:ub,bumpmap_pars_fragment:fb,clipping_planes_fragment:hb,clipping_planes_pars_fragment:db,clipping_planes_pars_vertex:pb,clipping_planes_vertex:mb,color_fragment:gb,color_pars_fragment:vb,color_pars_vertex:_b,color_vertex:xb,common:yb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:Mb,displacementmap_pars_vertex:Eb,displacementmap_vertex:bb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Ab,colorspace_fragment:Rb,colorspace_pars_fragment:Cb,envmap_fragment:wb,envmap_common_pars_fragment:Db,envmap_pars_fragment:Ub,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:kb,envmap_vertex:Lb,fog_vertex:Ob,fog_pars_vertex:Pb,fog_fragment:zb,fog_pars_fragment:Bb,gradientmap_pars_fragment:Ib,lightmap_pars_fragment:Fb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Vb,lights_toon_fragment:Xb,lights_toon_pars_fragment:qb,lights_phong_fragment:Wb,lights_phong_pars_fragment:jb,lights_physical_fragment:Yb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Kb,lights_fragment_maps:Qb,lights_fragment_end:Jb,logdepthbuf_fragment:$b,logdepthbuf_pars_fragment:eT,logdepthbuf_pars_vertex:tT,logdepthbuf_vertex:nT,map_fragment:iT,map_pars_fragment:aT,map_particle_fragment:sT,map_particle_pars_fragment:rT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:oT,morphinstance_vertex:cT,morphcolor_vertex:uT,morphnormal_vertex:fT,morphtarget_pars_vertex:hT,morphtarget_vertex:dT,normal_fragment_begin:pT,normal_fragment_maps:mT,normal_pars_fragment:gT,normal_pars_vertex:vT,normal_vertex:_T,normalmap_pars_fragment:xT,clearcoat_normal_fragment_begin:yT,clearcoat_normal_fragment_maps:ST,clearcoat_pars_fragment:MT,iridescence_pars_fragment:ET,opaque_fragment:bT,packing:TT,premultiplied_alpha_fragment:AT,project_vertex:RT,dithering_fragment:CT,dithering_pars_fragment:wT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:NT,shadowmap_pars_vertex:LT,shadowmap_vertex:OT,shadowmask_pars_fragment:PT,skinbase_vertex:zT,skinning_pars_vertex:BT,skinning_vertex:IT,skinnormal_vertex:FT,specularmap_fragment:HT,specularmap_pars_fragment:GT,tonemapping_fragment:VT,tonemapping_pars_fragment:kT,transmission_fragment:XT,transmission_pars_fragment:qT,uv_pars_fragment:WT,uv_pars_vertex:jT,uv_vertex:YT,worldpos_vertex:ZT,background_vert:KT,background_frag:QT,backgroundCube_vert:JT,backgroundCube_frag:$T,cube_vert:eA,cube_frag:tA,depth_vert:nA,depth_frag:iA,distanceRGBA_vert:aA,distanceRGBA_frag:sA,equirect_vert:rA,equirect_frag:lA,linedashed_vert:oA,linedashed_frag:cA,meshbasic_vert:uA,meshbasic_frag:fA,meshlambert_vert:hA,meshlambert_frag:dA,meshmatcap_vert:pA,meshmatcap_frag:mA,meshnormal_vert:gA,meshnormal_frag:vA,meshphong_vert:_A,meshphong_frag:xA,meshphysical_vert:yA,meshphysical_frag:SA,meshtoon_vert:MA,meshtoon_frag:EA,points_vert:bA,points_frag:TA,shadow_vert:AA,shadow_frag:RA,sprite_vert:CA,sprite_frag:wA},Le={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Oi={basic:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Pn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Pn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Pn([Le.points,Le.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Pn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Pn([Le.common,Le.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Pn([Le.sprite,Le.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Pn([Le.common,Le.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Pn([Le.lights,Le.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Oi.physical={uniforms:Pn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const bc={r:0,b:0,g:0},gs=new fa,DA=new hn;function UA(a,e,n,s,o,c,u){const h=new Ut(0);let p=c===!0?0:1,m,v,g=null,_=0,y=null;function E(N){let T=N.isScene===!0?N.background:null;return T&&T.isTexture&&(T=(N.backgroundBlurriness>0?n:e).get(T)),T}function b(N){let T=!1;const D=E(N);D===null?x(h,p):D&&D.isColor&&(x(D,1),T=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(a.autoClear||T)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(N,T){const D=E(T);D&&(D.isCubeTexture||D.mapping===Vc)?(v===void 0&&(v=new Ri(new Wl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Lr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,O,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),gs.copy(T.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(DA.makeRotationFromEuler(gs)),v.material.toneMapped=Dt.getTransfer(D.colorSpace)!==Xt,(g!==D||_!==D.version||y!==a.toneMapping)&&(v.material.needsUpdate=!0,g=D,_=D.version,y=a.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ri(new jl(2,2),new gi({name:"BackgroundMaterial",uniforms:Lr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ua,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(D.colorSpace)!==Xt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||_!==D.version||y!==a.toneMapping)&&(m.material.needsUpdate=!0,g=D,_=D.version,y=a.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function x(N,T){N.getRGB(bc,V_(a)),s.buffers.color.setClear(bc.r,bc.g,bc.b,T,u)}return{getClearColor:function(){return h},setClearColor:function(N,T=1){h.set(N),p=T,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,x(h,p)},render:b,addToRenderList:S}}function NA(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},o=_(null);let c=o,u=!1;function h(R,H,ee,$,W){let J=!1;const P=g($,ee,H);c!==P&&(c=P,m(c.object)),J=y(R,$,ee,W),J&&E(R,$,ee,W),W!==null&&e.update(W,a.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,D(R,H,ee,$),W!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return a.createVertexArray()}function m(R){return a.bindVertexArray(R)}function v(R){return a.deleteVertexArray(R)}function g(R,H,ee){const $=ee.wireframe===!0;let W=s[R.id];W===void 0&&(W={},s[R.id]=W);let J=W[H.id];J===void 0&&(J={},W[H.id]=J);let P=J[$];return P===void 0&&(P=_(p()),J[$]=P),P}function _(R){const H=[],ee=[],$=[];for(let W=0;W<n;W++)H[W]=0,ee[W]=0,$[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ee,attributeDivisors:$,object:R,attributes:{},index:null}}function y(R,H,ee,$){const W=c.attributes,J=H.attributes;let P=0;const X=ee.getAttributes();for(const Y in X)if(X[Y].location>=0){const Me=W[Y];let B=J[Y];if(B===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),Me===void 0||Me.attribute!==B||B&&Me.data!==B.data)return!0;P++}return c.attributesNum!==P||c.index!==$}function E(R,H,ee,$){const W={},J=H.attributes;let P=0;const X=ee.getAttributes();for(const Y in X)if(X[Y].location>=0){let Me=J[Y];Me===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor));const B={};B.attribute=Me,Me&&Me.data&&(B.data=Me.data),W[Y]=B,P++}c.attributes=W,c.attributesNum=P,c.index=$}function b(){const R=c.newAttributes;for(let H=0,ee=R.length;H<ee;H++)R[H]=0}function S(R){x(R,0)}function x(R,H){const ee=c.newAttributes,$=c.enabledAttributes,W=c.attributeDivisors;ee[R]=1,$[R]===0&&(a.enableVertexAttribArray(R),$[R]=1),W[R]!==H&&(a.vertexAttribDivisor(R,H),W[R]=H)}function N(){const R=c.newAttributes,H=c.enabledAttributes;for(let ee=0,$=H.length;ee<$;ee++)H[ee]!==R[ee]&&(a.disableVertexAttribArray(ee),H[ee]=0)}function T(R,H,ee,$,W,J,P){P===!0?a.vertexAttribIPointer(R,H,ee,W,J):a.vertexAttribPointer(R,H,ee,$,W,J)}function D(R,H,ee,$){b();const W=$.attributes,J=ee.getAttributes(),P=H.defaultAttributeValues;for(const X in J){const Y=J[X];if(Y.location>=0){let _e=W[X];if(_e===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),_e!==void 0){const Me=_e.normalized,B=_e.itemSize,se=e.get(_e);if(se===void 0)continue;const ve=se.buffer,Z=se.type,fe=se.bytesPerElement,Se=Z===a.INT||Z===a.UNSIGNED_INT||_e.gpuType===Dd;if(_e.isInterleavedBufferAttribute){const Ee=_e.data,Oe=Ee.stride,Pe=_e.offset;if(Ee.isInstancedInterleavedBuffer){for(let tt=0;tt<Y.locationSize;tt++)x(Y.location+tt,Ee.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let tt=0;tt<Y.locationSize;tt++)S(Y.location+tt);a.bindBuffer(a.ARRAY_BUFFER,ve);for(let tt=0;tt<Y.locationSize;tt++)T(Y.location+tt,B/Y.locationSize,Z,Me,Oe*fe,(Pe+B/Y.locationSize*tt)*fe,Se)}else{if(_e.isInstancedBufferAttribute){for(let Ee=0;Ee<Y.locationSize;Ee++)x(Y.location+Ee,_e.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)S(Y.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,ve);for(let Ee=0;Ee<Y.locationSize;Ee++)T(Y.location+Ee,B/Y.locationSize,Z,Me,B*fe,B/Y.locationSize*Ee*fe,Se)}}else if(P!==void 0){const Me=P[X];if(Me!==void 0)switch(Me.length){case 2:a.vertexAttrib2fv(Y.location,Me);break;case 3:a.vertexAttrib3fv(Y.location,Me);break;case 4:a.vertexAttrib4fv(Y.location,Me);break;default:a.vertexAttrib1fv(Y.location,Me)}}}}N()}function I(){k();for(const R in s){const H=s[R];for(const ee in H){const $=H[ee];for(const W in $)v($[W].object),delete $[W];delete H[ee]}delete s[R]}}function O(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const ee in H){const $=H[ee];for(const W in $)v($[W].object),delete $[W];delete H[ee]}delete s[R.id]}function L(R){for(const H in s){const ee=s[H];if(ee[R.id]===void 0)continue;const $=ee[R.id];for(const W in $)v($[W].object),delete $[W];delete ee[R.id]}}function k(){w(),u=!0,c!==o&&(c=o,m(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:O,releaseStatesOfProgram:L,initAttributes:b,enableAttribute:S,disableUnusedAttributes:N}}function LA(a,e,n){let s;function o(m){s=m}function c(m,v){a.drawArrays(s,m,v),n.update(v,s,1)}function u(m,v,g){g!==0&&(a.drawArraysInstanced(s,m,v,g),n.update(v,s,g))}function h(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let y=0;for(let E=0;E<g;E++)y+=v[E];n.update(y,s,1)}function p(m,v,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)u(m[E],v[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,v,0,_,0,g);let E=0;for(let b=0;b<g;b++)E+=v[b];for(let b=0;b<_.length;b++)n.update(E,s,_[b])}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function OA(a,e,n,s){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ai&&s.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const L=O===Gl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ii&&s.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==oa&&!L)}function p(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,_=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),y=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),T=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),D=y>0,I=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:x,maxVaryings:N,maxFragmentUniforms:T,vertexTextures:D,maxSamples:I}}function PA(a){const e=this;let n=null,s=0,o=!1,c=!1;const u=new _s,h=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||s!==0||o;return o=_,s=g.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){n=v(g,_,0)},this.setState=function(g,_,y){const E=g.clippingPlanes,b=g.clipIntersection,S=g.clipShadows,x=a.get(g);if(!o||E===null||E.length===0||c&&!S)c?v(null):m();else{const N=c?0:s,T=N*4;let D=x.clippingState||null;p.value=D,D=v(E,_,T,y);for(let I=0;I!==T;++I)D[I]=n[I];x.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,_,y,E){const b=g!==null?g.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const x=y+b*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<x)&&(S=new Float32Array(x));for(let T=0,D=y;T!==b;++T,D+=4)u.copy(g[T]).applyMatrix4(N,h),u.normal.toArray(S,D),S[D+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function zA(a){let e=new WeakMap;function n(u,h){return h===jh?u.mapping=Ur:h===Yh&&(u.mapping=Nr),u}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===jh||h===Yh)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new jE(p.height);return m.fromEquirectangularTexture(a,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class Id extends k_{constructor(e=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-e,u=s+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rr=4,Nv=[.125,.215,.35,.446,.526,.582],Ss=20,Lh=new Id,Lv=new Ut;let Oh=null,Ph=0,zh=0,Bh=!1;const xs=(1+Math.sqrt(5))/2,Ar=1/xs,Ov=[new ue(-xs,Ar,0),new ue(xs,Ar,0),new ue(-Ar,0,xs),new ue(Ar,0,xs),new ue(0,xs,-Ar),new ue(0,xs,Ar),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)];class Pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,o=100){Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Ph,zh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Gl,format:Ai,colorSpace:Ii,depthBuffer:!1},o=zv(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zv(e,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(c)),this._blurMaterial=IA(c,e,n)}return o}_compileMaterial(e){const n=new Ri(this._lodPlanes[0],e);this._renderer.compile(n,Lh)}_sceneToCubeUV(e,n,s,o){const h=new di(90,1,n,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(Lv),v.toneMapping=Xa,v.autoClear=!1;const y=new F_({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),E=new Ri(new Wl,y);let b=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,b=!0):(y.color.copy(Lv),b=!0);for(let x=0;x<6;x++){const N=x%3;N===0?(h.up.set(0,p[x],0),h.lookAt(m[x],0,0)):N===1?(h.up.set(0,0,p[x]),h.lookAt(0,m[x],0)):(h.up.set(0,p[x],0),h.lookAt(0,0,m[x]));const T=this._cubeSize;Tc(o,N*T,x>2?T:0,T,T),v.setRenderTarget(o),b&&v.render(E,h),v.render(e,h)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=_,v.autoClear=g,e.background=S}_textureToCubeUV(e,n){const s=this._renderer,o=e.mapping===Ur||e.mapping===Nr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Ri(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Tc(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,Lh)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Ov[(o-c-1)%Ov.length];this._blur(e,c-1,c,u,h)}n.autoClear=s}_blur(e,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,o,"latitudinal",c),this._halfBlur(u,e,s,s,o,"longitudinal",c)}_halfBlur(e,n,s,o,c,u,h){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Ri(this._lodPlanes[o],m),_=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ss-1),b=c/E,S=isFinite(c)?1+Math.floor(v*b):Ss;S>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ss}`);const x=[];let N=0;for(let L=0;L<Ss;++L){const k=L/b,w=Math.exp(-k*k/2);x.push(w),L===0?N+=w:L<S&&(N+=2*w)}for(let L=0;L<x.length;L++)x[L]=x[L]/N;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:T}=this;_.dTheta.value=E,_.mipInt.value=T-s;const D=this._sizeLods[o],I=3*D*(o>T-Rr?o-T+Rr:0),O=4*(this._cubeSize-D);Tc(n,I,O,3*D,2*D),p.setRenderTarget(n),p.render(g,Lh)}}function BA(a){const e=[],n=[],s=[];let o=a;const c=a-Rr+1+Nv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let p=1/h;u>a-Rr?p=Nv[u-a+Rr-1]:u===0&&(p=0),s.push(p);const m=1/(h-2),v=-m,g=1+m,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,E=6,b=3,S=2,x=1,N=new Float32Array(b*E*y),T=new Float32Array(S*E*y),D=new Float32Array(x*E*y);for(let O=0;O<y;O++){const L=O%3*2/3-1,k=O>2?0:-1,w=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];N.set(w,b*E*O),T.set(_,S*E*O);const R=[O,O,O,O,O,O];D.set(R,x*E*O)}const I=new ja;I.setAttribute("position",new mi(N,b)),I.setAttribute("uv",new mi(T,S)),I.setAttribute("faceIndex",new mi(D,x)),e.push(I),o>Rr&&o--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function zv(a,e,n){const s=new Ci(a,e,n);return s.texture.mapping=Vc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(a,e,n,s,o){a.viewport.set(e,n,s,o),a.scissor.set(e,n,s,o)}function IA(a,e,n){const s=new Float32Array(Ss),o=new ue(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Bv(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Iv(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FA(a){let e=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===jh||p===Yh,v=p===Ur||p===Nr;if(m||v){let g=e.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Pv(a)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return m&&y&&y.height>0||v&&y&&o(y)?(n===null&&(n=new Pv(a)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function o(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function HA(a){const e={};function n(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(s)}return e[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Fl("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function GA(a,e,n,s){const o={},c=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const b=_.morphAttributes[E];for(let S=0,x=b.length;S<x;S++)e.remove(b[S])}_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(g,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(g){const _=g.attributes;for(const E in _)e.update(_[E],a.ARRAY_BUFFER);const y=g.morphAttributes;for(const E in y){const b=y[E];for(let S=0,x=b.length;S<x;S++)e.update(b[S],a.ARRAY_BUFFER)}}function m(g){const _=[],y=g.index,E=g.attributes.position;let b=0;if(y!==null){const N=y.array;b=y.version;for(let T=0,D=N.length;T<D;T+=3){const I=N[T+0],O=N[T+1],L=N[T+2];_.push(I,O,O,L,L,I)}}else if(E!==void 0){const N=E.array;b=E.version;for(let T=0,D=N.length/3-1;T<D;T+=3){const I=T+0,O=T+1,L=T+2;_.push(I,O,O,L,L,I)}}else return;const S=new(O_(_)?G_:H_)(_,1);S.version=b;const x=c.get(g);x&&e.remove(x),c.set(g,S)}function v(g){const _=c.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:v}}function VA(a,e,n){let s;function o(_){s=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,y){a.drawElements(s,y,c,_*u),n.update(y,s,1)}function m(_,y,E){E!==0&&(a.drawElementsInstanced(s,y,c,_*u,E),n.update(y,s,E))}function v(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,s,1)}function g(_,y,E,b){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)m(_[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,b,0,E);let x=0;for(let N=0;N<E;N++)x+=y[N];for(let N=0;N<b.length;N++)n.update(x,s,b[N])}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function kA(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,h){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:s}}function XA(a,e,n){const s=new WeakMap,o=new vn;function c(u,h,p){const m=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let R=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let I=h.attributes.position.count*D,O=1;I>e.maxTextureSize&&(O=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const L=new Float32Array(I*O*4*g),k=new z_(L,I,O,g);k.type=oa,k.needsUpdate=!0;const w=D*4;for(let H=0;H<g;H++){const ee=x[H],$=N[H],W=T[H],J=I*O*4*H;for(let P=0;P<ee.count;P++){const X=P*w;E===!0&&(o.fromBufferAttribute(ee,P),L[J+X+0]=o.x,L[J+X+1]=o.y,L[J+X+2]=o.z,L[J+X+3]=0),b===!0&&(o.fromBufferAttribute($,P),L[J+X+4]=o.x,L[J+X+5]=o.y,L[J+X+6]=o.z,L[J+X+7]=0),S===!0&&(o.fromBufferAttribute(W,P),L[J+X+8]=o.x,L[J+X+9]=o.y,L[J+X+10]=o.z,L[J+X+11]=W.itemSize===4?o.w:1)}}_={count:g,texture:k,size:new ut(I,O)},s.set(h,_),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(a,"morphTargetBaseInfluence",b),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function qA(a,e,n,s){let o=new WeakMap;function c(p){const m=s.render.frame,v=p.geometry,g=e.get(p,v);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return g}function u(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Hd extends Tn{constructor(e,n,s,o,c,u,h,p,m,v=wr){if(v!==wr&&v!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===wr&&(s=qa),s===void 0&&v===Rs&&(s=As),super(null,o,c,u,h,p,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=h!==void 0?h:pi,this.minFilter=p!==void 0?p:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const j_=new Tn,Fv=new Hd(1,1),Y_=new z_,Z_=new DE,K_=new X_,Hv=[],Gv=[],Vv=new Float32Array(16),kv=new Float32Array(9),Xv=new Float32Array(4);function Pr(a,e,n){const s=a[0];if(s<=0||s>0)return a;const o=e*n;let c=Hv[o];if(c===void 0&&(c=new Float32Array(o),Hv[o]=c),e!==0){s.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,a[u].toArray(c,h)}return c}function dn(a,e){if(a.length!==e.length)return!1;for(let n=0,s=a.length;n<s;n++)if(a[n]!==e[n])return!1;return!0}function pn(a,e){for(let n=0,s=e.length;n<s;n++)a[n]=e[n]}function Xc(a,e){let n=Gv[e];n===void 0&&(n=new Int32Array(e),Gv[e]=n);for(let s=0;s!==e;++s)n[s]=a.allocateTextureUnit();return n}function WA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function jA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;a.uniform2fv(this.addr,e),pn(n,e)}}function YA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dn(n,e))return;a.uniform3fv(this.addr,e),pn(n,e)}}function ZA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;a.uniform4fv(this.addr,e),pn(n,e)}}function KA(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(dn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,s))return;Xv.set(s),a.uniformMatrix2fv(this.addr,!1,Xv),pn(n,s)}}function QA(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(dn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,s))return;kv.set(s),a.uniformMatrix3fv(this.addr,!1,kv),pn(n,s)}}function JA(a,e){const n=this.cache,s=e.elements;if(s===void 0){if(dn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,s))return;Vv.set(s),a.uniformMatrix4fv(this.addr,!1,Vv),pn(n,s)}}function $A(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function e2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;a.uniform2iv(this.addr,e),pn(n,e)}}function t2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;a.uniform3iv(this.addr,e),pn(n,e)}}function n2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;a.uniform4iv(this.addr,e),pn(n,e)}}function i2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function a2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;a.uniform2uiv(this.addr,e),pn(n,e)}}function s2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;a.uniform3uiv(this.addr,e),pn(n,e)}}function r2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;a.uniform4uiv(this.addr,e),pn(n,e)}}function l2(a,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Fv.compareFunction=L_,c=Fv):c=j_,n.setTexture2D(e||c,o)}function o2(a,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(e||Z_,o)}function c2(a,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(e||K_,o)}function u2(a,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(a.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(e||Y_,o)}function f2(a){switch(a){case 5126:return WA;case 35664:return jA;case 35665:return YA;case 35666:return ZA;case 35674:return KA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return $A;case 35667:case 35671:return e2;case 35668:case 35672:return t2;case 35669:case 35673:return n2;case 5125:return i2;case 36294:return a2;case 36295:return s2;case 36296:return r2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return o2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return u2}}function h2(a,e){a.uniform1fv(this.addr,e)}function d2(a,e){const n=Pr(e,this.size,2);a.uniform2fv(this.addr,n)}function p2(a,e){const n=Pr(e,this.size,3);a.uniform3fv(this.addr,n)}function m2(a,e){const n=Pr(e,this.size,4);a.uniform4fv(this.addr,n)}function g2(a,e){const n=Pr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function v2(a,e){const n=Pr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function _2(a,e){const n=Pr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function x2(a,e){a.uniform1iv(this.addr,e)}function y2(a,e){a.uniform2iv(this.addr,e)}function S2(a,e){a.uniform3iv(this.addr,e)}function M2(a,e){a.uniform4iv(this.addr,e)}function E2(a,e){a.uniform1uiv(this.addr,e)}function b2(a,e){a.uniform2uiv(this.addr,e)}function T2(a,e){a.uniform3uiv(this.addr,e)}function A2(a,e){a.uniform4uiv(this.addr,e)}function R2(a,e,n){const s=this.cache,o=e.length,c=Xc(n,o);dn(s,c)||(a.uniform1iv(this.addr,c),pn(s,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||j_,c[u])}function C2(a,e,n){const s=this.cache,o=e.length,c=Xc(n,o);dn(s,c)||(a.uniform1iv(this.addr,c),pn(s,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Z_,c[u])}function w2(a,e,n){const s=this.cache,o=e.length,c=Xc(n,o);dn(s,c)||(a.uniform1iv(this.addr,c),pn(s,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||K_,c[u])}function D2(a,e,n){const s=this.cache,o=e.length,c=Xc(n,o);dn(s,c)||(a.uniform1iv(this.addr,c),pn(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Y_,c[u])}function U2(a){switch(a){case 5126:return h2;case 35664:return d2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return v2;case 35676:return _2;case 5124:case 35670:return x2;case 35667:case 35671:return y2;case 35668:case 35672:return S2;case 35669:case 35673:return M2;case 5125:return E2;case 36294:return b2;case 36295:return T2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return w2;case 36289:case 36303:case 36311:case 36292:return D2}}class N2{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=f2(n.type)}}class L2{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U2(n.type)}}class O2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],s)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function qv(a,e){a.seq.push(e),a.map[e.id]=e}function P2(a,e,n){const s=a.name,o=s.length;for(Ih.lastIndex=0;;){const c=Ih.exec(s),u=Ih.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&u+2===o){qv(n,m===void 0?new N2(h,a,e):new L2(h,a,e));break}else{let g=n.map[h];g===void 0&&(g=new O2(h),qv(n,g)),n=g}}}class Lc{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);P2(c,u,this)}}setValue(e,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(e,s,o)}setOptional(e,n,s){const o=n[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,n,s,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const s=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&s.push(u)}return s}}function Wv(a,e,n){const s=a.createShader(e);return a.shaderSource(s,n),a.compileShader(s),s}const z2=37297;let B2=0;function I2(a,e){const n=a.split(`
`),s=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;s.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return s.join(`
`)}function F2(a){const e=Dt.getPrimaries(Dt.workingColorSpace),n=Dt.getPrimaries(a);let s;switch(e===n?s="":e===Ic&&n===Bc?s="LinearDisplayP3ToLinearSRGB":e===Bc&&n===Ic&&(s="LinearSRGBToLinearDisplayP3"),a){case Ii:case kc:return[s,"LinearTransferOETF"];case fn:case zd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[s,"LinearTransferOETF"]}}function jv(a,e,n){const s=a.getShaderParameter(e,a.COMPILE_STATUS),o=a.getShaderInfoLog(e).trim();if(s&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+I2(a.getShaderSource(e),u)}else return o}function H2(a,e){const n=F2(e);return`vec4 ${a}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function G2(a,e){let n;switch(e){case aE:n="Linear";break;case sE:n="Reinhard";break;case rE:n="OptimizedCineon";break;case lE:n="ACESFilmic";break;case cE:n="AgX";break;case uE:n="Neutral";break;case oE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ac=new ue;function V2(){Dt.getLuminanceCoefficients(Ac);const a=Ac.x.toFixed(4),e=Ac.y.toFixed(4),n=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function X2(a){const e=[];for(const n in a){const s=a[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function q2(a,e){const n={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return n}function Bl(a){return a!==""}function Yv(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(a){return a.replace(W2,Y2)}const j2=new Map;function Y2(a,e){let n=ot[e];if(n===void 0){const s=j2.get(e);if(s!==void 0)n=ot[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Td(n)}const Z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(a){return a.replace(Z2,K2)}function K2(a,e,n,s){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Qv(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q2(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===UM?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function J2(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ur:case Nr:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $2(a){let e="ENVMAP_MODE_REFLECTION";return a.envMap&&a.envMapMode===Nr&&(e="ENVMAP_MODE_REFRACTION"),e}function eR(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case S_:e="ENVMAP_BLENDING_MULTIPLY";break;case nE:e="ENVMAP_BLENDING_MIX";break;case iE:e="ENVMAP_BLENDING_ADD";break}return e}function tR(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function nR(a,e,n,s){const o=a.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=Q2(n),m=J2(n),v=$2(n),g=eR(n),_=tR(n),y=k2(n),E=X2(c),b=o.createProgram();let S,x,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Bl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Bl).join(`
`),x.length>0&&(x+=`
`)):(S=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),x=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xa?"#define TONE_MAPPING":"",n.toneMapping!==Xa?ot.tonemapping_pars_fragment:"",n.toneMapping!==Xa?G2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,H2("linearToOutputTexel",n.outputColorSpace),V2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bl).join(`
`)),u=Td(u),u=Yv(u,n),u=Zv(u,n),h=Td(h),h=Yv(h,n),h=Zv(h,n),u=Kv(u),h=Kv(h),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=N+S+u,D=N+x+h,I=Wv(o,o.VERTEX_SHADER,T),O=Wv(o,o.FRAGMENT_SHADER,D);o.attachShader(b,I),o.attachShader(b,O),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function L(H){if(a.debug.checkShaderErrors){const ee=o.getProgramInfoLog(b).trim(),$=o.getShaderInfoLog(I).trim(),W=o.getShaderInfoLog(O).trim();let J=!0,P=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(J=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,b,I,O);else{const X=jv(o,I,"vertex"),Y=jv(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ee+`
`+X+`
`+Y)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):($===""||W==="")&&(P=!1);P&&(H.diagnostics={runnable:J,programLog:ee,vertexShader:{log:$,prefix:S},fragmentShader:{log:W,prefix:x}})}o.deleteShader(I),o.deleteShader(O),k=new Lc(o,b),w=q2(o,b)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(b,z2)),R},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=O,this}let iR=0;class aR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new sR(e),n.set(e,s)),s}}class sR{constructor(e){this.id=iR++,this.code=e,this.usedTimes=0}}function rR(a,e,n,s,o,c,u){const h=new B_,p=new aR,m=new Set,v=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,R,H,ee,$){const W=ee.fog,J=$.geometry,P=w.isMeshStandardMaterial?ee.environment:null,X=(w.isMeshStandardMaterial?n:e).get(w.envMap||P),Y=X&&X.mapping===Vc?X.image.height:null,_e=E[w.type];w.precision!==null&&(y=o.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const Me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,B=Me!==void 0?Me.length:0;let se=0;J.morphAttributes.position!==void 0&&(se=1),J.morphAttributes.normal!==void 0&&(se=2),J.morphAttributes.color!==void 0&&(se=3);let ve,Z,fe,Se;if(_e){const Et=Oi[_e];ve=Et.vertexShader,Z=Et.fragmentShader}else ve=w.vertexShader,Z=w.fragmentShader,p.update(w),fe=p.getVertexShaderID(w),Se=p.getFragmentShaderID(w);const Ee=a.getRenderTarget(),Oe=$.isInstancedMesh===!0,Pe=$.isBatchedMesh===!0,tt=!!w.map,wt=!!w.matcap,V=!!X,Ht=!!w.aoMap,at=!!w.lightMap,gt=!!w.bumpMap,Ce=!!w.normalMap,it=!!w.displacementMap,Xe=!!w.emissiveMap,qe=!!w.metalnessMap,F=!!w.roughnessMap,C=w.anisotropy>0,oe=w.clearcoat>0,be=w.dispersion>0,xe=w.iridescence>0,ye=w.sheen>0,Ye=w.transmission>0,Ne=C&&!!w.anisotropyMap,ze=oe&&!!w.clearcoatMap,st=oe&&!!w.clearcoatNormalMap,Ae=oe&&!!w.clearcoatRoughnessMap,Be=xe&&!!w.iridescenceMap,vt=xe&&!!w.iridescenceThicknessMap,Je=ye&&!!w.sheenColorMap,De=ye&&!!w.sheenRoughnessMap,Ke=!!w.specularMap,Qe=!!w.specularColorMap,Gt=!!w.specularIntensityMap,j=Ye&&!!w.transmissionMap,Re=Ye&&!!w.thicknessMap,pe=!!w.gradientMap,ge=!!w.alphaMap,we=w.alphaTest>0,We=!!w.alphaHash,ht=!!w.extensions;let Ft=Xa;w.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ft=a.toneMapping);const on={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:ve,fragmentShader:Z,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Pe,batchingColor:Pe&&$._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&$.instanceColor!==null,instancingMorph:Oe&&$.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ii,alphaToCoverage:!!w.alphaToCoverage,map:tt,matcap:wt,envMap:V,envMapMode:V&&X.mapping,envMapCubeUVHeight:Y,aoMap:Ht,lightMap:at,bumpMap:gt,normalMap:Ce,displacementMap:_&&it,emissiveMap:Xe,normalMapObjectSpace:Ce&&w.normalMapType===pE,normalMapTangentSpace:Ce&&w.normalMapType===dE,metalnessMap:qe,roughnessMap:F,anisotropy:C,anisotropyMap:Ne,clearcoat:oe,clearcoatMap:ze,clearcoatNormalMap:st,clearcoatRoughnessMap:Ae,dispersion:be,iridescence:xe,iridescenceMap:Be,iridescenceThicknessMap:vt,sheen:ye,sheenColorMap:Je,sheenRoughnessMap:De,specularMap:Ke,specularColorMap:Qe,specularIntensityMap:Gt,transmission:Ye,transmissionMap:j,thicknessMap:Re,gradientMap:pe,opaque:w.transparent===!1&&w.blending===Cr&&w.alphaToCoverage===!1,alphaMap:ge,alphaTest:we,alphaHash:We,combine:w.combine,mapUv:tt&&b(w.map.channel),aoMapUv:Ht&&b(w.aoMap.channel),lightMapUv:at&&b(w.lightMap.channel),bumpMapUv:gt&&b(w.bumpMap.channel),normalMapUv:Ce&&b(w.normalMap.channel),displacementMapUv:it&&b(w.displacementMap.channel),emissiveMapUv:Xe&&b(w.emissiveMap.channel),metalnessMapUv:qe&&b(w.metalnessMap.channel),roughnessMapUv:F&&b(w.roughnessMap.channel),anisotropyMapUv:Ne&&b(w.anisotropyMap.channel),clearcoatMapUv:ze&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:st&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:De&&b(w.sheenRoughnessMap.channel),specularMapUv:Ke&&b(w.specularMap.channel),specularColorMapUv:Qe&&b(w.specularColorMap.channel),specularIntensityMapUv:Gt&&b(w.specularIntensityMap.channel),transmissionMapUv:j&&b(w.transmissionMap.channel),thicknessMapUv:Re&&b(w.thicknessMap.channel),alphaMapUv:ge&&b(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ce||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!J.attributes.uv&&(tt||ge),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:$.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ft,decodeVideoTexture:tt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ti,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ht&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&w.extensions.multiDraw===!0||Pe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return on.vertexUv1s=m.has(1),on.vertexUv2s=m.has(2),on.vertexUv3s=m.has(3),m.clear(),on}function x(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(N(R,w),T(R,w),R.push(a.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function N(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function T(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.skinning&&h.enable(4),R.morphTargets&&h.enable(5),R.morphNormals&&h.enable(6),R.morphColors&&h.enable(7),R.premultipliedAlpha&&h.enable(8),R.shadowMapEnabled&&h.enable(9),R.doubleSided&&h.enable(10),R.flipSided&&h.enable(11),R.useDepthPacking&&h.enable(12),R.dithering&&h.enable(13),R.transmission&&h.enable(14),R.sheen&&h.enable(15),R.opaque&&h.enable(16),R.pointsUvs&&h.enable(17),R.decodeVideoTexture&&h.enable(18),R.alphaToCoverage&&h.enable(19),w.push(h.mask)}function D(w){const R=E[w.type];let H;if(R){const ee=Oi[R];H=kE.clone(ee.uniforms)}else H=w.uniforms;return H}function I(w,R){let H;for(let ee=0,$=v.length;ee<$;ee++){const W=v[ee];if(W.cacheKey===R){H=W,++H.usedTimes;break}}return H===void 0&&(H=new nR(a,R,w,c),v.push(H)),H}function O(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function L(w){p.remove(w)}function k(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:I,releaseProgram:O,releaseShaderCache:L,programs:v,dispose:k}}function lR(){let a=new WeakMap;function e(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function n(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{get:e,remove:n,update:s,dispose:o}}function oR(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Jv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function $v(){const a=[];let e=0;const n=[],s=[],o=[];function c(){e=0,n.length=0,s.length=0,o.length=0}function u(g,_,y,E,b,S){let x=a[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:E,renderOrder:g.renderOrder,z:b,group:S},a[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=b,x.group=S),e++,x}function h(g,_,y,E,b,S){const x=u(g,_,y,E,b,S);y.transmission>0?s.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(g,_,y,E,b,S){const x=u(g,_,y,E,b,S);y.transmission>0?s.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function m(g,_){n.length>1&&n.sort(g||oR),s.length>1&&s.sort(_||Jv),o.length>1&&o.sort(_||Jv)}function v(){for(let g=e,_=a.length;g<_;g++){const y=a[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:h,unshift:p,finish:v,sort:m}}function cR(){let a=new WeakMap;function e(s,o){const c=a.get(s);let u;return c===void 0?(u=new $v,a.set(s,[u])):o>=c.length?(u=new $v,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function uR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new Ut};break;case"SpotLight":n={position:new ue,direction:new ue,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":n={color:new Ut,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return a[e.id]=n,n}}}function fR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let hR=0;function dR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function pR(a){const e=new uR,n=fR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ue);const o=new ue,c=new hn,u=new hn;function h(m){let v=0,g=0,_=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,E=0,b=0,S=0,x=0,N=0,T=0,D=0,I=0,O=0,L=0;m.sort(dR);for(let w=0,R=m.length;w<R;w++){const H=m[w],ee=H.color,$=H.intensity,W=H.distance,J=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=ee.r*$,g+=ee.g*$,_+=ee.b*$;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],$);L++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,Y=n.get(H);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=J,s.directionalShadowMatrix[y]=H.shadow.matrix,N++}s.directional[y]=P,y++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(ee).multiplyScalar($),P.distance=W,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[b]=P;const X=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,X.updateMatrices(H),H.castShadow&&O++),s.spotLightMatrix[b]=X.matrix,H.castShadow){const Y=n.get(H);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,s.spotShadow[b]=Y,s.spotShadowMap[b]=J,D++}b++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(ee).multiplyScalar($),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=P,S++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const X=H.shadow,Y=n.get(H);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=J,s.pointShadowMatrix[E]=H.shadow.matrix,T++}s.point[E]=P,E++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar($),P.groundColor.copy(H.groundColor).multiplyScalar($),s.hemi[x]=P,x++}}S>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==N||k.numPointShadows!==T||k.numSpotShadows!==D||k.numSpotMaps!==I||k.numLightProbes!==L)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=D+I-O,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=L,k.directionalLength=y,k.pointLength=E,k.spotLength=b,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=N,k.numPointShadows=T,k.numSpotShadows=D,k.numSpotMaps=I,k.numLightProbes=L,s.version=hR++)}function p(m,v){let g=0,_=0,y=0,E=0,b=0;const S=v.matrixWorldInverse;for(let x=0,N=m.length;x<N;x++){const T=m[x];if(T.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),g++}else if(T.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),y++}else if(T.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(S),u.identity(),c.copy(T.matrixWorld),c.premultiply(S),u.extractRotation(c),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),E++}else if(T.isPointLight){const D=s.point[_];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(S),_++}else if(T.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:s}}function e_(a){const e=new pR(a),n=[],s=[];function o(v){m.camera=v,n.length=0,s.length=0}function c(v){n.push(v)}function u(v){s.push(v)}function h(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function mR(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new e_(a),e.set(o,[h])):c>=u.length?(h=new e_(a),u.push(h)):h=u[c],h}function s(){e=new WeakMap}return{get:n,dispose:s}}class gR extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vR extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yR(a,e,n){let s=new q_;const o=new ut,c=new ut,u=new vn,h=new gR({depthPacking:hE}),p=new vR,m={},v=n.maxTextureSize,g={[ua]:_n,[_n]:ua,[ti]:ti},_=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:_R,fragmentShader:xR}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new ja;E.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ri(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let x=this.type;this.render=function(O,L,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const w=a.getRenderTarget(),R=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),ee=a.state;ee.setBlending(Bi),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const $=x!==la&&this.type===la,W=x===la&&this.type!==la;for(let J=0,P=O.length;J<P;J++){const X=O[J],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const _e=Y.getFrameExtents();if(o.multiply(_e),c.copy(Y.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/_e.x),o.x=c.x*_e.x,Y.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/_e.y),o.y=c.y*_e.y,Y.mapSize.y=c.y)),Y.map===null||$===!0||W===!0){const B=this.type!==la?{minFilter:pi,magFilter:pi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ci(o.x,o.y,B),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const Me=Y.getViewportCount();for(let B=0;B<Me;B++){const se=Y.getViewport(B);u.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),ee.viewport(u),Y.updateMatrices(X,B),s=Y.getFrustum(),D(L,k,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===la&&N(Y,k),Y.needsUpdate=!1}x=this.type,S.needsUpdate=!1,a.setRenderTarget(w,R,H)};function N(O,L){const k=e.update(b);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ci(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,a.setRenderTarget(O.mapPass),a.clear(),a.renderBufferDirect(L,null,k,_,b,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,a.setRenderTarget(O.map),a.clear(),a.renderBufferDirect(L,null,k,y,b,null)}function T(O,L,k,w){let R=null;const H=k.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)R=H;else if(R=k.isPointLight===!0?p:h,a.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ee=R.uuid,$=L.uuid;let W=m[ee];W===void 0&&(W={},m[ee]=W);let J=W[$];J===void 0&&(J=R.clone(),W[$]=J,L.addEventListener("dispose",I)),R=J}if(R.visible=L.visible,R.wireframe=L.wireframe,w===la?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:g[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=a.properties.get(R);ee.light=k}return R}function D(O,L,k,w,R){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===la)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,O.matrixWorld);const $=e.update(O),W=O.material;if(Array.isArray(W)){const J=$.groups;for(let P=0,X=J.length;P<X;P++){const Y=J[P],_e=W[Y.materialIndex];if(_e&&_e.visible){const Me=T(O,_e,w,R);O.onBeforeShadow(a,O,L,k,$,Me,Y),a.renderBufferDirect(k,null,$,Me,O,Y),O.onAfterShadow(a,O,L,k,$,Me,Y)}}}else if(W.visible){const J=T(O,W,w,R);O.onBeforeShadow(a,O,L,k,$,J,null),a.renderBufferDirect(k,null,$,J,O,null),O.onAfterShadow(a,O,L,k,$,J,null)}}const ee=O.children;for(let $=0,W=ee.length;$<W;$++)D(ee[$],L,k,w,R)}function I(O){O.target.removeEventListener("dispose",I);for(const k in m){const w=m[k],R=O.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function SR(a){function e(){let j=!1;const Re=new vn;let pe=null;const ge=new vn(0,0,0,0);return{setMask:function(we){pe!==we&&!j&&(a.colorMask(we,we,we,we),pe=we)},setLocked:function(we){j=we},setClear:function(we,We,ht,Ft,on){on===!0&&(we*=Ft,We*=Ft,ht*=Ft),Re.set(we,We,ht,Ft),ge.equals(Re)===!1&&(a.clearColor(we,We,ht,Ft),ge.copy(Re))},reset:function(){j=!1,pe=null,ge.set(-1,0,0,0)}}}function n(){let j=!1,Re=null,pe=null,ge=null;return{setTest:function(we){we?Se(a.DEPTH_TEST):Ee(a.DEPTH_TEST)},setMask:function(we){Re!==we&&!j&&(a.depthMask(we),Re=we)},setFunc:function(we){if(pe!==we){switch(we){case KM:a.depthFunc(a.NEVER);break;case y_:a.depthFunc(a.ALWAYS);break;case QM:a.depthFunc(a.LESS);break;case Pc:a.depthFunc(a.LEQUAL);break;case JM:a.depthFunc(a.EQUAL);break;case $M:a.depthFunc(a.GEQUAL);break;case eE:a.depthFunc(a.GREATER);break;case tE:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=we}},setLocked:function(we){j=we},setClear:function(we){ge!==we&&(a.clearDepth(we),ge=we)},reset:function(){j=!1,Re=null,pe=null,ge=null}}}function s(){let j=!1,Re=null,pe=null,ge=null,we=null,We=null,ht=null,Ft=null,on=null;return{setTest:function(Et){j||(Et?Se(a.STENCIL_TEST):Ee(a.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!j&&(a.stencilMask(Et),Re=Et)},setFunc:function(Et,qn,An){(pe!==Et||ge!==qn||we!==An)&&(a.stencilFunc(Et,qn,An),pe=Et,ge=qn,we=An)},setOp:function(Et,qn,An){(We!==Et||ht!==qn||Ft!==An)&&(a.stencilOp(Et,qn,An),We=Et,ht=qn,Ft=An)},setLocked:function(Et){j=Et},setClear:function(Et){on!==Et&&(a.clearStencil(Et),on=Et)},reset:function(){j=!1,Re=null,pe=null,ge=null,we=null,We=null,ht=null,Ft=null,on=null}}}const o=new e,c=new n,u=new s,h=new WeakMap,p=new WeakMap;let m={},v={},g=new WeakMap,_=[],y=null,E=!1,b=null,S=null,x=null,N=null,T=null,D=null,I=null,O=new Ut(0,0,0),L=0,k=!1,w=null,R=null,H=null,ee=null,$=null;const W=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,P=0;const X=a.getParameter(a.VERSION);X.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=P>=1):X.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=P>=2);let Y=null,_e={};const Me=a.getParameter(a.SCISSOR_BOX),B=a.getParameter(a.VIEWPORT),se=new vn().fromArray(Me),ve=new vn().fromArray(B);function Z(j,Re,pe,ge){const we=new Uint8Array(4),We=a.createTexture();a.bindTexture(j,We),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ht=0;ht<pe;ht++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,ge,0,a.RGBA,a.UNSIGNED_BYTE,we):a.texImage2D(Re+ht,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,we);return We}const fe={};fe[a.TEXTURE_2D]=Z(a.TEXTURE_2D,a.TEXTURE_2D,1),fe[a.TEXTURE_CUBE_MAP]=Z(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[a.TEXTURE_2D_ARRAY]=Z(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),fe[a.TEXTURE_3D]=Z(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Se(a.DEPTH_TEST),c.setFunc(Pc),gt(!1),Ce(lv),Se(a.CULL_FACE),Ht(Bi);function Se(j){m[j]!==!0&&(a.enable(j),m[j]=!0)}function Ee(j){m[j]!==!1&&(a.disable(j),m[j]=!1)}function Oe(j,Re){return v[j]!==Re?(a.bindFramebuffer(j,Re),v[j]=Re,j===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Re),j===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function Pe(j,Re){let pe=_,ge=!1;if(j){pe=g.get(Re),pe===void 0&&(pe=[],g.set(Re,pe));const we=j.textures;if(pe.length!==we.length||pe[0]!==a.COLOR_ATTACHMENT0){for(let We=0,ht=we.length;We<ht;We++)pe[We]=a.COLOR_ATTACHMENT0+We;pe.length=we.length,ge=!0}}else pe[0]!==a.BACK&&(pe[0]=a.BACK,ge=!0);ge&&a.drawBuffers(pe)}function tt(j){return y!==j?(a.useProgram(j),y=j,!0):!1}const wt={[ys]:a.FUNC_ADD,[LM]:a.FUNC_SUBTRACT,[OM]:a.FUNC_REVERSE_SUBTRACT};wt[PM]=a.MIN,wt[zM]=a.MAX;const V={[BM]:a.ZERO,[IM]:a.ONE,[FM]:a.SRC_COLOR,[qh]:a.SRC_ALPHA,[qM]:a.SRC_ALPHA_SATURATE,[kM]:a.DST_COLOR,[GM]:a.DST_ALPHA,[HM]:a.ONE_MINUS_SRC_COLOR,[Wh]:a.ONE_MINUS_SRC_ALPHA,[XM]:a.ONE_MINUS_DST_COLOR,[VM]:a.ONE_MINUS_DST_ALPHA,[WM]:a.CONSTANT_COLOR,[jM]:a.ONE_MINUS_CONSTANT_COLOR,[YM]:a.CONSTANT_ALPHA,[ZM]:a.ONE_MINUS_CONSTANT_ALPHA};function Ht(j,Re,pe,ge,we,We,ht,Ft,on,Et){if(j===Bi){E===!0&&(Ee(a.BLEND),E=!1);return}if(E===!1&&(Se(a.BLEND),E=!0),j!==NM){if(j!==b||Et!==k){if((S!==ys||T!==ys)&&(a.blendEquation(a.FUNC_ADD),S=ys,T=ys),Et)switch(j){case Cr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ov:a.blendFunc(a.ONE,a.ONE);break;case cv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case uv:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Cr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ov:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case cv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case uv:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}x=null,N=null,D=null,I=null,O.set(0,0,0),L=0,b=j,k=Et}return}we=we||Re,We=We||pe,ht=ht||ge,(Re!==S||we!==T)&&(a.blendEquationSeparate(wt[Re],wt[we]),S=Re,T=we),(pe!==x||ge!==N||We!==D||ht!==I)&&(a.blendFuncSeparate(V[pe],V[ge],V[We],V[ht]),x=pe,N=ge,D=We,I=ht),(Ft.equals(O)===!1||on!==L)&&(a.blendColor(Ft.r,Ft.g,Ft.b,on),O.copy(Ft),L=on),b=j,k=!1}function at(j,Re){j.side===ti?Ee(a.CULL_FACE):Se(a.CULL_FACE);let pe=j.side===_n;Re&&(pe=!pe),gt(pe),j.blending===Cr&&j.transparent===!1?Ht(Bi):Ht(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);const ge=j.stencilWrite;u.setTest(ge),ge&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Xe(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Se(a.SAMPLE_ALPHA_TO_COVERAGE):Ee(a.SAMPLE_ALPHA_TO_COVERAGE)}function gt(j){w!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),w=j)}function Ce(j){j!==wM?(Se(a.CULL_FACE),j!==R&&(j===lv?a.cullFace(a.BACK):j===DM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ee(a.CULL_FACE),R=j}function it(j){j!==H&&(J&&a.lineWidth(j),H=j)}function Xe(j,Re,pe){j?(Se(a.POLYGON_OFFSET_FILL),(ee!==Re||$!==pe)&&(a.polygonOffset(Re,pe),ee=Re,$=pe)):Ee(a.POLYGON_OFFSET_FILL)}function qe(j){j?Se(a.SCISSOR_TEST):Ee(a.SCISSOR_TEST)}function F(j){j===void 0&&(j=a.TEXTURE0+W-1),Y!==j&&(a.activeTexture(j),Y=j)}function C(j,Re,pe){pe===void 0&&(Y===null?pe=a.TEXTURE0+W-1:pe=Y);let ge=_e[pe];ge===void 0&&(ge={type:void 0,texture:void 0},_e[pe]=ge),(ge.type!==j||ge.texture!==Re)&&(Y!==pe&&(a.activeTexture(pe),Y=pe),a.bindTexture(j,Re||fe[j]),ge.type=j,ge.texture=Re)}function oe(){const j=_e[Y];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function be(){try{a.compressedTexImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{a.compressedTexImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{a.texSubImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{a.texSubImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ne(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function st(){try{a.texStorage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{a.texStorage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{a.texImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function vt(){try{a.texImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(j){se.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),se.copy(j))}function De(j){ve.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),ve.copy(j))}function Ke(j,Re){let pe=p.get(Re);pe===void 0&&(pe=new WeakMap,p.set(Re,pe));let ge=pe.get(j);ge===void 0&&(ge=a.getUniformBlockIndex(Re,j.name),pe.set(j,ge))}function Qe(j,Re){const ge=p.get(Re).get(j);h.get(Re)!==ge&&(a.uniformBlockBinding(Re,ge,j.__bindingPointIndex),h.set(Re,ge))}function Gt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),m={},Y=null,_e={},v={},g=new WeakMap,_=[],y=null,E=!1,b=null,S=null,x=null,N=null,T=null,D=null,I=null,O=new Ut(0,0,0),L=0,k=!1,w=null,R=null,H=null,ee=null,$=null,se.set(0,0,a.canvas.width,a.canvas.height),ve.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Se,disable:Ee,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:tt,setBlending:Ht,setMaterial:at,setFlipSided:gt,setCullFace:Ce,setLineWidth:it,setPolygonOffset:Xe,setScissorTest:qe,activeTexture:F,bindTexture:C,unbindTexture:oe,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Be,texImage3D:vt,updateUBOMapping:Ke,uniformBlockBinding:Qe,texStorage2D:st,texStorage3D:Ae,texSubImage2D:ye,texSubImage3D:Ye,compressedTexSubImage2D:Ne,compressedTexSubImage3D:ze,scissor:Je,viewport:De,reset:Gt}}function t_(a,e,n,s){const o=MR(s);switch(n){case A_:return a*e;case C_:return a*e;case w_:return a*e*2;case D_:return a*e/o.components*o.byteLength;case Ld:return a*e/o.components*o.byteLength;case U_:return a*e*2/o.components*o.byteLength;case Od:return a*e*2/o.components*o.byteLength;case R_:return a*e*3/o.components*o.byteLength;case Ai:return a*e*4/o.components*o.byteLength;case Pd:return a*e*4/o.components*o.byteLength;case Cc:case wc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Uc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Jh:case ed:return Math.max(a,16)*Math.max(e,8)/4;case Qh:case $h:return Math.max(a,8)*Math.max(e,8)/2;case td:case nd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case id:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case rd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case od:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ud:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case fd:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case hd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case dd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case pd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case md:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Nc:case _d:case xd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case N_:case yd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Sd:case Md:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MR(a){switch(a){case ii:case E_:return{byteLength:1,components:1};case Hl:case b_:case Gl:return{byteLength:2,components:1};case Ud:case Nd:return{byteLength:2,components:4};case qa:case Dd:case oa:return{byteLength:4,components:1};case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function ER(a,e,n,s,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,v=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,C){return y?new OffscreenCanvas(F,C):Hc("canvas")}function b(F,C,oe){let be=1;const xe=qe(F);if((xe.width>oe||xe.height>oe)&&(be=oe/Math.max(xe.width,xe.height)),be<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ye=Math.floor(be*xe.width),Ye=Math.floor(be*xe.height);g===void 0&&(g=E(ye,Ye));const Ne=C?E(ye,Ye):g;return Ne.width=ye,Ne.height=Ye,Ne.getContext("2d").drawImage(F,0,0,ye,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ye+"x"+Ye+")."),Ne}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),F;return F}function S(F){return F.generateMipmaps&&F.minFilter!==pi&&F.minFilter!==bn}function x(F){a.generateMipmap(F)}function N(F,C,oe,be,xe=!1){if(F!==null){if(a[F]!==void 0)return a[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ye=C;if(C===a.RED&&(oe===a.FLOAT&&(ye=a.R32F),oe===a.HALF_FLOAT&&(ye=a.R16F),oe===a.UNSIGNED_BYTE&&(ye=a.R8)),C===a.RED_INTEGER&&(oe===a.UNSIGNED_BYTE&&(ye=a.R8UI),oe===a.UNSIGNED_SHORT&&(ye=a.R16UI),oe===a.UNSIGNED_INT&&(ye=a.R32UI),oe===a.BYTE&&(ye=a.R8I),oe===a.SHORT&&(ye=a.R16I),oe===a.INT&&(ye=a.R32I)),C===a.RG&&(oe===a.FLOAT&&(ye=a.RG32F),oe===a.HALF_FLOAT&&(ye=a.RG16F),oe===a.UNSIGNED_BYTE&&(ye=a.RG8)),C===a.RG_INTEGER&&(oe===a.UNSIGNED_BYTE&&(ye=a.RG8UI),oe===a.UNSIGNED_SHORT&&(ye=a.RG16UI),oe===a.UNSIGNED_INT&&(ye=a.RG32UI),oe===a.BYTE&&(ye=a.RG8I),oe===a.SHORT&&(ye=a.RG16I),oe===a.INT&&(ye=a.RG32I)),C===a.RGB&&oe===a.UNSIGNED_INT_5_9_9_9_REV&&(ye=a.RGB9_E5),C===a.RGBA){const Ye=xe?zc:Dt.getTransfer(be);oe===a.FLOAT&&(ye=a.RGBA32F),oe===a.HALF_FLOAT&&(ye=a.RGBA16F),oe===a.UNSIGNED_BYTE&&(ye=Ye===Xt?a.SRGB8_ALPHA8:a.RGBA8),oe===a.UNSIGNED_SHORT_4_4_4_4&&(ye=a.RGBA4),oe===a.UNSIGNED_SHORT_5_5_5_1&&(ye=a.RGB5_A1)}return(ye===a.R16F||ye===a.R32F||ye===a.RG16F||ye===a.RG32F||ye===a.RGBA16F||ye===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function T(F,C){let oe;return F?C===null||C===qa||C===As?oe=a.DEPTH24_STENCIL8:C===oa?oe=a.DEPTH32F_STENCIL8:C===Hl&&(oe=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===qa||C===As?oe=a.DEPTH_COMPONENT24:C===oa?oe=a.DEPTH_COMPONENT32F:C===Hl&&(oe=a.DEPTH_COMPONENT16),oe}function D(F,C){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==pi&&F.minFilter!==bn?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function I(F){const C=F.target;C.removeEventListener("dispose",I),L(C),C.isVideoTexture&&v.delete(C)}function O(F){const C=F.target;C.removeEventListener("dispose",O),w(C)}function L(F){const C=s.get(F);if(C.__webglInit===void 0)return;const oe=F.source,be=_.get(oe);if(be){const xe=be[C.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&k(F),Object.keys(be).length===0&&_.delete(oe)}s.remove(F)}function k(F){const C=s.get(F);a.deleteTexture(C.__webglTexture);const oe=F.source,be=_.get(oe);delete be[C.__cacheKey],u.memory.textures--}function w(F){const C=s.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(C.__webglFramebuffer[be]))for(let xe=0;xe<C.__webglFramebuffer[be].length;xe++)a.deleteFramebuffer(C.__webglFramebuffer[be][xe]);else a.deleteFramebuffer(C.__webglFramebuffer[be]);C.__webglDepthbuffer&&a.deleteRenderbuffer(C.__webglDepthbuffer[be])}else{if(Array.isArray(C.__webglFramebuffer))for(let be=0;be<C.__webglFramebuffer.length;be++)a.deleteFramebuffer(C.__webglFramebuffer[be]);else a.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&a.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&a.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let be=0;be<C.__webglColorRenderbuffer.length;be++)C.__webglColorRenderbuffer[be]&&a.deleteRenderbuffer(C.__webglColorRenderbuffer[be]);C.__webglDepthRenderbuffer&&a.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const oe=F.textures;for(let be=0,xe=oe.length;be<xe;be++){const ye=s.get(oe[be]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),u.memory.textures--),s.remove(oe[be])}s.remove(F)}let R=0;function H(){R=0}function ee(){const F=R;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),R+=1,F}function $(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function W(F,C){const oe=s.get(F);if(F.isVideoTexture&&it(F),F.isRenderTargetTexture===!1&&F.version>0&&oe.__version!==F.version){const be=F.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(oe,F,C);return}}n.bindTexture(a.TEXTURE_2D,oe.__webglTexture,a.TEXTURE0+C)}function J(F,C){const oe=s.get(F);if(F.version>0&&oe.__version!==F.version){ve(oe,F,C);return}n.bindTexture(a.TEXTURE_2D_ARRAY,oe.__webglTexture,a.TEXTURE0+C)}function P(F,C){const oe=s.get(F);if(F.version>0&&oe.__version!==F.version){ve(oe,F,C);return}n.bindTexture(a.TEXTURE_3D,oe.__webglTexture,a.TEXTURE0+C)}function X(F,C){const oe=s.get(F);if(F.version>0&&oe.__version!==F.version){Z(oe,F,C);return}n.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture,a.TEXTURE0+C)}const Y={[Zh]:a.REPEAT,[Ms]:a.CLAMP_TO_EDGE,[Kh]:a.MIRRORED_REPEAT},_e={[pi]:a.NEAREST,[fE]:a.NEAREST_MIPMAP_NEAREST,[sc]:a.NEAREST_MIPMAP_LINEAR,[bn]:a.LINEAR,[hh]:a.LINEAR_MIPMAP_NEAREST,[Es]:a.LINEAR_MIPMAP_LINEAR},Me={[mE]:a.NEVER,[SE]:a.ALWAYS,[gE]:a.LESS,[L_]:a.LEQUAL,[vE]:a.EQUAL,[yE]:a.GEQUAL,[_E]:a.GREATER,[xE]:a.NOTEQUAL};function B(F,C){if(C.type===oa&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===bn||C.magFilter===hh||C.magFilter===sc||C.magFilter===Es||C.minFilter===bn||C.minFilter===hh||C.minFilter===sc||C.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,Y[C.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,Y[C.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,Y[C.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,_e[C.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,_e[C.minFilter]),C.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,Me[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===pi||C.minFilter!==sc&&C.minFilter!==Es||C.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");a.texParameterf(F,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function se(F,C){let oe=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",I));const be=C.source;let xe=_.get(be);xe===void 0&&(xe={},_.set(be,xe));const ye=$(C);if(ye!==F.__cacheKey){xe[ye]===void 0&&(xe[ye]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,oe=!0),xe[ye].usedTimes++;const Ye=xe[F.__cacheKey];Ye!==void 0&&(xe[F.__cacheKey].usedTimes--,Ye.usedTimes===0&&k(C)),F.__cacheKey=ye,F.__webglTexture=xe[ye].texture}return oe}function ve(F,C,oe){let be=a.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(be=a.TEXTURE_2D_ARRAY),C.isData3DTexture&&(be=a.TEXTURE_3D);const xe=se(F,C),ye=C.source;n.bindTexture(be,F.__webglTexture,a.TEXTURE0+oe);const Ye=s.get(ye);if(ye.version!==Ye.__version||xe===!0){n.activeTexture(a.TEXTURE0+oe);const Ne=Dt.getPrimaries(Dt.workingColorSpace),ze=C.colorSpace===Pi?null:Dt.getPrimaries(C.colorSpace),st=C.colorSpace===Pi||Ne===ze?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,C.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,C.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Ae=b(C.image,!1,o.maxTextureSize);Ae=Xe(C,Ae);const Be=c.convert(C.format,C.colorSpace),vt=c.convert(C.type);let Je=N(C.internalFormat,Be,vt,C.colorSpace,C.isVideoTexture);B(be,C);let De;const Ke=C.mipmaps,Qe=C.isVideoTexture!==!0,Gt=Ye.__version===void 0||xe===!0,j=ye.dataReady,Re=D(C,Ae);if(C.isDepthTexture)Je=T(C.format===Rs,C.type),Gt&&(Qe?n.texStorage2D(a.TEXTURE_2D,1,Je,Ae.width,Ae.height):n.texImage2D(a.TEXTURE_2D,0,Je,Ae.width,Ae.height,0,Be,vt,null));else if(C.isDataTexture)if(Ke.length>0){Qe&&Gt&&n.texStorage2D(a.TEXTURE_2D,Re,Je,Ke[0].width,Ke[0].height);for(let pe=0,ge=Ke.length;pe<ge;pe++)De=Ke[pe],Qe?j&&n.texSubImage2D(a.TEXTURE_2D,pe,0,0,De.width,De.height,Be,vt,De.data):n.texImage2D(a.TEXTURE_2D,pe,Je,De.width,De.height,0,Be,vt,De.data);C.generateMipmaps=!1}else Qe?(Gt&&n.texStorage2D(a.TEXTURE_2D,Re,Je,Ae.width,Ae.height),j&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Be,vt,Ae.data)):n.texImage2D(a.TEXTURE_2D,0,Je,Ae.width,Ae.height,0,Be,vt,Ae.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Qe&&Gt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Je,Ke[0].width,Ke[0].height,Ae.depth);for(let pe=0,ge=Ke.length;pe<ge;pe++)if(De=Ke[pe],C.format!==Ai)if(Be!==null)if(Qe){if(j)if(C.layerUpdates.size>0){const we=t_(De.width,De.height,C.format,C.type);for(const We of C.layerUpdates){const ht=De.data.subarray(We*we/De.data.BYTES_PER_ELEMENT,(We+1)*we/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,We,De.width,De.height,1,Be,ht,0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,Ae.depth,Be,De.data,0,0)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,pe,Je,De.width,De.height,Ae.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?j&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,Ae.depth,Be,vt,De.data):n.texImage3D(a.TEXTURE_2D_ARRAY,pe,Je,De.width,De.height,Ae.depth,0,Be,vt,De.data)}else{Qe&&Gt&&n.texStorage2D(a.TEXTURE_2D,Re,Je,Ke[0].width,Ke[0].height);for(let pe=0,ge=Ke.length;pe<ge;pe++)De=Ke[pe],C.format!==Ai?Be!==null?Qe?j&&n.compressedTexSubImage2D(a.TEXTURE_2D,pe,0,0,De.width,De.height,Be,De.data):n.compressedTexImage2D(a.TEXTURE_2D,pe,Je,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?j&&n.texSubImage2D(a.TEXTURE_2D,pe,0,0,De.width,De.height,Be,vt,De.data):n.texImage2D(a.TEXTURE_2D,pe,Je,De.width,De.height,0,Be,vt,De.data)}else if(C.isDataArrayTexture)if(Qe){if(Gt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Je,Ae.width,Ae.height,Ae.depth),j)if(C.layerUpdates.size>0){const pe=t_(Ae.width,Ae.height,C.format,C.type);for(const ge of C.layerUpdates){const we=Ae.data.subarray(ge*pe/Ae.data.BYTES_PER_ELEMENT,(ge+1)*pe/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Be,vt,we)}C.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Be,vt,Ae.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Je,Ae.width,Ae.height,Ae.depth,0,Be,vt,Ae.data);else if(C.isData3DTexture)Qe?(Gt&&n.texStorage3D(a.TEXTURE_3D,Re,Je,Ae.width,Ae.height,Ae.depth),j&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Be,vt,Ae.data)):n.texImage3D(a.TEXTURE_3D,0,Je,Ae.width,Ae.height,Ae.depth,0,Be,vt,Ae.data);else if(C.isFramebufferTexture){if(Gt)if(Qe)n.texStorage2D(a.TEXTURE_2D,Re,Je,Ae.width,Ae.height);else{let pe=Ae.width,ge=Ae.height;for(let we=0;we<Re;we++)n.texImage2D(a.TEXTURE_2D,we,Je,pe,ge,0,Be,vt,null),pe>>=1,ge>>=1}}else if(Ke.length>0){if(Qe&&Gt){const pe=qe(Ke[0]);n.texStorage2D(a.TEXTURE_2D,Re,Je,pe.width,pe.height)}for(let pe=0,ge=Ke.length;pe<ge;pe++)De=Ke[pe],Qe?j&&n.texSubImage2D(a.TEXTURE_2D,pe,0,0,Be,vt,De):n.texImage2D(a.TEXTURE_2D,pe,Je,Be,vt,De);C.generateMipmaps=!1}else if(Qe){if(Gt){const pe=qe(Ae);n.texStorage2D(a.TEXTURE_2D,Re,Je,pe.width,pe.height)}j&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Be,vt,Ae)}else n.texImage2D(a.TEXTURE_2D,0,Je,Be,vt,Ae);S(C)&&x(be),Ye.__version=ye.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function Z(F,C,oe){if(C.image.length!==6)return;const be=se(F,C),xe=C.source;n.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+oe);const ye=s.get(xe);if(xe.version!==ye.__version||be===!0){n.activeTexture(a.TEXTURE0+oe);const Ye=Dt.getPrimaries(Dt.workingColorSpace),Ne=C.colorSpace===Pi?null:Dt.getPrimaries(C.colorSpace),ze=C.colorSpace===Pi||Ye===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,C.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,C.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const st=C.isCompressedTexture||C.image[0].isCompressedTexture,Ae=C.image[0]&&C.image[0].isDataTexture,Be=[];for(let ge=0;ge<6;ge++)!st&&!Ae?Be[ge]=b(C.image[ge],!0,o.maxCubemapSize):Be[ge]=Ae?C.image[ge].image:C.image[ge],Be[ge]=Xe(C,Be[ge]);const vt=Be[0],Je=c.convert(C.format,C.colorSpace),De=c.convert(C.type),Ke=N(C.internalFormat,Je,De,C.colorSpace),Qe=C.isVideoTexture!==!0,Gt=ye.__version===void 0||be===!0,j=xe.dataReady;let Re=D(C,vt);B(a.TEXTURE_CUBE_MAP,C);let pe;if(st){Qe&&Gt&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Re,Ke,vt.width,vt.height);for(let ge=0;ge<6;ge++){pe=Be[ge].mipmaps;for(let we=0;we<pe.length;we++){const We=pe[we];C.format!==Ai?Je!==null?Qe?j&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,We.width,We.height,Je,We.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,Ke,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,We.width,We.height,Je,De,We.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,Ke,We.width,We.height,0,Je,De,We.data)}}}else{if(pe=C.mipmaps,Qe&&Gt){pe.length>0&&Re++;const ge=qe(Be[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Re,Ke,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){Qe?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Be[ge].width,Be[ge].height,Je,De,Be[ge].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ke,Be[ge].width,Be[ge].height,0,Je,De,Be[ge].data);for(let we=0;we<pe.length;we++){const ht=pe[we].image[ge].image;Qe?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,ht.width,ht.height,Je,De,ht.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,Ke,ht.width,ht.height,0,Je,De,ht.data)}}else{Qe?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Je,De,Be[ge]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ke,Je,De,Be[ge]);for(let we=0;we<pe.length;we++){const We=pe[we];Qe?j&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,Je,De,We.image[ge]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,Ke,Je,De,We.image[ge])}}}S(C)&&x(a.TEXTURE_CUBE_MAP),ye.__version=xe.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function fe(F,C,oe,be,xe,ye){const Ye=c.convert(oe.format,oe.colorSpace),Ne=c.convert(oe.type),ze=N(oe.internalFormat,Ye,Ne,oe.colorSpace);if(!s.get(C).__hasExternalTextures){const Ae=Math.max(1,C.width>>ye),Be=Math.max(1,C.height>>ye);xe===a.TEXTURE_3D||xe===a.TEXTURE_2D_ARRAY?n.texImage3D(xe,ye,ze,Ae,Be,C.depth,0,Ye,Ne,null):n.texImage2D(xe,ye,ze,Ae,Be,0,Ye,Ne,null)}n.bindFramebuffer(a.FRAMEBUFFER,F),Ce(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,be,xe,s.get(oe).__webglTexture,0,gt(C)):(xe===a.TEXTURE_2D||xe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,be,xe,s.get(oe).__webglTexture,ye),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Se(F,C,oe){if(a.bindRenderbuffer(a.RENDERBUFFER,F),C.depthBuffer){const be=C.depthTexture,xe=be&&be.isDepthTexture?be.type:null,ye=T(C.stencilBuffer,xe),Ye=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=gt(C);Ce(C)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ne,ye,C.width,C.height):oe?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ne,ye,C.width,C.height):a.renderbufferStorage(a.RENDERBUFFER,ye,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ye,a.RENDERBUFFER,F)}else{const be=C.textures;for(let xe=0;xe<be.length;xe++){const ye=be[xe],Ye=c.convert(ye.format,ye.colorSpace),Ne=c.convert(ye.type),ze=N(ye.internalFormat,Ye,Ne,ye.colorSpace),st=gt(C);oe&&Ce(C)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,st,ze,C.width,C.height):Ce(C)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,st,ze,C.width,C.height):a.renderbufferStorage(a.RENDERBUFFER,ze,C.width,C.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ee(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),W(C.depthTexture,0);const be=s.get(C.depthTexture).__webglTexture,xe=gt(C);if(C.depthTexture.format===wr)Ce(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,be,0,xe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,be,0);else if(C.depthTexture.format===Rs)Ce(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,be,0,xe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Oe(F){const C=s.get(F),oe=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");Ee(C.__webglFramebuffer,F)}else if(oe){C.__webglDepthbuffer=[];for(let be=0;be<6;be++)n.bindFramebuffer(a.FRAMEBUFFER,C.__webglFramebuffer[be]),C.__webglDepthbuffer[be]=a.createRenderbuffer(),Se(C.__webglDepthbuffer[be],F,!1)}else n.bindFramebuffer(a.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=a.createRenderbuffer(),Se(C.__webglDepthbuffer,F,!1);n.bindFramebuffer(a.FRAMEBUFFER,null)}function Pe(F,C,oe){const be=s.get(F);C!==void 0&&fe(be.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),oe!==void 0&&Oe(F)}function tt(F){const C=F.texture,oe=s.get(F),be=s.get(C);F.addEventListener("dispose",O);const xe=F.textures,ye=F.isWebGLCubeRenderTarget===!0,Ye=xe.length>1;if(Ye||(be.__webglTexture===void 0&&(be.__webglTexture=a.createTexture()),be.__version=C.version,u.memory.textures++),ye){oe.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0){oe.__webglFramebuffer[Ne]=[];for(let ze=0;ze<C.mipmaps.length;ze++)oe.__webglFramebuffer[Ne][ze]=a.createFramebuffer()}else oe.__webglFramebuffer[Ne]=a.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)oe.__webglFramebuffer[Ne]=a.createFramebuffer()}else oe.__webglFramebuffer=a.createFramebuffer();if(Ye)for(let Ne=0,ze=xe.length;Ne<ze;Ne++){const st=s.get(xe[Ne]);st.__webglTexture===void 0&&(st.__webglTexture=a.createTexture(),u.memory.textures++)}if(F.samples>0&&Ce(F)===!1){oe.__webglMultisampledFramebuffer=a.createFramebuffer(),oe.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Ne=0;Ne<xe.length;Ne++){const ze=xe[Ne];oe.__webglColorRenderbuffer[Ne]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,oe.__webglColorRenderbuffer[Ne]);const st=c.convert(ze.format,ze.colorSpace),Ae=c.convert(ze.type),Be=N(ze.internalFormat,st,Ae,ze.colorSpace,F.isXRRenderTarget===!0),vt=gt(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,vt,Be,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,oe.__webglColorRenderbuffer[Ne])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&(oe.__webglDepthRenderbuffer=a.createRenderbuffer(),Se(oe.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ye){n.bindTexture(a.TEXTURE_CUBE_MAP,be.__webglTexture),B(a.TEXTURE_CUBE_MAP,C);for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0)for(let ze=0;ze<C.mipmaps.length;ze++)fe(oe.__webglFramebuffer[Ne][ze],F,C,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ze);else fe(oe.__webglFramebuffer[Ne],F,C,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(C)&&x(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ye){for(let Ne=0,ze=xe.length;Ne<ze;Ne++){const st=xe[Ne],Ae=s.get(st);n.bindTexture(a.TEXTURE_2D,Ae.__webglTexture),B(a.TEXTURE_2D,st),fe(oe.__webglFramebuffer,F,st,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,0),S(st)&&x(a.TEXTURE_2D)}n.unbindTexture()}else{let Ne=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ne,be.__webglTexture),B(Ne,C),C.mipmaps&&C.mipmaps.length>0)for(let ze=0;ze<C.mipmaps.length;ze++)fe(oe.__webglFramebuffer[ze],F,C,a.COLOR_ATTACHMENT0,Ne,ze);else fe(oe.__webglFramebuffer,F,C,a.COLOR_ATTACHMENT0,Ne,0);S(C)&&x(Ne),n.unbindTexture()}F.depthBuffer&&Oe(F)}function wt(F){const C=F.textures;for(let oe=0,be=C.length;oe<be;oe++){const xe=C[oe];if(S(xe)){const ye=F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Ye=s.get(xe).__webglTexture;n.bindTexture(ye,Ye),x(ye),n.unbindTexture()}}}const V=[],Ht=[];function at(F){if(F.samples>0){if(Ce(F)===!1){const C=F.textures,oe=F.width,be=F.height;let xe=a.COLOR_BUFFER_BIT;const ye=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ye=s.get(F),Ne=C.length>1;if(Ne)for(let ze=0;ze<C.length;ze++)n.bindFramebuffer(a.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ze,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ye.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ze,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let ze=0;ze<C.length;ze++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xe|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xe|=a.STENCIL_BUFFER_BIT)),Ne){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ye.__webglColorRenderbuffer[ze]);const st=s.get(C[ze]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,st,0)}a.blitFramebuffer(0,0,oe,be,0,0,oe,be,xe,a.NEAREST),p===!0&&(V.length=0,Ht.length=0,V.push(a.COLOR_ATTACHMENT0+ze),F.depthBuffer&&F.resolveDepthBuffer===!1&&(V.push(ye),Ht.push(ye),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Ht)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,V))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ne)for(let ze=0;ze<C.length;ze++){n.bindFramebuffer(a.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ze,a.RENDERBUFFER,Ye.__webglColorRenderbuffer[ze]);const st=s.get(C[ze]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ye.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ze,a.TEXTURE_2D,st,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const C=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[C])}}}function gt(F){return Math.min(o.maxSamples,F.samples)}function Ce(F){const C=s.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function it(F){const C=u.render.frame;v.get(F)!==C&&(v.set(F,C),F.update())}function Xe(F,C){const oe=F.colorSpace,be=F.format,xe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||oe!==Ii&&oe!==Pi&&(Dt.getTransfer(oe)===Xt?(be!==Ai||xe!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),C}function qe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=P,this.setTextureCube=X,this.rebindTextures=Pe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ce}function bR(a,e){function n(s,o=Pi){let c;const u=Dt.getTransfer(o);if(s===ii)return a.UNSIGNED_BYTE;if(s===Ud)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Nd)return a.UNSIGNED_SHORT_5_5_5_1;if(s===T_)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===E_)return a.BYTE;if(s===b_)return a.SHORT;if(s===Hl)return a.UNSIGNED_SHORT;if(s===Dd)return a.INT;if(s===qa)return a.UNSIGNED_INT;if(s===oa)return a.FLOAT;if(s===Gl)return a.HALF_FLOAT;if(s===A_)return a.ALPHA;if(s===R_)return a.RGB;if(s===Ai)return a.RGBA;if(s===C_)return a.LUMINANCE;if(s===w_)return a.LUMINANCE_ALPHA;if(s===wr)return a.DEPTH_COMPONENT;if(s===Rs)return a.DEPTH_STENCIL;if(s===D_)return a.RED;if(s===Ld)return a.RED_INTEGER;if(s===U_)return a.RG;if(s===Od)return a.RG_INTEGER;if(s===Pd)return a.RGBA_INTEGER;if(s===Cc||s===wc||s===Dc||s===Uc)if(u===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Cc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Cc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qh||s===Jh||s===$h||s===ed)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$h)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===td||s===nd||s===id)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===td||s===nd)return u===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===id)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ad||s===sd||s===rd||s===ld||s===od||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===vd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ad)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ld)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===od)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ud)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===md)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nc||s===_d||s===xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Nc)return u===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===N_||s===yd||s===Sd||s===Md)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Nc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Md)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===As?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:n}}class TR extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AR={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const b of e.hand.values()){const S=n.getJointPose(b,s),x=this._getHandJoint(m,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],_=v.position.distanceTo(g.position),y=.02,E=.005;m.inputState.pinching&&_>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AR)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Rc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const RR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,s){if(this.texture===null){const o=new Tn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=s.depthNear||n.depthFar!=s.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new gi({vertexShader:RR,fragmentShader:CR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ri(new jl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DR extends Wa{constructor(e,n){super();const s=this;let o=null,c=1,u=null,h="local-floor",p=1,m=null,v=null,g=null,_=null,y=null,E=null;const b=new wR,S=n.getContextAttributes();let x=null,N=null;const T=[],D=[],I=new ut;let O=null;const L=new di;L.layers.enable(1),L.viewport=new vn;const k=new di;k.layers.enable(2),k.viewport=new vn;const w=[L,k],R=new TR;R.layers.enable(1),R.layers.enable(2);let H=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=T[Z];return fe===void 0&&(fe=new Fh,T[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=T[Z];return fe===void 0&&(fe=new Fh,T[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=T[Z];return fe===void 0&&(fe=new Fh,T[Z]=fe),fe.getHandSpace()};function $(Z){const fe=D.indexOf(Z.inputSource);if(fe===-1)return;const Se=T[fe];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,m||u),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",W),o.removeEventListener("inputsourceschange",J);for(let Z=0;Z<T.length;Z++){const fe=D[Z];fe!==null&&(D[Z]=null,T[Z].disconnect(fe))}H=null,ee=null,b.reset(),e.setRenderTarget(x),y=null,_=null,g=null,o=null,N=null,ve.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",W),o.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(I),o.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Ci(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Se=null,Ee=null;S.depth&&(Ee=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=S.stencil?Rs:wr,Se=S.stencil?As:qa);const Oe={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:c};g=new XRWebGLBinding(o,n),_=g.createProjectionLayer(Oe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Ci(_.textureWidth,_.textureHeight,{format:Ai,type:ii,depthTexture:new Hd(_.textureWidth,_.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(h),ve.setContext(o),ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function J(Z){for(let fe=0;fe<Z.removed.length;fe++){const Se=Z.removed[fe],Ee=D.indexOf(Se);Ee>=0&&(D[Ee]=null,T[Ee].disconnect(Se))}for(let fe=0;fe<Z.added.length;fe++){const Se=Z.added[fe];let Ee=D.indexOf(Se);if(Ee===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=D.length){D.push(Se),Ee=Pe;break}else if(D[Pe]===null){D[Pe]=Se,Ee=Pe;break}if(Ee===-1)break}const Oe=T[Ee];Oe&&Oe.connect(Se)}}const P=new ue,X=new ue;function Y(Z,fe,Se){P.setFromMatrixPosition(fe.matrixWorld),X.setFromMatrixPosition(Se.matrixWorld);const Ee=P.distanceTo(X),Oe=fe.projectionMatrix.elements,Pe=Se.projectionMatrix.elements,tt=Oe[14]/(Oe[10]-1),wt=Oe[14]/(Oe[10]+1),V=(Oe[9]+1)/Oe[5],Ht=(Oe[9]-1)/Oe[5],at=(Oe[8]-1)/Oe[0],gt=(Pe[8]+1)/Pe[0],Ce=tt*at,it=tt*gt,Xe=Ee/(-at+gt),qe=Xe*-at;fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qe),Z.translateZ(Xe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const F=tt+Xe,C=wt+Xe,oe=Ce-qe,be=it+(Ee-qe),xe=V*wt/C*F,ye=Ht*wt/C*F;Z.projectionMatrix.makePerspective(oe,be,xe,ye,F,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function _e(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;b.texture!==null&&(Z.near=b.depthNear,Z.far=b.depthFar),R.near=k.near=L.near=Z.near,R.far=k.far=L.far=Z.far,(H!==R.near||ee!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,ee=R.far,L.near=H,L.far=ee,k.near=H,k.far=ee,L.updateProjectionMatrix(),k.updateProjectionMatrix(),Z.updateProjectionMatrix());const fe=Z.parent,Se=R.cameras;_e(R,fe);for(let Ee=0;Ee<Se.length;Ee++)_e(Se[Ee],fe);Se.length===2?Y(R,L,k):R.projectionMatrix.copy(L.projectionMatrix),Me(Z,R,fe)};function Me(Z,fe,Se){Se===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=bd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(Z){p=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let B=null;function se(Z,fe){if(v=fe.getViewerPose(m||u),E=fe,v!==null){const Se=v.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Ee=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,Ee=!0);for(let Pe=0;Pe<Se.length;Pe++){const tt=Se[Pe];let wt=null;if(y!==null)wt=y.getViewport(tt);else{const Ht=g.getViewSubImage(_,tt);wt=Ht.viewport,Pe===0&&(e.setRenderTargetTextures(N,Ht.colorTexture,_.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(N))}let V=w[Pe];V===void 0&&(V=new di,V.layers.enable(Pe),V.viewport=new vn,w[Pe]=V),V.matrix.fromArray(tt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(tt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(wt.x,wt.y,wt.width,wt.height),Pe===0&&(R.matrix.copy(V.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ee===!0&&R.cameras.push(V)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Pe=g.getDepthInformation(Se[0]);Pe&&Pe.isValid&&Pe.texture&&b.init(e,Pe,o.renderState)}}for(let Se=0;Se<T.length;Se++){const Ee=D[Se],Oe=T[Se];Ee!==null&&Oe!==void 0&&Oe.update(Ee,fe,m||u)}B&&B(Z,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const ve=new W_;ve.setAnimationLoop(se),this.setAnimationLoop=function(Z){B=Z},this.dispose=function(){}}}const vs=new fa,UR=new hn;function NR(a,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,V_(a)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,N,T,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),g(S,x)):x.isMeshPhongMaterial?(c(S,x),v(S,x)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,D)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?p(S,x,N,T):x.isSpriteMaterial?m(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===_n&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===_n&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const N=e.get(x),T=N.envMap,D=N.envMapRotation;T&&(S.envMap.value=T,vs.copy(D),vs.x*=-1,vs.y*=-1,vs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),S.envMapRotation.value.setFromMatrix4(UR.makeRotationFromEuler(vs)),S.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,N,T){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*N,S.scale.value=T*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,N){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===_n&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const N=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function LR(a,e,n,s){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,T){const D=T.program;s.uniformBlockBinding(N,D)}function m(N,T){let D=o[N.id];D===void 0&&(E(N),D=v(N),o[N.id]=D,N.addEventListener("dispose",S));const I=T.program;s.updateUBOMapping(N,I);const O=e.render.frame;c[N.id]!==O&&(_(N),c[N.id]=O)}function v(N){const T=g();N.__bindingPointIndex=T;const D=a.createBuffer(),I=N.__size,O=N.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,I,O),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,T,D),D}function g(){for(let N=0;N<h;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const T=o[N.id],D=N.uniforms,I=N.__cache;a.bindBuffer(a.UNIFORM_BUFFER,T);for(let O=0,L=D.length;O<L;O++){const k=Array.isArray(D[O])?D[O]:[D[O]];for(let w=0,R=k.length;w<R;w++){const H=k[w];if(y(H,O,w,I)===!0){const ee=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let W=0;for(let J=0;J<$.length;J++){const P=$[J],X=b(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,a.bufferSubData(a.UNIFORM_BUFFER,ee+W,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ee,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(N,T,D,I){const O=N.value,L=T+"_"+D;if(I[L]===void 0)return typeof O=="number"||typeof O=="boolean"?I[L]=O:I[L]=O.clone(),!0;{const k=I[L];if(typeof O=="number"||typeof O=="boolean"){if(k!==O)return I[L]=O,!0}else if(k.equals(O)===!1)return k.copy(O),!0}return!1}function E(N){const T=N.uniforms;let D=0;const I=16;for(let L=0,k=T.length;L<k;L++){const w=Array.isArray(T[L])?T[L]:[T[L]];for(let R=0,H=w.length;R<H;R++){const ee=w[R],$=Array.isArray(ee.value)?ee.value:[ee.value];for(let W=0,J=$.length;W<J;W++){const P=$[W],X=b(P),Y=D%I,_e=Y%X.boundary,Me=Y+_e;D+=_e,Me!==0&&I-Me<X.storage&&(D+=I-Me),ee.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=D,D+=X.storage}}}const O=D%I;return O>0&&(D+=I-O),N.__size=D,N.__cache={},this}function b(N){const T={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(T.boundary=4,T.storage=4):N.isVector2?(T.boundary=8,T.storage=8):N.isVector3||N.isColor?(T.boundary=16,T.storage=12):N.isVector4?(T.boundary=16,T.storage=16):N.isMatrix3?(T.boundary=48,T.storage=48):N.isMatrix4?(T.boundary=64,T.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),T}function S(N){const T=N.target;T.removeEventListener("dispose",S);const D=u.indexOf(T.__bindingPointIndex);u.splice(D,1),a.deleteBuffer(o[T.id]),delete o[T.id],delete c[T.id]}function x(){for(const N in o)a.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:p,update:m,dispose:x}}class OR{constructor(e={}){const{canvas:n=EE(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=s.getContextAttributes().alpha}else _=u;const y=new Uint32Array(4),E=new Int32Array(4);let b=null,S=null;const x=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Xa,this.toneMappingExposure=1;const T=this;let D=!1,I=0,O=0,L=null,k=-1,w=null;const R=new vn,H=new vn;let ee=null;const $=new Ut(0);let W=0,J=n.width,P=n.height,X=1,Y=null,_e=null;const Me=new vn(0,0,J,P),B=new vn(0,0,J,P);let se=!1;const ve=new q_;let Z=!1,fe=!1;const Se=new hn,Ee=new ue,Oe=new vn,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function wt(){return L===null?X:1}let V=s;function Ht(U,K){return n.getContext(U,K)}try{const U={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gc}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",we,!1),V===null){const K="webgl2";if(V=Ht(K,U),V===null)throw Ht(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let at,gt,Ce,it,Xe,qe,F,C,oe,be,xe,ye,Ye,Ne,ze,st,Ae,Be,vt,Je,De,Ke,Qe,Gt;function j(){at=new HA(V),at.init(),Ke=new bR(V,at),gt=new OA(V,at,e,Ke),Ce=new SR(V),it=new kA(V),Xe=new lR,qe=new ER(V,at,Ce,Xe,gt,Ke,it),F=new zA(T),C=new FA(T),oe=new KE(V),Qe=new NA(V,oe),be=new GA(V,oe,it,Qe),xe=new qA(V,be,oe,it),vt=new XA(V,gt,qe),st=new PA(Xe),ye=new rR(T,F,C,at,gt,Qe,st),Ye=new NR(T,Xe),Ne=new cR,ze=new mR(at),Be=new UA(T,F,C,Ce,xe,_,p),Ae=new yR(T,xe,gt),Gt=new LR(V,it,gt,Ce),Je=new LA(V,at,it),De=new VA(V,at,it),it.programs=ye.programs,T.capabilities=gt,T.extensions=at,T.properties=Xe,T.renderLists=Ne,T.shadowMap=Ae,T.state=Ce,T.info=it}j();const Re=new DR(T,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const U=at.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=at.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(U){U!==void 0&&(X=U,this.setSize(J,P,!1))},this.getSize=function(U){return U.set(J,P)},this.setSize=function(U,K,re=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=U,P=K,n.width=Math.floor(U*X),n.height=Math.floor(K*X),re===!0&&(n.style.width=U+"px",n.style.height=K+"px"),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(J*X,P*X).floor()},this.setDrawingBufferSize=function(U,K,re){J=U,P=K,X=re,n.width=Math.floor(U*re),n.height=Math.floor(K*re),this.setViewport(0,0,U,K)},this.getCurrentViewport=function(U){return U.copy(R)},this.getViewport=function(U){return U.copy(Me)},this.setViewport=function(U,K,re,le){U.isVector4?Me.set(U.x,U.y,U.z,U.w):Me.set(U,K,re,le),Ce.viewport(R.copy(Me).multiplyScalar(X).round())},this.getScissor=function(U){return U.copy(B)},this.setScissor=function(U,K,re,le){U.isVector4?B.set(U.x,U.y,U.z,U.w):B.set(U,K,re,le),Ce.scissor(H.copy(B).multiplyScalar(X).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(U){Ce.setScissorTest(se=U)},this.setOpaqueSort=function(U){Y=U},this.setTransparentSort=function(U){_e=U},this.getClearColor=function(U){return U.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(U=!0,K=!0,re=!0){let le=0;if(U){let te=!1;if(L!==null){const Te=L.texture.format;te=Te===Pd||Te===Od||Te===Ld}if(te){const Te=L.texture.type,Ue=Te===ii||Te===qa||Te===Hl||Te===As||Te===Ud||Te===Nd,Ie=Be.getClearColor(),Fe=Be.getClearAlpha(),He=Ie.r,et=Ie.g,Ze=Ie.b;Ue?(y[0]=He,y[1]=et,y[2]=Ze,y[3]=Fe,V.clearBufferuiv(V.COLOR,0,y)):(E[0]=He,E[1]=et,E[2]=Ze,E[3]=Fe,V.clearBufferiv(V.COLOR,0,E))}else le|=V.COLOR_BUFFER_BIT}K&&(le|=V.DEPTH_BUFFER_BIT),re&&(le|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Ne.dispose(),ze.dispose(),Xe.dispose(),F.dispose(),C.dispose(),xe.dispose(),Qe.dispose(),Gt.dispose(),ye.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",An),Re.removeEventListener("sessionend",Yl),wi.stop()};function pe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const U=it.autoReset,K=Ae.enabled,re=Ae.autoUpdate,le=Ae.needsUpdate,te=Ae.type;j(),it.autoReset=U,Ae.enabled=K,Ae.autoUpdate=re,Ae.needsUpdate=le,Ae.type=te}function we(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function We(U){const K=U.target;K.removeEventListener("dispose",We),ht(K)}function ht(U){Ft(U),Xe.remove(U)}function Ft(U){const K=Xe.get(U).programs;K!==void 0&&(K.forEach(function(re){ye.releaseProgram(re)}),U.isShaderMaterial&&ye.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,re,le,te,Te){K===null&&(K=Pe);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Ie=Rn(U,K,re,le,te);Ce.setMaterial(le,Ue);let Fe=re.index,He=1;if(le.wireframe===!0){if(Fe=be.getWireframeAttribute(re),Fe===void 0)return;He=2}const et=re.drawRange,Ze=re.attributes.position;let dt=et.start*He,Nt=(et.start+et.count)*He;Te!==null&&(dt=Math.max(dt,Te.start*He),Nt=Math.min(Nt,(Te.start+Te.count)*He)),Fe!==null?(dt=Math.max(dt,0),Nt=Math.min(Nt,Fe.count)):Ze!=null&&(dt=Math.max(dt,0),Nt=Math.min(Nt,Ze.count));const qt=Nt-dt;if(qt<0||qt===1/0)return;Qe.setup(te,le,Ie,re,Fe);let Cn,bt=Je;if(Fe!==null&&(Cn=oe.get(Fe),bt=De,bt.setIndex(Cn)),te.isMesh)le.wireframe===!0?(Ce.setLineWidth(le.wireframeLinewidth*wt()),bt.setMode(V.LINES)):bt.setMode(V.TRIANGLES);else if(te.isLine){let ke=le.linewidth;ke===void 0&&(ke=1),Ce.setLineWidth(ke*wt()),te.isLineSegments?bt.setMode(V.LINES):te.isLineLoop?bt.setMode(V.LINE_LOOP):bt.setMode(V.LINE_STRIP)}else te.isPoints?bt.setMode(V.POINTS):te.isSprite&&bt.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)bt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))bt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const ke=te._multiDrawStarts,Yt=te._multiDrawCounts,yt=te._multiDrawCount,Qt=Fe?oe.get(Fe).bytesPerElement:1,cn=Xe.get(le).currentProgram.getUniforms();for(let wn=0;wn<yt;wn++)cn.setValue(V,"_gl_DrawID",wn),bt.render(ke[wn]/Qt,Yt[wn])}else if(te.isInstancedMesh)bt.renderInstances(dt,qt,te.count);else if(re.isInstancedBufferGeometry){const ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Yt=Math.min(re.instanceCount,ke);bt.renderInstances(dt,qt,Yt)}else bt.render(dt,qt)};function on(U,K,re){U.transparent===!0&&U.side===ti&&U.forceSinglePass===!1?(U.side=_n,U.needsUpdate=!0,Za(U,K,re),U.side=ua,U.needsUpdate=!0,Za(U,K,re),U.side=ti):Za(U,K,re)}this.compile=function(U,K,re=null){re===null&&(re=U),S=ze.get(re),S.init(K),N.push(S),re.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),U!==re&&U.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),S.setupLights();const le=new Set;return U.traverse(function(te){const Te=te.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const Ie=Te[Ue];on(Ie,re,te),le.add(Ie)}else on(Te,re,te),le.add(Te)}),N.pop(),S=null,le},this.compileAsync=function(U,K,re=null){const le=this.compile(U,K,re);return new Promise(te=>{function Te(){if(le.forEach(function(Ue){Xe.get(Ue).currentProgram.isReady()&&le.delete(Ue)}),le.size===0){te(U);return}setTimeout(Te,10)}at.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Et=null;function qn(U){Et&&Et(U)}function An(){wi.stop()}function Yl(){wi.start()}const wi=new W_;wi.setAnimationLoop(qn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(U){Et=U,Re.setAnimationLoop(U),U===null?wi.stop():wi.start()},Re.addEventListener("sessionstart",An),Re.addEventListener("sessionend",Yl),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(K),K=Re.getCamera()),U.isScene===!0&&U.onBeforeRender(T,U,K,L),S=ze.get(U,N.length),S.init(K),N.push(S),Se.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ve.setFromProjectionMatrix(Se),fe=this.localClippingEnabled,Z=st.init(this.clippingPlanes,fe),b=Ne.get(U,x.length),b.init(),x.push(b),Re.enabled===!0&&Re.isPresenting===!0){const Te=T.xr.getDepthSensingMesh();Te!==null&&Cs(Te,K,-1/0,T.sortObjects)}Cs(U,K,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(Y,_e),tt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,tt&&Be.addToRenderList(b,U),this.info.render.frame++,Z===!0&&st.beginShadows();const re=S.state.shadowsArray;Ae.render(re,U,K),Z===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=b.opaque,te=b.transmissive;if(S.setupLights(),K.isArrayCamera){const Te=K.cameras;if(te.length>0)for(let Ue=0,Ie=Te.length;Ue<Ie;Ue++){const Fe=Te[Ue];ws(le,te,U,Fe)}tt&&Be.render(U);for(let Ue=0,Ie=Te.length;Ue<Ie;Ue++){const Fe=Te[Ue];zr(b,U,Fe,Fe.viewport)}}else te.length>0&&ws(le,te,U,K),tt&&Be.render(U),zr(b,U,K);L!==null&&(qe.updateMultisampleRenderTarget(L),qe.updateRenderTargetMipmap(L)),U.isScene===!0&&U.onAfterRender(T,U,K),Qe.resetDefaultState(),k=-1,w=null,N.pop(),N.length>0?(S=N[N.length-1],Z===!0&&st.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?b=x[x.length-1]:b=null};function Cs(U,K,re,le){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)re=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)S.pushLight(U),U.castShadow&&S.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ve.intersectsSprite(U)){le&&Oe.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Se);const Ue=xe.update(U),Ie=U.material;Ie.visible&&b.push(U,Ue,Ie,re,Oe.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ve.intersectsObject(U))){const Ue=xe.update(U),Ie=U.material;if(le&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Oe.copy(U.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Oe.copy(Ue.boundingSphere.center)),Oe.applyMatrix4(U.matrixWorld).applyMatrix4(Se)),Array.isArray(Ie)){const Fe=Ue.groups;for(let He=0,et=Fe.length;He<et;He++){const Ze=Fe[He],dt=Ie[Ze.materialIndex];dt&&dt.visible&&b.push(U,Ue,dt,re,Oe.z,Ze)}}else Ie.visible&&b.push(U,Ue,Ie,re,Oe.z,null)}}const Te=U.children;for(let Ue=0,Ie=Te.length;Ue<Ie;Ue++)Cs(Te[Ue],K,re,le)}function zr(U,K,re,le){const te=U.opaque,Te=U.transmissive,Ue=U.transparent;S.setupLightsView(re),Z===!0&&st.setGlobalState(T.clippingPlanes,re),le&&Ce.viewport(R.copy(le)),te.length>0&&ha(te,K,re),Te.length>0&&ha(Te,K,re),Ue.length>0&&ha(Ue,K,re),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ws(U,K,re,le){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[le.id]===void 0&&(S.state.transmissionRenderTarget[le.id]=new Ci(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Gl:ii,minFilter:Es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Te=S.state.transmissionRenderTarget[le.id],Ue=le.viewport||R;Te.setSize(Ue.z,Ue.w);const Ie=T.getRenderTarget();T.setRenderTarget(Te),T.getClearColor($),W=T.getClearAlpha(),W<1&&T.setClearColor(16777215,.5),T.clear(),tt&&Be.render(re);const Fe=T.toneMapping;T.toneMapping=Xa;const He=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),S.setupLightsView(le),Z===!0&&st.setGlobalState(T.clippingPlanes,le),ha(U,re,le),qe.updateMultisampleRenderTarget(Te),qe.updateRenderTargetMipmap(Te),at.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ze=0,dt=K.length;Ze<dt;Ze++){const Nt=K[Ze],qt=Nt.object,Cn=Nt.geometry,bt=Nt.material,ke=Nt.group;if(bt.side===ti&&qt.layers.test(le.layers)){const Yt=bt.side;bt.side=_n,bt.needsUpdate=!0,Br(qt,re,le,Cn,bt,ke),bt.side=Yt,bt.needsUpdate=!0,et=!0}}et===!0&&(qe.updateMultisampleRenderTarget(Te),qe.updateRenderTargetMipmap(Te))}T.setRenderTarget(Ie),T.setClearColor($,W),He!==void 0&&(le.viewport=He),T.toneMapping=Fe}function ha(U,K,re){const le=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Te=U.length;te<Te;te++){const Ue=U[te],Ie=Ue.object,Fe=Ue.geometry,He=le===null?Ue.material:le,et=Ue.group;Ie.layers.test(re.layers)&&Br(Ie,K,re,Fe,He,et)}}function Br(U,K,re,le,te,Te){U.onBeforeRender(T,K,re,le,te,Te),U.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),te.transparent===!0&&te.side===ti&&te.forceSinglePass===!1?(te.side=_n,te.needsUpdate=!0,T.renderBufferDirect(re,K,le,te,U,Te),te.side=ua,te.needsUpdate=!0,T.renderBufferDirect(re,K,le,te,U,Te),te.side=ti):T.renderBufferDirect(re,K,le,te,U,Te),U.onAfterRender(T,K,re,le,te,Te)}function Za(U,K,re){K.isScene!==!0&&(K=Pe);const le=Xe.get(U),te=S.state.lights,Te=S.state.shadowsArray,Ue=te.state.version,Ie=ye.getParameters(U,te.state,Te,K,re),Fe=ye.getProgramCacheKey(Ie);let He=le.programs;le.environment=U.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(U.isMeshStandardMaterial?C:F).get(U.envMap||le.environment),le.envMapRotation=le.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,He===void 0&&(U.addEventListener("dispose",We),He=new Map,le.programs=He);let et=He.get(Fe);if(et!==void 0){if(le.currentProgram===et&&le.lightsStateVersion===Ue)return tn(U,Ie),et}else Ie.uniforms=ye.getUniforms(U),U.onBeforeCompile(Ie,T),et=ye.acquireProgram(Ie,Fe),He.set(Fe,et),le.uniforms=Ie.uniforms;const Ze=le.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ze.clippingPlanes=st.uniform),tn(U,Ie),le.needsLights=Ir(U),le.lightsStateVersion=Ue,le.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMap.value=te.state.directionalShadowMap,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotShadowMap.value=te.state.spotShadowMap,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMap.value=te.state.pointShadowMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=et,le.uniformsList=null,et}function _i(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=Lc.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function tn(U,K){const re=Xe.get(U);re.outputColorSpace=K.outputColorSpace,re.batching=K.batching,re.batchingColor=K.batchingColor,re.instancing=K.instancing,re.instancingColor=K.instancingColor,re.instancingMorph=K.instancingMorph,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function Rn(U,K,re,le,te){K.isScene!==!0&&(K=Pe),qe.resetTextureUnits();const Te=K.fog,Ue=le.isMeshStandardMaterial?K.environment:null,Ie=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ii,Fe=(le.isMeshStandardMaterial?C:F).get(le.envMap||Ue),He=le.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,Nt=!!re.morphAttributes.color;let qt=Xa;le.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(qt=T.toneMapping);const Cn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,bt=Cn!==void 0?Cn.length:0,ke=Xe.get(le),Yt=S.state.lights;if(Z===!0&&(fe===!0||U!==w)){const zn=U===w&&le.id===k;st.setState(le,U,zn)}let yt=!1;le.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Yt.state.version||ke.outputColorSpace!==Ie||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==Fe||le.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==st.numPlanes||ke.numIntersection!==st.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==et||ke.morphTargets!==Ze||ke.morphNormals!==dt||ke.morphColors!==Nt||ke.toneMapping!==qt||ke.morphTargetsCount!==bt)&&(yt=!0):(yt=!0,ke.__version=le.version);let Qt=ke.currentProgram;yt===!0&&(Qt=Za(le,K,te));let cn=!1,wn=!1,Fr=!1;const Wt=Qt.getUniforms(),xi=ke.uniforms;if(Ce.useProgram(Qt.program)&&(cn=!0,wn=!0,Fr=!0),le.id!==k&&(k=le.id,wn=!0),cn||w!==U){Wt.setValue(V,"projectionMatrix",U.projectionMatrix),Wt.setValue(V,"viewMatrix",U.matrixWorldInverse);const zn=Wt.map.cameraPosition;zn!==void 0&&zn.setValue(V,Ee.setFromMatrixPosition(U.matrixWorld)),gt.logarithmicDepthBuffer&&Wt.setValue(V,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Wt.setValue(V,"isOrthographic",U.isOrthographicCamera===!0),w!==U&&(w=U,wn=!0,Fr=!0)}if(te.isSkinnedMesh){Wt.setOptional(V,te,"bindMatrix"),Wt.setOptional(V,te,"bindMatrixInverse");const zn=te.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Wt.setValue(V,"boneTexture",zn.boneTexture,qe))}te.isBatchedMesh&&(Wt.setOptional(V,te,"batchingTexture"),Wt.setValue(V,"batchingTexture",te._matricesTexture,qe),Wt.setOptional(V,te,"batchingIdTexture"),Wt.setValue(V,"batchingIdTexture",te._indirectTexture,qe),Wt.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Wt.setValue(V,"batchingColorTexture",te._colorsTexture,qe));const pa=re.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0)&&vt.update(te,re,Qt),(wn||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,Wt.setValue(V,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(xi.envMap.value=Fe,xi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(xi.envMapIntensity.value=K.environmentIntensity),wn&&(Wt.setValue(V,"toneMappingExposure",T.toneMappingExposure),ke.needsLights&&da(xi,Fr),Te&&le.fog===!0&&Ye.refreshFogUniforms(xi,Te),Ye.refreshMaterialUniforms(xi,le,X,P,S.state.transmissionRenderTarget[U.id]),Lc.upload(V,_i(ke),xi,qe)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Lc.upload(V,_i(ke),xi,qe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Wt.setValue(V,"center",te.center),Wt.setValue(V,"modelViewMatrix",te.modelViewMatrix),Wt.setValue(V,"normalMatrix",te.normalMatrix),Wt.setValue(V,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const zn=le.uniformsGroups;for(let Dn=0,Hr=zn.length;Dn<Hr;Dn++){const Gr=zn[Dn];Gt.update(Gr,Qt),Gt.bind(Gr,Qt)}}return Qt}function da(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function Ir(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(U,K,re){Xe.get(U.texture).__webglTexture=K,Xe.get(U.depthTexture).__webglTexture=re;const le=Xe.get(U);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=re===void 0,le.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,K){const re=Xe.get(U);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(U,K=0,re=0){L=U,I=K,O=re;let le=!0,te=null,Te=!1,Ue=!1;if(U){const Fe=Xe.get(U);Fe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(V.FRAMEBUFFER,null),le=!1):Fe.__webglFramebuffer===void 0?qe.setupRenderTarget(U):Fe.__hasExternalTextures&&qe.rebindTextures(U,Xe.get(U.texture).__webglTexture,Xe.get(U.depthTexture).__webglTexture);const He=U.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ue=!0);const et=Xe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(et[K])?te=et[K][re]:te=et[K],Te=!0):U.samples>0&&qe.useMultisampledRTT(U)===!1?te=Xe.get(U).__webglMultisampledFramebuffer:Array.isArray(et)?te=et[re]:te=et,R.copy(U.viewport),H.copy(U.scissor),ee=U.scissorTest}else R.copy(Me).multiplyScalar(X).floor(),H.copy(B).multiplyScalar(X).floor(),ee=se;if(Ce.bindFramebuffer(V.FRAMEBUFFER,te)&&le&&Ce.drawBuffers(U,te),Ce.viewport(R),Ce.scissor(H),Ce.setScissorTest(ee),Te){const Fe=Xe.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,re)}else if(Ue){const Fe=Xe.get(U.texture),He=K||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.__webglTexture,re||0,He)}k=-1},this.readRenderTargetPixels=function(U,K,re,le,te,Te,Ue){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie){Ce.bindFramebuffer(V.FRAMEBUFFER,Ie);try{const Fe=U.texture,He=Fe.format,et=Fe.type;if(!gt.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-le&&re>=0&&re<=U.height-te&&V.readPixels(K,re,le,te,Ke.convert(He),Ke.convert(et),Te)}finally{const Fe=L!==null?Xe.get(L).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(U,K,re,le,te,Te,Ue){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie){Ce.bindFramebuffer(V.FRAMEBUFFER,Ie);try{const Fe=U.texture,He=Fe.format,et=Fe.type;if(!gt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=U.width-le&&re>=0&&re<=U.height-te){const Ze=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ze),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),V.readPixels(K,re,le,te,Ke.convert(He),Ke.convert(et),0),V.flush();const dt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);await bE(V,dt,4);try{V.bindBuffer(V.PIXEL_PACK_BUFFER,Ze),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te)}finally{V.deleteBuffer(Ze),V.deleteSync(dt)}return Te}}finally{const Fe=L!==null?Xe.get(L).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(U,K=null,re=0){U.isTexture!==!0&&(Fl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,U=arguments[1]);const le=Math.pow(2,-re),te=Math.floor(U.image.width*le),Te=Math.floor(U.image.height*le),Ue=K!==null?K.x:0,Ie=K!==null?K.y:0;qe.setTexture2D(U,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ue,Ie,te,Te),Ce.unbindTexture()},this.copyTextureToTexture=function(U,K,re=null,le=null,te=0){U.isTexture!==!0&&(Fl("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,U=arguments[1],K=arguments[2],te=arguments[3]||0,re=null);let Te,Ue,Ie,Fe,He,et;re!==null?(Te=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Ie=re.min.x,Fe=re.min.y):(Te=U.image.width,Ue=U.image.height,Ie=0,Fe=0),le!==null?(He=le.x,et=le.y):(He=0,et=0);const Ze=Ke.convert(K.format),dt=Ke.convert(K.type);qe.setTexture2D(K,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const Nt=V.getParameter(V.UNPACK_ROW_LENGTH),qt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Cn=V.getParameter(V.UNPACK_SKIP_PIXELS),bt=V.getParameter(V.UNPACK_SKIP_ROWS),ke=V.getParameter(V.UNPACK_SKIP_IMAGES),Yt=U.isCompressedTexture?U.mipmaps[te]:U.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ie),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fe),U.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,te,He,et,Te,Ue,Ze,dt,Yt.data):U.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,te,He,et,Yt.width,Yt.height,Ze,Yt.data):V.texSubImage2D(V.TEXTURE_2D,te,He,et,Te,Ue,Ze,dt,Yt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Nt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Cn),V.pixelStorei(V.UNPACK_SKIP_ROWS,bt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ke),te===0&&K.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(U,K,re=null,le=null,te=0){U.isTexture!==!0&&(Fl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,le=arguments[1]||null,U=arguments[2],K=arguments[3],te=arguments[4]||0);let Te,Ue,Ie,Fe,He,et,Ze,dt,Nt;const qt=U.isCompressedTexture?U.mipmaps[te]:U.image;re!==null?(Te=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Ie=re.max.z-re.min.z,Fe=re.min.x,He=re.min.y,et=re.min.z):(Te=qt.width,Ue=qt.height,Ie=qt.depth,Fe=0,He=0,et=0),le!==null?(Ze=le.x,dt=le.y,Nt=le.z):(Ze=0,dt=0,Nt=0);const Cn=Ke.convert(K.format),bt=Ke.convert(K.type);let ke;if(K.isData3DTexture)qe.setTexture3D(K,0),ke=V.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)qe.setTexture2DArray(K,0),ke=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const Yt=V.getParameter(V.UNPACK_ROW_LENGTH),yt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Qt=V.getParameter(V.UNPACK_SKIP_PIXELS),cn=V.getParameter(V.UNPACK_SKIP_ROWS),wn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Fe),V.pixelStorei(V.UNPACK_SKIP_ROWS,He),V.pixelStorei(V.UNPACK_SKIP_IMAGES,et),U.isDataTexture||U.isData3DTexture?V.texSubImage3D(ke,te,Ze,dt,Nt,Te,Ue,Ie,Cn,bt,qt.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,te,Ze,dt,Nt,Te,Ue,Ie,Cn,qt.data):V.texSubImage3D(ke,te,Ze,dt,Nt,Te,Ue,Ie,Cn,bt,qt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Yt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,cn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,wn),te===0&&K.generateMipmaps&&V.generateMipmap(ke),Ce.unbindTexture()},this.initRenderTarget=function(U){Xe.get(U).__webglFramebuffer===void 0&&qe.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?qe.setTextureCube(U,0):U.isData3DTexture?qe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?qe.setTexture2DArray(U,0):qe.setTexture2D(U,0),Ce.unbindTexture()},this.resetState=function(){I=0,O=0,L=null,Ce.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zd?"display-p3":"srgb",n.unpackColorSpace=Dt.workingColorSpace===kc?"display-p3":"srgb"}}class Ad extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class PR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=n_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=n_();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function n_(){return(typeof performance>"u"?Date:performance).now()}class en{constructor(e){this.value=e}clone(){return new en(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);var Hh=1/1e3,zR=1e3,BR=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*Hh}get fixedDelta(){return this._fixedDelta*Hh}set fixedDelta(a){this._fixedDelta=a*zR}get elapsed(){return this._elapsed*Hh}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},IR=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new ja;return n.setAttribute("position",new mi(a,3)),n.setAttribute("uv",new mi(e,2)),n})(),Ya=class Rd{static get fullscreenGeometry(){return IR}constructor(e="Pass",n=new Ad,s=new Id){this.name=e,this.renderer=null,this.scene=n,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new Ri(Rd.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Ad),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Vl){}render(e,n,s,o,c){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,s){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof Ci||n instanceof Or||n instanceof Tn||n instanceof Rd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},FR=class extends Ya{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,n,s,o){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},HR=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,GR="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",VR=class extends gi{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new en(null),depthBuffer:new en(null),channelWeights:new en(null),opacity:new en(1)},blending:Bi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:HR,vertexShader:GR}),this.depthFunc=y_}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(a){const e=a!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){const e=a!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=a}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(a){this.colorSpaceConversion!==a&&(a?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(a){a!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=a):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},kR=class extends Ya{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new VR,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new Ci(1,1,{minFilter:bn,magFilter:bn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,n,s,o){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==ii?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===fn&&(this.renderTarget.texture.colorSpace=fn))}},i_=new Ut,Q_=class extends Ya{constructor(a=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,n){this.color=a,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,n,s,o){const c=this.overrideClearColor,u=this.overrideClearAlpha,h=a.getClearAlpha(),p=c!==null,m=u>=0;p?(a.getClearColor(i_),a.setClearColor(c,m?u:h)):m&&a.setClearAlpha(u),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),p?a.setClearColor(i_,h):m&&a.setClearAlpha(h)}},XR=class extends Ya{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new Q_(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,n,s,o){const c=a.getContext(),u=a.state.buffers,h=this.scene,p=this.camera,m=this.clearPass,v=this.inverted?0:1,g=1-v;u.color.setMask(!1),u.depth.setMask(!1),u.color.setLocked(!0),u.depth.setLocked(!0),u.stencil.setTest(!0),u.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),u.stencil.setFunc(c.ALWAYS,v,4294967295),u.stencil.setClear(g),u.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(a,null):(m.render(a,e),m.render(a,n))),this.renderToScreen?(a.setRenderTarget(null),a.render(h,p)):(a.setRenderTarget(e),a.render(h,p),a.setRenderTarget(n),a.render(h,p)),u.color.setLocked(!1),u.depth.setLocked(!1),u.stencil.setLocked(!1),u.stencil.setFunc(c.EQUAL,1,4294967295),u.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),u.stencil.setLocked(!0)}},a_=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:s=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,o,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new kR,this.depthTexture=null,this.passes=[],this.timer=new BR,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,n=this.multisampling;n>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new ut),n=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===ii&&a.outputColorSpace===fn&&(this.inputBuffer.texture.colorSpace=fn,this.outputBuffer.texture.colorSpace=fn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(a,n,s)}}replaceRenderer(a,e=!0){const n=this.renderer,s=n.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(n.domElement),s.appendChild(a.domElement)),n}createDepthTexture(){const a=this.depthTexture=new Hd;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Rs,a.type=As):a.type=qa,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,n,s){const o=this.renderer,c=o===null?new ut:o.getDrawingBufferSize(new ut),u={minFilter:bn,magFilter:bn,stencilBuffer:e,depthBuffer:a,type:n},h=new Ci(c.width,c.height,u);return s>0&&(h.samples=s),n===ii&&o!==null&&o.outputColorSpace===fn&&(h.texture.colorSpace=fn),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const n=this.passes,s=this.renderer,o=s.getDrawingBufferSize(new ut),c=s.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(a.setRenderer(s),a.setSize(o.width,o.height),a.initialize(s,c,u),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,a):n.push(a),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(a of n)a.setDepthTexture(h)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,n=e.indexOf(a);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const c=(h,p)=>h||p.needsDepthTexture;e.reduce(c,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,n=this.copyPass;let s=this.inputBuffer,o=this.outputBuffer,c=!1,u,h,p;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const m of this.passes)m.enabled&&(m.render(e,s,o,a,c),m.needsSwap&&(c&&(n.renderToScreen=m.renderToScreen,u=e.getContext(),h=e.state.buffers.stencil,h.setFunc(u.NOTEQUAL,1,4294967295),n.render(e,s,o,a,c),h.setFunc(u.EQUAL,1,4294967295)),p=s,s=o,o=p),m instanceof XR?c=!0:m instanceof FR&&(c=!1))}setSize(a,e,n){const s=this.renderer,o=s.getSize(new ut);(a===void 0||e===void 0)&&(a=o.width,e=o.height),(o.width!==a||o.height!==e)&&s.setSize(a,e,n);const c=s.getDrawingBufferSize(new ut);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const u of this.passes)u.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ya.fullscreenGeometry.dispose()}},Ts={NONE:0,DEPTH:1,CONVOLUTION:2},Rt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},qR=class{constructor(){this.shaderParts=new Map([[Rt.FRAGMENT_HEAD,null],[Rt.FRAGMENT_MAIN_UV,null],[Rt.FRAGMENT_MAIN_IMAGE,null],[Rt.VERTEX_HEAD,null],[Rt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ts.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ii}},Gh=!1,s_=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case ti:n=this.materialsFlatShadedDoubleSide;break;case _n:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case ti:n=this.materialsDoubleSide;break;case _n:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof gi))return a.clone();const e=a.uniforms,n=new Map;for(const o in e){const c=e[o].value;c.isRenderTargetTexture&&(e[o].value=null,n.set(o,c))}const s=a.clone();for(const o of n)e[o[0]].value=o[1],s.uniforms[o[0]].value=o[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const n of e)n.uniforms=Object.assign({},a.uniforms),n.side=ua;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.side=_n,s}),this.materialsDoubleSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.side=ti,s}),this.materialsFlatShaded=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=_n,s}),this.materialsFlatShadedDoubleSide=e.map(n=>{const s=this.cloneMaterial(n);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=ti,s})}}render(a,e,n){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,Gh){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,n);for(const c of o)c[0].material=c[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,n),e.overrideMaterial=o}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Gh}static set workaroundEnabled(a){Gh=a}},Mt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},WR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",YR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JR="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$R="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",mC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_C="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",MC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bC=new Map([[Mt.ADD,WR],[Mt.ALPHA,jR],[Mt.AVERAGE,YR],[Mt.COLOR,ZR],[Mt.COLOR_BURN,KR],[Mt.COLOR_DODGE,QR],[Mt.DARKEN,JR],[Mt.DIFFERENCE,$R],[Mt.DIVIDE,eC],[Mt.DST,null],[Mt.EXCLUSION,tC],[Mt.HARD_LIGHT,nC],[Mt.HARD_MIX,iC],[Mt.HUE,aC],[Mt.INVERT,sC],[Mt.INVERT_RGB,rC],[Mt.LIGHTEN,lC],[Mt.LINEAR_BURN,oC],[Mt.LINEAR_DODGE,cC],[Mt.LINEAR_LIGHT,uC],[Mt.LUMINOSITY,fC],[Mt.MULTIPLY,hC],[Mt.NEGATION,dC],[Mt.NORMAL,pC],[Mt.OVERLAY,mC],[Mt.PIN_LIGHT,gC],[Mt.REFLECT,vC],[Mt.SATURATION,_C],[Mt.SCREEN,xC],[Mt.SOFT_LIGHT,yC],[Mt.SRC,SC],[Mt.SUBTRACT,MC],[Mt.VIVID_LIGHT,EC]]),TC=class extends Wa{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new en(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return bC.get(this.blendFunction)}},J_=class extends Wa{constructor(a,e,{attributes:n=Ts.NONE,blendFunction:s=Mt.NORMAL,defines:o=new Map,uniforms:c=new Map,extensions:u=null,vertexShader:h=null}={}){super(),this.name=a,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=h,this.defines=o,this.uniforms=c,this.extensions=u,this.blendMode=new TC(s),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=Ii,this._outputColorSpace=Pi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=Vl){}update(a,e,n){}setSize(a,e){}initialize(a,e,n){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof Ci||e instanceof Or||e instanceof Tn||e instanceof Ya)&&this[a].dispose()}}},r_=class extends Ya{constructor(a,e,n=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new Q_,this.overrideMaterialManager=n===null?null:new s_(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new s_(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,n,s,o){const c=this.scene,u=this.camera,h=this.selection,p=u.layers.mask,m=c.background,v=a.shadowMap.autoUpdate,g=this.renderToScreen?null:e;h!==null&&u.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,u):a.render(c,u),u.layers.mask=p,c.background=m,a.shadowMap.autoUpdate=v}},AC=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,RC="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",CC=class extends gi{constructor(a,e,n,s,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Gc.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new en(null),depthBuffer:new en(null),resolution:new en(new ut),texelSize:new en(new ut),cameraNear:new en(.3),cameraFar:new en(1e3),aspect:new en(1),time:new en(0)},blending:Bi,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),a&&this.setShaderParts(a),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=Vl){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=AC.replace(Rt.FRAGMENT_HEAD,a.get(Rt.FRAGMENT_HEAD)||"").replace(Rt.FRAGMENT_MAIN_UV,a.get(Rt.FRAGMENT_MAIN_UV)||"").replace(Rt.FRAGMENT_MAIN_IMAGE,a.get(Rt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=RC.replace(Rt.VERTEX_HEAD,a.get(Rt.VERTEX_HEAD)||"").replace(Rt.VERTEX_MAIN_SUPPORT,a.get(Rt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof di?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const n=this.uniforms;n.resolution.value.set(a,e),n.texelSize.value.set(1/a,1/e),n.aspect.value=a/e}static get Section(){return Rt}};function l_(a,e,n){for(const s of e){const o="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const u of n.entries())u[1]!==null&&n.set(u[0],u[1].replace(c,o))}}function wC(a,e,n){let s=e.getFragmentShader(),o=e.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),u=s!==void 0&&/mainUv/.test(s);if(n.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(u&&(n.attributes&Ts.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!u)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let m=p.get(Rt.FRAGMENT_HEAD)||"",v=p.get(Rt.FRAGMENT_MAIN_UV)||"",g=p.get(Rt.FRAGMENT_MAIN_IMAGE)||"",_=p.get(Rt.VERTEX_HEAD)||"",y=p.get(Rt.VERTEX_MAIN_SUPPORT)||"";const E=new Set,b=new Set;if(u&&(v+=`	${a}MainUv(UV);
`,n.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const N=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);y+=`	${a}MainSupport(`,y+=N?`vUv);
`:`);
`;for(const T of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const D of T[1].split(/\s*,\s*/))n.varyings.add(D),E.add(D),b.add(D);for(const T of o.matchAll(h))b.add(T[1])}for(const N of s.matchAll(h))b.add(N[1]);for(const N of e.defines.keys())b.add(N.replace(/\([\w\s,]*\)/g,""));for(const N of e.uniforms.keys())b.add(N);b.delete("while"),b.delete("for"),b.delete("if"),e.uniforms.forEach((N,T)=>n.uniforms.set(a+T.charAt(0).toUpperCase()+T.slice(1),N)),e.defines.forEach((N,T)=>n.defines.set(a+T.charAt(0).toUpperCase()+T.slice(1),N));const S=new Map([["fragment",s],["vertex",o]]);l_(a,b,n.defines),l_(a,b,S),s=S.get("fragment"),o=S.get("vertex");const x=e.blendMode;if(n.blendModes.set(x.blendFunction,x),c){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(g+=e.inputColorSpace===fn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Pi?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const N=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${a}MainImage(color0, UV, `,(n.attributes&Ts.DEPTH)!==0&&N.test(s)&&(g+="depth, ",n.readDepth=!0),g+=`color1);
	`;const T=a+"BlendOpacity";n.uniforms.set(T,x.opacity),g+=`color0 = blend${x.blendFunction}(color0, color1, ${T});

	`,m+=`uniform float ${T};

`}if(m+=s+`
`,o!==null&&(_+=o+`
`),p.set(Rt.FRAGMENT_HEAD,m),p.set(Rt.FRAGMENT_MAIN_UV,v),p.set(Rt.FRAGMENT_MAIN_IMAGE,g),p.set(Rt.VERTEX_HEAD,_),p.set(Rt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const N of e.extensions)n.extensions.add(N)}}var o_=class extends Ya{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new CC(null,null,null,a),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new qR;let e=0;for(const u of this.effects)if(u.blendMode.blendFunction===Mt.DST)a.attributes|=u.getAttributes()&Ts.DEPTH;else{if((a.attributes&u.getAttributes()&Ts.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${u.name})`);wC("e"+e++,u,a)}let n=a.shaderParts.get(Rt.FRAGMENT_HEAD),s=a.shaderParts.get(Rt.FRAGMENT_MAIN_IMAGE),o=a.shaderParts.get(Rt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const u of a.blendModes.values())n+=u.getShaderCode().replace(c,`blend${u.blendFunction}`)+`
`;(a.attributes&Ts.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===fn&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Rt.FRAGMENT_HEAD,n),a.shaderParts.set(Rt.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Rt.FRAGMENT_MAIN_UV,o);for(const[u,h]of a.shaderParts)h!==null&&a.shaderParts.set(u,h.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=Vl){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(a,e)}render(a,e,n,s,o){for(const c of this.effects)c.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:n),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const n of this.effects)n.setSize(a,e)}initialize(a,e,n){this.renderer=a;for(const s of this.effects)s.initialize(a,e,n);this.updateMaterial(),n!==void 0&&n!==ii&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){a.type==="change"&&this.recompile()}};const DC=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,e.width,e.height);const s=new Tn(e);s.minFilter=bn,s.magFilter=bn,s.generateMipmaps=!1;const o=[];let c=null;const u=64;let h=.1*64;const p=1/u,m=()=>{n.fillStyle="black",n.fillRect(0,0,e.width,e.height)},v=y=>{const E={x:y.x*64,y:(1-y.y)*64};let b=1;const S=D=>Math.sin(D*Math.PI/2),x=D=>-D*(D-2);y.age<u*.3?b=S(y.age/(u*.3)):b=x(1-(y.age-u*.3)/(u*.7))||0,b*=y.force;const N=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${b*255}`,T=320;n.shadowOffsetX=T,n.shadowOffsetY=T,n.shadowBlur=h,n.shadowColor=`rgba(${N},${.22*b})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(E.x-T,E.y-T,h,0,Math.PI*2),n.fill()};return{canvas:e,texture:s,addTouch:y=>{let E=0,b=0,S=0;if(c){const x=y.x-c.x,N=y.y-c.y;if(x===0&&N===0)return;const T=x*x+N*N,D=Math.sqrt(T);b=x/(D||1),S=N/(D||1),E=Math.min(T*1e4,1)}c={x:y.x,y:y.y},o.push({x:y.x,y:y.y,age:0,force:E,vx:b,vy:S})},update:()=>{m();for(let y=o.length-1;y>=0;y--){const E=o[y],b=E.force*p*(1-E.age/u);E.x+=E.vx*b,E.y+=E.vy*b,E.age++,E.age>u&&o.splice(y,1)}for(let y=0;y<o.length;y++)v(o[y]);s.needsUpdate=!0},set radiusScale(y){h=.1*64*y},get radiusScale(){return h/(.1*64)},size:64}},UC=(a,e)=>{const n=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new J_("LiquidEffect",n,{uniforms:new Map([["uTexture",new en(a)],["uStrength",new en(e?.strength??.025)],["uTime",new en(0)],["uFreq",new en(e?.freq??4.5)]])})},c_={square:0,circle:1,triangle:2,diamond:3},NC=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,LC=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,Vh=10,OC=({variant:a="square",pixelSize:e=3,color:n="#B19EEF",className:s,style:o,antialias:c=!0,patternScale:u=2,patternDensity:h=1,liquid:p=!1,liquidStrength:m=.1,liquidRadius:v=1,pixelSizeJitter:g=0,enableRipples:_=!0,rippleIntensityScale:y=1,rippleThickness:E=.1,rippleSpeed:b=.3,liquidWobbleSpeed:S=4.5,autoPauseOffscreen:x=!0,speed:N=.5,transparent:T=!0,edgeFade:D=.5,noiseAmount:I=0})=>{const O=ft.useRef(null),L=ft.useRef({visible:!0}),k=ft.useRef(N),w=ft.useRef(null),R=ft.useRef(null);return ft.useEffect(()=>{const H=O.current;if(!H)return;k.current=N;const ee=["antialias","liquid","noiseAmount"],$={antialias:c,liquid:p,noiseAmount:I};let W=!1;if(!w.current)W=!0;else if(R.current){for(const J of ee)if(R.current[J]!==$[J]){W=!0;break}}if(W){if(w.current){const Ce=w.current;Ce.resizeObserver?.disconnect(),cancelAnimationFrame(Ce.raf),Ce.quad?.geometry.dispose(),Ce.material.dispose(),Ce.composer?.dispose(),Ce.renderer.dispose(),Ce.renderer.domElement.parentElement===H&&H.removeChild(Ce.renderer.domElement),w.current=null}const J=document.createElement("canvas"),P=new OR({canvas:J,antialias:c,alpha:!0,powerPreference:"high-performance"});P.domElement.style.width="100%",P.domElement.style.height="100%",P.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.appendChild(P.domElement),T?P.setClearAlpha(0):P.setClearColor(0,1);const X={uResolution:{value:new ut(0,0)},uTime:{value:0},uColor:{value:new Ut(n)},uClickPos:{value:Array.from({length:Vh},()=>new ut(-1,-1))},uClickTimes:{value:new Float32Array(Vh)},uShapeType:{value:c_[a]??0},uPixelSize:{value:e*P.getPixelRatio()},uScale:{value:u},uDensity:{value:h},uPixelJitter:{value:g},uEnableRipples:{value:_?1:0},uRippleSpeed:{value:b},uRippleThickness:{value:E},uRippleIntensity:{value:y},uEdgeFade:{value:D}},Y=new Ad,_e=new Id(-1,1,1,-1,0,1),Me=new gi({vertexShader:NC,fragmentShader:LC,uniforms:X,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Ed}),B=new jl(2,2),se=new Ri(B,Me);Y.add(se);const ve=new PR,Z=()=>{const Ce=H.clientWidth||1,it=H.clientHeight||1;P.setSize(Ce,it,!1),X.uResolution.value.set(P.domElement.width,P.domElement.height),w.current?.composer&&w.current.composer.setSize(P.domElement.width,P.domElement.height),X.uPixelSize.value=e*P.getPixelRatio()};Z();const fe=new ResizeObserver(Z);fe.observe(H);const Ee=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Ce=new Uint32Array(1);return window.crypto.getRandomValues(Ce),Ce[0]/4294967295}return Math.random()})()*1e3;let Oe,Pe,tt;if(p){Pe=DC(),Pe.radiusScale=v,Oe=new a_(P);const Ce=new r_(Y,_e);tt=UC(Pe.texture,{strength:m,freq:S});const it=new o_(_e,tt);it.renderToScreen=!0,Oe.addPass(Ce),Oe.addPass(it)}if(I>0){Oe||(Oe=new a_(P),Oe.addPass(new r_(Y,_e)));const Ce=new J_("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new en(0)],["uAmount",new en(I)]])}),it=new o_(_e,Ce);it.renderToScreen=!0,Oe&&Oe.passes.length>0&&Oe.passes.forEach(Xe=>Xe.renderToScreen=!1),Oe.addPass(it)}Oe&&Oe.setSize(P.domElement.width,P.domElement.height);const wt=Ce=>{const it=P.domElement.getBoundingClientRect(),Xe=P.domElement.width/it.width,qe=P.domElement.height/it.height,F=(Ce.clientX-it.left)*Xe,C=(it.height-(Ce.clientY-it.top))*qe;return{fx:F,fy:C,w:P.domElement.width,h:P.domElement.height}},V=Ce=>{const{fx:it,fy:Xe}=wt(Ce),qe=w.current?.clickIx??0;X.uClickPos.value[qe].set(it,Xe),X.uClickTimes.value[qe]=X.uTime.value,w.current&&(w.current.clickIx=(qe+1)%Vh)},Ht=Ce=>{if(!Pe)return;const{fx:it,fy:Xe,w:qe,h:F}=wt(Ce);Pe.addTouch({x:it/qe,y:Xe/F})};P.domElement.addEventListener("pointerdown",V,{passive:!0}),P.domElement.addEventListener("pointermove",Ht,{passive:!0});let at=0;const gt=()=>{if(x&&!L.current.visible){at=requestAnimationFrame(gt);return}X.uTime.value=Ee+ve.getElapsedTime()*k.current,tt&&(tt.uniforms.get("uTime").value=X.uTime.value),Oe?(Pe&&Pe.update(),Oe.passes.forEach(Ce=>{const it=Ce.effects;it&&it.forEach(Xe=>{const qe=Xe.uniforms?.get("uTime");qe&&(qe.value=X.uTime.value)})}),Oe.render()):P.render(Y,_e),at=requestAnimationFrame(gt)};at=requestAnimationFrame(gt),w.current={renderer:P,scene:Y,camera:_e,material:Me,clock:ve,clickIx:0,uniforms:X,resizeObserver:fe,raf:at,quad:se,timeOffset:Ee,composer:Oe,touch:Pe,liquidEffect:tt}}else{const J=w.current;if(J.uniforms.uShapeType.value=c_[a]??0,J.uniforms.uPixelSize.value=e*J.renderer.getPixelRatio(),J.uniforms.uColor.value.set(n),J.uniforms.uScale.value=u,J.uniforms.uDensity.value=h,J.uniforms.uPixelJitter.value=g,J.uniforms.uEnableRipples.value=_?1:0,J.uniforms.uRippleIntensity.value=y,J.uniforms.uRippleThickness.value=E,J.uniforms.uRippleSpeed.value=b,J.uniforms.uEdgeFade.value=D,T?J.renderer.setClearAlpha(0):J.renderer.setClearColor(0,1),J.liquidEffect){const P=J.liquidEffect;P&&(P.value=m);const X=J.liquidEffect.uniforms.get("uFreq");X&&(X.value=S)}J.touch&&(J.touch.radiusScale=v)}return R.current=$,()=>{if(w.current&&W||!w.current)return;const J=w.current;J.resizeObserver?.disconnect(),cancelAnimationFrame(J.raf),J.quad?.geometry.dispose(),J.material.dispose(),J.composer?.dispose(),J.renderer.dispose(),J.renderer.domElement.parentElement===H&&H.removeChild(J.renderer.domElement),w.current=null}},[c,p,I,e,u,h,_,y,E,b,g,D,T,m,v,S,x,a,n,N]),z.jsx("div",{ref:O,className:`pixel-blast-container ${s??""}`,style:o,"aria-label":"PixelBlast interactive background"})},PC=({children:a,className:e="",spotlightColor:n="rgba(255, 255, 255, 0.25)"})=>{const s=ft.useRef(null),o=c=>{const u=s.current.getBoundingClientRect(),h=c.clientX-u.left,p=c.clientY-u.top;s.current.style.setProperty("--mouse-x",`${h}px`),s.current.style.setProperty("--mouse-y",`${p}px`),s.current.style.setProperty("--spotlight-color",n)};return z.jsx("div",{ref:s,onMouseMove:o,className:`card-spotlight ${e}`,children:a})},zC=()=>z.jsx("style",{children:`
    html { scroll-behavior: smooth; }
    section[id] { scroll-margin-top: 80px; }
  `}),BC=()=>z.jsxs("svg",{width:"22",height:"11",viewBox:"0 0 25 12",fill:"none",children:[z.jsx("rect",{x:"0.5",y:"0.5",width:"21",height:"11",rx:"3.5",stroke:"#111",strokeOpacity:"0.35"}),z.jsx("rect",{x:"1",y:"1",width:"20",height:"10",rx:"3",fill:"#111"}),z.jsx("path",{d:"M23 4v4a2 2 0 0 0 0-4z",fill:"#111",fillOpacity:"0.4"})]}),IC=()=>z.jsx("svg",{width:"15",height:"11",viewBox:"0 0 16 12",fill:"#111",children:z.jsx("path",{d:"M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0-3.5a6 6 0 0 1 4.243 1.757l-1.415 1.414A4 4 0 0 0 8 8a4 4 0 0 0-2.828 1.172L3.757 7.757A6 6 0 0 1 8 6zm0-4a9.5 9.5 0 0 1 6.718 2.782L13.303 6.197A7.5 7.5 0 0 0 8 4a7.5 7.5 0 0 0-5.303 2.197L1.282 4.782A9.5 9.5 0 0 1 8 2z"})}),FC=()=>z.jsxs("svg",{width:"15",height:"11",viewBox:"0 0 17 12",fill:"#111",children:[z.jsx("rect",{x:"0",y:"8",width:"3",height:"4",rx:"1"}),z.jsx("rect",{x:"4.5",y:"6",width:"3",height:"6",rx:"1"}),z.jsx("rect",{x:"9",y:"3",width:"3",height:"9",rx:"1"}),z.jsx("rect",{x:"13.5",y:"0",width:"3",height:"12",rx:"1"})]}),HC=()=>z.jsx("svg",{width:"9",height:"10",viewBox:"0 0 10 16",fill:"none",children:z.jsx("path",{d:"M8.5 1.5L2 8l6.5 6.5",stroke:"#ffffff",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})}),u_=()=>{const[a,e]=ft.useState(!1),[n,s]=ft.useState(!1),[o,c]=ft.useState(!1);ft.useEffect(()=>{const h=setTimeout(()=>e(!0),150),p=setTimeout(()=>s(!0),750),m=setTimeout(()=>c(!0),1550);return()=>{clearTimeout(h),clearTimeout(p),clearTimeout(m)}},[]);const u="'Manrope', sans-serif";return z.jsx("div",{style:{padding:"1px",borderRadius:"47px",background:"#C7DAED",boxShadow:a?"0 0 0 2px #C7DAED, 0 36px 90px rgba(0,0,0,0.5)":"0 0 0 2px #C7DAED, 0 10px 30px rgba(0,0,0,0.3)",transform:a?"translateY(0) scale(1)":"translateY(28px) scale(0.94)",opacity:a?1:0,transition:"transform 0.7s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease, box-shadow 0.7s ease",flexShrink:0},children:z.jsxs("div",{style:{padding:"7px",borderRadius:"45px",background:"#111",position:"relative"},children:[z.jsx("div",{style:{position:"absolute",left:"-10px",top:"82px",width:"3px",height:"22px",background:"#111",borderRadius:"2px 0 0 2px"}}),z.jsx("div",{style:{position:"absolute",left:"-10px",top:"114px",width:"3px",height:"44px",background:"#111",borderRadius:"2px 0 0 2px"}}),z.jsx("div",{style:{position:"absolute",left:"-10px",top:"166px",width:"3px",height:"44px",background:"#111",borderRadius:"2px 0 0 2px"}}),z.jsx("div",{style:{position:"absolute",right:"-10px",top:"130px",width:"3px",height:"62px",background:"#111",borderRadius:"0 2px 2px 0"}}),z.jsxs("div",{style:{width:"280px",height:"552px",background:"#F9FAFB",borderRadius:"38px",overflow:"hidden",position:"relative",fontFamily:u},children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px 4px",position:"relative"},children:[z.jsx("span",{style:{fontSize:"12px",fontWeight:"700",color:"#111",fontFamily:u},children:"3:30"}),z.jsx("div",{style:{position:"absolute",top:"8px",left:"50%",transform:"translateX(-50%)",width:"78px",height:"22px",background:"#111",borderRadius:"12px",zIndex:10}}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[z.jsx(FC,{}),z.jsx(IC,{}),z.jsx(BC,{})]})]}),z.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 14px 10px",background:"#F9FAFB"},children:[z.jsx("div",{style:{width:"28px",height:"28px",background:"#a0b4ed",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:z.jsx(HC,{})}),z.jsx("span",{style:{fontSize:"11.5px",fontWeight:"700",color:"#111",fontFamily:u},children:"Punishment for Theft (PPC)"}),z.jsx("div",{style:{width:"28px",height:"28px",background:"#7B8FC7",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"10px",fontWeight:"400",fontFamily:u},children:"RZ"})]}),z.jsxs("div",{style:{background:"#fff",position:"absolute",top:"98px",left:0,right:0,bottom:0},children:[z.jsxs("div",{style:{padding:"12px 11px 0",display:"flex",flexDirection:"column",gap:"10px"},children:[z.jsx("div",{style:{display:"flex",justifyContent:"flex-end",opacity:o?1:0,transform:o?"translateY(0)":"translateY(8px)",transition:"opacity 0.4s ease 0s, transform 0.4s ease 0s"},children:z.jsx("div",{style:{background:"#C8CCE8",borderRadius:"14px 14px 3px 14px",padding:"10px 13px",maxWidth:"80%",fontSize:"11px",lineHeight:"1.5",color:"#111",fontFamily:u,fontWeight:"500"},children:"What is the punishment for theft under Section 379 PPC?"})}),z.jsx("div",{style:{display:"flex",justifyContent:"flex-start",opacity:o?1:0,transform:o?"translateY(0)":"translateY(8px)",transition:"opacity 0.45s ease 0.18s, transform 0.45s ease 0.18s"},children:z.jsxs("div",{style:{background:"#F4F5FA",borderRadius:"14px 14px 14px 3px",padding:"11px 13px",maxWidth:"90%",fontSize:"11px",lineHeight:"1.6",color:"#111",fontFamily:u,fontWeight:"400",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"},children:["Under Section 379 of the Pakistan Penal Code (PPC), theft is punishable with imprisonment which may extend to three years, or with fine, or with both.",z.jsx("br",{}),z.jsx("br",{}),z.jsx("span",{style:{color:"#777",fontSize:"10px",fontFamily:u},children:"Source: Pakistan Penal Code, 1860 – Section 379"})]})})]}),z.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"150px",background:"radial-gradient(ellipse at 50% 115%, hsla(228, 79%, 81%, 0.60) 0%, rgba(255,255,255,0) 68%)",pointerEvents:"none",opacity:n?1:0,transition:"opacity 0.7s ease"}}),z.jsxs("div",{style:{position:"absolute",bottom:"12px",left:"10px",right:"10px",background:"#F0F2FA",borderRadius:"18px",padding:"11px 10px 11px 14px",display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"8px",boxShadow:n?"0 0 0 3.5px rgba(155,175,245,0.4), 0 6px 24px rgba(155,175,245,0.35)":"0 0 0 0px rgba(155,175,245,0)",opacity:n?1:0,transform:n?"translateY(0)":"translateY(12px)",transition:"opacity 0.5s ease, transform 0.55s cubic-bezier(0.34,1.3,0.64,1), box-shadow 0.55s ease"},children:[z.jsx("span",{style:{fontSize:"11px",color:"#AAAABF",fontFamily:u,fontWeight:"500",flex:1,lineHeight:"1.4",paddingBottom:"2px"},children:"Write your legal query here"}),z.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[z.jsx("div",{style:{width:"27px",height:"27px",background:"#B4BCE0",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:z.jsx("svg",{width:"11",height:"11",viewBox:"0 0 12 12",fill:"none",children:z.jsx("path",{d:"M6 1v10M1 6h10",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})})}),z.jsx("div",{style:{width:"27px",height:"27px",background:"#B4BCE0",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:z.jsx("svg",{width:"11",height:"11",viewBox:"0 0 12 12",fill:"none",children:z.jsx("path",{d:"M6 10V2M2 6l4-4 4 4",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})]})})},GC=()=>{const[a,e]=ft.useState(0),[n,s]=ft.useState(!1),[o,c]=ft.useState(new Set),[u,h]=ft.useState(!1);ft.useEffect(()=>{const g=()=>e(window.scrollY);return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]),ft.useEffect(()=>{const g=new IntersectionObserver(_=>{_.forEach(y=>{y.isIntersecting&&c(E=>new Set([...E,y.target.id]))})},{threshold:.1});return document.querySelectorAll("[data-animate]").forEach(_=>g.observe(_)),()=>g.disconnect()},[]);const p=g=>o.has(g),m="'Manrope', sans-serif",v=a>100;return z.jsxs(z.Fragment,{children:[z.jsx(zC,{}),z.jsxs("div",{className:"min-h-screen",style:{fontFamily:m},children:[z.jsxs("header",{className:"fixed top-0 w-full z-50 transition-all duration-300",style:{opacity:v?1:0,transform:v?"translateY(0)":"translateY(-100%)",backgroundColor:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)",boxShadow:v?"0 2px 10px rgba(0,0,0,0.1)":"none",pointerEvents:v?"auto":"none",padding:"12px 0"},children:[z.jsxs("nav",{className:"max-w-7xl mx-auto px-6 flex items-center justify-between",children:[z.jsxs("div",{className:"flex items-center space-x-1",children:[z.jsx("img",{src:"/dexalt.png",alt:"Dextera",className:"w-5.5 h-6 mr-0.5"}),z.jsx("span",{className:"text-2xl manrope-logo",style:{color:"#6F78A4"},children:"extera"})]}),z.jsxs("div",{className:"hidden md:flex items-center space-x-6",children:[[["SDG 16","#mission"],["Users","#users"],["Features","#features"],["How It Works","#how-it-works"],["Technology","#tech"],["Comparison","#comparison"],["Ethics","#ethics"]].map(([g,_],y)=>z.jsx("a",{href:_,className:"text-slate-700 hover:text-blue-700 transition-colors",style:{fontFamily:m},children:g},y)),z.jsx("button",{className:"px-6 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 hover:shadow-lg transition-all duration-300",style:{fontFamily:m},children:"Try Dextera"})]}),z.jsx("button",{className:"md:hidden",onClick:()=>s(!n),children:n?z.jsx(RM,{className:"w-6 h-6"}):z.jsx(yM,{className:"w-6 h-6"})})]}),n&&z.jsx("div",{className:"md:hidden bg-white border-t",children:z.jsxs("div",{className:"px-6 py-4 space-y-3",children:[[["SDG 16","#mission"],["Users","#users"],["Features","#features"],["How It Works","#how-it-works"],["Technology","#tech"],["Comparison","#comparison"],["Ethics","#ethics"]].map(([g,_],y)=>z.jsx("a",{href:_,className:"block text-slate-700",style:{fontFamily:m},onClick:()=>s(!1),children:g},y)),z.jsx("button",{className:"w-full px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300",style:{fontFamily:m},children:"Try Dextera"})]})})]}),z.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[z.jsx("div",{className:"absolute inset-0",style:{zIndex:0,background:"linear-gradient(90deg, #6F78A4 0%, #ffffff 100%)"},children:z.jsx("style",{children:`
      @media (max-width: 768px) {
        .hero-gradient { background: linear-gradient(180deg, #6F78A4 0%, #ffffff 100%) !important; }
      }
    `})}),z.jsx("div",{className:"absolute inset-0 hero-gradient",style:{zIndex:0,background:"linear-gradient(90deg, #3e4a83 0%, #ffffff 100%)"}}),z.jsx("div",{className:"absolute inset-0",style:{zIndex:1},children:z.jsx(OC,{variant:"square",pixelSize:7,color:"#ffffff",patternScale:2,patternDensity:1.1,pixelSizeJitter:0,enableRipples:!0,rippleSpeed:.3,rippleThickness:.1,rippleIntensityScale:1.2,liquid:!1,speed:.5,edgeFade:.5,transparent:!0,antialias:!1})}),z.jsxs("div",{className:"relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full h-full min-h-[90vh] flex flex-col",style:{zIndex:10},children:[z.jsxs("div",{className:"hidden md:block relative flex-1",children:[z.jsxs("div",{className:"absolute top-0 left-0",children:[z.jsxs("div",{className:"flex items-center mb-4",children:[z.jsx("img",{src:"/DexLogo.png",alt:"",className:"w-14 h-15 mr-1"}),z.jsx("h1",{className:"text-6xl manrope-logo text-white",children:"extera"})]}),z.jsx("h2",{className:"text-5xl manrope-medium text-white",children:"Your Right Hand in Criminal Law"})]}),z.jsx("div",{className:"absolute pl-8 md:pl-12 lg:pl-0",style:{top:"160px",left:"0"},children:z.jsxs("button",{className:"px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center",style:{fontFamily:m},children:["Get Started ",z.jsx(iv,{className:"ml-2 w-5 h-5"})]})}),z.jsx("div",{className:"absolute pl-8 md:pl-12 lg:pl-60",style:{top:"160px",left:"40px"},children:z.jsx(u_,{})}),z.jsx("div",{className:"absolute bottom-0 right-0 mb-20",children:z.jsxs("div",{className:"flex flex-col space-y-4",children:[z.jsx("div",{className:"text-3xl md:text-5xl font-bold text-[#6177AC] leading-tight whitespace-nowrap text-right",style:{fontFamily:m},children:"Smart Legal Intel +"}),z.jsx("div",{className:"text-3xl md:text-5xl font-bold text-[#6177AC] leading-tight whitespace-nowrap text-right",style:{fontFamily:m},children:"Document Analysis +"}),z.jsx("div",{className:"text-3xl md:text-5xl font-bold text-[#6177AC] leading-tight whitespace-nowrap text-right",style:{fontFamily:m},children:"Precedent Case Citations"})]})})]}),z.jsxs("div",{className:"md:hidden flex flex-col items-center space-y-8",children:[z.jsxs("div",{className:"text-center",children:[z.jsxs("div",{className:"flex items-center justify-center mb-4",children:[z.jsx("img",{src:"/DexLogo.png",alt:"",className:"w-11 h-12 mr-0.5"}),z.jsx("h1",{className:"text-5xl manrope-logo text-white",children:"extera"})]}),z.jsx("h2",{className:"text-3xl manrope-medium text-white mb-6",children:"Your Right Hand in Criminal Law"}),z.jsxs("button",{className:"px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 inline-flex items-center",style:{fontFamily:m},children:["Get Started ",z.jsx(iv,{className:"ml-2 w-5 h-5"})]})]}),z.jsx(u_,{}),z.jsx("div",{className:"flex flex-col space-y-4 text-center pt-8",children:["Smart Legal Intel +","Document Analysis +","Precedent Case Citations"].map((g,_)=>z.jsx("div",{className:"text-3xl md:text-5xl manrope-semibold text-[#7B8DB8] leading-tight",style:{fontFamily:m},children:g},_))})]})]})]}),z.jsxs("section",{id:"problem",className:"py-20 bg-white relative overflow-hidden","data-animate":!0,children:[z.jsx("div",{className:"absolute inset-0",style:{zIndex:0},children:z.jsx(g1,{dotSize:10,gap:15,baseColor:"#ffffff",activeColor:"#d9e0ff",proximity:120,shockRadius:500,shockStrength:20,resistance:750,returnDuration:3})}),z.jsxs("div",{className:`relative max-w-6xl mx-auto px-6 transition-all duration-1000 ${p("problem")?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{zIndex:1},children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4",style:{fontFamily:m},children:"The Law Should Be Understandable. It Isn't."}),z.jsx("p",{className:"text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto",style:{fontFamily:m},children:"Access to justice requires understanding the law, but legal complexity creates barriers for millions."}),z.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"Complex Legal Language",desc:"Legalese and Latin terms make statutes incomprehensible to laypeople",stat:"68% of legal documents misunderstood"},{title:"High Consultation Costs",desc:"Legal fees range from Rs. 50,000–100,000, excluding most citizens",stat:"Rs. 50k–100k average cost"},{title:"Pro Se Litigation Failure",desc:"Self-represented litigants lose 80–90% of cases due to lack of legal knowledge",stat:"80–90% loss rate"},{title:"AI Misinformation",desc:"General AI tools hallucinate legal facts and provide unreliable information",stat:"No verification mechanisms"},{title:"No Pakistan-Specific Tools",desc:"Existing legal AI is trained on Western law, not Pakistani statutes",stat:"Zero local alternatives"},{title:"Information Barriers",desc:"Legal precedents and judgments are scattered and inaccessible",stat:"Fragmented resources"}].map((g,_)=>z.jsx(PC,{className:"bg-[#F2F5FF] hover:shadow-lg",spotlightColor:"#bcc5ee ",children:z.jsxs("div",{className:"p-6 rounded-xl transition-all duration-300 hover:-translate-y-1",children:[z.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",style:{fontFamily:m},children:g.title}),z.jsx("p",{className:"text-slate-600 mb-4",style:{fontFamily:m},children:g.desc}),z.jsx("div",{className:"text-sm font-semibold text-[#58649A]",style:{fontFamily:m},children:g.stat})]})},_))})]})]}),z.jsxs("section",{id:"mission",className:"py-20 text-white relative overflow-hidden",style:{background:"linear-gradient(to right, #476DA6, #6F78A4)"},"data-animate":!0,children:[z.jsx("div",{className:"absolute inset-0 opacity-10",style:{zIndex:0},children:z.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl",style:{transform:`translateY(${a*.15}px)`}})}),z.jsxs("div",{className:`relative max-w-6xl mx-auto px-6 transition-all duration-1000 ${p("mission")?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{zIndex:1},children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-6",style:{fontFamily:m},children:"Built for Justice, Not Just Technology"}),z.jsx("p",{className:"text-xl text-center text-blue-100 mb-12 max-w-3xl mx-auto",style:{fontFamily:m},children:'Dextera means "Right Hand" in Latin—symbolizing justice, lawfulness, and the augmentation of human capability.'}),z.jsx("div",{className:"grid md:grid-cols-3 gap-8 mb-12",children:[{icon:z.jsx(uh,{className:"w-8 h-8 text-white"}),title:"Augment, Not Replace",desc:"Designed to support lawyers and legal professionals, not substitute them."},{icon:z.jsx(rv,{className:"w-8 h-8 text-white"}),title:"Democratize Access",desc:"Make legal knowledge accessible to all, regardless of economic status."},{icon:z.jsx(ch,{className:"w-8 h-8 text-white"}),title:"Ground in Truth",desc:"Every answer backed by verified Pakistani statutes and case law."}].map((g,_)=>z.jsxs("div",{className:"text-center",children:[z.jsx("div",{className:"w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4",children:g.icon}),z.jsx("h3",{className:"text-xl font-bold mb-2",style:{fontFamily:m},children:g.title}),z.jsx("p",{className:"text-blue-100",style:{fontFamily:m},children:g.desc})]},_))}),z.jsxs("div",{className:"rounded-2xl p-8 border border-white/30 relative overflow-hidden",style:{background:"linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.18) 100%)",backdropFilter:"blur(16px)",boxShadow:"0 8px 32px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.4) inset, 0 -1px 0 rgba(0,0,0,0.1) inset"},children:[z.jsx("div",{className:"absolute top-0 left-0 right-0 h-px",style:{background:"rgba(255,255,255,0.6)"}}),z.jsx("div",{className:"absolute top-0 left-0 right-0 rounded-t-2xl",style:{height:"40%",background:"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",pointerEvents:"none"}}),z.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8",children:[z.jsxs("div",{className:"flex-1 text-center md:text-left",children:[z.jsx("p",{className:"text-blue-200 text-sm font-semibold uppercase tracking-widest mb-1",style:{fontFamily:m},children:"United Nations"}),z.jsx("p",{className:"text-white text-lg font-semibold leading-snug mb-2",style:{fontFamily:m},children:"Sustainable Development Goals"}),z.jsx("p",{className:"text-5xl font-bold text-white",style:{fontFamily:m},children:"SDG 16"})]}),z.jsx("div",{className:"flex-shrink-0 w-28 h-28 bg-white rounded-full flex items-center justify-center overflow-hidden p-2 shadow-lg",children:z.jsx("img",{src:"/UN.png",alt:"UN SDG 16",className:"w-full h-full object-contain"})}),z.jsxs("div",{className:"flex-1 text-center md:text-right",children:[z.jsx("p",{className:"text-white mb-2 font-extrabold",style:{fontFamily:m,fontSize:"1.6rem",textShadow:"0 2px 12px rgba(255,255,255,0.3)",letterSpacing:"-0.01em"},children:"Aligned with SDG 16"}),z.jsx("p",{className:"text-blue-100 text-base mb-2",style:{fontFamily:m},children:"Peace, Justice and Strong Institutions"}),z.jsx("p",{className:"text-blue-200 text-sm font-semibold tracking-wide",style:{fontFamily:m},children:"for 2030"})]})]})]})]}),z.jsx("div",{className:"absolute inset-0",style:{zIndex:10},children:z.jsx(sM,{baseThickness:30,colors:["#ffffff"],speedMultiplier:.3,maxAge:600,enableFade:!0,enableShaderEffect:!1,backgroundColor:[0,0,0,0]})})]}),z.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden relative",style:{minHeight:"160px"},children:[z.jsx("section",{id:"users",className:"py-20 bg-slate-50","data-animate":!0,children:z.jsxs("div",{className:`max-w-6xl mx-auto px-6 transition-all duration-1000 ${p("users")?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4",style:{fontFamily:m},children:"Who Dextera Is For"}),z.jsx("p",{className:"text-xl text-center text-slate-600 mb-16",style:{fontFamily:m},children:"Built to serve legal professionals, students, and citizens seeking justice."}),z.jsx("div",{className:"flex justify-center mb-16 transition-all duration-300",style:{minHeight:"160px",paddingTop:u?"140px":"52px"},children:z.jsx(CM,{color:"#6F78A4",size:2,onToggle:g=>h(g),items:[z.jsx("div",{style:{padding:"6px",fontSize:"8px",color:"#444",fontFamily:"'Manrope', sans-serif",lineHeight:1.4},children:"Law Students"}),z.jsx("div",{style:{padding:"6px",fontSize:"8px",color:"#444",fontFamily:"'Manrope', sans-serif",lineHeight:1.4},children:"General Public"}),z.jsx("div",{style:{padding:"6px",fontSize:"8px",color:"#444",fontFamily:"'Manrope', sans-serif",lineHeight:1.4},children:"Legal Professionals"})]})}),z.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{icon:z.jsx(ch,{className:"w-8 h-8"}),title:"Legal Professionals",subtitle:"Lawyers, Advocates, Paralegals",benefits:["Faster legal research","Precedent discovery","Document summarization","Verified citations"]},{icon:z.jsx(hM,{className:"w-8 h-8"}),title:"Law Students",subtitle:"Criminal Law Learners",benefits:["Plain-language explanations","Case law references","Exam preparation aid","Conceptual understanding"]},{icon:z.jsx(rv,{className:"w-8 h-8"}),title:"General Public",subtitle:"Self-Represented Individuals",benefits:["Understand your rights","Decode FIRs and judgments","Avoid misinformation","Legal awareness"]}].map((g,_)=>z.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2",children:[z.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4",children:g.icon}),z.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-2",style:{fontFamily:m},children:g.title}),z.jsx("p",{className:"text-slate-600 mb-6",style:{fontFamily:m},children:g.subtitle}),z.jsx("ul",{className:"space-y-3",children:g.benefits.map((y,E)=>z.jsxs("li",{className:"flex items-start",children:[z.jsx(oh,{className:"w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"}),z.jsx("span",{className:"text-slate-700",style:{fontFamily:m},children:y})]},E))})]},_))})]})}),z.jsx("section",{id:"features",className:"py-20 bg-white","data-animate":!0,children:z.jsxs("div",{className:`max-w-6xl mx-auto px-6 transition-all duration-1000 ${p("features")?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16",style:{fontFamily:m},children:"Core Features"}),z.jsx("div",{className:"grid md:grid-cols-2 gap-12",children:[{icon:z.jsx(sv,{className:"w-8 h-8"}),title:"Legal Query Chatbot",desc:"Ask questions in natural language and receive plain-language or detailed citation-based legal answers.",features:["Natural language processing","Plain English mode","Detailed legal mode","Multi-turn conversations"]},{icon:z.jsx(sv,{className:"w-8 h-8"}),title:"Document Summarizer",desc:"Upload FIRs, judgments, and court orders to extract key clauses, obligations, risks, and dates.",features:["PDF upload support","OCR capability","Key clause extraction","Risk identification"]},{icon:z.jsx(EM,{className:"w-8 h-8"}),title:"Precedent Case Finder",desc:"Find relevant Pakistani judgments from Supreme Court and High Courts with proper citations.",features:["Supreme Court cases","High Court judgments","Citation formatting","Relevance ranking"]},{icon:z.jsx(uh,{className:"w-8 h-8"}),title:"Source-Backed Answers",desc:"Every response references PPC, CrPC, QSO, and PECA with verification to prevent hallucinations.",features:["PPC references","CrPC citations","QSO compliance","No hallucinations"]}].map((g,_)=>z.jsx("div",{className:"group",children:z.jsxs("div",{className:"flex items-start space-x-4",children:[z.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300",children:g.icon}),z.jsxs("div",{children:[z.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-3",style:{fontFamily:m},children:g.title}),z.jsx("p",{className:"text-slate-600 mb-4",style:{fontFamily:m},children:g.desc}),z.jsx("ul",{className:"space-y-2",children:g.features.map((y,E)=>z.jsxs("li",{className:"flex items-center text-sm text-slate-700",style:{fontFamily:m},children:[z.jsx("div",{className:"w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"}),y]},E))})]})]})},_))})]})}),z.jsx("section",{id:"how-it-works",className:"py-20 bg-slate-50","data-animate":!0,children:z.jsxs("div",{className:`max-w-6xl mx-auto px-6 transition-all duration-1000 ${p("how-it-works")?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4",style:{fontFamily:m},children:"How Dextera Works"}),z.jsx("p",{className:"text-xl text-center text-slate-600 mb-16",style:{fontFamily:m},children:"Intelligence backed by retrieval-augmented generation and verified legal sources."}),z.jsxs("div",{className:"relative",children:[z.jsx("div",{className:"absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"}),z.jsx("div",{className:"space-y-12",children:[{step:"1",title:"User Input",desc:"Type a legal question or upload a document (FIR, judgment, court order)."},{step:"2",title:"Query Understanding",desc:"Natural language query is converted into vector embeddings for semantic search."},{step:"3",title:"Smart Legal Retrieval",desc:"RAG system fetches relevant laws, sections, and precedents from verified database."},{step:"4",title:"AI Reasoning",desc:"Legal LLM processes retrieved content to generate accurate, context-aware responses."},{step:"5",title:"Grounded Response",desc:"Plain English explanation with citations to PPC, CrPC, case law, and statutes."},{step:"6",title:"User Output",desc:"Readable, trustworthy answer with verifiable sources for further research."}].map((g,_)=>z.jsxs("div",{className:"flex items-start space-x-6",children:[z.jsx("div",{className:"w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg",style:{fontFamily:m},children:g.step}),z.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md flex-1 hover:shadow-lg transition-all duration-300",children:[z.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-2",style:{fontFamily:m},children:g.title}),z.jsx("p",{className:"text-slate-600",style:{fontFamily:m},children:g.desc})]})]},_))})]})]})}),z.jsx("section",{id:"tech",className:"py-20 bg-white","data-animate":!0,children:z.jsxs("div",{className:`max-w-6xl mx-auto px-6 transition-all duration-1000 ${p("tech")?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16",style:{fontFamily:m},children:"Technology Stack"}),z.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{title:"Backend & AI",items:["Python","Hugging Face","PyTorch","LangChain","Custom Legal LLM","RAG System","Vector Database"]},{title:"Cloud & Infrastructure",items:["AWS SageMaker","AWS Lambda","DynamoDB","CloudWatch","Docker","GitHub Actions","CI/CD Pipeline"]},{title:"Frontend & Design",items:["Flutter (Web/Mobile)","Figma UI/UX","REST APIs","FastAPI","Responsive Design","Clean Architecture"]}].map((g,_)=>z.jsxs("div",{className:"bg-slate-50 p-8 rounded-2xl",children:[z.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-6",style:{fontFamily:m},children:g.title}),z.jsx("ul",{className:"space-y-3 text-slate-700",children:g.items.map((y,E)=>z.jsxs("li",{className:"flex items-center",style:{fontFamily:m},children:[z.jsx("div",{className:"w-2 h-2 bg-blue-700 rounded-full mr-3"}),y]},E))})]},_))})]})}),z.jsx("section",{id:"comparison",className:"py-20 bg-slate-50","data-animate":!0,children:z.jsxs("div",{className:`max-w-4xl mx-auto px-6 transition-all duration-1000 ${p("comparison")?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16",style:{fontFamily:m},children:"Why Choose Dextera?"}),z.jsx("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:z.jsxs("table",{className:"w-full",children:[z.jsx("thead",{className:"bg-blue-700 text-white",children:z.jsxs("tr",{children:[z.jsx("th",{className:"px-6 py-4 text-left",style:{fontFamily:m},children:"Feature"}),z.jsx("th",{className:"px-6 py-4 text-center",style:{fontFamily:m},children:"General AI"}),z.jsx("th",{className:"px-6 py-4 text-center",style:{fontFamily:m},children:"Dextera"})]})}),z.jsx("tbody",{className:"divide-y divide-slate-200",children:[["Pakistani Law Expertise",!1,!0],["Verified Citations",!1,!0],["RAG-based Accuracy",!1,!0],["Legal Document Analysis",!1,!0],["Ethical Boundaries",!1,!0],["Case Law References",!1,!0]].map((g,_)=>z.jsxs("tr",{className:"hover:bg-slate-50 transition-colors",children:[z.jsx("td",{className:"px-6 py-4 font-medium text-slate-900",style:{fontFamily:m},children:g[0]}),z.jsx("td",{className:"px-6 py-4 text-center",children:g[1]?z.jsx(oh,{className:"w-6 h-6 text-green-600 mx-auto"}):z.jsx(av,{className:"w-6 h-6 text-red-500 mx-auto"})}),z.jsx("td",{className:"px-6 py-4 text-center",children:g[2]?z.jsx(oh,{className:"w-6 h-6 text-green-600 mx-auto"}):z.jsx(av,{className:"w-6 h-6 text-red-500 mx-auto"})})]},_))})]})})]})}),z.jsx("section",{id:"ethics",className:"py-20 bg-white","data-animate":!0,children:z.jsxs("div",{className:`max-w-6xl mx-auto px-6 transition-all duration-1000 ${p("ethics")?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4",style:{fontFamily:m},children:"Ethics, Accuracy & Limitations"}),z.jsx("p",{className:"text-xl text-center text-slate-600 mb-16",style:{fontFamily:m},children:"Transparency and honesty are foundational to Dextera's mission."}),z.jsxs("div",{className:"bg-amber-50 border-l-4 border-amber-500 p-8 rounded-lg mb-12",children:[z.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-4",style:{fontFamily:m},children:"Important Disclaimer"}),z.jsx("ul",{className:"space-y-3 text-slate-700",children:["Dextera does not provide legal advice","Dextera does not replace qualified lawyers","Dextera does not draft legally binding documents","For awareness, education, and research purposes only"].map((g,_)=>z.jsxs("li",{className:"flex items-start",style:{fontFamily:m},children:[z.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"}),g]},_))})]}),z.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{icon:z.jsx(uh,{className:"w-8 h-8 text-blue-700"}),title:"Augmentation Over Replacement",desc:"Designed to assist legal professionals, not substitute human judgment and expertise."},{icon:z.jsx(vM,{className:"w-8 h-8 text-blue-700"}),title:"Transparency via Citations",desc:"Every answer includes verifiable sources and references to Pakistani law."},{icon:z.jsx(ch,{className:"w-8 h-8 text-blue-700"}),title:"Pakistan-Specific Grounding",desc:"Built exclusively on Pakistani criminal law statutes and jurisprudence."}].map((g,_)=>z.jsxs("div",{className:"text-center",children:[z.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",children:g.icon}),z.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",style:{fontFamily:m},children:g.title}),z.jsx("p",{className:"text-slate-600",style:{fontFamily:m},children:g.desc})]},_))})]})}),z.jsx("section",{className:"py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white",children:z.jsxs("div",{className:"max-w-4xl mx-auto px-6 text-center",children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6",style:{fontFamily:m},children:"Ready to Experience Dextera?"}),z.jsx("p",{className:"text-xl text-blue-100 mb-8",style:{fontFamily:m},children:"Start understanding Pakistani criminal law with AI-powered assistance."}),z.jsx("button",{className:"px-10 py-4 bg-white text-blue-700 rounded-lg text-lg font-semibold hover:bg-blue-50 hover:shadow-2xl transition-all duration-300",style:{fontFamily:m},children:"Try Dextera Now"})]})}),z.jsx("footer",{className:"bg-slate-900 text-slate-300 py-12",children:z.jsx("div",{className:"text-center text-sm",style:{fontFamily:m},children:z.jsx("p",{children:"This is an academic project. Dextera does not provide legal advice and does not replace qualified lawyers."})})})]})]})]})};m1.createRoot(document.getElementById("root")).render(z.jsx(l1.StrictMode,{children:z.jsx(GC,{})}));
