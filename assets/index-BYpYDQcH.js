(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var bc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Jd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ql={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,_=(i&3)<<4|c>>4;let T=(c&15)<<2|d>>6,S=d&63;u||(S=64,a||(T=64)),r.push(t[p],t[_],t[T],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||_==null)throw new Xd;const T=i<<2|c>>4;if(r.push(T),d!==64){const S=c<<4&240|d>>2;if(r.push(S),_!==64){const C=d<<6&192|_;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zd=function(n){const e=Kl(n);return Ql.encodeByteArray(e,!0)},ys=function(n){return Zd(n).replace(/\./g,"")},Yl=function(n){try{return Ql.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=()=>ef().__FIREBASE_DEFAULTS__,nf=()=>{if(typeof process>"u"||typeof bc>"u")return;const n=bc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yl(n[1]);return e&&JSON.parse(e)},Fs=()=>{try{return tf()||nf()||rf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jl=n=>{var e,t;return(t=(e=Fs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},sf=n=>{const e=Jl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xl=()=>{var n;return(n=Fs())===null||n===void 0?void 0:n.config},Zl=n=>{var e;return(e=Fs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ys(JSON.stringify(t)),ys(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function lf(){var n;const e=(n=Fs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ff(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pf(){return!lf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mf(){try{return typeof indexedDB=="object"}catch{return!1}}function gf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="FirebaseError";class ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yf,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?_f(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ft(s,c,r)}}function _f(n,e){return n.replace(vf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vf=/\{\$([^}]+)}/g;function Ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _s(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Sc(i)&&Sc(a)){if(!_s(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Sc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wf(n,e){const t=new If(n,e);return t.subscribe.bind(t)}class If{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Tf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Pi),s.error===void 0&&(s.error=Pi),s.complete===void 0&&(s.complete=Pi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n){return n&&n._delegate?n._delegate:n}class Kt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new of;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sf(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bf(n){return n===Bt?void 0:n}function Sf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Af(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Cf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Pf=W.INFO,kf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Df=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=kf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=Pf,this._logHandler=Df,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Vf=(n,e)=>e.some(t=>n instanceof t);let Rc,Cc;function Lf(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nf(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eu=new WeakMap,$i=new WeakMap,tu=new WeakMap,ki=new WeakMap,yo=new WeakMap;function xf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Rt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&eu.set(t,n)}).catch(()=>{}),yo.set(e,n),e}function Of(n){if($i.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});$i.set(n,e)}let ji={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $i.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Mf(n){ji=n(ji)}function Ff(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Di(this),e,...t);return tu.set(r,e.sort?e.sort():[e]),Rt(r)}:Nf().includes(n)?function(...e){return n.apply(Di(this),e),Rt(eu.get(this))}:function(...e){return Rt(n.apply(Di(this),e))}}function Uf(n){return typeof n=="function"?Ff(n):(n instanceof IDBTransaction&&Of(n),Vf(n,Lf())?new Proxy(n,ji):n)}function Rt(n){if(n instanceof IDBRequest)return xf(n);if(ki.has(n))return ki.get(n);const e=Uf(n);return e!==n&&(ki.set(n,e),yo.set(e,n)),e}const Di=n=>yo.get(n);function Bf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Rt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Rt(a.result),u.oldVersion,u.newVersion,Rt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const qf=["get","getKey","getAll","getAllKeys","count"],$f=["put","add","delete","clear"],Vi=new Map;function Pc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=$f.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qf.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Vi.set(e,i),i}Mf(n=>({...n,get:(e,t,r)=>Pc(e,t)||n.get(e,t,r),has:(e,t)=>!!Pc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Wf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Wf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wi="@firebase/app",kc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new go("@firebase/app"),zf="@firebase/app-compat",Hf="@firebase/analytics-compat",Gf="@firebase/analytics",Kf="@firebase/app-check-compat",Qf="@firebase/app-check",Yf="@firebase/auth",Jf="@firebase/auth-compat",Xf="@firebase/database",Zf="@firebase/data-connect",ep="@firebase/database-compat",tp="@firebase/functions",np="@firebase/functions-compat",rp="@firebase/installations",sp="@firebase/installations-compat",ip="@firebase/messaging",op="@firebase/messaging-compat",ap="@firebase/performance",cp="@firebase/performance-compat",lp="@firebase/remote-config",up="@firebase/remote-config-compat",hp="@firebase/storage",dp="@firebase/storage-compat",fp="@firebase/firestore",pp="@firebase/vertexai-preview",mp="@firebase/firestore-compat",gp="firebase",yp="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="[DEFAULT]",_p={[Wi]:"fire-core",[zf]:"fire-core-compat",[Gf]:"fire-analytics",[Hf]:"fire-analytics-compat",[Qf]:"fire-app-check",[Kf]:"fire-app-check-compat",[Yf]:"fire-auth",[Jf]:"fire-auth-compat",[Xf]:"fire-rtdb",[Zf]:"fire-data-connect",[ep]:"fire-rtdb-compat",[tp]:"fire-fn",[np]:"fire-fn-compat",[rp]:"fire-iid",[sp]:"fire-iid-compat",[ip]:"fire-fcm",[op]:"fire-fcm-compat",[ap]:"fire-perf",[cp]:"fire-perf-compat",[lp]:"fire-rc",[up]:"fire-rc-compat",[hp]:"fire-gcs",[dp]:"fire-gcs-compat",[fp]:"fire-fst",[mp]:"fire-fst-compat",[pp]:"fire-vertex","fire-js":"fire-js",[gp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Map,vp=new Map,Hi=new Map;function Dc(n,e){try{n.container.addComponent(e)}catch(t){at.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function En(n){const e=n.name;if(Hi.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,n);for(const t of vs.values())Dc(t,n);for(const t of vp.values())Dc(t,n);return!0}function _o(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Be(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new Er("app","Firebase",Ep);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=yp;function nu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(t||(t=Xl()),!t)throw Ct.create("no-options");const i=vs.get(s);if(i){if(_s(t,i.options)&&_s(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const a=new Rf(s);for(const u of Hi.values())a.addComponent(u);const c=new wp(t,r,a);return vs.set(s,c),c}function ru(n=zi){const e=vs.get(n);if(!e&&n===zi&&Xl())return nu();if(!e)throw Ct.create("no-app",{appName:n});return e}function Pt(n,e,t){var r;let s=(r=_p[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(c.join(" "));return}En(new Kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="firebase-heartbeat-database",Tp=1,hr="firebase-heartbeat-store";let Li=null;function su(){return Li||(Li=Bf(Ip,Tp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ct.create("idb-open",{originalErrorMessage:n.message})})),Li}async function Ap(n){try{const t=(await su()).transaction(hr),r=await t.objectStore(hr).get(iu(n));return await t.done,r}catch(e){if(e instanceof ft)at.warn(e.message);else{const t=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(t.message)}}}async function Vc(n,e){try{const r=(await su()).transaction(hr,"readwrite");await r.objectStore(hr).put(e,iu(n)),await r.done}catch(t){if(t instanceof ft)at.warn(t.message);else{const r=Ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});at.warn(r.message)}}}function iu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=1024,Sp=30*24*60*60*1e3;class Rp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Sp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lc(),{heartbeatsToSend:r,unsentEntries:s}=Cp(this._heartbeatsCache.heartbeats),i=ys(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return at.warn(t),""}}}function Lc(){return new Date().toISOString().substring(0,10)}function Cp(n,e=bp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Pp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mf()?gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ap(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nc(n){return ys(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n){En(new Kt("platform-logger",e=>new jf(e),"PRIVATE")),En(new Kt("heartbeat",e=>new Rp(e),"PRIVATE")),Pt(Wi,kc,n),Pt(Wi,kc,"esm2017"),Pt("fire-js","")}kp("");var Dp="firebase",Vp="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(Dp,Vp,"app");function vo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ou(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lp=ou,au=new Er("auth","Firebase",ou());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new go("@firebase/auth");function Np(n,...e){Es.logLevel<=W.WARN&&Es.warn(`Auth (${Pn}): ${n}`,...e)}function is(n,...e){Es.logLevel<=W.ERROR&&Es.error(`Auth (${Pn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,...e){throw wo(n,...e)}function qe(n,...e){return wo(n,...e)}function Eo(n,e,t){const r=Object.assign(Object.assign({},Lp()),{[e]:t});return new Er("auth","Firebase",r).create(e,{appName:n.name})}function st(n){return Eo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Fe(n,"argument-error"),Eo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return au.create(n,...e)}function M(n,e,...t){if(!n)throw wo(e,...t)}function tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw is(e),new Error(e)}function ct(n,e){n||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Op(){return xc()==="http:"||xc()==="https:"}function xc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Op()||hf()||"connection"in navigator)?navigator.onLine:!0}function Fp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,ct(t>e,"Short delay should be less than long delay!"),this.isMobile=cf()||df()}get(){return Mp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e){ct(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=new Ir(3e4,6e4);function pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function mt(n,e,t,r,s={}){return lu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=wr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return uf()||(d.referrerPolicy="no-referrer"),cu.fetch()(uu(n,n.config.apiHost,t,c),d)})}async function lu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Up),e);try{const s=new $p(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw es(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw es(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw es(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Eo(n,p,d);Fe(n,p)}}catch(s){if(s instanceof ft)throw s;Fe(n,"network-request-failed",{message:String(s)})}}async function Tr(n,e,t,r,s={}){const i=await mt(n,e,t,r,s);return"mfaPendingCredential"in i&&Fe(n,"multi-factor-auth-required",{_serverResponse:i}),i}function uu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Io(n.config,s):`${n.config.apiScheme}://${s}`}function qp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $p{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),Bp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=qe(n,e,r);return s.customData._tokenResponse=t,s}function Oc(n){return n!==void 0&&n.enterprise!==void 0}class jp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Wp(n,e){return mt(n,"GET","/v2/recaptchaConfig",pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(n,e){return mt(n,"POST","/v1/accounts:delete",e)}async function hu(n,e){return mt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hp(n,e=!1){const t=ue(n),r=await t.getIdToken(e),s=To(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ir(Ni(s.auth_time)),issuedAtTime:ir(Ni(s.iat)),expirationTime:ir(Ni(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ni(n){return Number(n)*1e3}function To(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return is("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yl(t);return s?JSON.parse(s):(is("Failed to decode base64 JWT payload"),null)}catch(s){return is("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mc(n){const e=To(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ft&&Gp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Gp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(n){var e;const t=n.auth,r=await n.getIdToken(),s=await dr(n,hu(t,{idToken:r}));M(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?du(i.providerUserInfo):[],c=Yp(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ki(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,_)}async function Qp(n){const e=ue(n);await ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function du(n){return n.map(e=>{var{providerId:t}=e,r=vo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(n,e){const t=await lu(n,{},async()=>{const r=wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=uu(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cu.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xp(n,e){return mt(n,"POST","/v2/accounts:revokeToken",pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Mc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Jp(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new pn;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pn,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=vo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ki(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await dr(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hp(this,e)}reload(){return Qp(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await dr(this,zp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,p;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,K=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:Q,emailVerified:se,isAnonymous:Oe,providerData:ie,stsTokenManager:E}=t;M(Q&&E,e,"internal-error");const m=pn.fromJSON(this.name,E);M(typeof Q=="string",e,"internal-error"),wt(_,e.name),wt(T,e.name),M(typeof se=="boolean",e,"internal-error"),M(typeof Oe=="boolean",e,"internal-error"),wt(S,e.name),wt(C,e.name),wt(N,e.name),wt(k,e.name),wt($,e.name),wt(K,e.name);const y=new nt({uid:Q,auth:e,email:T,emailVerified:se,displayName:_,isAnonymous:Oe,photoURL:C,phoneNumber:S,tenantId:N,stsTokenManager:m,createdAt:$,lastLoginAt:K});return ie&&Array.isArray(ie)&&(y.providerData=ie.map(v=>Object.assign({},v))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new pn;s.updateFromServerResponse(t);const i=new nt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ws(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?du(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new pn;c.updateFromIdToken(r);const u=new nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ki(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map;function rt(n){ct(n instanceof Function,"Expected a class definition");let e=Fc.get(n);return e?(ct(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fu.type="NONE";const Uc=fu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n,e,t){return`firebase:${n}:${e}:${t}`}class mn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=os(this.userKey,s.apiKey,i),this.fullPersistenceKey=os("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mn(rt(Uc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||rt(Uc);const a=os(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const _=nt._fromJSON(e,p);d!==i&&(c=_),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new mn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new mn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vu(e))return"Blackberry";if(Eu(e))return"Webos";if(mu(e))return"Safari";if((e.includes("chrome/")||gu(e))&&!e.includes("edge/"))return"Chrome";if(_u(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pu(n=Re()){return/firefox\//i.test(n)}function mu(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gu(n=Re()){return/crios\//i.test(n)}function yu(n=Re()){return/iemobile/i.test(n)}function _u(n=Re()){return/android/i.test(n)}function vu(n=Re()){return/blackberry/i.test(n)}function Eu(n=Re()){return/webos/i.test(n)}function Ao(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Zp(n=Re()){var e;return Ao(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function em(){return ff()&&document.documentMode===10}function wu(n=Re()){return Ao(n)||_u(n)||Eu(n)||vu(n)||/windows phone/i.test(n)||yu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n,e=[]){let t;switch(n){case"Browser":t=Bc(Re());break;case"Worker":t=`${Bc(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(n,e={}){return mt(n,"GET","/v2/passwordPolicy",pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=6;class sm{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:rm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qc(this),this.idTokenSubscription=new qc(this),this.beforeStateQueue=new tm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=au,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hu(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ws(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(st(this));const t=e?ue(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nm(this),t=new sm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Np(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gt(n){return ue(n)}class qc{constructor(e){this.auth=e,this.observer=null,this.addObserver=wf(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function om(n){Us=n}function Tu(n){return Us.loadJS(n)}function am(){return Us.recaptchaEnterpriseScript}function cm(){return Us.gapiScript}function lm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const um="recaptcha-enterprise",hm="NO_RECAPTCHA";class dm{constructor(e){this.type=um,this.auth=gt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Wp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new jp(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Oc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(hm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Oc(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=am();u.length!==0&&(u+=c),Tu(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function $c(n,e,t,r=!1){const s=new dm(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Is(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $c(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await $c(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n,e){const t=_o(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(_s(i,e??{}))return s;Fe(s,"already-initialized")}return t.initialize({options:e})}function pm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mm(n,e,t){const r=gt(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Au(e),{host:a,port:c}=gm(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ym()}function Au(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gm(n){const e=Au(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:jc(a)}}}function jc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ym(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,t){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function _m(n,e){return mt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(n,e){return Tr(n,"POST","/v1/accounts:signInWithPassword",pt(n,e))}async function bu(n,e){return mt(n,"POST","/v1/accounts:sendOobCode",pt(n,e))}async function Em(n,e){return bu(n,e)}async function wm(n,e){return bu(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(n,e){return Tr(n,"POST","/v1/accounts:signInWithEmailLink",pt(n,e))}async function Tm(n,e){return Tr(n,"POST","/v1/accounts:signInWithEmailLink",pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends bo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new fr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new fr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Is(e,t,"signInWithPassword",vm);case"emailLink":return Im(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Is(e,r,"signUpPassword",_m);case"emailLink":return Tm(e,{idToken:t,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(n,e){return Tr(n,"POST","/v1/accounts:signInWithIdp",pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="http://localhost";class Qt extends bo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=vo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Qt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return gn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gn(e,t)}buildRequest(){const e={requestUri:Am,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sm(n){const e=Xn(Zn(n)).link,t=e?Xn(Zn(e)).deep_link_id:null,r=Xn(Zn(n)).deep_link_id;return(r?Xn(Zn(r)).link:null)||r||t||e||n}class So{constructor(e){var t,r,s,i,a,c;const u=Xn(Zn(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,_=bm((s=u.mode)!==null&&s!==void 0?s:null);M(d&&p&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Sm(e);try{return new So(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.providerId=kn.PROVIDER_ID}static credential(e,t){return fr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=So.parseLink(t);return M(r,"argument-error"),fr._fromEmailAndCode(e,r.code,r.tenantId)}}kn.PROVIDER_ID="password";kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Ro{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Ar{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return et.credential(t,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Ar{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Ar{constructor(){super("twitter.com")}static credential(e,t){return Qt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bt.credential(t,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(n,e){return Tr(n,"POST","/v1/accounts:signUp",pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await nt._fromIdTokenResponse(e,r,s),a=Wc(r);return new Yt({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Wc(r);return new Yt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Wc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends ft{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ts.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ts(e,t,r,s)}}function Su(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ts._fromErrorAndOperation(n,i,e,r):i})}async function Cm(n,e,t=!1){const r=await dr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(n,e,t=!1){const{auth:r}=n;if(Be(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await dr(n,Su(r,s,e,n),t);M(i.idToken,r,"internal-error");const a=To(i.idToken);M(a,r,"internal-error");const{sub:c}=a;return M(n.uid===c,r,"user-mismatch"),Yt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(n,e,t=!1){if(Be(n.app))return Promise.reject(st(n));const r="signIn",s=await Su(n,r,e),i=await Yt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function km(n,e){return Ru(gt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(n){const e=gt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dm(n,e,t){const r=gt(n);await Is(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",wm)}async function Vm(n,e,t){if(Be(n.app))return Promise.reject(st(n));const r=gt(n),a=await Is(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Rm).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Cu(n),u}),c=await Yt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Lm(n,e,t){return Be(n.app)?Promise.reject(st(n)):km(ue(n),kn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cu(n),r})}async function Pu(n,e){const t=ue(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await Em(t.auth,s);i!==n.email&&await n.reload()}function Nm(n,e,t,r){return ue(n).onIdTokenChanged(e,t,r)}function xm(n,e,t){return ue(n).beforeAuthStateChanged(e,t)}function Om(n,e,t,r){return ue(n).onAuthStateChanged(e,t,r)}function Mm(n){return ue(n).signOut()}const As="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=1e3,Um=10;class Du extends ku{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);em()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Um):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Du.type="LOCAL";const Bm=Du;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends ku{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vu.type="SESSION";const Lu=Vu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await qm(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Co("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const T=_;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function jm(n){je().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Wm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Hm(){return Nu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="firebaseLocalStorageDb",Gm=1,bs="firebaseLocalStorage",Ou="fbase_key";class br{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qs(n,e){return n.transaction([bs],e?"readwrite":"readonly").objectStore(bs)}function Km(){const n=indexedDB.deleteDatabase(xu);return new br(n).toPromise()}function Qi(){const n=indexedDB.open(xu,Gm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bs,{keyPath:Ou})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bs)?e(r):(r.close(),await Km(),e(await Qi()))})})}async function zc(n,e,t){const r=qs(n,!0).put({[Ou]:e,value:t});return new br(r).toPromise()}async function Qm(n,e){const t=qs(n,!1).get(e),r=await new br(t).toPromise();return r===void 0?null:r.value}function Hc(n,e){const t=qs(n,!0).delete(e);return new br(t).toPromise()}const Ym=800,Jm=3;class Mu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Jm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(Hm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Wm(),!this.activeServiceWorker)return;this.sender=new $m(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qi();return await zc(e,As,"1"),await Hc(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Qm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qs(s,!1).getAll();return new br(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mu.type="LOCAL";const Xm=Mu;new Ir(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n,e){return e?rt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends bo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zm(n){return Ru(n.auth,new Po(n),n.bypassAuthState)}function eg(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Pm(t,new Po(n),n.bypassAuthState)}async function tg(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Cm(t,new Po(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zm;case"linkViaPopup":case"linkViaRedirect":return tg;case"reauthViaPopup":case"reauthViaRedirect":return eg;default:Fe(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new Ir(2e3,1e4);async function rg(n,e,t){if(Be(n.app))return Promise.reject(qe(n,"operation-not-supported-in-this-environment"));const r=gt(n);xp(n,e,Ro);const s=Fu(r,t);return new $t(r,"signInViaPopup",e,s).executeNotNull()}class $t extends Uu{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=Co();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ng.get())};e()}}$t.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="pendingRedirect",as=new Map;class ig extends Uu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=as.get(this.auth._key());if(!e){try{const r=await og(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}as.set(this.auth._key(),e)}return this.bypassAuthState||as.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function og(n,e){const t=lg(e),r=cg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ag(n,e){as.set(n._key(),e)}function cg(n){return rt(n._redirectPersistence)}function lg(n){return os(sg,n.config.apiKey,n.name)}async function ug(n,e,t=!1){if(Be(n.app))return Promise.reject(st(n));const r=gt(n),s=Fu(r,e),a=await new ig(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=10*60*1e3;class dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gc(e))}saveEventToCache(e){this.cachedEventUids.add(Gc(e)),this.lastProcessedEventTime=Date.now()}}function Gc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(n,e={}){return mt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gg=/^https?/;async function yg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pg(n);for(const t of e)try{if(_g(t))return}catch{}Fe(n,"unauthorized-domain")}function _g(n){const e=Gi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!gg.test(t))return!1;if(mg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Ir(3e4,6e4);function Kc(){const n=je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Eg(n){return new Promise((e,t)=>{var r,s,i;function a(){Kc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kc(),t(qe(n,"network-request-failed"))},timeout:vg.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)a();else{const c=lm("iframefcb");return je()[c]=()=>{gapi.load?a():t(qe(n,"network-request-failed"))},Tu(`${cm()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw cs=null,e})}let cs=null;function wg(n){return cs=cs||Eg(n),cs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Ir(5e3,15e3),Tg="__/auth/iframe",Ag="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rg(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Io(e,Ag):`https://${n.config.authDomain}/${Tg}`,r={apiKey:e.apiKey,appName:n.name,v:Pn},s=Sg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${wr(r).slice(1)}`}async function Cg(n){const e=await wg(n),t=je().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Rg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=qe(n,"network-request-failed"),c=je().setTimeout(()=>{i(a)},Ig.get());function u(){je().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kg=500,Dg=600,Vg="_blank",Lg="http://localhost";class Qc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ng(n,e,t,r=kg,s=Dg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Pg),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Re().toLowerCase();t&&(c=gu(d)?Vg:t),pu(d)&&(e=e||Lg,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[S,C])=>`${T}${S}=${C},`,"");if(Zp(d)&&c!=="_self")return xg(e||"",c),new Qc(null);const _=window.open(e||"",c,p);M(_,n,"popup-blocked");try{_.focus()}catch{}return new Qc(_)}function xg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="__/auth/handler",Mg="emulator/auth/handler",Fg=encodeURIComponent("fac");async function Yc(n,e,t,r,s,i){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pn,eventId:s};if(e instanceof Ro){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ef(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof Ar){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),d=u?`#${Fg}=${encodeURIComponent(u)}`:"";return`${Ug(n)}?${wr(c).slice(1)}${d}`}function Ug({config:n}){return n.emulator?Io(n,Mg):`https://${n.authDomain}/${Og}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="webStorageSupport";class Bg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=ug,this._overrideRedirectResult=ag}async _openPopup(e,t,r,s){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Yc(e,t,r,Gi(),s);return Ng(e,a,Co())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Yc(e,t,r,Gi(),s);return jm(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Cg(e),r=new dg(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xi,{type:xi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xi];a!==void 0&&t(!!a),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wu()||mu()||Ao()}}const qg=Bg;var Jc="@firebase/auth",Xc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wg(n){En(new Kt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iu(n)},d=new im(r,s,i,u);return pm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),En(new Kt("auth-internal",e=>{const t=gt(e.getProvider("auth").getImmediate());return(r=>new $g(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Jc,Xc,jg(n)),Pt(Jc,Xc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=5*60,Hg=Zl("authIdTokenMaxAge")||zg;let Zc=null;const Gg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Hg)return;const s=t==null?void 0:t.token;Zc!==s&&(Zc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kg(n=ru()){const e=_o(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fm(n,{popupRedirectResolver:qg,persistence:[Xm,Bm,Lu]}),r=Zl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Gg(i.toString());xm(t,a,()=>a(t.currentUser)),Nm(t,c=>a(c))}}const s=Jl("auth");return s&&mm(t,`http://${s}`),t}function Qg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}om({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Qg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wg("Browser");var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,qu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(v,w,A){for(var g=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)g[Ye-2]=arguments[Ye];return m.prototype[w].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,y){y||(y=0);var v=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)v[w]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(w=0;16>w;++w)v[w]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],w=E.g[2];var A=E.g[3],g=m+(A^y&(w^A))+v[0]+3614090360&4294967295;m=y+(g<<7&4294967295|g>>>25),g=A+(w^m&(y^w))+v[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=w+(y^A&(m^y))+v[2]+606105819&4294967295,w=A+(g<<17&4294967295|g>>>15),g=y+(m^w&(A^m))+v[3]+3250441966&4294967295,y=w+(g<<22&4294967295|g>>>10),g=m+(A^y&(w^A))+v[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(w^m&(y^w))+v[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=w+(y^A&(m^y))+v[6]+2821735955&4294967295,w=A+(g<<17&4294967295|g>>>15),g=y+(m^w&(A^m))+v[7]+4249261313&4294967295,y=w+(g<<22&4294967295|g>>>10),g=m+(A^y&(w^A))+v[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(w^m&(y^w))+v[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=w+(y^A&(m^y))+v[10]+4294925233&4294967295,w=A+(g<<17&4294967295|g>>>15),g=y+(m^w&(A^m))+v[11]+2304563134&4294967295,y=w+(g<<22&4294967295|g>>>10),g=m+(A^y&(w^A))+v[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(w^m&(y^w))+v[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=w+(y^A&(m^y))+v[14]+2792965006&4294967295,w=A+(g<<17&4294967295|g>>>15),g=y+(m^w&(A^m))+v[15]+1236535329&4294967295,y=w+(g<<22&4294967295|g>>>10),g=m+(w^A&(y^w))+v[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^w&(m^y))+v[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=w+(m^y&(A^m))+v[11]+643717713&4294967295,w=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(w^A))+v[0]+3921069994&4294967295,y=w+(g<<20&4294967295|g>>>12),g=m+(w^A&(y^w))+v[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^w&(m^y))+v[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=w+(m^y&(A^m))+v[15]+3634488961&4294967295,w=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(w^A))+v[4]+3889429448&4294967295,y=w+(g<<20&4294967295|g>>>12),g=m+(w^A&(y^w))+v[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^w&(m^y))+v[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=w+(m^y&(A^m))+v[3]+4107603335&4294967295,w=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(w^A))+v[8]+1163531501&4294967295,y=w+(g<<20&4294967295|g>>>12),g=m+(w^A&(y^w))+v[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^w&(m^y))+v[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=w+(m^y&(A^m))+v[7]+1735328473&4294967295,w=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(w^A))+v[12]+2368359562&4294967295,y=w+(g<<20&4294967295|g>>>12),g=m+(y^w^A)+v[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^w)+v[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=w+(A^m^y)+v[11]+1839030562&4294967295,w=A+(g<<16&4294967295|g>>>16),g=y+(w^A^m)+v[14]+4259657740&4294967295,y=w+(g<<23&4294967295|g>>>9),g=m+(y^w^A)+v[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^w)+v[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=w+(A^m^y)+v[7]+4139469664&4294967295,w=A+(g<<16&4294967295|g>>>16),g=y+(w^A^m)+v[10]+3200236656&4294967295,y=w+(g<<23&4294967295|g>>>9),g=m+(y^w^A)+v[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^w)+v[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=w+(A^m^y)+v[3]+3572445317&4294967295,w=A+(g<<16&4294967295|g>>>16),g=y+(w^A^m)+v[6]+76029189&4294967295,y=w+(g<<23&4294967295|g>>>9),g=m+(y^w^A)+v[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^w)+v[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=w+(A^m^y)+v[15]+530742520&4294967295,w=A+(g<<16&4294967295|g>>>16),g=y+(w^A^m)+v[2]+3299628645&4294967295,y=w+(g<<23&4294967295|g>>>9),g=m+(w^(y|~A))+v[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~w))+v[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=w+(m^(A|~y))+v[14]+2878612391&4294967295,w=A+(g<<15&4294967295|g>>>17),g=y+(A^(w|~m))+v[5]+4237533241&4294967295,y=w+(g<<21&4294967295|g>>>11),g=m+(w^(y|~A))+v[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~w))+v[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=w+(m^(A|~y))+v[10]+4293915773&4294967295,w=A+(g<<15&4294967295|g>>>17),g=y+(A^(w|~m))+v[1]+2240044497&4294967295,y=w+(g<<21&4294967295|g>>>11),g=m+(w^(y|~A))+v[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~w))+v[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=w+(m^(A|~y))+v[6]+2734768916&4294967295,w=A+(g<<15&4294967295|g>>>17),g=y+(A^(w|~m))+v[13]+1309151649&4294967295,y=w+(g<<21&4294967295|g>>>11),g=m+(w^(y|~A))+v[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~w))+v[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=w+(m^(A|~y))+v[2]+718787259&4294967295,w=A+(g<<15&4294967295|g>>>17),g=y+(A^(w|~m))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(w+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,v=this.B,w=this.h,A=0;A<m;){if(w==0)for(;A<=y;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(v[w++]=E.charCodeAt(A++),w==this.blockSize){s(this,v),w=0;break}}else for(;A<m;)if(v[w++]=E[A++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var v=0;32>v;v+=8)E[y++]=this.g[m]>>>v&255;return E};function i(E,m){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;for(var y=[],v=!0,w=E.length-1;0<=w;w--){var A=E[w]|0;v&&A==m||(y[w]=A,v=!1)}this.g=y}var c={};function u(E){return-128<=E&&128>E?i(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return _;if(0>E)return k(d(-E));for(var m=[],y=1,v=0;E>=y;v++)m[v]=E/y|0,y*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return k(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),v=_,w=0;w<E.length;w+=8){var A=Math.min(8,E.length-w),g=parseInt(E.substring(w,w+A),m);8>A?(A=d(Math.pow(m,A)),v=v.j(A).add(d(g))):(v=v.j(y),v=v.add(d(g)))}return v}var _=u(0),T=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-k(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var v=this.i(y);E+=(0<=v?v:4294967296+v)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+k(this).toString(E);for(var m=d(Math.pow(E,6)),y=this,v="";;){var w=se(y,m).g;y=$(y,w.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=w,C(y))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function N(E){return E.h==-1}n.l=function(E){return E=$(this,E),N(E)?-1:C(E)?0:1};function k(E){for(var m=E.g.length,y=[],v=0;v<m;v++)y[v]=~E.g[v];return new a(y,~E.h).add(T)}n.abs=function(){return N(this)?k(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],v=0,w=0;w<=m;w++){var A=v+(this.i(w)&65535)+(E.i(w)&65535),g=(A>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);v=g>>>16,A&=65535,g&=65535,y[w]=g<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(k(m))}n.j=function(E){if(C(this)||C(E))return _;if(N(this))return N(E)?k(this).j(k(E)):k(k(this).j(E));if(N(E))return k(this.j(k(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],v=0;v<2*m;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<E.g.length;w++){var A=this.i(v)>>>16,g=this.i(v)&65535,Ye=E.i(w)>>>16,Nn=E.i(w)&65535;y[2*v+2*w]+=g*Nn,K(y,2*v+2*w),y[2*v+2*w+1]+=A*Nn,K(y,2*v+2*w+1),y[2*v+2*w+1]+=g*Ye,K(y,2*v+2*w+1),y[2*v+2*w+2]+=A*Ye,K(y,2*v+2*w+2)}for(v=0;v<m;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=m;v<2*m;v++)y[v]=0;return new a(y,0)};function K(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function Q(E,m){this.g=E,this.h=m}function se(E,m){if(C(m))throw Error("division by zero");if(C(E))return new Q(_,_);if(N(E))return m=se(k(E),m),new Q(k(m.g),k(m.h));if(N(m))return m=se(E,k(m)),new Q(k(m.g),m.h);if(30<E.g.length){if(N(E)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var y=T,v=m;0>=v.l(E);)y=Oe(y),v=Oe(v);var w=ie(y,1),A=ie(v,1);for(v=ie(v,2),y=ie(y,2);!C(v);){var g=A.add(v);0>=g.l(E)&&(w=w.add(y),A=g),v=ie(v,1),y=ie(y,1)}return m=$(E,w.j(m)),new Q(w,m)}for(w=_;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(y),g=A.j(m);N(g)||0<g.l(E);)y-=v,A=d(y),g=A.j(m);C(A)&&(A=T),w=w.add(A),E=$(E,g)}return new Q(w,E)}n.A=function(E){return se(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)&E.i(v);return new a(y,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)|E.i(v);return new a(y,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)^E.i(v);return new a(y,this.h^E.h)};function Oe(E){for(var m=E.g.length+1,y=[],v=0;v<m;v++)y[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(y,E.h)}function ie(E,m){var y=m>>5;m%=32;for(var v=E.g.length-y,w=[],A=0;A<v;A++)w[A]=0<m?E.i(A+y)>>>m|E.i(A+y+1)<<32-m:E.i(A+y);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Gt=a}).apply(typeof el<"u"?el:typeof self<"u"?self:typeof window<"u"?window:{});var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $u,er,ju,ls,Yi,Wu,zu,Hu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ts=="object"&&ts];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in h))break e;h=h[I]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,f=!1,I={next:function(){if(!f&&h<o.length){var b=h++;return{value:l(b,o[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function _(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),o.apply(l,I)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,T.apply(null,arguments)}function S(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,I,b){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return l.prototype[I].apply(f,D)}}function N(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function k(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const I=o.length||0,b=f.length||0;o.length=I+b;for(let D=0;D<b;D++)o[I+D]=f[D]}else o.push(f)}}class ${constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function K(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function se(o){return se[" "](o),o}se[" "]=function(){};var Oe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ie(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function E(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)o[h]=f[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function w(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function g(){var o=ii;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ye{constructor(){this.h=this.g=null}add(l,h){const f=Nn.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Nn=new $(()=>new gd,o=>o.reset());class gd{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let xn,On=!1,ii=new Ye,ba=()=>{const o=c.Promise.resolve(void 0);xn=()=>{o.then(yd)}};var yd=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){A(h)}var l=Nn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}On=!1};function yt(){this.s=this.s,this.C=this.C}yt.prototype.s=!1,yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var _d=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Mn(o,l){if(ve.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Oe){e:{try{se(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:vd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Mn.aa.h.call(this)}}C(Mn,ve);var vd={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var xr="closure_listenable_"+(1e6*Math.random()|0),Ed=0;function wd(o,l,h,f,I){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=I,this.key=++Ed,this.da=this.fa=!1}function Or(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Mr(o){this.src=o,this.g={},this.h=0}Mr.prototype.add=function(o,l,h,f,I){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var D=ai(o,l,f,I);return-1<D?(l=o[D],h||(l.fa=!1)):(l=new wd(l,this.src,b,!!f,I),l.fa=h,o.push(l)),l};function oi(o,l){var h=l.type;if(h in o.g){var f=o.g[h],I=Array.prototype.indexOf.call(f,l,void 0),b;(b=0<=I)&&Array.prototype.splice.call(f,I,1),b&&(Or(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ai(o,l,h,f){for(var I=0;I<o.length;++I){var b=o[I];if(!b.da&&b.listener==l&&b.capture==!!h&&b.ha==f)return I}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),li={};function Sa(o,l,h,f,I){if(Array.isArray(l)){for(var b=0;b<l.length;b++)Sa(o,l[b],h,f,I);return null}return h=Pa(h),o&&o[xr]?o.K(l,h,d(f)?!!f.capture:!1,I):Id(o,l,h,!1,f,I)}function Id(o,l,h,f,I,b){if(!l)throw Error("Invalid event type");var D=d(I)?!!I.capture:!!I,X=hi(o);if(X||(o[ci]=X=new Mr(o)),h=X.add(l,h,f,D,b),h.proxy)return h;if(f=Td(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)_d||(I=D),I===void 0&&(I=!1),o.addEventListener(l.toString(),f,I);else if(o.attachEvent)o.attachEvent(Ca(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Td(){function o(h){return l.call(o.src,o.listener,h)}const l=Ad;return o}function Ra(o,l,h,f,I){if(Array.isArray(l))for(var b=0;b<l.length;b++)Ra(o,l[b],h,f,I);else f=d(f)?!!f.capture:!!f,h=Pa(h),o&&o[xr]?(o=o.i,l=String(l).toString(),l in o.g&&(b=o.g[l],h=ai(b,h,f,I),-1<h&&(Or(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete o.g[l],o.h--)))):o&&(o=hi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=ai(l,h,f,I)),(h=-1<o?l[o]:null)&&ui(h))}function ui(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[xr])oi(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(Ca(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=hi(l))?(oi(h,o),h.h==0&&(h.src=null,l[ci]=null)):Or(o)}}}function Ca(o){return o in li?li[o]:li[o]="on"+o}function Ad(o,l){if(o.da)o=!0;else{l=new Mn(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&ui(o),o=h.call(f,l)}return o}function hi(o){return o=o[ci],o instanceof Mr?o:null}var di="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pa(o){return typeof o=="function"?o:(o[di]||(o[di]=function(l){return o.handleEvent(l)}),o[di])}function Ee(){yt.call(this),this.i=new Mr(this),this.M=this,this.F=null}C(Ee,yt),Ee.prototype[xr]=!0,Ee.prototype.removeEventListener=function(o,l,h,f){Ra(this,o,l,h,f)};function Ce(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ve(l,o);else if(l instanceof ve)l.target=l.target||o;else{var I=l;l=new ve(f,o),v(l,I)}if(I=!0,h)for(var b=h.length-1;0<=b;b--){var D=l.g=h[b];I=Fr(D,f,!0,l)&&I}if(D=l.g=o,I=Fr(D,f,!0,l)&&I,I=Fr(D,f,!1,l)&&I,h)for(b=0;b<h.length;b++)D=l.g=h[b],I=Fr(D,f,!1,l)&&I}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Or(h[f]);delete o.g[l],o.h--}}this.F=null},Ee.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},Ee.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Fr(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,b=0;b<l.length;++b){var D=l[b];if(D&&!D.da&&D.capture==h){var X=D.listener,pe=D.ha||D.src;D.fa&&oi(o.i,D),I=X.call(pe,f)!==!1&&I}}return I&&!f.defaultPrevented}function ka(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Da(o){o.g=ka(()=>{o.g=null,o.i&&(o.i=!1,Da(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class bd extends yt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Da(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fn(o){yt.call(this),this.h=o,this.g={}}C(Fn,yt);var Va=[];function La(o){ie(o.g,function(l,h){this.g.hasOwnProperty(h)&&ui(l)},o),o.g={}}Fn.prototype.N=function(){Fn.aa.N.call(this),La(this)},Fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fi=c.JSON.stringify,Sd=c.JSON.parse,Rd=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function pi(){}pi.prototype.h=null;function Na(o){return o.h||(o.h=o.i())}function xa(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mi(){ve.call(this,"d")}C(mi,ve);function gi(){ve.call(this,"c")}C(gi,ve);var Ot={},Oa=null;function Ur(){return Oa=Oa||new Ee}Ot.La="serverreachability";function Ma(o){ve.call(this,Ot.La,o)}C(Ma,ve);function Bn(o){const l=Ur();Ce(l,new Ma(l))}Ot.STAT_EVENT="statevent";function Fa(o,l){ve.call(this,Ot.STAT_EVENT,o),this.stat=l}C(Fa,ve);function Pe(o){const l=Ur();Ce(l,new Fa(l,o))}Ot.Ma="timingevent";function Ua(o,l){ve.call(this,Ot.Ma,o),this.size=l}C(Ua,ve);function qn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function $n(){this.g=!0}$n.prototype.xa=function(){this.g=!1};function Cd(o,l,h,f,I,b){o.info(function(){if(o.g)if(b)for(var D="",X=b.split("&"),pe=0;pe<X.length;pe++){var H=X[pe].split("=");if(1<H.length){var we=H[0];H=H[1];var Ie=we.split("_");D=2<=Ie.length&&Ie[1]=="type"?D+(we+"="+H+"&"):D+(we+"=redacted&")}}else D=null;else D=b;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+l+`
`+h+`
`+D})}function Pd(o,l,h,f,I,b,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+l+`
`+h+`
`+b+" "+D})}function on(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Dd(o,h)+(f?" "+f:"")})}function kd(o,l){o.info(function(){return"TIMEOUT: "+l})}$n.prototype.info=function(){};function Dd(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var b=I[0];if(b!="noop"&&b!="stop"&&b!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return fi(h)}catch{return l}}var Br={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yi;function qr(){}C(qr,pi),qr.prototype.g=function(){return new XMLHttpRequest},qr.prototype.i=function(){return{}},yi=new qr;function _t(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new Fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qa}function qa(){this.i=null,this.g="",this.h=!1}var $a={},_i={};function vi(o,l,h){o.L=1,o.v=zr(Je(l)),o.m=h,o.P=!0,ja(o,null)}function ja(o,l){o.F=Date.now(),$r(o),o.A=Je(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),rc(h.i,"t",f),o.C=0,h=o.j.J,o.h=new qa,o.g=wc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new bd(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(Va[0]=I.toString()),I=Va);for(var b=0;b<I.length;b++){var D=Sa(h,I[b],f||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Bn(),Cd(o.i,o.u,o.A,o.l,o.R,o.m)}_t.prototype.ca=function(o){o=o.target;const l=this.M;l&&Xe(o)==3?l.j():this.Y(o)},_t.prototype.Y=function(o){try{if(o==this.g)e:{const Ie=Xe(this.g);var l=this.g.Ba();const ln=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||uc(this.g)))){this.J||Ie!=4||l==7||(l==8||0>=ln?Bn(3):Bn(2)),Ei(this);var h=this.g.Z();this.X=h;t:if(Wa(this)){var f=uc(this.g);o="";var I=f.length,b=Xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),jn(this);var D="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(b&&l==I-1)});f.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Pd(this.i,this.u,this.A,this.l,this.R,Ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,pe=this.g;if((X=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(X)){var H=X;break t}}H=null}if(h=H)on(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wi(this,h);else{this.o=!1,this.s=3,Pe(12),Mt(this),jn(this);break e}}if(this.P){h=!0;let Ue;for(;!this.J&&this.C<D.length;)if(Ue=Vd(this,D),Ue==_i){Ie==4&&(this.s=4,Pe(14),h=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==$a){this.s=4,Pe(15),on(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else on(this.i,this.l,Ue,null),wi(this,Ue);if(Wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||D.length!=0||this.h.h||(this.s=1,Pe(16),h=!1),this.o=this.o&&h,!h)on(this.i,this.l,D,"[Invalid Chunked Response]"),Mt(this),jn(this);else if(0<D.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Ri(we),we.M=!0,Pe(11))}}else on(this.i,this.l,D,null),wi(this,D);Ie==4&&Mt(this),this.o&&!this.J&&(Ie==4?yc(this.j,this):(this.o=!1,$r(this)))}else Qd(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Mt(this),jn(this)}}}catch{}finally{}};function Wa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Vd(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?_i:(h=Number(l.substring(h,f)),isNaN(h)?$a:(f+=1,f+h>l.length?_i:(l=l.slice(f,f+h),o.C=f+h,l)))}_t.prototype.cancel=function(){this.J=!0,Mt(this)};function $r(o){o.S=Date.now()+o.I,za(o,o.I)}function za(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=qn(T(o.ba,o),l)}function Ei(o){o.B&&(c.clearTimeout(o.B),o.B=null)}_t.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(kd(this.i,this.A),this.L!=2&&(Bn(),Pe(17)),Mt(this),this.s=2,jn(this)):za(this,this.S-o)};function jn(o){o.j.G==0||o.J||yc(o.j,o)}function Mt(o){Ei(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,La(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function wi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Ii(h.h,o))){if(!o.K&&Ii(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Jr(h),Qr(h);else break e;Si(h),Pe(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=qn(T(h.Za,h),6e3));if(1>=Ka(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ut(h,11)}else if((o.K||h.g==o)&&Jr(h),!K(l))for(I=h.Da.g.parse(l),l=0;l<I.length;l++){let H=I[l];if(h.T=H[0],H=H[1],h.G==2)if(H[0]=="c"){h.K=H[1],h.ia=H[2];const we=H[3];we!=null&&(h.la=we,h.j.info("VER="+h.la));const Ie=H[4];Ie!=null&&(h.Aa=Ie,h.j.info("SVER="+h.Aa));const ln=H[5];ln!=null&&typeof ln=="number"&&0<ln&&(f=1.5*ln,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ue=o.g;if(Ue){const Zr=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zr){var b=f.h;b.g||Zr.indexOf("spdy")==-1&&Zr.indexOf("quic")==-1&&Zr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ti(b,b.h),b.h=null))}if(f.D){const Ci=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Ci&&(f.ya=Ci,Z(f.I,f.D,Ci))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=o;if(f.qa=Ec(f,f.J?f.ia:null,f.W),D.K){Qa(f.h,D);var X=D,pe=f.L;pe&&(X.I=pe),X.B&&(Ei(X),$r(X)),f.g=D}else mc(f);0<h.i.length&&Yr(h)}else H[0]!="stop"&&H[0]!="close"||Ut(h,7);else h.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?Ut(h,7):bi(h):H[0]!="noop"&&h.l&&h.l.ta(H),h.v=0)}}Bn(4)}catch{}}var Ld=class{constructor(o,l){this.g=o,this.map=l}};function Ha(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ga(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ka(o){return o.h?1:o.g?o.g.size:0}function Ii(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ti(o,l){o.g?o.g.add(l):o.h=l}function Qa(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ha.prototype.cancel=function(){if(this.i=Ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ya(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return N(o.i)}function Nd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function xd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function Ja(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=xd(o),f=Nd(o),I=f.length,b=0;b<I;b++)l.call(void 0,f[b],h&&h[b],o)}var Xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Od(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),I=null;if(0<=f){var b=o[h].substring(0,f);I=o[h].substring(f+1)}else b=o[h];l(b,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Ft(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ft){this.h=o.h,jr(this,o.j),this.o=o.o,this.g=o.g,Wr(this,o.s),this.l=o.l;var l=o.i,h=new Hn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Za(this,h),this.m=o.m}else o&&(l=String(o).match(Xa))?(this.h=!1,jr(this,l[1]||"",!0),this.o=Wn(l[2]||""),this.g=Wn(l[3]||"",!0),Wr(this,l[4]),this.l=Wn(l[5]||"",!0),Za(this,l[6]||"",!0),this.m=Wn(l[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}Ft.prototype.toString=function(){var o=[],l=this.j;l&&o.push(zn(l,ec,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(zn(l,ec,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(zn(h,h.charAt(0)=="/"?Ud:Fd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",zn(h,qd)),o.join("")};function Je(o){return new Ft(o)}function jr(o,l,h){o.j=h?Wn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Wr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Za(o,l,h){l instanceof Hn?(o.i=l,$d(o.i,o.h)):(h||(l=zn(l,Bd)),o.i=new Hn(l,o.h))}function Z(o,l,h){o.i.set(l,h)}function zr(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function zn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Md),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Md(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ec=/[#\/\?@]/g,Fd=/[#\?:]/g,Ud=/[#\?]/g,Bd=/[#\?@]/g,qd=/#/g;function Hn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function vt(o){o.g||(o.g=new Map,o.h=0,o.i&&Od(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Hn.prototype,n.add=function(o,l){vt(this),this.i=null,o=an(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function tc(o,l){vt(o),l=an(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function nc(o,l){return vt(o),l=an(o,l),o.g.has(l)}n.forEach=function(o,l){vt(this),this.g.forEach(function(h,f){h.forEach(function(I){o.call(l,I,f,this)},this)},this)},n.na=function(){vt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const I=o[f];for(let b=0;b<I.length;b++)h.push(l[f])}return h},n.V=function(o){vt(this);let l=[];if(typeof o=="string")nc(this,o)&&(l=l.concat(this.g.get(an(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return vt(this),this.i=null,o=an(this,o),nc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function rc(o,l,h){tc(o,l),0<h.length&&(o.i=null,o.g.set(an(o,l),N(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const b=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var I=b;D[f]!==""&&(I+="="+encodeURIComponent(String(D[f]))),o.push(I)}}return this.i=o.join("&")};function an(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function $d(o,l){l&&!o.j&&(vt(o),o.i=null,o.g.forEach(function(h,f){var I=f.toLowerCase();f!=I&&(tc(this,f),rc(this,I,h))},o)),o.j=l}function jd(o,l){const h=new $n;if(c.Image){const f=new Image;f.onload=S(Et,h,"TestLoadImage: loaded",!0,l,f),f.onerror=S(Et,h,"TestLoadImage: error",!1,l,f),f.onabort=S(Et,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(Et,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Wd(o,l){const h=new $n,f=new AbortController,I=setTimeout(()=>{f.abort(),Et(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(b=>{clearTimeout(I),b.ok?Et(h,"TestPingServer: ok",!0,l):Et(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),Et(h,"TestPingServer: error",!1,l)})}function Et(o,l,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function zd(){this.g=new Rd}function Hd(o,l,h){const f=h||"";try{Ja(o,function(I,b){let D=I;d(I)&&(D=fi(I)),l.push(f+b+"="+encodeURIComponent(D))})}catch(I){throw l.push(f+"type="+encodeURIComponent("_badmap")),I}}function Hr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Hr,pi),Hr.prototype.g=function(){return new Gr(this.l,this.j)},Hr.prototype.i=function(o){return function(){return o}}({});function Gr(o,l){Ee.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Gr,Ee),n=Gr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Kn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function sc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Gn(this):Kn(this),this.readyState==3&&sc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Gn(this))},n.Qa=function(o){this.g&&(this.response=o,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Kn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Kn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ic(o){let l="";return ie(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function Ai(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ic(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Z(o,l,h))}function re(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(re,Ee);var Gd=/^https?$/i,Kd=["POST","PUT"];n=re.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yi.g(),this.v=this.o?Na(this.o):Na(yi),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(b){oc(this,b);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Kd,l,void 0))||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,D]of h)this.g.setRequestHeader(b,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lc(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){oc(this,b)}};function oc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ac(o),Kr(o)}function ac(o){o.A||(o.A=!0,Ce(o,"complete"),Ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ce(this,"complete"),Ce(this,"abort"),Kr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kr(this,!0)),re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?cc(this):this.bb())},n.bb=function(){cc(this)};function cc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xe(o)!=4||o.Z()!=2)){if(o.u&&Xe(o)==4)ka(o.Ea,0,o);else if(Ce(o,"readystatechange"),Xe(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=D===0){var I=String(o.D).match(Xa)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Gd.test(I?I.toLowerCase():"")}h=f}if(h)Ce(o,"complete"),Ce(o,"success");else{o.m=6;try{var b=2<Xe(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",ac(o)}}finally{Kr(o)}}}}function Kr(o,l){if(o.g){lc(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ce(o,"ready");try{h.onreadystatechange=f}catch{}}}function lc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Xe(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Xe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Sd(l)}};function uc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Qd(o){const l={};o=(o.g&&2<=Xe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(K(o[f]))continue;var h=w(o[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=l[I]||[];l[I]=b,b.push(h)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function hc(o){this.Aa=0,this.i=[],this.j=new $n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,o),this.cb=Qn("retryDelaySeedMs",1e4,o),this.Wa=Qn("forwardChannelMaxRetries",2,o),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ha(o&&o.concurrentRequestLimit),this.Da=new zd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){Pe(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Ec(this,null,this.W),Yr(this)};function bi(o){if(dc(o),o.G==3){var l=o.U++,h=Je(o.I);if(Z(h,"SID",o.K),Z(h,"RID",l),Z(h,"TYPE","terminate"),Yn(o,h),l=new _t(o,o.j,l),l.L=2,l.v=zr(Je(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=wc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),$r(l)}vc(o)}function Qr(o){o.g&&(Ri(o),o.g.cancel(),o.g=null)}function dc(o){Qr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Jr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Yr(o){if(!Ga(o.h)&&!o.s){o.s=!0;var l=o.Ga;xn||ba(),On||(xn(),On=!0),ii.add(l,o),o.B=0}}function Yd(o,l){return Ka(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=qn(T(o.Ga,o,l),_c(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new _t(this,this.j,o);let b=this.o;if(this.S&&(b?(b=m(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(I.H=b,b=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=pc(this,I,l),h=Je(this.I),Z(h,"RID",o),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),Yn(this,h),b&&(this.O?l="headers="+encodeURIComponent(String(ic(b)))+"&"+l:this.m&&Ai(h,this.m,b)),Ti(this.h,I),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",l),Z(h,"SID","null"),I.T=!0,vi(I,h,null)):vi(I,h,l),this.G=2}}else this.G==3&&(o?fc(this,o):this.i.length==0||Ga(this.h)||fc(this))};function fc(o,l){var h;l?h=l.l:h=o.U++;const f=Je(o.I);Z(f,"SID",o.K),Z(f,"RID",h),Z(f,"AID",o.T),Yn(o,f),o.m&&o.o&&Ai(f,o.m,o.o),h=new _t(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=pc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ti(o.h,h),vi(h,f,l)}function Yn(o,l){o.H&&ie(o.H,function(h,f){Z(l,f,h)}),o.l&&Ja({},function(h,f){Z(l,f,h)})}function pc(o,l,h){h=Math.min(o.i.length,h);var f=o.l?T(o.l.Na,o.l,o):null;e:{var I=o.i;let b=-1;for(;;){const D=["count="+h];b==-1?0<h?(b=I[0].g,D.push("ofs="+b)):b=0:D.push("ofs="+b);let X=!0;for(let pe=0;pe<h;pe++){let H=I[pe].g;const we=I[pe].map;if(H-=b,0>H)b=Math.max(0,I[pe].g-100),X=!1;else try{Hd(we,D,"req"+H+"_")}catch{f&&f(we)}}if(X){f=D.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function mc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;xn||ba(),On||(xn(),On=!0),ii.add(l,o),o.v=0}}function Si(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=qn(T(o.Fa,o),_c(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,gc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=qn(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),Qr(this),gc(this))};function Ri(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function gc(o){o.g=new _t(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Je(o.qa);Z(l,"RID","rpc"),Z(l,"SID",o.K),Z(l,"AID",o.T),Z(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(l,"TO",o.ja),Z(l,"TYPE","xmlhttp"),Yn(o,l),o.m&&o.o&&Ai(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=zr(Je(l)),h.m=null,h.P=!0,ja(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Qr(this),Si(this),Pe(19))};function Jr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function yc(o,l){var h=null;if(o.g==l){Jr(o),Ri(o),o.g=null;var f=2}else if(Ii(o.h,l))h=l.D,Qa(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var I=o.B;f=Ur(),Ce(f,new Ua(f,h)),Yr(o)}else mc(o);else if(I=l.s,I==3||I==0&&0<l.X||!(f==1&&Yd(o,l)||f==2&&Si(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),I){case 1:Ut(o,5);break;case 4:Ut(o,10);break;case 3:Ut(o,6);break;default:Ut(o,2)}}}function _c(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Ut(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),f=o.Xa;const I=!f;f=new Ft(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||jr(f,"https"),zr(f),I?jd(f.toString(),h):Wd(f.toString(),h)}else Pe(2);o.G=0,o.l&&o.l.sa(l),vc(o),dc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function vc(o){if(o.G=0,o.ka=[],o.l){const l=Ya(o.h);(l.length!=0||o.i.length!=0)&&(k(o.ka,l),k(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Ec(o,l,h){var f=h instanceof Ft?Je(h):new Ft(h);if(f.g!="")l&&(f.g=l+"."+f.g),Wr(f,f.s);else{var I=c.location;f=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var b=new Ft(null);f&&jr(b,f),l&&(b.g=l),I&&Wr(b,I),h&&(b.l=h),f=b}return h=o.D,l=o.ya,h&&l&&Z(f,h,l),Z(f,"VER",o.la),Yn(o,f),f}function wc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new re(new Hr({eb:h})):new re(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ic(){}n=Ic.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xr(){}Xr.prototype.g=function(o,l){return new Le(o,l)};function Le(o,l){Ee.call(this),this.g=new hc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!K(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!K(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new cn(this)}C(Le,Ee),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){bi(this.g)},Le.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=fi(o),o=h);l.i.push(new Ld(l.Ya++,o)),l.G==3&&Yr(l)},Le.prototype.N=function(){this.g.l=null,delete this.j,bi(this.g),delete this.g,Le.aa.N.call(this)};function Tc(o){mi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(Tc,mi);function Ac(){gi.call(this),this.status=1}C(Ac,gi);function cn(o){this.g=o}C(cn,Ic),cn.prototype.ua=function(){Ce(this.g,"a")},cn.prototype.ta=function(o){Ce(this.g,new Tc(o))},cn.prototype.sa=function(o){Ce(this.g,new Ac)},cn.prototype.ra=function(){Ce(this.g,"b")},Xr.prototype.createWebChannel=Xr.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,Hu=function(){return new Xr},zu=function(){return Ur()},Wu=Ot,Yi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,ls=Br,Ba.COMPLETE="complete",ju=Ba,xa.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,er=xa,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,$u=re}).apply(typeof ts<"u"?ts:typeof self<"u"?self:typeof window<"u"?window:{});const tl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new go("@firebase/firestore");function Jn(){return Jt.logLevel}function x(n,...e){if(Jt.logLevel<=W.DEBUG){const t=e.map(ko);Jt.debug(`Firestore (${Dn}): ${n}`,...t)}}function lt(n,...e){if(Jt.logLevel<=W.ERROR){const t=e.map(ko);Jt.error(`Firestore (${Dn}): ${n}`,...t)}}function wn(n,...e){if(Jt.logLevel<=W.WARN){const t=e.map(ko);Jt.warn(`Firestore (${Dn}): ${n}`,...t)}}function ko(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n="Unexpected state"){const e=`FIRESTORE (${Dn}) INTERNAL ASSERTION FAILED: `+n;throw lt(e),new Error(e)}function Y(n,e){n||F()}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class Jg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Xg{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new it;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new it,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new it)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new Gu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ae(e)}}class Zg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ey{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Zg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ty{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ny{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Y(this.o===void 0);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string"),this.R=t.token,new ty(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ry(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function In(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new he(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new he(0,0))}static max(){return new U(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(),r===void 0?r=e.length-t:r>e.length-t&&F(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ee extends pr{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const sy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends pr{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return sy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new L(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ee.fromString(e))}static fromName(e){return new O(ee.fromString(e).popFirst(5))}static empty(){return new O(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ee(e.slice()))}}function iy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Vt(s,O.empty(),e)}function oy(n){return new Vt(n.readTime,n.key,-1)}class Vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vt(U.min(),O.empty(),-1)}static max(){return new Vt(U.max(),O.empty(),-1)}}function ay(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ly{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==cy)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function uy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Do.oe=-1;function $s(n){return n==null}function Ss(n){return n===0&&1/n==-1/0}function hy(n){return typeof n=="number"&&Number.isInteger(n)&&!Ss(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ns(this.root,e,this.comparator,!0)}}class ns{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=i??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,r,s,i){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rl(this.data.getIterator())}getIteratorFrom(e){return new rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new xe([])}unionWith(e){let t=new ye(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yu("Invalid base64 string: "+i):i}}(e);return new _e(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const dy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(n){if(Y(!!n),typeof n=="string"){let e=0;const t=dy.exec(n);if(Y(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Lo(n){const e=n.mapValue.fields.__previous_value__;return Vo(e)?Lo(e):e}function mr(n){const e=Lt(n.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t,r,s,i,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class gr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs={mapValue:{}};function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vo(n)?4:my(n)?9007199254740991:py(n)?10:11:F()}function Ke(n,e){if(n===e)return!0;const t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mr(n).isEqual(mr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Lt(s.timestampValue),c=Lt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Xt(s.bytesValue).isEqual(Xt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),c=oe(i.doubleValue);return a===c?Ss(a)===Ss(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return In(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(nl(a)!==nl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Ke(a[u],c[u])))return!1;return!0}(n,e);default:return F()}}function yr(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function Tn(n,e){if(n===e)return 0;const t=Zt(n),r=Zt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=oe(i.integerValue||i.doubleValue),u=oe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return sl(n.timestampValue,e.timestampValue);case 4:return sl(mr(n),mr(e));case 5:return G(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Xt(i),u=Xt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=G(c[d],u[d]);if(p!==0)return p}return G(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=G(oe(i.latitude),oe(a.latitude));return c!==0?c:G(oe(i.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return il(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,d,p;const _=i.fields||{},T=a.fields||{},S=(c=_.value)===null||c===void 0?void 0:c.arrayValue,C=(u=T.value)===null||u===void 0?void 0:u.arrayValue,N=G(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:il(S,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===rs.mapValue&&a===rs.mapValue)return 0;if(i===rs.mapValue)return 1;if(a===rs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let _=0;_<u.length&&_<p.length;++_){const T=G(u[_],p[_]);if(T!==0)return T;const S=Tn(c[u[_]],d[p[_]]);if(S!==0)return S}return G(u.length,p.length)}(n.mapValue,e.mapValue);default:throw F()}}function sl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Lt(n),r=Lt(e),s=G(t.seconds,r.seconds);return s!==0?s:G(t.nanos,r.nanos)}function il(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Tn(t[s],r[s]);if(i)return i}return G(t.length,r.length)}function An(n){return Ji(n)}function Ji(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Lt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ji(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ji(t.fields[a])}`;return s+"}"}(n.mapValue):F()}function ol(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xi(n){return!!n&&"integerValue"in n}function No(n){return!!n&&"arrayValue"in n}function al(n){return!!n&&"nullValue"in n}function cl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function us(n){return!!n&&"mapValue"in n}function py(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function or(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=or(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=or(n.arrayValue.values[t]);return e}return Object.assign({},n)}function my(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!us(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=or(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=or(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());us(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){tn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ve(or(this.value))}}function Ju(n){const e=[];return tn(n.fields,(t,r)=>{const s=new ge([t]);if(us(r)){const i=Ju(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new be(e,0,U.min(),U.min(),U.min(),Ve.empty(),0)}static newFoundDocument(e,t,r,s){return new be(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new be(e,2,t,U.min(),U.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,U.min(),U.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.position=e,this.inclusive=t}}function ll(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=Tn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ul(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function gy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{}class le extends Xu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new _y(e,t,r):t==="array-contains"?new wy(e,r):t==="in"?new Iy(e,r):t==="not-in"?new Ty(e,r):t==="array-contains-any"?new Ay(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new vy(e,r):new Ey(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Tn(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(Tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Xu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new $e(e,t)}matches(e){return Zu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zu(n){return n.op==="and"}function eh(n){return yy(n)&&Zu(n)}function yy(n){for(const e of n.filters)if(e instanceof $e)return!1;return!0}function Zi(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+An(n.value);if(eh(n))return n.filters.map(e=>Zi(e)).join(",");{const e=n.filters.map(t=>Zi(t)).join(",");return`${n.op}(${e})`}}function th(n,e){return n instanceof le?function(r,s){return s instanceof le&&r.op===s.op&&r.field.isEqual(s.field)&&Ke(r.value,s.value)}(n,e):n instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&th(a,s.filters[c]),!0):!1}(n,e):void F()}function nh(n){return n instanceof le?function(t){return`${t.field.canonicalString()} ${t.op} ${An(t.value)}`}(n):n instanceof $e?function(t){return t.op.toString()+" {"+t.getFilters().map(nh).join(" ,")+"}"}(n):"Filter"}class _y extends le{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class vy extends le{constructor(e,t){super(e,"in",t),this.keys=rh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ey extends le{constructor(e,t){super(e,"not-in",t),this.keys=rh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class wy extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return No(t)&&yr(t.arrayValue,this.value)}}class Iy extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yr(this.value.arrayValue,t)}}class Ty extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yr(this.value.arrayValue,t)}}class Ay extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!No(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function hl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new by(n,e,t,r,s,i,a)}function xo(n){const e=B(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>An(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>An(r)).join(",")),e.ue=t}return e.ue}function Oo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!gy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!th(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ul(n.startAt,e.startAt)&&ul(n.endAt,e.endAt)}function eo(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Sy(n,e,t,r,s,i,a,c){return new Cr(n,e,t,r,s,i,a,c)}function js(n){return new Cr(n)}function dl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sh(n){return n.collectionGroup!==null}function ar(n){const e=B(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ye(ge.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Cs(i,r))}),t.has(ge.keyField().canonicalString())||e.ce.push(new Cs(ge.keyField(),r))}return e.ce}function We(n){const e=B(n);return e.le||(e.le=Ry(e,ar(n))),e.le}function Ry(n,e){if(n.limitType==="F")return hl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Cs(s.field,i)});const t=n.endAt?new Rs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Rs(n.startAt.position,n.startAt.inclusive):null;return hl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function to(n,e){const t=n.filters.concat([e]);return new Cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function no(n,e,t){return new Cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ws(n,e){return Oo(We(n),We(e))&&n.limitType===e.limitType}function ih(n){return`${xo(We(n))}|lt:${n.limitType}`}function un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>nh(s)).join(", ")}]`),$s(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>An(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>An(s)).join(",")),`Target(${r})`}(We(n))}; limitType=${n.limitType})`}function zs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ar(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=ll(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,ar(r),s)||r.endAt&&!function(a,c,u){const d=ll(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,ar(r),s))}(n,e)}function Cy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function oh(n){return(e,t)=>{let r=!1;for(const s of ar(n)){const i=Py(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Py(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Tn(u,d):F()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Qu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new ne(O.comparator);function ut(){return ky}const ah=new ne(O.comparator);function tr(...n){let e=ah;for(const t of n)e=e.insert(t.key,t);return e}function ch(n){let e=ah;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function jt(){return cr()}function lh(){return cr()}function cr(){return new Vn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Dy=new ne(O.comparator),Vy=new ye(O.comparator);function j(...n){let e=Vy;for(const t of n)e=e.add(t);return e}const Ly=new ye(G);function Ny(){return Ly}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ss(e)?"-0":e}}function uh(n){return{integerValue:""+n}}function xy(n,e){return hy(e)?uh(e):Mo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this._=void 0}}function Oy(n,e,t){return n instanceof Ps?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vo(i)&&(i=Lo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof _r?dh(n,e):n instanceof vr?fh(n,e):function(s,i){const a=hh(s,i),c=fl(a)+fl(s.Pe);return Xi(a)&&Xi(s.Pe)?uh(c):Mo(s.serializer,c)}(n,e)}function My(n,e,t){return n instanceof _r?dh(n,e):n instanceof vr?fh(n,e):t}function hh(n,e){return n instanceof ks?function(r){return Xi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ps extends Hs{}class _r extends Hs{constructor(e){super(),this.elements=e}}function dh(n,e){const t=ph(e);for(const r of n.elements)t.some(s=>Ke(s,r))||t.push(r);return{arrayValue:{values:t}}}class vr extends Hs{constructor(e){super(),this.elements=e}}function fh(n,e){let t=ph(e);for(const r of n.elements)t=t.filter(s=>!Ke(s,r));return{arrayValue:{values:t}}}class ks extends Hs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function fl(n){return oe(n.integerValue||n.doubleValue)}function ph(n){return No(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Fy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof _r&&s instanceof _r||r instanceof vr&&s instanceof vr?In(r.elements,s.elements,Ke):r instanceof ks&&s instanceof ks?Ke(r.Pe,s.Pe):r instanceof Ps&&s instanceof Ps}(n.transform,e.transform)}class Uy{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gs{}function mh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yh(n.key,ze.none()):new Pr(n.key,n.data,ze.none());{const t=n.data,r=Ve.empty();let s=new ye(ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new xt(n.key,r,new xe(s.toArray()),ze.none())}}function By(n,e,t){n instanceof Pr?function(s,i,a){const c=s.value.clone(),u=ml(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof xt?function(s,i,a){if(!hs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ml(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(gh(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function lr(n,e,t,r){return n instanceof Pr?function(i,a,c,u){if(!hs(i.precondition,a))return c;const d=i.value.clone(),p=gl(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof xt?function(i,a,c,u){if(!hs(i.precondition,a))return c;const d=gl(i.fieldTransforms,u,a),p=a.data;return p.setAll(gh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(i,a,c){return hs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function qy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=hh(r.transform,s||null);i!=null&&(t===null&&(t=Ve.empty()),t.set(r.field,i))}return t||null}function pl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&In(r,s,(i,a)=>Fy(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pr extends Gs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xt extends Gs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ml(n,e,t){const r=new Map;Y(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,My(a,c,t[s]))}return r}function gl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Oy(i,a,e))}return r}class yh extends Gs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $y extends Gs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&By(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=lh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=mh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&In(this.mutations,e.mutations,(t,r)=>pl(t,r))&&In(this.baseMutations,e.baseMutations,(t,r)=>pl(t,r))}}class Fo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Y(e.mutations.length===r.length);let s=function(){return Dy}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Fo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,z;function Hy(n){switch(n){default:return F();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function _h(n){if(n===void 0)return lt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ce.OK:return R.OK;case ce.CANCELLED:return R.CANCELLED;case ce.UNKNOWN:return R.UNKNOWN;case ce.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ce.INTERNAL:return R.INTERNAL;case ce.UNAVAILABLE:return R.UNAVAILABLE;case ce.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ce.NOT_FOUND:return R.NOT_FOUND;case ce.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ce.ABORTED:return R.ABORTED;case ce.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ce.DATA_LOSS:return R.DATA_LOSS;default:return F()}}(z=ce||(ce={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=new Gt([4294967295,4294967295],0);function yl(n){const e=Gy().encode(n),t=new qu;return t.update(e),new Uint8Array(t.digest())}function _l(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gt([t,r],0),new Gt([s,i],0)]}class Uo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nr(`Invalid padding: ${t}`);if(r<0)throw new nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new nr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Gt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Gt.fromNumber(r)));return s.compare(Ky)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=yl(e),[r,s]=_l(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Uo(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=yl(e),[r,s]=_l(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,kr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ks(U.min(),s,new ne(G),ut(),j())}}class kr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new kr(r,t,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class vh{constructor(e,t){this.targetId=e,this.me=t}}class Eh{constructor(e,t,r=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class vl{constructor(){this.fe=0,this.ge=wl(),this.pe=_e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=j(),t=j(),r=j();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F()}}),new kr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=wl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qy{constructor(e){this.Le=e,this.Be=new Map,this.ke=ut(),this.qe=El(),this.Qe=new ne(G)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(eo(i))if(r===0){const a=new O(i.path);this.Ue(t,a,be.newNoDocument(a,U.min()))}else Y(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Xt(r).toUint8Array()}catch(u){if(u instanceof Yu)return wn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Uo(a,s,i)}catch(u){return wn(u instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&eo(c.target)){const u=new O(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,be.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=j();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ks(e,t,this.Qe,this.ke,r);return this.ke=ut(),this.qe=El(),this.Qe=new ne(G),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new vl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ye(G),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function El(){return new ne(O.comparator)}function wl(){return new ne(O.comparator)}const Yy={asc:"ASCENDING",desc:"DESCENDING"},Jy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xy={and:"AND",or:"OR"};class Zy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ro(n,e){return n.useProto3Json||$s(e)?e:{value:e}}function Ds(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function e_(n,e){return Ds(n,e.toTimestamp())}function He(n){return Y(!!n),U.fromTimestamp(function(t){const r=Lt(t);return new he(r.seconds,r.nanos)}(n))}function Bo(n,e){return so(n,e).canonicalString()}function so(n,e){const t=function(s){return new ee(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ih(n){const e=ee.fromString(n);return Y(Rh(e)),e}function io(n,e){return Bo(n.databaseId,e.path)}function Oi(n,e){const t=Ih(e);if(t.get(1)!==n.databaseId.projectId)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Ah(t))}function Th(n,e){return Bo(n.databaseId,e)}function t_(n){const e=Ih(n);return e.length===4?ee.emptyPath():Ah(e)}function oo(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ah(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Il(n,e,t){return{name:io(n,e),fields:t.value.mapValue.fields}}function n_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Y(p===void 0||typeof p=="string"),_e.fromBase64String(p||"")):(Y(p===void 0||p instanceof Buffer||p instanceof Uint8Array),_e.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?R.UNKNOWN:_h(d.code);return new L(p,d.message||"")}(a);t=new Eh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oi(n,r.document.name),i=He(r.document.updateTime),a=r.document.createTime?He(r.document.createTime):U.min(),c=new Ve({mapValue:{fields:r.document.fields}}),u=be.newFoundDocument(s,i,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ds(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oi(n,r.document),i=r.readTime?He(r.readTime):U.min(),a=be.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ds([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oi(n,r.document),i=r.removedTargetIds||[];t=new ds([],i,s,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new zy(s,i),c=r.targetId;t=new vh(c,a)}}return t}function r_(n,e){let t;if(e instanceof Pr)t={update:Il(n,e.key,e.value)};else if(e instanceof yh)t={delete:io(n,e.key)};else if(e instanceof xt)t={update:Il(n,e.key,e.data),updateMask:d_(e.fieldMask)};else{if(!(e instanceof $y))return F();t={verify:io(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Ps)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _r)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ks)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw F()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:e_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(n,e.precondition)),t}function s_(n,e){return n&&n.length>0?(Y(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?He(s.updateTime):He(i);return a.isEqual(U.min())&&(a=He(i)),new Uy(a,s.transformResults||[])}(t,e))):[]}function i_(n,e){return{documents:[Th(n,e.path)]}}function o_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Th(n,s);const i=function(d){if(d.length!==0)return Sh($e.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:hn(T.field),direction:l_(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ro(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function a_(n){let e=t_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(_){const T=bh(_);return T instanceof $e&&eh(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(T=>function(C){return new Cs(dn(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(_){let T;return T=typeof _=="object"?_.value:_,$s(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(_){const T=!!_.before,S=_.values||[];return new Rs(S,T)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const T=!_.before,S=_.values||[];return new Rs(S,T)}(t.endAt)),Sy(e,s,a,i,c,"F",u,d)}function c_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=dn(t.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=dn(t.unaryFilter.field);return le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=dn(t.unaryFilter.field);return le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=dn(t.unaryFilter.field);return le.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return le.create(dn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $e.create(t.compositeFilter.filters.map(r=>bh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function l_(n){return Yy[n]}function u_(n){return Jy[n]}function h_(n){return Xy[n]}function hn(n){return{fieldPath:n.canonicalString()}}function dn(n){return ge.fromServerFormat(n.fieldPath)}function Sh(n){return n instanceof le?function(t){if(t.op==="=="){if(cl(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NAN"}};if(al(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cl(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NAN"}};if(al(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hn(t.field),op:u_(t.op),value:t.value}}}(n):n instanceof $e?function(t){const r=t.getFilters().map(s=>Sh(s));return r.length===1?r[0]:{compositeFilter:{op:h_(t.op),filters:r}}}(n):F()}function d_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,r,s,i=U.min(),a=U.min(),c=_e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.ct=e}}function p_(n){const e=a_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?no(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.un=new g_}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Vt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class g_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ye(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ye(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new bn(0)}static kn(){return new bn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.changes=new Vn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&lr(r.mutation,s,xe.empty(),he.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){const s=jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=tr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=ut();const a=cr(),c=function(){return cr()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof xt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),lr(p.mutation,d,p.mutation.getFieldMask(),he.now())):a.set(d.key,xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var _;return c.set(d,new __(p,(_=a.get(d))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){const r=cr();let s=new ne((a,c)=>a-c),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||xe.empty();p=c.applyToLocalView(d,p),r.set(u,p);const _=(s.get(c.batchId)||j()).add(u);s=s.insert(c.batchId,_)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,_=lh();p.forEach(T=>{if(!i.has(T)){const S=mh(t.get(T),r.get(T));S!==null&&_.set(T,S),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(jt());let c=-1,u=i;return a.next(d=>P.forEach(d,(p,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,j())).next(p=>({batchId:c,changes:ch(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=tr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=tr();return this.indexManager.getCollectionParents(e,i).next(c=>P.forEach(c,u=>{const d=function(_,T){return new Cr(T,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((_,T)=>{a=a.insert(_,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,be.newInvalidDocument(p)))});let c=tr();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&lr(p.mutation,d,xe.empty(),he.now()),zs(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:He(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:p_(s.bundledQuery),readTime:He(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.overlays=new ne(O.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=jt(),i=t.length+1,a=new O(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ne((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=jt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=jt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return P.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Wy(t,r));let i=this.Ir.get(t);i===void 0&&(i=j(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.Tr=new ye(de.Er),this.dr=new ye(de.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new de(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new de(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new O(new ee([])),r=new de(t,e),s=new de(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new O(new ee([])),r=new de(t,e),s=new de(t,e+1);let i=j();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new de(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return O.comparator(e.key,t.key)||G(e.wr,t.wr)}static Ar(e,t){return G(e.wr,t.wr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ye(de.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jy(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new de(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),s=new de(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(G);return t.forEach(s=>{const i=new de(s,0),a=new de(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const a=new de(new O(i),0);let c=new ye(G);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.wr)),!0)},a),P.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Y(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,s=>{const i=new de(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new de(t,0),s=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.Mr=e,this.docs=function(){return new ne(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let r=ut();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():be.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ut();const a=t.path,c=new O(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ay(oy(p),r)<=0||(s.has(p.key)||zs(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F()}Or(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new b_(this)}getSize(e){return P.resolve(this.size)}}class b_ extends y_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.persistence=e,this.Nr=new Vn(t=>xo(t),Oo),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qo,this.targetCount=0,this.kr=bn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new bn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Do(0),this.Kr=!1,this.Kr=!0,this.$r=new I_,this.referenceDelegate=e(this),this.Ur=new S_(this),this.indexManager=new m_,this.remoteDocumentCache=function(s){return new A_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new f_(t),this.Gr=new E_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new w_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new T_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new C_(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class C_ extends ly{constructor(e){super(),this.currentSequenceNumber=e}}class $o{constructor(e){this.persistence=e,this.Jr=new qo,this.Yr=null}static Zr(e){return new $o(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=O.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=j(),s=j();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return pf()?8:uy(Re())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new P_;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Jn()<=W.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Jn()<=W.DEBUG&&x("QueryEngine","Query:",un(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Jn()<=W.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):P.resolve())}Yi(e,t){if(dl(t))return P.resolve(null);let r=We(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=no(t,null,"F"),r=We(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=j(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,c);return this.ns(t,d,a,u.readTime)?this.Yi(e,no(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,s){return dl(t)||s.isEqual(U.min())?P.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?P.resolve(null):(Jn()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(t)),this.rs(e,a,t,iy(s,-1)).next(c=>c))})}ts(e,t){let r=new ye(oh(e));return t.forEach((s,i)=>{zs(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Jn()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",un(t)),this.Ji.getDocumentsMatchingQuery(e,t,Vt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ne(G),this._s=new Vn(i=>xo(i),Oo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new v_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function V_(n,e,t,r){return new D_(n,e,t,r)}async function Ch(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=j();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function L_(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const _=d.batch,T=_.keys();let S=P.resolve();return T.forEach(C=>{S=S.next(()=>p.getEntry(u,C)).next(N=>{const k=d.docVersions.get(C);Y(k!==null),N.version.compareTo(k)<0&&(_.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,_))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=j();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ph(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function N_(n,e){const t=B(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,_)=>{const T=s.get(_);if(!T)return;c.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,_)));let S=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?S=S.withResumeToken(_e.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(_,S),function(N,k,$){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(T,S,p)&&c.push(t.Ur.updateTargetData(i,S))});let u=ut(),d=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(x_(i,a,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(U.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(_=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return P.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.os=s,i))}function x_(n,e,t){let r=j(),s=j();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ut();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function O_(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function M_(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new St(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ao(n,e,t){const r=B(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Rr(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Tl(n,e,t){const r=B(n);let s=U.min(),i=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const _=B(u),T=_._s.get(p);return T!==void 0?P.resolve(_.os.get(T)):_.Ur.getTargetData(d,p)}(r,a,We(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:j())).next(c=>(F_(r,Cy(e),c),{documents:c,Ts:i})))}function F_(n,e,t){let r=n.us.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Al{constructor(){this.activeTargetIds=Ny()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class U_{constructor(){this.so=new Al,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Al,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss=null;function Mi(){return ss===null?ss=function(){return 268435456+Math.round(2147483648*Math.random())}():ss++,"0x"+ss.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection";class j_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=Mi(),u=this.xo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,u,d,s).then(p=>(x("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw wn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=q_[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Mi();return new Promise((a,c)=>{const u=new $u;u.setWithCredentials(!0),u.listenOnce(ju.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ls.NO_ERROR:const p=u.getResponseJson();x(Te,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case ls.TIMEOUT:x(Te,`RPC '${e}' ${i} timed out`),c(new L(R.DEADLINE_EXCEEDED,"Request time out"));break;case ls.HTTP_ERROR:const _=u.getStatus();if(x(Te,`RPC '${e}' ${i} failed with status:`,_,"response text:",u.getResponseText()),_>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const S=T==null?void 0:T.error;if(S&&S.status&&S.message){const C=function(k){const $=k.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf($)>=0?$:R.UNKNOWN}(S.status);c(new L(C,S.message))}else c(new L(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new L(R.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{x(Te,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);x(Te,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=Mi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hu(),c=zu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");x(Te,`Creating RPC '${e}' stream ${s}: ${p}`,u);const _=a.createWebChannel(p,u);let T=!1,S=!1;const C=new $_({Io:k=>{S?x(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(T||(x(Te,`Opening RPC '${e}' stream ${s} transport.`),_.open(),T=!0),x(Te,`RPC '${e}' stream ${s} sending:`,k),_.send(k))},To:()=>_.close()}),N=(k,$,K)=>{k.listen($,Q=>{try{K(Q)}catch(se){setTimeout(()=>{throw se},0)}})};return N(_,er.EventType.OPEN,()=>{S||(x(Te,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),N(_,er.EventType.CLOSE,()=>{S||(S=!0,x(Te,`RPC '${e}' stream ${s} transport closed`),C.So())}),N(_,er.EventType.ERROR,k=>{S||(S=!0,wn(Te,`RPC '${e}' stream ${s} transport errored:`,k),C.So(new L(R.UNAVAILABLE,"The operation could not be completed")))}),N(_,er.EventType.MESSAGE,k=>{var $;if(!S){const K=k.data[0];Y(!!K);const Q=K,se=Q.error||(($=Q[0])===null||$===void 0?void 0:$.error);if(se){x(Te,`RPC '${e}' stream ${s} received error:`,se);const Oe=se.status;let ie=function(y){const v=ce[y];if(v!==void 0)return _h(v)}(Oe),E=se.message;ie===void 0&&(ie=R.INTERNAL,E="Unknown error status: "+Oe+" with message "+se.message),S=!0,C.So(new L(ie,E)),_.close()}else x(Te,`RPC '${e}' stream ${s} received:`,K),C.bo(K)}}),N(c,Wu.STAT_EVENT,k=>{k.stat===Yi.PROXY?x(Te,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Yi.NOPROXY&&x(Te,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Fi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){return new Zy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new kh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(lt(t.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new L(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W_ extends Dh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=n_(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?He(a.readTime):U.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=oo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=eo(u)?{documents:i_(i,u)}:{query:o_(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=wh(i,a.resumeToken);const d=ro(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=Ds(i,a.snapshotVersion.toTimestamp());const d=ro(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=c_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=oo(this.serializer),t.removeTarget=e,this.a_(t)}}class z_ extends Dh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=s_(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=oo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>r_(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_ extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,so(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(R.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,so(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class G_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(lt(t),this.D_=!1):x("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{nn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=B(u);d.L_.add(4),await Dr(d),d.q_.set("Unknown"),d.L_.delete(4),await Ys(d)}(this))})}),this.q_=new G_(r,s)}}async function Ys(n){if(nn(n))for(const e of n.B_)await e(!0)}async function Dr(n){for(const e of n.B_)await e(!1)}function Vh(n,e){const t=B(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Go(t)?Ho(t):Ln(t).r_()&&zo(t,e))}function Wo(n,e){const t=B(n),r=Ln(t);t.N_.delete(e),r.r_()&&Lh(t,e),t.N_.size===0&&(r.r_()?r.o_():nn(t)&&t.q_.set("Unknown"))}function zo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ln(n).A_(e)}function Lh(n,e){n.Q_.xe(e),Ln(n).R_(e)}function Ho(n){n.Q_=new Qy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ln(n).start(),n.q_.v_()}function Go(n){return nn(n)&&!Ln(n).n_()&&n.N_.size>0}function nn(n){return B(n).L_.size===0}function Nh(n){n.Q_=void 0}async function Q_(n){n.q_.set("Online")}async function Y_(n){n.N_.forEach((e,t)=>{zo(n,e)})}async function J_(n,e){Nh(n),Go(n)?(n.q_.M_(e),Ho(n)):n.q_.set("Unknown")}async function X_(n,e,t){if(n.q_.set("Online"),e instanceof Eh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vs(n,r)}else if(e instanceof ds?n.Q_.Ke(e):e instanceof vh?n.Q_.He(e):n.Q_.We(e),!t.isEqual(U.min()))try{const r=await Ph(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(_e.EMPTY_BYTE_STRING,p.snapshotVersion)),Lh(i,u);const _=new St(p.target,u,d,p.sequenceNumber);zo(i,_)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Vs(n,r)}}async function Vs(n,e,t){if(!Rr(e))throw e;n.L_.add(1),await Dr(n),n.q_.set("Offline"),t||(t=()=>Ph(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ys(n)})}function xh(n,e){return e().catch(t=>Vs(n,t,e))}async function Js(n){const e=B(n),t=Nt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Z_(e);)try{const s=await O_(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,ev(e,s)}catch(s){await Vs(e,s)}Oh(e)&&Mh(e)}function Z_(n){return nn(n)&&n.O_.length<10}function ev(n,e){n.O_.push(e);const t=Nt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Oh(n){return nn(n)&&!Nt(n).n_()&&n.O_.length>0}function Mh(n){Nt(n).start()}async function tv(n){Nt(n).p_()}async function nv(n){const e=Nt(n);for(const t of n.O_)e.m_(t.mutations)}async function rv(n,e,t){const r=n.O_.shift(),s=Fo.from(r,e,t);await xh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Js(n)}async function sv(n,e){e&&Nt(n).V_&&await async function(r,s){if(function(a){return Hy(a)&&a!==R.ABORTED}(s.code)){const i=r.O_.shift();Nt(r).s_(),await xh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Js(r)}}(n,e),Oh(n)&&Mh(n)}async function Sl(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=nn(t);t.L_.add(3),await Dr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ys(t)}async function iv(n,e){const t=B(n);e?(t.L_.delete(2),await Ys(t)):e||(t.L_.add(2),await Dr(t),t.q_.set("Unknown"))}function Ln(n){return n.K_||(n.K_=function(t,r,s){const i=B(t);return i.w_(),new W_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Q_.bind(null,n),Ro:Y_.bind(null,n),mo:J_.bind(null,n),d_:X_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Go(n)?Ho(n):n.q_.set("Unknown")):(await n.K_.stop(),Nh(n))})),n.K_}function Nt(n){return n.U_||(n.U_=function(t,r,s){const i=B(t);return i.w_(),new z_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tv.bind(null,n),mo:sv.bind(null,n),f_:nv.bind(null,n),g_:rv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Js(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ko(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(n,e){if(lt("AsyncQueue",`${e}: ${n}`),Rr(n))return new L(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=tr(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.W_=new ne(O.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Sn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Sn(e,t,yn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ws(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class av{constructor(){this.queries=Cl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=B(t),i=s.queries;s.queries=Cl(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new L(R.ABORTED,"Firestore shutting down"))}}function Cl(){return new Vn(n=>ih(n),Ws)}async function Yo(n,e){const t=B(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new ov,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Qo(a,`Initialization of query '${un(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Xo(t)}async function Jo(n,e){const t=B(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function cv(n,e){const t=B(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Xo(t)}function lv(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Xo(n){n.Y_.forEach(e=>{e.next()})}var co,Pl;(Pl=co||(co={})).ea="default",Pl.Cache="cache";class Zo{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Sn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==co.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.key=e}}class Uh{constructor(e){this.key=e}}class uv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=j(),this.mutatedKeys=j(),this.Aa=oh(e),this.Ra=new yn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Rl,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,_)=>{const T=s.get(p),S=zs(this.query,_)?_:null,C=!!T&&this.mutatedKeys.has(T.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;T&&S?T.data.isEqual(S.data)?C!==N&&(r.track({type:3,doc:S}),k=!0):this.ga(T,S)||(r.track({type:2,doc:S}),k=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!T&&S?(r.track({type:0,doc:S}),k=!0):T&&!S&&(r.track({type:1,doc:T}),k=!0,(u||d)&&(c=!0)),k&&(S?(a=a.add(S),i=N?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,_)=>function(S,C){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return N(S)-N(C)}(p.type,_.type)||this.Aa(p.doc,_.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new Sn(this.query,e.Ra,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Rl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=j(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Uh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Fh(r))}),t}ba(e){this.Ta=e.Ts,this.da=j();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Sn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class hv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class dv{constructor(e){this.key=e,this.va=!1}}class fv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Vn(c=>ih(c),Ws),this.Ma=new Map,this.xa=new Set,this.Oa=new ne(O.comparator),this.Na=new Map,this.La=new qo,this.Ba={},this.ka=new Map,this.qa=bn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pv(n,e,t=!0){const r=zh(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Bh(r,e,t,!0),s}async function mv(n,e){const t=zh(n);await Bh(t,e,!0,!1)}async function Bh(n,e,t,r){const s=await M_(n.localStore,We(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await gv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Vh(n.remoteStore,s),c}async function gv(n,e,t,r,s){n.Ka=(_,T,S)=>async function(N,k,$,K){let Q=k.view.ma($);Q.ns&&(Q=await Tl(N.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,Q)));const se=K&&K.targetChanges.get(k.targetId),Oe=K&&K.targetMismatches.get(k.targetId)!=null,ie=k.view.applyChanges(Q,N.isPrimaryClient,se,Oe);return Dl(N,k.targetId,ie.wa),ie.snapshot}(n,_,T,S);const i=await Tl(n.localStore,e,!0),a=new uv(e,i.Ts),c=a.ma(i.documents),u=kr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Dl(n,t,d.wa);const p=new hv(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function yv(n,e,t){const r=B(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Ws(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ao(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Wo(r.remoteStore,s.targetId),lo(r,s.targetId)}).catch(Sr)):(lo(r,s.targetId),await ao(r.localStore,s.targetId,!0))}async function _v(n,e){const t=B(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Wo(t.remoteStore,r.targetId))}async function vv(n,e,t){const r=Sv(n);try{const s=await function(a,c){const u=B(a),d=he.now(),p=c.reduce((S,C)=>S.add(C.key),j());let _,T;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=ut(),N=j();return u.cs.getEntries(S,p).next(k=>{C=k,C.forEach(($,K)=>{K.isValidDocument()||(N=N.add($))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(k=>{_=k;const $=[];for(const K of c){const Q=qy(K,_.get(K.key).overlayedDocument);Q!=null&&$.push(new xt(K.key,Q,Ju(Q.value.mapValue),ze.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,$,c)}).next(k=>{T=k;const $=k.applyToLocalDocumentSet(_,N);return u.documentOverlayCache.saveOverlays(S,k.batchId,$)})}).then(()=>({batchId:T.batchId,changes:ch(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new ne(G)),d=d.insert(c,u),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await Vr(r,s.changes),await Js(r.remoteStore)}catch(s){const i=Qo(s,"Failed to persist write");t.reject(i)}}async function qh(n,e){const t=B(n);try{const r=await N_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Y(a.va):s.removedDocuments.size>0&&(Y(a.va),a.va=!1))}),await Vr(t,r,e)}catch(r){await Sr(r)}}function kl(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=B(a);u.onlineState=c;let d=!1;u.queries.forEach((p,_)=>{for(const T of _.j_)T.Z_(c)&&(d=!0)}),d&&Xo(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ev(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ne(O.comparator);a=a.insert(i,be.newNoDocument(i,U.min()));const c=j().add(i),u=new Ks(U.min(),new Map,new ne(G),a,c);await qh(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),ea(r)}else await ao(r.localStore,e,!1).then(()=>lo(r,e,t)).catch(Sr)}async function wv(n,e){const t=B(n),r=e.batch.batchId;try{const s=await L_(t.localStore,e);jh(t,r,null),$h(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vr(t,s)}catch(s){await Sr(s)}}async function Iv(n,e,t){const r=B(n);try{const s=await function(a,c){const u=B(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(_=>(Y(_!==null),p=_.keys(),u.mutationQueue.removeMutationBatch(d,_))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);jh(r,e,t),$h(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vr(r,s)}catch(s){await Sr(s)}}function $h(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function jh(n,e,t){const r=B(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function lo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Wh(n,r)})}function Wh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Wo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ea(n))}function Dl(n,e,t){for(const r of t)r instanceof Fh?(n.La.addReference(r.key,e),Tv(n,r)):r instanceof Uh?(x("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Wh(n,r.key)):F()}function Tv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(x("SyncEngine","New document in limbo: "+t),n.xa.add(r),ea(n))}function ea(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new O(ee.fromString(e)),r=n.qa.next();n.Na.set(r,new dv(t)),n.Oa=n.Oa.insert(t,r),Vh(n.remoteStore,new St(We(js(t.path)),r,"TargetPurposeLimboResolution",Do.oe))}}async function Vr(n,e,t){const r=B(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const _=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){s.push(d);const _=jo.Wi(u.targetId,d);i.push(_)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,d){const p=B(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>P.forEach(d,T=>P.forEach(T.$i,S=>p.persistence.referenceDelegate.addReference(_,T.targetId,S)).next(()=>P.forEach(T.Ui,S=>p.persistence.referenceDelegate.removeReference(_,T.targetId,S)))))}catch(_){if(!Rr(_))throw _;x("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of d){const T=_.targetId;if(!_.fromCache){const S=p.os.get(T),C=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(T,N)}}}(r.localStore,i))}async function Av(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await Ch(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new L(R.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vr(t,r.hs)}}function bv(n,e){const t=B(n),r=t.Na.get(e);if(r&&r.va)return j().add(r.key);{let s=j();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function zh(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ev.bind(null,e),e.Ca.d_=cv.bind(null,e.eventManager),e.Ca.$a=lv.bind(null,e.eventManager),e}function Sv(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Iv.bind(null,e),e}class Ls{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return V_(this.persistence,new k_,e.initialUser,this.serializer)}Ga(e){return new R_($o.Zr,this.serializer)}Wa(e){return new U_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ls.provider={build:()=>new Ls};class uo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Av.bind(null,this.syncEngine),await iv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new av}()}createDatastore(e){const t=Qs(e.databaseInfo.databaseId),r=function(i){return new j_(i)}(e.databaseInfo);return function(i,a,c,u){return new H_(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new K_(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>kl(this.syncEngine,t,0),function(){return bl.D()?new bl:new B_}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,p){const _=new fv(s,i,a,c,u,d);return p&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=B(s);x("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Dr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}uo.provider={build:()=>new uo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):lt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ae.UNAUTHENTICATED,this.clientId=Ku.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Qo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ui(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ch(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Vl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Cv(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Sl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Sl(e.remoteStore,s)),n._onlineComponents=e}async function Cv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ui(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),await Ui(n,new Ls)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Ui(n,new Ls);return n._offlineComponents}async function Hh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Vl(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Vl(n,new uo))),n._onlineComponents}function Pv(n){return Hh(n).then(e=>e.syncEngine)}async function Ns(n){const e=await Hh(n),t=e.eventManager;return t.onListen=pv.bind(null,e.syncEngine),t.onUnlisten=yv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_v.bind(null,e.syncEngine),t}function kv(n,e,t={}){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new ta({next:T=>{p.Za(),a.enqueueAndForget(()=>Jo(i,_));const S=T.docs.has(c);!S&&T.fromCache?d.reject(new L(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&T.fromCache&&u&&u.source==="server"?d.reject(new L(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),_=new Zo(js(c.path),p,{includeMetadataChanges:!0,_a:!0});return Yo(i,_)}(await Ns(n),n.asyncQueue,e,t,r)),r.promise}function Dv(n,e,t={}){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new ta({next:T=>{p.Za(),a.enqueueAndForget(()=>Jo(i,_)),T.fromCache&&u.source==="server"?d.reject(new L(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),_=new Zo(c,p,{includeMetadataChanges:!0,_a:!0});return Yo(i,_)}(await Ns(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n,e,t){if(!t)throw new L(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Vv(n,e,t,r){if(e===!0&&r===!0)throw new L(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nl(n){if(!O.isDocumentKey(n))throw new L(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xl(n){if(O.isDocumentKey(n))throw new L(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function Me(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xs(n);throw new L(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ol({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ol(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yg;switch(r.type){case"firstParty":return new ey(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ll.get(t);r&&(x("ComponentProvider","Removing Datastore"),Ll.delete(t),r.terminate())}(this),Promise.resolve()}}function Lv(n,e,t,r={}){var s;const i=(n=Me(n,Zs))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ae.MOCK_USER;else{c=af(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new L(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ae(d)}n._authCredentials=new Jg(new Gu(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rn(this.firestore,e,this._query)}}class Se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}}class kt extends rn{constructor(e,t,r){super(e,t,js(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new O(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function na(n,e,...t){if(n=ue(n),Kh("collection","path",e),n instanceof Zs){const r=ee.fromString(e,...t);return xl(r),new kt(n,null,r)}{if(!(n instanceof Se||n instanceof kt))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return xl(r),new kt(n.firestore,null,r)}}function fe(n,e,...t){if(n=ue(n),arguments.length===1&&(e=Ku.newId()),Kh("doc","path",e),n instanceof Zs){const r=ee.fromString(e,...t);return Nl(r),new Se(n,null,new O(r))}{if(!(n instanceof Se||n instanceof kt))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return Nl(r),new Se(n.firestore,n instanceof kt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new kh(this,"async_queue_retry"),this.Vu=()=>{const r=Fi();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Fi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Fi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new it;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Rr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw lt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ko.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Fl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class en extends Zs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ml,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ml(e),this._firestoreClient=void 0,await e}}}function Nv(n,e){const t=typeof n=="object"?n:ru(),r=typeof n=="string"?n:"(default)",s=_o(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sf("firestore");i&&Lv(s,...i)}return s}function ei(n){if(n._terminated)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xv(n),n._firestoreClient}function xv(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,p){return new fy(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Gh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Rv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(_e.fromBase64String(e))}catch(t){throw new L(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rn(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=/^__.*__$/;class Mv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}class Qh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class oa{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Yh(this.Cu)&&Ov.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Fv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Qs(e)}Qu(e,t,r,s=!1){return new oa({Cu:e,methodName:t,qu:r,path:ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aa(n){const e=n._freezeSettings(),t=Qs(n._databaseId);return new Fv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Uv(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);ca("Data must be an object, but it was:",a,r);const c=Jh(r,a);let u,d;if(i.merge)u=new xe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const _ of i.mergeFields){const T=ho(e,_,t);if(!a.contains(T))throw new L(R.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Zh(p,T)||p.push(T)}u=new xe(p),d=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,d=a.fieldTransforms;return new Mv(new Ve(c),u,d)}class ni extends ra{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ni}}function Bv(n,e,t,r){const s=n.Qu(1,e,t);ca("Data must be an object, but it was:",s,r);const i=[],a=Ve.empty();tn(r,(u,d)=>{const p=la(e,u,t);d=ue(d);const _=s.Nu(p);if(d instanceof ni)i.push(p);else{const T=Lr(d,_);T!=null&&(i.push(p),a.set(p,T))}});const c=new xe(i);return new Qh(a,c,s.fieldTransforms)}function qv(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[ho(e,r,t)],u=[s];if(i.length%2!=0)throw new L(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)c.push(ho(e,i[T])),u.push(i[T+1]);const d=[],p=Ve.empty();for(let T=c.length-1;T>=0;--T)if(!Zh(d,c[T])){const S=c[T];let C=u[T];C=ue(C);const N=a.Nu(S);if(C instanceof ni)d.push(S);else{const k=Lr(C,N);k!=null&&(d.push(S),p.set(S,k))}}const _=new xe(d);return new Qh(p,_,a.fieldTransforms)}function $v(n,e,t,r=!1){return Lr(t,n.Qu(r?4:3,e))}function Lr(n,e){if(Xh(n=ue(n)))return ca("Unsupported field value:",e,n),Jh(n,e);if(n instanceof ra)return function(r,s){if(!Yh(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Lr(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=he.fromDate(r);return{timestampValue:Ds(s.serializer,i)}}if(r instanceof he){const i=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ds(s.serializer,i)}}if(r instanceof sa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rn)return{bytesValue:wh(s.serializer,r._byteString)};if(r instanceof Se){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ia)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Mo(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Xs(r)}`)}(n,e)}function Jh(n,e){const t={};return Qu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tn(n,(r,s)=>{const i=Lr(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Xh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof sa||n instanceof Rn||n instanceof Se||n instanceof ra||n instanceof ia)}function ca(n,e,t){if(!Xh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Xs(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ho(n,e,t){if((e=ue(e))instanceof ti)return e._internalPath;if(typeof e=="string")return la(n,e);throw xs("Field path arguments must be of type string or ",n,!1,void 0,t)}const jv=new RegExp("[~\\*/\\[\\]]");function la(n,e,t){if(e.search(jv)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ti(...e.split("."))._internalPath}catch{throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(R.INVALID_ARGUMENT,c+n+u)}function Zh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Wv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ua("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Wv extends ed{data(){return super.data()}}function ua(n,e){return typeof e=="string"?la(n,e):e instanceof ti?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ha{}class zv extends ha{}function da(n,e,...t){let r=[];e instanceof ha&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof pa).length,c=i.filter(u=>u instanceof ri).length;if(a>1||a>0&&c>0)throw new L(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ri extends zv{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ri(e,t,r)}_apply(e){const t=this._parse(e);return nd(e._query,t),new rn(e.firestore,e.converter,to(e._query,t))}_parse(e){const t=aa(e.firestore);return function(i,a,c,u,d,p,_){let T;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new L(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Bl(_,p);const S=[];for(const C of _)S.push(Ul(u,i,C));T={arrayValue:{values:S}}}else T=Ul(u,i,_)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Bl(_,p),T=$v(c,a,_,p==="in"||p==="not-in");return le.create(d,p,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fa(n,e,t){const r=e,s=ua("where",n);return ri._create(s,r,t)}class pa extends ha{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:$e.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)nd(a,u),a=to(a,u)}(e._query,t),new rn(e.firestore,e.converter,to(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ul(n,e,t){if(typeof(t=ue(t))=="string"){if(t==="")throw new L(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sh(e)&&t.indexOf("/")!==-1)throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!O.isDocumentKey(r))throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ol(n,new O(r))}if(t instanceof Se)return ol(n,t._key);throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xs(t)}.`)}function Bl(n,e){if(!Array.isArray(n)||n.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nd(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Hv{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new ia(i)}convertGeoPoint(e){return new sa(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Lo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(mr(e));default:return null}}convertTimestamp(e){const t=Lt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);Y(Rh(r));const s=new gr(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||lt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rd extends ed{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ua("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class fs extends rd{data(e={}){return super.data(e)}}class sd{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fs(this._firestore,this._userDataWriter,r.key,r,new rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new fs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new rr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new fs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new rr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Kv(c.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Kv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){n=Me(n,Se);const e=Me(n.firestore,en);return kv(ei(e),n._key).then(t=>ad(e,n,t))}class ga extends Hv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,t)}}function ya(n){n=Me(n,rn);const e=Me(n.firestore,en),t=ei(e),r=new ga(e);return td(n._query),Dv(t,n._query).then(s=>new sd(e,r,n,s))}function id(n,e,t){n=Me(n,Se);const r=Me(n.firestore,en),s=Gv(n.converter,e);return od(r,[Uv(aa(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ze.none())])}function Qe(n,e,t,...r){n=Me(n,Se);const s=Me(n.firestore,en),i=aa(s);let a;return a=typeof(e=ue(e))=="string"||e instanceof ti?qv(i,"updateDoc",n._key,e,t,r):Bv(i,"updateDoc",n._key,e),od(s,[a.toMutation(n._key,ze.exists(!0))])}function Os(n,...e){var t,r,s;n=ue(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Fl(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Fl(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(s=_.complete)===null||s===void 0?void 0:s.bind(_)}let u,d,p;if(n instanceof Se)d=Me(n.firestore,en),p=js(n._key.path),u={next:_=>{e[a]&&e[a](ad(d,n,_))},error:e[a+1],complete:e[a+2]};else{const _=Me(n,rn);d=Me(_.firestore,en),p=_._query;const T=new ga(d);u={next:S=>{e[a]&&e[a](new sd(d,T,_,S))},error:e[a+1],complete:e[a+2]},td(n._query)}return function(T,S,C,N){const k=new ta(N),$=new Zo(S,k,C);return T.asyncQueue.enqueueAndForget(async()=>Yo(await Ns(T),$)),()=>{k.Za(),T.asyncQueue.enqueueAndForget(async()=>Jo(await Ns(T),$))}}(ei(d),p,c,u)}function od(n,e){return function(r,s){const i=new it;return r.asyncQueue.enqueueAndForget(async()=>vv(await Pv(r),s,i)),i.promise}(ei(n),e)}function ad(n,e,t){const r=t.docs.get(e._key),s=new ga(n);return new rd(n,s,e._key,r,new rr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Dn=s})(Pn),En(new Kt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new en(new Xg(r.getProvider("auth-internal")),new ny(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Pt(tl,"4.7.3",e),Pt(tl,"4.7.3","esm2017")})();const Qv={apiKey:"AIzaSyA9N9iGCBld6BV0MxAWpF5tyMDPLwVxsxY",authDomain:"grocery-lists-29774.firebaseapp.com",projectId:"grocery-lists-29774",storageBucket:"grocery-lists-29774.firebasestorage.app",messagingSenderId:"260921375354",appId:"1:260921375354:web:0d3f81b657660bdd0719c3"},cd=nu(Qv),sn=Kg(cd),ae=Nv(cd),_a=document.getElementById("loading-screen"),ld=document.getElementById("auth-container"),va=document.getElementById("app-container"),ql=document.getElementById("login-form"),$l=document.getElementById("signup-form"),Wt=document.getElementById("login-btn"),zt=document.getElementById("signup-btn"),Yv=document.getElementById("show-signup"),Jv=document.getElementById("show-login"),ur=document.getElementById("login-error"),sr=document.getElementById("signup-error"),Ea=document.getElementById("header-title"),Xv=document.getElementById("header-subtitle");let te=null,J=null,V=null,ps=null,ot=null,Ne=-1,Ze=!1,Ge=new Set,Ht=new Set,De={},Bi=null,fn="shared";const Zv=["Apples","Bananas","Oranges","Grapes","Strawberries","Blueberries","Raspberries","Blackberries","Watermelon","Cantaloupe","Honeydew","Pineapple","Mango","Papaya","Avocados","Tomatoes","Cucumbers","Lettuce","Spinach","Kale","Arugula","Cabbage","Broccoli","Cauliflower","Carrots","Celery","Bell Peppers","Jalapenos","Onions","Garlic","Ginger","Potatoes","Sweet Potatoes","Mushrooms","Zucchini","Squash","Asparagus","Green Beans","Peas","Corn","Eggplant","Radishes","Beets","Lemons","Limes","Fresh Herbs","Basil","Cilantro","Parsley","Mint","Rosemary","Thyme","Milk","Almond Milk","Oat Milk","Soy Milk","Cream","Half and Half","Butter","Margarine","Eggs","Cheese","Cheddar Cheese","Mozzarella","Parmesan","Feta","Cream Cheese","Cottage Cheese","Sour Cream","Yogurt","Greek Yogurt","Ice Cream","Chicken Breast","Chicken Thighs","Ground Chicken","Whole Chicken","Turkey","Ground Turkey","Beef","Ground Beef","Steak","Pork Chops","Bacon","Sausage","Ham","Hot Dogs","Deli Meat","Salmon","Tuna","Shrimp","Cod","Tilapia","Crab","Bread","Whole Wheat Bread","Sourdough","Bagels","English Muffins","Tortillas","Pita Bread","Croissants","Donuts","Muffins","Cookies","Cake","Pie","Rice","Brown Rice","Pasta","Spaghetti","Penne","Macaroni","Quinoa","Oats","Cereal","Granola","Flour","Sugar","Brown Sugar","Honey","Maple Syrup","Salt","Pepper","Olive Oil","Vegetable Oil","Coconut Oil","Vinegar","Soy Sauce","Hot Sauce","Ketchup","Mustard","Mayonnaise","BBQ Sauce","Salsa","Peanut Butter","Jam","Jelly","Canned Beans","Canned Tomatoes","Tomato Sauce","Pasta Sauce","Chicken Broth","Beef Broth","Vegetable Broth","Soup","Ramen","Mac and Cheese","Black Pepper","Garlic Powder","Onion Powder","Paprika","Cumin","Chili Powder","Oregano","Basil","Thyme","Cinnamon","Nutmeg","Vanilla Extract","Bay Leaves","Chips","Pretzels","Crackers","Popcorn","Nuts","Almonds","Cashews","Peanuts","Trail Mix","Granola Bars","Protein Bars","Candy","Chocolate","Gummy Bears","Coffee","Tea","Green Tea","Juice","Orange Juice","Apple Juice","Soda","Water","Sparkling Water","Energy Drinks","Sports Drinks","Wine","Beer","Kombucha","Frozen Pizza","Frozen Vegetables","Frozen Fruit","Ice Cream","Frozen Dinners","Frozen Chicken","Frozen Fish","French Fries","Tater Tots","Waffles","Pancakes","Canned Corn","Canned Peas","Canned Tuna","Canned Salmon","Pickles","Olives","Applesauce","Fruit Cups","Baking Powder","Baking Soda","Yeast","Chocolate Chips","Cocoa Powder","Powdered Sugar","Condensed Milk","Evaporated Milk","Paper Towels","Toilet Paper","Tissues","Trash Bags","Aluminum Foil","Plastic Wrap","Dish Soap","Laundry Detergent","Fabric Softener","Bleach","Sponges","Cleaning Spray","Napkins","Plates","Cups","Utensils","Batteries","Light Bulbs","Ziploc Bags","Toothpaste","Toothbrush","Mouthwash","Floss","Shampoo","Conditioner","Body Wash","Soap","Deodorant","Razors","Shaving Cream","Lotion","Sunscreen","Band-aids","Diapers","Baby Wipes","Baby Food","Formula","Dog Food","Cat Food","Cat Litter","Pet Treats"].sort();eE();function eE(){Om(sn,async n=>{var e;if(n){te=n,console.log("User signed in:",n.email);const t=fe(ae,"users",n.uid),r=await ma(t),s=r.exists()?new Date(r.data().createdAt):null,i=new Date("2026-02-21");if(!n.emailVerified&&((e=n.providerData[0])==null?void 0:e.providerId)==="password"&&s&&s>=i){iE(n.email);return}oE()}else te=null,Ms()}),Wt.addEventListener("click",jl),zt.addEventListener("click",Wl),Yv.addEventListener("click",()=>{ql.style.display="none",$l.style.display="block",ur.classList.remove("show")}),Jv.addEventListener("click",()=>{$l.style.display="none",ql.style.display="block",sr.classList.remove("show")}),dE(),lE(),fE(),mE(),_E(),document.getElementById("login-email").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("login-password").focus()}),document.getElementById("login-password").addEventListener("keypress",n=>{n.key==="Enter"&&jl()}),document.getElementById("signup-email").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("signup-password").focus()}),document.getElementById("signup-password").addEventListener("keypress",n=>{n.key==="Enter"&&Wl()})}async function jl(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){_n(ur,"Please enter email and password");return}Wt.disabled=!0,Wt.textContent="Signing in...",ur.classList.remove("show");try{await Lm(sn,n,e)}catch(t){console.error("Login error:",t);let r="Failed to sign in";t.code==="auth/invalid-credential"?r="Invalid email or password":t.code==="auth/too-many-requests"&&(r="Too many attempts. Try again later"),_n(ur,r),Wt.disabled=!1,Wt.textContent="Sign In"}}async function Wl(){const n=document.getElementById("signup-email").value.trim(),e=document.getElementById("signup-password").value;if(!n||!e){_n(sr,"Please enter email and password");return}if(e.length<6){_n(sr,"Password must be at least 6 characters");return}zt.disabled=!0,zt.textContent="Creating account...",sr.classList.remove("show");try{const t=await Vm(sn,n,e);await Pu(t.user),await id(fe(ae,"users",t.user.uid),{email:n,createdAt:new Date().toISOString(),stores:["Costco","Save-On-Foods","T&T Market"],lists:{Costco:[],"Save-On-Foods":[],"T&T Market":[]},history:[],linkedTo:null,linkedWith:[],pendingInvites:[]}),rE(n)}catch(t){console.error("Signup error:",t);let r="Failed to create account";t.code==="auth/email-already-in-use"?r="Email already in use":t.code==="auth/invalid-email"&&(r="Invalid email address"),_n(sr,r),zt.disabled=!1,zt.textContent="Create Account"}}async function tE(){try{const n=document.getElementById("hamburger-menu");n&&n.classList.remove("visible"),ps&&(ps(),ps=null),ot&&(ot(),ot=null),await Mm(sn)}catch(n){console.error("Logout error:",n)}}window.handleLogout=tE;async function nE(){const n=new et;try{console.log("Starting Google sign-in with popup...");const t=(await rg(sn,n)).user;console.log("Google sign-in successful:",t.email);const r=fe(ae,"users",t.uid);(await ma(r)).exists()||(console.log("Creating new user document..."),await id(r,{email:t.email,createdAt:new Date().toISOString(),stores:["Costco","Save-On-Foods","T&T Market"],lists:{Costco:[],"Save-On-Foods":[],"T&T Market":[]},history:[],linkedTo:null,linkedWith:[],pendingInvites:[]}),console.log("User document created!")),console.log("Sign-in complete, waiting for auth state change...")}catch(e){if(console.error("Google sign-in error:",e),e.code==="auth/popup-closed-by-user"||e.code==="auth/cancelled-popup-request"){console.log("User closed the popup");return}let t="Failed to sign in with Google";e.code==="auth/popup-blocked"?t="Popup was blocked. Please allow popups for this site.":e.code==="auth/unauthorized-domain"&&(t="This domain is not authorized in Firebase."),_n(ur,t),console.error("Error details:",e.code,e.message)}}window.handleGoogleSignIn=nE;function rE(n){const e=document.getElementById("auth-container");e.innerHTML=`
    <div class="auth-card" style="max-width: 400px; margin: 50px auto;">
      <h2 style="margin-bottom: 10px; color: var(--primary);">✉️ Verify Your Email</h2>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">
        We sent a verification link to:<br>
        <strong style="color: var(--text-primary);">${n}</strong>
      </p>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">
        Click the link in the email to verify your account, then come back and log in.
      </p>
      <button class="btn btn-primary" onclick="resendVerification()" style="width: 100%; margin-bottom: 10px;">
        Resend Verification Email
      </button>
      <button class="btn" onclick="location.reload()" style="width: 100%;">
        Back to Login
      </button>
    </div>
  `}window.resendVerification=async function(){try{const n=sn.currentUser;n?(await Pu(n),q("✓ Verification email sent!")):q("Please sign up again","error")}catch(n){console.error("Resend verification error:",n),q("Failed to send email","error")}};async function sE(){const n=document.getElementById("login-email"),e=(n==null?void 0:n.value.trim())||prompt("Enter your email address:");if(e)try{await Dm(sn,e),q(`✓ Password reset email sent to ${e}`)}catch(t){console.error("Password reset error:",t),t.code==="auth/user-not-found"?q("No account found with that email","error"):t.code==="auth/invalid-email"?q("Invalid email address","error"):q("Failed to send reset email","error")}}window.handleForgotPassword=sE;function iE(n){const e=document.getElementById("auth-container");e.style.display="flex",va.style.display="none",_a.style.display="none",e.innerHTML=`
    <div class="auth-card" style="max-width: 400px; margin: 50px auto;">
      <h2 style="margin-bottom: 10px; color: var(--warning);">⚠️ Email Not Verified</h2>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">
        Please verify your email address before logging in:<br>
        <strong style="color: var(--text-primary);">${n}</strong>
      </p>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">
        Check your inbox for the verification link.
      </p>
      <button class="btn btn-primary" onclick="resendVerification()" style="width: 100%; margin-bottom: 10px;">
        Resend Verification Email
      </button>
      <button class="btn" onclick="handleLogout(); location.reload()" style="width: 100%;">
        Back to Login
      </button>
    </div>
  `}function _n(n,e){n.textContent=e,n.classList.add("show")}async function oE(){try{const n=fe(ae,"users",te.uid);ps=Os(n,async e=>{e.exists()?(J=e.data(),J.linkedTo?await cE(J.linkedTo):await aE()):(console.error("User document not found"),Ms())})}catch(n){console.error("Error loading user data:",n),Ms()}}async function aE(){const n=fe(ae,"users",te.uid);ot&&ot(),ot=Os(n,e=>{e.exists()?(V=e.data(),De=V.privateLists||{},ms(),fo()):(console.error("Own grocery data not found"),Ms())})}async function cE(n){const e=fe(ae,"users",n),t=fe(ae,"users",te.uid);ot&&ot(),Bi&&Bi(),ot=Os(e,r=>{r.exists()?(V=r.data(),ms(),fo()):(console.error("Linked account not found"),V=J,ms(),fo())}),Bi=Os(t,r=>{r.exists()&&(De=r.data().privateLists||{},ms())})}function ms(){var t;if(!J||!V)return;const n=Object.values(V.lists||{}).reduce((r,s)=>r+s.filter(i=>!i.checked).length,0),e=((t=V.stores)==null?void 0:t.length)||0;Xv.textContent=`${e} stores • ${n} items`,hE(),ht(),EE(),Nr(),pd()}function lE(){const n=document.getElementById("hamburger-menu");n.addEventListener("click",e=>{e.target===n&&toggleMenu()})}window.toggleMenu=function(){document.getElementById("hamburger-menu").classList.toggle("visible")};window.openSettings=function(){toggleMenu(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById("settings-tab").classList.add("active"),Ea.textContent="Settings",document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"))};window.openManageSharing=function(){toggleMenu(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById("manage-sharing-tab").classList.add("active"),Ea.textContent="Manage Sharing",document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),wa()};function wa(){const n=document.getElementById("manage-sharing-tab");if(!n||!J)return;const e=J.linkedTo!==null&&J.linkedTo!==void 0,t=J.linkedWith&&J.linkedWith.length>0;let r="";e?r=`
      <div class="card">
        <div class="card-title">Linked Account</div>
        <div style="padding: 16px; background: #DBEAFE; border-radius: 12px; margin-bottom: 16px;">
          <div style="font-weight: 600; color: #1E40AF; margin-bottom: 8px;">🔗 Connected</div>
          <div style="font-size: 0.9rem; color: #1E40AF;">
            You're viewing shared grocery lists. All changes sync in real-time!
          </div>
        </div>
        <button class="btn" style="background: var(--danger); color: white; width: 100%;" onclick="unlinkAccount()">
          Unlink and Return to My Lists
        </button>
      </div>
    `:r=`
      <div class="card">
        <div class="card-title">Share Your Lists</div>
        <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.9rem;">
          Share your grocery lists with family members. They'll see all your stores, items, and history in real-time.
        </p>
        
        <div class="input-group">
          <label>Enter email to share with</label>
          <div style="display: flex; gap: 8px;">
            <input type="email" id="manage-share-email" placeholder="wife@email.com" style="flex: 1;">
            <button class="btn btn-primary" style="padding: 10px 16px; white-space: nowrap;" onclick="addShareFromManage()">Add</button>
          </div>
        </div>
        
        <div id="manage-share-status" style="display: none; padding: 12px; border-radius: 8px; margin-top: 12px;"></div>
      </div>
      
      <div class="card">
        <div class="card-title">Shared With</div>
        ${t?uE():'<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No one yet. Add someone above!</p>'}
      </div>
    `,n.innerHTML=r}function uE(){let n="";const e=(J.linkedWith||[]).filter(t=>t&&typeof t=="string"&&t.includes("@")&&t.toLowerCase()!==te.email.toLowerCase());return console.log("Rendering shared with list:",e),console.log("Current user email:",te.email),console.log("Raw linkedWith:",J.linkedWith),e.length===0?'<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No one yet. Add someone above!</p>':(e.forEach(t=>{n+=`
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: var(--bg-main); border-radius: 12px; margin-bottom: 10px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 40px; height: 40px; background: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1rem;">
            ${t.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style="font-weight: 600;">${t}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">Active</div>
          </div>
        </div>
        <button class="btn" style="background: var(--danger); color: white; padding: 8px 14px; font-size: 0.8rem;" onclick="unlinkUser('${t}')">Remove</button>
      </div>
    `}),n)}window.addShareFromManage=function(){const n=document.getElementById("manage-share-email"),e=n.value.trim();if(!e){qi("Please enter an email address","error");return}if(!e.includes("@")){qi("Please enter a valid email address","error");return}if(e===te.email){qi("You can't share with yourself!","error");return}ud(e).then(()=>{n.value="",setTimeout(()=>wa(),500)})};function qi(n,e="success"){const t=document.getElementById("manage-share-status");t&&(t.innerHTML=n,t.style.display="block",t.style.background=e==="error"?"#FEE2E2":"#D1FAE5",t.style.color=e==="error"?"#991B1B":"#065F46")}function hE(){const n=document.getElementById("share-indicator");if(!n)return;const e=J.linkedTo!==null&&J.linkedTo!==void 0,t=J.linkedWith&&J.linkedWith.length>0;e?(n.innerHTML=`
      <span class="share-indicator">
        <span class="share-indicator-dot linked"></span>
        <span>Linked</span>
      </span>
    `,n.style.display="block"):t?(n.innerHTML=`
      <span class="share-indicator">
        <span class="share-indicator-dot sharing"></span>
        <span>Sharing</span>
      </span>
    `,n.style.display="block"):n.style.display="none"}window.unlinkAccount=async function(){if(confirm(`Unlink from shared lists?

You'll return to your own empty lists.`))try{if(await Qe(fe(ae,"users",te.uid),{linkedTo:null}),J.linkedTo){const n=await ma(fe(ae,"users",J.linkedTo));if(n.exists()){const t=(n.data().linkedWith||[]).filter(r=>r!==te.email);await Qe(fe(ae,"users",J.linkedTo),{linkedWith:t})}}q("✓ Unlinked successfully! Returning to your own lists."),setTimeout(()=>window.location.reload(),1e3)}catch(n){console.error("Error unlinking:",n),q("Failed to unlink","error")}};window.showQuickShare=function(){const n=prompt("Enter email address to share with:");if(n){if(!n.includes("@")){alert("Please enter a valid email address");return}if(n===te.email){alert("You can't share with yourself!");return}ud(n)}};async function ud(n){n=n.trim().toLowerCase();try{q("Searching for account...");const e=na(ae,"users"),t=da(e,fa("email","==",n)),r=await ya(t);if(r.empty){alert(`No account found with email: ${n}

Ask them to create an account first, then try again.`);return}const s=r.docs[0],i=s.id,a=s.data();if(a.linkedTo===te.uid){alert(`${n} is already linked to your account!`);return}if(a.linkedTo){alert(`${n} is already linked to another account.

They must unlink first before you can share with them.`);return}if(a.linkedWith&&a.linkedWith.length>0){alert(`${n} is already sharing their lists with others.

They cannot be added to your shared lists.`);return}await Qe(fe(ae,"users",i),{linkedTo:te.uid});const c=[...J.linkedWith||[]];c.includes(n)||c.push(n),await Qe(fe(ae,"users",te.uid),{linkedWith:c}),q(`✓ Successfully linked with ${n}!`)}catch(e){console.error("Error sharing:",e),alert("Failed to send invite. Please try again.")}}window.unlinkUser=async function(n){if(confirm(`Remove ${n} from shared lists?

They will return to their own lists.`))try{q("Removing access...");const e=na(ae,"users"),t=da(e,fa("email","==",n)),r=await ya(t);if(!r.empty){const c=r.docs[0].id;await Qe(fe(ae,"users",c),{linkedTo:null})}const s=(J.linkedWith||[]).filter(a=>a!==n);await Qe(fe(ae,"users",te.uid),{linkedWith:s}),q(`✓ Removed ${n} from shared lists`);const i=document.getElementById("manage-sharing-tab");i&&i.classList.contains("active")&&setTimeout(()=>wa(),500)}catch(e){console.error("Error unlinking user:",e),q("Failed to remove user","error")}};function Ms(){_a.style.display="none",ld.style.display="block",va.style.display="none",Wt.disabled=!1,Wt.textContent="Sign In",zt.disabled=!1,zt.textContent="Create Account",document.getElementById("login-email").value="",document.getElementById("login-password").value="",document.getElementById("signup-email").value="",document.getElementById("signup-password").value=""}function fo(){_a.style.display="none",ld.style.display="none",va.style.display="block"}function dE(){const n=document.querySelectorAll(".nav-item"),e={lists:document.getElementById("lists-tab"),stores:document.getElementById("stores-tab"),history:document.getElementById("history-tab")},t={lists:"My Lists",stores:"Manage Stores",history:"Item History"},r=document.getElementById("fab-add-btn");n.forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.tab;n.forEach(u=>u.classList.remove("active")),s.classList.add("active"),Object.values(e).forEach(u=>u.classList.remove("active"));const a=document.getElementById("manage-sharing-tab"),c=document.getElementById("settings-tab");a&&a.classList.remove("active"),c&&c.classList.remove("active"),e[i]&&e[i].classList.add("active"),Ea.textContent=t[i]||i,r&&(r.style.display=i==="lists"?"flex":"none")})})}function fE(){document.getElementById("fab-add-btn").addEventListener("click",pE)}function pE(){const n=fn==="private";document.getElementById("add-modal-title").textContent=n?"Add Private Item":"Add Item";const e=document.getElementById("modal-store-selector");e.innerHTML="",((V==null?void 0:V.stores)||[]).forEach(t=>{const r=document.createElement("div");r.className="store-chip",r.textContent=t,r.addEventListener("click",()=>r.classList.toggle("selected")),e.appendChild(r)}),document.getElementById("modal-item-name").value="",document.getElementById("modal-quantity-display").textContent="1",document.getElementById("add-modal").classList.add("visible"),setTimeout(()=>{Aa("modal-item-name","modal-item-name-autocomplete"),document.getElementById("modal-item-name").focus()},50)}function po(){document.getElementById("add-modal").classList.remove("visible")}function mE(){document.getElementById("modal-add-btn").addEventListener("click",zl),document.getElementById("modal-cancel-btn").addEventListener("click",po),document.getElementById("modal-qty-minus").addEventListener("click",()=>adjustModalQuantity(-1)),document.getElementById("modal-qty-plus").addEventListener("click",()=>adjustModalQuantity(1)),document.getElementById("modal-item-name").addEventListener("keypress",n=>{n.key==="Enter"&&zl()}),document.getElementById("add-modal").addEventListener("click",n=>{n.target.id==="add-modal"&&po()})}window.adjustModalQuantity=function(n){const e=document.getElementById("modal-quantity-display");let t=parseInt(e.textContent)||1;t=Math.max(1,Math.min(99,t+n)),e.textContent=t};async function zl(){const n=document.getElementById("modal-item-name").value.trim(),e=document.getElementById("modal-quantity-display"),t=parseInt(e.textContent)||1;if(!n){q("Please enter an item name","error");return}const r=Array.from(document.querySelectorAll("#modal-store-selector .store-chip.selected")).map(s=>s.textContent);if(r.length===0){q("Please select at least one store","error");return}try{const s=fn==="private",i=s?De:V.lists;r.forEach(a=>{i[a]||(i[a]=[]);const c=i[a].find(u=>u.name.toLowerCase()===n.toLowerCase());c?c.quantity=(c.quantity||1)+t:i[a].push({name:n,checked:!1,quantity:t,isFavorite:!1})}),V.history.includes(n)||V.history.push(n),s?(await dt(),await ke()):await ke(),q(`✓ Added "${n}" ${t>1?`(${t})`:""} to ${r.length} store(s)`),po()}catch(s){console.error("Error adding item:",s),q("Failed to add item","error")}}let Ia=0,Ta=0;function hd(n){const e=n.target.closest("[data-action]");if(!e)return;const t=e.dataset.action,r=e.dataset.store,s=e.dataset.private==="true";t==="toggle-store"?toggleStore(r,s):t==="bought"?(n.stopPropagation(),removeBoughtItems(r,s)):t==="clear"?(n.stopPropagation(),clearList(r,!1)):t==="clear-private"&&(n.stopPropagation(),clearList(r,!0))}function dd(n){const e=n.target.closest("[data-action]");if(!e)return;const t=n.changedTouches[0].clientY,r=Date.now(),s=Math.abs(t-Ia),i=r-Ta;if(s>10||i>300)return;n.preventDefault();const a=e.dataset.action,c=e.dataset.store,u=e.dataset.private==="true";a==="toggle-store"?toggleStore(c,u):a==="bought"?(n.stopPropagation(),removeBoughtItems(c,u)):a==="clear"?(n.stopPropagation(),clearList(c,!1)):a==="clear-private"&&(n.stopPropagation(),clearList(c,!0))}function ht(){const n=document.getElementById("lists-tab");if(!n||!J)return;const e=localStorage.getItem("expandedStores");if(e&&(Ht=new Set(JSON.parse(e))),n.innerHTML=`
    <div class="lists-subtabs">
      <button class="lists-subtab ${fn==="shared"?"active":""}" data-subtab="shared">Shared</button>
      <button class="lists-subtab ${fn==="private"?"active":""}" data-subtab="private">Private</button>
    </div>
    <div id="lists-subtab-content"></div>
  `,n.querySelectorAll(".lists-subtab").forEach(t=>{t.addEventListener("click",()=>{fn=t.dataset.subtab,ht()})}),!document.getElementById("lists-styles")){const t=document.createElement("style");t.id="lists-styles",t.textContent=`
      .quick-add-inline { display: flex; gap: 10px; margin-bottom: 16px; }
      .quick-add-input { width: 100%; padding: 12px 14px; border: 2px solid var(--border); border-radius: 12px; font-size: 0.95rem; transition: all 0.2s; }
      .quick-add-input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(8,145,178,0.1); }
      .history-dropdown-btn { width: 100%; padding: 12px; background: var(--bg-main); border: 2px solid var(--border); border-radius: 10px; text-align: left; cursor: pointer; font-family: inherit; font-size: 0.95rem; display: flex; justify-content: space-between; align-items: center; transition: all 0.2s; }
      .history-dropdown-btn:hover { border-color: var(--primary-light); }
      .history-dropdown-content { display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--bg-card); border: 2px solid var(--border); border-radius: 10px; margin-top: 4px; max-height: 300px; overflow-y: auto; z-index: 100; box-shadow: 0 4px 12px var(--shadow); }
      .history-dropdown-content.visible { display: block; }
      .history-dropdown-item { padding: 10px 12px; cursor: pointer; display: flex; align-items: center; gap: 10px; }
      .history-dropdown-item:hover { background: var(--bg-main); }
      .history-dropdown-item input { width: 18px; height: 18px; cursor: pointer; accent-color: var(--primary); }
      .history-dropdown-item label { cursor: pointer; flex: 1; margin: 0; }
      .history-dropdown-footer { padding: 10px 12px; border-top: 1px solid var(--border); display: flex; gap: 8px; }
    `,document.head.appendChild(t)}fn==="shared"?gE():yE()}function fd(n,e,t,r,s){const i=e.filter(d=>!d.checked).length,a=e.filter(d=>d.checked).length,c=a>0?`<button class="store-action-btn btn-done" data-store="${n}" data-action="bought" data-private="${s}">✓ Remove Bought (${a})</button>`:"",u=s?"clear-private":"clear";return`
    <div class="card store-card">
      <div class="store-header" data-store="${n}" data-action="toggle-store" data-private="${s}">
        <div class="store-header-left">
          <div>
            <div class="store-title">${n}</div>
            <div class="store-subtitle">${i} item${i!==1?"s":""} remaining${a>0?` • ${a} checked`:""}</div>
          </div>
        </div>
        <div class="store-chevron ${r?"expanded":""}">›</div>
      </div>
      <div class="store-content ${r?"expanded":"collapsed"}" id="store-content-${t}">
        <div class="quick-add-inline" style="margin-bottom: 12px;">
          <div class="input-with-autocomplete" style="flex: 1;">
            <input type="text" placeholder="Quick add item..." class="quick-add-input" id="quick-add-${t}" autocomplete="off">
            <div class="autocomplete-dropdown" id="quick-add-${t}-autocomplete"></div>
          </div>
          <button class="btn btn-accent btn-small" onclick="quickAddItem('${n}', '${t}', ${s})">Add</button>
        </div>
        ${s?"":`
        <div style="position: relative; margin-bottom: 12px;">
          <button class="history-dropdown-btn" onclick="toggleListHistory('${t}')">
            <span>⭐ Add from Favorites</span><span>▼</span>
          </button>
          <div class="history-dropdown-content" id="history-dropdown-${t}">
            <div style="max-height: 240px; overflow-y: auto;">
              ${vn().length>0?vn().map(d=>`
                <div class="history-dropdown-item">
                  <input type="checkbox" id="hist-${t}-${d.replace(/\s+/g,"-")}" value="${d}">
                  <label for="hist-${t}-${d.replace(/\s+/g,"-")}">⭐ ${d}</label>
                </div>
              `).join(""):'<div style="padding: 20px; text-align: center; color: var(--text-secondary);">No favorites yet!<br>Star items to add them here.</div>'}
            </div>
            ${vn().length>0?`
            <div class="history-dropdown-footer">
              <button class="btn btn-primary btn-small" style="flex:1;" onclick="addSelectedFromHistory('${n}','${t}')">Add Selected</button>
              <button class="btn btn-small" style="background:var(--text-secondary);color:white;" onclick="closeListHistory('${t}')">Cancel</button>
            </div>`:`
            <div class="history-dropdown-footer">
              <button class="btn btn-small" style="flex:1;background:var(--text-secondary);color:white;" onclick="closeListHistory('${t}')">Close</button>
            </div>`}
          </div>
        </div>`}
        <div id="list-${t}" style="margin-bottom: 12px;"></div>
        <div class="store-actions">
          ${c}
          <button class="store-action-btn btn-clear" data-store="${n}" data-action="${u}">Clear All</button>
        </div>
      </div>
    </div>
  `}function gE(){const n=document.getElementById("lists-subtab-content");if(!n)return;let e="";if(V.stores.length===0)e='<div class="card"><div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet. Add some in the Stores tab!</p></div></div>';else{let t=!1;V.stores.forEach(r=>{const s=V.lists[r]||[];if(s.length===0)return;t=!0;const i=r.replace(/\s+/g,"-"),a=Ht.has(r);e+=fd(r,s,i,a,!1)}),t||(e='<div class="card"><div class="empty-state"><div class="empty-icon">📝</div><p>No items yet. Tap + to add some!</p></div></div>')}n.innerHTML=e,n.addEventListener("click",hd),n.addEventListener("touchstart",t=>{Ia=t.touches[0].clientY,Ta=Date.now()},{passive:!0}),n.addEventListener("touchend",dd),V.stores.forEach(t=>{const r=V.lists[t]||[],s=t.replace(/\s+/g,"-"),i=[...r].sort((c,u)=>c.checked===u.checked?0:c.checked?1:-1),a=document.getElementById(`list-${s}`);a&&i.length>0&&(a.innerHTML="",i.forEach((c,u)=>a.appendChild(md(c,t,u,!1)))),setTimeout(()=>{Aa(`quick-add-${s}`,`quick-add-${s}-autocomplete`);const c=document.getElementById(`quick-add-${s}`);c&&c.addEventListener("keypress",u=>{u.key==="Enter"&&quickAddItem(t,s,!1)})},0)})}function yE(){const n=document.getElementById("lists-subtab-content");if(!n)return;let e="";if(V.stores.length===0)e='<div class="card"><div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet. Add some in the Stores tab!</p></div></div>';else{let t=!1;V.stores.forEach(r=>{const s=De[r]||[];if(s.length===0)return;t=!0;const i="priv-"+r.replace(/\s+/g,"-"),a=Ht.has("priv:"+r);e+=fd(r,s,i,a,!0)}),t||(e='<div class="card"><div class="empty-state"><div class="empty-icon">🔒</div><p>No private items yet. Tap + to add some!</p></div></div>')}n.innerHTML=e,n.addEventListener("click",hd),n.addEventListener("touchstart",t=>{Ia=t.touches[0].clientY,Ta=Date.now()},{passive:!0}),n.addEventListener("touchend",dd),V.stores.forEach(t=>{const r=De[t]||[],s="priv-"+t.replace(/\s+/g,"-"),i=[...r].sort((c,u)=>c.checked===u.checked?0:c.checked?1:-1),a=document.getElementById(`list-${s}`);a&&i.length>0&&(a.innerHTML="",i.forEach((c,u)=>a.appendChild(md(c,t,u,!0)))),setTimeout(()=>{Aa(`quick-add-${s}`,`quick-add-${s}-autocomplete`);const c=document.getElementById(`quick-add-${s}`);c&&c.addEventListener("keypress",u=>{u.key==="Enter"&&quickAddItem(t,s,!0)})},0)})}window.toggleListHistory=function(n){document.getElementById(`history-dropdown-${n}`).classList.toggle("visible")};window.closeListHistory=function(n){document.getElementById(`history-dropdown-${n}`).classList.remove("visible")};window.addSelectedFromHistory=async function(n,e){const t=Array.from(document.querySelectorAll(`#history-dropdown-${e} input:checked`)).map(r=>r.value);if(t.length===0){q("Please select at least one item","error");return}t.forEach(r=>{V.lists[n]||(V.lists[n]=[]);const s=V.lists[n].find(i=>i.name.toLowerCase()===r.toLowerCase());s?s.quantity=(s.quantity||1)+1:V.lists[n].push({name:r,checked:!1,quantity:1,isFavorite:!0})}),await ke(),q(`✓ Added ${t.length} favorite(s) to ${n}`),closeListHistory(e),ht()};window.quickAddItem=async function(n,e,t=!1){const r=document.getElementById(`quick-add-${e}`),s=r.value.trim();if(!s){q("Please enter an item name","error");return}const i=t?De:V.lists;i[n]||(i[n]=[]);const a=i[n].find(c=>c.name.toLowerCase()===s.toLowerCase());if(a){a.quantity=(a.quantity||1)+1,t?await dt():await ke(),q(`✓ Increased "${s}" quantity to ${a.quantity}`),r.value="",ht();return}i[n].push({name:s,checked:!1,quantity:1,isFavorite:!1}),V.history.includes(s)||V.history.push(s),t?(await dt(),await ke()):await ke(),q(`✓ Added "${s}" to ${n}`),r.value="",ht()};document.addEventListener("click",n=>{!n.target.closest(".history-dropdown-btn")&&!n.target.closest(".history-dropdown-content")&&document.querySelectorAll(".history-dropdown-content").forEach(e=>{e.classList.remove("visible")})});function pd(){const n=document.getElementById("settings-tab");if(!n||!J)return;let e=`
    <div class="card">
      <div class="card-title">Account</div>
      <div style="padding: 12px; background: var(--bg-main); border-radius: 12px; margin-bottom: 12px;">
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">Signed in as:</div>
        <div style="font-weight: 600;">${te.email}</div>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-secondary); padding: 12px; background: var(--bg-main); border-radius: 8px;">
        <strong>Version:</strong> 2.0<br>
        <strong>Build:</strong> Firebase Sync
      </div>
    </div>
  `;n.innerHTML=e}window.sendShareInvite=async function(){const n=document.getElementById("share-email"),e=n.value.trim().toLowerCase(),t=document.getElementById("share-status");if(!e){It(t,"Please enter an email address","error");return}if(e===te.email){It(t,"You can't share with yourself!","error");return}if(!e.includes("@")){It(t,"Please enter a valid email address","error");return}try{console.log("Searching for user with email:",e);const r=na(ae,"users"),s=da(r,fa("email","==",e));console.log("Executing query...");const i=await ya(s);if(console.log("Query results:",i.size,"documents found"),i.empty){It(t,`No account found with email: ${e}<br><br>Ask them to create an account first, then try again.`,"error");return}const a=i.docs[0],c=a.id,u=a.data();if(console.log("Found user:",c,u),u.linkedTo===te.uid){It(t,`${e} is already linked to your account!`,"error");return}if(u.linkedTo){It(t,`${e} is already linked to another account. They must unlink first.`,"error");return}console.log("Linking accounts..."),await Qe(fe(ae,"users",c),{linkedTo:te.uid}),console.log("Target user updated");const d=[...J.linkedWith||[]];d.includes(e)||d.push(e),await Qe(fe(ae,"users",te.uid),{linkedWith:d}),console.log("Own user updated"),It(t,`✓ Successfully linked with ${e}!<br><br>They will now see your grocery lists when they log in.`,"success"),n.value="",q(`✓ Linked with ${e}!`),setTimeout(()=>pd(),1e3)}catch(r){console.error("Error sharing - Full error:",r),console.error("Error code:",r.code),console.error("Error message:",r.message),It(t,`Failed to send invite: ${r.message}<br><br>Check console for details.`,"error")}};function It(n,e,t="success"){n.innerHTML=e,n.style.display="block",n.style.background=t==="error"?"#FEE2E2":"#D1FAE5",n.style.color=t==="error"?"#991B1B":"#065F46",n.style.padding="12px",n.style.borderRadius="8px"}function md(n,e,t,r=!1){n.quantity||(n.quantity=1),n.isFavorite===void 0&&(n.isFavorite=!1);const s=r?dt:ke,i=document.createElement("div");i.className="grocery-item-container";const a=document.createElement("div");a.className="grocery-item"+(n.checked?" checked":"");const c=document.createElement("input");c.type="checkbox",c.checked=n.checked||!1,c.addEventListener("change",async()=>{n.checked=c.checked,a.classList.toggle("checked",c.checked),await s(),ht()});const u=document.createElement("div");u.className="item-name-wrapper",u.style.flex="1",u.style.display="flex",u.style.alignItems="center",u.style.gap="8px",u.style.cursor="pointer",u.style.userSelect="none",u.addEventListener("click",()=>{const C=i.querySelector(".qty-controls-inline");C.classList.contains("expanded")?C.classList.remove("expanded"):(document.querySelectorAll(".qty-controls-inline.expanded").forEach(k=>{k.classList.remove("expanded")}),C.classList.add("expanded"),C.querySelector(".qty-display").textContent=n.quantity,C.querySelector(".favorite-checkbox").checked=n.isFavorite)});const d=document.createElement("span");if(d.textContent=n.name,d.style.fontWeight="500",u.appendChild(d),n.quantity>1){const C=document.createElement("span");C.className="quantity-badge",C.textContent=`(get ${n.quantity})`,u.appendChild(C)}if(n.isFavorite){const C=document.createElement("span");C.className="favorite-indicator",C.innerHTML="⭐",C.style.fontSize="1.2rem",C.style.cursor="pointer",C.style.marginLeft="4px",C.title="Click to edit",C.addEventListener("click",N=>{N.stopPropagation();const k=i.querySelector(".qty-controls-inline");document.querySelectorAll(".qty-controls-inline.expanded").forEach($=>{$.classList.remove("expanded")}),k.classList.add("expanded"),k.querySelector(".qty-display").textContent=n.quantity,k.querySelector(".favorite-checkbox").checked=n.isFavorite}),a.appendChild(c),a.appendChild(u),a.appendChild(C)}else a.appendChild(c),a.appendChild(u);const p=document.createElement("button");p.className="delete-btn",p.textContent="×",p.addEventListener("click",C=>{C.stopPropagation(),vE(n.name,e,r)}),a.appendChild(p);const _=document.createElement("div");_.className="qty-controls-inline";let T=n.quantity,S=n.isFavorite;return _.innerHTML=`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="display: flex; align-items: center; justify-content: center; gap: 12px;">
        <button class="qty-inline-btn qty-minus">−</button>
        <span class="qty-display" style="font-size: 1.5rem; font-weight: 700; min-width: 40px; text-align: center; color: var(--primary);">${n.quantity}</span>
        <button class="qty-inline-btn qty-plus">+</button>
      </div>
      <label style="display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; user-select: none;">
        <input type="checkbox" class="favorite-checkbox" ${n.isFavorite?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--primary);">
        <span style="font-size: 0.9rem; color: var(--text-primary);">⭐ Favorite</span>
      </label>
      <button class="qty-inline-ok">OK</button>
    </div>
  `,_.querySelector(".qty-minus").addEventListener("click",C=>{C.stopPropagation(),T>1&&(T--,_.querySelector(".qty-display").textContent=T)}),_.querySelector(".qty-plus").addEventListener("click",C=>{C.stopPropagation(),T++,_.querySelector(".qty-display").textContent=T}),_.querySelector(".favorite-checkbox").addEventListener("change",C=>{C.stopPropagation(),S=C.target.checked}),_.querySelector(".qty-inline-ok").addEventListener("click",async C=>{C.stopPropagation(),n.quantity=T,n.isFavorite=S,Hl(n.name,"quantity",T,r),Hl(n.name,"isFavorite",S,r),await s(),_.classList.remove("expanded"),ht()}),i.appendChild(a),i.appendChild(_),i}function Hl(n,e,t,r=!1){const s=r?De:V.lists;V.stores.forEach(i=>{const c=(s[i]||[]).find(u=>u.name.toLowerCase()===n.toLowerCase());c&&(c[e]=t)})}function vn(){const n=new Set;return V.stores.forEach(e=>{(V.lists[e]||[]).forEach(r=>{r.isFavorite&&n.add(r.name)})}),Array.from(n).sort()}window.setHistoryFilter=function(n){window.historyFilter=n,Nr()};let gs=null,mo=!1;window.removeBoughtItems=function(n,e=!1){const s=((e?De:V.lists)[n]||[]).filter(a=>a.checked);if(s.length===0){q("No bought items to remove","error");return}gs=n,mo=e;const i=document.getElementById("bought-modal-body");document.getElementById("bought-modal-store").textContent=n,i.innerHTML=s.map(a=>`
    <div class="bought-item-row" data-item-name="${a.name.replace(/"/g,"&quot;")}">
      <div class="bought-item-name">${a.name}${a.quantity>1?` (${a.quantity})`:""}</div>
      <div class="bought-item-options">
        <button class="bought-opt-btn active" data-scope="all">All Stores</button>
        <button class="bought-opt-btn" data-scope="one">${n} only</button>
      </div>
    </div>
  `).join(""),i.querySelectorAll(".bought-item-row").forEach(a=>{a.querySelectorAll(".bought-opt-btn").forEach(c=>{c.addEventListener("click",()=>{a.querySelectorAll(".bought-opt-btn").forEach(u=>u.classList.remove("active")),c.classList.add("active")})})}),document.getElementById("bought-modal").classList.add("visible")};function _E(){document.getElementById("bought-confirm-btn").addEventListener("click",async()=>{const n=mo?De:V.lists;document.querySelectorAll("#bought-modal-body .bought-item-row").forEach(e=>{const t=e.dataset.itemName;e.querySelector(".bought-opt-btn.active").dataset.scope==="all"?V.stores.forEach(s=>{n[s]&&(n[s]=n[s].filter(i=>i.name.toLowerCase()!==t.toLowerCase()))}):n[gs]&&(n[gs]=n[gs].filter(s=>s.name.toLowerCase()!==t.toLowerCase()))}),mo?await dt():await ke(),q("✓ Removed bought items"),document.getElementById("bought-modal").classList.remove("visible"),ht()}),document.getElementById("bought-cancel-btn").addEventListener("click",()=>{document.getElementById("bought-modal").classList.remove("visible")}),document.getElementById("bought-modal").addEventListener("click",n=>{n.target.id==="bought-modal"&&document.getElementById("bought-modal").classList.remove("visible")})}window.toggleStore=function(n,e=!1){const t=e?"priv:"+n:n;Ht.has(t)?Ht.delete(t):Ht.add(t),localStorage.setItem("expandedStores",JSON.stringify([...Ht])),ht()};window.clearList=async function(n,e=!1){const t=document.getElementById("clear-modal");document.getElementById("clear-store-name").textContent=n,t.dataset.store=n,t.dataset.private=e?"true":"false",t.classList.add("visible")};document.getElementById("clear-confirm-btn").addEventListener("click",async()=>{const n=document.getElementById("clear-modal"),e=n.dataset.store,t=n.dataset.private==="true";e&&(t?(De[e]=[],await dt()):(V.lists[e]=[],await ke()),q(`✓ Cleared ${e}`),n.classList.remove("visible"),n.dataset.store="")});document.getElementById("clear-cancel-btn").addEventListener("click",()=>{const n=document.getElementById("clear-modal");n.classList.remove("visible"),n.dataset.store=""});document.getElementById("clear-modal").addEventListener("click",n=>{if(n.target.id==="clear-modal"){const e=document.getElementById("clear-modal");e.classList.remove("visible"),e.dataset.store=""}});let Dt=null,qt=null,Cn=!1;function vE(n,e,t=!1){Dt=n,qt=e,Cn=t;const r=document.getElementById("delete-modal");document.getElementById("delete-item-name").textContent=`"${n}"`,document.getElementById("delete-store-name").textContent=`📍 Only from ${e}`,r.classList.add("visible")}function si(){document.getElementById("delete-modal").classList.remove("visible"),Dt=null,qt=null,Cn=!1}document.getElementById("delete-all-btn").addEventListener("click",async()=>{if(!Dt)return;const n=Cn?De:V.lists;V.stores.forEach(e=>{n[e]&&(n[e]=n[e].filter(t=>t.name.toLowerCase()!==Dt.toLowerCase()))}),Cn?await dt():await ke(),q(`✓ Removed "${Dt}" from all stores`),si()});document.getElementById("delete-one-btn").addEventListener("click",async()=>{if(!Dt||!qt)return;const n=Cn?De:V.lists;n[qt]&&(n[qt]=n[qt].filter(e=>e.name.toLowerCase()!==Dt.toLowerCase())),Cn?await dt():await ke(),q(`✓ Removed "${Dt}" from ${qt}`),si()});document.getElementById("delete-cancel-btn").addEventListener("click",()=>{si()});document.getElementById("delete-modal").addEventListener("click",n=>{n.target.id==="delete-modal"&&si()});function EE(){const n=document.getElementById("stores-tab");if(!n||!J)return;let e=`
    <div class="card">
      <div class="card-title">Add Store</div>
      <div style="display: flex; gap: 8px;">
        <input type="text" id="new-store-name" placeholder="e.g., Walmart" style="flex: 1; padding: 12px 14px; font-size: 0.95rem;">
        <button class="btn btn-primary" style="padding: 10px 16px; font-size: 0.85rem; white-space: nowrap;" onclick="addStore()">+ Add</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Your Stores</div>
  `;V.stores.length===0?e+='<div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet</p></div>':V.stores.forEach((t,r)=>{const s=(V.lists[t]||[]).length;e+=`
        <div class="store-item-compact">
          <div>
            <div class="store-name">${t}</div>
            <div class="store-meta">${s} item${s!==1?"s":""}</div>
          </div>
          <button class="btn" style="background: var(--danger); color: white; padding: 4px 8px; font-size: 0.7rem;" onclick="removeStore(${r})">Remove</button>
        </div>
      `}),e+="</div>",n.innerHTML=e,setTimeout(()=>{const t=document.getElementById("new-store-name");t&&t.addEventListener("keypress",r=>{r.key==="Enter"&&addStore()})},0)}window.addStore=async function(){const n=document.getElementById("new-store-name"),e=n.value.trim();if(!e){q("Please enter a store name","error");return}if(V.stores.includes(e)){q("Store already exists","error");return}V.stores.push(e),V.lists[e]=[],await ke(),q(`✓ Added ${e}`),n.value=""};window.removeStore=async function(n){const e=V.stores[n],t=(V.lists[e]||[]).length;t>0&&!confirm(`${e} has ${t} items. Delete anyway?`)||(V.stores.splice(n,1),delete V.lists[e],De[e]&&(delete De[e],await dt()),await ke(),q(`✓ Removed ${e}`))};function Nr(){const n=document.getElementById("history-tab");if(!n||!J)return;window.historyFilter||(window.historyFilter="all");const e=vn();let t=[...V.history||[]];window.historyFilter==="favorites"&&(t=t.filter(i=>e.includes(i)));const r=t.sort((i,a)=>i.toLowerCase().localeCompare(a.toLowerCase()));let s='<div class="card">';if(s+='<div class="list-header-compact">',s+='<div class="card-title" style="margin: 0;">Item History</div>',s+=`<button class="btn" style="background: var(--primary); color: white; padding: 5px 12px; font-size: 0.75rem;" onclick="toggleBulkSelect()">${Ze?"✕ Cancel":"☑ Select"}</button>`,s+="</div>",s+=`
    <div style="display: flex; gap: 8px; margin: 16px 0; padding: 4px; background: var(--bg-main); border-radius: 8px;">
      <button class="filter-btn ${window.historyFilter==="all"?"active":""}" onclick="setHistoryFilter('all')" style="flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; ${window.historyFilter==="all"?"background: var(--primary); color: white;":"background: transparent; color: var(--text-secondary);"}">
        All (${V.history.length})
      </button>
      <button class="filter-btn ${window.historyFilter==="favorites"?"active":""}" onclick="setHistoryFilter('favorites')" style="flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; ${window.historyFilter==="favorites"?"background: var(--primary); color: white;":"background: transparent; color: var(--text-secondary);"}">
        ⭐ Favorites (${e.length})
      </button>
    </div>
  `,Ze&&Ge.size>0&&(s+=`
      <div style="background: var(--success); color: white; padding: 12px; border-radius: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 600;">${Ge.size} items selected</span>
        <button class="btn btn-small" style="background: white; color: var(--success);" onclick="showBulkStoreSelector()">Add to Stores</button>
      </div>
    `),s+=`<div id="bulk-store-selector" style="display: none; background: var(--bg-card); padding: 16px; border: 2px solid var(--primary); border-radius: 12px; margin-bottom: 16px;">
    <div style="font-weight: 600; margin-bottom: 12px;">Select Stores:</div>
    <div class="store-selector" id="bulk-store-chips"></div>
    <div style="display: flex; gap: 8px; margin-top: 12px;">
      <button class="btn btn-primary" style="flex: 1;" onclick="addBulkItemsToStores()">Add Selected Items</button>
      <button class="btn btn-small" style="background: var(--text-secondary); color: white;" onclick="hideBulkStoreSelector()">Cancel</button>
    </div>
  </div>`,r.length===0){const i=window.historyFilter==="favorites"?'<div class="empty-state"><div class="empty-icon">⭐</div><p>No favorites yet<br><small style="opacity: 0.7;">Star items in your lists to add them here</small></p></div>':'<div class="empty-state"><div class="empty-icon">📜</div><p>No items in history yet</p></div>';s+=i}else r.forEach(i=>{const a=i.replace(/[^a-zA-Z0-9]/g,"-"),c=e.includes(i);s+=`
        <div class="history-item ${Ze?"bulk-mode":""}" data-item="${i}">
          ${Ze?`<input type="checkbox" class="history-checkbox" data-item="${i}" ${Ge.has(i)?"checked":""} onchange="updateBulkSelection('${i}')">`:""}
          <div class="history-item-header" ${Ze?`onclick="toggleHistoryCheckbox('${i}')"`:""}>
            <span class="history-item-name">${c?"⭐ ":""}${i}</span>
            <div class="history-item-actions">
              ${Ze?"":`<button class="history-expand-btn" onclick="toggleHistoryItem('${a}')" id="btn-${a}">▼</button>`}
            </div>
          </div>
          <div class="history-item-stores" id="stores-${a}">
            <div class="history-store-grid">
              ${V.stores.map(u=>`
                <label class="history-store-checkbox">
                  <input type="checkbox" value="${u}" class="store-check-${a}">
                  <span>${u}</span>
                </label>
              `).join("")}
            </div>
            <button class="btn btn-primary btn-small" style="width: 100%;" onclick="addFromHistory('${i}', '${a}')">Add to Selected Stores</button>
          </div>
        </div>
      `});if(s+="</div>",n.innerHTML=s,!document.getElementById("history-styles")){const i=document.createElement("style");i.id="history-styles",i.textContent=`
      .history-item {
        padding: 12px 16px;
        background: var(--bg-main);
        border-radius: 10px;
        margin-bottom: 10px;
        border: 2px solid transparent;
        transition: all 0.2s;
      }
      .history-item.bulk-mode {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .history-item.bulk-mode:hover {
        border-color: var(--primary-light);
        transform: translateX(2px);
      }
      .history-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
        accent-color: var(--primary);
      }
      .history-item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
      }
      .history-item-name {
        font-weight: 500;
        flex: 1;
      }
      .history-item-actions {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .history-expand-btn {
        background: none;
        border: none;
        font-size: 1rem;
        cursor: pointer;
        padding: 4px 8px;
        transition: transform 0.2s;
        color: var(--primary);
      }
      .history-expand-btn.expanded {
        transform: rotate(180deg);
      }
      .history-item-stores {
        display: none;
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--border);
      }
      .history-item-stores.visible {
        display: block;
      }
      .history-store-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 8px;
        margin-bottom: 12px;
      }
      .history-store-checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        background: var(--bg-card);
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9rem;
      }
      .history-store-checkbox input {
        cursor: pointer;
        accent-color: var(--primary);
      }
    `,document.head.appendChild(i)}}window.toggleBulkSelect=function(){Ze=!Ze,Ge.clear(),Nr()};window.updateBulkSelection=function(n){Ge.has(n)?Ge.delete(n):Ge.add(n),Nr()};window.toggleHistoryCheckbox=function(n){const e=document.querySelector(`.history-checkbox[data-item="${n}"]`);e&&(e.checked=!e.checked,updateBulkSelection(n))};window.showBulkStoreSelector=function(){const n=document.getElementById("bulk-store-selector"),e=document.getElementById("bulk-store-chips");e.innerHTML="",V.stores.forEach(t=>{const r=document.createElement("div");r.className="store-chip",r.textContent=t,r.addEventListener("click",()=>r.classList.toggle("selected")),e.appendChild(r)}),n.style.display="block"};window.hideBulkStoreSelector=function(){document.getElementById("bulk-store-selector").style.display="none"};window.addBulkItemsToStores=async function(){const n=Array.from(document.querySelectorAll("#bulk-store-chips .store-chip.selected")).map(t=>t.textContent);if(n.length===0){q("Please select at least one store","error");return}const e=vn();Ge.forEach(t=>{const r=e.includes(t);n.forEach(s=>{V.lists[s]||(V.lists[s]=[]);const i=V.lists[s].find(a=>a.name.toLowerCase()===t.toLowerCase());i?i.quantity=(i.quantity||1)+1:V.lists[s].push({name:t,checked:!1,quantity:1,isFavorite:r})})}),await ke(),q(`✓ Added ${Ge.size} items to ${n.length} store(s)`),Ze=!1,Ge.clear(),Nr()};window.toggleHistoryItem=function(n){const e=document.getElementById(`stores-${n}`),t=document.getElementById(`btn-${n}`);e.classList.toggle("visible"),t.classList.toggle("expanded")};window.addFromHistory=async function(n,e){const t=Array.from(document.querySelectorAll(`.store-check-${e}:checked`)).map(i=>i.value);if(t.length===0){q("Please select at least one store","error");return}const s=vn().includes(n);t.forEach(i=>{V.lists[i]||(V.lists[i]=[]);const a=V.lists[i].find(c=>c.name.toLowerCase()===n.toLowerCase());a?a.quantity=(a.quantity||1)+1:V.lists[i].push({name:n,checked:!1,quantity:1,isFavorite:s})}),await ke(),q(`✓ Added "${n}" to ${t.length} store(s)`),document.getElementById(`stores-${e}`).classList.remove("visible"),document.getElementById(`btn-${e}`).classList.remove("expanded"),document.querySelectorAll(`.store-check-${e}`).forEach(i=>i.checked=!1)};function Aa(n,e){const t=document.getElementById(n),r=document.getElementById(e);!t||!r||(t.addEventListener("input",s=>{const i=s.target.value.trim().toLowerCase();if(i.length===0){r.classList.remove("visible");return}const c=[...new Set([...Zv,...(V==null?void 0:V.history)||[]])].filter(u=>u.toLowerCase().includes(i)).sort((u,d)=>{const p=u.toLowerCase().startsWith(i),_=d.toLowerCase().startsWith(i);return p&&!_?-1:!p&&_?1:u.toLowerCase().localeCompare(d.toLowerCase())});if(c.length===0){r.classList.remove("visible");return}r.innerHTML=c.slice(0,8).map((u,d)=>`<div class="autocomplete-item" data-value="${u}" data-index="${d}">${u}</div>`).join(""),r.classList.add("visible"),Ne=-1}),t.addEventListener("keydown",s=>{const i=r.querySelectorAll(".autocomplete-item");if(s.key==="ArrowDown")s.preventDefault(),Ne=Math.min(Ne+1,i.length-1),Gl(i);else if(s.key==="ArrowUp")s.preventDefault(),Ne=Math.max(Ne-1,-1),Gl(i);else if(s.key==="Enter"&&Ne>=0){s.preventDefault();const a=i[Ne];a&&(t.value=a.dataset.value,r.classList.remove("visible"),Ne=-1)}else s.key==="Escape"&&(r.classList.remove("visible"),Ne=-1)}),r.addEventListener("click",s=>{const i=s.target.closest(".autocomplete-item");i&&(t.value=i.dataset.value,r.classList.remove("visible"),Ne=-1)}),document.addEventListener("click",s=>{!t.contains(s.target)&&!r.contains(s.target)&&(r.classList.remove("visible"),Ne=-1)}))}function Gl(n){n.forEach((e,t)=>{e.classList.toggle("selected",t===Ne),t===Ne&&e.scrollIntoView({block:"nearest"})})}async function ke(){try{const n=J.linkedTo||te.uid;console.log("Saving data to user:",n),console.log("Current user:",te.uid),console.log("Linked to:",J.linkedTo),await Qe(fe(ae,"users",n),{stores:V.stores,lists:V.lists,history:V.history}),console.log("Save successful")}catch(n){console.error("Error saving data:",n),console.error("Error code:",n.code),console.error("Error message:",n.message),q("Failed to save","error")}}async function dt(){try{await Qe(fe(ae,"users",te.uid),{privateLists:De})}catch(n){console.error("Error saving private data:",n),q("Failed to save","error")}}function q(n,e="success"){const t=document.createElement("div");t.className=`toast ${e}`,t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toastFadeOut 0.3s ease forwards",setTimeout(()=>t.remove(),300)},2e3)}
