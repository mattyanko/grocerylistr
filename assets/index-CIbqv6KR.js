(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var $c={};/**
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
 */const pu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},If=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,S=d&63;u||(S=64,a||(E=64)),r.push(t[p],t[g],t[E],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):If(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new Tf;const E=i<<2|c>>4;if(r.push(E),d!==64){const S=c<<4&240|d>>2;if(r.push(S),g!==64){const C=d<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bf=function(n){const e=pu(n);return mu.encodeByteArray(e,!0)},Cs=function(n){return bf(n).replace(/\./g,"")},gu=function(n){try{return mu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Af(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sf=()=>Af().__FIREBASE_DEFAULTS__,Cf=()=>{if(typeof process>"u"||typeof $c>"u")return;const n=$c.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gu(n[1]);return e&&JSON.parse(e)},Ks=()=>{try{return Sf()||Cf()||Rf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yu=n=>{var e,t;return(t=(e=Ks())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kf=n=>{const e=yu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},_u=()=>{var n;return(n=Ks())===null||n===void 0?void 0:n.config},vu=n=>{var e;return(e=Ks())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Pf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Df(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Cs(JSON.stringify(t)),Cs(JSON.stringify(a)),""].join(".")}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Lf(){var n;const e=(n=Ks())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Of(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mf(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ff(){return!Lf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bf(){try{return typeof indexedDB=="object"}catch{return!1}}function Uf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const $f="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$f,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?qf(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new _t(s,c,r)}}function qf(n,e){return n.replace(jf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jf=/\{\$([^}]+)}/g;function zf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(qc(i)&&qc(a)){if(!Rs(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function qc(n){return n!==null&&typeof n=="object"}/**
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
 */function Dr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function or(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ar(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wf(n,e){const t=new Hf(n,e);return t.subscribe.bind(t)}class Hf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Gi),s.error===void 0&&(s.error=Gi),s.complete===void 0&&(s.complete=Gi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gi(){}/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Kf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yf(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qf(n){return n===Qt?void 0:n}function Yf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Xf={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Zf=z.INFO,ep={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},tp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ep[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=Zf,this._logHandler=tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const np=(n,e)=>e.some(t=>n instanceof t);let jc,zc;function rp(){return jc||(jc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sp(){return zc||(zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eu=new WeakMap,oo=new WeakMap,wu=new WeakMap,Ki=new WeakMap,Vo=new WeakMap;function ip(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Lt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Eu.set(t,n)}).catch(()=>{}),Vo.set(e,n),e}function op(n){if(oo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});oo.set(n,e)}let ao={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ap(n){ao=n(ao)}function cp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Qi(this),e,...t);return wu.set(r,e.sort?e.sort():[e]),Lt(r)}:sp().includes(n)?function(...e){return n.apply(Qi(this),e),Lt(Eu.get(this))}:function(...e){return Lt(n.apply(Qi(this),e))}}function lp(n){return typeof n=="function"?cp(n):(n instanceof IDBTransaction&&op(n),np(n,rp())?new Proxy(n,ao):n)}function Lt(n){if(n instanceof IDBRequest)return ip(n);if(Ki.has(n))return Ki.get(n);const e=lp(n);return e!==n&&(Ki.set(n,e),Vo.set(e,n)),e}const Qi=n=>Vo.get(n);function up(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Lt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Lt(a.result),u.oldVersion,u.newVersion,Lt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const hp=["get","getKey","getAll","getAllKeys","count"],dp=["put","add","delete","clear"],Yi=new Map;function Wc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yi.get(e))return Yi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=dp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hp.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Yi.set(e,i),i}ap(n=>({...n,get:(e,t,r)=>Wc(e,t)||n.get(e,t,r),has:(e,t)=>!!Wc(e,t)||n.has(e,t)}));/**
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
 */class fp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function pp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const co="@firebase/app",Hc="0.10.13";/**
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
 */const ft=new Lo("@firebase/app"),mp="@firebase/app-compat",gp="@firebase/analytics-compat",yp="@firebase/analytics",_p="@firebase/app-check-compat",vp="@firebase/app-check",Ep="@firebase/auth",wp="@firebase/auth-compat",Ip="@firebase/database",Tp="@firebase/data-connect",bp="@firebase/database-compat",Ap="@firebase/functions",Sp="@firebase/functions-compat",Cp="@firebase/installations",Rp="@firebase/installations-compat",kp="@firebase/messaging",Pp="@firebase/messaging-compat",Dp="@firebase/performance",xp="@firebase/performance-compat",Lp="@firebase/remote-config",Vp="@firebase/remote-config-compat",Op="@firebase/storage",Np="@firebase/storage-compat",Mp="@firebase/firestore",Fp="@firebase/vertexai-preview",Bp="@firebase/firestore-compat",Up="firebase",$p="10.14.1";/**
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
 */const lo="[DEFAULT]",qp={[co]:"fire-core",[mp]:"fire-core-compat",[yp]:"fire-analytics",[gp]:"fire-analytics-compat",[vp]:"fire-app-check",[_p]:"fire-app-check-compat",[Ep]:"fire-auth",[wp]:"fire-auth-compat",[Ip]:"fire-rtdb",[Tp]:"fire-data-connect",[bp]:"fire-rtdb-compat",[Ap]:"fire-fn",[Sp]:"fire-fn-compat",[Cp]:"fire-iid",[Rp]:"fire-iid-compat",[kp]:"fire-fcm",[Pp]:"fire-fcm-compat",[Dp]:"fire-perf",[xp]:"fire-perf-compat",[Lp]:"fire-rc",[Vp]:"fire-rc-compat",[Op]:"fire-gcs",[Np]:"fire-gcs-compat",[Mp]:"fire-fst",[Bp]:"fire-fst-compat",[Fp]:"fire-vertex","fire-js":"fire-js",[Up]:"fire-js-all"};/**
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
 */const ks=new Map,jp=new Map,uo=new Map;function Gc(n,e){try{n.container.addComponent(e)}catch(t){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cn(n){const e=n.name;if(uo.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;uo.set(e,n);for(const t of ks.values())Gc(t,n);for(const t of jp.values())Gc(t,n);return!0}function Oo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n.settings!==void 0}/**
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
 */const zp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new Pr("app","Firebase",zp);/**
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
 */class Wp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Nn=$p;function Iu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=_u()),!t)throw Vt.create("no-options");const i=ks.get(s);if(i){if(Rs(t,i.options)&&Rs(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const a=new Jf(s);for(const u of uo.values())a.addComponent(u);const c=new Wp(t,r,a);return ks.set(s,c),c}function Tu(n=lo){const e=ks.get(n);if(!e&&n===lo&&_u())return Iu();if(!e)throw Vt.create("no-app",{appName:n});return e}function Ot(n,e,t){var r;let s=(r=qp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(c.join(" "));return}Cn(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Hp="firebase-heartbeat-database",Gp=1,vr="firebase-heartbeat-store";let Ji=null;function bu(){return Ji||(Ji=up(Hp,Gp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),Ji}async function Kp(n){try{const t=(await bu()).transaction(vr),r=await t.objectStore(vr).get(Au(n));return await t.done,r}catch(e){if(e instanceof _t)ft.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(t.message)}}}async function Kc(n,e){try{const r=(await bu()).transaction(vr,"readwrite");await r.objectStore(vr).put(e,Au(n)),await r.done}catch(t){if(t instanceof _t)ft.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ft.warn(r.message)}}}function Au(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qp=1024,Yp=30*24*60*60*1e3;class Jp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Yp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qc(),{heartbeatsToSend:r,unsentEntries:s}=Xp(this._heartbeatsCache.heartbeats),i=Cs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ft.warn(t),""}}}function Qc(){return new Date().toISOString().substring(0,10)}function Xp(n,e=Qp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Yc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Yc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bf()?Uf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yc(n){return Cs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function em(n){Cn(new tn("platform-logger",e=>new fp(e),"PRIVATE")),Cn(new tn("heartbeat",e=>new Jp(e),"PRIVATE")),Ot(co,Hc,n),Ot(co,Hc,"esm2017"),Ot("fire-js","")}em("");var tm="firebase",nm="10.14.1";/**
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
 */Ot(tm,nm,"app");function No(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Su(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rm=Su,Cu=new Pr("auth","Firebase",Su());/**
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
 */const Ps=new Lo("@firebase/auth");function sm(n,...e){Ps.logLevel<=z.WARN&&Ps.warn(`Auth (${Nn}): ${n}`,...e)}function ms(n,...e){Ps.logLevel<=z.ERROR&&Ps.error(`Auth (${Nn}): ${n}`,...e)}/**
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
 */function We(n,...e){throw Fo(n,...e)}function ze(n,...e){return Fo(n,...e)}function Mo(n,e,t){const r=Object.assign(Object.assign({},rm()),{[e]:t});return new Pr("auth","Firebase",r).create(e,{appName:n.name})}function ct(n){return Mo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ru(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&We(n,"argument-error"),Mo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Cu.create(n,...e)}function M(n,e,...t){if(!n)throw Fo(e,...t)}function st(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ms(e),new Error(e)}function pt(n,e){n||st(e)}/**
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
 */function ho(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function im(){return Jc()==="http:"||Jc()==="https:"}function Jc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function om(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(im()||Of()||"connection"in navigator)?navigator.onLine:!0}function am(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xr{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=xf()||Nf()}get(){return om()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bo(n,e){pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ku{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lm=new xr(3e4,6e4);function vt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Et(n,e,t,r,s={}){return Pu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Dr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Vf()||(d.referrerPolicy="no-referrer"),ku.fetch()(Du(n,n.config.apiHost,t,c),d)})}async function Pu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cm),e);try{const s=new hm(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw us(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw us(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw us(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw us(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Mo(n,p,d);We(n,p)}}catch(s){if(s instanceof _t)throw s;We(n,"network-request-failed",{message:String(s)})}}async function Lr(n,e,t,r,s={}){const i=await Et(n,e,t,r,s);return"mfaPendingCredential"in i&&We(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Du(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Bo(n.config,s):`${n.config.apiScheme}://${s}`}function um(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),lm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function us(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ze(n,e,r);return s.customData._tokenResponse=t,s}function Xc(n){return n!==void 0&&n.enterprise!==void 0}class dm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return um(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fm(n,e){return Et(n,"GET","/v2/recaptchaConfig",vt(n,e))}/**
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
 */async function pm(n,e){return Et(n,"POST","/v1/accounts:delete",e)}async function xu(n,e){return Et(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mm(n,e=!1){const t=oe(n),r=await t.getIdToken(e),s=Uo(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fr(Xi(s.auth_time)),issuedAtTime:fr(Xi(s.iat)),expirationTime:fr(Xi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xi(n){return Number(n)*1e3}function Uo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const s=gu(t);return s?JSON.parse(s):(ms("Failed to decode base64 JWT payload"),null)}catch(s){return ms("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zc(n){const e=Uo(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Er(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&gm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ym{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ds(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Er(n,xu(t,{idToken:r}));M(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Lu(i.providerUserInfo):[],c=vm(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new fo(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function _m(n){const e=oe(n);await Ds(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vm(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lu(n){return n.map(e=>{var{providerId:t}=e,r=No(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Em(n,e){const t=await Pu(n,{},async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Du(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ku.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wm(n,e){return Et(n,"POST","/v2/accounts:revokeToken",vt(n,e))}/**
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
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Zc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Em(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new In;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function St(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=No(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ym(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Er(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mm(this,e)}reload(){return _m(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await Er(this,pm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,B=(d=t.createdAt)!==null&&d!==void 0?d:void 0,G=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:ae,isAnonymous:qe,providerData:ce,stsTokenManager:w}=t;M(W&&w,e,"internal-error");const m=In.fromJSON(this.name,w);M(typeof W=="string",e,"internal-error"),St(g,e.name),St(E,e.name),M(typeof ae=="boolean",e,"internal-error"),M(typeof qe=="boolean",e,"internal-error"),St(S,e.name),St(C,e.name),St(L,e.name),St(P,e.name),St(B,e.name),St(G,e.name);const _=new it({uid:W,auth:e,email:E,emailVerified:ae,displayName:g,isAnonymous:qe,photoURL:C,phoneNumber:S,tenantId:L,stsTokenManager:m,createdAt:B,lastLoginAt:G});return ce&&Array.isArray(ce)&&(_.providerData=ce.map(v=>Object.assign({},v))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new In;s.updateFromServerResponse(t);const i=new it({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ds(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new In;c.updateFromIdToken(r);const u=new it({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const el=new Map;function ot(n){pt(n instanceof Function,"Expected a class definition");let e=el.get(n);return e?(pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,el.set(n,e),e)}/**
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
 */class Vu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vu.type="NONE";const tl=Vu;/**
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
 */function gs(n,e,t){return`firebase:${n}:${e}:${t}`}class Tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gs(this.userKey,s.apiKey,i),this.fullPersistenceKey=gs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Tn(ot(tl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ot(tl);const a=gs(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const g=it._fromJSON(e,p);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Tn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Tn(i,e,r))}}/**
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
 */function nl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ou(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uu(e))return"Blackberry";if($u(e))return"Webos";if(Nu(e))return"Safari";if((e.includes("chrome/")||Mu(e))&&!e.includes("edge/"))return"Chrome";if(Bu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ou(n=Re()){return/firefox\//i.test(n)}function Nu(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mu(n=Re()){return/crios\//i.test(n)}function Fu(n=Re()){return/iemobile/i.test(n)}function Bu(n=Re()){return/android/i.test(n)}function Uu(n=Re()){return/blackberry/i.test(n)}function $u(n=Re()){return/webos/i.test(n)}function $o(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Im(n=Re()){var e;return $o(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tm(){return Mf()&&document.documentMode===10}function qu(n=Re()){return $o(n)||Bu(n)||$u(n)||Uu(n)||/windows phone/i.test(n)||Fu(n)}/**
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
 */function ju(n,e=[]){let t;switch(n){case"Browser":t=nl(Re());break;case"Worker":t=`${nl(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nn}/${r}`}/**
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
 */class bm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Am(n,e={}){return Et(n,"GET","/v2/passwordPolicy",vt(n,e))}/**
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
 */const Sm=6;class Cm{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Sm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Rm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rl(this),this.idTokenSubscription=new rl(this),this.beforeStateQueue=new bm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xu(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ds(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=am()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(ct(this));const t=e?oe(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Am(this),t=new Cm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ju(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wt(n){return oe(n)}class rl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wf(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function km(n){Qs=n}function zu(n){return Qs.loadJS(n)}function Pm(){return Qs.recaptchaEnterpriseScript}function Dm(){return Qs.gapiScript}function xm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Lm="recaptcha-enterprise",Vm="NO_RECAPTCHA";class Om{constructor(e){this.type=Lm,this.auth=wt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{fm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new dm(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Xc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Vm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Xc(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Pm();u.length!==0&&(u+=c),zu(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function sl(n,e,t,r=!1){const s=new Om(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function xs(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await sl(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await sl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function Nm(n,e){const t=Oo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Rs(i,e??{}))return s;We(s,"already-initialized")}return t.initialize({options:e})}function Mm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Fm(n,e,t){const r=wt(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Wu(e),{host:a,port:c}=Bm(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Um()}function Wu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Bm(n){const e=Wu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:il(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:il(a)}}}function il(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Um(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class qo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function $m(n,e){return Et(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qm(n,e){return Lr(n,"POST","/v1/accounts:signInWithPassword",vt(n,e))}async function Hu(n,e){return Et(n,"POST","/v1/accounts:sendOobCode",vt(n,e))}async function jm(n,e){return Hu(n,e)}async function zm(n,e){return Hu(n,e)}/**
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
 */async function Wm(n,e){return Lr(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}async function Hm(n,e){return Lr(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}/**
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
 */class wr extends qo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new wr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new wr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xs(e,t,"signInWithPassword",qm);case"emailLink":return Wm(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xs(e,r,"signUpPassword",$m);case"emailLink":return Hm(e,{idToken:t,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bn(n,e){return Lr(n,"POST","/v1/accounts:signInWithIdp",vt(n,e))}/**
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
 */const Gm="http://localhost";class nn extends qo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=No(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new nn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){const e={requestUri:Gm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Dr(t)}return e}}/**
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
 */function Km(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qm(n){const e=or(ar(n)).link,t=e?or(ar(e)).deep_link_id:null,r=or(ar(n)).deep_link_id;return(r?or(ar(r)).link:null)||r||t||e||n}class jo{constructor(e){var t,r,s,i,a,c;const u=or(ar(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=Km((s=u.mode)!==null&&s!==void 0?s:null);M(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Qm(e);try{return new jo(t)}catch{return null}}}/**
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
 */class Mn{constructor(){this.providerId=Mn.PROVIDER_ID}static credential(e,t){return wr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=jo.parseLink(t);return M(r,"argument-error"),wr._fromEmailAndCode(e,r.code,r.tenantId)}}Mn.PROVIDER_ID="password";Mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ys{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vr extends Ys{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends Vr{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class Qe extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qe.credential(t,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
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
 */class kt extends Vr{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Pt extends Vr{constructor(){super("twitter.com")}static credential(e,t){return nn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */async function Ym(n,e){return Lr(n,"POST","/v1/accounts:signUp",vt(n,e))}/**
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
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await it._fromIdTokenResponse(e,r,s),a=ol(r);return new rn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ol(r);return new rn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ol(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ls extends _t{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ls.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ls(e,t,r,s)}}function Gu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ls._fromErrorAndOperation(n,i,e,r):i})}async function Jm(n,e,t=!1){const r=await Er(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return rn._forOperation(n,"link",r)}/**
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
 */async function Xm(n,e,t=!1){const{auth:r}=n;if(je(r.app))return Promise.reject(ct(r));const s="reauthenticate";try{const i=await Er(n,Gu(r,s,e,n),t);M(i.idToken,r,"internal-error");const a=Uo(i.idToken);M(a,r,"internal-error");const{sub:c}=a;return M(n.uid===c,r,"user-mismatch"),rn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&We(r,"user-mismatch"),i}}/**
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
 */async function Ku(n,e,t=!1){if(je(n.app))return Promise.reject(ct(n));const r="signIn",s=await Gu(n,r,e),i=await rn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Zm(n,e){return Ku(wt(n),e)}/**
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
 */async function Qu(n){const e=wt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eg(n,e,t){const r=wt(n);await xs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",zm)}async function tg(n,e,t){if(je(n.app))return Promise.reject(ct(n));const r=wt(n),a=await xs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ym).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Qu(n),u}),c=await rn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function ng(n,e,t){return je(n.app)?Promise.reject(ct(n)):Zm(oe(n),Mn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qu(n),r})}async function Yu(n,e){const t=oe(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await jm(t.auth,s);i!==n.email&&await n.reload()}function rg(n,e,t,r){return oe(n).onIdTokenChanged(e,t,r)}function sg(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function ig(n,e,t,r){return oe(n).onAuthStateChanged(e,t,r)}function Ju(n){return oe(n).signOut()}async function al(n){return oe(n).delete()}const Vs="__sak";/**
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
 */class Xu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vs,"1"),this.storage.removeItem(Vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const og=1e3,ag=10;class Zu extends Xu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Tm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ag):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zu.type="LOCAL";const cg=Zu;/**
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
 */class eh extends Xu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eh.type="SESSION";const th=eh;/**
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
 */function lg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await lg(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Js.receivers=[];/**
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
 */function zo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ug{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=zo("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ye(){return window}function hg(n){Ye().location.href=n}/**
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
 */function nh(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function dg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pg(){return nh()?self:null}/**
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
 */const rh="firebaseLocalStorageDb",mg=1,Os="firebaseLocalStorage",sh="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xs(n,e){return n.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function gg(){const n=indexedDB.deleteDatabase(rh);return new Or(n).toPromise()}function po(){const n=indexedDB.open(rh,mg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Os,{keyPath:sh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Os)?e(r):(r.close(),await gg(),e(await po()))})})}async function cl(n,e,t){const r=Xs(n,!0).put({[sh]:e,value:t});return new Or(r).toPromise()}async function yg(n,e){const t=Xs(n,!1).get(e),r=await new Or(t).toPromise();return r===void 0?null:r.value}function ll(n,e){const t=Xs(n,!0).delete(e);return new Or(t).toPromise()}const _g=800,vg=3;class ih{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await po(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>vg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Js._getInstance(pg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dg(),!this.activeServiceWorker)return;this.sender=new ug(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await po();return await cl(e,Vs,"1"),await ll(e,Vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ll(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xs(s,!1).getAll();return new Or(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ih.type="LOCAL";const Eg=ih;new xr(3e4,6e4);/**
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
 */function Wo(n,e){return e?ot(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ho extends qo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wg(n){return Ku(n.auth,new Ho(n),n.bypassAuthState)}function Ig(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Xm(t,new Ho(n),n.bypassAuthState)}async function Tg(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Jm(t,new Ho(n),n.bypassAuthState)}/**
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
 */class oh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wg;case"linkViaPopup":case"linkViaRedirect":return Tg;case"reauthViaPopup":case"reauthViaRedirect":return Ig;default:We(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bg=new xr(2e3,1e4);async function Ag(n,e,t){if(je(n.app))return Promise.reject(ze(n,"operation-not-supported-in-this-environment"));const r=wt(n);Ru(n,e,Ys);const s=Wo(r,t);return new Dt(r,"signInViaPopup",e,s).executeNotNull()}async function Sg(n,e,t){const r=oe(n);if(je(r.auth.app))return Promise.reject(ze(r.auth,"operation-not-supported-in-this-environment"));Ru(r.auth,e,Ys);const s=Wo(r.auth,t);return new Dt(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}class Dt extends oh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bg.get())};e()}}Dt.currentPopupAction=null;/**
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
 */const Cg="pendingRedirect",ys=new Map;class Rg extends oh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ys.get(this.auth._key());if(!e){try{const r=await kg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ys.set(this.auth._key(),e)}return this.bypassAuthState||ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kg(n,e){const t=xg(e),r=Dg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Pg(n,e){ys.set(n._key(),e)}function Dg(n){return ot(n._redirectPersistence)}function xg(n){return gs(Cg,n.config.apiKey,n.name)}async function Lg(n,e,t=!1){if(je(n.app))return Promise.reject(ct(n));const r=wt(n),s=Wo(r,e),a=await new Rg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Vg=10*60*1e3;class Og{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ng(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ah(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ul(e))}saveEventToCache(e){this.cachedEventUids.add(ul(e)),this.lastProcessedEventTime=Date.now()}}function ul(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ah({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ng(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ah(n);default:return!1}}/**
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
 */async function Mg(n,e={}){return Et(n,"GET","/v1/projects",e)}/**
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
 */const Fg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bg=/^https?/;async function Ug(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Mg(n);for(const t of e)try{if($g(t))return}catch{}We(n,"unauthorized-domain")}function $g(n){const e=ho(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Bg.test(t))return!1;if(Fg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qg=new xr(3e4,6e4);function hl(){const n=Ye().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jg(n){return new Promise((e,t)=>{var r,s,i;function a(){hl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hl(),t(ze(n,"network-request-failed"))},timeout:qg.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)a();else{const c=xm("iframefcb");return Ye()[c]=()=>{gapi.load?a():t(ze(n,"network-request-failed"))},zu(`${Dm()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw _s=null,e})}let _s=null;function zg(n){return _s=_s||jg(n),_s}/**
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
 */const Wg=new xr(5e3,15e3),Hg="__/auth/iframe",Gg="emulator/auth/iframe",Kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yg(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bo(e,Gg):`https://${n.config.authDomain}/${Hg}`,r={apiKey:e.apiKey,appName:n.name,v:Nn},s=Qg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Dr(r).slice(1)}`}async function Jg(n){const e=await zg(n),t=Ye().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Yg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),c=Ye().setTimeout(()=>{i(a)},Wg.get());function u(){Ye().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zg=500,ey=600,ty="_blank",ny="http://localhost";class dl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ry(n,e,t,r=Zg,s=ey){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Xg),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Re().toLowerCase();t&&(c=Mu(d)?ty:t),Ou(d)&&(e=e||ny,u.scrollbars="yes");const p=Object.entries(u).reduce((E,[S,C])=>`${E}${S}=${C},`,"");if(Im(d)&&c!=="_self")return sy(e||"",c),new dl(null);const g=window.open(e||"",c,p);M(g,n,"popup-blocked");try{g.focus()}catch{}return new dl(g)}function sy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const iy="__/auth/handler",oy="emulator/auth/handler",ay=encodeURIComponent("fac");async function fl(n,e,t,r,s,i){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Nn,eventId:s};if(e instanceof Ys){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Vr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),d=u?`#${ay}=${encodeURIComponent(u)}`:"";return`${cy(n)}?${Dr(c).slice(1)}${d}`}function cy({config:n}){return n.emulator?Bo(n,oy):`https://${n.authDomain}/${iy}`}/**
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
 */const Zi="webStorageSupport";class ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=th,this._completeRedirectFn=Lg,this._overrideRedirectResult=Pg}async _openPopup(e,t,r,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await fl(e,t,r,ho(),s);return ry(e,a,zo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await fl(e,t,r,ho(),s);return hg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Jg(e),r=new Og(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zi,{type:Zi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zi];a!==void 0&&t(!!a),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ug(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qu()||Nu()||$o()}}const uy=ly;var pl="@firebase/auth",ml="1.7.9";/**
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
 */class hy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fy(n){Cn(new tn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ju(n)},d=new Rm(r,s,i,u);return Mm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new tn("auth-internal",e=>{const t=wt(e.getProvider("auth").getImmediate());return(r=>new hy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(pl,ml,dy(n)),Ot(pl,ml,"esm2017")}/**
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
 */const py=5*60,my=vu("authIdTokenMaxAge")||py;let gl=null;const gy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>my)return;const s=t==null?void 0:t.token;gl!==s&&(gl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yy(n=Tu()){const e=Oo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Nm(n,{popupRedirectResolver:uy,persistence:[Eg,cg,th]}),r=vu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=gy(i.toString());sg(t,a,()=>a(t.currentUser)),rg(t,c=>a(c))}}const s=yu("auth");return s&&Fm(t,`http://${s}`),t}function _y(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}km({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",_y().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fy("Browser");var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var en,ch;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(v,I,b){for(var y=Array(arguments.length-2),et=2;et<arguments.length;et++)y[et-2]=arguments[et];return m.prototype[I].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)v[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)v[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],I=w.g[2];var b=w.g[3],y=m+(b^_&(I^b))+v[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+v[1]+3905402710&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+v[2]+606105819&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+v[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+v[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+v[5]+1200080426&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+v[6]+2821735955&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+v[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+v[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+v[9]+2336552879&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+v[10]+4294925233&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+v[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(b^_&(I^b))+v[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(I^m&(_^I))+v[13]+4254626195&4294967295,b=m+(y<<12&4294967295|y>>>20),y=I+(_^b&(m^_))+v[14]+2792965006&4294967295,I=b+(y<<17&4294967295|y>>>15),y=_+(m^I&(b^m))+v[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(I^b&(_^I))+v[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+v[6]+3225465664&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+v[11]+643717713&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+v[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+v[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+v[10]+38016083&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+v[15]+3634488961&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+v[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+v[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+v[14]+3275163606&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+v[3]+4107603335&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+v[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^b&(_^I))+v[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^I&(m^_))+v[2]+4243563512&4294967295,b=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(b^m))+v[7]+1735328473&4294967295,I=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(I^b))+v[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(_^I^b)+v[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+v[8]+2272392833&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+v[11]+1839030562&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+v[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+v[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+v[4]+1272893353&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+v[7]+4139469664&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+v[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+v[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+v[0]+3936430074&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+v[3]+3572445317&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+v[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^b)+v[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^I)+v[12]+3873151461&4294967295,b=m+(y<<11&4294967295|y>>>21),y=I+(b^m^_)+v[15]+530742520&4294967295,I=b+(y<<16&4294967295|y>>>16),y=_+(I^b^m)+v[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(I^(_|~b))+v[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+v[7]+1126891415&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+v[14]+2878612391&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+v[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+v[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+v[3]+2399980690&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+v[10]+4293915773&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+v[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+v[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+v[15]+4264355552&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+v[6]+2734768916&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+v[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~b))+v[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~I))+v[11]+3174756917&4294967295,b=m+(y<<10&4294967295|y>>>22),y=I+(m^(b|~_))+v[2]+718787259&4294967295,I=b+(y<<15&4294967295|y>>>17),y=_+(b^(I|~m))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,v=this.B,I=this.h,b=0;b<m;){if(I==0)for(;b<=_;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(v[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,v),I=0;break}}else for(;b<m;)if(v[I++]=w[b++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)w[_++]=this.g[m]>>>v&255;return w};function i(w,m){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],v=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;v&&b==m||(_[I]=b,v=!1)}this.g=_}var c={};function u(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return P(d(-w));for(var m=[],_=1,v=0;w>=_;v++)m[v]=w/_|0,_*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return P(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),v=g,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),y=parseInt(w.substring(I,I+b),m);8>b?(b=d(Math.pow(m,b)),v=v.j(b).add(d(y))):(v=v.j(_),v=v.add(d(y)))}return v}var g=u(0),E=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(L(this))return-P(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);w+=(0<=v?v:4294967296+v)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(L(this))return"-"+P(this).toString(w);for(var m=d(Math.pow(w,6)),_=this,v="";;){var I=ae(_,m).g;_=B(_,I.j(m));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=I,C(_))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function L(w){return w.h==-1}n.l=function(w){return w=B(this,w),L(w)?-1:C(w)?0:1};function P(w){for(var m=w.g.length,_=[],v=0;v<m;v++)_[v]=~w.g[v];return new a(_,~w.h).add(E)}n.abs=function(){return L(this)?P(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0,I=0;I<=m;I++){var b=v+(this.i(I)&65535)+(w.i(I)&65535),y=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);v=y>>>16,b&=65535,y&=65535,_[I]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(w,m){return w.add(P(m))}n.j=function(w){if(C(this)||C(w))return g;if(L(this))return L(w)?P(this).j(P(w)):P(P(this).j(w));if(L(w))return P(this.j(P(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<w.g.length;I++){var b=this.i(v)>>>16,y=this.i(v)&65535,et=w.i(I)>>>16,qn=w.i(I)&65535;_[2*v+2*I]+=y*qn,G(_,2*v+2*I),_[2*v+2*I+1]+=b*qn,G(_,2*v+2*I+1),_[2*v+2*I+1]+=y*et,G(_,2*v+2*I+1),_[2*v+2*I+2]+=b*et,G(_,2*v+2*I+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function G(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function W(w,m){this.g=w,this.h=m}function ae(w,m){if(C(m))throw Error("division by zero");if(C(w))return new W(g,g);if(L(w))return m=ae(P(w),m),new W(P(m.g),P(m.h));if(L(m))return m=ae(w,P(m)),new W(P(m.g),m.h);if(30<w.g.length){if(L(w)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var _=E,v=m;0>=v.l(w);)_=qe(_),v=qe(v);var I=ce(_,1),b=ce(v,1);for(v=ce(v,2),_=ce(_,2);!C(v);){var y=b.add(v);0>=y.l(w)&&(I=I.add(_),b=y),v=ce(v,1),_=ce(_,1)}return m=B(w,I.j(m)),new W(I,m)}for(I=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=d(_),y=b.j(m);L(y)||0<y.l(w);)_-=v,b=d(_),y=b.j(m);C(b)&&(b=E),I=I.add(b),w=B(w,y)}return new W(I,w)}n.A=function(w){return ae(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&w.i(v);return new a(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|w.i(v);return new a(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^w.i(v);return new a(_,this.h^w.h)};function qe(w){for(var m=w.g.length+1,_=[],v=0;v<m;v++)_[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(_,w.h)}function ce(w,m){var _=m>>5;m%=32;for(var v=w.g.length-_,I=[],b=0;b<v;b++)I[b]=0<m?w.i(b+_)>>>m|w.i(b+_+1)<<32-m:w.i(b+_);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ch=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,en=a}).apply(typeof yl<"u"?yl:typeof self<"u"?self:typeof window<"u"?window:{});var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lh,cr,uh,vs,mo,hh,dh,fh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof hs=="object"&&hs];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var T=o[f];if(!(T in h))break e;h=h[T]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,f=!1,T={next:function(){if(!f&&h<o.length){var A=h++;return{value:l(A,o[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),o.apply(l,T)}}return function(){return o.apply(l,arguments)}}function E(o,l,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,E.apply(null,arguments)}function S(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,T,A){for(var x=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)x[Z-2]=arguments[Z];return l.prototype[T].apply(f,x)}}function L(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function P(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const T=o.length||0,A=f.length||0;o.length=T+A;for(let x=0;x<A;x++)o[T+x]=f[x]}else o.push(f)}}class B{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function G(o){return/^[\s\xa0]*$/.test(o)}function W(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function ae(o){return ae[" "](o),o}ae[" "]=function(){};var qe=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ce(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function w(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)o[h]=f[h];for(let A=0;A<_.length;A++)h=_[A],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Ti;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class et{constructor(){this.h=this.g=null}add(l,h){const f=qn.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var qn=new B(()=>new Ud,o=>o.reset());class Ud{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let jn,zn=!1,Ti=new et,$a=()=>{const o=c.Promise.resolve(void 0);jn=()=>{o.then($d)}};var $d=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var l=qn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}zn=!1};function It(){this.s=this.s,this.C=this.C}It.prototype.s=!1,It.prototype.ma=function(){this.s||(this.s=!0,this.N())},It.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var qd=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Wn(o,l){if(ve.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(qe){e:{try{ae(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:jd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wn.aa.h.call(this)}}C(Wn,ve);var jd={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),zd=0;function Wd(o,l,h,f,T){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=T,this.key=++zd,this.da=this.fa=!1}function Hr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Gr(o){this.src=o,this.g={},this.h=0}Gr.prototype.add=function(o,l,h,f,T){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var x=Ai(o,l,f,T);return-1<x?(l=o[x],h||(l.fa=!1)):(l=new Wd(l,this.src,A,!!f,T),l.fa=h,o.push(l)),l};function bi(o,l){var h=l.type;if(h in o.g){var f=o.g[h],T=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=T)&&Array.prototype.splice.call(f,T,1),A&&(Hr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ai(o,l,h,f){for(var T=0;T<o.length;++T){var A=o[T];if(!A.da&&A.listener==l&&A.capture==!!h&&A.ha==f)return T}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),Ci={};function qa(o,l,h,f,T){if(Array.isArray(l)){for(var A=0;A<l.length;A++)qa(o,l[A],h,f,T);return null}return h=Wa(h),o&&o[Wr]?o.K(l,h,d(f)?!!f.capture:!1,T):Hd(o,l,h,!1,f,T)}function Hd(o,l,h,f,T,A){if(!l)throw Error("Invalid event type");var x=d(T)?!!T.capture:!!T,Z=ki(o);if(Z||(o[Si]=Z=new Gr(o)),h=Z.add(l,h,f,x,A),h.proxy)return h;if(f=Gd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)qd||(T=x),T===void 0&&(T=!1),o.addEventListener(l.toString(),f,T);else if(o.attachEvent)o.attachEvent(za(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Gd(){function o(h){return l.call(o.src,o.listener,h)}const l=Kd;return o}function ja(o,l,h,f,T){if(Array.isArray(l))for(var A=0;A<l.length;A++)ja(o,l[A],h,f,T);else f=d(f)?!!f.capture:!!f,h=Wa(h),o&&o[Wr]?(o=o.i,l=String(l).toString(),l in o.g&&(A=o.g[l],h=Ai(A,h,f,T),-1<h&&(Hr(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete o.g[l],o.h--)))):o&&(o=ki(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ai(l,h,f,T)),(h=-1<o?l[o]:null)&&Ri(h))}function Ri(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Wr])bi(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(za(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=ki(l))?(bi(h,o),h.h==0&&(h.src=null,l[Si]=null)):Hr(o)}}}function za(o){return o in Ci?Ci[o]:Ci[o]="on"+o}function Kd(o,l){if(o.da)o=!0;else{l=new Wn(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ri(o),o=h.call(f,l)}return o}function ki(o){return o=o[Si],o instanceof Gr?o:null}var Pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wa(o){return typeof o=="function"?o:(o[Pi]||(o[Pi]=function(l){return o.handleEvent(l)}),o[Pi])}function Ee(){It.call(this),this.i=new Gr(this),this.M=this,this.F=null}C(Ee,It),Ee.prototype[Wr]=!0,Ee.prototype.removeEventListener=function(o,l,h,f){ja(this,o,l,h,f)};function Pe(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ve(l,o);else if(l instanceof ve)l.target=l.target||o;else{var T=l;l=new ve(f,o),v(l,T)}if(T=!0,h)for(var A=h.length-1;0<=A;A--){var x=l.g=h[A];T=Kr(x,f,!0,l)&&T}if(x=l.g=o,T=Kr(x,f,!0,l)&&T,T=Kr(x,f,!1,l)&&T,h)for(A=0;A<h.length;A++)x=l.g=h[A],T=Kr(x,f,!1,l)&&T}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Hr(h[f]);delete o.g[l],o.h--}}this.F=null},Ee.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},Ee.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Kr(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,A=0;A<l.length;++A){var x=l[A];if(x&&!x.da&&x.capture==h){var Z=x.listener,pe=x.ha||x.src;x.fa&&bi(o.i,x),T=Z.call(pe,f)!==!1&&T}}return T&&!f.defaultPrevented}function Ha(o,l,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Ga(o){o.g=Ha(()=>{o.g=null,o.i&&(o.i=!1,Ga(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Qd extends It{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ga(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hn(o){It.call(this),this.h=o,this.g={}}C(Hn,It);var Ka=[];function Qa(o){ce(o.g,function(l,h){this.g.hasOwnProperty(h)&&Ri(l)},o),o.g={}}Hn.prototype.N=function(){Hn.aa.N.call(this),Qa(this)},Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Di=c.JSON.stringify,Yd=c.JSON.parse,Jd=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function xi(){}xi.prototype.h=null;function Ya(o){return o.h||(o.h=o.i())}function Ja(){}var Gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Li(){ve.call(this,"d")}C(Li,ve);function Vi(){ve.call(this,"c")}C(Vi,ve);var Wt={},Xa=null;function Qr(){return Xa=Xa||new Ee}Wt.La="serverreachability";function Za(o){ve.call(this,Wt.La,o)}C(Za,ve);function Kn(o){const l=Qr();Pe(l,new Za(l))}Wt.STAT_EVENT="statevent";function ec(o,l){ve.call(this,Wt.STAT_EVENT,o),this.stat=l}C(ec,ve);function De(o){const l=Qr();Pe(l,new ec(l,o))}Wt.Ma="timingevent";function tc(o,l){ve.call(this,Wt.Ma,o),this.size=l}C(tc,ve);function Qn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Yn(){this.g=!0}Yn.prototype.xa=function(){this.g=!1};function Xd(o,l,h,f,T,A){o.info(function(){if(o.g)if(A)for(var x="",Z=A.split("&"),pe=0;pe<Z.length;pe++){var Q=Z[pe].split("=");if(1<Q.length){var we=Q[0];Q=Q[1];var Ie=we.split("_");x=2<=Ie.length&&Ie[1]=="type"?x+(we+"="+Q+"&"):x+(we+"=redacted&")}}else x=null;else x=A;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+l+`
`+h+`
`+x})}function Zd(o,l,h,f,T,A,x){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+l+`
`+h+`
`+A+" "+x})}function dn(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+tf(o,h)+(f?" "+f:"")})}function ef(o,l){o.info(function(){return"TIMEOUT: "+l})}Yn.prototype.info=function(){};function tf(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var x=1;x<T.length;x++)T[x]=""}}}}return Di(h)}catch{return l}}var Yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oi;function Jr(){}C(Jr,xi),Jr.prototype.g=function(){return new XMLHttpRequest},Jr.prototype.i=function(){return{}},Oi=new Jr;function Tt(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new Hn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rc}function rc(){this.i=null,this.g="",this.h=!1}var sc={},Ni={};function Mi(o,l,h){o.L=1,o.v=ts(tt(l)),o.m=h,o.P=!0,ic(o,null)}function ic(o,l){o.F=Date.now(),Xr(o),o.A=tt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),vc(h.i,"t",f),o.C=0,h=o.j.J,o.h=new rc,o.g=Mc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Qd(E(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ka[0]=T.toString()),T=Ka);for(var A=0;A<T.length;A++){var x=qa(h,T[A],f||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Kn(),Xd(o.i,o.u,o.A,o.l,o.R,o.m)}Tt.prototype.ca=function(o){o=o.target;const l=this.M;l&&nt(o)==3?l.j():this.Y(o)},Tt.prototype.Y=function(o){try{if(o==this.g)e:{const Ie=nt(this.g);var l=this.g.Ba();const mn=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||Sc(this.g)))){this.J||Ie!=4||l==7||(l==8||0>=mn?Kn(3):Kn(2)),Fi(this);var h=this.g.Z();this.X=h;t:if(oc(this)){var f=Sc(this.g);o="";var T=f.length,A=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Jn(this);var x="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(A&&l==T-1)});f.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=h==200,Zd(this.i,this.u,this.A,this.l,this.R,Ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,pe=this.g;if((Z=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Z)){var Q=Z;break t}}Q=null}if(h=Q)dn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bi(this,h);else{this.o=!1,this.s=3,De(12),Ht(this),Jn(this);break e}}if(this.P){h=!0;let He;for(;!this.J&&this.C<x.length;)if(He=nf(this,x),He==Ni){Ie==4&&(this.s=4,De(14),h=!1),dn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==sc){this.s=4,De(15),dn(this.i,this.l,x,"[Invalid Chunk]"),h=!1;break}else dn(this.i,this.l,He,null),Bi(this,He);if(oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||x.length!=0||this.h.h||(this.s=1,De(16),h=!1),this.o=this.o&&h,!h)dn(this.i,this.l,x,"[Invalid Chunked Response]"),Ht(this),Jn(this);else if(0<x.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Wi(we),we.M=!0,De(11))}}else dn(this.i,this.l,x,null),Bi(this,x);Ie==4&&Ht(this),this.o&&!this.J&&(Ie==4?Lc(this.j,this):(this.o=!1,Xr(this)))}else Ef(this.g),h==400&&0<x.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Ht(this),Jn(this)}}}catch{}finally{}};function oc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function nf(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?Ni:(h=Number(l.substring(h,f)),isNaN(h)?sc:(f+=1,f+h>l.length?Ni:(l=l.slice(f,f+h),o.C=f+h,l)))}Tt.prototype.cancel=function(){this.J=!0,Ht(this)};function Xr(o){o.S=Date.now()+o.I,ac(o,o.I)}function ac(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Qn(E(o.ba,o),l)}function Fi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Tt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ef(this.i,this.A),this.L!=2&&(Kn(),De(17)),Ht(this),this.s=2,Jn(this)):ac(this,this.S-o)};function Jn(o){o.j.G==0||o.J||Lc(o.j,o)}function Ht(o){Fi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Qa(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Bi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Ui(h.h,o))){if(!o.K&&Ui(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)as(h),is(h);else break e;zi(h),De(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Qn(E(h.Za,h),6e3));if(1>=uc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Kt(h,11)}else if((o.K||h.g==o)&&as(h),!G(l))for(T=h.Da.g.parse(l),l=0;l<T.length;l++){let Q=T[l];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const we=Q[3];we!=null&&(h.la=we,h.j.info("VER="+h.la));const Ie=Q[4];Ie!=null&&(h.Aa=Ie,h.j.info("SVER="+h.Aa));const mn=Q[5];mn!=null&&typeof mn=="number"&&0<mn&&(f=1.5*mn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const He=o.g;if(He){const ls=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ls){var A=f.h;A.g||ls.indexOf("spdy")==-1&&ls.indexOf("quic")==-1&&ls.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&($i(A,A.h),A.h=null))}if(f.D){const Hi=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;Hi&&(f.ya=Hi,te(f.I,f.D,Hi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var x=o;if(f.qa=Nc(f,f.J?f.ia:null,f.W),x.K){hc(f.h,x);var Z=x,pe=f.L;pe&&(Z.I=pe),Z.B&&(Fi(Z),Xr(Z)),f.g=x}else Dc(f);0<h.i.length&&os(h)}else Q[0]!="stop"&&Q[0]!="close"||Kt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Kt(h,7):ji(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Kn(4)}catch{}}var rf=class{constructor(o,l){this.g=o,this.map=l}};function cc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function uc(o){return o.h?1:o.g?o.g.size:0}function Ui(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function $i(o,l){o.g?o.g.add(l):o.h=l}function hc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}cc.prototype.cancel=function(){if(this.i=dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function dc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return L(o.i)}function sf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function of(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function fc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=of(o),f=sf(o),T=f.length,A=0;A<T;A++)l.call(void 0,f[A],h&&h[A],o)}var pc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function af(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),T=null;if(0<=f){var A=o[h].substring(0,f);T=o[h].substring(f+1)}else A=o[h];l(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Gt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Gt){this.h=o.h,Zr(this,o.j),this.o=o.o,this.g=o.g,es(this,o.s),this.l=o.l;var l=o.i,h=new er;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),mc(this,h),this.m=o.m}else o&&(l=String(o).match(pc))?(this.h=!1,Zr(this,l[1]||"",!0),this.o=Xn(l[2]||""),this.g=Xn(l[3]||"",!0),es(this,l[4]),this.l=Xn(l[5]||"",!0),mc(this,l[6]||"",!0),this.m=Xn(l[7]||"")):(this.h=!1,this.i=new er(null,this.h))}Gt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Zn(l,gc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Zn(l,gc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Zn(h,h.charAt(0)=="/"?uf:lf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Zn(h,df)),o.join("")};function tt(o){return new Gt(o)}function Zr(o,l,h){o.j=h?Xn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function es(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function mc(o,l,h){l instanceof er?(o.i=l,ff(o.i,o.h)):(h||(l=Zn(l,hf)),o.i=new er(l,o.h))}function te(o,l,h){o.i.set(l,h)}function ts(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Xn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Zn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,cf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function cf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gc=/[#\/\?@]/g,lf=/[#\?:]/g,uf=/[#\?]/g,hf=/[#\?@]/g,df=/#/g;function er(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function bt(o){o.g||(o.g=new Map,o.h=0,o.i&&af(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=er.prototype,n.add=function(o,l){bt(this),this.i=null,o=fn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function yc(o,l){bt(o),l=fn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function _c(o,l){return bt(o),l=fn(o,l),o.g.has(l)}n.forEach=function(o,l){bt(this),this.g.forEach(function(h,f){h.forEach(function(T){o.call(l,T,f,this)},this)},this)},n.na=function(){bt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const T=o[f];for(let A=0;A<T.length;A++)h.push(l[f])}return h},n.V=function(o){bt(this);let l=[];if(typeof o=="string")_c(this,o)&&(l=l.concat(this.g.get(fn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return bt(this),this.i=null,o=fn(this,o),_c(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function vc(o,l,h){yc(o,l),0<h.length&&(o.i=null,o.g.set(fn(o,l),L(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const A=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var T=A;x[f]!==""&&(T+="="+encodeURIComponent(String(x[f]))),o.push(T)}}return this.i=o.join("&")};function fn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function ff(o,l){l&&!o.j&&(bt(o),o.i=null,o.g.forEach(function(h,f){var T=f.toLowerCase();f!=T&&(yc(this,f),vc(this,T,h))},o)),o.j=l}function pf(o,l){const h=new Yn;if(c.Image){const f=new Image;f.onload=S(At,h,"TestLoadImage: loaded",!0,l,f),f.onerror=S(At,h,"TestLoadImage: error",!1,l,f),f.onabort=S(At,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(At,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function mf(o,l){const h=new Yn,f=new AbortController,T=setTimeout(()=>{f.abort(),At(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(T),A.ok?At(h,"TestPingServer: ok",!0,l):At(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),At(h,"TestPingServer: error",!1,l)})}function At(o,l,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function gf(){this.g=new Jd}function yf(o,l,h){const f=h||"";try{fc(o,function(T,A){let x=T;d(T)&&(x=Di(T)),l.push(f+A+"="+encodeURIComponent(x))})}catch(T){throw l.push(f+"type="+encodeURIComponent("_badmap")),T}}function ns(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ns,xi),ns.prototype.g=function(){return new rs(this.l,this.j)},ns.prototype.i=function(o){return function(){return o}}({});function rs(o,l){Ee.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(rs,Ee),n=rs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,nr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ec(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ec(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?tr(this):nr(this),this.readyState==3&&Ec(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,tr(this))},n.Qa=function(o){this.g&&(this.response=o,tr(this))},n.ga=function(){this.g&&tr(this)};function tr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,nr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function nr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wc(o){let l="";return ce(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function qi(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=wc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,l,h))}function se(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(se,Ee);var _f=/^https?$/i,vf=["POST","PUT"];n=se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oi.g(),this.v=this.o?Ya(this.o):Ya(Oi),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){Ic(this,A);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())h.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(vf,l,void 0))||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,x]of h)this.g.setRequestHeader(A,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ac(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){Ic(this,A)}};function Ic(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Tc(o),ss(o)}function Tc(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),ss(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ss(this,!0)),se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bc(this):this.bb())},n.bb=function(){bc(this)};function bc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nt(o)!=4||o.Z()!=2)){if(o.u&&nt(o)==4)Ha(o.Ea,0,o);else if(Pe(o,"readystatechange"),nt(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=x===0){var T=String(o.D).match(pc)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!_f.test(T?T.toLowerCase():"")}h=f}if(h)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var A=2<nt(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",Tc(o)}}finally{ss(o)}}}}function ss(o,l){if(o.g){Ac(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Pe(o,"ready");try{h.onreadystatechange=f}catch{}}}function Ac(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Yd(l)}};function Sc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ef(o){const l={};o=(o.g&&2<=nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(G(o[f]))continue;var h=I(o[f]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=l[T]||[];l[T]=A,A.push(h)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Cc(o){this.Aa=0,this.i=[],this.j=new Yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,o),this.cb=rr("retryDelaySeedMs",1e4,o),this.Wa=rr("forwardChannelMaxRetries",2,o),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new cc(o&&o.concurrentRequestLimit),this.Da=new gf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){De(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Nc(this,null,this.W),os(this)};function ji(o){if(Rc(o),o.G==3){var l=o.U++,h=tt(o.I);if(te(h,"SID",o.K),te(h,"RID",l),te(h,"TYPE","terminate"),sr(o,h),l=new Tt(o,o.j,l),l.L=2,l.v=ts(tt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Mc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Xr(l)}Oc(o)}function is(o){o.g&&(Wi(o),o.g.cancel(),o.g=null)}function Rc(o){is(o),o.u&&(c.clearTimeout(o.u),o.u=null),as(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function os(o){if(!lc(o.h)&&!o.s){o.s=!0;var l=o.Ga;jn||$a(),zn||(jn(),zn=!0),Ti.add(l,o),o.B=0}}function wf(o,l){return uc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Qn(E(o.Ga,o,l),Vc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new Tt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=m(A),v(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Pc(this,T,l),h=tt(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),sr(this,h),A&&(this.O?l="headers="+encodeURIComponent(String(wc(A)))+"&"+l:this.m&&qi(h,this.m,A)),$i(this.h,T),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",l),te(h,"SID","null"),T.T=!0,Mi(T,h,null)):Mi(T,h,l),this.G=2}}else this.G==3&&(o?kc(this,o):this.i.length==0||lc(this.h)||kc(this))};function kc(o,l){var h;l?h=l.l:h=o.U++;const f=tt(o.I);te(f,"SID",o.K),te(f,"RID",h),te(f,"AID",o.T),sr(o,f),o.m&&o.o&&qi(f,o.m,o.o),h=new Tt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Pc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),$i(o.h,h),Mi(h,f,l)}function sr(o,l){o.H&&ce(o.H,function(h,f){te(l,f,h)}),o.l&&fc({},function(h,f){te(l,f,h)})}function Pc(o,l,h){h=Math.min(o.i.length,h);var f=o.l?E(o.l.Na,o.l,o):null;e:{var T=o.i;let A=-1;for(;;){const x=["count="+h];A==-1?0<h?(A=T[0].g,x.push("ofs="+A)):A=0:x.push("ofs="+A);let Z=!0;for(let pe=0;pe<h;pe++){let Q=T[pe].g;const we=T[pe].map;if(Q-=A,0>Q)A=Math.max(0,T[pe].g-100),Z=!1;else try{yf(we,x,"req"+Q+"_")}catch{f&&f(we)}}if(Z){f=x.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function Dc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;jn||$a(),zn||(jn(),zn=!0),Ti.add(l,o),o.v=0}}function zi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Qn(E(o.Fa,o),Vc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Qn(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),is(this),xc(this))};function Wi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function xc(o){o.g=new Tt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=tt(o.qa);te(l,"RID","rpc"),te(l,"SID",o.K),te(l,"AID",o.T),te(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(l,"TO",o.ja),te(l,"TYPE","xmlhttp"),sr(o,l),o.m&&o.o&&qi(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ts(tt(l)),h.m=null,h.P=!0,ic(h,o)}n.Za=function(){this.C!=null&&(this.C=null,is(this),zi(this),De(19))};function as(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Lc(o,l){var h=null;if(o.g==l){as(o),Wi(o),o.g=null;var f=2}else if(Ui(o.h,l))h=l.D,hc(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var T=o.B;f=Qr(),Pe(f,new tc(f,h)),os(o)}else Dc(o);else if(T=l.s,T==3||T==0&&0<l.X||!(f==1&&wf(o,l)||f==2&&zi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),T){case 1:Kt(o,5);break;case 4:Kt(o,10);break;case 3:Kt(o,6);break;default:Kt(o,2)}}}function Vc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Kt(o,l){if(o.j.info("Error code "+l),l==2){var h=E(o.fb,o),f=o.Xa;const T=!f;f=new Gt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zr(f,"https"),ts(f),T?pf(f.toString(),h):mf(f.toString(),h)}else De(2);o.G=0,o.l&&o.l.sa(l),Oc(o),Rc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Oc(o){if(o.G=0,o.ka=[],o.l){const l=dc(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Nc(o,l,h){var f=h instanceof Gt?tt(h):new Gt(h);if(f.g!="")l&&(f.g=l+"."+f.g),es(f,f.s);else{var T=c.location;f=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var A=new Gt(null);f&&Zr(A,f),l&&(A.g=l),T&&es(A,T),h&&(A.l=h),f=A}return h=o.D,l=o.ya,h&&l&&te(f,h,l),te(f,"VER",o.la),sr(o,f),f}function Mc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new se(new ns({eb:h})):new se(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fc(){}n=Fc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function cs(){}cs.prototype.g=function(o,l){return new Ve(o,l)};function Ve(o,l){Ee.call(this),this.g=new Cc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!G(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!G(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new pn(this)}C(Ve,Ee),Ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){ji(this.g)},Ve.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Di(o),o=h);l.i.push(new rf(l.Ya++,o)),l.G==3&&os(l)},Ve.prototype.N=function(){this.g.l=null,delete this.j,ji(this.g),delete this.g,Ve.aa.N.call(this)};function Bc(o){Li.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(Bc,Li);function Uc(){Vi.call(this),this.status=1}C(Uc,Vi);function pn(o){this.g=o}C(pn,Fc),pn.prototype.ua=function(){Pe(this.g,"a")},pn.prototype.ta=function(o){Pe(this.g,new Bc(o))},pn.prototype.sa=function(o){Pe(this.g,new Uc)},pn.prototype.ra=function(){Pe(this.g,"b")},cs.prototype.createWebChannel=cs.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,fh=function(){return new cs},dh=function(){return Qr()},hh=Wt,mo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,vs=Yr,nc.COMPLETE="complete",uh=nc,Ja.EventType=Gn,Gn.OPEN="a",Gn.CLOSE="b",Gn.ERROR="c",Gn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,cr=Ja,se.prototype.listenOnce=se.prototype.L,se.prototype.getLastError=se.prototype.Ka,se.prototype.getLastErrorCode=se.prototype.Ba,se.prototype.getStatus=se.prototype.Z,se.prototype.getResponseJson=se.prototype.Oa,se.prototype.getResponseText=se.prototype.oa,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Ha,lh=se}).apply(typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{});const _l="@firebase/firestore";/**
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
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let Fn="10.14.0";/**
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
 */const sn=new Lo("@firebase/firestore");function ir(){return sn.logLevel}function O(n,...e){if(sn.logLevel<=z.DEBUG){const t=e.map(Go);sn.debug(`Firestore (${Fn}): ${n}`,...t)}}function mt(n,...e){if(sn.logLevel<=z.ERROR){const t=e.map(Go);sn.error(`Firestore (${Fn}): ${n}`,...t)}}function Rn(n,...e){if(sn.logLevel<=z.WARN){const t=e.map(Go);sn.warn(`Firestore (${Fn}): ${n}`,...t)}}function Go(n){if(typeof n=="string")return n;try{/**
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
 */function F(n="Unexpected state"){const e=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: `+n;throw mt(e),new Error(e)}function X(n,e){n||F()}function $(n,e){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ph{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class Ey{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wy{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new lt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new ph(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new be(e)}}class Iy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ty{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Iy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class by{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ay{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){X(this.o===void 0);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new by(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class mh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Sy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function kn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class de{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new de(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new de(0,0))}static max(){return new U(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ir{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(),r===void 0?r=e.length-t:r>e.length-t&&F(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ir?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends Ir{construct(e,t,r){return new ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const Cy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Ir{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return Cy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ne.fromString(e))}static fromName(e){return new N(ne.fromString(e).popFirst(5))}static empty(){return new N(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ne(e.slice()))}}function Ry(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new Ft(s,N.empty(),e)}function ky(n){return new Ft(n.readTime,n.key,-1)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft(U.min(),N.empty(),-1)}static max(){return new Ft(U.max(),N.empty(),-1)}}function Py(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const Dy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Nr(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Dy)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Ly(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ko{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ko.oe=-1;function Zs(n){return n==null}function Ns(n){return n===0&&1/n==-1/0}function Vy(n){return typeof n=="number"&&Number.isInteger(n)&&!Ns(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function vl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ds(this.root,e,this.comparator,!0)}}class ds{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=i??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,r,s,i){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(e){return new El(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class El{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Me{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Me([])}unionWith(e){let t=new ye(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class yh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yh("Invalid base64 string: "+i):i}}(e);return new _e(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const Oy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(X(!!n),typeof n=="string"){let e=0;const t=Oy.exec(n);if(X(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
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
 */function Qo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Yo(n){const e=n.mapValue.fields.__previous_value__;return Qo(e)?Yo(e):e}function Tr(n){const e=Bt(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class Ny{constructor(e,t,r,s,i,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class br{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fs={mapValue:{}};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qo(n)?4:Fy(n)?9007199254740991:My(n)?10:11:F()}function Ze(n,e){if(n===e)return!0;const t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Tr(n).isEqual(Tr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Bt(s.timestampValue),c=Bt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return on(s.bytesValue).isEqual(on(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=le(s.doubleValue),c=le(i.doubleValue);return a===c?Ns(a)===Ns(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return kn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(vl(a)!==vl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Ze(a[u],c[u])))return!1;return!0}(n,e);default:return F()}}function Ar(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function Pn(n,e){if(n===e)return 0;const t=an(n),r=an(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=le(i.integerValue||i.doubleValue),u=le(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return wl(n.timestampValue,e.timestampValue);case 4:return wl(Tr(n),Tr(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,a){const c=on(i),u=on(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=Y(c[d],u[d]);if(p!==0)return p}return Y(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Y(le(i.latitude),le(a.latitude));return c!==0?c:Y(le(i.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Il(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,d,p;const g=i.fields||{},E=a.fields||{},S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,C=(u=E.value)===null||u===void 0?void 0:u.arrayValue,L=Y(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:Il(S,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===fs.mapValue&&a===fs.mapValue)return 0;if(i===fs.mapValue)return 1;if(a===fs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const E=Y(u[g],p[g]);if(E!==0)return E;const S=Pn(c[u[g]],d[p[g]]);if(S!==0)return S}return Y(u.length,p.length)}(n.mapValue,e.mapValue);default:throw F()}}function wl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Bt(n),r=Bt(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function Il(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Pn(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function Dn(n){return go(n)}function go(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return on(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return N.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=go(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${go(t.fields[a])}`;return s+"}"}(n.mapValue):F()}function Tl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yo(n){return!!n&&"integerValue"in n}function Jo(n){return!!n&&"arrayValue"in n}function bl(n){return!!n&&"nullValue"in n}function Al(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Es(n){return!!n&&"mapValue"in n}function My(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function pr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return cn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=pr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Fy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Es(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=pr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Es(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Es(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){cn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Le(pr(this.value))}}function _h(n){const e=[];return cn(n.fields,(t,r)=>{const s=new ge([t]);if(Es(r)){const i=_h(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Me(e)}/**
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
 */class Ae{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,U.min(),U.min(),U.min(),Le.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,U.min(),U.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,U.min(),U.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ms{constructor(e,t){this.position=e,this.inclusive=t}}function Sl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=N.comparator(N.fromName(a.referenceValue),t.key):r=Pn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function By(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class vh{}class he extends vh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $y(e,t,r):t==="array-contains"?new zy(e,r):t==="in"?new Wy(e,r):t==="not-in"?new Hy(e,r):t==="array-contains-any"?new Gy(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new qy(e,r):new jy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Pn(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(Pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends vh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ke(e,t)}matches(e){return Eh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Eh(n){return n.op==="and"}function wh(n){return Uy(n)&&Eh(n)}function Uy(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function _o(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(wh(n))return n.filters.map(e=>_o(e)).join(",");{const e=n.filters.map(t=>_o(t)).join(",");return`${n.op}(${e})`}}function Ih(n,e){return n instanceof he?function(r,s){return s instanceof he&&r.op===s.op&&r.field.isEqual(s.field)&&Ze(r.value,s.value)}(n,e):n instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ih(a,s.filters[c]),!0):!1}(n,e):void F()}function Th(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${Dn(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(Th).join(" ,")+"}"}(n):"Filter"}class $y extends he{constructor(e,t,r){super(e,t,r),this.key=N.fromName(r.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class qy extends he{constructor(e,t){super(e,"in",t),this.keys=bh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jy extends he{constructor(e,t){super(e,"not-in",t),this.keys=bh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>N.fromName(r.referenceValue))}class zy extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jo(t)&&Ar(t.arrayValue,this.value)}}class Wy extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ar(this.value.arrayValue,t)}}class Hy extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ar(this.value.arrayValue,t)}}class Gy extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ar(this.value.arrayValue,r))}}/**
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
 */class Ky{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Rl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Ky(n,e,t,r,s,i,a)}function Xo(n){const e=$(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>_o(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Dn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Dn(r)).join(",")),e.ue=t}return e.ue}function Zo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!By(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ih(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cl(n.startAt,e.startAt)&&Cl(n.endAt,e.endAt)}function vo(n){return N.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qy(n,e,t,r,s,i,a,c){return new Fr(n,e,t,r,s,i,a,c)}function ei(n){return new Fr(n)}function kl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ah(n){return n.collectionGroup!==null}function mr(n){const e=$(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ye(ge.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Fs(i,r))}),t.has(ge.keyField().canonicalString())||e.ce.push(new Fs(ge.keyField(),r))}return e.ce}function Je(n){const e=$(n);return e.le||(e.le=Yy(e,mr(n))),e.le}function Yy(n,e){if(n.limitType==="F")return Rl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fs(s.field,i)});const t=n.endAt?new Ms(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ms(n.startAt.position,n.startAt.inclusive):null;return Rl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Eo(n,e){const t=n.filters.concat([e]);return new Fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wo(n,e,t){return new Fr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ti(n,e){return Zo(Je(n),Je(e))&&n.limitType===e.limitType}function Sh(n){return`${Xo(Je(n))}|lt:${n.limitType}`}function gn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Th(s)).join(", ")}]`),Zs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Dn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Dn(s)).join(",")),`Target(${r})`}(Je(n))}; limitType=${n.limitType})`}function ni(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):N.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of mr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=Sl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,mr(r),s)||r.endAt&&!function(a,c,u){const d=Sl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,mr(r),s))}(n,e)}function Jy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ch(n){return(e,t)=>{let r=!1;for(const s of mr(n)){const i=Xy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Xy(n,e,t){const r=n.field.isKeyField()?N.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Pn(u,d):F()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */class Bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gh(this.inner)}size(){return this.innerSize}}/**
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
 */const Zy=new re(N.comparator);function gt(){return Zy}const Rh=new re(N.comparator);function lr(...n){let e=Rh;for(const t of n)e=e.insert(t.key,t);return e}function kh(n){let e=Rh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Jt(){return gr()}function Ph(){return gr()}function gr(){return new Bn(n=>n.toString(),(n,e)=>n.isEqual(e))}const e_=new re(N.comparator),t_=new ye(N.comparator);function j(...n){let e=t_;for(const t of n)e=e.add(t);return e}const n_=new ye(Y);function r_(){return n_}/**
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
 */function ea(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ns(e)?"-0":e}}function Dh(n){return{integerValue:""+n}}function s_(n,e){return Vy(e)?Dh(e):ea(n,e)}/**
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
 */class ri{constructor(){this._=void 0}}function i_(n,e,t){return n instanceof Bs?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qo(i)&&(i=Yo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Sr?Lh(n,e):n instanceof Cr?Vh(n,e):function(s,i){const a=xh(s,i),c=Pl(a)+Pl(s.Pe);return yo(a)&&yo(s.Pe)?Dh(c):ea(s.serializer,c)}(n,e)}function o_(n,e,t){return n instanceof Sr?Lh(n,e):n instanceof Cr?Vh(n,e):t}function xh(n,e){return n instanceof Us?function(r){return yo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bs extends ri{}class Sr extends ri{constructor(e){super(),this.elements=e}}function Lh(n,e){const t=Oh(e);for(const r of n.elements)t.some(s=>Ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class Cr extends ri{constructor(e){super(),this.elements=e}}function Vh(n,e){let t=Oh(e);for(const r of n.elements)t=t.filter(s=>!Ze(s,r));return{arrayValue:{values:t}}}class Us extends ri{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Pl(n){return le(n.integerValue||n.doubleValue)}function Oh(n){return Jo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function a_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Sr&&s instanceof Sr||r instanceof Cr&&s instanceof Cr?kn(r.elements,s.elements,Ze):r instanceof Us&&s instanceof Us?Ze(r.Pe,s.Pe):r instanceof Bs&&s instanceof Bs}(n.transform,e.transform)}class c_{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ws(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class si{}function Nh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ta(n.key,Ge.none()):new Br(n.key,n.data,Ge.none());{const t=n.data,r=Le.empty();let s=new ye(ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new qt(n.key,r,new Me(s.toArray()),Ge.none())}}function l_(n,e,t){n instanceof Br?function(s,i,a){const c=s.value.clone(),u=xl(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(s,i,a){if(!ws(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=xl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Mh(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function yr(n,e,t,r){return n instanceof Br?function(i,a,c,u){if(!ws(i.precondition,a))return c;const d=i.value.clone(),p=Ll(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof qt?function(i,a,c,u){if(!ws(i.precondition,a))return c;const d=Ll(i.fieldTransforms,u,a),p=a.data;return p.setAll(Mh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return ws(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function u_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=xh(r.transform,s||null);i!=null&&(t===null&&(t=Le.empty()),t.set(r.field,i))}return t||null}function Dl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&kn(r,s,(i,a)=>a_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Br extends si{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qt extends si{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function xl(n,e,t){const r=new Map;X(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,o_(a,c,t[s]))}return r}function Ll(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,i_(i,a,e))}return r}class ta extends si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h_ extends si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class d_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&l_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ph();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Nh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,(t,r)=>Dl(t,r))&&kn(this.baseMutations,e.baseMutations,(t,r)=>Dl(t,r))}}class na{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length);let s=function(){return e_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new na(e,t,r,s)}}/**
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
 */class f_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class p_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ue,H;function m_(n){switch(n){default:return F();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Fh(n){if(n===void 0)return mt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ue.OK:return R.OK;case ue.CANCELLED:return R.CANCELLED;case ue.UNKNOWN:return R.UNKNOWN;case ue.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ue.INTERNAL:return R.INTERNAL;case ue.UNAVAILABLE:return R.UNAVAILABLE;case ue.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ue.NOT_FOUND:return R.NOT_FOUND;case ue.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ue.ABORTED:return R.ABORTED;case ue.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ue.DATA_LOSS:return R.DATA_LOSS;default:return F()}}(H=ue||(ue={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function g_(){return new TextEncoder}/**
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
 */const y_=new en([4294967295,4294967295],0);function Vl(n){const e=g_().encode(n),t=new ch;return t.update(e),new Uint8Array(t.digest())}function Ol(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new en([t,r],0),new en([s,i],0)]}class ra{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ur(`Invalid padding: ${t}`);if(r<0)throw new ur(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ur(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ur(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=en.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(en.fromNumber(r)));return s.compare(y_)===1&&(s=new en([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Vl(e),[r,s]=Ol(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ra(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Vl(e),[r,s]=Ol(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ii{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ur.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ii(U.min(),s,new re(Y),gt(),j())}}class Ur{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ur(r,t,j(),j(),j())}}/**
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
 */class Is{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Bh{constructor(e,t){this.targetId=e,this.me=t}}class Uh{constructor(e,t,r=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nl{constructor(){this.fe=0,this.ge=Fl(),this.pe=_e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=j(),t=j(),r=j();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F()}}),new Ur(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Fl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class __{constructor(e){this.Le=e,this.Be=new Map,this.ke=gt(),this.qe=Ml(),this.Qe=new re(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(vo(i))if(r===0){const a=new N(i.path);this.Ue(t,a,Ae.newNoDocument(a,U.min()))}else X(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=on(r).toUint8Array()}catch(u){if(u instanceof yh)return Rn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ra(a,s,i)}catch(u){return Rn(u instanceof ur?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&vo(c.target)){const u=new N(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ae.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=j();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ii(e,t,this.Qe,this.ke,r);return this.ke=gt(),this.qe=Ml(),this.Qe=new re(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Nl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ye(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ml(){return new re(N.comparator)}function Fl(){return new re(N.comparator)}const v_={asc:"ASCENDING",desc:"DESCENDING"},E_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},w_={and:"AND",or:"OR"};class I_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Io(n,e){return n.useProto3Json||Zs(e)?e:{value:e}}function $s(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $h(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function T_(n,e){return $s(n,e.toTimestamp())}function Xe(n){return X(!!n),U.fromTimestamp(function(t){const r=Bt(t);return new de(r.seconds,r.nanos)}(n))}function sa(n,e){return To(n,e).canonicalString()}function To(n,e){const t=function(s){return new ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function qh(n){const e=ne.fromString(n);return X(Gh(e)),e}function bo(n,e){return sa(n.databaseId,e.path)}function eo(n,e){const t=qh(e);if(t.get(1)!==n.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new N(zh(t))}function jh(n,e){return sa(n.databaseId,e)}function b_(n){const e=qh(n);return e.length===4?ne.emptyPath():zh(e)}function Ao(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zh(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Bl(n,e,t){return{name:bo(n,e),fields:t.value.mapValue.fields}}function A_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(X(p===void 0||typeof p=="string"),_e.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array),_e.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?R.UNKNOWN:Fh(d.code);return new V(p,d.message||"")}(a);t=new Uh(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=eo(n,r.document.name),i=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):U.min(),c=new Le({mapValue:{fields:r.document.fields}}),u=Ae.newFoundDocument(s,i,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Is(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=eo(n,r.document),i=r.readTime?Xe(r.readTime):U.min(),a=Ae.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Is([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=eo(n,r.document),i=r.removedTargetIds||[];t=new Is([],i,s,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new p_(s,i),c=r.targetId;t=new Bh(c,a)}}return t}function S_(n,e){let t;if(e instanceof Br)t={update:Bl(n,e.key,e.value)};else if(e instanceof ta)t={delete:bo(n,e.key)};else if(e instanceof qt)t={update:Bl(n,e.key,e.data),updateMask:O_(e.fieldMask)};else{if(!(e instanceof h_))return F();t={verify:bo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Sr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Cr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Us)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw F()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:T_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(n,e.precondition)),t}function C_(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Xe(s.updateTime):Xe(i);return a.isEqual(U.min())&&(a=Xe(i)),new c_(a,s.transformResults||[])}(t,e))):[]}function R_(n,e){return{documents:[jh(n,e.path)]}}function k_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=jh(n,s);const i=function(d){if(d.length!==0)return Hh(Ke.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:yn(E.field),direction:x_(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Io(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function P_(n){let e=b_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const E=Wh(g);return E instanceof Ke&&wh(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(C){return new Fs(_n(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,Zs(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(g){const E=!!g.before,S=g.values||[];return new Ms(S,E)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const E=!g.before,S=g.values||[];return new Ms(S,E)}(t.endAt)),Qy(e,s,a,i,c,"F",u,d)}function D_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=_n(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_n(t.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_n(t.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_n(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return he.create(_n(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>Wh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function x_(n){return v_[n]}function L_(n){return E_[n]}function V_(n){return w_[n]}function yn(n){return{fieldPath:n.canonicalString()}}function _n(n){return ge.fromServerFormat(n.fieldPath)}function Hh(n){return n instanceof he?function(t){if(t.op==="=="){if(Al(t.value))return{unaryFilter:{field:yn(t.field),op:"IS_NAN"}};if(bl(t.value))return{unaryFilter:{field:yn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Al(t.value))return{unaryFilter:{field:yn(t.field),op:"IS_NOT_NAN"}};if(bl(t.value))return{unaryFilter:{field:yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yn(t.field),op:L_(t.op),value:t.value}}}(n):n instanceof Ke?function(t){const r=t.getFilters().map(s=>Hh(s));return r.length===1?r[0]:{compositeFilter:{op:V_(t.op),filters:r}}}(n):F()}function O_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xt{constructor(e,t,r,s,i=U.min(),a=U.min(),c=_e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class N_{constructor(e){this.ct=e}}function M_(n){const e=P_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wo(e,e.limit,"L"):e}/**
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
 */class F_{constructor(){this.un=new B_}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Ft.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class B_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ye(ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ye(ne.comparator)).toArray()}}/**
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
 */class xn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xn(0)}static kn(){return new xn(-1)}}/**
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
 */class U_{constructor(){this.changes=new Bn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class q_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&yr(r.mutation,s,Me.empty(),de.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){const s=Jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=lr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=gt();const a=gr(),c=function(){return gr()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof qt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),yr(p.mutation,d,p.mutation.getFieldMask(),de.now())):a.set(d.key,Me.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var g;return c.set(d,new $_(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=gr();let s=new re((a,c)=>a-c),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Me.empty();p=c.applyToLocalView(d,p),r.set(u,p);const g=(s.get(c.batchId)||j()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,g=Ph();p.forEach(E=>{if(!i.has(E)){const S=Nh(t.get(E),r.get(E));S!==null&&g.set(E,S),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ah(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Jt());let c=-1,u=i;return a.next(d=>k.forEach(d,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{u=u.insert(p,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,j())).next(p=>({batchId:c,changes:kh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next(r=>{let s=lr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,u=>{const d=function(g,E){return new Fr(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ae.newInvalidDocument(p)))});let c=lr();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&yr(p.mutation,d,Me.empty(),de.now()),ni(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class j_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:M_(s.bundledQuery),readTime:Xe(s.readTime)}}(t)),k.resolve()}}/**
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
 */class z_{constructor(){this.overlays=new re(N.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Jt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Jt(),i=t.length+1,a=new N(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new re((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Jt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Jt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return k.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new f_(t,r));let i=this.Ir.get(t);i===void 0&&(i=j(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class W_{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class ia{constructor(){this.Tr=new ye(fe.Er),this.dr=new ye(fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new fe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new fe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new N(new ne([])),r=new fe(t,e),s=new fe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new N(new ne([])),r=new fe(t,e),s=new fe(t,e+1);let i=j();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new fe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return N.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||N.comparator(e.key,t.key)}}/**
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
 */class H_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ye(fe.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new d_(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new fe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),s=new fe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(Y);return t.forEach(s=>{const i=new fe(s,0),a=new fe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;N.isDocumentKey(i)||(i=i.child(""));const a=new fe(new N(i),0);let c=new ye(Y);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.wr)),!0)},a),k.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){X(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const i=new fe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new fe(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class G_{constructor(e){this.Mr=e,this.docs=function(){return new re(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=gt();const a=t.path,c=new N(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Py(ky(p),r)<=0||(s.has(p.key)||ni(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new K_(this)}getSize(e){return k.resolve(this.size)}}class K_ extends U_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Q_{constructor(e){this.persistence=e,this.Nr=new Bn(t=>Xo(t),Zo),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ia,this.targetCount=0,this.kr=xn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new xn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
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
 */class Y_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ko(0),this.Kr=!1,this.Kr=!0,this.$r=new W_,this.referenceDelegate=e(this),this.Ur=new Q_(this),this.indexManager=new F_,this.remoteDocumentCache=function(s){return new G_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new N_(t),this.Gr=new j_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new z_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new H_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new J_(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class J_ extends xy{constructor(e){super(),this.currentSequenceNumber=e}}class oa{constructor(e){this.persistence=e,this.Jr=new ia,this.Yr=null}static Zr(e){return new oa(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=N.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class aa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=j(),s=j();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new aa(e,t.fromCache,r,s)}}/**
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
 */class X_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Z_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ff()?8:Ly(Re())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new X_;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ir()<=z.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",gn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(ir()<=z.DEBUG&&O("QueryEngine","Query:",gn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ir()<=z.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",gn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):k.resolve())}Yi(e,t){if(kl(t))return k.resolve(null);let r=Je(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=wo(t,null,"F"),r=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=j(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,c);return this.ns(t,d,a,u.readTime)?this.Yi(e,wo(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,s){return kl(t)||s.isEqual(U.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?k.resolve(null):(ir()<=z.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gn(t)),this.rs(e,a,t,Ry(s,-1)).next(c=>c))})}ts(e,t){let r=new ye(Ch(e));return t.forEach((s,i)=>{ni(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ir()<=z.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",gn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ft.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class ev{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new re(Y),this._s=new Bn(i=>Xo(i),Zo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function tv(n,e,t,r){return new ev(n,e,t,r)}async function Kh(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=j();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function nv(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const g=d.batch,E=g.keys();let S=k.resolve();return E.forEach(C=>{S=S.next(()=>p.getEntry(u,C)).next(L=>{const P=d.docVersions.get(C);X(P!==null),L.version.compareTo(P)<0&&(g.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),p.addEntry(L)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=j();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Qh(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function rv(n,e){const t=$(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,g)=>{const E=s.get(g);if(!E)return;c.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,p.addedDocuments,g)));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(_e.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(g,S),function(L,P,B){return L.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(E,S,p)&&c.push(t.Ur.updateTargetData(i,S))});let u=gt(),d=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(sv(i,a,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(U.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.os=s,i))}function sv(n,e,t){let r=j(),s=j();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=gt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function iv(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ov(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new xt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function So(n,e,t){const r=$(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Mr(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ul(n,e,t){const r=$(n);let s=U.min(),i=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const g=$(u),E=g._s.get(p);return E!==void 0?k.resolve(g.os.get(E)):g.Ur.getTargetData(d,p)}(r,a,Je(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:j())).next(c=>(av(r,Jy(e),c),{documents:c,Ts:i})))}function av(n,e,t){let r=n.us.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class $l{constructor(){this.activeTargetIds=r_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cv{constructor(){this.so=new $l,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new $l,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lv{_o(e){}shutdown(){}}/**
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
 */class ql{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ps=null;function to(){return ps===null?ps=function(){return 268435456+Math.round(2147483648*Math.random())}():ps++,"0x"+ps.toString(16)}/**
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
 */const uv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Te="WebChannelConnection";class dv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=to(),u=this.xo(t,r.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,u,d,s).then(p=>(O("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw Rn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=uv[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=to();return new Promise((a,c)=>{const u=new lh;u.setWithCredentials(!0),u.listenOnce(uh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case vs.NO_ERROR:const p=u.getResponseJson();O(Te,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case vs.TIMEOUT:O(Te,`RPC '${e}' ${i} timed out`),c(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case vs.HTTP_ERROR:const g=u.getStatus();if(O(Te,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const C=function(P){const B=P.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN}(S.status);c(new V(C,S.message))}else c(new V(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new V(R.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O(Te,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);O(Te,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=to(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fh(),c=dh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");O(Te,`Creating RPC '${e}' stream ${s}: ${p}`,u);const g=a.createWebChannel(p,u);let E=!1,S=!1;const C=new hv({Io:P=>{S?O(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(E||(O(Te,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),O(Te,`RPC '${e}' stream ${s} sending:`,P),g.send(P))},To:()=>g.close()}),L=(P,B,G)=>{P.listen(B,W=>{try{G(W)}catch(ae){setTimeout(()=>{throw ae},0)}})};return L(g,cr.EventType.OPEN,()=>{S||(O(Te,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),L(g,cr.EventType.CLOSE,()=>{S||(S=!0,O(Te,`RPC '${e}' stream ${s} transport closed`),C.So())}),L(g,cr.EventType.ERROR,P=>{S||(S=!0,Rn(Te,`RPC '${e}' stream ${s} transport errored:`,P),C.So(new V(R.UNAVAILABLE,"The operation could not be completed")))}),L(g,cr.EventType.MESSAGE,P=>{var B;if(!S){const G=P.data[0];X(!!G);const W=G,ae=W.error||((B=W[0])===null||B===void 0?void 0:B.error);if(ae){O(Te,`RPC '${e}' stream ${s} received error:`,ae);const qe=ae.status;let ce=function(_){const v=ue[_];if(v!==void 0)return Fh(v)}(qe),w=ae.message;ce===void 0&&(ce=R.INTERNAL,w="Unknown error status: "+qe+" with message "+ae.message),S=!0,C.So(new V(ce,w)),g.close()}else O(Te,`RPC '${e}' stream ${s} received:`,G),C.bo(G)}}),L(c,hh.STAT_EVENT,P=>{P.stat===mo.PROXY?O(Te,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===mo.NOPROXY&&O(Te,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function no(){return typeof document<"u"?document:null}/**
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
 */function oi(n){return new I_(n,!0)}/**
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
 */class Yh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Jh{constructor(e,t,r,s,i,a,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new V(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fv extends Jh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=A_(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Xe(a.readTime):U.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ao(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=vo(u)?{documents:R_(i,u)}:{query:k_(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$h(i,a.resumeToken);const d=Io(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=$s(i,a.snapshotVersion.toTimestamp());const d=Io(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=D_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ao(this.serializer),t.removeTarget=e,this.a_(t)}}class pv extends Jh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=C_(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ao(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>S_(this.serializer,r))};this.a_(t)}}/**
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
 */class mv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,To(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(R.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,To(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mt(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class yv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{ln(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=$(u);d.L_.add(4),await $r(d),d.q_.set("Unknown"),d.L_.delete(4),await ai(d)}(this))})}),this.q_=new gv(r,s)}}async function ai(n){if(ln(n))for(const e of n.B_)await e(!0)}async function $r(n){for(const e of n.B_)await e(!1)}function Xh(n,e){const t=$(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ha(t)?ua(t):Un(t).r_()&&la(t,e))}function ca(n,e){const t=$(n),r=Un(t);t.N_.delete(e),r.r_()&&Zh(t,e),t.N_.size===0&&(r.r_()?r.o_():ln(t)&&t.q_.set("Unknown"))}function la(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Un(n).A_(e)}function Zh(n,e){n.Q_.xe(e),Un(n).R_(e)}function ua(n){n.Q_=new __({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Un(n).start(),n.q_.v_()}function ha(n){return ln(n)&&!Un(n).n_()&&n.N_.size>0}function ln(n){return $(n).L_.size===0}function ed(n){n.Q_=void 0}async function _v(n){n.q_.set("Online")}async function vv(n){n.N_.forEach((e,t)=>{la(n,e)})}async function Ev(n,e){ed(n),ha(n)?(n.q_.M_(e),ua(n)):n.q_.set("Unknown")}async function wv(n,e,t){if(n.q_.set("Online"),e instanceof Uh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qs(n,r)}else if(e instanceof Is?n.Q_.Ke(e):e instanceof Bh?n.Q_.He(e):n.Q_.We(e),!t.isEqual(U.min()))try{const r=await Qh(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(_e.EMPTY_BYTE_STRING,p.snapshotVersion)),Zh(i,u);const g=new xt(p.target,u,d,p.sequenceNumber);la(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await qs(n,r)}}async function qs(n,e,t){if(!Mr(e))throw e;n.L_.add(1),await $r(n),n.q_.set("Offline"),t||(t=()=>Qh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ai(n)})}function td(n,e){return e().catch(t=>qs(n,t,e))}async function ci(n){const e=$(n),t=Ut(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Iv(e);)try{const s=await iv(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Tv(e,s)}catch(s){await qs(e,s)}nd(e)&&rd(e)}function Iv(n){return ln(n)&&n.O_.length<10}function Tv(n,e){n.O_.push(e);const t=Ut(n);t.r_()&&t.V_&&t.m_(e.mutations)}function nd(n){return ln(n)&&!Ut(n).n_()&&n.O_.length>0}function rd(n){Ut(n).start()}async function bv(n){Ut(n).p_()}async function Av(n){const e=Ut(n);for(const t of n.O_)e.m_(t.mutations)}async function Sv(n,e,t){const r=n.O_.shift(),s=na.from(r,e,t);await td(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ci(n)}async function Cv(n,e){e&&Ut(n).V_&&await async function(r,s){if(function(a){return m_(a)&&a!==R.ABORTED}(s.code)){const i=r.O_.shift();Ut(r).s_(),await td(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ci(r)}}(n,e),nd(n)&&rd(n)}async function jl(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=ln(t);t.L_.add(3),await $r(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ai(t)}async function Rv(n,e){const t=$(n);e?(t.L_.delete(2),await ai(t)):e||(t.L_.add(2),await $r(t),t.q_.set("Unknown"))}function Un(n){return n.K_||(n.K_=function(t,r,s){const i=$(t);return i.w_(),new fv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:_v.bind(null,n),Ro:vv.bind(null,n),mo:Ev.bind(null,n),d_:wv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ha(n)?ua(n):n.q_.set("Unknown")):(await n.K_.stop(),ed(n))})),n.K_}function Ut(n){return n.U_||(n.U_=function(t,r,s){const i=$(t);return i.w_(),new pv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bv.bind(null,n),mo:Cv.bind(null,n),f_:Av.bind(null,n),g_:Sv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ci(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class da{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new da(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fa(n,e){if(mt("AsyncQueue",`${e}: ${n}`),Mr(n))return new V(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class An{constructor(e){this.comparator=e?(t,r)=>e(t,r)||N.comparator(t.key,r.key):(t,r)=>N.comparator(t.key,r.key),this.keyedMap=lr(),this.sortedSet=new re(this.comparator)}static emptySet(e){return new An(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof An)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new An;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class zl{constructor(){this.W_=new re(N.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ln{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Ln(e,t,An.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class kv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Pv{constructor(){this.queries=Wl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=Wl(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new V(R.ABORTED,"Firestore shutting down"))}}function Wl(){return new Bn(n=>Sh(n),ti)}async function pa(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new kv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=fa(a,`Initialization of query '${gn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&ga(t)}async function ma(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Dv(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&ga(t)}function xv(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function ga(n){n.Y_.forEach(e=>{e.next()})}var Co,Hl;(Hl=Co||(Co={})).ea="default",Hl.Cache="cache";class ya{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ln(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Co.Cache}}/**
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
 */class sd{constructor(e){this.key=e}}class id{constructor(e){this.key=e}}class Lv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=j(),this.mutatedKeys=j(),this.Aa=Ch(e),this.Ra=new An(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new zl,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const E=s.get(p),S=ni(this.query,g)?g:null,C=!!E&&this.mutatedKeys.has(E.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;E&&S?E.data.isEqual(S.data)?C!==L&&(r.track({type:3,doc:S}),P=!0):this.ga(E,S)||(r.track({type:2,doc:S}),P=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!E&&S?(r.track({type:0,doc:S}),P=!0):E&&!S&&(r.track({type:1,doc:E}),P=!0,(u||d)&&(c=!0)),P&&(S?(a=a.add(S),i=L?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,g)=>function(S,C){const L=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return L(S)-L(C)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new Ln(this.query,e.Ra,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new zl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=j(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new id(r))}),this.da.forEach(r=>{e.has(r)||t.push(new sd(r))}),t}ba(e){this.Ta=e.Ts,this.da=j();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ln.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Vv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ov{constructor(e){this.key=e,this.va=!1}}class Nv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Bn(c=>Sh(c),ti),this.Ma=new Map,this.xa=new Set,this.Oa=new re(N.comparator),this.Na=new Map,this.La=new ia,this.Ba={},this.ka=new Map,this.qa=xn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Mv(n,e,t=!0){const r=hd(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await od(r,e,t,!0),s}async function Fv(n,e){const t=hd(n);await od(t,e,!0,!1)}async function od(n,e,t,r){const s=await ov(n.localStore,Je(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Bv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Xh(n.remoteStore,s),c}async function Bv(n,e,t,r,s){n.Ka=(g,E,S)=>async function(L,P,B,G){let W=P.view.ma(B);W.ns&&(W=await Ul(L.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,W)));const ae=G&&G.targetChanges.get(P.targetId),qe=G&&G.targetMismatches.get(P.targetId)!=null,ce=P.view.applyChanges(W,L.isPrimaryClient,ae,qe);return Kl(L,P.targetId,ce.wa),ce.snapshot}(n,g,E,S);const i=await Ul(n.localStore,e,!0),a=new Lv(e,i.Ts),c=a.ma(i.documents),u=Ur.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Kl(n,t,d.wa);const p=new Vv(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Uv(n,e,t){const r=$(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!ti(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await So(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ca(r.remoteStore,s.targetId),Ro(r,s.targetId)}).catch(Nr)):(Ro(r,s.targetId),await So(r.localStore,s.targetId,!0))}async function $v(n,e){const t=$(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ca(t.remoteStore,r.targetId))}async function qv(n,e,t){const r=Qv(n);try{const s=await function(a,c){const u=$(a),d=de.now(),p=c.reduce((S,C)=>S.add(C.key),j());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=gt(),L=j();return u.cs.getEntries(S,p).next(P=>{C=P,C.forEach((B,G)=>{G.isValidDocument()||(L=L.add(B))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(P=>{g=P;const B=[];for(const G of c){const W=u_(G,g.get(G.key).overlayedDocument);W!=null&&B.push(new qt(G.key,W,_h(W.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,B,c)}).next(P=>{E=P;const B=P.applyToLocalDocumentSet(g,L);return u.documentOverlayCache.saveOverlays(S,P.batchId,B)})}).then(()=>({batchId:E.batchId,changes:kh(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new re(Y)),d=d.insert(c,u),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await qr(r,s.changes),await ci(r.remoteStore)}catch(s){const i=fa(s,"Failed to persist write");t.reject(i)}}async function ad(n,e){const t=$(n);try{const r=await rv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?X(a.va):s.removedDocuments.size>0&&(X(a.va),a.va=!1))}),await qr(t,r,e)}catch(r){await Nr(r)}}function Gl(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=$(a);u.onlineState=c;let d=!1;u.queries.forEach((p,g)=>{for(const E of g.j_)E.Z_(c)&&(d=!0)}),d&&ga(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jv(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new re(N.comparator);a=a.insert(i,Ae.newNoDocument(i,U.min()));const c=j().add(i),u=new ii(U.min(),new Map,new re(Y),a,c);await ad(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),_a(r)}else await So(r.localStore,e,!1).then(()=>Ro(r,e,t)).catch(Nr)}async function zv(n,e){const t=$(n),r=e.batch.batchId;try{const s=await nv(t.localStore,e);ld(t,r,null),cd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qr(t,s)}catch(s){await Nr(s)}}async function Wv(n,e,t){const r=$(n);try{const s=await function(a,c){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(X(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);ld(r,e,t),cd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qr(r,s)}catch(s){await Nr(s)}}function cd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function ld(n,e,t){const r=$(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ro(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||ud(n,r)})}function ud(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ca(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),_a(n))}function Kl(n,e,t){for(const r of t)r instanceof sd?(n.La.addReference(r.key,e),Hv(n,r)):r instanceof id?(O("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||ud(n,r.key)):F()}function Hv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(O("SyncEngine","New document in limbo: "+t),n.xa.add(r),_a(n))}function _a(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new N(ne.fromString(e)),r=n.qa.next();n.Na.set(r,new Ov(t)),n.Oa=n.Oa.insert(t,r),Xh(n.remoteStore,new xt(Je(ei(t.path)),r,"TargetPurposeLimboResolution",Ko.oe))}}async function qr(n,e,t){const r=$(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=aa.Wi(u.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,d){const p=$(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(d,E=>k.forEach(E.$i,S=>p.persistence.referenceDelegate.addReference(g,E.targetId,S)).next(()=>k.forEach(E.Ui,S=>p.persistence.referenceDelegate.removeReference(g,E.targetId,S)))))}catch(g){if(!Mr(g))throw g;O("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const S=p.os.get(E),C=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(E,L)}}}(r.localStore,i))}async function Gv(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await Kh(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new V(R.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qr(t,r.hs)}}function Kv(n,e){const t=$(n),r=t.Na.get(e);if(r&&r.va)return j().add(r.key);{let s=j();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function hd(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ad.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jv.bind(null,e),e.Ca.d_=Dv.bind(null,e.eventManager),e.Ca.$a=xv.bind(null,e.eventManager),e}function Qv(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wv.bind(null,e),e}class js{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return tv(this.persistence,new Z_,e.initialUser,this.serializer)}Ga(e){return new Y_(oa.Zr,this.serializer)}Wa(e){return new cv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}js.provider={build:()=>new js};class ko{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gv.bind(null,this.syncEngine),await Rv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Pv}()}createDatastore(e){const t=oi(e.databaseInfo.databaseId),r=function(i){return new dv(i)}(e.databaseInfo);return function(i,a,c,u){return new mv(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new yv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Gl(this.syncEngine,t,0),function(){return ql.D()?new ql:new lv}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,p){const g=new Nv(s,i,a,c,u,d);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=$(s);O("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await $r(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ko.provider={build:()=>new ko};/**
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
 */class va{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Yv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=mh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=fa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ro(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Kh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ql(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jv(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>jl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>jl(e.remoteStore,s)),n._onlineComponents=e}async function Jv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await ro(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Rn("Error using user provided cache. Falling back to memory cache: "+t),await ro(n,new js)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await ro(n,new js);return n._offlineComponents}async function dd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Ql(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Ql(n,new ko))),n._onlineComponents}function Xv(n){return dd(n).then(e=>e.syncEngine)}async function zs(n){const e=await dd(n),t=e.eventManager;return t.onListen=Mv.bind(null,e.syncEngine),t.onUnlisten=Uv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Fv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$v.bind(null,e.syncEngine),t}function Zv(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new va({next:E=>{p.Za(),a.enqueueAndForget(()=>ma(i,g));const S=E.docs.has(c);!S&&E.fromCache?d.reject(new V(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&u&&u.source==="server"?d.reject(new V(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new ya(ei(c.path),p,{includeMetadataChanges:!0,_a:!0});return pa(i,g)}(await zs(n),n.asyncQueue,e,t,r)),r.promise}function eE(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const p=new va({next:E=>{p.Za(),a.enqueueAndForget(()=>ma(i,g)),E.fromCache&&u.source==="server"?d.reject(new V(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new ya(c,p,{includeMetadataChanges:!0,_a:!0});return pa(i,g)}(await zs(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function fd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Yl=new Map;/**
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
 */function pd(n,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tE(n,e,t,r){if(e===!0&&r===!0)throw new V(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Jl(n){if(!N.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xl(n){if(N.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function li(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function Be(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=li(n);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Zl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ui{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vy;switch(r.type){case"firstParty":return new Ty(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Yl.get(t);r&&(O("ComponentProvider","Removing Datastore"),Yl.delete(t),r.terminate())}(this),Promise.resolve()}}function nE(n,e,t,r={}){var s;const i=(n=Be(n,ui))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=be.MOCK_USER;else{c=Df(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new be(d)}n._authCredentials=new Ey(new ph(c,u))}}/**
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
 */class un{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new un(this.firestore,e,this._query)}}class Se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}}class Nt extends un{constructor(e,t,r){super(e,t,ei(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new N(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function hi(n,e,...t){if(n=oe(n),pd("collection","path",e),n instanceof ui){const r=ne.fromString(e,...t);return Xl(r),new Nt(n,null,r)}{if(!(n instanceof Se||n instanceof Nt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return Xl(r),new Nt(n.firestore,null,r)}}function ie(n,e,...t){if(n=oe(n),arguments.length===1&&(e=mh.newId()),pd("doc","path",e),n instanceof ui){const r=ne.fromString(e,...t);return Jl(r),new Se(n,null,new N(r))}{if(!(n instanceof Se||n instanceof Nt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return Jl(r),new Se(n.firestore,n instanceof Nt?n.converter:null,new N(r))}}/**
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
 */class eu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yh(this,"async_queue_retry"),this.Vu=()=>{const r=no();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=no();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=no();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new lt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Mr(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw mt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=da.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function tu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class $t extends ui{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new eu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eu(e),this._firestoreClient=void 0,await e}}}function rE(n,e){const t=typeof n=="object"?n:Tu(),r=typeof n=="string"?n:"(default)",s=Oo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kf("firestore");i&&nE(s,...i)}return s}function di(n){if(n._terminated)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sE(n),n._firestoreClient}function sE(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,p){return new Ny(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,fd(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Yv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(_e.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vn(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ea{constructor(e){this._methodName=e}}/**
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
 */class wa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class Ia{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const iE=/^__.*__$/;class oE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Br(e,this.data,t,this.fieldTransforms)}}class md{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Ta{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ta(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ws(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(gd(this.Cu)&&iE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class aE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oi(e)}Qu(e,t,r,s=!1){return new Ta({Cu:e,methodName:t,qu:r,path:ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ba(n){const e=n._freezeSettings(),t=oi(n._databaseId);return new aE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cE(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Aa("Data must be an object, but it was:",a,r);const c=yd(r,a);let u,d;if(i.merge)u=new Me(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const E=Po(e,g,t);if(!a.contains(E))throw new V(R.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);vd(p,E)||p.push(E)}u=new Me(p),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new oE(new Le(c),u,d)}class pi extends Ea{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pi}}function lE(n,e,t,r){const s=n.Qu(1,e,t);Aa("Data must be an object, but it was:",s,r);const i=[],a=Le.empty();cn(r,(u,d)=>{const p=Sa(e,u,t);d=oe(d);const g=s.Nu(p);if(d instanceof pi)i.push(p);else{const E=jr(d,g);E!=null&&(i.push(p),a.set(p,E))}});const c=new Me(i);return new md(a,c,s.fieldTransforms)}function uE(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[Po(e,r,t)],u=[s];if(i.length%2!=0)throw new V(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(Po(e,i[E])),u.push(i[E+1]);const d=[],p=Le.empty();for(let E=c.length-1;E>=0;--E)if(!vd(d,c[E])){const S=c[E];let C=u[E];C=oe(C);const L=a.Nu(S);if(C instanceof pi)d.push(S);else{const P=jr(C,L);P!=null&&(d.push(S),p.set(S,P))}}const g=new Me(d);return new md(p,g,a.fieldTransforms)}function hE(n,e,t,r=!1){return jr(t,n.Qu(r?4:3,e))}function jr(n,e){if(_d(n=oe(n)))return Aa("Unsupported field value:",e,n),yd(n,e);if(n instanceof Ea)return function(r,s){if(!gd(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=jr(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return s_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=de.fromDate(r);return{timestampValue:$s(s.serializer,i)}}if(r instanceof de){const i=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$s(s.serializer,i)}}if(r instanceof wa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vn)return{bytesValue:$h(s.serializer,r._byteString)};if(r instanceof Se){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ia)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return ea(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${li(r)}`)}(n,e)}function yd(n,e){const t={};return gh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,(r,s)=>{const i=jr(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function _d(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof wa||n instanceof Vn||n instanceof Se||n instanceof Ea||n instanceof Ia)}function Aa(n,e,t){if(!_d(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=li(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Po(n,e,t){if((e=oe(e))instanceof fi)return e._internalPath;if(typeof e=="string")return Sa(n,e);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const dE=new RegExp("[~\\*/\\[\\]]");function Sa(n,e,t){if(e.search(dE)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fi(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ws(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(R.INVALID_ARGUMENT,c+n+u)}function vd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ed{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ca("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fE extends Ed{data(){return super.data()}}function Ca(n,e){return typeof e=="string"?Sa(n,e):e instanceof fi?e._internalPath:e._delegate._internalPath}/**
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
 */function wd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ra{}class pE extends Ra{}function mi(n,e,...t){let r=[];e instanceof Ra&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof ka).length,c=i.filter(u=>u instanceof gi).length;if(a>1||a>0&&c>0)throw new V(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class gi extends pE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new gi(e,t,r)}_apply(e){const t=this._parse(e);return Id(e._query,t),new un(e.firestore,e.converter,Eo(e._query,t))}_parse(e){const t=ba(e.firestore);return function(i,a,c,u,d,p,g){let E;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new V(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ru(g,p);const S=[];for(const C of g)S.push(nu(u,i,C));E={arrayValue:{values:S}}}else E=nu(u,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ru(g,p),E=hE(c,a,g,p==="in"||p==="not-in");return he.create(d,p,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function yi(n,e,t){const r=e,s=Ca("where",n);return gi._create(s,r,t)}class ka extends Ra{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ka(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Id(a,u),a=Eo(a,u)}(e._query,t),new un(e.firestore,e.converter,Eo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function nu(n,e,t){if(typeof(t=oe(t))=="string"){if(t==="")throw new V(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ah(e)&&t.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ne.fromString(t));if(!N.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tl(n,new N(r))}if(t instanceof Se)return Tl(n,t._key);throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${li(t)}.`)}function ru(n,e){if(!Array.isArray(n)||n.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Id(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class mE{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return cn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>le(a.doubleValue));return new Ia(i)}convertGeoPoint(e){return new wa(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Yo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Tr(e));default:return null}}convertTimestamp(e){const t=Bt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ne.fromString(e);X(Gh(r));const s=new br(r.get(1),r.get(3)),i=new N(r.popFirst(5));return s.isEqual(t)||mt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function gE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class hr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Td extends Ed{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ca("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ts extends Td{data(e={}){return super.data(e)}}class bd{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new hr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ts(this._firestore,this._userDataWriter,r.key,r,new hr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Ts(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ts(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:yE(c.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function _i(n){n=Be(n,Se);const e=Be(n.firestore,$t);return Zv(di(e),n._key).then(t=>Sd(e,n,t))}class Pa extends mE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,t)}}function vi(n){n=Be(n,un);const e=Be(n.firestore,$t),t=di(e),r=new Pa(e);return wd(n._query),eE(t,n._query).then(s=>new bd(e,r,n,s))}function Ad(n,e,t){n=Be(n,Se);const r=Be(n.firestore,$t),s=gE(n.converter,e);return Da(r,[cE(ba(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ge.none())])}function xe(n,e,t,...r){n=Be(n,Se);const s=Be(n.firestore,$t),i=ba(s);let a;return a=typeof(e=oe(e))=="string"||e instanceof fi?uE(i,"updateDoc",n._key,e,t,r):lE(i,"updateDoc",n._key,e),Da(s,[a.toMutation(n._key,Ge.exists(!0))])}function _E(n){return Da(Be(n.firestore,$t),[new ta(n._key,Ge.none())])}function Hs(n,...e){var t,r,s;n=oe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||tu(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(tu(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,d,p;if(n instanceof Se)d=Be(n.firestore,$t),p=ei(n._key.path),u={next:g=>{e[a]&&e[a](Sd(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Be(n,un);d=Be(g.firestore,$t),p=g._query;const E=new Pa(d);u={next:S=>{e[a]&&e[a](new bd(d,E,g,S))},error:e[a+1],complete:e[a+2]},wd(n._query)}return function(E,S,C,L){const P=new va(L),B=new ya(S,P,C);return E.asyncQueue.enqueueAndForget(async()=>pa(await zs(E),B)),()=>{P.Za(),E.asyncQueue.enqueueAndForget(async()=>ma(await zs(E),B))}}(di(d),p,c,u)}function Da(n,e){return function(r,s){const i=new lt;return r.asyncQueue.enqueueAndForget(async()=>qv(await Xv(r),s,i)),i.promise}(di(n),e)}function Sd(n,e,t){const r=t.docs.get(e._key),s=new Pa(n);return new Td(n,s,e._key,r,new hr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Fn=s})(Nn),Cn(new tn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new $t(new wy(r.getProvider("auth-internal")),new Ay(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ot(_l,"4.7.3",e),Ot(_l,"4.7.3","esm2017")})();const vE={apiKey:"AIzaSyA9N9iGCBld6BV0MxAWpF5tyMDPLwVxsxY",authDomain:"grocery-lists-29774.firebaseapp.com",projectId:"grocery-lists-29774",storageBucket:"grocery-lists-29774.firebasestorage.app",messagingSenderId:"260921375354",appId:"1:260921375354:web:0d3f81b657660bdd0719c3"},Cd=Iu(vE),jt=yy(Cd),ee=rE(Cd),Rr=document.getElementById("loading-screen"),Rd=document.getElementById("auth-container"),Ei=document.getElementById("app-container"),su=document.getElementById("login-form"),iu=document.getElementById("signup-form"),Xt=document.getElementById("login-btn"),Zt=document.getElementById("signup-btn"),EE=document.getElementById("show-signup"),wE=document.getElementById("show-login"),_r=document.getElementById("login-error"),dr=document.getElementById("signup-error"),xa=document.getElementById("header-title"),IE=document.getElementById("header-subtitle");let J=null,K=null,D=null,bs=null,ut=null,Oe=-1,ht=new Set,zr={},En=localStorage.getItem("listSortMode")||"az",vn=localStorage.getItem("historySortMode")||"az",at=new Set,ke={},so=null,Ne=[],Fe=[],wn="shared";const TE=["Apples","Bananas","Oranges","Grapes","Strawberries","Blueberries","Raspberries","Blackberries","Watermelon","Cantaloupe","Honeydew","Pineapple","Mango","Papaya","Avocados","Tomatoes","Cucumbers","Lettuce","Spinach","Kale","Arugula","Cabbage","Broccoli","Cauliflower","Carrots","Celery","Bell Peppers","Jalapenos","Onions","Garlic","Ginger","Potatoes","Sweet Potatoes","Mushrooms","Zucchini","Squash","Asparagus","Green Beans","Peas","Corn","Eggplant","Radishes","Beets","Lemons","Limes","Fresh Herbs","Basil","Cilantro","Parsley","Mint","Rosemary","Thyme","Milk","Almond Milk","Oat Milk","Soy Milk","Cream","Half and Half","Butter","Margarine","Eggs","Cheese","Cheddar Cheese","Mozzarella","Parmesan","Feta","Cream Cheese","Cottage Cheese","Sour Cream","Yogurt","Greek Yogurt","Ice Cream","Chicken Breast","Chicken Thighs","Ground Chicken","Whole Chicken","Turkey","Ground Turkey","Beef","Ground Beef","Steak","Pork Chops","Bacon","Sausage","Ham","Hot Dogs","Deli Meat","Salmon","Tuna","Shrimp","Cod","Tilapia","Crab","Bread","Whole Wheat Bread","Sourdough","Bagels","English Muffins","Tortillas","Pita Bread","Croissants","Donuts","Muffins","Cookies","Cake","Pie","Rice","Brown Rice","Pasta","Spaghetti","Penne","Macaroni","Quinoa","Oats","Cereal","Granola","Flour","Sugar","Brown Sugar","Honey","Maple Syrup","Salt","Pepper","Olive Oil","Vegetable Oil","Coconut Oil","Vinegar","Soy Sauce","Hot Sauce","Ketchup","Mustard","Mayonnaise","BBQ Sauce","Salsa","Peanut Butter","Jam","Jelly","Canned Beans","Canned Tomatoes","Tomato Sauce","Pasta Sauce","Chicken Broth","Beef Broth","Vegetable Broth","Soup","Ramen","Mac and Cheese","Black Pepper","Garlic Powder","Onion Powder","Paprika","Cumin","Chili Powder","Oregano","Basil","Thyme","Cinnamon","Nutmeg","Vanilla Extract","Bay Leaves","Chips","Pretzels","Crackers","Popcorn","Nuts","Almonds","Cashews","Peanuts","Trail Mix","Granola Bars","Protein Bars","Candy","Chocolate","Gummy Bears","Coffee","Tea","Green Tea","Juice","Orange Juice","Apple Juice","Soda","Water","Sparkling Water","Energy Drinks","Sports Drinks","Wine","Beer","Kombucha","Frozen Pizza","Frozen Vegetables","Frozen Fruit","Ice Cream","Frozen Dinners","Frozen Chicken","Frozen Fish","French Fries","Tater Tots","Waffles","Pancakes","Canned Corn","Canned Peas","Canned Tuna","Canned Salmon","Pickles","Olives","Applesauce","Fruit Cups","Baking Powder","Baking Soda","Yeast","Chocolate Chips","Cocoa Powder","Powdered Sugar","Condensed Milk","Evaporated Milk","Paper Towels","Toilet Paper","Tissues","Trash Bags","Aluminum Foil","Plastic Wrap","Dish Soap","Laundry Detergent","Fabric Softener","Bleach","Sponges","Cleaning Spray","Napkins","Plates","Cups","Utensils","Batteries","Light Bulbs","Ziploc Bags","Toothpaste","Toothbrush","Mouthwash","Floss","Shampoo","Conditioner","Body Wash","Soap","Deodorant","Razors","Shaving Cream","Lotion","Sunscreen","Band-aids","Diapers","Baby Wipes","Baby Food","Formula","Dog Food","Cat Food","Cat Litter","Pet Treats"].sort(),hn={produce:{label:"Produce",emoji:"🥦"},dairy:{label:"Dairy & Eggs",emoji:"🥛"},meat:{label:"Meat & Seafood",emoji:"🥩"},bakery:{label:"Bakery",emoji:"🍞"},pantry:{label:"Pantry",emoji:"🥫"},spices:{label:"Spices & Seasonings",emoji:"🧂"},snacks:{label:"Snacks",emoji:"🍿"},beverages:{label:"Beverages",emoji:"☕"},frozen:{label:"Frozen",emoji:"🧊"},household:{label:"Household",emoji:"🧴"},personal:{label:"Personal Care",emoji:"🪥"},baby:{label:"Baby & Pet",emoji:"🍼"},other:{label:"Other",emoji:"📦"}},Gs=["produce","dairy","meat","bakery","pantry","spices","snacks","beverages","frozen","household","personal","baby","other"],bE={Apples:"produce",Bananas:"produce",Oranges:"produce",Grapes:"produce",Strawberries:"produce",Blueberries:"produce",Raspberries:"produce",Blackberries:"produce",Watermelon:"produce",Cantaloupe:"produce",Honeydew:"produce",Pineapple:"produce",Mango:"produce",Papaya:"produce",Avocados:"produce",Tomatoes:"produce",Cucumbers:"produce",Lettuce:"produce",Spinach:"produce",Kale:"produce",Arugula:"produce",Cabbage:"produce",Broccoli:"produce",Cauliflower:"produce",Carrots:"produce",Celery:"produce","Bell Peppers":"produce",Jalapenos:"produce",Onions:"produce",Garlic:"produce",Ginger:"produce",Potatoes:"produce","Sweet Potatoes":"produce",Mushrooms:"produce",Zucchini:"produce",Squash:"produce",Asparagus:"produce","Green Beans":"produce",Peas:"produce",Corn:"produce",Eggplant:"produce",Radishes:"produce",Beets:"produce",Lemons:"produce",Limes:"produce","Fresh Herbs":"produce",Basil:"produce",Cilantro:"produce",Parsley:"produce",Mint:"produce",Rosemary:"produce",Thyme:"produce",Milk:"dairy","Almond Milk":"dairy","Oat Milk":"dairy","Soy Milk":"dairy",Cream:"dairy","Half and Half":"dairy",Butter:"dairy",Margarine:"dairy",Eggs:"dairy",Cheese:"dairy","Cheddar Cheese":"dairy",Mozzarella:"dairy",Parmesan:"dairy",Feta:"dairy","Cream Cheese":"dairy","Cottage Cheese":"dairy","Sour Cream":"dairy",Yogurt:"dairy","Greek Yogurt":"dairy","Chicken Breast":"meat","Chicken Thighs":"meat","Ground Chicken":"meat","Whole Chicken":"meat",Turkey:"meat","Ground Turkey":"meat",Beef:"meat","Ground Beef":"meat",Steak:"meat","Pork Chops":"meat",Bacon:"meat",Sausage:"meat",Ham:"meat","Hot Dogs":"meat","Deli Meat":"meat",Salmon:"meat",Tuna:"meat",Shrimp:"meat",Cod:"meat",Tilapia:"meat",Crab:"meat",Bread:"bakery","Whole Wheat Bread":"bakery",Sourdough:"bakery",Bagels:"bakery","English Muffins":"bakery",Tortillas:"bakery","Pita Bread":"bakery",Croissants:"bakery",Donuts:"bakery",Muffins:"bakery",Cookies:"bakery",Cake:"bakery",Pie:"bakery",Rice:"pantry","Brown Rice":"pantry",Pasta:"pantry",Spaghetti:"pantry",Penne:"pantry",Macaroni:"pantry",Quinoa:"pantry",Oats:"pantry",Cereal:"pantry",Granola:"pantry",Flour:"pantry",Sugar:"pantry","Brown Sugar":"pantry",Honey:"pantry","Maple Syrup":"pantry","Olive Oil":"pantry","Vegetable Oil":"pantry","Coconut Oil":"pantry",Vinegar:"pantry","Soy Sauce":"pantry","Hot Sauce":"pantry",Ketchup:"pantry",Mustard:"pantry",Mayonnaise:"pantry","BBQ Sauce":"pantry",Salsa:"pantry","Peanut Butter":"pantry",Jam:"pantry",Jelly:"pantry","Canned Beans":"pantry","Canned Tomatoes":"pantry","Tomato Sauce":"pantry","Pasta Sauce":"pantry","Chicken Broth":"pantry","Beef Broth":"pantry","Vegetable Broth":"pantry",Soup:"pantry",Ramen:"pantry","Mac and Cheese":"pantry","Canned Corn":"pantry","Canned Peas":"pantry","Canned Tuna":"pantry","Canned Salmon":"pantry",Pickles:"pantry",Olives:"pantry",Applesauce:"pantry","Fruit Cups":"pantry","Baking Powder":"pantry","Baking Soda":"pantry",Yeast:"pantry","Chocolate Chips":"pantry","Cocoa Powder":"pantry","Powdered Sugar":"pantry","Condensed Milk":"pantry","Evaporated Milk":"pantry",Salt:"spices",Pepper:"spices","Black Pepper":"spices","Garlic Powder":"spices","Onion Powder":"spices",Paprika:"spices",Cumin:"spices","Chili Powder":"spices",Oregano:"spices",Cinnamon:"spices",Nutmeg:"spices","Vanilla Extract":"spices","Bay Leaves":"spices",Chips:"snacks",Pretzels:"snacks",Crackers:"snacks",Popcorn:"snacks",Nuts:"snacks",Almonds:"snacks",Cashews:"snacks",Peanuts:"snacks","Trail Mix":"snacks","Granola Bars":"snacks","Protein Bars":"snacks",Candy:"snacks",Chocolate:"snacks","Gummy Bears":"snacks",Coffee:"beverages",Tea:"beverages","Green Tea":"beverages",Juice:"beverages","Orange Juice":"beverages","Apple Juice":"beverages",Soda:"beverages",Water:"beverages","Sparkling Water":"beverages","Energy Drinks":"beverages","Sports Drinks":"beverages",Wine:"beverages",Beer:"beverages",Kombucha:"beverages","Frozen Pizza":"frozen","Frozen Vegetables":"frozen","Frozen Fruit":"frozen","Ice Cream":"frozen","Frozen Dinners":"frozen","Frozen Chicken":"frozen","Frozen Fish":"frozen","French Fries":"frozen","Tater Tots":"frozen",Waffles:"frozen",Pancakes:"frozen","Paper Towels":"household","Toilet Paper":"household",Tissues:"household","Trash Bags":"household","Aluminum Foil":"household","Plastic Wrap":"household","Dish Soap":"household","Laundry Detergent":"household","Fabric Softener":"household",Bleach:"household",Sponges:"household","Cleaning Spray":"household",Napkins:"household",Plates:"household",Cups:"household",Utensils:"household",Batteries:"household","Light Bulbs":"household","Ziploc Bags":"household",Toothpaste:"personal",Toothbrush:"personal",Mouthwash:"personal",Floss:"personal",Shampoo:"personal",Conditioner:"personal","Body Wash":"personal",Soap:"personal",Deodorant:"personal",Razors:"personal","Shaving Cream":"personal",Lotion:"personal",Sunscreen:"personal","Band-aids":"personal",Diapers:"baby","Baby Wipes":"baby","Baby Food":"baby",Formula:"baby","Dog Food":"baby","Cat Food":"baby","Cat Litter":"baby","Pet Treats":"baby"},AE=Object.fromEntries(Object.entries(bE).map(([n,e])=>[n.toLowerCase(),e]));SE();function SE(){ig(jt,async n=>{var e;if(n){J=n,console.log("User signed in:",n.email);const t=ie(ee,"users",n.uid),r=await _i(t),s=r.exists()?new Date(r.data().createdAt):null,i=new Date("2026-02-21");if(!n.emailVerified&&((e=n.providerData[0])==null?void 0:e.providerId)==="password"&&s&&s>=i){DE(n.email);return}if(!r.exists()||!r.data().termsAccepted){xE(t);return}kd()}else J=null,kr()}),Xt.addEventListener("click",ou),Zt.addEventListener("click",au),EE.addEventListener("click",()=>{su.style.display="none",iu.style.display="block",_r.classList.remove("show")}),wE.addEventListener("click",()=>{iu.style.display="none",su.style.display="block",dr.classList.remove("show")}),FE(),OE(),BE(),$E(),HE(),document.getElementById("login-email").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("login-password").focus()}),document.getElementById("login-password").addEventListener("keypress",n=>{n.key==="Enter"&&ou()}),document.getElementById("signup-email").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("signup-password").focus()}),document.getElementById("signup-password").addEventListener("keypress",n=>{n.key==="Enter"&&au()})}async function ou(){const n=document.getElementById("login-email").value.trim(),e=document.getElementById("login-password").value;if(!n||!e){Sn(_r,"Please enter email and password");return}Xt.disabled=!0,Xt.textContent="Signing in...",_r.classList.remove("show");try{await ng(jt,n,e)}catch(t){console.error("Login error:",t);let r="Failed to sign in";t.code==="auth/invalid-credential"?r="Invalid email or password":t.code==="auth/too-many-requests"&&(r="Too many attempts. Try again later"),Sn(_r,r),Xt.disabled=!1,Xt.textContent="Sign In"}}async function au(){const n=document.getElementById("signup-email").value.trim(),e=document.getElementById("signup-password").value;if(!n||!e){Sn(dr,"Please enter email and password");return}if(e.length<6){Sn(dr,"Password must be at least 6 characters");return}Zt.disabled=!0,Zt.textContent="Creating account...",dr.classList.remove("show");try{const t=await tg(jt,n,e);await Yu(t.user),await Ad(ie(ee,"users",t.user.uid),{email:n,createdAt:new Date().toISOString(),stores:["Costco","Save-On-Foods","T&T Market"],lists:{Costco:[],"Save-On-Foods":[],"T&T Market":[]},history:[],linkedTo:null,linkedWith:[],pendingInvites:[]}),kE(n)}catch(t){console.error("Signup error:",t);let r="Failed to create account";t.code==="auth/email-already-in-use"?r="Email already in use":t.code==="auth/invalid-email"&&(r="Invalid email address"),Sn(dr,r),Zt.disabled=!1,Zt.textContent="Create Account"}}async function CE(){try{const n=document.getElementById("hamburger-menu");n&&n.classList.remove("visible"),bs&&(bs(),bs=null),ut&&(ut(),ut=null),await Ju(jt)}catch(n){console.error("Logout error:",n)}}window.handleLogout=CE;async function RE(){const n=new Qe;try{console.log("Starting Google sign-in with popup...");const t=(await Ag(jt,n)).user;console.log("Google sign-in successful:",t.email);const r=ie(ee,"users",t.uid);(await _i(r)).exists()||(console.log("Creating new user document..."),await Ad(r,{email:t.email,createdAt:new Date().toISOString(),stores:["Costco","Save-On-Foods","T&T Market"],lists:{Costco:[],"Save-On-Foods":[],"T&T Market":[]},history:[],linkedTo:null,linkedWith:[],pendingInvites:[]}),console.log("User document created!")),console.log("Sign-in complete, waiting for auth state change...")}catch(e){if(console.error("Google sign-in error:",e),e.code==="auth/popup-closed-by-user"||e.code==="auth/cancelled-popup-request"){console.log("User closed the popup");return}let t=`Failed to sign in with Google (${e.code})`;e.code==="auth/popup-blocked"?t="Popup was blocked. Please allow popups for this site.":e.code==="auth/unauthorized-domain"&&(t="This domain is not authorized in Firebase."),Sn(_r,t),console.error("Error details:",e.code,e.message)}}window.handleGoogleSignIn=RE;function kE(n){const e=document.getElementById("auth-container");e.innerHTML=`
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
  `}window.resendVerification=async function(){try{const n=jt.currentUser;n?(await Yu(n),q("✓ Verification email sent!")):q("Please sign up again","error")}catch(n){console.error("Resend verification error:",n),q("Failed to send email","error")}};async function PE(){const n=document.getElementById("login-email"),e=(n==null?void 0:n.value.trim())||prompt("Enter your email address:");if(e)try{await eg(jt,e),q(`✓ Password reset email sent to ${e}`)}catch(t){console.error("Password reset error:",t),t.code==="auth/user-not-found"?q("No account found with that email","error"):t.code==="auth/invalid-email"?q("Invalid email address","error"):q("Failed to send reset email","error")}}window.handleForgotPassword=PE;function DE(n){const e=document.getElementById("auth-container");e.style.display="flex",Ei.style.display="none",Rr.style.display="none",e.innerHTML=`
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
  `}window.showDeleteAccountModal=function(){document.getElementById("delete-account-modal").style.display="flex",document.getElementById("delete-confirm-input").value="",document.getElementById("delete-account-error").textContent=""};window.closeDeleteAccountModal=function(){document.getElementById("delete-account-modal").style.display="none"};window.confirmDeleteAccount=async function(){const n=document.getElementById("delete-confirm-input").value.trim(),e=document.getElementById("delete-account-error");if(n!=="DELETE"){e.textContent="Please type DELETE exactly to confirm.";return}const t=document.getElementById("delete-account-confirm-btn");t.disabled=!0,t.textContent="Deleting...",e.textContent="";try{const r=J.uid;if(K.linkedWith&&K.linkedWith.length>0){const s=hi(ee,"users"),i=mi(s,yi("linkedTo","==",r)),a=await vi(i);for(const c of a.docs)await xe(c.ref,{linkedTo:null})}if(K.linkedTo){const s=ie(ee,"users",K.linkedTo),i=await _i(s);if(i.exists()){const a=(i.data().linkedWith||[]).filter(c=>c!==J.email);await xe(s,{linkedWith:a})}}await _E(ie(ee,"users",r));try{await al(J)}catch(s){if(s.code==="auth/requires-recent-login"){const i=new Qe;await Sg(J,i),await al(J)}else throw s}window.location.reload()}catch(r){console.error("Delete account error:",r),t.disabled=!1,t.textContent="Delete My Account",e.textContent="Something went wrong. Please try again or contact support@getlistapp.com."}};function xE(n){const e=document.getElementById("terms-modal"),t=document.getElementById("auth-container");t.style.display="none",Ei.style.display="none",Rr.style.display="none",e.style.display="flex",document.getElementById("terms-accept-btn").onclick=async()=>{e.style.display="none",Rr.style.display="flex",await xe(n,{termsAccepted:!0,termsAcceptedAt:Date.now()}),kd()},document.getElementById("terms-decline-btn").onclick=async()=>{e.style.display="none",await Ju(jt),kr()}}function Sn(n,e){n.textContent=e,n.classList.add("show")}async function kd(){try{const n=ie(ee,"users",J.uid);bs=Hs(n,async e=>{e.exists()?(K=e.data(),K.linkedTo?await VE(K.linkedTo):await LE()):(console.error("User document not found"),kr())})}catch(n){console.error("Error loading user data:",n),kr()}}async function LE(){const n=ie(ee,"users",J.uid);ut&&ut(),ut=Hs(n,e=>{e.exists()?(D=e.data(),ke=D.privateLists||{},zr=D.itemCategories||{},Ne=D.purchaseLog||[],As(),Do()):(console.error("Own grocery data not found"),kr())})}async function VE(n){const e=ie(ee,"users",n),t=ie(ee,"users",J.uid);ut&&ut(),so&&so(),ut=Hs(e,r=>{r.exists()?(D=r.data(),As(),Do()):(console.error("Linked account not found"),D=K,As(),Do())}),so=Hs(t,r=>{if(r.exists()){const s=r.data();ke=s.privateLists||{},zr=s.itemCategories||{},Ne=s.purchaseLog||[],As()}})}function As(){var t;if(!K||!D)return;const n=Object.values(D.lists||{}).reduce((r,s)=>r+s.filter(i=>!i.checked).length,0),e=((t=D.stores)==null?void 0:t.length)||0;IE.textContent=`${e} stores • ${n} items`,ME(),Ue(),KE(),$n(),Md(),Ua()}function OE(){const n=document.getElementById("hamburger-menu");n.addEventListener("click",e=>{e.target===n&&toggleMenu()})}window.toggleMenu=function(){document.getElementById("hamburger-menu").classList.toggle("visible")};window.openSettings=function(){toggleMenu(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById("settings-tab").classList.add("active"),xa.textContent="Settings",document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"))};window.openManageSharing=function(){toggleMenu(),document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById("manage-sharing-tab").classList.add("active"),xa.textContent="Manage Sharing",document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),La()};function La(){const n=document.getElementById("manage-sharing-tab");if(!n||!K)return;const e=K.linkedTo!==null&&K.linkedTo!==void 0,t=K.linkedWith&&K.linkedWith.length>0;let r="";e?r=`
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
        ${t?NE():'<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No one yet. Add someone above!</p>'}
      </div>
    `,n.innerHTML=r}function NE(){let n="";const e=(K.linkedWith||[]).filter(t=>t&&typeof t=="string"&&t.includes("@")&&t.toLowerCase()!==J.email.toLowerCase());return console.log("Rendering shared with list:",e),console.log("Current user email:",J.email),console.log("Raw linkedWith:",K.linkedWith),e.length===0?'<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No one yet. Add someone above!</p>':(e.forEach(t=>{n+=`
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
    `}),n)}window.addShareFromManage=function(){const n=document.getElementById("manage-share-email"),e=n.value.trim();if(!e){io("Please enter an email address","error");return}if(!e.includes("@")){io("Please enter a valid email address","error");return}if(e===J.email){io("You can't share with yourself!","error");return}Pd(e).then(()=>{n.value="",setTimeout(()=>La(),500)})};function io(n,e="success"){const t=document.getElementById("manage-share-status");t&&(t.innerHTML=n,t.style.display="block",t.style.background=e==="error"?"#FEE2E2":"#D1FAE5",t.style.color=e==="error"?"#991B1B":"#065F46")}function ME(){const n=document.getElementById("share-indicator");if(!n)return;const e=K.linkedTo!==null&&K.linkedTo!==void 0,t=K.linkedWith&&K.linkedWith.length>0;e?(n.innerHTML=`
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

You'll return to your own empty lists.`))try{if(await xe(ie(ee,"users",J.uid),{linkedTo:null}),K.linkedTo){const n=await _i(ie(ee,"users",K.linkedTo));if(n.exists()){const t=(n.data().linkedWith||[]).filter(r=>r!==J.email);await xe(ie(ee,"users",K.linkedTo),{linkedWith:t})}}q("✓ Unlinked successfully! Returning to your own lists."),setTimeout(()=>window.location.reload(),1e3)}catch(n){console.error("Error unlinking:",n),q("Failed to unlink","error")}};window.showQuickShare=function(){const n=prompt("Enter email address to share with:");if(n){if(!n.includes("@")){alert("Please enter a valid email address");return}if(n===J.email){alert("You can't share with yourself!");return}Pd(n)}};async function Pd(n){n=n.trim().toLowerCase();try{q("Searching for account...");const e=hi(ee,"users"),t=mi(e,yi("email","==",n)),r=await vi(t);if(r.empty){alert(`No account found with email: ${n}

Ask them to create an account first, then try again.`);return}const s=r.docs[0],i=s.id,a=s.data();if(a.linkedTo===J.uid){alert(`${n} is already linked to your account!`);return}if(a.linkedTo){alert(`${n} is already linked to another account.

They must unlink first before you can share with them.`);return}if(a.linkedWith&&a.linkedWith.length>0){alert(`${n} is already sharing their lists with others.

They cannot be added to your shared lists.`);return}await xe(ie(ee,"users",i),{linkedTo:J.uid});const c=[...K.linkedWith||[]];c.includes(n)||c.push(n),await xe(ie(ee,"users",J.uid),{linkedWith:c}),q(`✓ Successfully linked with ${n}!`)}catch(e){console.error("Error sharing:",e),alert("Failed to send invite. Please try again.")}}window.unlinkUser=async function(n){if(confirm(`Remove ${n} from shared lists?

They will return to their own lists.`))try{q("Removing access...");const e=hi(ee,"users"),t=mi(e,yi("email","==",n)),r=await vi(t);if(!r.empty){const c=r.docs[0].id;await xe(ie(ee,"users",c),{linkedTo:null})}const s=(K.linkedWith||[]).filter(a=>a!==n);await xe(ie(ee,"users",J.uid),{linkedWith:s}),q(`✓ Removed ${n} from shared lists`);const i=document.getElementById("manage-sharing-tab");i&&i.classList.contains("active")&&setTimeout(()=>La(),500)}catch(e){console.error("Error unlinking user:",e),q("Failed to remove user","error")}};function kr(){Rr.style.display="none",Rd.style.display="block",Ei.style.display="none",Xt.disabled=!1,Xt.textContent="Sign In",Zt.disabled=!1,Zt.textContent="Create Account",document.getElementById("login-email").value="",document.getElementById("login-password").value="",document.getElementById("signup-email").value="",document.getElementById("signup-password").value=""}function Do(){Rr.style.display="none",Rd.style.display="none",Ei.style.display="block"}function FE(){const n=document.querySelectorAll(".nav-item"),e={lists:document.getElementById("lists-tab"),stores:document.getElementById("stores-tab"),history:document.getElementById("history-tab"),feed:document.getElementById("feed-tab")},t={lists:"My Lists",stores:"Manage Stores",history:"Item History",feed:"Smart Feed"},r=document.getElementById("fab-add-btn");n.forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.tab;n.forEach(u=>u.classList.remove("active")),s.classList.add("active"),Object.values(e).forEach(u=>u.classList.remove("active"));const a=document.getElementById("manage-sharing-tab"),c=document.getElementById("settings-tab");a&&a.classList.remove("active"),c&&c.classList.remove("active"),e[i]&&e[i].classList.add("active"),xa.textContent=t[i]||i,r&&(r.style.display=i==="lists"?"flex":"none")})})}function BE(){document.getElementById("fab-add-btn").addEventListener("click",UE)}function UE(){const n=wn==="private";document.getElementById("add-modal-title").textContent=n?"Add Private Items":"Add Items",Fe=[];const e=document.getElementById("modal-store-selector");e.innerHTML="",((D==null?void 0:D.stores)||[]).forEach(t=>{const r=document.createElement("div");r.className="store-chip",r.textContent=t,r.addEventListener("click",()=>r.classList.toggle("selected")),e.appendChild(r)}),document.getElementById("modal-item-name").value="",document.getElementById("modal-quantity-display").textContent="1",Va(),document.getElementById("add-modal").classList.add("visible"),Ma("modal-item-name","modal-item-name-autocomplete"),"ontouchstart"in window&&document.getElementById("modal-item-name").blur()}function xo(){document.getElementById("add-modal").classList.remove("visible"),Fe=[]}function Va(){const n=document.getElementById("modal-pending-section"),e=document.getElementById("modal-pending-list"),t=document.getElementById("modal-pending-count");n.style.display=Fe.length===0?"none":"block",Fe.length!==0&&(t.textContent=`(${Fe.length})`,e.innerHTML=Fe.map((r,s)=>`
    <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--bg-main); border-radius:10px;">
      <span style="font-weight:500; font-size:0.95rem;">${r.name}</span>
      <div style="display:flex; align-items:center; gap:10px;">
        ${r.quantity>1?`<span style="font-size:0.85rem; color:var(--primary); font-weight:600;">×${r.quantity}</span>`:""}
        <button onclick="window.removePendingItem(${s})" style="background:none; border:none; color:#94a3b8; font-size:1.1rem; cursor:pointer; padding:2px 4px; line-height:1;">×</button>
      </div>
    </div>
  `).join(""))}window.removePendingItem=function(n){Fe.splice(n,1),Va()};function $E(){document.getElementById("modal-add-btn").addEventListener("click",cu),document.getElementById("modal-save-btn").addEventListener("click",qE),document.getElementById("modal-cancel-btn").addEventListener("click",xo),document.getElementById("modal-qty-minus").addEventListener("click",()=>adjustModalQuantity(-1)),document.getElementById("modal-qty-plus").addEventListener("click",()=>adjustModalQuantity(1)),document.getElementById("modal-item-name").addEventListener("keypress",n=>{n.key==="Enter"&&cu()}),document.getElementById("add-modal").addEventListener("click",n=>{n.target.id==="add-modal"&&xo()})}window.adjustModalQuantity=function(n){const e=document.getElementById("modal-quantity-display");let t=parseInt(e.textContent)||1;t=Math.max(1,Math.min(99,t+n)),e.textContent=t};function cu(){const n=document.getElementById("modal-item-name"),e=n.value.trim();if(!e){q("Please enter an item name","error");return}const{name:t,quantity:r}=Nd(e),s=parseInt(document.getElementById("modal-quantity-display").textContent)||1,i=e!==t?r:s,a=t,c=Fe.find(u=>u.name.toLowerCase()===a.toLowerCase());c?c.quantity+=i:Fe.push({name:a,quantity:i}),n.value="",document.getElementById("modal-quantity-display").textContent="1","ontouchstart"in window||n.focus(),Va()}async function qE(){if(Fe.length===0){q("No items to add","error");return}const n=Array.from(document.querySelectorAll("#modal-store-selector .store-chip.selected")).map(e=>e.textContent);if(n.length===0){q("Please select at least one store","error");return}try{const e=wn==="private",t=e?ke:D.lists,r=[];Fe.forEach(({name:s,quantity:i})=>{n.forEach(a=>{t[a]||(t[a]=[]);const c=t[a].find(u=>u.name.toLowerCase()===s.toLowerCase());c?c.quantity=(c.quantity||1)+i:t[a].push({name:s,checked:!1,quantity:i,isFavorite:dt().includes(s)})}),D.history.includes(s)||D.history.push(s),!e&&!$e(s)&&r.push(s)}),e?(await yt(),await Ce()):await Ce(),q(`✓ Added ${Fe.length} item${Fe.length>1?"s":""} to ${n.length} store${n.length>1?"s":""}`),xo(),r.length>0&&setTimeout(()=>showCategoryPrompt(r[0]),400)}catch(e){console.error("Error adding items:",e),q("Failed to add items","error")}}let Oa=0,Na=0;function Dd(n){const e=n.target.closest("[data-action]");if(!e)return;const t=e.dataset.action,r=e.dataset.store,s=e.dataset.private==="true";t==="toggle-store"?toggleStore(r,s):t==="bought"?(n.stopPropagation(),removeBoughtItems(r,s)):t==="clear"?(n.stopPropagation(),clearList(r,!1)):t==="clear-private"&&(n.stopPropagation(),clearList(r,!0))}function xd(n){const e=n.target.closest("[data-action]");if(!e)return;const t=n.changedTouches[0].clientY,r=Date.now(),s=Math.abs(t-Oa),i=r-Na;if(s>10||i>300)return;n.preventDefault();const a=e.dataset.action,c=e.dataset.store,u=e.dataset.private==="true";a==="toggle-store"?toggleStore(c,u):a==="bought"?(n.stopPropagation(),removeBoughtItems(c,u)):a==="clear"?(n.stopPropagation(),clearList(c,!1)):a==="clear-private"&&(n.stopPropagation(),clearList(c,!0))}function Ue(){const n=document.getElementById("lists-tab");if(!n||!K)return;const e=localStorage.getItem("expandedStores");if(e&&(at=new Set(JSON.parse(e))),n.innerHTML=`
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 0;">
      <div class="lists-subtabs" style="flex: 1;">
        <button class="lists-subtab ${wn==="shared"?"active":""}" data-subtab="shared"><span class="tab-icon">👥</span>Shared</button>
        <button class="lists-subtab ${wn==="private"?"active":""}" data-subtab="private"><span class="tab-icon">🔒</span>Private</button>
      </div>
      <button id="sort-toggle-btn" style="white-space: nowrap; padding: 6px 12px; border: 2px solid var(--border); border-radius: 8px; background: var(--bg-card); color: var(--text-secondary); font-size: 0.8rem; font-weight: 600; cursor: pointer; flex-shrink: 0;">
        ${En==="az"?"A–Z":"⊞ Category"}
      </button>
    </div>
    <div id="lists-subtab-content"></div>
  `,n.querySelectorAll(".lists-subtab").forEach(t=>{t.addEventListener("click",()=>{wn=t.dataset.subtab,Ue()})}),n.querySelector("#sort-toggle-btn").addEventListener("click",()=>{En=En==="az"?"category":"az",localStorage.setItem("listSortMode",En),Ue()}),!document.getElementById("lists-styles")){const t=document.createElement("style");t.id="lists-styles",t.textContent=`
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
    `,document.head.appendChild(t)}wn==="shared"?zE():WE()}function Ld(n){return[...n].sort((e,t)=>{if(e.checked!==t.checked)return e.checked?1:-1;if(En==="category"){const r=Gs.indexOf($e(e.name)),s=Gs.indexOf($e(t.name)),i=r===-1?999:r,a=s===-1?999:s;if(i!==a)return i-a}return e.name.localeCompare(t.name)})}function jE(n){return vn==="category"?[...n].sort((e,t)=>{const r=Gs.indexOf($e(e)),s=Gs.indexOf($e(t)),i=r===-1?999:r,a=s===-1?999:s;return i!==a?i-a:e.toLowerCase().localeCompare(t.toLowerCase())}):[...n].sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()))}function Vd(n,e,t,r){if(n.innerHTML="",En!=="category"){e.forEach((i,a)=>n.appendChild(lu(i,t,a,r)));return}let s=null;e.forEach((i,a)=>{if(!i.checked){const c=$e(i.name);if(c!==s){s=c;const u=document.createElement("div");u.className="category-divider";const d=c?hn[c]:null;u.textContent=d?`${d.emoji} ${d.label}`:"• Other",n.appendChild(u)}}n.appendChild(lu(i,t,a,r))})}function Od(n,e,t,r,s){const i=e.filter(d=>!d.checked).length,a=e.filter(d=>d.checked).length,c=a>0?`<button class="store-action-btn btn-done" data-store="${n}" data-action="bought" data-private="${s}">✓ Remove Bought (${a})</button>`:"",u=s?"clear-private":"clear";return`
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
              ${dt().length>0?dt().map(d=>`
                <div class="history-dropdown-item">
                  <input type="checkbox" id="hist-${t}-${d.replace(/\s+/g,"-")}" value="${d}">
                  <label for="hist-${t}-${d.replace(/\s+/g,"-")}">⭐ ${d}</label>
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
  `}function zE(){const n=document.getElementById("lists-subtab-content");if(!n)return;let e="";if(D.stores.length===0)e='<div class="card"><div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet. Add some in the Stores tab!</p></div></div>';else{let t=!1;D.stores.forEach(r=>{const s=D.lists[r]||[];if(s.length===0)return;t=!0;const i=r.replace(/\s+/g,"-"),a=at.has(r);e+=Od(r,s,i,a,!1)}),t||(e='<div class="card"><div class="empty-state"><div class="empty-icon">📝</div><p>No items yet. Tap + to add some!</p></div></div>')}n.innerHTML=e,n.addEventListener("click",Dd),n.addEventListener("touchstart",t=>{Oa=t.touches[0].clientY,Na=Date.now()},{passive:!0}),n.addEventListener("touchend",xd),D.stores.forEach(t=>{const r=D.lists[t]||[],s=t.replace(/\s+/g,"-"),i=Ld(r),a=document.getElementById(`list-${s}`);a&&i.length>0&&Vd(a,i,t,!1),setTimeout(()=>{Ma(`quick-add-${s}`,`quick-add-${s}-autocomplete`);const c=document.getElementById(`quick-add-${s}`);c&&c.addEventListener("keypress",u=>{u.key==="Enter"&&quickAddItem(t,s,!1)})},0)})}function WE(){const n=document.getElementById("lists-subtab-content");if(!n)return;let e="";if(D.stores.length===0)e='<div class="card"><div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet. Add some in the Stores tab!</p></div></div>';else{let t=!1;D.stores.forEach(r=>{const s=ke[r]||[];if(s.length===0)return;t=!0;const i="priv-"+r.replace(/\s+/g,"-"),a=at.has("priv:"+r);e+=Od(r,s,i,a,!0)}),t||(e='<div class="card"><div class="empty-state"><div class="empty-icon">🔒</div><p>No private items yet. Tap + to add some!</p></div></div>')}n.innerHTML=e,n.addEventListener("click",Dd),n.addEventListener("touchstart",t=>{Oa=t.touches[0].clientY,Na=Date.now()},{passive:!0}),n.addEventListener("touchend",xd),D.stores.forEach(t=>{const r=ke[t]||[],s="priv-"+t.replace(/\s+/g,"-"),i=Ld(r),a=document.getElementById(`list-${s}`);a&&i.length>0&&Vd(a,i,t,!0),setTimeout(()=>{Ma(`quick-add-${s}`,`quick-add-${s}-autocomplete`);const c=document.getElementById(`quick-add-${s}`);c&&c.addEventListener("keypress",u=>{u.key==="Enter"&&quickAddItem(t,s,!0)})},0)})}window.toggleListHistory=function(n){document.getElementById(`history-dropdown-${n}`).classList.toggle("visible")};window.closeListHistory=function(n){document.getElementById(`history-dropdown-${n}`).classList.remove("visible")};window.addSelectedFromHistory=async function(n,e){const t=Array.from(document.querySelectorAll(`#history-dropdown-${e} input:checked`)).map(r=>r.value);if(t.length===0){q("Please select at least one item","error");return}t.forEach(r=>{D.lists[n]||(D.lists[n]=[]);const s=D.lists[n].find(i=>i.name.toLowerCase()===r.toLowerCase());s?s.quantity=(s.quantity||1)+1:D.lists[n].push({name:r,checked:!1,quantity:1,isFavorite:!0})}),await Ce(),q(`✓ Added ${t.length} favorite(s) to ${n}`),closeListHistory(e),Ue()};function Nd(n){const e=n.match(/^(\d+)\s+(.+)$/);if(e)return{name:e[2].trim(),quantity:parseInt(e[1])};const t=n.match(/^(.+?)\s*[xX](\d+)$/);if(t)return{name:t[1].trim(),quantity:parseInt(t[2])};const r=n.match(/^(.+?)\s+(\d+)$/);return r?{name:r[1].trim(),quantity:parseInt(r[2])}:{name:n.trim(),quantity:1}}window.quickAddItem=async function(n,e,t=!1){const r=document.getElementById(`quick-add-${e}`),s=r.value.trim();if(!s){q("Please enter an item name","error");return}const{name:i,quantity:a}=Nd(s),c=t?ke:D.lists;c[n]||(c[n]=[]);const u=c[n].find(d=>d.name.toLowerCase()===i.toLowerCase());if(u){u.quantity=(u.quantity||1)+a,t?await yt():await Ce(),q(`✓ "${i}" quantity updated to ${u.quantity}`),r.value="",Ue();return}c[n].push({name:i,checked:!1,quantity:a,isFavorite:dt().includes(i)}),D.history.includes(i)||D.history.push(i),t?(await yt(),await Ce()):await Ce(),q(`✓ Added "${i}"${a>1?` (${a})`:""} to ${n}`),r.value="",Ue(),!t&&!$e(i)&&setTimeout(()=>showCategoryPrompt(i),400)};document.addEventListener("click",n=>{!n.target.closest(".history-dropdown-btn")&&!n.target.closest(".history-dropdown-content")&&document.querySelectorAll(".history-dropdown-content").forEach(e=>{e.classList.remove("visible")})});function Md(){const n=document.getElementById("settings-tab");if(!n||!K)return;let e=`
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
  `;n.innerHTML=e}window.sendShareInvite=async function(){const n=document.getElementById("share-email"),e=n.value.trim().toLowerCase(),t=document.getElementById("share-status");if(!e){Ct(t,"Please enter an email address","error");return}if(e===J.email){Ct(t,"You can't share with yourself!","error");return}if(!e.includes("@")){Ct(t,"Please enter a valid email address","error");return}try{console.log("Searching for user with email:",e);const r=hi(ee,"users"),s=mi(r,yi("email","==",e));console.log("Executing query...");const i=await vi(s);if(console.log("Query results:",i.size,"documents found"),i.empty){Ct(t,`No account found with email: ${e}<br><br>Ask them to create an account first, then try again.`,"error");return}const a=i.docs[0],c=a.id,u=a.data();if(console.log("Found user:",c,u),u.linkedTo===J.uid){Ct(t,`${e} is already linked to your account!`,"error");return}if(u.linkedTo){Ct(t,`${e} is already linked to another account. They must unlink first.`,"error");return}console.log("Linking accounts..."),await xe(ie(ee,"users",c),{linkedTo:J.uid}),console.log("Target user updated");const d=[...K.linkedWith||[]];d.includes(e)||d.push(e),await xe(ie(ee,"users",J.uid),{linkedWith:d}),console.log("Own user updated"),Ct(t,`✓ Successfully linked with ${e}!<br><br>They will now see your grocery lists when they log in.`,"success"),n.value="",q(`✓ Linked with ${e}!`),setTimeout(()=>Md(),1e3)}catch(r){console.error("Error sharing - Full error:",r),console.error("Error code:",r.code),console.error("Error message:",r.message),Ct(t,`Failed to send invite: ${r.message}<br><br>Check console for details.`,"error")}};function Ct(n,e,t="success"){n.innerHTML=e,n.style.display="block",n.style.background=t==="error"?"#FEE2E2":"#D1FAE5",n.style.color=t==="error"?"#991B1B":"#065F46",n.style.padding="12px",n.style.borderRadius="8px"}function lu(n,e,t,r=!1){n.quantity||(n.quantity=1),n.isFavorite===void 0&&(n.isFavorite=!1);const s=r?yt:Ce,i=document.createElement("div");i.className="grocery-item-container";const a=document.createElement("div");a.className="grocery-item"+(n.checked?" checked":"");const c=document.createElement("input");c.type="checkbox",c.checked=n.checked||!1,c.addEventListener("change",async()=>{n.checked=c.checked,a.classList.toggle("checked",c.checked),await s(),Ue()});const u=document.createElement("div");u.className="item-name-wrapper",u.style.flex="1",u.style.display="flex",u.style.alignItems="center",u.style.gap="8px",u.style.cursor="pointer",u.style.userSelect="none",u.addEventListener("click",()=>{const C=i.querySelector(".qty-controls-inline");C.classList.contains("expanded")?C.classList.remove("expanded"):(document.querySelectorAll(".qty-controls-inline.expanded").forEach(P=>{P.classList.remove("expanded")}),C.classList.add("expanded"),C.querySelector(".qty-display").textContent=n.quantity,C.querySelector(".favorite-checkbox").checked=n.isFavorite)});const d=document.createElement("span");if(d.textContent=n.name,d.style.fontWeight="500",u.appendChild(d),n.quantity>1){const C=document.createElement("span");C.className="quantity-badge",C.textContent=`(get ${n.quantity})`,u.appendChild(C)}if(n.isFavorite){const C=document.createElement("span");C.className="favorite-indicator",C.innerHTML="⭐",C.style.fontSize="1.2rem",C.style.cursor="pointer",C.style.marginLeft="4px",C.title="Click to edit",C.addEventListener("click",L=>{L.stopPropagation();const P=i.querySelector(".qty-controls-inline");document.querySelectorAll(".qty-controls-inline.expanded").forEach(B=>{B.classList.remove("expanded")}),P.classList.add("expanded"),P.querySelector(".qty-display").textContent=n.quantity,P.querySelector(".favorite-checkbox").checked=n.isFavorite}),a.appendChild(c),a.appendChild(u),a.appendChild(C)}else a.appendChild(c),a.appendChild(u);const p=document.createElement("button");p.className="delete-btn",p.textContent="×",p.addEventListener("click",C=>{C.stopPropagation(),GE(n.name,e,r)}),a.appendChild(p);const g=document.createElement("div");g.className="qty-controls-inline";let E=n.quantity,S=n.isFavorite;return g.innerHTML=`
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
  `,g.querySelector(".qty-minus").addEventListener("click",C=>{C.stopPropagation(),E>1&&(E--,g.querySelector(".qty-display").textContent=E)}),g.querySelector(".qty-plus").addEventListener("click",C=>{C.stopPropagation(),E++,g.querySelector(".qty-display").textContent=E}),g.querySelector(".favorite-checkbox").addEventListener("change",C=>{C.stopPropagation(),S=C.target.checked}),g.querySelector(".qty-inline-ok").addEventListener("click",async C=>{C.stopPropagation(),n.quantity=E,n.isFavorite=S,uu(n.name,"quantity",E,r),uu(n.name,"isFavorite",S,r),await s(),g.classList.remove("expanded"),Ue()}),i.appendChild(a),i.appendChild(g),i}function uu(n,e,t,r=!1){const s=r?ke:D.lists;D.stores.forEach(i=>{const c=(s[i]||[]).find(u=>u.name.toLowerCase()===n.toLowerCase());c&&(c[e]=t)})}function dt(){const n=new Set;return D.stores.forEach(e=>{(D.lists[e]||[]).forEach(r=>{r.isFavorite&&n.add(r.name)})}),Array.from(n).sort()}window.setHistoryFilter=function(n){window.historyFilter=n,$n()};let rt=null,Ss=!1;window.removeBoughtItems=function(n,e=!1){const t=e?ke:D.lists,s=(t[n]||[]).filter(c=>c.checked);if(s.length===0){q("No bought items to remove","error");return}rt=n,Ss=e;const i=s.filter(c=>D.stores.filter(u=>(t[u]||[]).some(d=>d.name.toLowerCase()===c.name.toLowerCase())).length>1);s.filter(c=>!i.includes(c));const a=document.getElementById("bought-modal-body");document.getElementById("bought-modal-store").textContent=n,i.length===0?a.innerHTML=`
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
    `,a.querySelectorAll(".bought-item-row").forEach(c=>{c.querySelectorAll(".bought-opt-btn").forEach(u=>{u.addEventListener("click",()=>{c.querySelectorAll(".bought-opt-btn").forEach(d=>d.classList.remove("active")),u.classList.add("active")})})})),document.getElementById("bought-modal").classList.add("visible")};function HE(){document.getElementById("bought-confirm-btn").addEventListener("click",async()=>{const n=Ss?ke:D.lists,e=Ss?[]:(n[rt]||[]).filter(r=>r.checked).map(r=>r.name);document.querySelectorAll("#bought-modal-body .bought-item-row").forEach(r=>{const s=r.dataset.itemName,i=r.querySelector(".bought-opt-btn.active");if(!i)return;i.dataset.scope==="all"?D.stores.forEach(c=>{n[c]&&(n[c]=n[c].filter(u=>u.name.toLowerCase()!==s.toLowerCase()))}):n[rt]&&(n[rt]=n[rt].filter(c=>c.name.toLowerCase()!==s.toLowerCase()))});const t=new Set(Array.from(document.querySelectorAll("#bought-modal-body .bought-item-row")).map(r=>r.dataset.itemName.toLowerCase()));n[rt]&&(n[rt]=n[rt].filter(r=>r.checked?(t.has(r.name.toLowerCase()),!1):!0)),Ss?await yt():await Ce(),e.length>0&&Bd(e,rt),q("✓ Removed bought items"),document.getElementById("bought-modal").classList.remove("visible"),Ue()}),document.getElementById("bought-cancel-btn").addEventListener("click",()=>{document.getElementById("bought-modal").classList.remove("visible")}),document.getElementById("bought-modal").addEventListener("click",n=>{n.target.id==="bought-modal"&&document.getElementById("bought-modal").classList.remove("visible")})}window.toggleStore=function(n,e=!1){const t=e?"priv:"+n:n;at.has(t)?at.delete(t):at.add(t),localStorage.setItem("expandedStores",JSON.stringify([...at])),Ue()};window.clearList=async function(n,e=!1){const t=document.getElementById("clear-modal");document.getElementById("clear-store-name").textContent=n,t.dataset.store=n,t.dataset.private=e?"true":"false",t.classList.add("visible")};document.getElementById("clear-confirm-btn").addEventListener("click",async()=>{const n=document.getElementById("clear-modal"),e=n.dataset.store,t=n.dataset.private==="true";if(e){if(t)ke[e]=[],await yt();else{const r=(D.lists[e]||[]).map(s=>s.name);D.lists[e]=[],await Ce(),r.length>0&&Bd(r,e)}q(`✓ Cleared ${e}`),n.classList.remove("visible"),n.dataset.store=""}});document.getElementById("clear-cancel-btn").addEventListener("click",()=>{const n=document.getElementById("clear-modal");n.classList.remove("visible"),n.dataset.store=""});document.getElementById("clear-modal").addEventListener("click",n=>{if(n.target.id==="clear-modal"){const e=document.getElementById("clear-modal");e.classList.remove("visible"),e.dataset.store=""}});let Mt=null,Yt=null,On=!1;function GE(n,e,t=!1){Mt=n,Yt=e,On=t;const r=document.getElementById("delete-modal");document.getElementById("delete-item-name").textContent=`"${n}"`;const s=t?ke:D.lists,a=D.stores.filter(p=>(s[p]||[]).some(g=>g.name.toLowerCase()===n.toLowerCase())).length>1,c=document.getElementById("delete-all-btn"),u=document.getElementById("delete-store-name"),d=document.getElementById("delete-modal-subtitle");a?(c.style.display="",u.textContent=`📍 Only from ${e}`,d.style.display=""):(c.style.display="none",u.textContent="🗑️ Delete Item",d.style.display="none"),r.classList.add("visible")}function wi(){document.getElementById("delete-modal").classList.remove("visible"),Mt=null,Yt=null,On=!1}document.getElementById("delete-all-btn").addEventListener("click",async()=>{if(!Mt)return;const n=On?ke:D.lists;D.stores.forEach(e=>{n[e]&&(n[e]=n[e].filter(t=>t.name.toLowerCase()!==Mt.toLowerCase()))}),On?await yt():await Ce(),q(`✓ Removed "${Mt}" from all stores`),wi()});document.getElementById("delete-one-btn").addEventListener("click",async()=>{if(!Mt||!Yt)return;const n=On?ke:D.lists;n[Yt]&&(n[Yt]=n[Yt].filter(e=>e.name.toLowerCase()!==Mt.toLowerCase())),On?await yt():await Ce(),q(`✓ Removed "${Mt}" from ${Yt}`),wi()});document.getElementById("delete-cancel-btn").addEventListener("click",()=>{wi()});document.getElementById("delete-modal").addEventListener("click",n=>{n.target.id==="delete-modal"&&wi()});function KE(){const n=document.getElementById("stores-tab");if(!n||!K)return;let e=`
    <div class="card">
      <div class="card-title">Add Store</div>
      <div style="display: flex; gap: 8px;">
        <input type="text" id="new-store-name" placeholder="e.g., Walmart" style="flex: 1; padding: 12px 14px; font-size: 0.95rem;">
        <button class="btn btn-primary" style="padding: 10px 16px; font-size: 0.85rem; white-space: nowrap;" onclick="addStore()">+ Add</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Your Stores</div>
  `;D.stores.length===0?e+='<div class="empty-state"><div class="empty-icon">🏪</div><p>No stores yet</p></div>':D.stores.forEach((t,r)=>{const s=(D.lists[t]||[]).length;e+=`
        <div class="store-item-compact">
          <div>
            <div class="store-name">${t}</div>
            <div class="store-meta">${s} item${s!==1?"s":""}</div>
          </div>
          <button class="btn" style="background: var(--danger); color: white; padding: 4px 8px; font-size: 0.7rem;" onclick="removeStore(${r})">Remove</button>
        </div>
      `}),e+="</div>",n.innerHTML=e,setTimeout(()=>{const t=document.getElementById("new-store-name");t&&t.addEventListener("keypress",r=>{r.key==="Enter"&&addStore()})},0)}window.addStore=async function(){const n=document.getElementById("new-store-name"),e=n.value.trim();if(!e){q("Please enter a store name","error");return}if(D.stores.includes(e)){q("Store already exists","error");return}D.stores.push(e),D.lists[e]=[],await Ce(),q(`✓ Added ${e}`),n.value=""};window.removeStore=async function(n){const e=D.stores[n],t=(D.lists[e]||[]).length;t>0&&!confirm(`${e} has ${t} items. Delete anyway?`)||(D.stores.splice(n,1),delete D.lists[e],ke[e]&&(delete ke[e],await yt()),await Ce(),q(`✓ Removed ${e}`))};function $n(){const n=document.getElementById("history-tab");if(!n||!K)return;window.historyFilter||(window.historyFilter="all");const e=dt();let t=[...D.history||[]];window.historyFilter==="favorites"&&(t=t.filter(a=>e.includes(a)));const r=jE(t);let s='<div class="card">';if(s+='<div class="list-header-compact">',s+='<div class="card-title" style="margin: 0;">Item History</div>',s+=`<button id="history-sort-btn" style="white-space: nowrap; padding: 6px 12px; border: 2px solid var(--border); border-radius: 8px; background: var(--bg-card); color: var(--text-secondary); font-size: 0.8rem; font-weight: 600; cursor: pointer; flex-shrink: 0;">${vn==="az"?"A–Z":"⊞ Category"}</button>`,s+="</div>",s+=`
    <div style="display: flex; gap: 8px; margin: 16px 0; padding: 4px; background: var(--bg-main); border-radius: 8px;">
      <button class="filter-btn ${window.historyFilter==="all"?"active":""}" onclick="setHistoryFilter('all')" style="flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; ${window.historyFilter==="all"?"background: var(--primary); color: white;":"background: transparent; color: var(--text-secondary);"}">
        All (${D.history.length})
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
  </div>`,r.length===0){const a=window.historyFilter==="favorites"?'<div class="empty-state"><div class="empty-icon">⭐</div><p>No favorites yet<br><small style="opacity: 0.7;">Star items in your lists to add them here</small></p></div>':'<div class="empty-state"><div class="empty-icon">📜</div><p>No items in history yet</p></div>';s+=a}else{let a=null;r.forEach(c=>{const u=e.includes(c),d=$e(c),p=d?hn[d]:null,g=c.replace(/'/g,"\\'");if(vn==="category"&&d!==a){a=d;const S=p?`${p.emoji} ${p.label}`:"📦 Other";s+=`<div class="category-divider">${S}</div>`}const E=p?`<button onclick="event.stopPropagation();showCategoryPrompt('${g}')" title="Change category: ${p.label}" style="background:none;border:none;font-size:1rem;opacity:0.7;cursor:pointer;padding:2px 4px;">${p.emoji}</button>`:`<button onclick="event.stopPropagation();showCategoryPrompt('${g}')" title="Categorize item" style="background:none;border:1px dashed var(--border);border-radius:6px;padding:2px 6px;cursor:pointer;font-size:0.75rem;color:var(--text-secondary);">+ tag</button>`;s+=`
        <div class="history-item bulk-mode" data-item="${c}" onclick="toggleHistoryCheckbox('${c}')">
          <input type="checkbox" class="history-checkbox" data-item="${c}" ${ht.has(c)?"checked":""} onchange="updateBulkSelection('${c}')">
          <div class="history-item-header">
            <span class="history-item-name">${u?"⭐ ":""}${c}</span>
            ${E}
          </div>
        </div>
      `})}s+="</div>",n.innerHTML=s;const i=n.querySelector("#history-sort-btn");if(i&&i.addEventListener("click",()=>{vn=vn==="az"?"category":"az",localStorage.setItem("historySortMode",vn),$n()}),!document.getElementById("history-styles")){const a=document.createElement("style");a.id="history-styles",a.textContent=`
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
    `,document.head.appendChild(a)}}window.updateBulkSelection=function(n){ht.has(n)?ht.delete(n):ht.add(n),$n()};window.toggleHistoryCheckbox=function(n){const e=document.querySelector(`.history-checkbox[data-item="${n}"]`);e&&(e.checked=!e.checked,updateBulkSelection(n))};window.showBulkStoreSelector=function(){const n=document.getElementById("bulk-store-selector"),e=document.getElementById("bulk-store-chips");e.innerHTML="",D.stores.forEach(t=>{const r=document.createElement("div");r.className="store-chip",r.textContent=t,r.addEventListener("click",()=>r.classList.toggle("selected")),e.appendChild(r)}),n.style.display="block"};window.hideBulkStoreSelector=function(){document.getElementById("bulk-store-selector").style.display="none"};window.addBulkItemsToStores=async function(){const n=Array.from(document.querySelectorAll("#bulk-store-chips .store-chip.selected")).map(t=>t.textContent);if(n.length===0){q("Please select at least one store","error");return}const e=dt();ht.forEach(t=>{const r=e.includes(t);n.forEach(s=>{D.lists[s]||(D.lists[s]=[]);const i=D.lists[s].find(a=>a.name.toLowerCase()===t.toLowerCase());i?i.quantity=(i.quantity||1)+1:D.lists[s].push({name:t,checked:!1,quantity:1,isFavorite:r})})}),await Ce(),q(`✓ Added ${ht.size} items to ${n.length} store(s)`),ht.clear(),$n()};function Ma(n,e){const t=document.getElementById(n),r=document.getElementById(e);!t||!r||(t.addEventListener("input",s=>{const i=s.target.value.trim().toLowerCase();if(i.length===0){r.classList.remove("visible");return}const c=[...new Set([...TE,...(D==null?void 0:D.history)||[]])].filter(u=>u.toLowerCase().includes(i)).sort((u,d)=>{const p=u.toLowerCase().startsWith(i),g=d.toLowerCase().startsWith(i);return p&&!g?-1:!p&&g?1:u.toLowerCase().localeCompare(d.toLowerCase())});if(c.length===0){r.classList.remove("visible");return}r.innerHTML=c.slice(0,8).map((u,d)=>`<div class="autocomplete-item" data-value="${u}" data-index="${d}">${u}</div>`).join(""),r.classList.add("visible"),Oe=-1}),t.addEventListener("keydown",s=>{const i=r.querySelectorAll(".autocomplete-item");if(s.key==="ArrowDown")s.preventDefault(),Oe=Math.min(Oe+1,i.length-1),hu(i);else if(s.key==="ArrowUp")s.preventDefault(),Oe=Math.max(Oe-1,-1),hu(i);else if(s.key==="Enter"&&Oe>=0){s.preventDefault();const a=i[Oe];a&&(t.value=a.dataset.value,r.classList.remove("visible"),Oe=-1)}else s.key==="Escape"&&(r.classList.remove("visible"),Oe=-1)}),r.addEventListener("click",s=>{const i=s.target.closest(".autocomplete-item");i&&(t.value=i.dataset.value,r.classList.remove("visible"),Oe=-1)}),document.addEventListener("click",s=>{!t.contains(s.target)&&!r.contains(s.target)&&(r.classList.remove("visible"),Oe=-1)}))}function hu(n){n.forEach((e,t)=>{e.classList.toggle("selected",t===Oe),t===Oe&&e.scrollIntoView({block:"nearest"})})}const du={restock:{bg:"#f0fdf4",border:"#22c55e",icon:"#dcfce7"},building:{bg:"#eff6ff",border:"#3b82f6",icon:"#dbeafe"},consolidate:{bg:"#fffbeb",border:"#f59e0b",icon:"#fef3c7"},uncategorized:{bg:"#faf5ff",border:"#a855f7",icon:"#f3e8ff"},due:{bg:"#fff7ed",border:"#f97316",icon:"#ffedd5"},havent:{bg:"#f0fdfa",border:"#14b8a6",icon:"#ccfbf1"},pattern:{bg:"#eef2ff",border:"#6366f1",icon:"#e0e7ff"},together:{bg:"#f0fdf4",border:"#10b981",icon:"#d1fae5"}};function Fd(){const n=JSON.parse(localStorage.getItem("feedDismissed")||"{}"),e=Date.now(),t=24*60*60*1e3;return Object.keys(n).forEach(r=>{e-n[r]>t&&delete n[r]}),n}window.dismissFeedCard=function(n){const e=Fd();e[n]=Date.now(),localStorage.setItem("feedDismissed",JSON.stringify(e)),Ua()};window.feedAddToStore=async function(n,e){D.lists[e]||(D.lists[e]=[]);const t=D.lists[e].find(r=>r.name.toLowerCase()===n.toLowerCase());t?t.quantity=(t.quantity||1)+1:D.lists[e].push({name:n,checked:!1,quantity:1,isFavorite:dt().includes(n)}),D.history.includes(n)||D.history.push(n),await Ce(),q(`✓ Added "${n}" to ${e}`),Ua(),Ue()};window.feedSwitchToLists=function(n){var e;(e=document.querySelector('.nav-item[data-tab="lists"]'))==null||e.click(),n&&setTimeout(()=>{at.add(n),localStorage.setItem("expandedStores",JSON.stringify([...at])),Ue()},100)};window.feedSwitchToHistory=function(){var n;(n=document.querySelector('.nav-item[data-tab="history"]'))==null||n.click()};window.feedRemoveFromHistory=async function(n,e){D.history=D.history.filter(t=>t.toLowerCase()!==n.toLowerCase()),await Ce(),window.dismissFeedCard(e)};function Fa(n){const e=n.toLowerCase();return Ne.filter(t=>t.items.some(r=>r.toLowerCase()===e))}function Ba(n){if(n.length<2)return null;const e=[...n].sort((r,s)=>r.ts-s.ts);let t=0;for(let r=1;r<e.length;r++)t+=e[r].ts-e[r-1].ts;return t/(e.length-1)/(1e3*60*60*24)}function Ii(n){var r;const e=Fa(n);if(!e.length)return D.stores[0]||null;const t={};return e.forEach(s=>{t[s.store]=(t[s.store]||0)+1}),((r=Object.entries(t).sort((s,i)=>i[1]-s[1])[0])==null?void 0:r[0])||D.stores[0]}function zt(n,e,t,r,s,i){const a=du[e]||du.restock,c=i.map(u=>`<button onclick="${u.handler}" style="padding: 8px 14px; border-radius: 8px; border: none; background: ${u.primary?a.border:"var(--bg-main)"}; color: ${u.primary?"white":"var(--text-secondary)"}; font-size: 0.82rem; font-weight: 600; cursor: pointer; font-family: inherit;">${u.label}</button>`).join("");return`
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
  `}function QE(n){const e=dt(),t=new Set(Object.values(D.lists||{}).flatMap(s=>s.map(i=>i.name.toLowerCase()))),r=[];for(const s of e){if(t.has(s.toLowerCase()))continue;const i=`restock-${s}`;if(n[i])continue;const a=Ii(s);if(!a)continue;const c=$e(s),u=c?hn[c].emoji:"⭐";if(r.push(zt(i,"restock",u,`Restock ${s}`,"A favourite not on any current list",[{label:`Add to ${a}`,handler:`feedAddToStore('${s.replace(/'/g,"\\'")}', '${a.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not now",handler:`dismissFeedCard('${i}')`,primary:!1}])),r.length>=3)break}return r}function YE(n){const e=[];return(D.stores||[]).forEach(t=>{const r=(D.lists[t]||[]).filter(i=>!i.checked).length;if(r<5)return;const s=`building-${t}`;n[s]||e.push(zt(s,"building","🛒",`${t} list is growing`,`${r} items waiting — ready for a trip?`,[{label:`View ${t}`,handler:`feedSwitchToLists('${t.replace(/'/g,"\\'")}')`,primary:!0},{label:"Dismiss",handler:`dismissFeedCard('${s}')`,primary:!1}]))}),e}function JE(n){const e="consolidation";if(n[e])return[];const t=(D.stores||[]).filter(r=>(D.lists[r]||[]).filter(i=>!i.checked).length===1);return t.length<2?[]:[zt(e,"consolidate","🗂️","Consider consolidating",`${t.join(", ")} each have just 1 item — could be one trip`,[{label:"View lists",handler:"feedSwitchToLists()",primary:!0},{label:"Dismiss",handler:`dismissFeedCard('${e}')`,primary:!1}])]}function XE(n){const e="uncategorized";if(n[e])return[];const t=(D.history||[]).filter(r=>!$e(r));return t.length===0?[]:[zt(e,"uncategorized","🏷️",`${t.length} item${t.length>1?"s":""} without a category`,"Categorizing helps sort your lists by aisle",[{label:"Go to History",handler:"feedSwitchToHistory()",primary:!0},{label:"Later",handler:`dismissFeedCard('${e}')`,primary:!1}])]}function ZE(n){const e=[],t=Date.now(),r=new Set(Object.values(D.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),s=new Set;return Ne.forEach(i=>{i.items.forEach(a=>{const c=a.toLowerCase();if(s.has(c)||r.has(c))return;s.add(c);const u=`due-${c}`;if(n[u])return;const d=Fa(a);if(d.length<2)return;const p=Ba(d);if(!p||p>60)return;const g=d.reduce((P,B)=>P.ts>B.ts?P:B),E=(t-g.ts)/(1e3*60*60*24);if(E<p*1.1)return;const S=Ii(a);if(!S)return;const C=$e(a),L=C?hn[C].emoji:"🔁";e.push(zt(u,"due",L,`Time to restock ${a}`,`Usually every ${Math.round(p)} days — ${Math.round(E)} days since last purchase`,[{label:`Add to ${S}`,handler:`feedAddToStore('${a.replace(/'/g,"\\'")}', '${S.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not yet",handler:`dismissFeedCard('${u}')`,primary:!1}])),e.length>=3})}),e.slice(0,3)}function ew(n){const e=[],t=Date.now(),r=new Set(Object.values(D.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),s=new Set;return Ne.forEach(i=>{i.items.forEach(a=>{const c=a.toLowerCase();if(s.has(c)||r.has(c))return;s.add(c);const u=Fa(a);if(u.length===0)return;const d=u.reduce((P,B)=>P.ts>B.ts?P:B),p=(t-d.ts)/(1e3*60*60*24),g=Ba(u);if(g&&g<60||p<30)return;const E=`havent-${c}`;if(n[E])return;const S=Ii(a),C=$e(a),L=C?hn[C].emoji:"🕐";e.push(zt(E,"havent",L,`Haven't seen ${a} in a while`,`Last purchased ${Math.round(p)} days ago`,[{label:S?`Add to ${S}`:"Add to list",handler:S?`feedAddToStore('${a.replace(/'/g,"\\'")}', '${S.replace(/'/g,"\\'")}')`:"feedSwitchToLists()",primary:!0},{label:"Remove from history",handler:`feedRemoveFromHistory('${a.replace(/'/g,"\\'")}', '${E}')`,primary:!1}])),e.length>=2})}),e.slice(0,2)}function tw(n){const e=[],t=Date.now();return(D.stores||[]).forEach(r=>{const s=`pattern-${r}`;if(n[s])return;const i=Ne.filter(g=>g.store===r);if(i.length<3)return;const a=Ba(i);if(!a)return;const c=i.reduce((g,E)=>g.ts>E.ts?g:E),u=(t-c.ts)/(1e3*60*60*24);if(u<a*.9)return;const d=(D.lists[r]||[]).filter(g=>!g.checked).length,p=d>0?`Usually every ${Math.round(a)} days — ${Math.round(u)} days since last visit, ${d} items waiting`:`Usually every ${Math.round(a)} days — ${Math.round(u)} days since last visit`;e.push(zt(s,"pattern","📅",`${r} run coming up?`,p,[{label:`View ${r}`,handler:`feedSwitchToLists('${r.replace(/'/g,"\\'")}')`,primary:!0},{label:"Not yet",handler:`dismissFeedCard('${s}')`,primary:!1}]))}),e}function nw(n){if(Ne.length<5)return[];const e=[],t=new Set(Object.values(D.lists||{}).flatMap(i=>i.map(a=>a.name.toLowerCase()))),r={};Ne.forEach(i=>{const a=i.items.map(c=>c.toLowerCase());for(let c=0;c<a.length;c++)for(let u=c+1;u<a.length;u++){const d=[a[c],a[u]].sort().join("|||");r[d]=(r[d]||0)+1}});const s=new Set;return Object.entries(r).filter(([,i])=>i>=2).sort((i,a)=>a[1]-i[1]).forEach(([i,a])=>{if(e.length>=2)return;const[c,u]=i.split("|||"),d=t.has(c),p=t.has(u);if(d===p)return;const g=d?c:u,E=d?u:c,S=`together-${E}`;if(n[S]||s.has(S))return;s.add(S);const C=Ii(E);if(!C)return;const L=D.history.find(W=>W.toLowerCase()===g)||g,P=D.history.find(W=>W.toLowerCase()===E)||E,B=$e(P),G=B?hn[B].emoji:"🔗";e.push(zt(S,"together",G,`Often bought with ${L}`,`You usually pick up ${P} too (${a} times)`,[{label:`Add ${P}`,handler:`feedAddToStore('${P.replace(/'/g,"\\'")}', '${C.replace(/'/g,"\\'")}')`,primary:!0},{label:"Skip",handler:`dismissFeedCard('${S}')`,primary:!1}]))}),e}function Ua(){const n=document.getElementById("feed-tab");if(!n||!K)return;const e=Fd(),t=[...QE(e),...YE(e),...JE(e),...nw(e),...ZE(e),...tw(e),...ew(e),...XE(e)];if(!document.getElementById("feed-styles")){const r=document.createElement("style");r.id="feed-styles",r.textContent=`
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
  `}async function Ce(){try{const n=K.linkedTo||J.uid;console.log("Saving data to user:",n),console.log("Current user:",J.uid),console.log("Linked to:",K.linkedTo),await xe(ie(ee,"users",n),{stores:D.stores,lists:D.lists,history:D.history}),console.log("Save successful")}catch(n){console.error("Error saving data:",n),console.error("Error code:",n.code),console.error("Error message:",n.message),q("Failed to save","error")}}async function yt(){try{await xe(ie(ee,"users",J.uid),{privateLists:ke})}catch(n){console.error("Error saving private data:",n),q("Failed to save","error")}}async function rw(){try{await xe(ie(ee,"users",J.uid),{itemCategories:zr})}catch(n){console.error("Error saving item categories:",n)}}async function Bd(n,e){if(!(!n||n.length===0)){Ne.push({items:n,store:e,ts:Date.now()}),Ne.length>500&&(Ne=Ne.slice(-500));try{await xe(ie(ee,"users",J.uid),{purchaseLog:Ne})}catch(t){console.error("Error saving purchase log:",t)}}}function $e(n){const e=n.toLowerCase();return zr[e]||AE[e]||null}window.showCategoryPrompt=function(e){const t=document.getElementById("category-prompt-modal"),r=document.getElementById("category-prompt-item-name"),s=document.getElementById("category-chips");r.textContent=`"${e}"`,s.innerHTML="",Object.entries(hn).forEach(([i,{label:a,emoji:c}])=>{const u=document.createElement("button");u.style.cssText="padding: 8px 12px; border: 2px solid var(--border); border-radius: 20px; background: var(--bg-main); cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;",u.innerHTML=`${c} ${a}`,u.addEventListener("click",async()=>{zr[e.toLowerCase()]=i,await rw(),fu(),Ue(),$n()}),s.appendChild(u)}),t.classList.add("visible"),document.getElementById("category-prompt-skip-btn").onclick=fu};function fu(){document.getElementById("category-prompt-modal").classList.remove("visible")}function q(n,e="success"){const t=document.createElement("div");t.className=`toast ${e}`,t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toastFadeOut 0.3s ease forwards",setTimeout(()=>t.remove(),300)},2e3)}
