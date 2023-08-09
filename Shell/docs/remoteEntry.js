var Shell;(()=>{"use strict";var e,r,t,n,o,a,i,l,u,f,s,d,h,p,c,v,m,g,b={926:(e,r,t)=>{var n={"./store":()=>Promise.all([t.e(416),t.e(748),t.e(200),t.e(890)]).then((()=>()=>t(890))),"./Header":()=>Promise.all([t.e(416),t.e(748),t.e(200),t.e(570)]).then((()=>()=>t(570)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},y={};function S(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,exports:{}};return b[e](t,t.exports,S),t.exports}S.m=b,S.c=y,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+".js",S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="Shell:",S.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var a=S.S[t],i="Shell",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@reduxjs/toolkit","1.9.5",(()=>S.e(152).then((()=>()=>S(152))))),l("react-dom","18.2.0",(()=>Promise.all([S.e(935),S.e(416)]).then((()=>()=>S(935))))),l("react-redux","8.1.2",(()=>Promise.all([S.e(297),S.e(416),S.e(51)]).then((()=>()=>S(297))))),l("react","18.2.0",(()=>S.e(294).then((()=>()=>S(294)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),S.p="https://maximepeterburg.github.io/Shell-mf-rtk/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var f,s,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!u||("u"==d?l>n&&!o:""==d!=o);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(l<=n){if(f!=e[l])return!1}else{if(o?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||s<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var h=[],p=h.pop.bind(h);for(i=1;i<e.length;i++){var c=e[i];h.push(1==c?p()|p():2==c?p()&p():c?a(c,r):!p())}return!!p()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||s(l(e,t,o,n)),d(e[t][o])},f=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},d=e=>(e.loaded=1,e.get()),p=(h=e=>function(r,t,n,o){var a=S.I(r);return a&&a.then?a.then(e.bind(e,r,S.S[r],t,n,o)):e(r,S.S[r],t,n,o)})(((e,r,t,n,o)=>r&&S.o(r,t)?u(r,0,t,n):o())),c=h(((e,r,t,n,o)=>{var a=r&&S.o(r,t)&&f(r,t,n);return a?d(a):o()})),v={},m={416:()=>p("default","react",[1,18,2,0],(()=>S.e(294).then((()=>()=>S(294))))),51:()=>p("default","react-dom",[1,18,2,0],(()=>S.e(935).then((()=>()=>S(935))))),748:()=>c("default","@reduxjs/toolkit",[1,1,9,5],(()=>S.e(152).then((()=>()=>S(152))))),200:()=>c("default","react-redux",[1,8,1,2],(()=>Promise.all([S.e(297),S.e(51)]).then((()=>()=>S(297)))))},g={51:[51],200:[200],416:[416],748:[748]},S.f.consumes=(e,r)=>{S.o(g,e)&&g[e].forEach((e=>{if(S.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}},n=r=>{delete v[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var o=m[e]();o.then?r.push(v[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={483:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(200|416|51|748)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=S.p+S.u(r),i=new Error;S.l(a,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)S.o(i,n)&&(S.m[n]=i[n]);l&&l(S)}for(r&&r(t);u<a.length;u++)o=a[u],S.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkShell=self.webpackChunkShell||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),S.nc=void 0;var w=S(926);Shell=w})();