(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Hc={};/**
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
 */const vu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,g=(i&3)<<4|c>>4;let v=(c&15)<<2|d>>6,S=d&63;u||(S=64,a||(v=64)),r.push(t[p],t[g],t[v],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new kf;const v=i<<2|c>>4;if(r.push(v),d!==64){const S=c<<4&240|d>>2;if(r.push(S),g!==64){const x=d<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rf=function(n){const e=vu(n);return Eu.encodeByteArray(e,!0)},Ps=function(n){return Rf(n).replace(/\./g,"")},wu=function(n){try{return Eu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xf=()=>Pf().__FIREBASE_DEFAULTS__,Lf=()=>{if(typeof process>"u"||typeof Hc>"u")return;const n=Hc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Df=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wu(n[1]);return e&&JSON.parse(e)},Js=()=>{try{return xf()||Lf()||Df()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Iu=n=>{var e,t;return(t=(e=Js())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Vf=n=>{const e=Iu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Tu=()=>{var n;return(n=Js())===null||n===void 0?void 0:n.config},bu=n=>{var e;return(e=Js())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Of{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Nf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ps(JSON.stringify(t)),Ps(JSON.stringify(a)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Ff(){var n;const e=(n=Js())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $f(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qf(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jf(){return!Ff()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zf(){try{return typeof indexedDB=="object"}catch{return!1}}function Wf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Hf="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hf,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Gf(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new _t(s,c,r)}}function Gf(n,e){return n.replace(Kf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kf=/\{\$([^}]+)}/g;function Qf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Gc(i)&&Gc(a)){if(!xs(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Gc(n){return n!==null&&typeof n=="object"}/**
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
 */function Dr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ar(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Yf(n,e){const t=new Jf(n,e);return t.subscribe.bind(t)}class Jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ji),s.error===void 0&&(s.error=Ji),s.complete===void 0&&(s.complete=Ji);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ji(){}/**
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
 */function ce(n){return n&&n._delegate?n._delegate:n}class nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class Zf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Of;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tp(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ep(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ep(n){return n===Yt?void 0:n}function tp(n){return n.instantiationMode==="EAGER"}/**
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
 */class np{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const rp={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},sp=H.INFO,ip={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},op=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ip[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mo{constructor(e){this.name=e,this._logLevel=sp,this._logHandler=op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const ap=(n,e)=>e.some(t=>n instanceof t);let Kc,Qc;function cp(){return Kc||(Kc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lp(){return Qc||(Qc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Au=new WeakMap,uo=new WeakMap,Su=new WeakMap,Xi=new WeakMap,Fo=new WeakMap;function up(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Dt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Au.set(t,n)}).catch(()=>{}),Fo.set(e,n),e}function hp(n){if(uo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});uo.set(n,e)}let ho={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Su.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dp(n){ho=n(ho)}function fp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zi(this),e,...t);return Su.set(r,e.sort?e.sort():[e]),Dt(r)}:lp().includes(n)?function(...e){return n.apply(Zi(this),e),Dt(Au.get(this))}:function(...e){return Dt(n.apply(Zi(this),e))}}function pp(n){return typeof n=="function"?fp(n):(n instanceof IDBTransaction&&hp(n),ap(n,cp())?new Proxy(n,ho):n)}function Dt(n){if(n instanceof IDBRequest)return up(n);if(Xi.has(n))return Xi.get(n);const e=pp(n);return e!==n&&(Xi.set(n,e),Fo.set(e,n)),e}const Zi=n=>Fo.get(n);function mp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Dt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Dt(a.result),u.oldVersion,u.newVersion,Dt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const gp=["get","getKey","getAll","getAllKeys","count"],yp=["put","add","delete","clear"],eo=new Map;function Yc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(eo.get(e))return eo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gp.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return eo.set(e,i),i}dp(n=>({...n,get:(e,t,r)=>Yc(e,t)||n.get(e,t,r),has:(e,t)=>!!Yc(e,t)||n.has(e,t)}));/**
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
 */class _p{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fo="@firebase/app",Jc="0.10.13";/**
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
 */const ft=new Mo("@firebase/app"),Ep="@firebase/app-compat",wp="@firebase/analytics-compat",Ip="@firebase/analytics",Tp="@firebase/app-check-compat",bp="@firebase/app-check",Ap="@firebase/auth",Sp="@firebase/auth-compat",Cp="@firebase/database",kp="@firebase/data-connect",Rp="@firebase/database-compat",Pp="@firebase/functions",xp="@firebase/functions-compat",Lp="@firebase/installations",Dp="@firebase/installations-compat",Vp="@firebase/messaging",Op="@firebase/messaging-compat",Np="@firebase/performance",Mp="@firebase/performance-compat",Fp="@firebase/remote-config",Bp="@firebase/remote-config-compat",Up="@firebase/storage",$p="@firebase/storage-compat",qp="@firebase/firestore",jp="@firebase/vertexai-preview",zp="@firebase/firestore-compat",Wp="firebase",Hp="10.14.1";/**
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
 */const po="[DEFAULT]",Gp={[fo]:"fire-core",[Ep]:"fire-core-compat",[Ip]:"fire-analytics",[wp]:"fire-analytics-compat",[bp]:"fire-app-check",[Tp]:"fire-app-check-compat",[Ap]:"fire-auth",[Sp]:"fire-auth-compat",[Cp]:"fire-rtdb",[kp]:"fire-data-connect",[Rp]:"fire-rtdb-compat",[Pp]:"fire-fn",[xp]:"fire-fn-compat",[Lp]:"fire-iid",[Dp]:"fire-iid-compat",[Vp]:"fire-fcm",[Op]:"fire-fcm-compat",[Np]:"fire-perf",[Mp]:"fire-perf-compat",[Fp]:"fire-rc",[Bp]:"fire-rc-compat",[Up]:"fire-gcs",[$p]:"fire-gcs-compat",[qp]:"fire-fst",[zp]:"fire-fst-compat",[jp]:"fire-vertex","fire-js":"fire-js",[Wp]:"fire-js-all"};/**
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
 */const Ls=new Map,Kp=new Map,mo=new Map;function Xc(n,e){try{n.container.addComponent(e)}catch(t){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Rn(n){const e=n.name;if(mo.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;mo.set(e,n);for(const t of Ls.values())Xc(t,n);for(const t of Kp.values())Xc(t,n);return!0}function Bo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n.settings!==void 0}/**
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
 */const Qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new Lr("app","Firebase",Qp);/**
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
 */class Yp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fn=Hp;function Cu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:po,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=Tu()),!t)throw Vt.create("no-options");const i=Ls.get(s);if(i){if(xs(t,i.options)&&xs(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const a=new np(s);for(const u of mo.values())a.addComponent(u);const c=new Yp(t,r,a);return Ls.set(s,c),c}function ku(n=po){const e=Ls.get(n);if(!e&&n===po&&Tu())return Cu();if(!e)throw Vt.create("no-app",{appName:n});return e}function Ot(n,e,t){var r;let s=(r=Gp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(c.join(" "));return}Rn(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Jp="firebase-heartbeat-database",Xp=1,Er="firebase-heartbeat-store";let to=null;function Ru(){return to||(to=mp(Jp,Xp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Er)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),to}async function Zp(n){try{const t=(await Ru()).transaction(Er),r=await t.objectStore(Er).get(Pu(n));return await t.done,r}catch(e){if(e instanceof _t)ft.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(t.message)}}}async function Zc(n,e){try{const r=(await Ru()).transaction(Er,"readwrite");await r.objectStore(Er).put(e,Pu(n)),await r.done}catch(t){if(t instanceof _t)ft.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ft.warn(r.message)}}}function Pu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const em=1024,tm=30*24*60*60*1e3;class nm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=el();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=tm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=el(),{heartbeatsToSend:r,unsentEntries:s}=rm(this._heartbeatsCache.heartbeats),i=Ps(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ft.warn(t),""}}}function el(){return new Date().toISOString().substring(0,10)}function rm(n,e=em){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),tl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zf()?Wf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tl(n){return Ps(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function im(n){Rn(new nn("platform-logger",e=>new _p(e),"PRIVATE")),Rn(new nn("heartbeat",e=>new nm(e),"PRIVATE")),Ot(fo,Jc,n),Ot(fo,Jc,"esm2017"),Ot("fire-js","")}im("");var om="firebase",am="10.14.1";/**
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
 */Ot(om,am,"app");function Uo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function xu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cm=xu,Lu=new Lr("auth","Firebase",xu());/**
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
 */const Ds=new Mo("@firebase/auth");function lm(n,...e){Ds.logLevel<=H.WARN&&Ds.warn(`Auth (${Fn}): ${n}`,...e)}function ys(n,...e){Ds.logLevel<=H.ERROR&&Ds.error(`Auth (${Fn}): ${n}`,...e)}/**
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
 */function We(n,...e){throw qo(n,...e)}function ze(n,...e){return qo(n,...e)}function $o(n,e,t){const r=Object.assign(Object.assign({},cm()),{[e]:t});return new Lr("auth","Firebase",r).create(e,{appName:n.name})}function ct(n){return $o(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Du(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&We(n,"argument-error"),$o(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Lu.create(n,...e)}function B(n,e,...t){if(!n)throw qo(e,...t)}function st(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ys(e),new Error(e)}function pt(n,e){n||st(e)}/**
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
 */function go(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function um(){return nl()==="http:"||nl()==="https:"}function nl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function hm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(um()||Uf()||"connection"in navigator)?navigator.onLine:!0}function dm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vr{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=Mf()||$f()}get(){return hm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jo(n,e){pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Vu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pm=new Vr(3e4,6e4);function vt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Et(n,e,t,r,s={}){return Ou(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Dr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Bf()||(d.referrerPolicy="no-referrer"),Vu.fetch()(Nu(n,n.config.apiHost,t,c),d)})}async function Ou(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},fm),e);try{const s=new gm(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ds(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ds(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ds(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw $o(n,p,d);We(n,p)}}catch(s){if(s instanceof _t)throw s;We(n,"network-request-failed",{message:String(s)})}}async function Or(n,e,t,r,s={}){const i=await Et(n,e,t,r,s);return"mfaPendingCredential"in i&&We(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Nu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?jo(n.config,s):`${n.config.apiScheme}://${s}`}function mm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),pm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ds(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ze(n,e,r);return s.customData._tokenResponse=t,s}function rl(n){return n!==void 0&&n.enterprise!==void 0}class ym{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _m(n,e){return Et(n,"GET","/v2/recaptchaConfig",vt(n,e))}/**
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
 */async function vm(n,e){return Et(n,"POST","/v1/accounts:delete",e)}async function Mu(n,e){return Et(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function pr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Em(n,e=!1){const t=ce(n),r=await t.getIdToken(e),s=zo(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pr(no(s.auth_time)),issuedAtTime:pr(no(s.iat)),expirationTime:pr(no(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function no(n){return Number(n)*1e3}function zo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const s=wu(t);return s?JSON.parse(s):(ys("Failed to decode base64 JWT payload"),null)}catch(s){return ys("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sl(n){const e=zo(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&wm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Im{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await wr(n,Mu(t,{idToken:r}));B(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fu(i.providerUserInfo):[],c=bm(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new yo(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function Tm(n){const e=ce(n);await Vs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bm(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fu(n){return n.map(e=>{var{providerId:t}=e,r=Uo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Am(n,e){const t=await Ou(n,{},async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Nu(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Vu.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Sm(n,e){return Et(n,"POST","/v2/accounts:revokeToken",vt(n,e))}/**
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
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=sl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Am(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new bn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function St(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Im(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await wr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Em(this,e)}reload(){return Tm(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await wr(this,vm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,x=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,F=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:D,emailVerified:X,isAnonymous:ue,providerData:ne,stsTokenManager:w}=t;B(D&&w,e,"internal-error");const m=bn.fromJSON(this.name,w);B(typeof D=="string",e,"internal-error"),St(g,e.name),St(v,e.name),B(typeof X=="boolean",e,"internal-error"),B(typeof ue=="boolean",e,"internal-error"),St(S,e.name),St(x,e.name),St(V,e.name),St(P,e.name),St(F,e.name),St(z,e.name);const _=new it({uid:D,auth:e,email:v,emailVerified:X,displayName:g,isAnonymous:ue,photoURL:x,phoneNumber:S,tenantId:V,stsTokenManager:m,createdAt:F,lastLoginAt:z});return ne&&Array.isArray(ne)&&(_.providerData=ne.map(E=>Object.assign({},E))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new bn;s.updateFromServerResponse(t);const i=new it({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new bn;c.updateFromIdToken(r);const u=new it({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const il=new Map;function ot(n){pt(n instanceof Function,"Expected a class definition");let e=il.get(n);return e?(pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,il.set(n,e),e)}/**
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
 */class Bu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bu.type="NONE";const ol=Bu;/**
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
 */function _s(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_s(this.userKey,s.apiKey,i),this.fullPersistenceKey=_s("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new An(ot(ol),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ot(ol);const a=_s(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const g=it._fromJSON(e,p);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new An(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new An(i,e,r))}}/**
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
 */function al(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ju(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wu(e))return"Blackberry";if(Hu(e))return"Webos";if($u(e))return"Safari";if((e.includes("chrome/")||qu(e))&&!e.includes("edge/"))return"Chrome";if(zu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uu(n=Pe()){return/firefox\//i.test(n)}function $u(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qu(n=Pe()){return/crios\//i.test(n)}function ju(n=Pe()){return/iemobile/i.test(n)}function zu(n=Pe()){return/android/i.test(n)}function Wu(n=Pe()){return/blackberry/i.test(n)}function Hu(n=Pe()){return/webos/i.test(n)}function Wo(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cm(n=Pe()){var e;return Wo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function km(){return qf()&&document.documentMode===10}function Gu(n=Pe()){return Wo(n)||zu(n)||Hu(n)||Wu(n)||/windows phone/i.test(n)||ju(n)}/**
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
 */function Ku(n,e=[]){let t;switch(n){case"Browser":t=al(Pe());break;case"Worker":t=`${al(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fn}/${r}`}/**
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
 */class Rm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Pm(n,e={}){return Et(n,"GET","/v2/passwordPolicy",vt(n,e))}/**
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
 */const xm=6;class Lm{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:xm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Dm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cl(this),this.idTokenSubscription=new cl(this),this.beforeStateQueue=new Rm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mu(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(ct(this));const t=e?ce(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pm(this),t=new Lm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Sm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ku(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wt(n){return ce(n)}class cl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yf(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vm(n){Xs=n}function Qu(n){return Xs.loadJS(n)}function Om(){return Xs.recaptchaEnterpriseScript}function Nm(){return Xs.gapiScript}function Mm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Fm="recaptcha-enterprise",Bm="NO_RECAPTCHA";class Um{constructor(e){this.type=Fm,this.auth=wt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{_m(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new ym(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;rl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Bm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&rl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Om();u.length!==0&&(u+=c),Qu(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function ll(n,e,t,r=!1){const s=new Um(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Os(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ll(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ll(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function $m(n,e){const t=Bo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(xs(i,e??{}))return s;We(s,"already-initialized")}return t.initialize({options:e})}function qm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jm(n,e,t){const r=wt(n);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Yu(e),{host:a,port:c}=zm(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Wm()}function Yu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zm(n){const e=Yu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ul(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ul(a)}}}function ul(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ho{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function Hm(n,e){return Et(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Gm(n,e){return Or(n,"POST","/v1/accounts:signInWithPassword",vt(n,e))}async function Ju(n,e){return Et(n,"POST","/v1/accounts:sendOobCode",vt(n,e))}async function Km(n,e){return Ju(n,e)}async function Qm(n,e){return Ju(n,e)}/**
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
 */async function Ym(n,e){return Or(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}async function Jm(n,e){return Or(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}/**
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
 */class Ir extends Ho{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ir(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ir(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Os(e,t,"signInWithPassword",Gm);case"emailLink":return Ym(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Os(e,r,"signUpPassword",Hm);case"emailLink":return Jm(e,{idToken:t,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Sn(n,e){return Or(n,"POST","/v1/accounts:signInWithIdp",vt(n,e))}/**
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
 */const Xm="http://localhost";class rn extends Ho{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Uo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new rn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Sn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sn(e,t)}buildRequest(){const e={requestUri:Xm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Dr(t)}return e}}/**
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
 */function Zm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eg(n){const e=ar(cr(n)).link,t=e?ar(cr(e)).deep_link_id:null,r=ar(cr(n)).deep_link_id;return(r?ar(cr(r)).link:null)||r||t||e||n}class Go{constructor(e){var t,r,s,i,a,c;const u=ar(cr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=Zm((s=u.mode)!==null&&s!==void 0?s:null);B(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=eg(e);try{return new Go(t)}catch{return null}}}/**
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
 */class Bn{constructor(){this.providerId=Bn.PROVIDER_ID}static credential(e,t){return Ir._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Go.parseLink(t);return B(r,"argument-error"),Ir._fromEmailAndCode(e,r.code,r.tenantId)}}Bn.PROVIDER_ID="password";Bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nr extends Zs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kt extends Nr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class Qe extends Nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qe.credential(t,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
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
 */class Rt extends Nr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class Pt extends Nr{constructor(){super("twitter.com")}static credential(e,t){return rn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */async function tg(n,e){return Or(n,"POST","/v1/accounts:signUp",vt(n,e))}/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await it._fromIdTokenResponse(e,r,s),a=hl(r);return new sn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hl(r);return new sn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ns extends _t{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ns(e,t,r,s)}}function Xu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(n,i,e,r):i})}async function ng(n,e,t=!1){const r=await wr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sn._forOperation(n,"link",r)}/**
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
 */async function rg(n,e,t=!1){const{auth:r}=n;if(je(r.app))return Promise.reject(ct(r));const s="reauthenticate";try{const i=await wr(n,Xu(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=zo(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),sn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&We(r,"user-mismatch"),i}}/**
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
 */async function Zu(n,e,t=!1){if(je(n.app))return Promise.reject(ct(n));const r="signIn",s=await Xu(n,r,e),i=await sn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function sg(n,e){return Zu(wt(n),e)}/**
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
 */async function eh(n){const e=wt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ig(n,e,t){const r=wt(n);await Os(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Qm)}async function og(n,e,t){if(je(n.app))return Promise.reject(ct(n));const r=wt(n),a=await Os(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&eh(n),u}),c=await sn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function ag(n,e,t){return je(n.app)?Promise.reject(ct(n)):sg(ce(n),Bn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&eh(n),r})}async function th(n,e){const t=ce(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await Km(t.auth,s);i!==n.email&&await n.reload()}function cg(n,e,t,r){return ce(n).onIdTokenChanged(e,t,r)}function lg(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function ug(n,e,t,r){return ce(n).onAuthStateChanged(e,t,r)}function nh(n){return ce(n).signOut()}async function dl(n){return ce(n).delete()}const Ms="__sak";/**
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
 */class rh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const hg=1e3,dg=10;class sh extends rh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);km()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sh.type="LOCAL";const fg=sh;/**
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
 */class ih extends rh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ih.type="SESSION";const oh=ih;/**
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
 */function pg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ei(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await pg(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ei.receivers=[];/**
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
 */function Ko(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class mg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Ko("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(v.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ye(){return window}function gg(n){Ye().location.href=n}/**
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
 */function ah(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function yg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _g(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vg(){return ah()?self:null}/**
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
 */const ch="firebaseLocalStorageDb",Eg=1,Fs="firebaseLocalStorage",lh="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ti(n,e){return n.transaction([Fs],e?"readwrite":"readonly").objectStore(Fs)}function wg(){const n=indexedDB.deleteDatabase(ch);return new Mr(n).toPromise()}function _o(){const n=indexedDB.open(ch,Eg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fs,{keyPath:lh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fs)?e(r):(r.close(),await wg(),e(await _o()))})})}async function fl(n,e,t){const r=ti(n,!0).put({[lh]:e,value:t});return new Mr(r).toPromise()}async function Ig(n,e){const t=ti(n,!1).get(e),r=await new Mr(t).toPromise();return r===void 0?null:r.value}function pl(n,e){const t=ti(n,!0).delete(e);return new Mr(t).toPromise()}const Tg=800,bg=3;class uh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _o(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ah()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ei._getInstance(vg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yg(),!this.activeServiceWorker)return;this.sender=new mg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_g()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _o();return await fl(e,Ms,"1"),await pl(e,Ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ig(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ti(s,!1).getAll();return new Mr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uh.type="LOCAL";const Ag=uh;new Vr(3e4,6e4);/**
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
 */function Qo(n,e){return e?ot(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yo extends Ho{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sg(n){return Zu(n.auth,new Yo(n),n.bypassAuthState)}function Cg(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),rg(t,new Yo(n),n.bypassAuthState)}async function kg(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),ng(t,new Yo(n),n.bypassAuthState)}/**
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
 */class hh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sg;case"linkViaPopup":case"linkViaRedirect":return kg;case"reauthViaPopup":case"reauthViaRedirect":return Cg;default:We(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Rg=new Vr(2e3,1e4);async function Pg(n,e,t){if(je(n.app))return Promise.reject(ze(n,"operation-not-supported-in-this-environment"));const r=wt(n);Du(n,e,Zs);const s=Qo(r,t);return new xt(r,"signInViaPopup",e,s).executeNotNull()}async function xg(n,e,t){const r=ce(n);if(je(r.auth.app))return Promise.reject(ze(r.auth,"operation-not-supported-in-this-environment"));Du(r.auth,e,Zs);const s=Qo(r.auth,t);return new xt(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}class xt extends hh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xt.currentPopupAction&&xt.currentPopupAction.cancel(),xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=Ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rg.get())};e()}}xt.currentPopupAction=null;/**
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
 */const Lg="pendingRedirect",vs=new Map;class Dg extends hh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vs.get(this.auth._key());if(!e){try{const r=await Vg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vs.set(this.auth._key(),e)}return this.bypassAuthState||vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vg(n,e){const t=Mg(e),r=Ng(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Og(n,e){vs.set(n._key(),e)}function Ng(n){return ot(n._redirectPersistence)}function Mg(n){return _s(Lg,n.config.apiKey,n.name)}async function Fg(n,e,t=!1){if(je(n.app))return Promise.reject(ct(n));const r=wt(n),s=Qo(r,e),a=await new Dg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Bg=10*60*1e3;class Ug{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$g(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!dh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ml(e))}saveEventToCache(e){this.cachedEventUids.add(ml(e)),this.lastProcessedEventTime=Date.now()}}function ml(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function dh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $g(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dh(n);default:return!1}}/**
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
 */async function qg(n,e={}){return Et(n,"GET","/v1/projects",e)}/**
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
 */const jg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zg=/^https?/;async function Wg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qg(n);for(const t of e)try{if(Hg(t))return}catch{}We(n,"unauthorized-domain")}function Hg(n){const e=go(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!zg.test(t))return!1;if(jg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Gg=new Vr(3e4,6e4);function gl(){const n=Ye().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kg(n){return new Promise((e,t)=>{var r,s,i;function a(){gl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gl(),t(ze(n,"network-request-failed"))},timeout:Gg.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)a();else{const c=Mm("iframefcb");return Ye()[c]=()=>{gapi.load?a():t(ze(n,"network-request-failed"))},Qu(`${Nm()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Es=null,e})}let Es=null;function Qg(n){return Es=Es||Kg(n),Es}/**
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
 */const Yg=new Vr(5e3,15e3),Jg="__/auth/iframe",Xg="emulator/auth/iframe",Zg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ey=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ty(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jo(e,Xg):`https://${n.config.authDomain}/${Jg}`,r={apiKey:e.apiKey,appName:n.name,v:Fn},s=ey.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Dr(r).slice(1)}`}async function ny(n){const e=await Qg(n),t=Ye().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:ty(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),c=Ye().setTimeout(()=>{i(a)},Yg.get());function u(){Ye().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const ry={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sy=500,iy=600,oy="_blank",ay="http://localhost";class yl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cy(n,e,t,r=sy,s=iy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ry),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Pe().toLowerCase();t&&(c=qu(d)?oy:t),Uu(d)&&(e=e||ay,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[S,x])=>`${v}${S}=${x},`,"");if(Cm(d)&&c!=="_self")return ly(e||"",c),new yl(null);const g=window.open(e||"",c,p);B(g,n,"popup-blocked");try{g.focus()}catch{}return new yl(g)}function ly(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const uy="__/auth/handler",hy="emulator/auth/handler",dy=encodeURIComponent("fac");async function _l(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Fn,eventId:s};if(e instanceof Zs){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Qf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Nr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),d=u?`#${dy}=${encodeURIComponent(u)}`:"";return`${fy(n)}?${Dr(c).slice(1)}${d}`}function fy({config:n}){return n.emulator?jo(n,hy):`https://${n.authDomain}/${uy}`}/**
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
 */const ro="webStorageSupport";class py{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oh,this._completeRedirectFn=Fg,this._overrideRedirectResult=Og}async _openPopup(e,t,r,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await _l(e,t,r,go(),s);return cy(e,a,Ko())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await _l(e,t,r,go(),s);return gg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ny(e),r=new Ug(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ro,{type:ro},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ro];a!==void 0&&t(!!a),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gu()||$u()||Wo()}}const my=py;var vl="@firebase/auth",El="1.7.9";/**
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
 */class gy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _y(n){Rn(new nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ku(n)},d=new Dm(r,s,i,u);return qm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new nn("auth-internal",e=>{const t=wt(e.getProvider("auth").getImmediate());return(r=>new gy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(vl,El,yy(n)),Ot(vl,El,"esm2017")}/**
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
 */const vy=5*60,Ey=bu("authIdTokenMaxAge")||vy;let wl=null;const wy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ey)return;const s=t==null?void 0:t.token;wl!==s&&(wl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Iy(n=ku()){const e=Bo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$m(n,{popupRedirectResolver:my,persistence:[Ag,fg,oh]}),r=bu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=wy(i.toString());lg(t,a,()=>a(t.currentUser)),cg(t,c=>a(c))}}const s=Iu("auth");return s&&jm(t,`http://${s}`),t}function Ty(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Vm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Ty().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_y("Browser");var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,fh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,I,b){for(var y=Array(arguments.length-2),et=2;et<arguments.length;et++)y[et-2]=arguments[et];return m.prototype[I].apply(E,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],I=w.g[2];var b=w.g[3],y=m+(b^_&(I^b))+E[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+E[1]+3905402710&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+E[2]+606105819&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+E[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+E[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+E[5]+1200080426&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+E[6]+2821735955&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+E[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+E[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+E[9]+2336552879&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+E[10]+4294925233&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+E[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+E[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+E[13]+4254626195&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+E[14]+2792965006&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+E[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(I^b&(_^I))+E[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+E[6]+3225465664&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+E[11]+643717713&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+E[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+E[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+E[10]+38016083&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+E[15]+3634488961&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+E[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+E[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+E[14]+3275163606&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+E[3]+4107603335&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+E[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+E[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+E[2]+4243563512&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+E[7]+1735328473&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+E[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(_^I^b)+E[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+E[8]+2272392833&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+E[11]+1839030562&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+E[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+E[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+E[4]+1272893353&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+E[7]+4139469664&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+E[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+E[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+E[0]+3936430074&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+E[3]+3572445317&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+E[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+E[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+E[12]+3873151461&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+E[15]+530742520&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+E[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(I^(_|~b))+E[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+E[7]+1126891415&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+E[14]+2878612391&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+E[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+E[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+E[3]+2399980690&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+E[10]+4293915773&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+E[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+E[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+E[15]+4264355552&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+E[6]+2734768916&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+E[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+E[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+E[11]+3174756917&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+E[2]+718787259&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,E=this.B,I=this.h,b=0;b<m;){if(I==0)for(;b<=_;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(E[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,E),I=0;break}}else for(;b<m;)if(E[I++]=w[b++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)w[_++]=this.g[m]>>>E&255;return w};function i(w,m){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],E=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;E&&b==m||(_[I]=b,E=!1)}this.g=_}var c={};function u(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return P(d(-w));for(var m=[],_=1,E=0;w>=_;E++)m[E]=w/_|0,_*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return P(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=g,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),y=parseInt(w.substring(I,I+b),m);8>b?(b=d(Math.pow(m,b)),E=E.j(b).add(d(y))):(E=E.j(_),E=E.add(d(y)))}return E}var g=u(0),v=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-P(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(V(this))return"-"+P(this).toString(w);for(var m=d(Math.pow(w,6)),_=this,E="";;){var I=X(_,m).g;_=F(_,I.j(m));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=I,x(_))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=F(this,w),V(w)?-1:x(w)?0:1};function P(w){for(var m=w.g.length,_=[],E=0;E<m;E++)_[E]=~w.g[E];return new a(_,~w.h).add(v)}n.abs=function(){return V(this)?P(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0,I=0;I<=m;I++){var b=E+(this.i(I)&65535)+(w.i(I)&65535),y=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);E=y>>>16,b&=65535,y&=65535,_[I]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function F(w,m){return w.add(P(m))}n.j=function(w){if(x(this)||x(w))return g;if(V(this))return V(w)?P(this).j(P(w)):P(P(this).j(w));if(V(w))return P(this.j(P(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<w.g.length;I++){var b=this.i(E)>>>16,y=this.i(E)&65535,et=w.i(I)>>>16,jn=w.i(I)&65535;_[2*E+2*I]+=y*jn,z(_,2*E+2*I),_[2*E+2*I+1]+=b*jn,z(_,2*E+2*I+1),_[2*E+2*I+1]+=y*et,z(_,2*E+2*I+1),_[2*E+2*I+2]+=b*et,z(_,2*E+2*I+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function z(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function D(w,m){this.g=w,this.h=m}function X(w,m){if(x(m))throw Error("division by zero");if(x(w))return new D(g,g);if(V(w))return m=X(P(w),m),new D(P(m.g),P(m.h));if(V(m))return m=X(w,P(m)),new D(P(m.g),m.h);if(30<w.g.length){if(V(w)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,E=m;0>=E.l(w);)_=ue(_),E=ue(E);var I=ne(_,1),b=ne(E,1);for(E=ne(E,2),_=ne(_,2);!x(E);){var y=b.add(E);0>=y.l(w)&&(I=I.add(_),b=y),E=ne(E,1),_=ne(_,1)}return m=F(w,I.j(m)),new D(I,m)}for(I=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(_),y=b.j(m);V(y)||0<y.l(w);)_-=E,b=d(_),y=b.j(m);x(b)&&(b=v),I=I.add(b),w=F(w,y)}return new D(I,w)}n.A=function(w){return X(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&w.i(E);return new a(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|w.i(E);return new a(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^w.i(E);return new a(_,this.h^w.h)};function ue(w){for(var m=w.g.length+1,_=[],E=0;E<m;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(_,w.h)}function ne(w,m){var _=m>>5;m%=32;for(var E=w.g.length-_,I=[],b=0;b<E;b++)I[b]=0<m?w.i(b+_)>>>m|w.i(b+_+1)<<32-m:w.i(b+_);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,tn=a}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ph,lr,mh,ws,vo,gh,yh,_h;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fs=="object"&&fs];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var T=o[f];if(!(T in h))break e;h=h[T]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,f=!1,T={next:function(){if(!f&&h<o.length){var A=h++;return{value:l(A,o[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),o.apply(l,T)}}return function(){return o.apply(l,arguments)}}function v(o,l,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function S(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function x(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,T,A){for(var L=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)L[ee-2]=arguments[ee];return l.prototype[T].apply(f,L)}}function V(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function P(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const T=o.length||0,A=f.length||0;o.length=T+A;for(let L=0;L<A;L++)o[T+L]=f[L]}else o.push(f)}}class F{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function z(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function X(o){return X[" "](o),o}X[" "]=function(){};var ue=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function ne(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function w(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)o[h]=f[h];for(let A=0;A<_.length;A++)h=_[A],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Ci;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class et{constructor(){this.h=this.g=null}add(l,h){const f=jn.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var jn=new F(()=>new Wd,o=>o.reset());class Wd{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let zn,Wn=!1,Ci=new et,Ha=()=>{const o=c.Promise.resolve(void 0);zn=()=>{o.then(Hd)}};var Hd=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var l=jn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Wn=!1};function It(){this.s=this.s,this.C=this.C}It.prototype.s=!1,It.prototype.ma=function(){this.s||(this.s=!0,this.N())},It.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Gd=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Hn(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ue){e:{try{X(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Kd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Hn.aa.h.call(this)}}x(Hn,Ie);var Kd={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),Qd=0;function Yd(o,l,h,f,T){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=T,this.key=++Qd,this.da=this.fa=!1}function Kr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qr(o){this.src=o,this.g={},this.h=0}Qr.prototype.add=function(o,l,h,f,T){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var L=Ri(o,l,f,T);return-1<L?(l=o[L],h||(l.fa=!1)):(l=new Yd(l,this.src,A,!!f,T),l.fa=h,o.push(l)),l};function ki(o,l){var h=l.type;if(h in o.g){var f=o.g[h],T=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=T)&&Array.prototype.splice.call(f,T,1),A&&(Kr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ri(o,l,h,f){for(var T=0;T<o.length;++T){var A=o[T];if(!A.da&&A.listener==l&&A.capture==!!h&&A.ha==f)return T}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),xi={};function Ga(o,l,h,f,T){if(Array.isArray(l)){for(var A=0;A<l.length;A++)Ga(o,l[A],h,f,T);return null}return h=Ya(h),o&&o[Gr]?o.K(l,h,d(f)?!!f.capture:!1,T):Jd(o,l,h,!1,f,T)}function Jd(o,l,h,f,T,A){if(!l)throw Error("Invalid event type");var L=d(T)?!!T.capture:!!T,ee=Di(o);if(ee||(o[Pi]=ee=new Qr(o)),h=ee.add(l,h,f,L,A),h.proxy)return h;if(f=Xd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Gd||(T=L),T===void 0&&(T=!1),o.addEventListener(l.toString(),f,T);else if(o.attachEvent)o.attachEvent(Qa(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Xd(){function o(h){return l.call(o.src,o.listener,h)}const l=Zd;return o}function Ka(o,l,h,f,T){if(Array.isArray(l))for(var A=0;A<l.length;A++)Ka(o,l[A],h,f,T);else f=d(f)?!!f.capture:!!f,h=Ya(h),o&&o[Gr]?(o=o.i,l=String(l).toString(),l in o.g&&(A=o.g[l],h=Ri(A,h,f,T),-1<h&&(Kr(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete o.g[l],o.h--)))):o&&(o=Di(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ri(l,h,f,T)),(h=-1<o?l[o]:null)&&Li(h))}function Li(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Gr])ki(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(Qa(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=Di(l))?(ki(h,o),h.h==0&&(h.src=null,l[Pi]=null)):Kr(o)}}}function Qa(o){return o in xi?xi[o]:xi[o]="on"+o}function Zd(o,l){if(o.da)o=!0;else{l=new Hn(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&Li(o),o=h.call(f,l)}return o}function Di(o){return o=o[Pi],o instanceof Qr?o:null}var Vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ya(o){return typeof o=="function"?o:(o[Vi]||(o[Vi]=function(l){return o.handleEvent(l)}),o[Vi])}function Te(){It.call(this),this.i=new Qr(this),this.M=this,this.F=null}x(Te,It),Te.prototype[Gr]=!0,Te.prototype.removeEventListener=function(o,l,h,f){Ka(this,o,l,h,f)};function De(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var T=l;l=new Ie(f,o),E(l,T)}if(T=!0,h)for(var A=h.length-1;0<=A;A--){var L=l.g=h[A];T=Yr(L,f,!0,l)&&T}if(L=l.g=o,T=Yr(L,f,!0,l)&&T,T=Yr(L,f,!1,l)&&T,h)for(A=0;A<h.length;A++)L=l.g=h[A],T=Yr(L,f,!1,l)&&T}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Kr(h[f]);delete o.g[l],o.h--}}this.F=null},Te.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},Te.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Yr(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,A=0;A<l.length;++A){var L=l[A];if(L&&!L.da&&L.capture==h){var ee=L.listener,ge=L.ha||L.src;L.fa&&ki(o.i,L),T=ee.call(ge,f)!==!1&&T}}return T&&!f.defaultPrevented}function Ja(o,l,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Xa(o){o.g=Ja(()=>{o.g=null,o.i&&(o.i=!1,Xa(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class ef extends It{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Xa(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(o){It.call(this),this.h=o,this.g={}}x(Gn,It);var Za=[];function ec(o){ne(o.g,function(l,h){this.g.hasOwnProperty(h)&&Li(l)},o),o.g={}}Gn.prototype.N=function(){Gn.aa.N.call(this),ec(this)},Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oi=c.JSON.stringify,tf=c.JSON.parse,nf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ni(){}Ni.prototype.h=null;function tc(o){return o.h||(o.h=o.i())}function nc(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){Ie.call(this,"d")}x(Mi,Ie);function Fi(){Ie.call(this,"c")}x(Fi,Ie);var Ht={},rc=null;function Jr(){return rc=rc||new Te}Ht.La="serverreachability";function sc(o){Ie.call(this,Ht.La,o)}x(sc,Ie);function Qn(o){const l=Jr();De(l,new sc(l))}Ht.STAT_EVENT="statevent";function ic(o,l){Ie.call(this,Ht.STAT_EVENT,o),this.stat=l}x(ic,Ie);function Ve(o){const l=Jr();De(l,new ic(l,o))}Ht.Ma="timingevent";function oc(o,l){Ie.call(this,Ht.Ma,o),this.size=l}x(oc,Ie);function Yn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function rf(o,l,h,f,T,A){o.info(function(){if(o.g)if(A)for(var L="",ee=A.split("&"),ge=0;ge<ee.length;ge++){var Q=ee[ge].split("=");if(1<Q.length){var be=Q[0];Q=Q[1];var Ae=be.split("_");L=2<=Ae.length&&Ae[1]=="type"?L+(be+"="+Q+"&"):L+(be+"=redacted&")}}else L=null;else L=A;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+l+`
`+h+`
`+L})}function sf(o,l,h,f,T,A,L){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+l+`
`+h+`
`+A+" "+L})}function pn(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+af(o,h)+(f?" "+f:"")})}function of(o,l){o.info(function(){return"TIMEOUT: "+l})}Jn.prototype.info=function(){};function af(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var L=1;L<T.length;L++)T[L]=""}}}}return Oi(h)}catch{return l}}var Xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ac={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bi;function Zr(){}x(Zr,Ni),Zr.prototype.g=function(){return new XMLHttpRequest},Zr.prototype.i=function(){return{}},Bi=new Zr;function Tt(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new Gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var lc={},Ui={};function $i(o,l,h){o.L=1,o.v=rs(tt(l)),o.m=h,o.P=!0,uc(o,null)}function uc(o,l){o.F=Date.now(),es(o),o.A=tt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),bc(h.i,"t",f),o.C=0,h=o.j.J,o.h=new cc,o.g=qc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new ef(v(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(Za[0]=T.toString()),T=Za);for(var A=0;A<T.length;A++){var L=Ga(h,T[A],f||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Qn(),rf(o.i,o.u,o.A,o.l,o.R,o.m)}Tt.prototype.ca=function(o){o=o.target;const l=this.M;l&&nt(o)==3?l.j():this.Y(o)},Tt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=nt(this.g);var l=this.g.Ba();const yn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||xc(this.g)))){this.J||Ae!=4||l==7||(l==8||0>=yn?Qn(3):Qn(2)),qi(this);var h=this.g.Z();this.X=h;t:if(hc(this)){var f=xc(this.g);o="";var T=f.length,A=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Xn(this);var L="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(A&&l==T-1)});f.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,sf(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,ge=this.g;if((ee=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(ee)){var Q=ee;break t}}Q=null}if(h=Q)pn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ji(this,h);else{this.o=!1,this.s=3,Ve(12),Gt(this),Xn(this);break e}}if(this.P){h=!0;let He;for(;!this.J&&this.C<L.length;)if(He=cf(this,L),He==Ui){Ae==4&&(this.s=4,Ve(14),h=!1),pn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==lc){this.s=4,Ve(15),pn(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else pn(this.i,this.l,He,null),ji(this,He);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||L.length!=0||this.h.h||(this.s=1,Ve(16),h=!1),this.o=this.o&&h,!h)pn(this.i,this.l,L,"[Invalid Chunked Response]"),Gt(this),Xn(this);else if(0<L.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Qi(be),be.M=!0,Ve(11))}}else pn(this.i,this.l,L,null),ji(this,L);Ae==4&&Gt(this),this.o&&!this.J&&(Ae==4?Fc(this.j,this):(this.o=!1,es(this)))}else Af(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Gt(this),Xn(this)}}}catch{}finally{}};function hc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function cf(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?Ui:(h=Number(l.substring(h,f)),isNaN(h)?lc:(f+=1,f+h>l.length?Ui:(l=l.slice(f,f+h),o.C=f+h,l)))}Tt.prototype.cancel=function(){this.J=!0,Gt(this)};function es(o){o.S=Date.now()+o.I,dc(o,o.I)}function dc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Yn(v(o.ba,o),l)}function qi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Tt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(of(this.i,this.A),this.L!=2&&(Qn(),Ve(17)),Gt(this),this.s=2,Xn(this)):dc(this,this.S-o)};function Xn(o){o.j.G==0||o.J||Fc(o.j,o)}function Gt(o){qi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ec(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ji(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||zi(h.h,o))){if(!o.K&&zi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ls(h),as(h);else break e;Ki(h),Ve(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Yn(v(h.Za,h),6e3));if(1>=mc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Qt(h,11)}else if((o.K||h.g==o)&&ls(h),!z(l))for(T=h.Da.g.parse(l),l=0;l<T.length;l++){let Q=T[l];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const be=Q[3];be!=null&&(h.la=be,h.j.info("VER="+h.la));const Ae=Q[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const yn=Q[5];yn!=null&&typeof yn=="number"&&0<yn&&(f=1.5*yn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const He=o.g;if(He){const hs=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hs){var A=f.h;A.g||hs.indexOf("spdy")==-1&&hs.indexOf("quic")==-1&&hs.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Wi(A,A.h),A.h=null))}if(f.D){const Yi=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(f.ya=Yi,re(f.I,f.D,Yi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var L=o;if(f.qa=$c(f,f.J?f.ia:null,f.W),L.K){gc(f.h,L);var ee=L,ge=f.L;ge&&(ee.I=ge),ee.B&&(qi(ee),es(ee)),f.g=L}else Nc(f);0<h.i.length&&cs(h)}else Q[0]!="stop"&&Q[0]!="close"||Qt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Qt(h,7):Gi(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Qn(4)}catch{}}var lf=class{constructor(o,l){this.g=o,this.map=l}};function fc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function mc(o){return o.h?1:o.g?o.g.size:0}function zi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Wi(o,l){o.g?o.g.add(l):o.h=l}function gc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}fc.prototype.cancel=function(){if(this.i=yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function yc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return V(o.i)}function uf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function hf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function _c(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=hf(o),f=uf(o),T=f.length,A=0;A<T;A++)l.call(void 0,f[A],h&&h[A],o)}var vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function df(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),T=null;if(0<=f){var A=o[h].substring(0,f);T=o[h].substring(f+1)}else A=o[h];l(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Kt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Kt){this.h=o.h,ts(this,o.j),this.o=o.o,this.g=o.g,ns(this,o.s),this.l=o.l;var l=o.i,h=new tr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Ec(this,h),this.m=o.m}else o&&(l=String(o).match(vc))?(this.h=!1,ts(this,l[1]||"",!0),this.o=Zn(l[2]||""),this.g=Zn(l[3]||"",!0),ns(this,l[4]),this.l=Zn(l[5]||"",!0),Ec(this,l[6]||"",!0),this.m=Zn(l[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}Kt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(er(l,wc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(er(l,wc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(er(h,h.charAt(0)=="/"?mf:pf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",er(h,yf)),o.join("")};function tt(o){return new Kt(o)}function ts(o,l,h){o.j=h?Zn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ns(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ec(o,l,h){l instanceof tr?(o.i=l,_f(o.i,o.h)):(h||(l=er(l,gf)),o.i=new tr(l,o.h))}function re(o,l,h){o.i.set(l,h)}function rs(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Zn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function er(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,ff),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ff(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var wc=/[#\/\?@]/g,pf=/[#\?:]/g,mf=/[#\?]/g,gf=/[#\?@]/g,yf=/#/g;function tr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function bt(o){o.g||(o.g=new Map,o.h=0,o.i&&df(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=tr.prototype,n.add=function(o,l){bt(this),this.i=null,o=mn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ic(o,l){bt(o),l=mn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Tc(o,l){return bt(o),l=mn(o,l),o.g.has(l)}n.forEach=function(o,l){bt(this),this.g.forEach(function(h,f){h.forEach(function(T){o.call(l,T,f,this)},this)},this)},n.na=function(){bt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const T=o[f];for(let A=0;A<T.length;A++)h.push(l[f])}return h},n.V=function(o){bt(this);let l=[];if(typeof o=="string")Tc(this,o)&&(l=l.concat(this.g.get(mn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return bt(this),this.i=null,o=mn(this,o),Tc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function bc(o,l,h){Ic(o,l),0<h.length&&(o.i=null,o.g.set(mn(o,l),V(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const A=encodeURIComponent(String(f)),L=this.V(f);for(f=0;f<L.length;f++){var T=A;L[f]!==""&&(T+="="+encodeURIComponent(String(L[f]))),o.push(T)}}return this.i=o.join("&")};function mn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function _f(o,l){l&&!o.j&&(bt(o),o.i=null,o.g.forEach(function(h,f){var T=f.toLowerCase();f!=T&&(Ic(this,f),bc(this,T,h))},o)),o.j=l}function vf(o,l){const h=new Jn;if(c.Image){const f=new Image;f.onload=S(At,h,"TestLoadImage: loaded",!0,l,f),f.onerror=S(At,h,"TestLoadImage: error",!1,l,f),f.onabort=S(At,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(At,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Ef(o,l){const h=new Jn,f=new AbortController,T=setTimeout(()=>{f.abort(),At(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(T),A.ok?At(h,"TestPingServer: ok",!0,l):At(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),At(h,"TestPingServer: error",!1,l)})}function At(o,l,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function wf(){this.g=new nf}function If(o,l,h){const f=h||"";try{_c(o,function(T,A){let L=T;d(T)&&(L=Oi(T)),l.push(f+A+"="+encodeURIComponent(L))})}catch(T){throw l.push(f+"type="+encodeURIComponent("_badmap")),T}}function ss(o){this.l=o.Ub||null,this.j=o.eb||!1}x(ss,Ni),ss.prototype.g=function(){return new is(this.l,this.j)},ss.prototype.i=function(o){return function(){return o}}({});function is(o,l){Te.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(is,Te),n=is.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,rr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ac(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ac(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?nr(this):rr(this),this.readyState==3&&Ac(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,nr(this))},n.Qa=function(o){this.g&&(this.response=o,nr(this))},n.ga=function(){this.g&&nr(this)};function nr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,rr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function rr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Sc(o){let l="";return ne(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function Hi(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Sc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):re(o,l,h))}function ae(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ae,Te);var Tf=/^https?$/i,bf=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bi.g(),this.v=this.o?tc(this.o):tc(Bi),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){Cc(this,A);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())h.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(bf,l,void 0))||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,L]of h)this.g.setRequestHeader(A,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pc(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){Cc(this,A)}};function Cc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,kc(o),os(o)}function kc(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),os(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),os(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Rc(this):this.bb())},n.bb=function(){Rc(this)};function Rc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nt(o)!=4||o.Z()!=2)){if(o.u&&nt(o)==4)Ja(o.Ea,0,o);else if(De(o,"readystatechange"),nt(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=L===0){var T=String(o.D).match(vc)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!Tf.test(T?T.toLowerCase():"")}h=f}if(h)De(o,"complete"),De(o,"success");else{o.m=6;try{var A=2<nt(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",kc(o)}}finally{os(o)}}}}function os(o,l){if(o.g){Pc(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||De(o,"ready");try{h.onreadystatechange=f}catch{}}}function Pc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),tf(l)}};function xc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Af(o){const l={};o=(o.g&&2<=nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(z(o[f]))continue;var h=I(o[f]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=l[T]||[];l[T]=A,A.push(h)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Lc(o){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,o),this.cb=sr("retryDelaySeedMs",1e4,o),this.Wa=sr("forwardChannelMaxRetries",2,o),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new fc(o&&o.concurrentRequestLimit),this.Da=new wf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Lc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){Ve(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=$c(this,null,this.W),cs(this)};function Gi(o){if(Dc(o),o.G==3){var l=o.U++,h=tt(o.I);if(re(h,"SID",o.K),re(h,"RID",l),re(h,"TYPE","terminate"),ir(o,h),l=new Tt(o,o.j,l),l.L=2,l.v=rs(tt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=qc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),es(l)}Uc(o)}function as(o){o.g&&(Qi(o),o.g.cancel(),o.g=null)}function Dc(o){as(o),o.u&&(c.clearTimeout(o.u),o.u=null),ls(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function cs(o){if(!pc(o.h)&&!o.s){o.s=!0;var l=o.Ga;zn||Ha(),Wn||(zn(),Wn=!0),Ci.add(l,o),o.B=0}}function Sf(o,l){return mc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Yn(v(o.Ga,o,l),Bc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new Tt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=m(A),E(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Oc(this,T,l),h=tt(this.I),re(h,"RID",o),re(h,"CVER",22),this.D&&re(h,"X-HTTP-Session-Id",this.D),ir(this,h),A&&(this.O?l="headers="+encodeURIComponent(String(Sc(A)))+"&"+l:this.m&&Hi(h,this.m,A)),Wi(this.h,T),this.Ua&&re(h,"TYPE","init"),this.P?(re(h,"$req",l),re(h,"SID","null"),T.T=!0,$i(T,h,null)):$i(T,h,l),this.G=2}}else this.G==3&&(o?Vc(this,o):this.i.length==0||pc(this.h)||Vc(this))};function Vc(o,l){var h;l?h=l.l:h=o.U++;const f=tt(o.I);re(f,"SID",o.K),re(f,"RID",h),re(f,"AID",o.T),ir(o,f),o.m&&o.o&&Hi(f,o.m,o.o),h=new Tt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Oc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Wi(o.h,h),$i(h,f,l)}function ir(o,l){o.H&&ne(o.H,function(h,f){re(l,f,h)}),o.l&&_c({},function(h,f){re(l,f,h)})}function Oc(o,l,h){h=Math.min(o.i.length,h);var f=o.l?v(o.l.Na,o.l,o):null;e:{var T=o.i;let A=-1;for(;;){const L=["count="+h];A==-1?0<h?(A=T[0].g,L.push("ofs="+A)):A=0:L.push("ofs="+A);let ee=!0;for(let ge=0;ge<h;ge++){let Q=T[ge].g;const be=T[ge].map;if(Q-=A,0>Q)A=Math.max(0,T[ge].g-100),ee=!1;else try{If(be,L,"req"+Q+"_")}catch{f&&f(be)}}if(ee){f=L.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function Nc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;zn||Ha(),Wn||(zn(),Wn=!0),Ci.add(l,o),o.v=0}}function Ki(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Yn(v(o.Fa,o),Bc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Yn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),as(this),Mc(this))};function Qi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Mc(o){o.g=new Tt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=tt(o.qa);re(l,"RID","rpc"),re(l,"SID",o.K),re(l,"AID",o.T),re(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(l,"TO",o.ja),re(l,"TYPE","xmlhttp"),ir(o,l),o.m&&o.o&&Hi(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=rs(tt(l)),h.m=null,h.P=!0,uc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,as(this),Ki(this),Ve(19))};function ls(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Fc(o,l){var h=null;if(o.g==l){ls(o),Qi(o),o.g=null;var f=2}else if(zi(o.h,l))h=l.D,gc(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var T=o.B;f=Jr(),De(f,new oc(f,h)),cs(o)}else Nc(o);else if(T=l.s,T==3||T==0&&0<l.X||!(f==1&&Sf(o,l)||f==2&&Ki(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),T){case 1:Qt(o,5);break;case 4:Qt(o,10);break;case 3:Qt(o,6);break;default:Qt(o,2)}}}function Bc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Qt(o,l){if(o.j.info("Error code "+l),l==2){var h=v(o.fb,o),f=o.Xa;const T=!f;f=new Kt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ts(f,"https"),rs(f),T?vf(f.toString(),h):Ef(f.toString(),h)}else Ve(2);o.G=0,o.l&&o.l.sa(l),Uc(o),Dc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Uc(o){if(o.G=0,o.ka=[],o.l){const l=yc(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function $c(o,l,h){var f=h instanceof Kt?tt(h):new Kt(h);if(f.g!="")l&&(f.g=l+"."+f.g),ns(f,f.s);else{var T=c.location;f=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var A=new Kt(null);f&&ts(A,f),l&&(A.g=l),T&&ns(A,T),h&&(A.l=h),f=A}return h=o.D,l=o.ya,h&&l&&re(f,h,l),re(f,"VER",o.la),ir(o,f),f}function qc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ae(new ss({eb:h})):new ae(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}n=jc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function us(){}us.prototype.g=function(o,l){return new Ne(o,l)};function Ne(o,l){Te.call(this),this.g=new Lc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!z(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!z(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new gn(this)}x(Ne,Te),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Gi(this.g)},Ne.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Oi(o),o=h);l.i.push(new lf(l.Ya++,o)),l.G==3&&cs(l)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Gi(this.g),delete this.g,Ne.aa.N.call(this)};function zc(o){Mi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}x(zc,Mi);function Wc(){Fi.call(this),this.status=1}x(Wc,Fi);function gn(o){this.g=o}x(gn,jc),gn.prototype.ua=function(){De(this.g,"a")},gn.prototype.ta=function(o){De(this.g,new zc(o))},gn.prototype.sa=function(o){De(this.g,new Wc)},gn.prototype.ra=function(){De(this.g,"b")},us.prototype.createWebChannel=us.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,_h=function(){return new us},yh=function(){return Jr()},gh=Ht,vo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,ws=Xr,ac.COMPLETE="complete",mh=ac,nc.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",Te.prototype.listen=Te.prototype.K,lr=nc,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,ph=ae}).apply(typeof fs<"u"?fs:typeof self<"u"?self:typeof window<"u"?window:{});const Tl="@firebase/firestore";/**
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
 */let Un="10.14.0";/**
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
 */const on=new Mo("@firebase/firestore");function or(){return on.logLevel}function N(n,...e){if(on.logLevel<=H.DEBUG){const t=e.map(Jo);on.debug(`Firestore (${Un}): ${n}`,...t)}}function mt(n,...e){if(on.logLevel<=H.ERROR){const t=e.map(Jo);on.error(`Firestore (${Un}): ${n}`,...t)}}function Pn(n,...e){if(on.logLevel<=H.WARN){const t=e.map(Jo);on.warn(`Firestore (${Un}): ${n}`,...t)}}function Jo(n){if(typeof n=="string")return n;try{/**
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
 */function U(n="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+n;throw mt(e),new Error(e)}function Z(n,e){n||U()}function q(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class vh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class by{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class Ay{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Sy{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new lt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new vh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new Ce(e)}}class Cy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ky{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Cy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ry{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Py{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Z(this.o===void 0);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new Ry(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Eh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=xy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function xn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Tr{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Tr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends Tr{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const Ly=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Tr{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return Ly.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(se.fromString(e))}static fromName(e){return new M(se.fromString(e).popFirst(5))}static empty(){return new M(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new se(e.slice()))}}function Dy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new Ft(s,M.empty(),e)}function Vy(n){return new Ft(n.readTime,n.key,-1)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft($.min(),M.empty(),-1)}static max(){return new Ft($.max(),M.empty(),-1)}}function Oy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const Ny="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class My{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Ny)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Fy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Br(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xo.oe=-1;function ni(n){return n==null}function Bs(n){return n===0&&1/n==-1/0}function By(n){return typeof n=="number"&&Number.isInteger(n)&&!Bs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function bl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ln(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ps(this.root,e,this.comparator,!0)}}class ps{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(e){return new Al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ve(this.comparator);return t.data=e,t}}class Al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Be{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Be([])}unionWith(e){let t=new ve(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Ih extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ih("Invalid base64 string: "+i):i}}(e);return new we(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Uy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(Z(!!n),typeof n=="string"){let e=0;const t=Uy.exec(n);if(Z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
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
 */function Zo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ea(n){const e=n.mapValue.fields.__previous_value__;return Zo(e)?ea(e):e}function br(n){const e=Bt(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class $y{constructor(e,t,r,s,i,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class Ar{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ms={mapValue:{}};function cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zo(n)?4:jy(n)?9007199254740991:qy(n)?10:11:U()}function Ze(n,e){if(n===e)return!0;const t=cn(n);if(t!==cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return br(n).isEqual(br(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Bt(s.timestampValue),c=Bt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return an(s.bytesValue).isEqual(an(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=le(s.doubleValue),c=le(i.doubleValue);return a===c?Bs(a)===Bs(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return xn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(bl(a)!==bl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Ze(a[u],c[u])))return!1;return!0}(n,e);default:return U()}}function Sr(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function Ln(n,e){if(n===e)return 0;const t=cn(n),r=cn(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=le(i.integerValue||i.doubleValue),u=le(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Sl(n.timestampValue,e.timestampValue);case 4:return Sl(br(n),br(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,a){const c=an(i),u=an(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=Y(c[d],u[d]);if(p!==0)return p}return Y(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Y(le(i.latitude),le(a.latitude));return c!==0?c:Y(le(i.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Cl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,d,p;const g=i.fields||{},v=a.fields||{},S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,x=(u=v.value)===null||u===void 0?void 0:u.arrayValue,V=Y(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=x==null?void 0:x.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:Cl(S,x)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ms.mapValue&&a===ms.mapValue)return 0;if(i===ms.mapValue)return 1;if(a===ms.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const v=Y(u[g],p[g]);if(v!==0)return v;const S=Ln(c[u[g]],d[p[g]]);if(S!==0)return S}return Y(u.length,p.length)}(n.mapValue,e.mapValue);default:throw U()}}function Sl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Bt(n),r=Bt(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function Cl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ln(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function Dn(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return an(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Eo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Eo(t.fields[a])}`;return s+"}"}(n.mapValue):U()}function kl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wo(n){return!!n&&"integerValue"in n}function ta(n){return!!n&&"arrayValue"in n}function Rl(n){return!!n&&"nullValue"in n}function Pl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Is(n){return!!n&&"mapValue"in n}function qy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function mr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ln(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=mr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=mr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function jy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(t)}setAll(e){let t=_e.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=mr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ln(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Oe(mr(this.value))}}function Th(n){const e=[];return ln(n.fields,(t,r)=>{const s=new _e([t]);if(Is(r)){const i=Th(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Be(e)}/**
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
 */class Us{constructor(e,t){this.position=e,this.inclusive=t}}function xl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Ln(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ll(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class $s{constructor(e,t="asc"){this.field=e,this.dir=t}}function zy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class bh{}class de extends bh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Hy(e,t,r):t==="array-contains"?new Qy(e,r):t==="in"?new Yy(e,r):t==="not-in"?new Jy(e,r):t==="array-contains-any"?new Xy(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Gy(e,r):new Ky(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ln(t,this.value)):t!==null&&cn(this.value)===cn(t)&&this.matchesComparison(Ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends bh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ke(e,t)}matches(e){return Ah(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ah(n){return n.op==="and"}function Sh(n){return Wy(n)&&Ah(n)}function Wy(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function Io(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(Sh(n))return n.filters.map(e=>Io(e)).join(",");{const e=n.filters.map(t=>Io(t)).join(",");return`${n.op}(${e})`}}function Ch(n,e){return n instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&Ze(r.value,s.value)}(n,e):n instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ch(a,s.filters[c]),!0):!1}(n,e):void U()}function kh(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${Dn(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(kh).join(" ,")+"}"}(n):"Filter"}class Hy extends de{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gy extends de{constructor(e,t){super(e,"in",t),this.keys=Rh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ky extends de{constructor(e,t){super(e,"not-in",t),this.keys=Rh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Qy extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ta(t)&&Sr(t.arrayValue,this.value)}}class Yy extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Sr(this.value.arrayValue,t)}}class Jy extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(Sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Sr(this.value.arrayValue,t)}}class Xy extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Sr(this.value.arrayValue,r))}}/**
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
 */class Zy{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Dl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Zy(n,e,t,r,s,i,a)}function na(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Io(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Dn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Dn(r)).join(",")),e.ue=t}return e.ue}function ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ch(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ll(n.startAt,e.startAt)&&Ll(n.endAt,e.endAt)}function To(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ur{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function e_(n,e,t,r,s,i,a,c){return new Ur(n,e,t,r,s,i,a,c)}function ri(n){return new Ur(n)}function Vl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ph(n){return n.collectionGroup!==null}function gr(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ve(_e.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $s(i,r))}),t.has(_e.keyField().canonicalString())||e.ce.push(new $s(_e.keyField(),r))}return e.ce}function Je(n){const e=q(n);return e.le||(e.le=t_(e,gr(n))),e.le}function t_(n,e){if(n.limitType==="F")return Dl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $s(s.field,i)});const t=n.endAt?new Us(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Us(n.startAt.position,n.startAt.inclusive):null;return Dl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function bo(n,e){const t=n.filters.concat([e]);return new Ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ao(n,e,t){return new Ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function si(n,e){return ra(Je(n),Je(e))&&n.limitType===e.limitType}function xh(n){return`${na(Je(n))}|lt:${n.limitType}`}function _n(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>kh(s)).join(", ")}]`),ni(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Dn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Dn(s)).join(",")),`Target(${r})`}(Je(n))}; limitType=${n.limitType})`}function ii(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=xl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,gr(r),s)||r.endAt&&!function(a,c,u){const d=xl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,gr(r),s))}(n,e)}function n_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lh(n){return(e,t)=>{let r=!1;for(const s of gr(n)){const i=r_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function r_(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Ln(u,d):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class $n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ln(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wh(this.inner)}size(){return this.innerSize}}/**
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
 */const s_=new oe(M.comparator);function gt(){return s_}const Dh=new oe(M.comparator);function ur(...n){let e=Dh;for(const t of n)e=e.insert(t.key,t);return e}function Vh(n){let e=Dh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xt(){return yr()}function Oh(){return yr()}function yr(){return new $n(n=>n.toString(),(n,e)=>n.isEqual(e))}const i_=new oe(M.comparator),o_=new ve(M.comparator);function W(...n){let e=o_;for(const t of n)e=e.add(t);return e}const a_=new ve(Y);function c_(){return a_}/**
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
 */function sa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bs(e)?"-0":e}}function Nh(n){return{integerValue:""+n}}function l_(n,e){return By(e)?Nh(e):sa(n,e)}/**
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
 */class oi{constructor(){this._=void 0}}function u_(n,e,t){return n instanceof qs?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zo(i)&&(i=ea(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Cr?Fh(n,e):n instanceof kr?Bh(n,e):function(s,i){const a=Mh(s,i),c=Ol(a)+Ol(s.Pe);return wo(a)&&wo(s.Pe)?Nh(c):sa(s.serializer,c)}(n,e)}function h_(n,e,t){return n instanceof Cr?Fh(n,e):n instanceof kr?Bh(n,e):t}function Mh(n,e){return n instanceof js?function(r){return wo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qs extends oi{}class Cr extends oi{constructor(e){super(),this.elements=e}}function Fh(n,e){const t=Uh(e);for(const r of n.elements)t.some(s=>Ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class kr extends oi{constructor(e){super(),this.elements=e}}function Bh(n,e){let t=Uh(e);for(const r of n.elements)t=t.filter(s=>!Ze(s,r));return{arrayValue:{values:t}}}class js extends oi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ol(n){return le(n.integerValue||n.doubleValue)}function Uh(n){return ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function d_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Cr&&s instanceof Cr||r instanceof kr&&s instanceof kr?xn(r.elements,s.elements,Ze):r instanceof js&&s instanceof js?Ze(r.Pe,s.Pe):r instanceof qs&&s instanceof qs}(n.transform,e.transform)}class f_{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ts(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ai{}function $h(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ia(n.key,Ge.none()):new $r(n.key,n.data,Ge.none());{const t=n.data,r=Oe.empty();let s=new ve(_e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new qt(n.key,r,new Be(s.toArray()),Ge.none())}}function p_(n,e,t){n instanceof $r?function(s,i,a){const c=s.value.clone(),u=Ml(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(s,i,a){if(!Ts(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ml(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(qh(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function _r(n,e,t,r){return n instanceof $r?function(i,a,c,u){if(!Ts(i.precondition,a))return c;const d=i.value.clone(),p=Fl(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof qt?function(i,a,c,u){if(!Ts(i.precondition,a))return c;const d=Fl(i.fieldTransforms,u,a),p=a.data;return p.setAll(qh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return Ts(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function m_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Mh(r.transform,s||null);i!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,i))}return t||null}function Nl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xn(r,s,(i,a)=>d_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $r extends ai{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qt extends ai{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ml(n,e,t){const r=new Map;Z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,h_(a,c,t[s]))}return r}function Fl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,u_(i,a,e))}return r}class ia extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g_ extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class y_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&p_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_r(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_r(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Oh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=$h(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&xn(this.mutations,e.mutations,(t,r)=>Nl(t,r))&&xn(this.baseMutations,e.baseMutations,(t,r)=>Nl(t,r))}}class oa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length);let s=function(){return i_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new oa(e,t,r,s)}}/**
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
 */class __{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class v_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,G;function E_(n){switch(n){default:return U();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function jh(n){if(n===void 0)return mt("GRPC error has no .code"),C.UNKNOWN;switch(n){case he.OK:return C.OK;case he.CANCELLED:return C.CANCELLED;case he.UNKNOWN:return C.UNKNOWN;case he.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case he.INTERNAL:return C.INTERNAL;case he.UNAVAILABLE:return C.UNAVAILABLE;case he.UNAUTHENTICATED:return C.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case he.NOT_FOUND:return C.NOT_FOUND;case he.ALREADY_EXISTS:return C.ALREADY_EXISTS;case he.PERMISSION_DENIED:return C.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case he.ABORTED:return C.ABORTED;case he.OUT_OF_RANGE:return C.OUT_OF_RANGE;case he.UNIMPLEMENTED:return C.UNIMPLEMENTED;case he.DATA_LOSS:return C.DATA_LOSS;default:return U()}}(G=he||(he={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function w_(){return new TextEncoder}/**
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
 */const I_=new tn([4294967295,4294967295],0);function Bl(n){const e=w_().encode(n),t=new fh;return t.update(e),new Uint8Array(t.digest())}function Ul(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tn([t,r],0),new tn([s,i],0)]}class aa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hr(`Invalid padding: ${t}`);if(r<0)throw new hr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=tn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(tn.fromNumber(r)));return s.compare(I_)===1&&(s=new tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Bl(e),[r,s]=Ul(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new aa(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Bl(e),[r,s]=Ul(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ci{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,qr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ci($.min(),s,new oe(Y),gt(),W())}}class qr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new qr(r,t,W(),W(),W())}}/**
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
 */class bs{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class zh{constructor(e,t){this.targetId=e,this.me=t}}class Wh{constructor(e,t,r=we.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class $l{constructor(){this.fe=0,this.ge=jl(),this.pe=we.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new qr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=jl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class T_{constructor(e){this.Le=e,this.Be=new Map,this.ke=gt(),this.qe=ql(),this.Qe=new oe(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(To(i))if(r===0){const a=new M(i.path);this.Ue(t,a,ke.newNoDocument(a,$.min()))}else Z(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=an(r).toUint8Array()}catch(u){if(u instanceof Ih)return Pn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new aa(a,s,i)}catch(u){return Pn(u instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&To(c.target)){const u=new M(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,ke.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=W();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ci(e,t,this.Qe,this.ke,r);return this.ke=gt(),this.qe=ql(),this.Qe=new oe(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new $l,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ve(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $l),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ql(){return new oe(M.comparator)}function jl(){return new oe(M.comparator)}const b_={asc:"ASCENDING",desc:"DESCENDING"},A_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},S_={and:"AND",or:"OR"};class C_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function So(n,e){return n.useProto3Json||ni(e)?e:{value:e}}function zs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function k_(n,e){return zs(n,e.toTimestamp())}function Xe(n){return Z(!!n),$.fromTimestamp(function(t){const r=Bt(t);return new fe(r.seconds,r.nanos)}(n))}function ca(n,e){return Co(n,e).canonicalString()}function Co(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Gh(n){const e=se.fromString(n);return Z(Xh(e)),e}function ko(n,e){return ca(n.databaseId,e.path)}function so(n,e){const t=Gh(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Qh(t))}function Kh(n,e){return ca(n.databaseId,e)}function R_(n){const e=Gh(n);return e.length===4?se.emptyPath():Qh(e)}function Ro(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qh(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function zl(n,e,t){return{name:ko(n,e),fields:t.value.mapValue.fields}}function P_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Z(p===void 0||typeof p=="string"),we.fromBase64String(p||"")):(Z(p===void 0||p instanceof Buffer||p instanceof Uint8Array),we.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?C.UNKNOWN:jh(d.code);return new O(p,d.message||"")}(a);t=new Wh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=so(n,r.document.name),i=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):$.min(),c=new Oe({mapValue:{fields:r.document.fields}}),u=ke.newFoundDocument(s,i,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new bs(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=so(n,r.document),i=r.readTime?Xe(r.readTime):$.min(),a=ke.newNoDocument(s,i),c=r.removedTargetIds||[];t=new bs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=so(n,r.document),i=r.removedTargetIds||[];t=new bs([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new v_(s,i),c=r.targetId;t=new zh(c,a)}}return t}function x_(n,e){let t;if(e instanceof $r)t={update:zl(n,e.key,e.value)};else if(e instanceof ia)t={delete:ko(n,e.key)};else if(e instanceof qt)t={update:zl(n,e.key,e.data),updateMask:U_(e.fieldMask)};else{if(!(e instanceof g_))return U();t={verify:ko(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof qs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Cr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof kr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof js)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:k_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(n,e.precondition)),t}function L_(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Xe(s.updateTime):Xe(i);return a.isEqual($.min())&&(a=Xe(i)),new f_(a,s.transformResults||[])}(t,e))):[]}function D_(n,e){return{documents:[Kh(n,e.path)]}}function V_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Kh(n,s);const i=function(d){if(d.length!==0)return Jh(Ke.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:vn(v.field),direction:M_(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=So(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function O_(n){let e=R_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const v=Yh(g);return v instanceof Ke&&Sh(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(v=>function(x){return new $s(En(x.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(g){let v;return v=typeof g=="object"?g.value:g,ni(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(g){const v=!!g.before,S=g.values||[];return new Us(S,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,S=g.values||[];return new Us(S,v)}(t.endAt)),e_(e,s,a,i,c,"F",u,d)}function N_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=En(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=En(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=En(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=En(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return de.create(En(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>Yh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function M_(n){return b_[n]}function F_(n){return A_[n]}function B_(n){return S_[n]}function vn(n){return{fieldPath:n.canonicalString()}}function En(n){return _e.fromServerFormat(n.fieldPath)}function Jh(n){return n instanceof de?function(t){if(t.op==="=="){if(Pl(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NAN"}};if(Rl(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pl(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NAN"}};if(Rl(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(t.field),op:F_(t.op),value:t.value}}}(n):n instanceof Ke?function(t){const r=t.getFilters().map(s=>Jh(s));return r.length===1?r[0]:{compositeFilter:{op:B_(t.op),filters:r}}}(n):U()}function U_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $_{constructor(e){this.ct=e}}function q_(n){const e=O_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ao(e,e.limit,"L"):e}/**
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
 */class j_{constructor(){this.un=new z_}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Ft.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class z_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ve(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ve(se.comparator)).toArray()}}/**
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
 */class Vn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vn(0)}static kn(){return new Vn(-1)}}/**
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
 */class W_{constructor(){this.changes=new $n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class H_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class G_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&_r(r.mutation,s,Be.empty(),fe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=Xt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ur();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Xt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=gt();const a=yr(),c=function(){return yr()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof qt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),_r(p.mutation,d,p.mutation.getFieldMask(),fe.now())):a.set(d.key,Be.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var g;return c.set(d,new H_(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=yr();let s=new oe((a,c)=>a-c),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Be.empty();p=c.applyToLocalView(d,p),r.set(u,p);const g=(s.get(c.batchId)||W()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,g=Oh();p.forEach(v=>{if(!i.has(v)){const S=$h(t.get(v),r.get(v));S!==null&&g.set(v,S),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ph(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Xt());let c=-1,u=i;return a.next(d=>k.forEach(d,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,W())).next(p=>({batchId:c,changes:Vh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=ur();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ur();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,u=>{const d=function(g,v){return new Ur(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ke.newInvalidDocument(p)))});let c=ur();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&_r(p.mutation,d,Be.empty(),fe.now()),ii(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class K_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:q_(s.bundledQuery),readTime:Xe(s.readTime)}}(t)),k.resolve()}}/**
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
 */class Q_{constructor(){this.overlays=new oe(M.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Xt(),i=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new oe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Xt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Xt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return k.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new __(t,r));let i=this.Ir.get(t);i===void 0&&(i=W(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Y_{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class la{constructor(){this.Tr=new ve(pe.Er),this.dr=new ve(pe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new pe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new M(new se([])),r=new pe(t,e),s=new pe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new M(new se([])),r=new pe(t,e),s=new pe(t,e+1);let i=W();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new pe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return M.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||M.comparator(e.key,t.key)}}/**
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
 */class J_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ve(pe.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new y_(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new pe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ve(Y);return t.forEach(s=>{const i=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const a=new pe(new M(i),0);let c=new ve(Y);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.wr)),!0)},a),k.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const i=new pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new pe(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class X_{constructor(e){this.Mr=e,this.docs=function(){return new oe(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ke.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=gt();const a=t.path,c=new M(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Oy(Vy(p),r)<=0||(s.has(p.key)||ii(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Z_(this)}getSize(e){return k.resolve(this.size)}}class Z_ extends W_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class ev{constructor(e){this.persistence=e,this.Nr=new $n(t=>na(t),ra),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new la,this.targetCount=0,this.kr=Vn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
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
 */class tv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Xo(0),this.Kr=!1,this.Kr=!0,this.$r=new Y_,this.referenceDelegate=e(this),this.Ur=new ev(this),this.indexManager=new j_,this.remoteDocumentCache=function(s){return new X_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $_(t),this.Gr=new K_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Q_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new J_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const s=new nv(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class nv extends My{constructor(e){super(),this.currentSequenceNumber=e}}class ua{constructor(e){this.persistence=e,this.Jr=new la,this.Yr=null}static Zr(e){return new ua(e)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=M.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,$.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class ha{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ha(e,t.fromCache,r,s)}}/**
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
 */class rv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jf()?8:Fy(Pe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new rv;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(or()<=H.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",_n(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(or()<=H.DEBUG&&N("QueryEngine","Query:",_n(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(or()<=H.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",_n(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):k.resolve())}Yi(e,t){if(Vl(t))return k.resolve(null);let r=Je(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ao(t,null,"F"),r=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,c);return this.ns(t,d,a,u.readTime)?this.Yi(e,Ao(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,s){return Vl(t)||s.isEqual($.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?k.resolve(null):(or()<=H.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_n(t)),this.rs(e,a,t,Dy(s,-1)).next(c=>c))})}ts(e,t){let r=new ve(Lh(e));return t.forEach((s,i)=>{ii(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return or()<=H.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",_n(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ft.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class iv{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new oe(Y),this._s=new $n(i=>na(i),ra),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ov(n,e,t,r){return new iv(n,e,t,r)}async function Zh(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function av(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const g=d.batch,v=g.keys();let S=k.resolve();return v.forEach(x=>{S=S.next(()=>p.getEntry(u,x)).next(V=>{const P=d.docVersions.get(x);Z(P!==null),V.version.compareTo(P)<0&&(g.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function ed(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function cv(n,e){const t=q(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,g)=>{const v=s.get(g);if(!v)return;c.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,g)));let S=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(we.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(g,S),function(V,P,F){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(v,S,p)&&c.push(t.Ur.updateTargetData(i,S))});let u=gt(),d=W();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(lv(i,a,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual($.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.os=s,i))}function lv(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=gt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function uv(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hv(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Lt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Po(n,e,t){const r=q(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Br(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Wl(n,e,t){const r=q(n);let s=$.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const g=q(u),v=g._s.get(p);return v!==void 0?k.resolve(g.os.get(v)):g.Ur.getTargetData(d,p)}(r,a,Je(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:$.min(),t?i:W())).next(c=>(dv(r,n_(e),c),{documents:c,Ts:i})))}function dv(n,e,t){let r=n.us.get(e)||$.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Hl{constructor(){this.activeTargetIds=c_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fv{constructor(){this.so=new Hl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Hl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pv{_o(e){}shutdown(){}}/**
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
 */class Gl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gs=null;function io(){return gs===null?gs=function(){return 268435456+Math.round(2147483648*Math.random())}():gs++,"0x"+gs.toString(16)}/**
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
 */const mv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Se="WebChannelConnection";class yv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=io(),u=this.xo(t,r.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,u,d,s).then(p=>(N("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw Pn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=mv[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=io();return new Promise((a,c)=>{const u=new ph;u.setWithCredentials(!0),u.listenOnce(mh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ws.NO_ERROR:const p=u.getResponseJson();N(Se,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case ws.TIMEOUT:N(Se,`RPC '${e}' ${i} timed out`),c(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case ws.HTTP_ERROR:const g=u.getStatus();if(N(Se,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const x=function(P){const F=P.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(F)>=0?F:C.UNKNOWN}(S.status);c(new O(x,S.message))}else c(new O(C.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new O(C.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{N(Se,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);N(Se,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=io(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=_h(),c=yh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");N(Se,`Creating RPC '${e}' stream ${s}: ${p}`,u);const g=a.createWebChannel(p,u);let v=!1,S=!1;const x=new gv({Io:P=>{S?N(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(v||(N(Se,`Opening RPC '${e}' stream ${s} transport.`),g.open(),v=!0),N(Se,`RPC '${e}' stream ${s} sending:`,P),g.send(P))},To:()=>g.close()}),V=(P,F,z)=>{P.listen(F,D=>{try{z(D)}catch(X){setTimeout(()=>{throw X},0)}})};return V(g,lr.EventType.OPEN,()=>{S||(N(Se,`RPC '${e}' stream ${s} transport opened.`),x.yo())}),V(g,lr.EventType.CLOSE,()=>{S||(S=!0,N(Se,`RPC '${e}' stream ${s} transport closed`),x.So())}),V(g,lr.EventType.ERROR,P=>{S||(S=!0,Pn(Se,`RPC '${e}' stream ${s} transport errored:`,P),x.So(new O(C.UNAVAILABLE,"The operation could not be completed")))}),V(g,lr.EventType.MESSAGE,P=>{var F;if(!S){const z=P.data[0];Z(!!z);const D=z,X=D.error||((F=D[0])===null||F===void 0?void 0:F.error);if(X){N(Se,`RPC '${e}' stream ${s} received error:`,X);const ue=X.status;let ne=function(_){const E=he[_];if(E!==void 0)return jh(E)}(ue),w=X.message;ne===void 0&&(ne=C.INTERNAL,w="Unknown error status: "+ue+" with message "+X.message),S=!0,x.So(new O(ne,w)),g.close()}else N(Se,`RPC '${e}' stream ${s} received:`,z),x.bo(z)}}),V(c,gh.STAT_EVENT,P=>{P.stat===vo.PROXY?N(Se,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===vo.NOPROXY&&N(Se,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function oo(){return typeof document<"u"?document:null}/**
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
 */function li(n){return new C_(n,!0)}/**
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
 */class td{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class nd{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new td(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _v extends nd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=P_(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Xe(a.readTime):$.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ro(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=To(u)?{documents:D_(i,u)}:{query:V_(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Hh(i,a.resumeToken);const d=So(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){c.readTime=zs(i,a.snapshotVersion.toTimestamp());const d=So(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=N_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ro(this.serializer),t.removeTarget=e,this.a_(t)}}class vv extends nd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=L_(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ro(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>x_(this.serializer,r))};this.a_(t)}}/**
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
 */class Ev extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Co(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(C.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Co(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class wv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mt(t),this.D_=!1):N("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Iv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{un(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=q(u);d.L_.add(4),await jr(d),d.q_.set("Unknown"),d.L_.delete(4),await ui(d)}(this))})}),this.q_=new wv(r,s)}}async function ui(n){if(un(n))for(const e of n.B_)await e(!0)}async function jr(n){for(const e of n.B_)await e(!1)}function rd(n,e){const t=q(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ma(t)?pa(t):qn(t).r_()&&fa(t,e))}function da(n,e){const t=q(n),r=qn(t);t.N_.delete(e),r.r_()&&sd(t,e),t.N_.size===0&&(r.r_()?r.o_():un(t)&&t.q_.set("Unknown"))}function fa(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qn(n).A_(e)}function sd(n,e){n.Q_.xe(e),qn(n).R_(e)}function pa(n){n.Q_=new T_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.q_.v_()}function ma(n){return un(n)&&!qn(n).n_()&&n.N_.size>0}function un(n){return q(n).L_.size===0}function id(n){n.Q_=void 0}async function Tv(n){n.q_.set("Online")}async function bv(n){n.N_.forEach((e,t)=>{fa(n,e)})}async function Av(n,e){id(n),ma(n)?(n.q_.M_(e),pa(n)):n.q_.set("Unknown")}async function Sv(n,e,t){if(n.q_.set("Online"),e instanceof Wh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ws(n,r)}else if(e instanceof bs?n.Q_.Ke(e):e instanceof zh?n.Q_.He(e):n.Q_.We(e),!t.isEqual($.min()))try{const r=await ed(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(we.EMPTY_BYTE_STRING,p.snapshotVersion)),sd(i,u);const g=new Lt(p.target,u,d,p.sequenceNumber);fa(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await Ws(n,r)}}async function Ws(n,e,t){if(!Br(e))throw e;n.L_.add(1),await jr(n),n.q_.set("Offline"),t||(t=()=>ed(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ui(n)})}function od(n,e){return e().catch(t=>Ws(n,t,e))}async function hi(n){const e=q(n),t=Ut(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Cv(e);)try{const s=await uv(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,kv(e,s)}catch(s){await Ws(e,s)}ad(e)&&cd(e)}function Cv(n){return un(n)&&n.O_.length<10}function kv(n,e){n.O_.push(e);const t=Ut(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ad(n){return un(n)&&!Ut(n).n_()&&n.O_.length>0}function cd(n){Ut(n).start()}async function Rv(n){Ut(n).p_()}async function Pv(n){const e=Ut(n);for(const t of n.O_)e.m_(t.mutations)}async function xv(n,e,t){const r=n.O_.shift(),s=oa.from(r,e,t);await od(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await hi(n)}async function Lv(n,e){e&&Ut(n).V_&&await async function(r,s){if(function(a){return E_(a)&&a!==C.ABORTED}(s.code)){const i=r.O_.shift();Ut(r).s_(),await od(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hi(r)}}(n,e),ad(n)&&cd(n)}async function Kl(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=un(t);t.L_.add(3),await jr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ui(t)}async function Dv(n,e){const t=q(n);e?(t.L_.delete(2),await ui(t)):e||(t.L_.add(2),await jr(t),t.q_.set("Unknown"))}function qn(n){return n.K_||(n.K_=function(t,r,s){const i=q(t);return i.w_(),new _v(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Tv.bind(null,n),Ro:bv.bind(null,n),mo:Av.bind(null,n),d_:Sv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ma(n)?pa(n):n.q_.set("Unknown")):(await n.K_.stop(),id(n))})),n.K_}function Ut(n){return n.U_||(n.U_=function(t,r,s){const i=q(t);return i.w_(),new vv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rv.bind(null,n),mo:Lv.bind(null,n),f_:Pv.bind(null,n),g_:xv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await hi(n)):(await n.U_.stop(),n.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ga{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ga(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(n,e){if(mt("AsyncQueue",`${e}: ${n}`),Br(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Cn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=ur(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new Cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Cn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ql{constructor(){this.W_=new oe(M.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):U():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class On{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new On(e,t,Cn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&si(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Vv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ov{constructor(){this.queries=Yl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=q(t),i=s.queries;s.queries=Yl(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Yl(){return new $n(n=>xh(n),si)}async function _a(n,e){const t=q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Vv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ya(a,`Initialization of query '${_n(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Ea(t)}async function va(n,e){const t=q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Nv(n,e){const t=q(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Ea(t)}function Mv(n,e,t){const r=q(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Ea(n){n.Y_.forEach(e=>{e.next()})}var xo,Jl;(Jl=xo||(xo={})).ea="default",Jl.Cache="cache";class wa{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new On(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=On.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xo.Cache}}/**
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
 */class ld{constructor(e){this.key=e}}class ud{constructor(e){this.key=e}}class Fv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Lh(e),this.Ra=new Cn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Ql,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const v=s.get(p),S=ii(this.query,g)?g:null,x=!!v&&this.mutatedKeys.has(v.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;v&&S?v.data.isEqual(S.data)?x!==V&&(r.track({type:3,doc:S}),P=!0):this.ga(v,S)||(r.track({type:2,doc:S}),P=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!v&&S?(r.track({type:0,doc:S}),P=!0):v&&!S&&(r.track({type:1,doc:v}),P=!0,(u||d)&&(c=!0)),P&&(S?(a=a.add(S),i=V?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,g)=>function(S,x){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return V(S)-V(x)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new On(this.query,e.Ra,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ql,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=W(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new ud(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ld(r))}),t}ba(e){this.Ta=e.Ts,this.da=W();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return On.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Bv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Uv{constructor(e){this.key=e,this.va=!1}}class $v{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new $n(c=>xh(c),si),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(M.comparator),this.Na=new Map,this.La=new la,this.Ba={},this.ka=new Map,this.qa=Vn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function qv(n,e,t=!0){const r=gd(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await hd(r,e,t,!0),s}async function jv(n,e){const t=gd(n);await hd(t,e,!0,!1)}async function hd(n,e,t,r){const s=await hv(n.localStore,Je(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await zv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&rd(n.remoteStore,s),c}async function zv(n,e,t,r,s){n.Ka=(g,v,S)=>async function(V,P,F,z){let D=P.view.ma(F);D.ns&&(D=await Wl(V.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,D)));const X=z&&z.targetChanges.get(P.targetId),ue=z&&z.targetMismatches.get(P.targetId)!=null,ne=P.view.applyChanges(D,V.isPrimaryClient,X,ue);return Zl(V,P.targetId,ne.wa),ne.snapshot}(n,g,v,S);const i=await Wl(n.localStore,e,!0),a=new Fv(e,i.Ts),c=a.ma(i.documents),u=qr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Zl(n,t,d.wa);const p=new Bv(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Wv(n,e,t){const r=q(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!si(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Po(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&da(r.remoteStore,s.targetId),Lo(r,s.targetId)}).catch(Fr)):(Lo(r,s.targetId),await Po(r.localStore,s.targetId,!0))}async function Hv(n,e){const t=q(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),da(t.remoteStore,r.targetId))}async function Gv(n,e,t){const r=eE(n);try{const s=await function(a,c){const u=q(a),d=fe.now(),p=c.reduce((S,x)=>S.add(x.key),W());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=gt(),V=W();return u.cs.getEntries(S,p).next(P=>{x=P,x.forEach((F,z)=>{z.isValidDocument()||(V=V.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,x)).next(P=>{g=P;const F=[];for(const z of c){const D=m_(z,g.get(z.key).overlayedDocument);D!=null&&F.push(new qt(z.key,D,Th(D.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,F,c)}).next(P=>{v=P;const F=P.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(S,P.batchId,F)})}).then(()=>({batchId:v.batchId,changes:Vh(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new oe(Y)),d=d.insert(c,u),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await zr(r,s.changes),await hi(r.remoteStore)}catch(s){const i=ya(s,"Failed to persist write");t.reject(i)}}async function dd(n,e){const t=q(n);try{const r=await cv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Z(a.va):s.removedDocuments.size>0&&(Z(a.va),a.va=!1))}),await zr(t,r,e)}catch(r){await Fr(r)}}function Xl(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=q(a);u.onlineState=c;let d=!1;u.queries.forEach((p,g)=>{for(const v of g.j_)v.Z_(c)&&(d=!0)}),d&&Ea(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kv(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new oe(M.comparator);a=a.insert(i,ke.newNoDocument(i,$.min()));const c=W().add(i),u=new ci($.min(),new Map,new oe(Y),a,c);await dd(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ia(r)}else await Po(r.localStore,e,!1).then(()=>Lo(r,e,t)).catch(Fr)}async function Qv(n,e){const t=q(n),r=e.batch.batchId;try{const s=await av(t.localStore,e);pd(t,r,null),fd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zr(t,s)}catch(s){await Fr(s)}}async function Yv(n,e,t){const r=q(n);try{const s=await function(a,c){const u=q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(Z(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);pd(r,e,t),fd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zr(r,s)}catch(s){await Fr(s)}}function fd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function pd(n,e,t){const r=q(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Lo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||md(n,r)})}function md(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(da(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ia(n))}function Zl(n,e,t){for(const r of t)r instanceof ld?(n.La.addReference(r.key,e),Jv(n,r)):r instanceof ud?(N("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||md(n,r.key)):U()}function Jv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(N("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ia(n))}function Ia(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new M(se.fromString(e)),r=n.qa.next();n.Na.set(r,new Uv(t)),n.Oa=n.Oa.insert(t,r),rd(n.remoteStore,new Lt(Je(ri(t.path)),r,"TargetPurposeLimboResolution",Xo.oe))}}async function zr(n,e,t){const r=q(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=ha.Wi(u.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,d){const p=q(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(d,v=>k.forEach(v.$i,S=>p.persistence.referenceDelegate.addReference(g,v.targetId,S)).next(()=>k.forEach(v.Ui,S=>p.persistence.referenceDelegate.removeReference(g,v.targetId,S)))))}catch(g){if(!Br(g))throw g;N("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const S=p.os.get(v),x=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(x);p.os=p.os.insert(v,V)}}}(r.localStore,i))}async function Xv(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await Zh(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new O(C.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zr(t,r.hs)}}function Zv(n,e){const t=q(n),r=t.Na.get(e);if(r&&r.va)return W().add(r.key);{let s=W();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function gd(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kv.bind(null,e),e.Ca.d_=Nv.bind(null,e.eventManager),e.Ca.$a=Mv.bind(null,e.eventManager),e}function eE(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yv.bind(null,e),e}class Hs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=li(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ov(this.persistence,new sv,e.initialUser,this.serializer)}Ga(e){return new tv(ua.Zr,this.serializer)}Wa(e){return new fv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hs.provider={build:()=>new Hs};class Do{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xv.bind(null,this.syncEngine),await Dv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ov}()}createDatastore(e){const t=li(e.databaseInfo.databaseId),r=function(i){return new yv(i)}(e.databaseInfo);return function(i,a,c,u){return new Ev(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Iv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Xl(this.syncEngine,t,0),function(){return Gl.D()?new Gl:new pv}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,p){const g=new $v(s,i,a,c,u,d);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=q(s);N("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await jr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Do.provider={build:()=>new Do};/**
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
 */class Ta{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class tE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ce.UNAUTHENTICATED,this.clientId=Eh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{N("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ya(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ao(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function eu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nE(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Kl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Kl(e.remoteStore,s)),n._onlineComponents=e}async function nE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await ao(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Pn("Error using user provided cache. Falling back to memory cache: "+t),await ao(n,new Hs)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await ao(n,new Hs);return n._offlineComponents}async function yd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await eu(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await eu(n,new Do))),n._onlineComponents}function rE(n){return yd(n).then(e=>e.syncEngine)}async function Gs(n){const e=await yd(n),t=e.eventManager;return t.onListen=qv.bind(null,e.syncEngine),t.onUnlisten=Wv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Hv.bind(null,e.syncEngine),t}function sE(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new Ta({next:v=>{p.Za(),a.enqueueAndForget(()=>va(i,g));const S=v.docs.has(c);!S&&v.fromCache?d.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&u&&u.source==="server"?d.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new wa(ri(c.path),p,{includeMetadataChanges:!0,_a:!0});return _a(i,g)}(await Gs(n),n.asyncQueue,e,t,r)),r.promise}function iE(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new Ta({next:v=>{p.Za(),a.enqueueAndForget(()=>va(i,g)),v.fromCache&&u.source==="server"?d.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new wa(c,p,{includeMetadataChanges:!0,_a:!0});return _a(i,g)}(await Gs(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function _d(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const tu=new Map;/**
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
 */function vd(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oE(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nu(n){if(!M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ru(n){if(M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function di(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function $e(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=di(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class su{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_d((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new su({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new su(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new by;switch(r.type){case"firstParty":return new ky(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=tu.get(t);r&&(N("ComponentProvider","Removing Datastore"),tu.delete(t),r.terminate())}(this),Promise.resolve()}}function aE(n,e,t,r={}){var s;const i=(n=$e(n,fi))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ce.MOCK_USER;else{c=Nf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ce(d)}n._authCredentials=new Ay(new vh(c,u))}}/**
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
 */class hn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hn(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class Nt extends hn{constructor(e,t,r){super(e,t,ri(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new M(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function pi(n,e,...t){if(n=ce(n),vd("collection","path",e),n instanceof fi){const r=se.fromString(e,...t);return ru(r),new Nt(n,null,r)}{if(!(n instanceof Re||n instanceof Nt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return ru(r),new Nt(n.firestore,null,r)}}function ie(n,e,...t){if(n=ce(n),arguments.length===1&&(e=Eh.newId()),vd("doc","path",e),n instanceof fi){const r=se.fromString(e,...t);return nu(r),new Re(n,null,new M(r))}{if(!(n instanceof Re||n instanceof Nt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return nu(r),new Re(n.firestore,n instanceof Nt?n.converter:null,new M(r))}}/**
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
 */class iu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new td(this,"async_queue_retry"),this.Vu=()=>{const r=oo();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=oo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=oo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new lt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Br(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw mt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=ga.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function ou(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class $t extends fi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new iu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iu(e),this._firestoreClient=void 0,await e}}}function cE(n,e){const t=typeof n=="object"?n:ku(),r=typeof n=="string"?n:"(default)",s=Bo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vf("firestore");i&&aE(s,...i)}return s}function mi(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||lE(n),n._firestoreClient}function lE(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,p){return new $y(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,_d(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new tE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(we.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nn(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ba{constructor(e){this._methodName=e}}/**
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
 */class Aa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class Sa{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const uE=/^__.*__$/;class hE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new $r(e,this.data,t,this.fieldTransforms)}}class Ed{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Ca{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ks(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(wd(this.Cu)&&uE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||li(e)}Qu(e,t,r,s=!1){return new Ca({Cu:e,methodName:t,qu:r,path:_e.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ka(n){const e=n._freezeSettings(),t=li(n._databaseId);return new dE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fE(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Ra("Data must be an object, but it was:",a,r);const c=Id(r,a);let u,d;if(i.merge)u=new Be(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const v=Vo(e,g,t);if(!a.contains(v))throw new O(C.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);bd(p,v)||p.push(v)}u=new Be(p),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new hE(new Oe(c),u,d)}class yi extends ba{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yi}}function pE(n,e,t,r){const s=n.Qu(1,e,t);Ra("Data must be an object, but it was:",s,r);const i=[],a=Oe.empty();ln(r,(u,d)=>{const p=Pa(e,u,t);d=ce(d);const g=s.Nu(p);if(d instanceof yi)i.push(p);else{const v=Wr(d,g);v!=null&&(i.push(p),a.set(p,v))}});const c=new Be(i);return new Ed(a,c,s.fieldTransforms)}function mE(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[Vo(e,r,t)],u=[s];if(i.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)c.push(Vo(e,i[v])),u.push(i[v+1]);const d=[],p=Oe.empty();for(let v=c.length-1;v>=0;--v)if(!bd(d,c[v])){const S=c[v];let x=u[v];x=ce(x);const V=a.Nu(S);if(x instanceof yi)d.push(S);else{const P=Wr(x,V);P!=null&&(d.push(S),p.set(S,P))}}const g=new Be(d);return new Ed(p,g,a.fieldTransforms)}function gE(n,e,t,r=!1){return Wr(t,n.Qu(r?4:3,e))}function Wr(n,e){if(Td(n=ce(n)))return Ra("Unsupported field value:",e,n),Id(n,e);if(n instanceof ba)return function(r,s){if(!wd(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Wr(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return l_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:zs(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zs(s.serializer,i)}}if(r instanceof Aa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nn)return{bytesValue:Hh(s.serializer,r._byteString)};if(r instanceof Re){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ca(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Sa)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return sa(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${di(r)}`)}(n,e)}function Id(n,e){const t={};return wh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ln(n,(r,s)=>{const i=Wr(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Td(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof Aa||n instanceof Nn||n instanceof Re||n instanceof ba||n instanceof Sa)}function Ra(n,e,t){if(!Td(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=di(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Vo(n,e,t){if((e=ce(e))instanceof gi)return e._internalPath;if(typeof e=="string")return Pa(n,e);throw Ks("Field path arguments must be of type string or ",n,!1,void 0,t)}const yE=new RegExp("[~\\*/\\[\\]]");function Pa(n,e,t){if(e.search(yE)>=0)throw Ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new gi(...e.split("."))._internalPath}catch{throw Ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ks(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(C.INVALID_ARGUMENT,c+n+u)}function bd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ad{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _E(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _E extends Ad{data(){return super.data()}}function xa(n,e){return typeof e=="string"?Pa(n,e):e instanceof gi?e._internalPath:e._delegate._internalPath}/**
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
 */function Sd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class La{}class vE extends La{}function _i(n,e,...t){let r=[];e instanceof La&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Da).length,c=i.filter(u=>u instanceof vi).length;if(a>1||a>0&&c>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class vi extends vE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new vi(e,t,r)}_apply(e){const t=this._parse(e);return Cd(e._query,t),new hn(e.firestore,e.converter,bo(e._query,t))}_parse(e){const t=ka(e.firestore);return function(i,a,c,u,d,p,g){let v;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){cu(g,p);const S=[];for(const x of g)S.push(au(u,i,x));v={arrayValue:{values:S}}}else v=au(u,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||cu(g,p),v=gE(c,a,g,p==="in"||p==="not-in");return de.create(d,p,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ei(n,e,t){const r=e,s=xa("where",n);return vi._create(s,r,t)}class Da extends La{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Da(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Cd(a,u),a=bo(a,u)}(e._query,t),new hn(e.firestore,e.converter,bo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function au(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ph(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!M.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kl(n,new M(r))}if(t instanceof Re)return kl(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${di(t)}.`)}function cu(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cd(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class EE{convertValue(e,t="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ln(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>le(a.doubleValue));return new Sa(i)}convertGeoPoint(e){return new Aa(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ea(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(br(e));default:return null}}convertTimestamp(e){const t=Bt(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);Z(Xh(r));const s=new Ar(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||mt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function wE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kd extends Ad{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new As(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class As extends kd{data(e={}){return super.data(e)}}class Rd{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new dr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new As(this._firestore,this._userDataWriter,r.key,r,new dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new As(s._firestore,s._userDataWriter,c.doc.key,c.doc,new dr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new As(s._firestore,s._userDataWriter,c.doc.key,c.doc,new dr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:IE(c.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function IE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
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
 */function wi(n){n=$e(n,Re);const e=$e(n.firestore,$t);return sE(mi(e),n._key).then(t=>xd(e,n,t))}class Va extends EE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function Ii(n){n=$e(n,hn);const e=$e(n.firestore,$t),t=mi(e),r=new Va(e);return Sd(n._query),iE(t,n._query).then(s=>new Rd(e,r,n,s))}function Pd(n,e,t){n=$e(n,Re);const r=$e(n.firestore,$t),s=wE(n.converter,e);return Oa(r,[fE(ka(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ge.none())])}function xe(n,e,t,...r){n=$e(n,Re);const s=$e(n.firestore,$t),i=ka(s);let a;return a=typeof(e=ce(e))=="string"||e instanceof gi?mE(i,"updateDoc",n._key,e,t,r):pE(i,"updateDoc",n._key,e),Oa(s,[a.toMutation(n._key,Ge.exists(!0))])}function TE(n){return Oa($e(n.firestore,$t),[new ia(n._key,Ge.none())])}function Qs(n,...e){var t,r,s;n=ce(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||ou(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ou(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,d,p;if(n instanceof Re)d=$e(n.firestore,$t),p=ri(n._key.path),u={next:g=>{e[a]&&e[a](xd(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=$e(n,hn);d=$e(g.firestore,$t),p=g._query;const v=new Va(d);u={next:S=>{e[a]&&e[a](new Rd(d,v,g,S))},error:e[a+1],complete:e[a+2]},Sd(n._query)}return function(v,S,x,V){const P=new Ta(V),F=new wa(S,P,x);return v.asyncQueue.enqueueAndForget(async()=>_a(await Gs(v),F)),()=>{P.Za(),v.asyncQueue.enqueueAndForget(async()=>va(await Gs(v),F))}}(mi(d),p,c,u)}function Oa(n,e){return function(r,s){const i=new lt;return r.asyncQueue.enqueueAndForget(async()=>Gv(await rE(r),s,i)),i.promise}(mi(n),e)}function xd(n,e,t){const r=t.docs.get(e._key),s=new Va(n);return new kd(n,s,e._key,r,new dr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Un=s})(Fn),Rn(new nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new $t(new Sy(r.getProvider("auth-internal")),new Py(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ot(Tl,"4.7.3",e),Ot(Tl,"4.7.3","esm2017")})();const bE={apiKey:"AIzaSyA9N9iGCBld6BV0MxAWpF5tyMDPLwVxsxY",authDomain:"grocery-lists-29774.firebaseapp.com",projectId:"grocery-lists-29774",storageBucket:"grocery-lists-29774.firebasestorage.app",messagingSenderId:"260921375354",appId:"1:260921375354:web:0d3f81b657660bdd0719c3"},Ld=Cu(bE),jt=Iy(Ld),te=cE(Ld);localStorage.getItem("darkMode")==="true"&&document.documentElement.setAttribute("data-theme","dark");const Rr=document.getElementById("loading-screen"),Dd=document.getElementById("auth-container"),Ti=document.getElementById("app-container"),lu=document.getElementById("login-form"),uu=document.getElementById("signup-form"),Zt=document.getElementById("login-btn"),en=document.getElementById("signup-btn"),AE=document.getElementById("show-signup"),SE=document.getElementById("show-login"),vr=document.getElementById("login-error"),fr=document.getElementById("signup-error"),Na=document.getElementById("header-title"),CE=document.getElementById("header-subtitle");let J=null,K=null,R=null,Ss=null,ut=null,Me=-1,ht=new Set,Hr={},In=localStorage.getItem("listSortMode")||"az",wn=localStorage.getItem("historySortMode")||"az",dn={},Pr=null;const kE=["#EF4444","#F97316","#EAB308","#22C55E","#06B6D4","#6366F1","#EC4899","#94A3B8"];let at=new Set,Le={},co=null,Fe=[],Ue=[],Tn="shared";const RE=["Apples","Bananas","Oranges","Grapes","Strawberries","Blueberries","Raspberries","Blackberries","Watermelon","Cantaloupe","Honeydew","Pineapple","Mango","Papaya","Avocados","Tomatoes","Cucumbers","Lettuce","Spinach","Kale","Arugula","Cabbage","Broccoli","Cauliflower","Carrots","Celery","Bell Peppers","Jalapenos","Onions","Garlic","Ginger","Potatoes","Sweet Potatoes","Mushrooms","Zucchini","Squash","Asparagus","Green Beans","Peas","Corn","Eggplant","Radishes","Beets","Lemons","Limes","Fresh Herbs","Basil","Cilantro","Parsley","Mint","Rosemary","Thyme","Milk","Almond Milk","Oat Milk","Soy Milk","Cream","Half and Half","Butter","Margarine","Eggs","Cheese","Cheddar Cheese","Mozzarella","Parmesan","Feta","Cream Cheese","Cottage Cheese","Sour Cream","Yogurt","Greek Yogurt","Ice Cream","Chicken Breast","Chicken Thighs","Ground Chicken","Whole Chicken","Turkey","Ground Turkey","Beef","Ground Beef","Steak","Pork Chops","Bacon","Sausage","Ham","Hot Dogs","Deli Meat","Salmon","Tuna","Shrimp","Cod","Tilapia","Crab","Bread","Whole Wheat Bread","Sourdough","Bagels","English Muffins","Tortillas","Pita Bread","Croissants","Donuts","Muffins","Cookies","Cake","Pie","Rice","Brown Rice","Pasta","Spaghetti","Penne","Macaroni","Quinoa","Oats","Cereal","Granola","Flour","Sugar","Brown Sugar","Honey","Maple Syrup","Salt","Pepper","Olive Oil","Vegetable Oil","Coconut Oil","Vinegar","Soy Sauce","Hot Sauce","Ketchup","Mustard","Mayonnaise","BBQ Sauce","Salsa","Peanut Butter","Jam","Jelly","Canned Beans","Canned Tomatoes","Tomato Sauce","Pasta Sauce","Chicken Broth","Beef Broth","Vegetable Broth","Soup","Ramen","Mac and Cheese","Black Pepper","Garlic Powder","Onion Powder","Paprika","Cumin","Chili Powder","Oregano","Basil","Thyme","Cinnamon","Nutmeg","Vanilla Extract","Bay Leaves","Chips","Pretzels","Crackers","Popcorn","Nuts","Almonds","Cashews","Peanuts","Trail Mix","Granola Bars","Protein Bars","Candy","Chocolate","Gummy Bears","Coffee","Tea","Green Tea","Juice","Orange Juice","Apple Juice","Soda","Water","Sparkling Water","Energy Drinks","Sports Drinks","Wine","Beer","Kombucha","Frozen Pizza","Frozen Vegetables","Frozen Fruit","Ice Cream","Frozen Dinners","Frozen Chicken","Frozen Fish","French Fries","Tater Tots","Waffles","Pancakes","Canned Corn","Canned Peas","Canned Tuna","Canned Salmon","Pickles","Olives","Applesauce","Fruit Cups","Baking Powder","Baking Soda","Yeast","Chocolate Chips","Cocoa Powder","Powdered Sugar","Condensed Milk","Evaporated Milk","Paper Towels","Toilet Paper","Tissues","Trash Bags","Aluminum Foil","Plastic Wrap","Dish Soap","Laundry Detergent","Fabric Softener","Bleach","Sponges","Cleaning Spray","Napkins","Plates","Cups","Utensils","Batteries","Light Bulbs","Ziploc Bags","Toothpaste","Toothbrush","Mouthwash","Floss","Shampoo","Conditioner","Body Wash","Soap","Deodorant","Razors","Shaving Cream","Lotion","Sunscreen","Band-aids","Diapers","Baby Wipes","Baby Food","Formula","Dog Food","Cat Food","Cat Litter","Pet Treats"].sort(),fn={produce:{label:"Produce",emoji:"🥦"},dairy:{label:"Dairy & Eggs",emoji:"🥛"},meat:{label:"Meat & Seafood",emoji:"🥩"},bakery:{label:"Bakery",emoji:"🍞"},pantry:{label:"Pantry",emoji:"🥫"},spices:{label:"Spices & Seasonings",emoji:"🧂"},snacks:{label:"Snacks",emoji:"🍿"},beverages:{label:"Beverages",emoji:"☕"},frozen:{label:"Frozen",emoji:"🧊"},household:{label:"Household",emoji:"🧴"},personal:{label:"Personal Care",emoji:"🪥"},baby:{label:"Baby & Pet",emoji:"🍼"},other:{label:"Other",emoji:"📦"}},Ys=["produce","dairy","meat","bakery","pantry","spices","snacks","beverages","frozen","household","personal","baby","other"],PE={Apples:"produce",Bananas:"produce",Oranges:"produce",Grapes:"produce",Strawberries:"produce",Blueberries:"produce",Raspberries:"produce",Blackberries:"produce",Watermelon:"produce",Cantaloupe:"produce",Honeydew:"produce",Pineapple:"produce",Mango:"produce",Papaya:"produce",Avocados:"produce",Tomatoes:"produce",Cucumbers:"produce",Lettuce:"produce",Spinach:"produce",Kale:"produce",Arugula:"produce",Cabbage:"produce",Broccoli:"produce",Cauliflower:"produce",Carrots:"produce",Celery:"produce","Bell Peppers":"produce",Jalapenos:"produce",Onions:"produce",Garlic:"produce",Ginger:"produce",Potatoes:"produce","Sweet Potatoes":"produce",Mushrooms:"produce",Zucchini:"produce",Squash:"produce",Asparagus:"produce","Green Beans":"produce",Peas:"produce",Corn:"produce",Eggplant:"produce",Radishes:"produce",Beets:"produce",Lemons:"produce",Limes:"produce","Fresh Herbs":"produce",Basil:"produce",Cilantro:"produce",Parsley:"produce",Mint:"produce",Rosemary:"produce",Thyme:"produce",Milk:"dairy","Almond Milk":"dairy","Oat Milk":"dairy","Soy Milk":"dairy",Cream:"dairy","Half and Half":"dairy",Butter:"dairy",Margarine:"dairy",Eggs:"dairy",Cheese:"dairy","Cheddar Cheese":"dairy",Mozzarella:"dairy",Parmesan:"dairy",Feta:"dairy","Cream Cheese":"dairy","Cottage Cheese":"dairy","Sour Cream":"dairy",Yogurt:"dairy","Greek Yogurt":"dairy","Chicken Breast":"meat","Chicken Thighs":"meat","Ground Chicken":"meat","Whole Chicken":"meat",Turkey:"meat","Ground Turkey":"meat",Beef:"meat","Ground Beef":"meat",Steak:"meat","Pork Chops":"meat",Bacon:"meat",Sausage:"meat",Ham:"meat","Hot Dogs":"meat","Deli Meat":"meat",Salmon:"meat",Tuna:"meat",Shrimp:"meat",Cod:"meat",Tilapia:"meat",Crab:"meat",Bread:"bakery","Whole Wheat Bread":"bakery",Sourdough:"bakery",Bagels:"bakery","English Muffins":"bakery",Tortillas:"bakery","Pita Bread":"bakery",Croissants:"bakery",Donuts:"bakery",Muffins:"bakery",Cookies:"bakery",Cake:"bakery",Pie:"bakery",Rice:"pantry","Brown Rice":"pantry",Pasta:"pantry",Spaghetti:"pantry",Penne:"pantry",Macaroni:"pantry",Quinoa:"pantry",Oats:"pantry",Cereal:"pantry",Granola:"pantry",Flour:"pantry",Sugar:"pantry","Brown Sugar":"pantry",Honey:"pantry","Maple Syrup":"pantry","Olive Oil":"pantry","Vegetable Oil":"pantry","Coconut Oil":"pantry",Vinegar:"pantry","Soy Sauce":"pantry","Hot Sauce":"pantry",Ketchup:"pantry",Mustard:"pantry",Mayonnaise:"pantry","BBQ Sauce":"pantry",Salsa:"pantry","Peanut Butter":"pantry",Jam:"pantry",Jelly:"pantry","Canned Beans":"pantry","Canned Tomatoes":"pantry","Tomato Sauce":"pantry","Pasta Sauce":"pantry","Chicken Broth":"pantry","Beef Broth":"pantry","Vegetable Broth":"pantry",Soup:"pantry",Ramen:"pantry","Mac and Cheese":"pantry","Canned Corn":"pantry","Canned Peas":"pantry","Canned Tuna":"pantry","Canned Salmon":"pantry",Pickles:"pantry",Olives:"pantry",Applesauce:"pantry","Fruit Cups":"pantry","Baking Powder":"pantry","Baking Soda":"pantry",Yeast:"pantry","Chocolate Chips":"pantry","Cocoa Powder":"pantry","Powdered Sugar":"pantry","Condensed Milk":"pantry","Evaporated Milk":"pantry",Salt:"spices",Pepper:"spices","Black Pepper":"spices","Garlic Powder":"spices","Onion Powder":"spices",Paprika:"spices",Cumin:"spices","Chili Powder":"spices",Oregano:"spices",Cinnamon:"spices",Nutmeg:"spices","Vanilla Extract":"spices","Bay Leaves":"spices",Chips:"snacks",Pretzels:"snacks",Crackers:"snacks",Popcorn:"snacks",Nuts:"snacks",Almonds:"snacks",Cashews:"snacks",Peanuts:"snacks","Trail Mix":"snacks","Granola Bars":"snacks","Protein Bars":"snacks",Candy:"snacks",Chocolate:"snacks","Gummy Bears":"snacks",Coffee:"beverages",Tea:"beverages","Green Tea":"beverages",Juice:"beverages","Orange Juice":"beverages","Apple Juice":"beverages",Soda:"beverages",Water:"beverages","Sparkling Water":"beverages","Energy Drinks":"beverages","Sports Drinks":"beverages",Wine:"beverages",Beer:"beverages",Kombucha:"beverages","Frozen Pizza":"frozen","Frozen Vegetables":"frozen","Frozen Fruit":"frozen","Ice Cream":"frozen","Frozen Dinners":"frozen","Frozen Chicken":"frozen","Frozen Fish":"frozen","French Fries":"frozen","Tater Tots":"frozen",Waffles:"frozen",Pancakes:"frozen","Paper Towels":"household","Toilet Paper":"household",Tissues:"household","Trash Bags":"household","Aluminum Foil":"household","Plastic Wrap":"household","Dish Soap":"household","Laundry Detergent":"household","Fabric Softener":"household",Bleach:"household",Sponges:"household","Cleaning Spray":"household",Napkins:"household",Plates:"household",Cups:"household",Utensils:"household",Batteries:"household","Light Bulbs":"household","Ziploc Bags":"household",Toothpaste:"personal",Toothbrush:"personal",Mouthwash:"personal",Floss:"personal",Shampoo:"personal",Conditioner:"personal","Body Wash":"personal",Soap:"personal",Deodorant:"personal",Razors:"personal","Shaving Cream":"personal",Lotion:"personal",Sunscreen:"personal","Band-aids":"personal",Diapers:"baby","Baby Wipes":"baby","Baby Food":"baby",Formula:"baby","Dog Food":"baby","Cat Food":"baby","Cat Litter":"baby","Pet Treats":"baby"},xE=Object.fromEntries(Object.entries(PE).map(([n,e])=>[n.toLowerCase(),e]));LE();function LE(){ug(jt,async n=>{var e;if(n){J=n,console.log("User signed in:",n.email);const t=ie(te,"users",n.uid),r=await wi(t),s=r.exists()?new Date(r.data().createdAt):null,i=new Date("2026-02-21");if(!n.emailVerified&&((e=n.providerData[0])==null?void 0:e.providerId)==="password"&&s&&s>=i){ME(n.email);return}if(!r.exists()||!r.data().termsAccepted){FE(t);return}Vd()}else J=null,xr()}),Zt.addEventListener("click",hu),en.addEventListener("click",du),AE.addEventListener("click",()=>{lu.style.display="none",uu.style.display="block",vr.classList.remove("show")}),SE.addEventListener("click",()=>{uu.style.display="none",lu.style.display="block",fr.classList.remove("show")}),zE(),$E(),WE(),GE(),XE(),document.getElementById("login-email").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("login-password").focus()}),document.getElementById("login-password").addEventListener("keypress",n=>{n.key==="Enter"&&hu()}),document.getElementById("signup-email").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("signup-password").focus()}),document.getElementById("signup-password").addEventListener("keypress",n=>{n.key==="Enter"&&du()})}async function hu(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){kn(vr,"Please enter email and password");return}Zt.disabled=!0,Zt.textContent="Signing in...",vr.classList.remove("show");try{await ag(jt,n,e)}catch(t){console.error("Login error:",t);let r="Failed to sign in";t.code==="auth/invalid-credential"?r="Invalid email or password":t.code==="auth/too-many-requests"&&(r="Too many attempts. Try again later"),kn(vr,r),Zt.disabled=!1,Zt.textContent="Sign In"}}async function du(){const n=document.getElementById("signup-email").value.trim(),e=document.getElementById("signup-password").value;if(!n||!e){kn(fr,"Please enter email and password");return}if(e.length<6){kn(fr,"Password must be at least 6 characters");return}en.disabled=!0,en.textContent="Creating account...",fr.classList.remove("show");try{const t=await og(jt,n,e);await th(t.user),await Pd(ie(te,"users",t.user.uid),{email:n,createdAt:new Date().toISOString(),stores:["Costco","Save-On-Foods","T&T Market"],lists:{Costco:[],"Save-On-Foods":[],"T&T Market":[]},history:[],linkedTo:null,linkedWith:[],pendingInvites:[]}),OE(n)}catch(t){console.error("Signup error:",t);let r="Failed to create account";t.code==="auth/email-already-in-use"?r="Email already in use":t.code==="auth/invalid-email"&&(r="Invalid email address"),kn(fr,r),en.disabled=!1,en.textContent="Create Account"}}async function DE(){try{const n=document.getElementById("hamburger-menu");n&&n.classList.remove("visible"),Ss&&(Ss(),Ss=null),ut&&(ut(),ut=null),await nh(jt)}catch(n){console.error("Logout error:",n)}}window.handleLogout=DE;async function VE(){const n=new Qe;try{console.log("Starting Google sign-in with popup...");const t=(await Pg(jt,n)).user;console.log("Google sign-in successful:",t.email);const r=ie(te,"users",t.uid);(await wi(r)).exists()||(console.log("Creating new user document..."),await Pd(r,{email:t.email,createdAt:new Date().toISOString(),stores:["Costco","Save-On-Foods","T&T Market"],lists:{Costco:[],"Save-On-Foods":[],"T&T Market":[]},history:[],linkedTo:null,linkedWith:[],pendingInvites:[]}),console.log("User document created!")),console.log("Sign-in complete, waiting for auth state change...")}catch(e){if(console.error("Google sign-in error:",e),e.code==="auth/popup-closed-by-user"||e.code==="auth/cancelled-popup-request"){console.log("User closed the popup");return}let t=`Failed to sign in with Google (${e.code})`;e.code==="auth/popup-blocked"?t="Popup was blocked. Please allow popups for this site.":e.code==="auth/unauthorized-domain"&&(t="This domain is not authorized in Firebase."),kn(vr,t),console.error("Error details:",e.code,e.message)}}window.handleGoogleSignIn=VE;function OE(n){const e=document.getElementById("auth-container");e.innerHTML=`
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
  `}window.resendVerification=async function(){try{const n=jt.currentUser;n?(await th(n),j("✓ Verification email sent!")):j("Please sign up again","error")}catch(n){console.error("Resend verification error:",n),j("Failed to send email","error")}};async function NE(){const n=document.getElementById("login-email"),e=(n==null?void 0:n.value.trim())||prompt("Enter your email address:");if(e)try{await ig(jt,e),j(`✓ Password reset email sent to ${e}`)}catch(t){console.error("Password reset error:",t),t.code==="auth/user-not-found"?j("No account found with that email","error"):t.code==="auth/invalid-email"?j("Invalid email address","error"):j("Failed to send reset email","error")}}window.handleForgotPassword=NE;function ME(n){const e=document.getElementById("auth-container");e.style.display="flex",Ti.style.display="none",Rr.style.display="none",e.innerHTML=`
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
  `}window.showDeleteAccountModal=function(){document.getElementById("delete-account-modal").style.display="flex",document.getElementById("delete-confirm-input").value="",document.getElementById("delete-account-error").textContent=""};window.closeDeleteAccountModal=function(){document.getElementById("delete-account-modal").style.display="none"};window.confirmDeleteAccount=async function(){const n=document.getElementById("delete-confirm-input").value.trim(),e=document.getElementById("delete-account-error");if(n!=="DELETE"){e.textContent="Please type DELETE exactly to confirm.";return}const t=document.getElementById("delete-account-confirm-btn");t.disabled=!0,t.textContent="Deleting...",e.textContent="";try{const r=J.uid;if(K.linkedWith&&K.linkedWith.length>0){const s=pi(te,"users"),i=_i(s,Ei("linkedTo","==",r)),a=await Ii(i);for(const c of a.docs)await xe(c.ref,{linkedTo:null})}if(K.linkedTo){const s=ie(te,"users",K.linkedTo),i=await wi(s);if(i.exists()){const a=(i.data().linkedWith||[]).filter(c=>c!==J.email);await xe(s,{linkedWith:a})}}await TE(ie(te,"users",r));try{await dl(J)}catch(s){if(s.code==="auth/requires-recent-login"){const i=new Qe;await xg(J,i),await dl(J)}else throw s}window.location.reload()}catch(r){console.error("Delete account error:",r),t.disabled=!1,t.textContent="Delete My Account",e.textContent="Something went wrong. Please try again or contact support@getlistapp.com."}};function FE(n){const e=document.getElementById("terms-modal"),t=document.getElementById("auth-container");t.style.display="none",Ti.style.display="none",Rr.style.display="none",e.style.display="flex",document.getElementById("terms-accept-btn").onclick=async()=>{e.style.display="none",Rr.style.display="flex",await xe(n,{termsAccepted:!0,termsAcceptedAt:Date.now()}),Vd()},document.getElementById("terms-decline-btn").onclick=async()=>{e.style.display="none",await nh(jt),xr()}}function kn(n,e){n.textContent=e,n.classList.add("show")}async function Vd(){try{const n=ie(te,"users",J.uid);Ss=Qs(n,async e=>{e.exists()?(K=e.data(),K.linkedTo?await UE(K.linkedTo):await BE()):(console.error("User document not found"),xr())})}catch(n){console.error("Error loading user data:",n),xr()}}async function BE(){const n=ie(te,"users",J.uid);ut&&ut(),ut=Qs(n,e=>{e.exists()?(R=e.data(),Le=R.privateLists||{},Hr=R.itemCategories||{},dn=R.storeColors||{},Fe=R.purchaseLog||[],Cs(),Oo()):(console.error("Own grocery data not found"),xr())})}async function UE(n){const e=ie(te,"users",n),t=ie(te,"users",J.uid);ut&&ut(),co&&co(),ut=Qs(e,r=>{r.exists()?(R=r.data(),dn=R.storeColors||{},Cs(),Oo()):(console.error("Linked account not found"),R=K,Cs(),Oo())}),co=Qs(t,r=>{if(r.exists()){const s=r.data();Le=s.privateLists||{},Hr=s.itemCategories||{},Fe=s.purchaseLog||[],Cs()}})}function Cs(){var t;if(!K||!R)return;const n=Object.values(R.lists||{}).reduce((r,s)=>r+s.filter(i=>!i.checked).length,0),e=((t=R.stores)==null?void 0:t.length)||0;CE.textContent=`${e} stores • ${n} items`,jE(),me(),Ai(),zt(),$a(),Wa()}function $E(){const n=document.getElementById("hamburger-menu");n.addEventListener("click",e=>{e.target===n&&toggleMenu()})}window.toggleMenu=function(){document.getElementById("hamburger-menu").classList.toggle("visible")};window.openSettings=function(){toggleMenu(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById("settings-tab").classList.add("active"),Na.textContent="Settings",document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"))};window.openManageSharing=function(){toggleMenu(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById("manage-sharing-tab").classList.add("active"),Na.textContent="Manage Sharing",document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),Ma()};function Ma(){const n=document.getElementById("manage-sharing-tab");if(!n||!K)return;const e=K.linkedTo!==null&&K.linkedTo!==void 0,t=K.linkedWith&&K.linkedWith.length>0;let r="";e?r=`
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
        ${t?qE():'<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No one yet. Add someone above!</p>'}
      </div>
    `,n.innerHTML=r}function qE(){let n="";const e=(K.linkedWith||[]).filter(t=>t&&typeof t=="string"&&t.includes("@")&&t.toLowerCase()!==J.email.toLowerCase());return console.log("Rendering shared with list:",e),console.log("Current user email:",J.email),console.log("Raw linkedWith:",K.linkedWith),e.length===0?'<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No one yet. Add someone above!</p>':(e.forEach(t=>{n+=`
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
    `}),n)}window.addShareFromManage=function(){const n=document.getElementById("manage-share-email"),e=n.value.trim();if(!e){lo("Please enter an email address","error");return}if(!e.includes("@")){lo("Please enter a valid email address","error");return}if(e===J.email){lo("You can't share with yourself!","error");return}Od(e).then(()=>{n.value="",setTimeout(()=>Ma(),500)})};function lo(n,e="success"){const t=document.getElementById("manage-share-status");t&&(t.innerHTML=n,t.style.display="block",t.style.background=e==="error"?"#FEE2E2":"#D1FAE5",t.style.color=e==="error"?"#991B1B":"#065F46")}function jE(){const n=document.getElementById("share-indicator");if(!n)return;const e=K.linkedTo!==null&&K.linkedTo!==void 0,t=K.linkedWith&&K.linkedWith.length>0;e?(n.innerHTML=`
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

You'll return to your own empty lists.`))try{if(await xe(ie(te,"users",J.uid),{linkedTo:null}),K.linkedTo){const n=await wi(ie(te,"users",K.linkedTo));if(n.exists()){const t=(n.data().linkedWith||[]).filter(r=>r!==J.email);await xe(ie(te,"users",K.linkedTo),{linkedWith:t})}}j("✓ Unlinked successfully! Returning to your own lists."),setTimeout(()=>window.location.reload(),1e3)}catch(n){console.error("Error unlinking:",n),j("Failed to unlink","error")}};window.showQuickShare=function(){const n=prompt("Enter email address to share with:");if(n){if(!n.includes("@")){alert("Please enter a valid email address");return}if(n===J.email){alert("You can't share with yourself!");return}Od(n)}};async function Od(n){n=n.trim().toLowerCase();try{j("Searching for account...");const e=pi(te,"users"),t=_i(e,Ei("email","==",n)),r=await Ii(t);if(r.empty){alert(`No account found with email: ${n}

Ask them to create an account first, then try again.`);return}const s=r.docs[0],i=s.id,a=s.data();if(a.linkedTo===J.uid){alert(`${n} is already linked to your account!`);return}if(a.linkedTo){alert(`${n} is already linked to another account.

They must unlink first before you can share with them.`);return}if(a.linkedWith&&a.linkedWith.length>0){alert(`${n} is already sharing their lists with others.

They cannot be added to your shared lists.`);return}await xe(ie(te,"users",i),{linkedTo:J.uid});const c=[...K.linkedWith||[]];c.includes(n)||c.push(n),await xe(ie(te,"users",J.uid),{linkedWith:c}),j(`✓ Successfully linked with ${n}!`)}catch(e){console.error("Error sharing:",e),alert("Failed to send invite. Please try again.")}}window.unlinkUser=async function(n){if(confirm(`Remove ${n} from shared lists?

They will return to their own lists.`))try{j("Removing access...");const e=pi(te,"users"),t=_i(e,Ei("email","==",n)),r=await Ii(t);if(!r.empty){const c=r.docs[0].id;await xe(ie(te,"users",c),{linkedTo:null})}const s=(K.linkedWith||[]).filter(a=>a!==n);await xe(ie(te,"users",J.uid),{linkedWith:s}),j(`✓ Removed ${n} from shared lists`);const i=document.getElementById("manage-sharing-tab");i&&i.classList.contains("active")&&setTimeout(()=>Ma(),500)}catch(e){console.error("Error unlinking user:",e),j("Failed to remove user","error")}};function xr(){Rr.style.display="none",Dd.style.display="block",Ti.style.display="none",Zt.disabled=!1,Zt.textContent="Sign In",en.disabled=!1,en.textContent="Create Account",document.getElementById("login-email").value="",document.getElementById("login-password").value="",document.getElementById("signup-email").value="",document.getElementById("signup-password").value=""}function Oo(){Rr.style.display="none",Dd.style.display="none",Ti.style.display="block"}function zE(){const n=document.querySelectorAll(".nav-item"),e={lists:document.getElementById("lists-tab"),stores:document.getElementById("stores-tab"),history:document.getElementById("history-tab"),feed:document.getElementById("feed-tab")},t={lists:"My Lists",stores:"Manage Stores",history:"Item History",feed:"Smart Feed"},r=document.getElementById("fab-add-btn");n.forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.tab;n.forEach(u=>u.classList.remove("active")),s.classList.add("active"),Object.values(e).forEach(u=>u.classList.remove("active"));const a=document.getElementById("manage-sharing-tab"),c=document.getElementById("settings-tab");a&&a.classList.remove("active"),c&&c.classList.remove("active"),e[i]&&e[i].classList.add("active"),Na.textContent=t[i]||i,r&&(r.style.display=i==="lists"?"flex":"none")})})}function WE(){document.getElementById("fab-add-btn").addEventListener("click",HE)}function HE(){const n=Tn==="private";document.getElementById("add-modal-title").textContent=n?"Add Private Items":"Add Items",Ue=[];const e=document.getElementById("modal-store-selector");e.innerHTML="",((R==null?void 0:R.stores)||[]).forEach(t=>{const r=document.createElement("div");r.className="store-chip",r.textContent=t,r.addEventListener("click",()=>r.classList.toggle("selected")),e.appendChild(r)}),document.getElementById("modal-item-name").value="",document.getElementById("modal-quantity-display").textContent="1",Fa(),document.getElementById("add-modal").classList.add("visible"),qa("modal-item-name","modal-item-name-autocomplete",No),"ontouchstart"in window&&document.getElementById("modal-item-name").blur()}function ks(){document.getElementById("add-modal").classList.remove("visible"),Ue=[]}function Fa(){const n=document.getElementById("modal-pending-section"),e=document.getElementById("modal-pending-list"),t=document.getElementById("modal-pending-count");n.style.display=Ue.length===0?"none":"block",Ue.length!==0&&(t.textContent=`(${Ue.length})`,e.innerHTML=Ue.map((r,s)=>`
    <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--bg-main); border-radius:10px;">
      <span style="font-weight:500; font-size:0.95rem;">${r.name}</span>
      <div style="display:flex; align-items:center; gap:10px;">
        ${r.quantity>1?`<span style="font-size:0.85rem; color:var(--primary); font-weight:600;">×${r.quantity}</span>`:""}
        <button onclick="window.removePendingItem(${s})" style="background:none; border:none; color:#94a3b8; font-size:1.1rem; cursor:pointer; padding:2px 4px; line-height:1;">×</button>
      </div>
    </div>
  `).join(""))}window.removePendingItem=function(n){Ue.splice(n,1),Fa()};function GE(){document.getElementById("modal-add-btn").addEventListener("click",No),document.getElementById("modal-save-btn").addEventListener("click",KE),document.getElementById("modal-cancel-btn").addEventListener("click",ks),document.getElementById("modal-close-x-btn").addEventListener("click",ks),document.getElementById("modal-qty-minus").addEventListener("click",()=>adjustModalQuantity(-1)),document.getElementById("modal-qty-plus").addEventListener("click",()=>adjustModalQuantity(1)),document.getElementById("modal-item-name").addEventListener("keypress",n=>{n.key==="Enter"&&No()}),document.getElementById("add-modal").addEventListener("click",n=>{n.target.id==="add-modal"&&ks()})}window.adjustModalQuantity=function(n){const e=document.getElementById("modal-quantity-display");let t=parseInt(e.textContent)||1;t=Math.max(1,Math.min(99,t+n)),e.textContent=t};function No(){const n=document.getElementById("modal-item-name"),e=n.value.trim();if(!e){j("Please enter an item name","error");return}const{name:t,quantity:r}=$d(e),s=parseInt(document.getElementById("modal-quantity-display").textContent)||1,i=e!==t?r:s,a=t,c=Ue.find(d=>d.name.toLowerCase()===a.toLowerCase());c?c.quantity+=i:Ue.push({name:a,quantity:i}),n.value="",document.getElementById("modal-quantity-display").textContent="1","ontouchstart"in window||n.focus();const u=document.getElementById("modal-add-feedback");u&&(u.classList.add("show"),setTimeout(()=>u.classList.remove("show"),1200)),Fa()}async function KE(){if(Ue.length===0){j("No items to add","error");return}const n=Array.from(document.querySelectorAll("#modal-store-selector .store-chip.selected")).map(e=>e.textContent);if(n.length===0){j("Please select at least one store","error");return}try{const e=Tn==="private",t=e?Le:R.lists,r=[];Ue.forEach(({name:s,quantity:i})=>{n.forEach(a=>{t[a]||(t[a]=[]);const c=t[a].find(u=>u.name.toLowerCase()===s.toLowerCase());c?c.quantity=(c.quantity||1)+i:t[a].push({name:s,checked:!1,quantity:i,isFavorite:dt().includes(s)})}),R.history.includes(s)||R.history.push(s),!e&&!qe(s)&&r.push(s)}),e?(await yt(),await Ee()):await Ee(),j(`✓ Added ${Ue.length} item${Ue.length>1?"s":""} to ${n.length} store${n.length>1?"s":""}`),ks(),r.length>0&&setTimeout(()=>showCategoryPrompt(r[0]),400)}catch(e){console.error("Error adding items:",e),j("Failed to add items","error")}}let Ba=0,Ua=0;function Nd(n){const e=n.target.closest("[data-action]");if(!e)return;const t=e.dataset.action,r=e.dataset.store,s=e.dataset.private==="true";t==="toggle-store"?toggleStore(r,s):t==="bought"?(n.stopPropagation(),removeBoughtItems(r,s)):t==="clear"?(n.stopPropagation(),clearList(r,!1)):t==="clear-private"&&(n.stopPropagation(),clearList(r,!0))}function Md(n){const e=n.target.closest("[data-action]");if(!e)return;const t=n.changedTouches[0].clientY,r=Date.now(),s=Math.abs(t-Ba),i=r-Ua;if(s>10||i>300)return;n.preventDefault();const a=e.dataset.action,c=e.dataset.store,u=e.dataset.private==="true";a==="toggle-store"?toggleStore(c,u):a==="bought"?(n.stopPropagation(),removeBoughtItems(c,u)):a==="clear"?(n.stopPropagation(),clearList(c,!1)):a==="clear-private"&&(n.stopPropagation(),clearList(c,!0))}function me(){const n=document.getElementById("lists-tab");if(!n||!K)return;const e=localStorage.getItem("expandedStores");if(e&&(at=new Set(JSON.parse(e))),n.innerHTML=`
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 0;">
      <div class="lists-subtabs" style="flex: 1;">
        <button class="lists-subtab ${Tn==="shared"?"active":""}" data-subtab="shared"><span class="tab-icon">👥</span>Shared</button>
        <button class="lists-subtab ${Tn==="private"?"active":""}" data-subtab="private"><span class="tab-icon">🔒</span>Private</button>
      </div>
      <button id="sort-toggle-btn" style="white-space: nowrap; padding: 6px 12px; border: 2px solid var(--border); border-radius: 8px; background: var(--bg-card); color: var(--text-secondary); font-size: 0.8rem; font-weight: 600; cursor: pointer; flex-shrink: 0;">
        ${In==="az"?"A–Z":"⊞ Category"}
      </button>
    </div>
    <div id="lists-subtab-content"></div>
  `,n.querySelectorAll(".lists-subtab").forEach(t=>{t.addEventListener("click",()=>{Tn=t.dataset.subtab,me()})}),n.querySelector("#sort-toggle-btn").addEventListener("click",()=>{In=In==="az"?"category":"az",localStorage.setItem("listSortMode",In),me()}),!document.getElementById("lists-styles")){const t=document.createElement("style");t.id="lists-styles",t.textContent=`
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
    `,document.head.appendChild(t)}Tn==="shared"?YE():JE()}function Fd(n){return[...n].sort((e,t)=>{if(e.checked!==t.checked)return e.checked?1:-1;if(In==="category"){const r=Ys.indexOf(qe(e.name)),s=Ys.indexOf(qe(t.name)),i=r===-1?999:r,a=s===-1?999:s;if(i!==a)return i-a}return e.name.localeCompare(t.name)})}function QE(n){return wn==="category"?[...n].sort((e,t)=>{const r=Ys.indexOf(qe(e)),s=Ys.indexOf(qe(t)),i=r===-1?999:r,a=s===-1?999:s;return i!==a?i-a:e.toLowerCase().localeCompare(t.toLowerCase())}):[...n].sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))}function Bd(n,e,t,r){if(n.innerHTML="",In!=="category"){e.forEach((i,a)=>n.appendChild(fu(i,t,a,r)));return}let s=null;e.forEach((i,a)=>{if(!i.checked){const c=qe(i.name);if(c!==s){s=c;const u=document.createElement("div");u.className="category-divider";const d=c?fn[c]:null;u.textContent=d?`${d.emoji} ${d.label}`:"• Other",n.appendChild(u)}}n.appendChild(fu(i,t,a,r))})}function Ud(n,e,t,r,s){const i=e.filter(v=>!v.checked).length,a=e.filter(v=>v.checked).length,c=a>0?`<button class="store-action-btn btn-done" data-store="${n}" data-action="bought" data-private="${s}">✓ Remove Bought (${a})</button>`:"",u=s?"clear-private":"clear",d=dn[n]||null,p=d?`border-left:4px solid ${d};`:"",g=d?`background:linear-gradient(90deg, ${d}22 0%, var(--bg-main) 100%);`:"";return`
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
              ${dt().length>0?dt().map(v=>`
                <div class="history-dropdown-item">
                  <input type="checkbox" id="hist-${t}-${v.replace(/\s+/g,"-")}" value="${v}">
                  <label for="hist-${t}-${v.replace(/\s+/g,"-")}">⭐ ${v}</label>
                </div>
              `).join(""):'<div style="padding: 20px; text-align: center; color: var(--text-secondary);">No favorites yet!<br>Star items to add them here.</div>'}
            </div>
            ${dt().length>0?`
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
  `}function YE(){const n=document.getElementById("lists-subtab-content");if(!n)return;let e="";if(R.stores.length===0)e='<div class="card"><div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet. Add some in the Stores tab!</p></div></div>';else{let t=!1;R.stores.forEach(r=>{const s=R.lists[r]||[];if(s.length===0)return;t=!0;const i=r.replace(/\s+/g,"-"),a=at.has(r);e+=Ud(r,s,i,a,!1)}),t||(e='<div class="card"><div class="empty-state"><div class="empty-icon">📝</div><p>No items yet. Tap + to add some!</p></div></div>')}n.innerHTML=e,n.addEventListener("click",Nd),n.addEventListener("touchstart",t=>{Ba=t.touches[0].clientY,Ua=Date.now()},{passive:!0}),n.addEventListener("touchend",Md),R.stores.forEach(t=>{const r=R.lists[t]||[],s=t.replace(/\s+/g,"-"),i=Fd(r),a=document.getElementById(`list-${s}`);a&&i.length>0&&Bd(a,i,t,!1),setTimeout(()=>{qa(`quick-add-${s}`,`quick-add-${s}-autocomplete`);const c=document.getElementById(`quick-add-${s}`);c&&c.addEventListener("keypress",u=>{u.key==="Enter"&&quickAddItem(t,s,!1)})},0)})}function JE(){const n=document.getElementById("lists-subtab-content");if(!n)return;let e="";if(R.stores.length===0)e='<div class="card"><div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet. Add some in the Stores tab!</p></div></div>';else{let t=!1;R.stores.forEach(r=>{const s=Le[r]||[];if(s.length===0)return;t=!0;const i="priv-"+r.replace(/\s+/g,"-"),a=at.has("priv:"+r);e+=Ud(r,s,i,a,!0)}),t||(e='<div class="card"><div class="empty-state"><div class="empty-icon">🔒</div><p>No private items yet. Tap + to add some!</p></div></div>')}n.innerHTML=e,n.addEventListener("click",Nd),n.addEventListener("touchstart",t=>{Ba=t.touches[0].clientY,Ua=Date.now()},{passive:!0}),n.addEventListener("touchend",Md),R.stores.forEach(t=>{const r=Le[t]||[],s="priv-"+t.replace(/\s+/g,"-"),i=Fd(r),a=document.getElementById(`list-${s}`);a&&i.length>0&&Bd(a,i,t,!0),setTimeout(()=>{qa(`quick-add-${s}`,`quick-add-${s}-autocomplete`);const c=document.getElementById(`quick-add-${s}`);c&&c.addEventListener("keypress",u=>{u.key==="Enter"&&quickAddItem(t,s,!0)})},0)})}window.toggleListHistory=function(n){document.getElementById(`history-dropdown-${n}`).classList.toggle("visible")};window.closeListHistory=function(n){document.getElementById(`history-dropdown-${n}`).classList.remove("visible")};window.addSelectedFromHistory=async function(n,e){const t=Array.from(document.querySelectorAll(`#history-dropdown-${e} input:checked`)).map(r=>r.value);if(t.length===0){j("Please select at least one item","error");return}t.forEach(r=>{R.lists[n]||(R.lists[n]=[]);const s=R.lists[n].find(i=>i.name.toLowerCase()===r.toLowerCase());s?s.quantity=(s.quantity||1)+1:R.lists[n].push({name:r,checked:!1,quantity:1,isFavorite:!0})}),await Ee(),j(`✓ Added ${t.length} favorite(s) to ${n}`),closeListHistory(e),me()};function $d(n){const e=n.match(/^(\d+)\s+(.+)$/);if(e)return{name:e[2].trim(),quantity:parseInt(e[1])};const t=n.match(/^(.+?)\s*[xX](\d+)$/);if(t)return{name:t[1].trim(),quantity:parseInt(t[2])};const r=n.match(/^(.+?)\s+(\d+)$/);return r?{name:r[1].trim(),quantity:parseInt(r[2])}:{name:n.trim(),quantity:1}}window.quickAddItem=async function(n,e,t=!1){const r=document.getElementById(`quick-add-${e}`),s=r.value.trim();if(!s){j("Please enter an item name","error");return}const{name:i,quantity:a}=$d(s),c=t?Le:R.lists;c[n]||(c[n]=[]);const u=c[n].find(d=>d.name.toLowerCase()===i.toLowerCase());if(u){u.quantity=(u.quantity||1)+a,t?await yt():await Ee(),j(`✓ "${i}" quantity updated to ${u.quantity}`),r.value="",me();return}c[n].push({name:i,checked:!1,quantity:a,isFavorite:dt().includes(i)}),R.history.includes(i)||R.history.push(i),t?(await yt(),await Ee()):await Ee(),j(`✓ Added "${i}"${a>1?` (${a})`:""} to ${n}`),r.value="",me(),!t&&!qe(i)&&setTimeout(()=>showCategoryPrompt(i),400)};document.addEventListener("click",n=>{!n.target.closest(".history-dropdown-btn")&&!n.target.closest(".history-dropdown-content")&&document.querySelectorAll(".history-dropdown-content").forEach(e=>{e.classList.remove("visible")})});function $a(){const n=document.getElementById("settings-tab");if(!n||!K)return;const e=document.documentElement.getAttribute("data-theme")==="dark";let t=`
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
  `;n.innerHTML=t}window.sendShareInvite=async function(){const n=document.getElementById("share-email"),e=n.value.trim().toLowerCase(),t=document.getElementById("share-status");if(!e){Ct(t,"Please enter an email address","error");return}if(e===J.email){Ct(t,"You can't share with yourself!","error");return}if(!e.includes("@")){Ct(t,"Please enter a valid email address","error");return}try{console.log("Searching for user with email:",e);const r=pi(te,"users"),s=_i(r,Ei("email","==",e));console.log("Executing query...");const i=await Ii(s);if(console.log("Query results:",i.size,"documents found"),i.empty){Ct(t,`No account found with email: ${e}<br><br>Ask them to create an account first, then try again.`,"error");return}const a=i.docs[0],c=a.id,u=a.data();if(console.log("Found user:",c,u),u.linkedTo===J.uid){Ct(t,`${e} is already linked to your account!`,"error");return}if(u.linkedTo){Ct(t,`${e} is already linked to another account. They must unlink first.`,"error");return}console.log("Linking accounts..."),await xe(ie(te,"users",c),{linkedTo:J.uid}),console.log("Target user updated");const d=[...K.linkedWith||[]];d.includes(e)||d.push(e),await xe(ie(te,"users",J.uid),{linkedWith:d}),console.log("Own user updated"),Ct(t,`✓ Successfully linked with ${e}!<br><br>They will now see your grocery lists when they log in.`,"success"),n.value="",j(`✓ Linked with ${e}!`),setTimeout(()=>$a(),1e3)}catch(r){console.error("Error sharing - Full error:",r),console.error("Error code:",r.code),console.error("Error message:",r.message),Ct(t,`Failed to send invite: ${r.message}<br><br>Check console for details.`,"error")}};function Ct(n,e,t="success"){n.innerHTML=e,n.style.display="block",n.style.background=t==="error"?"#FEE2E2":"#D1FAE5",n.style.color=t==="error"?"#991B1B":"#065F46",n.style.padding="12px",n.style.borderRadius="8px"}function fu(n,e,t,r=!1){n.quantity||(n.quantity=1),n.isFavorite===void 0&&(n.isFavorite=!1);const s=r?yt:Ee,i=document.createElement("div");i.className="grocery-item-container";const a=document.createElement("div");a.className="swipe-bg swipe-right",a.textContent="✓",i.appendChild(a);const c=document.createElement("div");c.className="swipe-bg swipe-left",c.textContent="🗑️",i.appendChild(c);const u=document.createElement("div");u.className="grocery-item"+(n.checked?" checked":"");const d=document.createElement("input");d.type="checkbox",d.checked=n.checked||!1,d.addEventListener("change",async()=>{n.checked=d.checked,u.classList.toggle("checked",d.checked),await s(),d.checked?(u.classList.add("checking-out"),setTimeout(()=>me(),360)):me()});const p=document.createElement("div");p.className="item-name-wrapper",p.style.flex="1",p.style.display="flex",p.style.alignItems="center",p.style.gap="8px",p.style.cursor="pointer",p.style.userSelect="none",p.addEventListener("click",()=>{const D=i.querySelector(".qty-controls-inline");D.classList.contains("expanded")?D.classList.remove("expanded"):(document.querySelectorAll(".qty-controls-inline.expanded").forEach(ue=>{ue.classList.remove("expanded")}),D.classList.add("expanded"),D.querySelector(".qty-display").textContent=n.quantity,D.querySelector(".favorite-checkbox").checked=n.isFavorite)});const g=document.createElement("span");if(g.textContent=n.name,g.style.fontWeight="500",p.appendChild(g),n.quantity>1){const D=document.createElement("span");D.className="quantity-badge",D.textContent=`(get ${n.quantity})`,p.appendChild(D)}if(n.isFavorite){const D=document.createElement("span");D.className="favorite-indicator",D.innerHTML="⭐",D.style.fontSize="1.2rem",D.style.cursor="pointer",D.style.marginLeft="4px",D.title="Click to edit",D.addEventListener("click",X=>{X.stopPropagation();const ue=i.querySelector(".qty-controls-inline");document.querySelectorAll(".qty-controls-inline.expanded").forEach(ne=>{ne.classList.remove("expanded")}),ue.classList.add("expanded"),ue.querySelector(".qty-display").textContent=n.quantity,ue.querySelector(".favorite-checkbox").checked=n.isFavorite}),u.appendChild(d),u.appendChild(p),u.appendChild(D)}else u.appendChild(d),u.appendChild(p);const v=document.createElement("div");v.className="qty-controls-inline";let S=n.quantity,x=n.isFavorite;v.innerHTML=`
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
  `,v.querySelector(".qty-minus").addEventListener("click",D=>{D.stopPropagation(),S>1&&(S--,v.querySelector(".qty-display").textContent=S)}),v.querySelector(".qty-plus").addEventListener("click",D=>{D.stopPropagation(),S++,v.querySelector(".qty-display").textContent=S}),v.querySelector(".favorite-checkbox").addEventListener("change",D=>{D.stopPropagation(),x=D.target.checked}),v.querySelector(".qty-inline-remove").addEventListener("click",D=>{D.stopPropagation(),v.classList.remove("expanded"),mu(n.name,e,r)}),v.querySelector(".qty-inline-ok").addEventListener("click",async D=>{D.stopPropagation(),n.quantity=S,n.isFavorite=x,pu(n.name,"quantity",S,r),pu(n.name,"isFavorite",x,r),await s(),v.classList.remove("expanded"),me()});let V=0,P=0,F=!1;const z=60;return u.addEventListener("touchstart",D=>{V=D.touches[0].clientX,P=D.touches[0].clientY,F=!1,u.style.transition=""},{passive:!0}),u.addEventListener("touchmove",D=>{const X=D.touches[0].clientX-V,ue=D.touches[0].clientY-P;if(!F&&Math.abs(ue)>10)return;F=!0;const ne=Math.max(-120,Math.min(120,X));u.style.transform=`translateX(${ne}px)`;const w=Math.min(Math.abs(ne)/z,1);X>0?(a.style.opacity=w,c.style.opacity="0"):(c.style.opacity=w,a.style.opacity="0")},{passive:!0}),u.addEventListener("touchend",D=>{const X=D.changedTouches[0].clientX-V;u.style.transition="transform 0.2s ease",u.style.transform="translateX(0)",a.style.opacity="0",c.style.opacity="0",F&&(F=!1,X>=z?(d.checked=!d.checked,n.checked=d.checked,u.classList.toggle("checked",d.checked),s().then(()=>{d.checked?(u.classList.add("checking-out"),setTimeout(()=>me(),360)):me()})):X<=-z&&mu(n.name,e,r))},{passive:!0}),i.appendChild(u),i.appendChild(v),i}function pu(n,e,t,r=!1){const s=r?Le:R.lists;R.stores.forEach(i=>{const c=(s[i]||[]).find(u=>u.name.toLowerCase()===n.toLowerCase());c&&(c[e]=t)})}function dt(){const n=new Set;return R.stores.forEach(e=>{(R.lists[e]||[]).forEach(r=>{r.isFavorite&&n.add(r.name)})}),Array.from(n).sort()}window.setHistoryFilter=function(n){window.historyFilter=n,zt()};let rt=null,Rs=!1;window.removeBoughtItems=function(n,e=!1){const t=e?Le:R.lists,s=(t[n]||[]).filter(c=>c.checked);if(s.length===0){j("No bought items to remove","error");return}rt=n,Rs=e;const i=s.filter(c=>R.stores.filter(u=>(t[u]||[]).some(d=>d.name.toLowerCase()===c.name.toLowerCase())).length>1);s.filter(c=>!i.includes(c));const a=document.getElementById("bought-modal-body");document.getElementById("bought-modal-store").textContent=n,i.length===0?a.innerHTML=`
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
    `,a.querySelectorAll(".bought-item-row").forEach(c=>{c.querySelectorAll(".bought-opt-btn").forEach(u=>{u.addEventListener("click",()=>{c.querySelectorAll(".bought-opt-btn").forEach(d=>d.classList.remove("active")),u.classList.add("active")})})})),document.getElementById("bought-modal").classList.add("visible")};function XE(){document.getElementById("bought-confirm-btn").addEventListener("click",async()=>{const n=Rs?Le:R.lists,e=Rs?[]:(n[rt]||[]).filter(r=>r.checked).map(r=>r.name);document.querySelectorAll("#bought-modal-body .bought-item-row").forEach(r=>{const s=r.dataset.itemName,i=r.querySelector(".bought-opt-btn.active");if(!i)return;i.dataset.scope==="all"?R.stores.forEach(c=>{n[c]&&(n[c]=n[c].filter(u=>u.name.toLowerCase()!==s.toLowerCase()))}):n[rt]&&(n[rt]=n[rt].filter(c=>c.name.toLowerCase()!==s.toLowerCase()))});const t=new Set(Array.from(document.querySelectorAll("#bought-modal-body .bought-item-row")).map(r=>r.dataset.itemName.toLowerCase()));n[rt]&&(n[rt]=n[rt].filter(r=>r.checked?(t.has(r.name.toLowerCase()),!1):!0)),Rs?await yt():await Ee(),e.length>0&&zd(e,rt),j("✓ Removed bought items"),document.getElementById("bought-modal").classList.remove("visible"),me()}),document.getElementById("bought-cancel-btn").addEventListener("click",()=>{document.getElementById("bought-modal").classList.remove("visible")}),document.getElementById("bought-modal").addEventListener("click",n=>{n.target.id==="bought-modal"&&document.getElementById("bought-modal").classList.remove("visible")})}window.toggleStore=function(n,e=!1){const t=e?"priv:"+n:n;at.has(t)?at.delete(t):at.add(t),localStorage.setItem("expandedStores",JSON.stringify([...at])),me()};window.clearList=async function(n,e=!1){const t=document.getElementById("clear-modal");document.getElementById("clear-store-name").textContent=n,t.dataset.store=n,t.dataset.private=e?"true":"false",t.classList.add("visible")};document.getElementById("clear-confirm-btn").addEventListener("click",async()=>{const n=document.getElementById("clear-modal"),e=n.dataset.store,t=n.dataset.private==="true";if(e){if(t)Le[e]=[],await yt();else{const r=(R.lists[e]||[]).map(s=>s.name);R.lists[e]=[],await Ee(),r.length>0&&zd(r,e)}j(`✓ Cleared ${e}`),n.classList.remove("visible"),n.dataset.store=""}});document.getElementById("clear-cancel-btn").addEventListener("click",()=>{const n=document.getElementById("clear-modal");n.classList.remove("visible"),n.dataset.store=""});document.getElementById("clear-modal").addEventListener("click",n=>{if(n.target.id==="clear-modal"){const e=document.getElementById("clear-modal");e.classList.remove("visible"),e.dataset.store=""}});let Mt=null,Jt=null,Mn=!1;function mu(n,e,t=!1){Mt=n,Jt=e,Mn=t;const r=document.getElementById("delete-modal");document.getElementById("delete-item-name").textContent=`"${n}"`;const s=t?Le:R.lists,a=R.stores.filter(p=>(s[p]||[]).some(g=>g.name.toLowerCase()===n.toLowerCase())).length>1,c=document.getElementById("delete-all-btn"),u=document.getElementById("delete-store-name"),d=document.getElementById("delete-modal-subtitle");a?(c.style.display="",u.textContent=`📍 Only from ${e}`,d.style.display=""):(c.style.display="none",u.textContent="🗑️ Delete Item",d.style.display="none"),r.classList.add("visible")}function bi(){document.getElementById("delete-modal").classList.remove("visible"),Mt=null,Jt=null,Mn=!1}document.getElementById("delete-all-btn").addEventListener("click",async()=>{if(!Mt)return;const n=Mn?Le:R.lists;R.stores.forEach(e=>{n[e]&&(n[e]=n[e].filter(t=>t.name.toLowerCase()!==Mt.toLowerCase()))}),Mn?await yt():await Ee(),j(`✓ Removed "${Mt}" from all stores`),bi()});document.getElementById("delete-one-btn").addEventListener("click",async()=>{if(!Mt||!Jt)return;const n=Mn?Le:R.lists;n[Jt]&&(n[Jt]=n[Jt].filter(e=>e.name.toLowerCase()!==Mt.toLowerCase())),Mn?await yt():await Ee(),j(`✓ Removed "${Mt}" from ${Jt}`),bi()});document.getElementById("delete-cancel-btn").addEventListener("click",()=>{bi()});document.getElementById("delete-modal").addEventListener("click",n=>{n.target.id==="delete-modal"&&bi()});function Ai(){const n=document.getElementById("stores-tab");if(!n||!K)return;let e=`
    <div class="card">
      <div class="card-title">Add Store</div>
      <div style="display: flex; gap: 8px;">
        <input type="text" id="new-store-name" placeholder="e.g., Walmart" style="flex: 1; padding: 12px 14px; font-size: 0.95rem;">
        <button class="btn btn-primary" style="padding: 10px 16px; font-size: 0.85rem; white-space: nowrap;" onclick="addStore()">+ Add</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Your Stores</div>
  `;R.stores.length===0?e+='<div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet</p></div>':R.stores.forEach((t,r)=>{const s=(R.lists[t]||[]).length,i=dn[t]||null,a=Pr===t,c=t.replace(/'/g,"\\'"),u=i?`background:${i}; border-color:${i};`:"background:var(--bg-main); border:2px dashed var(--border);";e+=`
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
          <button class="btn" style="background:var(--danger); color:white; padding:4px 8px; font-size:0.7rem;" onclick="removeStore(${r})">Remove</button>
        </div>
        ${a?`
        <div style="padding:12px 16px; background:var(--bg-main); border-radius:12px; margin:-4px 0 8px; border:2px solid var(--border); display:flex; flex-wrap:wrap; gap:8px; align-items:center;">
          ${kE.map(d=>`
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
      `}),e+="</div>",n.innerHTML=e,setTimeout(()=>{const t=document.getElementById("new-store-name");t&&t.addEventListener("keypress",r=>{r.key==="Enter"&&addStore()})},0)}window.addStore=async function(){const n=document.getElementById("new-store-name"),e=n.value.trim();if(!e){j("Please enter a store name","error");return}if(R.stores.includes(e)){j("Store already exists","error");return}R.stores.push(e),R.lists[e]=[],await Ee(),j(`✓ Added ${e}`),n.value=""};window.removeStore=async function(n){const e=R.stores[n],t=(R.lists[e]||[]).length;t>0&&!confirm(`${e} has ${t} items. Delete anyway?`)||(R.stores.splice(n,1),delete R.lists[e],Le[e]&&(delete Le[e],await yt()),await Ee(),j(`✓ Removed ${e}`))};function zt(){const n=document.getElementById("history-tab");if(!n||!K)return;window.historyFilter||(window.historyFilter="all");const e=dt();let t=[...R.history||[]];window.historyFilter==="favorites"&&(t=t.filter(a=>e.includes(a)));const r=QE(t);let s='<div class="card">';if(s+='<div class="list-header-compact">',s+='<div class="card-title" style="margin: 0;">Item History</div>',s+=`<button id="history-sort-btn" style="white-space: nowrap; padding: 6px 12px; border: 2px solid var(--border); border-radius: 8px; background: var(--bg-card); color: var(--text-secondary); font-size: 0.8rem; font-weight: 600; cursor: pointer; flex-shrink: 0;">${wn==="az"?"A–Z":"⊞ Category"}</button>`,s+="</div>",s+=`
    <div style="display: flex; gap: 8px; margin: 16px 0; padding: 4px; background: var(--bg-main); border-radius: 8px;">
      <button class="filter-btn ${window.historyFilter==="all"?"active":""}" onclick="setHistoryFilter('all')" style="flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; ${window.historyFilter==="all"?"background: var(--primary); color: white;":"background: transparent; color: var(--text-secondary);"}">
        All (${R.history.length})
      </button>
      <button class="filter-btn ${window.historyFilter==="favorites"?"active":""}" onclick="setHistoryFilter('favorites')" style="flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; ${window.historyFilter==="favorites"?"background: var(--primary); color: white;":"background: transparent; color: var(--text-secondary);"}">
        ⭐ Favorites (${e.length})
      </button>
    </div>
  `,ht.size>0&&(s+=`
      <div style="background: var(--success); color: white; padding: 12px; border-radius: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 600;">${ht.size} items selected</span>
        <button class="btn btn-small" style="background: white; color: var(--success);" onclick="showBulkStoreSelector()">Add to Stores</button>
      </div>
    `),s+=`<div id="bulk-store-selector" style="display: none; background: var(--bg-card); padding: 16px; border: 2px solid var(--primary); border-radius: 12px; margin-bottom: 16px;">
    <div style="font-weight: 600; margin-bottom: 12px;">Select Stores:</div>
    <div class="store-selector" id="bulk-store-chips"></div>
    <div style="display: flex; gap: 8px; margin-top: 12px;">
      <button class="btn btn-primary" style="flex: 1;" onclick="addBulkItemsToStores()">Add Selected Items</button>
      <button class="btn btn-small" style="background: var(--text-secondary); color: white;" onclick="hideBulkStoreSelector()">Cancel</button>
    </div>
  </div>`,r.length===0){const a=window.historyFilter==="favorites"?'<div class="empty-state"><div class="empty-icon">⭐</div><p>No favorites yet<br><small style="opacity: 0.7;">Star items in your lists to add them here</small></p></div>':'<div class="empty-state"><div class="empty-icon">📜</div><p>No items in history yet</p></div>';s+=a}else{let a=null;r.forEach(c=>{const u=e.includes(c),d=qe(c),p=d?fn[d]:null,g=c.replace(/'/g,"\\'");if(wn==="category"&&d!==a){a=d;const S=p?`${p.emoji} ${p.label}`:"📦 Other";s+=`<div class="category-divider">${S}</div>`}const v=p?`<button onclick="event.stopPropagation();showCategoryPrompt('${g}')" title="Change category: ${p.label}" style="background:none;border:none;font-size:1rem;opacity:0.7;cursor:pointer;padding:2px 4px;">${p.emoji}</button>`:`<button onclick="event.stopPropagation();showCategoryPrompt('${g}')" title="Categorize item" style="background:none;border:1px dashed var(--border);border-radius:6px;padding:2px 6px;cursor:pointer;font-size:0.75rem;color:var(--text-secondary);">+ tag</button>`;s+=`
        <div class="history-item bulk-mode" data-item="${c}" onclick="toggleHistoryCheckbox('${c}')">
          <input type="checkbox" class="history-checkbox" data-item="${c}" ${ht.has(c)?"checked":""} onchange="updateBulkSelection('${c}')">
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
          </div>`},500)},{passive:!0}),a.addEventListener("touchend",()=>clearTimeout(c),{passive:!0}),a.addEventListener("touchmove",()=>clearTimeout(c),{passive:!0})});const i=n.querySelector("#history-sort-btn");if(i&&i.addEventListener("click",()=>{wn=wn==="az"?"category":"az",localStorage.setItem("historySortMode",wn),zt()}),!document.getElementById("history-styles")){const a=document.createElement("style");a.id="history-styles",a.textContent=`
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
    `,document.head.appendChild(a)}}window.updateBulkSelection=function(n){ht.has(n)?ht.delete(n):ht.add(n),zt()};window.toggleHistoryCheckbox=function(n){const e=document.querySelector(`.history-checkbox[data-item="${n}"]`);e&&(e.checked=!e.checked,updateBulkSelection(n))};window.showBulkStoreSelector=function(){const n=document.getElementById("bulk-store-selector"),e=document.getElementById("bulk-store-chips");e.innerHTML="",R.stores.forEach(t=>{const r=document.createElement("div");r.className="store-chip",r.textContent=t,r.addEventListener("click",()=>r.classList.toggle("selected")),e.appendChild(r)}),n.style.display="block"};window.hideBulkStoreSelector=function(){document.getElementById("bulk-store-selector").style.display="none"};window.addBulkItemsToStores=async function(){const n=Array.from(document.querySelectorAll("#bulk-store-chips .store-chip.selected")).map(t=>t.textContent);if(n.length===0){j("Please select at least one store","error");return}const e=dt();ht.forEach(t=>{const r=e.includes(t);n.forEach(s=>{R.lists[s]||(R.lists[s]=[]);const i=R.lists[s].find(a=>a.name.toLowerCase()===t.toLowerCase());i?i.quantity=(i.quantity||1)+1:R.lists[s].push({name:t,checked:!1,quantity:1,isFavorite:r})})}),await Ee(),j(`✓ Added ${ht.size} items to ${n.length} store(s)`),ht.clear(),zt()};async function qd(){const n=K.linkedTo||J.uid;await xe(ie(te,"users",n),{storeColors:dn})}window.openStoreColorPicker=function(n){Pr=Pr===n?null:n,Ai()};window.setStoreColor=async function(n,e){dn[n]=e,Pr=null,await qd(),Ai(),me()};window.clearStoreColor=async function(n){delete dn[n],Pr=null,await qd(),Ai(),me()};window.toggleDarkMode=function(){document.documentElement.getAttribute("data-theme")==="dark"?(document.documentElement.removeAttribute("data-theme"),localStorage.setItem("darkMode","false")):(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("darkMode","true")),$a()};window.deleteHistoryItem=async function(n){R.history=(R.history||[]).filter(e=>e!==n),await Ee(),j(`Removed "${n}" from history`),zt()};window.renderHistoryTab=zt;function qa(n,e,t){const r=document.getElementById(n),s=document.getElementById(e);!r||!s||(r.addEventListener("input",i=>{const a=i.target.value.trim().toLowerCase();if(a.length===0){s.classList.remove("visible");return}const u=[...new Set([...RE,...(R==null?void 0:R.history)||[]])].filter(d=>d.toLowerCase().includes(a)).sort((d,p)=>{const g=d.toLowerCase().startsWith(a),v=p.toLowerCase().startsWith(a);return g&&!v?-1:!g&&v?1:d.toLowerCase().localeCompare(p.toLowerCase())});if(u.length===0){s.classList.remove("visible");return}s.innerHTML=u.slice(0,8).map((d,p)=>{const g=d.toLowerCase().indexOf(a),v=g>=0?d.slice(0,g)+`<strong>${d.slice(g,g+a.length)}</strong>`+d.slice(g+a.length):d;return`<div class="autocomplete-item" data-value="${d}" data-index="${p}">${v}</div>`}).join(""),s.classList.add("visible"),Me=-1}),r.addEventListener("keydown",i=>{const a=s.querySelectorAll(".autocomplete-item");if(i.key==="ArrowDown")i.preventDefault(),Me=Math.min(Me+1,a.length-1),gu(a);else if(i.key==="ArrowUp")i.preventDefault(),Me=Math.max(Me-1,-1),gu(a);else if(i.key==="Enter"&&Me>=0){i.preventDefault();const c=a[Me];c&&(r.value=c.dataset.value,s.classList.remove("visible"),Me=-1,t&&t())}else i.key==="Escape"&&(s.classList.remove("visible"),Me=-1)}),s.addEventListener("pointerdown",i=>{const a=i.target.closest(".autocomplete-item");a&&(i.preventDefault(),r.value=a.dataset.value,s.classList.remove("visible"),Me=-1,t&&t())}),document.addEventListener("click",i=>{!r.contains(i.target)&&!s.contains(i.target)&&(s.classList.remove("visible"),Me=-1)}))}function gu(n){n.forEach((e,t)=>{e.classList.toggle("selected",t===Me),t===Me&&e.scrollIntoView({block:"nearest"})})}const yu={restock:{bg:"#f0fdf4",border:"#22c55e",icon:"#dcfce7"},building:{bg:"#eff6ff",border:"#3b82f6",icon:"#dbeafe"},consolidate:{bg:"#fffbeb",border:"#f59e0b",icon:"#fef3c7"},uncategorized:{bg:"#faf5ff",border:"#a855f7",icon:"#f3e8ff"},due:{bg:"#fff7ed",border:"#f97316",icon:"#ffedd5"},havent:{bg:"#f0fdfa",border:"#14b8a6",icon:"#ccfbf1"},pattern:{bg:"#eef2ff",border:"#6366f1",icon:"#e0e7ff"},together:{bg:"#f0fdf4",border:"#10b981",icon:"#d1fae5"}};function jd(){const n=JSON.parse(localStorage.getItem("feedDismissed")||"{}"),e=Date.now(),t=24*60*60*1e3;return Object.keys(n).forEach(r=>{e-n[r]>t&&delete n[r]}),n}window.dismissFeedCard=function(n){const e=jd();e[n]=Date.now(),localStorage.setItem("feedDismissed",JSON.stringify(e)),Wa()};window.feedAddToStore=async function(n,e){R.lists[e]||(R.lists[e]=[]);const t=R.lists[e].find(r=>r.name.toLowerCase()===n.toLowerCase());t?t.quantity=(t.quantity||1)+1:R.lists[e].push({name:n,checked:!1,quantity:1,isFavorite:dt().includes(n)}),R.history.includes(n)||R.history.push(n),await Ee(),j(`✓ Added "${n}" to ${e}`),Wa(),me()};window.feedSwitchToLists=function(n){var e;(e=document.querySelector('.nav-item[data-tab="lists"]'))==null||e.click(),n&&setTimeout(()=>{at.add(n),localStorage.setItem("expandedStores",JSON.stringify([...at])),me()},100)};window.feedSwitchToHistory=function(){var n;(n=document.querySelector('.nav-item[data-tab="history"]'))==null||n.click()};window.feedRemoveFromHistory=async function(n,e){R.history=R.history.filter(t=>t.toLowerCase()!==n.toLowerCase()),await Ee(),window.dismissFeedCard(e)};function ja(n){const e=n.toLowerCase();return Fe.filter(t=>t.items.some(r=>r.toLowerCase()===e))}function za(n){if(n.length<2)return null;const e=[...n].sort((r,s)=>r.ts-s.ts);let t=0;for(let r=1;r<e.length;r++)t+=e[r].ts-e[r-1].ts;return t/(e.length-1)/(1e3*60*60*24)}function Si(n){var r;const e=ja(n);if(!e.length)return R.stores[0]||null;const t={};return e.forEach(s=>{t[s.store]=(t[s.store]||0)+1}),((r=Object.entries(t).sort((s,i)=>i[1]-s[1])[0])==null?void 0:r[0])||R.stores[0]}function Wt(n,e,t,r,s,i){const a=yu[e]||yu.restock,c=i.map(u=>`<button onclick="${u.handler}" style="padding: 8px 14px; border-radius: 8px; border: none; background: ${u.primary?a.border:"var(--bg-main)"}; color: ${u.primary?"white":"var(--text-secondary)"}; font-size: 0.82rem; font-weight: 600; cursor: pointer; font-family: inherit;">${u.label}</button>`).join("");return`
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
  `}function ZE(n){const e=dt(),t=new Set(Object.values(R.lists||{}).flatMap(s=>s.map(i=>i.name.toLowerCase()))),r=[];for(const s of e){if(t.has(s.toLowerCase()))continue;const i=`restock-${s}`;if(n[i])continue;const a=Si(s);if(!a)continue;const c=qe(s),u=c?fn[c].emoji:"⭐";if(r.push(Wt(i,"restock",u,`Restock ${s}`,"A favourite not on any current list",[{label:`Add to ${a}`,handler:`feedAddToStore('${s.replace(/'/g,"\\'")}', '${a.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not now",handler:`dismissFeedCard('${i}')`,primary:!1}])),r.length>=3)break}return r}function ew(n){const e=[];return(R.stores||[]).forEach(t=>{const r=(R.lists[t]||[]).filter(i=>!i.checked).length;if(r<5)return;const s=`building-${t}`;n[s]||e.push(Wt(s,"building","🛒",`${t} list is growing`,`${r} items waiting — ready for a trip?`,[{label:`View ${t}`,handler:`feedSwitchToLists('${t.replace(/'/g,"\\'")}')`,primary:!0},{label:"Dismiss",handler:`dismissFeedCard('${s}')`,primary:!1}]))}),e}function tw(n){const e="consolidation";if(n[e])return[];const t=(R.stores||[]).filter(r=>(R.lists[r]||[]).filter(i=>!i.checked).length===1);return t.length<2?[]:[Wt(e,"consolidate","🗂️","Consider consolidating",`${t.join(", ")} each have just 1 item — could be one trip`,[{label:"View lists",handler:"feedSwitchToLists()",primary:!0},{label:"Dismiss",handler:`dismissFeedCard('${e}')`,primary:!1}])]}function nw(n){const e="uncategorized";if(n[e])return[];const t=(R.history||[]).filter(r=>!qe(r));return t.length===0?[]:[Wt(e,"uncategorized","🏷️",`${t.length} item${t.length>1?"s":""} without a category`,"Categorizing helps sort your lists by aisle",[{label:"Go to History",handler:"feedSwitchToHistory()",primary:!0},{label:"Later",handler:`dismissFeedCard('${e}')`,primary:!1}])]}function rw(n){const e=[],t=Date.now(),r=new Set(Object.values(R.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),s=new Set;return Fe.forEach(i=>{i.items.forEach(a=>{const c=a.toLowerCase();if(s.has(c)||r.has(c))return;s.add(c);const u=`due-${c}`;if(n[u])return;const d=ja(a);if(d.length<2)return;const p=za(d);if(!p||p>60)return;const g=d.reduce((P,F)=>P.ts>F.ts?P:F),v=(t-g.ts)/(1e3*60*60*24);if(v<p*1.1)return;const S=Si(a);if(!S)return;const x=qe(a),V=x?fn[x].emoji:"🔁";e.push(Wt(u,"due",V,`Time to restock ${a}`,`Usually every ${Math.round(p)} days — ${Math.round(v)} days since last purchase`,[{label:`Add to ${S}`,handler:`feedAddToStore('${a.replace(/'/g,"\\'")}', '${S.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not yet",handler:`dismissFeedCard('${u}')`,primary:!1}])),e.length>=3})}),e.slice(0,3)}function sw(n){const e=[],t=Date.now(),r=new Set(Object.values(R.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),s=new Set;return Fe.forEach(i=>{i.items.forEach(a=>{const c=a.toLowerCase();if(s.has(c)||r.has(c))return;s.add(c);const u=ja(a);if(u.length===0)return;const d=u.reduce((P,F)=>P.ts>F.ts?P:F),p=(t-d.ts)/(1e3*60*60*24),g=za(u);if(g&&g<60||p<30)return;const v=`havent-${c}`;if(n[v])return;const S=Si(a),x=qe(a),V=x?fn[x].emoji:"🕐";e.push(Wt(v,"havent",V,`Haven't seen ${a} in a while`,`Last purchased ${Math.round(p)} days ago`,[{label:S?`Add to ${S}`:"Add to list",handler:S?`feedAddToStore('${a.replace(/'/g,"\\'")}', '${S.replace(/'/g,"\\'")}')`:"feedSwitchToLists()",primary:!0},{label:"Remove from history",handler:`feedRemoveFromHistory('${a.replace(/'/g,"\\'")}', '${v}')`,primary:!1}])),e.length>=2})}),e.slice(0,2)}function iw(n){const e=[],t=Date.now();return(R.stores||[]).forEach(r=>{const s=`pattern-${r}`;if(n[s])return;const i=Fe.filter(g=>g.store===r);if(i.length<3)return;const a=za(i);if(!a)return;const c=i.reduce((g,v)=>g.ts>v.ts?g:v),u=(t-c.ts)/(1e3*60*60*24);if(u<a*.9)return;const d=(R.lists[r]||[]).filter(g=>!g.checked).length,p=d>0?`Usually every ${Math.round(a)} days — ${Math.round(u)} days since last visit, ${d} items waiting`:`Usually every ${Math.round(a)} days — ${Math.round(u)} days since last visit`;e.push(Wt(s,"pattern","📅",`${r} run coming up?`,p,[{label:`View ${r}`,handler:`feedSwitchToLists('${r.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not yet",handler:`dismissFeedCard('${s}')`,primary:!1}]))}),e}function ow(n){if(Fe.length<5)return[];const e=[],t=new Set(Object.values(R.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),r={};Fe.forEach(i=>{const a=i.items.map(c=>c.toLowerCase());for(let c=0;c<a.length;c++)for(let u=c+1;u<a.length;u++){const d=[a[c],a[u]].sort().join("|||");r[d]=(r[d]||0)+1}});const s=new Set;return Object.entries(r).filter(([,i])=>i>=2).sort((i,a)=>a[1]-i[1]).forEach(([i,a])=>{if(e.length>=2)return;const[c,u]=i.split("|||"),d=t.has(c),p=t.has(u);if(d===p)return;const g=d?c:u,v=d?u:c,S=`together-${v}`;if(n[S]||s.has(S))return;s.add(S);const x=Si(v);if(!x)return;const V=R.history.find(D=>D.toLowerCase()===g)||g,P=R.history.find(D=>D.toLowerCase()===v)||v,F=qe(P),z=F?fn[F].emoji:"🔗";e.push(Wt(S,"together",z,`Often bought with ${V}`,`You usually pick up ${P} too (${a} times)`,[{label:`Add ${P}`,handler:`feedAddToStore('${P.replace(/'/g,"\\'")}', '${x.replace(/'/g,"\\'")}')`,primary:!0},{label:"Skip",handler:`dismissFeedCard('${S}')`,primary:!1}]))}),e}function Wa(){const n=document.getElementById("feed-tab");if(!n||!K)return;const e=jd(),t=[...ZE(e),...ew(e),...tw(e),...ow(e),...rw(e),...iw(e),...sw(e),...nw(e)];if(!document.getElementById("feed-styles")){const r=document.createElement("style");r.id="feed-styles",r.textContent=`
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
  `}async function Ee(){try{const n=K.linkedTo||J.uid;console.log("Saving data to user:",n),console.log("Current user:",J.uid),console.log("Linked to:",K.linkedTo),await xe(ie(te,"users",n),{stores:R.stores,lists:R.lists,history:R.history}),console.log("Save successful")}catch(n){console.error("Error saving data:",n),console.error("Error code:",n.code),console.error("Error message:",n.message),j("Failed to save","error")}}async function yt(){try{await xe(ie(te,"users",J.uid),{privateLists:Le})}catch(n){console.error("Error saving private data:",n),j("Failed to save","error")}}async function aw(){try{await xe(ie(te,"users",J.uid),{itemCategories:Hr})}catch(n){console.error("Error saving item categories:",n)}}async function zd(n,e){if(!(!n||n.length===0)){Fe.push({items:n,store:e,ts:Date.now()}),Fe.length>500&&(Fe=Fe.slice(-500));try{await xe(ie(te,"users",J.uid),{purchaseLog:Fe})}catch(t){console.error("Error saving purchase log:",t)}}}function qe(n){const e=n.toLowerCase();return Hr[e]||xE[e]||null}window.showCategoryPrompt=function(e){const t=document.getElementById("category-prompt-modal"),r=document.getElementById("category-prompt-item-name"),s=document.getElementById("category-chips");r.textContent=`"${e}"`,s.innerHTML="",Object.entries(fn).forEach(([i,{label:a,emoji:c}])=>{const u=document.createElement("button");u.style.cssText="padding: 8px 12px; border: 2px solid var(--border); border-radius: 20px; background: var(--bg-main); cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;",u.innerHTML=`${c} ${a}`,u.addEventListener("click",async()=>{Hr[e.toLowerCase()]=i,await aw(),_u(),me(),zt()}),s.appendChild(u)}),t.classList.add("visible"),document.getElementById("category-prompt-skip-btn").onclick=_u};function _u(){document.getElementById("category-prompt-modal").classList.remove("visible")}function j(n,e="success"){const t=document.createElement("div");t.className=`toast ${e}`,t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toastFadeOut 0.3s ease forwards",setTimeout(()=>t.remove(),300)},2e3)}
