(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Gc={};/**
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
 */const Eu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,g=(i&3)<<4|c>>4;let v=(c&15)<<2|d>>6,S=d&63;u||(S=64,a||(v=64)),r.push(t[p],t[g],t[v],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Eu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new Rf;const v=i<<2|c>>4;if(r.push(v),d!==64){const S=c<<4&240|d>>2;if(r.push(S),g!==64){const x=d<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pf=function(n){const e=Eu(n);return wu.encodeByteArray(e,!0)},Ds=function(n){return Pf(n).replace(/\./g,"")},Iu=function(n){try{return wu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Df=()=>xf().__FIREBASE_DEFAULTS__,Lf=()=>{if(typeof process>"u"||typeof Gc>"u")return;const n=Gc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Iu(n[1]);return e&&JSON.parse(e)},Zs=()=>{try{return Df()||Lf()||Vf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tu=n=>{var e,t;return(t=(e=Zs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Of=n=>{const e=Tu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},bu=()=>{var n;return(n=Zs())===null||n===void 0?void 0:n.config},Au=n=>{var e;return(e=Zs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Nf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Mf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ds(JSON.stringify(t)),Ds(JSON.stringify(a)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ff(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Bf(){var n;const e=(n=Zs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $f(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jf(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zf(){return!Bf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wf(){try{return typeof indexedDB=="object"}catch{return!1}}function Hf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Gf="FirebaseError";class vt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gf,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Kf(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new vt(s,c,r)}}function Kf(n,e){return n.replace(Qf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qf=/\{\$([^}]+)}/g;function Yf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ls(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Kc(i)&&Kc(a)){if(!Ls(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Kc(n){return n!==null&&typeof n=="object"}/**
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
 */function Vr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ur(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jf(n,e){const t=new Xf(n,e);return t.subscribe.bind(t)}class Xf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Xi),s.error===void 0&&(s.error=Xi),s.complete===void 0&&(s.complete=Xi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xi(){}/**
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
 */function ce(n){return n&&n._delegate?n._delegate:n}class rn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class ep{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Nf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(np(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tp(n){return n===Jt?void 0:n}function np(n){return n.instantiationMode==="EAGER"}/**
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
 */class rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ep(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const sp={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ip=H.INFO,op={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},ap=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=op[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=ip,this._logHandler=ap,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const cp=(n,e)=>e.some(t=>n instanceof t);let Qc,Yc;function lp(){return Qc||(Qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function up(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Su=new WeakMap,ho=new WeakMap,Cu=new WeakMap,Zi=new WeakMap,Bo=new WeakMap;function hp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Vt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Su.set(t,n)}).catch(()=>{}),Bo.set(e,n),e}function dp(n){if(ho.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ho.set(n,e)}let fo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ho.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fp(n){fo=n(fo)}function pp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(eo(this),e,...t);return Cu.set(r,e.sort?e.sort():[e]),Vt(r)}:up().includes(n)?function(...e){return n.apply(eo(this),e),Vt(Su.get(this))}:function(...e){return Vt(n.apply(eo(this),e))}}function mp(n){return typeof n=="function"?pp(n):(n instanceof IDBTransaction&&dp(n),cp(n,lp())?new Proxy(n,fo):n)}function Vt(n){if(n instanceof IDBRequest)return hp(n);if(Zi.has(n))return Zi.get(n);const e=mp(n);return e!==n&&(Zi.set(n,e),Bo.set(e,n)),e}const eo=n=>Bo.get(n);function gp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Vt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Vt(a.result),u.oldVersion,u.newVersion,Vt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const yp=["get","getKey","getAll","getAllKeys","count"],_p=["put","add","delete","clear"],to=new Map;function Jc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(to.get(e))return to.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=_p.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yp.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return to.set(e,i),i}fp(n=>({...n,get:(e,t,r)=>Jc(e,t)||n.get(e,t,r),has:(e,t)=>!!Jc(e,t)||n.has(e,t)}));/**
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
 */class vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ep(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ep(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const po="@firebase/app",Xc="0.10.13";/**
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
 */const pt=new Fo("@firebase/app"),wp="@firebase/app-compat",Ip="@firebase/analytics-compat",Tp="@firebase/analytics",bp="@firebase/app-check-compat",Ap="@firebase/app-check",Sp="@firebase/auth",Cp="@firebase/auth-compat",kp="@firebase/database",Rp="@firebase/data-connect",Pp="@firebase/database-compat",xp="@firebase/functions",Dp="@firebase/functions-compat",Lp="@firebase/installations",Vp="@firebase/installations-compat",Op="@firebase/messaging",Np="@firebase/messaging-compat",Mp="@firebase/performance",Fp="@firebase/performance-compat",Bp="@firebase/remote-config",Up="@firebase/remote-config-compat",$p="@firebase/storage",qp="@firebase/storage-compat",jp="@firebase/firestore",zp="@firebase/vertexai-preview",Wp="@firebase/firestore-compat",Hp="firebase",Gp="10.14.1";/**
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
 */const mo="[DEFAULT]",Kp={[po]:"fire-core",[wp]:"fire-core-compat",[Tp]:"fire-analytics",[Ip]:"fire-analytics-compat",[Ap]:"fire-app-check",[bp]:"fire-app-check-compat",[Sp]:"fire-auth",[Cp]:"fire-auth-compat",[kp]:"fire-rtdb",[Rp]:"fire-data-connect",[Pp]:"fire-rtdb-compat",[xp]:"fire-fn",[Dp]:"fire-fn-compat",[Lp]:"fire-iid",[Vp]:"fire-iid-compat",[Op]:"fire-fcm",[Np]:"fire-fcm-compat",[Mp]:"fire-perf",[Fp]:"fire-perf-compat",[Bp]:"fire-rc",[Up]:"fire-rc-compat",[$p]:"fire-gcs",[qp]:"fire-gcs-compat",[jp]:"fire-fst",[Wp]:"fire-fst-compat",[zp]:"fire-vertex","fire-js":"fire-js",[Hp]:"fire-js-all"};/**
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
 */const Vs=new Map,Qp=new Map,go=new Map;function Zc(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xn(n){const e=n.name;if(go.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;go.set(e,n);for(const t of Vs.values())Zc(t,n);for(const t of Qp.values())Zc(t,n);return!0}function Uo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n.settings!==void 0}/**
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
 */const Yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new Lr("app","Firebase",Yp);/**
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
 */class Jp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=Gp;function ku(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(t||(t=bu()),!t)throw Ot.create("no-options");const i=Vs.get(s);if(i){if(Ls(t,i.options)&&Ls(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const a=new rp(s);for(const u of go.values())a.addComponent(u);const c=new Jp(t,r,a);return Vs.set(s,c),c}function Ru(n=mo){const e=Vs.get(n);if(!e&&n===mo&&bu())return ku();if(!e)throw Ot.create("no-app",{appName:n});return e}function Nt(n,e,t){var r;let s=(r=Kp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}xn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Xp="firebase-heartbeat-database",Zp=1,Ir="firebase-heartbeat-store";let no=null;function Pu(){return no||(no=gp(Xp,Zp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ot.create("idb-open",{originalErrorMessage:n.message})})),no}async function em(n){try{const t=(await Pu()).transaction(Ir),r=await t.objectStore(Ir).get(xu(n));return await t.done,r}catch(e){if(e instanceof vt)pt.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(t.message)}}}async function el(n,e){try{const r=(await Pu()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,xu(n)),await r.done}catch(t){if(t instanceof vt)pt.warn(t.message);else{const r=Ot.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pt.warn(r.message)}}}function xu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tm=1024,nm=30*24*60*60*1e3;class rm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new im(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=nm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tl(),{heartbeatsToSend:r,unsentEntries:s}=sm(this._heartbeatsCache.heartbeats),i=Ds(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return pt.warn(t),""}}}function tl(){return new Date().toISOString().substring(0,10)}function sm(n,e=tm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),nl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),nl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class im{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wf()?Hf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await em(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return el(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return el(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nl(n){return Ds(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function om(n){xn(new rn("platform-logger",e=>new vp(e),"PRIVATE")),xn(new rn("heartbeat",e=>new rm(e),"PRIVATE")),Nt(po,Xc,n),Nt(po,Xc,"esm2017"),Nt("fire-js","")}om("");var am="firebase",cm="10.14.1";/**
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
 */Nt(am,cm,"app");function $o(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Du(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lm=Du,Lu=new Lr("auth","Firebase",Du());/**
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
 */const Os=new Fo("@firebase/auth");function um(n,...e){Os.logLevel<=H.WARN&&Os.warn(`Auth (${Un}): ${n}`,...e)}function vs(n,...e){Os.logLevel<=H.ERROR&&Os.error(`Auth (${Un}): ${n}`,...e)}/**
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
 */function We(n,...e){throw jo(n,...e)}function ze(n,...e){return jo(n,...e)}function qo(n,e,t){const r=Object.assign(Object.assign({},lm()),{[e]:t});return new Lr("auth","Firebase",r).create(e,{appName:n.name})}function lt(n){return qo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&We(n,"argument-error"),qo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Lu.create(n,...e)}function B(n,e,...t){if(!n)throw jo(e,...t)}function it(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vs(e),new Error(e)}function mt(n,e){n||it(e)}/**
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
 */function yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hm(){return rl()==="http:"||rl()==="https:"}function rl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function dm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hm()||$f()||"connection"in navigator)?navigator.onLine:!0}function fm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Or{constructor(e,t){this.shortDelay=e,this.longDelay=t,mt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ff()||qf()}get(){return dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zo(n,e){mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ou{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mm=new Or(3e4,6e4);function Et(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function wt(n,e,t,r,s={}){return Nu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Vr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Uf()||(d.referrerPolicy="no-referrer"),Ou.fetch()(Mu(n,n.config.apiHost,t,c),d)})}async function Nu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pm),e);try{const s=new ym(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ps(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ps(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ps(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ps(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qo(n,p,d);We(n,p)}}catch(s){if(s instanceof vt)throw s;We(n,"network-request-failed",{message:String(s)})}}async function Nr(n,e,t,r,s={}){const i=await wt(n,e,t,r,s);return"mfaPendingCredential"in i&&We(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Mu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?zo(n.config,s):`${n.config.apiScheme}://${s}`}function gm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ym{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),mm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ps(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ze(n,e,r);return s.customData._tokenResponse=t,s}function sl(n){return n!==void 0&&n.enterprise!==void 0}class _m{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function vm(n,e){return wt(n,"GET","/v2/recaptchaConfig",Et(n,e))}/**
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
 */async function Em(n,e){return wt(n,"POST","/v1/accounts:delete",e)}async function Fu(n,e){return wt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wm(n,e=!1){const t=ce(n),r=await t.getIdToken(e),s=Wo(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gr(ro(s.auth_time)),issuedAtTime:gr(ro(s.iat)),expirationTime:gr(ro(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ro(n){return Number(n)*1e3}function Wo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Iu(t);return s?JSON.parse(s):(vs("Failed to decode base64 JWT payload"),null)}catch(s){return vs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function il(n){const e=Wo(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof vt&&Im(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Im({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Tm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _o{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ns(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Tr(n,Fu(t,{idToken:r}));B(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Bu(i.providerUserInfo):[],c=Am(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new _o(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function bm(n){const e=ce(n);await Ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Am(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bu(n){return n.map(e=>{var{providerId:t}=e,r=$o(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Sm(n,e){const t=await Nu(n,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Mu(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ou.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cm(n,e){return wt(n,"POST","/v2/accounts:revokeToken",Et(n,e))}/**
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
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):il(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=il(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Sm(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Sn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function Ct(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=$o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _o(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wm(this,e)}reload(){return bm(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ns(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await Tr(this,Em(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,x=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,F=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:L,emailVerified:X,isAnonymous:ue,providerData:ne,stsTokenManager:w}=t;B(L&&w,e,"internal-error");const m=Sn.fromJSON(this.name,w);B(typeof L=="string",e,"internal-error"),Ct(g,e.name),Ct(v,e.name),B(typeof X=="boolean",e,"internal-error"),B(typeof ue=="boolean",e,"internal-error"),Ct(S,e.name),Ct(x,e.name),Ct(V,e.name),Ct(P,e.name),Ct(F,e.name),Ct(z,e.name);const _=new ot({uid:L,auth:e,email:v,emailVerified:X,displayName:g,isAnonymous:ue,photoURL:x,phoneNumber:S,tenantId:V,stsTokenManager:m,createdAt:F,lastLoginAt:z});return ne&&Array.isArray(ne)&&(_.providerData=ne.map(E=>Object.assign({},E))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new Sn;s.updateFromServerResponse(t);const i=new ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ns(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Sn;c.updateFromIdToken(r);const u=new ot({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _o(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const ol=new Map;function at(n){mt(n instanceof Function,"Expected a class definition");let e=ol.get(n);return e?(mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ol.set(n,e),e)}/**
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
 */class Uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uu.type="NONE";const al=Uu;/**
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
 */function Es(n,e,t){return`firebase:${n}:${e}:${t}`}class Cn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Es(this.userKey,s.apiKey,i),this.fullPersistenceKey=Es("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Cn(at(al),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||at(al);const a=Es(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const g=ot._fromJSON(e,p);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Cn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Cn(i,e,r))}}/**
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
 */function cl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($u(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hu(e))return"Blackberry";if(Gu(e))return"Webos";if(qu(e))return"Safari";if((e.includes("chrome/")||ju(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $u(n=Pe()){return/firefox\//i.test(n)}function qu(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ju(n=Pe()){return/crios\//i.test(n)}function zu(n=Pe()){return/iemobile/i.test(n)}function Wu(n=Pe()){return/android/i.test(n)}function Hu(n=Pe()){return/blackberry/i.test(n)}function Gu(n=Pe()){return/webos/i.test(n)}function Ho(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function km(n=Pe()){var e;return Ho(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rm(){return jf()&&document.documentMode===10}function Ku(n=Pe()){return Ho(n)||Wu(n)||Gu(n)||Hu(n)||/windows phone/i.test(n)||zu(n)}/**
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
 */function Qu(n,e=[]){let t;switch(n){case"Browser":t=cl(Pe());break;case"Worker":t=`${cl(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${r}`}/**
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
 */class Pm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xm(n,e={}){return wt(n,"GET","/v2/passwordPolicy",Et(n,e))}/**
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
 */const Dm=6;class Lm{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Dm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Vm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ll(this),this.idTokenSubscription=new ll(this),this.beforeStateQueue=new Pm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fu(this,{idToken:e}),r=await ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ns(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(lt(this));const t=e?ce(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xm(this),t=new Lm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&um(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function It(n){return ce(n)}class ll{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jf(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Om(n){ei=n}function Yu(n){return ei.loadJS(n)}function Nm(){return ei.recaptchaEnterpriseScript}function Mm(){return ei.gapiScript}function Fm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Bm="recaptcha-enterprise",Um="NO_RECAPTCHA";class $m{constructor(e){this.type=Bm,this.auth=It(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{vm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new _m(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;sl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Um)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&sl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Nm();u.length!==0&&(u+=c),Yu(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function ul(n,e,t,r=!1){const s=new $m(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ms(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ul(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ul(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function qm(n,e){const t=Uo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ls(i,e??{}))return s;We(s,"already-initialized")}return t.initialize({options:e})}function jm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zm(n,e,t){const r=It(n);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ju(e),{host:a,port:c}=Wm(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Hm()}function Ju(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wm(n){const e=Ju(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:hl(a)}}}function hl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Hm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Go{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function Gm(n,e){return wt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Km(n,e){return Nr(n,"POST","/v1/accounts:signInWithPassword",Et(n,e))}async function Xu(n,e){return wt(n,"POST","/v1/accounts:sendOobCode",Et(n,e))}async function Qm(n,e){return Xu(n,e)}async function Ym(n,e){return Xu(n,e)}/**
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
 */async function Jm(n,e){return Nr(n,"POST","/v1/accounts:signInWithEmailLink",Et(n,e))}async function Xm(n,e){return Nr(n,"POST","/v1/accounts:signInWithEmailLink",Et(n,e))}/**
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
 */class br extends Go{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new br(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new br(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ms(e,t,"signInWithPassword",Km);case"emailLink":return Jm(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ms(e,r,"signUpPassword",Gm);case"emailLink":return Xm(e,{idToken:t,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function kn(n,e){return Nr(n,"POST","/v1/accounts:signInWithIdp",Et(n,e))}/**
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
 */const Zm="http://localhost";class sn extends Go{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=$o(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new sn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kn(e,t)}buildRequest(){const e={requestUri:Zm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vr(t)}return e}}/**
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
 */function eg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tg(n){const e=lr(ur(n)).link,t=e?lr(ur(e)).deep_link_id:null,r=lr(ur(n)).deep_link_id;return(r?lr(ur(r)).link:null)||r||t||e||n}class Ko{constructor(e){var t,r,s,i,a,c;const u=lr(ur(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=eg((s=u.mode)!==null&&s!==void 0?s:null);B(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=tg(e);try{return new Ko(t)}catch{return null}}}/**
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
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(e,t){return br._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ko.parseLink(t);return B(r,"argument-error"),br._fromEmailAndCode(e,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ti{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends ti{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends Mr{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class Qe extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qe.credential(t,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
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
 */class Pt extends Mr{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
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
 */class xt extends Mr{constructor(){super("twitter.com")}static credential(e,t){return sn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return xt.credential(t,r)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
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
 */async function ng(n,e){return Nr(n,"POST","/v1/accounts:signUp",Et(n,e))}/**
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
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ot._fromIdTokenResponse(e,r,s),a=dl(r);return new on({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=dl(r);return new on({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function dl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Fs extends vt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Fs(e,t,r,s)}}function Zu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(n,i,e,r):i})}async function rg(n,e,t=!1){const r=await Tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return on._forOperation(n,"link",r)}/**
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
 */async function sg(n,e,t=!1){const{auth:r}=n;if(je(r.app))return Promise.reject(lt(r));const s="reauthenticate";try{const i=await Tr(n,Zu(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=Wo(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),on._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&We(r,"user-mismatch"),i}}/**
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
 */async function eh(n,e,t=!1){if(je(n.app))return Promise.reject(lt(n));const r="signIn",s=await Zu(n,r,e),i=await on._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function ig(n,e){return eh(It(n),e)}/**
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
 */async function th(n){const e=It(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function og(n,e,t){const r=It(n);await Ms(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ym)}async function ag(n,e,t){if(je(n.app))return Promise.reject(lt(n));const r=It(n),a=await Ms(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ng).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&th(n),u}),c=await on._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function cg(n,e,t){return je(n.app)?Promise.reject(lt(n)):ig(ce(n),$n.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&th(n),r})}async function nh(n,e){const t=ce(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await Qm(t.auth,s);i!==n.email&&await n.reload()}function lg(n,e,t,r){return ce(n).onIdTokenChanged(e,t,r)}function ug(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function hg(n,e,t,r){return ce(n).onAuthStateChanged(e,t,r)}function rh(n){return ce(n).signOut()}async function fl(n){return ce(n).delete()}const Bs="__sak";/**
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
 */class sh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dg=1e3,fg=10;class ih extends sh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ku(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Rm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ih.type="LOCAL";const pg=ih;/**
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
 */class oh extends sh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oh.type="SESSION";const ah=oh;/**
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
 */function mg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ni(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await mg(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ni.receivers=[];/**
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
 */function Qo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class gg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Qo("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ye(){return window}function yg(n){Ye().location.href=n}/**
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
 */function ch(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function _g(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Eg(){return ch()?self:null}/**
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
 */const lh="firebaseLocalStorageDb",wg=1,Us="firebaseLocalStorage",uh="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ri(n,e){return n.transaction([Us],e?"readwrite":"readonly").objectStore(Us)}function Ig(){const n=indexedDB.deleteDatabase(lh);return new Fr(n).toPromise()}function vo(){const n=indexedDB.open(lh,wg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Us,{keyPath:uh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Us)?e(r):(r.close(),await Ig(),e(await vo()))})})}async function pl(n,e,t){const r=ri(n,!0).put({[uh]:e,value:t});return new Fr(r).toPromise()}async function Tg(n,e){const t=ri(n,!1).get(e),r=await new Fr(t).toPromise();return r===void 0?null:r.value}function ml(n,e){const t=ri(n,!0).delete(e);return new Fr(t).toPromise()}const bg=800,Ag=3;class hh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ag)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ch()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ni._getInstance(Eg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _g(),!this.activeServiceWorker)return;this.sender=new gg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vo();return await pl(e,Bs,"1"),await ml(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ml(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ri(s,!1).getAll();return new Fr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hh.type="LOCAL";const Sg=hh;new Or(3e4,6e4);/**
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
 */function Yo(n,e){return e?at(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jo extends Go{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cg(n){return eh(n.auth,new Jo(n),n.bypassAuthState)}function kg(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),sg(t,new Jo(n),n.bypassAuthState)}async function Rg(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),rg(t,new Jo(n),n.bypassAuthState)}/**
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
 */class dh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cg;case"linkViaPopup":case"linkViaRedirect":return Rg;case"reauthViaPopup":case"reauthViaRedirect":return kg;default:We(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Pg=new Or(2e3,1e4);async function xg(n,e,t){if(je(n.app))return Promise.reject(ze(n,"operation-not-supported-in-this-environment"));const r=It(n);Vu(n,e,ti);const s=Yo(r,t);return new Dt(r,"signInViaPopup",e,s).executeNotNull()}async function Dg(n,e,t){const r=ce(n);if(je(r.auth.app))return Promise.reject(ze(r.auth,"operation-not-supported-in-this-environment"));Vu(r.auth,e,ti);const s=Yo(r.auth,t);return new Dt(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}class Dt extends dh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Qo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pg.get())};e()}}Dt.currentPopupAction=null;/**
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
 */const Lg="pendingRedirect",ws=new Map;class Vg extends dh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ws.get(this.auth._key());if(!e){try{const r=await Og(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ws.set(this.auth._key(),e)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Og(n,e){const t=Fg(e),r=Mg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Ng(n,e){ws.set(n._key(),e)}function Mg(n){return at(n._redirectPersistence)}function Fg(n){return Es(Lg,n.config.apiKey,n.name)}async function Bg(n,e,t=!1){if(je(n.app))return Promise.reject(lt(n));const r=It(n),s=Yo(r,e),a=await new Vg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Ug=10*60*1e3;class $g{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ug&&this.cachedEventUids.clear(),this.cachedEventUids.has(gl(e))}saveEventToCache(e){this.cachedEventUids.add(gl(e)),this.lastProcessedEventTime=Date.now()}}function gl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fh(n);default:return!1}}/**
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
 */async function jg(n,e={}){return wt(n,"GET","/v1/projects",e)}/**
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
 */const zg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wg=/^https?/;async function Hg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jg(n);for(const t of e)try{if(Gg(t))return}catch{}We(n,"unauthorized-domain")}function Gg(n){const e=yo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Wg.test(t))return!1;if(zg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Kg=new Or(3e4,6e4);function yl(){const n=Ye().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Qg(n){return new Promise((e,t)=>{var r,s,i;function a(){yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yl(),t(ze(n,"network-request-failed"))},timeout:Kg.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)a();else{const c=Fm("iframefcb");return Ye()[c]=()=>{gapi.load?a():t(ze(n,"network-request-failed"))},Yu(`${Mm()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Is=null,e})}let Is=null;function Yg(n){return Is=Is||Qg(n),Is}/**
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
 */const Jg=new Or(5e3,15e3),Xg="__/auth/iframe",Zg="emulator/auth/iframe",ey={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ty=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ny(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zo(e,Zg):`https://${n.config.authDomain}/${Xg}`,r={apiKey:e.apiKey,appName:n.name,v:Un},s=ty.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Vr(r).slice(1)}`}async function ry(n){const e=await Yg(n),t=Ye().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:ny(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ey,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),c=Ye().setTimeout(()=>{i(a)},Jg.get());function u(){Ye().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iy=500,oy=600,ay="_blank",cy="http://localhost";class _l{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ly(n,e,t,r=iy,s=oy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},sy),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Pe().toLowerCase();t&&(c=ju(d)?ay:t),$u(d)&&(e=e||cy,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[S,x])=>`${v}${S}=${x},`,"");if(km(d)&&c!=="_self")return uy(e||"",c),new _l(null);const g=window.open(e||"",c,p);B(g,n,"popup-blocked");try{g.focus()}catch{}return new _l(g)}function uy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const hy="__/auth/handler",dy="emulator/auth/handler",fy=encodeURIComponent("fac");async function vl(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Un,eventId:s};if(e instanceof ti){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Mr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),d=u?`#${fy}=${encodeURIComponent(u)}`:"";return`${py(n)}?${Vr(c).slice(1)}${d}`}function py({config:n}){return n.emulator?zo(n,dy):`https://${n.authDomain}/${hy}`}/**
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
 */const so="webStorageSupport";class my{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ah,this._completeRedirectFn=Bg,this._overrideRedirectResult=Ng}async _openPopup(e,t,r,s){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await vl(e,t,r,yo(),s);return ly(e,a,Qo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await vl(e,t,r,yo(),s);return yg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ry(e),r=new $g(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(so,{type:so},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[so];a!==void 0&&t(!!a),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ku()||qu()||Ho()}}const gy=my;var El="@firebase/auth",wl="1.7.9";/**
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
 */class yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _y(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vy(n){xn(new rn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qu(n)},d=new Vm(r,s,i,u);return jm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xn(new rn("auth-internal",e=>{const t=It(e.getProvider("auth").getImmediate());return(r=>new yy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(El,wl,_y(n)),Nt(El,wl,"esm2017")}/**
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
 */const Ey=5*60,wy=Au("authIdTokenMaxAge")||Ey;let Il=null;const Iy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>wy)return;const s=t==null?void 0:t.token;Il!==s&&(Il=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ty(n=Ru()){const e=Uo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qm(n,{popupRedirectResolver:gy,persistence:[Sg,pg,ah]}),r=Au("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Iy(i.toString());ug(t,a,()=>a(t.currentUser)),lg(t,c=>a(c))}}const s=Tu("auth");return s&&zm(t,`http://${s}`),t}function by(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Om({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",by().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vy("Browser");var Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,ph;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,I,b){for(var y=Array(arguments.length-2),et=2;et<arguments.length;et++)y[et-2]=arguments[et];return m.prototype[I].apply(E,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],I=w.g[2];var b=w.g[3],y=m+(b^_&(I^b))+E[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+E[1]+3905402710&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+E[2]+606105819&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+E[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+E[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+E[5]+1200080426&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+E[6]+2821735955&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+E[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+E[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+E[9]+2336552879&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+E[10]+4294925233&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+E[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+E[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+E[13]+4254626195&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+E[14]+2792965006&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+E[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(I^b&(_^I))+E[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+E[6]+3225465664&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+E[11]+643717713&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+E[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+E[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+E[10]+38016083&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+E[15]+3634488961&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+E[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+E[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+E[14]+3275163606&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+E[3]+4107603335&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+E[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+E[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+E[2]+4243563512&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+E[7]+1735328473&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+E[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(_^I^b)+E[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+E[8]+2272392833&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+E[11]+1839030562&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+E[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+E[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+E[4]+1272893353&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+E[7]+4139469664&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+E[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+E[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+E[0]+3936430074&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+E[3]+3572445317&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+E[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+E[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+E[12]+3873151461&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+E[15]+530742520&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+E[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(I^(_|~b))+E[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+E[7]+1126891415&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+E[14]+2878612391&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+E[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+E[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+E[3]+2399980690&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+E[10]+4293915773&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+E[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+E[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+E[15]+4264355552&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+E[6]+2734768916&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+E[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+E[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+E[11]+3174756917&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+E[2]+718787259&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,E=this.B,I=this.h,b=0;b<m;){if(I==0)for(;b<=_;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(E[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,E),I=0;break}}else for(;b<m;)if(E[I++]=w[b++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)w[_++]=this.g[m]>>>E&255;return w};function i(w,m){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],E=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;E&&b==m||(_[I]=b,E=!1)}this.g=_}var c={};function u(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return P(d(-w));for(var m=[],_=1,E=0;w>=_;E++)m[E]=w/_|0,_*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return P(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=g,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),y=parseInt(w.substring(I,I+b),m);8>b?(b=d(Math.pow(m,b)),E=E.j(b).add(d(y))):(E=E.j(_),E=E.add(d(y)))}return E}var g=u(0),v=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-P(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(V(this))return"-"+P(this).toString(w);for(var m=d(Math.pow(w,6)),_=this,E="";;){var I=X(_,m).g;_=F(_,I.j(m));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=I,x(_))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=F(this,w),V(w)?-1:x(w)?0:1};function P(w){for(var m=w.g.length,_=[],E=0;E<m;E++)_[E]=~w.g[E];return new a(_,~w.h).add(v)}n.abs=function(){return V(this)?P(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0,I=0;I<=m;I++){var b=E+(this.i(I)&65535)+(w.i(I)&65535),y=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);E=y>>>16,b&=65535,y&=65535,_[I]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function F(w,m){return w.add(P(m))}n.j=function(w){if(x(this)||x(w))return g;if(V(this))return V(w)?P(this).j(P(w)):P(P(this).j(w));if(V(w))return P(this.j(P(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<w.g.length;I++){var b=this.i(E)>>>16,y=this.i(E)&65535,et=w.i(I)>>>16,Wn=w.i(I)&65535;_[2*E+2*I]+=y*Wn,z(_,2*E+2*I),_[2*E+2*I+1]+=b*Wn,z(_,2*E+2*I+1),_[2*E+2*I+1]+=y*et,z(_,2*E+2*I+1),_[2*E+2*I+2]+=b*et,z(_,2*E+2*I+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function z(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function L(w,m){this.g=w,this.h=m}function X(w,m){if(x(m))throw Error("division by zero");if(x(w))return new L(g,g);if(V(w))return m=X(P(w),m),new L(P(m.g),P(m.h));if(V(m))return m=X(w,P(m)),new L(P(m.g),m.h);if(30<w.g.length){if(V(w)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,E=m;0>=E.l(w);)_=ue(_),E=ue(E);var I=ne(_,1),b=ne(E,1);for(E=ne(E,2),_=ne(_,2);!x(E);){var y=b.add(E);0>=y.l(w)&&(I=I.add(_),b=y),E=ne(E,1),_=ne(_,1)}return m=F(w,I.j(m)),new L(I,m)}for(I=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(_),y=b.j(m);V(y)||0<y.l(w);)_-=E,b=d(_),y=b.j(m);x(b)&&(b=v),I=I.add(b),w=F(w,y)}return new L(I,w)}n.A=function(w){return X(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&w.i(E);return new a(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|w.i(E);return new a(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^w.i(E);return new a(_,this.h^w.h)};function ue(w){for(var m=w.g.length+1,_=[],E=0;E<m;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(_,w.h)}function ne(w,m){var _=m>>5;m%=32;for(var E=w.g.length-_,I=[],b=0;b<E;b++)I[b]=0<m?w.i(b+_)>>>m|w.i(b+_+1)<<32-m:w.i(b+_);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ph=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,nn=a}).apply(typeof Tl<"u"?Tl:typeof self<"u"?self:typeof window<"u"?window:{});var ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mh,hr,gh,Ts,Eo,yh,_h,vh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ms=="object"&&ms];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var T=o[f];if(!(T in h))break e;h=h[T]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,f=!1,T={next:function(){if(!f&&h<o.length){var A=h++;return{value:l(A,o[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),o.apply(l,T)}}return function(){return o.apply(l,arguments)}}function v(o,l,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function S(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function x(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,T,A){for(var D=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)D[ee-2]=arguments[ee];return l.prototype[T].apply(f,D)}}function V(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function P(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const T=o.length||0,A=f.length||0;o.length=T+A;for(let D=0;D<A;D++)o[T+D]=f[D]}else o.push(f)}}class F{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function z(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function X(o){return X[" "](o),o}X[" "]=function(){};var ue=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function ne(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function w(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)o[h]=f[h];for(let A=0;A<_.length;A++)h=_[A],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function y(){var o=ki;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class et{constructor(){this.h=this.g=null}add(l,h){const f=Wn.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Wn=new F(()=>new Hd,o=>o.reset());class Hd{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Hn,Gn=!1,ki=new et,Ga=()=>{const o=c.Promise.resolve(void 0);Hn=()=>{o.then(Gd)}};var Gd=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var l=Wn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Gn=!1};function Tt(){this.s=this.s,this.C=this.C}Tt.prototype.s=!1,Tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Kd=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Kn(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ue){e:{try{X(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kn.aa.h.call(this)}}x(Kn,Ie);var Qd={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Qr="closure_listenable_"+(1e6*Math.random()|0),Yd=0;function Jd(o,l,h,f,T){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=T,this.key=++Yd,this.da=this.fa=!1}function Yr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Jr(o){this.src=o,this.g={},this.h=0}Jr.prototype.add=function(o,l,h,f,T){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var D=Pi(o,l,f,T);return-1<D?(l=o[D],h||(l.fa=!1)):(l=new Jd(l,this.src,A,!!f,T),l.fa=h,o.push(l)),l};function Ri(o,l){var h=l.type;if(h in o.g){var f=o.g[h],T=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=T)&&Array.prototype.splice.call(f,T,1),A&&(Yr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Pi(o,l,h,f){for(var T=0;T<o.length;++T){var A=o[T];if(!A.da&&A.listener==l&&A.capture==!!h&&A.ha==f)return T}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),Di={};function Ka(o,l,h,f,T){if(Array.isArray(l)){for(var A=0;A<l.length;A++)Ka(o,l[A],h,f,T);return null}return h=Ja(h),o&&o[Qr]?o.K(l,h,d(f)?!!f.capture:!1,T):Xd(o,l,h,!1,f,T)}function Xd(o,l,h,f,T,A){if(!l)throw Error("Invalid event type");var D=d(T)?!!T.capture:!!T,ee=Vi(o);if(ee||(o[xi]=ee=new Jr(o)),h=ee.add(l,h,f,D,A),h.proxy)return h;if(f=Zd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Kd||(T=D),T===void 0&&(T=!1),o.addEventListener(l.toString(),f,T);else if(o.attachEvent)o.attachEvent(Ya(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Zd(){function o(h){return l.call(o.src,o.listener,h)}const l=ef;return o}function Qa(o,l,h,f,T){if(Array.isArray(l))for(var A=0;A<l.length;A++)Qa(o,l[A],h,f,T);else f=d(f)?!!f.capture:!!f,h=Ja(h),o&&o[Qr]?(o=o.i,l=String(l).toString(),l in o.g&&(A=o.g[l],h=Pi(A,h,f,T),-1<h&&(Yr(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete o.g[l],o.h--)))):o&&(o=Vi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Pi(l,h,f,T)),(h=-1<o?l[o]:null)&&Li(h))}function Li(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Qr])Ri(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(Ya(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=Vi(l))?(Ri(h,o),h.h==0&&(h.src=null,l[xi]=null)):Yr(o)}}}function Ya(o){return o in Di?Di[o]:Di[o]="on"+o}function ef(o,l){if(o.da)o=!0;else{l=new Kn(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&Li(o),o=h.call(f,l)}return o}function Vi(o){return o=o[xi],o instanceof Jr?o:null}var Oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ja(o){return typeof o=="function"?o:(o[Oi]||(o[Oi]=function(l){return o.handleEvent(l)}),o[Oi])}function Te(){Tt.call(this),this.i=new Jr(this),this.M=this,this.F=null}x(Te,Tt),Te.prototype[Qr]=!0,Te.prototype.removeEventListener=function(o,l,h,f){Qa(this,o,l,h,f)};function Le(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var T=l;l=new Ie(f,o),E(l,T)}if(T=!0,h)for(var A=h.length-1;0<=A;A--){var D=l.g=h[A];T=Xr(D,f,!0,l)&&T}if(D=l.g=o,T=Xr(D,f,!0,l)&&T,T=Xr(D,f,!1,l)&&T,h)for(A=0;A<h.length;A++)D=l.g=h[A],T=Xr(D,f,!1,l)&&T}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Yr(h[f]);delete o.g[l],o.h--}}this.F=null},Te.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},Te.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Xr(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,A=0;A<l.length;++A){var D=l[A];if(D&&!D.da&&D.capture==h){var ee=D.listener,ge=D.ha||D.src;D.fa&&Ri(o.i,D),T=ee.call(ge,f)!==!1&&T}}return T&&!f.defaultPrevented}function Xa(o,l,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Za(o){o.g=Xa(()=>{o.g=null,o.i&&(o.i=!1,Za(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class tf extends Tt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Za(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qn(o){Tt.call(this),this.h=o,this.g={}}x(Qn,Tt);var ec=[];function tc(o){ne(o.g,function(l,h){this.g.hasOwnProperty(h)&&Li(l)},o),o.g={}}Qn.prototype.N=function(){Qn.aa.N.call(this),tc(this)},Qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ni=c.JSON.stringify,nf=c.JSON.parse,rf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Mi(){}Mi.prototype.h=null;function nc(o){return o.h||(o.h=o.i())}function rc(){}var Yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fi(){Ie.call(this,"d")}x(Fi,Ie);function Bi(){Ie.call(this,"c")}x(Bi,Ie);var Gt={},sc=null;function Zr(){return sc=sc||new Te}Gt.La="serverreachability";function ic(o){Ie.call(this,Gt.La,o)}x(ic,Ie);function Jn(o){const l=Zr();Le(l,new ic(l))}Gt.STAT_EVENT="statevent";function oc(o,l){Ie.call(this,Gt.STAT_EVENT,o),this.stat=l}x(oc,Ie);function Ve(o){const l=Zr();Le(l,new oc(l,o))}Gt.Ma="timingevent";function ac(o,l){Ie.call(this,Gt.Ma,o),this.size=l}x(ac,Ie);function Xn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Zn(){this.g=!0}Zn.prototype.xa=function(){this.g=!1};function sf(o,l,h,f,T,A){o.info(function(){if(o.g)if(A)for(var D="",ee=A.split("&"),ge=0;ge<ee.length;ge++){var Q=ee[ge].split("=");if(1<Q.length){var be=Q[0];Q=Q[1];var Ae=be.split("_");D=2<=Ae.length&&Ae[1]=="type"?D+(be+"="+Q+"&"):D+(be+"=redacted&")}}else D=null;else D=A;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+l+`
`+h+`
`+D})}function of(o,l,h,f,T,A,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+l+`
`+h+`
`+A+" "+D})}function gn(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+cf(o,h)+(f?" "+f:"")})}function af(o,l){o.info(function(){return"TIMEOUT: "+l})}Zn.prototype.info=function(){};function cf(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var D=1;D<T.length;D++)T[D]=""}}}}return Ni(h)}catch{return l}}var es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ui;function ts(){}x(ts,Mi),ts.prototype.g=function(){return new XMLHttpRequest},ts.prototype.i=function(){return{}},Ui=new ts;function bt(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new Qn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lc}function lc(){this.i=null,this.g="",this.h=!1}var uc={},$i={};function qi(o,l,h){o.L=1,o.v=is(tt(l)),o.m=h,o.P=!0,hc(o,null)}function hc(o,l){o.F=Date.now(),ns(o),o.A=tt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ac(h.i,"t",f),o.C=0,h=o.j.J,o.h=new lc,o.g=jc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new tf(v(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(ec[0]=T.toString()),T=ec);for(var A=0;A<T.length;A++){var D=Ka(h,T[A],f||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Jn(),sf(o.i,o.u,o.A,o.l,o.R,o.m)}bt.prototype.ca=function(o){o=o.target;const l=this.M;l&&nt(o)==3?l.j():this.Y(o)},bt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=nt(this.g);var l=this.g.Ba();const vn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Dc(this.g)))){this.J||Ae!=4||l==7||(l==8||0>=vn?Jn(3):Jn(2)),ji(this);var h=this.g.Z();this.X=h;t:if(dc(this)){var f=Dc(this.g);o="";var T=f.length,A=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),er(this);var D="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(A&&l==T-1)});f.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,of(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,ge=this.g;if((ee=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(ee)){var Q=ee;break t}}Q=null}if(h=Q)gn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zi(this,h);else{this.o=!1,this.s=3,Ve(12),Kt(this),er(this);break e}}if(this.P){h=!0;let He;for(;!this.J&&this.C<D.length;)if(He=lf(this,D),He==$i){Ae==4&&(this.s=4,Ve(14),h=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==uc){this.s=4,Ve(15),gn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else gn(this.i,this.l,He,null),zi(this,He);if(dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||D.length!=0||this.h.h||(this.s=1,Ve(16),h=!1),this.o=this.o&&h,!h)gn(this.i,this.l,D,"[Invalid Chunked Response]"),Kt(this),er(this);else if(0<D.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Yi(be),be.M=!0,Ve(11))}}else gn(this.i,this.l,D,null),zi(this,D);Ae==4&&Kt(this),this.o&&!this.J&&(Ae==4?Bc(this.j,this):(this.o=!1,ns(this)))}else Sf(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Kt(this),er(this)}}}catch{}finally{}};function dc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function lf(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?$i:(h=Number(l.substring(h,f)),isNaN(h)?uc:(f+=1,f+h>l.length?$i:(l=l.slice(f,f+h),o.C=f+h,l)))}bt.prototype.cancel=function(){this.J=!0,Kt(this)};function ns(o){o.S=Date.now()+o.I,fc(o,o.I)}function fc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Xn(v(o.ba,o),l)}function ji(o){o.B&&(c.clearTimeout(o.B),o.B=null)}bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(af(this.i,this.A),this.L!=2&&(Jn(),Ve(17)),Kt(this),this.s=2,er(this)):fc(this,this.S-o)};function er(o){o.j.G==0||o.J||Bc(o.j,o)}function Kt(o){ji(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,tc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function zi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Wi(h.h,o))){if(!o.K&&Wi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)hs(h),ls(h);else break e;Qi(h),Ve(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Xn(v(h.Za,h),6e3));if(1>=gc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Yt(h,11)}else if((o.K||h.g==o)&&hs(h),!z(l))for(T=h.Da.g.parse(l),l=0;l<T.length;l++){let Q=T[l];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const be=Q[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Ae=Q[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const vn=Q[5];vn!=null&&typeof vn=="number"&&0<vn&&(f=1.5*vn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const He=o.g;if(He){const fs=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fs){var A=f.h;A.g||fs.indexOf("spdy")==-1&&fs.indexOf("quic")==-1&&fs.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Hi(A,A.h),A.h=null))}if(f.D){const Ji=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Ji&&(f.ya=Ji,re(f.I,f.D,Ji))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=o;if(f.qa=qc(f,f.J?f.ia:null,f.W),D.K){yc(f.h,D);var ee=D,ge=f.L;ge&&(ee.I=ge),ee.B&&(ji(ee),ns(ee)),f.g=D}else Mc(f);0<h.i.length&&us(h)}else Q[0]!="stop"&&Q[0]!="close"||Yt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Yt(h,7):Ki(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Jn(4)}catch{}}var uf=class{constructor(o,l){this.g=o,this.map=l}};function pc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function gc(o){return o.h?1:o.g?o.g.size:0}function Wi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Hi(o,l){o.g?o.g.add(l):o.h=l}function yc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}pc.prototype.cancel=function(){if(this.i=_c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function _c(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return V(o.i)}function hf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function df(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function vc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=df(o),f=hf(o),T=f.length,A=0;A<T;A++)l.call(void 0,f[A],h&&h[A],o)}var Ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),T=null;if(0<=f){var A=o[h].substring(0,f);T=o[h].substring(f+1)}else A=o[h];l(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qt){this.h=o.h,rs(this,o.j),this.o=o.o,this.g=o.g,ss(this,o.s),this.l=o.l;var l=o.i,h=new rr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),wc(this,h),this.m=o.m}else o&&(l=String(o).match(Ec))?(this.h=!1,rs(this,l[1]||"",!0),this.o=tr(l[2]||""),this.g=tr(l[3]||"",!0),ss(this,l[4]),this.l=tr(l[5]||"",!0),wc(this,l[6]||"",!0),this.m=tr(l[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}Qt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(nr(l,Ic,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(nr(l,Ic,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(nr(h,h.charAt(0)=="/"?gf:mf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",nr(h,_f)),o.join("")};function tt(o){return new Qt(o)}function rs(o,l,h){o.j=h?tr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ss(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function wc(o,l,h){l instanceof rr?(o.i=l,vf(o.i,o.h)):(h||(l=nr(l,yf)),o.i=new rr(l,o.h))}function re(o,l,h){o.i.set(l,h)}function is(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function tr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function nr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,pf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function pf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ic=/[#\/\?@]/g,mf=/[#\?:]/g,gf=/[#\?]/g,yf=/[#\?@]/g,_f=/#/g;function rr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function At(o){o.g||(o.g=new Map,o.h=0,o.i&&ff(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=rr.prototype,n.add=function(o,l){At(this),this.i=null,o=yn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Tc(o,l){At(o),l=yn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function bc(o,l){return At(o),l=yn(o,l),o.g.has(l)}n.forEach=function(o,l){At(this),this.g.forEach(function(h,f){h.forEach(function(T){o.call(l,T,f,this)},this)},this)},n.na=function(){At(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const T=o[f];for(let A=0;A<T.length;A++)h.push(l[f])}return h},n.V=function(o){At(this);let l=[];if(typeof o=="string")bc(this,o)&&(l=l.concat(this.g.get(yn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return At(this),this.i=null,o=yn(this,o),bc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Ac(o,l,h){Tc(o,l),0<h.length&&(o.i=null,o.g.set(yn(o,l),V(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const A=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var T=A;D[f]!==""&&(T+="="+encodeURIComponent(String(D[f]))),o.push(T)}}return this.i=o.join("&")};function yn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function vf(o,l){l&&!o.j&&(At(o),o.i=null,o.g.forEach(function(h,f){var T=f.toLowerCase();f!=T&&(Tc(this,f),Ac(this,T,h))},o)),o.j=l}function Ef(o,l){const h=new Zn;if(c.Image){const f=new Image;f.onload=S(St,h,"TestLoadImage: loaded",!0,l,f),f.onerror=S(St,h,"TestLoadImage: error",!1,l,f),f.onabort=S(St,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(St,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function wf(o,l){const h=new Zn,f=new AbortController,T=setTimeout(()=>{f.abort(),St(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(T),A.ok?St(h,"TestPingServer: ok",!0,l):St(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),St(h,"TestPingServer: error",!1,l)})}function St(o,l,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function If(){this.g=new rf}function Tf(o,l,h){const f=h||"";try{vc(o,function(T,A){let D=T;d(T)&&(D=Ni(T)),l.push(f+A+"="+encodeURIComponent(D))})}catch(T){throw l.push(f+"type="+encodeURIComponent("_badmap")),T}}function os(o){this.l=o.Ub||null,this.j=o.eb||!1}x(os,Mi),os.prototype.g=function(){return new as(this.l,this.j)},os.prototype.i=function(o){return function(){return o}}({});function as(o,l){Te.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(as,Te),n=as.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,ir(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ir(this)),this.g&&(this.readyState=3,ir(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?sr(this):ir(this),this.readyState==3&&Sc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,sr(this))},n.Qa=function(o){this.g&&(this.response=o,sr(this))},n.ga=function(){this.g&&sr(this)};function sr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ir(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function ir(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Cc(o){let l="";return ne(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function Gi(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Cc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):re(o,l,h))}function ae(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ae,Te);var bf=/^https?$/i,Af=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ui.g(),this.v=this.o?nc(this.o):nc(Ui),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){kc(this,A);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())h.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Af,l,void 0))||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,D]of h)this.g.setRequestHeader(A,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xc(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){kc(this,A)}};function kc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Rc(o),cs(o)}function Rc(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pc(this):this.bb())},n.bb=function(){Pc(this)};function Pc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nt(o)!=4||o.Z()!=2)){if(o.u&&nt(o)==4)Xa(o.Ea,0,o);else if(Le(o,"readystatechange"),nt(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=D===0){var T=String(o.D).match(Ec)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!bf.test(T?T.toLowerCase():"")}h=f}if(h)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var A=2<nt(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",Rc(o)}}finally{cs(o)}}}}function cs(o,l){if(o.g){xc(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Le(o,"ready");try{h.onreadystatechange=f}catch{}}}function xc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),nf(l)}};function Dc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sf(o){const l={};o=(o.g&&2<=nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(z(o[f]))continue;var h=I(o[f]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=l[T]||[];l[T]=A,A.push(h)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Lc(o){this.Aa=0,this.i=[],this.j=new Zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=or("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=or("baseRetryDelayMs",5e3,o),this.cb=or("retryDelaySeedMs",1e4,o),this.Wa=or("forwardChannelMaxRetries",2,o),this.wa=or("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new pc(o&&o.concurrentRequestLimit),this.Da=new If,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Lc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){Ve(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=qc(this,null,this.W),us(this)};function Ki(o){if(Vc(o),o.G==3){var l=o.U++,h=tt(o.I);if(re(h,"SID",o.K),re(h,"RID",l),re(h,"TYPE","terminate"),ar(o,h),l=new bt(o,o.j,l),l.L=2,l.v=is(tt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=jc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ns(l)}$c(o)}function ls(o){o.g&&(Yi(o),o.g.cancel(),o.g=null)}function Vc(o){ls(o),o.u&&(c.clearTimeout(o.u),o.u=null),hs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function us(o){if(!mc(o.h)&&!o.s){o.s=!0;var l=o.Ga;Hn||Ga(),Gn||(Hn(),Gn=!0),ki.add(l,o),o.B=0}}function Cf(o,l){return gc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Xn(v(o.Ga,o,l),Uc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new bt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=m(A),E(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Nc(this,T,l),h=tt(this.I),re(h,"RID",o),re(h,"CVER",22),this.D&&re(h,"X-HTTP-Session-Id",this.D),ar(this,h),A&&(this.O?l="headers="+encodeURIComponent(String(Cc(A)))+"&"+l:this.m&&Gi(h,this.m,A)),Hi(this.h,T),this.Ua&&re(h,"TYPE","init"),this.P?(re(h,"$req",l),re(h,"SID","null"),T.T=!0,qi(T,h,null)):qi(T,h,l),this.G=2}}else this.G==3&&(o?Oc(this,o):this.i.length==0||mc(this.h)||Oc(this))};function Oc(o,l){var h;l?h=l.l:h=o.U++;const f=tt(o.I);re(f,"SID",o.K),re(f,"RID",h),re(f,"AID",o.T),ar(o,f),o.m&&o.o&&Gi(f,o.m,o.o),h=new bt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Nc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Hi(o.h,h),qi(h,f,l)}function ar(o,l){o.H&&ne(o.H,function(h,f){re(l,f,h)}),o.l&&vc({},function(h,f){re(l,f,h)})}function Nc(o,l,h){h=Math.min(o.i.length,h);var f=o.l?v(o.l.Na,o.l,o):null;e:{var T=o.i;let A=-1;for(;;){const D=["count="+h];A==-1?0<h?(A=T[0].g,D.push("ofs="+A)):A=0:D.push("ofs="+A);let ee=!0;for(let ge=0;ge<h;ge++){let Q=T[ge].g;const be=T[ge].map;if(Q-=A,0>Q)A=Math.max(0,T[ge].g-100),ee=!1;else try{Tf(be,D,"req"+Q+"_")}catch{f&&f(be)}}if(ee){f=D.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function Mc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Hn||Ga(),Gn||(Hn(),Gn=!0),ki.add(l,o),o.v=0}}function Qi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Xn(v(o.Fa,o),Uc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Xn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),ls(this),Fc(this))};function Yi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Fc(o){o.g=new bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=tt(o.qa);re(l,"RID","rpc"),re(l,"SID",o.K),re(l,"AID",o.T),re(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(l,"TO",o.ja),re(l,"TYPE","xmlhttp"),ar(o,l),o.m&&o.o&&Gi(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=is(tt(l)),h.m=null,h.P=!0,hc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ls(this),Qi(this),Ve(19))};function hs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Bc(o,l){var h=null;if(o.g==l){hs(o),Yi(o),o.g=null;var f=2}else if(Wi(o.h,l))h=l.D,yc(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var T=o.B;f=Zr(),Le(f,new ac(f,h)),us(o)}else Mc(o);else if(T=l.s,T==3||T==0&&0<l.X||!(f==1&&Cf(o,l)||f==2&&Qi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),T){case 1:Yt(o,5);break;case 4:Yt(o,10);break;case 3:Yt(o,6);break;default:Yt(o,2)}}}function Uc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Yt(o,l){if(o.j.info("Error code "+l),l==2){var h=v(o.fb,o),f=o.Xa;const T=!f;f=new Qt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||rs(f,"https"),is(f),T?Ef(f.toString(),h):wf(f.toString(),h)}else Ve(2);o.G=0,o.l&&o.l.sa(l),$c(o),Vc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function $c(o){if(o.G=0,o.ka=[],o.l){const l=_c(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function qc(o,l,h){var f=h instanceof Qt?tt(h):new Qt(h);if(f.g!="")l&&(f.g=l+"."+f.g),ss(f,f.s);else{var T=c.location;f=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var A=new Qt(null);f&&rs(A,f),l&&(A.g=l),T&&ss(A,T),h&&(A.l=h),f=A}return h=o.D,l=o.ya,h&&l&&re(f,h,l),re(f,"VER",o.la),ar(o,f),f}function jc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ae(new os({eb:h})):new ae(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zc(){}n=zc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ds(){}ds.prototype.g=function(o,l){return new Ne(o,l)};function Ne(o,l){Te.call(this),this.g=new Lc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!z(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!z(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new _n(this)}x(Ne,Te),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Ki(this.g)},Ne.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ni(o),o=h);l.i.push(new uf(l.Ya++,o)),l.G==3&&us(l)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Ki(this.g),delete this.g,Ne.aa.N.call(this)};function Wc(o){Fi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}x(Wc,Fi);function Hc(){Bi.call(this),this.status=1}x(Hc,Bi);function _n(o){this.g=o}x(_n,zc),_n.prototype.ua=function(){Le(this.g,"a")},_n.prototype.ta=function(o){Le(this.g,new Wc(o))},_n.prototype.sa=function(o){Le(this.g,new Hc)},_n.prototype.ra=function(){Le(this.g,"b")},ds.prototype.createWebChannel=ds.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,vh=function(){return new ds},_h=function(){return Zr()},yh=Gt,Eo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},es.NO_ERROR=0,es.TIMEOUT=8,es.HTTP_ERROR=6,Ts=es,cc.COMPLETE="complete",gh=cc,rc.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",Te.prototype.listen=Te.prototype.K,hr=rc,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,mh=ae}).apply(typeof ms<"u"?ms:typeof self<"u"?self:typeof window<"u"?window:{});const bl="@firebase/firestore";/**
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
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
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
 */let qn="10.14.0";/**
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
 */const an=new Fo("@firebase/firestore");function cr(){return an.logLevel}function N(n,...e){if(an.logLevel<=H.DEBUG){const t=e.map(Xo);an.debug(`Firestore (${qn}): ${n}`,...t)}}function gt(n,...e){if(an.logLevel<=H.ERROR){const t=e.map(Xo);an.error(`Firestore (${qn}): ${n}`,...t)}}function Dn(n,...e){if(an.logLevel<=H.WARN){const t=e.map(Xo);an.warn(`Firestore (${qn}): ${n}`,...t)}}function Xo(n){if(typeof n=="string")return n;try{/**
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
 */function U(n="Unexpected state"){const e=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+n;throw gt(e),new Error(e)}function Z(n,e){n||U()}function q(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Eh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ay{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class Sy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Cy{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ut,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ut)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new Eh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new Ce(e)}}class ky{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ry{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ky(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Py{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Z(this.o===void 0);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new Py(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class wh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Dy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Ln(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new fe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new fe(0,0))}static max(){return new $(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ar{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends Ar{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const Ly=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Ar{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return Ly.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(se.fromString(e))}static fromName(e){return new M(se.fromString(e).popFirst(5))}static empty(){return new M(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new se(e.slice()))}}function Vy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new Bt(s,M.empty(),e)}function Oy(n){return new Bt(n.readTime,n.key,-1)}class Bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bt($.min(),M.empty(),-1)}static max(){return new Bt($.max(),M.empty(),-1)}}function Ny(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const My="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Br(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==My)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function By(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ur(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zo.oe=-1;function si(n){return n==null}function $s(n){return n===0&&1/n==-1/0}function Uy(n){return typeof n=="number"&&Number.isInteger(n)&&!$s(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Al(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ih(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gs(this.root,e,this.comparator,!1)}getReverseIterator(){return new gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gs(this.root,e,this.comparator,!0)}}class gs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sl(this.data.getIterator())}getIteratorFrom(e){return new Sl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ve(this.comparator);return t.data=e,t}}class Sl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Be{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Be([])}unionWith(e){let t=new ve(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Th extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Th("Invalid base64 string: "+i):i}}(e);return new we(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const $y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(Z(!!n),typeof n=="string"){let e=0;const t=$y.exec(n);if(Z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function cn(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
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
 */function ea(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ta(n){const e=n.mapValue.fields.__previous_value__;return ea(e)?ta(e):e}function Sr(n){const e=Ut(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class qy{constructor(e,t,r,s,i,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class Cr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ys={mapValue:{}};function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ea(n)?4:zy(n)?9007199254740991:jy(n)?10:11:U()}function Ze(n,e){if(n===e)return!0;const t=ln(n);if(t!==ln(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Sr(n).isEqual(Sr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ut(s.timestampValue),c=Ut(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return cn(s.bytesValue).isEqual(cn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=le(s.doubleValue),c=le(i.doubleValue);return a===c?$s(a)===$s(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Ln(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Al(a)!==Al(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Ze(a[u],c[u])))return!1;return!0}(n,e);default:return U()}}function kr(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function Vn(n,e){if(n===e)return 0;const t=ln(n),r=ln(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=le(i.integerValue||i.doubleValue),u=le(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Cl(n.timestampValue,e.timestampValue);case 4:return Cl(Sr(n),Sr(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,a){const c=cn(i),u=cn(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=Y(c[d],u[d]);if(p!==0)return p}return Y(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Y(le(i.latitude),le(a.latitude));return c!==0?c:Y(le(i.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,d,p;const g=i.fields||{},v=a.fields||{},S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,x=(u=v.value)===null||u===void 0?void 0:u.arrayValue,V=Y(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=x==null?void 0:x.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:kl(S,x)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ys.mapValue&&a===ys.mapValue)return 0;if(i===ys.mapValue)return 1;if(a===ys.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const v=Y(u[g],p[g]);if(v!==0)return v;const S=Vn(c[u[g]],d[p[g]]);if(S!==0)return S}return Y(u.length,p.length)}(n.mapValue,e.mapValue);default:throw U()}}function Cl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Ut(n),r=Ut(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function kl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Vn(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function On(n){return wo(n)}function wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ut(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return cn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=wo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wo(t.fields[a])}`;return s+"}"}(n.mapValue):U()}function Rl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Io(n){return!!n&&"integerValue"in n}function na(n){return!!n&&"arrayValue"in n}function Pl(n){return!!n&&"nullValue"in n}function xl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bs(n){return!!n&&"mapValue"in n}function jy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function yr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return hn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=yr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yr(t)}setAll(e){let t=_e.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=yr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];bs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){hn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Oe(yr(this.value))}}function bh(n){const e=[];return hn(n.fields,(t,r)=>{const s=new _e([t]);if(bs(r)){const i=bh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Be(e)}/**
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
 */class ke{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ke(e,0,$.min(),$.min(),$.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,s){return new ke(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new ke(e,2,t,$.min(),$.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,$.min(),$.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qs{constructor(e,t){this.position=e,this.inclusive=t}}function Dl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Vn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ll(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class js{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ah{}class de extends Ah{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Gy(e,t,r):t==="array-contains"?new Yy(e,r):t==="in"?new Jy(e,r):t==="not-in"?new Xy(e,r):t==="array-contains-any"?new Zy(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ky(e,r):new Qy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Vn(t,this.value)):t!==null&&ln(this.value)===ln(t)&&this.matchesComparison(Vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends Ah{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ke(e,t)}matches(e){return Sh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sh(n){return n.op==="and"}function Ch(n){return Hy(n)&&Sh(n)}function Hy(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function To(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+On(n.value);if(Ch(n))return n.filters.map(e=>To(e)).join(",");{const e=n.filters.map(t=>To(t)).join(",");return`${n.op}(${e})`}}function kh(n,e){return n instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&Ze(r.value,s.value)}(n,e):n instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&kh(a,s.filters[c]),!0):!1}(n,e):void U()}function Rh(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${On(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(Rh).join(" ,")+"}"}(n):"Filter"}class Gy extends de{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ky extends de{constructor(e,t){super(e,"in",t),this.keys=Ph("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qy extends de{constructor(e,t){super(e,"not-in",t),this.keys=Ph("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ph(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Yy extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return na(t)&&kr(t.arrayValue,this.value)}}class Jy extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&kr(this.value.arrayValue,t)}}class Xy extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!kr(this.value.arrayValue,t)}}class Zy extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!na(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>kr(this.value.arrayValue,r))}}/**
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
 */class e_{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Vl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new e_(n,e,t,r,s,i,a)}function ra(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>To(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),si(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>On(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>On(r)).join(",")),e.ue=t}return e.ue}function sa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Wy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ll(n.startAt,e.startAt)&&Ll(n.endAt,e.endAt)}function bo(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $r{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function t_(n,e,t,r,s,i,a,c){return new $r(n,e,t,r,s,i,a,c)}function ii(n){return new $r(n)}function Ol(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xh(n){return n.collectionGroup!==null}function _r(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ve(_e.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new js(i,r))}),t.has(_e.keyField().canonicalString())||e.ce.push(new js(_e.keyField(),r))}return e.ce}function Je(n){const e=q(n);return e.le||(e.le=n_(e,_r(n))),e.le}function n_(n,e){if(n.limitType==="F")return Vl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new js(s.field,i)});const t=n.endAt?new qs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qs(n.startAt.position,n.startAt.inclusive):null;return Vl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ao(n,e){const t=n.filters.concat([e]);return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function So(n,e,t){return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oi(n,e){return sa(Je(n),Je(e))&&n.limitType===e.limitType}function Dh(n){return`${ra(Je(n))}|lt:${n.limitType}`}function En(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Rh(s)).join(", ")}]`),si(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>On(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>On(s)).join(",")),`Target(${r})`}(Je(n))}; limitType=${n.limitType})`}function ai(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of _r(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=Dl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,_r(r),s)||r.endAt&&!function(a,c,u){const d=Dl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,_r(r),s))}(n,e)}function r_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lh(n){return(e,t)=>{let r=!1;for(const s of _r(n)){const i=s_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function s_(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Vn(u,d):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ih(this.inner)}size(){return this.innerSize}}/**
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
 */const i_=new oe(M.comparator);function yt(){return i_}const Vh=new oe(M.comparator);function dr(...n){let e=Vh;for(const t of n)e=e.insert(t.key,t);return e}function Oh(n){let e=Vh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Zt(){return vr()}function Nh(){return vr()}function vr(){return new jn(n=>n.toString(),(n,e)=>n.isEqual(e))}const o_=new oe(M.comparator),a_=new ve(M.comparator);function W(...n){let e=a_;for(const t of n)e=e.add(t);return e}const c_=new ve(Y);function l_(){return c_}/**
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
 */function ia(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}function Mh(n){return{integerValue:""+n}}function u_(n,e){return Uy(e)?Mh(e):ia(n,e)}/**
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
 */class ci{constructor(){this._=void 0}}function h_(n,e,t){return n instanceof zs?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ea(i)&&(i=ta(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Rr?Bh(n,e):n instanceof Pr?Uh(n,e):function(s,i){const a=Fh(s,i),c=Nl(a)+Nl(s.Pe);return Io(a)&&Io(s.Pe)?Mh(c):ia(s.serializer,c)}(n,e)}function d_(n,e,t){return n instanceof Rr?Bh(n,e):n instanceof Pr?Uh(n,e):t}function Fh(n,e){return n instanceof Ws?function(r){return Io(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class zs extends ci{}class Rr extends ci{constructor(e){super(),this.elements=e}}function Bh(n,e){const t=$h(e);for(const r of n.elements)t.some(s=>Ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class Pr extends ci{constructor(e){super(),this.elements=e}}function Uh(n,e){let t=$h(e);for(const r of n.elements)t=t.filter(s=>!Ze(s,r));return{arrayValue:{values:t}}}class Ws extends ci{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Nl(n){return le(n.integerValue||n.doubleValue)}function $h(n){return na(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function f_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Rr&&s instanceof Rr||r instanceof Pr&&s instanceof Pr?Ln(r.elements,s.elements,Ze):r instanceof Ws&&s instanceof Ws?Ze(r.Pe,s.Pe):r instanceof zs&&s instanceof zs}(n.transform,e.transform)}class p_{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function As(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class li{}function qh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new oa(n.key,Ge.none()):new qr(n.key,n.data,Ge.none());{const t=n.data,r=Oe.empty();let s=new ve(_e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new jt(n.key,r,new Be(s.toArray()),Ge.none())}}function m_(n,e,t){n instanceof qr?function(s,i,a){const c=s.value.clone(),u=Fl(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof jt?function(s,i,a){if(!As(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Fl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(jh(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Er(n,e,t,r){return n instanceof qr?function(i,a,c,u){if(!As(i.precondition,a))return c;const d=i.value.clone(),p=Bl(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof jt?function(i,a,c,u){if(!As(i.precondition,a))return c;const d=Bl(i.fieldTransforms,u,a),p=a.data;return p.setAll(jh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return As(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function g_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Fh(r.transform,s||null);i!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,i))}return t||null}function Ml(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ln(r,s,(i,a)=>f_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qr extends li{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jt extends li{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Fl(n,e,t){const r=new Map;Z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,d_(a,c,t[s]))}return r}function Bl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,h_(i,a,e))}return r}class oa extends li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class y_ extends li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class __{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&m_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=qh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(t,r)=>Ml(t,r))&&Ln(this.baseMutations,e.baseMutations,(t,r)=>Ml(t,r))}}class aa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length);let s=function(){return o_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new aa(e,t,r,s)}}/**
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
 */class v_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class E_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,G;function w_(n){switch(n){default:return U();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function zh(n){if(n===void 0)return gt("GRPC error has no .code"),C.UNKNOWN;switch(n){case he.OK:return C.OK;case he.CANCELLED:return C.CANCELLED;case he.UNKNOWN:return C.UNKNOWN;case he.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case he.INTERNAL:return C.INTERNAL;case he.UNAVAILABLE:return C.UNAVAILABLE;case he.UNAUTHENTICATED:return C.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case he.NOT_FOUND:return C.NOT_FOUND;case he.ALREADY_EXISTS:return C.ALREADY_EXISTS;case he.PERMISSION_DENIED:return C.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case he.ABORTED:return C.ABORTED;case he.OUT_OF_RANGE:return C.OUT_OF_RANGE;case he.UNIMPLEMENTED:return C.UNIMPLEMENTED;case he.DATA_LOSS:return C.DATA_LOSS;default:return U()}}(G=he||(he={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function I_(){return new TextEncoder}/**
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
 */const T_=new nn([4294967295,4294967295],0);function Ul(n){const e=I_().encode(n),t=new ph;return t.update(e),new Uint8Array(t.digest())}function $l(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nn([t,r],0),new nn([s,i],0)]}class ca{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fr(`Invalid padding: ${t}`);if(r<0)throw new fr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=nn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(nn.fromNumber(r)));return s.compare(T_)===1&&(s=new nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Ul(e),[r,s]=$l(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ca(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Ul(e),[r,s]=$l(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ui{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ui($.min(),s,new oe(Y),yt(),W())}}class jr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new jr(r,t,W(),W(),W())}}/**
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
 */class Ss{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Wh{constructor(e,t){this.targetId=e,this.me=t}}class Hh{constructor(e,t,r=we.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ql{constructor(){this.fe=0,this.ge=zl(),this.pe=we.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new jr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=zl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class b_{constructor(e){this.Le=e,this.Be=new Map,this.ke=yt(),this.qe=jl(),this.Qe=new oe(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(bo(i))if(r===0){const a=new M(i.path);this.Ue(t,a,ke.newNoDocument(a,$.min()))}else Z(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=cn(r).toUint8Array()}catch(u){if(u instanceof Th)return Dn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ca(a,s,i)}catch(u){return Dn(u instanceof fr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&bo(c.target)){const u=new M(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,ke.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=W();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ui(e,t,this.Qe,this.ke,r);return this.ke=yt(),this.qe=jl(),this.Qe=new oe(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ql,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ve(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ql),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function jl(){return new oe(M.comparator)}function zl(){return new oe(M.comparator)}const A_={asc:"ASCENDING",desc:"DESCENDING"},S_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C_={and:"AND",or:"OR"};class k_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Co(n,e){return n.useProto3Json||si(e)?e:{value:e}}function Hs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function R_(n,e){return Hs(n,e.toTimestamp())}function Xe(n){return Z(!!n),$.fromTimestamp(function(t){const r=Ut(t);return new fe(r.seconds,r.nanos)}(n))}function la(n,e){return ko(n,e).canonicalString()}function ko(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Kh(n){const e=se.fromString(n);return Z(Zh(e)),e}function Ro(n,e){return la(n.databaseId,e.path)}function io(n,e){const t=Kh(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Yh(t))}function Qh(n,e){return la(n.databaseId,e)}function P_(n){const e=Kh(n);return e.length===4?se.emptyPath():Yh(e)}function Po(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yh(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wl(n,e,t){return{name:Ro(n,e),fields:t.value.mapValue.fields}}function x_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Z(p===void 0||typeof p=="string"),we.fromBase64String(p||"")):(Z(p===void 0||p instanceof Buffer||p instanceof Uint8Array),we.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?C.UNKNOWN:zh(d.code);return new O(p,d.message||"")}(a);t=new Hh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=io(n,r.document.name),i=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):$.min(),c=new Oe({mapValue:{fields:r.document.fields}}),u=ke.newFoundDocument(s,i,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Ss(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=io(n,r.document),i=r.readTime?Xe(r.readTime):$.min(),a=ke.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ss([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=io(n,r.document),i=r.removedTargetIds||[];t=new Ss([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new E_(s,i),c=r.targetId;t=new Wh(c,a)}}return t}function D_(n,e){let t;if(e instanceof qr)t={update:Wl(n,e.key,e.value)};else if(e instanceof oa)t={delete:Ro(n,e.key)};else if(e instanceof jt)t={update:Wl(n,e.key,e.data),updateMask:$_(e.fieldMask)};else{if(!(e instanceof y_))return U();t={verify:Ro(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof zs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ws)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:R_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(n,e.precondition)),t}function L_(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Xe(s.updateTime):Xe(i);return a.isEqual($.min())&&(a=Xe(i)),new p_(a,s.transformResults||[])}(t,e))):[]}function V_(n,e){return{documents:[Qh(n,e.path)]}}function O_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qh(n,s);const i=function(d){if(d.length!==0)return Xh(Ke.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:wn(v.field),direction:F_(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Co(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function N_(n){let e=P_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const v=Jh(g);return v instanceof Ke&&Ch(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(v=>function(x){return new js(In(x.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(g){let v;return v=typeof g=="object"?g.value:g,si(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(g){const v=!!g.before,S=g.values||[];return new qs(S,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,S=g.values||[];return new qs(S,v)}(t.endAt)),t_(e,s,a,i,c,"F",u,d)}function M_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=In(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=In(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=In(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=In(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return de.create(In(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>Jh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function F_(n){return A_[n]}function B_(n){return S_[n]}function U_(n){return C_[n]}function wn(n){return{fieldPath:n.canonicalString()}}function In(n){return _e.fromServerFormat(n.fieldPath)}function Xh(n){return n instanceof de?function(t){if(t.op==="=="){if(xl(t.value))return{unaryFilter:{field:wn(t.field),op:"IS_NAN"}};if(Pl(t.value))return{unaryFilter:{field:wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xl(t.value))return{unaryFilter:{field:wn(t.field),op:"IS_NOT_NAN"}};if(Pl(t.value))return{unaryFilter:{field:wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wn(t.field),op:B_(t.op),value:t.value}}}(n):n instanceof Ke?function(t){const r=t.getFilters().map(s=>Xh(s));return r.length===1?r[0]:{compositeFilter:{op:U_(t.op),filters:r}}}(n):U()}function $_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Lt{constructor(e,t,r,s,i=$.min(),a=$.min(),c=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class q_{constructor(e){this.ct=e}}function j_(n){const e=N_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?So(e,e.limit,"L"):e}/**
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
 */class z_{constructor(){this.un=new W_}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Bt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class W_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ve(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ve(se.comparator)).toArray()}}/**
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
 */class Nn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Nn(0)}static kn(){return new Nn(-1)}}/**
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
 */class H_{constructor(){this.changes=new jn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class G_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class K_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Er(r.mutation,s,Be.empty(),fe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=Zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=dr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=yt();const a=vr(),c=function(){return vr()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof jt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Er(p.mutation,d,p.mutation.getFieldMask(),fe.now())):a.set(d.key,Be.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var g;return c.set(d,new G_(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=vr();let s=new oe((a,c)=>a-c),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Be.empty();p=c.applyToLocalView(d,p),r.set(u,p);const g=(s.get(c.batchId)||W()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,g=Nh();p.forEach(v=>{if(!i.has(v)){const S=qh(t.get(v),r.get(v));S!==null&&g.set(v,S),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Zt());let c=-1,u=i;return a.next(d=>k.forEach(d,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,W())).next(p=>({batchId:c,changes:Oh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=dr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=dr();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,u=>{const d=function(g,v){return new $r(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ke.newInvalidDocument(p)))});let c=dr();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&Er(p.mutation,d,Be.empty(),fe.now()),ai(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class Q_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:j_(s.bundledQuery),readTime:Xe(s.readTime)}}(t)),k.resolve()}}/**
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
 */class Y_{constructor(){this.overlays=new oe(M.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Zt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Zt(),i=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new oe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Zt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Zt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return k.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new v_(t,r));let i=this.Ir.get(t);i===void 0&&(i=W(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class J_{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class ua{constructor(){this.Tr=new ve(pe.Er),this.dr=new ve(pe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new pe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new M(new se([])),r=new pe(t,e),s=new pe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new M(new se([])),r=new pe(t,e),s=new pe(t,e+1);let i=W();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new pe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return M.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||M.comparator(e.key,t.key)}}/**
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
 */class X_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ve(pe.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new __(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new pe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ve(Y);return t.forEach(s=>{const i=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const a=new pe(new M(i),0);let c=new ve(Y);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.wr)),!0)},a),k.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const i=new pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new pe(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Z_{constructor(e){this.Mr=e,this.docs=function(){return new oe(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=yt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ke.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=yt();const a=t.path,c=new M(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ny(Oy(p),r)<=0||(s.has(p.key)||ai(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ev(this)}getSize(e){return k.resolve(this.size)}}class ev extends H_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class tv{constructor(e){this.persistence=e,this.Nr=new jn(t=>ra(t),sa),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ua,this.targetCount=0,this.kr=Nn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Nn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
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
 */class nv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Zo(0),this.Kr=!1,this.Kr=!0,this.$r=new J_,this.referenceDelegate=e(this),this.Ur=new tv(this),this.indexManager=new z_,this.remoteDocumentCache=function(s){return new Z_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new q_(t),this.Gr=new Q_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Y_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new X_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const s=new rv(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class rv extends Fy{constructor(e){super(),this.currentSequenceNumber=e}}class ha{constructor(e){this.persistence=e,this.Jr=new ua,this.Yr=null}static Zr(e){return new ha(e)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=M.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,$.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class da{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new da(e,t.fromCache,r,s)}}/**
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
 */class sv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zf()?8:By(Pe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new sv;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(cr()<=H.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",En(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(cr()<=H.DEBUG&&N("QueryEngine","Query:",En(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(cr()<=H.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",En(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):k.resolve())}Yi(e,t){if(Ol(t))return k.resolve(null);let r=Je(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=So(t,null,"F"),r=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,c);return this.ns(t,d,a,u.readTime)?this.Yi(e,So(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,s){return Ol(t)||s.isEqual($.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?k.resolve(null):(cr()<=H.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),En(t)),this.rs(e,a,t,Vy(s,-1)).next(c=>c))})}ts(e,t){let r=new ve(Lh(e));return t.forEach((s,i)=>{ai(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return cr()<=H.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",En(t)),this.Ji.getDocumentsMatchingQuery(e,t,Bt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class ov{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new oe(Y),this._s=new jn(i=>ra(i),sa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function av(n,e,t,r){return new ov(n,e,t,r)}async function ed(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function cv(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const g=d.batch,v=g.keys();let S=k.resolve();return v.forEach(x=>{S=S.next(()=>p.getEntry(u,x)).next(V=>{const P=d.docVersions.get(x);Z(P!==null),V.version.compareTo(P)<0&&(g.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function td(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function lv(n,e){const t=q(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,g)=>{const v=s.get(g);if(!v)return;c.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,g)));let S=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(we.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(g,S),function(V,P,F){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(v,S,p)&&c.push(t.Ur.updateTargetData(i,S))});let u=yt(),d=W();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(uv(i,a,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual($.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.os=s,i))}function uv(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=yt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function hv(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dv(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Lt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function xo(n,e,t){const r=q(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ur(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Hl(n,e,t){const r=q(n);let s=$.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const g=q(u),v=g._s.get(p);return v!==void 0?k.resolve(g.os.get(v)):g.Ur.getTargetData(d,p)}(r,a,Je(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:$.min(),t?i:W())).next(c=>(fv(r,r_(e),c),{documents:c,Ts:i})))}function fv(n,e,t){let r=n.us.get(e)||$.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Gl{constructor(){this.activeTargetIds=l_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pv{constructor(){this.so=new Gl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Gl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mv{_o(e){}shutdown(){}}/**
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
 */class Kl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _s=null;function oo(){return _s===null?_s=function(){return 268435456+Math.round(2147483648*Math.random())}():_s++,"0x"+_s.toString(16)}/**
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
 */const gv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Se="WebChannelConnection";class _v extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=oo(),u=this.xo(t,r.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,u,d,s).then(p=>(N("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw Dn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=gv[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=oo();return new Promise((a,c)=>{const u=new mh;u.setWithCredentials(!0),u.listenOnce(gh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ts.NO_ERROR:const p=u.getResponseJson();N(Se,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case Ts.TIMEOUT:N(Se,`RPC '${e}' ${i} timed out`),c(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const g=u.getStatus();if(N(Se,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const x=function(P){const F=P.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(F)>=0?F:C.UNKNOWN}(S.status);c(new O(x,S.message))}else c(new O(C.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new O(C.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{N(Se,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);N(Se,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=oo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=vh(),c=_h(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");N(Se,`Creating RPC '${e}' stream ${s}: ${p}`,u);const g=a.createWebChannel(p,u);let v=!1,S=!1;const x=new yv({Io:P=>{S?N(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(v||(N(Se,`Opening RPC '${e}' stream ${s} transport.`),g.open(),v=!0),N(Se,`RPC '${e}' stream ${s} sending:`,P),g.send(P))},To:()=>g.close()}),V=(P,F,z)=>{P.listen(F,L=>{try{z(L)}catch(X){setTimeout(()=>{throw X},0)}})};return V(g,hr.EventType.OPEN,()=>{S||(N(Se,`RPC '${e}' stream ${s} transport opened.`),x.yo())}),V(g,hr.EventType.CLOSE,()=>{S||(S=!0,N(Se,`RPC '${e}' stream ${s} transport closed`),x.So())}),V(g,hr.EventType.ERROR,P=>{S||(S=!0,Dn(Se,`RPC '${e}' stream ${s} transport errored:`,P),x.So(new O(C.UNAVAILABLE,"The operation could not be completed")))}),V(g,hr.EventType.MESSAGE,P=>{var F;if(!S){const z=P.data[0];Z(!!z);const L=z,X=L.error||((F=L[0])===null||F===void 0?void 0:F.error);if(X){N(Se,`RPC '${e}' stream ${s} received error:`,X);const ue=X.status;let ne=function(_){const E=he[_];if(E!==void 0)return zh(E)}(ue),w=X.message;ne===void 0&&(ne=C.INTERNAL,w="Unknown error status: "+ue+" with message "+X.message),S=!0,x.So(new O(ne,w)),g.close()}else N(Se,`RPC '${e}' stream ${s} received:`,z),x.bo(z)}}),V(c,yh.STAT_EVENT,P=>{P.stat===Eo.PROXY?N(Se,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Eo.NOPROXY&&N(Se,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function ao(){return typeof document<"u"?document:null}/**
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
 */function hi(n){return new k_(n,!0)}/**
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
 */class nd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class rd{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new nd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vv extends rd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=x_(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Xe(a.readTime):$.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Po(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=bo(u)?{documents:V_(i,u)}:{query:O_(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Gh(i,a.resumeToken);const d=Co(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){c.readTime=Hs(i,a.snapshotVersion.toTimestamp());const d=Co(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=M_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Po(this.serializer),t.removeTarget=e,this.a_(t)}}class Ev extends rd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=L_(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Po(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>D_(this.serializer,r))};this.a_(t)}}/**
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
 */class wv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ko(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(C.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,ko(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Iv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(gt(t),this.D_=!1):N("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Tv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{dn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=q(u);d.L_.add(4),await zr(d),d.q_.set("Unknown"),d.L_.delete(4),await di(d)}(this))})}),this.q_=new Iv(r,s)}}async function di(n){if(dn(n))for(const e of n.B_)await e(!0)}async function zr(n){for(const e of n.B_)await e(!1)}function sd(n,e){const t=q(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ga(t)?ma(t):zn(t).r_()&&pa(t,e))}function fa(n,e){const t=q(n),r=zn(t);t.N_.delete(e),r.r_()&&id(t,e),t.N_.size===0&&(r.r_()?r.o_():dn(t)&&t.q_.set("Unknown"))}function pa(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zn(n).A_(e)}function id(n,e){n.Q_.xe(e),zn(n).R_(e)}function ma(n){n.Q_=new b_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),zn(n).start(),n.q_.v_()}function ga(n){return dn(n)&&!zn(n).n_()&&n.N_.size>0}function dn(n){return q(n).L_.size===0}function od(n){n.Q_=void 0}async function bv(n){n.q_.set("Online")}async function Av(n){n.N_.forEach((e,t)=>{pa(n,e)})}async function Sv(n,e){od(n),ga(n)?(n.q_.M_(e),ma(n)):n.q_.set("Unknown")}async function Cv(n,e,t){if(n.q_.set("Online"),e instanceof Hh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gs(n,r)}else if(e instanceof Ss?n.Q_.Ke(e):e instanceof Wh?n.Q_.He(e):n.Q_.We(e),!t.isEqual($.min()))try{const r=await td(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(we.EMPTY_BYTE_STRING,p.snapshotVersion)),id(i,u);const g=new Lt(p.target,u,d,p.sequenceNumber);pa(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await Gs(n,r)}}async function Gs(n,e,t){if(!Ur(e))throw e;n.L_.add(1),await zr(n),n.q_.set("Offline"),t||(t=()=>td(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await di(n)})}function ad(n,e){return e().catch(t=>Gs(n,t,e))}async function fi(n){const e=q(n),t=$t(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;kv(e);)try{const s=await hv(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Rv(e,s)}catch(s){await Gs(e,s)}cd(e)&&ld(e)}function kv(n){return dn(n)&&n.O_.length<10}function Rv(n,e){n.O_.push(e);const t=$t(n);t.r_()&&t.V_&&t.m_(e.mutations)}function cd(n){return dn(n)&&!$t(n).n_()&&n.O_.length>0}function ld(n){$t(n).start()}async function Pv(n){$t(n).p_()}async function xv(n){const e=$t(n);for(const t of n.O_)e.m_(t.mutations)}async function Dv(n,e,t){const r=n.O_.shift(),s=aa.from(r,e,t);await ad(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await fi(n)}async function Lv(n,e){e&&$t(n).V_&&await async function(r,s){if(function(a){return w_(a)&&a!==C.ABORTED}(s.code)){const i=r.O_.shift();$t(r).s_(),await ad(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fi(r)}}(n,e),cd(n)&&ld(n)}async function Ql(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=dn(t);t.L_.add(3),await zr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await di(t)}async function Vv(n,e){const t=q(n);e?(t.L_.delete(2),await di(t)):e||(t.L_.add(2),await zr(t),t.q_.set("Unknown"))}function zn(n){return n.K_||(n.K_=function(t,r,s){const i=q(t);return i.w_(),new vv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:bv.bind(null,n),Ro:Av.bind(null,n),mo:Sv.bind(null,n),d_:Cv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ga(n)?ma(n):n.q_.set("Unknown")):(await n.K_.stop(),od(n))})),n.K_}function $t(n){return n.U_||(n.U_=function(t,r,s){const i=q(t);return i.w_(),new Ev(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Pv.bind(null,n),mo:Lv.bind(null,n),f_:xv.bind(null,n),g_:Dv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await fi(n)):(await n.U_.stop(),n.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ya{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ya(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _a(n,e){if(gt("AsyncQueue",`${e}: ${n}`),Ur(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Rn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=dr(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Rn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Yl{constructor(){this.W_=new oe(M.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):U():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Mn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Mn(e,t,Rn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Ov{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Nv{constructor(){this.queries=Jl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=q(t),i=s.queries;s.queries=Jl(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Jl(){return new jn(n=>Dh(n),oi)}async function va(n,e){const t=q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Ov,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=_a(a,`Initialization of query '${En(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&wa(t)}async function Ea(n,e){const t=q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Mv(n,e){const t=q(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&wa(t)}function Fv(n,e,t){const r=q(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function wa(n){n.Y_.forEach(e=>{e.next()})}var Do,Xl;(Xl=Do||(Do={})).ea="default",Xl.Cache="cache";class Ia{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Do.Cache}}/**
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
 */class ud{constructor(e){this.key=e}}class hd{constructor(e){this.key=e}}class Bv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Lh(e),this.Ra=new Rn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Yl,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const v=s.get(p),S=ai(this.query,g)?g:null,x=!!v&&this.mutatedKeys.has(v.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;v&&S?v.data.isEqual(S.data)?x!==V&&(r.track({type:3,doc:S}),P=!0):this.ga(v,S)||(r.track({type:2,doc:S}),P=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!v&&S?(r.track({type:0,doc:S}),P=!0):v&&!S&&(r.track({type:1,doc:v}),P=!0,(u||d)&&(c=!0)),P&&(S?(a=a.add(S),i=V?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,g)=>function(S,x){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return V(S)-V(x)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new Mn(this.query,e.Ra,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=W(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new hd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ud(r))}),t}ba(e){this.Ta=e.Ts,this.da=W();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Mn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Uv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $v{constructor(e){this.key=e,this.va=!1}}class qv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new jn(c=>Dh(c),oi),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(M.comparator),this.Na=new Map,this.La=new ua,this.Ba={},this.ka=new Map,this.qa=Nn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jv(n,e,t=!0){const r=yd(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await dd(r,e,t,!0),s}async function zv(n,e){const t=yd(n);await dd(t,e,!0,!1)}async function dd(n,e,t,r){const s=await dv(n.localStore,Je(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Wv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&sd(n.remoteStore,s),c}async function Wv(n,e,t,r,s){n.Ka=(g,v,S)=>async function(V,P,F,z){let L=P.view.ma(F);L.ns&&(L=await Hl(V.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,L)));const X=z&&z.targetChanges.get(P.targetId),ue=z&&z.targetMismatches.get(P.targetId)!=null,ne=P.view.applyChanges(L,V.isPrimaryClient,X,ue);return eu(V,P.targetId,ne.wa),ne.snapshot}(n,g,v,S);const i=await Hl(n.localStore,e,!0),a=new Bv(e,i.Ts),c=a.ma(i.documents),u=jr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);eu(n,t,d.wa);const p=new Uv(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Hv(n,e,t){const r=q(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!oi(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&fa(r.remoteStore,s.targetId),Lo(r,s.targetId)}).catch(Br)):(Lo(r,s.targetId),await xo(r.localStore,s.targetId,!0))}async function Gv(n,e){const t=q(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),fa(t.remoteStore,r.targetId))}async function Kv(n,e,t){const r=tE(n);try{const s=await function(a,c){const u=q(a),d=fe.now(),p=c.reduce((S,x)=>S.add(x.key),W());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=yt(),V=W();return u.cs.getEntries(S,p).next(P=>{x=P,x.forEach((F,z)=>{z.isValidDocument()||(V=V.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,x)).next(P=>{g=P;const F=[];for(const z of c){const L=g_(z,g.get(z.key).overlayedDocument);L!=null&&F.push(new jt(z.key,L,bh(L.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,F,c)}).next(P=>{v=P;const F=P.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(S,P.batchId,F)})}).then(()=>({batchId:v.batchId,changes:Oh(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new oe(Y)),d=d.insert(c,u),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await Wr(r,s.changes),await fi(r.remoteStore)}catch(s){const i=_a(s,"Failed to persist write");t.reject(i)}}async function fd(n,e){const t=q(n);try{const r=await lv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Z(a.va):s.removedDocuments.size>0&&(Z(a.va),a.va=!1))}),await Wr(t,r,e)}catch(r){await Br(r)}}function Zl(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=q(a);u.onlineState=c;let d=!1;u.queries.forEach((p,g)=>{for(const v of g.j_)v.Z_(c)&&(d=!0)}),d&&wa(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qv(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new oe(M.comparator);a=a.insert(i,ke.newNoDocument(i,$.min()));const c=W().add(i),u=new ui($.min(),new Map,new oe(Y),a,c);await fd(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ta(r)}else await xo(r.localStore,e,!1).then(()=>Lo(r,e,t)).catch(Br)}async function Yv(n,e){const t=q(n),r=e.batch.batchId;try{const s=await cv(t.localStore,e);md(t,r,null),pd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Wr(t,s)}catch(s){await Br(s)}}async function Jv(n,e,t){const r=q(n);try{const s=await function(a,c){const u=q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(Z(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);md(r,e,t),pd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Wr(r,s)}catch(s){await Br(s)}}function pd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function md(n,e,t){const r=q(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Lo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||gd(n,r)})}function gd(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(fa(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ta(n))}function eu(n,e,t){for(const r of t)r instanceof ud?(n.La.addReference(r.key,e),Xv(n,r)):r instanceof hd?(N("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||gd(n,r.key)):U()}function Xv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(N("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ta(n))}function Ta(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new M(se.fromString(e)),r=n.qa.next();n.Na.set(r,new $v(t)),n.Oa=n.Oa.insert(t,r),sd(n.remoteStore,new Lt(Je(ii(t.path)),r,"TargetPurposeLimboResolution",Zo.oe))}}async function Wr(n,e,t){const r=q(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=da.Wi(u.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,d){const p=q(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(d,v=>k.forEach(v.$i,S=>p.persistence.referenceDelegate.addReference(g,v.targetId,S)).next(()=>k.forEach(v.Ui,S=>p.persistence.referenceDelegate.removeReference(g,v.targetId,S)))))}catch(g){if(!Ur(g))throw g;N("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const S=p.os.get(v),x=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(x);p.os=p.os.insert(v,V)}}}(r.localStore,i))}async function Zv(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await ed(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new O(C.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wr(t,r.hs)}}function eE(n,e){const t=q(n),r=t.Na.get(e);if(r&&r.va)return W().add(r.key);{let s=W();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function yd(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qv.bind(null,e),e.Ca.d_=Mv.bind(null,e.eventManager),e.Ca.$a=Fv.bind(null,e.eventManager),e}function tE(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jv.bind(null,e),e}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return av(this.persistence,new iv,e.initialUser,this.serializer)}Ga(e){return new nv(ha.Zr,this.serializer)}Wa(e){return new pv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class Vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zv.bind(null,this.syncEngine),await Vv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nv}()}createDatastore(e){const t=hi(e.databaseInfo.databaseId),r=function(i){return new _v(i)}(e.databaseInfo);return function(i,a,c,u){return new wv(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Tv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Zl(this.syncEngine,t,0),function(){return Kl.D()?new Kl:new mv}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,p){const g=new qv(s,i,a,c,u,d);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=q(s);N("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await zr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vo.provider={build:()=>new Vo};/**
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
 */class ba{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class nE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ce.UNAUTHENTICATED,this.clientId=wh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{N("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_a(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function co(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ed(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function tu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rE(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ql(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ql(e.remoteStore,s)),n._onlineComponents=e}async function rE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await co(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Dn("Error using user provided cache. Falling back to memory cache: "+t),await co(n,new Ks)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await co(n,new Ks);return n._offlineComponents}async function _d(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await tu(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await tu(n,new Vo))),n._onlineComponents}function sE(n){return _d(n).then(e=>e.syncEngine)}async function Qs(n){const e=await _d(n),t=e.eventManager;return t.onListen=jv.bind(null,e.syncEngine),t.onUnlisten=Hv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Gv.bind(null,e.syncEngine),t}function iE(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new ba({next:v=>{p.Za(),a.enqueueAndForget(()=>Ea(i,g));const S=v.docs.has(c);!S&&v.fromCache?d.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&u&&u.source==="server"?d.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new Ia(ii(c.path),p,{includeMetadataChanges:!0,_a:!0});return va(i,g)}(await Qs(n),n.asyncQueue,e,t,r)),r.promise}function oE(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new ba({next:v=>{p.Za(),a.enqueueAndForget(()=>Ea(i,g)),v.fromCache&&u.source==="server"?d.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new Ia(c,p,{includeMetadataChanges:!0,_a:!0});return va(i,g)}(await Qs(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function vd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const nu=new Map;/**
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
 */function Ed(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function aE(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ru(n){if(!M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function su(n){if(M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function $e(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pi(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class iu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ay;switch(r.type){case"firstParty":return new Ry(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=nu.get(t);r&&(N("ComponentProvider","Removing Datastore"),nu.delete(t),r.terminate())}(this),Promise.resolve()}}function cE(n,e,t,r={}){var s;const i=(n=$e(n,mi))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ce.MOCK_USER;else{c=Mf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ce(d)}n._authCredentials=new Sy(new Eh(c,u))}}/**
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
 */class fn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fn(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class Mt extends fn{constructor(e,t,r){super(e,t,ii(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new M(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function gi(n,e,...t){if(n=ce(n),Ed("collection","path",e),n instanceof mi){const r=se.fromString(e,...t);return su(r),new Mt(n,null,r)}{if(!(n instanceof Re||n instanceof Mt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return su(r),new Mt(n.firestore,null,r)}}function ie(n,e,...t){if(n=ce(n),arguments.length===1&&(e=wh.newId()),Ed("doc","path",e),n instanceof mi){const r=se.fromString(e,...t);return ru(r),new Re(n,null,new M(r))}{if(!(n instanceof Re||n instanceof Mt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return ru(r),new Re(n.firestore,n instanceof Mt?n.converter:null,new M(r))}}/**
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
 */class ou{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nd(this,"async_queue_retry"),this.Vu=()=>{const r=ao();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ao();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ut;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ur(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw gt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=ya.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function au(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class qt extends mi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ou,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ou(e),this._firestoreClient=void 0,await e}}}function lE(n,e){const t=typeof n=="object"?n:Ru(),r=typeof n=="string"?n:"(default)",s=Uo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Of("firestore");i&&cE(s,...i)}return s}function yi(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||uE(n),n._firestoreClient}function uE(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,p){return new qy(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,vd(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new nE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(we.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fn(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _i{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Aa{constructor(e){this._methodName=e}}/**
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
 */class Sa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class Ca{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const hE=/^__.*__$/;class dE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new qr(e,this.data,t,this.fieldTransforms)}}class wd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new jt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Id(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class ka{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ka(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ys(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Id(this.Cu)&&hE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class fE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||hi(e)}Qu(e,t,r,s=!1){return new ka({Cu:e,methodName:t,qu:r,path:_e.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ra(n){const e=n._freezeSettings(),t=hi(n._databaseId);return new fE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pE(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Pa("Data must be an object, but it was:",a,r);const c=Td(r,a);let u,d;if(i.merge)u=new Be(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const v=Oo(e,g,t);if(!a.contains(v))throw new O(C.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Ad(p,v)||p.push(v)}u=new Be(p),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new dE(new Oe(c),u,d)}class vi extends Aa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vi}}function mE(n,e,t,r){const s=n.Qu(1,e,t);Pa("Data must be an object, but it was:",s,r);const i=[],a=Oe.empty();hn(r,(u,d)=>{const p=xa(e,u,t);d=ce(d);const g=s.Nu(p);if(d instanceof vi)i.push(p);else{const v=Hr(d,g);v!=null&&(i.push(p),a.set(p,v))}});const c=new Be(i);return new wd(a,c,s.fieldTransforms)}function gE(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[Oo(e,r,t)],u=[s];if(i.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)c.push(Oo(e,i[v])),u.push(i[v+1]);const d=[],p=Oe.empty();for(let v=c.length-1;v>=0;--v)if(!Ad(d,c[v])){const S=c[v];let x=u[v];x=ce(x);const V=a.Nu(S);if(x instanceof vi)d.push(S);else{const P=Hr(x,V);P!=null&&(d.push(S),p.set(S,P))}}const g=new Be(d);return new wd(p,g,a.fieldTransforms)}function yE(n,e,t,r=!1){return Hr(t,n.Qu(r?4:3,e))}function Hr(n,e){if(bd(n=ce(n)))return Pa("Unsupported field value:",e,n),Td(n,e);if(n instanceof Aa)return function(r,s){if(!Id(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Hr(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return u_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:Hs(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hs(s.serializer,i)}}if(r instanceof Sa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fn)return{bytesValue:Gh(s.serializer,r._byteString)};if(r instanceof Re){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:la(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ca)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return ia(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${pi(r)}`)}(n,e)}function Td(n,e){const t={};return Ih(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hn(n,(r,s)=>{const i=Hr(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function bd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof Sa||n instanceof Fn||n instanceof Re||n instanceof Aa||n instanceof Ca)}function Pa(n,e,t){if(!bd(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=pi(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Oo(n,e,t){if((e=ce(e))instanceof _i)return e._internalPath;if(typeof e=="string")return xa(n,e);throw Ys("Field path arguments must be of type string or ",n,!1,void 0,t)}const _E=new RegExp("[~\\*/\\[\\]]");function xa(n,e,t){if(e.search(_E)>=0)throw Ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _i(...e.split("."))._internalPath}catch{throw Ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ys(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(C.INVALID_ARGUMENT,c+n+u)}function Ad(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Sd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Da("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vE extends Sd{data(){return super.data()}}function Da(n,e){return typeof e=="string"?xa(n,e):e instanceof _i?e._internalPath:e._delegate._internalPath}/**
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
 */function Cd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class La{}class EE extends La{}function Ei(n,e,...t){let r=[];e instanceof La&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Va).length,c=i.filter(u=>u instanceof wi).length;if(a>1||a>0&&c>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class wi extends EE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new wi(e,t,r)}_apply(e){const t=this._parse(e);return kd(e._query,t),new fn(e.firestore,e.converter,Ao(e._query,t))}_parse(e){const t=Ra(e.firestore);return function(i,a,c,u,d,p,g){let v;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){lu(g,p);const S=[];for(const x of g)S.push(cu(u,i,x));v={arrayValue:{values:S}}}else v=cu(u,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||lu(g,p),v=yE(c,a,g,p==="in"||p==="not-in");return de.create(d,p,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ii(n,e,t){const r=e,s=Da("where",n);return wi._create(s,r,t)}class Va extends La{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Va(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)kd(a,u),a=Ao(a,u)}(e._query,t),new fn(e.firestore,e.converter,Ao(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function cu(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xh(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!M.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rl(n,new M(r))}if(t instanceof Re)return Rl(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pi(t)}.`)}function lu(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kd(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wE{convertValue(e,t="none"){switch(ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return hn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>le(a.doubleValue));return new Ca(i)}convertGeoPoint(e){return new Sa(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ta(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const t=Ut(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);Z(Zh(r));const s=new Cr(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||gt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function IE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class pr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rd extends Sd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Da("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Cs extends Rd{data(e={}){return super.data(e)}}class Pd{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new pr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Cs(this._firestore,this._userDataWriter,r.key,r,new pr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Cs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new pr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Cs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new pr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:TE(c.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function TE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
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
 */function Ti(n){n=$e(n,Re);const e=$e(n.firestore,qt);return iE(yi(e),n._key).then(t=>Dd(e,n,t))}class Oa extends wE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function bi(n){n=$e(n,fn);const e=$e(n.firestore,qt),t=yi(e),r=new Oa(e);return Cd(n._query),oE(t,n._query).then(s=>new Pd(e,r,n,s))}function xd(n,e,t){n=$e(n,Re);const r=$e(n.firestore,qt),s=IE(n.converter,e);return Na(r,[pE(Ra(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ge.none())])}function xe(n,e,t,...r){n=$e(n,Re);const s=$e(n.firestore,qt),i=Ra(s);let a;return a=typeof(e=ce(e))=="string"||e instanceof _i?gE(i,"updateDoc",n._key,e,t,r):mE(i,"updateDoc",n._key,e),Na(s,[a.toMutation(n._key,Ge.exists(!0))])}function bE(n){return Na($e(n.firestore,qt),[new oa(n._key,Ge.none())])}function Js(n,...e){var t,r,s;n=ce(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||au(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(au(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,d,p;if(n instanceof Re)d=$e(n.firestore,qt),p=ii(n._key.path),u={next:g=>{e[a]&&e[a](Dd(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=$e(n,fn);d=$e(g.firestore,qt),p=g._query;const v=new Oa(d);u={next:S=>{e[a]&&e[a](new Pd(d,v,g,S))},error:e[a+1],complete:e[a+2]},Cd(n._query)}return function(v,S,x,V){const P=new ba(V),F=new Ia(S,P,x);return v.asyncQueue.enqueueAndForget(async()=>va(await Qs(v),F)),()=>{P.Za(),v.asyncQueue.enqueueAndForget(async()=>Ea(await Qs(v),F))}}(yi(d),p,c,u)}function Na(n,e){return function(r,s){const i=new ut;return r.asyncQueue.enqueueAndForget(async()=>Kv(await sE(r),s,i)),i.promise}(yi(n),e)}function Dd(n,e,t){const r=t.docs.get(e._key),s=new Oa(n);return new Rd(n,s,e._key,r,new pr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){qn=s})(Un),xn(new rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new qt(new Cy(r.getProvider("auth-internal")),new xy(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cr(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Nt(bl,"4.7.3",e),Nt(bl,"4.7.3","esm2017")})();const AE={apiKey:"AIzaSyA9N9iGCBld6BV0MxAWpF5tyMDPLwVxsxY",authDomain:"grocery-lists-29774.firebaseapp.com",projectId:"grocery-lists-29774",storageBucket:"grocery-lists-29774.firebasestorage.app",messagingSenderId:"260921375354",appId:"1:260921375354:web:0d3f81b657660bdd0719c3"},Ld=ku(AE),zt=Ty(Ld),te=lE(Ld);localStorage.getItem("darkMode")==="true"&&document.documentElement.setAttribute("data-theme","dark");const xr=document.getElementById("loading-screen"),Vd=document.getElementById("auth-container"),Ai=document.getElementById("app-container"),uu=document.getElementById("login-form"),hu=document.getElementById("signup-form"),en=document.getElementById("login-btn"),tn=document.getElementById("signup-btn"),SE=document.getElementById("show-signup"),CE=document.getElementById("show-login"),wr=document.getElementById("login-error"),mr=document.getElementById("signup-error"),Ma=document.getElementById("header-title"),kE=document.getElementById("header-subtitle");let J=null,K=null,R=null,ks=null,ht=null,Me=-1,dt=new Set,Gr={},bn=localStorage.getItem("listSortMode")||"az",Tn=localStorage.getItem("historySortMode")||"az",pn={},un=null;const RE=["#EF4444","#F97316","#EAB308","#22C55E","#06B6D4","#6366F1","#EC4899","#94A3B8"];let st=!1,ct=new Set,De={},lo=null,Fe=[],Ue=[],An="shared";const PE=["Apples","Bananas","Oranges","Grapes","Strawberries","Blueberries","Raspberries","Blackberries","Watermelon","Cantaloupe","Honeydew","Pineapple","Mango","Papaya","Avocados","Tomatoes","Cucumbers","Lettuce","Spinach","Kale","Arugula","Cabbage","Broccoli","Cauliflower","Carrots","Celery","Bell Peppers","Jalapenos","Onions","Garlic","Ginger","Potatoes","Sweet Potatoes","Mushrooms","Zucchini","Squash","Asparagus","Green Beans","Peas","Corn","Eggplant","Radishes","Beets","Lemons","Limes","Fresh Herbs","Basil","Cilantro","Parsley","Mint","Rosemary","Thyme","Milk","Almond Milk","Oat Milk","Soy Milk","Cream","Half and Half","Butter","Margarine","Eggs","Cheese","Cheddar Cheese","Mozzarella","Parmesan","Feta","Cream Cheese","Cottage Cheese","Sour Cream","Yogurt","Greek Yogurt","Ice Cream","Chicken Breast","Chicken Thighs","Ground Chicken","Whole Chicken","Turkey","Ground Turkey","Beef","Ground Beef","Steak","Pork Chops","Bacon","Sausage","Ham","Hot Dogs","Deli Meat","Salmon","Tuna","Shrimp","Cod","Tilapia","Crab","Bread","Whole Wheat Bread","Sourdough","Bagels","English Muffins","Tortillas","Pita Bread","Croissants","Donuts","Muffins","Cookies","Cake","Pie","Rice","Brown Rice","Pasta","Spaghetti","Penne","Macaroni","Quinoa","Oats","Cereal","Granola","Flour","Sugar","Brown Sugar","Honey","Maple Syrup","Salt","Pepper","Olive Oil","Vegetable Oil","Coconut Oil","Vinegar","Soy Sauce","Hot Sauce","Ketchup","Mustard","Mayonnaise","BBQ Sauce","Salsa","Peanut Butter","Jam","Jelly","Canned Beans","Canned Tomatoes","Tomato Sauce","Pasta Sauce","Chicken Broth","Beef Broth","Vegetable Broth","Soup","Ramen","Mac and Cheese","Black Pepper","Garlic Powder","Onion Powder","Paprika","Cumin","Chili Powder","Oregano","Basil","Thyme","Cinnamon","Nutmeg","Vanilla Extract","Bay Leaves","Chips","Pretzels","Crackers","Popcorn","Nuts","Almonds","Cashews","Peanuts","Trail Mix","Granola Bars","Protein Bars","Candy","Chocolate","Gummy Bears","Coffee","Tea","Green Tea","Juice","Orange Juice","Apple Juice","Soda","Water","Sparkling Water","Energy Drinks","Sports Drinks","Wine","Beer","Kombucha","Frozen Pizza","Frozen Vegetables","Frozen Fruit","Ice Cream","Frozen Dinners","Frozen Chicken","Frozen Fish","French Fries","Tater Tots","Waffles","Pancakes","Canned Corn","Canned Peas","Canned Tuna","Canned Salmon","Pickles","Olives","Applesauce","Fruit Cups","Baking Powder","Baking Soda","Yeast","Chocolate Chips","Cocoa Powder","Powdered Sugar","Condensed Milk","Evaporated Milk","Paper Towels","Toilet Paper","Tissues","Trash Bags","Aluminum Foil","Plastic Wrap","Dish Soap","Laundry Detergent","Fabric Softener","Bleach","Sponges","Cleaning Spray","Napkins","Plates","Cups","Utensils","Batteries","Light Bulbs","Ziploc Bags","Toothpaste","Toothbrush","Mouthwash","Floss","Shampoo","Conditioner","Body Wash","Soap","Deodorant","Razors","Shaving Cream","Lotion","Sunscreen","Band-aids","Diapers","Baby Wipes","Baby Food","Formula","Dog Food","Cat Food","Cat Litter","Pet Treats"].sort(),mn={produce:{label:"Produce",emoji:"🥦"},dairy:{label:"Dairy & Eggs",emoji:"🥛"},meat:{label:"Meat & Seafood",emoji:"🥩"},bakery:{label:"Bakery",emoji:"🍞"},pantry:{label:"Pantry",emoji:"🥫"},spices:{label:"Spices & Seasonings",emoji:"🧂"},snacks:{label:"Snacks",emoji:"🍿"},beverages:{label:"Beverages",emoji:"☕"},frozen:{label:"Frozen",emoji:"🧊"},household:{label:"Household",emoji:"🧴"},personal:{label:"Personal Care",emoji:"🪥"},baby:{label:"Baby & Pet",emoji:"🍼"},other:{label:"Other",emoji:"📦"}},Xs=["produce","dairy","meat","bakery","pantry","spices","snacks","beverages","frozen","household","personal","baby","other"],xE={Apples:"produce",Bananas:"produce",Oranges:"produce",Grapes:"produce",Strawberries:"produce",Blueberries:"produce",Raspberries:"produce",Blackberries:"produce",Watermelon:"produce",Cantaloupe:"produce",Honeydew:"produce",Pineapple:"produce",Mango:"produce",Papaya:"produce",Avocados:"produce",Tomatoes:"produce",Cucumbers:"produce",Lettuce:"produce",Spinach:"produce",Kale:"produce",Arugula:"produce",Cabbage:"produce",Broccoli:"produce",Cauliflower:"produce",Carrots:"produce",Celery:"produce","Bell Peppers":"produce",Jalapenos:"produce",Onions:"produce",Garlic:"produce",Ginger:"produce",Potatoes:"produce","Sweet Potatoes":"produce",Mushrooms:"produce",Zucchini:"produce",Squash:"produce",Asparagus:"produce","Green Beans":"produce",Peas:"produce",Corn:"produce",Eggplant:"produce",Radishes:"produce",Beets:"produce",Lemons:"produce",Limes:"produce","Fresh Herbs":"produce",Basil:"produce",Cilantro:"produce",Parsley:"produce",Mint:"produce",Rosemary:"produce",Thyme:"produce",Milk:"dairy","Almond Milk":"dairy","Oat Milk":"dairy","Soy Milk":"dairy",Cream:"dairy","Half and Half":"dairy",Butter:"dairy",Margarine:"dairy",Eggs:"dairy",Cheese:"dairy","Cheddar Cheese":"dairy",Mozzarella:"dairy",Parmesan:"dairy",Feta:"dairy","Cream Cheese":"dairy","Cottage Cheese":"dairy","Sour Cream":"dairy",Yogurt:"dairy","Greek Yogurt":"dairy","Chicken Breast":"meat","Chicken Thighs":"meat","Ground Chicken":"meat","Whole Chicken":"meat",Turkey:"meat","Ground Turkey":"meat",Beef:"meat","Ground Beef":"meat",Steak:"meat","Pork Chops":"meat",Bacon:"meat",Sausage:"meat",Ham:"meat","Hot Dogs":"meat","Deli Meat":"meat",Salmon:"meat",Tuna:"meat",Shrimp:"meat",Cod:"meat",Tilapia:"meat",Crab:"meat",Bread:"bakery","Whole Wheat Bread":"bakery",Sourdough:"bakery",Bagels:"bakery","English Muffins":"bakery",Tortillas:"bakery","Pita Bread":"bakery",Croissants:"bakery",Donuts:"bakery",Muffins:"bakery",Cookies:"bakery",Cake:"bakery",Pie:"bakery",Rice:"pantry","Brown Rice":"pantry",Pasta:"pantry",Spaghetti:"pantry",Penne:"pantry",Macaroni:"pantry",Quinoa:"pantry",Oats:"pantry",Cereal:"pantry",Granola:"pantry",Flour:"pantry",Sugar:"pantry","Brown Sugar":"pantry",Honey:"pantry","Maple Syrup":"pantry","Olive Oil":"pantry","Vegetable Oil":"pantry","Coconut Oil":"pantry",Vinegar:"pantry","Soy Sauce":"pantry","Hot Sauce":"pantry",Ketchup:"pantry",Mustard:"pantry",Mayonnaise:"pantry","BBQ Sauce":"pantry",Salsa:"pantry","Peanut Butter":"pantry",Jam:"pantry",Jelly:"pantry","Canned Beans":"pantry","Canned Tomatoes":"pantry","Tomato Sauce":"pantry","Pasta Sauce":"pantry","Chicken Broth":"pantry","Beef Broth":"pantry","Vegetable Broth":"pantry",Soup:"pantry",Ramen:"pantry","Mac and Cheese":"pantry","Canned Corn":"pantry","Canned Peas":"pantry","Canned Tuna":"pantry","Canned Salmon":"pantry",Pickles:"pantry",Olives:"pantry",Applesauce:"pantry","Fruit Cups":"pantry","Baking Powder":"pantry","Baking Soda":"pantry",Yeast:"pantry","Chocolate Chips":"pantry","Cocoa Powder":"pantry","Powdered Sugar":"pantry","Condensed Milk":"pantry","Evaporated Milk":"pantry",Salt:"spices",Pepper:"spices","Black Pepper":"spices","Garlic Powder":"spices","Onion Powder":"spices",Paprika:"spices",Cumin:"spices","Chili Powder":"spices",Oregano:"spices",Cinnamon:"spices",Nutmeg:"spices","Vanilla Extract":"spices","Bay Leaves":"spices",Chips:"snacks",Pretzels:"snacks",Crackers:"snacks",Popcorn:"snacks",Nuts:"snacks",Almonds:"snacks",Cashews:"snacks",Peanuts:"snacks","Trail Mix":"snacks","Granola Bars":"snacks","Protein Bars":"snacks",Candy:"snacks",Chocolate:"snacks","Gummy Bears":"snacks",Coffee:"beverages",Tea:"beverages","Green Tea":"beverages",Juice:"beverages","Orange Juice":"beverages","Apple Juice":"beverages",Soda:"beverages",Water:"beverages","Sparkling Water":"beverages","Energy Drinks":"beverages","Sports Drinks":"beverages",Wine:"beverages",Beer:"beverages",Kombucha:"beverages","Frozen Pizza":"frozen","Frozen Vegetables":"frozen","Frozen Fruit":"frozen","Ice Cream":"frozen","Frozen Dinners":"frozen","Frozen Chicken":"frozen","Frozen Fish":"frozen","French Fries":"frozen","Tater Tots":"frozen",Waffles:"frozen",Pancakes:"frozen","Paper Towels":"household","Toilet Paper":"household",Tissues:"household","Trash Bags":"household","Aluminum Foil":"household","Plastic Wrap":"household","Dish Soap":"household","Laundry Detergent":"household","Fabric Softener":"household",Bleach:"household",Sponges:"household","Cleaning Spray":"household",Napkins:"household",Plates:"household",Cups:"household",Utensils:"household",Batteries:"household","Light Bulbs":"household","Ziploc Bags":"household",Toothpaste:"personal",Toothbrush:"personal",Mouthwash:"personal",Floss:"personal",Shampoo:"personal",Conditioner:"personal","Body Wash":"personal",Soap:"personal",Deodorant:"personal",Razors:"personal","Shaving Cream":"personal",Lotion:"personal",Sunscreen:"personal","Band-aids":"personal",Diapers:"baby","Baby Wipes":"baby","Baby Food":"baby",Formula:"baby","Dog Food":"baby","Cat Food":"baby","Cat Litter":"baby","Pet Treats":"baby"},DE=Object.fromEntries(Object.entries(xE).map(([n,e])=>[n.toLowerCase(),e]));LE();function LE(){hg(zt,async n=>{var e;if(n){J=n,console.log("User signed in:",n.email);const t=ie(te,"users",n.uid),r=await Ti(t),s=r.exists()?new Date(r.data().createdAt):null,i=new Date("2026-02-21");if(!n.emailVerified&&((e=n.providerData[0])==null?void 0:e.providerId)==="password"&&s&&s>=i){FE(n.email);return}if(!r.exists()||!r.data().termsAccepted){BE(t);return}Od()}else J=null,Dr()}),en.addEventListener("click",du),tn.addEventListener("click",fu),SE.addEventListener("click",()=>{uu.style.display="none",hu.style.display="block",wr.classList.remove("show")}),CE.addEventListener("click",()=>{hu.style.display="none",uu.style.display="block",mr.classList.remove("show")}),WE(),qE(),HE(),KE(),ZE(),document.getElementById("login-email").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("login-password").focus()}),document.getElementById("login-password").addEventListener("keypress",n=>{n.key==="Enter"&&du()}),document.getElementById("signup-email").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("signup-password").focus()}),document.getElementById("signup-password").addEventListener("keypress",n=>{n.key==="Enter"&&fu()})}async function du(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){Pn(wr,"Please enter email and password");return}en.disabled=!0,en.textContent="Signing in...",wr.classList.remove("show");try{await cg(zt,n,e)}catch(t){console.error("Login error:",t);let r="Failed to sign in";t.code==="auth/invalid-credential"?r="Invalid email or password":t.code==="auth/too-many-requests"&&(r="Too many attempts. Try again later"),Pn(wr,r),en.disabled=!1,en.textContent="Sign In"}}async function fu(){const n=document.getElementById("signup-email").value.trim(),e=document.getElementById("signup-password").value;if(!n||!e){Pn(mr,"Please enter email and password");return}if(e.length<6){Pn(mr,"Password must be at least 6 characters");return}tn.disabled=!0,tn.textContent="Creating account...",mr.classList.remove("show");try{const t=await ag(zt,n,e);await nh(t.user),await xd(ie(te,"users",t.user.uid),{email:n,createdAt:new Date().toISOString(),stores:["Costco","Save-On-Foods","T&T Market"],lists:{Costco:[],"Save-On-Foods":[],"T&T Market":[]},history:[],linkedTo:null,linkedWith:[],pendingInvites:[]}),NE(n)}catch(t){console.error("Signup error:",t);let r="Failed to create account";t.code==="auth/email-already-in-use"?r="Email already in use":t.code==="auth/invalid-email"&&(r="Invalid email address"),Pn(mr,r),tn.disabled=!1,tn.textContent="Create Account"}}async function VE(){try{const n=document.getElementById("hamburger-menu");n&&n.classList.remove("visible"),ks&&(ks(),ks=null),ht&&(ht(),ht=null),await rh(zt)}catch(n){console.error("Logout error:",n)}}window.handleLogout=VE;async function OE(){const n=new Qe;try{console.log("Starting Google sign-in with popup...");const t=(await xg(zt,n)).user;console.log("Google sign-in successful:",t.email);const r=ie(te,"users",t.uid);(await Ti(r)).exists()||(console.log("Creating new user document..."),await xd(r,{email:t.email,createdAt:new Date().toISOString(),stores:["Costco","Save-On-Foods","T&T Market"],lists:{Costco:[],"Save-On-Foods":[],"T&T Market":[]},history:[],linkedTo:null,linkedWith:[],pendingInvites:[]}),console.log("User document created!")),console.log("Sign-in complete, waiting for auth state change...")}catch(e){if(console.error("Google sign-in error:",e),e.code==="auth/popup-closed-by-user"||e.code==="auth/cancelled-popup-request"){console.log("User closed the popup");return}let t=`Failed to sign in with Google (${e.code})`;e.code==="auth/popup-blocked"?t="Popup was blocked. Please allow popups for this site.":e.code==="auth/unauthorized-domain"&&(t="This domain is not authorized in Firebase."),Pn(wr,t),console.error("Error details:",e.code,e.message)}}window.handleGoogleSignIn=OE;function NE(n){const e=document.getElementById("auth-container");e.innerHTML=`
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
  `}window.resendVerification=async function(){try{const n=zt.currentUser;n?(await nh(n),j("✓ Verification email sent!")):j("Please sign up again","error")}catch(n){console.error("Resend verification error:",n),j("Failed to send email","error")}};async function ME(){const n=document.getElementById("login-email"),e=(n==null?void 0:n.value.trim())||prompt("Enter your email address:");if(e)try{await og(zt,e),j(`✓ Password reset email sent to ${e}`)}catch(t){console.error("Password reset error:",t),t.code==="auth/user-not-found"?j("No account found with that email","error"):t.code==="auth/invalid-email"?j("Invalid email address","error"):j("Failed to send reset email","error")}}window.handleForgotPassword=ME;function FE(n){const e=document.getElementById("auth-container");e.style.display="flex",Ai.style.display="none",xr.style.display="none",e.innerHTML=`
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
  `}window.showDeleteAccountModal=function(){document.getElementById("delete-account-modal").style.display="flex",document.getElementById("delete-confirm-input").value="",document.getElementById("delete-account-error").textContent=""};window.closeDeleteAccountModal=function(){document.getElementById("delete-account-modal").style.display="none"};window.confirmDeleteAccount=async function(){const n=document.getElementById("delete-confirm-input").value.trim(),e=document.getElementById("delete-account-error");if(n!=="DELETE"){e.textContent="Please type DELETE exactly to confirm.";return}const t=document.getElementById("delete-account-confirm-btn");t.disabled=!0,t.textContent="Deleting...",e.textContent="";try{const r=J.uid;if(K.linkedWith&&K.linkedWith.length>0){const s=gi(te,"users"),i=Ei(s,Ii("linkedTo","==",r)),a=await bi(i);for(const c of a.docs)await xe(c.ref,{linkedTo:null})}if(K.linkedTo){const s=ie(te,"users",K.linkedTo),i=await Ti(s);if(i.exists()){const a=(i.data().linkedWith||[]).filter(c=>c!==J.email);await xe(s,{linkedWith:a})}}await bE(ie(te,"users",r));try{await fl(J)}catch(s){if(s.code==="auth/requires-recent-login"){const i=new Qe;await Dg(J,i),await fl(J)}else throw s}window.location.reload()}catch(r){console.error("Delete account error:",r),t.disabled=!1,t.textContent="Delete My Account",e.textContent="Something went wrong. Please try again or contact support@getlistapp.com."}};function BE(n){const e=document.getElementById("terms-modal"),t=document.getElementById("auth-container");t.style.display="none",Ai.style.display="none",xr.style.display="none",e.style.display="flex",document.getElementById("terms-accept-btn").onclick=async()=>{e.style.display="none",xr.style.display="flex",await xe(n,{termsAccepted:!0,termsAcceptedAt:Date.now()}),Od()},document.getElementById("terms-decline-btn").onclick=async()=>{e.style.display="none",await rh(zt),Dr()}}function Pn(n,e){n.textContent=e,n.classList.add("show")}async function Od(){try{const n=ie(te,"users",J.uid);ks=Js(n,async e=>{e.exists()?(K=e.data(),K.linkedTo?await $E(K.linkedTo):await UE()):(console.error("User document not found"),Dr())})}catch(n){console.error("Error loading user data:",n),Dr()}}async function UE(){const n=ie(te,"users",J.uid);ht&&ht(),ht=Js(n,e=>{e.exists()?(R=e.data(),De=R.privateLists||{},Gr=R.itemCategories||{},pn=R.storeColors||{},Fe=R.purchaseLog||[],Rs(),No()):(console.error("Own grocery data not found"),Dr())})}async function $E(n){const e=ie(te,"users",n),t=ie(te,"users",J.uid);ht&&ht(),lo&&lo(),ht=Js(e,r=>{r.exists()?(R=r.data(),pn=R.storeColors||{},Rs(),No()):(console.error("Linked account not found"),R=K,Rs(),No())}),lo=Js(t,r=>{if(r.exists()){const s=r.data();De=s.privateLists||{},Gr=s.itemCategories||{},Fe=s.purchaseLog||[],Rs()}})}function Rs(){var t;if(!K||!R)return;const n=Object.values(R.lists||{}).reduce((r,s)=>r+s.filter(i=>!i.checked).length,0),e=((t=R.stores)==null?void 0:t.length)||0;kE.textContent=`${e} stores • ${n} items`,zE(),me(),Kr(),Wt(),qa(),Ha()}function qE(){const n=document.getElementById("hamburger-menu");n.addEventListener("click",e=>{e.target===n&&toggleMenu()})}window.toggleMenu=function(){document.getElementById("hamburger-menu").classList.toggle("visible")};window.openSettings=function(){toggleMenu(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById("settings-tab").classList.add("active"),Ma.textContent="Settings",document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"))};window.openManageSharing=function(){toggleMenu(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById("manage-sharing-tab").classList.add("active"),Ma.textContent="Manage Sharing",document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),Fa()};function Fa(){const n=document.getElementById("manage-sharing-tab");if(!n||!K)return;const e=K.linkedTo!==null&&K.linkedTo!==void 0,t=K.linkedWith&&K.linkedWith.length>0;let r="";e?r=`
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
        ${t?jE():'<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No one yet. Add someone above!</p>'}
      </div>
    `,n.innerHTML=r}function jE(){let n="";const e=(K.linkedWith||[]).filter(t=>t&&typeof t=="string"&&t.includes("@")&&t.toLowerCase()!==J.email.toLowerCase());return console.log("Rendering shared with list:",e),console.log("Current user email:",J.email),console.log("Raw linkedWith:",K.linkedWith),e.length===0?'<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No one yet. Add someone above!</p>':(e.forEach(t=>{n+=`
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
    `}),n)}window.addShareFromManage=function(){const n=document.getElementById("manage-share-email"),e=n.value.trim();if(!e){uo("Please enter an email address","error");return}if(!e.includes("@")){uo("Please enter a valid email address","error");return}if(e===J.email){uo("You can't share with yourself!","error");return}Nd(e).then(()=>{n.value="",setTimeout(()=>Fa(),500)})};function uo(n,e="success"){const t=document.getElementById("manage-share-status");t&&(t.innerHTML=n,t.style.display="block",t.style.background=e==="error"?"#FEE2E2":"#D1FAE5",t.style.color=e==="error"?"#991B1B":"#065F46")}function zE(){const n=document.getElementById("share-indicator");if(!n)return;const e=K.linkedTo!==null&&K.linkedTo!==void 0,t=K.linkedWith&&K.linkedWith.length>0;e?(n.innerHTML=`
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

You'll return to your own empty lists.`))try{if(await xe(ie(te,"users",J.uid),{linkedTo:null}),K.linkedTo){const n=await Ti(ie(te,"users",K.linkedTo));if(n.exists()){const t=(n.data().linkedWith||[]).filter(r=>r!==J.email);await xe(ie(te,"users",K.linkedTo),{linkedWith:t})}}j("✓ Unlinked successfully! Returning to your own lists."),setTimeout(()=>window.location.reload(),1e3)}catch(n){console.error("Error unlinking:",n),j("Failed to unlink","error")}};window.showQuickShare=function(){const n=prompt("Enter email address to share with:");if(n){if(!n.includes("@")){alert("Please enter a valid email address");return}if(n===J.email){alert("You can't share with yourself!");return}Nd(n)}};async function Nd(n){n=n.trim().toLowerCase();try{j("Searching for account...");const e=gi(te,"users"),t=Ei(e,Ii("email","==",n)),r=await bi(t);if(r.empty){alert(`No account found with email: ${n}

Ask them to create an account first, then try again.`);return}const s=r.docs[0],i=s.id,a=s.data();if(a.linkedTo===J.uid){alert(`${n} is already linked to your account!`);return}if(a.linkedTo){alert(`${n} is already linked to another account.

They must unlink first before you can share with them.`);return}if(a.linkedWith&&a.linkedWith.length>0){alert(`${n} is already sharing their lists with others.

They cannot be added to your shared lists.`);return}await xe(ie(te,"users",i),{linkedTo:J.uid});const c=[...K.linkedWith||[]];c.includes(n)||c.push(n),await xe(ie(te,"users",J.uid),{linkedWith:c}),j(`✓ Successfully linked with ${n}!`)}catch(e){console.error("Error sharing:",e),alert("Failed to send invite. Please try again.")}}window.unlinkUser=async function(n){if(confirm(`Remove ${n} from shared lists?

They will return to their own lists.`))try{j("Removing access...");const e=gi(te,"users"),t=Ei(e,Ii("email","==",n)),r=await bi(t);if(!r.empty){const c=r.docs[0].id;await xe(ie(te,"users",c),{linkedTo:null})}const s=(K.linkedWith||[]).filter(a=>a!==n);await xe(ie(te,"users",J.uid),{linkedWith:s}),j(`✓ Removed ${n} from shared lists`);const i=document.getElementById("manage-sharing-tab");i&&i.classList.contains("active")&&setTimeout(()=>Fa(),500)}catch(e){console.error("Error unlinking user:",e),j("Failed to remove user","error")}};function Dr(){xr.style.display="none",Vd.style.display="block",Ai.style.display="none",en.disabled=!1,en.textContent="Sign In",tn.disabled=!1,tn.textContent="Create Account",document.getElementById("login-email").value="",document.getElementById("login-password").value="",document.getElementById("signup-email").value="",document.getElementById("signup-password").value=""}function No(){xr.style.display="none",Vd.style.display="none",Ai.style.display="block"}function WE(){const n=document.querySelectorAll(".nav-item"),e={lists:document.getElementById("lists-tab"),stores:document.getElementById("stores-tab"),history:document.getElementById("history-tab"),feed:document.getElementById("feed-tab")},t={lists:"My Lists",stores:"Manage Stores",history:"Item History",feed:"Smart Feed"},r=document.getElementById("fab-add-btn");n.forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.tab;st&&(st=!1,un=null),n.forEach(u=>u.classList.remove("active")),s.classList.add("active"),Object.values(e).forEach(u=>u.classList.remove("active"));const a=document.getElementById("manage-sharing-tab"),c=document.getElementById("settings-tab");a&&a.classList.remove("active"),c&&c.classList.remove("active"),e[i]&&e[i].classList.add("active"),Ma.textContent=t[i]||i,r&&(r.style.display=i==="lists"?"flex":"none")})})}function HE(){document.getElementById("fab-add-btn").addEventListener("click",GE)}function GE(){const n=An==="private";document.getElementById("add-modal-title").textContent=n?"Add Private Items":"Add Items",Ue=[];const e=document.getElementById("modal-store-selector");e.innerHTML="",((R==null?void 0:R.stores)||[]).forEach(t=>{const r=document.createElement("div");r.className="store-chip",r.textContent=t,r.addEventListener("click",()=>r.classList.toggle("selected")),e.appendChild(r)}),document.getElementById("modal-item-name").value="",document.getElementById("modal-quantity-display").textContent="1",Ba(),document.getElementById("add-modal").classList.add("visible"),ja("modal-item-name","modal-item-name-autocomplete",Mo),"ontouchstart"in window&&document.getElementById("modal-item-name").blur()}function Ps(){document.getElementById("add-modal").classList.remove("visible"),Ue=[]}function Ba(){const n=document.getElementById("modal-pending-section"),e=document.getElementById("modal-pending-list"),t=document.getElementById("modal-pending-count");n.style.display=Ue.length===0?"none":"block",Ue.length!==0&&(t.textContent=`(${Ue.length})`,e.innerHTML=Ue.map((r,s)=>`
    <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--bg-main); border-radius:10px;">
      <span style="font-weight:500; font-size:0.95rem;">${r.name}</span>
      <div style="display:flex; align-items:center; gap:10px;">
        ${r.quantity>1?`<span style="font-size:0.85rem; color:var(--primary); font-weight:600;">×${r.quantity}</span>`:""}
        <button onclick="window.removePendingItem(${s})" style="background:none; border:none; color:#94a3b8; font-size:1.1rem; cursor:pointer; padding:2px 4px; line-height:1;">×</button>
      </div>
    </div>
  `).join(""))}window.removePendingItem=function(n){Ue.splice(n,1),Ba()};function KE(){document.getElementById("modal-add-btn").addEventListener("click",Mo),document.getElementById("modal-save-btn").addEventListener("click",QE),document.getElementById("modal-cancel-btn").addEventListener("click",Ps),document.getElementById("modal-close-x-btn").addEventListener("click",Ps),document.getElementById("modal-qty-minus").addEventListener("click",()=>adjustModalQuantity(-1)),document.getElementById("modal-qty-plus").addEventListener("click",()=>adjustModalQuantity(1)),document.getElementById("modal-item-name").addEventListener("keypress",n=>{n.key==="Enter"&&Mo()}),document.getElementById("add-modal").addEventListener("click",n=>{n.target.id==="add-modal"&&Ps()})}window.adjustModalQuantity=function(n){const e=document.getElementById("modal-quantity-display");let t=parseInt(e.textContent)||1;t=Math.max(1,Math.min(99,t+n)),e.textContent=t};function Mo(){const n=document.getElementById("modal-item-name"),e=n.value.trim();if(!e){j("Please enter an item name","error");return}const{name:t,quantity:r}=qd(e),s=parseInt(document.getElementById("modal-quantity-display").textContent)||1,i=e!==t?r:s,a=t,c=Ue.find(d=>d.name.toLowerCase()===a.toLowerCase());c?c.quantity+=i:Ue.push({name:a,quantity:i}),n.value="",document.getElementById("modal-quantity-display").textContent="1","ontouchstart"in window||n.focus();const u=document.getElementById("modal-add-feedback");u&&(u.classList.add("show"),setTimeout(()=>u.classList.remove("show"),1200)),Ba()}async function QE(){if(Ue.length===0){j("No items to add","error");return}const n=Array.from(document.querySelectorAll("#modal-store-selector .store-chip.selected")).map(e=>e.textContent);if(n.length===0){j("Please select at least one store","error");return}try{const e=An==="private",t=e?De:R.lists,r=[];Ue.forEach(({name:s,quantity:i})=>{n.forEach(a=>{t[a]||(t[a]=[]);const c=t[a].find(u=>u.name.toLowerCase()===s.toLowerCase());c?c.quantity=(c.quantity||1)+i:t[a].push({name:s,checked:!1,quantity:i,isFavorite:ft().includes(s)})}),R.history.includes(s)||R.history.push(s),!e&&!qe(s)&&r.push(s)}),e?(await _t(),await Ee()):await Ee(),j(`✓ Added ${Ue.length} item${Ue.length>1?"s":""} to ${n.length} store${n.length>1?"s":""}`),Ps(),r.length>0&&setTimeout(()=>showCategoryPrompt(r[0]),400)}catch(e){console.error("Error adding items:",e),j("Failed to add items","error")}}let Ua=0,$a=0;function Md(n){const e=n.target.closest("[data-action]");if(!e)return;const t=e.dataset.action,r=e.dataset.store,s=e.dataset.private==="true";t==="toggle-store"?toggleStore(r,s):t==="bought"?(n.stopPropagation(),removeBoughtItems(r,s)):t==="clear"?(n.stopPropagation(),clearList(r,!1)):t==="clear-private"&&(n.stopPropagation(),clearList(r,!0))}function Fd(n){const e=n.target.closest("[data-action]");if(!e)return;const t=n.changedTouches[0].clientY,r=Date.now(),s=Math.abs(t-Ua),i=r-$a;if(s>10||i>300)return;n.preventDefault();const a=e.dataset.action,c=e.dataset.store,u=e.dataset.private==="true";a==="toggle-store"?toggleStore(c,u):a==="bought"?(n.stopPropagation(),removeBoughtItems(c,u)):a==="clear"?(n.stopPropagation(),clearList(c,!1)):a==="clear-private"&&(n.stopPropagation(),clearList(c,!0))}function me(){const n=document.getElementById("lists-tab");if(!n||!K)return;const e=localStorage.getItem("expandedStores");if(e&&(ct=new Set(JSON.parse(e))),n.innerHTML=`
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 0;">
      <div class="lists-subtabs" style="flex: 1;">
        <button class="lists-subtab ${An==="shared"?"active":""}" data-subtab="shared"><span class="tab-icon">👥</span>Shared</button>
        <button class="lists-subtab ${An==="private"?"active":""}" data-subtab="private"><span class="tab-icon">🔒</span>Private</button>
      </div>
      <button id="sort-toggle-btn" style="white-space: nowrap; padding: 6px 12px; border: 2px solid var(--border); border-radius: 8px; background: var(--bg-card); color: var(--text-secondary); font-size: 0.8rem; font-weight: 600; cursor: pointer; flex-shrink: 0;">
        ${bn==="az"?"A–Z":"⊞ Category"}
      </button>
    </div>
    <div id="lists-subtab-content"></div>
  `,n.querySelectorAll(".lists-subtab").forEach(t=>{t.addEventListener("click",()=>{An=t.dataset.subtab,me()})}),n.querySelector("#sort-toggle-btn").addEventListener("click",()=>{bn=bn==="az"?"category":"az",localStorage.setItem("listSortMode",bn),me()}),!document.getElementById("lists-styles")){const t=document.createElement("style");t.id="lists-styles",t.textContent=`
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
      .category-divider { font-size: 0.72rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 2px 4px; margin-top: 4px; }
      .category-divider:first-child { margin-top: 0; padding-top: 0; }
    `,document.head.appendChild(t)}An==="shared"?JE():XE()}function Bd(n){return[...n].sort((e,t)=>{if(e.checked!==t.checked)return e.checked?1:-1;if(bn==="category"){const r=Xs.indexOf(qe(e.name)),s=Xs.indexOf(qe(t.name)),i=r===-1?999:r,a=s===-1?999:s;if(i!==a)return i-a}return e.name.localeCompare(t.name)})}function YE(n){return Tn==="category"?[...n].sort((e,t)=>{const r=Xs.indexOf(qe(e)),s=Xs.indexOf(qe(t)),i=r===-1?999:r,a=s===-1?999:s;return i!==a?i-a:e.toLowerCase().localeCompare(t.toLowerCase())}):[...n].sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))}function Ud(n,e,t,r){if(n.innerHTML="",bn!=="category"){e.forEach((i,a)=>n.appendChild(pu(i,t,a,r)));return}let s=null;e.forEach((i,a)=>{if(!i.checked){const c=qe(i.name);if(c!==s){s=c;const u=document.createElement("div");u.className="category-divider";const d=c?mn[c]:null;u.textContent=d?`${d.emoji} ${d.label}`:"• Other",n.appendChild(u)}}n.appendChild(pu(i,t,a,r))})}function $d(n,e,t,r,s){const i=e.filter(v=>!v.checked).length,a=e.filter(v=>v.checked).length,c=a>0?`<button class="store-action-btn btn-done" data-store="${n}" data-action="bought" data-private="${s}">✓ Remove Bought (${a})</button>`:"",u=s?"clear-private":"clear",d=pn[n]||null,p=d?`border-left:4px solid ${d};`:"",g=d?`background:linear-gradient(90deg, ${d}22 0%, var(--bg-main) 100%);`:"";return`
    <div class="card store-card" style="${p}">
      <div class="store-header" data-store="${n}" data-action="toggle-store" data-private="${s}" style="${g}">
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
              ${ft().length>0?ft().map(v=>`
                <div class="history-dropdown-item">
                  <input type="checkbox" id="hist-${t}-${v.replace(/\s+/g,"-")}" value="${v}">
                  <label for="hist-${t}-${v.replace(/\s+/g,"-")}">⭐ ${v}</label>
                </div>
              `).join(""):'<div style="padding: 20px; text-align: center; color: var(--text-secondary);">No favorites yet!<br>Star items to add them here.</div>'}
            </div>
            ${ft().length>0?`
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
  `}function JE(){const n=document.getElementById("lists-subtab-content");if(!n)return;let e="";if(R.stores.length===0)e='<div class="card"><div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet. Add some in the Stores tab!</p></div></div>';else{let t=!1;R.stores.forEach(r=>{const s=R.lists[r]||[];if(s.length===0)return;t=!0;const i=r.replace(/\s+/g,"-"),a=ct.has(r);e+=$d(r,s,i,a,!1)}),t||(e='<div class="card"><div class="empty-state"><div class="empty-icon">📝</div><p>No items yet. Tap + to add some!</p></div></div>')}n.innerHTML=e,n.addEventListener("click",Md),n.addEventListener("touchstart",t=>{Ua=t.touches[0].clientY,$a=Date.now()},{passive:!0}),n.addEventListener("touchend",Fd),R.stores.forEach(t=>{const r=R.lists[t]||[],s=t.replace(/\s+/g,"-"),i=Bd(r),a=document.getElementById(`list-${s}`);a&&i.length>0&&Ud(a,i,t,!1),setTimeout(()=>{ja(`quick-add-${s}`,`quick-add-${s}-autocomplete`);const c=document.getElementById(`quick-add-${s}`);c&&c.addEventListener("keypress",u=>{u.key==="Enter"&&quickAddItem(t,s,!1)})},0)})}function XE(){const n=document.getElementById("lists-subtab-content");if(!n)return;let e="";if(R.stores.length===0)e='<div class="card"><div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet. Add some in the Stores tab!</p></div></div>';else{let t=!1;R.stores.forEach(r=>{const s=De[r]||[];if(s.length===0)return;t=!0;const i="priv-"+r.replace(/\s+/g,"-"),a=ct.has("priv:"+r);e+=$d(r,s,i,a,!0)}),t||(e='<div class="card"><div class="empty-state"><div class="empty-icon">🔒</div><p>No private items yet. Tap + to add some!</p></div></div>')}n.innerHTML=e,n.addEventListener("click",Md),n.addEventListener("touchstart",t=>{Ua=t.touches[0].clientY,$a=Date.now()},{passive:!0}),n.addEventListener("touchend",Fd),R.stores.forEach(t=>{const r=De[t]||[],s="priv-"+t.replace(/\s+/g,"-"),i=Bd(r),a=document.getElementById(`list-${s}`);a&&i.length>0&&Ud(a,i,t,!0),setTimeout(()=>{ja(`quick-add-${s}`,`quick-add-${s}-autocomplete`);const c=document.getElementById(`quick-add-${s}`);c&&c.addEventListener("keypress",u=>{u.key==="Enter"&&quickAddItem(t,s,!0)})},0)})}window.toggleListHistory=function(n){document.getElementById(`history-dropdown-${n}`).classList.toggle("visible")};window.closeListHistory=function(n){document.getElementById(`history-dropdown-${n}`).classList.remove("visible")};window.addSelectedFromHistory=async function(n,e){const t=Array.from(document.querySelectorAll(`#history-dropdown-${e} input:checked`)).map(r=>r.value);if(t.length===0){j("Please select at least one item","error");return}t.forEach(r=>{R.lists[n]||(R.lists[n]=[]);const s=R.lists[n].find(i=>i.name.toLowerCase()===r.toLowerCase());s?s.quantity=(s.quantity||1)+1:R.lists[n].push({name:r,checked:!1,quantity:1,isFavorite:!0})}),await Ee(),j(`✓ Added ${t.length} favorite(s) to ${n}`),closeListHistory(e),me()};function qd(n){const e=n.match(/^(\d+)\s+(.+)$/);if(e)return{name:e[2].trim(),quantity:parseInt(e[1])};const t=n.match(/^(.+?)\s*[xX](\d+)$/);if(t)return{name:t[1].trim(),quantity:parseInt(t[2])};const r=n.match(/^(.+?)\s+(\d+)$/);return r?{name:r[1].trim(),quantity:parseInt(r[2])}:{name:n.trim(),quantity:1}}window.quickAddItem=async function(n,e,t=!1){const r=document.getElementById(`quick-add-${e}`),s=r.value.trim();if(!s){j("Please enter an item name","error");return}const{name:i,quantity:a}=qd(s),c=t?De:R.lists;c[n]||(c[n]=[]);const u=c[n].find(d=>d.name.toLowerCase()===i.toLowerCase());if(u){u.quantity=(u.quantity||1)+a,t?await _t():await Ee(),j(`✓ "${i}" quantity updated to ${u.quantity}`),r.value="",me();return}c[n].push({name:i,checked:!1,quantity:a,isFavorite:ft().includes(i)}),R.history.includes(i)||R.history.push(i),t?(await _t(),await Ee()):await Ee(),j(`✓ Added "${i}"${a>1?` (${a})`:""} to ${n}`),r.value="",me(),!t&&!qe(i)&&setTimeout(()=>showCategoryPrompt(i),400)};document.addEventListener("click",n=>{!n.target.closest(".history-dropdown-btn")&&!n.target.closest(".history-dropdown-content")&&document.querySelectorAll(".history-dropdown-content").forEach(e=>{e.classList.remove("visible")})});function qa(){const n=document.getElementById("settings-tab");if(!n||!K)return;const e=document.documentElement.getAttribute("data-theme")==="dark";let t=`
    <div class="card">
      <div class="card-title">Appearance</div>
      <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; background:var(--bg-main); border-radius:12px;">
        <div>
          <div style="font-weight:600;">Dark Mode</div>
          <div style="font-size:0.85rem; color:var(--text-secondary);">Easier on the eyes at night</div>
        </div>
        <button onclick="toggleDarkMode()" style="
          position:relative; width:52px; height:28px; border-radius:14px; border:none; cursor:pointer;
          background:${e?"var(--primary)":"var(--border)"}; transition:background 0.2s; flex-shrink:0;
        ">
          <span style="
            position:absolute; top:3px; ${e?"right:3px":"left:3px"};
            width:22px; height:22px; border-radius:50%; background:white;
            transition:all 0.2s; display:block;
          "></span>
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Account</div>
      <div style="padding: 12px; background: var(--bg-main); border-radius: 12px; margin-bottom: 12px;">
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">Signed in as:</div>
        <div style="font-weight: 600;">${J.email}</div>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-secondary); padding: 12px; background: var(--bg-main); border-radius: 8px;">
        <strong>Version:</strong> 2.0<br>
        <strong>Build:</strong> Firebase Sync
      </div>
    </div>
    <div class="card" style="border: 1px solid #fee2e2;">
      <div class="card-title" style="color: #dc2626;">Danger Zone</div>
      <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 16px;">Permanently delete your account and all associated data. This cannot be undone.</p>
      <button onclick="window.showDeleteAccountModal()" style="width:100%; padding:12px; background:white; color:#dc2626; border:1.5px solid #dc2626; border-radius:10px; font-size:0.9rem; font-weight:600; cursor:pointer;">
        🗑️ Delete My Account
      </button>
    </div>
  `;n.innerHTML=t}window.sendShareInvite=async function(){const n=document.getElementById("share-email"),e=n.value.trim().toLowerCase(),t=document.getElementById("share-status");if(!e){kt(t,"Please enter an email address","error");return}if(e===J.email){kt(t,"You can't share with yourself!","error");return}if(!e.includes("@")){kt(t,"Please enter a valid email address","error");return}try{console.log("Searching for user with email:",e);const r=gi(te,"users"),s=Ei(r,Ii("email","==",e));console.log("Executing query...");const i=await bi(s);if(console.log("Query results:",i.size,"documents found"),i.empty){kt(t,`No account found with email: ${e}<br><br>Ask them to create an account first, then try again.`,"error");return}const a=i.docs[0],c=a.id,u=a.data();if(console.log("Found user:",c,u),u.linkedTo===J.uid){kt(t,`${e} is already linked to your account!`,"error");return}if(u.linkedTo){kt(t,`${e} is already linked to another account. They must unlink first.`,"error");return}console.log("Linking accounts..."),await xe(ie(te,"users",c),{linkedTo:J.uid}),console.log("Target user updated");const d=[...K.linkedWith||[]];d.includes(e)||d.push(e),await xe(ie(te,"users",J.uid),{linkedWith:d}),console.log("Own user updated"),kt(t,`✓ Successfully linked with ${e}!<br><br>They will now see your grocery lists when they log in.`,"success"),n.value="",j(`✓ Linked with ${e}!`),setTimeout(()=>qa(),1e3)}catch(r){console.error("Error sharing - Full error:",r),console.error("Error code:",r.code),console.error("Error message:",r.message),kt(t,`Failed to send invite: ${r.message}<br><br>Check console for details.`,"error")}};function kt(n,e,t="success"){n.innerHTML=e,n.style.display="block",n.style.background=t==="error"?"#FEE2E2":"#D1FAE5",n.style.color=t==="error"?"#991B1B":"#065F46",n.style.padding="12px",n.style.borderRadius="8px"}function pu(n,e,t,r=!1){n.quantity||(n.quantity=1),n.isFavorite===void 0&&(n.isFavorite=!1);const s=r?_t:Ee,i=document.createElement("div");i.className="grocery-item-container";const a=document.createElement("div");a.className="swipe-bg swipe-right",a.textContent="✓",i.appendChild(a);const c=document.createElement("div");c.className="swipe-bg swipe-left",c.textContent="🗑️",i.appendChild(c);const u=document.createElement("div");u.className="grocery-item"+(n.checked?" checked":"");const d=document.createElement("input");d.type="checkbox",d.checked=n.checked||!1,d.addEventListener("change",async()=>{n.checked=d.checked,u.classList.toggle("checked",d.checked),await s(),d.checked?(u.classList.add("checking-out"),setTimeout(()=>me(),360)):me()});const p=document.createElement("div");p.className="item-name-wrapper",p.style.flex="1",p.style.display="flex",p.style.alignItems="center",p.style.gap="8px",p.style.cursor="pointer",p.style.userSelect="none",p.addEventListener("click",()=>{const L=i.querySelector(".qty-controls-inline");L.classList.contains("expanded")?L.classList.remove("expanded"):(document.querySelectorAll(".qty-controls-inline.expanded").forEach(ue=>{ue.classList.remove("expanded")}),L.classList.add("expanded"),L.querySelector(".qty-display").textContent=n.quantity,L.querySelector(".favorite-checkbox").checked=n.isFavorite)});const g=document.createElement("span");if(g.textContent=n.name,g.style.fontWeight="500",p.appendChild(g),n.quantity>1){const L=document.createElement("span");L.className="quantity-badge",L.textContent=`(get ${n.quantity})`,p.appendChild(L)}if(n.isFavorite){const L=document.createElement("span");L.className="favorite-indicator",L.innerHTML="⭐",L.style.fontSize="1.2rem",L.style.cursor="pointer",L.style.marginLeft="4px",L.title="Click to edit",L.addEventListener("click",X=>{X.stopPropagation();const ue=i.querySelector(".qty-controls-inline");document.querySelectorAll(".qty-controls-inline.expanded").forEach(ne=>{ne.classList.remove("expanded")}),ue.classList.add("expanded"),ue.querySelector(".qty-display").textContent=n.quantity,ue.querySelector(".favorite-checkbox").checked=n.isFavorite}),u.appendChild(d),u.appendChild(p),u.appendChild(L)}else u.appendChild(d),u.appendChild(p);const v=document.createElement("div");v.className="qty-controls-inline";let S=n.quantity,x=n.isFavorite;v.innerHTML=`
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
      <div style="display:flex; gap:8px;">
        <button class="qty-inline-ok" style="flex:1;">OK</button>
        <button class="qty-inline-remove" style="padding:10px 16px; border:none; border-radius:10px; background:var(--danger); color:white; font-weight:600; cursor:pointer; font-size:0.9rem;">🗑️ Remove</button>
      </div>
    </div>
  `,v.querySelector(".qty-minus").addEventListener("click",L=>{L.stopPropagation(),S>1&&(S--,v.querySelector(".qty-display").textContent=S)}),v.querySelector(".qty-plus").addEventListener("click",L=>{L.stopPropagation(),S++,v.querySelector(".qty-display").textContent=S}),v.querySelector(".favorite-checkbox").addEventListener("change",L=>{L.stopPropagation(),x=L.target.checked}),v.querySelector(".qty-inline-remove").addEventListener("click",L=>{L.stopPropagation(),v.classList.remove("expanded"),gu(n.name,e,r)}),v.querySelector(".qty-inline-ok").addEventListener("click",async L=>{L.stopPropagation(),n.quantity=S,n.isFavorite=x,mu(n.name,"quantity",S,r),mu(n.name,"isFavorite",x,r),await s(),v.classList.remove("expanded"),me()});let V=0,P=0,F=!1;const z=60;return u.addEventListener("touchstart",L=>{V=L.touches[0].clientX,P=L.touches[0].clientY,F=!1,u.style.transition=""},{passive:!0}),u.addEventListener("touchmove",L=>{const X=L.touches[0].clientX-V,ue=L.touches[0].clientY-P;if(!F&&Math.abs(ue)>10)return;F=!0;const ne=Math.max(-120,Math.min(120,X));u.style.transform=`translateX(${ne}px)`;const w=Math.min(Math.abs(ne)/z,1);X>0?(a.style.opacity=w,c.style.opacity="0"):(c.style.opacity=w,a.style.opacity="0")},{passive:!0}),u.addEventListener("touchend",L=>{const X=L.changedTouches[0].clientX-V;u.style.transition="transform 0.2s ease",u.style.transform="translateX(0)",a.style.opacity="0",c.style.opacity="0",F&&(F=!1,X>=z?(d.checked=!d.checked,n.checked=d.checked,u.classList.toggle("checked",d.checked),s().then(()=>{d.checked?(u.classList.add("checking-out"),setTimeout(()=>me(),360)):me()})):X<=-z&&gu(n.name,e,r))},{passive:!0}),i.appendChild(u),i.appendChild(v),i}function mu(n,e,t,r=!1){const s=r?De:R.lists;R.stores.forEach(i=>{const c=(s[i]||[]).find(u=>u.name.toLowerCase()===n.toLowerCase());c&&(c[e]=t)})}function ft(){const n=new Set;return R.stores.forEach(e=>{(R.lists[e]||[]).forEach(r=>{r.isFavorite&&n.add(r.name)})}),Array.from(n).sort()}window.setHistoryFilter=function(n){window.historyFilter=n,Wt()};let rt=null,xs=!1;window.removeBoughtItems=function(n,e=!1){const t=e?De:R.lists,s=(t[n]||[]).filter(c=>c.checked);if(s.length===0){j("No bought items to remove","error");return}rt=n,xs=e;const i=s.filter(c=>R.stores.filter(u=>(t[u]||[]).some(d=>d.name.toLowerCase()===c.name.toLowerCase())).length>1);s.filter(c=>!i.includes(c));const a=document.getElementById("bought-modal-body");document.getElementById("bought-modal-store").textContent=n,i.length===0?a.innerHTML=`
      <p style="color: var(--text-secondary); margin: 0 0 10px; font-size: 0.9rem;">All items will be removed from <strong>${n}</strong>:</p>
      ${s.map(c=>`
        <div class="bought-item-row" data-item-name="${c.name.replace(/"/g,"&quot;")}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div class="bought-item-name">${c.name}${c.quantity>1?` (${c.quantity})`:""}</div>
            <span style="font-size:0.78rem; color:var(--text-secondary); font-weight:600;">${n} only</span>
          </div>
        </div>
      `).join("")}
    `:(a.innerHTML=`
      ${i.length>0?'<p style="color: var(--text-secondary); margin: 0 0 10px; font-size: 0.9rem;">Items marked <em>in multiple stores</em> — choose where to remove:</p>':""}
      ${s.map(c=>{const u=i.includes(c),d=c.name.replace(/"/g,"&quot;"),p=`${c.name}${c.quantity>1?` (${c.quantity})`:""}`;return u?`
            <div class="bought-item-row" data-item-name="${d}">
              <div class="bought-item-name">${p}</div>
              <div class="bought-item-options">
                <button class="bought-opt-btn active" data-scope="all">All Stores</button>
                <button class="bought-opt-btn" data-scope="one">${n} only</button>
              </div>
            </div>
          `:`
            <div class="bought-item-row" data-item-name="${d}">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div class="bought-item-name">${p}</div>
                <span style="font-size:0.78rem; color:var(--text-secondary); font-weight:600;">${n} only</span>
              </div>
            </div>
          `}).join("")}
    `,a.querySelectorAll(".bought-item-row").forEach(c=>{c.querySelectorAll(".bought-opt-btn").forEach(u=>{u.addEventListener("click",()=>{c.querySelectorAll(".bought-opt-btn").forEach(d=>d.classList.remove("active")),u.classList.add("active")})})})),document.getElementById("bought-modal").classList.add("visible")};function ZE(){document.getElementById("bought-confirm-btn").addEventListener("click",async()=>{const n=xs?De:R.lists,e=xs?[]:(n[rt]||[]).filter(r=>r.checked).map(r=>r.name);document.querySelectorAll("#bought-modal-body .bought-item-row").forEach(r=>{const s=r.dataset.itemName,i=r.querySelector(".bought-opt-btn.active");if(!i)return;i.dataset.scope==="all"?R.stores.forEach(c=>{n[c]&&(n[c]=n[c].filter(u=>u.name.toLowerCase()!==s.toLowerCase()))}):n[rt]&&(n[rt]=n[rt].filter(c=>c.name.toLowerCase()!==s.toLowerCase()))});const t=new Set(Array.from(document.querySelectorAll("#bought-modal-body .bought-item-row")).map(r=>r.dataset.itemName.toLowerCase()));n[rt]&&(n[rt]=n[rt].filter(r=>r.checked?(t.has(r.name.toLowerCase()),!1):!0)),xs?await _t():await Ee(),e.length>0&&Wd(e,rt),j("✓ Removed bought items"),document.getElementById("bought-modal").classList.remove("visible"),me()}),document.getElementById("bought-cancel-btn").addEventListener("click",()=>{document.getElementById("bought-modal").classList.remove("visible")}),document.getElementById("bought-modal").addEventListener("click",n=>{n.target.id==="bought-modal"&&document.getElementById("bought-modal").classList.remove("visible")})}window.toggleStore=function(n,e=!1){const t=e?"priv:"+n:n;ct.has(t)?ct.delete(t):ct.add(t),localStorage.setItem("expandedStores",JSON.stringify([...ct])),me()};window.clearList=async function(n,e=!1){const t=document.getElementById("clear-modal");document.getElementById("clear-store-name").textContent=n,t.dataset.store=n,t.dataset.private=e?"true":"false",t.classList.add("visible")};document.getElementById("clear-confirm-btn").addEventListener("click",async()=>{const n=document.getElementById("clear-modal"),e=n.dataset.store,t=n.dataset.private==="true";if(e){if(t)De[e]=[],await _t();else{const r=(R.lists[e]||[]).map(s=>s.name);R.lists[e]=[],await Ee(),r.length>0&&Wd(r,e)}j(`✓ Cleared ${e}`),n.classList.remove("visible"),n.dataset.store=""}});document.getElementById("clear-cancel-btn").addEventListener("click",()=>{const n=document.getElementById("clear-modal");n.classList.remove("visible"),n.dataset.store=""});document.getElementById("clear-modal").addEventListener("click",n=>{if(n.target.id==="clear-modal"){const e=document.getElementById("clear-modal");e.classList.remove("visible"),e.dataset.store=""}});let Ft=null,Xt=null,Bn=!1;function gu(n,e,t=!1){Ft=n,Xt=e,Bn=t;const r=document.getElementById("delete-modal");document.getElementById("delete-item-name").textContent=`"${n}"`;const s=t?De:R.lists,a=R.stores.filter(p=>(s[p]||[]).some(g=>g.name.toLowerCase()===n.toLowerCase())).length>1,c=document.getElementById("delete-all-btn"),u=document.getElementById("delete-store-name"),d=document.getElementById("delete-modal-subtitle");a?(c.style.display="",u.textContent=`📍 Only from ${e}`,d.style.display=""):(c.style.display="none",u.textContent="🗑️ Delete Item",d.style.display="none"),r.classList.add("visible")}function Si(){document.getElementById("delete-modal").classList.remove("visible"),Ft=null,Xt=null,Bn=!1}document.getElementById("delete-all-btn").addEventListener("click",async()=>{if(!Ft)return;const n=Bn?De:R.lists;R.stores.forEach(e=>{n[e]&&(n[e]=n[e].filter(t=>t.name.toLowerCase()!==Ft.toLowerCase()))}),Bn?await _t():await Ee(),j(`✓ Removed "${Ft}" from all stores`),Si()});document.getElementById("delete-one-btn").addEventListener("click",async()=>{if(!Ft||!Xt)return;const n=Bn?De:R.lists;n[Xt]&&(n[Xt]=n[Xt].filter(e=>e.name.toLowerCase()!==Ft.toLowerCase())),Bn?await _t():await Ee(),j(`✓ Removed "${Ft}" from ${Xt}`),Si()});document.getElementById("delete-cancel-btn").addEventListener("click",()=>{Si()});document.getElementById("delete-modal").addEventListener("click",n=>{n.target.id==="delete-modal"&&Si()});function Kr(){const n=document.getElementById("stores-tab");if(!n||!K)return;let e=`
    <div class="card">
      <div class="card-title">Add Store</div>
      <div style="display: flex; gap: 8px;">
        <input type="text" id="new-store-name" placeholder="e.g., Walmart" style="flex: 1; padding: 12px 14px; font-size: 0.95rem;">
        <button class="btn btn-primary" style="padding: 10px 16px; font-size: 0.85rem; white-space: nowrap;" onclick="addStore()">+ Add</button>
      </div>
    </div>
    <div class="card">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
        <div class="card-title" style="margin:0;">Your Stores</div>
        ${R.stores.length>0?`<button onclick="toggleStoresManageMode()" style="
          padding:6px 14px; border-radius:8px; border:2px solid ${st?"var(--danger)":"var(--border)"};
          background:${st?"var(--danger)":"transparent"};
          color:${st?"white":"var(--text-secondary)"};
          font-size:0.85rem; font-weight:600; cursor:pointer; transition:all 0.2s;
        ">${st?"Done":"Manage"}</button>`:""}
      </div>
  `;R.stores.length===0?e+='<div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet</p></div>':R.stores.forEach((t,r)=>{const s=(R.lists[t]||[]).length,i=pn[t]||null,a=un===t,c=t.replace(/'/g,"\\'"),u=i?`background:${i}; border-color:${i};`:"background:var(--bg-main); border:2px dashed var(--border);";e+=`
        <div class="store-item-compact" style="${i?`border-left:4px solid ${i};`:""}">
          <div style="display:flex; align-items:center; gap:10px; flex:1;">
            <button onclick="openStoreColorPicker('${c}')" title="Set store color" style="
              width:24px; height:24px; border-radius:50%; cursor:pointer; flex-shrink:0;
              transition:transform 0.15s; ${u}
            "></button>
            <div>
              <div class="store-name">${t}</div>
              <div class="store-meta">${s} item${s!==1?"s":""}</div>
            </div>
          </div>
          ${st?`<button class="btn" style="background:var(--danger); color:white; padding:4px 8px; font-size:0.7rem;" onclick="removeStore(${r})">Remove</button>`:""}
        </div>
        ${a?`
        <div style="padding:12px 16px; background:var(--bg-main); border-radius:12px; margin:-4px 0 8px; border:2px solid var(--border); display:flex; flex-wrap:wrap; gap:8px; align-items:center;">
          ${RE.map(d=>`
            <button onclick="setStoreColor('${c}','${d}')" title="${d}" style="
              width:32px; height:32px; border-radius:50%; background:${d}; cursor:pointer;
              border:3px solid ${i===d?"var(--text-primary)":"transparent"};
              transition:transform 0.15s;
            "></button>
          `).join("")}
          <input type="color" value="${i||"#0891B2"}" onchange="setStoreColor('${c}',this.value)"
            style="width:32px; height:32px; border-radius:50%; border:2px solid var(--border); cursor:pointer; padding:0;" title="Custom color">
          ${i?`<button onclick="clearStoreColor('${c}')" style="padding:4px 10px; border:1px solid var(--border); border-radius:8px; background:transparent; color:var(--text-secondary); font-size:0.75rem; cursor:pointer;">Clear</button>`:""}
        </div>`:""}
      `}),e+="</div>",n.innerHTML=e,setTimeout(()=>{const t=document.getElementById("new-store-name");t&&t.addEventListener("keypress",r=>{r.key==="Enter"&&addStore()})},0)}window.addStore=async function(){const n=document.getElementById("new-store-name"),e=n.value.trim();if(!e){j("Please enter a store name","error");return}if(R.stores.includes(e)){j("Store already exists","error");return}R.stores.push(e),R.lists[e]=[],await Ee(),j(`✓ Added ${e}`),n.value=""};window.removeStore=async function(n){const e=R.stores[n],t=(R.lists[e]||[]).length;t>0&&!confirm(`${e} has ${t} items. Delete anyway?`)||(R.stores.splice(n,1),delete R.lists[e],De[e]&&(delete De[e],await _t()),await Ee(),j(`✓ Removed ${e}`))};function Wt(){const n=document.getElementById("history-tab");if(!n||!K)return;window.historyFilter||(window.historyFilter="all");const e=ft();let t=[...R.history||[]];window.historyFilter==="favorites"&&(t=t.filter(a=>e.includes(a)));const r=YE(t);let s='<div class="card">';if(s+='<div class="list-header-compact">',s+='<div class="card-title" style="margin: 0;">Item History</div>',s+=`<button id="history-sort-btn" style="white-space: nowrap; padding: 6px 12px; border: 2px solid var(--border); border-radius: 8px; background: var(--bg-card); color: var(--text-secondary); font-size: 0.8rem; font-weight: 600; cursor: pointer; flex-shrink: 0;">${Tn==="az"?"A–Z":"⊞ Category"}</button>`,s+="</div>",s+=`
    <div style="display: flex; gap: 8px; margin: 16px 0; padding: 4px; background: var(--bg-main); border-radius: 8px;">
      <button class="filter-btn ${window.historyFilter==="all"?"active":""}" onclick="setHistoryFilter('all')" style="flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; ${window.historyFilter==="all"?"background: var(--primary); color: white;":"background: transparent; color: var(--text-secondary);"}">
        All (${R.history.length})
      </button>
      <button class="filter-btn ${window.historyFilter==="favorites"?"active":""}" onclick="setHistoryFilter('favorites')" style="flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; ${window.historyFilter==="favorites"?"background: var(--primary); color: white;":"background: transparent; color: var(--text-secondary);"}">
        ⭐ Favorites (${e.length})
      </button>
    </div>
  `,dt.size>0&&(s+=`
      <div style="background: var(--success); color: white; padding: 12px; border-radius: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 600;">${dt.size} items selected</span>
        <button class="btn btn-small" style="background: white; color: var(--success);" onclick="showBulkStoreSelector()">Add to Stores</button>
      </div>
    `),s+=`<div id="bulk-store-selector" style="display: none; background: var(--bg-card); padding: 16px; border: 2px solid var(--primary); border-radius: 12px; margin-bottom: 16px;">
    <div style="font-weight: 600; margin-bottom: 12px;">Select Stores:</div>
    <div class="store-selector" id="bulk-store-chips"></div>
    <div style="display: flex; gap: 8px; margin-top: 12px;">
      <button class="btn btn-primary" style="flex: 1;" onclick="addBulkItemsToStores()">Add Selected Items</button>
      <button class="btn btn-small" style="background: var(--text-secondary); color: white;" onclick="hideBulkStoreSelector()">Cancel</button>
    </div>
  </div>`,r.length===0){const a=window.historyFilter==="favorites"?'<div class="empty-state"><div class="empty-icon">⭐</div><p>No favorites yet<br><small style="opacity: 0.7;">Star items in your lists to add them here</small></p></div>':'<div class="empty-state"><div class="empty-icon">📜</div><p>No items in history yet</p></div>';s+=a}else{let a=null;r.forEach(c=>{const u=e.includes(c),d=qe(c),p=d?mn[d]:null,g=c.replace(/'/g,"\\'");if(Tn==="category"&&d!==a){a=d;const S=p?`${p.emoji} ${p.label}`:"📦 Other";s+=`<div class="category-divider">${S}</div>`}const v=p?`<button onclick="event.stopPropagation();showCategoryPrompt('${g}')" title="Change category: ${p.label}" style="background:none;border:none;font-size:1rem;opacity:0.7;cursor:pointer;padding:2px 4px;">${p.emoji}</button>`:`<button onclick="event.stopPropagation();showCategoryPrompt('${g}')" title="Categorize item" style="background:none;border:1px dashed var(--border);border-radius:6px;padding:2px 6px;cursor:pointer;font-size:0.75rem;color:var(--text-secondary);">+ tag</button>`;s+=`
        <div class="history-item bulk-mode" data-item="${c}" onclick="toggleHistoryCheckbox('${c}')">
          <input type="checkbox" class="history-checkbox" data-item="${c}" ${dt.has(c)?"checked":""} onchange="updateBulkSelection('${c}')">
          <div class="history-item-header">
            <span class="history-item-name">${u?"⭐ ":""}${c}</span>
            ${v}
          </div>
        </div>
      `})}s+="</div>",n.innerHTML=s,n.querySelectorAll(".history-item").forEach(a=>{let c;a.addEventListener("touchstart",()=>{c=setTimeout(()=>{const u=a.dataset.item;a.innerHTML=`
          <div style="display:flex; align-items:center; justify-content:space-between; width:100%; gap:8px;">
            <span style="font-size:0.88rem; color:var(--text-secondary);">Remove <strong>${u}</strong>?</span>
            <div style="display:flex; gap:6px; flex-shrink:0;">
              <button onclick="deleteHistoryItem('${u.replace(/'/g,"\\'")}')" style="padding:6px 14px; border:none; border-radius:8px; background:var(--danger); color:white; font-weight:600; cursor:pointer; font-size:0.85rem;">Remove</button>
              <button onclick="renderHistoryTab()" style="padding:6px 12px; border:none; border-radius:8px; background:var(--bg-main); color:var(--text-secondary); font-weight:600; cursor:pointer; font-size:0.85rem;">Cancel</button>
            </div>
          </div>`},500)},{passive:!0}),a.addEventListener("touchend",()=>clearTimeout(c),{passive:!0}),a.addEventListener("touchmove",()=>clearTimeout(c),{passive:!0})});const i=n.querySelector("#history-sort-btn");if(i&&i.addEventListener("click",()=>{Tn=Tn==="az"?"category":"az",localStorage.setItem("historySortMode",Tn),Wt()}),!document.getElementById("history-styles")){const a=document.createElement("style");a.id="history-styles",a.textContent=`
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
    `,document.head.appendChild(a)}}window.updateBulkSelection=function(n){dt.has(n)?dt.delete(n):dt.add(n),Wt()};window.toggleHistoryCheckbox=function(n){const e=document.querySelector(`.history-checkbox[data-item="${n}"]`);e&&(e.checked=!e.checked,updateBulkSelection(n))};window.showBulkStoreSelector=function(){const n=document.getElementById("bulk-store-selector"),e=document.getElementById("bulk-store-chips");e.innerHTML="",R.stores.forEach(t=>{const r=document.createElement("div");r.className="store-chip",r.textContent=t,r.addEventListener("click",()=>r.classList.toggle("selected")),e.appendChild(r)}),n.style.display="block"};window.hideBulkStoreSelector=function(){document.getElementById("bulk-store-selector").style.display="none"};window.addBulkItemsToStores=async function(){const n=Array.from(document.querySelectorAll("#bulk-store-chips .store-chip.selected")).map(t=>t.textContent);if(n.length===0){j("Please select at least one store","error");return}const e=ft();dt.forEach(t=>{const r=e.includes(t);n.forEach(s=>{R.lists[s]||(R.lists[s]=[]);const i=R.lists[s].find(a=>a.name.toLowerCase()===t.toLowerCase());i?i.quantity=(i.quantity||1)+1:R.lists[s].push({name:t,checked:!1,quantity:1,isFavorite:r})})}),await Ee(),j(`✓ Added ${dt.size} items to ${n.length} store(s)`),dt.clear(),Wt()};async function jd(){const n=K.linkedTo||J.uid;await xe(ie(te,"users",n),{storeColors:pn})}window.toggleStoresManageMode=function(){st=!st,un=null,Kr()};window.openStoreColorPicker=function(n){un=un===n?null:n,Kr()};window.setStoreColor=async function(n,e){pn[n]=e,un=null,await jd(),Kr(),me()};window.clearStoreColor=async function(n){delete pn[n],un=null,await jd(),Kr(),me()};window.toggleDarkMode=function(){document.documentElement.getAttribute("data-theme")==="dark"?(document.documentElement.removeAttribute("data-theme"),localStorage.setItem("darkMode","false")):(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("darkMode","true")),qa()};window.deleteHistoryItem=async function(n){R.history=(R.history||[]).filter(e=>e!==n),await Ee(),j(`Removed "${n}" from history`),Wt()};window.renderHistoryTab=Wt;function ja(n,e,t){const r=document.getElementById(n),s=document.getElementById(e);!r||!s||(r.addEventListener("input",i=>{const a=i.target.value.trim().toLowerCase();if(a.length===0){s.classList.remove("visible");return}const u=[...new Set([...PE,...(R==null?void 0:R.history)||[]])].filter(d=>d.toLowerCase().includes(a)).sort((d,p)=>{const g=d.toLowerCase().startsWith(a),v=p.toLowerCase().startsWith(a);return g&&!v?-1:!g&&v?1:d.toLowerCase().localeCompare(p.toLowerCase())});if(u.length===0){s.classList.remove("visible");return}s.innerHTML=u.slice(0,8).map((d,p)=>{const g=d.toLowerCase().indexOf(a),v=g>=0?d.slice(0,g)+`<strong>${d.slice(g,g+a.length)}</strong>`+d.slice(g+a.length):d;return`<div class="autocomplete-item" data-value="${d}" data-index="${p}">${v}</div>`}).join(""),s.classList.add("visible"),Me=-1}),r.addEventListener("keydown",i=>{const a=s.querySelectorAll(".autocomplete-item");if(i.key==="ArrowDown")i.preventDefault(),Me=Math.min(Me+1,a.length-1),yu(a);else if(i.key==="ArrowUp")i.preventDefault(),Me=Math.max(Me-1,-1),yu(a);else if(i.key==="Enter"&&Me>=0){i.preventDefault();const c=a[Me];c&&(r.value=c.dataset.value,s.classList.remove("visible"),Me=-1,t&&t())}else i.key==="Escape"&&(s.classList.remove("visible"),Me=-1)}),s.addEventListener("pointerdown",i=>{const a=i.target.closest(".autocomplete-item");a&&(i.preventDefault(),r.value=a.dataset.value,s.classList.remove("visible"),Me=-1,t&&t())}),document.addEventListener("click",i=>{!r.contains(i.target)&&!s.contains(i.target)&&(s.classList.remove("visible"),Me=-1)}))}function yu(n){n.forEach((e,t)=>{e.classList.toggle("selected",t===Me),t===Me&&e.scrollIntoView({block:"nearest"})})}const _u={restock:{bg:"#f0fdf4",border:"#22c55e",icon:"#dcfce7"},building:{bg:"#eff6ff",border:"#3b82f6",icon:"#dbeafe"},consolidate:{bg:"#fffbeb",border:"#f59e0b",icon:"#fef3c7"},uncategorized:{bg:"#faf5ff",border:"#a855f7",icon:"#f3e8ff"},due:{bg:"#fff7ed",border:"#f97316",icon:"#ffedd5"},havent:{bg:"#f0fdfa",border:"#14b8a6",icon:"#ccfbf1"},pattern:{bg:"#eef2ff",border:"#6366f1",icon:"#e0e7ff"},together:{bg:"#f0fdf4",border:"#10b981",icon:"#d1fae5"}};function zd(){const n=JSON.parse(localStorage.getItem("feedDismissed")||"{}"),e=Date.now(),t=24*60*60*1e3;return Object.keys(n).forEach(r=>{e-n[r]>t&&delete n[r]}),n}window.dismissFeedCard=function(n){const e=zd();e[n]=Date.now(),localStorage.setItem("feedDismissed",JSON.stringify(e)),Ha()};window.feedAddToStore=async function(n,e){R.lists[e]||(R.lists[e]=[]);const t=R.lists[e].find(r=>r.name.toLowerCase()===n.toLowerCase());t?t.quantity=(t.quantity||1)+1:R.lists[e].push({name:n,checked:!1,quantity:1,isFavorite:ft().includes(n)}),R.history.includes(n)||R.history.push(n),await Ee(),j(`✓ Added "${n}" to ${e}`),Ha(),me()};window.feedSwitchToLists=function(n){var e;(e=document.querySelector('.nav-item[data-tab="lists"]'))==null||e.click(),n&&setTimeout(()=>{ct.add(n),localStorage.setItem("expandedStores",JSON.stringify([...ct])),me()},100)};window.feedSwitchToHistory=function(){var n;(n=document.querySelector('.nav-item[data-tab="history"]'))==null||n.click()};window.feedRemoveFromHistory=async function(n,e){R.history=R.history.filter(t=>t.toLowerCase()!==n.toLowerCase()),await Ee(),window.dismissFeedCard(e)};function za(n){const e=n.toLowerCase();return Fe.filter(t=>t.items.some(r=>r.toLowerCase()===e))}function Wa(n){if(n.length<2)return null;const e=[...n].sort((r,s)=>r.ts-s.ts);let t=0;for(let r=1;r<e.length;r++)t+=e[r].ts-e[r-1].ts;return t/(e.length-1)/(1e3*60*60*24)}function Ci(n){var r;const e=za(n);if(!e.length)return R.stores[0]||null;const t={};return e.forEach(s=>{t[s.store]=(t[s.store]||0)+1}),((r=Object.entries(t).sort((s,i)=>i[1]-s[1])[0])==null?void 0:r[0])||R.stores[0]}function Ht(n,e,t,r,s,i){const a=_u[e]||_u.restock,c=i.map(u=>`<button onclick="${u.handler}" style="padding: 8px 14px; border-radius: 8px; border: none; background: ${u.primary?a.border:"var(--bg-main)"}; color: ${u.primary?"white":"var(--text-secondary)"}; font-size: 0.82rem; font-weight: 600; cursor: pointer; font-family: inherit;">${u.label}</button>`).join("");return`
    <div class="feed-card" style="background: ${a.bg}; border-radius: 16px; padding: 16px; border: 1.5px solid ${a.border}; position: relative;">
      <button onclick="dismissFeedCard('${n}')" style="position: absolute; top: 10px; right: 12px; background: none; border: none; font-size: 1.1rem; cursor: pointer; color: var(--text-secondary); line-height: 1; padding: 2px 4px;">×</button>
      <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
        <div style="width: 44px; height: 44px; border-radius: 12px; background: ${a.icon}; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">${t}</div>
        <div style="flex: 1; min-width: 0; padding-right: 20px;">
          <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 3px;">${r}</div>
          <div style="color: var(--text-secondary); font-size: 0.82rem; line-height: 1.4;">${s}</div>
        </div>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">${c}</div>
    </div>
  `}function ew(n){const e=ft(),t=new Set(Object.values(R.lists||{}).flatMap(s=>s.map(i=>i.name.toLowerCase()))),r=[];for(const s of e){if(t.has(s.toLowerCase()))continue;const i=`restock-${s}`;if(n[i])continue;const a=Ci(s);if(!a)continue;const c=qe(s),u=c?mn[c].emoji:"⭐";if(r.push(Ht(i,"restock",u,`Restock ${s}`,"A favourite not on any current list",[{label:`Add to ${a}`,handler:`feedAddToStore('${s.replace(/'/g,"\\'")}', '${a.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not now",handler:`dismissFeedCard('${i}')`,primary:!1}])),r.length>=3)break}return r}function tw(n){const e=[];return(R.stores||[]).forEach(t=>{const r=(R.lists[t]||[]).filter(i=>!i.checked).length;if(r<5)return;const s=`building-${t}`;n[s]||e.push(Ht(s,"building","🛒",`${t} list is growing`,`${r} items waiting — ready for a trip?`,[{label:`View ${t}`,handler:`feedSwitchToLists('${t.replace(/'/g,"\\'")}')`,primary:!0},{label:"Dismiss",handler:`dismissFeedCard('${s}')`,primary:!1}]))}),e}function nw(n){const e="consolidation";if(n[e])return[];const t=(R.stores||[]).filter(r=>(R.lists[r]||[]).filter(i=>!i.checked).length===1);return t.length<2?[]:[Ht(e,"consolidate","🗂️","Consider consolidating",`${t.join(", ")} each have just 1 item — could be one trip`,[{label:"View lists",handler:"feedSwitchToLists()",primary:!0},{label:"Dismiss",handler:`dismissFeedCard('${e}')`,primary:!1}])]}function rw(n){const e="uncategorized";if(n[e])return[];const t=(R.history||[]).filter(r=>!qe(r));return t.length===0?[]:[Ht(e,"uncategorized","🏷️",`${t.length} item${t.length>1?"s":""} without a category`,"Categorizing helps sort your lists by aisle",[{label:"Go to History",handler:"feedSwitchToHistory()",primary:!0},{label:"Later",handler:`dismissFeedCard('${e}')`,primary:!1}])]}function sw(n){const e=[],t=Date.now(),r=new Set(Object.values(R.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),s=new Set;return Fe.forEach(i=>{i.items.forEach(a=>{const c=a.toLowerCase();if(s.has(c)||r.has(c))return;s.add(c);const u=`due-${c}`;if(n[u])return;const d=za(a);if(d.length<2)return;const p=Wa(d);if(!p||p>60)return;const g=d.reduce((P,F)=>P.ts>F.ts?P:F),v=(t-g.ts)/(1e3*60*60*24);if(v<p*1.1)return;const S=Ci(a);if(!S)return;const x=qe(a),V=x?mn[x].emoji:"🔁";e.push(Ht(u,"due",V,`Time to restock ${a}`,`Usually every ${Math.round(p)} days — ${Math.round(v)} days since last purchase`,[{label:`Add to ${S}`,handler:`feedAddToStore('${a.replace(/'/g,"\\'")}', '${S.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not yet",handler:`dismissFeedCard('${u}')`,primary:!1}])),e.length>=3})}),e.slice(0,3)}function iw(n){const e=[],t=Date.now(),r=new Set(Object.values(R.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),s=new Set;return Fe.forEach(i=>{i.items.forEach(a=>{const c=a.toLowerCase();if(s.has(c)||r.has(c))return;s.add(c);const u=za(a);if(u.length===0)return;const d=u.reduce((P,F)=>P.ts>F.ts?P:F),p=(t-d.ts)/(1e3*60*60*24),g=Wa(u);if(g&&g<60||p<30)return;const v=`havent-${c}`;if(n[v])return;const S=Ci(a),x=qe(a),V=x?mn[x].emoji:"🕐";e.push(Ht(v,"havent",V,`Haven't seen ${a} in a while`,`Last purchased ${Math.round(p)} days ago`,[{label:S?`Add to ${S}`:"Add to list",handler:S?`feedAddToStore('${a.replace(/'/g,"\\'")}', '${S.replace(/'/g,"\\'")}')`:"feedSwitchToLists()",primary:!0},{label:"Remove from history",handler:`feedRemoveFromHistory('${a.replace(/'/g,"\\'")}', '${v}')`,primary:!1}])),e.length>=2})}),e.slice(0,2)}function ow(n){const e=[],t=Date.now();return(R.stores||[]).forEach(r=>{const s=`pattern-${r}`;if(n[s])return;const i=Fe.filter(g=>g.store===r);if(i.length<3)return;const a=Wa(i);if(!a)return;const c=i.reduce((g,v)=>g.ts>v.ts?g:v),u=(t-c.ts)/(1e3*60*60*24);if(u<a*.9)return;const d=(R.lists[r]||[]).filter(g=>!g.checked).length,p=d>0?`Usually every ${Math.round(a)} days — ${Math.round(u)} days since last visit, ${d} items waiting`:`Usually every ${Math.round(a)} days — ${Math.round(u)} days since last visit`;e.push(Ht(s,"pattern","📅",`${r} run coming up?`,p,[{label:`View ${r}`,handler:`feedSwitchToLists('${r.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not yet",handler:`dismissFeedCard('${s}')`,primary:!1}]))}),e}function aw(n){if(Fe.length<5)return[];const e=[],t=new Set(Object.values(R.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),r={};Fe.forEach(i=>{const a=i.items.map(c=>c.toLowerCase());for(let c=0;c<a.length;c++)for(let u=c+1;u<a.length;u++){const d=[a[c],a[u]].sort().join("|||");r[d]=(r[d]||0)+1}});const s=new Set;return Object.entries(r).filter(([,i])=>i>=2).sort((i,a)=>a[1]-i[1]).forEach(([i,a])=>{if(e.length>=2)return;const[c,u]=i.split("|||"),d=t.has(c),p=t.has(u);if(d===p)return;const g=d?c:u,v=d?u:c,S=`together-${v}`;if(n[S]||s.has(S))return;s.add(S);const x=Ci(v);if(!x)return;const V=R.history.find(L=>L.toLowerCase()===g)||g,P=R.history.find(L=>L.toLowerCase()===v)||v,F=qe(P),z=F?mn[F].emoji:"🔗";e.push(Ht(S,"together",z,`Often bought with ${V}`,`You usually pick up ${P} too (${a} times)`,[{label:`Add ${P}`,handler:`feedAddToStore('${P.replace(/'/g,"\\'")}', '${x.replace(/'/g,"\\'")}')`,primary:!0},{label:"Skip",handler:`dismissFeedCard('${S}')`,primary:!1}]))}),e}function Ha(){const n=document.getElementById("feed-tab");if(!n||!K)return;const e=zd(),t=[...ew(e),...tw(e),...nw(e),...aw(e),...sw(e),...ow(e),...iw(e),...rw(e)];if(!document.getElementById("feed-styles")){const r=document.createElement("style");r.id="feed-styles",r.textContent=`
      .feed-card { transition: transform 0.15s, box-shadow 0.15s; }
      .feed-card:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    `,document.head.appendChild(r)}if(t.length===0){n.innerHTML=`
      <div style="padding: 32px 16px; text-align: center; color: var(--text-secondary);">
        <div style="font-size: 3rem; margin-bottom: 16px;">✨</div>
        <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 8px; color: var(--text-primary);">You're all caught up!</div>
        <div style="font-size: 0.9rem; line-height: 1.5;">Smart suggestions will appear here as you use the app. Keep adding and checking off items to unlock insights.</div>
      </div>
    `;return}n.innerHTML=`
    <div style="padding: 16px; display: flex; flex-direction: column; gap: 12px;">
      <div style="font-size: 0.78rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">${t.length} suggestion${t.length!==1?"s":""}</div>
      ${t.join("")}
    </div>
  `}async function Ee(){try{const n=K.linkedTo||J.uid;console.log("Saving data to user:",n),console.log("Current user:",J.uid),console.log("Linked to:",K.linkedTo),await xe(ie(te,"users",n),{stores:R.stores,lists:R.lists,history:R.history}),console.log("Save successful")}catch(n){console.error("Error saving data:",n),console.error("Error code:",n.code),console.error("Error message:",n.message),j("Failed to save","error")}}async function _t(){try{await xe(ie(te,"users",J.uid),{privateLists:De})}catch(n){console.error("Error saving private data:",n),j("Failed to save","error")}}async function cw(){try{await xe(ie(te,"users",J.uid),{itemCategories:Gr})}catch(n){console.error("Error saving item categories:",n)}}async function Wd(n,e){if(!(!n||n.length===0)){Fe.push({items:n,store:e,ts:Date.now()}),Fe.length>500&&(Fe=Fe.slice(-500));try{await xe(ie(te,"users",J.uid),{purchaseLog:Fe})}catch(t){console.error("Error saving purchase log:",t)}}}function qe(n){const e=n.toLowerCase();return Gr[e]||DE[e]||null}window.showCategoryPrompt=function(e){const t=document.getElementById("category-prompt-modal"),r=document.getElementById("category-prompt-item-name"),s=document.getElementById("category-chips");r.textContent=`"${e}"`,s.innerHTML="",Object.entries(mn).forEach(([i,{label:a,emoji:c}])=>{const u=document.createElement("button");u.style.cssText="padding: 8px 12px; border: 2px solid var(--border); border-radius: 20px; background: var(--bg-main); cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;",u.innerHTML=`${c} ${a}`,u.addEventListener("click",async()=>{Gr[e.toLowerCase()]=i,await cw(),vu(),me(),Wt()}),s.appendChild(u)}),t.classList.add("visible"),document.getElementById("category-prompt-skip-btn").onclick=vu};function vu(){document.getElementById("category-prompt-modal").classList.remove("visible")}function j(n,e="success"){const t=document.createElement("div");t.className=`toast ${e}`,t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toastFadeOut 0.3s ease forwards",setTimeout(()=>t.remove(),300)},2e3)}
