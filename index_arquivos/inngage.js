"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//VALIDA AS INFORMAÇÕES DO USUÁRIO NO BANCO
fetch("https://api.inngage.com.br/v1/webpush/prepermissionData/?url=" + window.location.hostname + "&href=" + window.location.href + "&deviceUuid=" + localStorage.innHash + "&trigger_count=" + localStorage.trigger_count, {
  dataType: "json",
  contentType: "application/json",
  method: "GET"
}).then( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(response) {
    var innStorage, updateUser, data, inapp, _triggerCount, trigger_count, formatDate, updateCountdown, fadeOut, inappSetupButton, html, timestamp, inapp_popup, has_btn_right_txt, has_btn_left_txt, cardPositionX, cardPositionY, div, bg_img_action_link, _div, countdown_timer, countdownInterval, carousel, slides, prevButton, nextButton, slideWidth, currentSlide, inapp_btn_left, inapp_btn_right, email, applicationServerPublicKey, apiUrl, urlB64ToUint8Array, isPushAllowed, init, waitForReadyState, waitForActivation, saveEndpointToLocalStorage, checkAndSavePushEndpoint, tracker, getBrowserDetails, initForms, onSubmitForm, newCustomField, sendPush, newEvent;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          newEvent = function _newEvent(events, identifier, app_token) {
            var registration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var device_uuid = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var jsonData;
            jsonData = JSON.stringify({
              newEventRequest: {
                app_token: app_token,
                identifier: identifier,
                registration: registration || localStorage.registration,
                device_uuid: device_uuid || localStorage.innHash,
                event_name: events.event_name,
                event_values: events.event_values
              }
            });
            fetch(apiUrl + "/v1/events/newEvent/", {
              dataType: "json",
              contentType: "application/json",
              method: "POST",
              body: jsonData
            }).then( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
                var apimessage;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return response.json();
                    case 2:
                      apimessage = _context3.sent;
                      apimessage = JSON.stringify(apimessage);
                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x4) {
                return _ref6.apply(this, arguments);
              };
            }());
          };
          sendPush = function _sendPush(titulo, mensagem, appToken, one_identifier) {
            var identifier_one_time = [];
            identifier_one_time.push(one_identifier);
            var options = {
              method: "POST",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                savePushRequest: {
                  app_token: appToken,
                  identifiers: identifier_one_time,
                  channel_id: 4,
                  title: titulo,
                  body: mensagem,
                  instant_message: true,
                  url: data["var"].welcome_url !== null ? data["var"].welcome_url : data["var"].site_url
                }
              })
            };
            fetch("https://api.inngage.com.br/v3/message/", options).then(function (response) {
              return response.json();
            }).then(function (response) {
              return window.innLog("Send Welcome Message");
            })["catch"](function (err) {
              return window.innLog(err);
            });
            return true;
          };
          newCustomField = function _newCustomField(custom_field_values, identifier, email, phone) {
            var appToken = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var registration = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var device_uuid = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
            var jsonData;
            var app_token;
            localStorage.setItem("identifier", identifier);
            if (registration) {
              localStorage.setItem("registration", registration);
            }
            if (appToken || sessionStorage.app_token) {
              app_token = appToken || sessionStorage.app_token;
            }
            if (window.app_token || localStorage.app_token) {
              app_token = window.app_token || localStorage.app_token;
            }
            jsonData = JSON.stringify({
              fieldsRequest: {
                app_token: app_token,
                registration: registration || localStorage.registration,
                device_uuid: device_uuid || localStorage.innHash,
                identifier: identifier,
                email: email,
                phone: phone,
                custom_field: custom_field_values
              }
            });
            fetch(apiUrl + "/v1/subscription/addCustomField", {
              dataType: "json",
              contentType: "application/json",
              method: "POST",
              body: jsonData
            }).then( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
                var apimessage;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return response.json();
                    case 2:
                      apimessage = _context2.sent;
                      apimessage = JSON.stringify(apimessage);
                      window.innLog(apimessage);
                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x3) {
                return _ref5.apply(this, arguments);
              };
            }());
          };
          onSubmitForm = function _onSubmitForm(event) {
            event.stopImmediatePropagation();
            event.preventDefault();
            var formData = new FormData();
            var fieldTypes = ["text", "radio", "checkbox", "email", "hidden", "tel", "select", "textarea"];
            Array.from(event.target.elements).forEach(function (field) {
              var fieldName = field.getAttribute("data-inn-input-name");
              var fieldValue = field.value;
              if (field.tagName.toLowerCase() === "select" && (field.id || field.getAttribute("data-inn-input-name"))) {
                if (fieldTypes.includes(field.type)) {
                  formData.append(fieldName, fieldValue);
                }
              } else if (fieldTypes.includes(field.type)) {
                formData.append(fieldName, fieldValue);
              }
            });
            var additionalData = [["identifier", localStorage.getItem("identifier")], ["innHash", localStorage.getItem("innHash")], ["registration", localStorage.getItem("registration")], ["app_token", localStorage.getItem("app_token")], ["urlDomain", window.location.hostname], ["urlPath", window.location.pathname], ["formName", event.target.getAttribute("data-inn-form-name")], ["inn_version", sessionStorage.inn_version], ["page_url", window.location.href], ["page_name", document.title]];
            additionalData.forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];
              return formData.append(key, value);
            });
            window.innLog("Start fn formWebHook");
            fetch(apiUrl + "/v3/formWebhook/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(Object.fromEntries(formData))
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              if (data.add_subscription.success === true) {
                localStorage.setItem("identifier", data.add_subscription.identifier);
                window.innLog("set new identifier: " + data.add_subscription.identifier);
              }
            })["catch"](function (error) {
              return console.error(error);
            })["finally"](function () {
              window.innLog("Continue form fn ");
              event.target.removeEventListener("submit", onSubmitForm, true);
              event.target.dispatchEvent(new Event("submit", {
                bubbles: true,
                cancelable: true
              }));
              event.target.addEventListener("submit", onSubmitForm, true);
            });
            window.innLog("Stop fn formWebHook");
          };
          initForms = function _initForms() {
            document.querySelectorAll("form:not([data-inn-form-name])").forEach(function (form, index) {
              if (!form.hasAttribute("name") && !form.hasAttribute("id") && !form.hasAttribute("data-id")) {
                // window.innLog(`Form ${index + 1} does not have a name, id or data-id attribute.`);
                form.setAttribute("data-inn-form-name", index + 1);
              } else {
                var innName = form.getAttribute("name") ? form.getAttribute("name") : form.getAttribute("id") ? form.getAttribute("id") : form.getAttribute("data-id");
                form.setAttribute("data-inn-form-name", innName);
                form.querySelectorAll("input:not([data-inn-input-name]), select:not([data-inn-input-name])").forEach(function (input, index) {
                  var inputName = input.getAttribute("name") ? input.getAttribute("name") : "input_map_".concat(index + 1);
                  input.setAttribute("data-inn-input-name", inputName);
                });

                // Verifica se o formulário é do Contact Form 7
                // if (typeof wpcf7 !== "undefined") {
                //   document.addEventListener("wpcf7submit", onSubmitForm, true);
                // } else {
                form.addEventListener("submit", onSubmitForm, true);
                // }
              }
            });
          };
          getBrowserDetails = function _getBrowserDetails() {
            var userAgent = navigator.userAgent;
            var UNKNOWN = "Desconhecido";
            var browsersWithVersionPatterns = [{
              name: "Firefox",
              pattern: /Firefox\/([\d.]+)/
            }, {
              name: "Chrome",
              pattern: /Chrome\/([\d.]+)/
            }, {
              name: "Safari",
              pattern: /Version\/([\d.]+)/
            }, {
              name: "Edge",
              pattern: /Edg\/([\d.]+)/
            }];
            var manufacturer = UNKNOWN;
            var model = UNKNOWN;
            var os = UNKNOWN;
            var version = UNKNOWN;
            if (userAgent.includes("Android")) {
              manufacturer = "Google";
              model = "Android";
            } else if (userAgent.includes("Windows")) {
              manufacturer = model = "Microsoft";
            } else if (userAgent.includes("Linux")) {
              manufacturer = model = "Linux";
            } else {
              manufacturer = "Apple";
              if (userAgent.includes("Mac")) model = "MacOS";else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) model = "iOS";else model = UNKNOWN;
            }

            // Detecta o navegador e sua versão
            for (var _i3 = 0, _browsersWithVersionP = browsersWithVersionPatterns; _i3 < _browsersWithVersionP.length; _i3++) {
              var browser = _browsersWithVersionP[_i3];
              var match = userAgent.match(browser.pattern);
              if (match) {
                os = browser.name;
                version = match[1];
                break;
              }
            }

            // Caso especial para Internet Explorer
            if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
              os = "Internet Explorer";
            }
            return {
              model: model,
              os: os,
              version: version,
              manufacturer: manufacturer
            };
          };
          tracker = function _tracker(subscription) {
            var webpushKeys = null;
            if (subscription) {
              window.innLog("Subscribed the service worker");
              var json = JSON.parse(JSON.stringify(subscription));
              webpushKeys = {
                auth: json.keys.auth,
                p256dh: json.keys.p256dh
              };
            }
            if (!sessionStorage.getItem("inn_session")) {
              window.innLog("Will persist the subscription into the Database");
              sessionStorage.setItem("inn_session", "true");
              var browserDetails = getBrowserDetails();
              var uuid = localStorage.getItem("innHash") || data["var"].uuid;
              localStorage.setItem("innHash", uuid);
              var identifier = localStorage.getItem("identifier") || uuid;
              var registration = localStorage.getItem("registration") || uuid;
              localStorage.setItem("identifier", identifier);
              localStorage.setItem("registration", registration);
              var jsonData = {
                registerSubscriberRequest: {
                  app_token: localStorage.getItem("app_token"),
                  identifier: identifier,
                  registration: registration,
                  platform: browserDetails.os,
                  sdk: "1",
                  device_model: browserDetails.model,
                  device_manufacturer: browserDetails.manufacturer,
                  os_language: navigator.language,
                  os_version: browserDetails.version,
                  app_version: "1.0",
                  uuid: uuid,
                  webpush_keys: webpushKeys,
                  opt_in: data["var"].opt_in
                }
              };
              if (window.custom_field_values) {
                jsonData.registerSubscriberRequest.custom_field = window.custom_field_values;
              }
              if (window.phone_numbe) {
                jsonData.registerSubscriberRequest.phone_number = window.phone_number;
              }
              jsonData = JSON.stringify(jsonData);
              fetch("".concat(apiUrl, "/v1/subscription/"), {
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                body: jsonData
              }).then( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        window.innLog("Subscription persisted successfully.");
                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }())["catch"](function (error) {
                return console.error("Error persisting subscription:", error);
              });
            }
          };
          checkAndSavePushEndpoint = function _checkAndSavePushEndp() {
            window.innLog("Entrou na função checkAndSavePushEndpoint");
            if ("serviceWorker" in navigator && "PushManager" in window) {
              window.innLog("Entrou no if da função checkAndSavePushEndpoint");
              navigator.serviceWorker.ready // Verifica se o Service Worker está pronto
              .then(function (registration) {
                window.innLog("Verificando se o usu\xE1rio j\xE1 est\xE1 inscrito nas notifica\xE7\xF5es push ".concat(registration));
                // Verifica se o usuário já está inscrito nas notificações push
                registration.pushManager.getSubscription().then(function (subscription) {
                  window.innLog("Verificando inscri\xE7\xE3o pushManager ".concat(subscription));
                  if (subscription) {
                    window.innLog("Usuário está inscrito, atualizando registration...");
                    // O usuário já está inscrito, salva o endpoint no localStorage
                    var endpoint = subscription.endpoint;
                    saveEndpointToLocalStorage(endpoint);
                    tracker(subscription);
                  } else {
                    // Usuário não está inscrito, vamos inscrevê-lo
                    window.innLog("Usuário não está inscrito, criando nova inscrição...");
                    var options = {
                      userVisibleOnly: true,
                      applicationServerKey: urlB64ToUint8Array(applicationServerPublicKey) // Chave VAPID
                    };

                    registration.pushManager.subscribe(options).then(function (newSubscription) {
                      var newEndpoint = newSubscription.endpoint;
                      saveEndpointToLocalStorage(newEndpoint);
                      window.innLog("Novo usuário inscrito com sucesso no Push.");
                      sessionStorage.removeItem("inn_session");
                      tracker(newSubscription);
                      data["var"].isSubscribed = true;
                      var checkLocalStorageInterval = setInterval(function () {
                        if (localStorage.getItem("app_token") && localStorage.getItem("identifier")) {
                          clearInterval(checkLocalStorageInterval);
                          if (data["var"].enable_welcome_message) {
                            window.sendPush(data["var"].welcome_title, data["var"].welcome_body, localStorage.getItem("app_token"), localStorage.getItem("identifier"));
                          }
                        }
                      }, 500);
                    })["catch"](function (error) {
                      console.error("Erro ao criar inscrição de push:", error);
                      data["var"].opt_in = 0;
                      tracker(null);
                    });
                  }
                })["catch"](function (error) {
                  console.error("Erro ao acessar a inscrição de push:", error);
                });
              })["catch"](function (error) {
                console.error("Service Worker não está pronto:", error);
              });
            } else {
              window.innLog("Service Worker ou Push Notifications não suportados neste navegador.");
            }
          };
          saveEndpointToLocalStorage = function _saveEndpointToLocalS(endpoint) {
            localStorage.setItem("registration", endpoint);
            window.innLog("Endpoint salvo no localStorage: ".concat(endpoint));
          };
          waitForActivation = function _waitForActivation(registration) {
            return new Promise(function (resolve) {
              if (registration.installing) {
                registration.installing.addEventListener("statechange", function (event) {
                  window.innLog("Service Worker status: ".concat(event.target.state));
                  if (event.target.state === "activated") {
                    resolve(); // Resolve a Promise quando o Service Worker é ativado
                  }
                });
              } else if (registration.waiting) {
                window.innLog("Service Worker está esperando para ser ativado.");
                registration.waiting.addEventListener("statechange", function (event) {
                  window.innLog("Service Worker status: ".concat(event.target.state));
                  if (event.target.state === "activated") {
                    resolve(); // Resolve a Promise quando o Service Worker é ativado
                  }
                });
              } else if (registration.active) {
                window.innLog("Service Worker já está ativo.");
                resolve(); // Se já estiver ativo, resolve imediatamente
              }
            });
          };
          waitForReadyState = function _waitForReadyState() {
            return new Promise(function (resolve) {
              if (navigator.serviceWorker.controller) {
                resolve(); // Já está pronto, resolve imediatamente
              } else {
                window.innLog("Esperando o estado 'ready' do Service Worker...");
                navigator.serviceWorker.ready.then(function () {
                  window.innLog("Service Worker agora está no estado 'ready'.");
                  resolve();
                });
              }
            });
          };
          init = function _init() {
            if ("serviceWorker" in navigator) {
              window.innLog("Service Worker is supported");
              navigator.serviceWorker.getRegistration().then(function (registration) {
                if (registration) {
                  // O Service Worker já está registrado, verificar o push endpoint
                  window.innLog("Service Worker j\xE1 registrado: ".concat(registration));
                  checkAndSavePushEndpoint();
                } else {
                  window.innLog("Registrando service Worker!");
                  var path = data["var"].custom_path.indexOf(window.location.origin) === 0 ? data["var"].custom_path : window.location.origin + data["var"].custom_path;
                  // Registrar o Service Worker se não estiver registrado
                  navigator.serviceWorker.register(path + data["var"].custom_file, {
                    scope: "/"
                  }).then(function (registration) {
                    window.innLog("Service Worker registrado com sucesso:".concat(registration));
                    // Após o registro, verifica o endpoint de push
                    return waitForActivation(registration);
                  }).then(function () {
                    window.innLog("Service Worker ativado! Executando ações subsequentes...");
                    return waitForReadyState(); // Espera o Service Worker estar "ready"
                  }).then(function () {
                    window.innLog("Service Worker ativado! Executando ações pós ready...");
                    checkAndSavePushEndpoint(); // Chamada aqui após a ativação
                  })["catch"](function (error) {
                    console.error("Erro ao registrar o Service Worker:", error);
                  });
                }
              })["catch"](function (error) {
                console.error("Erro ao verificar o Service Worker:", error);
              });
            }
          };
          isPushAllowed = function _isPushAllowed() {
            var checkBrowser = navigator.userAgent;
            if ("Notification" in window) {
              if (Notification.permission === "default" && (checkBrowser.indexOf("Chrome") > -1 || checkBrowser.indexOf("Opera") > -1 || checkBrowser.indexOf("Firefox") > -1 || checkBrowser.indexOf("MSIE") > -1 || navigator.vendor.indexOf("Apple") > -1 && checkBrowser.indexOf("Version") > -1)) {
                window.innLog("Entered the default Permission");
                var check = true;
                var data_refuse = localStorage.getItem("inn_expires");
                data_refuse = new Date(data_refuse);
                var data_atual = new Date();
                if (data_refuse === null) {
                  data_refuse = new Date(data_atual.getTime() - 10 * 60 * 1000);
                  localStorage.setItem("inn_expires", data_refuse);
                }
                if (data_atual <= data_refuse) {
                  check = false;
                  window.innLog("User declined the pre-permission, a new capture attempt will be made on " + data_refuse.getDate() + "/" + (data_refuse.getMonth() + 1) + "/" + data_refuse.getFullYear() + " at " + data_refuse.getHours() + ":" + (data_refuse.getMinutes() < 10 ? "0" : "") + data_refuse.getMinutes());
                }

                //test felps test
                if (data["var"].is_active == 1 && check == true && "PushManager" in window) {
                  var popHTML = '<div class="opt" style="min-width: 35%; margin-top: 20px; border-radius: 15px; display: flex; align-items: center;"><div id="iosAppName-web" style="width: 80%; margin-bottom: 0;"><div class="container-logo" style="display: flex; align-items:center; margin-bottom: 0;"><img class="logoPreview" src="https://storage.googleapis.com/inn-app-icons/' + data["var"].icon + '"><div class="text-message"><p style="font-size: 15px;">' + data["var"].text_prompt + '</p></td></div></div></div><div class="box-btn" style="display: flex; justify-content: center; flex-direction: column-reverse; width: 35%;"><button class="refuse btn btn-primary-nao btn-lg-nao sharp" style="text-decoration: underline; margin: 0 0 0 auto; font-size: 8px;">' + data["var"].text_btn_cancel + '</button> <button style="margin: 0 0 0 auto; font-size: 8px;" class="accept btn btn-primary btn-lg sharp">' + data["var"].text_btn_accept + "</button></div></div>";
                  var popCSS = ".opt { position: fixed; transition: transform 0.6s ease, opacity 0.6s ease; left: 50%; top:0px; transform: translateX(-50%) translateY(-100%); box-shadow: 0 0 9px rgb(0 0 0 / 20%); height: auto; width: 100%; max-width: 450px; border: 0.5px solid white; z-index: 30000; background-color: #" + data["var"].box_background + '; border-radius: 4px; box-shadow: 0 0 12px grey; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Open Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; opacity: 0 }' + ".opt.show { transform: translateX(-50%) translateY(0); opacity: 1;}" + ".opt.open {display:block}" + ".opt2 { box-shadow: 0 0 9px rgb(0 0 0 / 20%); height: auto; margin: auto; width: 100%; max-width: 450px; border: 0.5px solid white; z-index: 30000; top: 10px; position: fixed; background-color: #" + data["var"].box_background + '; border-radius: 4px; box-shadow: 0 0 12px grey; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Open Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }' + "* .opt { padding: 1rem; }" + ".container-logo { margin-bottom: 10%; }" + ".btn { display: inline-block; text-align: center; vertical-align: middle; width: 70%; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; background-image: none; border: 1px solid transparent; border-radius: 4px; padding: 10px 16px; }" + ".btn-lg, .btn-lg-nao { font-size: 12px; line-height: 1.33; border-radius: 6px; }" + ".btn-primary { color: #fff; background-color: #428BCA; border-color: #357EBD; }" + ".sharp { border-radius: 5px; }" + ".btn { padding: 10px; border: 0 none; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }" + ".btn-primary { background: #" + ".timer {display: none;justify-content: center;align-items: center;gap: 10px;padding: 10px 0;}" + ".time-box {display: flex;flex-direction: column;align-items: center;justify-content: center;background-color: #DEDEDE;color: #000000;font-family: 'Arial', sans-serif;font-size: 13px;font-weight: 600;width: 35px;height: 35px;border-radius: 10px;}" + ".unit {font-size: 14px;color: #999;margin-left: -5px;}" + data["var"].btn_hex_color + "; color: #" + data["var"].btn_text_hex_color + "; }" + ".btn-primary-nao { background: #fff; color: #" + data["var"].cancel_link_hex_color + "; }" + ".btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary { background: #" + data["var"].btn_hex_color_hover + "; }" + ".btn-primary-nao:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary { background: transparent; }" + ".btn-primary:active, .btn-primary.active { background: #65A2F5; box-shadow: none;}" + "#iosAppName-web { margin-bottom: 10px; font-size: 0.8em; color: #293F4F; }" + ".logoPreview { margin-right: 20px; width: 65px; height: 65px; border: white; border-radius: 10px; }" + ".text-message { color: #" + data["var"].txt_prompt_hex_color + "; font-weight: 500; font-size: 18px; line-height: 20px; height: auto; word-break: break-word; width: 100%; }" + "@media screen and (max-width:1315px){ .container-logo{ flex-direction: row; justify-content: center; } .text-message { width: 100%; align-self: center; text-align: left; } .btn { padding: 10px; font-size: 7px; } .box-btn { display: flex; justify-content: space-between; } }";
                  document.body.insertAdjacentHTML("beforeend", "<style>" + popCSS + "</style>" + popHTML);
                  var refuse = document.querySelector(".refuse");
                  var accept = document.querySelector(".accept");
                  var optDiv = document.querySelector(".opt");
                  refuse.addEventListener("click", function () {
                    optDiv.classList.remove("show");
                    var expire_refuse = new Date();
                    expire_refuse.setDate(expire_refuse.getDate() + parseInt(data["var"].silent_period));
                    localStorage.setItem("inn_expires", expire_refuse);
                    window.innLog("User declined to receive push notifications, a new attempt will be made in " + parseInt(data["var"].silent_period) + " days.");
                  });
                  accept.addEventListener("click", function () {
                    optDiv.classList.remove("show");
                    Notification.requestPermission().then(function (permission) {
                      if (permission === "granted") {
                        data["var"].opt_in = 1;
                        sessionStorage.removeItem("inn_session");
                        init();
                      } else {
                        var expire_refuse = new Date();
                        expire_refuse.setDate(expire_refuse.getDate() + parseInt(data["var"].silent_period));
                        localStorage.setItem("inn_expires", expire_refuse);
                        window.innLog("User declined to receive push notifications, a new attempt will be made in " + parseInt(data["var"].silent_period) + " days.");
                      }
                    });
                  });
                  window.loadImage("https://storage.googleapis.com/inn-app-icons/" + data["var"].icon + "", function (err, img) {
                    window.innLog("Icon " + data["var"].icon + " loaded, wait Lazy Load Config!");
                    setTimeout(function () {
                      optDiv.classList.add("show");
                      window.innLog("Lazy Load Config finish! Opening Popup");
                    }, data["var"].lazy_load);
                  });
                } else if (check == true) {
                  if (Notification.permission === "allowed") {
                    window.innLog("Permission is already allowed.");
                    data["var"].opt_in = 1;
                  } else if (Notification.permission === "denied") {
                    window.innLog("Permission is already denied");
                    data["var"].opt_in = 0;
                  } else if (Notification.permission === "granted") {
                    window.innLog("Permission is already granted");
                    data["var"].opt_in = 1;
                  } else {
                    window.innLog("Permission not found");
                  }
                  init();
                }
              } else {
                if (Notification.permission === "allowed") {
                  window.innLog("Permission is already allowed.");
                  data["var"].opt_in = 1;
                } else if (Notification.permission === "denied") {
                  window.innLog("Permission is already denied");
                  data["var"].opt_in = 0;
                } else if (Notification.permission === "granted") {
                  window.innLog("Permission is already granted");
                  data["var"].opt_in = 1;
                } else {
                  window.innLog("Permission not found");
                }
                init();
              }
            }
          };
          urlB64ToUint8Array = function _urlB64ToUint8Array(base64String) {
            var padding = "=".repeat((4 - base64String.length % 4) % 4);
            var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
            var rawData = window.atob(base64);
            var outputArray = new Uint8Array(rawData.length);
            for (var i = 0; i < rawData.length; ++i) {
              outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
          };
          updateUser = function _updateUser() {
            var items = [{
              storageType: "localStorage",
              original: "identifier",
              innName: "inn_identifier"
            }, {
              storageType: "localStorage",
              original: "registration",
              innName: "inn_registration"
            }, {
              storageType: "localStorage",
              original: "app_token",
              innName: "inn_app_token"
            }, {
              storageType: "localStorage",
              original: "innHash",
              innName: "inn_hash"
            }, {
              storageType: "sessionStorage",
              original: "inn_session",
              innName: "inn_session"
            }, {
              storageType: "sessionStorage",
              original: "inn_version",
              innName: "inn_version"
            }];
            for (var _i = 0, _items = items; _i < _items.length; _i++) {
              var item = _items[_i];
              var storage = window[item.storageType];
              var inn_wp = storage.getItem("inn_wp");
              if (inn_wp) {
                var inn_wp_array = JSON.parse(inn_wp);
                var innValue = void 0;
                var _iterator = _createForOfIteratorHelper(inn_wp_array),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var obj = _step.value;
                    if (obj[item.innName] !== undefined) {
                      innValue = obj[item.innName];
                      break;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                if (innValue !== undefined) {
                  storage.setItem(item.original, innValue);
                }
              }
            }

            // Loop adicional para criar os itens originais com os valores de inn_wp
            setTimeout(function () {
              for (var _i2 = 0, _items2 = items; _i2 < _items2.length; _i2++) {
                var _item = _items2[_i2];
                var _storage = window[_item.storageType];
                if (_storage.getItem(_item.original)) {
                  var itemValue = _storage.getItem(_item.original);
                  innStorage(_item.storageType, "inn_wp", _item.innName, itemValue);
                }
              }
            }, 1000);
          };
          innStorage = function _innStorage(storageType, storageKey, arrayKey, newValue) {
            var array = JSON.parse(window[storageType].getItem(storageKey)) || [];
            var keyFound = false;
            var value = null;
            array = array.map(function (item) {
              if (arrayKey in item) {
                keyFound = true;
                value = item[arrayKey];
                if (newValue !== undefined) {
                  return _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, arrayKey, newValue));
                }
              }
              return item;
            });
            if (!keyFound && newValue !== undefined) {
              array.push(_defineProperty({}, arrayKey, newValue));
            }
            window[storageType].setItem(storageKey, JSON.stringify(array));
            return newValue === undefined ? value : true;
          };
          //start innLog function to filter console.log
          window.innLog = function (e) {
            if (data["var"].enable_log) {
              console.log(e);
            }
          };
          //end innLog function to filter console.log

          window.innStorage = innStorage;
          window.updateUser = updateUser;
          //end update local storage array funcion
          data = {};
          _context4.next = 22;
          return response.json();
        case 22:
          data["var"] = _context4.sent;
          localStorage.setItem("app_token", data["var"].token);
          data["var"].enable_log = data["var"].enable_log == "1";
          data["var"].form_integration = data["var"].form_integration === "1" || false;
          data["var"].custom_file = data["var"].custom_file || "sw.js";
          data["var"].custom_path = data["var"].custom_path || "/";
          data["var"].site_url = top.location.href;
          data["var"].icon = data["var"].icon || "";
          data["var"].text_prompt = data["var"].text_prompt || "Ative as notificações para receber nossas novidades!";
          data["var"].text_btn_accept = data["var"].text_btn_accept || "Desejo receber";
          data["var"].text_btn_cancel = data["var"].text_btn_cancel || "Não obrigado";
          data["var"].btn_hex_color = data["var"].btn_hex_color || "0091FF";
          data["var"].btn_hex_color_hover = data["var"].btn_hex_color_hover || "58B7FF";
          data["var"].btn_text_hex_color = data["var"].btn_text_hex_color || "fff";
          data["var"].cancel_link_hex_color = data["var"].cancel_link_hex_color || "A4A4A4";
          data["var"].box_background = data["var"].box_background || "fff";
          data["var"].txt_prompt_hex_color = data["var"].txt_prompt_hex_color || "525252";
          data["var"].lazy_load = data["var"].lazy_load || "1";
          data["var"].welcome_title = data["var"].welcome_title || "";
          data["var"].welcome_body = data["var"].welcome_body || "";
          data["var"].welcome_url = data["var"].welcome_url || "";
          data["var"].enable_welcome_message === "1" || false;
          data["var"].is_active = data["var"].is_active || "0";
          data["var"].silent_period = data["var"].silent_period || "-1";
          data["var"].opt_in = 0;
          data["var"].isSubscribed = false;
          data["var"].onSiteMessage = data["var"].onSiteMessage || {};

          //INICIO - FAZ O CADASTRO INICIAL
          inapp = data["var"].onSiteMessage;
          if (inapp.trigger_count === null) {
            inapp.trigger_count = 0;
          }
          _triggerCount = true;
          trigger_count = localStorage.getItem("trigger_count");
          trigger_count = trigger_count ? parseInt(trigger_count) + 1 : 1;
          if (parseInt(localStorage.getItem("trigger_count")) <= inapp.trigger_count) {
            _triggerCount = false;
          } else {
            localStorage.setItem("trigger_count", trigger_count);
          }
          if (inapp.on_site_message !== undefined && inapp.on_site_message === true && _triggerCount) {
            // Função para converter data de DD/MM/YYYY para YYYY-MM-DD
            formatDate = function formatDate(dateStr) {
              var parts = dateStr.split("/");
              return parts[2] + "-" + parts[1] + "-" + parts[0];
            };
            updateCountdown = function updateCountdown(dataDate) {
              var spliceDate = dataDate.split(" ");
              var hourMin = spliceDate[1].split(":");
              var date = spliceDate[0];
              var hour = hourMin[0];
              var minute = hourMin[1];

              // Verificar se a data foi preenchida corretamente
              if (!date) {
                return;
              }

              // Converter a data para o formato correto (YYYY-MM-DD)
              var formatedDate = formatDate(date);

              // Criar a data final para a contagem regressiva
              var endTime = new Date(formatedDate + "T" + hour + ":" + minute + ":00");

              // Limpar o intervalo anterior antes de iniciar um novo
              clearInterval(countdownInterval);

              // Função de contagem regressiva
              countdownInterval = setInterval(function () {
                var now = new Date().getTime();
                var distance = endTime - now;
                if (hour == "00") {
                  distance = -1;
                }
                if (distance < 0) {
                  clearInterval(countdownInterval);
                  document.querySelector(".time-box-day") != undefined ? document.querySelector(".time-box-day").innerHTML = "00" : null;
                  document.querySelector(".time-box-hour") != undefined ? document.querySelector(".time-box-hour").innerHTML = "00" : null;
                  document.querySelector(".time-box-minute") != undefined ? document.querySelector(".time-box-minute").innerHTML = "00" : null;
                  document.querySelector(".time-box-second") != undefined ? document.querySelector(".time-box-second").innerHTML = "00" : null;
                  return;
                }

                // Calcular o total de dias, horas, minutos e segundos restantes
                var totalDays = Math.floor(distance / (1000 * 60 * 60 * 24)); // Total de dias
                var totalHours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); // Horas restantes dentro do dia atual
                var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)); // Minutos restantes dentro da hora atual
                var seconds = Math.floor(distance % (1000 * 60) / 1000); // Segundos restantes

                // Atualizar o preview da contagem
                document.querySelector(".time-box-day") != undefined ? document.querySelector(".time-box-day").innerHTML = ("0" + totalDays).slice(-2) : null;
                document.querySelector(".time-box-hour") != undefined ? document.querySelector(".time-box-hour").innerHTML = ("0" + totalHours).slice(-2) : null;
                document.querySelector(".time-box-minute") != undefined ? document.querySelector(".time-box-minute").innerHTML = ("0" + minutes).slice(-2) : null;
                document.querySelector(".time-box-second") != undefined ? document.querySelector(".time-box-second").innerHTML = ("0" + seconds).slice(-2) : null;
              }, 1000);
            };
            fadeOut = function fadeOut(el, callback) {
              el.style.opacity = 1;
              (function fade() {
                if ((el.style.opacity -= 0.1) < 0) {
                  el.parentNode.removeChild(el);
                  if (callback) callback();
                } else {
                  requestAnimationFrame(fade);
                }
              })();
            };
            inappSetupButton = function inappSetupButton(button, hasText, bgColor, txtColor, text, link, font_family, link_target) {
              if (!hasText) {
                button.style.display = "none";
              } else {
                button.style.backgroundColor = bgColor;
                button.style.color = txtColor;
                button.textContent = text;
                button.href = link;
                button.style.fontFamily = font_family;
                button.target = link_target ? link_target : "_blank";
              }
            };
            html = "\n    <div id=\"inapp_popup\" style=\"display: none; background-color: #ffffff; width: 95%; max-width: 470px; position: fixed; z-index:999999999; border: " + inapp.card_border_color + "; border-radius: 10px;\">\n      <img id=\"inapp_popup_btn_close\" src=\"https://storage.googleapis.com/imagepush/image/2024-10-24_05-45-50-pm_close_button.svg\" alt=\"Bot\xE3o de fechar\" style=\"position: absolute;top: 15px;right: 15px;z-index: 999;border: none;background: none;margin: 0px;cursor: pointer;width: 12px;\"/>\n      <a id=\"bg_img_action_link\" href=\"#\" style=\"padding: 0px; display: block; text-decoration:none\">\n        <div style=\"display: flex; padding: 10px\">\n          <div style=\"display: flex; flex: 0 1 auto; margin-right: 10px; justify-content: center; align-items: center; width: auto;\">\n            <img id=\"inapp_popup_icon\" src=\"\" alt=\"Title Image\" style=\"width: 75px !important; height: 75px !important; max-width:75px !important; max-height:75px !important; border-radius: 10px;\">\n          </div>\n          <div style=\"flex-grow: 1; display: flex; flex-direction: column; justify-content: center;\">\n            <h2 style=\"width:100%;font-size: 16px; font-weight: bold; margin:0px 0px 6px 0px; text-align: left; line-height: 1.3em;\" id=\"popupTitle\"></h2>\n            <p style=\"font-size: 15px; margin: 0px; text-align: left; line-height: 1.4em;\" id=\"popupBody\"></p>\n          </div>\n        </div>\n        <div style=\"width: 100%; padding: 0; text-align: right;\">\n          <div id=\"carousel\" class=\"carousel slide\" style=\"margin: 0px; position: relative; display: flex; overflow: hidden;\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\" style=\"display: flex; width: 100%; transition: transform 0.5s ease-in-out;\"></div>\n            <a class=\"carousel-control-prev\" href=\"#carousel\" role=\"button\" data-slide=\"prev\" style=\"position: absolute; top: 50%; transform: translateY(-50%); cursor: pointer; left: 10px; text-decoration: none; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;\">\n              <img src=\"https://storage.googleapis.com/imagepush/image/2024-10-24_05-45-00-pm_arrow_left.svg\" alt=\"Imagem de uma seta apontando para a esquerda\" />\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carousel\" role=\"button\" data-slide=\"next\" style=\"position: absolute; top: 50%; transform: translateY(-50%); cursor: pointer; right: 10px; text-decoration: none; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;\">\n              <img src=\"https://storage.googleapis.com/imagepush/image/2024-10-24_05-57-07-pm_arrow_right.svg\" alt=\"Imagem de uma seta apontando para a direita\" />\n            </a>\n          </div>\n          <div class=\"timer\">\n             <div class=\"time-box time-box-day\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: " + inapp.timer_bg_color + "; color: " + inapp.body_font_color + "; font-family: 'Arial', sans-serif; font-size: 13px; font-weight: 600; width: 35px; height: 35px; border-radius: 10px;\">00</div><span class=\"unit\" style=\"font-size: 14px; color: " + inapp.body_font_color + "; margin-left: -5px;\">d</span>\n             <div class=\"time-box time-box-hour\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: " + inapp.timer_bg_color + "; color: " + inapp.body_font_color + "; font-family: 'Arial', sans-serif; font-size: 13px; font-weight: 600; width: 35px; height: 35px; border-radius: 10px;\">2</div><span class=\"unit\" style=\"font-size: 14px; color: " + inapp.body_font_color + "; margin-left: -5px;\">h</span>\n             <div class=\"time-box time-box-minute\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: " + inapp.timer_bg_color + "; color: " + inapp.body_font_color + "; font-family: 'Arial', sans-serif; font-size: 13px; font-weight: 600; width: 35px; height: 35px; border-radius: 10px;\">30</div><span class=\"unit\" style=\"font-size: 14px; color: " + inapp.body_font_color + "; margin-left: -5px;\">m</span>\n             <div class=\"time-box time-box-second\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: " + inapp.timer_bg_color + "; color: " + inapp.body_font_color + "; font-family: 'Arial', sans-serif; font-size: 13px; font-weight: 600; width: 35px; height: 35px; border-radius: 10px;\">40</div><span class=\"unit\" style=\"font-size: 14px; color: " + inapp.body_font_color + "; margin-left: -5px;\">s</span>\n          </div>\n          <a id=\"inapp_btn_left\" style=\"display: inline-block; margin: 10px 10px 10px 0px; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 12px; text-transform: uppercase;\"></a>\n          <a id=\"inapp_btn_right\" style=\"display: inline-block; margin: 10px 10px 10px 0px; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 12px; text-transform: uppercase;\"></a>\n        </div>\n      </a>\n      <a id=\"inapp_popup_brand_link\" target=\"_blank\" style=\"display:flex; align-items:center; justify-content:flex-start; gap:10px; box-sizing: border-box; width: 100%; background-color: #f3f3f3; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; color: #929292; padding: 10px; text-decoration: none;\">\n        <span style=\"font-family: Arial, sans-serif; font-size: 12px; color:#dadada\"></span><img src=\"\" alt=\"Inngage\" style=\"max-height:15px\">\n      </a>\n    </div>";
            document.body.insertAdjacentHTML("beforeend", html);
            timestamp = new Date().getTime();
            inapp_popup = document.querySelector("#inapp_popup");
            has_btn_right_txt = "btn_right_txt" in inapp && inapp.btn_right_txt !== "";
            has_btn_left_txt = "btn_left_txt" in inapp && inapp.btn_left_txt !== "";
            cardPositionX = inapp.cardPositionX.toLowerCase();
            cardPositionY = inapp.cardPositionY.toLowerCase(); // Defina todos os estilos para 'auto' por padrão
            inapp_popup.style.top = "auto";
            inapp_popup.style.bottom = "auto";
            inapp_popup.style.left = "auto";
            inapp_popup.style.right = "auto";
            if (cardPositionY === "top") {
              inapp_popup.style.top = "10px";
            } else if (cardPositionY === "bottom") {
              inapp_popup.style.bottom = "10px";
            } else {
              inapp_popup.style.top = "50%";
              inapp_popup.style.transform += " translateY(-50%)";
            }
            if (cardPositionX === "left") {
              inapp_popup.style.left = "10px";
            } else if (cardPositionX === "right") {
              inapp_popup.style.right = "10px";
            } else {
              inapp_popup.style.left = "50%";
              inapp_popup.style.transform += " translateX(-50%)";
            }
            if (inapp.background_color) {
              inapp_popup.style.background = inapp.background_color;
            }
            if (inapp.card_border_color) {
              inapp_popup.style.border = "1px solid " + inapp.card_border_color;
            }

            // Mostra a sombra de fundo se necessário
            if (inapp.background_shadow) {
              // Cria a div
              div = document.createElement("div");
              div.id = "inapp_popup_shadow";
              div.style = "display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999999998;";
              document.body.insertAdjacentElement("beforeend", div);
            }
            if (inapp.hasOwnProperty("hide_brand") && (inapp.hide_brand === false || inapp.hide_brand === 0 || inapp.hide_brand === "0")) {
              inapp.hide_brand = false;
              document.querySelector("#inapp_popup_brand_link img").src = inapp.brand_img_url + "?" + timestamp;
              document.querySelector("#inapp_popup_brand_link span").innerHTML = inapp.brand_display_text;
              document.getElementById("inapp_popup_brand_link").href = inapp.brand_url;
              document.getElementById("inapp_popup_brand_link").style.backgroundColor = inapp.brand_bg_color;
            } else {
              inapp.hide_brand = true;
              document.getElementById("inapp_popup_brand_link").style.display = "none";
            }
            if (!inapp.bg_img_action_link || inapp.bg_img_action_link === "") {
              bg_img_action_link = document.querySelector("#bg_img_action_link");
              _div = document.createElement("div");
              _div.id = "bg_img_action_link";
              _div.innerHTML = bg_img_action_link.innerHTML;
              bg_img_action_link.parentNode.replaceChild(_div, bg_img_action_link);
            } else {
              document.querySelector("#bg_img_action_link").href = inapp.bg_img_action_link;
            }

            // Define título e corpo do popup
            document.querySelector("#popupTitle").textContent = inapp.title;
            document.querySelector("#popupTitle").style.fontFamily = inapp.font_family;
            document.querySelector("#popupTitle").style.color = inapp.title_font_color;
            document.querySelector("#popupBody").textContent = inapp.body;
            document.querySelector("#popupBody").style.fontFamily = inapp.font_family;
            document.querySelector("#popupBody").style.color = inapp.body_font_color;

            // Define a imagem do título
            document.querySelector("#inapp_popup_icon").src = inapp.icon + "?" + timestamp;

            //Adiciona Countdown no popup
            countdown_timer = document.querySelector(".timer");
            if (inapp.hasOwnProperty("limit_date")) {
              countdown_timer.style = "display: flex; justify-content: center; align-items: center;gap: 10px; padding: 10px 0;";
              updateCountdown(inapp.limit_date);
            } else {
              countdown_timer.style.display = "none";
            }

            // Adiciona imagens ao carrossel se houver e se a propriedade "carousel" for verdadeira
            carousel = document.querySelector("#carousel .carousel-inner");
            if (inapp.rich_content.carousel) {
              inapp.rich_content.images.forEach(function (imageData, index) {
                var _imageData$open;
                var imgKey = "img".concat(index + 1);
                var url_img = "url_img".concat(index + 1);
                var url_target = (_imageData$open = imageData.open) !== null && _imageData$open !== void 0 ? _imageData$open : "_blank";
                var activeClass = index === 0 ? "active" : "";
                var carouselItem = document.createElement("div");
                carouselItem.className = "carousel-item " + activeClass;
                carouselItem.style.width = "100%";
                if (imageData[url_img]) {
                  carouselItem.innerHTML = "<a href=\"".concat(imageData[url_img], "\" target=\"").concat(url_target, "\"><img src=\"").concat(imageData[imgKey], "\" alt=\"Carousel Image\" style=\"display: block; width: 100%;\"></a>");
                } else {
                  carouselItem.innerHTML = "<img src=\"".concat(imageData[imgKey], "\" alt=\"Carousel Image\" style=\"display: block; width: 100%;\">");
                }
                carousel.appendChild(carouselItem);
                if (inapp.hide_brand && has_btn_right_txt === false && has_btn_left_txt === false) {
                  carouselItem.querySelector("img").style.borderBottomLeftRadius = "10px";
                  carouselItem.querySelector("img").style.borderBottomRightRadius = "10px";
                }
              });
              carousel = document.querySelector(".carousel-inner");
              carousel.style.width = inapp.rich_content.images.length * 100 + "%"; // Atualizado aqui
              slides = Array.from(carousel.children);
              prevButton = document.querySelector(".carousel-control-prev");
              nextButton = document.querySelector(".carousel-control-next");
              slideWidth = slides.length > 0 ? slides[0].getBoundingClientRect().width : 0;
              currentSlide = 0; // Arranja os slides um ao lado do outro
              slides.forEach(function (slide, index) {
                slide.style.left = slideWidth * index + "px";
              });
              prevButton.addEventListener("click", function (event) {
                event.preventDefault();
                var imageWidth = 0;
                var slideItems = document.querySelectorAll("#inapp_popup .carousel-item");
                slideItems.forEach(function (slideItem) {
                  if (slideItem.classList.contains("active")) {
                    var image = slideItem.querySelector("img");
                    if (image) {
                      imageWidth = image.getBoundingClientRect().width;
                    }
                  }
                });
                if (currentSlide === 0) {
                  currentSlide = slides.length - 1;
                } else {
                  currentSlide--;
                }
                carousel.style.transform = "translateX(-" + imageWidth * currentSlide + "px)";
              });
              nextButton.addEventListener("click", function (event) {
                event.preventDefault();
                var imageWidth = 0;
                var slideItems = document.querySelectorAll("#inapp_popup .carousel-item");
                slideItems.forEach(function (slideItem) {
                  if (slideItem.classList.contains("active")) {
                    var image = slideItem.querySelector("img");
                    if (image) {
                      imageWidth = image.getBoundingClientRect().width;
                    }
                  }
                });
                if (currentSlide === slides.length - 1) {
                  currentSlide = 0;
                } else {
                  currentSlide++;
                }
                carousel.style.transform = "translateX(-" + imageWidth * currentSlide + "px)";
              });
              // Se houver apenas uma imagem, oculte as setas de próximo e anterior
              if (inapp.rich_content.images.length === 1) {
                document.querySelector(".carousel-control-prev").style.display = "none";
                document.querySelector(".carousel-control-next").style.display = "none";
              }

              // Mostra o carrossel
              document.querySelector("#carousel").style.display = "block";
            } else {
              // Oculta o carousel se a propriedade "carousel" for falsa
              document.querySelector("#carousel").style.display = "none";
            }

            // Configura botões
            inapp_btn_left = document.querySelector("#inapp_btn_left");
            inapp_btn_right = document.querySelector("#inapp_btn_right");
            if (has_btn_left_txt) {
              inappSetupButton(inapp_btn_left, has_btn_left_txt, inapp.btn_left_bg_color, inapp.btn_left_txt_color, inapp.btn_left_txt, inapp.btn_left_link, inapp.font_family, inapp.btn_left_target);
            } else {
              inapp_btn_left.style.display = "none";
            }
            if (has_btn_right_txt) {
              inappSetupButton(inapp_btn_right, has_btn_right_txt, inapp.btn_right_bg_color, inapp.btn_right_txt_color, inapp.btn_right_txt, inapp.btn_right_link, inapp.font_family, inapp.btn_right_target);
            } else {
              inapp_btn_right.style.display = "none";
            }
            inapp_popup.style.display = "block";
            document.addEventListener("click", function (event) {
              var closeButton = document.querySelector("#inapp_popup_btn_close");
              var closeShadow = document.querySelector("#inapp_popup_shadow");
              if (event.target == closeButton || event.target == closeShadow) {
                fadeOut(document.querySelector("#inapp_popup"), function () {
                  if (document.querySelector("#inapp_popup_shadow")) {
                    setTimeout(function () {
                      fadeOut(document.querySelector("#inapp_popup_shadow"));
                    }, 200);
                  }
                });
              }
            });
            document.addEventListener("keydown", function (event) {
              if (event.keyCode === 27) {
                var popup = document.querySelector("#inapp_popup");
                var shadow = document.querySelector("#inapp_popup_shadow");
                if (popup) {
                  fadeOut(popup, function () {
                    if (shadow) {
                      setTimeout(function () {
                        fadeOut(shadow);
                      }, 200);
                    }
                  });
                }
              }
            });
          }
          //FIM - FAZ O CADASTRO INICIAL

          //SALVANDO ITENS EM STORAGE
          sessionStorage.inn_version = "1.67";

          //VARIAVEIS
          email = window.email || null;
          applicationServerPublicKey = "BK3Q7j8fcGFws03RiU5XakzDJ7KGEiRhdIX2H5U8eNmhhkdHT_j0_SD09KL96aFZOH_bsjr3uRuQPTd77SRP3DI";
          apiUrl = "https://api.inngage.com.br";
          window.data = data;
          // Define uma função para carregar uma imagem com callback
          window.loadImage = function (src, callback) {
            var image = new Image();
            image.onload = function () {
              callback(null, image);
            };
            image.onerror = function () {
              callback(new Error("Não foi possível carregar a imagem com o URL: " + src));
            };
            image.src = src;
          };
          window.hashCode = function (str) {
            var hash = 0,
              i,
              chr;
            for (i = 0; i < str.length; i++) {
              chr = str.charCodeAt(i);
              hash = (hash << 5) - hash + chr;
              hash |= 0;
            }
            return hash.toString(36);
          };

          //INICIO - FAZ O CADASTRO INICIAL
          if (!localStorage.getItem("registration")) {
            data["var"].opt_in = 0;
            tracker(null);
          }
          //FIM - FAZ O CADASTRO INICIAL

          isPushAllowed();

          // Função para garantir que o estado "ready" seja alcançado

          // Função para salvar o endpoint no localStorage

          // Função para verificar e salvar o endpoint do Push Manager

          // async function onSubmitForm(event) {
          //   event.preventDefault();

          //   const formData = new FormData();
          //   const fieldTypes = [
          //     "text",
          //     "radio",
          //     "checkbox",
          //     "email",
          //     "hidden",
          //     "tel",
          //     "select",
          //     "textarea",
          //   ];

          //   Array.from(event.target.elements).forEach((field) => {
          //     var fieldName = field.getAttribute("data-inn-input-name");
          //     var fieldValue = field.value;

          //     if (
          //       field.tagName.toLowerCase() === "select" &&
          //       (field.id || field.getAttribute("data-inn-input-name"))
          //     ) {
          //       if (fieldTypes.includes(field.type)) {
          //         formData.append(fieldName, fieldValue);
          //       }
          //     } else if (fieldTypes.includes(field.type)) {
          //       formData.append(fieldName, fieldValue);
          //     }
          //   });

          //   const additionalData = [
          //     ["identifier", localStorage.getItem("identifier")],
          //     ["innHash", localStorage.getItem("innHash")],
          //     ["registration", localStorage.getItem("registration")],
          //     ["app_token", localStorage.getItem("app_token")],
          //     ["urlDomain", window.location.hostname],
          //     ["urlPath", window.location.pathname],
          //     ["formName", event.target.getAttribute("data-inn-form-name")],
          //     ["inn_version", sessionStorage.inn_version],
          //     ["page_url", window.location.href],
          //     ["page_name", document.title],
          //   ];

          //   additionalData.forEach(([key, value]) => formData.append(key, value));

          //   window.innLog("Start fn formWebHook");
          //   await fetch(apiUrl + "/v3/formWebhook/", {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(Object.fromEntries(formData)),
          //   })
          //     .then((response) => response.json())
          //     .then((data) => {
          //       if (data.add_subscription.success === true) {
          //         localStorage.setItem("identifier", data.add_subscription.identifier);
          //         window.innLog(
          //           "set new identifier: " + data.add_subscription.identifier
          //         );
          //       }
          //     })
          //     .catch((error) => console.error(error));
          //   window.innLog("Stop fn formWebHook");

          //   setTimeout(() => {
          //     window.innLog("Continue form fn ");
          //     // event.target.submit();
          //   }, 2000);
          // }
          window.newCustomField = newCustomField;
          window.sendPush = sendPush;
          window.newEvent = newEvent;
          if (data["var"].form_integration) {
            initForms();
            setInterval(initForms, 2000);
          }
        case 69:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());