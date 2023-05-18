!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=n.parcelRequired7c6;r.register("iNWLi",(function(t,n){e(t.exports,"writeUserData",(function(){return u})),e(t.exports,"writeUserBooks",(function(){return c})),e(t.exports,"HendlerSignOut",(function(){return d})),r("fkNhc");var i=r("MjY8E");r("gQOBw");var a=r("G0OFq");r("cokon");var o=r("eA2L7");(0,i.initializeApp)({apiKey:"AIzaSyA33UV7OBjkFv7cGwHXspz56WwnFTkUl1Y",authDomain:"dream-team-project-bc025.firebaseapp.com",databaseURL:"https://dream-team-project-bc025-default-rtdb.europe-west1.firebasedatabase.app",projectId:"dream-team-project-bc025",storageBucket:"dream-team-project-bc025.appspot.com",messagingSenderId:"343989525653",appId:"1:343989525653:web:4644793e39efe02e6a0f9c"}),document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.name.value,n=e.currentTarget.elements.email.value,r=e.currentTarget.elements.password.value;""!==r.value&&""!==n.value||alert("Всі поля повинні бути заповненні!");var i=(0,a.o)();(0,a.a8)(i,n,r).then((function(e){var r=e.user;s=r.uid,console.log(r),u(t,n)})).catch((function(e){e.code,e.message}))}));var s="";function u(e,t){var n=(0,o.getDatabase)();(0,o.set)((0,o.ref)(n,"users/"+s),{name:e,email:t})}function c(e){var t=(0,o.getDatabase)();(0,o.push)((0,o.ref)(t,"users/"+s),{selectedBooks:e})}var l=(0,a.o)(),h=(0,o.ref)((0,o.getDatabase)());function d(){(0,a.B)(l).then((function(){console.log("you are signOut")})).catch((function(e){console.log(e)}))}(0,a.x)(l,(function(e){e&&(console.log(e),(0,o.get)((0,o.child)(h,"users/".concat(e.uid))).then((function(e){if(e.exists()){var t=e.val().name;console.log(t)}else console.log("No data available")})).catch((function(e){console.error(e)})))})),document.querySelector(".js-signOut-button").addEventListener("click",d)})),r.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return r("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return r("MjY8E").registerVersion}));r("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r("MjY8E").registerVersion)("firebase","9.22.0","app")})),r.register("MjY8E",(function(n,i){e(n.exports,"_registerComponent",(function(){return T})),e(n.exports,"_getProvider",(function(){return E})),e(n.exports,"SDK_VERSION",(function(){return R})),e(n.exports,"initializeApp",(function(){return A})),e(n.exports,"getApp",(function(){return O})),e(n.exports,"registerVersion",(function(){return D}));var a=r("bpxeT"),o=r("8MBJY"),s=r("a2hTj"),u=r("hKHmD"),c=r("8nrFW"),l=r("2TvXO"),h=r("6ExWU"),d=r("kZfxc"),f=r("2xDiJ"),p=r("ajgRO"),v=(f=r("2xDiJ"),function(){"use strict";function e(n){t(o)(this,e),this.container=n}return t(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var y,_,g="@firebase/app",m="0.9.10",k=new(0,d.Logger)("@firebase/app"),b="[DEFAULT]",w=(y={},t(u)(y,g,"fire-core"),t(u)(y,"@firebase/app-compat","fire-core-compat"),t(u)(y,"@firebase/analytics","fire-analytics"),t(u)(y,"@firebase/analytics-compat","fire-analytics-compat"),t(u)(y,"@firebase/app-check","fire-app-check"),t(u)(y,"@firebase/app-check-compat","fire-app-check-compat"),t(u)(y,"@firebase/auth","fire-auth"),t(u)(y,"@firebase/auth-compat","fire-auth-compat"),t(u)(y,"@firebase/database","fire-rtdb"),t(u)(y,"@firebase/database-compat","fire-rtdb-compat"),t(u)(y,"@firebase/functions","fire-fn"),t(u)(y,"@firebase/functions-compat","fire-fn-compat"),t(u)(y,"@firebase/installations","fire-iid"),t(u)(y,"@firebase/installations-compat","fire-iid-compat"),t(u)(y,"@firebase/messaging","fire-fcm"),t(u)(y,"@firebase/messaging-compat","fire-fcm-compat"),t(u)(y,"@firebase/performance","fire-perf"),t(u)(y,"@firebase/performance-compat","fire-perf-compat"),t(u)(y,"@firebase/remote-config","fire-rc"),t(u)(y,"@firebase/remote-config-compat","fire-rc-compat"),t(u)(y,"@firebase/storage","fire-gcs"),t(u)(y,"@firebase/storage-compat","fire-gcs-compat"),t(u)(y,"@firebase/firestore","fire-fst"),t(u)(y,"@firebase/firestore-compat","fire-fst-compat"),t(u)(y,"fire-js","fire-js"),t(u)(y,"firebase","fire-js-all"),y),I=new Map,C=new Map;function x(e,t){try{e.container.addComponent(t)}catch(n){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e){var t=e.name;if(C.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;C.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=I.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){x(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function E(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
var S=(_={},t(u)(_,"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),t(u)(_,"bad-app-name","Illegal App name: '{$appName}"),t(u)(_,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(u)(_,"app-deleted","Firebase App named '{$appName}' already deleted"),t(u)(_,"no-options","Need to provide options, when not being deployed to hosting via source."),t(u)(_,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(u)(_,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(u)(_,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(u)(_,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(u)(_,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(u)(_,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),_),P=new(0,f.ErrorFactory)("app","Firebase",S),N=function(){"use strict";function e(n,r,i){var a=this;t(o)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,h.Component)("app",(function(){return a}),"PUBLIC"))}return t(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw P.create("app-deleted",{appName:this._name})}}]),e}(),R="9.22.0";function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:b,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw P.create("bad-app-name",{appName:String(a)});if(n||(n=(0,f.getDefaultAppConfig)()),!n)throw P.create("no-options");var o=I.get(a);if(o){if((0,f.deepEqual)(n,o.options)&&(0,f.deepEqual)(i,o.config))return o;throw P.create("duplicate-app",{appName:a})}var s=new(0,h.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var d,p=C.values()[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){var v=d.value;s.addComponent(v)}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}var y=new N(n,i,s);return I.set(a,y),y}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=I.get(e);if(!t&&e===b&&(0,f.getDefaultAppConfig)())return A();if(!t)throw P.create("no-app",{appName:e});return t}function D(e,t,n){var r,i=null!==(r=w[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}T(new(0,h.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
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
 */
var M="firebase-heartbeat-store",L=null;function F(){return L||(L=(0,p.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(M)}}).catch((function(e){throw P.create("idb-open",{originalErrorMessage:e.message})}))),L}function U(e){return q.apply(this,arguments)}function q(){return(q=t(a)(t(l).mark((function e(n){var r,i,a;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return r=e.sent,e.next=6,r.transaction(M).objectStore(M).get(V(n));case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),e.t0 instanceof f.FirebaseError?k.warn(e.t0.message):(a=P.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(a.message));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function j(e,t){return W.apply(this,arguments)}function W(){return(W=t(a)(t(l).mark((function e(n,r){var i,a,o,s;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return i=e.sent,a=i.transaction(M,"readwrite"),o=a.objectStore(M),e.next=8,o.put(r,V(n));case 8:return e.next=10,a.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof f.FirebaseError?k.warn(e.t0.message):(s=P.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(s.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function V(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
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
 */var H=function(){"use strict";function e(n){var r=this;t(o)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new G(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(a)(t(l).mark((function n(){var r,i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=B(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(a)(t(l).mark((function n(){var r,i,a,o,s;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=B(),i=z(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,f.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function B(){return(new Date).toISOString().substring(0,10)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Y(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Y(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var K,G=function(){"use strict";function e(n){t(o)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(a)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,f.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,f.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(a)(t(l).mark((function n(){var r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,U(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(a)(t(l).mark((function r(){var i,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",j(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(a)(t(l).mark((function r(){var i,a;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",j(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(c)(a.heartbeats).concat(t(c)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function Y(e){return(0,f.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */K="",T(new(0,h.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,h.Component)("heartbeat",(function(e){return new H(e)}),"PRIVATE")),D(g,m,K),D(g,m,"esm2017"),D("fire-js","")})),r.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),r.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),r.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),r.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||i.default(e)||o.default(e)||a.default()};var n=s(r("kMC0W")),i=s(r("7AJDX")),a=s(r("8CtQK")),o=s(r("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return i.default(e)};var n,i=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return i.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i.default(e,t)};var n,i=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("6ExWU",(function(n,i){e(n.exports,"Component",(function(){return d})),e(n.exports,"ComponentContainer",(function(){return v}));var a=r("bpxeT"),o=r("8MBJY"),s=r("a2hTj"),u=r("1t1Wn"),c=r("8nrFW"),l=r("2TvXO"),h=r("2xDiJ"),d=function(){"use strict";function e(n,r,i){t(o)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),f="[DEFAULT]",p=function(){"use strict";function e(n,r){t(o)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,h.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:f})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=t(u)(a.value,2),c=s[0],l=s[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(a)(t(l).mark((function n(){var r;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,h=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d=t(u)(l.value,2),f=d[0],p=d[1],v=this.normalizeInstanceIdentifier(f);i===v&&p.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===f?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;return this.component?this.component.multipleInstances?e:f:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(n){t(o)(this,e),this.name=n,this.providers=new Map}return t(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new p(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),r.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||i.default(e,t)||o.default(e,t)||a.default()};var n=s(r("8slrw")),i=s(r("7AJDX")),a=s(r("ifqQW")),o=s(r("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),r.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),r.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("2xDiJ",(function(i,a){e(i.exports,"assert",(function(){return _})),e(i.exports,"assertionError",(function(){return g})),e(i.exports,"base64",(function(){return k})),e(i.exports,"base64Encode",(function(){return w})),e(i.exports,"base64urlEncodeWithoutPadding",(function(){return I})),e(i.exports,"base64Decode",(function(){return C})),e(i.exports,"deepCopy",(function(){return x})),e(i.exports,"getDefaultEmulatorHost",(function(){return P})),e(i.exports,"getDefaultEmulatorHostnameAndPort",(function(){return N})),e(i.exports,"getDefaultAppConfig",(function(){return R})),e(i.exports,"getExperimentalSetting",(function(){return A})),e(i.exports,"Deferred",(function(){return O})),e(i.exports,"createMockUserToken",(function(){return D})),e(i.exports,"getUA",(function(){return M})),e(i.exports,"isMobileCordova",(function(){return L})),e(i.exports,"isBrowserExtension",(function(){return F})),e(i.exports,"isReactNative",(function(){return U})),e(i.exports,"isIE",(function(){return q})),e(i.exports,"isNodeSdk",(function(){return j})),e(i.exports,"isIndexedDBAvailable",(function(){return W})),e(i.exports,"validateIndexedDBOpenable",(function(){return V})),e(i.exports,"FirebaseError",(function(){return H})),e(i.exports,"ErrorFactory",(function(){return B})),e(i.exports,"jsonEval",(function(){return G})),e(i.exports,"stringify",(function(){return Y})),e(i.exports,"isValidFormat",(function(){return Q})),e(i.exports,"isAdmin",(function(){return X})),e(i.exports,"contains",(function(){return $})),e(i.exports,"safeGet",(function(){return Z})),e(i.exports,"isEmpty",(function(){return ee})),e(i.exports,"map",(function(){return te})),e(i.exports,"deepEqual",(function(){return ne})),e(i.exports,"querystring",(function(){return ie})),e(i.exports,"querystringDecode",(function(){return ae})),e(i.exports,"extractQuerystring",(function(){return oe})),e(i.exports,"Sha1",(function(){return se})),e(i.exports,"createSubscribe",(function(){return ue})),e(i.exports,"errorPrefix",(function(){return he})),e(i.exports,"stringToByteArray",(function(){return de})),e(i.exports,"stringLength",(function(){return fe})),e(i.exports,"getModularInstance",(function(){return pe}));var o=r("ds8z5"),s=r("8MBJY"),u=r("a2hTj"),c=r("eYQtU"),l=r("1t1Wn"),h=(r("8nrFW"),r("4c7YB")),d=r("2MbLg"),f=r("6qd2L"),p=!1,v=!1,y="${JSCORE_VERSION}",_=function(e,t){if(!e)throw g(t)},g=function(e){return new Error("Firebase Database ("+y+") INTERNAL ASSERT FAILED: "+e)},m=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;u||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(m(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new b;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},b=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return r}(t(h)(Error)),w=function(e){var t=m(e);return k.encodeByteArray(t,!0)},I=function(e){return w(e).replace(/\./g,"")},C=function(e){try{return k.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function x(e){return T(void 0,e)}function T(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=T(e[n],t[n]));return e}
/**
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
 */
var E=function(){
/**
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
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},S=function(){try{return E()||function(){if(void 0!==f&&void 0!==f.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&C(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},P=function(e){var t,n;return null===(n=null===(t=S())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},N=function(e){var t=P(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},R=function(){var e;return null===(e=S())||void 0===e?void 0:e.config},A=function(e){var t;return null===(t=S())||void 0===t?void 0:t["_".concat(e)]},O=function(){"use strict";function e(){var n=this;t(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(u)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
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
 */
function D(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[I(JSON.stringify({alg:"none",type:"JWT"})),I(JSON.stringify(a)),""].join(".")}
/**
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
 */function M(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function L(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(M())}function F(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function U(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function q(){var e=M();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function j(){return!0===p||!0===v}function W(){try{return"object"==typeof indexedDB}catch(e){return!1}}function V(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
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
 */
var H=function(e){"use strict";t(c)(r,e);var n=t(d)(r);function r(e,i,a){var u;return t(s)(this,r),(u=n.call(this,i)).code=e,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(t(o)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(o)(u),B.prototype.create),u}return r}(t(h)(Error)),B=function(){"use strict";function e(n,r,i){t(s)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(u)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?z(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new H(a,u,i);return c}}]),e}();function z(e,t){return e.replace(K,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var K=/\{\$([^}]+)}/g;
/**
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
 */function G(e){return JSON.parse(e)}function Y(e){return JSON.stringify(e)}
/**
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
 */var J=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=G(C(a[0])||""),n=G(C(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Q=function(e){var t=J(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},X=function(e){var t=J(e).claims;return"object"==typeof t&&!0===t.admin};
/**
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
 */
function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ee(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function te(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ne(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(re(l)&&re(h)){if(!ne(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,f=!1,p=void 0;try{for(var v,y=r[Symbol.iterator]();!(d=(v=y.next()).done);d=!0){var _=v.value;if(!n.includes(_))return!1}}catch(e){f=!0,p=e}finally{try{d||null==y.return||y.return()}finally{if(f)throw p}}return!0}function re(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function ie(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=t(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function ae(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(l)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function oe(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */var se=function(){"use strict";function e(){t(s)(this,e),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return t(u)(e,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=d^l&(h^d),u=1518500249):(s=l^h^d,u=1859775393):p<60?(s=l&h|d&(l|h),u=2400959708):(s=l^h^d,u=3395469782);var v=(c<<5|c>>>27)+s+f+u+n[p]&4294967295;f=d,d=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),e}();function ue(e,t){var n=new ce(e,t);return n.subscribe.bind(n)}var ce=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(u)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=le),void 0===r.error&&(r.error=le),void 0===r.complete&&(r.complete=le);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function le(){}
/**
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
 */function he(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
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
 */
var de=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,_(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},fe=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function pe(e){return e&&e._delegate?e._delegate:e}})),r.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(r("ge8co")),i=s(r("cZGw3")),a=s(r("fVNic")),o=s(r("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!i.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return n.default(e,arguments,a.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o.default(r,e)},u(e)}})),r.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,i=(n=r("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&i.default(a,n.prototype),a}).apply(null,arguments)}})),r.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),r.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,h=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),r.register("kZfxc",(function(n,i){e(n.exports,"LogLevel",(function(){return a})),e(n.exports,"Logger",(function(){return _})),e(n.exports,"setLogLevel",(function(){return g})),e(n.exports,"setUserLogHandler",(function(){return m}));var a,o,s=r("8MBJY"),u=r("a2hTj"),c=r("hKHmD"),l=r("8nrFW"),h=[];(o=a||(a={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var d,f={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},p=a.INFO,v=(d={},t(c)(d,a.DEBUG,"log"),t(c)(d,a.VERBOSE,"log"),t(c)(d,a.INFO,"info"),t(c)(d,a.WARN,"warn"),t(c)(d,a.ERROR,"error"),d),y=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=v[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},_=function(){"use strict";function e(n){t(s)(this,e),this.name=n,this._logLevel=p,this._logHandler=y,this._userLogHandler=null,h.push(this)}return t(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in a))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?f[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.DEBUG].concat(t(l)(n))),this._logHandler.apply(this,[this,a.DEBUG].concat(t(l)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.VERBOSE].concat(t(l)(n))),this._logHandler.apply(this,[this,a.VERBOSE].concat(t(l)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.INFO].concat(t(l)(n))),this._logHandler.apply(this,[this,a.INFO].concat(t(l)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.WARN].concat(t(l)(n))),this._logHandler.apply(this,[this,a.WARN].concat(t(l)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,a.ERROR].concat(t(l)(n))),this._logHandler.apply(this,[this,a.ERROR].concat(t(l)(n)))}}]),e}();function g(e){h.forEach((function(t){t.setLogLevel(e)}))}function m(e,t){var n=!0,r=!1,i=void 0;try{for(var o,s=h[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=f[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var s=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:a[n].toLowerCase(),message:s,args:i,type:t.name})}}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}}})),r.register("ajgRO",(function(n,i){e(n.exports,"openDB",(function(){return l}));var a=r("bpxeT"),o=r("dDDEV"),s=r("8nrFW"),u=r("2TvXO"),c=r("kKOTz");c=r("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var h=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],f=new Map;function p(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(f.get(n))return f.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=d.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||h.includes(r))){var c,l=(c=t(a)(t(u).mark((function e(n){var a,c,l,h,d,f,p=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=p.length,c=new Array(a>1?a-1:0),l=1;l<a;l++)c[l-1]=p[l];return d=this.transaction(n,o?"readwrite":"readonly"),f=d.store,i&&(f=f.index(c.shift())),e.next=7,Promise.all([(h=f)[r].apply(h,t(s)(c)),o&&d.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return f.set(n,l),l}}}(0,c.r)((function(e){return t(o)({},e,{get:function(t,n,r){return p(t,n)||e.get(t,n,r)},has:function(t,n){return!!p(t,n)||e.has(t,n)}})}))})),r.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i.default(e,t,n[t])}))}return e};var n,i=(n=r("hKHmD"))&&n.__esModule?n:{default:n}})),r.register("kKOTz",(function(n,i){e(n.exports,"w",(function(){return _})),e(n.exports,"r",(function(){return p}));var a,o,s=r("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,h=new WeakMap,d=new WeakMap;var f={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function p(e){f=e(f)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(g(this),n),_(u.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(e.apply(g(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=e).call.apply(o,[g(this),n].concat(t(s)(i)));return l.set(u,n.sort?n.sort():[n]),_(u)}}function y(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,f):e);var t}function _(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(_(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),d.set(n,t),n;var t,n;if(h.has(e))return h.get(e);var r=y(e);return r!==e&&(h.set(e,r),d.set(r,e)),r}var g=function(e){return d.get(e)}})),r.register("gQOBw",(function(t,n){e(t.exports,"getAuth",(function(){return r("G0OFq").o})),e(t.exports,"createUserWithEmailAndPassword",(function(){return r("G0OFq").a8})),e(t.exports,"onAuthStateChanged",(function(){return r("G0OFq").x})),e(t.exports,"signOut",(function(){return r("G0OFq").B})),r("eMcUM")})),r.register("eMcUM",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return r("G0OFq").a8})),e(t.exports,"getAuth",(function(){return r("G0OFq").o})),e(t.exports,"onAuthStateChanged",(function(){return r("G0OFq").x})),e(t.exports,"signOut",(function(){return r("G0OFq").B})),r("2xDiJ"),r("MjY8E"),r("kZfxc"),r("6ExWU");r("G0OFq")})),r.register("G0OFq",(function(n,i){e(n.exports,"a8",(function(){return Gt})),e(n.exports,"x",(function(){return Xt})),e(n.exports,"B",(function(){return $t})),e(n.exports,"o",(function(){return zr}));var a=r("ds8z5"),o=r("bpxeT"),s=r("8MBJY"),u=r("a2hTj"),c=r("hKHmD"),l=r("jh8P3"),h=r("fVNic"),d=r("eYQtU"),f=r("1t1Wn"),p=r("8nrFW"),v=r("2MbLg"),y=r("2TvXO"),_=r("2xDiJ"),g=r("MjY8E"),m=r("4tSb9"),k=r("kZfxc"),b=r("6ExWU");function w(){return t(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var I=w,C=new(0,_.ErrorFactory)("auth","Firebase",w()),x=new(0,k.Logger)("@firebase/auth");function T(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;x.logLevel<=k.LogLevel.WARN&&(a=x).warn.apply(a,["Auth (".concat(g.SDK_VERSION,"): ").concat(e)].concat(t(p)(r)))}function E(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;x.logLevel<=k.LogLevel.ERROR&&(a=x).error.apply(a,["Auth (".concat(g.SDK_VERSION,"): ").concat(e)].concat(t(p)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw R.apply(void 0,[e].concat(t(p)(r)))}function P(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return R.apply(void 0,[e].concat(t(p)(r)))}function N(e,n,r){var i=Object.assign(Object.assign({},I()),t(c)({},n,r));return new(0,_.ErrorFactory)("auth","Firebase",i).create(n,{appName:e.name})}function R(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=t(p)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(p)(u)))}return(a=C).create.apply(a,[e].concat(t(p)(r)))}function A(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw R.apply(void 0,[n].concat(t(p)(i)))}function O(e){var t="INTERNAL ASSERTION FAILED: "+e;throw E(t),new Error(t)}function D(e,t){e||O(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function L(){return"http:"===F()||"https:"===F()}function F(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U=function(){"use strict";function e(n,r){t(s)(this,e),this.shortDelay=n,this.longDelay=r,D(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,_.isMobileCordova)()||(0,_.isReactNative)()}return t(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(L()||(0,_.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){D(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,W=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void O("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void O("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void O("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),V=(j={},t(c)(j,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(c)(j,"MISSING_CUSTOM_TOKEN","internal-error"),t(c)(j,"INVALID_IDENTIFIER","invalid-email"),t(c)(j,"MISSING_CONTINUE_URI","internal-error"),t(c)(j,"INVALID_PASSWORD","wrong-password"),t(c)(j,"MISSING_PASSWORD","missing-password"),t(c)(j,"EMAIL_EXISTS","email-already-in-use"),t(c)(j,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(c)(j,"INVALID_IDP_RESPONSE","invalid-credential"),t(c)(j,"INVALID_PENDING_TOKEN","invalid-credential"),t(c)(j,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(c)(j,"MISSING_REQ_TYPE","internal-error"),t(c)(j,"EMAIL_NOT_FOUND","user-not-found"),t(c)(j,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(c)(j,"EXPIRED_OOB_CODE","expired-action-code"),t(c)(j,"INVALID_OOB_CODE","invalid-action-code"),t(c)(j,"MISSING_OOB_CODE","internal-error"),t(c)(j,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(c)(j,"INVALID_ID_TOKEN","invalid-user-token"),t(c)(j,"TOKEN_EXPIRED","user-token-expired"),t(c)(j,"USER_NOT_FOUND","user-token-expired"),t(c)(j,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(c)(j,"INVALID_CODE","invalid-verification-code"),t(c)(j,"INVALID_SESSION_INFO","invalid-verification-id"),t(c)(j,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(c)(j,"MISSING_SESSION_INFO","missing-verification-id"),t(c)(j,"SESSION_EXPIRED","code-expired"),t(c)(j,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(c)(j,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(c)(j,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(c)(j,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(c)(j,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(c)(j,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(c)(j,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(c)(j,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(c)(j,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(c)(j,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(c)(j,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),t(c)(j,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),t(c)(j,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),t(c)(j,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),t(c)(j,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),t(c)(j,"MISSING_CLIENT_TYPE","missing-client-type"),t(c)(j,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),t(c)(j,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),t(c)(j,"INVALID_REQ_TYPE","invalid-req-type"),j),H=new U(3e4,6e4);function B(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function z(e,t,n,r){return K.apply(this,arguments)}function K(){return K=t(o)(t(y).mark((function e(n,r,i,a){var s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",G(n,s,t(o)(t(y).mark((function e(){var o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,_.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",W.fetch()(X(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function G(e,t,n){return Y.apply(this,arguments)}function Y(){return(Y=t(o)(t(y).mark((function e(n,r,i){var a,o,s,u,c,l,h,d,p;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},V),r),e.prev=2,o=new $(n),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw Z(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(f)(c.split(" : "),2),h=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){e.next=23;break}throw Z(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){e.next=27;break}throw Z(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){e.next=29;break}throw Z(n,"user-disabled",u);case 29:if(p=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!d){e.next=34;break}throw N(n,p,d);case 34:S(n,p);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof _.FirebaseError)){e.next=41;break}throw e.t0;case 41:S(n,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function J(e,t,n,r){return Q.apply(this,arguments)}function Q(){return Q=t(o)(t(y).mark((function e(n,r,i,a){var o,s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,z(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&S(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function X(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?q(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var $=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(P(n.auth,"network-request-failed"))}),H.get())}))}return t(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Z(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=P(e,t,r);return i.customData._tokenResponse=n,i}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return ae=t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,_.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,A((o=se(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:ie(oe(o.auth_time)),issuedAtTime:ie(oe(o.iat)),expirationTime:ie(oe(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function oe(e){return 1e3*Number(e)}function se(e){var n=t(f)(e.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return E("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,_.base64Decode)(i);return o?JSON.parse(o):(E("Failed to decode base64 JWT payload"),null)}catch(e){return E("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ue(e,t){return ce.apply(this,arguments)}function ce(){return ce=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof _.FirebaseError&&le(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),ce.apply(this,arguments)}function le(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(){"use strict";function e(n){t(s)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),de=function(){"use strict";function e(n,r){t(s)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=ie(this.lastLoginAt),this.creationTime=ie(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){return pe.apply(this,arguments)}function pe(){return(pe=
/**
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
 */
t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c,l,h,d,f;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,ue(n,ne(i,{idToken:a}));case 7:A(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?_e(s.providerUserInfo):[],c=ye(n.providerData,u),l=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new de(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,f);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){return(ve=t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,_.getModularInstance)(n),e.next=3,fe(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(p)(r).concat(t(p)(n))}function _e(e){return e.map((function(e){var t=e.providerId,n=(0,m.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ge(e,t){return me.apply(this,arguments)}function me(){return(me=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n,{},t(o)(t(y).mark((function e(){var i,a,o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,_.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=X(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",W.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){A(e.idToken,"internal-error"),A(void 0!==e.idToken,"internal-error"),A(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,A(n=se(t),"internal-error"),A(void 0!==n.exp,"internal-error"),A(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(A(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a,o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge(e,n);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return O("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(A("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(A("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(A("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){A("string"==typeof e||void 0===e,"internal-error",{appName:t})}var we=function(){"use strict";function e(n){t(s)(this,e);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=(0,m.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(p)(o.providerData):[],this.metadata=new de(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(u)(e,[{key:"getIdToken",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(A(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ae.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ve.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){var n=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!n){t.next=5;break}return t.next=5,fe(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,ue(e,ee(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,_=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,m=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;A(m&&I,t,"internal-error");var C=ke.fromJSON(this.name,I);A("string"==typeof m,t,"internal-error"),be(h,t.name),be(d,t.name),A("boolean"==typeof k,t,"internal-error"),A("boolean"==typeof b,t,"internal-error"),be(f,t.name),be(p,t.name),be(v,t.name),be(y,t.name),be(_,t.name),be(g,t.name);var x=new e({uid:m,auth:t,email:d,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:C,createdAt:_,lastLoginAt:g});return w&&Array.isArray(w)&&(x.providerData=w.map((function(e){return Object.assign({},e)}))),y&&(x._redirectEventId=y),x}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(o)(t(y).mark((function a(){var o,s;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new ke).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),t.next=5,fe(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),Ie=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){D(e instanceof Function,"Expected a class definition");var t=Ie.get(e);return t?(D(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ie.set(e,t),t)}
/**
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
 */var xe=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(u)(e,[{key:"_isAvailable",value:function(){return t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();xe.type="NONE";var Te=xe;
/**
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
 */function Ee(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Se=function(){"use strict";function e(n,r,i){t(s)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Ee(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ee("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?we._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(o)(t(y).mark((function a(){var s,u,c,l,h,d,f,p,v,_,g,m,k;return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(Ce(Te),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||Ce(Te),c=Ee(i,n.config.apiKey,n.name),l=null,h=!0,d=!1,f=void 0,a.prev=9,p=r[Symbol.iterator]();case 11:if(h=(v=p.next()).done){a.next=29;break}return _=v.value,a.prev=13,a.next=16,_._get(c);case 16:if(!(g=a.sent)){a.next=22;break}return m=we._fromJSON(n,g),_!==u&&(l=m),u=_,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:h=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,f=a.t1;case 35:a.prev=35,a.prev=36,h||null==p.return||p.return();case 38:if(a.prev=38,!d){a.next=41;break}throw f;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new e(u,n,i));case 46:if(u=k[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Oe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ne(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Me(t))return"Blackberry";if(Le(t))return"Webos";if(Re(t))return"Safari";if((t.includes("chrome/")||Ae(t))&&!t.includes("edge/"))return"Chrome";if(De(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return/firefox\//i.test(e)}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return/crios\//i.test(e)}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return/iemobile/i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return/android/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return/blackberry/i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return/webos/i.test(e)}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ue(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return Fe(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function qe(){return(0,_.isIE)()&&10===document.documentMode}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.getUA)();return Fe(e)||De(e)||Le(e)||Me(e)||/windows phone/i.test(e)||Oe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Pe((0,_.getUA)());break;case"Worker":t="".concat(Pe((0,_.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(g.SDK_VERSION,"/").concat(r)}function Ve(e,t){return He.apply(this,arguments)}function He(){return(He=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"GET","/v2/recaptchaConfig",B(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){return void 0!==e&&void 0!==e.enterprise}var ze=function e(n){"use strict";if(t(s)(this,e),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=P("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Ge(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var Ye="https://www.google.com/recaptcha/enterprise.js?render=",Je="NO_RECAPTCHA",Qe=function(){"use strict";function e(n){t(s)(this,e),this.type="recaptcha-enterprise",this.auth=tt(n)}return t(u)(e,[{key:"verify",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){var a,s,u;return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=function(e){return s.apply(this,arguments)},s=function(){return s=t(o)(t(y).mark((function e(r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){e.next=3;break}return e.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){e.next=5;break}return e.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return e.abrupt("return",new Promise(function(){var e=t(o)(t(y).mark((function e(n,i){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ve(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new ze(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)},u=function(t,n,r){var i=window.grecaptcha;Be(i)?i.enterprise.ready((function(){i.enterprise.execute(t,{action:e}).then((function(e){n(e)})).catch((function(){n(Je)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){a(r.auth).then((function(r){if(!n&&Be(window.grecaptcha))u(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Ke(Ye+r).then((function(){u(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),e}();function Xe(e,t,n){return $e.apply(this,arguments)}function $e(){return $e=t(o)(t(y).mark((function e(n,r,i){var a,o,s,u,c=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]&&c[3],o=new Qe(n),e.prev=3,e.next=6,o.verify(i);case 6:s=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,o.verify(i,!0);case 13:s=e.sent;case 14:return u=Object.assign({},r),a?Object.assign(u,{captchaResp:s}):Object.assign(u,{captchaResponse:s}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",u);case 19:case"end":return e.stop()}}),e,null,[[3,9]])}))),$e.apply(this,arguments)}
/**
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
 */var Ze=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.queue=[]}return t(u)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l,h,d,f,p,v,_;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,a=!0,o=!1,s=void 0,t.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){t.next=15;break}return l=c.value,t.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),o=!0,s=t.t0;case 21:t.prev=21,t.prev=22,a||null==u.return||u.return();case 24:if(t.prev=24,!o){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),h=!0,d=!1,f=void 0,t.prev=35,p=i[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){_=v.value;try{_()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),d=!0,f=t.t2;case 43:t.prev=43,t.prev=44,h||null==p.return||p.return();case 46:if(t.prev=46,!d){t.next=49;break}throw f;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),et=function(){"use strict";function e(n,r,i,a){t(s)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nt(this),this.idTokenSubscription=new nt(this),this.beforeStateQueue=new Ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return t(u)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=Ce(n));var r=this;return this._initializationPromise=this.queue(t(o)(t(y).mark((function i(){var a,o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Se.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return A(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(o));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fe(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?(0,_.getModularInstance)(e):null)&&A(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&A(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(Ce(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"initializeRecaptchaConfig",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ve(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"});case 2:r=t.sent,i=new ze(r),null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.emailPasswordEnabled&&new Qe(e).verify();case 6:case"end":return t.stop()}}),n)})))()}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,_.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return A(i=e&&Ce(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Se.create(n,[Ce(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=We(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a,o;return t(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,e._getAppCheckToken();case 9:return(o=n.sent)&&(i["X-Firebase-AppCheck"]=o),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,null===(r=e.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=t.sent)?void 0:i.error)&&T("Error while retrieving App Check token: ".concat(i.error)),t.abrupt("return",null==i?void 0:i.token);case 6:case"end":return t.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return(0,_.getModularInstance)(e)}var nt=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.observer=null,this.addObserver=(0,_.createSubscribe)((function(e){return r.observer=e}))}return t(u)(e,[{key:"next",get:function(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t){var n=(0,g._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,_.deepEqual)(i,null!=t?t:{}))return r;S(r,"already-initialized")}return n.initialize({options:t})}function it(e,n,r){var i=tt(e);A(i._canInitEmulator,i,"emulator-config-failed"),A(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=at(n),s=function(e){var n=at(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:ot(i.substr(o.length+1))}}var s=t(f)(i.split(":"),2);return{host:s[0],port:ot(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function at(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ot(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var st=function(){"use strict";function e(n,r){t(s)(this,e),this.providerId=n,this.signInMethod=r}return t(u)(e,[{key:"toJSON",value:function(){return O("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return O("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return O("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return O("not implemented")}}]),e}();function ut(e,t){return ct.apply(this,arguments)}function ct(){return(ct=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lt(e,t){return ht.apply(this,arguments)}function ht(){return(ht=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPassword",B(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dt(e,t){return ft.apply(this,arguments)}function ft(){return(ft=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithEmailLink",B(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pt(e,t){return vt.apply(this,arguments)}function vt(){return(vt=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithEmailLink",B(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,r),(o=n.call(this,"password",a))._email=e,o._password=i,o._tenantId=u,o}return t(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,s;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(a={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,Xe(e,a,"signInWithPassword");case 8:return s=r.sent,r.abrupt("return",lt(e,s));case 12:return r.abrupt("return",lt(e,a).catch(function(){var n=t(o)(t(y).mark((function n(r){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("auth/missing-recaptcha-token"!==r.code){t.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),t.next=4,Xe(e,a,"signInWithPassword");case 4:return i=t.sent,t.abrupt("return",lt(e,i));case 8:return t.abrupt("return",Promise.reject(r));case 9:case"end":return t.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",dt(e,{email:n._email,oobCode:n._password}));case 14:S(e,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",ut(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",pt(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:S(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(st);function _t(e,t){return gt.apply(this,arguments)}function gt(){return(gt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithIdp",B(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return _t(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,_t(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,_t(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,_.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):S("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,m.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(st);function kt(e,t){return bt.apply(this,arguments)}function bt(){return(bt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(n,"POST","/v1/accounts:sendVerificationCode",B(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function wt(){return(wt=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPhoneNumber",B(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function It(){return(It=t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(n,"POST","/v1/accounts:signInWithPhoneNumber",B(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Z(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ct=t(c)({},"USER_NOT_FOUND","user-not-found");function xt(){return(xt=t(o)(t(y).mark((function e(n,r){var i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPhoneNumber",B(n,i),Ct));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return wt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return It.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return xt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(st);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et=function(){"use strict";function e(n){var r,i,a,o,u,c;t(s)(this,e);var l=(0,_.querystringDecode)((0,_.extractQuerystring)(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);A(h&&d&&f,"argument-error"),this.apiKey=h,this.operation=f,this.code=d,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return t(u)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,_.querystringDecode)((0,_.extractQuerystring)(e)).link,n=t?(0,_.querystringDecode)((0,_.extractQuerystring)(t)).deep_link_id:null,r=(0,_.querystringDecode)((0,_.extractQuerystring)(e)).deep_link_id;return(r?(0,_.querystringDecode)((0,_.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(u)(e,null,[{key:"credential",value:function(e,t){return yt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Et.parseLink(t);return A(n,"argument-error"),yt._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pt=function(){"use strict";function e(n){t(s)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),Nt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(p)(this.scopes)}}]),r}(Pt),Rt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"facebook.com")}return t(u)(r,null,[{key:"credential",value:function(e){return mt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Nt);
/**
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
 */Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Rt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var At=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(u)(r,null,[{key:"credential",value:function(e,t){return mt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Nt);At.GOOGLE_SIGN_IN_METHOD="google.com",At.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ot=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"github.com")}return t(u)(r,null,[{key:"credential",value:function(e){return mt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Nt);Ot.GITHUB_SIGN_IN_METHOD="github.com",Ot.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"twitter.com")}return t(u)(r,null,[{key:"credential",value:function(e,t){return mt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Nt);function Mt(e,t){return Lt.apply(this,arguments)}function Lt(){return(Lt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signUp",B(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.TWITTER_SIGN_IN_METHOD="twitter.com",Dt.PROVIDER_ID="twitter.com";var Ft=function(){"use strict";function e(n){t(s)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(u)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(o)(t(y).mark((function o(){var s,u,c;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,we._fromIdTokenResponse(n,i,a);case 2:return s=t.sent,u=Ut(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return t(o)(t(y).mark((function a(){var o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Ut(i),t.abrupt("return",new e({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function Ut(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var qt=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,i,o,u){var c,l;return t(s)(this,r),(c=n.call(this,i.code,i.message)).operationType=o,c.user=u,Object.setPrototypeOf(t(a)(c),r.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:i.customData._serverResponse,operationType:o},c}return t(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(_.FirebaseError);function jt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw qt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){return Vt.apply(this,arguments)}function Vt(){return Vt=t(o)(t(y).mark((function e(n,r){var i,a,o=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=ue,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Ft._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),e)}))),Vt.apply(this,arguments)}function Ht(e,t){return Bt.apply(this,arguments)}function Bt(){return Bt=
/**
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
 */
t(o)(t(y).mark((function e(n,r){var i,a,o,s,u,c,l=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,ue(n,jt(a,o,r,n),i);case 6:return A((s=e.sent).idToken,a,"internal-error"),A(u=se(s.idToken),a,"internal-error"),c=u.sub,A(n.uid===c,a,"user-mismatch"),e.abrupt("return",Ft._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&S(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),Bt.apply(this,arguments)}function zt(e,t){return Kt.apply(this,arguments)}function Kt(){return Kt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n,r){var i,a,o,s,u=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,jt(n,a,r);case 4:return o=e.sent,e.next=7,Ft._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Kt.apply(this,arguments)}function Gt(e,t,n){return Yt.apply(this,arguments)}function Yt(){return Yt=t(o)(t(y).mark((function e(n,r,i){var a,s,u,c,l,h,d;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=tt(n),u={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(a=s._getRecaptchaConfig())||void 0===a?void 0:a.emailPasswordEnabled)){e.next=11;break}return e.next=7,Xe(s,u,"signUpPassword");case 7:l=e.sent,c=Mt(s,l),e.next=12;break;case 11:c=Mt(s,u).catch(function(){var e=t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=8;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,Xe(s,u,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",Mt(s,r));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 12:return e.next=14,c.catch((function(e){return Promise.reject(e)}));case 14:return h=e.sent,e.next=17,Ft._fromIdTokenResponse(s,"signIn",h);case 17:return d=e.sent,e.next=20,s._updateCurrentUser(d.user);case 20:return e.abrupt("return",d);case 21:case"end":return e.stop()}}),e)}))),Yt.apply(this,arguments)}function Jt(e,t,n,r){return(0,_.getModularInstance)(e).onIdTokenChanged(t,n,r)}function Qt(e,t,n){return(0,_.getModularInstance)(e).beforeAuthStateChanged(t,n)}function Xt(e,t,n,r){return(0,_.getModularInstance)(e).onAuthStateChanged(t,n,r)}function $t(e){return(0,_.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:start",B(e,t))}function en(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",B(e,t))}new WeakMap;var tn="__sak",nn=function(){"use strict";function e(n,r){t(s)(this,e),this.storageRetriever=n,this.type=r}return t(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(tn,"1"),this.storage.removeItem(tn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
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
 */var rn=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){var e,i;return t(s)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Re(i=(0,_.getUA)())||Fe(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=je(),e._shouldAllowMigration=!0,e}return t(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);qe()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,a=this;return t(o)(t(y).mark((function o(){return t(y).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(h)(r.prototype),"_set",i).call(a,e,n);case 2:a.localCache[e]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(o)(t(y).mark((function a(){var o;return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(h)(r.prototype),"_get",n).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(o)(t(y).mark((function a(){return t(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(h)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(nn);rn.type="LOCAL";var an=rn,on=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(nn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.type="SESSION";var sn=on;
/**
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
 */function un(e){return Promise.all(e.map((n=t(o)(t(y).mark((function e(n){var r;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
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
 */var cn=function(){"use strict";function e(n){t(s)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,s,u,c,l,h,d;return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),h=Array.from(l).map(function(){var e=t(o)(t(y).mark((function e(n){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,un(h);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */cn.receivers=[];var hn=function(){"use strict";function e(n){t(s)(this,e),this.target=n,this.handlers=new Set}return t(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(o)(t(y).mark((function a(){var o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var c=ln("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function fn(e){dn().location.href=e}
/**
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
 */function pn(){return void 0!==dn().WorkerGlobalScope&&"function"==typeof dn().importScripts}function vn(){return yn.apply(this,arguments)}function yn(){return(yn=t(o)(t(y).mark((function e(){var n;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
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
 */
var _n="firebaseLocalStorageDb",gn="firebaseLocalStorage",mn="fbase_key",kn=function(){"use strict";function e(n){t(s)(this,e),this.request=n}return t(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function bn(e,t){return e.transaction([gn],t?"readwrite":"readonly").objectStore(gn)}function wn(){var e=indexedDB.deleteDatabase(_n);return new kn(e).toPromise()}function In(){var e=indexedDB.open(_n,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(gn,{keyPath:mn})}catch(e){r(e)}})),e.addEventListener("success",t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(gn)){t.next=12;break}return i.close(),t.next=5,wn();case 5:return t.t0=n,t.next=8,In();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Cn(e,t,n){return xn.apply(this,arguments)}function xn(){return(xn=t(o)(t(y).mark((function e(n,r,i){var a,o;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=bn(n,!0).put((a={},t(c)(a,mn,r),t(c)(a,"value",i),a)),e.abrupt("return",new kn(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Tn(e,t){return En.apply(this,arguments)}function En(){return(En=t(o)(t(y).mark((function e(n,r){var i,a;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=bn(n,!1).get(r),e.next=3,new kn(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Sn(e,t){var n=bn(e,!0).delete(t);return new kn(n).toPromise()}var Pn=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(u)(e,[{key:"_openDb",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,In();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",pn()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(o)(t(y).mark((function n(){return t(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=cn._getInstance(pn()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(o)(t(y).mark((function n(r,i){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(o)(t(y).mark((function e(n,r){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,vn();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new hn(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(o)(t(y).mark((function e(){var n;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,In();case 5:return n=e.sent,e.next=8,Cn(n,tn,"1");case 8:return e.next=10,Sn(n,tn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(o)(t(y).mark((function i(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Cn(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Tn(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(o)(t(y).mark((function r(){return t(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(o)(t(y).mark((function r(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Sn(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r,i,a,o,s,u,c,l,h,d,f,p,v,_,g,m,k;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=bn(e,!1).getAll();return new kn(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)h=l.value,d=h.fbase_key,f=h.value,a.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(f)&&(e.notifyListeners(d,f),i.push(d));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(p=!0,v=!1,_=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(p=(m=g.next()).done);p=!0)k=m.value,e.localCache[k]&&!a.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,_=t.t1;case 35:t.prev=35,t.prev=36,p||null==g.return||g.return();case 38:if(t.prev=38,!v){t.next=41;break}throw _;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(o)(t(y).mark((function n(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Pn.type="LOCAL";var Nn=Pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:start",B(e,t))}function An(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",B(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ge("rcb"),new U(3e4,6e4);var On="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t,n){return Mn.apply(this,arguments)}function Mn(){return(Mn=t(o)(t(y).mark((function e(n,r,i){var a,o,s,u,c,l,h,d;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,A("string"==typeof o,n,"argument-error"),A(i.type===On,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return A("enroll"===u.type,n,"internal-error"),e.next=15,Zt(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return A("signin"===u.type,n,"internal-error"),A(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Rn(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,kt(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ln=function(){"use strict";function e(n){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=tt(n)}return t(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Dn(this.auth,e,(0,_.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return Tt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Tt._fromTokenResponse(n,r):null}}]),e}();
/**
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
 */
function Fn(e,t){return t?Ce(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Ln.PROVIDER_ID="phone",Ln.PHONE_SIGN_IN_METHOD="phone";var Un=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(u)(r,[{key:"_getIdTokenResponse",value:function(e){return _t(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return _t(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return _t(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(st);function qn(e){return zt(e.auth,new Un(e),e.bypassAuthState)}function jn(e){var t=e.auth,n=e.user;return A(n,t,"internal-error"),Ht(n,new Un(e),e.bypassAuthState)}function Wn(e){return Vn.apply(this,arguments)}function Vn(){return(Vn=t(o)(t(y).mark((function e(n){var r,i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,A(i=n.user,r,"internal-error"),e.abrupt("return",Wt(i,new Un(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(u)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(o)(t(y).mark((function e(r,i){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a,o,s,u,c,l;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qn;case"linkViaPopup":case"linkViaRedirect":return Wn;case"reauthViaPopup":case"reauthViaRedirect":return jn;default:S(this.auth,"internal-error")}}},{key:"resolve",value:function(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Bn=new U(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,i,o,u,c){var l;return t(s)(this,r),(l=n.call(this,e,i,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(a)(l),l}return t(u)(r,[{key:"executeNotNull",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return A(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(1===e.filter.length,"Popup operations only handle one event"),r=ln(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(P(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(P(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(P(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,Bn.get())};t()}}]),r}(Hn);zn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kn=new Map,Gn=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,r),(a=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(u)(r,[{key:"execute",value:function(){var e=this,n=this;return t(o)(t(y).mark((function i(){var a,o;return t(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Kn.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Yn(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(l)(t(h)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Kn.set(n.auth._key(),a);case 21:return n.bypassAuthState||Kn.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,a=function(){return t(l)(t(h)(r.prototype),"onAuthEvent",n)};return t(o)(t(y).mark((function n(){var r;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(o)(t(y).mark((function e(){return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(Hn);function Yn(e,t){return Jn.apply(this,arguments)}function Jn(){return(Jn=t(o)(t(y).mark((function e(n,r){var i,a,o;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=$n(r),a=Xn(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qn(e,t){Kn.set(e._key(),t)}function Xn(e){return Ce(e._redirectPersistence)}function $n(e){return Ee("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e,t){return er.apply(this,arguments)}function er(){return er=t(o)(t(y).mark((function e(n,r){var i,a,o,s,u,c=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=tt(n),o=Fn(a,r),s=new Gn(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),er.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var tr=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rr(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!rr(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(P(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(nr(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function nr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function rr(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function ir(e){return ar.apply(this,arguments)}function ar(){return ar=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(y).mark((function e(n){var r,i=arguments;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",z(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),ar.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sr=/^https?/;function ur(){return(ur=t(o)(t(y).mark((function e(n){var r,i,a,o,s,u,c;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ir(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!cr(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:S(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function cr(e){var t=M(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!sr.test(r))return!1;if(or.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
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
 */var lr=new U(3e4,6e4);function hr(){var e=dn().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(p)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var dr=null;function fr(e){return dr=dr||function(e){return new Promise((function(t,n){var r,i,a;function o(){hr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){hr(),n(P(e,"network-request-failed"))},timeout:lr.get()})}if(null===(i=null===(r=dn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=dn().gapi)||void 0===a?void 0:a.load)){var s=Ge("iframefcb");return dn()[s]=function(){gapi.load?o():n(P(e,"network-request-failed"))},Ke("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw dr=null,e}))}(e),dr}
/**
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
 */var pr=new U(5e3,15e3),vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _r(e){var t=e.config;A(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?q(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:g.SDK_VERSION},i=yr.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,_.querystring)(r).slice(1))}function gr(e){return mr.apply(this,arguments)}function mr(){return mr=t(o)(t(y).mark((function e(n){var r,i;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fr(n);case 2:return r=e.sent,A(i=dn().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:_r(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vr,dontclear:!0},(function(e){return new Promise((r=t(o)(t(y).mark((function r(i,a){var o,s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){dn().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=P(n,"network-request-failed"),s=dn().setTimeout((function(){a(o)}),pr.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),mr.apply(this,arguments)}
/**
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
 */var kr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},br="_blank",wr="http://localhost",Ir=function(){"use strict";function e(n){t(s)(this,e),this.window=n,this.associatedEvent=null}return t(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Cr(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},kr),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,_.getUA)().toLowerCase();r&&(u=Ae(l)?br:r),Ne(l)&&(n=n||wr,c.scrollbars="yes");var h=Object.entries(c).reduce((function(e,n){var r=t(f)(n,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Ue(l)&&"_self"!==u)return xr(n||"",u),new Ir(null);var d=window.open(n||"",u,h);A(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Ir(d)}function xr(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */var Tr=encodeURIComponent("fac");function Er(e,t,n,r,i,a){return Sr.apply(this,arguments)}function Sr(){return(Sr=t(o)(t(y).mark((function e(n,r,i,a,o,s){var u,c,l,h,d,p,v,m,k,b,w,I,C,x,T,E,S,P,N;return t(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key"),u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:g.SDK_VERSION,eventId:o},!(r instanceof Pt)){e.next=24;break}for(r.setDefaultLanguage(n.languageCode),u.providerId=r.providerId||"",(0,_.isEmpty)(r.getCustomParameters())||(u.customParameters=JSON.stringify(r.getCustomParameters())),c=!0,l=!1,h=void 0,e.prev=8,d=Object.entries(s||{})[Symbol.iterator]();!(c=(p=d.next()).done);c=!0)v=t(f)(p.value,2),m=v[0],k=v[1],u[m]=k;e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),l=!0,h=e.t0;case 16:e.prev=16,e.prev=17,c||null==d.return||d.return();case 19:if(e.prev=19,!l){e.next=22;break}throw h;case 22:return e.finish(19);case 23:return e.finish(16);case 24:for(r instanceof Nt&&(b=r.getScopes().filter((function(e){return""!==e}))).length>0&&(u.scopes=b.join(",")),n.tenantId&&(u.tid=n.tenantId),w=u,I=!0,C=!1,x=void 0,e.prev=28,T=Object.keys(w)[Symbol.iterator]();!(I=(E=T.next()).done);I=!0)S=E.value,void 0===w[S]&&delete w[S];e.next=36;break;case 32:e.prev=32,e.t1=e.catch(28),C=!0,x=e.t1;case 36:e.prev=36,e.prev=37,I||null==T.return||T.return();case 39:if(e.prev=39,!C){e.next=42;break}throw x;case 42:return e.finish(39);case 43:return e.finish(36);case 44:return e.next=46,n._getAppCheckToken();case 46:return P=e.sent,N=P?"#".concat(Tr,"=").concat(encodeURIComponent(P)):"",e.abrupt("return","".concat(Pr(n),"?").concat((0,_.querystring)(w).slice(1)).concat(N));case 49:case"end":return e.stop()}}),e,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function Pr(e){var t=e.config;return t.emulator?q(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr="webStorageSupport",Rr=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sn,this._completeRedirectFn=Zn,this._overrideRedirectResult=Qn}return t(u)(e,[{key:"_openPopup",value:function(e,n,r,i){var a=this;return t(o)(t(y).mark((function o(){var s,u;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),t.next=4,Er(e,n,r,M(),i);case 4:return u=t.sent,t.abrupt("return",Cr(e,u,ln()));case 6:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var a=this;return t(o)(t(y).mark((function o(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return t.next=4,Er(e,n,r,M(),i);case 4:return fn(t.sent),t.abrupt("return",new Promise((function(){})));case 7:case"end":return t.stop()}}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(D(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i,a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gr(e);case 2:return i=t.sent,a=new tr(e),i.register("authEvent",(function(t){return A(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:a},n.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Nr,{type:Nr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),S(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ur.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return je()||Re()||Fe()}}]),e}(),Ar=Rr,Or=function(){"use strict";function e(n){t(s)(this,e),this.factorId=n}return t(u)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return O("unexpected MultiFactorSessionType")}}}]),e}(),Dr=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",B(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",B(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Or);(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertion",value:function(e){return Dr._fromCredential(e)}}]),e}()).FACTOR_ID="phone",(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertionForEnrollment",value:function(e,t){return Mr._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Mr._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(e){return t(o)(t(y).mark((function n(){var r,i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A(void 0!==(r=e).auth,"internal-error"),t.next=4,n=r.auth,a={idToken:r.credential,totpEnrollmentInfo:{}},z(n,"POST","/v2/accounts/mfaEnrollment:start",B(n,a));case 4:return i=t.sent,t.abrupt("return",Lr._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return t.stop()}var n,a}),n)})))()}}]),e}()).FACTOR_ID="totp";var Mr=function(e){"use strict";t(d)(r,e);var n=t(v)(r);function r(e,i,a){var o;return t(s)(this,r),(o=n.call(this,"totp")).otp=e,o.enrollmentId=i,o.secret=a,o}return t(u)(r,[{key:"_finalizeEnroll",value:function(e,n,r){var i=this;return t(o)(t(y).mark((function a(){return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A(void 0!==i.secret,e,"argument-error"),t.abrupt("return",en(e,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return t.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(e,n){var r=this;return t(o)(t(y).mark((function i(){var a;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A(void 0!==r.enrollmentId&&void 0!==r.otp,e,"argument-error"),a={verificationCode:r.otp},t.abrupt("return",An(e,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return t.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Or),Lr=function(){"use strict";function e(n,r,i,a,o,u,c){t(s)(this,e),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return t(u)(e,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(Fr(e)||Fr(t))&&(r=!0),r&&(Fr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Fr(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(t,n){return new e(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,n)}}]),e}();function Fr(e){return void 0===e||0===(null==e?void 0:e.length)}var Ur="@firebase/auth",qr="0.23.2",jr=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.internalListeners=new Map}return t(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(o)(t(y).mark((function r(){var i;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
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
 */
var Wr,Vr=(0,_.getExperimentalSetting)("authIdTokenMaxAge")||300,Hr=null,Br=function(e){return n=t(o)(t(y).mark((function n(r){var i,a,o;return t(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Vr)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,Hr!==o){t.next=12;break}return t.abrupt("return");case 12:return Hr=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function zr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getApp)(),t=(0,g._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=rt(e,{popupRedirectResolver:Ar,persistence:[Nn,an,sn]}),r=(0,_.getExperimentalSetting)("authTokenSyncURL");if(r){var i=Br(r);Qt(n,i,(function(){return i(n.currentUser)})),Jt(n,(function(e){return i(e)}))}var a=(0,_.getDefaultEmulatorHost)("auth");return a&&it(n,"http://".concat(a)),n}Wr="Browser",(0,g._registerComponent)(new(0,b.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;A(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:Wr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:We(Wr)},l=new et(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ce);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,g._registerComponent)(new(0,b.Component)("auth-internal",(function(e){var t=tt(e.getProvider("auth").getImmediate());return new jr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,g.registerVersion)(Ur,qr,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wr)),(0,g.registerVersion)(Ur,qr,"esm2017")})),r.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a(e,t,n)};var n,i=(n=r("2mz0K"))&&n.__esModule?n:{default:n};function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=i.default(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),r.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i.default(e)););return e};var n,i=(n=r("fVNic"))&&n.__esModule?n:{default:n}})),r.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),r.register("cokon",(function(t,n){e(t.exports,"getDatabase",(function(){return r("eA2L7").getDatabase})),e(t.exports,"set",(function(){return r("eA2L7").set})),e(t.exports,"ref",(function(){return r("eA2L7").ref})),e(t.exports,"push",(function(){return r("eA2L7").push})),e(t.exports,"get",(function(){return r("eA2L7").get})),e(t.exports,"child",(function(){return r("eA2L7").child})),r("eA2L7")})),r.register("eA2L7",(function(n,i){e(n.exports,"child",(function(){return Ki})),e(n.exports,"ref",(function(){return zi})),e(n.exports,"push",(function(){return Gi})),e(n.exports,"set",(function(){return Yi})),e(n.exports,"get",(function(){return Ji})),e(n.exports,"getDatabase",(function(){return na}));var a=r("ds8z5"),o=r("bpxeT"),s=r("8MBJY"),u=r("a2hTj"),c=r("eYQtU"),l=r("1t1Wn"),h=r("8nrFW"),d=r("l5bVx"),f=r("2MbLg"),p=r("2TvXO"),v=r("MjY8E"),y=r("6ExWU"),_=r("2xDiJ"),g=r("kZfxc"),m=r("6qd2L"),k="@firebase/database",b="0.14.4",w="";
/**
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
 */
var I,C=function(){"use strict";function e(n){t(s)(this,e),this.domStorage_=n,this.prefix_="firebase:"}return t(u)(e,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,_.stringify)(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,_.jsonEval)(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),e}(),x=function(){"use strict";function e(){t(s)(this,e),this.cache_={},this.isInMemoryStorage=!0}return t(u)(e,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return(0,_.contains)(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),e}(),T=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new C(t)}}catch(e){}return new x},E=T("localStorage"),S=T("sessionStorage"),P=new(0,g.Logger)("@firebase/database"),N=(I=1,function(){return I++}),R=function(e){var t=(0,_.stringToByteArray)(e),n=new(0,_.Sha1);n.update(t);var r=n.digest();return _.base64.encodeByteArray(r)},A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=A.apply(null,a):r+="object"==typeof a?(0,_.stringify)(a):a,r+=" "}return r},O=null,D=!0,M=function(e,t){(0,_.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(P.logLevel=g.LogLevel.VERBOSE,O=P.log.bind(P),t&&S.set("logging_enabled",!0)):"function"==typeof e?O=e:(O=null,S.remove("logging_enabled"))},L=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===D&&(D=!1,null===O&&!0===S.get("logging_enabled")&&M(!0)),O){var r=A.apply(null,t);O(r)}},F=function(e){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];L.apply(void 0,[e].concat(t(h)(r)))}},U=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+A.apply(void 0,t(h)(n));P.error(i)},q=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(A.apply(void 0,t(h)(n)));throw P.error(i),new Error(i)},j=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+A.apply(void 0,t(h)(n));P.warn(i)},W=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},V="[MIN_NAME]",H="[MAX_NAME]",B=function(e,t){if(e===t)return 0;if(e===V||t===H)return-1;if(t===V||e===H)return 1;var n=$(e),r=$(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},z=function(e,t){return e===t?0:e<t?-1:1},K=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,_.stringify)(t))},G=function(e){if("object"!=typeof e||null===e)return(0,_.stringify)(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=(0,_.stringify)(t[i]),r+=":",r+=G(e[t[i]]);return r+="}"},Y=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
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
 */function J(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Q=function(e){(0,_.assert)(!W(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var X=new RegExp("^-?(0*)\\d{1,10}$"),$=function(e){if(X.test(e)){var t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Z=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw j("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ee=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},te=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return t(u)(e,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){j('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),e}(),ne=function(){"use strict";function e(n,r,i){var a=this;t(s)(this,e),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return t(u)(e,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(L("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',j(e)}}]),e}(),re=function(){"use strict";function e(n){t(s)(this,e),this.accessToken=n}return t(u)(e,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),e}();re.OWNER="owner";
/**
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
 */
var ie="5",ae=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="websocket",se="long_polling",ue=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];t(s)(this,e),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=u,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=E.get("host:"+n)||this._host}return t(u)(e,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&E.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),e}();function ce(e,t,n){var r;if((0,_.assert)("string"==typeof t,"typeof type must == string"),(0,_.assert)("object"==typeof n,"typeof params must == object"),t===oe)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==se)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return J(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */var le=function(){"use strict";function e(){t(s)(this,e),this.counters_={}}return t(u)(e,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;(0,_.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return(0,_.deepCopy)(this.counters_)}}]),e}(),he={},de={};
/**
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
 */function fe(e){var t=e.toString();return he[t]||(he[t]=new le),he[t]}
/**
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
 */
var pe=function(){"use strict";function e(n){t(s)(this,e),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t(u)(e,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Z((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),e}(),ve="start",ye="close",_e=function(){"use strict";function e(n,r,i,a,o,u,c){var l=this;t(s)(this,e),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=u,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=F(n),this.stats_=fe(r),this.urlFn=function(e){return l.appCheckToken&&(e.ac=l.appCheckToken),ce(r,se,e)}}return t(u)(e,[{key:"open",value:function(e,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pe(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,_.isNodeSdk)()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var e=r;if(!r.isClosed_){r.scriptTagHolder=new ge((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=t(l)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(e.incrementIncomingBytes_(r),e.scriptTagHolder)if(e.connectTimeoutTimer_&&(clearTimeout(e.connectTimeoutTimer_),e.connectTimeoutTimer_=null),e.everConnected_=!0,o===ve)e.id=s,e.password=u;else{if(o!==ye)throw new Error("Unrecognized command received: "+o);if(s){var c=e;e.scriptTagHolder.sendNewPolls=!1,e.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else e.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=t(l)(r,2),o=a[0],s=a[1];e.incrementIncomingBytes_(r),e.myPacketOrderer.handleResponse(o,s)}),(function(){e.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=ie,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&ae.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=(0,_.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=(0,_.base64Encode)(t),r=Y(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!(0,_.isNodeSdk)()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=(0,_.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){e.forceAllow_=!0}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!(0,_.isNodeSdk)()&&(!!e.forceAllow_||!(e.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),e}(),ge=function(){"use strict";function e(n,r,i,a){if(t(s)(this,e),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,_.isNodeSdk)())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=N(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=e.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var u="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(e){L("frame writing exception"),e.stack&&L(e.stack),L(e)}}}return t(u)(e,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.textContent="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;(0,_.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){L("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||L("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),e}(),me=null;
/**
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
 */"undefined"!=typeof MozWebSocket?me=MozWebSocket:"undefined"!=typeof WebSocket&&(me=WebSocket);var ke=function(){"use strict";function e(n,r,i,a,o,u,c){t(s)(this,e),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=F(this.connId),this.stats_=fe(r),this.connURL=e.connectionURL_(r,u,c,a,i),this.nodeAdmin=r.nodeAdmin}return t(u)(e,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,E.set("previous_websocket_failure",!0);try{var r;if((0,_.isNodeSdk)()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(ie,"/").concat(w,"/").concat(m.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new me(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){E.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=(0,_.jsonEval)(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if((0,_.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=(0,_.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Y(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=ie,!(0,_.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&ae.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),ce(e,oe,a)}},{key:"forceDisallow",value:function(){e.forceDisallow_=!0}},{key:"isAvailable",value:function(){var t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==me&&!e.forceDisallow_}},{key:"previouslyFailed",value:function(){return E.isInMemoryStorage||!0===E.get("previous_websocket_failure")}}]),e}();ke.responsesRequiredToBeHealthy=2,ke.healthyTimeout=3e4;
/**
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
 */
var be=function(){"use strict";function e(n){t(s)(this,e),this.initTransports_(n)}return t(u)(e,[{key:"initTransports_",value:function(t){var n=ke&&ke.isAvailable(),r=n&&!ke.previouslyFailed();if(t.webSocketOnly&&(n||j("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ke];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=e.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}e.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[_e,ke]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),e}();be.globalTransportInitialized_=!1;
/**
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
 */
var we=function(){"use strict";function e(n,r,i,a,o,u,c,l,h,d){t(s)(this,e),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=u,this.onReady_=c,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=F("c:"+this.id+":"),this.transportManager_=new be(r),this.log_("Connection created"),this.start_()}return t(u)(e,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=ee((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=K("t",e),n=K("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=K("t",e),n=K("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=K("t",e);if("d"in e){var n=e.d;if("h"===t){var r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?U("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):U("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ie!==n&&j("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ee((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ee((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(E.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),e}(),Ie=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),e}(),Ce=function(){"use strict";function e(n){t(s)(this,e),this.allowedEvents_=n,this.listeners_={},(0,_.assert)(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return t(u)(e,[{key:"trigger",value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[e]))for(var a=t(h)(this.listeners_[e]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){(0,_.assert)(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),e}(),xe=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,_.isMobileCordova)()||(window.addEventListener("online",(function(){e.online_||(e.online_=!0,e.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){e.online_&&(e.online_=!1,e.trigger("online",!1))}),!1)),e}return t(u)(r,[{key:"getInitialEvent",value:function(e){return(0,_.assert)("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(Ce),Te=function(){"use strict";function e(n,r){if(t(s)(this,e),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return t(u)(e,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),e}();function Ee(){return new Te("")}function Se(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Pe(e){return e.pieces_.length-e.pieceNum_}function Ne(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Te(e.pieces_,t)}function Re(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Oe(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Te(t,0)}function De(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Te)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new Te(n,0)}function Me(e){return e.pieceNum_>=e.pieces_.length}function Le(e,t){var n=Se(e),r=Se(t);if(null===n)return t;if(n===r)return Le(Ne(e),Ne(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Fe(e,t){if(Pe(e)!==Pe(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ue(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Pe(e)>Pe(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var qe=function e(n,r){"use strict";t(s)(this,e),this.errorPrefix_=r,this.parts_=Ae(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=(0,_.stringLength)(this.parts_[i]);je(this)};function je(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+We(e))}function We(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */var Ve=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){var e,i,a;return t(s)(this,r),e=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),e.visible_=!0,a&&document.addEventListener(a,(function(){var t=!document[i];t!==e.visible_&&(e.visible_=t,e.trigger("visible",t))}),!1),e}return t(u)(r,[{key:"getInitialEvent",value:function(e){return(0,_.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(Ce),He=1e3,Be=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(e,i,o,u,c,l,h,d){var f;if(t(s)(this,r),(f=n.call(this)).repoInfo_=e,f.applicationId_=i,f.onDataUpdate_=o,f.onConnectStatus_=u,f.onServerInfoUpdate_=c,f.authTokenProvider_=l,f.appCheckTokenProvider_=h,f.authOverride_=d,f.id=r.nextPersistentConnectionId_++,f.log_=F("p:"+f.id+":"),f.interruptReasons_={},f.listens=new Map,f.outstandingPuts_=[],f.outstandingGets_=[],f.outstandingPutCount_=0,f.outstandingGetCount_=0,f.onDisconnectRequestQueue_=[],f.connected_=!1,f.reconnectDelay_=He,f.maxReconnectDelay_=3e5,f.securityDebugCallback_=null,f.lastSessionId=null,f.establishConnectionTimer_=null,f.visible_=!1,f.requestCBHash_={},f.requestNumber_=0,f.realtime_=null,f.authToken_=null,f.appCheckToken_=null,f.forceTokenRefresh_=!1,f.invalidAuthTokenCount_=0,f.invalidAppCheckTokenCount_=0,f.firstConnection_=!0,f.lastConnectionAttemptTime_=null,f.lastConnectionEstablishedTime_=null,d&&!(0,_.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return Ve.getInstance().on("visible",f.onVisible_,t(a)(f)),-1===e.host.indexOf("fblocal")&&xe.getInstance().on("online",f.onOnline_,t(a)(f)),f}return t(u)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,_.stringify)(i)),(0,_.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new(0,_.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),(0,_.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,_.assert)(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){(e&&40===e.length||(0,_.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=(0,_.isValidFormat)(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,_.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+(0,_.stringify)(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):U("Unrecognized action received from server: "+(0,_.stringify)(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;(0,_.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=He,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=He,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=He),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var e=this;return t(o)(t(p).mark((function n(){var i,a,o,s,u,c,h,d,f,v,y,g,m;return t(p).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.shouldReconnect_()){n.next=31;break}return e.log_("Making a connection attempt"),e.lastConnectionAttemptTime_=(new Date).getTime(),e.lastConnectionEstablishedTime_=null,i=e.onDataMessage_.bind(e),a=e.onReady_.bind(e),o=e.onRealtimeDisconnect_.bind(e),s=e.id+":"+r.nextConnectionId_++,u=e.lastSessionId,c=!1,h=null,d=function(){h?h.close():(c=!0,o())},f=function(e){(0,_.assert)(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},e.realtime_={close:d,sendRequest:f},v=e.forceTokenRefresh_,e.forceTokenRefresh_=!1,n.prev=16,n.t0=t(l),n.next=20,Promise.all([e.authTokenProvider_.getToken(v),e.appCheckTokenProvider_.getToken(v)]);case 20:n.t1=n.sent,y=(0,n.t0)(n.t1,2),g=y[0],m=y[1],c?L("getToken() completed but was canceled"):(L("getToken() completed. Creating connection."),e.authToken_=g&&g.accessToken,e.appCheckToken_=m&&m.token,h=new we(s,e.repoInfo_,e.applicationId_,e.appCheckToken_,e.authToken_,i,a,o,(function(t){j(t+" ("+e.repoInfo_.toString()+")"),e.interrupt("server_kill")}),u)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),e.log_("Failed to get token: "+n.t2),c||(e.repoInfo_.nodeAdmin&&j(n.t2),d());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){L("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){L("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,_.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=He,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return G(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Te(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){L("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){L("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";(0,_.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+w.replace(/\./g,"-")]=1,(0,_.isMobileCordova)()?e["framework.cordova"]=1:(0,_.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=xe.getInstance().currentlyOnline();return(0,_.isEmpty)(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&(0,_.contains)(e,"w")){var n=(0,_.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();j("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(Ie);
/**
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
 */Be.nextPersistentConnectionId_=0,Be.nextConnectionId_=0;
/**
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
 */
var ze,Ke=function(){"use strict";function e(n,r){t(s)(this,e),this.name=n,this.node=r}return t(u)(e,null,[{key:"Wrap",value:function(t,n){return new e(t,n)}}]),e}(),Ge=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Ke(V,e),r=new Ke(V,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Ke.MIN}}]),e}(),Ye=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){return t(s)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"compare",value:function(e,t){return B(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw(0,_.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Ke.MIN}},{key:"maxPost",value:function(){return new Ke(H,ze)}},{key:"makePost",value:function(e,t){return(0,_.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ke(e,ze)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return ze},set:function(e){ze=e}}]),r}(Ge),Je=new Ye,Qe=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;t(s)(this,e),this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];for(var u=1;!n.isEmpty();)if(u=r?i(n.key,r):1,a&&(u*=-1),u<0)n=this.isReverse_?n.left:n.right;else{if(0===u){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return t(u)(e,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),e}(),Xe=function(){"use strict";function e(n,r,i,a,o){t(s)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:et.EMPTY_NODE,this.right=null!=o?o:et.EMPTY_NODE}return t(u)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return et.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return et.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight_",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),e}();
/**
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
 */Xe.RED=!0,Xe.BLACK=!1;var $e,Ze=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Xe(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),e}(),et=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.EMPTY_NODE;t(s)(this,e),this.comparator_=n,this.root_=r}return t(u)(e,[{key:"insert",value:function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Xe.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Qe(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Qe(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Qe(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Qe(this.root_,null,this.comparator_,!0,e)}}]),e}();
/**
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
 */
function tt(e,t){return B(e.name,t.name)}function nt(e,t){return B(e,t)}
/**
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
 */et.EMPTY_NODE=new Ze;var rt,it,at,ot=function(e){return"number"==typeof e?"number:"+Q(e):"string:"+e},st=function(e){if(e.isLeafNode()){var t=e.val();(0,_.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,_.contains)(t,".sv"),"Priority must be a string or number.")}else(0,_.assert)(e===$e||e.isEmpty(),"priority of unexpected type.");(0,_.assert)(e===$e||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},ut=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.__childrenNodeConstructor.EMPTY_NODE;t(s)(this,e),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,(0,_.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),st(this.priorityNode_)}return t(u)(e,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(t){return new e(this.value_,t)}},{key:"getImmediateChild",value:function(t){return".priority"===t?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(t){return Me(t)?this:".priority"===Se(t)?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(t,n){var r=Se(t);return null===r?n:n.isEmpty()&&".priority"!==r?this:((0,_.assert)(".priority"!==r||1===Pe(t),".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(t),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+ot(this.priorityNode_.val())+":");var n=t(d)(this.value_);e+=n+":",e+="number"===n?Q(this.value_):this.value_,this.lazyHash_=R(e)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:((0,_.assert)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}},{key:"compareToLeafNode_",value:function(n){var r=t(d)(n.value_),i=t(d)(this.value_),a=e.VALUE_TYPE_ORDER.indexOf(r),o=e.VALUE_TYPE_ORDER.indexOf(i);return(0,_.assert)(a>=0,"Unknown leaf type: "+r),(0,_.assert)(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return rt},set:function(e){rt=e}}]),e}();ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];var ct,lt,ht=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){return t(s)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?B(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Ke.MIN}},{key:"maxPost",value:function(){return new Ke(H,new ut("[PRIORITY-POST]",at))}},{key:"makePost",value:function(e,t){var n=it(e);return new Ke(t,new ut("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Ge),dt=new ht,ft=Math.log(2),pt=function(){"use strict";function e(n){t(s)(this,e);var r;this.count=(r=n+1,parseInt(Math.log(r)/ft,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return t(u)(e,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),e}(),vt=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new Xe(o,a.node,Xe.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new Xe(o,a.node,Xe.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],h=n?n(l):l;u(new Xe(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Xe.BLACK):(s(h,Xe.BLACK),s(h,Xe.RED))}return a}(new pt(e.length));return new et(r||t,a)},yt={},_t=function(){"use strict";function e(n,r){t(s)(this,e),this.indexes_=n,this.indexSet_=r}return t(u)(e,[{key:"get",value:function(e){var t=(0,_.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof et?t:null}},{key:"hasIndex",value:function(e){return(0,_.contains)(this.indexSet_,e.toString())}},{key:"addIndex",value:function(t,n){(0,_.assert)(t!==Je,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(Ke.Wrap),s=o.getNext();s;)a=a||t.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?vt(i,t.getCompare()):yt;var u=t.toString(),c=Object.assign({},this.indexSet_);c[u]=t;var l=Object.assign({},this.indexes_);return l[u]=r,new e(l,c)}},{key:"addToIndexes",value:function(t,n){var r=this;return new e((0,_.map)(this.indexes_,(function(e,i){var a=(0,_.safeGet)(r.indexSet_,i);if((0,_.assert)(a,"Missing index implementation for "+i),e===yt){if(a.isDefinedOn(t.node)){for(var o=[],s=n.getIterator(Ke.Wrap),u=s.getNext();u;)u.name!==t.name&&o.push(u),u=s.getNext();return o.push(t),vt(o,a.getCompare())}return yt}var c=n.get(t.name),l=e;return c&&(l=l.remove(new Ke(t.name,c))),l.insert(t,t.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(t,n){return new e((0,_.map)(this.indexes_,(function(e){if(e===yt)return e;var r=n.get(t.name);return r?e.remove(new Ke(t.name,r)):e})),this.indexSet_)}}],[{key:"Default",get:function(){return(0,_.assert)(yt&&dt,"ChildrenNode.ts has not been loaded"),ct=ct||new e({".priority":yt},{".priority":dt})}}]),e}(),gt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&st(this.priorityNode_),this.children_.isEmpty()&&(0,_.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return t(u)(e,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||lt}},{key:"updatePriority",value:function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?lt:t}},{key:"getChild",value:function(e){var t=Se(e);return null===t?this:this.getImmediateChild(t).getChild(Ne(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(t,n){if((0,_.assert)(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);var r,i,a=new Ke(t,n);n.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(t,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?lt:this.priorityNode_;return new e(r,o,i)}},{key:"updateChild",value:function(e,t){var n=Se(e);if(null===n)return t;(0,_.assert)(".priority"!==Se(e)||1===Pe(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(Ne(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(t){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(dt,(function(o,s){n[o]=s.val(t),r++,a&&e.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!t&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+ot(this.getPriority().val())+":"),this.forEachChild(dt,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":R(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Ke(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Ke(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Ke(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Ke.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Ke.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mt?-1:0}},{key:"withIndex",value:function(t){if(t===Je||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Je||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(dt),r=t.getIterator(dt),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Je?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return lt||(lt=new e(new et(nt),null,_t.Default))}}]),e}();gt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var mt=new(function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){return t(s)(this,r),n.call(this,new et(nt),gt.EMPTY_NODE,_t.Default)}return t(u)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return gt.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(gt));Object.defineProperties(Ke,{MIN:{value:new Ke(V,gt.EMPTY_NODE)},MAX:{value:new Ke(H,mt)}}),Ye.__EMPTY_NODE=gt.EMPTY_NODE,ut.__childrenNodeConstructor=gt,$e=mt,function(e){at=e}(mt);function kt(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===e)return gt.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(n=e[".priority"]),(0,_.assert)(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":t(d)(n))),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){var r=e;return new ut(r,kt(n))}if(e instanceof Array){var i=gt.EMPTY_NODE;return J(e,(function(t,n){if((0,_.contains)(e,t)&&"."!==t.substring(0,1)){var r=kt(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(t,r))}})),i.updatePriority(kt(n))}var a=[],o=!1,s=e;if(J(s,(function(e,t){if("."!==e.substring(0,1)){var n=kt(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new Ke(e,n)))}})),0===a.length)return gt.EMPTY_NODE;var u=vt(a,tt,(function(e){return e.name}),nt);if(o){var c=vt(a,dt.getCompare());return new gt(u,kt(n),new _t({".priority":c},{".priority":dt}))}return new gt(u,kt(n),_t.Default)}!function(e){it=e}(kt);
/**
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
 */
var bt=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this)).indexPath_=e,(0,_.assert)(!Me(e)&&".priority"!==Se(e),"Can't create PathIndex with empty path or .priority key"),i}return t(u)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?B(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=kt(e),r=gt.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ke(t,r)}},{key:"maxPost",value:function(){var e=gt.EMPTY_NODE.updateChild(this.indexPath_,mt);return new Ke(H,e)}},{key:"toString",value:function(){return Ae(this.indexPath_,0).join("/")}}]),r}(Ge),wt=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(){return t(s)(this,r),n.apply(this,arguments)}return t(u)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?B(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Ke.MIN}},{key:"maxPost",value:function(){return Ke.MAX}},{key:"makePost",value:function(e,t){var n=kt(e);return new Ke(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Ge),It=new wt;
/**
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
 */
/**
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
 */
function Ct(e){return{type:"value",snapshotNode:e}}function xt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Tt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Et(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
var St=function(){"use strict";function e(n){t(s)(this,e),this.index_=n}return t(u)(e,[{key:"updateChild",value:function(e,t,n,r,i,a){(0,_.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=a&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(Tt(t,o)):(0,_.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?a.trackChildChange(xt(t,n)):a.trackChildChange(Et(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}},{key:"updateFullNode",value:function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(dt,(function(e,r){t.hasChild(e)||n.trackChildChange(Tt(e,r))})),t.isLeafNode()||t.forEachChild(dt,(function(t,r){if(e.hasChild(t)){var i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Et(t,r,i))}else n.trackChildChange(xt(t,r))}))),t.withIndex(this.index_)}},{key:"updatePriority",value:function(e,t){return e.isEmpty()?gt.EMPTY_NODE:e.updatePriority(t)}},{key:"filtersNodes",value:function(){return!1}},{key:"getIndexedFilter",value:function(){return this}},{key:"getIndex",value:function(){return this.index_}}]),e}(),Pt=function(){"use strict";function e(n){t(s)(this,e),this.indexedFilter_=new St(n.getIndex()),this.index_=n.getIndex(),this.startPost_=e.getStartPost_(n),this.endPost_=e.getEndPost_(n),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}return t(u)(e,[{key:"getStartPost",value:function(){return this.startPost_}},{key:"getEndPost",value:function(){return this.endPost_}},{key:"matches",value:function(e){var t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}},{key:"updateChild",value:function(e,t,n,r,i,a){return this.matches(new Ke(t,n))||(n=gt.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,a)}},{key:"updateFullNode",value:function(e,t,n){t.isLeafNode()&&(t=gt.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(gt.EMPTY_NODE);var i=this;return t.forEachChild(dt,(function(e,t){i.matches(new Ke(e,t))||(r=r.updateImmediateChild(e,gt.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.indexedFilter_}},{key:"getIndex",value:function(){return this.index_}}],[{key:"getStartPost_",value:function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}},{key:"getEndPost_",value:function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}]),e}(),Nt=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.withinDirectionalStart=function(e){return r.reverse_?r.withinEndPost(e):r.withinStartPost(e)},this.withinDirectionalEnd=function(e){return r.reverse_?r.withinStartPost(e):r.withinEndPost(e)},this.withinStartPost=function(e){var t=r.index_.compare(r.rangedFilter_.getStartPost(),e);return r.startIsInclusive_?t<=0:t<0},this.withinEndPost=function(e){var t=r.index_.compare(e,r.rangedFilter_.getEndPost());return r.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Pt(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft(),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}return t(u)(e,[{key:"updateChild",value:function(e,t,n,r,i,a){return this.rangedFilter_.matches(new Ke(t,n))||(n=gt.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,a):this.fullLimitUpdateChild_(e,t,n,i,a)}},{key:"updateFullNode",value:function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=gt.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){var i;r=gt.EMPTY_NODE.withIndex(this.index_),i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var a=0;i.hasNext()&&a<this.limit_;){var o=i.getNext();if(this.withinDirectionalStart(o)){if(!this.withinDirectionalEnd(o))break;r=r.updateImmediateChild(o.name,o.node),a++}}}else{var s;r=(r=t.withIndex(this.index_)).updatePriority(gt.EMPTY_NODE),s=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);for(var u=0;s.hasNext();){var c=s.getNext();u<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?u++:r=r.updateImmediateChild(c.name,gt.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.rangedFilter_.getIndexedFilter()}},{key:"getIndex",value:function(){return this.index_}},{key:"fullLimitUpdateChild_",value:function(e,t,n,r,i){var a;if(this.reverse_){var o=this.index_.getCompare();a=function(e,t){return o(t,e)}}else a=this.index_.getCompare();var s=e;(0,_.assert)(s.numChildren()===this.limit_,"");var u=new Ke(t,n),c=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(u);if(s.hasChild(t)){for(var h=s.getImmediateChild(t),d=r.getChildAfterChild(this.index_,c,this.reverse_);null!=d&&(d.name===t||s.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);var f=null==d?1:a(d,u);if(l&&!n.isEmpty()&&f>=0)return null!=i&&i.trackChildChange(Et(t,n,h)),s.updateImmediateChild(t,n);null!=i&&i.trackChildChange(Tt(t,h));var p=s.updateImmediateChild(t,gt.EMPTY_NODE);return null!=d&&this.rangedFilter_.matches(d)?(null!=i&&i.trackChildChange(xt(d.name,d.node)),p.updateImmediateChild(d.name,d.node)):p}return n.isEmpty()?e:l&&a(c,u)>=0?(null!=i&&(i.trackChildChange(Tt(c.name,c.node)),i.trackChildChange(xt(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(c.name,gt.EMPTY_NODE)):e}}]),e}(),Rt=function(){"use strict";function e(){t(s)(this,e),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=dt}return t(u)(e,[{key:"hasStart",value:function(){return this.startSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return(0,_.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return(0,_.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:V}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return(0,_.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return(0,_.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:H}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return(0,_.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===dt}},{key:"copy",value:function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}]),e}();
/**
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
 */function At(e){var t,n={};if(e.isDefault())return n;if(e.index_===dt?t="$priority":e.index_===It?t="$value":e.index_===Je?t="$key":((0,_.assert)(e.index_ instanceof bt,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=(0,_.stringify)(t),e.startSet_){var r=e.startAfterSet_?"startAfter":"startAt";n[r]=(0,_.stringify)(e.indexStartValue_),e.startNameSet_&&(n[r]+=","+(0,_.stringify)(e.indexStartName_))}if(e.endSet_){var i=e.endBeforeSet_?"endBefore":"endAt";n[i]=(0,_.stringify)(e.indexEndValue_),e.endNameSet_&&(n[i]+=","+(0,_.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function Ot(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==dt&&(t.i=e.index_.toString()),t}
/**
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
 */var Dt=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(e,i,a,o){var u;return t(s)(this,r),(u=n.call(this)).repoInfo_=e,u.onDataUpdate_=i,u.authTokenProvider_=a,u.appCheckTokenProvider_=o,u.log_=F("p:rest:"),u.listens_={},u}return t(u)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=At(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),(0,_.safeGet)(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=At(e._queryParams),r=e._path.toString(),i=new(0,_.Deferred);return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=t(l)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var h=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+e+"?ns="+i.repoInfo_.namespace+(0,_.querystring)(n);i.log_("Sending REST request for "+h);var d=new XMLHttpRequest;d.onreadystatechange=function(){if(r&&4===d.readyState){c.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);var e=null;if(d.status>=200&&d.status<300){try{e=(0,_.jsonEval)(d.responseText)}catch(e){j("Failed to parse JSON response for "+h+": "+d.responseText)}r(null,e)}else 401!==d.status&&404!==d.status&&j("Got unsuccessful REST response for "+h+" Status: "+d.status),r(d.status);r=null}},d.open("GET",h,!0),d.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:((0,_.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(Ie),Mt=function(){"use strict";function e(){t(s)(this,e),this.rootNode_=gt.EMPTY_NODE}return t(u)(e,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),e}();
/**
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
 */
/**
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
 */
function Lt(){return{value:null,children:new Map}}function Ft(e,t,n){if(Me(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Se(t);e.children.has(r)||e.children.set(r,Lt()),Ft(e.children.get(r),t=Ne(t),n)}}function Ut(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
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
 */(e,(function(e,r){Ut(r,new Te(t.toString()+"/"+e),n)}))}var qt,jt,Wt=function(){"use strict";function e(n){t(s)(this,e),this.collection_=n,this.last_=null}return t(u)(e,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&J(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),e}(),Vt=function(){"use strict";function e(n,r){t(s)(this,e),this.server_=r,this.statsToReport_={},this.statsListener_=new Wt(n);var i=1e4+2e4*Math.random();ee(this.reportStats_.bind(this),Math.floor(i))}return t(u)(e,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;J(t,(function(t,i){i>0&&(0,_.contains)(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),ee(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),e}();
/**
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
 */function Ht(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(jt=qt||(qt={}))[jt.OVERWRITE=0]="OVERWRITE",jt[jt.MERGE=1]="MERGE",jt[jt.ACK_USER_WRITE=2]="ACK_USER_WRITE",jt[jt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Bt,zt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.path=n,this.affectedTree=r,this.revert=i,this.type=qt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return t(u)(e,[{key:"operationForChild",value:function(t){if(Me(this.path)){if(null!=this.affectedTree.value)return(0,_.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Te(t));return new e(Ee(),n,this.revert)}return(0,_.assert)(Se(this.path)===t,"operationForChild called for unrelated child."),new e(Ne(this.path),this.affectedTree,this.revert)}}]),e}(),Kt=function(){"use strict";function e(n,r){t(s)(this,e),this.source=n,this.path=r,this.type=qt.LISTEN_COMPLETE}return t(u)(e,[{key:"operationForChild",value:function(t){return Me(this.path)?new e(this.source,Ee()):new e(this.source,Ne(this.path))}}]),e}(),Gt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.source=n,this.path=r,this.snap=i,this.type=qt.OVERWRITE}return t(u)(e,[{key:"operationForChild",value:function(t){return Me(this.path)?new e(this.source,Ee(),this.snap.getImmediateChild(t)):new e(this.source,Ne(this.path),this.snap)}}]),e}(),Yt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.source=n,this.path=r,this.children=i,this.type=qt.MERGE}return t(u)(e,[{key:"operationForChild",value:function(t){if(Me(this.path)){var n=this.children.subtree(new Te(t));return n.isEmpty()?null:n.value?new Gt(this.source,Ee(),n.value):new e(this.source,Ee(),n)}return(0,_.assert)(Se(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,Ne(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),e}(),Jt=function(){"use strict";function e(n,r,i){t(s)(this,e),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return t(u)(e,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(Me(e))return this.isFullyInitialized()&&!this.filtered_;var t=Se(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),e}(),Qt=function e(n){"use strict";t(s)(this,e),this.query_=n,this.index_=this.query_._queryParams.getIndex()};
/**
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
 */function Xt(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw(0,_.assertionError)("Should only compare child_ events.");var r=new Ke(t.childName,t.snapshotNode),i=new Ke(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function $t(e,t){return{eventCache:e,serverCache:t}}function Zt(e,t,n,r){return $t(new Jt(t,n,r),e.serverCache)}function en(e,t,n,r){return $t(e.eventCache,new Jt(t,n,r))}function tn(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function nn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */var rn=function(){return Bt||(Bt=new et(z)),Bt},an=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rn();t(s)(this,e),this.value=n,this.children=r}return t(u)(e,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Ee(),value:this.value};if(Me(e))return null;var n=Se(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(Ne(e),t);return null!=i?{path:De(new Te(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(t){if(Me(t))return this;var n=Se(t),r=this.children.get(n);return null!==r?r.subtree(Ne(t)):new e(null)}},{key:"set",value:function(t,n){if(Me(t))return new e(n,this.children);var r=Se(t),i=(this.children.get(r)||new e(null)).set(Ne(t),n),a=this.children.insert(r,i);return new e(this.value,a)}},{key:"remove",value:function(t){if(Me(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=Se(t),r=this.children.get(n);if(r){var i,a=r.remove(Ne(t));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new e(null):new e(this.value,i)}return this}},{key:"get",value:function(e){if(Me(e))return this.value;var t=Se(e),n=this.children.get(t);return n?n.get(Ne(e)):null}},{key:"setTree",value:function(t,n){if(Me(t))return n;var r,i=Se(t),a=(this.children.get(i)||new e(null)).setTree(Ne(t),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new e(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Ee(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(De(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Ee(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(Me(e))return null;var i=Se(e),a=this.children.get(i);return a?a.findOnPath_(Ne(e),De(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Ee(),t)}},{key:"foreachOnPath_",value:function(t,n,r){if(Me(t))return this;this.value&&r(n,this.value);var i=Se(t),a=this.children.get(i);return a?a.foreachOnPath_(Ne(t),De(n,i),r):new e(null)}},{key:"foreach",value:function(e){this.foreach_(Ee(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(De(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(t){var n=new e(null);return J(t,(function(e,t){n=n.set(new Te(e),t)})),n}}]),e}(),on=function(){"use strict";function e(n){t(s)(this,e),this.writeTree_=n}return t(u)(e,null,[{key:"empty",value:function(){return new e(new an(null))}}]),e}();function sn(e,t,n){if(Me(t))return new on(new an(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=Le(i,t);return a=a.updateChild(o,n),new on(e.writeTree_.set(i,a))}var s=new an(n),u=e.writeTree_.setTree(t,s);return new on(u)}function un(e,t,n){var r=e;return J(n,(function(e,n){r=sn(r,De(t,e),n)})),r}function cn(e,t){if(Me(t))return on.empty();var n=e.writeTree_.setTree(t,new an(null));return new on(n)}function ln(e,t){return null!=hn(e,t)}function hn(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Le(n.path,t)):null}function dn(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(dt,(function(e,n){t.push(new Ke(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Ke(e,n.value))})),t}function fn(e,t){if(Me(t))return e;var n=hn(e,t);return new on(null!=n?new an(n):e.writeTree_.subtree(t))}function pn(e){return e.writeTree_.isEmpty()}function vn(e,t){return yn(Ee(),e.writeTree_,t)}function yn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?((0,_.assert)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=yn(De(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(De(e,".priority"),r)),n}
/**
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
 */function _n(e,t){return Rn(t,e)}function gn(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function mn(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));(0,_.assert)(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&kn(s,r.path)?i=!1:Ue(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=wn(e.allWrites,bn,Ee()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=cn(e.visibleWrites,r.path):J(r.children,(function(t){e.visibleWrites=cn(e.visibleWrites,De(r.path,t))}));return!0}return!1}function kn(e,t){if(e.snap)return Ue(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Ue(De(e.path,n),t))return!0;return!1}function bn(e){return e.visible}function wn(e,t,n){for(var r=on.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)Ue(n,o)?r=sn(r,s=Le(n,o),a.snap):Ue(o,n)&&(s=Le(o,n),r=sn(r,Ee(),a.snap.getChild(s)));else{if(!a.children)throw(0,_.assertionError)("WriteRecord should have .snap or .children");if(Ue(n,o))r=un(r,s=Le(n,o),a.children);else if(Ue(o,n))if(Me(s=Le(o,n)))r=un(r,Ee(),a.children);else{var u=(0,_.safeGet)(a.children,Se(s));if(u){var c=u.getChild(Ne(s));r=sn(r,Ee(),c)}}}}}return r}function In(e,t,n,r,i){if(r||i){var a=fn(e.visibleWrites,t);if(!i&&pn(a))return n;if(i||null!=n||ln(a,Ee())){return vn(wn(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ue(e.path,t)||Ue(t,e.path))}),t),n||gt.EMPTY_NODE)}return null}var o=hn(e.visibleWrites,t);if(null!=o)return o;var s=fn(e.visibleWrites,t);return pn(s)?n:null!=n||ln(s,Ee())?vn(s,n||gt.EMPTY_NODE):null}function Cn(e,t,n,r){return In(e.writeTree,e.treePath,t,n,r)}function xn(e,t){return function(e,t,n){var r=gt.EMPTY_NODE,i=hn(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(dt,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=fn(e.visibleWrites,t);return n.forEachChild(dt,(function(e,t){var n=vn(fn(a,new Te(e)),t);r=r.updateImmediateChild(e,n)})),dn(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return dn(fn(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Tn(e,t,n,r){return function(e,t,n,r,i){(0,_.assert)(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=De(t,n);if(ln(e.visibleWrites,a))return null;var o=fn(e.visibleWrites,a);return pn(o)?i.getChild(n):vn(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function En(e,t){return function(e,t){return hn(e.visibleWrites,t)}(e.writeTree,De(e.treePath,t))}function Sn(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=fn(e.visibleWrites,t),c=hn(u,Ee());if(null!=c)s=c;else{if(null==n)return[];s=vn(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),d=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),f=d.getNext();f&&l.length<i;)0!==h(f,r)&&l.push(f),f=d.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function Pn(e,t,n){return function(e,t,n,r){var i=De(t,n),a=hn(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?vn(fn(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Nn(e,t){return Rn(De(e.treePath,t),e.writeTree)}function Rn(e,t){return{treePath:e,writeTree:t}}
/**
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
 */var An=function(){"use strict";function e(){t(s)(this,e),this.changeMap=new Map}return t(u)(e,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;(0,_.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,_.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Et(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Tt(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,xt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,_.assertionError)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Et(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),e}(),On=new(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),e}()),Dn=function(){"use strict";function e(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t(s)(this,e),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return t(u)(e,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pn(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:nn(this.viewCache_),i=Sn(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),e}();
/**
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
 */function Mn(e,t,n,r,i){var a,o,s=new An;if(n.type===qt.OVERWRITE){var u=n;u.source.fromUser?a=Un(e,t,u.path,u.snap,r,i,s):((0,_.assert)(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!Me(u.path),a=Fn(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===qt.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=De(n,r);qn(t,Se(c))&&(s=Un(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=De(n,r);qn(t,Se(c))||(s=Un(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):((0,_.assert)(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=Wn(e,t,c.path,c.children,r,i,o,s))}else if(n.type===qt.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=En(r,n))return t;var s,u=new Dn(r,t,i),c=t.eventCache.getNode();if(Me(n)||".priority"===Se(n)){var l;if(t.serverCache.isFullyInitialized())l=Cn(r,nn(t));else{var h=t.serverCache.getNode();(0,_.assert)(h instanceof gt,"serverChildren would be complete if leaf node"),l=xn(r,h)}s=e.filter.updateFullNode(c,l,a)}else{var d=Se(n),f=Pn(r,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),(s=null!=f?e.filter.updateChild(c,d,f,Ne(n),u,a):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(c,d,gt.EMPTY_NODE,Ne(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Cn(r,nn(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=En(r,Ee()),Zt(t,s,o,e.filter.filtersNodes())}
/**
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=En(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(Me(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Fn(e,t,n,u.getNode().getChild(n),i,a,s,o);if(Me(n)){var c=new an(null);return u.getNode().forEachChild(Je,(function(e,t){c=c.set(new Te(e),t)})),Wn(e,t,n,c,i,a,s,o)}return t}var l=new an(null);return r.foreach((function(e,t){var r=De(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Wn(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==qt.LISTEN_COMPLETE)throw(0,_.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=en(t,a.getNode(),a.isFullyInitialized()||Me(n),a.isFiltered());return Ln(e,o,n,r,On,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=tn(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(Ct(tn(t)))}}(t,a,h),{viewCache:a,changes:h}}function Ln(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=En(r,n))return t;if(Me(n))if((0,_.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=nn(t),l=xn(r,c instanceof gt?c:gt.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var h=Cn(r,nn(t));o=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var d=Se(n);if(".priority"===d){(0,_.assert)(1===Pe(n),"Can't have a priority with additional path components");var f=u.getNode(),p=Tn(r,n,f,s=t.serverCache.getNode());o=null!=p?e.filter.updatePriority(f,p):u.getNode()}else{var v,y=Ne(n);if(u.isCompleteForChild(d)){s=t.serverCache.getNode();var g=Tn(r,n,u.getNode(),s);v=null!=g?u.getNode().getImmediateChild(d).updateChild(y,g):u.getNode().getImmediateChild(d)}else v=Pn(r,d,t.serverCache);o=null!=v?e.filter.updateChild(u.getNode(),d,v,y,i,a):u.getNode()}}return Zt(t,o,u.isFullyInitialized()||Me(n),e.filter.filtersNodes())}function Fn(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(Me(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var d=Se(n);if(!c.isCompleteForPath(n)&&Pe(n)>1)return t;var f=Ne(n),p=c.getNode().getImmediateChild(d).updateChild(f,r);u=".priority"===d?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),d,p,f,On,null)}var v=en(t,u,c.isFullyInitialized()||Me(n),l.filtersNodes());return Ln(e,v,n,i,new Dn(i,v,a),s)}function Un(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new Dn(i,t,a);if(Me(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=Zt(t,u,!0,e.filter.filtersNodes());else{var h=Se(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Zt(t,u,c.isFullyInitialized(),c.isFiltered());else{var d,f=Ne(n),p=c.getNode().getImmediateChild(h);if(Me(f))d=r;else{var v=l.getCompleteChild(h);d=null!=v?".priority"===Re(f)&&v.getChild(Oe(f)).isEmpty()?v:v.updateChild(f,r):gt.EMPTY_NODE}if(p.equals(d))s=t;else s=Zt(t,e.filter.updateChild(c.getNode(),h,d,f,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function qn(e,t){return e.eventCache.isCompleteForChild(t)}function jn(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Wn(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=Me(n)?r:new an(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=jn(0,t.serverCache.getNode().getImmediateChild(n),r);c=Fn(e,c,new Te(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=jn(0,t.serverCache.getNode().getImmediateChild(n),r);c=Fn(e,c,new Te(n),h,i,a,o,s)}})),c}var Vn,Hn=function(){"use strict";function e(n,r){t(s)(this,e),this.query_=n,this.eventRegistrations_=[];var i,a=this.query_._queryParams,o=new St(a.getIndex()),u=(i=a).loadsAllData()?new St(i.getIndex()):i.hasLimit()?new Nt(i):new Pt(i);this.processor_=
/**
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
 */
function(e){return{filter:e}}(u);var c=r.serverCache,l=r.eventCache,h=o.updateFullNode(gt.EMPTY_NODE,c.getNode(),null),d=u.updateFullNode(gt.EMPTY_NODE,l.getNode(),null),f=new Jt(h,c.isFullyInitialized(),o.filtersNodes()),p=new Jt(d,l.isFullyInitialized(),u.filtersNodes());this.viewCache_=$t(p,f),this.eventGenerator_=new Qt(this.query_)}return t(u)(e,[{key:"query",get:function(){return this.query_}}]),e}();function Bn(e,t){var n=nn(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Me(t)&&!n.getImmediateChild(Se(t)).isEmpty())?n.getChild(t):null}function zn(e){return 0===e.eventRegistrations_.length}function Kn(e,t,n){var r=[];if(n){(0,_.assert)(null==t,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){for(var a=[],o=0;o<e.eventRegistrations_.length;++o){var s=e.eventRegistrations_[o];if(s.matches(t)){if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(o+1));break}}else a.push(s)}e.eventRegistrations_=a}else e.eventRegistrations_=[];return r}function Gn(e,t,n,r){t.type===qt.MERGE&&null!==t.source.queryId&&((0,_.assert)(nn(e.viewCache_),"We should always have a full cache before handling merges"),(0,_.assert)(tn(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=Mn(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,(0,_.assert)(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),(0,_.assert)(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),(0,_.assert)(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Yn(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Yn(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Xt(e,i,"child_removed",t,r,n),Xt(e,i,"child_added",t,r,n),Xt(e,i,"child_moved",a,r,n),Xt(e,i,"child_changed",t,r,n),Xt(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
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
 */var Jn,Qn=function e(){"use strict";t(s)(this,e),this.views=new Map};function Xn(e){return 0===e.views.size}function $n(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return(0,_.assert)(null!=a,"SyncTree gave us an op for an invalid query."),Gn(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;o=o.concat(Gn(d,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return o}function Zn(e,t,n,r,i){var a=t._queryIdentifier,o=e.views.get(a);if(!o){var s=Cn(n,i?r:null),u=!1;s?u=!0:r instanceof gt?(s=xn(n,r),u=!1):(s=gt.EMPTY_NODE,u=!1);var c=$t(new Jt(s,u,!1),new Jt(r,i,!1));return new Hn(t,c)}return o}function er(e,t,n,r,i,a){var o=Zn(e,t,r,i,a);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){var n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(dt,(function(e,t){r.push(xt(e,t))})),n.isFullyInitialized()&&r.push(Ct(n.getNode())),Yn(e,r,n.getNode(),t)}(o,n)}function tr(e,n,r,i){var a=n._queryIdentifier,o=[],s=[],u=or(e),c=!0,h=!1,d=void 0;if("default"===a)try{for(var f,p=e.views.entries()[Symbol.iterator]();!(c=(f=p.next()).done);c=!0){var v=t(l)(f.value,2),y=v[0],g=v[1];s=s.concat(Kn(g,r,i)),zn(g)&&(e.views.delete(y),g.query._queryParams.loadsAllData()||o.push(g.query))}}catch(e){h=!0,d=e}finally{try{c||null==p.return||p.return()}finally{if(h)throw d}}else{var m=e.views.get(a);m&&(s=s.concat(Kn(m,r,i)),zn(m)&&(e.views.delete(a),m.query._queryParams.loadsAllData()||o.push(m.query)))}return u&&!or(e)&&o.push(new((0,_.assert)(Vn,"Reference.ts has not been loaded"),Vn)(n._repo,n._path)),{removed:o,events:s}}function nr(e){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.views.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.query._queryParams.loadsAllData()||t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}function rr(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||Bn(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}function ir(e,t){if(t._queryParams.loadsAllData())return sr(e);var n=t._queryIdentifier;return e.views.get(n)}function ar(e,t){return null!=ir(e,t)}function or(e){return null!=sr(e)}function sr(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.views.values()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
/**
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
 */var ur=1,cr=function e(n){"use strict";t(s)(this,e),this.listenProvider_=n,this.syncPointTree_=new an(null),this.pendingWriteTree_={visibleWrites:on.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function lr(e,t,n,r,i){return function(e,t,n,r,i){(0,_.assert)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=sn(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?gr(e,new Gt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function hr(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=gn(e.pendingWriteTree_,t),i=mn(e.pendingWriteTree_,t);if(i){var a=new an(null);return null!=r.snap?a=a.set(Ee(),!0):J(r.children,(function(e){a=a.set(new Te(e),!0)})),gr(e,new zt(r.path,a,n))}return[]}function dr(e,t,n){return gr(e,new Gt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function fr(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t._path,o=e.syncPointTree_.get(a),s=[];if(o&&("default"===t._queryIdentifier||ar(o,t))){var u=tr(o,t,n,r);Xn(o)&&(e.syncPointTree_=e.syncPointTree_.remove(a));var c=u.removed;if(s=u.events,!i){var l=-1!==c.findIndex((function(e){return e._queryParams.loadsAllData()})),h=e.syncPointTree_.findOnPath(a,(function(e,t){return or(t)}));if(l&&!h){var d=e.syncPointTree_.subtree(a);if(!d.isEmpty())for(var f=Er(d),p=0;p<f.length;++p){var v=f[p],y=v.query,_=br(e,v);e.listenProvider_.startListening(Sr(y),wr(e,y),_.hashFn,_.onComplete)}}if(!h&&c.length>0&&!r)if(l){var g=null;e.listenProvider_.stopListening(Sr(t),g)}else c.forEach((function(t){var n=e.queryToTagMap.get(Ir(t));e.listenProvider_.stopListening(Sr(t),n)}))}Pr(e,c)}return s}function pr(e,t,n,r){var i=Cr(e,r);if(null!=i){var a=xr(i),o=a.path,s=a.queryId,u=Le(o,t);return Tr(e,o,new Gt(Ht(s),u,n))}return[]}function vr(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t._path,a=null,o=!1;e.syncPointTree_.foreachOnPath(i,(function(e,t){var n=Le(e,i);a=a||rr(t,n),o=o||or(t)}));var s,u=e.syncPointTree_.get(i);if(u?(o=o||or(u),a=a||rr(u,Ee())):(u=new Qn,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=a)s=!0;else{s=!1,a=gt.EMPTY_NODE;var c=e.syncPointTree_.subtree(i);c.foreachChild((function(e,t){var n=rr(t,Ee());n&&(a=a.updateImmediateChild(e,n))}))}var l=ar(u,t);if(!l&&!t._queryParams.loadsAllData()){var h=Ir(t);(0,_.assert)(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");var d=Nr();e.queryToTagMap.set(h,d),e.tagToQueryMap.set(d,h)}var f=_n(e.pendingWriteTree_,i),p=er(u,t,n,f,a,s);if(!l&&!o&&!r){var v=ir(u,t);p=p.concat(Rr(e,t,v))}return p}function yr(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=rr(n,Le(e,t));if(r)return r}));return In(r,t,i,n,!0)}function _r(e,t){var n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,(function(e,t){var i=Le(e,n);r=r||rr(t,i)}));var i=e.syncPointTree_.get(n);i?r=r||rr(i,Ee()):(i=new Qn,e.syncPointTree_=e.syncPointTree_.set(n,i));var a=null!=r,o=a?new Jt(r,!0,!1):null;return function(e){return tn(e.viewCache_)}(Zn(i,t,_n(e.pendingWriteTree_,t._path),a?o.getNode():gt.EMPTY_NODE,a))}function gr(e,t){return mr(t,e.syncPointTree_,null,_n(e.pendingWriteTree_,Ee()))}function mr(e,t,n,r){if(Me(e.path))return kr(e,t,n,r);var i=t.get(Ee());null==n&&null!=i&&(n=rr(i,Ee()));var a=[],o=Se(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=Nn(r,o);a=a.concat(mr(s,u,c,l))}return i&&(a=a.concat($n(i,e,r,n))),a}function kr(e,t,n,r){var i=t.get(Ee());null==n&&null!=i&&(n=rr(i,Ee()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=Nn(r,t),u=e.operationForChild(t);u&&(a=a.concat(kr(u,i,o,s)))})),i&&(a=a.concat($n(i,e,r,n))),a}function br(e,t){var n=t.query,r=wr(e,n);return{hashFn:function(){var e=function(e){return e.viewCache_.serverCache.getNode()}(t)||gt.EMPTY_NODE;return e.hash()},onComplete:function(t){if("ok"===t)return r?function(e,t,n){var r=Cr(e,n);if(r){var i=xr(r),a=i.path,o=i.queryId,s=Le(a,t);return Tr(e,a,new Kt(Ht(o),s))}return[]}(e,n._path,r):function(e,t){return gr(e,new Kt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);var i=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return fr(e,n,null,i)}}}function wr(e,t){var n=Ir(t);return e.queryToTagMap.get(n)}function Ir(e){return e._path.toString()+"$"+e._queryIdentifier}function Cr(e,t){return e.tagToQueryMap.get(t)}function xr(e){var t=e.indexOf("$");return(0,_.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Te(e.substr(0,t))}}function Tr(e,t,n){var r=e.syncPointTree_.get(t);return(0,_.assert)(r,"Missing sync point for query tag that we're tracking"),$n(r,n,_n(e.pendingWriteTree_,t),null)}function Er(e){return e.fold((function(e,t,n){if(t&&or(t))return[sr(t)];var r=[];return t&&(r=nr(t)),J(n,(function(e,t){r=r.concat(t)})),r}))}function Sr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,_.assert)(Jn,"Reference.ts has not been loaded"),Jn)(e._repo,e._path):e}function Pr(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=Ir(r),a=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(a)}}}function Nr(){return ur++}function Rr(e,t,n){var r=t._path,i=wr(e,t),a=br(e,n),o=e.listenProvider_.startListening(Sr(t),i,a.hashFn,a.onComplete),s=e.syncPointTree_.subtree(r);if(i)(0,_.assert)(!or(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold((function(e,t,n){if(!Me(e)&&t&&or(t))return[sr(t).query];var r=[];return t&&(r=r.concat(nr(t).map((function(e){return e.query})))),J(n,(function(e,t){r=r.concat(t)})),r})),c=0;c<u.length;++c){var l=u[c];e.listenProvider_.stopListening(Sr(l),wr(e,l))}return o}
/**
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
 */var Ar=function(){"use strict";function e(n){t(s)(this,e),this.node_=n}return t(u)(e,[{key:"getImmediateChild",value:function(t){return new e(this.node_.getImmediateChild(t))}},{key:"node",value:function(){return this.node_}}]),e}(),Or=function(){"use strict";function e(n,r){t(s)(this,e),this.syncTree_=n,this.path_=r}return t(u)(e,[{key:"getImmediateChild",value:function(t){var n=De(this.path_,t);return new e(this.syncTree_,n)}},{key:"node",value:function(){return yr(this.syncTree_,this.path_)}}]),e}(),Dr=function(e,t,n){return e&&"object"==typeof e?((0,_.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Mr(e[".sv"],t,n):"object"==typeof e[".sv"]?Lr(e[".sv"],t):void(0,_.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Mr=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,_.assert)(!1,"Unexpected server value: "+e)},Lr=function(e,t,n){e.hasOwnProperty("increment")||(0,_.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&(0,_.assert)(!1,"Unexpected increment value: "+r);var i=t.node();if((0,_.assert)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},Fr=function(e,t,n,r){return qr(t,new Or(n,e),r)},Ur=function(e,t,n){return qr(e,new Ar(t),n)};function qr(e,t,n){var r,i=e.getPriority().val(),a=Dr(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=Dr(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new ut(s,kt(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new ut(a))),u.forEachChild(dt,(function(e,i){var a=qr(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
/**
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
 */var jr=function e(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};t(s)(this,e),this.name=n,this.parent=r,this.node=i};function Wr(e,t){for(var n=t instanceof Te?t:new Te(t),r=e,i=Se(n);null!==i;){var a=(0,_.safeGet)(r.node.children,i)||{children:{},childCount:0};r=new jr(i,r,a),i=Se(n=Ne(n))}return r}function Vr(e){return e.node.value}function Hr(e,t){e.node.value=t,Yr(e)}function Br(e){return e.node.childCount>0}function zr(e,t){J(e.node.children,(function(n,r){t(new jr(n,e,r))}))}function Kr(e,t,n,r){n&&!r&&t(e),zr(e,(function(e){Kr(e,t,!0,r)})),n&&r&&t(e)}function Gr(e){return new Te(null===e.parent?e.name:Gr(e.parent)+"/"+e.name)}function Yr(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Vr(e)&&!Br(e)}(n),i=(0,_.contains)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Yr(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Yr(e))}
/**
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
 */(e.parent,e.name,e)}var Jr=/[\[\].#$\/\u0000-\u001F\u007F]/,Qr=/[\[\].#$\u0000-\u001F\u007F]/,Xr=10485760,$r=function(e){return"string"==typeof e&&0!==e.length&&!Jr.test(e)},Zr=function(e){return"string"==typeof e&&0!==e.length&&!Qr.test(e)},ei=function(e,t,n,r){r&&void 0===t||ti((0,_.errorPrefix)(e,"value"),t,n)},ti=function(e,t,n){var r=n instanceof Te?new qe(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+We(r));if("function"==typeof t)throw new Error(e+"contains a function "+We(r)+" with contents = "+t.toString());if(W(t))throw new Error(e+"contains "+t.toString()+" "+We(r));if("string"==typeof t&&t.length>3495253.3333333335&&(0,_.stringLength)(t)>Xr)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+We(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(J(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!$r(t)))throw new Error(e+" contains an invalid key ("+t+") "+We(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=(0,_.stringLength)(s),je(o),ti(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=(0,_.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+We(r)+" in addition to actual children.")}},ni=function(e,t,n,r){if(!(r&&void 0===n||Zr(n)))throw new Error((0,_.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ri=function(e,t){if(".info"===Se(t))throw new Error(e+" failed = Can't modify data under /.info/")},ii=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!$r(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Zr(e)}(n))throw new Error((0,_.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},ai=function e(){"use strict";t(s)(this,e),this.eventLists_=[],this.recursionDepth_=0};function oi(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||Fe(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function si(e,t,n){oi(e,n),ui(e,(function(e){return Ue(e,t)||Ue(t,e)}))}function ui(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(ci(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function ci(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();O&&L("event: "+n.toString()),Z(r)}}}
/**
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
 */var li="repo_interrupt",hi=function(){"use strict";function e(n,r,i,a){t(s)(this,e),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ai,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lt(),this.transactionQueueTree_=new jr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return t(u)(e,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),e}();function di(e,t,n){if(e.stats_=fe(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Dt(e.repoInfo_,(function(t,n,r,i){vi(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return yi(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,_.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Be(e.repoInfo_,t,(function(t,n,r,i){vi(e,t,n,r,i)}),(function(t){yi(e,t)}),(function(t){!function(e,t){J(t,(function(t,n){_i(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new Vt(e.stats_,e.server_)},a=r.toString(),de[a]||(de[a]=i()),de[a]),e.infoData_=new Mt,e.infoSyncTree_=new cr({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=dr(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),_i(e,"connected",!1),e.serverSyncTree_=new cr({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);si(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function fi(e){var t=e.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function pi(e){return(t=(t={timestamp:fi(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function vi(e,t,n,r,i){e.dataUpdateCount++;var a=new Te(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=(0,_.map)(n,(function(e){return kt(e)}));o=function(e,t,n,r){var i=Cr(e,r);if(i){var a=xr(i),o=a.path,s=a.queryId,u=Le(o,t),c=an.fromObject(n);return Tr(e,o,new Yt(Ht(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=kt(n);o=pr(e.serverSyncTree_,a,u,i)}else if(r){var c=(0,_.map)(n,(function(e){return kt(e)}));o=function(e,t,n){var r=an.fromObject(n);return gr(e,new Yt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=kt(n);o=dr(e.serverSyncTree_,a,l)}var h=a;o.length>0&&(h=Ti(e,a)),si(e.eventQueue_,h,o)}function yi(e,t){_i(e,"connected",t),!1===t&&function(e){bi(e,"onDisconnectEvents");var t=pi(e),n=Lt();Ut(e.onDisconnect_,Ee(),(function(r,i){var a=Fr(r,i,e.serverSyncTree_,t);Ft(n,r,a)}));var r=[];Ut(n,Ee(),(function(t,n){r=r.concat(dr(e.serverSyncTree_,t,n));var i=Ri(e,t);Ti(e,i)})),e.onDisconnect_=Lt(),si(e.eventQueue_,Ee(),r)}(e)}function _i(e,t,n){var r=new Te("/.info/"+t),i=kt(n);e.infoData_.updateSnapshot(r,i);var a=dr(e.infoSyncTree_,r,i);si(e.eventQueue_,r,a)}function gi(e){return e.nextWriteId_++}function mi(e,t,n,r,i){bi(e,"set",{path:t.toString(),value:n,priority:r});var a=pi(e),o=kt(n,r),s=yr(e.serverSyncTree_,t),u=Ur(o,s,a),c=gi(e),l=lr(e.serverSyncTree_,t,u,c,!0);oi(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),(function(n,r){var a="ok"===n;a||j("set at "+t+" failed: "+n);var o=hr(e.serverSyncTree_,c,!a);si(e.eventQueue_,t,o),wi(e,i,n,r)}));var h=Ri(e,t);Ti(e,h),si(e.eventQueue_,h,[])}function ki(e){e.persistentConnection_&&e.persistentConnection_.interrupt(li)}function bi(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";e.persistentConnection_&&(a=e.persistentConnection_.id+":"),L.apply(void 0,[a].concat(t(h)(r)))}function wi(e,t,n,r){t&&Z((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var a=new Error(i);a.code=e,t(a)}}))}function Ii(e,t,n){return yr(e.serverSyncTree_,t,n)||gt.EMPTY_NODE}function Ci(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Ni(e,t),Vr(t)){var n=Si(e,t);(0,_.assert)(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&xi(e,Gr(t),n)}else Br(t)&&zr(t,(function(t){Ci(e,t)}))}function xi(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=Ii(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];(0,_.assert)(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=Le(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){bi(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(hr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);Ni(e,Wr(e.transactionQueueTree_,t)),Ci(e,e.transactionQueueTree_),si(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)Z(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{j("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Ti(e,t)}}),o)}function Ti(e,t){var n=Ei(e,t),r=Gr(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=Le(n,u.path),l=!1,h=void 0;if((0,_.assert)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,a=a.concat(hr(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",a=a.concat(hr(e.serverSyncTree_,u.currentWriteId,!0));else{var d=Ii(e,u.path,o);u.currentInputSnapshot=d;var f=t[r].update(d.val());if(void 0!==f){ti("transaction failed: Data returned ",f,u.path);var p=kt(f);"object"==typeof f&&null!=f&&(0,_.contains)(f,".priority")||(p=p.updatePriority(d.getPriority()));var v=u.currentWriteId,y=pi(e),g=Ur(p,d,y);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=g,u.currentWriteId=gi(e),o.splice(o.indexOf(v),1),a=(a=a.concat(lr(e.serverSyncTree_,u.path,g,u.currentWriteId,u.applyLocally))).concat(hr(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",a=a.concat(hr(e.serverSyncTree_,u.currentWriteId,!0))}si(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Ni(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Z(i[u]);Ci(e,e.transactionQueueTree_)}(e,Si(e,n),r),r}function Ei(e,t){var n,r=e.transactionQueueTree_;for(n=Se(t);null!==n&&void 0===Vr(r);)r=Wr(r,n),n=Se(t=Ne(t));return r}function Si(e,t){var n=[];return Pi(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Pi(e,t,n){var r=Vr(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);zr(t,(function(t){Pi(e,t,n)}))}function Ni(e,t){var n=Vr(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Hr(t,n.length>0?n:void 0)}zr(t,(function(t){Ni(e,t)}))}function Ri(e,t){var n=Gr(Ei(e,t)),r=Wr(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Ai(e,t)})),Ai(e,r),Kr(r,(function(t){Ai(e,t)})),n}function Ai(e,t){var n=Vr(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?((0,_.assert)(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):((0,_.assert)(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hr(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Hr(t,void 0):n.length=a+1,si(e.eventQueue_,Gr(t),i);for(var s=0;s<r.length;s++)Z(r[s])}}
/**
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
 */var Oi,Di,Mi=function(e,t){var n=Li(e),r=n.namespace;"firebase.com"===n.domain&&q(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||q("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&j("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Te(n.pathString)}},Li=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var d=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):j("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),a=r}"ns"in d&&(a=d.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Fi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ui=(Oi=0,Di=[],function(e){var t,n=e===Oi;Oi=e;var r=new Array(8);for(t=7;t>=0;t--)r[t]=Fi.charAt(e%64),e=Math.floor(e/64);(0,_.assert)(0===e,"Cannot push at time == 0");var i=r.join("");if(n){for(t=11;t>=0&&63===Di[t];t--)Di[t]=0;Di[t]++}else for(t=0;t<12;t++)Di[t]=Math.floor(64*Math.random());for(t=0;t<12;t++)i+=Fi.charAt(Di[t]);return(0,_.assert)(20===i.length,"nextPushId: Length should be 20."),i}),qi=function(){"use strict";function e(n,r,i,a){t(s)(this,e),this.eventType=n,this.eventRegistration=r,this.snapshot=i,this.prevName=a}return t(u)(e,[{key:"getPath",value:function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}},{key:"getEventType",value:function(){return this.eventType}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.getPath().toString()+":"+this.eventType+":"+(0,_.stringify)(this.snapshot.exportVal())}}]),e}(),ji=function(){"use strict";function e(n,r,i){t(s)(this,e),this.eventRegistration=n,this.error=r,this.path=i}return t(u)(e,[{key:"getPath",value:function(){return this.path}},{key:"getEventType",value:function(){return"cancel"}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.path.toString()+":cancel"}}]),e}(),Wi=function(){"use strict";function e(n,r){t(s)(this,e),this.snapshotCallback=n,this.cancelCallback=r}return t(u)(e,[{key:"onValue",value:function(e,t){this.snapshotCallback.call(null,e,t)}},{key:"onCancel",value:function(e){return(0,_.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}},{key:"hasCancelCallback",get:function(){return!!this.cancelCallback}},{key:"matches",value:function(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}]),e}(),Vi=function(){"use strict";function e(n,r,i,a){t(s)(this,e),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return t(u)(e,[{key:"key",get:function(){return Me(this._path)?null:Re(this._path)}},{key:"ref",get:function(){return new Hi(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=Ot(this._queryParams),t=G(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return Ot(this._queryParams)}},{key:"isEqual",value:function(t){if(!((t=(0,_.getModularInstance)(t))instanceof e))return!1;var n=this._repo===t._repo,r=Fe(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),e}();var Hi=function(e){"use strict";t(c)(r,e);var n=t(f)(r);function r(e,i){return t(s)(this,r),n.call(this,e,i,new Rt,!1)}return t(u)(r,[{key:"parent",get:function(){var e=Oe(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Vi),Bi=function(){"use strict";function e(n,r,i){t(s)(this,e),this._node=n,this.ref=r,this._index=i}return t(u)(e,[{key:"priority",get:function(){return this._node.getPriority().val()}},{key:"key",get:function(){return this.ref.key}},{key:"size",get:function(){return this._node.numChildren()}},{key:"child",value:function(t){var n=new Te(t),r=Ki(this.ref,t);return new e(this._node.getChild(n),r,dt)}},{key:"exists",value:function(){return!this._node.isEmpty()}},{key:"exportVal",value:function(){return this._node.val(!0)}},{key:"forEach",value:function(t){var n=this;return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(function(r,i){return t(new e(i,Ki(n.ref,r),dt))}))}},{key:"hasChild",value:function(e){var t=new Te(e);return!this._node.getChild(t).isEmpty()}},{key:"hasChildren",value:function(){return!this._node.isLeafNode()&&!this._node.isEmpty()}},{key:"toJSON",value:function(){return this.exportVal()}},{key:"val",value:function(){return this._node.val()}}]),e}();function zi(e,t){return(e=(0,_.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?Ki(e._root,t):e._root}function Ki(e,t){var n,r,i,a;return null===Se((e=(0,_.getModularInstance)(e))._path)?(n="child",r="path",a=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),ni(n,r,i,a)):ni("child","path",t,!1),new Hi(e._repo,De(e._path,t))}function Gi(e,t){e=(0,_.getModularInstance)(e),ri("push",e._path),ei("push",t,e._path,!0);var n,r=fi(e._repo),i=Ui(r),a=Ki(e,i),o=Ki(e,i);return n=null!=t?Yi(o,t).then((function(){return o})):Promise.resolve(o),a.then=n.then.bind(n),a.catch=n.then.bind(n,void 0),a}function Yi(e,t){e=(0,_.getModularInstance)(e),ri("set",e._path),ei("set",t,e._path,!1);var n=new(0,_.Deferred);return mi(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}function Ji(e){e=(0,_.getModularInstance)(e);var t,n,r,i,a=new Wi((function(){})),o=new Qi(a);return(t=e._repo,n=e,r=o,i=_r(t.serverSyncTree_,n),null!=i?Promise.resolve(i):t.server_.get(n).then((function(e){var i,a=kt(e).withIndex(n._queryParams.getIndex());if(vr(t.serverSyncTree_,n,r,!0),n._queryParams.loadsAllData())i=dr(t.serverSyncTree_,n._path,a);else{var o=wr(t.serverSyncTree_,n);i=pr(t.serverSyncTree_,n._path,a,o)}return si(t.eventQueue_,n._path,i),fr(t.serverSyncTree_,n,r,null,!0),a}),(function(e){return bi(t,"get for query "+(0,_.stringify)(n)+" failed: "+e),Promise.reject(new Error(e))}))).then((function(t){return new Bi(t,new Hi(e._repo,e._path),e._queryParams.getIndex())}))}var Qi=function(){"use strict";function e(n){t(s)(this,e),this.callbackContext=n}return t(u)(e,[{key:"respondsTo",value:function(e){return"value"===e}},{key:"createEvent",value:function(e,t){var n=t._queryParams.getIndex();return new qi("value",this,new Bi(e.snapshotNode,new Hi(t._repo,t._path),n))}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new ji(this,e,t):null}},{key:"matches",value:function(t){return t instanceof e&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}},{key:"hasAnyCallback",value:function(){return null!==this.callbackContext}}]),e}();!function(e){(0,_.assert)(!Vn,"__referenceConstructor has already been defined"),Vn=e}(Hi),function(e){(0,_.assert)(!Jn,"__referenceConstructor has already been defined"),Jn=e}(Hi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xi={},$i=!1;function Zi(e,t,n,r){e.repoInfo_=new ue("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function ea(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||q("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),L("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=Mi(a,i),u=s.repoInfo,c=void 0;void 0!==m&&m.env&&(c=m.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Mi(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new re(re.OWNER):new ne(e.name,e.options,t);ii("Invalid Firebase Database URL",s),Me(s.path)||q("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Xi[t.name];i||(i={},Xi[t.name]=i);var a=i[e.toURLString()];a&&q("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new hi(e,$i,n,r),i[e.toURLString()]=a,a}(u,e,l,new te(e.name,n));return new ta(h,e)}var ta=function(){"use strict";function e(n,r){t(s)(this,e),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return t(u)(e,[{key:"_repo",get:function(){return this._instanceStarted||(di(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Hi(this._repo,Ee())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Xi[t])&&n[e.key]===e||q("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),ki(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&q("Cannot call "+e+" on a deleted database.")}}]),e}();function na(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,v.getApp)(),n=arguments.length>1?arguments[1]:void 0,r=(0,v._getProvider)(e,"database").getImmediate({identifier:n});if(!r._instanceStarted){var i=(0,_.getDefaultEmulatorHostnameAndPort)("database");i&&ra.apply(void 0,[r].concat(t(h)(i)))}return r}function ra(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=(0,_.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&q("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,a=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&q('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new re(re.OWNER);else if(r.mockUserToken){var o="string"==typeof r.mockUserToken?r.mockUserToken:(0,_.createMockUserToken)(r.mockUserToken,e.app.options.projectId);a=new re(o)}Zi(i,t,n,a)}Be.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Be.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var ia,aa;aa=v.SDK_VERSION,w=aa,(0,v._registerComponent)(new(0,y.Component)("database",(function(e,t){var n=t.instanceIdentifier;return ea(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),(0,v.registerVersion)(k,b,ia),(0,v.registerVersion)(k,b,"esm2017")}))}();
//# sourceMappingURL=firebase.a6ee2432.js.map
