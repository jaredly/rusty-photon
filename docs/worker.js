!function(e){self.webpackChunk=function(n,r){for(var o in r)e[o]=r[o];for(;n.length;)t[n.pop()]=1};var n={},t={0:1},r={};var o={2:function(){return{"./zenphoton_worker":{__wbindgen_json_serialize:function(e,t){return n[1].exports.__wbindgen_json_serialize(e,t)},__wbindgen_cb_drop:function(e){return n[1].exports.__wbindgen_cb_drop(e)},__wbindgen_object_drop_ref:function(e){return n[1].exports.__wbindgen_object_drop_ref(e)},__wbg_new_59cb74e423758ede:function(){return n[1].exports.__wbg_new_59cb74e423758ede()},__wbg_stack_558ba5917b466edd:function(e,t){return n[1].exports.__wbg_stack_558ba5917b466edd(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return n[1].exports.__wbg_error_4bb6c2a97407129a(e,t)},__wbg_now_19cd6212bc52daa3:function(){return n[1].exports.__wbg_now_19cd6212bc52daa3()},__wbg_new_3a746f2619705add:function(e,t){return n[1].exports.__wbg_new_3a746f2619705add(e,t)},__wbg_call_f54d3a6dadb199ca:function(e,t){return n[1].exports.__wbg_call_f54d3a6dadb199ca(e,t)},__wbindgen_jsval_eq:function(e,t){return n[1].exports.__wbindgen_jsval_eq(e,t)},__wbg_self_ac379e780a0d8b94:function(e){return n[1].exports.__wbg_self_ac379e780a0d8b94(e)},__wbg_require_6461b1e9a0d7c34a:function(e,t){return n[1].exports.__wbg_require_6461b1e9a0d7c34a(e,t)},__wbg_crypto_1e4302b85d4f64a2:function(e){return n[1].exports.__wbg_crypto_1e4302b85d4f64a2(e)},__wbindgen_is_undefined:function(e){return n[1].exports.__wbindgen_is_undefined(e)},__wbg_getRandomValues_1b4ba144162a5c9e:function(e){return n[1].exports.__wbg_getRandomValues_1b4ba144162a5c9e(e)},__wbg_getRandomValues_1ef11e888e5228e9:function(e,t,r){return n[1].exports.__wbg_getRandomValues_1ef11e888e5228e9(e,t,r)},__wbg_randomFillSync_1b52c8482374c55b:function(e,t,r){return n[1].exports.__wbg_randomFillSync_1b52c8482374c55b(e,t,r)},__wbindgen_throw:function(e,t){return n[1].exports.__wbindgen_throw(e,t)},__wbindgen_rethrow:function(e){return n[1].exports.__wbindgen_rethrow(e)}}}}};function _(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,_),r.l=!0,r.exports}_.e=function(e){var n=[];return n.push(Promise.resolve().then(function(){t[e]||importScripts(e+".worker.js")})),({1:[2]}[e]||[]).forEach(function(e){var t=r[e];if(t)n.push(t);else{var a,i=o[e](),u=fetch(_.p+""+{2:"90402a876284f62906b3"}[e]+".module.wasm");if(i instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)a=Promise.all([WebAssembly.compileStreaming(u),i]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)a=WebAssembly.instantiateStreaming(u,i);else{a=u.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,i)})}n.push(r[e]=a.then(function(n){return _.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},_.m=e,_.c=n,_.d=function(e,n,t){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(_.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)_.d(t,r,function(n){return e[n]}.bind(null,r));return t},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="",_.w={},_(_.s=0)}([function(e,n,t){var r=null;onmessage=e=>{console.log("not ready yet"),r=e.data};let o=null,_=e=>{o=setTimeout(()=>{e()||_(e)},1)};t.e(1).then(t.bind(null,1)).then(e=>{let n=n=>{clearTimeout(o);const t=performance.now(),r=e.process(n),a=performance.now();let i=r.rays(),u=r.data().buffer,s=i,c=(a-t)/1e3;postMessage({id:n.id,buffer:u,total_rays:s,total_seconds:c},[u]),_(()=>{const t=performance.now(),r=e.process(n),o=performance.now(),_=r.rays();s+=_,c+=(o-t)/1e3;let a=r.data().buffer;return postMessage({id:n.id,buffer:a,total_rays:s,total_seconds:c},[a]),s>=n.count})};r&&n(r),onmessage=e=>n(e.data)})}]);